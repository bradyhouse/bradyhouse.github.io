var Gm=Object.defineProperty;var Wm=(n,e,t)=>e in n?Gm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ne=(n,e,t)=>Wm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},Lr=[],bi=()=>{},wd=()=>!1,al=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ll=n=>n.startsWith("onUpdate:"),Yt=Object.assign,Iu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xm=Object.prototype.hasOwnProperty,mt=(n,e)=>Xm.call(n,e),Ze=Array.isArray,Ir=n=>Ho(n)==="[object Map]",Jr=n=>Ho(n)==="[object Set]",gf=n=>Ho(n)==="[object Date]",st=n=>typeof n=="function",Ot=n=>typeof n=="string",ai=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Ed=n=>(vt(n)||st(n))&&st(n.then)&&st(n.catch),Td=Object.prototype.toString,Ho=n=>Td.call(n),Ym=n=>Ho(n).slice(8,-1),Ad=n=>Ho(n)==="[object Object]",Uu=n=>Ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mo=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$m=/-\w/g,ii=cl(n=>n.replace($m,e=>e.slice(1).toUpperCase())),qm=/\B([A-Z])/g,Es=cl(n=>n.replace(qm,"-$1").toLowerCase()),Cd=cl(n=>n.charAt(0).toUpperCase()+n.slice(1)),wl=cl(n=>n?`on${Cd(n)}`:""),Si=(n,e)=>!Object.is(n,e),Ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ul=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Km=n=>{const e=Ot(n)?Number(n):NaN;return isNaN(e)?n:e};let vf;const fl=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bn(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ot(i)?Qm(i):Bn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ot(n)||vt(n))return n}const jm=/;(?![^(]*\))/g,Zm=/:([^]+)/,Jm=/\/\*[^]*?\*\//g;function Qm(n){const e={};return n.replace(Jm,"").split(jm).forEach(t=>{if(t){const i=t.split(Zm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wt(n){let e="";if(Ot(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Wt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const eg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tg=Lu(eg);function Pd(n){return!!n||n===""}function ng(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Qr(n[i],e[i]);return t}function Qr(n,e){if(n===e)return!0;let t=gf(n),i=gf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ai(n),i=ai(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?ng(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qr(n[o],e[o]))return!1}}return String(n)===String(e)}function Fu(n,e){return n.findIndex(t=>Qr(t,e))}const Dd=n=>!!(n&&n.__v_isRef===!0),cn=n=>Ot(n)?n:n==null?"":Ze(n)||vt(n)&&(n.toString===Td||!st(n.toString))?Dd(n)?cn(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Dd(e)?Ld(n,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[El(i,r)+" =>"]=s,t),{})}:Jr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>El(t))}:ai(e)?El(e):vt(e)&&!Ze(e)&&!Ad(e)?String(e):e,El=(n,e="")=>{var t;return ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let An;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=An;try{return An=this,e()}finally{An=t}}}on(){++this._on===1&&(this.prevScope=An,An=this)}off(){this._on>0&&--this._on===0&&(An=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hl(n){return new Id(n)}function ig(){return An}let Et;const Tl=new WeakSet;class Ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tl.has(this)&&(Tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),Od(this);const e=Et,t=si;Et=this,si=!0;try{return this.fn()}finally{Bd(this),Et=e,si=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let Fd=0,So,bo;function Nd(n,e=!1){if(n.flags|=8,e){n.next=bo,bo=n;return}n.next=So,So=n}function Nu(){Fd++}function Ou(){if(--Fd>0)return;if(bo){let e=bo;for(bo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;So;){let e=So;for(So=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bu(i),sg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Sc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Po)||(n.globalVersion=Po,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Sc(n))))return;n.flags|=2;const e=n.dep,t=Et,i=si;Et=n,si=!0;try{Od(n);const s=n.fn(n._value);(e.version===0||Si(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,si=i,Bd(n),n.flags&=-3}}function Bu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let si=!0;const zd=[];function $i(){zd.push(si),si=!1}function qi(){const n=zd.pop();si=n===void 0?!0:n}function _f(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Po=0;class rg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ku{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!si||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new rg(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Hd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Po++,this.notify(e)}notify(e){Nu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ou()}}}function Hd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bc=new WeakMap,Ys=Symbol(""),wc=Symbol(""),Do=Symbol("");function un(n,e,t){if(si&&Et){let i=bc.get(n);i||bc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ku),s.map=i,s.key=t),s.track()}}function ki(n,e,t,i,s,r){const o=bc.get(n);if(!o){Po++;return}const a=l=>{l&&l.trigger()};if(Nu(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&Uu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Do||!ai(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Do)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ys)),Ir(n)&&a(o.get(wc)));break;case"delete":l||(a(o.get(Ys)),Ir(n)&&a(o.get(wc)));break;case"set":Ir(n)&&a(o.get(Ys));break}}Ou()}function ar(n){const e=ft(n);return e===n?e:(un(e,"iterate",Do),$n(n)?e:e.map(li))}function dl(n){return un(n=ft(n),"iterate",Do),n}function _i(n,e){return Ki(n)?Vr($s(n)?li(e):e):li(e)}const og={__proto__:null,[Symbol.iterator](){return Al(this,Symbol.iterator,n=>_i(this,n))},concat(...n){return ar(this).concat(...n.map(e=>Ze(e)?ar(e):e))},entries(){return Al(this,"entries",n=>(n[1]=_i(this,n[1]),n))},every(n,e){return Ai(this,"every",n,e,void 0,arguments)},filter(n,e){return Ai(this,"filter",n,e,t=>t.map(i=>_i(this,i)),arguments)},find(n,e){return Ai(this,"find",n,e,t=>_i(this,t),arguments)},findIndex(n,e){return Ai(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ai(this,"findLast",n,e,t=>_i(this,t),arguments)},findLastIndex(n,e){return Ai(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ai(this,"forEach",n,e,void 0,arguments)},includes(...n){return Cl(this,"includes",n)},indexOf(...n){return Cl(this,"indexOf",n)},join(n){return ar(this).join(n)},lastIndexOf(...n){return Cl(this,"lastIndexOf",n)},map(n,e){return Ai(this,"map",n,e,void 0,arguments)},pop(){return so(this,"pop")},push(...n){return so(this,"push",n)},reduce(n,...e){return xf(this,"reduce",n,e)},reduceRight(n,...e){return xf(this,"reduceRight",n,e)},shift(){return so(this,"shift")},some(n,e){return Ai(this,"some",n,e,void 0,arguments)},splice(...n){return so(this,"splice",n)},toReversed(){return ar(this).toReversed()},toSorted(n){return ar(this).toSorted(n)},toSpliced(...n){return ar(this).toSpliced(...n)},unshift(...n){return so(this,"unshift",n)},values(){return Al(this,"values",n=>_i(this,n))}};function Al(n,e,t){const i=dl(n),s=i[e]();return i!==n&&!$n(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ag=Array.prototype;function Ai(n,e,t,i,s,r){const o=dl(n),a=o!==n&&!$n(n),l=o[e];if(l!==ag[e]){const f=l.apply(n,r);return a?li(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,_i(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function xf(n,e,t,i){const s=dl(n),r=s!==n&&!$n(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=_i(n,c)),t.call(this,c,_i(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?_i(n,l):l}function Cl(n,e,t){const i=ft(n);un(i,"iterate",Do);const s=i[e](...t);return(s===-1||s===!1)&&Vu(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function so(n,e,t=[]){$i(),Nu();const i=ft(n)[e].apply(n,t);return Ou(),qi(),i}const lg=Lu("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function cg(n){ai(n)||(n=String(n));const e=ft(this);return un(e,"has",n),e.hasOwnProperty(n)}class Gd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?xg:$d:r?Yd:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=og[t]))return l;if(t==="hasOwnProperty")return cg}const a=Reflect.get(e,t,mn(e)?e:i);if((ai(t)?Vd.has(t):lg(t))||(s||un(e,"get",t),r))return a;if(mn(a)){const l=o&&Uu(t)?a:a.value;return s&&vt(l)?Tc(l):l}return vt(a)?s?Tc(a):Ur(a):a}}class Wd extends Gd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&Uu(t);if(!this._isShallow){const c=Ki(r);if(!$n(i)&&!Ki(i)&&(r=ft(r),i=ft(i)),!o&&mn(r)&&!mn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,mn(e)?e:s);return e===ft(s)&&(a?Si(i,r)&&ki(e,"set",t,i):ki(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ki(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ai(t)||!Vd.has(t))&&un(e,"has",t),i}ownKeys(e){return un(e,"iterate",Ze(e)?"length":Ys),Reflect.ownKeys(e)}}class ug extends Gd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fg=new Wd,hg=new ug,dg=new Wd(!0);const Ec=n=>n,Ko=n=>Reflect.getPrototypeOf(n);function pg(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Ir(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ec:e?Vr:li;return!e&&un(r,"iterate",l?wc:Ys),Yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function jo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mg(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(Si(s,a)&&un(o,"get",s),un(o,"get",a));const{has:l}=Ko(o),c=e?Ec:n?Vr:li;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&un(ft(s),"iterate",Ys),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(Si(s,a)&&un(o,"has",s),un(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Ec:n?Vr:li;return!n&&un(l,"iterate",Ys),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Yt(t,n?{add:jo("add"),set:jo("set"),delete:jo("delete"),clear:jo("clear")}:{add(s){const r=ft(this),o=Ko(r),a=ft(s),l=!e&&!$n(s)&&!Ki(s)?a:s;return o.has.call(r,l)||Si(s,l)&&o.has.call(r,s)||Si(a,l)&&o.has.call(r,a)||(r.add(l),ki(r,"add",l,l)),this},set(s,r){!e&&!$n(r)&&!Ki(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Ko(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Si(r,u)&&ki(o,"set",s,r):ki(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Ko(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ki(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&ki(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pg(s,n,e)}),t}function zu(n,e){const t=mg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const gg={get:zu(!1,!1)},vg={get:zu(!1,!0)},_g={get:zu(!0,!1)};const Xd=new WeakMap,Yd=new WeakMap,$d=new WeakMap,xg=new WeakMap;function yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mg(n){return n.__v_skip||!Object.isExtensible(n)?0:yg(Ym(n))}function Ur(n){return Ki(n)?n:Hu(n,!1,fg,gg,Xd)}function pl(n){return Hu(n,!1,dg,vg,Yd)}function Tc(n){return Hu(n,!0,hg,_g,$d)}function Hu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Mg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function $s(n){return Ki(n)?$s(n.__v_raw):!!(n&&n.__v_isReactive)}function Ki(n){return!!(n&&n.__v_isReadonly)}function $n(n){return!!(n&&n.__v_isShallow)}function Vu(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function Sg(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const li=n=>vt(n)?Ur(n):n,Vr=n=>vt(n)?Tc(n):n;function mn(n){return n?n.__v_isRef===!0:!1}function Ae(n){return bg(n,!1)}function bg(n,e){return mn(n)?n:new wg(n,e)}class wg{constructor(e,t){this.dep=new ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:li(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||$n(e)||Ki(e);e=i?e:ft(e),Si(e,t)&&(this._rawValue=e,this._value=i?e:li(e),this.dep.trigger())}}function yt(n){return mn(n)?n.value:n}const Eg={get:(n,e,t)=>e==="__v_raw"?n:yt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return mn(s)&&!mn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function qd(n){return $s(n)?n:new Proxy(n,Eg)}class Tg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ag(n,e,t=!1){let i,s;return st(n)?i=n:(i=n.get,s=n.set),new Tg(i,s,t)}const Zo={},Wa=new WeakMap;let Os;function Cg(n,e=!1,t=Os){if(t){let i=Wa.get(t);i||Wa.set(t,i=[]),i.push(n)}}function Rg(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=g=>s?g:$n(g)||s===!1||s===0?zi(g,1):zi(g);let u,f,h,m,v=!1,_=!1;if(mn(n)?(f=()=>n.value,v=$n(n)):$s(n)?(f=()=>c(n),v=!0):Ze(n)?(_=!0,v=n.some(g=>$s(g)||$n(g)),f=()=>n.map(g=>{if(mn(g))return g.value;if($s(g))return c(g);if(st(g))return l?l(g,2):g()})):st(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){$i();try{h()}finally{qi()}}const g=Os;Os=u;try{return l?l(n,3,[m]):n(m)}finally{Os=g}}:f=bi,e&&s){const g=f,C=s===!0?1/0:s;f=()=>zi(g(),C)}const p=ig(),d=()=>{u.stop(),p&&p.active&&Iu(p.effects,u)};if(r&&e){const g=e;e=(...C)=>{g(...C),d()}}let M=_?new Array(n.length).fill(Zo):Zo;const w=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const C=u.run();if(s||v||(_?C.some((T,E)=>Si(T,M[E])):Si(C,M))){h&&h();const T=Os;Os=u;try{const E=[C,M===Zo?void 0:_&&M[0]===Zo?[]:M,m];M=C,l?l(e,3,E):e(...E)}finally{Os=T}}}else u.run()};return a&&a(w),u=new Ud(f),u.scheduler=o?()=>o(w,!1):w,m=g=>Cg(g,!1,u),h=u.onStop=()=>{const g=Wa.get(u);if(g){if(l)l(g,4);else for(const C of g)C();Wa.delete(u)}},e?i?w(!0):M=u.run():o?o(w.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function zi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,mn(n))zi(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)zi(n[i],e,t);else if(Jr(n)||Ir(n))n.forEach(i=>{zi(i,e,t)});else if(Ad(n)){for(const i in n)zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(n,e,t,i){try{return i?n(...i):n()}catch(s){ml(s,e,t)}}function ci(n,e,t,i){if(st(n)){const s=Vo(n,e,t,i);return s&&Ed(s)&&s.catch(r=>{ml(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ci(n[r],e,t,i));return s}}function ml(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){$i(),Vo(r,null,10,[n,l,c]),qi();return}}Pg(n,t,s,i,o)}function Pg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const yn=[];let gi=-1;const Fr=[];let ps=null,Ar=0;const Kd=Promise.resolve();let Xa=null;function gn(n){const e=Xa||Kd;return n?e.then(this?n.bind(this):n):e}function Dg(n){let e=gi+1,t=yn.length;for(;e<t;){const i=e+t>>>1,s=yn[i],r=Lo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Gu(n){if(!(n.flags&1)){const e=Lo(n),t=yn[yn.length-1];!t||!(n.flags&2)&&e>=Lo(t)?yn.push(n):yn.splice(Dg(e),0,n),n.flags|=1,jd()}}function jd(){Xa||(Xa=Kd.then(Jd))}function Lg(n){Ze(n)?Fr.push(...n):ps&&n.id===-1?ps.splice(Ar+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),jd()}function yf(n,e,t=gi+1){for(;t<yn.length;t++){const i=yn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Zd(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,i)=>Lo(t)-Lo(i));if(Fr.length=0,ps){ps.push(...e);return}for(ps=e,Ar=0;Ar<ps.length;Ar++){const t=ps[Ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ps=null,Ar=0}}const Lo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jd(n){try{for(gi=0;gi<yn.length;gi++){const e=yn[gi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gi<yn.length;gi++){const e=yn[gi];e&&(e.flags&=-2)}gi=-1,yn.length=0,Zd(),Xa=null,(yn.length||Fr.length)&&Jd()}}let pn=null,Qd=null;function Ya(n){const e=pn;return pn=n,Qd=n&&n.type.__scopeId||null,e}function ks(n,e=pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ka(-1);const r=Ya(e);let o;try{o=n(...s)}finally{Ya(r),i._d&&Ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gt(n,e){if(pn===null)return n;const t=yl(pn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(st(r)&&(r={mounted:r,updated:r}),r.deep&&zi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function As(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&($i(),ci(l,t,8,[n.el,a,n,e]),qi())}}function Ac(n,e){if(Mn){let t=Mn.provides;const i=Mn.parent&&Mn.parent.provides;i===t&&(t=Mn.provides=Object.create(i)),t[n]=e}}function Gi(n,e,t=!1){const i=Pp();if(i||Or){let s=Or?Or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&st(e)?e.call(i&&i.proxy):e}}const Ig=Symbol.for("v-scx"),Ug=()=>Gi(Ig);function je(n,e,t){return ep(n,e,t)}function ep(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Yt({},t),l=e&&i||!e&&r!=="post";let c;if(No){if(r==="sync"){const m=Ug();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=bi,m.resume=bi,m.pause=bi,m}}const u=Mn;a.call=(m,v,_)=>ci(m,u,v,_);let f=!1;r==="post"?a.scheduler=m=>{Tn(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Gu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Rg(n,e,a);return No&&(c?c.push(h):l&&h()),h}function Fg(n,e,t){const i=this.proxy,s=Ot(n)?n.includes(".")?tp(i,n):()=>i[n]:n.bind(i,i);let r;st(e)?r=e:(r=e.handler,t=e);const o=Go(this),a=ep(s,r.bind(i),t);return o(),a}function tp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Ng=Symbol("_vte"),np=n=>n.__isTeleport,vi=Symbol("_leaveCb"),ro=Symbol("_enterCb");function Og(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln(()=>{n.isMounted=!0}),Wu(()=>{n.isUnmounting=!0}),n}const Vn=[Function,Array],ip={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},sp=n=>{const e=n.subTree;return e.component?sp(e.component):e},Bg={name:"BaseTransition",props:ip,setup(n,{slots:e}){const t=Pp(),i=Og();return()=>{const s=e.default&&ap(e.default(),!0);if(!s||!s.length)return;const r=rp(s),o=ft(n),{mode:a}=o;if(i.isLeaving)return Rl(r);const l=Mf(r);if(!l)return Rl(r);let c=Cc(l,o,i,t,f=>c=f);l.type!==dn&&Io(l,c);let u=t.subTree&&Mf(t.subTree);if(u&&u.type!==dn&&!zs(u,l)&&sp(t).type!==dn){let f=Cc(u,o,i,t);if(Io(u,f),a==="out-in"&&l.type!==dn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Rl(r);a==="in-out"&&l.type!==dn?f.delayLeave=(h,m,v)=>{const _=op(i,u);_[String(u.key)]=u,h[vi]=()=>{m(),h[vi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==dn){e=t;break}}return e}const kg=Bg;function op(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Cc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:M,onAppearCancelled:w}=e,g=String(n.key),C=op(t,n),T=(S,b)=>{S&&ci(S,i,9,b)},E=(S,b)=>{const I=b[1];T(S,b),Ze(S)?S.every(F=>F.length<=1)&&I():S.length<=1&&I()},D={mode:o,persisted:a,beforeEnter(S){let b=l;if(!t.isMounted)if(r)b=p||l;else return;S[vi]&&S[vi](!0);const I=C[g];I&&zs(n,I)&&I.el[vi]&&I.el[vi](),T(b,[S])},enter(S){if(C[g]===n)return;let b=c,I=u,F=f;if(!t.isMounted)if(r)b=d||c,I=M||u,F=w||f;else return;let z=!1;S[ro]=q=>{z||(z=!0,q?T(F,[S]):T(I,[S]),D.delayedLeave&&D.delayedLeave(),S[ro]=void 0)};const X=S[ro].bind(null,!1);b?E(b,[S,X]):X()},leave(S,b){const I=String(n.key);if(S[ro]&&S[ro](!0),t.isUnmounting)return b();T(h,[S]);let F=!1;S[vi]=X=>{F||(F=!0,b(),X?T(_,[S]):T(v,[S]),S[vi]=void 0,C[I]===n&&delete C[I])};const z=S[vi].bind(null,!1);C[I]=n,m?E(m,[S,z]):z()},clone(S){const b=Cc(S,e,t,i,s);return s&&s(b),b}};return D}function Rl(n){if(gl(n))return n=bs(n),n.children=null,n}function Mf(n){if(!gl(n))return np(n.type)&&n.children?rp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&st(t.default))return t.default()}}function Io(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Io(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ap(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===fn?(o.patchFlag&128&&s++,i=i.concat(ap(o.children,e,a))):(e||o.type!==dn)&&i.push(a!=null?bs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function fi(n,e){return st(n)?Yt({name:n.name},e,{setup:n}):n}function lp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const $a=new WeakMap;function wo(n,e,t,i,s=!1){if(Ze(n)){n.forEach((_,p)=>wo(_,e&&(Ze(e)?e[p]:e),t,i,s));return}if(Nr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?yl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,f=a.setupState,h=ft(f),m=f===bt?wd:_=>Sf(u,_)?!1:mt(h,_),v=(_,p)=>!(p&&Sf(u,p));if(c!=null&&c!==l){if(bf(e),Ot(c))u[c]=null,m(c)&&(f[c]=null);else if(mn(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(st(l))Vo(l,a,12,[o,u]);else{const _=Ot(l),p=mn(l);if(_||p){const d=()=>{if(n.f){const M=_?m(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Ze(M)&&Iu(M,r);else if(Ze(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],m(l)&&(f[l]=u[l]);else{const w=[r];v(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else _?(u[l]=o,m(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{d(),$a.delete(n)};M.id=-1,$a.set(n,M),Tn(M,t)}else bf(n),d()}}}function bf(n){const e=$a.get(n);e&&(e.flags|=8,$a.delete(n))}fl().requestIdleCallback;fl().cancelIdleCallback;const Nr=n=>!!n.type.__asyncLoader,gl=n=>n.type.__isKeepAlive;function zg(n,e){cp(n,"a",e)}function Hg(n,e){cp(n,"da",e)}function cp(n,e,t=Mn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(vl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)gl(s.parent.vnode)&&Vg(i,e,t,s),s=s.parent}}function Vg(n,e,t,i){const s=vl(e,n,i,!0);Kn(()=>{Iu(i[e],s)},t)}function vl(n,e,t=Mn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{$i();const a=Go(t),l=ci(e,t,n,o);return a(),qi(),l});return i?s.unshift(r):s.push(r),r}}const es=n=>(e,t=Mn)=>{(!No||n==="sp")&&vl(n,(...i)=>e(...i),t)},Gg=es("bm"),Ln=es("m"),Wg=es("bu"),Xg=es("u"),Wu=es("bum"),Kn=es("um"),Yg=es("sp"),$g=es("rtg"),qg=es("rtc");function Kg(n,e=Mn){vl("ec",n,e)}const jg=Symbol.for("v-ndc");function Zg(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Ot(n)){const a=o&&$s(n);let l=!1,c=!1;a&&(l=!$n(n),c=Ki(n),n=dl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Vr(li(n[u])):li(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Rc(n,e,t={},i,s){if(pn.ce||pn.parent&&Nr(pn.parent)&&pn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Ft(fn,null,[Rt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Je();const o=r&&up(r(t)),a=t.key||o&&o.key,l=Ft(fn,{key:(a&&!ai(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function up(n){return n.some(e=>Fo(e)?!(e.type===dn||e.type===fn&&!up(e.children)):!0)?n:null}const Pc=n=>n?Dp(n)?yl(n):Pc(n.parent):null,Eo=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hp(n),$forceUpdate:n=>n.f||(n.f=()=>{Gu(n.update)}),$nextTick:n=>n.n||(n.n=gn.bind(n.proxy)),$watch:n=>Fg.bind(n)}),Pl=(n,e)=>n!==bt&&!n.__isScriptSetup&&mt(n,e),Jg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Pl(i,e))return o[e]=1,i[e];if(s!==bt&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==bt&&mt(t,e))return o[e]=4,t[e];Dc&&(o[e]=0)}}const c=Eo[e];let u,f;if(c)return e==="$attrs"&&un(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Pl(s,e)?(s[e]=t,!0):i!==bt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==bt&&a[0]!=="$"&&mt(n,a)||Pl(e,a)||mt(r,a)||mt(i,a)||mt(Eo,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dc=!0;function Qg(n){const e=hp(n),t=n.proxy,i=n.ctx;Dc=!1,e.beforeCreate&&Ef(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:M,destroyed:w,unmounted:g,render:C,renderTracked:T,renderTriggered:E,errorCaptured:D,serverPrefetch:S,expose:b,inheritAttrs:I,components:F,directives:z,filters:X}=e;if(c&&ev(c,i,null),o)for(const te in o){const V=o[te];st(V)&&(i[te]=V.bind(t))}if(s){const te=s.call(t,t);vt(te)&&(n.data=Ur(te))}if(Dc=!0,r)for(const te in r){const V=r[te],ie=st(V)?V.bind(t,t):st(V.get)?V.get.bind(t,t):bi,k=!st(V)&&st(V.set)?V.set.bind(t):bi,j=it({get:ie,set:k});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>j.value,set:K=>j.value=K})}if(a)for(const te in a)fp(a[te],i,t,te);if(l){const te=st(l)?l.call(t):l;Reflect.ownKeys(te).forEach(V=>{Ac(V,te[V])})}u&&Ef(u,n,"c");function Y(te,V){Ze(V)?V.forEach(ie=>te(ie.bind(t))):V&&te(V.bind(t))}if(Y(Gg,f),Y(Ln,h),Y(Wg,m),Y(Xg,v),Y(zg,_),Y(Hg,p),Y(Kg,D),Y(qg,T),Y($g,E),Y(Wu,M),Y(Kn,g),Y(Yg,S),Ze(b))if(b.length){const te=n.exposed||(n.exposed={});b.forEach(V=>{Object.defineProperty(te,V,{get:()=>t[V],set:ie=>t[V]=ie,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===bi&&(n.render=C),I!=null&&(n.inheritAttrs=I),F&&(n.components=F),z&&(n.directives=z),S&&lp(n)}function ev(n,e,t=bi){Ze(n)&&(n=Lc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Gi(s.from||i,s.default,!0):r=Gi(s.from||i):r=Gi(s),mn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ef(n,e,t){ci(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fp(n,e,t,i){let s=i.includes(".")?tp(t,i):()=>t[i];if(Ot(n)){const r=e[n];st(r)&&je(s,r)}else if(st(n))je(s,n.bind(t));else if(vt(n))if(Ze(n))n.forEach(r=>fp(r,e,t,i));else{const r=st(n.handler)?n.handler.bind(t):e[n.handler];st(r)&&je(s,r,n)}}function hp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qa(l,c,o,!0)),qa(l,e,o)),vt(e)&&r.set(e,l),l}function qa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qa(n,r,t,!0),s&&s.forEach(o=>qa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tv={data:Tf,props:Af,emits:Af,methods:_o,computed:_o,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:_o,directives:_o,watch:iv,provide:Tf,inject:nv};function Tf(n,e){return e?n?function(){return Yt(st(n)?n.call(this,this):n,st(e)?e.call(this,this):e)}:e:n}function nv(n,e){return _o(Lc(n),Lc(e))}function Lc(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _n(n,e){return n?[...new Set([].concat(n,e))]:e}function _o(n,e){return n?Yt(Object.create(null),n,e):e}function Af(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:Yt(Object.create(null),wf(n),wf(e??{})):e}function iv(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=_n(n[i],e[i]);return t}function dp(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sv=0;function rv(n,e){return function(i,s=null){st(i)||(i=Yt({},i)),s!=null&&!vt(s)&&(s=null);const r=dp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:sv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ov,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...f)):st(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Rt(i,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,yl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ci(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Or;Or=c;try{return u()}finally{Or=f}}};return c}}let Or=null;const ov=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ii(e)}Modifiers`]||n[`${Es(e)}Modifiers`];function av(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&ov(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ot(u)?u.trim():u)),o.number&&(s=t.map(ul)));let a,l=i[a=wl(e)]||i[a=wl(ii(e))];!l&&r&&(l=i[a=wl(Es(e))]),l&&ci(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ci(c,n,6,s)}}const lv=new WeakMap;function pp(n,e,t=!1){const i=t?lv:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!st(n)){const l=c=>{const u=pp(c,e,!0);u&&(a=!0,Yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Yt(o,r),vt(n)&&i.set(n,o),o)}function _l(n,e){return!n||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Es(e))||mt(n,e))}function Cf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:v,inheritAttrs:_}=n,p=Ya(n);let d,M;try{if(t.shapeFlag&4){const g=s||i,C=g;d=xi(c.call(C,g,u,f,m,h,v)),M=a}else{const g=e;d=xi(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),M=e.props?a:cv(a)}}catch(g){To.length=0,ml(g,n,1),d=Rt(dn)}let w=d;if(M&&_!==!1){const g=Object.keys(M),{shapeFlag:C}=w;g.length&&C&7&&(r&&g.some(ll)&&(M=uv(M,r)),w=bs(w,M,!1,!0))}return t.dirs&&(w=bs(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Io(w,t.transition),d=w,Ya(p),d}const cv=n=>{let e;for(const t in n)(t==="class"||t==="style"||al(t))&&((e||(e={}))[t]=n[t]);return e},uv=(n,e)=>{const t={};for(const i in n)(!ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(mp(o,i,h)&&!_l(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rf(i,o,c):!0:!!o;return!1}function Rf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(mp(e,n,r)&&!_l(t,r))return!0}return!1}function mp(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Qr(i,s):i!==s}function hv({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gp={},vp=()=>Object.create(gp),_p=n=>Object.getPrototypeOf(n)===gp;function dv(n,e,t,i=!1){const s={},r=vp();n.propsDefaults=Object.create(null),xp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:pl(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function pv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_l(n.emitsOptions,h))continue;const m=e[h];if(l)if(mt(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const v=ii(h);s[v]=Ic(l,a,v,m,n,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{xp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!mt(e,f)&&((u=Es(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ic(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&ki(n.attrs,"set","")}function xp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mo(l))continue;const c=e[l];let u;s&&mt(s,u=ii(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:_l(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||bt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ic(s,l,f,c[f],n,!mt(c,f))}}return o}function Ic(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Go(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Es(t))&&(i=!0))}return i}const mv=new WeakMap;function yp(n,e,t=!1){const i=t?mv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!st(n)){const u=f=>{l=!0;const[h,m]=yp(f,e,!0);Yt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Lr),Lr;if(Ze(r))for(let u=0;u<r.length;u++){const f=ii(r[u]);Pf(f)&&(o[f]=bt)}else if(r)for(const u in r){const f=ii(u);if(Pf(f)){const h=r[u],m=o[f]=Ze(h)||st(h)?{type:h}:Yt({},h),v=m.type;let _=!1,p=!0;if(Ze(v))for(let d=0;d<v.length;++d){const M=v[d],w=st(M)&&M.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(p=!1)}else _=st(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||mt(m,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function Pf(n){return n[0]!=="$"&&!Mo(n)}const Xu=n=>n==="_"||n==="_ctx"||n==="$stable",Yu=n=>Ze(n)?n.map(xi):[xi(n)],gv=(n,e,t)=>{if(e._n)return e;const i=ks((...s)=>Yu(e(...s)),t);return i._c=!1,i},Mp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Xu(s))continue;const r=n[s];if(st(r))e[s]=gv(s,r,i);else if(r!=null){const o=Yu(r);e[s]=()=>o}}},Sp=(n,e)=>{const t=Yu(e);n.slots.default=()=>t},bp=(n,e,t)=>{for(const i in e)(t||!Xu(i))&&(n[i]=e[i])},vv=(n,e,t)=>{const i=n.slots=vp();if(n.vnode.shapeFlag&32){const s=e._;s?(bp(i,e,t),t&&Rd(i,"_",s,!0)):Mp(e,i)}else e&&Sp(n,e)},_v=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:bp(s,e,t):(r=!e.$stable,Mp(e,s)),o=e}else e&&(Sp(n,e),o={default:1});if(r)for(const a in s)!Xu(a)&&o[a]==null&&delete s[a]},Tn=bv;function xv(n){return yv(n)}function yv(n,e){const t=fl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=bi,insertStaticContent:v}=n,_=(L,O,R,fe=null,re=null,se=null,ae=void 0,xe=null,le=!!O.dynamicChildren)=>{if(L===O)return;L&&!zs(L,O)&&(fe=_e(L),K(L,re,se,!0),L=null),O.patchFlag===-2&&(le=!1,O.dynamicChildren=null);const{type:y,ref:x,shapeFlag:A}=O;switch(y){case xl:p(L,O,R,fe);break;case dn:d(L,O,R,fe);break;case Ll:L==null&&M(O,R,fe,ae);break;case fn:F(L,O,R,fe,re,se,ae,xe,le);break;default:A&1?C(L,O,R,fe,re,se,ae,xe,le):A&6?z(L,O,R,fe,re,se,ae,xe,le):(A&64||A&128)&&y.process(L,O,R,fe,re,se,ae,xe,le,We)}x!=null&&re?wo(x,L&&L.ref,se,O||L,!O):x==null&&L&&L.ref!=null&&wo(L.ref,null,se,L,!0)},p=(L,O,R,fe)=>{if(L==null)i(O.el=a(O.children),R,fe);else{const re=O.el=L.el;O.children!==L.children&&c(re,O.children)}},d=(L,O,R,fe)=>{L==null?i(O.el=l(O.children||""),R,fe):O.el=L.el},M=(L,O,R,fe)=>{[L.el,L.anchor]=v(L.children,O,R,fe,L.el,L.anchor)},w=({el:L,anchor:O},R,fe)=>{let re;for(;L&&L!==O;)re=h(L),i(L,R,fe),L=re;i(O,R,fe)},g=({el:L,anchor:O})=>{let R;for(;L&&L!==O;)R=h(L),s(L),L=R;s(O)},C=(L,O,R,fe,re,se,ae,xe,le)=>{if(O.type==="svg"?ae="svg":O.type==="math"&&(ae="mathml"),L==null)T(O,R,fe,re,se,ae,xe,le);else{const y=L.el&&L.el._isVueCE?L.el:null;try{y&&y._beginPatch(),S(L,O,re,se,ae,xe,le)}finally{y&&y._endPatch()}}},T=(L,O,R,fe,re,se,ae,xe)=>{let le,y;const{props:x,shapeFlag:A,transition:N,dirs:W}=L;if(le=L.el=o(L.type,se,x&&x.is,x),A&8?u(le,L.children):A&16&&D(L.children,le,null,fe,re,Dl(L,se),ae,xe),W&&As(L,null,fe,"created"),E(le,L,L.scopeId,ae,fe),x){for(const we in x)we!=="value"&&!Mo(we)&&r(le,we,null,x[we],se,fe);"value"in x&&r(le,"value",null,x.value,se),(y=x.onVnodeBeforeMount)&&pi(y,fe,L)}W&&As(L,null,fe,"beforeMount");const Z=Mv(re,N);Z&&N.beforeEnter(le),i(le,O,R),((y=x&&x.onVnodeMounted)||Z||W)&&Tn(()=>{try{y&&pi(y,fe,L),Z&&N.enter(le),W&&As(L,null,fe,"mounted")}finally{}},re)},E=(L,O,R,fe,re)=>{if(R&&m(L,R),fe)for(let se=0;se<fe.length;se++)m(L,fe[se]);if(re){let se=re.subTree;if(O===se||Ap(se.type)&&(se.ssContent===O||se.ssFallback===O)){const ae=re.vnode;E(L,ae,ae.scopeId,ae.slotScopeIds,re.parent)}}},D=(L,O,R,fe,re,se,ae,xe,le=0)=>{for(let y=le;y<L.length;y++){const x=L[y]=xe?Bi(L[y]):xi(L[y]);_(null,x,O,R,fe,re,se,ae,xe)}},S=(L,O,R,fe,re,se,ae)=>{const xe=O.el=L.el;let{patchFlag:le,dynamicChildren:y,dirs:x}=O;le|=L.patchFlag&16;const A=L.props||bt,N=O.props||bt;let W;if(R&&Cs(R,!1),(W=N.onVnodeBeforeUpdate)&&pi(W,R,O,L),x&&As(O,L,R,"beforeUpdate"),R&&Cs(R,!0),(A.innerHTML&&N.innerHTML==null||A.textContent&&N.textContent==null)&&u(xe,""),y?b(L.dynamicChildren,y,xe,R,fe,Dl(O,re),se):ae||V(L,O,xe,null,R,fe,Dl(O,re),se,!1),le>0){if(le&16)I(xe,A,N,R,re);else if(le&2&&A.class!==N.class&&r(xe,"class",null,N.class,re),le&4&&r(xe,"style",A.style,N.style,re),le&8){const Z=O.dynamicProps;for(let we=0;we<Z.length;we++){const pe=Z[we],be=A[pe],ke=N[pe];(ke!==be||pe==="value")&&r(xe,pe,be,ke,re,R)}}le&1&&L.children!==O.children&&u(xe,O.children)}else!ae&&y==null&&I(xe,A,N,R,re);((W=N.onVnodeUpdated)||x)&&Tn(()=>{W&&pi(W,R,O,L),x&&As(O,L,R,"updated")},fe)},b=(L,O,R,fe,re,se,ae)=>{for(let xe=0;xe<O.length;xe++){const le=L[xe],y=O[xe],x=le.el&&(le.type===fn||!zs(le,y)||le.shapeFlag&198)?f(le.el):R;_(le,y,x,null,fe,re,se,ae,!0)}},I=(L,O,R,fe,re)=>{if(O!==R){if(O!==bt)for(const se in O)!Mo(se)&&!(se in R)&&r(L,se,O[se],null,re,fe);for(const se in R){if(Mo(se))continue;const ae=R[se],xe=O[se];ae!==xe&&se!=="value"&&r(L,se,xe,ae,re,fe)}"value"in R&&r(L,"value",O.value,R.value,re)}},F=(L,O,R,fe,re,se,ae,xe,le)=>{const y=O.el=L?L.el:a(""),x=O.anchor=L?L.anchor:a("");let{patchFlag:A,dynamicChildren:N,slotScopeIds:W}=O;W&&(xe=xe?xe.concat(W):W),L==null?(i(y,R,fe),i(x,R,fe),D(O.children||[],R,x,re,se,ae,xe,le)):A>0&&A&64&&N&&L.dynamicChildren&&L.dynamicChildren.length===N.length?(b(L.dynamicChildren,N,R,re,se,ae,xe),(O.key!=null||re&&O===re.subTree)&&wp(L,O,!0)):V(L,O,R,x,re,se,ae,xe,le)},z=(L,O,R,fe,re,se,ae,xe,le)=>{O.slotScopeIds=xe,L==null?O.shapeFlag&512?re.ctx.activate(O,R,fe,ae,le):X(O,R,fe,re,se,ae,le):q(L,O,le)},X=(L,O,R,fe,re,se,ae)=>{const xe=L.component=Pv(L,fe,re);if(gl(L)&&(xe.ctx.renderer=We),Dv(xe,!1,ae),xe.asyncDep){if(re&&re.registerDep(xe,Y,ae),!L.el){const le=xe.subTree=Rt(dn);d(null,le,O,R),L.placeholder=le.el}}else Y(xe,L,O,R,re,se,ae)},q=(L,O,R)=>{const fe=O.component=L.component;if(fv(L,O,R))if(fe.asyncDep&&!fe.asyncResolved){te(fe,O,R);return}else fe.next=O,fe.update();else O.el=L.el,fe.vnode=O},Y=(L,O,R,fe,re,se,ae)=>{const xe=()=>{if(L.isMounted){let{next:A,bu:N,u:W,parent:Z,vnode:we}=L;{const B=Ep(L);if(B){A&&(A.el=we.el,te(L,A,ae)),B.asyncDep.then(()=>{Tn(()=>{L.isUnmounted||y()},re)});return}}let pe=A,be;Cs(L,!1),A?(A.el=we.el,te(L,A,ae)):A=we,N&&Ia(N),(be=A.props&&A.props.onVnodeBeforeUpdate)&&pi(be,Z,A,we),Cs(L,!0);const ke=Cf(L),U=L.subTree;L.subTree=ke,_(U,ke,f(U.el),_e(U),L,re,se),A.el=ke.el,pe===null&&hv(L,ke.el),W&&Tn(W,re),(be=A.props&&A.props.onVnodeUpdated)&&Tn(()=>pi(be,Z,A,we),re)}else{let A;const{el:N,props:W}=O,{bm:Z,m:we,parent:pe,root:be,type:ke}=L,U=Nr(O);Cs(L,!1),Z&&Ia(Z),!U&&(A=W&&W.onVnodeBeforeMount)&&pi(A,pe,O),Cs(L,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(ke,L.parent?L.parent.type:void 0);const B=L.subTree=Cf(L);_(null,B,R,fe,L,re,se),O.el=B.el}if(we&&Tn(we,re),!U&&(A=W&&W.onVnodeMounted)){const B=O;Tn(()=>pi(A,pe,B),re)}(O.shapeFlag&256||pe&&Nr(pe.vnode)&&pe.vnode.shapeFlag&256)&&L.a&&Tn(L.a,re),L.isMounted=!0,O=R=fe=null}};L.scope.on();const le=L.effect=new Ud(xe);L.scope.off();const y=L.update=le.run.bind(le),x=L.job=le.runIfDirty.bind(le);x.i=L,x.id=L.uid,le.scheduler=()=>Gu(x),Cs(L,!0),y()},te=(L,O,R)=>{O.component=L;const fe=L.vnode.props;L.vnode=O,L.next=null,pv(L,O.props,fe,R),_v(L,O.children,R),$i(),yf(L),qi()},V=(L,O,R,fe,re,se,ae,xe,le=!1)=>{const y=L&&L.children,x=L?L.shapeFlag:0,A=O.children,{patchFlag:N,shapeFlag:W}=O;if(N>0){if(N&128){k(y,A,R,fe,re,se,ae,xe,le);return}else if(N&256){ie(y,A,R,fe,re,se,ae,xe,le);return}}W&8?(x&16&&ye(y,re,se),A!==y&&u(R,A)):x&16?W&16?k(y,A,R,fe,re,se,ae,xe,le):ye(y,re,se,!0):(x&8&&u(R,""),W&16&&D(A,R,fe,re,se,ae,xe,le))},ie=(L,O,R,fe,re,se,ae,xe,le)=>{L=L||Lr,O=O||Lr;const y=L.length,x=O.length,A=Math.min(y,x);let N;for(N=0;N<A;N++){const W=O[N]=le?Bi(O[N]):xi(O[N]);_(L[N],W,R,null,re,se,ae,xe,le)}y>x?ye(L,re,se,!0,!1,A):D(O,R,fe,re,se,ae,xe,le,A)},k=(L,O,R,fe,re,se,ae,xe,le)=>{let y=0;const x=O.length;let A=L.length-1,N=x-1;for(;y<=A&&y<=N;){const W=L[y],Z=O[y]=le?Bi(O[y]):xi(O[y]);if(zs(W,Z))_(W,Z,R,null,re,se,ae,xe,le);else break;y++}for(;y<=A&&y<=N;){const W=L[A],Z=O[N]=le?Bi(O[N]):xi(O[N]);if(zs(W,Z))_(W,Z,R,null,re,se,ae,xe,le);else break;A--,N--}if(y>A){if(y<=N){const W=N+1,Z=W<x?O[W].el:fe;for(;y<=N;)_(null,O[y]=le?Bi(O[y]):xi(O[y]),R,Z,re,se,ae,xe,le),y++}}else if(y>N)for(;y<=A;)K(L[y],re,se,!0),y++;else{const W=y,Z=y,we=new Map;for(y=Z;y<=N;y++){const he=O[y]=le?Bi(O[y]):xi(O[y]);he.key!=null&&we.set(he.key,y)}let pe,be=0;const ke=N-Z+1;let U=!1,B=0;const ee=new Array(ke);for(y=0;y<ke;y++)ee[y]=0;for(y=W;y<=A;y++){const he=L[y];if(be>=ke){K(he,re,se,!0);continue}let Te;if(he.key!=null)Te=we.get(he.key);else for(pe=Z;pe<=N;pe++)if(ee[pe-Z]===0&&zs(he,O[pe])){Te=pe;break}Te===void 0?K(he,re,se,!0):(ee[Te-Z]=y+1,Te>=B?B=Te:U=!0,_(he,O[Te],R,null,re,se,ae,xe,le),be++)}const Ee=U?Sv(ee):Lr;for(pe=Ee.length-1,y=ke-1;y>=0;y--){const he=Z+y,Te=O[he],Pe=O[he+1],Ve=he+1<x?Pe.el||Tp(Pe):fe;ee[y]===0?_(null,Te,R,Ve,re,se,ae,xe,le):U&&(pe<0||y!==Ee[pe]?j(Te,R,Ve,2):pe--)}}},j=(L,O,R,fe,re=null)=>{const{el:se,type:ae,transition:xe,children:le,shapeFlag:y}=L;if(y&6){j(L.component.subTree,O,R,fe);return}if(y&128){L.suspense.move(O,R,fe);return}if(y&64){ae.move(L,O,R,We);return}if(ae===fn){i(se,O,R);for(let A=0;A<le.length;A++)j(le[A],O,R,fe);i(L.anchor,O,R);return}if(ae===Ll){w(L,O,R);return}if(fe!==2&&y&1&&xe)if(fe===0)xe.beforeEnter(se),i(se,O,R),Tn(()=>xe.enter(se),re);else{const{leave:A,delayLeave:N,afterLeave:W}=xe,Z=()=>{L.ctx.isUnmounted?s(se):i(se,O,R)},we=()=>{se._isLeaving&&se[vi](!0),A(se,()=>{Z(),W&&W()})};N?N(se,Z,we):we()}else i(se,O,R)},K=(L,O,R,fe=!1,re=!1)=>{const{type:se,props:ae,ref:xe,children:le,dynamicChildren:y,shapeFlag:x,patchFlag:A,dirs:N,cacheIndex:W,memo:Z}=L;if(A===-2&&(re=!1),xe!=null&&($i(),wo(xe,null,R,L,!0),qi()),W!=null&&(O.renderCache[W]=void 0),x&256){O.ctx.deactivate(L);return}const we=x&1&&N,pe=!Nr(L);let be;if(pe&&(be=ae&&ae.onVnodeBeforeUnmount)&&pi(be,O,L),x&6)me(L.component,R,fe);else{if(x&128){L.suspense.unmount(R,fe);return}we&&As(L,null,O,"beforeUnmount"),x&64?L.type.remove(L,O,R,We,fe):y&&!y.hasOnce&&(se!==fn||A>0&&A&64)?ye(y,O,R,!1,!0):(se===fn&&A&384||!re&&x&16)&&ye(le,O,R),fe&&ue(L)}const ke=Z!=null&&W==null;(pe&&(be=ae&&ae.onVnodeUnmounted)||we||ke)&&Tn(()=>{be&&pi(be,O,L),we&&As(L,null,O,"unmounted"),ke&&(L.el=null)},R)},ue=L=>{const{type:O,el:R,anchor:fe,transition:re}=L;if(O===fn){ne(R,fe);return}if(O===Ll){g(L);return}const se=()=>{s(R),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(L.shapeFlag&1&&re&&!re.persisted){const{leave:ae,delayLeave:xe}=re,le=()=>ae(R,se);xe?xe(L.el,se,le):le()}else se()},ne=(L,O)=>{let R;for(;L!==O;)R=h(L),s(L),L=R;s(O)},me=(L,O,R)=>{const{bum:fe,scope:re,job:se,subTree:ae,um:xe,m:le,a:y}=L;Df(le),Df(y),fe&&Ia(fe),re.stop(),se&&(se.flags|=8,K(ae,L,O,R)),xe&&Tn(xe,O),Tn(()=>{L.isUnmounted=!0},O)},ye=(L,O,R,fe=!1,re=!1,se=0)=>{for(let ae=se;ae<L.length;ae++)K(L[ae],O,R,fe,re)},_e=L=>{if(L.shapeFlag&6)return _e(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const O=h(L.anchor||L.el),R=O&&O[Ng];return R?h(R):O};let Oe=!1;const He=(L,O,R)=>{let fe;L==null?O._vnode&&(K(O._vnode,null,null,!0),fe=O._vnode.component):_(O._vnode||null,L,O,null,null,null,R),O._vnode=L,Oe||(Oe=!0,yf(fe),Zd(),Oe=!1)},We={p:_,um:K,m:j,r:ue,mt:X,mc:D,pc:V,pbc:b,n:_e,o:n};return{render:He,hydrate:void 0,createApp:rv(He)}}function Dl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Cs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Mv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wp(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&wp(o,a)),a.type===xl&&(a.patchFlag===-1&&(a=s[r]=Bi(a)),a.el=o.el),a.type===dn&&!a.el&&(a.el=o.el)}}function Sv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ep(e)}function Df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Tp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Tp(e.subTree):null}const Ap=n=>n.__isSuspense;function bv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):Lg(n)}const fn=Symbol.for("v-fgt"),xl=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),Ll=Symbol.for("v-stc"),To=[];let kn=null;function Je(n=!1){To.push(kn=n?null:[])}function wv(){To.pop(),kn=To[To.length-1]||null}let Uo=1;function Ka(n,e=!1){Uo+=n,n<0&&kn&&e&&(kn.hasOnce=!0)}function Cp(n){return n.dynamicChildren=Uo>0?kn||Lr:null,wv(),Uo>0&&kn&&kn.push(n),n}function gt(n,e,t,i,s,r){return Cp(Le(n,e,t,i,s,r,!0))}function Ft(n,e,t,i,s){return Cp(Rt(n,e,t,i,s,!0))}function Fo(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Rp=({key:n})=>n??null,Ua=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ot(n)||mn(n)||st(n)?{i:pn,r:n,k:e,f:!!t}:n:null);function Le(n,e=null,t=null,i=0,s=null,r=n===fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Rp(e),ref:e&&Ua(e),scopeId:Qd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pn};return a?($u(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ot(t)?8:16),Uo>0&&!o&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const Rt=Ev;function Ev(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===jg)&&(n=dn),Fo(n)){const a=bs(n,e,!0);return t&&$u(a,t),Uo>0&&!r&&kn&&(a.shapeFlag&6?kn[kn.indexOf(n)]=a:kn.push(a)),a.patchFlag=-2,a}if(Fv(n)&&(n=n.__vccOpts),e){e=Tv(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=Wt(a)),vt(l)&&(Vu(l)&&!Ze(l)&&(l=Yt({},l)),e.style=Bn(l))}const o=Ot(n)?1:Ap(n)?128:np(n)?64:vt(n)?4:st(n)?2:0;return Le(n,e,t,i,s,o,r,!0)}function Tv(n){return n?Vu(n)||_p(n)?Yt({},n):n:null}function bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Av(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Rp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(Ua(e)):[r,Ua(e)]:Ua(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bs(n.ssContent),ssFallback:n.ssFallback&&bs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Io(u,l.clone(u)),u}function ln(n=" ",e=0){return Rt(xl,null,n,e)}function Jt(n="",e=!1){return e?(Je(),Ft(dn,null,n)):Rt(dn,null,n)}function xi(n){return n==null||typeof n=="boolean"?Rt(dn):Ze(n)?Rt(fn,null,n.slice()):Fo(n)?Bi(n):Rt(xl,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bs(n)}function $u(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$u(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_p(e)?e._ctx=pn:s===3&&pn&&(pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),i&64?(t=16,e=[ln(e)]):t=8);n.children=e,n.shapeFlag|=t}function Av(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Wt([e.class,i.class]));else if(s==="style")e.style=Bn([e.style,i.style]);else if(al(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ll(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function pi(n,e,t,i=null){ci(n,e,7,[t,i])}const Cv=dp();let Rv=0;function Pv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cv,r={uid:Rv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(i,s),emitsOptions:pp(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=av.bind(null,r),n.ce&&n.ce(r),r}let Mn=null;const Pp=()=>Mn||pn;let ja,Uc;{const n=fl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ja=e("__VUE_INSTANCE_SETTERS__",t=>Mn=t),Uc=e("__VUE_SSR_SETTERS__",t=>No=t)}const Go=n=>{const e=Mn;return ja(n),n.scope.on(),()=>{n.scope.off(),ja(e)}},Lf=()=>{Mn&&Mn.scope.off(),ja(null)};function Dp(n){return n.vnode.shapeFlag&4}let No=!1;function Dv(n,e=!1,t=!1){e&&Uc(e);const{props:i,children:s}=n.vnode,r=Dp(n);dv(n,i,r,e),vv(n,s,t||e);const o=r?Lv(n,e):void 0;return e&&Uc(!1),o}function Lv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jg);const{setup:i}=t;if(i){$i();const s=n.setupContext=i.length>1?Uv(n):null,r=Go(n),o=Vo(i,n,0,[n.props,s]),a=Ed(o);if(qi(),r(),(a||n.sp)&&!Nr(n)&&lp(n),a){if(o.then(Lf,Lf),e)return o.then(l=>{If(n,l)}).catch(l=>{ml(l,n,0)});n.asyncDep=o}else If(n,o)}else Lp(n)}function If(n,e,t){st(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=qd(e)),Lp(n)}function Lp(n,e,t){const i=n.type;n.render||(n.render=i.render||bi);{const s=Go(n);$i();try{Qg(n)}finally{qi(),s()}}}const Iv={get(n,e){return un(n,"get",""),n[e]}};function Uv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Iv),slots:n.slots,emit:n.emit,expose:e}}function yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qd(Sg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Eo)return Eo[t](n)},has(e,t){return t in e||t in Eo}})):n.proxy}function Fv(n){return st(n)&&"__vccOpts"in n}const it=(n,e)=>Ag(n,e,No);function Nv(n,e,t){try{Ka(-1);const i=arguments.length;return i===2?vt(e)&&!Ze(e)?Fo(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Fo(t)&&(t=[t]),Rt(n,e,t))}finally{Ka(1)}}const Ov="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fc;const Uf=typeof window<"u"&&window.trustedTypes;if(Uf)try{Fc=Uf.createPolicy("vue",{createHTML:n=>n})}catch{}const Ip=Fc?n=>Fc.createHTML(n):n=>n,Bv="http://www.w3.org/2000/svg",kv="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Ff=Oi&&Oi.createElement("template"),zv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Oi.createElementNS(Bv,n):e==="mathml"?Oi.createElementNS(kv,n):t?Oi.createElement(n,{is:t}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ff.innerHTML=Ip(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ff.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},rs="transition",oo="animation",Oo=Symbol("_vtc"),Up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hv=Yt({},ip,Up),Vv=n=>(n.displayName="Transition",n.props=Hv,n),Gv=Vv((n,{slots:e})=>Nv(kg,Wv(n),e)),Rs=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Nf=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Wv(n){const e={};for(const F in n)F in Up||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=Xv(s),_=v&&v[0],p=v&&v[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:w,onLeave:g,onLeaveCancelled:C,onBeforeAppear:T=d,onAppear:E=M,onAppearCancelled:D=w}=e,S=(F,z,X,q)=>{F._enterCancelled=q,Ps(F,z?u:a),Ps(F,z?c:o),X&&X()},b=(F,z)=>{F._isLeaving=!1,Ps(F,f),Ps(F,m),Ps(F,h),z&&z()},I=F=>(z,X)=>{const q=F?E:M,Y=()=>S(z,F,X);Rs(q,[z,Y]),Of(()=>{Ps(z,F?l:r),Ci(z,F?u:a),Nf(q)||Bf(z,i,_,Y)})};return Yt(e,{onBeforeEnter(F){Rs(d,[F]),Ci(F,r),Ci(F,o)},onBeforeAppear(F){Rs(T,[F]),Ci(F,l),Ci(F,c)},onEnter:I(!1),onAppear:I(!0),onLeave(F,z){F._isLeaving=!0;const X=()=>b(F,z);Ci(F,f),F._enterCancelled?(Ci(F,h),Hf(F)):(Hf(F),Ci(F,h)),Of(()=>{F._isLeaving&&(Ps(F,f),Ci(F,m),Nf(g)||Bf(F,i,p,X))}),Rs(g,[F,X])},onEnterCancelled(F){S(F,!1,void 0,!0),Rs(w,[F])},onAppearCancelled(F){S(F,!0,void 0,!0),Rs(D,[F])},onLeaveCancelled(F){b(F),Rs(C,[F])}})}function Xv(n){if(n==null)return null;if(vt(n))return[Il(n.enter),Il(n.leave)];{const e=Il(n);return[e,e]}}function Il(n){return Km(n)}function Ci(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Oo]||(n[Oo]=new Set)).add(e)}function Ps(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Oo];t&&(t.delete(e),t.size||(n[Oo]=void 0))}function Of(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Yv=0;function Bf(n,e,t,i){const s=n._endId=++Yv,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=$v(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function $v(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${rs}Delay`),r=i(`${rs}Duration`),o=kf(s,r),a=i(`${oo}Delay`),l=i(`${oo}Duration`),c=kf(a,l);let u=null,f=0,h=0;e===rs?o>0&&(u=rs,f=o,h=r.length):e===oo?c>0&&(u=oo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?rs:oo:null,h=u?u===rs?r.length:l.length:0);const m=u===rs&&/\b(?:transform|all)(?:,|$)/.test(i(`${rs}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function kf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>zf(t)+zf(n[i])))}function zf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hf(n){return(n?n.ownerDocument:document).body.offsetHeight}function qv(n,e,t){const i=n[Oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Za=Symbol("_vod"),Fp=Symbol("_vsh"),ds={name:"show",beforeMount(n,{value:e},{transition:t}){n[Za]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ao(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ao(n,!0),i.enter(n)):i.leave(n,()=>{ao(n,!1)}):ao(n,e))},beforeUnmount(n,{value:e}){ao(n,e)}};function ao(n,e){n.style.display=e?n[Za]:"none",n[Fp]=!e}const Kv=Symbol(""),jv=/(?:^|;)\s*display\s*:/;function Zv(n,e,t){const i=n.style,s=Ot(t);let r=!1;if(t&&!s){if(e)if(Ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fa(i,a,"")}else for(const o in e)t[o]==null&&Fa(i,o,"");for(const o in t)o==="display"&&(r=!0),Fa(i,o,t[o])}else if(s){if(e!==t){const o=i[Kv];o&&(t+=";"+o),i.cssText=t,r=jv.test(t)}}else e&&n.removeAttribute("style");Za in n&&(n[Za]=r?i.display:"",n[Fp]&&(i.display="none"))}const Vf=/\s*!important$/;function Fa(n,e,t){if(Ze(t))t.forEach(i=>Fa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Jv(n,e);Vf.test(t)?n.setProperty(Es(i),t.replace(Vf,""),"important"):n[i]=t}}const Gf=["Webkit","Moz","ms"],Ul={};function Jv(n,e){const t=Ul[e];if(t)return t;let i=ii(e);if(i!=="filter"&&i in n)return Ul[e]=i;i=Cd(i);for(let s=0;s<Gf.length;s++){const r=Gf[s]+i;if(r in n)return Ul[e]=r}return e}const Wf="http://www.w3.org/1999/xlink";function Xf(n,e,t,i,s,r=tg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wf,e.slice(6,e.length)):n.setAttributeNS(Wf,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ai(t)?String(t):t)}function Yf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ip(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function gs(n,e,t,i){n.addEventListener(e,t,i)}function Qv(n,e,t,i){n.removeEventListener(e,t,i)}const $f=Symbol("_vei");function e0(n,e,t,i,s=null){const r=n[$f]||(n[$f]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=t0(e);if(i){const c=r[e]=s0(i,s);gs(n,a,c,l)}else o&&(Qv(n,a,o,l),r[e]=void 0)}}const qf=/(?:Once|Passive|Capture)$/;function t0(n){let e;if(qf.test(n)){e={};let i;for(;i=n.match(qf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Es(n.slice(2)),e]}let Fl=0;const n0=Promise.resolve(),i0=()=>Fl||(n0.then(()=>Fl=0),Fl=Date.now());function s0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ci(r0(i,t.value),e,5,[i])};return t.value=n,t.attached=i0(),t}function r0(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Kf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,o0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?qv(n,i,o):e==="style"?Zv(n,t,i):al(e)?ll(e)||e0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a0(n,e,i,o))?(Yf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xf(n,e,i,o,r,e!=="value")):n._isVueCE&&(l0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ot(i)))?Yf(n,ii(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xf(n,e,i,o))};function a0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kf(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Ot(t)?!1:e in n}function l0(n,e){const t=n._def.props;if(!t)return!1;const i=ii(e);return Array.isArray(t)?t.some(s=>ii(s)===i):Object.keys(t).some(s=>ii(s)===i)}const Gr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>Ia(e,t):e};function c0(n){n.target.composing=!0}function jf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi=Symbol("_assign");function Zf(n,e,t){return e&&(n=n.trim()),t&&(n=ul(n)),n}const Np={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Wi]=Gr(s);const r=i||s.props&&s.props.type==="number";gs(n,e?"change":"input",o=>{o.target.composing||n[Wi](Zf(n.value,t,r))}),(t||r)&&gs(n,"change",()=>{n.value=Zf(n.value,t,r)}),e||(gs(n,"compositionstart",c0),gs(n,"compositionend",jf),gs(n,"change",jf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Wi]=Gr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ul(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},os={deep:!0,created(n,e,t){n[Wi]=Gr(t),gs(n,"change",()=>{const i=n._modelValue,s=Bo(n),r=n.checked,o=n[Wi];if(Ze(i)){const a=Fu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Jr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Op(n,r))})},mounted:Jf,beforeUpdate(n,e,t){n[Wi]=Gr(t),Jf(n,e,t)}};function Jf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=Fu(e,i.props.value)>-1;else if(Jr(e))s=e.has(i.props.value);else{if(e===t)return;s=Qr(e,Op(n,!0))}n.checked!==s&&(n.checked=s)}const u0={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Jr(e);gs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ul(Bo(o)):Bo(o));n[Wi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,gn(()=>{n._assigning=!1})}),n[Wi]=Gr(i)},mounted(n,{value:e}){Qf(n,e)},beforeUpdate(n,e,t){n[Wi]=Gr(t)},updated(n,{value:e}){n._assigning||Qf(n,e)}};function Qf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Jr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Bo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Fu(e,a)>-1}else o.selected=e.has(a);else if(Qr(Bo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Bo(n){return"_value"in n?n._value:n.value}function Op(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const f0=["ctrl","shift","alt","meta"],h0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>f0.some(t=>n[`${t}Key`]&&!e.includes(t))},Gs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=h0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},d0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Es(s.key);if(e.some(o=>o===r||d0[o]===r))return n(s)})},p0=Yt({patchProp:o0},zv);let th;function m0(){return th||(th=xv(p0))}const g0=(...n)=>{const e=m0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_0(i);if(!s)return;const r=e._component;!st(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,v0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function v0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _0(n){return Ot(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="170",Br={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x0=0,nh=1,y0=2,Bp=1,M0=2,Ni=3,ji=0,Pn=1,On=2,ys=0,kr=1,ih=2,sh=3,rh=4,S0=5,Hs=100,b0=101,w0=102,E0=103,T0=104,A0=200,C0=201,R0=202,P0=203,Nc=204,Oc=205,D0=206,L0=207,I0=208,U0=209,F0=210,N0=211,O0=212,B0=213,k0=214,Bc=0,kc=1,zc=2,Wr=3,Hc=4,Vc=5,Gc=6,Wc=7,kp=0,z0=1,H0=2,Ms=0,V0=1,G0=2,W0=3,X0=4,Y0=5,$0=6,q0=7,zp=300,Xr=301,Yr=302,Xc=303,Yc=304,Ml=306,$c=1e3,Ws=1001,qc=1002,ri=1003,K0=1004,Jo=1005,en=1006,Nl=1007,_s=1008,Zi=1009,Hp=1010,Vp=1011,ko=1012,Ku=1013,js=1014,Hi=1015,Wo=1016,ju=1017,Zu=1018,$r=1020,Gp=35902,Wp=1021,Xp=1022,ti=1023,Yp=1024,$p=1025,zr=1026,qr=1027,qp=1028,Ju=1029,Kp=1030,Qu=1031,ef=1033,Na=33776,Oa=33777,Ba=33778,ka=33779,Kc=35840,jc=35841,Zc=35842,Jc=35843,Qc=36196,eu=37492,tu=37496,nu=37808,iu=37809,su=37810,ru=37811,ou=37812,au=37813,lu=37814,cu=37815,uu=37816,fu=37817,hu=37818,du=37819,pu=37820,mu=37821,za=36492,gu=36494,vu=36495,jp=36283,_u=36284,xu=36285,yu=36286,j0=3200,Z0=3201,J0=0,Q0=1,vs="",zt="srgb",eo="srgb-linear",Sl="linear",Mt="srgb",lr=7680,oh=519,e_=512,t_=513,n_=514,Zp=515,i_=516,s_=517,r_=518,o_=519,Mu=35044,ah="300 es",Vi=2e3,Ja=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const Ao=Math.PI/180,zo=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function a_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function l_(n,e,t){return n!==e?(t-n)/(e-n):0}function Co(n,e,t){return(1-t)*n+t*e}function c_(n,e,t,i){return Co(n,e,1-Math.exp(-t*i))}function u_(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function h_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p_(n,e){return n+Math.random()*(e-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(lh=n);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*Ao}function __(n){return n*zo}function x_(n){return(n&n-1)===0&&n!==0}function y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Su={DEG2RAD:Ao,RAD2DEG:zo,generateUUID:Xi,clamp:hn,euclideanModulo:tf,mapLinear:a_,inverseLerp:l_,lerp:Co,damp:c_,pingpong:u_,smoothstep:f_,smootherstep:h_,randInt:d_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:v_,radToDeg:__,isPowerOfTwo:x_,ceilPowerOfTwo:y_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:S_,normalize:_t,denormalize:ei};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],_=s[0],p=s[3],d=s[6],M=s[1],w=s[4],g=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*p+a*w+l*T,r[6]=o*d+a*g+l*E,r[1]=c*_+u*M+f*C,r[4]=c*p+u*w+f*T,r[7]=c*d+u*g+f*E,r[2]=h*_+m*M+v*C,r[5]=h*p+m*w+v*T,r[8]=h*d+m*g+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,v=t*f+i*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new ot;function Jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b_(){const n=Qa("canvas");return n.style.display="block",n}const ch={};function xo(n){n in ch||(ch[n]=!0,console.warn(n))}function w_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function E_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(n.r=Hr(n.r),n.g=Hr(n.g),n.b=Hr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vs?Sl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const uh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],hh=[.3127,.329],dh=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[eo]:{primaries:uh,whitePoint:hh,transfer:Sl,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:uh,whitePoint:hh,transfer:Mt,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let cr;class A_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Qa("canvas")),cr.width=e.width,cr.height=e.height;const i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Sn extends er{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Ws,s=Ws,r=en,o=_s,a=ti,l=Zi,c=Sn.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Xi(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $c:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $c:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=zp;Sn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,g=(m+1)/2,C=(d+1)/2,T=(u+h)/4,E=(f+_)/4,D=(v+p)/4;return w>g&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=E/i):g>C?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=T/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=E/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends P_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class em extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==v){let p=1-a;const d=l*h+c*m+u*v+f*_,M=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const C=Math.sqrt(w),T=Math.atan2(C,d*M);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const g=a*M;if(l=l*p+h*g,c=c*p+m*g,u=u*p+v*g,f=f*p+_*g,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-a*m,e[t+2]=c*v+u*m+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new Q,mh=new wi;class Xo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),ea.subVectors(this.max,lo),ur.subVectors(e.a,lo),fr.subVectors(e.b,lo),hr.subVectors(e.c,lo),as.subVectors(fr,ur),ls.subVectors(hr,fr),Ds.subVectors(ur,hr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ds.z,Ds.y,as.z,0,-as.x,ls.z,0,-ls.x,Ds.z,0,-Ds.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ds.y,Ds.x,0];return!zl(t,ur,fr,hr,ea)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,ur,fr,hr,ea))?!1:(ta.crossVectors(as,ls),t=[ta.x,ta.y,ta.z],zl(t,ur,fr,hr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Zn=new Q,Qo=new Xo,ur=new Q,fr=new Q,hr=new Q,as=new Q,ls=new Q,Ds=new Q,lo=new Q,ea=new Q,ta=new Q,Ls=new Q;function zl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);const a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const L_=new Xo,co=new Q,Hl=new Q;class nf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):L_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Hl)),this.expandByPoint(co.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new Q,Vl=new Q,na=new Q,cs=new Q,Gl=new Q,ia=new Q,Wl=new Q;class sf{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Vl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=cs.dot(this.direction),l=-cs.dot(na),c=cs.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vl).addScaledVector(na,h),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){Gl.subVectors(t,e),ia.subVectors(i,e),Wl.crossVectors(Gl,ia);let o=this.direction.dot(Wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(cs,ia));if(l<0)return null;const c=a*this.direction.dot(Gl.cross(cs));if(c<0||l+c>o)return null;const u=-a*cs.dot(Wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p)}set(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,_=c*f;t[0]=h+_*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,i){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),us.crossVectors(i,Un),us.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),us.crossVectors(i,Un)),us.normalize(),sa.crossVectors(Un,us),s[0]=us.x,s[4]=sa.x,s[8]=Un.x,s[1]=us.y,s[5]=sa.y,s[9]=Un.y,s[2]=us.z,s[6]=sa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],_=i[6],p=i[10],d=i[14],M=i[3],w=i[7],g=i[11],C=i[15],T=s[0],E=s[4],D=s[8],S=s[12],b=s[1],I=s[5],F=s[9],z=s[13],X=s[2],q=s[6],Y=s[10],te=s[14],V=s[3],ie=s[7],k=s[11],j=s[15];return r[0]=o*T+a*b+l*X+c*V,r[4]=o*E+a*I+l*q+c*ie,r[8]=o*D+a*F+l*Y+c*k,r[12]=o*S+a*z+l*te+c*j,r[1]=u*T+f*b+h*X+m*V,r[5]=u*E+f*I+h*q+m*ie,r[9]=u*D+f*F+h*Y+m*k,r[13]=u*S+f*z+h*te+m*j,r[2]=v*T+_*b+p*X+d*V,r[6]=v*E+_*I+p*q+d*ie,r[10]=v*D+_*F+p*Y+d*k,r[14]=v*S+_*z+p*te+d*j,r[3]=M*T+w*b+g*X+C*V,r[7]=M*E+w*I+g*q+C*ie,r[11]=M*D+w*F+g*Y+C*k,r[15]=M*S+w*z+g*te+C*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],_=e[7],p=e[11],d=e[15];return v*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*m-i*l*m)+_*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],_=e[13],p=e[14],d=e[15],M=f*p*c-_*h*c+_*l*m-a*p*m-f*l*d+a*h*d,w=v*h*c-u*p*c-v*l*m+o*p*m+u*l*d-o*h*d,g=u*_*c-v*f*c+v*a*m-o*_*m-u*a*d+o*f*d,C=v*f*l-u*_*l-v*a*h+o*_*h+u*a*p-o*f*p,T=t*M+i*w+s*g+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(_*h*r-f*p*r-_*s*m+i*p*m+f*s*d-i*h*d)*E,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*E,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*m-i*l*m)*E,e[4]=w*E,e[5]=(u*p*r-v*h*r+v*s*m-t*p*m-u*s*d+t*h*d)*E,e[6]=(v*l*r-o*p*r-v*s*c+t*p*c+o*s*d-t*l*d)*E,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*E,e[8]=g*E,e[9]=(v*f*r-u*_*r-v*i*m+t*_*m+u*i*d-t*f*d)*E,e[10]=(o*_*r-v*a*r+v*i*c-t*_*c-o*i*d+t*a*d)*E,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*E,e[12]=C*E,e[13]=(u*_*s-v*f*s+v*i*h-t*_*h-u*i*p+t*f*p)*E,e[14]=(v*a*s-o*_*s-v*i*l+t*_*l+o*i*p-t*a*p)*E,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,v=r*f,_=o*u,p=o*f,d=a*f,M=l*c,w=l*u,g=l*f,C=i.x,T=i.y,E=i.z;return s[0]=(1-(_+d))*C,s[1]=(m+g)*C,s[2]=(v-w)*C,s[3]=0,s[4]=(m-g)*T,s[5]=(1-(h+d))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(v+w)*E,s[9]=(p-M)*E,s[10]=(1-(h+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=dr.set(s[0],s[1],s[2]).length();const o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);const c=1/r,u=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Vi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let m,v;if(a===Vi)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ja)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Vi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,m=(i+s)*u;let v,_;if(a===Vi)v=(o+r)*f,_=-2*f;else if(a===Ja)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new Q,Jn=new Lt,I_=new Q(0,0,0),U_=new Q(1,1,1),us=new Q,sa=new Q,Un=new Q,gh=new Lt,vh=new wi;class Ji{constructor(e=0,t=0,i=0,s=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const _h=new Q,pr=new wi,Di=new Lt,ra=new Q,uo=new Q,N_=new Q,O_=new wi,xh=new Q(1,0,0),yh=new Q(0,1,0),Mh=new Q(0,0,1),Sh={type:"added"},B_={type:"removed"},mr={type:"childadded",child:null},Xl={type:"childremoved",child:null};class Dn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Q,t=new Ji,i=new wi,s=new Q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(uo,ra,this.up):Di.lookAt(ra,uo,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Di),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dn.DEFAULT_UP=new Q(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new Q,Li=new Q,Yl=new Q,Ii=new Q,gr=new Q,vr=new Q,bh=new Q,$l=new Q,ql=new Q,Kl=new Q,jl=new Nt,Zl=new Nt,Jl=new Nt;class Xn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Li.subVectors(i,t),Yl.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Li),l=Qn.dot(Yl),c=Li.dot(Li),u=Li.dot(Yl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return jl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),jl.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jl,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Li.subVectors(e,t),Qn.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Qn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;gr.subVectors(s,i),vr.subVectors(r,i),$l.subVectors(e,i);const l=gr.dot($l),c=vr.dot($l);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,s);const u=gr.dot(ql),f=vr.dot(ql);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gr,o);Kl.subVectors(e,r);const m=gr.dot(Kl),v=vr.dot(Kl);if(v>=0&&m<=v)return t.copy(r);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(vr,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return bh.subVectors(r,s),a=(f-u)/(f-u+(m-v)),t.copy(s).addScaledVector(bh,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=tf(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=tm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ct.fromWorkingColorSpace(an.copy(this),e),Math.round(hn(an.r*255,0,255))*65536+Math.round(hn(an.g*255,0,255))*256+Math.round(hn(an.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=zt){ct.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(oa);const i=Co(fs.h,oa.h,t),s=Co(fs.s,oa.s,t),r=Co(fs.l,oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=tm;let k_=0;class Yo extends er{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Xi(),this.name="",this.blending=kr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==Hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Js extends Yo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Q,aa=new tt;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}}class nm extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class im extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qs extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let z_=0;const Gn=new Lt,ec=new Dn,_r=new Q,Fn=new Xo,fo=new Xo,jt=new Q;class Ts extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?im:nm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qs(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Fn.min,fo.min),Fn.expandByPoint(jt),jt.addVectors(Fn.max,fo.max),Fn.expandByPoint(jt)):(Fn.expandByPoint(fo.min),Fn.expandByPoint(fo.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),jt.add(_r)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Q,l[D]=new Q;const c=new Q,u=new Q,f=new Q,h=new tt,m=new tt,v=new tt,_=new Q,p=new Q;function d(D,S,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,D),m.fromBufferAttribute(r,S),v.fromBufferAttribute(r,b),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(I),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(I),a[D].add(_),a[S].add(_),a[b].add(_),l[D].add(p),l[S].add(p),l[b].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const b=M[D],I=b.start,F=b.count;for(let z=I,X=I+F;z<X;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new Q,g=new Q,C=new Q,T=new Q;function E(D){C.fromBufferAttribute(s,D),T.copy(C);const S=a[D];w.copy(S),w.sub(C.multiplyScalar(C.dot(S))).normalize(),g.crossVectors(T,S);const I=g.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,I)}for(let D=0,S=M.length;D<S;++D){const b=M[D],I=b.start,F=b.count;for(let z=I,X=I+F;z<X;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new oi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ts,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new Lt,Is=new sf,la=new nf,Eh=new Q,ca=new Q,ua=new Q,fa=new Q,tc=new Q,ha=new Q,Th=new Q,da=new Q;class Dt extends Dn{constructor(e=new Ts,t=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(tc.fromBufferAttribute(f,e),o?ha.addScaledVector(tc,u):ha.addScaledVector(tc.sub(t),u))}t.add(ha)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(la.containsPoint(Is.origin)===!1&&(Is.intersectSphere(la,Eh)===null||Is.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Is.copy(e.ray).applyMatrix4(wh),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=M,C=w;g<C;g+=3){const T=a.getX(g),E=a.getX(g+1),D=a.getX(g+2);s=pa(this,d,e,i,c,u,f,T,E,D),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const M=a.getX(p),w=a.getX(p+1),g=a.getX(p+2);s=pa(this,o,e,i,c,u,f,M,w,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=M,C=w;g<C;g+=3){const T=g,E=g+1,D=g+2;s=pa(this,d,e,i,c,u,f,T,E,D),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const M=p,w=p+1,g=p+2;s=pa(this,o,e,i,c,u,f,M,w,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function H_(n,e,t,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;da.copy(a),da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function pa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ua),n.getVertexPosition(c,fa);const u=H_(n,e,t,i,ca,ua,fa,Th);if(u){const f=new Q;Xn.getBarycoord(Th,ca,ua,fa,f),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,l,c,f,new tt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,l,c,f,new tt)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,f,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Q,materialIndex:0};Xn.getNormal(ca,ua,fa,h.normal),u.face=h,u.barycoord=f}return u}class $o extends Ts{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qs(c,3)),this.setAttribute("normal",new qs(u,3)),this.setAttribute("uv",new qs(f,2));function v(_,p,d,M,w,g,C,T,E,D,S){const b=g/E,I=C/D,F=g/2,z=C/2,X=T/2,q=E+1,Y=D+1;let te=0,V=0;const ie=new Q;for(let k=0;k<Y;k++){const j=k*I-z;for(let K=0;K<q;K++){const ue=K*b-F;ie[_]=ue*M,ie[p]=j*w,ie[d]=X,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[d]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(K/E),f.push(1-k/D),te+=1}}for(let k=0;k<D;k++)for(let j=0;j<E;j++){const K=h+j+q*k,ue=h+j+q*(k+1),ne=h+(j+1)+q*(k+1),me=h+(j+1)+q*k;l.push(K,ue,me),l.push(ue,ne,me),V+=6}a.addGroup(m,V,S),m+=V,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xn(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const s in i)e[s]=i[s]}return e}function V_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const G_={clone:Kr,merge:xn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Yo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rm extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new Q,Ah=new tt,Ch=new tt;class Wn extends rm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Ch),t.subVectors(Ch,Ah)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,yr=1;class Y_ extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(xr,yr,e,t);s.layers=this.layers,this.add(s);const r=new Wn(xr,yr,e,t);r.layers=this.layers,this.add(r);const o=new Wn(xr,yr,e,t);o.layers=this.layers,this.add(o);const a=new Wn(xr,yr,e,t);a.layers=this.layers,this.add(a);const l=new Wn(xr,yr,e,t);l.layers=this.layers,this.add(l);const c=new Wn(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class om extends Sn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends Zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new om(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $o(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ys});r.uniforms.tEquirect.value=t;const o=new Dt(s,r),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=en),new Y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const nc=new Q,q_=new Q,K_=new ot;class yi{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nc.subVectors(i,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K_.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new nf,ma=new Q;class am{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],v=s[9],_=s[10],p=s[11],d=s[12],M=s[13],w=s[14],g=s[15];if(i[0].setComponents(l-r,h-c,p-m,g-d).normalize(),i[1].setComponents(l+r,h+c,p+m,g+d).normalize(),i[2].setComponents(l+o,h+u,p+v,g+M).normalize(),i[3].setComponents(l-o,h-u,p-v,g-M).normalize(),i[4].setComponents(l-a,h-f,p-_,g-w).normalize(),t===Vi)i[5].setComponents(l+a,h+f,p+_,g+w).normalize();else if(t===Ja)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function j_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Xt extends Ts{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],v=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*h-o;for(let w=0;w<c;w++){const g=w*f-r;v.push(g,-M,0),_.push(0,0,1),p.push(w/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const w=M+c*d,g=M+c*(d+1),C=M+1+c*(d+1),T=M+1+c*d;m.push(w,g,T),m.push(g,C,T)}this.setIndex(m),this.setAttribute("position",new qs(v,3)),this.setAttribute("normal",new qs(_,3)),this.setAttribute("uv",new qs(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rx=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,fx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vx=`uniform bool receiveShadow;
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
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
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
}`,jx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
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
}`,iM=`#if DEPTH_PACKING == 3200
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
}`,sM=`#define DISTANCE
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
}`,rM=`#define DISTANCE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,dM=`#define LAMBERT
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
}`,pM=`#define MATCAP
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
}`,mM=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,SM=`#define TOON
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
}`,bM=`#define TOON
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
}`,wM=`uniform float size;
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
}`,EM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:sx,batching_pars_vertex:rx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:lx,bsdfs:cx,iridescence_fragment:ux,bumpmap_pars_fragment:fx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:vx,color_pars_vertex:_x,color_vertex:xx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:bx,displacementmap_vertex:wx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:Ax,colorspace_pars_fragment:Cx,envmap_fragment:Rx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Dx,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ix,fog_vertex:Ux,fog_pars_vertex:Fx,fog_fragment:Nx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:kx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Vx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:qx,lights_physical_pars_fragment:Kx,lights_fragment_begin:jx,lights_fragment_maps:Zx,lights_fragment_end:Jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:fy,morphtarget_pars_vertex:hy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:vy,normal_vertex:_y,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:by,opaque_fragment:wy,packing:Ey,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:Cy,dithering_pars_fragment:Ry,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Iy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Fy,skinbase_vertex:Ny,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:qy,worldpos_vertex:Ky,background_vert:jy,background_frag:Zy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:sM,distanceRGBA_frag:rM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:fM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:vM,meshphong_vert:_M,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:MM,meshtoon_vert:SM,meshtoon_frag:bM,points_vert:wM,points_frag:EM,shadow_vert:TM,shadow_frag:AM,sprite_vert:CM,sprite_frag:RM},Be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Mi={basic:{uniforms:xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:xn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:xn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:xn([Be.points,Be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:xn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:xn([Be.common,Be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:xn([Be.sprite,Be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:xn([Be.common,Be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:xn([Be.lights,Be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Mi.physical={uniforms:xn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ga={r:0,b:0,g:0},Fs=new Ji,PM=new Lt;function DM(n,e,t,i,s,r,o){const a=new ht(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function v(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function _(M){let w=!1;const g=v(M);g===null?d(a,l):g&&g.isColor&&(d(g,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,w){const g=v(w);g&&(g.isCubeTexture||g.mapping===Ml)?(u===void 0&&(u=new Dt(new $o(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Kr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fs.copy(w.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Fs)),u.material.toneMapped=ct.getTransfer(g.colorSpace)!==Mt,(f!==g||h!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Dt(new Xt(2,2),new qn({name:"BackgroundMaterial",uniforms:Kr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ct.getTransfer(g.colorSpace)!==Mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,w){M.getRGB(ga,sm(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:p}}function LM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,I,F,z,X){let q=!1;const Y=f(z,F,I);r!==Y&&(r=Y,c(r.object)),q=m(b,z,F,X),q&&v(b,z,F,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,g(b,I,F,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,I,F){const z=F.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let Y=q[z];return Y===void 0&&(Y=h(l()),q[z]=Y),Y}function h(b){const I=[],F=[],z=[];for(let X=0;X<t;X++)I[X]=0,F[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:z,object:b,attributes:{},index:null}}function m(b,I,F,z){const X=r.attributes,q=I.attributes;let Y=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){const k=X[V];let j=q[V];if(j===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),k===void 0||k.attribute!==j||j&&k.data!==j.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function v(b,I,F,z){const X={},q=I.attributes;let Y=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){let k=q[V];k===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(k=b.instanceColor));const j={};j.attribute=k,k&&k.data&&(j.data=k.data),X[V]=j,Y++}r.attributes=X,r.attributesNum=Y,r.index=z}function _(){const b=r.newAttributes;for(let I=0,F=b.length;I<F;I++)b[I]=0}function p(b){d(b,0)}function d(b,I){const F=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;F[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),X[b]!==I&&(n.vertexAttribDivisor(b,I),X[b]=I)}function M(){const b=r.newAttributes,I=r.enabledAttributes;for(let F=0,z=I.length;F<z;F++)I[F]!==b[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function w(b,I,F,z,X,q,Y){Y===!0?n.vertexAttribIPointer(b,I,F,X,q):n.vertexAttribPointer(b,I,F,z,X,q)}function g(b,I,F,z){_();const X=z.attributes,q=F.getAttributes(),Y=I.defaultAttributeValues;for(const te in q){const V=q[te];if(V.location>=0){let ie=X[te];if(ie===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const k=ie.normalized,j=ie.itemSize,K=e.get(ie);if(K===void 0)continue;const ue=K.buffer,ne=K.type,me=K.bytesPerElement,ye=ne===n.INT||ne===n.UNSIGNED_INT||ie.gpuType===Ku;if(ie.isInterleavedBufferAttribute){const _e=ie.data,Oe=_e.stride,He=ie.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)d(V.location+We,_e.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<V.locationSize;We++)p(V.location+We);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let We=0;We<V.locationSize;We++)w(V.location+We,j/V.locationSize,ne,k,Oe*me,(He+j/V.locationSize*We)*me,ye)}else{if(ie.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)d(V.location+_e,ie.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<V.locationSize;_e++)p(V.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let _e=0;_e<V.locationSize;_e++)w(V.location+_e,j/V.locationSize,ne,k,j*me,j/V.locationSize*_e*me,ye)}}else if(Y!==void 0){const k=Y[te];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(V.location,k);break;case 3:n.vertexAttrib3fv(V.location,k);break;case 4:n.vertexAttrib4fv(V.location,k);break;default:n.vertexAttrib1fv(V.location,k)}}}}M()}function C(){D();for(const b in i){const I=i[b];for(const F in I){const z=I[F];for(const X in z)u(z[X].object),delete z[X];delete I[F]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const F in I){const z=I[F];for(const X in z)u(z[X].object),delete z[X];delete I[F]}delete i[b.id]}function E(b){for(const I in i){const F=i[I];if(F[b.id]===void 0)continue;const z=F[b.id];for(const X in z)u(z[X].object),delete z[X];delete F[b.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function IM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_]*h[_];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==ti&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const D=E===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Zi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hi&&!D)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:g,vertexTextures:C,maxSamples:T}}function FM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new yi,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,w=M*4;let g=d.clippingState||null;l.value=g,g=u(v,h,w,m);for(let C=0;C!==w;++C)g[C]=t[C];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=m+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let w=0,g=m;w!==_;++w,g+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(p,g),p[g+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function NM(n){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=Xr:a===Yc&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xc||a===Yc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class tr extends rm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,Rh=[.125,.215,.35,.446,.526,.582],Vs=20,ic=new tr,Ph=new ht;let sc=null,rc=0,oc=0,ac=!1;const Bs=(1+Math.sqrt(5))/2,Mr=1/Bs,Dh=[new Q(-Bs,Mr,0),new Q(Bs,Mr,0),new Q(-Mr,0,Bs),new Q(Mr,0,Bs),new Q(0,Bs,-Mr),new Q(0,Bs,Mr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Wo,format:ti,colorSpace:eo,depthBuffer:!1},s=Ih(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(r)),this._blurMaterial=BM(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,i,s){const a=new Wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ph),u.toneMapping=Ms,u.autoClear=!1;const m=new Js({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new Dt(new $o,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ph),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const w=this._cubeSize;va(s,M*w,d>2?w:0,w,w),u.setRenderTarget(s),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Xr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ic)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vs-1),_=r/v,p=isFinite(r)?1+Math.floor(u*_):Vs;p>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vs}`);const d=[];let M=0;for(let E=0;E<Vs;++E){const D=E/_,S=Math.exp(-D*D/2);d.push(S),E===0?M+=S:E<p&&(M+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-i;const g=this._sizeLods[s],C=3*g*(s>w-Rr?s-w+Rr:0),T=4*(this._cubeSize-g);va(t,C,T,3*g,2*g),l.setRenderTarget(t),l.render(f,ic)}}function OM(n){const e=[],t=[],i=[];let s=n;const r=n-Rr+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Rr?l=Rh[o-n+Rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,d=1,M=new Float32Array(_*v*m),w=new Float32Array(p*v*m),g=new Float32Array(d*v*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,D=T>2?0:-1,S=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];M.set(S,_*v*T),w.set(h,p*v*T);const b=[T,T,T,T,T,T];g.set(b,d*v*T)}const C=new Ts;C.setAttribute("position",new oi(M,_)),C.setAttribute("uv",new oi(w,p)),C.setAttribute("faceIndex",new oi(g,d)),e.push(C),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ih(n,e,t){const i=new Zs(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function BM(n,e,t){const i=new Float32Array(Vs),s=new Q(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:of(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Uh(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Fh(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}function kM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xc||l===Yc,u=l===Xr||l===Yr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Lh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function HM(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let w=0,g=M.length;w<g;w+=3){const C=M[w+0],T=M[w+1],E=M[w+2];h.push(C,T,T,E,E,C)}}else if(v!==void 0){const M=v.array;_=v.version;for(let w=0,g=M.length/3-1;w<g;w+=3){const C=w+0,T=w+1,E=w+2;h.push(C,T,T,E,E,C)}}else return;const p=new(Jp(h)?im:nm)(h,1);p.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,r,h*o),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,h*o,v),t.update(m,i,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,i,1)}function f(h,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,_,0,v);let d=0;for(let M=0;M<v;M++)d+=m[M]*_[M];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function GM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function WM(n,e,t){const i=new WeakMap,s=new Nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),_===!0&&(g=2),p===!0&&(g=3);let C=a.attributes.position.count*g,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*T*4*f),D=new em(E,C,T,f);D.type=Hi,D.needsUpdate=!0;const S=g*4;for(let I=0;I<f;I++){const F=d[I],z=M[I],X=w[I],q=C*T*4*I;for(let Y=0;Y<F.count;Y++){const te=Y*S;v===!0&&(s.fromBufferAttribute(F,Y),E[q+te+0]=s.x,E[q+te+1]=s.y,E[q+te+2]=s.z,E[q+te+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),E[q+te+4]=s.x,E[q+te+5]=s.y,E[q+te+6]=s.z,E[q+te+7]=0),p===!0&&(s.fromBufferAttribute(X,Y),E[q+te+8]=s.x,E[q+te+9]=s.y,E[q+te+10]=s.z,E[q+te+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:D,size:new tt(C,T)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function XM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class cm extends Sn{constructor(e,t,i,s,r,o,a,l,c,u=zr){if(u!==zr&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=js),i===void 0&&u===qr&&(i=$r),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const um=new Sn,Nh=new cm(1,1),fm=new em,hm=new D_,dm=new om,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),qt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),qt(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),qt(t,i)}}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function aS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nh.compareFunction=Zp,r=Nh):r=um,t.setTexture2D(e||r,s)}function lS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hm,s)}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dm,s)}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fm,s)}function fS(n){switch(n){case 5126:return YM;case 35664:return $M;case 35665:return qM;case 35666:return KM;case 35674:return jM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}function hS(n,e){n.uniform1fv(this.addr,e)}function dS(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function pS(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function mS(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function gS(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vS(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _S(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xS(n,e){n.uniform1iv(this.addr,e)}function yS(n,e){n.uniform2iv(this.addr,e)}function MS(n,e){n.uniform3iv(this.addr,e)}function SS(n,e){n.uniform4iv(this.addr,e)}function bS(n,e){n.uniform1uiv(this.addr,e)}function wS(n,e){n.uniform2uiv(this.addr,e)}function ES(n,e){n.uniform3uiv(this.addr,e)}function TS(n,e){n.uniform4uiv(this.addr,e)}function AS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||um,r[o])}function CS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hm,r[o])}function RS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dm,r[o])}function PS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fm,r[o])}function DS(n){switch(n){case 5126:return hS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return vS;case 35676:return _S;case 5124:case 35670:return xS;case 35667:case 35671:return yS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return bS;case 36294:return wS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}class LS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fS(t.type)}}class IS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Vh(n,e){n.seq.push(e),n.map[e.id]=e}function FS(n,e,t){const i=n.name,s=i.length;for(lc.lastIndex=0;;){const r=lc.exec(i),o=lc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(t,c===void 0?new LS(a,n,e):new IS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new US(a),Vh(t,f)),t=f}}}class Ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);FS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Gh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NS=37297;let OS=0;function BS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wh=new ot;function kS(n){ct._getMatrix(Wh,ct.workingColorSpace,n);const e=`mat3( ${Wh.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Sl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+BS(n.getShaderSource(e),o)}else return s}function zS(n,e){const t=kS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HS(n,e){let t;switch(e){case V0:t="Linear";break;case G0:t="Reinhard";break;case W0:t="Cineon";break;case X0:t="ACESFilmic";break;case $0:t="AgX";break;case q0:t="Neutral";break;case Y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new Q;function VS(){ct.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function WS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yo(n){return n!==""}function Yh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(YS,qS)}const $S=new Map;function qS(n,e){let t=at[e];if(t===void 0){const i=$S.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bu(t)}const KS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(KS,jS)}function jS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ZS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZS(t),c=JS(t),u=QS(t),f=eb(t),h=tb(t),m=GS(t),v=WS(r),_=s.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yo).join(`
`),d.length>0&&(d+=`
`)):(p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),d=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?at.tonemapping_pars_fragment:"",t.toneMapping!==Ms?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,zS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=bu(o),o=Yh(o,t),o=$h(o,t),a=bu(a),a=Yh(a,t),a=$h(a,t),o=qh(o),a=qh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+p+o,g=M+d+a,C=Gh(s,s.VERTEX_SHADER,w),T=Gh(s,s.FRAGMENT_SHADER,g);s.attachShader(_,C),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(C).trim(),X=s.getShaderInfoLog(T).trim();let q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,T);else{const te=Xh(s,C,"vertex"),V=Xh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+te+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||X==="")&&(Y=!1);Y&&(I.diagnostics={runnable:q,programLog:F,vertexShader:{log:z,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(C),s.deleteShader(T),D=new Ha(s,_),S=XS(s,_)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,NS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rb(e),t.set(e,i)),i}}class rb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,s,r,o){const a=new rf,l=new sb,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,I,F,z){const X=F.fog,q=z.geometry,Y=S.isMeshStandardMaterial?F.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),V=te&&te.mapping===Ml?te.image.height:null,ie=v[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const k=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,j=k!==void 0?k.length:0;let K=0;q.morphAttributes.position!==void 0&&(K=1),q.morphAttributes.normal!==void 0&&(K=2),q.morphAttributes.color!==void 0&&(K=3);let ue,ne,me,ye;if(ie){const lt=Mi[ie];ue=lt.vertexShader,ne=lt.fragmentShader}else ue=S.vertexShader,ne=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const _e=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),He=z.isInstancedMesh===!0,We=z.isBatchedMesh===!0,Me=!!S.map,L=!!S.matcap,O=!!te,R=!!S.aoMap,fe=!!S.lightMap,re=!!S.bumpMap,se=!!S.normalMap,ae=!!S.displacementMap,xe=!!S.emissiveMap,le=!!S.metalnessMap,y=!!S.roughnessMap,x=S.anisotropy>0,A=S.clearcoat>0,N=S.dispersion>0,W=S.iridescence>0,Z=S.sheen>0,we=S.transmission>0,pe=x&&!!S.anisotropyMap,be=A&&!!S.clearcoatMap,ke=A&&!!S.clearcoatNormalMap,U=A&&!!S.clearcoatRoughnessMap,B=W&&!!S.iridescenceMap,ee=W&&!!S.iridescenceThicknessMap,Ee=Z&&!!S.sheenColorMap,he=Z&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Pe=!!S.specularColorMap,Ve=!!S.specularIntensityMap,G=we&&!!S.transmissionMap,Ce=we&&!!S.thicknessMap,de=!!S.gradientMap,Se=!!S.alphaMap,Fe=S.alphaTest>0,Ue=!!S.alphaHash,Qe=!!S.extensions;let xt=Ms;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(xt=n.toneMapping);const It={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:ne,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:We,batchingColor:We&&z._colorsTexture!==null,instancing:He,instancingColor:He&&z.instanceColor!==null,instancingMorph:He&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:eo,alphaToCoverage:!!S.alphaToCoverage,map:Me,matcap:L,envMap:O,envMapMode:O&&te.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:fe,bumpMap:re,normalMap:se,displacementMap:h&&ae,emissiveMap:xe,normalMapObjectSpace:se&&S.normalMapType===Q0,normalMapTangentSpace:se&&S.normalMapType===J0,metalnessMap:le,roughnessMap:y,anisotropy:x,anisotropyMap:pe,clearcoat:A,clearcoatMap:be,clearcoatNormalMap:ke,clearcoatRoughnessMap:U,dispersion:N,iridescence:W,iridescenceMap:B,iridescenceThicknessMap:ee,sheen:Z,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:Te,specularColorMap:Pe,specularIntensityMap:Ve,transmission:we,transmissionMap:G,thicknessMap:Ce,gradientMap:de,opaque:S.transparent===!1&&S.blending===kr&&S.alphaToCoverage===!1,alphaMap:Se,alphaTest:Fe,alphaHash:Ue,combine:S.combine,mapUv:Me&&_(S.map.channel),aoMapUv:R&&_(S.aoMap.channel),lightMapUv:fe&&_(S.lightMap.channel),bumpMapUv:re&&_(S.bumpMap.channel),normalMapUv:se&&_(S.normalMap.channel),displacementMapUv:ae&&_(S.displacementMap.channel),emissiveMapUv:xe&&_(S.emissiveMap.channel),metalnessMapUv:le&&_(S.metalnessMap.channel),roughnessMapUv:y&&_(S.roughnessMap.channel),anisotropyMapUv:pe&&_(S.anisotropyMap.channel),clearcoatMapUv:be&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:Pe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ve&&_(S.specularIntensityMap.channel),transmissionMapUv:G&&_(S.transmissionMap.channel),thicknessMapUv:Ce&&_(S.thicknessMap.channel),alphaMapUv:Se&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(se||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Me||Se),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Oe,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&S.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(b,S),w(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function g(S){const b=v[S.type];let I;if(b){const F=Mi[b];I=G_.clone(F.uniforms)}else I=S.uniforms;return I}function C(S,b){let I;for(let F=0,z=u.length;F<z;F++){const X=u[F];if(X.cacheKey===b){I=X,++I.usedTimes;break}}return I===void 0&&(I=new nb(n,b,S,r),u.push(I)),I}function T(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:D}}function ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,v,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||lb),i.length>1&&i.sort(h||jh),s.length>1&&s.sort(h||jh)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Zh,n.set(i,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new ht};break;case"SpotLight":t={position:new Q,direction:new Q,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hb=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new ub,t=fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Lt,o=new Lt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,v=0,_=0,p=0,d=0,M=0,w=0,g=0,C=0,T=0,E=0;c.sort(db);for(let S=0,b=c.length;S<b;S++){const I=c[S],F=I.color,z=I.intensity,X=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*z,f+=F.g*z,h+=F.b*z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],z);E++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[_]=Y;const te=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,te.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=te.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=q,g++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(F).multiplyScalar(z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=Y,p++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const te=I.shadow,V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=I.shadow.matrix,w++}i.point[v]=Y,v++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(z),Y.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[d]=Y,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==m||D.pointLength!==v||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==g||D.numSpotMaps!==C||D.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=g+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,D.directionalLength=m,D.pointLength=v,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=g,D.numSpotMaps=C,D.numLightProbes=E,i.version=hb++)}function l(c,u){let f=0,h=0,m=0,v=0,_=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const w=c[d];if(w.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),f++}else if(w.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),g.halfWidth.set(w.width*.5,0,0),g.halfHeight.set(0,w.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){const g=i.hemi[_];g.direction.setFromMatrixPosition(w.matrixWorld),g.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Jh(n){const e=new pb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Jh(n),e.set(s,[a])):r>=o.length?(a=new Jh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gb extends Yo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=j0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vb extends Yo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function yb(n,e,t){let i=new am;const s=new tt,r=new tt,o=new Nt,a=new gb({depthPacking:Z0}),l=new vb,c={},u=t.maxTextureSize,f={[ji]:Pn,[Pn]:ji,[On]:On},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:_b,fragmentShader:xb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ts;v.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let d=this.type;this.render=function(T,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ys),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==Ni&&this.type===Ni,X=d===Ni&&this.type!==Ni;for(let q=0,Y=T.length;q<Y;q++){const te=T[q],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){const j=this.type!==Ni?{minFilter:ri,magFilter:ri}:{};V.map!==null&&V.map.dispose(),V.map=new Zs(s.x,s.y,j),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const k=V.getViewportCount();for(let j=0;j<k;j++){const K=V.getViewport(j);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),F.viewport(o),V.updateMatrices(te,j),i=V.getFrustum(),g(E,D,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&M(V,D),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,b,I)};function M(T,E){const D=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,D,h,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,D,m,_,null)}function w(T,E,D,S){let b=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=b.uuid,z=E.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let q=X[z];q===void 0&&(q=b.clone(),X[z]=q,E.addEventListener("dispose",C)),b=q}if(b.visible=E.visible,b.wireframe=E.wireframe,S===Ni?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=n.properties.get(b);F.light=D}return b}function g(T,E,D,S,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const z=e.update(T),X=T.material;if(Array.isArray(X)){const q=z.groups;for(let Y=0,te=q.length;Y<te;Y++){const V=q[Y],ie=X[V.materialIndex];if(ie&&ie.visible){const k=w(T,ie,S,b);T.onBeforeShadow(n,T,E,D,z,k,V),n.renderBufferDirect(D,null,z,k,T,V),T.onAfterShadow(n,T,E,D,z,k,V)}}}else if(X.visible){const q=w(T,X,S,b);T.onBeforeShadow(n,T,E,D,z,q,null),n.renderBufferDirect(D,null,z,q,T,null),T.onAfterShadow(n,T,E,D,z,q,null)}}const F=T.children;for(let z=0,X=F.length;z<X;z++)g(F[z],E,D,S,b)}function C(T){T.target.removeEventListener("dispose",C);for(const D in c){const S=c[D],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Mb={[Bc]:kc,[zc]:Gc,[Hc]:Wc,[Wr]:Vc,[kc]:Bc,[Gc]:zc,[Wc]:Hc,[Vc]:Wr};function Sb(n,e){function t(){let G=!1;const Ce=new Nt;let de=null;const Se=new Nt(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!G&&(n.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,Ue,Qe,xt,It){It===!0&&(Fe*=xt,Ue*=xt,Qe*=xt),Ce.set(Fe,Ue,Qe,xt),Se.equals(Ce)===!1&&(n.clearColor(Fe,Ue,Qe,xt),Se.copy(Ce))},reset:function(){G=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let G=!1,Ce=!1,de=null,Se=null,Fe=null;return{setReversed:function(Ue){if(Ce!==Ue){const Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const xt=Fe;Fe=null,this.setClear(xt)}Ce=Ue},getReversed:function(){return Ce},setTest:function(Ue){Ue?_e(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ue){de!==Ue&&!G&&(n.depthMask(Ue),de=Ue)},setFunc:function(Ue){if(Ce&&(Ue=Mb[Ue]),Se!==Ue){switch(Ue){case Bc:n.depthFunc(n.NEVER);break;case kc:n.depthFunc(n.ALWAYS);break;case zc:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case Hc:n.depthFunc(n.EQUAL);break;case Vc:n.depthFunc(n.GEQUAL);break;case Gc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Ue}},setLocked:function(Ue){G=Ue},setClear:function(Ue){Fe!==Ue&&(Ce&&(Ue=1-Ue),n.clearDepth(Ue),Fe=Ue)},reset:function(){G=!1,de=null,Se=null,Fe=null,Ce=!1}}}function s(){let G=!1,Ce=null,de=null,Se=null,Fe=null,Ue=null,Qe=null,xt=null,It=null;return{setTest:function(lt){G||(lt?_e(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!G&&(n.stencilMask(lt),Ce=lt)},setFunc:function(lt,rn,Ct){(de!==lt||Se!==rn||Fe!==Ct)&&(n.stencilFunc(lt,rn,Ct),de=lt,Se=rn,Fe=Ct)},setOp:function(lt,rn,Ct){(Ue!==lt||Qe!==rn||xt!==Ct)&&(n.stencilOp(lt,rn,Ct),Ue=lt,Qe=rn,xt=Ct)},setLocked:function(lt){G=lt},setClear:function(lt){It!==lt&&(n.clearStencil(lt),It=lt)},reset:function(){G=!1,Ce=null,de=null,Se=null,Fe=null,Ue=null,Qe=null,xt=null,It=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,d=null,M=null,w=null,g=null,C=null,T=null,E=new ht(0,0,0),D=0,S=!1,b=null,I=null,F=null,z=null,X=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=te>=2);let ie=null,k={};const j=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ue=new Nt().fromArray(j),ne=new Nt().fromArray(K);function me(G,Ce,de,Se){const Fe=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(G,Ue),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<de;Qe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Ce+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Ue}const ye={};ye[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(Wr),re(!1),se(nh),_e(n.CULL_FACE),R(ys);function _e(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Oe(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function He(G,Ce){return f[G]!==Ce?(n.bindFramebuffer(G,Ce),f[G]=Ce,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function We(G,Ce){let de=m,Se=!1;if(G){de=h.get(Ce),de===void 0&&(de=[],h.set(Ce,de));const Fe=G.textures;if(de.length!==Fe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Qe=Fe.length;Ue<Qe;Ue++)de[Ue]=n.COLOR_ATTACHMENT0+Ue;de.length=Fe.length,Se=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Se=!0);Se&&n.drawBuffers(de)}function Me(G){return v!==G?(n.useProgram(G),v=G,!0):!1}const L={[Hs]:n.FUNC_ADD,[b0]:n.FUNC_SUBTRACT,[w0]:n.FUNC_REVERSE_SUBTRACT};L[E0]=n.MIN,L[T0]=n.MAX;const O={[A0]:n.ZERO,[C0]:n.ONE,[R0]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[F0]:n.SRC_ALPHA_SATURATE,[I0]:n.DST_COLOR,[D0]:n.DST_ALPHA,[P0]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[U0]:n.ONE_MINUS_DST_COLOR,[L0]:n.ONE_MINUS_DST_ALPHA,[N0]:n.CONSTANT_COLOR,[O0]:n.ONE_MINUS_CONSTANT_COLOR,[B0]:n.CONSTANT_ALPHA,[k0]:n.ONE_MINUS_CONSTANT_ALPHA};function R(G,Ce,de,Se,Fe,Ue,Qe,xt,It,lt){if(G===ys){_===!0&&(Oe(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),G!==S0){if(G!==p||lt!==S){if((d!==Hs||g!==Hs)&&(n.blendEquation(n.FUNC_ADD),d=Hs,g=Hs),lt)switch(G){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,w=null,C=null,T=null,E.set(0,0,0),D=0,p=G,S=lt}return}Fe=Fe||Ce,Ue=Ue||de,Qe=Qe||Se,(Ce!==d||Fe!==g)&&(n.blendEquationSeparate(L[Ce],L[Fe]),d=Ce,g=Fe),(de!==M||Se!==w||Ue!==C||Qe!==T)&&(n.blendFuncSeparate(O[de],O[Se],O[Ue],O[Qe]),M=de,w=Se,C=Ue,T=Qe),(xt.equals(E)===!1||It!==D)&&(n.blendColor(xt.r,xt.g,xt.b,It),E.copy(xt),D=It),p=G,S=!1}function fe(G,Ce){G.side===On?Oe(n.CULL_FACE):_e(n.CULL_FACE);let de=G.side===Pn;Ce&&(de=!de),re(de),G.blending===kr&&G.transparent===!1?R(ys):R(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Se=G.stencilWrite;a.setTest(Se),Se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(G){b!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),b=G)}function se(G){G!==x0?(_e(n.CULL_FACE),G!==I&&(G===nh?n.cullFace(n.BACK):G===y0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),I=G}function ae(G){G!==F&&(Y&&n.lineWidth(G),F=G)}function xe(G,Ce,de){G?(_e(n.POLYGON_OFFSET_FILL),(z!==Ce||X!==de)&&(n.polygonOffset(Ce,de),z=Ce,X=de)):Oe(n.POLYGON_OFFSET_FILL)}function le(G){G?_e(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function y(G){G===void 0&&(G=n.TEXTURE0+q-1),ie!==G&&(n.activeTexture(G),ie=G)}function x(G,Ce,de){de===void 0&&(ie===null?de=n.TEXTURE0+q-1:de=ie);let Se=k[de];Se===void 0&&(Se={type:void 0,texture:void 0},k[de]=Se),(Se.type!==G||Se.texture!==Ce)&&(ie!==de&&(n.activeTexture(de),ie=de),n.bindTexture(G,Ce||ye[G]),Se.type=G,Se.texture=Ce)}function A(){const G=k[ie];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(G){ue.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function he(G){ne.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ne.copy(G))}function Te(G,Ce){let de=c.get(Ce);de===void 0&&(de=new WeakMap,c.set(Ce,de));let Se=de.get(G);Se===void 0&&(Se=n.getUniformBlockIndex(Ce,G.name),de.set(G,Se))}function Pe(G,Ce){const Se=c.get(Ce).get(G);l.get(Ce)!==Se&&(n.uniformBlockBinding(Ce,Se,G.__bindingPointIndex),l.set(Ce,Se))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,k={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,d=null,M=null,w=null,g=null,C=null,T=null,E=new ht(0,0,0),D=0,S=!1,b=null,I=null,F=null,z=null,X=null,ue.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:Oe,bindFramebuffer:He,drawBuffers:We,useProgram:Me,setBlending:R,setMaterial:fe,setFlipSided:re,setCullFace:se,setLineWidth:ae,setPolygonOffset:xe,setScissorTest:le,activeTexture:y,bindTexture:x,unbindTexture:A,compressedTexImage2D:N,compressedTexImage3D:W,texImage2D:B,texImage3D:ee,updateUBOMapping:Te,uniformBlockBinding:Pe,texStorage2D:ke,texStorage3D:U,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:pe,compressedTexSubImage3D:be,scissor:Ee,viewport:he,reset:Ve}}function Qh(n,e,t,i){const s=bb(i);switch(t){case Wp:return n*e;case Yp:return n*e;case $p:return n*e*2;case qp:return n*e/s.components*s.byteLength;case Ju:return n*e/s.components*s.byteLength;case Kp:return n*e*2/s.components*s.byteLength;case Qu:return n*e*2/s.components*s.byteLength;case Xp:return n*e*3/s.components*s.byteLength;case ti:return n*e*4/s.components*s.byteLength;case ef:return n*e*4/s.components*s.byteLength;case Na:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:case Jc:return Math.max(n,16)*Math.max(e,8)/4;case Kc:case Zc:return Math.max(n,8)*Math.max(e,8)/2;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case gu:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jp:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bb(n){switch(n){case Zi:case Hp:return{byteLength:1,components:1};case ko:case Vp:case Wo:return{byteLength:2,components:1};case ju:case Zu:return{byteLength:2,components:4};case js:case Ku:case Hi:return{byteLength:4,components:1};case Gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,x){return m?new OffscreenCanvas(y,x):Qa("canvas")}function _(y,x,A){let N=1;const W=le(y);if((W.width>A||W.height>A)&&(N=A/Math.max(W.width,W.height)),N<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Z=Math.floor(N*W.width),we=Math.floor(N*W.height);f===void 0&&(f=v(Z,we));const pe=x?v(Z,we):f;return pe.width=Z,pe.height=we,pe.getContext("2d").drawImage(y,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Z+"x"+we+")."),pe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function p(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function M(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(y,x,A,N,W=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=x;if(x===n.RED&&(A===n.FLOAT&&(Z=n.R32F),A===n.HALF_FLOAT&&(Z=n.R16F),A===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(Z=n.R8UI),A===n.UNSIGNED_SHORT&&(Z=n.R16UI),A===n.UNSIGNED_INT&&(Z=n.R32UI),A===n.BYTE&&(Z=n.R8I),A===n.SHORT&&(Z=n.R16I),A===n.INT&&(Z=n.R32I)),x===n.RG&&(A===n.FLOAT&&(Z=n.RG32F),A===n.HALF_FLOAT&&(Z=n.RG16F),A===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(Z=n.RG8UI),A===n.UNSIGNED_SHORT&&(Z=n.RG16UI),A===n.UNSIGNED_INT&&(Z=n.RG32UI),A===n.BYTE&&(Z=n.RG8I),A===n.SHORT&&(Z=n.RG16I),A===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),A===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),A===n.UNSIGNED_INT&&(Z=n.RGB32UI),A===n.BYTE&&(Z=n.RGB8I),A===n.SHORT&&(Z=n.RGB16I),A===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),A===n.UNSIGNED_INT&&(Z=n.RGBA32UI),A===n.BYTE&&(Z=n.RGBA8I),A===n.SHORT&&(Z=n.RGBA16I),A===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const we=W?Sl:ct.getTransfer(N);A===n.FLOAT&&(Z=n.RGBA32F),A===n.HALF_FLOAT&&(Z=n.RGBA16F),A===n.UNSIGNED_BYTE&&(Z=we===Mt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(y,x){let A;return y?x===null||x===js||x===$r?A=n.DEPTH24_STENCIL8:x===Hi?A=n.DEPTH32F_STENCIL8:x===ko&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===js||x===$r?A=n.DEPTH_COMPONENT24:x===Hi?A=n.DEPTH_COMPONENT32F:x===ko&&(A=n.DEPTH_COMPONENT16),A}function C(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==ri&&y.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function T(y){const x=y.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function E(y){const x=y.target;x.removeEventListener("dispose",E),b(x)}function D(y){const x=i.get(y);if(x.__webglInit===void 0)return;const A=y.source,N=h.get(A);if(N){const W=N[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&S(y),Object.keys(N).length===0&&h.delete(A)}i.remove(y)}function S(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const A=y.source,N=h.get(A);delete N[x.__cacheKey],o.memory.textures--}function b(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(x.__webglFramebuffer[N]))for(let W=0;W<x.__webglFramebuffer[N].length;W++)n.deleteFramebuffer(x.__webglFramebuffer[N][W]);else n.deleteFramebuffer(x.__webglFramebuffer[N]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[N])}else{if(Array.isArray(x.__webglFramebuffer))for(let N=0;N<x.__webglFramebuffer.length;N++)n.deleteFramebuffer(x.__webglFramebuffer[N]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let N=0;N<x.__webglColorRenderbuffer.length;N++)x.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[N]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const A=y.textures;for(let N=0,W=A.length;N<W;N++){const Z=i.get(A[N]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(A[N])}i.remove(y)}let I=0;function F(){I=0}function z(){const y=I;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),I+=1,y}function X(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function q(y,x){const A=i.get(y);if(y.isVideoTexture&&ae(y),y.isRenderTargetTexture===!1&&y.version>0&&A.__version!==y.version){const N=y.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(A,y,x);return}}t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+x)}function Y(y,x){const A=i.get(y);if(y.version>0&&A.__version!==y.version){ne(A,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+x)}function te(y,x){const A=i.get(y);if(y.version>0&&A.__version!==y.version){ne(A,y,x);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+x)}function V(y,x){const A=i.get(y);if(y.version>0&&A.__version!==y.version){me(A,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+x)}const ie={[$c]:n.REPEAT,[Ws]:n.CLAMP_TO_EDGE,[qc]:n.MIRRORED_REPEAT},k={[ri]:n.NEAREST,[K0]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},j={[e_]:n.NEVER,[o_]:n.ALWAYS,[t_]:n.LESS,[Zp]:n.LEQUAL,[n_]:n.EQUAL,[r_]:n.GEQUAL,[i_]:n.GREATER,[s_]:n.NOTEQUAL};function K(y,x){if(x.type===Hi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Nl||x.magFilter===Jo||x.magFilter===_s||x.minFilter===en||x.minFilter===Nl||x.minFilter===Jo||x.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ie[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ie[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ie[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,k[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,k[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,j[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ri||x.minFilter!==Jo&&x.minFilter!==_s||x.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ue(y,x){let A=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",T));const N=x.source;let W=h.get(N);W===void 0&&(W={},h.set(N,W));const Z=X(x);if(Z!==y.__cacheKey){W[Z]===void 0&&(W[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,A=!0),W[Z].usedTimes++;const we=W[y.__cacheKey];we!==void 0&&(W[y.__cacheKey].usedTimes--,we.usedTimes===0&&S(x)),y.__cacheKey=Z,y.__webglTexture=W[Z].texture}return A}function ne(y,x,A){let N=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(N=n.TEXTURE_3D);const W=ue(y,x),Z=x.source;t.bindTexture(N,y.__webglTexture,n.TEXTURE0+A);const we=i.get(Z);if(Z.version!==we.__version||W===!0){t.activeTexture(n.TEXTURE0+A);const pe=ct.getPrimaries(ct.workingColorSpace),be=x.colorSpace===vs?null:ct.getPrimaries(x.colorSpace),ke=x.colorSpace===vs||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let U=_(x.image,!1,s.maxTextureSize);U=xe(x,U);const B=r.convert(x.format,x.colorSpace),ee=r.convert(x.type);let Ee=w(x.internalFormat,B,ee,x.colorSpace,x.isVideoTexture);K(N,x);let he;const Te=x.mipmaps,Pe=x.isVideoTexture!==!0,Ve=we.__version===void 0||W===!0,G=Z.dataReady,Ce=C(x,U);if(x.isDepthTexture)Ee=g(x.format===qr,x.type),Ve&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ee,U.width,U.height):t.texImage2D(n.TEXTURE_2D,0,Ee,U.width,U.height,0,B,ee,null));else if(x.isDataTexture)if(Te.length>0){Pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Te[0].width,Te[0].height);for(let de=0,Se=Te.length;de<Se;de++)he=Te[de],Pe?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,he.width,he.height,B,ee,he.data):t.texImage2D(n.TEXTURE_2D,de,Ee,he.width,he.height,0,B,ee,he.data);x.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,U.width,U.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,U.width,U.height,B,ee,U.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,U.width,U.height,0,B,ee,U.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,Te[0].width,Te[0].height,U.depth);for(let de=0,Se=Te.length;de<Se;de++)if(he=Te[de],x.format!==ti)if(B!==null)if(Pe){if(G)if(x.layerUpdates.size>0){const Fe=Qh(he.width,he.height,x.format,x.type);for(const Ue of x.layerUpdates){const Qe=he.data.subarray(Ue*Fe/he.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ue,he.width,he.height,1,B,Qe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,he.width,he.height,U.depth,B,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ee,he.width,he.height,U.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,he.width,he.height,U.depth,B,ee,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ee,he.width,he.height,U.depth,0,B,ee,he.data)}else{Pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Te[0].width,Te[0].height);for(let de=0,Se=Te.length;de<Se;de++)he=Te[de],x.format!==ti?B!==null?Pe?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,he.width,he.height,B,he.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,he.width,he.height,B,ee,he.data):t.texImage2D(n.TEXTURE_2D,de,Ee,he.width,he.height,0,B,ee,he.data)}else if(x.isDataArrayTexture)if(Pe){if(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,U.width,U.height,U.depth),G)if(x.layerUpdates.size>0){const de=Qh(U.width,U.height,x.format,x.type);for(const Se of x.layerUpdates){const Fe=U.data.subarray(Se*de/U.data.BYTES_PER_ELEMENT,(Se+1)*de/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,U.width,U.height,1,B,ee,Fe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,B,ee,U.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,U.width,U.height,U.depth,0,B,ee,U.data);else if(x.isData3DTexture)Pe?(Ve&&t.texStorage3D(n.TEXTURE_3D,Ce,Ee,U.width,U.height,U.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,B,ee,U.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,U.width,U.height,U.depth,0,B,ee,U.data);else if(x.isFramebufferTexture){if(Ve)if(Pe)t.texStorage2D(n.TEXTURE_2D,Ce,Ee,U.width,U.height);else{let de=U.width,Se=U.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ee,de,Se,0,B,ee,null),de>>=1,Se>>=1}}else if(Te.length>0){if(Pe&&Ve){const de=le(Te[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,de.width,de.height)}for(let de=0,Se=Te.length;de<Se;de++)he=Te[de],Pe?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,B,ee,he):t.texImage2D(n.TEXTURE_2D,de,Ee,B,ee,he);x.generateMipmaps=!1}else if(Pe){if(Ve){const de=le(U);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,de.width,de.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,B,ee,U)}else t.texImage2D(n.TEXTURE_2D,0,Ee,B,ee,U);p(x)&&d(N),we.__version=Z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function me(y,x,A){if(x.image.length!==6)return;const N=ue(y,x),W=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+A);const Z=i.get(W);if(W.version!==Z.__version||N===!0){t.activeTexture(n.TEXTURE0+A);const we=ct.getPrimaries(ct.workingColorSpace),pe=x.colorSpace===vs?null:ct.getPrimaries(x.colorSpace),be=x.colorSpace===vs||we===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,U=x.image[0]&&x.image[0].isDataTexture,B=[];for(let Se=0;Se<6;Se++)!ke&&!U?B[Se]=_(x.image[Se],!0,s.maxCubemapSize):B[Se]=U?x.image[Se].image:x.image[Se],B[Se]=xe(x,B[Se]);const ee=B[0],Ee=r.convert(x.format,x.colorSpace),he=r.convert(x.type),Te=w(x.internalFormat,Ee,he,x.colorSpace),Pe=x.isVideoTexture!==!0,Ve=Z.__version===void 0||N===!0,G=W.dataReady;let Ce=C(x,ee);K(n.TEXTURE_CUBE_MAP,x);let de;if(ke){Pe&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Te,ee.width,ee.height);for(let Se=0;Se<6;Se++){de=B[Se].mipmaps;for(let Fe=0;Fe<de.length;Fe++){const Ue=de[Fe];x.format!==ti?Ee!==null?Pe?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Ue.width,Ue.height,Ee,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,Te,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Ue.width,Ue.height,Ee,he,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,Te,Ue.width,Ue.height,0,Ee,he,Ue.data)}}}else{if(de=x.mipmaps,Pe&&Ve){de.length>0&&Ce++;const Se=le(B[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Te,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(U){Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,B[Se].width,B[Se].height,Ee,he,B[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,B[Se].width,B[Se].height,0,Ee,he,B[Se].data);for(let Fe=0;Fe<de.length;Fe++){const Qe=de[Fe].image[Se].image;Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,Qe.width,Qe.height,Ee,he,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,Te,Qe.width,Qe.height,0,Ee,he,Qe.data)}}else{Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ee,he,B[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Ee,he,B[Se]);for(let Fe=0;Fe<de.length;Fe++){const Ue=de[Fe];Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,Ee,he,Ue.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,Te,Ee,he,Ue.image[Se])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),Z.__version=W.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ye(y,x,A,N,W,Z){const we=r.convert(A.format,A.colorSpace),pe=r.convert(A.type),be=w(A.internalFormat,we,pe,A.colorSpace),ke=i.get(x),U=i.get(A);if(U.__renderTarget=x,!ke.__hasExternalTextures){const B=Math.max(1,x.width>>Z),ee=Math.max(1,x.height>>Z);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,Z,be,B,ee,x.depth,0,we,pe,null):t.texImage2D(W,Z,be,B,ee,0,we,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),se(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,W,U.__webglTexture,0,re(x)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,W,U.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(y,x,A){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const N=x.depthTexture,W=N&&N.isDepthTexture?N.type:null,Z=g(x.stencilBuffer,W),we=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=re(x);se(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Z,x.width,x.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,y)}else{const N=x.textures;for(let W=0;W<N.length;W++){const Z=N[W],we=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),be=w(Z.internalFormat,we,pe,Z.colorSpace),ke=re(x);A&&se(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,be,x.width,x.height):se(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(x.depthTexture);N.__renderTarget=x,(!N.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const W=N.__webglTexture,Z=re(x);if(x.depthTexture.format===zr)se(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(x.depthTexture.format===qr)se(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function He(y){const x=i.get(y),A=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const N=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),N){const W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,N.removeEventListener("dispose",W)};N.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=N}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");Oe(x.__webglFramebuffer,y)}else if(A){x.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[N]),x.__webglDepthbuffer[N]===void 0)x.__webglDepthbuffer[N]=n.createRenderbuffer(),_e(x.__webglDepthbuffer[N],y,!1);else{const W=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),_e(x.__webglDepthbuffer,y,!1);else{const N=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(y,x,A){const N=i.get(y);x!==void 0&&ye(N.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&He(y)}function Me(y){const x=y.texture,A=i.get(y),N=i.get(x);y.addEventListener("dispose",E);const W=y.textures,Z=y.isWebGLCubeRenderTarget===!0,we=W.length>1;if(we||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=x.version,o.memory.textures++),Z){A.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[pe]=[];for(let be=0;be<x.mipmaps.length;be++)A.__webglFramebuffer[pe][be]=n.createFramebuffer()}else A.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)A.__webglFramebuffer[pe]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(we)for(let pe=0,be=W.length;pe<be;pe++){const ke=i.get(W[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&se(y)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let pe=0;pe<W.length;pe++){const be=W[pe];A.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[pe]);const ke=r.convert(be.format,be.colorSpace),U=r.convert(be.type),B=w(be.internalFormat,ke,U,be.colorSpace,y.isXRRenderTarget===!0),ee=re(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,B,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,A.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(A.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),K(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ye(A.__webglFramebuffer[pe][be],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else ye(A.__webglFramebuffer[pe],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let pe=0,be=W.length;pe<be;pe++){const ke=W[pe],U=i.get(ke);t.bindTexture(n.TEXTURE_2D,U.__webglTexture),K(n.TEXTURE_2D,ke),ye(A.__webglFramebuffer,y,ke,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),p(ke)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,N.__webglTexture),K(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ye(A.__webglFramebuffer[be],y,x,n.COLOR_ATTACHMENT0,pe,be);else ye(A.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,pe,0);p(x)&&d(pe),t.unbindTexture()}y.depthBuffer&&He(y)}function L(y){const x=y.textures;for(let A=0,N=x.length;A<N;A++){const W=x[A];if(p(W)){const Z=M(y),we=i.get(W).__webglTexture;t.bindTexture(Z,we),d(Z),t.unbindTexture()}}}const O=[],R=[];function fe(y){if(y.samples>0){if(se(y)===!1){const x=y.textures,A=y.width,N=y.height;let W=n.COLOR_BUFFER_BIT;const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(y),pe=x.length>1;if(pe)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<x.length;be++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ke=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,A,N,0,0,A,N,W,n.NEAREST),l===!0&&(O.length=0,R.length=0,O.push(n.COLOR_ATTACHMENT0+be),y.depthBuffer&&y.resolveDepthBuffer===!1&&(O.push(Z),R.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ke=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function re(y){return Math.min(s.maxSamples,y.samples)}function se(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function xe(y,x){const A=y.colorSpace,N=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||A!==eo&&A!==vs&&(ct.getTransfer(A)===Mt?(N!==ti||W!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function le(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=se}function Eb(n,e){function t(i,s=vs){let r;const o=ct.getTransfer(s);if(i===Zi)return n.UNSIGNED_BYTE;if(i===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hp)return n.BYTE;if(i===Vp)return n.SHORT;if(i===ko)return n.UNSIGNED_SHORT;if(i===Ku)return n.INT;if(i===js)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===Wo)return n.HALF_FLOAT;if(i===Wp)return n.ALPHA;if(i===Xp)return n.RGB;if(i===ti)return n.RGBA;if(i===Yp)return n.LUMINANCE;if(i===$p)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===qp)return n.RED;if(i===Ju)return n.RED_INTEGER;if(i===Kp)return n.RG;if(i===Qu)return n.RG_INTEGER;if(i===ef)return n.RGBA_INTEGER;if(i===Na||i===Oa||i===Ba||i===ka)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===jc||i===Zc||i===Jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===eu||i===tu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qc||i===eu)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===iu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ru)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ou)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===au)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===du)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===gu||i===vu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jp||i===_u||i===xu||i===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Tb extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
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

}`;class Pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:Cb,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Db extends er{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const _=new Pb,p=t.getContextAttributes();let d=null,M=null;const w=[],g=[],C=new tt;let T=null;const E=new Wn;E.viewport=new Nt;const D=new Wn;D.viewport=new Nt;const S=[E,D],b=new Tb;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=w[ne];return me===void 0&&(me=new cc,w[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=w[ne];return me===void 0&&(me=new cc,w[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=w[ne];return me===void 0&&(me=new cc,w[ne]=me),me.getHandSpace()};function z(ne){const me=g.indexOf(ne.inputSource);if(me===-1)return;const ye=w[me];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||o),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let ne=0;ne<w.length;ne++){const me=g[ne];me!==null&&(g[ne]=null,w[ne].disconnect(me))}I=null,F=null,_.reset(),e.setRenderTarget(d),m=null,h=null,f=null,s=null,M=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Zs(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let me=null,ye=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=p.stencil?qr:zr,ye=p.stencil?$r:js);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Zs(h.textureWidth,h.textureHeight,{format:ti,type:Zi,depthTexture:new cm(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ne){for(let me=0;me<ne.removed.length;me++){const ye=ne.removed[me],_e=g.indexOf(ye);_e>=0&&(g[_e]=null,w[_e].disconnect(ye))}for(let me=0;me<ne.added.length;me++){const ye=ne.added[me];let _e=g.indexOf(ye);if(_e===-1){for(let He=0;He<w.length;He++)if(He>=g.length){g.push(ye),_e=He;break}else if(g[He]===null){g[He]=ye,_e=He;break}if(_e===-1)break}const Oe=w[_e];Oe&&Oe.connect(ye)}}const Y=new Q,te=new Q;function V(ne,me,ye){Y.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(ye.matrixWorld);const _e=Y.distanceTo(te),Oe=me.projectionMatrix.elements,He=ye.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),Me=Oe[14]/(Oe[10]+1),L=(Oe[9]+1)/Oe[5],O=(Oe[9]-1)/Oe[5],R=(Oe[8]-1)/Oe[0],fe=(He[8]+1)/He[0],re=We*R,se=We*fe,ae=_e/(-R+fe),xe=ae*-R;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xe),ne.translateZ(ae),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const le=We+ae,y=Me+ae,x=re-xe,A=se+(_e-xe),N=L*Me/y*le,W=O*Me/y*le;ne.projectionMatrix.makePerspective(x,A,N,W,le,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ie(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let me=ne.near,ye=ne.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),b.near=D.near=E.near=me,b.far=D.far=E.far=ye,(I!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,F=b.far),E.layers.mask=ne.layers.mask|2,D.layers.mask=ne.layers.mask|4,b.layers.mask=E.layers.mask|D.layers.mask;const _e=ne.parent,Oe=b.cameras;ie(b,_e);for(let He=0;He<Oe.length;He++)ie(Oe[He],_e);Oe.length===2?V(b,E,D):b.projectionMatrix.copy(E.projectionMatrix),k(ne,b,_e)};function k(ne,me,ye){ye===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=zo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let j=null;function K(ne,me){if(u=me.getViewerPose(c||o),v=me,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let _e=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let He=0;He<ye.length;He++){const We=ye[He];let Me=null;if(m!==null)Me=m.getViewport(We);else{const O=f.getViewSubImage(h,We);Me=O.viewport,He===0&&(e.setRenderTargetTextures(M,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(M))}let L=S[He];L===void 0&&(L=new Wn,L.layers.enable(He),L.viewport=new Nt,S[He]=L),L.matrix.fromArray(We.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(We.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Me.x,Me.y,Me.width,Me.height),He===0&&(b.matrix.copy(L.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(L)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const He=f.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&_.init(e,He,s.renderState)}}for(let ye=0;ye<w.length;ye++){const _e=g[ye],Oe=w[ye];_e!==null&&Oe!==void 0&&Oe.update(_e,me,c||o)}j&&j(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const ue=new lm;ue.setAnimationLoop(K),this.setAnimationLoop=function(ne){j=ne},this.dispose=function(){}}}const Ns=new Ji,Lb=new Lt;function Ib(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,sm(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,w,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,g)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,w):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,g=M.envMapRotation;w&&(p.envMap.value=w,Ns.copy(g),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(Ns)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=w*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ub(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const g=w.program;i.uniformBlockBinding(M,g)}function c(M,w){let g=s[M.id];g===void 0&&(v(M),g=u(M),s[M.id]=g,M.addEventListener("dispose",p));const C=w.program;i.updateUBOMapping(M,C);const T=e.render.frame;r[M.id]!==T&&(h(M),r[M.id]=T)}function u(M){const w=f();M.__bindingPointIndex=w;const g=n.createBuffer(),C=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,g),g}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],g=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,E=g.length;T<E;T++){const D=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,b=D.length;S<b;S++){const I=D[S];if(m(I,T,S,C)===!0){const F=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let q=0;q<z.length;q++){const Y=z[q],te=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,F+X,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,w,g,C){const T=M.value,E=w+"_"+g;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const D=C[E];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[E]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(M){const w=M.uniforms;let g=0;const C=16;for(let E=0,D=w.length;E<D;E++){const S=Array.isArray(w[E])?w[E]:[w[E]];for(let b=0,I=S.length;b<I;b++){const F=S[b],z=Array.isArray(F.value)?F.value:[F.value];for(let X=0,q=z.length;X<q;X++){const Y=z[X],te=_(Y),V=g%C,ie=V%te.boundary,k=V+ie;g+=ie,k!==0&&C-k<te.storage&&(g+=C-k),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=g,g+=te.storage}}}const T=g%C;return T>0&&(g+=C-T),M.__size=g,M.__cache={},this}function _(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function p(M){const w=M.target;w.removeEventListener("dispose",p);const g=o.indexOf(w.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class nr{constructor(e={}){const{canvas:t=b_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Ms,this.toneMappingExposure=1;const g=this;let C=!1,T=0,E=0,D=null,S=-1,b=null;const I=new Nt,F=new Nt;let z=null;const X=new ht(0);let q=0,Y=t.width,te=t.height,V=1,ie=null,k=null;const j=new Nt(0,0,Y,te),K=new Nt(0,0,Y,te);let ue=!1;const ne=new am;let me=!1,ye=!1;const _e=new Lt,Oe=new Lt,He=new Q,We=new Nt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function O(){return D===null?V:1}let R=i;function fe(P,$){return t.getContext(P,$)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qu}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),R===null){const $="webgl2";if(R=fe($,P),R===null)throw fe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let re,se,ae,xe,le,y,x,A,N,W,Z,we,pe,be,ke,U,B,ee,Ee,he,Te,Pe,Ve,G;function Ce(){re=new zM(R),re.init(),Pe=new Eb(R,re),se=new UM(R,re,e,Pe),ae=new Sb(R,re),se.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),xe=new GM(R),le=new ab,y=new wb(R,re,ae,le,se,Pe,xe),x=new NM(g),A=new kM(g),N=new j_(R),Ve=new LM(R,N),W=new HM(R,N,xe,Ve),Z=new XM(R,W,N,xe),Ee=new WM(R,se,y),U=new FM(le),we=new ob(g,x,A,re,se,Ve,U),pe=new Ib(g,le),be=new cb,ke=new mb(re),ee=new DM(g,x,A,ae,Z,m,l),B=new yb(g,Z,se),G=new Ub(R,xe,se,ae),he=new IM(R,re,xe),Te=new VM(R,re,xe),xe.programs=we.programs,g.capabilities=se,g.extensions=re,g.properties=le,g.renderLists=be,g.shadowMap=B,g.state=ae,g.info=xe}Ce();const de=new Db(g,R);this.xr=de,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=re.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=re.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(Y,te,!1))},this.getSize=function(P){return P.set(Y,te)},this.setSize=function(P,$,oe=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,te=$,t.width=Math.floor(P*V),t.height=Math.floor($*V),oe===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(Y*V,te*V).floor()},this.setDrawingBufferSize=function(P,$,oe){Y=P,te=$,V=oe,t.width=Math.floor(P*oe),t.height=Math.floor($*oe),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,$,oe,ce){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,$,oe,ce),ae.viewport(I.copy(j).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,$,oe,ce){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,$,oe,ce),ae.scissor(F.copy(K).multiplyScalar(V).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){ae.setScissorTest(ue=P)},this.setOpaqueSort=function(P){ie=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(P=!0,$=!0,oe=!0){let ce=0;if(P){let J=!1;if(D!==null){const De=D.texture.format;J=De===ef||De===Qu||De===Ju}if(J){const De=D.texture.type,ze=De===Zi||De===js||De===ko||De===$r||De===ju||De===Zu,Ye=ee.getClearColor(),$e=ee.getClearAlpha(),nt=Ye.r,rt=Ye.g,qe=Ye.b;ze?(v[0]=nt,v[1]=rt,v[2]=qe,v[3]=$e,R.clearBufferuiv(R.COLOR,0,v)):(_[0]=nt,_[1]=rt,_[2]=qe,_[3]=$e,R.clearBufferiv(R.COLOR,0,_))}else ce|=R.COLOR_BUFFER_BIT}$&&(ce|=R.DEPTH_BUFFER_BIT),oe&&(ce|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),be.dispose(),ke.dispose(),le.dispose(),x.dispose(),A.dispose(),Z.dispose(),Ve.dispose(),G.dispose(),we.dispose(),de.dispose(),de.removeEventListener("sessionstart",rr),de.removeEventListener("sessionend",Ei),zn.stop()};function Se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=xe.autoReset,$=B.enabled,oe=B.autoUpdate,ce=B.needsUpdate,J=B.type;Ce(),xe.autoReset=P,B.enabled=$,B.autoUpdate=oe,B.needsUpdate=ce,B.type=J}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){const $=P.target;$.removeEventListener("dispose",Qe),xt($)}function xt(P){It(P),le.remove(P)}function It(P){const $=le.get(P).programs;$!==void 0&&($.forEach(function(oe){we.releaseProgram(oe)}),P.isShaderMaterial&&we.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,oe,ce,J,De){$===null&&($=Me);const ze=J.isMesh&&J.matrixWorld.determinant()<0,Ye=et(P,$,oe,ce,J);ae.setMaterial(ce,ze);let $e=oe.index,nt=1;if(ce.wireframe===!0){if($e=W.getWireframeAttribute(oe),$e===void 0)return;nt=2}const rt=oe.drawRange,qe=oe.attributes.position;let ut=rt.start*nt,wt=(rt.start+rt.count)*nt;De!==null&&(ut=Math.max(ut,De.start*nt),wt=Math.min(wt,(De.start+De.count)*nt)),$e!==null?(ut=Math.max(ut,0),wt=Math.min(wt,$e.count)):qe!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,qe.count));const Tt=wt-ut;if(Tt<0||Tt===1/0)return;Ve.setup(J,ce,Ye,oe,$e);let bn,dt=he;if($e!==null&&(bn=N.get($e),dt=Te,dt.setIndex(bn)),J.isMesh)ce.wireframe===!0?(ae.setLineWidth(ce.wireframeLinewidth*O()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(J.isLine){let Ke=ce.linewidth;Ke===void 0&&(Ke=1),ae.setLineWidth(Ke*O()),J.isLineSegments?dt.setMode(R.LINES):J.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else J.isPoints?dt.setMode(R.POINTS):J.isSprite&&dt.setMode(R.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ke=J._multiDrawStarts,Ti=J._multiDrawCounts,pt=J._multiDrawCount,jn=$e?N.get($e).bytesPerElement:1,or=le.get(ce).currentProgram.getUniforms();for(let In=0;In<pt;In++)or.setValue(R,"_gl_DrawID",In),dt.render(Ke[In]/jn,Ti[In])}else if(J.isInstancedMesh)dt.renderInstances(ut,Tt,J.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ti=Math.min(oe.instanceCount,Ke);dt.renderInstances(ut,Tt,Ti)}else dt.render(ut,Tt)};function lt(P,$,oe){P.transparent===!0&&P.side===On&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,Ie(P,$,oe),P.side=ji,P.needsUpdate=!0,Ie(P,$,oe),P.side=On):Ie(P,$,oe)}this.compile=function(P,$,oe=null){oe===null&&(oe=P),d=ke.get(oe),d.init($),w.push(d),oe.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),P!==oe&&P.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights();const ce=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const De=J.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Ye=De[ze];lt(Ye,oe,J),ce.add(Ye)}else lt(De,oe,J),ce.add(De)}),w.pop(),d=null,ce},this.compileAsync=function(P,$,oe=null){const ce=this.compile(P,$,oe);return new Promise(J=>{function De(){if(ce.forEach(function(ze){le.get(ze).currentProgram.isReady()&&ce.delete(ze)}),ce.size===0){J(P);return}setTimeout(De,10)}re.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let rn=null;function Ct(P){rn&&rn(P)}function rr(){zn.stop()}function Ei(){zn.start()}const zn=new lm;zn.setAnimationLoop(Ct),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(P){rn=P,de.setAnimationLoop(P),P===null?zn.stop():zn.start()},de.addEventListener("sessionstart",rr),de.addEventListener("sessionend",Ei),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera($),$=de.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,$,D),d=ke.get(P,w.length),d.init($),w.push(d),Oe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ne.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,me=U.init(this.clippingPlanes,ye),p=be.get(P,M.length),p.init(),M.push(p),de.enabled===!0&&de.isPresenting===!0){const De=g.xr.getDepthSensingMesh();De!==null&&ns(De,$,-1/0,g.sortObjects)}ns(P,$,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(ie,k),L=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,L&&ee.addToRenderList(p,P),this.info.render.frame++,me===!0&&U.beginShadows();const oe=d.state.shadowsArray;B.render(oe,P,$),me===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=p.opaque,J=p.transmissive;if(d.setupLights(),$.isArrayCamera){const De=$.cameras;if(J.length>0)for(let ze=0,Ye=De.length;ze<Ye;ze++){const $e=De[ze];ge(ce,J,P,$e)}L&&ee.render(P);for(let ze=0,Ye=De.length;ze<Ye;ze++){const $e=De[ze];H(p,P,$e,$e.viewport)}}else J.length>0&&ge(ce,J,P,$),L&&ee.render(P),H(p,P,$);D!==null&&(y.updateMultisampleRenderTarget(D),y.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(g,P,$),Ve.resetDefaultState(),S=-1,b=null,w.pop(),w.length>0?(d=w[w.length-1],me===!0&&U.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ns(P,$,oe,ce){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ne.intersectsSprite(P)){ce&&We.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Oe);const ze=Z.update(P),Ye=P.material;Ye.visible&&p.push(P,ze,Ye,oe,We.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ne.intersectsObject(P))){const ze=Z.update(P),Ye=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),We.copy(P.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),We.copy(ze.boundingSphere.center)),We.applyMatrix4(P.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ye)){const $e=ze.groups;for(let nt=0,rt=$e.length;nt<rt;nt++){const qe=$e[nt],ut=Ye[qe.materialIndex];ut&&ut.visible&&p.push(P,ze,ut,oe,We.z,qe)}}else Ye.visible&&p.push(P,ze,Ye,oe,We.z,null)}}const De=P.children;for(let ze=0,Ye=De.length;ze<Ye;ze++)ns(De[ze],$,oe,ce)}function H(P,$,oe,ce){const J=P.opaque,De=P.transmissive,ze=P.transparent;d.setupLightsView(oe),me===!0&&U.setGlobalState(g.clippingPlanes,oe),ce&&ae.viewport(I.copy(ce)),J.length>0&&ve(J,$,oe),De.length>0&&ve(De,$,oe),ze.length>0&&ve(ze,$,oe),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ge(P,$,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ce.id]===void 0&&(d.state.transmissionRenderTarget[ce.id]=new Zs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Wo:Zi,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const De=d.state.transmissionRenderTarget[ce.id],ze=ce.viewport||I;De.setSize(ze.z,ze.w);const Ye=g.getRenderTarget();g.setRenderTarget(De),g.getClearColor(X),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),L&&ee.render(oe);const $e=g.toneMapping;g.toneMapping=Ms;const nt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),d.setupLightsView(ce),me===!0&&U.setGlobalState(g.clippingPlanes,ce),ve(P,oe,ce),y.updateMultisampleRenderTarget(De),y.updateRenderTargetMipmap(De),re.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let qe=0,ut=$.length;qe<ut;qe++){const wt=$[qe],Tt=wt.object,bn=wt.geometry,dt=wt.material,Ke=wt.group;if(dt.side===On&&Tt.layers.test(ce.layers)){const Ti=dt.side;dt.side=Pn,dt.needsUpdate=!0,Re(Tt,oe,ce,bn,dt,Ke),dt.side=Ti,dt.needsUpdate=!0,rt=!0}}rt===!0&&(y.updateMultisampleRenderTarget(De),y.updateRenderTargetMipmap(De))}g.setRenderTarget(Ye),g.setClearColor(X,q),nt!==void 0&&(ce.viewport=nt),g.toneMapping=$e}function ve(P,$,oe){const ce=$.isScene===!0?$.overrideMaterial:null;for(let J=0,De=P.length;J<De;J++){const ze=P[J],Ye=ze.object,$e=ze.geometry,nt=ce===null?ze.material:ce,rt=ze.group;Ye.layers.test(oe.layers)&&Re(Ye,$,oe,$e,nt,rt)}}function Re(P,$,oe,ce,J,De){P.onBeforeRender(g,$,oe,ce,J,De),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(g,$,oe,ce,P,De),J.transparent===!0&&J.side===On&&J.forceSinglePass===!1?(J.side=Pn,J.needsUpdate=!0,g.renderBufferDirect(oe,$,ce,J,P,De),J.side=ji,J.needsUpdate=!0,g.renderBufferDirect(oe,$,ce,J,P,De),J.side=On):g.renderBufferDirect(oe,$,ce,J,P,De),P.onAfterRender(g,$,oe,ce,J,De)}function Ie(P,$,oe){$.isScene!==!0&&($=Me);const ce=le.get(P),J=d.state.lights,De=d.state.shadowsArray,ze=J.state.version,Ye=we.getParameters(P,J.state,De,$,oe),$e=we.getProgramCacheKey(Ye);let nt=ce.programs;ce.environment=P.isMeshStandardMaterial?$.environment:null,ce.fog=$.fog,ce.envMap=(P.isMeshStandardMaterial?A:x).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,nt===void 0&&(P.addEventListener("dispose",Qe),nt=new Map,ce.programs=nt);let rt=nt.get($e);if(rt!==void 0){if(ce.currentProgram===rt&&ce.lightsStateVersion===ze)return Xe(P,Ye),rt}else Ye.uniforms=we.getUniforms(P),P.onBeforeCompile(Ye,g),rt=we.acquireProgram(Ye,$e),nt.set($e,rt),ce.uniforms=Ye.uniforms;const qe=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=U.uniform),Xe(P,Ye),ce.needsLights=Kt(P),ce.lightsStateVersion=ze,ce.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMap.value=J.state.directionalShadowMap,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotShadowMap.value=J.state.spotShadowMap,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMap.value=J.state.pointShadowMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ce.currentProgram=rt,ce.uniformsList=null,rt}function Ge(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Ha.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Xe(P,$){const oe=le.get(P);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function et(P,$,oe,ce,J){$.isScene!==!0&&($=Me),y.resetTextureUnits();const De=$.fog,ze=ce.isMeshStandardMaterial?$.environment:null,Ye=D===null?g.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:eo,$e=(ce.isMeshStandardMaterial?A:x).get(ce.envMap||ze),nt=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),qe=!!oe.morphAttributes.position,ut=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Tt=Ms;ce.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const bn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dt=bn!==void 0?bn.length:0,Ke=le.get(ce),Ti=d.state.lights;if(me===!0&&(ye===!0||P!==b)){const Hn=P===b&&ce.id===S;U.setState(ce,P,Hn)}let pt=!1;ce.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ti.state.version||Ke.outputColorSpace!==Ye||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==$e||ce.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==U.numPlanes||Ke.numIntersection!==U.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==rt||Ke.morphTargets!==qe||Ke.morphNormals!==ut||Ke.morphColors!==wt||Ke.toneMapping!==Tt||Ke.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Ke.__version=ce.version);let jn=Ke.currentProgram;pt===!0&&(jn=Ie(ce,$,J));let or=!1,In=!1,no=!1;const At=jn.getUniforms(),di=Ke.uniforms;if(ae.useProgram(jn.program)&&(or=!0,In=!0,no=!0),ce.id!==S&&(S=ce.id,In=!0),or||b!==P){ae.buffers.depth.getReversed()?(_e.copy(P.projectionMatrix),E_(_e),T_(_e),At.setValue(R,"projectionMatrix",_e)):At.setValue(R,"projectionMatrix",P.projectionMatrix),At.setValue(R,"viewMatrix",P.matrixWorldInverse);const is=At.map.cameraPosition;is!==void 0&&is.setValue(R,He.setFromMatrixPosition(P.matrixWorld)),se.logarithmicDepthBuffer&&At.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&At.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,In=!0,no=!0)}if(J.isSkinnedMesh){At.setOptional(R,J,"bindMatrix"),At.setOptional(R,J,"bindMatrixInverse");const Hn=J.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),At.setValue(R,"boneTexture",Hn.boneTexture,y))}J.isBatchedMesh&&(At.setOptional(R,J,"batchingTexture"),At.setValue(R,"batchingTexture",J._matricesTexture,y),At.setOptional(R,J,"batchingIdTexture"),At.setValue(R,"batchingIdTexture",J._indirectTexture,y),At.setOptional(R,J,"batchingColorTexture"),J._colorsTexture!==null&&At.setValue(R,"batchingColorTexture",J._colorsTexture,y));const io=oe.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Ee.update(J,oe,jn),(In||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,At.setValue(R,"receiveShadow",J.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(di.envMap.value=$e,di.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&$.environment!==null&&(di.envMapIntensity.value=$.environmentIntensity),In&&(At.setValue(R,"toneMappingExposure",g.toneMappingExposure),Ke.needsLights&&tn(di,no),De&&ce.fog===!0&&pe.refreshFogUniforms(di,De),pe.refreshMaterialUniforms(di,ce,V,te,d.state.transmissionRenderTarget[P.id]),Ha.upload(R,Ge(Ke),di,y)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ha.upload(R,Ge(Ke),di,y),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&At.setValue(R,"center",J.center),At.setValue(R,"modelViewMatrix",J.modelViewMatrix),At.setValue(R,"normalMatrix",J.normalMatrix),At.setValue(R,"modelMatrix",J.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Hn=ce.uniformsGroups;for(let is=0,ss=Hn.length;is<ss;is++){const mf=Hn[is];G.update(mf,jn),G.bind(mf,jn)}}return jn}function tn(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Kt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,$,oe){le.get(P.texture).__webglTexture=$,le.get(P.depthTexture).__webglTexture=oe;const ce=le.get(P);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const oe=le.get(P);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,oe=0){D=P,T=$,E=oe;let ce=!0,J=null,De=!1,ze=!1;if(P){const $e=le.get(P);if($e.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(R.FRAMEBUFFER,null),ce=!1;else if($e.__webglFramebuffer===void 0)y.setupRenderTarget(P);else if($e.__hasExternalTextures)y.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if($e.__boundDepthTexture!==qe){if(qe!==null&&le.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(P)}}const nt=P.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const rt=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?J=rt[$][oe]:J=rt[$],De=!0):P.samples>0&&y.useMultisampledRTT(P)===!1?J=le.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?J=rt[oe]:J=rt,I.copy(P.viewport),F.copy(P.scissor),z=P.scissorTest}else I.copy(j).multiplyScalar(V).floor(),F.copy(K).multiplyScalar(V).floor(),z=ue;if(ae.bindFramebuffer(R.FRAMEBUFFER,J)&&ce&&ae.drawBuffers(P,J),ae.viewport(I),ae.scissor(F),ae.setScissorTest(z),De){const $e=le.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+$,$e.__webglTexture,oe)}else if(ze){const $e=le.get(P.texture),nt=$||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,$e.__webglTexture,oe||0,nt)}S=-1},this.readRenderTargetPixels=function(P,$,oe,ce,J,De,ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){ae.bindFramebuffer(R.FRAMEBUFFER,Ye);try{const $e=P.texture,nt=$e.format,rt=$e.type;if(!se.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ce&&oe>=0&&oe<=P.height-J&&R.readPixels($,oe,ce,J,Pe.convert(nt),Pe.convert(rt),De)}finally{const $e=D!==null?le.get(D).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(P,$,oe,ce,J,De,ze){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){const $e=P.texture,nt=$e.format,rt=$e.type;if(!se.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ce&&oe>=0&&oe<=P.height-J){ae.bindFramebuffer(R.FRAMEBUFFER,Ye);const qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,qe),R.bufferData(R.PIXEL_PACK_BUFFER,De.byteLength,R.STREAM_READ),R.readPixels($,oe,ce,J,Pe.convert(nt),Pe.convert(rt),0);const ut=D!==null?le.get(D).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,ut);const wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await w_(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,De),R.deleteBuffer(qe),R.deleteSync(wt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,oe=0){P.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const ce=Math.pow(2,-oe),J=Math.floor(P.image.width*ce),De=Math.floor(P.image.height*ce),ze=$!==null?$.x:0,Ye=$!==null?$.y:0;y.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,oe,0,0,ze,Ye,J,De),ae.unbindTexture()},this.copyTextureToTexture=function(P,$,oe=null,ce=null,J=0){P.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,P=arguments[1],$=arguments[2],J=arguments[3]||0,oe=null);let De,ze,Ye,$e,nt,rt,qe,ut,wt;const Tt=P.isCompressedTexture?P.mipmaps[J]:P.image;oe!==null?(De=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,nt=oe.min.y,rt=oe.isBox3?oe.min.z:0):(De=Tt.width,ze=Tt.height,Ye=Tt.depth||1,$e=0,nt=0,rt=0),ce!==null?(qe=ce.x,ut=ce.y,wt=ce.z):(qe=0,ut=0,wt=0);const bn=Pe.convert($.format),dt=Pe.convert($.type);let Ke;$.isData3DTexture?(y.setTexture3D($,0),Ke=R.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(y.setTexture2DArray($,0),Ke=R.TEXTURE_2D_ARRAY):(y.setTexture2D($,0),Ke=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,$.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,$.unpackAlignment);const Ti=R.getParameter(R.UNPACK_ROW_LENGTH),pt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),jn=R.getParameter(R.UNPACK_SKIP_PIXELS),or=R.getParameter(R.UNPACK_SKIP_ROWS),In=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$e),R.pixelStorei(R.UNPACK_SKIP_ROWS,nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rt);const no=P.isDataArrayTexture||P.isData3DTexture,At=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const di=le.get(P),io=le.get($),Hn=le.get(di.__renderTarget),is=le.get(io.__renderTarget);ae.bindFramebuffer(R.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let ss=0;ss<Ye;ss++)no&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,le.get(P).__webglTexture,J,rt+ss),P.isDepthTexture?(At&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,le.get($).__webglTexture,J,wt+ss),R.blitFramebuffer($e,nt,De,ze,qe,ut,De,ze,R.DEPTH_BUFFER_BIT,R.NEAREST)):At?R.copyTexSubImage3D(Ke,J,qe,ut,wt+ss,$e,nt,De,ze):R.copyTexSubImage2D(Ke,J,qe,ut,wt+ss,$e,nt,De,ze);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else At?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(Ke,J,qe,ut,wt,De,ze,Ye,bn,dt,Tt.data):$.isCompressedArrayTexture?R.compressedTexSubImage3D(Ke,J,qe,ut,wt,De,ze,Ye,bn,Tt.data):R.texSubImage3D(Ke,J,qe,ut,wt,De,ze,Ye,bn,dt,Tt):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,J,qe,ut,De,ze,bn,dt,Tt.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,J,qe,ut,Tt.width,Tt.height,bn,Tt.data):R.texSubImage2D(R.TEXTURE_2D,J,qe,ut,De,ze,bn,dt,Tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ti),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,jn),R.pixelStorei(R.UNPACK_SKIP_ROWS,or),R.pixelStorei(R.UNPACK_SKIP_IMAGES,In),J===0&&$.generateMipmaps&&R.generateMipmap(Ke),ae.unbindTexture()},this.copyTextureToTexture3D=function(P,$,oe=null,ce=null,J=0){return P.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ce=arguments[1]||null,P=arguments[2],$=arguments[3],J=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,oe,ce,J)},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&y.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?y.setTextureCube(P,0):P.isData3DTexture?y.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?y.setTexture2DArray(P,0):y.setTexture2D(P,0),ae.unbindTexture()},this.resetState=function(){T=0,E=0,D=null,ae.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class ir extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new Q;class el{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new el(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wu extends Yo{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Sr;const ho=new Q,br=new Q,wr=new Q,Er=new tt,po=new tt,pm=new Lt,xa=new Q,mo=new Q,ya=new Q,ed=new tt,uc=new tt,td=new tt;class nd extends Dn{constructor(e=new wu){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Ts;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fb(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new el(i,3,0,!1)),Sr.setAttribute("uv",new el(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-wr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ma(xa.set(-.5,-.5,0),wr,o,br,s,r),Ma(mo.set(.5,-.5,0),wr,o,br,s,r),Ma(ya.set(.5,.5,0),wr,o,br,s,r),ed.set(0,0),uc.set(1,0),td.set(1,1);let a=e.ray.intersectTriangle(xa,mo,ya,!1,ho);if(a===null&&(Ma(mo.set(-.5,.5,0),wr,o,br,s,r),uc.set(0,1),a=e.ray.intersectTriangle(xa,ya,mo,!1,ho),a===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:Xn.getInterpolation(ho,xa,mo,ya,ed,uc,td,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ma(n,e,t,i,s,r){Er.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(po.x=r*Er.x-s*Er.y,po.y=s*Er.x+r*Er.y):po.copy(Er),n.copy(e),n.x+=po.x,n.y+=po.y,n.applyMatrix4(pm)}class Yn extends Sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const id=new Lt;class Nb{constructor(e,t,i=0,s=1/0){this.ray=new sf(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,i=[]){return Eu(e,this,i,t),i.sort(sd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Eu(e[s],this,i,t);return i.sort(sd),i}}function sd(n,e){return n.distance-e.distance}function Eu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Eu(r[o],e,t,!0)}}class rd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ob extends er{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);const jr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Zt=30,Tu=12,Bb=10,Va=14,mm=5;function tl(){return`${Tu}px system-ui, -apple-system, sans-serif`}function gm(n,e,t){const i=String(e??"");if(!i)return[""];const s=i.split(/\s+/).filter(Boolean);if(s.length===0)return[""];const r=[];let o="";for(const a of s){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(r.push(o),o=a)}return o&&r.push(o),r.length?r:[""]}function kb(n,e){return Math.max(e,n*Va+mm*2)}function af(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function nl(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const s=t+i+1>>1;n[s]<=e?t=s:i=s-1}return t}const vm=28;function zb(n,e){if(typeof e=="function")return e(n);const t=n.filter(s=>s!=null&&s!=="");if(e==="count")return t.length;const i=t.map(s=>Number(s)).filter(s=>!Number.isNaN(s));if(i.length===0)return null;switch(e){case"sum":return i.reduce((s,r)=>s+r,0);case"avg":return i.reduce((s,r)=>s+r,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Hb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=jr[e.theme]??jr.none,{cols:a,rows:l,pinnedRows:c,rowHeight:u,scrollY:f,scrollX:h,glow:m}=e;t.clearRect(0,0,s,r),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const v=c.length*u,_=e.aggregateRow?vm:0,p=r-Zt-v-_;t.fillStyle=o.headerBg,t.fillRect(0,0,s,Zt),t.textBaseline="middle",t.textAlign="left";let d=-h;for(let k=0;k<a.length;k++){const j=a[k];if(d+j.width<=0){d+=j.width;continue}if(d>=s)break;const K=!!e.colFilters[j.colId],ue=e.sorts.findIndex(ye=>ye.colId===j.colId),ne=ue>=0,me=(j.colDef.headerName??j.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(d,0,j.width,Zt),t.clip(),t.font=`bold ${Bb}px system-ui, -apple-system, sans-serif`,t.fillStyle=K?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(me,d+8,Zt/2),t.shadowBlur=4,t.fillText(me,d+8,Zt/2),t.shadowBlur=0):t.fillText(me,d+8,Zt/2),ne){const ye=t.measureText(me).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const _e=e.sorts[ue].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${_e}${ue+1}`:_e,d+8+ye+4,Zt/2)}j.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=K?o.accent:o.textHeader,t.globalAlpha=K?1:.38,t.fillText("⌕",d+j.width-20,Zt/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(d+j.width-.5,0),t.lineTo(d+j.width-.5,Zt),t.stroke(),d+=j.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Zt-.5),t.lineTo(s,Zt-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Zt,s,p),t.clip();const M=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,w=M?af(M,l.length):null,g=k=>w?w[k]:k*u,C=k=>M?M[k]:u,T=w?nl(w,f):Math.max(0,Math.floor(f/u));let E;if(w)for(E=T;E<l.length&&g(E)<f+p;)E++;else E=Math.min(l.length,Math.ceil((f+p)/u));const D=e.selectionAnchorRow??e.selectedRow,S=e.selectionAnchorCol??e.selectedCol,b=e.selectedRow>=0&&D>=0?Math.min(e.selectedRow,D):-1,I=e.selectedRow>=0&&D>=0?Math.max(e.selectedRow,D):-1,F=e.selectedCol>=0&&S>=0?Math.min(e.selectedCol,S):-1,z=e.selectedCol>=0&&S>=0?Math.max(e.selectedCol,S):-1,X=I>b||z>F;let q=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,te=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;const ie=(k,j,K,ue)=>{m?(t.shadowColor=ue,t.shadowBlur=12,t.fillText(k,j,K),t.shadowBlur=6,t.fillText(k,j,K),t.shadowBlur=2,t.fillText(k,j,K),t.shadowBlur=0):t.fillText(k,j,K)};for(let k=T;k<E;k++){const j=l[k],K=C(k),ue=Zt+g(k)-f;k%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,ue,s,K));const ne=k>=b&&k<=I;k===e.hoveredRow&&!ne&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,ue,s,K)),ne&&!X&&(t.fillStyle=fc(o.accent,.1),t.fillRect(0,ue,s,K)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ue+K-.5),t.lineTo(s,ue+K-.5),t.stroke();let me=-h;for(let ye=0;ye<a.length;ye++){const _e=a[ye];if(me+_e.width<=0){me+=_e.width;continue}if(me>=s)break;const Oe=ne&&ye>=F&&ye<=z;Oe&&X&&(t.fillStyle=fc(o.accent,.14),t.fillRect(me,ue,_e.width,K)),Oe&&(me<q&&(q=me),me+_e.width>Y&&(Y=me+_e.width),ue<te&&(te=ue),ue+K>V&&(V=ue+K));const He=e.getCellStyle(_e,j),We=He.color??o.text,Me=He.textAlign??"left",L=e.formatCell(_e,j);if(t.save(),t.beginPath(),t.rect(me+1,ue,_e.width-2,K),t.clip(),t.font=tl(),t.fillStyle=We,t.textBaseline="middle",_e.colDef.wrap){t.textAlign="left";const O=gm(t,L,Math.max(20,_e.width-16));let R=ue+mm+Va/2;for(const fe of O){if(R-Va/2>=ue+K)break;ie(fe,me+8,R,We),R+=Va}}else{const O=Me==="right"?me+_e.width-8:me+8;t.textAlign=Me==="right"?"right":"left",ie(L,O,ue+K/2,We)}t.restore(),k===e.selectedRow&&ye===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(me+1.5,ue+1.5,_e.width-3,K-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(me+_e.width-.5,ue),t.lineTo(me+_e.width-.5,ue+K),t.stroke(),me+=_e.width}}if(X&&q<Y&&te<V&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(q+.5,te+.5,Y-q-1,V-te-1)),t.restore(),c.length>0){const k=r-v-_;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,k-.5),t.lineTo(s,k-.5),t.stroke();for(let j=0;j<c.length;j++){const K=c[j],ue=k+j*u;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,ue,s,u);let ne=-h;for(let me=0;me<a.length;me++){const ye=a[me];if(ne+ye.width<=0){ne+=ye.width;continue}if(ne>=s)break;const _e=e.getCellStyle(ye,K),Oe=_e.color??o.text,He=_e.textAlign??"left",We=e.formatCell(ye,K);t.save(),t.beginPath(),t.rect(ne+1,ue,ye.width-2,u),t.clip(),t.font=`bold ${Tu}px system-ui, -apple-system, sans-serif`,t.fillStyle=Oe,t.textBaseline="middle",He==="right"?(t.textAlign="right",t.fillText(We,ne+ye.width-8,ue+u/2)):(t.textAlign="left",t.fillText(We,ne+8,ue+u/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(ne+ye.width-.5,ue),t.lineTo(ne+ye.width-.5,ue+u),t.stroke(),ne+=ye.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ue+u-.5),t.lineTo(s,ue+u-.5),t.stroke()}}if(e.aggregateRow){const k=r-_;t.fillStyle=fc(o.accent,.1),t.fillRect(0,k,s,_),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,k-.5),t.lineTo(s,k-.5),t.stroke();let j=-h;for(let K=0;K<a.length;K++){const ue=a[K];if(j+ue.width<=0){j+=ue.width;continue}if(j>=s)break;const me=e.getCellStyle(ue,e.aggregateRow).textAlign??"left",ye=e.aggregateRow[ue.colId]??"";t.save(),t.beginPath(),t.rect(j+1,k,ue.width-2,_),t.clip(),t.font=`bold ${Tu}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),me==="right"?(t.textAlign="right",t.fillText(ye,j+ue.width-8,k+_/2)):(t.textAlign="left",t.fillText(ye,j+8,k+_/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo(j+ue.width-.5,k),t.lineTo(j+ue.width-.5,k+_),t.stroke(),j+=ue.width}}t.restore()}function fc(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${s},${e})`}const Sa=190,hc=34;function Vb(n,e,t){const i=Math.max(4,Math.min(e,n-Sa-4)),s=Zt+6,r=t?26:0;return{box:{x:i,y:s,w:Sa,h:hc},input:{x:i+9,y:s+5,w:Sa-18-r,h:hc-10},clear:t?{x:i+Sa-28,y:s,w:28,h:hc}:null}}const dc=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function ba(n,e,t,i=1){return t.clear&&dc(n,e,t.clear,4*(i-1))?"clear":dc(n,e,t.input)?"input":dc(n,e,t.box)?"inside":"outside"}function Gb(n,e,t,i,s){const{box:r,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=s.accent,n.lineWidth=1,n.beginPath(),n.roundRect(r.x+.5,r.y+.5,r.w-1,r.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=tl(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=s.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=s.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=s.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=s.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=tl(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=s.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function Wb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r;if(t<0){const c=.5*r,f=1/(1-2*(.5*(1+c)*c)),h=(i+i*(1+o)*o*-1)*f,m=(s+s*(1+o)*o*-1)*f;return[.5+h,.5+m]}const a=i*(1+o)*o,l=s*(1+o)*o;return[n+a,e+l]}function _m(n,e,t,i,s,r=t,o=i){const a=n/t,l=1-e/i,[c,u]=Wb(a,l,s);return c<0||c>1||u<0||u>1?[-1,-1]:[c*r,(1-u)*o]}function pc(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function Xb(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function od(n,e,t,i=1){const s=e+t;return n>=s-6*i&&n<=s+1*i}function Yb(n,e,t,i,s,r,o,a,l,c=!1,u){const f=n+l;let h=-1,m=0;for(let M=0;M<t.length;M++){if(f>=m&&f<m+t[M].width){h=M;break}m+=t[M].width}if(e<Zt)return{area:"header",colIdx:h,rowIdx:-1};const v=c?vm:0;if(v>0&&e>=o-v)return{area:"agg",colIdx:h,rowIdx:-1};const _=a*s;if(_>0&&e>=o-_-v){const M=Math.floor((e-(o-_-v))/s);return{area:"pinned",colIdx:h,rowIdx:M}}const p=e-Zt+r,d=u&&u.length===i?nl(af(u,i),p):Math.floor(p/s);return d>=0&&d<i?{area:"body",colIdx:h,rowIdx:d}:{area:"none",colIdx:-1,rowIdx:-1}}function Qs(n){return n/45*.55}function xm(n){const e=Math.abs(Qs(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const $b=500,ym=$b/2,Au=1.6,Mm=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,Sm=`
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
`,bm=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function wm(){return{uMouseUV:{value:new tt(-999,-999)},uLensR:{value:0},uLensZoom:{value:Au},uLensTint:{value:new ht(7268263)},uAspect:{value:1}}}const Qt={x:-999,y:-999};function Em(n,e,t,i,s){const r=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=r&&s>0?ym/s:0,n.uniforms.uAspect.value=s>0?i/s:1}function qo(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const qb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Kb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,jb=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Mm}

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

  ${Sm}

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
    ${bm}
    gl_FragColor = color;
  }
`;function Zb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r,a=(1+o)*o*Math.sign(t);let l=i+i*a,c=s+s*a;if(t<0){const u=.5*r,f=.5*(1+u)*u;l/=1-2*f,c/=1-2*f}return{x:.5+l,y:.5+c}}function Jb(n,e,t,i,s,r){if(!i||t.x===Qt.x||r<=0)return{x:n,y:e};const o=s/r,a=ym/r,l=(n-t.x)*o,c=e-t.y,u=Math.hypot(l,c);if(u>=a)return{x:n,y:e};const f=u/a,h=Math.min(Math.max((f-.88)/(1-.88),0),1),m=h*h*(3-2*h),v=Au+(1-Au)*m;return{x:t.x+l/v/o,y:t.y+c/v}}class ts{constructor(e){Ne(this,"canvas");Ne(this,"material");Ne(this,"mode");Ne(this,"dpr",1);Ne(this,"logicalW",0);Ne(this,"logicalH",0);Ne(this,"screenW",0);Ne(this,"screenH",0);Ne(this,"texture");Ne(this,"painter");Ne(this,"maxDpr");Ne(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});Ne(this,"mouse",{x:Qt.x,y:Qt.y});Ne(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new qn({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...wm()},vertexShader:this.mode==="world"?Kb:qb,fragmentShader:jb,transparent:!0,side:this.mode==="world"?On:ji})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new Yn(this.canvas);return e.magFilter=en,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=_s,e.anisotropy=this.anisotropy):e.minFilter=en,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const s=Math.min(i,this.maxDpr),r=Math.round(e*s),o=Math.round(t*s);return this.canvas.width===r&&this.canvas.height===o&&this.dpr===s?!1:(this.dpr=s,this.logicalW=e,this.logicalH=t,this.canvas.width=r,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:Qt.x,this.mouse.y=e?e.y:Qt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=Qs(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,Em(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=Jb(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),s=Zb(i.x,i.y,Qs(this.look.curvature));return s.x<0||s.x>1||s.y<0||s.y>1?null:{x:s.x*this.logicalW,y:(1-s.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const Qb=600;function Tm(n){const e=hl(!0);return e.run(()=>ew(n,e))}function ew(n,e){var zn,ns;const{emit:t,host:i}=n,s=Ae(((zn=n.rowData)==null?void 0:zn.call(n))??[]),r=Ae(((ns=n.pinnedBottomRowData)==null?void 0:ns.call(n))??[]),o=Ae(""),a=Ae([]),l=Ur({}),c=Ur({}),u=Ur(new Set),f=Ae(0),h=Ae(0),m=Ae(0),v=Ae(0),_=Ae(0),p=Ae(0),d=Ae(0),M=Ae(-1),w=Ae(null),g=Ae(null),C=Ae(null),T=Ae(""),E=Ae(0);let D=null;const S=Ae(!0);let b=null;je(C,H=>{var ge;b&&(clearInterval(b),b=null),H?(S.value=!0,b=setInterval(()=>{S.value=!S.value,i.redraw()},530),gn(()=>{var ve;return(ve=i.focusFilterInput)==null?void 0:ve.call(i)})):(D=null,(ge=i.blurFilterInput)==null||ge.call(i)),i.redraw()});function I(H){return H.colId??H.field??(H.headerName?H.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const F=it(()=>{var ge;const H=((ge=n.defaultColDef)==null?void 0:ge.call(n))??{};return n.columnDefs().filter(ve=>!u.has(I(ve))).map(ve=>{const Re=I(ve),Ie={...H,...ve};return{colId:Re,colDef:Ie,width:c[Re]??Ie.width??100}})}),z=it(()=>{const H=h.value;if(!H)return F.value;const ge=F.value.reduce((Ie,Ge)=>Ie+Ge.width,0);if(!ge||ge>=H)return F.value;const ve=H/ge;let Re=0;return F.value.map((Ie,Ge)=>{const et=Ge===F.value.length-1?H-Re:Math.max(8,Math.round(Ie.width*ve));return Re+=et,{...Ie,width:et}})}),X=it(()=>{const H=z.value.reduce((ge,ve)=>ge+ve.width,0);return Math.max(0,H-h.value)});function q(H,ge){if(ge.colDef.valueGetter)return ge.colDef.valueGetter({data:H,colDef:ge.colDef});if(ge.colDef.field)return H[ge.colDef.field]}function Y(H,ge){const ve=q(ge,H);return H.colDef.valueFormatter?H.colDef.valueFormatter({value:ve,data:ge,colDef:H.colDef})??"":H.colDef.cellRenderer?(H.colDef.cellRenderer({value:ve,data:ge,colDef:H.colDef})??"").replace(/<[^>]+>/g,""):ve==null?"":String(ve)}function te(H,ge){return H.colDef.cellStyle?typeof H.colDef.cellStyle=="function"?H.colDef.cellStyle({value:q(ge,H),data:ge,colDef:H.colDef})??{}:H.colDef.cellStyle:{}}function V(){return n.columnDefs().map((H,ge)=>({d:H,i:ge})).filter(({d:H})=>H.sort).sort((H,ge)=>(H.d.sortIndex??H.i)-(ge.d.sortIndex??ge.i)).map(({d:H})=>({colId:I(H),dir:H.sort}))}const ie=it(()=>{f.value;let H=s.value;const ge=o.value.trim().toLowerCase();ge&&(H=H.filter(Re=>F.value.some(Ie=>String(q(Re,Ie)??"").toLowerCase().includes(ge))));for(const[Re,Ie]of Object.entries(l)){if(!Ie)continue;const Ge=F.value.find(Xe=>Xe.colId===Re);if(Ge)if(Ie.startsWith("__eq__")){const Xe=Ie.slice(6).toLowerCase();H=H.filter(et=>String(q(et,Ge)??"").toLowerCase()===Xe)}else{const Xe=Ie.toLowerCase();H=H.filter(et=>String(q(et,Ge)??"").toLowerCase().includes(Xe))}}const ve=a.value.map(({colId:Re,dir:Ie})=>({col:F.value.find(Ge=>Ge.colId===Re),dir:Ie})).filter(Re=>!!Re.col);return ve.length&&(H=[...H].sort((Re,Ie)=>{for(const{col:Ge,dir:Xe}of ve){const et=q(Re,Ge),tn=q(Ie,Ge);let Kt=0;if(Ge.colDef.comparator?Kt=Ge.colDef.comparator(et,tn):typeof et=="number"&&typeof tn=="number"?Kt=et-tn:Kt=String(et??"").localeCompare(String(tn??""),void 0,{numeric:!0}),Kt)return Xe==="asc"?Kt:-Kt}return 0})),H});let k=null;function j(){if(typeof document>"u")return null;k||(k=document.createElement("canvas"));const H=k.getContext("2d");return H&&(H.font=tl()),H}const K=it(()=>z.value.some(H=>H.colDef.wrap)),ue=it(()=>{if(!K.value)return null;const H=j();if(!H)return null;const ge=z.value.filter(Re=>Re.colDef.wrap),ve=n.rowHeight();return ie.value.map(Re=>{let Ie=1;for(const Ge of ge){const Xe=gm(H,Y(Ge,Re),Math.max(20,Ge.width-16));Xe.length>Ie&&(Ie=Xe.length)}return kb(Ie,ve)})}),ne=it(()=>ue.value?af(ue.value,ie.value.length):null),me=it(()=>ne.value?ne.value[ie.value.length]:ie.value.length*n.rowHeight()),ye=it(()=>{const H=r.value.length*n.rowHeight();return Math.max(0,m.value-Zt-H)}),_e=it(()=>Math.max(0,me.value-ye.value)),Oe=it(()=>Math.max(1,Math.floor(ye.value/n.rowHeight()))),He=it(()=>{const H=ie.value.length;if(H===0)return 0;const ge=ne.value?nl(ne.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(H-1,ge)}),We=it(()=>{const H=ie.value.length;return H===0?0:ne.value?Math.min(H-1,nl(ne.value,p.value+ye.value-1)):Math.min(H-1,He.value+Oe.value-1)}),Me=it(()=>{const H=F.value.filter(Ie=>Ie.colDef.aggFunc!=null);if(H.length===0)return null;const ge=ie.value,ve={};for(const Ie of H){const Ge=ge.map(et=>q(et,Ie)),Xe=zb(Ge,Ie.colDef.aggFunc);if(Xe==null){ve[Ie.colId]="";continue}ve[Ie.colId]=Ie.colDef.aggValueFormatter?Ie.colDef.aggValueFormatter(Xe):String(Xe)}const Re=H[0].colId;return ve[Re]===""&&(ve[Re]="Σ"),ve});je(ie,()=>{p.value=0,w.value=null}),je(X,()=>{d.value=Math.min(d.value,X.value)}),je(_e,()=>{p.value=Math.min(p.value,_e.value)}),je([ie,()=>r.value,z,p,M,w],()=>gn(()=>i.redraw())),je(w,H=>{if(!H)return;const ge=ie.value[H.row],ve=z.value[H.col];ge&&ve&&t("cell-selected",{data:ge,row:H.row,col:H.col,colId:ve.colId})});function L(H,ge,ve,Re){v.value=ve,_.value=Re,h.value=H,m.value=ge,d.value=Math.max(0,Math.min(X.value,d.value)),p.value=Math.max(0,Math.min(_e.value,p.value))}function O(H){const ge=ne.value,ve=ge?ge[H]:H*n.rowHeight(),Re=ge?ge[H+1]:ve+n.rowHeight();ve<p.value?p.value=ve:Re>p.value+ye.value&&(p.value=Math.min(_e.value,Re-ye.value))}function R(H){var Ie;if(!h.value)return;let ge=0;for(let Ge=0;Ge<H;Ge++)ge+=z.value[Ge].width;const ve=((Ie=z.value[H])==null?void 0:Ie.width)??0,Re=ge-d.value;Re<0?d.value=Math.max(0,ge):Re+ve>h.value&&(d.value=Math.min(X.value,ge+ve-h.value))}function fe(){p.value=Math.max(0,p.value-ye.value),i.redraw()}function re(){p.value=Math.min(_e.value,p.value+ye.value),i.redraw()}let se=!1,ae="",xe=0,le=0,y=1,x=!1,A=!1,N=0,W=0,Z=0,we=0,pe=!1;function be(H,ge,ve=1){var Re;se=!0,ae=H,xe=ge,y=ve,le=((Re=z.value.find(Ie=>Ie.colId===H))==null?void 0:Re.width)??100,x=!1}function ke(H,ge){A=!0,pe=!1,N=H,W=ge,Z=d.value,we=p.value}function U(H,ge){const ve=N-H,Re=W-ge;(Math.abs(ve)>4||Math.abs(Re)>4)&&(pe=!0),d.value=Math.max(0,Math.min(X.value,Z+ve)),p.value=Math.max(0,Math.min(_e.value,we+Re)),i.redraw()}function B(){A&&(pe&&(x=!0),A=!1)}function ee(H,ge){if(A){U(H,ge);return}if(!se)return;const ve=h.value,Re=Math.max(30,le+(H-xe)*y),Ie=F.value.filter(Xe=>Xe.colId!==ae).reduce((Xe,et)=>Xe+et.width,0),Ge=ve-Re;Ge>10&&(c[ae]=Math.max(10,Math.round(Re*Ie/Ge))),i.redraw()}function Ee(){B(),se&&(se=!1,x=!0,t("column-resized"))}function he(H,ge){return Yb(H,ge,z.value,ie.value.length,n.rowHeight(),p.value,m.value,r.value.length,d.value,Me.value!==null,ue.value??void 0)}let Te=0;function Pe(H,ge,ve){C.value=null;const Re=Date.now();if(H!==0){Te=Re,d.value=Math.max(0,Math.min(X.value,d.value+H)),i.redraw();return}if(ve&&ge!==0){Te=Re,d.value=Math.max(0,Math.min(X.value,d.value+ge)),i.redraw();return}Re-Te<Qb||(p.value=Math.max(0,Math.min(_e.value,p.value+ge)),i.redraw())}function Ve(H){if(H.cx<0)return M.value=-1,i.redraw(),null;if(C.value&&D){const Re=ba(H.cx,H.cy,D,H.hitScale);if(Re!=="outside")return M.value=-1,i.redraw(),Re==="clear"?"pointer":"text"}const ge=he(H.cx,H.cy);M.value=ge.area==="body"?ge.rowIdx:-1;let ve;if(ge.area==="header"&&ge.colIdx>=0){const Re=z.value[ge.colIdx],Ie=pc(ge.colIdx,z.value),Ge=H.cx+d.value;ve=Re&&od(Ge,Ie,Re.width,H.hitScale)?"col-resize":"pointer"}else ge.area==="body"?ve="pointer":ve="default";return i.redraw(),ve}function G(){M.value=-1,i.redraw()}function Ce(H,ge,ve){if(H.cx<0||C.value&&D&&ba(H.cx,H.cy,D,H.hitScale)!=="outside")return;if(H.cy>=Zt){ke(ge,ve);return}const Re=H.cx+d.value;for(let Ie=0;Ie<z.value.length;Ie++){const Ge=z.value[Ie],Xe=pc(Ie,z.value);if(Ge.colDef.resizable!==!1&&od(Re,Xe,Ge.width,H.hitScale)){be(Ge.colId,ge,H.hitScale);return}}}function de(H,ge){var Ie,Ge,Xe;const ve={stopPropagation:!1};if(x)return x=!1,ve;if(se)return ve;if(H.cx<0)return C.value=null,ve;if(C.value&&D){const et=ba(H.cx,H.cy,D,H.hitScale);if(et==="clear")return xt(),ve;if(et!=="outside")return(Ie=i.focusFilterInput)==null||Ie.call(i),ve;C.value=null}const Re=he(H.cx,H.cy);if(Re.area==="header"&&Re.colIdx>=0){const et=z.value[Re.colIdx],tn=pc(Re.colIdx,z.value),Kt=H.cx+d.value;if(et.colDef.filter&&Xb(Kt,tn,et.width,H.hitScale))ve.stopPropagation=!0,C.value===et.colId?C.value=null:(C.value=et.colId,T.value=(Ge=l[et.colId])!=null&&Ge.startsWith("__eq__")?l[et.colId].slice(6):l[et.colId]??"",E.value=Math.max(0,tn-d.value));else if(et.colDef.sortable!==!1){C.value=null;const P=a.value.find(oe=>oe.colId===et.colId),$=P?P.dir==="asc"?"desc":null:"asc";ge.shiftKey?a.value=P?$?a.value.map(oe=>oe.colId===et.colId?{colId:oe.colId,dir:$}:oe):a.value.filter(oe=>oe.colId!==et.colId):[...a.value,{colId:et.colId,dir:"asc"}]:a.value=$?[{colId:et.colId,dir:$}]:[],t("sort-changed")}return ve}if(C.value=null,Re.area==="body"&&Re.rowIdx>=0&&Re.colIdx>=0){const et=Re.rowIdx;ge.shiftKey&&w.value?(g.value||(g.value={...w.value}),w.value={row:et,col:Re.colIdx}):(w.value={row:et,col:Re.colIdx},g.value={row:et,col:Re.colIdx}),(Xe=i.focusCanvas)==null||Xe.call(i);const tn=ie.value[et],Kt=z.value[Re.colIdx];tn&&Kt&&(t("row-clicked",{data:tn,event:ge}),t("cell-selected",{data:tn,row:et,col:Re.colIdx,colId:Kt.colId}))}return ve}function Se(H){C.value&&(H&&D&&H.cx>=0&&ba(H.cx,H.cy,D,H.hitScale)!=="outside"||(C.value=null))}function Fe(H){const ve=z.value.length-1,Re=ie.value.length-1;if(!w.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(H.key)&&(H.preventDefault(),w.value={row:He.value,col:0},g.value={row:He.value,col:0});return}let{row:Ie,col:Ge}=w.value;const Xe=(et,tn,Kt=!1)=>{Ie=Math.max(0,Math.min(Re,et)),Ge=Math.max(0,Math.min(ve,tn)),w.value={row:Ie,col:Ge},Kt||(g.value={row:Ie,col:Ge}),O(Ie),R(Ge)};switch(H.key){case"ArrowDown":H.preventDefault(),Xe(Ie+1,Ge,H.shiftKey);break;case"ArrowUp":H.preventDefault(),Xe(Ie-1,Ge,H.shiftKey);break;case"ArrowRight":H.preventDefault(),H.shiftKey?Xe(Ie,Ge+1,!0):Ge<ve?Xe(Ie,Ge+1):Xe(Ie+1,0);break;case"ArrowLeft":H.preventDefault(),H.shiftKey?Xe(Ie,Ge-1,!0):Ge>0?Xe(Ie,Ge-1):Xe(Ie-1,ve);break;case"Tab":H.preventDefault(),H.shiftKey?Ge>0?Xe(Ie,Ge-1):Xe(Ie-1,ve):Ge<ve?Xe(Ie,Ge+1):Xe(Ie+1,0);break;case"Enter":H.preventDefault(),H.shiftKey?Xe(Ie-1,Ge):Xe(Ie+1,Ge);break;case"Home":H.preventDefault(),H.ctrlKey||H.metaKey?Xe(0,0,H.shiftKey):Xe(Ie,0,H.shiftKey);break;case"End":H.preventDefault(),H.ctrlKey||H.metaKey?Xe(Re,ve,H.shiftKey):Xe(Ie,ve,H.shiftKey);break;case"PageDown":H.preventDefault(),Xe(Math.min(Re,Ie+Oe.value),Ge,H.shiftKey);break;case"PageUp":H.preventDefault(),Xe(Math.max(0,Ie-Oe.value),Ge,H.shiftKey);break;case"Escape":w.value=null,g.value=null;break;case"c":case"C":(H.ctrlKey||H.metaKey)&&(H.preventDefault(),Ue());break}}function Ue(){var Kt;if(!w.value)return;const H=z.value,ge=ie.value,ve=g.value??w.value,Re=Math.min(ve.row,w.value.row),Ie=Math.max(ve.row,w.value.row),Ge=Math.min(ve.col,w.value.col),Xe=Math.max(ve.col,w.value.col),et=[];for(let P=Re;P<=Ie;P++){const $=ge[P];if(!$)continue;const oe=[];for(let ce=Ge;ce<=Xe;ce++){const J=H[ce];J&&oe.push(Y(J,$).replace(/[\t\r\n]+/g," "))}et.push(oe.join("	"))}const tn=et.join(`
`);(Kt=navigator.clipboard)==null||Kt.writeText(tn).catch(()=>{})}function Qe(H){T.value=H,H?l[C.value]=H:delete l[C.value],t("filter-changed")}function xt(){C.value&&delete l[C.value],T.value="",C.value=null,t("filter-changed")}function It(){C.value=null}function lt(H,ge){if(!C.value||!H.width)return;const ve=H.getContext("2d");if(!ve)return;ve.setTransform(ge,0,0,ge,0,0),D=Vb(H.width/ge,E.value,!!T.value);const Re=jr[n.theme()]??jr.none;Gb(ve,D,T.value,S.value,Re)}function rn(H,{dpr:ge,glow:ve}){var Re,Ie,Ge,Xe;Hb(H,{cols:z.value,rows:ie.value,pinnedRows:r.value,rowHeight:n.rowHeight(),rowHeights:ue.value??void 0,scrollY:p.value,scrollX:d.value,theme:n.theme(),glow:ve,sorts:a.value,colFilters:l,hoveredRow:M.value,selectedRow:((Re=w.value)==null?void 0:Re.row)??-1,selectedCol:((Ie=w.value)==null?void 0:Ie.col)??-1,selectionAnchorRow:((Ge=g.value)==null?void 0:Ge.row)??-1,selectionAnchorCol:((Xe=g.value)==null?void 0:Xe.col)??-1,formatCell:Y,getCellStyle:te,aggregateRow:Me.value,dpr:ge}),lt(H,ge)}const Ct={setGridOption(H,ge){H==="rowData"?s.value=ge:H==="pinnedBottomRowData"?r.value=ge:H==="quickFilterText"&&(o.value=ge)},getColumnState(){return n.columnDefs().map(H=>{var ve;const ge=I(H);return{colId:ge,hide:u.has(ge),sort:((ve=a.value.find(Re=>Re.colId===ge))==null?void 0:ve.dir)??null,sortIndex:a.value.some(Re=>Re.colId===ge)?a.value.findIndex(Re=>Re.colId===ge):null,width:c[ge]??H.width}})},applyColumnState({state:H}){const ge=H.filter(ve=>ve.sort).sort((ve,Re)=>(ve.sortIndex??0)-(Re.sortIndex??0));ge.length&&(a.value=ge.map(ve=>({colId:ve.colId,dir:ve.sort})));for(const ve of H)ve.hide===!0&&u.add(ve.colId),ve.hide===!1&&u.delete(ve.colId),ve.width&&(c[ve.colId]=ve.width)},setFilterModel(H){for(const ge of Object.keys(l))delete l[ge];if(H)for(const[ge,ve]of Object.entries(H))(ve==null?void 0:ve.type)==="equals"?l[ge]=`__eq__${ve.filter}`:ve!=null&&ve.filter&&(l[ge]=ve.filter)},getFilterModel(){const H={};for(const[ge,ve]of Object.entries(l))ve&&(H[ge]=ve.startsWith("__eq__")?{type:"equals",filter:ve.slice(6)}:{type:"contains",filter:ve});return H},async setColumnFilterModel(H,ge){ge?ge.type==="equals"?l[H]=`__eq__${ge.filter}`:l[H]=ge.filter??"":delete l[H]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:H="export.csv"}={}){const ge=F.value,ve=ge.map(Xe=>Xe.colDef.headerName??Xe.colId).join(","),Re=ie.value.map(Xe=>ge.map(et=>`"${String(Y(et,Xe)).replace(/"/g,'""')}"`).join(",")),Ie=new Blob([[ve,...Re].join(`
`)],{type:"text/csv"}),Ge=URL.createObjectURL(Ie);Object.assign(document.createElement("a"),{href:Ge,download:H}).click(),URL.revokeObjectURL(Ge)},resize(){var H;(H=i.resize)==null||H.call(i)},getSortModel(){return a.value.map(H=>({colId:H.colId,sort:H.dir}))},setSortModel(H){a.value=H.map(ge=>({colId:ge.colId,dir:ge.sort}))},getScrollY(){return p.value},setScrollY(H){gn(()=>{p.value=Math.max(0,Math.min(_e.value,H))})},resetColumnState(){u.clear();for(const H of n.columnDefs())H.hide&&u.add(I(H));a.value=V();for(const H of Object.keys(c))delete c[H];for(const H of Object.keys(l))delete l[H];o.value="",p.value=0,w.value=null,C.value=null}};function rr(){var H,ge;for(const ve of n.columnDefs())ve.hide&&u.add(I(ve));a.value.length||(a.value=V()),s.value=((H=n.rowData)==null?void 0:H.call(n))??[],r.value=((ge=n.pinnedBottomRowData)==null?void 0:ge.call(n))??[]}function Ei(){b&&(clearInterval(b),b=null),e.stop()}return{scrollX:d,scrollY:p,maxScrollX:X,maxScrollY:_e,filteredRows:ie,displayCols:z,resolvedCols:F,aggregateRow:Me,rowHeights:ue,firstVisibleRow:He,lastVisibleRow:We,visibleRowCount:Oe,selectedCell:w,selectionAnchor:g,hoveredRow:M,activeFilter:C,filterPopupValue:T,caretOn:S,canvasW:h,canvasH:m,screenW:v,screenH:_,sortState:a,colFilters:l,formatCell:Y,getCellValue:q,hit:he,get resizing(){return se},get panning(){return A},setViewport:L,pageUp:fe,pageDown:re,ensureRowVisible:O,ensureColVisible:R,wheel:Pe,hover:Ve,leave:G,pointerDown:Ce,click:de,docClick:Se,keyDown:Fe,panStart:ke,panMove:U,panEnd:B,globalMove:ee,globalUp:Ee,setFilterText:Qe,clearFilter:xt,closeFilter:It,paint:rn,api:Ct,init:rr,dispose:Ei}}const tw=["value"],nw=["disabled"],iw=["disabled"],sw=28,rw=fi({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,s=Ae(null),r=Tm({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>q(),resize:()=>X(),focusCanvas:()=>{var A;return(A=g.value)==null?void 0:A.focus()},focusFilterInput:()=>{var A;return(A=s.value)==null?void 0:A.focus()},blurFilterInput:()=>{var A;return(A=s.value)==null?void 0:A.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:c,selectedCell:u,firstVisibleRow:f,lastVisibleRow:h,activeFilter:m,filterPopupValue:v,formatCell:_,pageUp:p,pageDown:d,clearFilter:M}=r,w=Ae(null),g=Ae(null),C=Gi("cathodeResetTick",Ae(0));je(C,()=>re());let T=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),E=null,D=!1;function S(){if(E){try{E.forceContextLoss()}catch{}try{E.dispose()}catch{}E=null}}let b,I;const F=new ts({paint:(A,{dpr:N,glow:W})=>r.paint(A,{dpr:N,glow:W})});function z(){if(!(!g.value||!w.value)){try{E=new nr({canvas:g.value,antialias:!1,alpha:!0})}catch{D=!0}if(!D&&!E.getContext()&&(E.dispose(),E=null,D=!0),D){X();return}E.setPixelRatio(1),E.setClearColor(0,0),b=new ir,I=new tr(-1,1,1,-1,0,1),b.add(new Dt(new Xt(2,2),F.material)),X()}}function X(){if(!w.value||!E&&!D)return;const A=w.value.clientWidth,N=w.value.clientHeight-(t.pagination?sw:0);if(!A||!N)return;const W=t.bendField?Math.round(A*xm(t.curvature)):A;F.resize(W,N),F.setScreenSize(A,N),T=F.dpr,r.setViewport(W,N,A,N),E?(E.setPixelRatio(T),E.setSize(A,N)):g.value&&(g.value.width=Math.round(A*T),g.value.height=Math.round(N*T),g.value.style.width=A+"px",g.value.style.height=N+"px"),q()}function q(){if(!F.canvas.width)return;if(D){if(!g.value)return;F.paintOnly(!1);const N=F.canvas,W=g.value.getContext("2d");W&&W.drawImage(N,0,0,N.width,N.height,0,0,g.value.width,g.value.height);return}if(!E)return;const A=t.theme==="paper";F.setLook({curvature:t.curvature,scanlines:t.scanlines&&!A,vignette:!A,magnify:t.magnify}),F.syncUniforms(),F.paint(t.glow),E.render(b,I)}function Y(A,N){if(!g.value)return[-1,-1];const W=g.value.getBoundingClientRect(),Z=A-W.left,we=N-W.top,pe=W.width,be=W.height,ke=Qs(t.curvature),[U,B]=_m(Z,we,pe,be,ke,F.canvas.width/T||pe,F.canvas.height/T||be);return U<0?[-1,-1]:[U,B]}function te(A){return Y(A.clientX,A.clientY)}function V(A){if(!g.value)return 1;const[N]=Y(A.clientX-4,A.clientY),[W]=Y(A.clientX+4,A.clientY);return N<0||W<0?1:Math.max(1,Math.abs(W-N)/8)}function ie(A){const[N,W]=te(A);return{cx:N,cy:W,hitScale:V(A)}}function k(A){r.wheel(A.deltaX,A.deltaY,A.shiftKey)}function j(A){if(r.resizing)return;t.magnify&&g.value&&F.setLens(qo(A,g.value));const N=r.hover(ie(A));N&&g.value&&(g.value.style.cursor=N)}function K(){F.setLens(null),r.leave()}function ue(A){r.pointerDown(ie(A),A.clientX,A.clientY)}function ne(A){r.click(ie(A),A).stopPropagation&&A.stopPropagation()}function me(A){m.value&&r.docClick(A.target===g.value?ie(A):null)}function ye(A){r.globalMove(A.clientX,A.clientY)}function _e(){r.globalUp()}function Oe(A){A.touches.length===1&&r.panStart(A.touches[0].clientX,A.touches[0].clientY)}function He(A){!r.panning||A.touches.length!==1||(A.preventDefault(),r.panMove(A.touches[0].clientX,A.touches[0].clientY))}function We(){r.panEnd()}function Me(A){r.keyDown(A)}function L(A){r.setFilterText(A.target.value)}je(()=>t.theme,()=>q()),je(()=>[t.curvature,t.bendField],()=>gn(X)),je(()=>t.scanlines,()=>q()),je(()=>t.glow,()=>q()),je(()=>t.magnify,A=>{A||F.setLens(null),q()});let O=null,R=null,fe=0;function re(){cancelAnimationFrame(fe),fe=requestAnimationFrame(X)}function se(A){A.preventDefault()}function ae(){E==null||E.dispose(),E=null,D=!1,z()}Ln(()=>{r.init(),document.addEventListener("click",me),document.addEventListener("mousemove",ye),document.addEventListener("mouseup",_e),gn(()=>{var A;z(),g.value&&(g.value.addEventListener("webglcontextlost",se),g.value.addEventListener("webglcontextrestored",ae)),w.value&&(O=new ResizeObserver(()=>X()),O.observe(w.value),R=new IntersectionObserver(N=>{N.some(W=>W.isIntersecting)&&re()}),R.observe(w.value)),window.addEventListener("resize",re),(A=window.visualViewport)==null||A.addEventListener("resize",re),i("grid-ready",{api:r.api})})}),Kn(()=>{var A,N,W;document.removeEventListener("click",me),document.removeEventListener("mousemove",ye),document.removeEventListener("mouseup",_e),(A=g.value)==null||A.removeEventListener("webglcontextlost",se),(N=g.value)==null||N.removeEventListener("webglcontextrestored",ae),O==null||O.disconnect(),R==null||R.disconnect(),window.removeEventListener("resize",re),(W=window.visualViewport)==null||W.removeEventListener("resize",re),cancelAnimationFrame(fe),S(),F.dispose(),r.dispose()});const xe=it(()=>jr[t.theme]??jr.none),le=it(()=>({background:xe.value.headerBg,borderTop:`1px solid ${xe.value.border}`,color:xe.value.text})),y=it(()=>({background:xe.value.bg})),x=it(()=>xe.value.accent);return(A,N)=>{var W,Z;return Je(),gt("div",{ref_key:"wrapEl",ref:w,class:"cathode-wrap",style:Bn(y.value)},[Le("canvas",{ref_key:"canvasEl",ref:g,class:"cathode-canvas",tabindex:"0",onWheel:Gs(k,["prevent"]),onMousemove:j,onMouseleave:K,onMousedown:ue,onClick:ne,onKeydown:Me,onTouchstartPassive:Oe,onTouchmove:He,onTouchend:We,onTouchcancel:We},null,544),yt(m)?(Je(),gt("input",{key:0,ref_key:"filterGhostEl",ref:s,class:"cathode-filter-ghost","aria-label":"Filter column",value:yt(v),autofocus:"",onInput:L,onKeydown:[N[0]||(N[0]=eh((...we)=>yt(M)&&yt(M)(...we),["escape"])),N[1]||(N[1]=eh(we=>yt(r).closeFilter(),["enter"]))]},null,40,tw)):Jt("",!0),n.pagination?(Je(),gt("div",{key:1,class:"cathode-pagination",style:Bn(le.value)},[Le("button",{disabled:yt(o)<=0,onClick:N[2]||(N[2]=we=>yt(p)())},"◀",8,nw),Le("span",null,cn((yt(f)+1).toLocaleString())+"–"+cn(Math.min(yt(l).length,yt(h)+1).toLocaleString())+" / "+cn(yt(l).length.toLocaleString()),1),Le("button",{disabled:yt(o)>=yt(a),onClick:N[3]||(N[3]=we=>yt(d)())},"▶",8,iw),Le("span",{class:"cathode-page-info",style:Bn({color:x.value})},cn(yt(l).length.toLocaleString())+" rows ",5),yt(u)?(Je(),gt("span",{key:0,class:"cathode-sel-readout",style:Bn({color:x.value})},cn(((W=yt(c)[yt(u).col])==null?void 0:W.colDef.headerName)??((Z=yt(c)[yt(u).col])==null?void 0:Z.colId))+" : "+cn(yt(_)(yt(c)[yt(u).col],yt(l)[yt(u).row])),5)):Jt("",!0)],4)):Jt("",!0)],4)}}}),hi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},ad=hi(rw,[["__scopeId","data-v-3f5baab2"]]),il={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function ow(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const aw=12,nn=18,Ro=10,Ks=6,lf=`${aw}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function lw(n,e,t){if(t<=0||!e)return[e];const i=[];for(const s of e.split(`
`)){if(!s){i.push("");continue}if(n.measureText(s).width<=t){i.push(s);continue}const r=s.split(/(\s+)/);let o="";for(const a of r){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Am(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${s}`}return n}function cw(n,e){return Math.ceil(n.measureText(e).width)+12}function uw(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:s,wordWrap:r}=n,o=n.formatTs??Am;t.font=lf;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=s&&c.ts!=null?o(c.ts):"",h=r?lw(t,c.text,i):c.text.split(`
`);for(let m=0;m<h.length;m++)a.push({entryIdx:l,text:h[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(h[m]).width})}return a}function fw(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,s=n.width/i,r=n.height/i,o=il[e.theme]??il.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip(),t.font=lf,t.textBaseline="middle";const a=e.visualLines,l=Ro-e.scrollX,c=(e.showTimestamps?Ro+e.timestampWidth:Ro)-e.scrollX,u=Math.max(0,Math.floor((e.scrollY-Ks)/nn)),f=Math.min(a.length,Math.ceil((e.scrollY+r-Ks)/nn)+1);for(let h=u;h<f;h++){const m=a[h],v=Ks+h*nn-e.scrollY+nn/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;h+p<f&&a[h+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,v-nn/2,s,nn*p)}e.selectionStart>=0&&h>=e.selectionStart&&h<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,v-nn/2,s,nn)),h===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,v-nn/2,s,nn)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,v),t.shadowBlur=0);const _=ow(o,m.level);t.fillStyle=_,t.textAlign="left",e.glow?(t.shadowColor=_,t.shadowBlur=14,t.fillText(m.text,c,v),t.shadowBlur=7,t.fillText(m.text,c,v),t.shadowBlur=3,t.fillText(m.text,c,v),t.shadowBlur=0):t.fillText(m.text,c,v)}t.restore()}function ld(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Ks)/nn);return i<0||i>=t?-1:i}function hw(n){return Ks*2+n*nn}function Cm(n){const e=hl();return e.run(()=>{const t=()=>{var Me;return((Me=n.showTimestamps)==null?void 0:Me.call(n))??!0},i=()=>{var Me;return((Me=n.wordWrap)==null?void 0:Me.call(n))??!0},s=Ae(0),r=Ae(0),o=Ae(0),a=Ae(0),l=Ae(-1),c=Ae(!0),u=Ae(-1),f=Ae(-1),h=document.createElement("canvas"),m=it(()=>{var O;const Me=n.entries()??[],L=((O=n.maxLines)==null?void 0:O.call(n))??0;return L>0&&Me.length>L?Me.slice(Me.length-L):Me}),v=it(()=>{var O;if(!t())return"";const Me=((O=n.formatTs)==null?void 0:O.call(n))??Am;let L="00:00:00";for(const R of m.value){if(R.ts==null)continue;const fe=Me(R.ts);fe.length>L.length&&(L=fe)}return L}),_=Ae(0),p=Ae([]);function d(){var O;const Me=h.getContext("2d");if(!Me)return;Me.font=lf;const L=t()?cw(Me,v.value):0;_.value=L,p.value=uw({entries:m.value,ctx:Me,textMaxWidth:Math.max(1,s.value-Ro*2-L),showTimestamps:t(),formatTs:(O=n.formatTs)==null?void 0:O.call(n),wordWrap:i()})}const M=it(()=>hw(p.value.length)),w=it(()=>Math.max(0,M.value-r.value)),g=it(()=>{let Me=0;for(const L of p.value)L.widthPx>Me&&(Me=L.widthPx);return Ro*2+_.value+Me}),C=it(()=>Math.max(0,g.value-s.value));je(w,()=>{c.value?o.value=w.value:o.value=Math.min(o.value,w.value)}),je(C,()=>{a.value=Math.min(a.value,C.value)}),je([m,s,t,i,v],()=>{d(),gn(()=>n.host.redraw())},{deep:!1}),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw()),je(l,()=>n.host.redraw()),je([u,f],()=>n.host.redraw());function T(Me,L){s.value=Me,r.value=L,d(),c.value&&(o.value=Math.max(0,M.value-r.value))}function E(Me){o.value=Math.max(0,Math.min(w.value,Me)),c.value=o.value>=w.value-4}function D(Me){a.value=Math.max(0,Math.min(C.value,Me))}function S(Me,L,O){O?D(a.value+L):Math.abs(Me)>Math.abs(L)?D(a.value+Me):E(o.value+L)}function b(){c.value=!0,o.value=w.value}function I(Me){E(Ks+Me*nn)}let F=!1,z=!1,X=0,q=0,Y=0,te=0;function V(Me,L){F=!0,z=!1,X=Me,q=L,Y=a.value,te=o.value}function ie(Me,L){if(!F)return!1;const O=X-Me,R=q-L;return(Math.abs(O)>4||Math.abs(R)>4)&&(z=!0),D(Y+O),E(te+R),!0}function k(){F&&(F=!1,z&&(z=!1))}const j=()=>F;function K(Me){l.value=Me<0?-1:ld(Me,o.value,p.value.length)}function ue(){l.value=-1}function ne(Me,L){if(z){z=!1;return}const O=Me<0?-1:ld(Me,o.value,p.value.length);if(O<0){u.value=-1,f.value=-1;return}L&&u.value>=0||(u.value=O),f.value=O}function me(Me,L){const O=p.value.length;if(O===0)return;const R=f.value<0?0:f.value,fe=Math.max(0,Math.min(O-1,R+Me));f.value=fe,(!L||u.value<0)&&(u.value=fe),l.value=fe;const re=Ks+fe*nn,se=re+nn;re<o.value?E(re):se>o.value+r.value&&E(se-r.value)}function ye(){const Me=Math.min(u.value,f.value),L=Math.max(u.value,f.value);if(Me<0)return"";const O=p.value,R=new Set,fe=[];for(let re=Me;re<=L&&re<O.length;re++){const se=O[re];if(R.has(se.entryIdx))continue;R.add(se.entryIdx);let ae="";for(let xe=0;xe<O.length;xe++)O[xe].entryIdx===se.entryIdx&&(ae+=(ae&&!O[xe].isFirstFrag?" ":"")+O[xe].text);fe.push(se.timestamp?`${se.timestamp}  ${ae}`:ae)}return fe.join(`
`)}async function _e(){const Me=ye();if(Me)try{await navigator.clipboard.writeText(Me)}catch{const L=document.createElement("textarea");L.value=Me,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();try{document.execCommand("copy")}catch{}document.body.removeChild(L)}}function Oe(Me){if((Me.metaKey||Me.ctrlKey)&&(Me.key==="c"||Me.key==="C")){u.value>=0&&(Me.preventDefault(),_e());return}if((Me.metaKey||Me.ctrlKey)&&(Me.key==="a"||Me.key==="A")){Me.preventDefault(),u.value=0,f.value=p.value.length-1;return}switch(Me.key){case"ArrowDown":Me.preventDefault(),me(1,Me.shiftKey);break;case"ArrowUp":Me.preventDefault(),me(-1,Me.shiftKey);break;case"ArrowRight":Me.preventDefault(),D(a.value+nn*2);break;case"ArrowLeft":Me.preventDefault(),D(a.value-nn*2);break;case"PageDown":Me.preventDefault(),E(o.value+r.value);break;case"PageUp":Me.preventDefault(),E(o.value-r.value);break;case"Home":Me.preventDefault(),E(0),D(0);break;case"End":Me.preventDefault(),E(w.value);break;case"Escape":u.value=-1,f.value=-1;break}}function He(Me,{dpr:L,glow:O}){fw(Me,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:O,showTimestamps:t(),timestampWidth:_.value,hoveredLine:l.value,selectionStart:Math.min(u.value,f.value),selectionEnd:Math.max(u.value,f.value),dpr:L})}function We(){e.stop()}return{canvasW:s,canvasH:r,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:c,selectionAnchor:u,selectionActive:f,visualLines:p,tsWidth:_,contentH:M,maxScrollY:w,maxScrollX:C,setViewport:T,setScroll:E,setScrollX:D,wheel:S,scrollToBottom:b,scrollToLine:I,panStart:V,panMove:ie,panEnd:k,panning:j,hover:K,leave:ue,click:ne,keyDown:Oe,moveSelection:me,selectionAsText:ye,copySelection:_e,paint:He,dispose:We}})}const dw=fi({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=Ae(null),s=Ae(null),r={...Qt},o=Cm({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function c(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let u,f,h=1;const m=new ts({paint:(K,{dpr:ue,glow:ne})=>o.paint(K,{dpr:ue,glow:ne})});function v(){if(!(!s.value||!i.value)){try{a=new nr({canvas:s.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){_();return}a.setPixelRatio(1),a.setClearColor(0,0),u=new ir,f=new tr(-1,1,1,-1,0,1),u.add(new Dt(new Xt(2,2),m.material)),_()}}function _(){if(!i.value||!a&&!l)return;const K=i.value.clientWidth,ue=i.value.clientHeight;!K||!ue||m.resize(K,ue)&&(m.setScreenSize(K,ue),h=m.dpr,o.setViewport(K,ue),a?(a.setPixelRatio(h),a.setSize(K,ue)):s.value&&(s.value.width=Math.round(K*h),s.value.height=Math.round(ue*h),s.value.style.width=K+"px",s.value.style.height=ue+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!s.value)return;m.paintOnly(!1);const ue=s.value.getContext("2d");ue&&ue.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,s.value.width,s.value.height);return}if(!a)return;const K=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!K,vignette:!K,magnify:t.magnify}),m.setLens(t.magnify?r:null),m.syncUniforms(),m.paint(t.glow),a.render(u,f)}je(()=>t.theme,()=>p()),je(()=>t.curvature,()=>p()),je(()=>t.scanlines,()=>p()),je(()=>t.glow,()=>p()),je(()=>t.magnify,K=>{K||(r.x=Qt.x,r.y=Qt.y),p()});function d(K){if(!s.value)return[-1,-1];const ue=s.value.getBoundingClientRect();return[K.clientX-ue.left,K.clientY-ue.top]}function M(K){o.wheel(K.deltaX,K.deltaY,K.shiftKey)}function w(K){o.panStart(K.clientX,K.clientY),i.value&&i.value.focus()}function g(K){o.panMove(K.clientX,K.clientY)}function C(){o.panEnd()}function T(K){if(K.touches.length!==1)return;const ue=K.touches[0];o.panStart(ue.clientX,ue.clientY),i.value&&i.value.focus()}function E(K){if(!o.panning()||K.touches.length!==1)return;K.preventDefault();const ue=K.touches[0];o.panMove(ue.clientX,ue.clientY)}function D(){o.panEnd()}function S(K){const[,ue]=d(K);o.click(ue,K.shiftKey)}function b(K){o.keyDown(K)}function I(K){if(t.magnify&&s.value){const ne=qo(K,s.value);r.x=ne.x,r.y=ne.y,p()}const[,ue]=d(K);o.hover(ue)}function F(){o.leave(),r.x=Qt.x,r.y=Qt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine(K){o.scrollToLine(K)}});let z=null,X=null,q=0;const Y=Gi("cathodeResetTick",Ae(0));je(Y,()=>te());function te(){cancelAnimationFrame(q),q=requestAnimationFrame(_)}function V(K){K.preventDefault()}function ie(){a==null||a.dispose(),a=null,l=!1,v()}Ln(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",C),gn(()=>{var K;v(),s.value&&(s.value.addEventListener("webglcontextlost",V),s.value.addEventListener("webglcontextrestored",ie)),i.value&&(z=new ResizeObserver(()=>_()),z.observe(i.value),X=new IntersectionObserver(ue=>{ue.some(ne=>ne.isIntersecting)&&te()}),X.observe(i.value)),window.addEventListener("resize",te),(K=window.visualViewport)==null||K.addEventListener("resize",te),o.scrollY.value=o.maxScrollY.value})}),Kn(()=>{var K,ue,ne;document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",C),(K=s.value)==null||K.removeEventListener("webglcontextlost",V),(ue=s.value)==null||ue.removeEventListener("webglcontextrestored",ie),z==null||z.disconnect(),X==null||X.disconnect(),window.removeEventListener("resize",te),(ne=window.visualViewport)==null||ne.removeEventListener("resize",te),cancelAnimationFrame(q),c(),o.dispose(),m.dispose()});const k=it(()=>il[t.theme]??il.none),j=it(()=>({background:k.value.bg}));return(K,ue)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:Bn(j.value),tabindex:"0",onKeydown:b},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-log-canvas",onWheel:Gs(M,["prevent"]),onMousemove:I,onMouseleave:F,onMousedown:w,onClick:S,onTouchstartPassive:T,onTouchmove:E,onTouchend:D,onTouchcancel:D},null,544)],36))}}),Cu=hi(dw,[["__scopeId","data-v-328a73e4"]]),Zr={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},Rm=.18,go=8,cf=22,pw=4,ui=8,Ss=56,uf=42,Qi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",mw="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",mc=4,gw=1,vw=1;function _w(n,e,t,i=0,s=!1){const r=s?uf:Ss,o=Math.max(0,e-ui-r),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function xw(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,s=-1/0,r=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>s&&(s=c.high),c.volume>r&&(r=c.volume))}if(!isFinite(i)||!isFinite(s)||i===s){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,r)}}const a=(s-i)*.04;return{min:i-a,max:s+a,maxVol:Math.max(1,r)}}function yw(n,e,t=!1){const i=t?pw:cf,s=Math.max(1,n-go-i-mc),r=Math.max(0,Math.round(s*e)),o=s-r;return{priceY0:go,priceY1:go+o,volumeY0:go+o+mc,volumeY1:go+o+mc+r}}function ni(n,e,t,i){const s=e.max-e.min;return s<=0?(t+i)/2:t+(1-(n-e.min)/s)*(i-t)}function ws(n,e,t){return ui+(n-e+.5)*t}function xs(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function ff(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${s}:${r}`}function Mw(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),s=t/i;let r;return s<1.5?r=1:s<3?r=2:s<7?r=5:r=10,r*i}function Pm(n,e){var v,_,p,d,M;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Zr[e.theme]??Zr.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,s,r),t.fillStyle=a.bg,t.fillRect(0,0,s,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const c=_w(e.candles.length,s,e.slotW,e.scrollX,l),u=xw(e.candles,c.firstIdx,c.count),f=yw(r,e.showVolume?e.volumeFraction:0,l),h=Math.max(gw,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,c.firstIdx+c.count);for(let w=c.firstIdx;w<m;w++){const g=e.candles[w];if(!g)continue;const C=ws(w,c.firstIdx,e.slotW),T=ni(g.open,u,f.priceY0,f.priceY1),E=ni(g.close,u,f.priceY0,f.priceY1),D=ni(g.high,u,f.priceY0,f.priceY1),S=ni(g.low,u,f.priceY0,f.priceY1),b=g.close>=g.open,I=b?a.wickBull:a.wickBear,F=b?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=F),t.strokeStyle=I,t.lineWidth=vw,t.beginPath(),t.moveTo(Math.round(C)+.5,D),t.lineTo(Math.round(C)+.5,S),t.stroke(),t.fillStyle=F;const z=Math.min(T,E),X=Math.max(1,Math.abs(E-T)),q=Math.round(C-h/2),Y=Math.round(z),te=Math.round(X);if(t.fillRect(q,Y,h,te),e.glow&&(t.shadowBlur=4,t.fillRect(q,Y,h,te)),t.shadowBlur=0,e.showVolume&&u.maxVol>0){const V=Math.round(g.volume/u.maxVol*(f.volumeY1-f.volumeY0));V>0&&(t.fillStyle=b?a.volumeBull:a.volumeBear,t.fillRect(Math.round(C-h/2),f.volumeY1-V,h,V))}}if((v=e.overlays)!=null&&v.length){const w={above:0,below:0},g=e.overlays.filter(T=>T.kind!=="hline"&&!!T.label).length,C=g?14+14*g+12:8;for(const T of e.overlays)T.kind==="hline"?bw(t,T,s,u,f,a,l,w,C):Sw(t,T,c,u,f,e.slotW)}(_=e.markers)!=null&&_.length&&Dw(t,a,e.markers,e.candles,c,u,f,e.slotW),Lw(t,a,u,f,s,l),l||(Iw(t,a,e.candles,c,e.slotW,r),Rw(t,a,e.candles,s,r)),(p=e.overlays)!=null&&p.length&&Ew(t,a,e.overlays,f),e.hover&&(Uw(t,a,e.candles,c,u,f,e.slotW,e.hover,s),Tw(t,a,e.candles,c,e.slotW,e.hover,f,((d=e.overlays)==null?void 0:d.length)??0),(M=e.markers)!=null&&M.length&&Cw(t,a,e.markers,e.candles,c,u,f,e.slotW,e.hover,s)),t.restore()}function Sw(n,e,t,i,s,r){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(ui,s.priceY0,999999,s.priceY1-s.priceY0),n.clip(),e.kind==="line")wa(n,e.data,t.firstIdx,o,r,i,s,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=Dm(e.color,e.fillAlpha??.08);ww(n,e.upper,e.lower,t.firstIdx,o,r,i,s,l),wa(n,e.upper,t.firstIdx,o,r,i,s,e.color,1,!1),wa(n,e.lower,t.firstIdx,o,r,i,s,e.color,1,!1),(a=e.middle)!=null&&a.length&&wa(n,e.middle,t.firstIdx,o,r,i,s,e.color,1,e.middleDashed!==!1)}n.restore()}function bw(n,e,t,i,s,r,o,a={above:0,below:0},l=8){const c=ni(e.price,i,s.priceY0,s.priceY1),u=c<s.priceY0-.5,f=c>s.priceY1+.5,h=u||f,m=h?u?a.above++:a.below++:0,v=h?u?s.priceY0+l+m*20:s.priceY1-8-m*20:c,_=o?uf:Ss,p=Math.round(v)+.5;n.save(),h||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(ui,p),n.lineTo(t-_,p),n.stroke(),n.setLineDash([]));let d=e.label??xs(e.price);if(h&&d!==""&&(d=(u?"↑ ":"↓ ")+d),d!==""){n.font=Qi,n.textBaseline="middle",n.textAlign="left";const M=n.measureText(d).width,w=4,g=2,C=ui+2;n.fillStyle=e.color,h&&(n.globalAlpha=.85),n.fillRect(C,v-7-g,M+w*2,14+g*2),n.globalAlpha=1,n.fillStyle=r.bg&&!r.bg.startsWith("rgba(0,0,0,0)")?r.bg:"#0d1520",n.fillText(d,C+w,v)}n.restore()}function wa(n,e,t,i,s,r,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=ws(f,t,s),v=ni(h,r,o.priceY0,o.priceY1);u?n.lineTo(m,v):(n.moveTo(m,v),u=!0)}u&&n.stroke(),n.setLineDash([])}function ww(n,e,t,i,s,r,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=s;f++){const h=e[f],m=t[f],v=f<s&&typeof h=="number"&&typeof m=="number"&&isFinite(h)&&isFinite(m);if(v&&!c&&(u=f,c=!0),!v&&c||f===s&&c){const _=v?f+1:f;n.beginPath();for(let p=u;p<_;p++){const d=ws(p,i,r),M=ni(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,M):n.lineTo(d,M)}for(let p=_-1;p>=u;p--){const d=ws(p,i,r),M=ni(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,M)}n.closePath(),n.fill(),c=!1}}}function Dm(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),s=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${i},${s},${r},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function Ew(n,e,t,i){const s=t.filter(_=>_.kind!=="hline"&&!!_.label);if(!s.length)return;n.save(),n.font=Qi;const r=8,o=5,a=12,l=6,c=14;let u=0;for(const _ of s){const p=n.measureText(_.label).width;p>u&&(u=p)}const f=r*2+a+l+u,h=o*2+c*s.length,m=ui+4,v=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,v,f,h),n.textBaseline="middle",n.textAlign="left";for(let _=0;_<s.length;_++){const p=s[_],d=v+o+c*(_+.5),M=m+r;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(M,d),n.lineTo(M+a,d),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=Dm(p.color,p.fillAlpha??.2),n.fillRect(M,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(M+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,M+a+l,d)}n.restore()}function Tw(n,e,t,i,s,r,o,a){const l=Math.floor((r.x-ui)/s),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",v=[["O",xs(u.open),void 0],["H",xs(u.high),void 0],["L",xs(u.low),void 0],["C",xs(u.close),void 0],["V",Aw(u.volume),void 0],["",`${m}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Qi,n.textBaseline="middle",n.textAlign="left";const _=8,p=4,d=14;let M=_;for(const[T,E]of v){const D=T?`${T} ${E}`:E,S=n.measureText(D).width+12;M+=S}M+=_-12;const w=o.priceY0+4+(a>0?p*2+14*a+4:0),g=ui+4;n.fillStyle=e.panelBg,n.fillRect(g,w,M,d+p*2);let C=g+_;for(let T=0;T<v.length;T++){const[E,D,S]=v[T];n.fillStyle=e.text,E&&(n.globalAlpha=.6,n.fillText(E+" ",C,w+p+d/2),n.globalAlpha=1,C+=n.measureText(E+" ").width),S&&(n.fillStyle=S),n.fillText(D,C,w+p+d/2),C+=n.measureText(D).width+12}n.restore()}function Aw(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function Cw(n,e,t,i,s,r,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,s.firstIdx+s.count),m=9;let v=null;for(const D of t){let S=0,b=i.length-1,I=-1;for(;S<=b;){const X=S+b>>1,q=i[X].start-D.timestamp;if(Math.abs(q)<=f){I=X;break}q<0?S=X+1:b=X-1}if(I<0||I<s.firstIdx||I>=h)continue;const F=ws(I,s.firstIdx,a),z=ni(D.price,r,o.priceY0,o.priceY1);if(Math.abs(l.x-F)<=m&&Math.abs(l.y-z)<=m){v={m:D,x:F,y:z};break}}if(!v)return;const _=ff(v.m.timestamp),p=[`${v.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${_}`,`@ ${xs(v.m.price)}`];v.m.label&&p.push(v.m.label),n.save(),n.font=Qi,n.textBaseline="top",n.textAlign="left";const d=6,M=14;let w=0;for(const D of p){const S=n.measureText(D).width;S>w&&(w=S)}const g=w+d*2,C=p.length*M+d*2;let T=v.x+12;T+g>c-Ss&&(T=v.x-12-g);let E=v.y-C/2;E<o.priceY0&&(E=o.priceY0),E+C>o.priceY1&&(E=o.priceY1-C),n.fillStyle=e.panelBgSolid,n.strokeStyle=v.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(T,E,g,C),n.strokeRect(T+.5,E+.5,g-1,C-1);for(let D=0;D<p.length;D++){const S=p[D];n.fillStyle=D===0?v.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(S,T+d,E+d+D*M)}n.restore()}function Rw(n,e,t,i,s){if(t.length<2)return;const r=t[1].start-t[0].start,o=Pw(r);if(!o)return;n.save(),n.font=Qi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-Ss-a,f=s-cf+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function Pw(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,s=24*i,r=7*s;return n>=r&&n%r===0?n/r+"W":n>=s&&n%s===0?n/s+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function Dw(n,e,t,i,s,r,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,s.firstIdx+s.count),f=m=>{let v=0,_=i.length-1;for(;v<=_;){const p=v+_>>1,d=i[p].start-m;if(Math.abs(d)<=c)return p;d<0?v=p+1:_=p-1}return-1},h=7;for(const m of t){const v=f(m.timestamp);if(v<0||v<s.firstIdx||v>=u)continue;const _=ws(v,s.firstIdx,a),p=ni(m.price,r,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(_,p-h),n.lineTo(_-h,p+h-1),n.lineTo(_+h,p+h-1)):(n.moveTo(_,p+h),n.lineTo(_-h,p-h+1),n.lineTo(_+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function Lw(n,e,t,i,s,r=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=r?Math.max(2,Math.min(4,Math.round(a/36))):6,c=Mw(o,l),u=Math.ceil(t.min/c)*c,f=r?uf:Ss;n.font=r?mw:Qi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const m=ni(h,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(ui,Math.round(m)+.5),n.lineTo(s-f,Math.round(m)+.5),n.stroke(),n.fillText(xs(h),s-f+3,m))}n.globalAlpha=1}function Iw(n,e,t,i,s,r){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Qi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=ws(c,i.firstIdx,s);n.fillText(ff(u.start),f,r-cf+4)}n.globalAlpha=1}function Uw(n,e,t,i,s,r,o,a,l){const c=Math.floor((a.x-ui)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=ws(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,r.priceY0),n.lineTo(Math.round(h)+.5,r.volumeY1||r.priceY1),n.stroke();const m=Math.max(r.priceY0,Math.min(r.priceY1,a.y));n.beginPath(),n.moveTo(ui,Math.round(m)+.5),n.lineTo(l-Ss,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const v=s.max-s.min;if(v>0){const d=s.max-(m-r.priceY0)/(r.priceY1-r.priceY0)*v,M=xs(d);n.font=Qi,n.textBaseline="middle",n.textAlign="left";const w=n.measureText(M).width,g=4,C=2;n.fillStyle=e.accent,n.fillRect(l-Ss+2,m-7-C,w+g*2,14+C*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(M,l-Ss+2+g,m)}n.font=Qi,n.textBaseline="top",n.textAlign="center";const _=ff(f.start),p=n.measureText(_).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,r.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(_,h,r.volumeY1+4),n.restore()}const gc=.25,vc=6,cd=8;function Lm(n){const e=hl();return e.run(()=>{const t=Ae(0),i=Ae(0),s=Ae(0),r=Ae(1),o=Ae(null),a=it(()=>Math.max(1,n.slotW()*r.value));je([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var D;return(D=n.compact)==null?void 0:D.call(n)},()=>n.candles(),()=>{var D;return(D=n.overlays)==null?void 0:D.call(n)},()=>{var D;return(D=n.markers)==null?void 0:D.call(n)}],()=>n.host.redraw(),{deep:!1}),je(()=>{var D;return(D=n.colors)==null?void 0:D.call(n)},()=>n.host.redraw(),{deep:!0}),je(s,()=>n.host.redraw()),je(r,()=>n.host.redraw()),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw());function l(D,S){t.value=D,i.value=S}function c(D){var z;const S=a.value;if(S<=0)return 0;const b=((z=n.candles())==null?void 0:z.length)??0,I=Math.max(1,Math.floor((t.value||1)/S)),F=Math.max(0,b-I);return Math.max(0,Math.min(D,F*S))}function u(D,S,b,I){if(D!==0||b&&S!==0){const q=D!==0?D:S;s.value=c(s.value+q);return}if(S===0)return;const F=n.candles(),z=a.value,X=Math.exp(-S*.0015);if(I>=0&&z>0&&(F!=null&&F.length)){const q=Math.max(1,Math.floor((t.value||1)/z)),te=Math.max(0,F.length-q-Math.floor(s.value/z))+(I-cd)/z,V=Math.max(gc,Math.min(vc,r.value*X));r.value=V;const ie=n.slotW()*V,k=Math.max(1,Math.floor((t.value||1)/ie)),j=te-(I-cd)/ie,K=Math.max(0,F.length-k-j);s.value=c(K*ie)}else r.value=Math.max(gc,Math.min(vc,r.value*X))}let f=!1,h=0,m=0;function v(D){f=!0,h=D,m=s.value,o.value=null}function _(D){return f?(s.value=c(m+(D-h)),!0):!1}function p(){f=!1}const d=()=>f;function M(D,S){f||(o.value=D<0||S<0?null:{x:D,y:S})}function w(){o.value=null}function g(D){r.value=Math.max(gc,Math.min(vc,r.value*Math.exp(D*.18))),s.value=c(s.value)}function C(D){const S=a.value,b=D.shiftKey?20:3;switch(D.key){case"ArrowLeft":D.preventDefault(),s.value=c(s.value+S*b);break;case"ArrowRight":D.preventDefault(),s.value=c(s.value-S*b);break;case"ArrowUp":D.preventDefault(),g(1);break;case"ArrowDown":D.preventDefault(),g(-1);break;case"Home":D.preventDefault(),s.value=c(Number.MAX_SAFE_INTEGER);break;case"End":D.preventDefault(),s.value=0;break}}function T(D,{dpr:S,glow:b}){var I,F,z,X;Pm(D,{candles:n.candles(),slotW:a.value,scrollX:s.value,theme:n.theme(),glow:b,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(I=n.overlays)==null?void 0:I.call(n),markers:(F=n.markers)==null?void 0:F.call(n),compact:(z=n.compact)==null?void 0:z.call(n),colors:(X=n.colors)==null?void 0:X.call(n),dpr:S})}function E(){e.stop()}return{canvasW:t,canvasH:i,scrollX:s,zoomLevel:r,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:c,wheel:u,panStart:v,panMove:_,panEnd:p,panning:d,hoverAt:M,leave:w,keyDown:C,applyZoom:g,paint:T,dispose:E}})}const Fw=fi({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:Rm},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=Ae(null),i=Ae(null),s={...Qt},r=Lm({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>_()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let c,u,f=1;const h=new ts({paint:(k,{dpr:j,glow:K})=>r.paint(k,{dpr:j,glow:K})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,v();return}try{o=new nr({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){v();return}o.setPixelRatio(1),o.setClearColor(0,0),c=new ir,u=new tr(-1,1,1,-1,0,1),c.add(new Dt(new Xt(2,2),h.material)),v()}}function v(){if(!t.value||!o&&!a)return;const k=t.value.clientWidth,j=t.value.clientHeight;!k||!j||h.resize(k,j)&&(h.setScreenSize(k,j),f=h.dpr,r.setViewport(k,j),o?(o.setPixelRatio(f),o.setSize(k,j)):i.value&&(i.value.width=Math.round(k*f),i.value.height=Math.round(j*f),i.value.style.width=k+"px",i.value.style.height=j+"px"),_())}function _(){if(!h.canvas.width)return;if(a){if(!i.value)return;h.paintOnly(!1);const j=i.value.getContext("2d");j&&(j.clearRect(0,0,i.value.width,i.value.height),j.drawImage(h.canvas,0,0));return}if(!o)return;const k=e.theme==="paper";h.setLook({curvature:e.curvature,scanlines:e.scanlines&&!k,vignette:!k,magnify:e.magnify}),h.setLens(e.magnify?s:null),h.syncUniforms(),h.paint(e.glow),o.render(c,u)}je(()=>e.curvature,()=>_()),je(()=>e.scanlines,()=>_()),je(()=>e.glow,()=>_()),je(()=>e.magnify,k=>{k||(s.x=Qt.x,s.y=Qt.y),_()}),je(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,d=null,M=0;const w=Gi("cathodeResetTick",Ae(0));je(w,()=>g());function g(){cancelAnimationFrame(M),M=requestAnimationFrame(v)}function C(k){k.preventDefault()}function T(){o==null||o.dispose(),o=null,a=!1,m()}function E(k){if(!i.value)return[-1,-1];const j=i.value.getBoundingClientRect();return[k.clientX-j.left,k.clientY-j.top]}function D(k){const[j]=E(k);r.wheel(k.deltaX,k.deltaY,k.shiftKey,j)}function S(k){k.button===0&&(r.panStart(k.clientX),t.value&&t.value.focus())}function b(k){r.keyDown(k)}function I(k){r.panMove(k.clientX)}function F(){r.panEnd()}function z(k){k.touches.length===1&&r.panStart(k.touches[0].clientX)}function X(k){!r.panning()||k.touches.length!==1||(k.preventDefault(),r.panMove(k.touches[0].clientX))}function q(){r.panEnd()}function Y(k){if(e.magnify&&i.value){const ue=qo(k,i.value);s.x=ue.x,s.y=ue.y,_()}const[j,K]=E(k);r.hoverAt(j,K)}function te(){r.leave(),s.x=Qt.x,s.y=Qt.y,_()}Ln(()=>{document.addEventListener("mousemove",I),document.addEventListener("mouseup",F),gn(()=>{var k;m(),i.value&&(i.value.addEventListener("webglcontextlost",C),i.value.addEventListener("webglcontextrestored",T)),t.value&&(p=new ResizeObserver(()=>v()),p.observe(t.value),d=new IntersectionObserver(j=>{j.some(K=>K.isIntersecting)&&g()}),d.observe(t.value)),window.addEventListener("resize",g),(k=window.visualViewport)==null||k.addEventListener("resize",g)})}),Kn(()=>{var k,j,K;document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",F),(k=i.value)==null||k.removeEventListener("webglcontextlost",C),(j=i.value)==null||j.removeEventListener("webglcontextrestored",T),p==null||p.disconnect(),d==null||d.disconnect(),window.removeEventListener("resize",g),(K=window.visualViewport)==null||K.removeEventListener("resize",g),cancelAnimationFrame(M),l(),r.dispose(),h.dispose()});const V=it(()=>Zr[e.theme]??Zr.none),ie=it(()=>({background:V.value.bg}));return(k,j)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:Bn(ie.value),tabindex:"0",onKeydown:b},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Gs(D,["prevent"]),onMousedown:S,onMousemove:Y,onMouseleave:te,onTouchstartPassive:z,onTouchmove:X,onTouchend:q,onTouchcancel:q},null,544)],36))}}),ud=hi(Fw,[["__scopeId","data-v-f2099684"]]),Nw=["disabled"],Ow=fi({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=Ae(null),o=Ae(null),a=Ae(""),l=Ae([]),c=Ae(-1);let u="";function f(C){C.trim()&&(l.value.length&&l.value[l.value.length-1]===C||(l.value.push(C),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(C){if(!i.disabled){if(C.key==="Enter"){C.preventDefault();const T=a.value;T.trim()&&f(T),c.value=-1,a.value="",s("submit",T);return}if(C.key==="ArrowUp"){if(!l.value.length)return;C.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(C.key==="ArrowDown"){if(c.value===-1)return;C.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=Ae(!0);let v=null;function _(){v||(v=setInterval(()=>{m.value=!m.value},530))}function p(){v&&(clearInterval(v),v=null),m.value=!0}const d=it(()=>{let C;return i.disabled?C=" ":i.busy?C="█":C=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${C}`}}),M=it(()=>[...i.entries,d.value]);function w(){var C;i.disabled||(C=o.value)==null||C.focus()}je(()=>i.busy,(C,T)=>{T&&!C&&!i.disabled&&gn(()=>{var E;return(E=o.value)==null?void 0:E.focus()})});function g(){var C;(C=o.value)==null||C.focus()}return e({focus:g}),Ln(()=>{_(),i.disabled||requestAnimationFrame(()=>{var C;return(C=o.value)==null?void 0:C.focus()})}),Kn(()=>{p()}),(C,T)=>(Je(),gt("div",{ref_key:"wrapEl",ref:r,class:"cathode-terminal-wrap",onClick:w},[Rt(Cu,{entries:M.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Gt(Le("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":T[0]||(T[0]=E=>a.value=E),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,Nw),[[Np,a.value]])],512))}}),fd=hi(Ow,[["__scopeId","data-v-a2b39934"]]),hf=Ae(0),Ru=28;let Pu=10,sl="cathode.layout",rl=!1;const sn=Ae({});function Bw(n,e="cathode.layout"){if(!rl){rl=!0,sl=e;try{const t=localStorage.getItem(sl);if(t){sn.value=JSON.parse(t),hd();return}}catch{}sn.value={...n},hd()}}function hd(){let n=10;for(const e of Object.values(sn.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);Pu=n}function sr(){localStorage.setItem(sl,JSON.stringify(sn.value))}function kw(n){rl=!1,localStorage.removeItem(sl),sn.value={...n},sr(),rl=!0,hf.value++}function Im(n){Pu++,sn.value[n]&&(sn.value[n].zIndex=Pu)}function zw(n,e){sn.value[n].visible=e,sr()}function Hw(n,e){sn.value[n].minimized=e,e&&(sn.value[n].maximized=!1),sr()}function Vw(n,e){sn.value[n].maximized=e,e&&(sn.value[n].minimized=!1,Im(n)),sr()}function Gw(n,e,t){sn.value[n].x=Math.round(e),sn.value[n].y=Math.round(t),sr()}function Ww(n,e,t){sn.value[n].w=Math.round(e),sn.value[n].h=Math.round(t),sr()}function Um(){return{containers:sn,TITLEBAR_H:Ru,load:Bw,save:sr,reset:kw,bringToFront:Im,setVisible:zw,setMinimized:Hw,setMaximized:Vw,updatePos:Gw,updateSize:Ww}}const Xw={class:"ws-toolbar"},Yw={key:0,class:"ws-restore-menu"},$w={key:0,class:"ws-restore-empty"},qw=["onClick"],Kw=fi({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:s,setVisible:r}=Um(),o=Ae(null);Ac("cathodeWorkspace",o),Ac("cathodeResetTick",hf),Ln(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,M=e.initialLayout??{};i(M,e.storageKey??"cathode.layout");const w=Object.keys(t.value)[0];w&&a(w)});function a(p){var M;document.querySelectorAll(".cc").forEach(w=>w.classList.remove("cc-focused"));const d=(M=o.value)==null?void 0:M.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||s(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(M=>M.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=Ae(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){r(p,!0),u.value=!1}function m(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function v(p){p.key==="Escape"&&(u.value=!1)}Ln(()=>{document.addEventListener("click",m),document.addEventListener("keydown",v)}),Kn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",v)});function _(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(Je(),gt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[Rc(p.$slots,"default",{},void 0),Rc(p.$slots,"overlay",{},void 0),Le("div",Xw,[n.initialLayout?(Je(),gt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Jt("",!0),d[1]||(d[1]=Le("div",{class:"ws-sep"},null,-1)),Le("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=M=>u.value=!u.value)}," ⊞ Restore Panel ")]),Rt(Gv,{name:"menu"},{default:ks(()=>[u.value?(Je(),gt("div",Yw,[d[3]||(d[3]=Le("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Jt("",!0):(Je(),gt("div",$w," No closed panels ")),(Je(!0),gt(fn,null,Zg(f(),M=>(Je(),gt("div",{key:M,class:"ws-restore-item",onClick:w=>h(M)},[d[2]||(d[2]=Le("span",{class:"ws-restore-icon"},"⊞",-1)),ln(" "+cn(_(M)),1)],8,qw))),128))])):Jt("",!0)]),_:1})],544))}}),jw=hi(Kw,[["__scopeId","data-v-5838d04b"]]),Zw=["id"],Jw={class:"cc-title"},Qw={key:0,class:"cc-size-badge"},eE={class:"cc-controls"},tE=["title"],nE={class:"cc-body"},iE=200,sE=80,dd=60,rE=fi({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:s,setMinimized:r,setMaximized:o,updatePos:a,updateSize:l}=Um(),c=Gi("cathodeWorkspace",Ae(null)),u=it(()=>t.value[e.id]),f=it(()=>{const k=u.value,j=e.curvature??0;if(!k)return{};const K={"--curvature":Math.abs(j)};return k.maximized?{...K,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:k.zIndex}:{...K,left:k.x+"px",top:k.y+"px",width:k.w+"px",height:k.minimized?Ru+"px":k.h+"px",zIndex:k.zIndex,display:k.visible?"flex":"none"}});let h=!1,m=0,v=0;function _(k){var ue;if(k.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const j=(ue=c.value)==null?void 0:ue.querySelector(`#cc-${e.id}`);if(!j)return;const K=j.getBoundingClientRect();m=k.clientX-K.left,v=k.clientY-K.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),k.preventDefault()}function p(k){var me;if(!h||!c.value)return;const j=c.value.getBoundingClientRect(),K=((me=u.value)==null?void 0:me.w)??300;let ue=k.clientX-j.left-m,ne=k.clientY-j.top-v;ue=Math.max(dd-K,Math.min(j.width-dd,ue)),ne=Math.max(0,Math.min(j.height-Ru,ne)),a(e.id,ue,ne)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let M=!1,w=0,g=0,C=0,T=0;const E=Ae("");function D(k){u.value.maximized||(i(e.id),M=!0,w=k.clientX,g=k.clientY,C=u.value.w,T=u.value.h,document.addEventListener("mousemove",S),document.addEventListener("mouseup",b),k.preventDefault(),k.stopPropagation())}function S(k){if(!M)return;const j=Math.max(iE,C+(k.clientX-w)),K=Math.max(sE,T+(k.clientY-g));l(e.id,j,K),E.value=`${Math.round(j)}×${Math.round(K)}`}function b(){M=!1,E.value="",document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b),I.value++}const I=Ae(0);je(hf,()=>{I.value++}),Kn(()=>{var k;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b),(k=F.value)==null||k.removeEventListener("scroll",X),q()});const F=Ae(null);function z(k){if(e.canvas)return[];const j=k.children[0];return j?Array.from(j.children):[]}function X(){const k=F.value,j=e.curvature??0;if(!k)return;const K=z(k);if(!K.length)return;const ue=k.clientHeight,ne=ue/2,me=j*.0038;K.forEach(ye=>{if(!ye.dataset.origFs){const fe=getComputedStyle(ye);ye.dataset.origFs=fe.fontSize,ye.dataset.origLh=fe.lineHeight}if(j===0){ye.style.fontSize="",ye.style.lineHeight="";return}const _e=ye.getBoundingClientRect(),Oe=k.getBoundingClientRect(),He=_e.top-Oe.top+_e.height/2,We=Math.min(1,Math.abs(He-ne)/(ue/2)),Me=1+me*Math.cos(We*Math.PI/2),L=parseFloat(ye.dataset.origFs),O=ye.dataset.origLh,R=O==="normal"?L*1.4:parseFloat(O);isNaN(L)||(ye.style.fontSize=`${(L*Me).toFixed(2)}px`),isNaN(R)||(ye.style.lineHeight=`${(R*Me).toFixed(2)}px`)})}function q(){const k=F.value;k&&z(k).forEach(j=>{j.style.fontSize="",j.style.lineHeight="",delete j.dataset.origFs,delete j.dataset.origLh})}je(()=>e.curvature,k=>{(k??0)===0?q():X()}),Ln(()=>{var k;(k=F.value)==null||k.addEventListener("scroll",X,{passive:!0}),gn(X)});function Y(){r(e.id,!u.value.minimized),gn(()=>{I.value++})}function te(){o(e.id,!u.value.maximized),gn(()=>{I.value++})}function V(){s(e.id,!1)}function ie(){i(e.id)}return(k,j)=>u.value&&u.value.visible?(Je(),gt("div",{key:0,id:`cc-${n.id}`,class:Wt(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:Bn(f.value),onMousedown:ie},[Le("div",{class:"cc-titlebar",onMousedown:_},[j[0]||(j[0]=Le("span",{class:"cc-status-dot"},null,-1)),Le("span",Jw,cn(n.title),1),E.value?(Je(),gt("span",Qw,cn(E.value),1)):Jt("",!0),Le("div",eE,[Le("button",{class:"cc-btn",title:"Minimize",onClick:Gs(Y,["stop"])},"─"),Le("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Gs(te,["stop"])},cn(u.value.maximized?"⤡":"⤢"),9,tE),Le("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Gs(V,["stop"])},"✕")])],32),Gt(Le("div",nE,[Le("div",{ref_key:"bodyEl",ref:F,class:"cc-screen",onScroll:X},[Rc(k.$slots,"default",{resizeKey:I.value},void 0),j[1]||(j[1]=Le("div",{class:"cc-shine"},null,-1))],544)],512),[[ds,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),gt("div",{key:0,class:"cc-resize",onMousedown:Gs(D,["stop"])},null,32)):Jt("",!0)],46,Zw)):Jt("",!0)}}),Ea=hi(rE,[["__scopeId","data-v-ca0af4ca"]]),oE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,aE=`
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
`,lE=100,cE=fi({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=Ae(null),s=Ae(null);let r=null,o=!1;function a(){if(r){try{r.forceContextLoss()}catch{}try{r.dispose()}catch{}r=null}}let l,c,u,f,h,m=null,v=0;function _(T){T-v>=lE&&(M(),v=T),m=requestAnimationFrame(_)}function p(){if(!i.value||!h)return;const T=i.value.clientWidth,E=i.value.clientHeight;T<=0||E<=0||h.width===T&&h.height===E||(h.width=T,h.height=E,r&&r.setSize(T,E,!1),s.value&&(s.value.width=T,s.value.height=E,s.value.style.width=T+"px",s.value.style.height=E+"px"))}function d(){if(!(h!=null&&h.width))return;const T=h.getContext("2d");if(!T)return;const E=h.width,D=h.height,S=t[e.theme]??t.none;T.clearRect(0,0,E,D),T.fillStyle=S.bg,T.fillRect(0,0,E,D);const b=Date.now(),I=(b/500|0)%2===0,F=(b/400|0)%4;T.font=`bold ${Math.max(14,Math.min(E,D)*.06)}px monospace`,T.textAlign="center",T.textBaseline="middle",T.fillStyle=S.text,e.glow&&(T.shadowColor=S.text,T.shadowBlur=14);const z=".".repeat(F).padEnd(3," "),X=`${e.label}${z}`;if(T.fillText(X,E/2,D/2),T.shadowBlur=0,I){const q=T.measureText(X),Y=T.measureText("M").width,te=parseFloat(T.font),V=E/2+q.width/2+4,ie=D/2-te/2+2;T.fillStyle=S.cursor,e.glow&&(T.shadowColor=S.cursor,T.shadowBlur=12),T.fillRect(V,ie,Y*.7,te*.95),T.shadowBlur=0}}function M(){if(!h)return;if(d(),o){if(!s.value)return;const E=s.value.getContext("2d");E&&E.drawImage(h,0,0);return}if(!r||!u||!f)return;const T=e.theme==="paper";u.uniforms.uStrength.value=Qs(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!T?1:0,u.uniforms.uVignette.value=T?0:1,f.needsUpdate=!0,r.render(l,c)}function w(){if(!(!s.value||!i.value)){h=document.createElement("canvas");try{r=new nr({canvas:s.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!r.getContext()&&(r.dispose(),r=null,o=!0),o){p();return}r.setPixelRatio(1),r.setClearColor(0,0),l=new ir,c=new tr(-1,1,1,-1,0,1),f=new Yn(h),f.minFilter=en,f.magFilter=en,u=new qn({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:oE,fragmentShader:aE,transparent:!0}),l.add(new Dt(new Xt(2,2),u)),p()}}let g=null;Ln(()=>{w(),M(),m=requestAnimationFrame(_),i.value&&(g=new ResizeObserver(()=>p()),g.observe(i.value))}),Kn(()=>{m!==null&&cancelAnimationFrame(m),g==null||g.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>M());const C=it(()=>({background:(t[e.theme]??t.none).bg}));return(T,E)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:Bn(C.value)},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-loader-canvas"},null,512)],4))}}),Ui=hi(cE,[["__scopeId","data-v-d00e5f47"]]),Fm=22,Nm=6;function df(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),s=Fm+i+Nm;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*s-n.scrollY,w:t,h:s})),rowH:s,totalH:Math.ceil(n.count/e)*s,cols:e}}function Du(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const Om=(n,e)=>Math.max(0,n-e);function uE(n,e,t,i,s){const r=t.candles[t.candles.length-1],o=`${i}x${s}@${e.dpr}|${t.candles.length}|${r?r.start+":"+r.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(s*e.dpr);const c=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),u=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return Pm(l,{candles:t.candles,slotW:c,scrollX:Math.max(0,t.candles.length*c-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:u,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function Bm(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const s=e.dpr,r={...Zr[e.theme]??Zr.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),r.bg&&r.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=r.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(s,0,0,s,0,0);const{rects:o}=df({count:e.cells.length,width:n.width/s,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=Fm,l=Nm;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let c=0;c<e.cells.length;c++){const u=e.cells[c],f=o[c];if(f.y+f.h<0||f.y>n.height/s)continue;const h=f.x+l/2,m=f.w-l;i.strokeStyle=u.open?r.candleBull:r.gridline,i.lineWidth=c===e.hoveredCell?2:1,i.strokeRect(h+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(h,f.y,m,a),i.clip();const v=f.y+a/2+1,_=u.note?i.measureText(u.note).width+(u.open?22:12):u.open?16:0,p=u.badge?i.measureText(u.badge).width+6:0,d=m-14-p-_;let M=u.title;if(i.measureText(M).width>d){for(;M.length>1&&i.measureText(M+"…").width>d;)M=M.slice(0,-1);M+="…"}let w=h+7;i.fillStyle=r.text,i.textAlign="left",i.fillText(M,w,v),w+=i.measureText(M).width+6,u.badge&&(i.fillStyle=r.accent,i.fillText(u.badge,w,v)),u.note&&(i.textAlign="right",i.fillStyle=u.noteColor||r.accent,i.fillText(u.note,h+m-(u.open?16:7),v),i.textAlign="left"),i.restore(),u.open&&(i.fillStyle=r.candleBull,i.beginPath(),i.arc(h+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const g=f.y+a,C=f.h-a-l;u.candles.length?i.drawImage(uE(t,e,u,m-2,C-1),h+1,g,m-2,C-1):(i.fillStyle=r.accent,i.textAlign="center",i.fillText("· · ·",h+m/2,g+C/2),i.textAlign="left")}}const fE=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,hE=fi({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,s=Ae(null),r=Ae(null),o=Ae(-1),a=Ae(0),l={...Qt};let c=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),u=null,f=!1;function h(){if(u){try{u.forceContextLoss()}catch{}try{u.dispose()}catch{}u=null}}let m,v,_,p,d;const M=Ae(0),w=Ae(0),g=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Mm}

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

  ${Sm}

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

    ${bm}

    gl_FragColor = color;
  }
`;function C(){if(!(!r.value||!s.value)){d=document.createElement("canvas");try{u=new nr({canvas:r.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!u.getContext()&&(u.dispose(),u=null,f=!0),f){T();return}u.setPixelRatio(c),u.setClearColor(0,0),m=new ir,v=new tr(-1,1,1,-1,0,1),p=new Yn(d),p.minFilter=en,p.magFilter=en,_=new qn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...wm()},vertexShader:fE,fragmentShader:g,transparent:!0}),m.add(new Dt(new Xt(2,2),_)),T()}}function T(){if(!s.value||!u&&!f)return;const V=s.value.clientWidth,ie=s.value.clientHeight;if(!V||!ie)return;M.value=V,w.value=ie,c=Math.min(window.devicePixelRatio||1,2);const k=t.bendField?Math.round(V*xm(t.curvature)):V,j=Math.round(k*c),K=Math.round(ie*c),ue=d.width!==j||d.height!==K;d.width=j,d.height=K,u?(ue&&p&&(p.dispose(),p=new Yn(d),p.minFilter=en,p.magFilter=en,_.uniforms.uTex.value=p),u.setPixelRatio(c),u.setSize(V,ie)):r.value&&(r.value.width=Math.round(V*c),r.value.height=Math.round(ie*c),r.value.style.width=V+"px",r.value.style.height=ie+"px"),b()}function E(){return df({count:t.cells.length,width:((d==null?void 0:d.width)||0)/c,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const D=()=>Om(E().totalH,((d==null?void 0:d.height)||0)/c),S=new Map;function b(){var V;if(d!=null&&d.width){if(Bm(d,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:c},S),f){const ie=(V=r.value)==null?void 0:V.getContext("2d");ie&&r.value&&ie.drawImage(d,0,0,d.width,d.height,0,0,r.value.width,r.value.height);return}!u||!_||!p||(_.uniforms.uStrength.value=Qs(t.curvature),_.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,_.uniforms.uVignette.value=t.theme==="paper"?0:1,Em(_,t.magnify,l,M.value||d.width,w.value||d.height),p.needsUpdate=!0,u.render(m,v))}}function I(V){if(!r.value)return[-1,-1];const ie=r.value.getBoundingClientRect();return _m(V.clientX-ie.left,V.clientY-ie.top,ie.width,ie.height,Qs(t.curvature),((d==null?void 0:d.width)||ie.width)/c,((d==null?void 0:d.height)||ie.height)/c)}function F(V,ie){return Du(E().rects,V,ie)}function z(V){const[ie,k]=I(V),j=F(ie,k);j>=0&&i("cell-click",t.cells[j].id)}function X(V){if(t.magnify&&r.value){const K=qo(V,r.value);l.x=K.x,l.y=K.y}const[ie,k]=I(V),j=F(ie,k);j!==o.value?(o.value=j,b()):t.magnify&&b(),r.value&&(r.value.style.cursor=j>=0?"pointer":"default")}function q(){o.value=-1,l.x=Qt.x,l.y=Qt.y,b()}function Y(V){const ie=D();ie<=0||(V.preventDefault(),a.value=Math.max(0,Math.min(ie,a.value+V.deltaY)),b())}let te=null;return Ln(()=>{C(),te=new ResizeObserver(()=>T()),s.value&&te.observe(s.value)}),Kn(()=>{te==null||te.disconnect(),h(),S.clear()}),je(()=>[t.curvature,t.bendField],()=>gn(T)),je(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,D()),b()},{deep:!1}),(V,ie)=>(Je(),gt("div",{ref_key:"wrapEl",ref:s,class:"cathode-candle-grid-wrap"},[Le("canvas",{ref_key:"canvasEl",ref:r,onClick:z,onMousemove:X,onMouseleave:q,onWheel:Y},null,544)],512))}}),dE=hi(hE,[["__scopeId","data-v-f4e5e064"]]),ol={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},pd=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,Ht="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Pt=12;function _c(n,e,t){const i=[];for(const s of e.split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;r&&n.measureText(a).width>t?(i.push(r),r=o):r=a}i.push(r)}return i}function vo(n,e,t,i,s,r){const o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+s-o),n.quadraticCurveTo(e+i,t+s,e+i-o,t+s),n.lineTo(e+o,t+s),n.quadraticCurveTo(e,t+s,e,t+s-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function km(n,e){var E,D;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,s=n.width/i,r=n.height/i,o={...ol[e.theme]??ol.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r);const a=S=>S>0?o.right:S<0?o.left:o.neutral,l=a(e.value),c=(S,b=10)=>{e.glow&&(t.shadowColor=S,t.shadowBlur=b)},u=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,s-Pt*2);let h=Pt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${Ht}`;const v=t.measureText(m).width;t.fillStyle=l,c(l,14),t.fillText(m,Pt,h+30),u();const _=Pt+v+14;e.stance&&(t.font=`700 14px ${Ht}`,t.fillStyle=l,c(l,8),t.fillText(e.stance.toUpperCase(),_,h+15),u()),e.sub&&(t.font=`11px ${Ht}`,t.fillStyle=o.dim,t.fillText(e.sub,_,h+31)),h+=48,t.font=`700 9px ${Ht}`;const p=e.leftLabel.toUpperCase(),d=e.rightLabel.toUpperCase(),M=t.measureText(p).width,w=t.measureText(d).width,g=Pt+M+8,C=s-Pt-w-8,T=h+10;if(t.fillStyle=o.left,t.fillText(p,Pt,T+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(d,s-Pt,T+3),t.textAlign="left",C-g>24){const S=t.createLinearGradient(g,0,C,0);S.addColorStop(0,o.left),S.addColorStop(.45,o.surface),S.addColorStop(.55,o.surface),S.addColorStop(1,o.right),vo(t,g,T-4,C-g,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=S,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const b=(g+C)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(b,T-8),t.lineTo(b,T+8),t.stroke();for(const q of[.25,.75]){const Y=g+q*(C-g);t.beginPath(),t.moveTo(Y,T-5),t.lineTo(Y,T+5),t.stroke()}const I=e.max-e.min||1,F=Math.max(0,Math.min(1,(e.shown-e.min)/I)),z=g+F*(C-g),X=a(e.shown);t.beginPath(),t.moveTo(z,T-10),t.lineTo(z-4.5,T-17),t.lineTo(z+4.5,T-17),t.closePath(),t.fillStyle=X,t.fill(),t.beginPath(),t.arc(z,T,6.5,0,Math.PI*2),t.fillStyle=X,c(X,12),t.fill(),u(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const q of e.marks??[]){const Y=(q.value-e.min)/I;if(Y<0||Y>1)continue;const te=g+Y*(C-g),V=pd(o,q.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=V,t.lineWidth=1,t.beginPath(),t.moveTo(te,T-9),t.lineTo(te,T+9),t.stroke(),t.restore(),q.label){t.font=`700 8px ${Ht}`,t.fillStyle=V;const ie=t.measureText(q.label).width;t.fillText(q.label,Math.max(g,Math.min(C-ie,te-ie/2)),T+20)}}}if(h+=(E=e.marks)!=null&&E.some(S=>S.label)?42:30,e.meter){const S=e.meter,b=S.min??0,I=S.max??1,F=I-b||1,z=S.tone==="up"?o.right:S.tone==="down"?o.left:S.tone==="warn"?o.warn:o.neutral;S.label&&(t.font=`700 9px ${Ht}`,t.fillStyle=o.dim,t.fillText(S.label.toUpperCase(),Pt,h+9)),S.hint&&(t.font=`9px ${Ht}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(S.hint,s-Pt,h+9),t.textAlign="left"),(S.label||S.hint)&&(h+=15),t.font=`700 12px ${Ht}`;const X=S.valueText??(S.value==null?"—":String(S.value)),q=t.measureText(X).width,Y=Pt,te=s-Pt-q-10,V=h+6,ie=!!((D=S.thresholds)!=null&&D.some(k=>k.label));if(te-Y>24){if(vo(t,Y,V-5,te-Y,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),S.value!=null){const k=Math.max(0,Math.min(1,(S.value-b)/F));k>0&&(t.save(),vo(t,Y,V-5,te-Y,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=z,c(z,8),t.fillRect(Y,V-5,(te-Y)*k,10),t.restore())}for(const k of S.thresholds??[]){const j=(k.value-b)/F;if(j<0||j>1)continue;const K=Y+j*(te-Y),ue=pd(o,k.color);if(t.strokeStyle=ue,t.lineWidth=1,t.beginPath(),t.moveTo(K,V-7),t.lineTo(K,V+7),t.stroke(),k.label){t.font=`700 7.5px ${Ht}`,t.fillStyle=ue;const ne=t.measureText(k.label).width;t.fillText(k.label,Math.max(Y,Math.min(te-ne,K-ne/2)),V+17)}}}t.font=`700 12px ${Ht}`,t.fillStyle=z,t.textAlign="right",c(z,8),t.fillText(X,s-Pt,V+4),u(),t.textAlign="left",h+=ie?32:22}if(e.caption){t.font=`600 11.5px ${Ht}`;const S=_c(t,e.caption,f-18),b=S.length*15+12;vo(t,Pt,h,f,b,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,S.forEach((I,F)=>t.fillText(I,Pt+9,h+17+F*15)),h+=b+10}if(e.note){t.font=`10px ${Ht}`,t.fillStyle=o.dim;const S=_c(t,e.note,f);S.forEach((b,I)=>t.fillText(b,Pt,h+10+I*14)),h+=S.length*14+10}if(e.items.length){let I=Pt;for(const F of e.items){const z=F.side==="left"?o.left:F.side==="right"?o.right:o.neutral,X=F.side==="left"?e.sideLetters[0]:F.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${Ht}`;const q=t.measureText(F.label).width;t.font=`700 8px ${Ht}`;const Y=X?t.measureText(X).width+6:0;t.font=`10px ${Ht}`;const te=F.value?t.measureText(F.value).width:0,V=7+q+(X?4+Y:0)+(F.value?4+te:0)+7;I+V>s-Pt&&I>Pt&&(I=Pt,h+=23),vo(t,I,h,V,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=z,t.fillRect(I,h+1,2,16);let ie=I+7;t.font=`700 10px ${Ht}`,t.fillStyle=o.text,t.fillText(F.label,ie,h+12.5),ie+=q+4,X&&(t.font=`700 8px ${Ht}`,t.fillStyle=z,t.fillText(X,ie+3,h+12),ie+=Y+4),F.value&&(t.font=`10px ${Ht}`,t.fillStyle=F.tone==="up"?o.right:F.tone==="down"?o.left:o.dim,t.fillText(F.value,ie,h+12.5)),I+=V+5}h+=18}else if(e.emptyText){t.font=`10px ${Ht}`,t.fillStyle=o.dim;const S=_c(t,e.emptyText,f);S.forEach((b,I)=>t.fillText(b,Pt,h+10+I*14)),h+=S.length*14}return h+Pt}const pE=fi({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=Ae(null),i=Ae(null),s=()=>(e.min+e.max)/2,r=Ae(e.animate?s():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){r.value=e.value,p();return}const I=()=>{const F=e.value-r.value;if(Math.abs(F)<.004){r.value=e.value,p();return}r.value+=F*.18,p(),o=requestAnimationFrame(I)};o=requestAnimationFrame(I)}je(()=>e.value,a);let l=null,c=!1;function u(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,h;const m=new ts({paint:(I,{dpr:F,glow:z})=>km(I,{dpr:F,theme:e.theme,colors:e.colors,glow:z,shown:r.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function v(){if(!(!i.value||!t.value)){try{l=new nr({canvas:i.value,antialias:!1,alpha:!0})}catch{c=!0}if(!c&&!l.getContext()&&(l.dispose(),l=null,c=!0),c){_();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new ir,h=new tr(-1,1,1,-1,0,1),f.add(new Dt(new Xt(2,2),m.material)),_()}}function _(){if(!t.value||!l&&!c)return;const I=t.value.clientWidth,F=t.value.clientHeight;m.resize(I,F)&&(l?(l.setPixelRatio(m.dpr),l.setSize(I,F)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=I+"px",i.value.style.height=F+"px"),p())}function p(){if(!m.canvas.width)return;if(c){if(!i.value)return;m.paintOnly(!1);const F=i.value.getContext("2d");F&&(F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,i.value.width,i.value.height),F.drawImage(m.canvas,0,0));return}if(!l)return;const I=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!I,vignette:!I,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,h)}je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),je(()=>e.magnify,I=>{I||m.setLens(null),p()});function d(I){!e.magnify||!i.value||(m.setLens(qo(I,i.value)),p())}function M(){m.setLens(null),p()}let w=null,g=null,C=0;const T=Gi("cathodeResetTick",Ae(0));je(T,()=>E());function E(){cancelAnimationFrame(C),C=requestAnimationFrame(_)}function D(I){I.preventDefault()}function S(){l==null||l.dispose(),l=null,c=!1,v(),p()}Ln(()=>{gn(()=>{var I;v(),i.value&&(i.value.addEventListener("webglcontextlost",D),i.value.addEventListener("webglcontextrestored",S)),t.value&&(w=new ResizeObserver(()=>_()),w.observe(t.value),g=new IntersectionObserver(F=>{F.some(z=>z.isIntersecting)&&E()}),g.observe(t.value)),window.addEventListener("resize",E),(I=window.visualViewport)==null||I.addEventListener("resize",E),a()})}),Kn(()=>{var I,F,z;cancelAnimationFrame(o),cancelAnimationFrame(C),(I=i.value)==null||I.removeEventListener("webglcontextlost",D),(F=i.value)==null||F.removeEventListener("webglcontextrestored",S),w==null||w.disconnect(),g==null||g.disconnect(),window.removeEventListener("resize",E),(z=window.visualViewport)==null||z.removeEventListener("resize",E),u(),m.dispose()});const b=it(()=>({background:(ol[e.theme]??ol.none).bg}));return(I,F)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:Bn(b.value)},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:d,onMouseleave:M},null,544)],4))}}),mE=hi(pE,[["__scopeId","data-v-6c2fc3b2"]]),md={type:"change"},pf={type:"start"},zm={type:"end"},Ta=new sf,gd=new yi,gE=Math.cos(70*Su.DEG2RAD),Vt=new Q,wn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6;class vE extends Ob{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new wi,this._lastTargetPosition=new Q,this._quat=new wi().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rd,this._sphericalDelta=new rd,this._scale=1,this._panOffset=new Q,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new Q,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xE.bind(this),this._onPointerDown=_E.bind(this),this._onPointerUp=yE.bind(this),this._onContextMenu=AE.bind(this),this._onMouseWheel=bE.bind(this),this._onKeyDown=wE.bind(this),this._onTouchStart=EE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=ME.bind(this),this._onMouseMove=SE.bind(this),this._interceptControlDown=CE.bind(this),this._interceptControlUp=RE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(md),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ta.origin.copy(this.object.position),Ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ta.direction))<gE?this.object.lookAt(this.target):(gd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ta.intersectPlane(gd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wn/60*this.autoRotateSpeed*e:wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _E(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function yE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zm),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ME(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Br.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Br.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(pf)}function SE(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bE(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zm))}function wE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function EE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(pf)}function TE(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function AE(n){this.enabled!==!1&&n.preventDefault()}function CE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const PE={bg:"#0d1520",border:"#2a3a50",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",hover:"rgba(255,255,255,0.07)",divider:"#1e2a3a"},DE=-40,LE=40,Aa=2,kt=188,Nn=26,En=24,mi=30,Hm=24,Fi=Nn+En*3+mi+Hm,yc="11px system-ui, -apple-system, sans-serif",Ut=22,Tr=10;class Dr{constructor(e,t={}){Ne(this,"mesh");Ne(this,"panel",null);Ne(this,"canvas",document.createElement("canvas"));Ne(this,"texture");Ne(this,"colors");Ne(this,"display",{curvature:0,scanlines:!1,glow:!1,magnify:!1});Ne(this,"hover",null);this.ppu=e,this.colors={...PE,...t};const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(kt*i),this.canvas.height=Math.round(Fi*i),this.texture=new Yn(this.canvas),this.texture.colorSpace=zt,this.mesh=new Dt(new Xt(kt/e,Fi/e),new Js({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=1e6,this.mesh.visible=!1}get isOpen(){return!!this.panel}setColors(e){this.colors={...this.colors,...e},this.panel&&this.draw()}open(e,t,i,s){this.close(),this.panel=e,this.display={...s},this.hover=null;const r=e.content.width,o=e.content.height,a=Math.max(4,Math.min(t,r-kt-4)),l=Math.max(4,Math.min(i,o-Fi-4));this.mesh.position.set((a+kt/2-r/2)/this.ppu,(o/2-(l+Fi/2))/this.ppu,.02),e.group.add(this.mesh),this.mesh.visible=!0,this.draw()}close(){this.panel&&(this.panel.group.remove(this.mesh),this.mesh.visible=!1,this.panel=null,this.hover=null)}update(e){this.display={...e},this.draw()}setHover(e){e!==this.hover&&(this.hover=e,this.draw())}rowAtUV(e,t){const i=e*kt,r=(1-t)*Fi-Nn;if(r<0)return null;if(r<En*3)return["scanlines","glow","magnify"][Math.floor(r/En)];if(r-En*3<mi){if(i>=kt-Tr-Ut)return"curve+";if(i>=kt-Tr-Ut-54-Ut&&i<kt-Tr-Ut-54)return"curve-"}return null}static rowCentre(e){switch(e){case"scanlines":return{x:90,y:Nn+En*.5};case"glow":return{x:90,y:Nn+En*1.5};case"magnify":return{x:90,y:Nn+En*2.5};case"curve-":return{x:kt-Tr-Ut-54-Ut/2,y:Nn+En*3+mi/2};case"curve+":return{x:kt-Tr-Ut/2,y:Nn+En*3+mi/2}}}draw(){var c;const e=Math.min(window.devicePixelRatio||1,2),t=this.colors,i=this.canvas.getContext("2d");i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,kt,Fi),i.fillStyle=t.bg,i.fillRect(0,0,kt,Fi),i.strokeStyle=t.border,i.lineWidth=1,i.strokeRect(.5,.5,kt-1,Fi-1),i.textBaseline="middle",i.fillStyle=t.muted,i.font="bold 9px system-ui, -apple-system, sans-serif",i.letterSpacing="1px",i.textAlign="left",i.fillText("DISPLAY",10,Nn/2),i.letterSpacing="0px",i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="right",i.fillText(`curve: ${this.display.curvature}`,kt-10,Nn/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,Nn-.5),i.lineTo(kt,Nn-.5),i.stroke(),[["scanlines","Scan lines",this.display.scanlines],["glow","Glow",this.display.glow],["magnify","Magnify (hover lens)",this.display.magnify]].forEach(([u,f,h],m)=>{const v=Nn+m*En;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(1,v,kt-2,En));const _=10,p=v+(En-12)/2;i.strokeStyle=h?t.accent:t.muted,i.lineWidth=1.2,i.strokeRect(_+.5,p+.5,11,11),h&&(i.lineWidth=1.8,i.lineCap="round",i.beginPath(),i.moveTo(_+3,p+6.5),i.lineTo(_+5.5,p+9),i.lineTo(_+9.5,p+3.5),i.stroke()),i.fillStyle=t.text,i.font=yc,i.textAlign="left",i.fillText(f,30,v+En/2)});const r=Nn+En*3;i.strokeStyle=t.divider,i.lineWidth=1,i.beginPath(),i.moveTo(0,r+.5),i.lineTo(kt,r+.5),i.stroke(),i.fillStyle=t.text,i.font=yc,i.textAlign="left",i.fillText("Bend",10,r+mi/2);const o=(u,f,h)=>{const m=r+(mi-Ut)/2;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(f,m,Ut,Ut)),i.strokeStyle=this.hover===u?t.accent:t.border,i.lineWidth=1,i.strokeRect(f+.5,m+.5,Ut-1,Ut-1),i.strokeStyle=t.text,i.lineWidth=1.6,i.lineCap="round",i.beginPath(),i.moveTo(f+6,m+Ut/2),i.lineTo(f+Ut-6,m+Ut/2),h&&(i.moveTo(f+Ut/2,m+6),i.lineTo(f+Ut/2,m+Ut-6)),i.stroke()},a=kt-Tr-Ut,l=a-54-Ut;o("curve-",l,!1),o("curve+",a,!0),i.fillStyle=t.text,i.font=yc,i.textAlign="center",i.fillText(String(this.display.curvature),l+Ut+27,r+mi/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,r+mi+.5),i.lineTo(kt,r+mi+.5),i.stroke(),i.fillStyle=t.muted,i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="left",i.fillText("Cmd+Shift +/−  bends the hovered panel",10,r+mi+Hm/2),this.texture.needsUpdate=!0,(c=this.panel)==null||c.invalidate()}dispose(){this.close(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}}Ne(Dr,"width",kt),Ne(Dr,"height",Fi);const vd={bg:"#08130e",bgFocused:"#0f2a1d",line:"#2f6b4c",lineFocused:"#6ee7a7",text:"#6fae8f",textFocused:"#b6f5d2",box:"#2f6b4c",boxFocused:"#3f8f6b",accent:"#6ee7a7",accentText:"#d5fbe6"},Cn=26,Ca=20,Ra=18,Pa=4,Da=8,Xs=16,_d="11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",xd=4,IE={w:240,h:160},UE={w:1600,h:1e3};class FE{constructor(e,t){Ne(this,"id");Ne(this,"content");Ne(this,"group",new Pr);Ne(this,"body");Ne(this,"bar");Ne(this,"glow");Ne(this,"_display",{curvature:0,scanlines:!0,glow:!0,magnify:!1});Ne(this,"dirty",!0);Ne(this,"barDirty",!0);Ne(this,"_title");Ne(this,"controls");Ne(this,"resizable");Ne(this,"minSize");Ne(this,"maxSize");Ne(this,"_grip",null);Ne(this,"_minimized",!1);Ne(this,"_maximized",!1);Ne(this,"hoverControl",null);Ne(this,"hoverAction",null);Ne(this,"_actions",[]);Ne(this,"barCanvas",document.createElement("canvas"));Ne(this,"barTexture");var l,c,u,f,h;this.stage=e,this.id=t.id,this._title=t.title??t.id,this.controls=t.controls??[],this._actions=(t.actions??[]).map(m=>({...m})),this.content=t.content,this.resizable=!!t.resizable&&typeof t.content.resize=="function",this.minSize=t.minSize??IE,this.maxSize=t.maxSize??UE,this.glow=t.glow??!0;const i=t.content.surface;if(i.mode!=="world")throw new Error("CathodeStage3D panels need a CathodeSurface created with mode: 'world'");const s=e.pxPerUnit,r=t.content.width/s,o=t.content.height/s,a=Cn/s;if(this.body=new Dt(new Xt(r,o),i.material),this.barTexture=new Yn(this.barCanvas),this.barTexture.colorSpace=zt,this.bar=new Dt(new Xt(r,a),new Js({map:this.barTexture,toneMapped:!1})),this.bar.position.y=o/2+a/2,this.group.add(this.body,this.bar),this.body.userData.panel=this,this.bar.userData.panel=this,this.resizable){const m=Xs/s,v=document.createElement("canvas");v.width=v.height=32;const _=v.getContext("2d");_.strokeStyle="#6ee7a7",_.lineWidth=3,_.lineCap="round",_.beginPath();for(const d of[10,18,26])_.moveTo(30,d),_.lineTo(d,30);_.stroke();const p=new Yn(v);p.colorSpace=zt,this._grip=new Dt(new Xt(m,m),new Js({map:p,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.group.add(this._grip),this.placeGrip()}t.visible===!1&&(this.group.visible=!1),t.minimized&&(this._minimized=!0,this.body.visible=!1),t.position&&this.group.position.set(...t.position),this.group.rotation.y=t.rotationY??0,t.look&&i.setLook(t.look),this._display={curvature:((l=t.look)==null?void 0:l.curvature)??0,scanlines:((c=t.look)==null?void 0:c.scanlines)??!0,glow:this.glow,magnify:((u=t.look)==null?void 0:u.magnify)??!1},i.resize(t.content.width,t.content.height,window.devicePixelRatio||1),(h=(f=t.content).attach)==null||h.call(f,()=>this.invalidate())}get grip(){return this._grip}get title(){return this._title}setTitle(e){e!==this._title&&(this._title=e,this.invalidateBar())}placeGrip(){if(!this.grip)return;const e=this.stage.pxPerUnit;this.grip.position.set((this.content.width-Xs)/2/e,-(this.content.height-Xs)/2/e,.003),this.grip.visible=!this._minimized}setHoverGrip(e){this.grip&&(this.grip.material.opacity=e?1:.55,this.stage.invalidate())}resize(e,t){if(!this.resizable||(e=Math.round(Math.min(this.maxSize.w,Math.max(this.minSize.w,e))),t=Math.round(Math.min(this.maxSize.h,Math.max(this.minSize.h,t))),e===this.content.width&&t===this.content.height))return!1;this.content.resize(e,t),this.content.surface.resize(e,t,window.devicePixelRatio||1);const i=this.stage.pxPerUnit,s=Cn/i;return this.body.geometry.dispose(),this.body.geometry=new Xt(e/i,t/i),this.bar.geometry.dispose(),this.bar.geometry=new Xt(e/i,s),this.bar.position.y=t/i/2+s/2,this.placeGrip(),this.dirty=!0,this.barDirty=!0,this.stage.invalidate(),!0}get minimized(){return this._minimized}get maximized(){return this._maximized}setMinimized(e){this._minimized!==e&&(this._minimized=e,this.body.visible=!e,this.grip&&(this.grip.visible=!e),this.invalidateBar(),e||this.invalidate())}setMaximized(e){this._maximized!==e&&(this._maximized=e,this.invalidateBar())}setHoverControl(e,t=null){this.hoverControl===e&&this.hoverAction===t||(this.hoverControl=e,this.hoverAction=t,this.invalidateBar())}get actions(){return this._actions.map(e=>({...e}))}setActions(e){e.length===this._actions.length&&e.every((i,s)=>i.id===this._actions[s].id&&i.label===this._actions[s].label&&!!i.active==!!this._actions[s].active)||(this._actions=e.map(i=>({...i})),this.invalidateBar())}controlsLeft(){return this.controls.length?this.content.width-Da-this.controls.length*(Ca+Pa)+Pa:this.content.width-Da}actionRects(){if(!this._actions.length)return[];const e=this.barCanvas.getContext("2d");e.font=_d;const t=this._actions.map(r=>Math.ceil(e.measureText(r.label).width)+14),i=t.reduce((r,o)=>r+o,0)+(t.length-1)*xd;let s=this.controlsLeft()-10-i;return this._actions.map((r,o)=>{const a={id:r.id,x:s,y:(Cn-Ra)/2-1,w:t[o],h:Ra};return s+=t[o]+xd,a})}controlRect(e){const t=this.controls.indexOf(e);if(t<0)return null;const i=this.controls.length;return{x:this.content.width-Da-(i-t)*Ca-(i-1-t)*Pa,y:(Cn-Ra)/2-1,w:Ca,h:Ra}}controlAt(e,t){for(const i of this.controls){const s=this.controlRect(i);if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return i}return null}actionAt(e,t){for(const i of this.actionRects())if(e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return i.id;return null}get visible(){return this.group.visible}setVisible(e){this.group.visible!==e&&(this.group.visible=e,e?this.invalidate():this.stage.invalidate())}invalidate(){this.dirty=!0,this.stage.invalidate()}invalidateBar(){this.barDirty=!0,this.stage.invalidate()}setLook(e){this.content.surface.setLook(e);const t=this._display;e.curvature!==void 0&&(t.curvature=e.curvature),e.scanlines!==void 0&&(t.scanlines=e.scanlines),e.magnify!==void 0&&(t.magnify=e.magnify),this.invalidate()}get display(){return{...this._display}}setDisplay(e){this._display={...this._display,...e};const t=this._display;this.content.surface.setLook({curvature:t.curvature,scanlines:t.scanlines,magnify:t.magnify}),this.glow=t.glow,t.magnify||this.content.surface.setLens(null),this.invalidate()}setPosition(e,t,i){this.group.position.set(e,t,i),this.stage.invalidate()}setRotationY(e){this.group.rotation.y=e,this.stage.invalidate()}paintIfDirty(){if(!this.group.visible)return;const e=this.content.surface;this.dirty&&(e.syncUniforms(),e.paint(this.glow),this.dirty=!1),this.barDirty&&(this.drawBar(),this.barDirty=!1)}drawBar(){const e=Math.min(window.devicePixelRatio||1,2),t=this.content.width,i=Cn,s=this.barCanvas;(s.width!==Math.round(t*e)||s.height!==Math.round(i*e))&&(s.width=Math.round(t*e),s.height=Math.round(i*e),this.barTexture.dispose(),this.barTexture=new Yn(s),this.barTexture.colorSpace=zt,this.bar.material.map=this.barTexture,this.bar.material.needsUpdate=!0);const r=s.getContext("2d");r.setTransform(e,0,0,e,0,0);const o=this.stage.focusedId===this.id,a=this.stage.barColors,l=this.stage.barStyle==="cockpit";r.fillStyle=o?a.bgFocused:a.bg,r.fillRect(0,0,t,i),r.fillStyle=o?a.lineFocused:a.line,r.fillRect(0,i-2,t,2),r.textBaseline="middle",r.font="12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";const c=this.actionRects(),u=l?23:10,f=c.length?c[0].x-8-u:this.controls.length?t-10-(Da+this.controls.length*(Ca+Pa))-(u-10):t-10-u;l?(r.save(),r.fillStyle=a.accent,r.shadowColor=a.accent,r.shadowBlur=4,r.beginPath(),r.arc(12.5,i/2-1,2.5,0,Math.PI*2),r.fill(),r.restore(),r.font="bold 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",r.letterSpacing="1.26px",r.fillStyle=(o?a.titleFocused:a.title)??(o?a.textFocused:a.text),r.fillText(this._title.toUpperCase(),u,i/2-1,Math.max(20,f)),r.letterSpacing="0px"):(r.fillStyle=o?a.textFocused:a.text,r.fillText(this._title,u,i/2-1,Math.max(20,f))),this.drawActions(r,o,c),this.drawControls(r,o),this.barTexture.needsUpdate=!0}drawActions(e,t,i){const s=this.stage.barColors;e.font=_d,e.textAlign="center",e.textBaseline="middle",this._actions.forEach((r,o)=>{const a=i[o];r.active?this.fillAlpha(e,s.accent,.28,a):this.hoverAction===r.id&&this.fillAlpha(e,s.accent,.14,a),e.strokeStyle=r.active?s.accent:t?s.boxFocused:s.box,e.lineWidth=1,e.strokeRect(a.x+.5,a.y+.5,a.w-1,a.h-1),e.fillStyle=r.active?s.accentText:t?s.textFocused:s.text,e.fillText(r.label,a.x+a.w/2,a.y+a.h/2+.5)}),e.textAlign="left"}fillAlpha(e,t,i,s){const r=/^#([0-9a-f]{6})$/i.exec(t);if(r){const o=parseInt(r[1],16);e.fillStyle=`rgba(${o>>16&255},${o>>8&255},${o&255},${i})`,e.fillRect(s.x,s.y,s.w,s.h);return}e.save(),e.globalAlpha=i,e.fillStyle=t,e.fillRect(s.x,s.y,s.w,s.h),e.restore()}drawControls(e,t){const i=this.stage.barColors;for(const s of this.controls){const r=this.controlRect(s);this.hoverControl===s&&this.fillAlpha(e,i.accent,.2,r),e.strokeStyle=t?i.textFocused:i.text,e.lineWidth=1.4;const o=r.x+r.w/2,a=r.y+r.h/2;e.beginPath(),s==="info"?(e.arc(o,a,6,0,Math.PI*2),e.moveTo(o,a-.5),e.lineTo(o,a+3),e.moveTo(o,a-3.2),e.lineTo(o,a-2.6)):s==="close"?(e.moveTo(o-4,a-4),e.lineTo(o+4,a+4),e.moveTo(o+4,a-4),e.lineTo(o-4,a+4)):s==="minimize"?this._minimized?(e.moveTo(o-5,a),e.lineTo(o+5,a),e.moveTo(o,a-5),e.lineTo(o,a+5)):(e.moveTo(o-5,a+3),e.lineTo(o+5,a+3)):this._maximized?(e.rect(o-5,a-2,7,6),e.moveTo(o-2,a-2),e.lineTo(o-2,a-5),e.lineTo(o+5,a-5),e.lineTo(o+5,a+1),e.lineTo(o+2,a+1)):e.rect(o-5,a-4,10,8),e.stroke()}}dispose(){var e,t,i;if(this.body.geometry.dispose(),this.bar.geometry.dispose(),this.bar.material.dispose(),this.barTexture.dispose(),this.grip){this.grip.geometry.dispose();const s=this.grip.material;(e=s.map)==null||e.dispose(),s.dispose()}(i=(t=this.content).dispose)==null||i.call(t)}}class NE{constructor(e){Ne(this,"renderer");Ne(this,"scene",new ir);Ne(this,"camera");Ne(this,"canvas");Ne(this,"panels",new Map);Ne(this,"pxPerUnit");Ne(this,"focusedId",null);Ne(this,"barColors",{...vd});Ne(this,"barStyle","plain");Ne(this,"controls",null);Ne(this,"ray",new Nb);Ne(this,"ndc",new tt);Ne(this,"raf",0);Ne(this,"rendering",!1);Ne(this,"raiseCounter",0);Ne(this,"hovered",null);Ne(this,"pressed",null);Ne(this,"dragging",null);Ne(this,"suppressClick",!1);Ne(this,"menu",null);Ne(this,"lensPanel",null);Ne(this,"resizeObserver");Ne(this,"disposers",[]);Ne(this,"lastCursor","");Ne(this,"passThrough");Ne(this,"swallowClick",!1);Ne(this,"pressedControl",null);Ne(this,"resizing",null);Ne(this,"hoverGrip",null);Ne(this,"hoverBar",null);Ne(this,"cancelFly",null);Ne(this,"expandedState",null);this.o=e,this.pxPerUnit=e.pxPerUnit??360,this.passThrough=!!e.passThrough,this.renderer=new nr({antialias:!0,alpha:!!e.transparent}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(e.background??329738,e.transparent?0:1),this.canvas=this.renderer.domElement,this.passThrough||(this.canvas.tabIndex=0),this.canvas.style.cssText="display:block;width:100%;height:100%;outline:none;touch-action:none"+(this.passThrough?";pointer-events:none":""),e.container.appendChild(this.canvas),this.camera=new Wn(e.fov??45,1,e.near??.05,e.far??100);const t=e.cameraPosition??[0,.1,3.4];this.camera.position.set(...t),this.camera.lookAt(0,0,0),e.controls&&(this.controls=e.controls(this.camera,this.canvas),this.controls.addEventListener("change",()=>this.invalidate()));const i=this.passThrough?e.inputTarget??document:this.canvas;this.on(i,"pointerdown",s=>this.onPointerDown(s),{capture:!0}),this.on(i,"pointermove",s=>this.onPointerMove(s)),this.passThrough||this.on(this.canvas,"pointerleave",()=>this.setHover(null)),this.on(window,"pointerup",s=>this.onPointerUp(s)),this.on(window,"pointercancel",s=>this.onPointerUp(s)),this.on(i,"click",s=>this.onClick(s),{capture:this.passThrough}),this.on(i,"wheel",s=>this.onWheel(s),{capture:!0,passive:!1}),this.on(this.passThrough?window:this.canvas,"keydown",s=>this.onKey(s)),e.barColors&&(this.barColors={...vd,...e.barColors}),e.barStyle&&(this.barStyle=e.barStyle),e.displayMenu&&(this.menu=new Dr(this.pxPerUnit,typeof e.displayMenu=="object"?e.displayMenu.colors:{}),this.on(i,"contextmenu",s=>this.onContextMenu(s),{capture:!0})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.container),this.resize()}on(e,t,i,s){e.addEventListener(t,i,s),this.disposers.push(()=>e.removeEventListener(t,i,s))}setCameraPose(e){var t,i;this.camera.position.set(...e.position),this.camera.lookAt(...e.target),this.camera.updateMatrixWorld(!0),(i=(t=this.controls)==null?void 0:t.target)==null||i.set(...e.target),this.invalidate()}facingPose(e,t={}){const i=this.panels.get(e);if(!i)return null;i.group.updateWorldMatrix(!0,!0);const s=this.pxPerUnit,r=i.content.height/s,o=Cn/s,a=i.content.width/s,l=r/2+o,c=i.minimized?r/2:-r/2,u=l-c,f=i.body.localToWorld(new Q(0,(l+c)/2,0)),h=new Q(0,0,1).applyQuaternion(i.group.getWorldQuaternion(new wi)),m=Math.tan(Su.degToRad(this.camera.fov/2)),v=Math.max(u/2/m,a/2/(m*this.camera.aspect))*(1+(t.margin??.12)),_=f.clone().addScaledVector(h,v);return{position:[_.x,_.y,_.z],target:[f.x,f.y,f.z]}}framePose(e,t={}){const i=(e??[...this.panels.keys()]).map(T=>this.panels.get(T)).filter(T=>!!T);if(!i.length)return null;const s=this.pxPerUnit,r=Cn/s,o=new Q;for(const T of i)T.group.updateWorldMatrix(!0,!0),o.add(new Q(0,0,1).applyQuaternion(T.group.getWorldQuaternion(new wi)));o.normalize(),isFinite(o.x)||o.set(0,0,1);const a=new Q().crossVectors(new Q(0,1,0),o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new Q().crossVectors(o,a).normalize();let c=1/0,u=-1/0,f=1/0,h=-1/0,m=0,v=0;for(const T of i){const E=T.content.width/s,D=T.content.height/s,S=D/2+r,b=T.minimized?D/2:-D/2;for(const[I,F]of[[-E/2,b],[E/2,b],[-E/2,S],[E/2,S]]){const z=T.body.localToWorld(new Q(I,F,0)),X=z.dot(a),q=z.dot(l);c=Math.min(c,X),u=Math.max(u,X),f=Math.min(f,q),h=Math.max(h,q),m+=z.dot(o),v++}}const _=1+(t.margin??.08),p=(u-c)*_,d=(h-f)*_,M=Math.tan(Su.degToRad(this.camera.fov/2)),w=Math.max(d/2/M,p/2/(M*this.camera.aspect),t.minDistance??0),g=a.clone().multiplyScalar((c+u)/2).addScaledVector(l,(f+h)/2).addScaledVector(o,m/v),C=g.clone().addScaledVector(o,w);return{position:[C.x,C.y,C.z],target:[g.x,g.y,g.z]}}flyTo(e,t=550){var s;if((s=this.cancelFly)==null||s.call(this),t<=0)return this.setCameraPose(e),Promise.resolve();const i=this.getCameraPose();return new Promise(r=>{const o=performance.now();let a=0;this.cancelFly=()=>{cancelAnimationFrame(a),this.cancelFly=null,r()};const l=c=>{const u=Math.min(1,(c-o)/t),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,h=(m,v)=>[m[0]+(v[0]-m[0])*f,m[1]+(v[1]-m[1])*f,m[2]+(v[2]-m[2])*f];this.setCameraPose({position:h(i.position,e.position),target:h(i.target,e.target)}),u<1?a=requestAnimationFrame(l):(this.cancelFly=null,r())};a=requestAnimationFrame(l)})}getCameraPose(){const e=this.camera.position,t=this.camera.getWorldDirection(new Q).add(e);return{position:[e.x,e.y,e.z],target:[t.x,t.y,t.z]}}footprint(e){const t=this.pxPerUnit,i=e.content.width/t,s=e.content.height/t,r=Cn/t,o=s/2+r,a=e.minimized?s/2:-s/2;return{x0:e.group.position.x-i/2,x1:e.group.position.x+i/2,y0:e.group.position.y+a,y1:e.group.position.y+o}}freeSpot(e,t={}){const i=this.pxPerUnit,s=(t.gap??24)/i,r=e.w/i,o=(e.h+Cn)/i,a=[...this.panels.values()].filter(g=>g.group.visible).map(g=>this.footprint(g)),l=[...this.panels.values()].map(g=>g.group.position.z),c=l.length?l.reduce((g,C)=>g+C,0)/l.length:0,u=(g,C)=>[g+r/2,C-Cn/i-e.h/i/2,c];if(!a.length)return{position:[0,0,0]};const f=a.reduce((g,C)=>({x0:Math.min(g.x0,C.x0),x1:Math.max(g.x1,C.x1),y0:Math.min(g.y0,C.y0),y1:Math.max(g.y1,C.y1)}),{x0:1/0,x1:-1/0,y0:1/0,y1:-1/0}),h=t.near?this.panels.get(t.near):void 0,m=h?(()=>{const g=this.footprint(h);return{x:(g.x0+g.x1)/2,y:(g.y0+g.y1)/2}})():{x:(f.x0+f.x1)/2,y:(f.y0+f.y1)/2},v=[],_=["right","below","left","above"],p=g=>_.indexOf(t.prefer??"right")===_.indexOf(g)?0:1+(_.indexOf(g)-_.indexOf(t.prefer??"right")+4)%4*.01;for(const g of[...a,f]){const C=[g.x0,(g.x0+g.x1)/2-r/2,g.x1-r],T=[g.y1,(g.y0+g.y1)/2+o/2,g.y0+o];for(const E of T)v.push({x0:g.x1+s,y1:E,rank:p("right")}),v.push({x0:g.x0-s-r,y1:E,rank:p("left")});for(const E of C)v.push({x0:E,y1:g.y0-s,rank:p("below")}),v.push({x0:E,y1:g.y1+s+o,rank:p("above")})}const d=g=>a.every(C=>g.x0+r+s*.999<=C.x0||g.x0>=C.x1+s*.999||g.y1-o-s*.999>=C.y1||g.y1<=C.y0-s*.999);let M=null,w=1/0;for(const g of v){if(!d(g))continue;const C=Math.hypot(g.x0+r/2-m.x,g.y1-o/2-m.y)+g.rank*.01;C<w-1e-9&&(w=C,M=g)}return{position:u(M.x0,M.y1)}}get expandedId(){var e;return((e=this.expandedState)==null?void 0:e.id)??null}expand(e,t={}){var r;const i=this.panels.get(e);if(!i)return Promise.resolve();this.expandedState?(this.expandedState.id!==e&&((r=this.panels.get(this.expandedState.id))==null||r.setMaximized(!1)),this.expandedState.id=e):this.expandedState={id:e,pose:this.getCameraPose()},i.minimized&&this.setPanelMinimized(e,!1),i.setMaximized(!0);const s=this.facingPose(e,{margin:t.margin??.03});return s?this.flyTo(s,t.ms??650):Promise.resolve()}unexpand(e,t={}){var s;const i=this.expandedState;return!i||e!==void 0&&i.id!==e?Promise.resolve():((s=this.panels.get(i.id))==null||s.setMaximized(!1),this.expandedState=null,this.flyTo(i.pose,t.ms??650))}toggleExpand(e,t={}){var i;return((i=this.expandedState)==null?void 0:i.id)===e?this.unexpand(e,t):this.expand(e,t)}addPopup(e,t={}){const i=this.freeSpot({w:e.content.width,h:e.content.height},{near:t.near,gap:t.gap,prefer:t.prefer}),s=this.addPanel({...e,position:i.position,rotationY:0,controls:e.controls??["minimize","maximize","close"]});return this.setFocus(e.id),t.zoom!==!1&&this.expand(e.id,{margin:t.margin,ms:t.ms}),s}closePanel(e,t={}){const i=this.unexpand(e,t);return this.removePanel(e),i}addPanel(e){if(this.panels.has(e.id))throw new Error(`CathodeStage3D: duplicate panel id "${e.id}"`);const t=new FE(this,e);return t.content.surface.setAnisotropy(this.renderer.capabilities.getMaxAnisotropy()),this.panels.set(e.id,t),this.scene.add(t.group),this.raise(t),this.invalidate(),t}removePanel(e){var i,s;const t=this.panels.get(e);t&&(((i=this.expandedState)==null?void 0:i.id)===e&&(this.expandedState=null),this.focusedId===e&&this.setFocus(null),this.hovered===t&&(this.hovered=null),this.pressed===t&&(this.pressed=null),this.lensPanel===t&&(this.lensPanel=null),((s=this.menu)==null?void 0:s.panel)===t&&this.menu.close(),this.scene.remove(t.group),t.dispose(),this.panels.delete(e),this.invalidate())}setPanelVisible(e,t){var s;const i=this.panels.get(e);i&&(i.setVisible(t),t||(this.focusedId===e&&this.setFocus(null),this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null),((s=this.dragging)==null?void 0:s.panel)===i&&(this.dragging=null)),this.invalidate())}setPanelMinimized(e,t){const i=this.panels.get(e);i&&(i.setMinimized(t),t&&(this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null)),this.invalidate())}setFocus(e){var s,r;if(this.focusedId===e){e&&this.raise(this.panels.get(e));return}const t=this.focusedId&&this.panels.get(this.focusedId);this.focusedId=e,t&&t.invalidateBar();const i=e?this.panels.get(e):null;i&&(this.raise(i),i.invalidateBar()),(r=(s=this.o).onFocus)==null||r.call(s,e),this.invalidate()}raise(e){e.body.renderOrder=e.bar.renderOrder=++this.raiseCounter,e.grip&&(e.grip.renderOrder=e.body.renderOrder+.5)}getLayout(){const e={};for(const[t,i]of this.panels)e[t]={x:i.group.position.x,y:i.group.position.y,z:i.group.position.z,rotY:i.group.rotation.y,visible:i.visible,minimized:i.minimized,...i.resizable?{size:{w:i.content.width,h:i.content.height}}:{}};return e}applyLayout(e){for(const[t,i]of Object.entries(e)){const s=this.panels.get(t);s&&(s.group.position.set(i.x??s.group.position.x,i.y??s.group.position.y,i.z??s.group.position.z),i.rotY!==void 0&&(s.group.rotation.y=i.rotY),i.visible!==void 0&&this.setPanelVisible(t,i.visible),i.minimized!==void 0&&this.setPanelMinimized(t,i.minimized),i.size&&s.resize(i.size.w,i.size.h))}this.invalidate()}invalidate(){this.raf||this.rendering||(this.raf=requestAnimationFrame(()=>{this.raf=0,this.frame()}))}frame(){var e;this.rendering=!0;for(const t of this.panels.values())t.paintIfDirty();(e=this.controls)==null||e.update(),this.renderer.render(this.scene,this.camera),this.rendering=!1}resize(){const e=this.o.container.clientWidth,t=this.o.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate())}setRay(e,t){const i=this.canvas.getBoundingClientRect();this.ndc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}contentAt(e,t,i){this.setRay(t,i);const s=this.ray.intersectObject(e.body)[0];return s!=null&&s.uv?e.content.surface.contentPoint(s.uv.x,s.uv.y):null}hitScaleAt(e,t,i){const s=this.contentAt(e,t-4,i),r=this.contentAt(e,t+4,i);return!s||!r?1:Math.max(1,Math.abs(r.x-s.x)/8)}pick(e,t){this.setRay(e,t);const i=[];for(const m of this.panels.values())m.visible&&(m.minimized||i.push(m.body),i.push(m.bar));const s=this.ray.intersectObjects(i,!1);if(!s.length)return null;const r=s[0].distance;let o=s[0];for(const m of s)m.distance-r<.001&&m.object.renderOrder>o.object.renderOrder&&(o=m);const a=o.object.userData.panel,l=o.object===a.bar?"bar":"body",c=l==="body"&&o.uv?a.content.surface.contentPoint(o.uv.x,o.uv.y):null,u=l==="bar"&&o.uv?a.controlAt(o.uv.x*a.content.width,(1-o.uv.y)*Cn):null,f=l==="bar"&&o.uv&&!u?a.actionAt(o.uv.x*a.content.width,(1-o.uv.y)*Cn):null,h=l==="body"&&a.resizable&&!a.minimized&&!!o.uv&&o.uv.x*a.content.width>a.content.width-Xs&&(1-o.uv.y)*a.content.height>a.content.height-Xs;return{panel:a,part:l,content:c,control:u,action:f,handle:h,uv:o.uv?{x:o.uv.x,y:o.uv.y}:null}}clientPointForContent(e,t,i){const s=this.panels.get(e);if(!s)return null;const r=s.content.surface,o=s.content.width,a=s.content.height;let l=t/o,c=1-i/a;const u=(v,_)=>r.contentPoint(v,_);for(let v=0;v<12;v++){const _=u(l,c);if(!_){l=.5+(l-.5)*.8,c=.5+(c-.5)*.8;continue}const p=_.x-t,d=_.y-i;if(Math.hypot(p,d)<.05)break;const M=1e-4,w=u(l+M,c),g=u(l,c+M);if(!w||!g)break;const C=(w.x-_.x)/M,T=(g.x-_.x)/M,E=(w.y-_.y)/M,D=(g.y-_.y)/M,S=C*D-T*E;if(Math.abs(S)<1e-9)break;l-=(D*p-T*d)/S,c-=(-E*p+C*d)/S}const f=u(l,c);if(!f||Math.hypot(f.x-t,f.y-i)>1.5)return null;s.group.updateWorldMatrix(!0,!0);const h=s.body.localToWorld(new Q((l-.5)*(o/this.pxPerUnit),(c-.5)*(a/this.pxPerUnit),0));h.project(this.camera);const m=this.canvas.getBoundingClientRect();return{x:m.left+(h.x+1)/2*m.width,y:m.top+(1-h.y)/2*m.height}}clientPointForHandle(e){const t=this.panels.get(e);if(!t||!t.resizable)return null;t.group.updateWorldMatrix(!0,!0);const i=this.pxPerUnit,s=t.body.localToWorld(new Q((t.content.width/2-Xs/2)/i,-(t.content.height/2-Xs/2)/i,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}clientPointForAction(e,t){const i=this.panels.get(e),s=i==null?void 0:i.actionRects().find(l=>l.id===t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=i.bar.localToWorld(new Q((s.x+s.w/2-i.content.width/2)/r,-(s.y+s.h/2-Cn/2)/r,0)).project(this.camera),a=this.canvas.getBoundingClientRect();return{x:a.left+(o.x+1)/2*a.width,y:a.top+(1-o.y)/2*a.height}}clientPointForControl(e,t){const i=this.panels.get(e),s=i==null?void 0:i.controlRect(t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=new Q((s.x+s.w/2-i.content.width/2)/r,0,0);o.y=(Cn/2-(s.y+s.h/2))/r;const a=i.bar.localToWorld(o).project(this.camera),l=this.canvas.getBoundingClientRect();return{x:l.left+(a.x+1)/2*l.width,y:l.top+(1-a.y)/2*l.height}}clientPointForBar(e){const t=this.panels.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!0);const i=t.bar.getWorldPosition(new Q).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}send(e,t,i,s={}){var a,l;const r=this.contentAt(e,i.clientX,i.clientY),o={kind:t,x:r?r.x:-1,y:r?r.y:-1,hitScale:r?this.hitScaleAt(e,i.clientX,i.clientY):1,clientX:i.clientX,clientY:i.clientY,deltaX:s.deltaX??0,deltaY:s.deltaY??0,detail:t==="click"?i.detail??0:0,shiftKey:!!i.shiftKey};return((l=(a=e.content).pointer)==null?void 0:l.call(a,o))??null}setCursor(e){e!==this.lastCursor&&(this.lastCursor=e,this.o.onCursor?this.o.onCursor(e):this.canvas.style.cursor=e)}setHover(e,t){this.hovered&&this.hovered!==e&&this.send(this.hovered,"leave",t??{clientX:-1,clientY:-1}),this.hovered=e,e||(this.setCursor(""),this.setLens(null))}accepts(e){return!this.passThrough||!this.o.shouldHandle||this.o.shouldHandle(e.target)}onPointerDown(e){var i;if(e.button!==0||!this.accepts(e))return;if((i=this.menu)!=null&&i.isOpen){const s=this.pickMenu(e.clientX,e.clientY);if(s){e.preventDefault(),e.stopPropagation(),this.suppressClick=!0,this.menuAct(s);return}this.menu.close(),this.invalidate()}this.passThrough||this.canvas.focus({preventScroll:!0});const t=this.pick(e.clientX,e.clientY);if(!t){this.passThrough&&this.setFocus(null);return}this.passThrough&&(e.stopPropagation(),this.swallowClick=!0),this.controls&&(this.controls.enabled=!1),this.setFocus(t.panel.id),this.suppressClick=!1,t.part==="bar"&&(t.control||t.action)?(this.pressedControl={panel:t.panel,control:t.control,action:t.action},this.setCursor("pointer")):t.part==="bar"?(this.startDrag(t.panel),this.setCursor("grabbing")):t.handle?(this.startResize(t.panel),this.setCursor("nwse-resize")):(this.pressed=t.panel,this.send(t.panel,"down",e))}onPointerMove(e){var s;if(this.resizing){this.resizeTo(e);return}if(this.dragging){this.dragTo(e);return}if(this.pressed){this.send(this.pressed,"drag",e);return}if(this.pressedControl)return;if(!this.accepts(e)){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null);return}if((s=this.menu)!=null&&s.isOpen){const r=this.pickMenu(e.clientX,e.clientY);if(this.menu.setHover(r),r){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null),this.setLens(null),this.setCursor("pointer");return}}const t=this.pick(e.clientX,e.clientY);if(this.setLens(t&&t.part==="body"&&!t.handle?t:null),this.setHoverGrip(t!=null&&t.handle?t.panel:null),this.setHover(t&&t.part==="body"&&!t.handle?t.panel:null,e),this.setHoverBar(t&&t.part==="bar"?t.panel:null,(t==null?void 0:t.control)??null,(t==null?void 0:t.action)??null),!t){this.setCursor("");return}if(t.part==="bar"){this.setCursor(t.control||t.action?"pointer":"grab");return}if(t.handle){this.setCursor("nwse-resize");return}const i=this.send(t.panel,"move",e);i&&this.setCursor(i)}setHoverBar(e,t,i=null){this.hoverBar&&this.hoverBar!==e&&this.hoverBar.setHoverControl(null,null),this.hoverBar=e,e==null||e.setHoverControl(t,i)}setHoverGrip(e){this.hoverGrip&&this.hoverGrip!==e&&this.hoverGrip.setHoverGrip(!1),this.hoverGrip=e,e==null||e.setHoverGrip(!0)}onPointerUp(e){var t,i,s,r;if(this.pressedControl=null,this.resizing){const o=this.resizing;if(this.resizing=null,o.moved){this.suppressClick=!0;const a=o.panel.group.position;(i=(t=this.o).onPanelResized)==null||i.call(t,o.panel.id,{w:o.panel.content.width,h:o.panel.content.height},{x:a.x,y:a.y,z:a.z})}this.setCursor("")}if(this.dragging){this.dragging.moved&&(this.suppressClick=!0);const o=this.dragging.panel;this.dragging=null,this.setCursor(""),(r=(s=this.o).onPanelMoved)==null||r.call(s,o.id,{x:o.group.position.x,y:o.group.position.y,z:o.group.position.z})}this.pressed&&(this.send(this.pressed,"up",e),this.pressed=null),this.controls&&(this.controls.enabled=!0)}onClick(e){var i,s,r,o,a,l;if(!this.accepts(e))return;if(this.passThrough&&this.swallowClick&&(this.swallowClick=!1,e.stopPropagation()),this.suppressClick){this.suppressClick=!1;return}const t=this.pick(e.clientX,e.clientY);t&&this.passThrough&&e.stopPropagation(),t&&t.part==="body"&&this.send(t.panel,"click",e),t&&t.part==="bar"&&(t.control?(s=(i=this.o).onPanelControl)==null||s.call(i,t.panel.id,t.control):t.action?(o=(r=this.o).onPanelAction)==null||o.call(r,t.panel.id,t.action):e.detail>=2&&((l=(a=this.o).onPanelActivate)==null||l.call(a,t.panel.id)))}onWheel(e){if(!this.accepts(e))return;const t=this.pick(e.clientX,e.clientY);!t||t.part!=="body"||(e.preventDefault(),e.stopImmediatePropagation(),this.send(t.panel,"wheel",e,{deltaX:e.deltaX,deltaY:e.deltaY}))}onKey(e){if(this.passThrough){const i=e.target;if(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))return}if(this.menu){if(e.key==="Escape"&&this.menu.isOpen){this.menu.close(),this.invalidate();return}if(e.metaKey&&e.shiftKey&&/^[=+\-_]$/.test(e.key)){const i=this.menu.panel??this.hovered;if(i){e.preventDefault(),this.stepBend(i,e.key==="="||e.key==="+"?Aa:-Aa);return}}}const t=this.focusedId?this.panels.get(this.focusedId):null;t!=null&&t.content.key&&(t.content.key(e),t.invalidate())}onContextMenu(e){if(!this.menu)return;if(!this.accepts(e)){this.menu.close(),this.invalidate();return}if(this.dragging||this.resizing)return;const t=this.pick(e.clientX,e.clientY);if(!t){this.menu.isOpen&&(this.menu.close(),this.invalidate());return}e.preventDefault(),e.stopPropagation(),this.setFocus(t.panel.id);const i=t.panel.content.width,s=t.panel.content.height,r=t.part==="body"&&t.uv||t.uv?t.uv.x*i:0,o=t.part==="body"&&t.uv?(1-t.uv.y)*s:0;this.menu.open(t.panel,r,o,t.panel.display),this.invalidate()}openDisplayMenu(e,t=8,i=8){const s=this.panels.get(e);!this.menu||!s||(this.menu.open(s,t,i,s.display),this.invalidate())}setMenuColors(e){var t;(t=this.menu)==null||t.setColors(e),this.invalidate()}setBarColors(e){this.barColors={...this.barColors,...e};for(const t of this.panels.values())t.invalidateBar();this.invalidate()}setBarStyle(e){if(this.barStyle!==e){this.barStyle=e;for(const t of this.panels.values())t.invalidateBar();this.invalidate()}}closeDisplayMenu(){var e;(e=this.menu)!=null&&e.isOpen&&(this.menu.close(),this.invalidate())}get displayMenuPanel(){var e;return((e=this.menu)==null?void 0:e.panel)??null}pickMenu(e,t){var s;if(!((s=this.menu)!=null&&s.isOpen))return null;this.setRay(e,t);const i=this.ray.intersectObject(this.menu.mesh,!1)[0];return i!=null&&i.uv?this.menu.rowAtUV(i.uv.x,i.uv.y):null}clientPointForMenuRow(e){var o;if(!((o=this.menu)!=null&&o.isOpen))return null;const{x:t,y:i}=Dr.rowCentre(e);this.menu.mesh.updateWorldMatrix(!0,!1);const s=this.menu.mesh.localToWorld(new Q((t-Dr.width/2)/this.pxPerUnit,(Dr.height/2-i)/this.pxPerUnit,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}menuAct(e){var s;const t=(s=this.menu)==null?void 0:s.panel;if(!t)return;const i=t.display;if(e==="curve-"||e==="curve+"){this.stepBend(t,e==="curve+"?Aa:-Aa);return}this.applyDisplay(t,{[e]:!i[e]})}stepBend(e,t){this.applyDisplay(e,{curvature:Math.max(DE,Math.min(LE,e.display.curvature+t))})}applyDisplay(e,t){var i,s,r;e.setDisplay(t),((i=this.menu)==null?void 0:i.panel)===e&&this.menu.update(e.display),(r=(s=this.o).onPanelDisplay)==null||r.call(s,e.id,e.display),this.invalidate()}setLens(e){const t=e&&e.uv&&e.panel.display.magnify?e.panel:null;this.lensPanel&&this.lensPanel!==t&&(this.lensPanel.content.surface.setLens(null),this.lensPanel.invalidate()),this.lensPanel=t,t&&e.uv&&(t.content.surface.setLens({x:e.uv.x,y:e.uv.y}),t.invalidate())}startResize(e){var c;(c=this.menu)==null||c.close(),e.group.updateWorldMatrix(!0,!0);const t=e.group.getWorldQuaternion(new wi),i=new Q(1,0,0).applyQuaternion(t),s=new Q(0,1,0).applyQuaternion(t),r=new Q(0,0,1).applyQuaternion(t),o=this.pxPerUnit,a=e.body.localToWorld(new Q(-e.content.width/o/2,e.content.height/o/2,0)),l=new yi().setFromNormalAndCoplanarPoint(r,a);this.resizing={panel:e,tl:a,right:i,up:s,plane:l,moved:!1}}resizeTo(e){const t=this.resizing;this.setRay(e.clientX,e.clientY);const i=new Q;if(!this.ray.ray.intersectPlane(t.plane,i))return;const s=this.pxPerUnit,r=i.sub(t.tl),o=Math.round(r.dot(t.right)*s),a=Math.round(-r.dot(t.up)*s),l=t.panel,c=Math.round(Math.min(l.maxSize.w,Math.max(l.minSize.w,o))),u=Math.round(Math.min(l.maxSize.h,Math.max(l.minSize.h,a)));c===l.content.width&&u===l.content.height||(l.group.position.copy(t.tl).addScaledVector(t.right,c/s/2).addScaledVector(t.up,-u/s/2),l.resize(c,u),t.moved=!0)}startDrag(e){var o;(o=this.menu)==null||o.close(),e.group.updateWorldMatrix(!0,!0);const t=new Q(0,0,1).applyQuaternion(e.group.quaternion),i=new yi().setFromNormalAndCoplanarPoint(t,e.group.position),s=new Q,r=new Q;this.ray.ray.intersectPlane(i,s)&&r.copy(e.group.position).sub(s),this.dragging={panel:e,plane:i,offset:r,moved:!1}}dragTo(e){const t=this.dragging;this.setRay(e.clientX,e.clientY);const i=new Q;this.ray.ray.intersectPlane(t.plane,i)&&(t.panel.group.position.copy(i.add(t.offset)),t.moved=!0,this.invalidate())}dispose(){var e,t,i;(e=this.cancelFly)==null||e.call(this),cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();for(const s of this.disposers)s();for(const s of[...this.panels.values()])this.removePanel(s.id);(t=this.menu)==null||t.dispose(),(i=this.controls)==null||i.dispose();try{this.renderer.forceContextLoss()}catch{}this.renderer.dispose(),this.canvas.remove()}}function OE(n){const e=hl();return e.run(()=>{const t=Ae(0),i=Ae(0),s=Ae(0),r=Ae(-1),o=new Map,a=()=>{var M;return((M=n.minCellW)==null?void 0:M.call(n))??210},l=()=>{var M;return((M=n.cellAspect)==null?void 0:M.call(n))??.6},c=()=>df({count:n.cells().length,width:t.value,minCellW:a(),cellAspect:l(),scrollY:s.value}),u=()=>Om(c().totalH,i.value);je([n.cells,n.theme,()=>{var M;return(M=n.showVolume)==null?void 0:M.call(n)},()=>{var M;return(M=n.volumeFraction)==null?void 0:M.call(n)},()=>{var M;return(M=n.slotW)==null?void 0:M.call(n)},()=>{var M;return(M=n.colors)==null?void 0:M.call(n)},a,l],()=>{s.value=Math.min(s.value,u()),n.host.redraw()}),je([s,r],()=>n.host.redraw());function f(M,w){t.value=M,i.value=w,s.value=Math.min(s.value,u()),n.host.redraw()}function h(M){const w=u();return w<=0?!1:(s.value=Math.max(0,Math.min(w,s.value+M)),!0)}function m(M,w){const g=Du(c().rects,M,w);return g>=0?n.cells()[g].id:null}function v(M,w){const g=Du(c().rects,M,w);return r.value=g,g}function _(){r.value=-1}function p(M,{dpr:w,glow:g}){var C,T,E,D;Bm(M,{cells:n.cells(),theme:n.theme(),glow:g,showVolume:((C=n.showVolume)==null?void 0:C.call(n))??!0,volumeFraction:((T=n.volumeFraction)==null?void 0:T.call(n))??.22,slotW:((E=n.slotW)==null?void 0:E.call(n))??3,colors:(D=n.colors)==null?void 0:D.call(n),hoveredCell:r.value,scrollY:s.value,minCellW:a(),cellAspect:l(),dpr:w},o)}function d(){o.clear(),e.stop()}return{viewW:t,viewH:i,scrollY:s,hoveredCell:r,layout:c,maxScroll:u,setViewport:f,wheel:h,cellIdAt:m,hover:v,leave:_,paint:p,dispose:d}})}function BE(n){let e=()=>{};const t=n.theme??"phosphor",i=Tm({columnDefs:()=>n.columnDefs,defaultColDef:()=>n.defaultColDef,rowData:()=>n.rowData,pinnedBottomRowData:()=>n.pinnedBottomRowData,rowHeight:()=>n.rowHeight??28,theme:()=>t,emit:n.emit??(()=>{}),host:{redraw:()=>e()}});i.init(),i.setViewport(n.width,n.height,n.width,n.height);const s=new ts({mode:"world",paint:(l,c)=>i.paint(l,c)}),r=l=>{const c={cx:l.x,cy:l.y,hitScale:l.hitScale};switch(l.kind){case"move":return i.resizing?null:i.hover(c);case"leave":return i.leave(),null;case"down":return i.pointerDown(c,l.clientX,l.clientY),null;case"drag":return i.globalMove(l.clientX,l.clientY),null;case"up":return i.globalUp(),null;case"click":return i.click(c,{shiftKey:l.shiftKey,detail:l.detail}),null;case"wheel":return i.wheel(l.deltaX,l.deltaY,l.shiftKey),null}},o=l=>{if(i.activeFilter.value){if(l.key==="Escape"){l.preventDefault(),i.clearFilter();return}if(l.key==="Enter"){l.preventDefault(),i.closeFilter();return}if(l.key==="Backspace"){l.preventDefault(),i.setFilterText(i.filterPopupValue.value.slice(0,-1)),e();return}if(l.key.length===1&&!l.ctrlKey&&!l.metaKey){l.preventDefault(),i.setFilterText(i.filterPopupValue.value+l.key),e();return}}i.keyDown(l)},a={model:i,surface:s,width:n.width,height:n.height,attach:l=>{e=l},pointer:r,key:o,resize(l,c){a.width=l,a.height=c,i.setViewport(l,c,l,c),e()},dispose:()=>{i.dispose(),s.dispose()}};return a}function yd(n){let e=()=>{};const t=pl({entries:n.entries,theme:n.theme??"phosphor",showTimestamps:n.showTimestamps,formatTs:n.formatTs,wordWrap:n.wordWrap,maxLines:n.maxLines}),i=Cm({entries:()=>t.entries,theme:()=>t.theme??"phosphor",showTimestamps:()=>t.showTimestamps??!0,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap??!0,maxLines:()=>t.maxLines??0,host:{redraw:()=>e()}});i.setViewport(n.width,n.height),i.scrollToBottom();const s=new ts({mode:"world",paint:(c,u)=>i.paint(c,u)});let r={x:0,y:0},o=!1;const a=c=>{switch(c.kind){case"move":return i.hover(c.x<0?-1:c.y),null;case"leave":return i.leave(),null;case"down":return r={x:c.clientX,y:c.clientY},o=!1,i.panStart(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"drag":return Math.hypot(c.clientX-r.x,c.clientY-r.y)>4&&(o=!0),i.panMove(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"up":return i.panEnd(),null;case"click":return o||i.click(c.x<0?-1:c.y,c.shiftKey),o=!1,null;case"wheel":return i.wheel(c.deltaX,c.deltaY,c.shiftKey),null}},l={model:i,surface:s,width:n.width,height:n.height,attach:c=>{e=c},pointer:a,key:c=>i.keyDown(c),update(c){Object.assign(t,c),e()},resize(c,u){l.width=c,l.height=u,i.setViewport(c,u),e()},dispose:()=>{i.dispose(),s.dispose()}};return l}function kE(n){let e=()=>{};const t=pl({candles:n.candles,theme:n.theme,slotW:n.slotW,showVolume:n.showVolume,volumeFraction:n.volumeFraction,overlays:n.overlays,markers:n.markers,compact:n.compact,colors:n.colors}),i=Lm({candles:()=>t.candles,theme:()=>t.theme??"phosphor",slotW:()=>t.slotW??8,showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??Rm,overlays:()=>t.overlays,markers:()=>t.markers,compact:()=>t.compact??!1,colors:()=>t.colors,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new ts({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{switch(a.kind){case"move":return i.hoverAt(a.x,a.y),null;case"leave":return i.leave(),null;case"down":return i.panStart(a.clientX*a.hitScale),null;case"drag":return i.panMove(a.clientX*a.hitScale),null;case"up":return i.panEnd(),null;case"wheel":return i.wheel(a.deltaX,a.deltaY,a.shiftKey,a.x),null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,key:a=>i.keyDown(a),update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function zE(n){let e=()=>{};const t=pl({cells:n.cells,theme:n.theme,showVolume:n.showVolume,volumeFraction:n.volumeFraction,slotW:n.slotW,minCellW:n.minCellW,cellAspect:n.cellAspect,colors:n.colors}),i=OE({cells:()=>t.cells,theme:()=>t.theme??"phosphor",showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??.22,slotW:()=>t.slotW??3,colors:()=>t.colors,minCellW:()=>t.minCellW??210,cellAspect:()=>t.cellAspect??.6,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new ts({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{var l;switch(a.kind){case"move":return i.hover(a.x,a.y)>=0?"pointer":null;case"leave":return i.leave(),null;case"click":{const c=i.cellIdAt(a.x,a.y);return c&&((l=n.onCellClick)==null||l.call(n,c)),null}case"wheel":return i.wheel(a.deltaY),null;default:return null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function HE(n){let e=()=>{},t={...n};const i=()=>((t.min??-1)+(t.max??1))/2;let s=t.animate===!1?t.value:i(),r=0;const o=new ts({mode:"world",paint:(c,{dpr:u,glow:f})=>{km(c,{dpr:u,theme:t.theme??"none",colors:t.colors,glow:f,shown:s,value:t.value,min:t.min??-1,max:t.max??1,readout:t.readout,stance:t.stance,sub:t.sub,leftLabel:t.leftLabel??"−",rightLabel:t.rightLabel??"+",sideLetters:t.sideLetters??["−","+"],marks:t.marks??[],meter:t.meter??null,caption:t.caption,note:t.note,items:t.items??[],emptyText:t.emptyText})}}),a=()=>{if(cancelAnimationFrame(r),t.animate===!1){s=t.value,e();return}const c=()=>{const u=t.value-s;if(Math.abs(u)<.004){s=t.value,e();return}s+=u*.18,e(),r=requestAnimationFrame(c)};r=requestAnimationFrame(c)},l={surface:o,width:n.width,height:n.height,attach:c=>{e=c,a()},resize(c,u){l.width=c,l.height=u,e()},update(c){const u=c.value!==void 0&&c.value!==t.value;t={...t,...c},u||c.animate!==void 0?a():e()},get shown(){return s},dispose:()=>{cancelAnimationFrame(r),e=()=>{},o.dispose()}};return l}const ms=300,VE=36e5,GE=Date.UTC(2026,9,1,0,0,0);let Mc=20261122;const La=()=>(Mc=Mc*1664525+1013904223>>>0,Mc/4294967296),Rn=[];let Md=100;for(let n=0;n<ms;n++){const e=Md,t=e*(1+(La()-.48)*.02+Math.sin(n/17)*.002),i=Math.max(e,t)*(1+La()*.006),s=Math.min(e,t)*(1-La()*.006);Rn.push({start:GE+n*VE,open:e,high:i,low:s,close:t,volume:800+Math.round(La()*2200)}),Md=t}const Vm=n=>Rn.map((e,t)=>t<n-1?NaN:Rn.slice(t-n+1,t+1).reduce((i,s)=>i+s.close,0)/n),Ga=Vm(20),Sd=Rn.map((n,e)=>e<19?NaN:Math.sqrt(Rn.slice(e-19,e+1).reduce((t,i)=>t+(i.close-Ga[e])**2,0)/20)),WE=[{kind:"band",upper:Ga.map((n,e)=>n+2*Sd[e]),lower:Ga.map((n,e)=>n-2*Sd[e]),middle:Ga,color:"#6ee7a7"},{kind:"line",data:Vm(50),color:"#fbbf24",label:"SMA50"},{kind:"hline",price:Rn[ms-1].close,color:"#60a5fa",label:"last"}],XE=[{timestamp:Rn[ms-40].start,price:Rn[ms-40].low,kind:"entry"},{timestamp:Rn[ms-12].start,price:Rn[ms-12].high,kind:"exit"},{timestamp:Rn[ms-90].start,price:Rn[ms-90].low,kind:"entry",label:"E"}];function YE(n){return Array.from({length:n},(e,t)=>{const i=Rn.slice(t*7,t*7+70),s=t%3===0;return{id:`P${t}`,title:t%5===4?`Will the long question number ${t} resolve before the end of the quarter?`:`AAPL${t}`,badge:t%2?"EQ":"₿",note:`${t%2?"-":"+"}${(t*.37+.2).toFixed(2)}%`,noteColor:t%2?"#e74c3c":"#00bc8c",open:s,candles:i,overlays:s?[{kind:"hline",price:i[20].close,color:"#5b8ff9",dashed:!1,label:"entry"}]:[]}})}const $E={class:"ws3d-bar"},qE=["aria-pressed"],KE={key:0,class:"ws3d-caption",role:"status"},bd=26,jE=9e3,ZE=fi({__name:"Workspace3D",props:{theme:{}},setup(n){const e=n,t=Ae(null),i=Ae(""),s=Ae(!1),r=Ae(!1),o={paper:{bars:{bg:"#e6edf6",bgFocused:"#f3f7fc",line:"#b9c7da",lineFocused:"#2f6fd0",text:"#5a6b80",textFocused:"#1d2b3d",title:"#2f6fd0",titleFocused:"#1f56ad",box:"#b9c7da",boxFocused:"#8aa0bd",accent:"#1f9d66",accentText:"#0b2a1a"},menu:{bg:"#f8fafd",border:"#b9c7da",text:"#1d2b3d",muted:"#6b7c92",accent:"#2f6fd0",divider:"#d6dfeb",hover:"rgba(47,111,208,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #fbfdff 0%, #eaf1fa 55%, #d3e0f1 100%)",dot:"rgba(47,111,208,0.16)",floor:"#2f6fd0",floorAlpha:.55,panel:{curvature:5,scanlines:!1,glow:!1},up:"#16794f",down:"#c0392b",ui:{ink:"#2f6fd0",btnBg:"rgba(255,255,255,0.75)",btnBorder:"#b9c7da",btnInk:"#33465e",btnHoverInk:"#fff",capBg:"rgba(31,86,173,0.92)",capInk:"#fff",hint:"#5a6b80"}},none:{bars:{bg:"#12122a",bgFocused:"#181840",line:"#26324a",lineFocused:"#40a0f0",text:"#6a85a8",textFocused:"#b8d0ea",title:"#40a0f0",titleFocused:"#7cc4ff",box:"#26324a",boxFocused:"#3a5a80",accent:"#00bc8c",accentText:"#e8fff6"},menu:{bg:"#10182a",border:"#2a3a55",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",divider:"#1e2a3a",hover:"rgba(255,255,255,0.07)"},bg:"radial-gradient(ellipse at 50% 30%, #131c33 0%, #0a1020 60%, #060a14 100%)",dot:"rgba(64,160,240,0.14)",floor:"#40a0f0",floorAlpha:.5,panel:{curvature:8,scanlines:!0,glow:!1},up:"#00bc8c",down:"#e74c3c",ui:{ink:"#40a0f0",btnBg:"rgba(16,24,42,0.78)",btnBorder:"#2a3a55",btnInk:"#a8c4e4",btnHoverInk:"#06101e",capBg:"rgba(64,160,240,0.95)",capInk:"#06101e",hint:"#6a85a8"}},phosphor:{bars:{},menu:{},bg:"radial-gradient(ellipse at 50% 30%, #0e1a22 0%, #070d12 60%, #04080b 100%)",dot:"rgba(110,231,167,0.14)",floor:"#6ee7a7",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#6ee7a7",down:"#f87171",ui:{ink:"#6ee7a7",btnBg:"rgba(8,19,14,0.7)",btnBorder:"#2f6b4c",btnInk:"#9fd9bd",btnHoverInk:"#06150e",capBg:"rgba(110,231,167,0.95)",capInk:"#06150e",hint:"#6fae8f"}},amber:{bars:{bg:"#1a1205",bgFocused:"#271a07",line:"#5e4310",lineFocused:"#ffcc33",text:"#b8883a",textFocused:"#ffd983",title:"#ffcc33",titleFocused:"#ffe08a",box:"#5e4310",boxFocused:"#8a6418",accent:"#ffcc33",accentText:"#2a1c04"},menu:{bg:"#1a1205",border:"#5e4310",text:"#ffd983",muted:"#b8883a",accent:"#ffcc33",divider:"#3a2a0a",hover:"rgba(255,204,51,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #20160a 0%, #120c04 60%, #0a0702 100%)",dot:"rgba(255,204,51,0.13)",floor:"#ffb62e",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#ffcc33",down:"#d9531e",ui:{ink:"#ffcc33",btnBg:"rgba(26,18,5,0.78)",btnBorder:"#5e4310",btnInk:"#e0b560",btnHoverInk:"#1a1205",capBg:"rgba(255,204,51,0.95)",capInk:"#1a1205",hint:"#b8883a"}}},a=()=>o[e.theme],l=()=>{const y=a();return{"--bg":y.bg,"--dot":y.dot,"--ink":y.ui.ink,"--btn-bg":y.ui.btnBg,"--btn-border":y.ui.btnBorder,"--btn-ink":y.ui.btnInk,"--btn-hover-ink":y.ui.btnHoverInk,"--cap-bg":y.ui.capBg,"--cap-ink":y.ui.capInk,"--hint":y.ui.hint}},c=["BTC-USD","ETH-USD","SOL-USD","AVAX-USD","LINK-USD","DOGE-USD","ADA-USD","XRP-USD"],u=Array.from({length:80},(y,x)=>({id:x+1,product:c[x%c.length],side:x%3===0?"short":"long",pnl:Math.round(Math.sin(x*1.7)*480)/10,size:100+x*37%900})),f=Date.UTC(2026,10,22,14,0,0),h=["info","info","success","warn","debug","info"],m=Array.from({length:60},(y,x)=>({ts:f+x*7e3,level:h[x%h.length],text:`scanner cycle ${x*3} complete — ${x%5} candidates passed the filter`})),v=y=>{const x=new Date(y);return`${String(x.getUTCHours()).padStart(2,"0")}:${String(x.getUTCMinutes()).padStart(2,"0")}:${String(x.getUTCSeconds()).padStart(2,"0")}`},_={trades:{x:0,y:0,w:560,h:320,title:"Open positions"},candle:{x:580,y:0,w:600,h:320,title:"BTC-USD · 1h"},tilt:{x:1200,y:0,w:340,h:320,title:"Net tilt"},wall:{x:0,y:370,w:740,h:320,title:"Charts"},log:{x:760,y:370,w:780,h:320,title:"Monitor log"}},p=1540,d=690+bd;let M=null,w=null,g=null,C=0,T=null,E=null,D=null,S=null;function b(y,x,A){const N=new qn({transparent:!0,depthWrite:!1,side:On,uniforms:{uColor:{value:new ht(y)},uAlpha:{value:x},uCell:{value:.3},uFar:{value:20},uBack:{value:0}},vertexShader:"varying vec3 vP; void main() { vP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vP, 1.0); }",fragmentShader:`
      varying vec3 vP; uniform vec3 uColor; uniform float uAlpha; uniform float uCell; uniform float uFar; uniform float uBack;
      float lines(vec2 p, float cell) { vec2 c = p / cell; vec2 g = abs(fract(c - 0.5) - 0.5) / max(fwidth(c), vec2(1e-4)); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main() {
        float minor = lines(vP.xz, uCell), major = lines(vP.xz, uCell * 5.0);
        float fade = smoothstep(uFar, 1.5, length(vP.xz));
        // seen from the front, only IN FRONT of the panels (a ledge they hover over) — never behind their glass, where it would cross their text; as the camera swings round to the side / back (uBack → 1) the whole floor appears
        float front = max(smoothstep(0.0, 0.4, vP.z), uBack);
        float a = max(minor * 0.55, major) * fade * front * uAlpha;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`}),W=new Dt(new Xt(80,80),N);return W.rotation.x=-Math.PI/2,W.position.set(0,A,-10),W.renderOrder=-10,W.name="floor",W}const I=["BTC","ETH","SOL","AVAX","LINK","DOGE","ADA","XRP","AAPL","MSFT","NVDA","TSLA"],F=[];function z(y,x){const A=y.canvas,N=A.getContext("2d"),W=A.width,Z=A.height,we=e.theme==="paper";N.clearRect(0,0,W,Z),N.fillStyle=we?"rgba(255,255,255,0.78)":"rgba(8,14,24,0.74)",N.fillRect(0,0,W,Z);const pe=y.series.length,be=Math.min(...y.series),ke=Math.max(...y.series),U=Math.max(1e-6,ke-be),ee=y.series[pe-1]>=y.series[0]?x.up:x.down;N.strokeStyle=we?"rgba(47,111,208,0.12)":"rgba(255,255,255,0.08)",N.lineWidth=1;for(let Te=1;Te<4;Te++)N.beginPath(),N.moveTo(0,Z*Te/4),N.lineTo(W,Z*Te/4),N.stroke();const Ee=Te=>10+(W-20)*Te/(pe-1),he=Te=>Z-14-(Z-34)*(Te-be)/U;N.beginPath(),N.moveTo(Ee(0),he(y.series[0]));for(let Te=1;Te<pe;Te++)N.lineTo(Ee(Te),he(y.series[Te]));N.lineTo(Ee(pe-1),Z-8),N.lineTo(Ee(0),Z-8),N.closePath(),N.globalAlpha=.16,N.fillStyle=ee,N.fill(),N.globalAlpha=1,N.beginPath(),N.moveTo(Ee(0),he(y.series[0]));for(let Te=1;Te<pe;Te++)N.lineTo(Ee(Te),he(y.series[Te]));N.strokeStyle=ee,N.lineWidth=3,N.lineJoin="round",N.stroke(),N.fillStyle=ee,N.beginPath(),N.arc(Ee(pe-1),he(y.series[pe-1]),5,0,Math.PI*2),N.fill(),N.lineWidth=y.open?5:2,N.strokeStyle=y.open?x.up:we?"rgba(47,111,208,0.45)":"rgba(255,255,255,0.22)",N.strokeRect(2,2,W-4,Z-4),y.tex.needsUpdate=!0}function X(y,x){const A=new Pr;A.name="scape";const N=q=new Xt(.5,.3),W=6,Z=2;for(let pe=0;pe<Z;pe++)for(let be=0;be<W;be++){const ke=pe*W+be,U=document.createElement("canvas");U.width=256,U.height=154;const B=new Yn(U);B.colorSpace=zt,B.anisotropy=4;let ee=100;const Ee=Array.from({length:36},(de,Se)=>ee*=1+Math.sin(Se/5+ke)*.012+(Math.random()-.5)*.014),he=new Dt(N,new Js({map:B,transparent:!0,depthWrite:!1,toneMapped:!1,side:On}));he.rotation.x=-Math.PI/2,he.position.set((be-(W-1)/2)*.62,x+.004,.2+pe*.42),he.renderOrder=-9,A.add(he);const Te={mesh:he,tex:B,canvas:U,series:Ee,open:ke%4===0};F.push(Te),z(Te,y);const Pe=document.createElement("canvas");Pe.width=128,Pe.height=40;const Ve=Pe.getContext("2d");Ve.font="700 26px ui-monospace, monospace",Ve.textAlign="center",Ve.fillStyle=e.theme==="paper"?"#1d2b3d":"#cfe3f2",Ve.fillText(I[ke%I.length],64,29);const G=new Yn(Pe);G.colorSpace=zt;const Ce=new nd(new wu({map:G,transparent:!0,depthWrite:!1,toneMapped:!1}));Ce.scale.set(.15,.047,1),Ce.position.set(he.position.x,x+.085,he.position.z),Ce.renderOrder=-8,A.add(Ce)}const we=Y=new Xt(.62,.37);for(let pe=0;pe<3;pe++)for(let be=0;be<6;be++){const ke=12+pe*6+be,U=document.createElement("canvas");U.width=256,U.height=154;const B=new Yn(U);B.colorSpace=zt,B.anisotropy=4;let ee=100;const Ee=Array.from({length:36},(de,Se)=>ee*=1+Math.sin(Se/6+ke)*.012+(Math.random()-.5)*.014),he=new Dt(we,new Js({map:B,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:On}));he.rotation.x=-Math.PI/2,he.position.set((be-2.5)*.78+pe%2*.2,x+.004,-.8-pe*.62),he.renderOrder=-9,he.userData.back=!0,he.visible=!1,A.add(he);const Te={mesh:he,tex:B,canvas:U,series:Ee,open:ke%5===0};F.push(Te),z(Te,y);const Pe=document.createElement("canvas");Pe.width=128,Pe.height=40;const Ve=Pe.getContext("2d");Ve.font="700 26px ui-monospace, monospace",Ve.textAlign="center",Ve.fillStyle=e.theme==="paper"?"#1d2b3d":"#cfe3f2",Ve.fillText(I[ke%I.length],64,29);const G=new Yn(Pe);G.colorSpace=zt;const Ce=new nd(new wu({map:G,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));Ce.scale.set(.17,.053,1),Ce.position.set(he.position.x,x+.09,he.position.z),Ce.renderOrder=-8,Ce.userData.back=!0,Ce.visible=!1,A.add(Ce)}return A}let q=null,Y=null;function te(){q==null||q.dispose(),q=null,Y==null||Y.dispose(),Y=null,S&&clearInterval(S),S=null,D&&(D.traverse(y=>{var A;const x=y.material;(A=x==null?void 0:x.map)==null||A.dispose(),x==null||x.dispose()}),D.removeFromParent()),D=null,F.length=0}let V=0,ie=null;function k(y,x){const A=Math.cos(x),N=Math.sin(x),W=Z=>[Z[0]*A+Z[2]*N,Z[1],-Z[0]*N+Z[2]*A];return{position:W(y.position),target:W(y.target)}}const j=(y,x,A)=>{const N=Math.min(1,Math.max(0,(A-y)/(x-y)));return N*N*(3-2*N)};function K(){if(!E||!T||!D)return;const y=j(.35,.9,Math.abs(E.getAzimuthalAngle()));T.material.uniforms.uBack.value=y;for(const x of D.children)x.userData.back&&(x.visible=y>.01,x.material.opacity=y)}const ue=()=>Oe(!1);function ne(y){y.addEventListener("change",K)}function me(y){y.addEventListener("pointerdown",ue,!0),y.addEventListener("wheel",ue,{capture:!0,passive:!0})}function ye(y){y==null||y.removeEventListener("pointerdown",ue,!0),y==null||y.removeEventListener("wheel",ue,!0)}async function _e(y=!1){if(!M||r.value)return;y||le(),M.expandedId&&await M.unexpand(void 0,{ms:500});const x=ie=M.getCameraPose(),A=++V;r.value=!0;const N=performance.now();await new Promise(W=>{const Z=we=>{if(V!==A||!M){W();return}const pe=Math.min(1,(we-N)/jE),be=pe<.5?2*pe*pe:1-Math.pow(-2*pe+2,2)/2;M.setCameraPose(k(x,be*Math.PI*2)),pe<1?requestAnimationFrame(Z):W()};requestAnimationFrame(Z)}),V===A&&M&&(M.setCameraPose(x),r.value=!1,K())}function Oe(y){r.value&&(V++,r.value=!1,y&&ie&&M&&M.flyTo(ie,700))}function He(){r.value?Oe(!0):_e()}function We(y){const x=t.value,A=a(),N=e.theme;M=new NE({container:x,transparent:!0,controls:(U,B)=>{const ee=new vE(U,B);return ee.enableDamping=!0,ee.minDistance=.4,ee.maxDistance=16,ee.zoomSpeed=.9,E=ee,ne(ee),ee},cameraPosition:[0,0,6],displayMenu:{colors:A.menu},barStyle:"cockpit",barColors:A.bars,onPanelActivate:U=>{const B=M.facingPose(U,{margin:.04});B&&M.flyTo(B,650)},onPanelControl:(U,B)=>{const ee=M.panels.get(U);if(B==="info"){O(U);return}if(B==="minimize"){M.setPanelMinimized(U,!ee.minimized);return}if(B==="close"){M.closePanel(U);return}M.toggleExpand(U)}});const W={curvature:A.panel.curvature,scanlines:A.panel.scanlines,vignette:!1},Z=A.panel.glow,we=M.pxPerUnit,pe=U=>{const B=_[U];return[(B.x+B.w/2-p/2)/we,-(B.y+bd+B.h/2-d/2)/we,0]},be=(U,B,ee={})=>M.addPanel({id:U,title:_[U].title,content:B,position:pe(U),look:W,glow:Z,controls:["info","minimize","maximize"],resizable:!0,...ee});be("trades",BE({width:_.trades.w,height:_.trades.h,theme:N,rowData:u,columnDefs:[{field:"id",headerName:"ID",width:60,sortable:!0},{field:"product",headerName:"Product",width:130,sortable:!0,filter:!0},{field:"side",headerName:"Side",width:90,sortable:!0},{field:"pnl",headerName:"P&L %",width:110,sortable:!0,cellStyle:U=>({color:U.value>=0?A.up:A.down})},{field:"size",headerName:"Size",width:100,sortable:!0}],rowHeight:24})),be("candle",kE({width:_.candle.w,height:_.candle.h,candles:Rn,overlays:WE,markers:XE,theme:N})),g=HE({width:_.tilt.w,height:_.tilt.h,theme:N,value:.62,min:-1,max:1,stance:"net long",sub:"5 long · 3 short · 9 flat",leftLabel:"SHORT",rightLabel:"LONG",sideLetters:["S","L"],caption:"tilt of the book",note:"a gauge, in the same scene",items:[{label:"BTC",side:"right",value:"+2.1%",tone:"up"},{label:"ETH",side:"right",value:"+0.8%",tone:"up"},{label:"XRP",side:"left",value:"−1.4%",tone:"down"}]}),be("tilt",g),be("wall",zE({width:_.wall.w,height:_.wall.h,cells:YE(9),theme:N})),be("log",yd({width:_.log.w,height:_.log.h,entries:m,theme:N,formatTs:v})),T=b(A.floor,A.floorAlpha,-358/we-.12),M.scene.add(T),me(x),D=X(A,-358/we-.12),M.scene.add(D),S=setInterval(()=>{for(const U of F)U.series.push(U.series[U.series.length-1]*(1+(Math.random()-.48)*.016)),U.series.shift(),z(U,A);M==null||M.invalidate()},2600);const ke=y??R();ke&&M.setCameraPose(ke),w=setInterval(()=>{const U=Math.round(Math.sin(Date.now()/4e3)*90)/100;g==null||g.update({value:U,stance:U>=0?"net long":"net short"})},2500),window.__ws3d={stage:M,overview:fe,recenter:re,tour:xe,stopTour:le,openAbout:O,toggleRotate:He,spin:_e,poseAt:k,rotating:()=>r.value,get orbit(){return E},get scape(){return D},get floor(){return T},theme:()=>e.theme,layout:_,setCaption:U=>{i.value=U},setTilt:U=>{w&&clearInterval(w),w=null,g==null||g.update({value:U,stance:U>=0?"net long":"net short"})}}}function Me(){w&&clearInterval(w),w=null,T&&(T.geometry.dispose(),T.material.dispose()),T=null,te(),V++,r.value=!1,E=null,ye(t.value),M==null||M.dispose(),M=null,g=null}const L={trades:["A sortable, filterable canvas grid.","Click a header to sort; the funnel opens a filter you type into — there is no DOM input in 3D.","Rows are real data: select, copy as TSV, double-click to open."],candle:["A three.js candlestick chart.","Wheel zooms the series, drag pans, hover shows the crosshair and the OHLCV strip.","Overlays (Bollinger band, SMA50), a live price line and trade markers."],tilt:["A bipolar gauge.","The needle eases to each new reading; the figure and stance follow it."],wall:["A wall of mini charts drawn into ONE surface.","Hover rings a card, a click reports it, the wheel scrolls the wall.","Open positions are framed, with their P&L and entry line."],log:["A scrolling console.","Follows the tail until you scroll up; select and copy lines."]};function O(y){if(!M)return;const x=`about-${y}`;if(M.panels.has(x)){M.expand(x);return}const A=a(),N=L[y].map(Z=>({text:Z,level:"info"})),W=yd({width:520,height:220,entries:N,theme:e.theme,showTimestamps:!1});W.model.setScroll(0),M.addPopup({id:x,title:`About — ${_[y].title}`,content:W,look:{curvature:A.panel.curvature,scanlines:A.panel.scanlines,vignette:!1},glow:A.panel.glow,resizable:!0},{near:y})}function R(){const y=M==null?void 0:M.framePose(void 0,{margin:.12});if(!y)return null;const x=.17;return{position:[y.position[0],y.position[1]-x,y.position[2]],target:[y.target[0],y.target[1]-x,y.target[2]]}}function fe(){Oe(!1);const y=R();y&&M.flyTo(y,800)}function re(){Oe(!1),M!=null&&M.expandedId?M.unexpand():fe()}const se=y=>new Promise(x=>setTimeout(x,y));let ae=null;async function xe(){if(s.value){le();return}Oe(!1),s.value=!0;const y=++C,x=()=>C===y&&!!M,A=[{text:"Zoom out — the whole workspace in one view",run:()=>fe(),hold:1500},{text:"Fly in — □ expands a panel until it fills the view",run:()=>M.expand("trades",{ms:900}),hold:1500},{text:"Fly out — □ again restores the view you had",run:()=>M.unexpand(void 0,{ms:900}),hold:1300},{text:"Fly in on the chart …",run:()=>M.expand("candle",{ms:900}),hold:1400},{text:"… and out again",run:()=>M.unexpand(void 0,{ms:900}),hold:1100},{text:"ⓘ opens a pop-up in the wall — the camera flies to it",run:()=>{ae="about-wall",O("wall")},hold:2300},{text:"Close it — and the camera flies back",run:async()=>{await M.closePanel("about-wall",{ms:900}),ae=null},hold:1200},{text:"Rotate — a full 360° spin: the charts behind the wall come into view",run:()=>_e(!0),hold:400},{text:"Back out to the overview",run:()=>fe(),hold:1500}];for(const N of A){if(!x())break;i.value=N.text,await N.run(),await se(N.hold)}C===y&&(i.value="",s.value=!1)}function le(){C++,s.value=!1,i.value="",Oe(!1),ae&&(M!=null&&M.panels.has(ae))&&M.closePanel(ae,{ms:0}),ae=null,M==null||M.flyTo(M.getCameraPose(),0),M!=null&&M.expandedId&&M.unexpand(void 0,{ms:600})}return je(()=>e.theme,()=>{if(!M)return;const y=M.getCameraPose();le(),Me(),We(y)}),Ln(()=>{We(null)}),Wu(()=>{C++,Me(),delete window.__ws3d}),(y,x)=>(Je(),gt("div",{class:Wt(["ws3d",`t-${n.theme}`]),style:Bn(l()),"data-testid":"ws3d"},[Le("div",{ref_key:"host",ref:t,class:"ws3d-stage"},null,512),Le("div",$E,[x[0]||(x[0]=Le("span",{class:"ws3d-title"},"3D workspace",-1)),Le("button",{class:"ws3d-btn",title:"Zoom the whole workspace out until every panel is in frame",onClick:fe},"Overview"),Le("button",{class:"ws3d-btn",title:"Fly back to the start",onClick:re},"Recenter"),Le("button",{class:Wt(["ws3d-btn",{on:r.value}]),"aria-pressed":r.value,title:"Spin the camera a full 360° around the wall — see the charts behind it (a drag or the wheel takes the camera back; click again to stop)",onClick:He},cn(r.value?"■ Spin":"⟳ Rotate"),11,qE),Le("button",{class:Wt(["ws3d-btn",{on:s.value}]),title:"Play a tour: zoom out, fly in on a panel and out again, a pop-up joining the wall, a sweep around it",onClick:xe},cn(s.value?"■ Stop":"▶ Tour"),3)]),i.value?(Je(),gt("div",KE,cn(i.value),1)):Jt("",!0),x[1]||(x[1]=Le("div",{class:"ws3d-hint"},[ln("scroll to "),Le("b",null,"zoom"),ln(" · drag to "),Le("b",null,"orbit"),ln(" · "),Le("b",null,"⟳"),ln(" spins 360° round the wall · "),Le("b",null,"□"),ln(" expands a panel (and flies back) · "),Le("b",null,"ⓘ"),ln(" opens a pop-up beside it · double-click a title bar to face it · right-click a panel for its display menu · the look follows the Theme menu")],-1))],6))}}),JE=hi(ZE,[["__scopeId","data-v-ea5cbf51"]]),QE={class:"demo-bar"},eT={class:"demo-tabs"},tT={key:1,class:"demo-btns"},nT={key:2},iT={key:3},sT={key:4},rT={class:"demo-btns"},oT=["value"],aT={class:"tab-content"},lT={class:"tab-content"},cT={class:"tab-content"},uT={class:"tab-content"},fT={class:"tab-content"},hT={class:"tab-content"},dT={key:0,class:"stage-tab"},pT=720,mT=fi({__name:"App",setup(n){const e=Ae((()=>{const U=new URLSearchParams(location.search).get("tab");return["grid","workspace","stage3d","log","candle","wall","terminal","gauge"].includes(U??"")?U:"stage3d"})()),t=Ae(e.value==="stage3d"?"paper":"none"),i=it(()=>t.value!=="paper"),s=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],r=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(U,B){return+(Math.random()*(B-U)+U).toFixed(4)}function l(U){return U[Math.floor(Math.random()*U.length)]}function c(U){return U.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],m=Array.from({length:240},(U,B)=>{const ee=B%r.length,Ee=r[ee],he=o[ee],Te=l(s),Pe=u-Math.floor(Math.random()*30*24*36e5),Ve=Math.random()<.15,G=a(10,3e3),Ce=a(-8,22),de=+(Ce-.12).toFixed(4),Se=+(G*a(.2,2)).toFixed(2),Fe=Ve?null:Pe+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(Pe)),entry_timestamp:c(new Date(Pe)),exit_timestamp:Fe?c(new Date(Fe)):"",product:Ee,strategy:Te,exchange:he,status:Ve?"open":"closed",entry_price:G.toFixed(4),exit_price:Ve?"":a(G*.92,G*1.25).toFixed(4),pnl_pct:Ce.toFixed(4),net_pnl_pct:de.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Se.toFixed(2),reason:Ve?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),v=U=>B=>B.value!==""&&B.value!=null&&!isNaN(Number(B.value))?Number(B.value).toFixed(U):"",_=U=>U.value!==""&&U.value!=null&&!isNaN(Number(U.value))?Number(U.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(U){var Pe,Ve;const B=(Pe=U.data)==null?void 0:Pe.entry_timestamp,ee=(Ve=U.data)==null?void 0:Ve.exit_timestamp;if(!B||!ee)return"—";const Ee=new Date(ee).getTime()-new Date(B).getTime();if(Ee<0)return"—";const he=Math.floor(Ee/36e5),Te=Math.floor(Ee%36e5/6e4);return he>0?`${he}h ${Te}m`:`${Te}m`}const M=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:U=>U.data.entry_timestamp||U.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:U=>U.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:U=>U.data.status??"closed",cellStyle:U=>({color:U.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:U=>`${U} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:v(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:v(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:v(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:v(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:U=>Number(U).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:_,cellStyle:U=>({...p,color:Number(U.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:U=>`${Number(U).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:_,cellStyle:U=>({...p,color:Number(U.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:U=>`${Number(U).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:_,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:v(1),cellStyle:U=>({...p,color:Number(U.value)>65?"#e74c3c":Number(U.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:U=>Number(U).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:U=>(Number(U.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:U=>Number(U).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:U=>`${Number(U).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:U=>`${Number(U).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:U=>`${Number(U).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:U=>Number(U).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],w={resizable:!0,sortable:!0},g=Ae(null),C=Ae(25),T=Ae(!0),E=Ae(!0),D=Ae(!1),S=Ae(!1),b=Ae(-1),I=Ae([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),F=it(()=>b.value>0?"net long":b.value<0?"net short":"flat"),z=it(()=>b.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":b.value<0?"tilting short — a downtrend is developing.":b.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),X=Ae(.31),q=it(()=>{const U=X.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:U,min:0,max:.6,valueText:U.toFixed(2),tone:U<.15?"down":U<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function Y(){let U=b.value;for(;U===b.value;)U=Math.floor(Math.random()*9)-4;b.value=U,X.value=+(.03+Math.random()*.5).toFixed(2)}const te=Ae(typeof window<"u"?window.innerWidth:1200),V=it(()=>te.value<pT);function ie(){te.value=window.innerWidth}Ln(()=>window.addEventListener("resize",ie)),Kn(()=>window.removeEventListener("resize",ie)),je(V,U=>{U&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const k=Ae(!1),j=Ae(""),K=Ae("all"),ue=Ae(0),ne=Ae(!0),me=Ae(!1),ye=Ae(!1);je(e,U=>{U==="grid"&&ue.value++});function _e(U){g.value=U.api,window.__cathodeGridApi=U.api,U.api.setGridOption("rowData",m),K.value!=="all"&&He(K.value)}function Oe(U){var ee;const B=U.target.value;j.value=B,(ee=g.value)==null||ee.setGridOption("quickFilterText",B)}function He(U){var B,ee,Ee;K.value=U,U==="all"?(B=g.value)==null||B.setFilterModel(null):(ee=g.value)==null||ee.setFilterModel({status:{type:"equals",filter:U}}),(Ee=g.value)==null||Ee.onFilterChanged()}const We={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function Me(U,B){const Ee=Math.round(U*.62)-12,he=Ee+12*2,Te=U-he-12,Pe=Math.round(B*.62),Ve=Pe+12*2,G=B-Ve-12;return{trades:{x:12,y:12,w:Ee,h:Pe,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:he,y:12,w:Te,h:Pe,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:Ve,w:Ee,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:he,y:Ve,w:Te,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const L=Me(window.innerWidth,window.innerHeight-88),O=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const U=[],B=Date.now()-45e5;for(let ee=0;ee<140;ee++){const Ee=O[ee%O.length];U.push({ts:B+ee*32e3,text:Ee.text,level:Ee.level})}return U})();const R=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],fe=Ae([]),re=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],se=Ae([{level:"info",text:"CathodeTerminal demo"},...re]),ae=Ae(!1),xe={help:()=>re,echo:U=>({level:"info",text:U||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:U=>{const B=U.trim();return B?B==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:B==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${B}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:U=>{const B=U.trim()||"localhost",ee=[{level:"info",text:`PING ${B}: 56 data bytes`}];for(let Ee=0;Ee<4;Ee++){const he=(12+Math.random()*18).toFixed(1);ee.push({level:"success",text:`64 bytes from ${B}: icmp_seq=${Ee} ttl=64 time=${he} ms`})}return ee},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:U=>{const B=U.trim()||"moo",ee="─".repeat(Math.max(2,B.length+2));return[{level:"info",text:` ╭${ee}╮`},{level:"info",text:` │ ${B} │`},{level:"info",text:` ╰${ee}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const U=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:U[Math.floor(Math.random()*U.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function le(U){se.value=[...se.value,{level:"info",text:`→ ${U}`}];const B=U.trim();if(!B)return;if(B==="clear"){se.value=[];return}const ee=B.indexOf(" "),Ee=ee===-1?B:B.slice(0,ee),he=ee===-1?"":B.slice(ee+1),Te=xe[Ee];let Pe;Te?Pe=Te(he):Pe={level:"warn",text:`unknown command: ${Ee} — type 'help' for the demo vocabulary`},ae.value=!0,setTimeout(()=>{if(Pe!==null){const Ve=Array.isArray(Pe)?Pe:[Pe];se.value=[...se.value,...Ve]}ae.value=!1},180)}const x=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((U,B)=>{const ee=A(90+B*7%60),Ee=(ee[ee.length-1].close/ee[0].close-1)*100;return{id:U,title:U,badge:B>=12?"EQ":"₿",note:`${Ee>=0?"+":""}${Ee.toFixed(1)}%`,noteColor:Ee>=0?"#00bc8c":"#e74c3c",open:B%5===0,candles:ee}});function A(U){const B=[];let ee=6e4;const Ee=Date.now()-U*36e5;for(let he=0;he<U;he++){const Te=(Math.random()-.495)*ee*.012,Pe=ee,Ve=Math.max(1,ee+Te),G=Math.max(Pe,Ve)*(1+Math.random()*.005),Ce=Math.min(Pe,Ve)*(1-Math.random()*.005),de=Math.round(20+Math.random()*80);B.push({start:Ee+he*36e5,open:Pe,close:Ve,high:G,low:Ce,volume:de}),ee=Ve}return B}const N=Ae(A(300));function W(U,B){const ee=new Array(U.length).fill(NaN);let Ee=0;for(let he=0;he<U.length;he++)Ee+=U[he],he>=B&&(Ee-=U[he-B]),he+1>=B&&(ee[he]=Ee/B);return ee}function Z(U,B){const ee=new Array(U.length).fill(NaN);if(!U.length)return ee;const Ee=2/(B+1);let he=U[0];ee[0]=he;for(let Te=1;Te<U.length;Te++)he=U[Te]*Ee+he*(1-Ee),ee[Te]=he;for(let Te=0;Te<Math.min(B-1,U.length);Te++)ee[Te]=NaN;return ee}function we(U,B=20,ee=2){const Ee=W(U,B),he=new Array(U.length).fill(NaN),Te=new Array(U.length).fill(NaN);for(let Pe=B-1;Pe<U.length;Pe++){let Ve=0;for(let Ce=Pe-B+1;Ce<=Pe;Ce++){const de=U[Ce]-Ee[Pe];Ve+=de*de}const G=Math.sqrt(Ve/B);he[Pe]=Ee[Pe]+ee*G,Te[Pe]=Ee[Pe]-ee*G}return{upper:he,middle:Ee,lower:Te}}const pe=it(()=>{const U=N.value.map(ee=>ee.close),B=we(U,20,2);return[{kind:"band",upper:B.upper,middle:B.middle,lower:B.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:Z(U,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:Z(U,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),be=it(()=>{const U=N.value;if(U.length<130)return[];const B=ee=>U[ee];return[{timestamp:B(U.length-120).start,price:B(U.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:B(U.length-100).start,price:B(U.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:B(U.length-80).start,price:B(U.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:B(U.length-60).start,price:B(U.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:B(U.length-40).start,price:B(U.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:B(U.length-20).start,price:B(U.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const U=N.value,B=be.value;if(!U.length||!B.length)return[];const ee=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!ee)return[];const Ee=ee.width/(window.devicePixelRatio||1),he=ee.height/(window.devicePixelRatio||1),Te=8,Pe=56,Ve=8,G=22,Ce=8,de=Ee-Te-Pe,Se=Math.max(1,Math.floor(de/Ce)),Fe=Math.max(0,U.length-Se);let Ue=1/0,Qe=-1/0;for(let Ct=Fe;Ct<U.length;Ct++)U[Ct].low<Ue&&(Ue=U[Ct].low),U[Ct].high>Qe&&(Qe=U[Ct].high);const xt=(Qe-Ue)*.04;Ue-=xt,Qe+=xt;const It=Ve,lt=Ve+(he-Ve-G-4)*(1-.18),rn=[];for(const Ct of B){const rr=U[1].start-U[0].start;let Ei=-1;for(let H=0;H<U.length;H++)if(Math.abs(U[H].start-Ct.timestamp)<=rr*.5){Ei=H;break}if(Ei<Fe||Ei>=U.length)continue;const zn=Te+(Ei-Fe+.5)*Ce,ns=It+(1-(Ct.price-Ue)/(Qe-Ue))*(lt-It);rn.push({x:zn,y:ns,kind:Ct.kind,label:Ct.label||""})}return rn}});function ke(){const U=[],B=Date.now()-54e5;for(let ee=0;ee<320;ee++){const Ee=R[ee%R.length];U.push({ts:B+ee*16e3,text:Ee.text,level:Ee.level})}fe.value=U}return ke(),(U,B)=>(Je(),gt("div",{class:Wt(["demo-shell",{"cathode-light":!i.value,mobile:V.value}])},[Le("div",QE,[B[31]||(B[31]=Le("span",{class:"demo-title"},"⬛ CATHODE",-1)),Le("div",eT,[Le("button",{class:Wt(["tab-btn",{active:e.value==="stage3d"}]),onClick:B[0]||(B[0]=ee=>e.value="stage3d")}," 3D Workspace ",2),V.value?Jt("",!0):(Je(),gt("button",{key:0,class:Wt(["tab-btn",{active:e.value==="workspace"}]),onClick:B[1]||(B[1]=ee=>e.value="workspace")}," Workspace ",2)),Le("button",{class:Wt(["tab-btn",{active:e.value==="grid"}]),onClick:B[2]||(B[2]=ee=>e.value="grid")}," Grid ",2),Le("button",{class:Wt(["tab-btn",{active:e.value==="log"}]),onClick:B[3]||(B[3]=ee=>e.value="log")}," Log ",2),Le("button",{class:Wt(["tab-btn",{active:e.value==="wall"}]),onClick:B[4]||(B[4]=ee=>e.value="wall")}," WALL ",2),Le("button",{class:Wt(["tab-btn",{active:e.value==="candle"}]),onClick:B[5]||(B[5]=ee=>e.value="candle")}," Candle ",2),Le("button",{class:Wt(["tab-btn",{active:e.value==="terminal"}]),onClick:B[6]||(B[6]=ee=>e.value="terminal")}," Terminal ",2),Le("button",{class:Wt(["tab-btn",{active:e.value==="gauge"}]),onClick:B[7]||(B[7]=ee=>e.value="gauge")}," Gauge ",2)]),B[32]||(B[32]=Le("label",null,"Theme",-1)),Gt(Le("select",{"onUpdate:modelValue":B[8]||(B[8]=ee=>t.value=ee)},[...B[22]||(B[22]=[Le("option",{value:"none"},"Default (dark)",-1),Le("option",{value:"phosphor"},"Phosphor Green",-1),Le("option",{value:"amber"},"Amber",-1),Le("option",{value:"paper"},"Paper (light)",-1)])],512),[[u0,t.value]]),e.value!=="stage3d"?(Je(),gt(fn,{key:0},[Le("label",null,"Curve "+cn(C.value)+" · "+cn(C.value<0?"concave":C.value>0?"convex":"flat"),1),Gt(Le("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":B[9]||(B[9]=ee=>C.value=ee),style:{width:"110px"}},null,512),[[Np,C.value,void 0,{number:!0}]]),Le("label",null,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[10]||(B[10]=ee=>T.value=ee),"data-testid":"cf-bendfield"},null,512),[[os,T.value]]),B[23]||(B[23]=ln(" Field",-1))]),Le("label",null,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[11]||(B[11]=ee=>E.value=ee)},null,512),[[os,E.value]]),B[24]||(B[24]=ln(" Scanlines",-1))]),Le("label",null,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[12]||(B[12]=ee=>k.value=ee)},null,512),[[os,k.value]]),B[25]||(B[25]=ln(" Glow",-1))]),Le("label",null,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[13]||(B[13]=ee=>D.value=ee),"data-testid":"cf-magnify"},null,512),[[os,D.value]]),B[26]||(B[26]=ln(" Magnify ",-1))]),Le("label",null,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[14]||(B[14]=ee=>S.value=ee),"data-testid":"cf-show-loaders"},null,512),[[os,S.value]]),B[27]||(B[27]=ln(" Show loaders ",-1))])],64)):Jt("",!0),e.value==="gauge"?(Je(),gt("div",tT,[Le("button",{"data-testid":"cf-tilt",onClick:Y},"Tilt")])):Jt("",!0),e.value==="candle"?(Je(),gt("label",nT,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[15]||(B[15]=ee=>ne.value=ee),"data-testid":"cf-show-indicators"},null,512),[[os,ne.value]]),B[28]||(B[28]=ln(" Indicators ",-1))])):Jt("",!0),e.value==="candle"?(Je(),gt("label",iT,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[16]||(B[16]=ee=>me.value=ee),"data-testid":"cf-flat"},null,512),[[os,me.value]]),B[29]||(B[29]=ln(" Flat (no GL) ",-1))])):Jt("",!0),e.value==="candle"?(Je(),gt("label",sT,[Gt(Le("input",{type:"checkbox","onUpdate:modelValue":B[17]||(B[17]=ee=>ye.value=ee),"data-testid":"cf-compact"},null,512),[[os,ye.value]]),B[30]||(B[30]=ln(" Compact ",-1))])):Jt("",!0),B[33]||(B[33]=Le("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),gt(fn,{key:5},[Le("div",rT,[Le("button",{class:Wt({active:K.value==="all"}),onClick:B[18]||(B[18]=ee=>He("all"))},"All",2),Le("button",{class:Wt({active:K.value==="open"}),onClick:B[19]||(B[19]=ee=>He("open"))},"Open",2),Le("button",{class:Wt({active:K.value==="closed"}),onClick:B[20]||(B[20]=ee=>He("closed"))},"Closed",2)]),Le("input",{class:"demo-filter",placeholder:"Quick filter…",value:j.value,onInput:Oe},null,40,oT)],64)):Jt("",!0)]),Gt(Le("div",aT,[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(ad,{key:ue.value,"column-defs":M,"default-col-def":w,"row-height":28,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,pagination:!0,"pagination-page-size":50,onGridReady:_e},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[ds,e.value==="grid"]]),Gt(Le("div",lT,[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(Cu,{key:1,entries:fe.value,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[ds,e.value==="log"]]),Gt(Le("div",cT,[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(ud,{key:`cf-${me.value}`,candles:N.value,overlays:ne.value?pe.value:[],markers:ne.value?be.value:[],theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,flat:me.value,compact:ye.value,magnify:D.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[ds,e.value==="candle"]]),Gt(Le("div",uT,[Rt(dE,{cells:yt(x),theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,"bend-field":T.value,onCellClick:B[21]||(B[21]=ee=>console.log("wall cell:",ee))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[ds,e.value==="wall"]]),Gt(Le("div",fT,[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(mE,{key:1,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,value:b.value,min:-6,max:6,stance:F.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:q.value,caption:z.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:I.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[ds,e.value==="gauge"]]),Gt(Le("div",hT,[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(fd,{key:1,entries:se.value,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,busy:ae.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[ds,e.value==="terminal"]]),e.value==="stage3d"?(Je(),gt("div",dT,[Rt(JE,{theme:t.value},null,8,["theme"])])):Jt("",!0),Gt(Rt(jw,{"storage-key":"cathode.demo.layout","initial-layout":yt(L),"container-titles":We},{default:ks(()=>[Rt(Ea,{id:"trades",title:"Trades",curvature:C.value,canvas:""},{default:ks(({resizeKey:ee})=>[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(ad,{key:ee,"column-defs":M,"default-col-def":w,"row-height":26,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,pagination:!0,"pagination-page-size":50,onGridReady:_e},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"chart",title:"Chart",curvature:C.value,canvas:""},{default:ks(({resizeKey:ee})=>[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(ud,{key:ee,candles:N.value,overlays:pe.value,markers:be.value,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"log",title:"Log",curvature:C.value,canvas:""},{default:ks(()=>[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(Cu,{key:1,entries:fe.value,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"terminal",title:"Terminal",curvature:C.value,canvas:""},{default:ks(()=>[S.value?(Je(),Ft(Ui,{key:0,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ft(fd,{key:1,entries:se.value,theme:t.value,curvature:C.value,scanlines:E.value,glow:k.value,magnify:D.value,busy:ae.value,prompt:"→ ",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[ds,e.value==="workspace"]])],2))}}),gT=hi(mT,[["__scopeId","data-v-bdd27823"]]);g0(gT).mount("#app");
