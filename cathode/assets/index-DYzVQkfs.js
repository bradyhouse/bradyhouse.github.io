var Gm=Object.defineProperty;var Wm=(n,e,t)=>e in n?Gm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>Wm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},Dr=[],Si=()=>{},bd=()=>!1,al=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ll=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Iu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xm=Object.prototype.hasOwnProperty,mt=(n,e)=>Xm.call(n,e),Ze=Array.isArray,Lr=n=>Ho(n)==="[object Map]",Jr=n=>Ho(n)==="[object Set]",gf=n=>Ho(n)==="[object Date]",st=n=>typeof n=="function",Ot=n=>typeof n=="string",oi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",wd=n=>(vt(n)||st(n))&&st(n.then)&&st(n.catch),Ed=Object.prototype.toString,Ho=n=>Ed.call(n),Ym=n=>Ho(n).slice(8,-1),Td=n=>Ho(n)==="[object Object]",Uu=n=>Ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mo=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$m=/-\w/g,ni=cl(n=>n.replace($m,e=>e.slice(1).toUpperCase())),qm=/\B([A-Z])/g,Es=cl(n=>n.replace(qm,"-$1").toLowerCase()),Ad=cl(n=>n.charAt(0).toUpperCase()+n.slice(1)),wl=cl(n=>n?`on${Ad(n)}`:""),Mi=(n,e)=>!Object.is(n,e),Ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ul=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Km=n=>{const e=Ot(n)?Number(n):NaN;return isNaN(e)?n:e};let vf;const fl=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function On(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ot(i)?Qm(i):On(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ot(n)||vt(n))return n}const jm=/;(?![^(]*\))/g,Zm=/:([^]+)/,Jm=/\/\*[^]*?\*\//g;function Qm(n){const e={};return n.replace(Jm,"").split(jm).forEach(t=>{if(t){const i=t.split(Zm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Gt(n){let e="";if(Ot(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Gt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const eg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tg=Lu(eg);function Rd(n){return!!n||n===""}function ng(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Qr(n[i],e[i]);return t}function Qr(n,e){if(n===e)return!0;let t=gf(n),i=gf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=oi(n),i=oi(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?ng(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qr(n[o],e[o]))return!1}}return String(n)===String(e)}function Fu(n,e){return n.findIndex(t=>Qr(t,e))}const Pd=n=>!!(n&&n.__v_isRef===!0),xn=n=>Ot(n)?n:n==null?"":Ze(n)||vt(n)&&(n.toString===Ed||!st(n.toString))?Pd(n)?xn(n.value):JSON.stringify(n,Dd,2):String(n),Dd=(n,e)=>Pd(e)?Dd(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[El(i,r)+" =>"]=s,t),{})}:Jr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>El(t))}:oi(e)?El(e):vt(e)&&!Ze(e)&&!Td(e)?String(e):e,El=(n,e="")=>{var t;return oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let An;class Ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=An;try{return An=this,e()}finally{An=t}}}on(){++this._on===1&&(this.prevScope=An,An=this)}off(){this._on>0&&--this._on===0&&(An=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hl(n){return new Ld(n)}function ig(){return An}let Et;const Tl=new WeakSet;class Id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tl.has(this)&&(Tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),Nd(this);const e=Et,t=ii;Et=this,ii=!0;try{return this.fn()}finally{Od(this),Et=e,ii=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bc(this)&&this.run()}get dirty(){return bc(this)}}let Ud=0,So,bo;function Fd(n,e=!1){if(n.flags|=8,e){n.next=bo,bo=n;return}n.next=So,So=n}function Nu(){Ud++}function Ou(){if(--Ud>0)return;if(bo){let e=bo;for(bo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;So;){let e=So;for(So=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Nd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Od(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bu(i),sg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function bc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Po)||(n.globalVersion=Po,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bc(n))))return;n.flags|=2;const e=n.dep,t=Et,i=ii;Et=n,ii=!0;try{Nd(n);const s=n.fn(n._value);(e.version===0||Mi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,ii=i,Od(n),n.flags&=-3}}function Bu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ii=!0;const kd=[];function $i(){kd.push(ii),ii=!1}function qi(){const n=kd.pop();ii=n===void 0?!0:n}function _f(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Po=0;class rg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ku{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!ii||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new rg(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Po++,this.notify(e)}notify(e){Nu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ou()}}}function zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wc=new WeakMap,Ys=Symbol(""),Ec=Symbol(""),Do=Symbol("");function cn(n,e,t){if(ii&&Et){let i=wc.get(n);i||wc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ku),s.map=i,s.key=t),s.track()}}function ki(n,e,t,i,s,r){const o=wc.get(n);if(!o){Po++;return}const a=l=>{l&&l.trigger()};if(Nu(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&Uu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Do||!oi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Do)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ys)),Lr(n)&&a(o.get(Ec)));break;case"delete":l||(a(o.get(Ys)),Lr(n)&&a(o.get(Ec)));break;case"set":Lr(n)&&a(o.get(Ys));break}}Ou()}function or(n){const e=ft(n);return e===n?e:(cn(e,"iterate",Do),Yn(n)?e:e.map(ai))}function dl(n){return cn(n=ft(n),"iterate",Do),n}function vi(n,e){return Ki(n)?Hr($s(n)?ai(e):e):ai(e)}const og={__proto__:null,[Symbol.iterator](){return Al(this,Symbol.iterator,n=>vi(this,n))},concat(...n){return or(this).concat(...n.map(e=>Ze(e)?or(e):e))},entries(){return Al(this,"entries",n=>(n[1]=vi(this,n[1]),n))},every(n,e){return Ai(this,"every",n,e,void 0,arguments)},filter(n,e){return Ai(this,"filter",n,e,t=>t.map(i=>vi(this,i)),arguments)},find(n,e){return Ai(this,"find",n,e,t=>vi(this,t),arguments)},findIndex(n,e){return Ai(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ai(this,"findLast",n,e,t=>vi(this,t),arguments)},findLastIndex(n,e){return Ai(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ai(this,"forEach",n,e,void 0,arguments)},includes(...n){return Cl(this,"includes",n)},indexOf(...n){return Cl(this,"indexOf",n)},join(n){return or(this).join(n)},lastIndexOf(...n){return Cl(this,"lastIndexOf",n)},map(n,e){return Ai(this,"map",n,e,void 0,arguments)},pop(){return so(this,"pop")},push(...n){return so(this,"push",n)},reduce(n,...e){return xf(this,"reduce",n,e)},reduceRight(n,...e){return xf(this,"reduceRight",n,e)},shift(){return so(this,"shift")},some(n,e){return Ai(this,"some",n,e,void 0,arguments)},splice(...n){return so(this,"splice",n)},toReversed(){return or(this).toReversed()},toSorted(n){return or(this).toSorted(n)},toSpliced(...n){return or(this).toSpliced(...n)},unshift(...n){return so(this,"unshift",n)},values(){return Al(this,"values",n=>vi(this,n))}};function Al(n,e,t){const i=dl(n),s=i[e]();return i!==n&&!Yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ag=Array.prototype;function Ai(n,e,t,i,s,r){const o=dl(n),a=o!==n&&!Yn(n),l=o[e];if(l!==ag[e]){const f=l.apply(n,r);return a?ai(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,vi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function xf(n,e,t,i){const s=dl(n),r=s!==n&&!Yn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=vi(n,c)),t.call(this,c,vi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?vi(n,l):l}function Cl(n,e,t){const i=ft(n);cn(i,"iterate",Do);const s=i[e](...t);return(s===-1||s===!1)&&Vu(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function so(n,e,t=[]){$i(),Nu();const i=ft(n)[e].apply(n,t);return Ou(),qi(),i}const lg=Lu("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(oi));function cg(n){oi(n)||(n=String(n));const e=ft(this);return cn(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?xg:Yd:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=og[t]))return l;if(t==="hasOwnProperty")return cg}const a=Reflect.get(e,t,pn(e)?e:i);if((oi(t)?Hd.has(t):lg(t))||(s||cn(e,"get",t),r))return a;if(pn(a)){const l=o&&Uu(t)?a:a.value;return s&&vt(l)?Ac(l):l}return vt(a)?s?Ac(a):Ir(a):a}}class Gd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&Uu(t);if(!this._isShallow){const c=Ki(r);if(!Yn(i)&&!Ki(i)&&(r=ft(r),i=ft(i)),!o&&pn(r)&&!pn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,pn(e)?e:s);return e===ft(s)&&(a?Mi(i,r)&&ki(e,"set",t,i):ki(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ki(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!oi(t)||!Hd.has(t))&&cn(e,"has",t),i}ownKeys(e){return cn(e,"iterate",Ze(e)?"length":Ys),Reflect.ownKeys(e)}}class ug extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fg=new Gd,hg=new ug,dg=new Gd(!0);const Tc=n=>n,Ko=n=>Reflect.getPrototypeOf(n);function pg(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Lr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Tc:e?Hr:ai;return!e&&cn(r,"iterate",l?Ec:Ys),Wt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function jo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mg(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(Mi(s,a)&&cn(o,"get",s),cn(o,"get",a));const{has:l}=Ko(o),c=e?Tc:n?Hr:ai;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&cn(ft(s),"iterate",Ys),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(Mi(s,a)&&cn(o,"has",s),cn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Tc:n?Hr:ai;return!n&&cn(l,"iterate",Ys),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Wt(t,n?{add:jo("add"),set:jo("set"),delete:jo("delete"),clear:jo("clear")}:{add(s){const r=ft(this),o=Ko(r),a=ft(s),l=!e&&!Yn(s)&&!Ki(s)?a:s;return o.has.call(r,l)||Mi(s,l)&&o.has.call(r,s)||Mi(a,l)&&o.has.call(r,a)||(r.add(l),ki(r,"add",l,l)),this},set(s,r){!e&&!Yn(r)&&!Ki(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Ko(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Mi(r,u)&&ki(o,"set",s,r):ki(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Ko(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ki(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&ki(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pg(s,n,e)}),t}function zu(n,e){const t=mg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const gg={get:zu(!1,!1)},vg={get:zu(!1,!0)},_g={get:zu(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,Yd=new WeakMap,xg=new WeakMap;function yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mg(n){return n.__v_skip||!Object.isExtensible(n)?0:yg(Ym(n))}function Ir(n){return Ki(n)?n:Hu(n,!1,fg,gg,Wd)}function pl(n){return Hu(n,!1,dg,vg,Xd)}function Ac(n){return Hu(n,!0,hg,_g,Yd)}function Hu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Mg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function $s(n){return Ki(n)?$s(n.__v_raw):!!(n&&n.__v_isReactive)}function Ki(n){return!!(n&&n.__v_isReadonly)}function Yn(n){return!!(n&&n.__v_isShallow)}function Vu(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function Sg(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Cd(n,"__v_skip",!0),n}const ai=n=>vt(n)?Ir(n):n,Hr=n=>vt(n)?Ac(n):n;function pn(n){return n?n.__v_isRef===!0:!1}function we(n){return bg(n,!1)}function bg(n,e){return pn(n)?n:new wg(n,e)}class wg{constructor(e,t){this.dep=new ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:ai(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Yn(e)||Ki(e);e=i?e:ft(e),Mi(e,t)&&(this._rawValue=e,this._value=i?e:ai(e),this.dep.trigger())}}function yt(n){return pn(n)?n.value:n}const Eg={get:(n,e,t)=>e==="__v_raw"?n:yt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return pn(s)&&!pn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function $d(n){return $s(n)?n:new Proxy(n,Eg)}class Tg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ag(n,e,t=!1){let i,s;return st(n)?i=n:(i=n.get,s=n.set),new Tg(i,s,t)}const Zo={},Wa=new WeakMap;let Os;function Cg(n,e=!1,t=Os){if(t){let i=Wa.get(t);i||Wa.set(t,i=[]),i.push(n)}}function Rg(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=g=>s?g:Yn(g)||s===!1||s===0?zi(g,1):zi(g);let u,f,h,m,v=!1,_=!1;if(pn(n)?(f=()=>n.value,v=Yn(n)):$s(n)?(f=()=>c(n),v=!0):Ze(n)?(_=!0,v=n.some(g=>$s(g)||Yn(g)),f=()=>n.map(g=>{if(pn(g))return g.value;if($s(g))return c(g);if(st(g))return l?l(g,2):g()})):st(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){$i();try{h()}finally{qi()}}const g=Os;Os=u;try{return l?l(n,3,[m]):n(m)}finally{Os=g}}:f=Si,e&&s){const g=f,R=s===!0?1/0:s;f=()=>zi(g(),R)}const p=ig(),d=()=>{u.stop(),p&&p.active&&Iu(p.effects,u)};if(r&&e){const g=e;e=(...R)=>{g(...R),d()}}let x=_?new Array(n.length).fill(Zo):Zo;const b=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const R=u.run();if(s||v||(_?R.some((A,T)=>Mi(A,x[T])):Mi(R,x))){h&&h();const A=Os;Os=u;try{const T=[R,x===Zo?void 0:_&&x[0]===Zo?[]:x,m];x=R,l?l(e,3,T):e(...T)}finally{Os=A}}}else u.run()};return a&&a(b),u=new Id(f),u.scheduler=o?()=>o(b,!1):b,m=g=>Cg(g,!1,u),h=u.onStop=()=>{const g=Wa.get(u);if(g){if(l)l(g,4);else for(const R of g)R();Wa.delete(u)}},e?i?b(!0):x=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function zi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,pn(n))zi(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)zi(n[i],e,t);else if(Jr(n)||Lr(n))n.forEach(i=>{zi(i,e,t)});else if(Td(n)){for(const i in n)zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(n,e,t,i){try{return i?n(...i):n()}catch(s){ml(s,e,t)}}function li(n,e,t,i){if(st(n)){const s=Vo(n,e,t,i);return s&&wd(s)&&s.catch(r=>{ml(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(li(n[r],e,t,i));return s}}function ml(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){$i(),Vo(r,null,10,[n,l,c]),qi();return}}Pg(n,t,s,i,o)}function Pg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const yn=[];let mi=-1;const Ur=[];let ps=null,Tr=0;const qd=Promise.resolve();let Xa=null;function mn(n){const e=Xa||qd;return n?e.then(this?n.bind(this):n):e}function Dg(n){let e=mi+1,t=yn.length;for(;e<t;){const i=e+t>>>1,s=yn[i],r=Lo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Gu(n){if(!(n.flags&1)){const e=Lo(n),t=yn[yn.length-1];!t||!(n.flags&2)&&e>=Lo(t)?yn.push(n):yn.splice(Dg(e),0,n),n.flags|=1,Kd()}}function Kd(){Xa||(Xa=qd.then(Zd))}function Lg(n){Ze(n)?Ur.push(...n):ps&&n.id===-1?ps.splice(Tr+1,0,n):n.flags&1||(Ur.push(n),n.flags|=1),Kd()}function yf(n,e,t=mi+1){for(;t<yn.length;t++){const i=yn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jd(n){if(Ur.length){const e=[...new Set(Ur)].sort((t,i)=>Lo(t)-Lo(i));if(Ur.length=0,ps){ps.push(...e);return}for(ps=e,Tr=0;Tr<ps.length;Tr++){const t=ps[Tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ps=null,Tr=0}}const Lo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(mi=0;mi<yn.length;mi++){const e=yn[mi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mi<yn.length;mi++){const e=yn[mi];e&&(e.flags&=-2)}mi=-1,yn.length=0,jd(),Xa=null,(yn.length||Ur.length)&&Zd()}}let dn=null,Jd=null;function Ya(n){const e=dn;return dn=n,Jd=n&&n.type.__scopeId||null,e}function ks(n,e=dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ka(-1);const r=Ya(e);let o;try{o=n(...s)}finally{Ya(r),i._d&&Ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vt(n,e){if(dn===null)return n;const t=yl(dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(st(r)&&(r={mounted:r,updated:r}),r.deep&&zi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function As(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&($i(),li(l,t,8,[n.el,a,n,e]),qi())}}function Cc(n,e){if(Mn){let t=Mn.provides;const i=Mn.parent&&Mn.parent.provides;i===t&&(t=Mn.provides=Object.create(i)),t[n]=e}}function Gi(n,e,t=!1){const i=Rp();if(i||Nr){let s=Nr?Nr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&st(e)?e.call(i&&i.proxy):e}}const Ig=Symbol.for("v-scx"),Ug=()=>Gi(Ig);function je(n,e,t){return Qd(n,e,t)}function Qd(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Wt({},t),l=e&&i||!e&&r!=="post";let c;if(No){if(r==="sync"){const m=Ug();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Si,m.resume=Si,m.pause=Si,m}}const u=Mn;a.call=(m,v,_)=>li(m,u,v,_);let f=!1;r==="post"?a.scheduler=m=>{Tn(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Gu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Rg(n,e,a);return No&&(c?c.push(h):l&&h()),h}function Fg(n,e,t){const i=this.proxy,s=Ot(n)?n.includes(".")?ep(i,n):()=>i[n]:n.bind(i,i);let r;st(e)?r=e:(r=e.handler,t=e);const o=Go(this),a=Qd(s,r.bind(i),t);return o(),a}function ep(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Ng=Symbol("_vte"),tp=n=>n.__isTeleport,gi=Symbol("_leaveCb"),ro=Symbol("_enterCb");function Og(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln(()=>{n.isMounted=!0}),Wu(()=>{n.isUnmounting=!0}),n}const Hn=[Function,Array],np={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},ip=n=>{const e=n.subTree;return e.component?ip(e.component):e},Bg={name:"BaseTransition",props:np,setup(n,{slots:e}){const t=Rp(),i=Og();return()=>{const s=e.default&&op(e.default(),!0);if(!s||!s.length)return;const r=sp(s),o=ft(n),{mode:a}=o;if(i.isLeaving)return Rl(r);const l=Mf(r);if(!l)return Rl(r);let c=Rc(l,o,i,t,f=>c=f);l.type!==hn&&Io(l,c);let u=t.subTree&&Mf(t.subTree);if(u&&u.type!==hn&&!zs(u,l)&&ip(t).type!==hn){let f=Rc(u,o,i,t);if(Io(u,f),a==="out-in"&&l.type!==hn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Rl(r);a==="in-out"&&l.type!==hn?f.delayLeave=(h,m,v)=>{const _=rp(i,u);_[String(u.key)]=u,h[gi]=()=>{m(),h[gi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function sp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==hn){e=t;break}}return e}const kg=Bg;function rp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Rc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:x,onAppearCancelled:b}=e,g=String(n.key),R=rp(t,n),A=(y,S)=>{y&&li(y,i,9,S)},T=(y,S)=>{const U=S[1];A(y,S),Ze(y)?y.every(F=>F.length<=1)&&U():y.length<=1&&U()},I={mode:o,persisted:a,beforeEnter(y){let S=l;if(!t.isMounted)if(r)S=p||l;else return;y[gi]&&y[gi](!0);const U=R[g];U&&zs(n,U)&&U.el[gi]&&U.el[gi](),A(S,[y])},enter(y){if(R[g]===n)return;let S=c,U=u,F=f;if(!t.isMounted)if(r)S=d||c,U=x||u,F=b||f;else return;let B=!1;y[ro]=K=>{B||(B=!0,K?A(F,[y]):A(U,[y]),I.delayedLeave&&I.delayedLeave(),y[ro]=void 0)};const X=y[ro].bind(null,!1);S?T(S,[y,X]):X()},leave(y,S){const U=String(n.key);if(y[ro]&&y[ro](!0),t.isUnmounting)return S();A(h,[y]);let F=!1;y[gi]=X=>{F||(F=!0,S(),X?A(_,[y]):A(v,[y]),y[gi]=void 0,R[U]===n&&delete R[U])};const B=y[gi].bind(null,!1);R[U]=n,m?T(m,[y,B]):B()},clone(y){const S=Rc(y,e,t,i,s);return s&&s(S),S}};return I}function Rl(n){if(gl(n))return n=bs(n),n.children=null,n}function Mf(n){if(!gl(n))return tp(n.type)&&n.children?sp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&st(t.default))return t.default()}}function Io(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Io(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function op(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===un?(o.patchFlag&128&&s++,i=i.concat(op(o.children,e,a))):(e||o.type!==hn)&&i.push(a!=null?bs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ui(n,e){return st(n)?Wt({name:n.name},e,{setup:n}):n}function ap(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const $a=new WeakMap;function wo(n,e,t,i,s=!1){if(Ze(n)){n.forEach((_,p)=>wo(_,e&&(Ze(e)?e[p]:e),t,i,s));return}if(Fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?yl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,f=a.setupState,h=ft(f),m=f===bt?bd:_=>Sf(u,_)?!1:mt(h,_),v=(_,p)=>!(p&&Sf(u,p));if(c!=null&&c!==l){if(bf(e),Ot(c))u[c]=null,m(c)&&(f[c]=null);else if(pn(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(st(l))Vo(l,a,12,[o,u]);else{const _=Ot(l),p=pn(l);if(_||p){const d=()=>{if(n.f){const x=_?m(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Ze(x)&&Iu(x,r);else if(Ze(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],m(l)&&(f[l]=u[l]);else{const b=[r];v(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,m(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{d(),$a.delete(n)};x.id=-1,$a.set(n,x),Tn(x,t)}else bf(n),d()}}}function bf(n){const e=$a.get(n);e&&(e.flags|=8,$a.delete(n))}fl().requestIdleCallback;fl().cancelIdleCallback;const Fr=n=>!!n.type.__asyncLoader,gl=n=>n.type.__isKeepAlive;function zg(n,e){lp(n,"a",e)}function Hg(n,e){lp(n,"da",e)}function lp(n,e,t=Mn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(vl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)gl(s.parent.vnode)&&Vg(i,e,t,s),s=s.parent}}function Vg(n,e,t,i){const s=vl(e,n,i,!0);qn(()=>{Iu(i[e],s)},t)}function vl(n,e,t=Mn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{$i();const a=Go(t),l=li(e,t,n,o);return a(),qi(),l});return i?s.unshift(r):s.push(r),r}}const es=n=>(e,t=Mn)=>{(!No||n==="sp")&&vl(n,(...i)=>e(...i),t)},Gg=es("bm"),Ln=es("m"),Wg=es("bu"),Xg=es("u"),Wu=es("bum"),qn=es("um"),Yg=es("sp"),$g=es("rtg"),qg=es("rtc");function Kg(n,e=Mn){vl("ec",n,e)}const jg=Symbol.for("v-ndc");function Zg(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Ot(n)){const a=o&&$s(n);let l=!1,c=!1;a&&(l=!Yn(n),c=Ki(n),n=dl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Hr(ai(n[u])):ai(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Pc(n,e,t={},i,s){if(dn.ce||dn.parent&&Fr(dn.parent)&&dn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Ut(un,null,[Rt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Je();const o=r&&cp(r(t)),a=t.key||o&&o.key,l=Ut(un,{key:(a&&!oi(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function cp(n){return n.some(e=>Fo(e)?!(e.type===hn||e.type===un&&!cp(e.children)):!0)?n:null}const Dc=n=>n?Pp(n)?yl(n):Dc(n.parent):null,Eo=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Dc(n.parent),$root:n=>Dc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fp(n),$forceUpdate:n=>n.f||(n.f=()=>{Gu(n.update)}),$nextTick:n=>n.n||(n.n=mn.bind(n.proxy)),$watch:n=>Fg.bind(n)}),Pl=(n,e)=>n!==bt&&!n.__isScriptSetup&&mt(n,e),Jg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Pl(i,e))return o[e]=1,i[e];if(s!==bt&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==bt&&mt(t,e))return o[e]=4,t[e];Lc&&(o[e]=0)}}const c=Eo[e];let u,f;if(c)return e==="$attrs"&&cn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Pl(s,e)?(s[e]=t,!0):i!==bt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==bt&&a[0]!=="$"&&mt(n,a)||Pl(e,a)||mt(r,a)||mt(i,a)||mt(Eo,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Lc=!0;function Qg(n){const e=fp(n),t=n.proxy,i=n.ctx;Lc=!1,e.beforeCreate&&Ef(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:x,destroyed:b,unmounted:g,render:R,renderTracked:A,renderTriggered:T,errorCaptured:I,serverPrefetch:y,expose:S,inheritAttrs:U,components:F,directives:B,filters:X}=e;if(c&&ev(c,i,null),o)for(const te in o){const V=o[te];st(V)&&(i[te]=V.bind(t))}if(s){const te=s.call(t,t);vt(te)&&(n.data=Ir(te))}if(Lc=!0,r)for(const te in r){const V=r[te],re=st(V)?V.bind(t,t):st(V.get)?V.get.bind(t,t):Si,O=!st(V)&&st(V.set)?V.set.bind(t):Si,j=it({get:re,set:O});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>j.value,set:Z=>j.value=Z})}if(a)for(const te in a)up(a[te],i,t,te);if(l){const te=st(l)?l.call(t):l;Reflect.ownKeys(te).forEach(V=>{Cc(V,te[V])})}u&&Ef(u,n,"c");function $(te,V){Ze(V)?V.forEach(re=>te(re.bind(t))):V&&te(V.bind(t))}if($(Gg,f),$(Ln,h),$(Wg,m),$(Xg,v),$(zg,_),$(Hg,p),$(Kg,I),$(qg,A),$($g,T),$(Wu,x),$(qn,g),$(Yg,y),Ze(S))if(S.length){const te=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(te,V,{get:()=>t[V],set:re=>t[V]=re,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Si&&(n.render=R),U!=null&&(n.inheritAttrs=U),F&&(n.components=F),B&&(n.directives=B),y&&ap(n)}function ev(n,e,t=Si){Ze(n)&&(n=Ic(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Gi(s.from||i,s.default,!0):r=Gi(s.from||i):r=Gi(s),pn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ef(n,e,t){li(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function up(n,e,t,i){let s=i.includes(".")?ep(t,i):()=>t[i];if(Ot(n)){const r=e[n];st(r)&&je(s,r)}else if(st(n))je(s,n.bind(t));else if(vt(n))if(Ze(n))n.forEach(r=>up(r,e,t,i));else{const r=st(n.handler)?n.handler.bind(t):e[n.handler];st(r)&&je(s,r,n)}}function fp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qa(l,c,o,!0)),qa(l,e,o)),vt(e)&&r.set(e,l),l}function qa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qa(n,r,t,!0),s&&s.forEach(o=>qa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tv={data:Tf,props:Af,emits:Af,methods:_o,computed:_o,beforeCreate:vn,created:vn,beforeMount:vn,mounted:vn,beforeUpdate:vn,updated:vn,beforeDestroy:vn,beforeUnmount:vn,destroyed:vn,unmounted:vn,activated:vn,deactivated:vn,errorCaptured:vn,serverPrefetch:vn,components:_o,directives:_o,watch:iv,provide:Tf,inject:nv};function Tf(n,e){return e?n?function(){return Wt(st(n)?n.call(this,this):n,st(e)?e.call(this,this):e)}:e:n}function nv(n,e){return _o(Ic(n),Ic(e))}function Ic(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vn(n,e){return n?[...new Set([].concat(n,e))]:e}function _o(n,e){return n?Wt(Object.create(null),n,e):e}function Af(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:Wt(Object.create(null),wf(n),wf(e??{})):e}function iv(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=vn(n[i],e[i]);return t}function hp(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sv=0;function rv(n,e){return function(i,s=null){st(i)||(i=Wt({},i)),s!=null&&!vt(s)&&(s=null);const r=hp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:sv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ov,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...f)):st(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Rt(i,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,yl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Nr;Nr=c;try{return u()}finally{Nr=f}}};return c}}let Nr=null;const ov=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Es(e)}Modifiers`];function av(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&ov(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ot(u)?u.trim():u)),o.number&&(s=t.map(ul)));let a,l=i[a=wl(e)]||i[a=wl(ni(e))];!l&&r&&(l=i[a=wl(Es(e))]),l&&li(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(c,n,6,s)}}const lv=new WeakMap;function dp(n,e,t=!1){const i=t?lv:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!st(n)){const l=c=>{const u=dp(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Wt(o,r),vt(n)&&i.set(n,o),o)}function _l(n,e){return!n||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Es(e))||mt(n,e))}function Cf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:v,inheritAttrs:_}=n,p=Ya(n);let d,x;try{if(t.shapeFlag&4){const g=s||i,R=g;d=_i(c.call(R,g,u,f,m,h,v)),x=a}else{const g=e;d=_i(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),x=e.props?a:cv(a)}}catch(g){To.length=0,ml(g,n,1),d=Rt(hn)}let b=d;if(x&&_!==!1){const g=Object.keys(x),{shapeFlag:R}=b;g.length&&R&7&&(r&&g.some(ll)&&(x=uv(x,r)),b=bs(b,x,!1,!0))}return t.dirs&&(b=bs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Io(b,t.transition),d=b,Ya(p),d}const cv=n=>{let e;for(const t in n)(t==="class"||t==="style"||al(t))&&((e||(e={}))[t]=n[t]);return e},uv=(n,e)=>{const t={};for(const i in n)(!ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(pp(o,i,h)&&!_l(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rf(i,o,c):!0:!!o;return!1}function Rf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(pp(e,n,r)&&!_l(t,r))return!0}return!1}function pp(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Qr(i,s):i!==s}function hv({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const mp={},gp=()=>Object.create(mp),vp=n=>Object.getPrototypeOf(n)===mp;function dv(n,e,t,i=!1){const s={},r=gp();n.propsDefaults=Object.create(null),_p(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:pl(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function pv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_l(n.emitsOptions,h))continue;const m=e[h];if(l)if(mt(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const v=ni(h);s[v]=Uc(l,a,v,m,n,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{_p(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!mt(e,f)&&((u=Es(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Uc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&ki(n.attrs,"set","")}function _p(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mo(l))continue;const c=e[l];let u;s&&mt(s,u=ni(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:_l(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||bt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Uc(s,l,f,c[f],n,!mt(c,f))}}return o}function Uc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Go(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Es(t))&&(i=!0))}return i}const mv=new WeakMap;function xp(n,e,t=!1){const i=t?mv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!st(n)){const u=f=>{l=!0;const[h,m]=xp(f,e,!0);Wt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Dr),Dr;if(Ze(r))for(let u=0;u<r.length;u++){const f=ni(r[u]);Pf(f)&&(o[f]=bt)}else if(r)for(const u in r){const f=ni(u);if(Pf(f)){const h=r[u],m=o[f]=Ze(h)||st(h)?{type:h}:Wt({},h),v=m.type;let _=!1,p=!0;if(Ze(v))for(let d=0;d<v.length;++d){const x=v[d],b=st(x)&&x.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(p=!1)}else _=st(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||mt(m,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function Pf(n){return n[0]!=="$"&&!Mo(n)}const Xu=n=>n==="_"||n==="_ctx"||n==="$stable",Yu=n=>Ze(n)?n.map(_i):[_i(n)],gv=(n,e,t)=>{if(e._n)return e;const i=ks((...s)=>Yu(e(...s)),t);return i._c=!1,i},yp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Xu(s))continue;const r=n[s];if(st(r))e[s]=gv(s,r,i);else if(r!=null){const o=Yu(r);e[s]=()=>o}}},Mp=(n,e)=>{const t=Yu(e);n.slots.default=()=>t},Sp=(n,e,t)=>{for(const i in e)(t||!Xu(i))&&(n[i]=e[i])},vv=(n,e,t)=>{const i=n.slots=gp();if(n.vnode.shapeFlag&32){const s=e._;s?(Sp(i,e,t),t&&Cd(i,"_",s,!0)):yp(e,i)}else e&&Mp(n,e)},_v=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Sp(s,e,t):(r=!e.$stable,yp(e,s)),o=e}else e&&(Mp(n,e),o={default:1});if(r)for(const a in s)!Xu(a)&&o[a]==null&&delete s[a]},Tn=bv;function xv(n){return yv(n)}function yv(n,e){const t=fl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Si,insertStaticContent:v}=n,_=(L,P,w,se=null,G=null,J=null,ae=void 0,pe=null,le=!!P.dynamicChildren)=>{if(L===P)return;L&&!zs(L,P)&&(se=ve(L),Z(L,G,J,!0),L=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:E,ref:M,shapeFlag:C}=P;switch(E){case xl:p(L,P,w,se);break;case hn:d(L,P,w,se);break;case Ll:L==null&&x(P,w,se,ae);break;case un:F(L,P,w,se,G,J,ae,pe,le);break;default:C&1?R(L,P,w,se,G,J,ae,pe,le):C&6?B(L,P,w,se,G,J,ae,pe,le):(C&64||C&128)&&E.process(L,P,w,se,G,J,ae,pe,le,He)}M!=null&&G?wo(M,L&&L.ref,J,P||L,!P):M==null&&L&&L.ref!=null&&wo(L.ref,null,J,L,!0)},p=(L,P,w,se)=>{if(L==null)i(P.el=a(P.children),w,se);else{const G=P.el=L.el;P.children!==L.children&&c(G,P.children)}},d=(L,P,w,se)=>{L==null?i(P.el=l(P.children||""),w,se):P.el=L.el},x=(L,P,w,se)=>{[L.el,L.anchor]=v(L.children,P,w,se,L.el,L.anchor)},b=({el:L,anchor:P},w,se)=>{let G;for(;L&&L!==P;)G=h(L),i(L,w,se),L=G;i(P,w,se)},g=({el:L,anchor:P})=>{let w;for(;L&&L!==P;)w=h(L),s(L),L=w;s(P)},R=(L,P,w,se,G,J,ae,pe,le)=>{if(P.type==="svg"?ae="svg":P.type==="math"&&(ae="mathml"),L==null)A(P,w,se,G,J,ae,pe,le);else{const E=L.el&&L.el._isVueCE?L.el:null;try{E&&E._beginPatch(),y(L,P,G,J,ae,pe,le)}finally{E&&E._endPatch()}}},A=(L,P,w,se,G,J,ae,pe)=>{let le,E;const{props:M,shapeFlag:C,transition:H,dirs:Y}=L;if(le=L.el=o(L.type,J,M&&M.is,M),C&8?u(le,L.children):C&16&&I(L.children,le,null,se,G,Dl(L,J),ae,pe),Y&&As(L,null,se,"created"),T(le,L,L.scopeId,ae,se),M){for(const be in M)be!=="value"&&!Mo(be)&&r(le,be,null,M[be],J,se);"value"in M&&r(le,"value",null,M.value,J),(E=M.onVnodeBeforeMount)&&di(E,se,L)}Y&&As(L,null,se,"beforeMount");const ne=Mv(G,H);ne&&H.beforeEnter(le),i(le,P,w),((E=M&&M.onVnodeMounted)||ne||Y)&&Tn(()=>{try{E&&di(E,se,L),ne&&H.enter(le),Y&&As(L,null,se,"mounted")}finally{}},G)},T=(L,P,w,se,G)=>{if(w&&m(L,w),se)for(let J=0;J<se.length;J++)m(L,se[J]);if(G){let J=G.subTree;if(P===J||Tp(J.type)&&(J.ssContent===P||J.ssFallback===P)){const ae=G.vnode;T(L,ae,ae.scopeId,ae.slotScopeIds,G.parent)}}},I=(L,P,w,se,G,J,ae,pe,le=0)=>{for(let E=le;E<L.length;E++){const M=L[E]=pe?Bi(L[E]):_i(L[E]);_(null,M,P,w,se,G,J,ae,pe)}},y=(L,P,w,se,G,J,ae)=>{const pe=P.el=L.el;let{patchFlag:le,dynamicChildren:E,dirs:M}=P;le|=L.patchFlag&16;const C=L.props||bt,H=P.props||bt;let Y;if(w&&Cs(w,!1),(Y=H.onVnodeBeforeUpdate)&&di(Y,w,P,L),M&&As(P,L,w,"beforeUpdate"),w&&Cs(w,!0),(C.innerHTML&&H.innerHTML==null||C.textContent&&H.textContent==null)&&u(pe,""),E?S(L.dynamicChildren,E,pe,w,se,Dl(P,G),J):ae||V(L,P,pe,null,w,se,Dl(P,G),J,!1),le>0){if(le&16)U(pe,C,H,w,G);else if(le&2&&C.class!==H.class&&r(pe,"class",null,H.class,G),le&4&&r(pe,"style",C.style,H.style,G),le&8){const ne=P.dynamicProps;for(let be=0;be<ne.length;be++){const me=ne[be],Ee=C[me],Ge=H[me];(Ge!==Ee||me==="value")&&r(pe,me,Ee,Ge,G,w)}}le&1&&L.children!==P.children&&u(pe,P.children)}else!ae&&E==null&&U(pe,C,H,w,G);((Y=H.onVnodeUpdated)||M)&&Tn(()=>{Y&&di(Y,w,P,L),M&&As(P,L,w,"updated")},se)},S=(L,P,w,se,G,J,ae)=>{for(let pe=0;pe<P.length;pe++){const le=L[pe],E=P[pe],M=le.el&&(le.type===un||!zs(le,E)||le.shapeFlag&198)?f(le.el):w;_(le,E,M,null,se,G,J,ae,!0)}},U=(L,P,w,se,G)=>{if(P!==w){if(P!==bt)for(const J in P)!Mo(J)&&!(J in w)&&r(L,J,P[J],null,G,se);for(const J in w){if(Mo(J))continue;const ae=w[J],pe=P[J];ae!==pe&&J!=="value"&&r(L,J,pe,ae,G,se)}"value"in w&&r(L,"value",P.value,w.value,G)}},F=(L,P,w,se,G,J,ae,pe,le)=>{const E=P.el=L?L.el:a(""),M=P.anchor=L?L.anchor:a("");let{patchFlag:C,dynamicChildren:H,slotScopeIds:Y}=P;Y&&(pe=pe?pe.concat(Y):Y),L==null?(i(E,w,se),i(M,w,se),I(P.children||[],w,M,G,J,ae,pe,le)):C>0&&C&64&&H&&L.dynamicChildren&&L.dynamicChildren.length===H.length?(S(L.dynamicChildren,H,w,G,J,ae,pe),(P.key!=null||G&&P===G.subTree)&&bp(L,P,!0)):V(L,P,w,M,G,J,ae,pe,le)},B=(L,P,w,se,G,J,ae,pe,le)=>{P.slotScopeIds=pe,L==null?P.shapeFlag&512?G.ctx.activate(P,w,se,ae,le):X(P,w,se,G,J,ae,le):K(L,P,le)},X=(L,P,w,se,G,J,ae)=>{const pe=L.component=Pv(L,se,G);if(gl(L)&&(pe.ctx.renderer=He),Dv(pe,!1,ae),pe.asyncDep){if(G&&G.registerDep(pe,$,ae),!L.el){const le=pe.subTree=Rt(hn);d(null,le,P,w),L.placeholder=le.el}}else $(pe,L,P,w,G,J,ae)},K=(L,P,w)=>{const se=P.component=L.component;if(fv(L,P,w))if(se.asyncDep&&!se.asyncResolved){te(se,P,w);return}else se.next=P,se.update();else P.el=L.el,se.vnode=P},$=(L,P,w,se,G,J,ae)=>{const pe=()=>{if(L.isMounted){let{next:C,bu:H,u:Y,parent:ne,vnode:be}=L;{const z=wp(L);if(z){C&&(C.el=be.el,te(L,C,ae)),z.asyncDep.then(()=>{Tn(()=>{L.isUnmounted||E()},G)});return}}let me=C,Ee;Cs(L,!1),C?(C.el=be.el,te(L,C,ae)):C=be,H&&Ia(H),(Ee=C.props&&C.props.onVnodeBeforeUpdate)&&di(Ee,ne,C,be),Cs(L,!0);const Ge=Cf(L),N=L.subTree;L.subTree=Ge,_(N,Ge,f(N.el),ve(N),L,G,J),C.el=Ge.el,me===null&&hv(L,Ge.el),Y&&Tn(Y,G),(Ee=C.props&&C.props.onVnodeUpdated)&&Tn(()=>di(Ee,ne,C,be),G)}else{let C;const{el:H,props:Y}=P,{bm:ne,m:be,parent:me,root:Ee,type:Ge}=L,N=Fr(P);Cs(L,!1),ne&&Ia(ne),!N&&(C=Y&&Y.onVnodeBeforeMount)&&di(C,me,P),Cs(L,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(Ge,L.parent?L.parent.type:void 0);const z=L.subTree=Cf(L);_(null,z,w,se,L,G,J),P.el=z.el}if(be&&Tn(be,G),!N&&(C=Y&&Y.onVnodeMounted)){const z=P;Tn(()=>di(C,me,z),G)}(P.shapeFlag&256||me&&Fr(me.vnode)&&me.vnode.shapeFlag&256)&&L.a&&Tn(L.a,G),L.isMounted=!0,P=w=se=null}};L.scope.on();const le=L.effect=new Id(pe);L.scope.off();const E=L.update=le.run.bind(le),M=L.job=le.runIfDirty.bind(le);M.i=L,M.id=L.uid,le.scheduler=()=>Gu(M),Cs(L,!0),E()},te=(L,P,w)=>{P.component=L;const se=L.vnode.props;L.vnode=P,L.next=null,pv(L,P.props,se,w),_v(L,P.children,w),$i(),yf(L),qi()},V=(L,P,w,se,G,J,ae,pe,le=!1)=>{const E=L&&L.children,M=L?L.shapeFlag:0,C=P.children,{patchFlag:H,shapeFlag:Y}=P;if(H>0){if(H&128){O(E,C,w,se,G,J,ae,pe,le);return}else if(H&256){re(E,C,w,se,G,J,ae,pe,le);return}}Y&8?(M&16&&xe(E,G,J),C!==E&&u(w,C)):M&16?Y&16?O(E,C,w,se,G,J,ae,pe,le):xe(E,G,J,!0):(M&8&&u(w,""),Y&16&&I(C,w,se,G,J,ae,pe,le))},re=(L,P,w,se,G,J,ae,pe,le)=>{L=L||Dr,P=P||Dr;const E=L.length,M=P.length,C=Math.min(E,M);let H;for(H=0;H<C;H++){const Y=P[H]=le?Bi(P[H]):_i(P[H]);_(L[H],Y,w,null,G,J,ae,pe,le)}E>M?xe(L,G,J,!0,!1,C):I(P,w,se,G,J,ae,pe,le,C)},O=(L,P,w,se,G,J,ae,pe,le)=>{let E=0;const M=P.length;let C=L.length-1,H=M-1;for(;E<=C&&E<=H;){const Y=L[E],ne=P[E]=le?Bi(P[E]):_i(P[E]);if(zs(Y,ne))_(Y,ne,w,null,G,J,ae,pe,le);else break;E++}for(;E<=C&&E<=H;){const Y=L[C],ne=P[H]=le?Bi(P[H]):_i(P[H]);if(zs(Y,ne))_(Y,ne,w,null,G,J,ae,pe,le);else break;C--,H--}if(E>C){if(E<=H){const Y=H+1,ne=Y<M?P[Y].el:se;for(;E<=H;)_(null,P[E]=le?Bi(P[E]):_i(P[E]),w,ne,G,J,ae,pe,le),E++}}else if(E>H)for(;E<=C;)Z(L[E],G,J,!0),E++;else{const Y=E,ne=E,be=new Map;for(E=ne;E<=H;E++){const Me=P[E]=le?Bi(P[E]):_i(P[E]);Me.key!=null&&be.set(Me.key,E)}let me,Ee=0;const Ge=H-ne+1;let N=!1,z=0;const oe=new Array(Ge);for(E=0;E<Ge;E++)oe[E]=0;for(E=Y;E<=C;E++){const Me=L[E];if(Ee>=Ge){Z(Me,G,J,!0);continue}let Ne;if(Me.key!=null)Ne=be.get(Me.key);else for(me=ne;me<=H;me++)if(oe[me-ne]===0&&zs(Me,P[me])){Ne=me;break}Ne===void 0?Z(Me,G,J,!0):(oe[Ne-ne]=E+1,Ne>=z?z=Ne:N=!0,_(Me,P[Ne],w,null,G,J,ae,pe,le),Ee++)}const Te=N?Sv(oe):Dr;for(me=Te.length-1,E=Ge-1;E>=0;E--){const Me=ne+E,Ne=P[Me],Le=P[Me+1],qe=Me+1<M?Le.el||Ep(Le):se;oe[E]===0?_(null,Ne,w,qe,G,J,ae,pe,le):N&&(me<0||E!==Te[me]?j(Ne,w,qe,2):me--)}}},j=(L,P,w,se,G=null)=>{const{el:J,type:ae,transition:pe,children:le,shapeFlag:E}=L;if(E&6){j(L.component.subTree,P,w,se);return}if(E&128){L.suspense.move(P,w,se);return}if(E&64){ae.move(L,P,w,He);return}if(ae===un){i(J,P,w);for(let C=0;C<le.length;C++)j(le[C],P,w,se);i(L.anchor,P,w);return}if(ae===Ll){b(L,P,w);return}if(se!==2&&E&1&&pe)if(se===0)pe.beforeEnter(J),i(J,P,w),Tn(()=>pe.enter(J),G);else{const{leave:C,delayLeave:H,afterLeave:Y}=pe,ne=()=>{L.ctx.isUnmounted?s(J):i(J,P,w)},be=()=>{J._isLeaving&&J[gi](!0),C(J,()=>{ne(),Y&&Y()})};H?H(J,ne,be):be()}else i(J,P,w)},Z=(L,P,w,se=!1,G=!1)=>{const{type:J,props:ae,ref:pe,children:le,dynamicChildren:E,shapeFlag:M,patchFlag:C,dirs:H,cacheIndex:Y,memo:ne}=L;if(C===-2&&(G=!1),pe!=null&&($i(),wo(pe,null,w,L,!0),qi()),Y!=null&&(P.renderCache[Y]=void 0),M&256){P.ctx.deactivate(L);return}const be=M&1&&H,me=!Fr(L);let Ee;if(me&&(Ee=ae&&ae.onVnodeBeforeUnmount)&&di(Ee,P,L),M&6)de(L.component,w,se);else{if(M&128){L.suspense.unmount(w,se);return}be&&As(L,null,P,"beforeUnmount"),M&64?L.type.remove(L,P,w,He,se):E&&!E.hasOnce&&(J!==un||C>0&&C&64)?xe(E,P,w,!1,!0):(J===un&&C&384||!G&&M&16)&&xe(le,P,w),se&&fe(L)}const Ge=ne!=null&&Y==null;(me&&(Ee=ae&&ae.onVnodeUnmounted)||be||Ge)&&Tn(()=>{Ee&&di(Ee,P,L),be&&As(L,null,P,"unmounted"),Ge&&(L.el=null)},w)},fe=L=>{const{type:P,el:w,anchor:se,transition:G}=L;if(P===un){ie(w,se);return}if(P===Ll){g(L);return}const J=()=>{s(w),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(L.shapeFlag&1&&G&&!G.persisted){const{leave:ae,delayLeave:pe}=G,le=()=>ae(w,J);pe?pe(L.el,J,le):le()}else J()},ie=(L,P)=>{let w;for(;L!==P;)w=h(L),s(L),L=w;s(P)},de=(L,P,w)=>{const{bum:se,scope:G,job:J,subTree:ae,um:pe,m:le,a:E}=L;Df(le),Df(E),se&&Ia(se),G.stop(),J&&(J.flags|=8,Z(ae,L,P,w)),pe&&Tn(pe,P),Tn(()=>{L.isUnmounted=!0},P)},xe=(L,P,w,se=!1,G=!1,J=0)=>{for(let ae=J;ae<L.length;ae++)Z(L[ae],P,w,se,G)},ve=L=>{if(L.shapeFlag&6)return ve(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const P=h(L.anchor||L.el),w=P&&P[Ng];return w?h(w):P};let Be=!1;const ze=(L,P,w)=>{let se;L==null?P._vnode&&(Z(P._vnode,null,null,!0),se=P._vnode.component):_(P._vnode||null,L,P,null,null,null,w),P._vnode=L,Be||(Be=!0,yf(se),jd(),Be=!1)},He={p:_,um:Z,m:j,r:fe,mt:X,mc:I,pc:V,pbc:S,n:ve,o:n};return{render:ze,hydrate:void 0,createApp:rv(ze)}}function Dl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Cs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Mv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bp(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&bp(o,a)),a.type===xl&&(a.patchFlag===-1&&(a=s[r]=Bi(a)),a.el=o.el),a.type===hn&&!a.el&&(a.el=o.el)}}function Sv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function wp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wp(e)}function Df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ep(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ep(e.subTree):null}const Tp=n=>n.__isSuspense;function bv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):Lg(n)}const un=Symbol.for("v-fgt"),xl=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Ll=Symbol.for("v-stc"),To=[];let Bn=null;function Je(n=!1){To.push(Bn=n?null:[])}function wv(){To.pop(),Bn=To[To.length-1]||null}let Uo=1;function Ka(n,e=!1){Uo+=n,n<0&&Bn&&e&&(Bn.hasOnce=!0)}function Ap(n){return n.dynamicChildren=Uo>0?Bn||Dr:null,wv(),Uo>0&&Bn&&Bn.push(n),n}function gt(n,e,t,i,s,r){return Ap(Pe(n,e,t,i,s,r,!0))}function Ut(n,e,t,i,s){return Ap(Rt(n,e,t,i,s,!0))}function Fo(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Cp=({key:n})=>n??null,Ua=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ot(n)||pn(n)||st(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function Pe(n,e=null,t=null,i=0,s=null,r=n===un?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cp(e),ref:e&&Ua(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?($u(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ot(t)?8:16),Uo>0&&!o&&Bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Bn.push(l),l}const Rt=Ev;function Ev(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===jg)&&(n=hn),Fo(n)){const a=bs(n,e,!0);return t&&$u(a,t),Uo>0&&!r&&Bn&&(a.shapeFlag&6?Bn[Bn.indexOf(n)]=a:Bn.push(a)),a.patchFlag=-2,a}if(Fv(n)&&(n=n.__vccOpts),e){e=Tv(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=Gt(a)),vt(l)&&(Vu(l)&&!Ze(l)&&(l=Wt({},l)),e.style=On(l))}const o=Ot(n)?1:Tp(n)?128:tp(n)?64:vt(n)?4:st(n)?2:0;return Pe(n,e,t,i,s,o,r,!0)}function Tv(n){return n?Vu(n)||vp(n)?Wt({},n):n:null}function bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Av(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Cp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(Ua(e)):[r,Ua(e)]:Ua(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bs(n.ssContent),ssFallback:n.ssFallback&&bs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Io(u,l.clone(u)),u}function ln(n=" ",e=0){return Rt(xl,null,n,e)}function jt(n="",e=!1){return e?(Je(),Ut(hn,null,n)):Rt(hn,null,n)}function _i(n){return n==null||typeof n=="boolean"?Rt(hn):Ze(n)?Rt(un,null,n.slice()):Fo(n)?Bi(n):Rt(xl,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bs(n)}function $u(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$u(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vp(e)?e._ctx=dn:s===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[ln(e)]):t=8);n.children=e,n.shapeFlag|=t}function Av(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Gt([e.class,i.class]));else if(s==="style")e.style=On([e.style,i.style]);else if(al(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ll(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function di(n,e,t,i=null){li(n,e,7,[t,i])}const Cv=hp();let Rv=0;function Pv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cv,r={uid:Rv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xp(i,s),emitsOptions:dp(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=av.bind(null,r),n.ce&&n.ce(r),r}let Mn=null;const Rp=()=>Mn||dn;let ja,Fc;{const n=fl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ja=e("__VUE_INSTANCE_SETTERS__",t=>Mn=t),Fc=e("__VUE_SSR_SETTERS__",t=>No=t)}const Go=n=>{const e=Mn;return ja(n),n.scope.on(),()=>{n.scope.off(),ja(e)}},Lf=()=>{Mn&&Mn.scope.off(),ja(null)};function Pp(n){return n.vnode.shapeFlag&4}let No=!1;function Dv(n,e=!1,t=!1){e&&Fc(e);const{props:i,children:s}=n.vnode,r=Pp(n);dv(n,i,r,e),vv(n,s,t||e);const o=r?Lv(n,e):void 0;return e&&Fc(!1),o}function Lv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jg);const{setup:i}=t;if(i){$i();const s=n.setupContext=i.length>1?Uv(n):null,r=Go(n),o=Vo(i,n,0,[n.props,s]),a=wd(o);if(qi(),r(),(a||n.sp)&&!Fr(n)&&ap(n),a){if(o.then(Lf,Lf),e)return o.then(l=>{If(n,l)}).catch(l=>{ml(l,n,0)});n.asyncDep=o}else If(n,o)}else Dp(n)}function If(n,e,t){st(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=$d(e)),Dp(n)}function Dp(n,e,t){const i=n.type;n.render||(n.render=i.render||Si);{const s=Go(n);$i();try{Qg(n)}finally{qi(),s()}}}const Iv={get(n,e){return cn(n,"get",""),n[e]}};function Uv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Iv),slots:n.slots,emit:n.emit,expose:e}}function yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(Sg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Eo)return Eo[t](n)},has(e,t){return t in e||t in Eo}})):n.proxy}function Fv(n){return st(n)&&"__vccOpts"in n}const it=(n,e)=>Ag(n,e,No);function Nv(n,e,t){try{Ka(-1);const i=arguments.length;return i===2?vt(e)&&!Ze(e)?Fo(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Fo(t)&&(t=[t]),Rt(n,e,t))}finally{Ka(1)}}const Ov="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Uf=typeof window<"u"&&window.trustedTypes;if(Uf)try{Nc=Uf.createPolicy("vue",{createHTML:n=>n})}catch{}const Lp=Nc?n=>Nc.createHTML(n):n=>n,Bv="http://www.w3.org/2000/svg",kv="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Ff=Oi&&Oi.createElement("template"),zv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Oi.createElementNS(Bv,n):e==="mathml"?Oi.createElementNS(kv,n):t?Oi.createElement(n,{is:t}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ff.innerHTML=Lp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ff.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},rs="transition",oo="animation",Oo=Symbol("_vtc"),Ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hv=Wt({},np,Ip),Vv=n=>(n.displayName="Transition",n.props=Hv,n),Gv=Vv((n,{slots:e})=>Nv(kg,Wv(n),e)),Rs=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Nf=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Wv(n){const e={};for(const F in n)F in Ip||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=Xv(s),_=v&&v[0],p=v&&v[1],{onBeforeEnter:d,onEnter:x,onEnterCancelled:b,onLeave:g,onLeaveCancelled:R,onBeforeAppear:A=d,onAppear:T=x,onAppearCancelled:I=b}=e,y=(F,B,X,K)=>{F._enterCancelled=K,Ps(F,B?u:a),Ps(F,B?c:o),X&&X()},S=(F,B)=>{F._isLeaving=!1,Ps(F,f),Ps(F,m),Ps(F,h),B&&B()},U=F=>(B,X)=>{const K=F?T:x,$=()=>y(B,F,X);Rs(K,[B,$]),Of(()=>{Ps(B,F?l:r),Ci(B,F?u:a),Nf(K)||Bf(B,i,_,$)})};return Wt(e,{onBeforeEnter(F){Rs(d,[F]),Ci(F,r),Ci(F,o)},onBeforeAppear(F){Rs(A,[F]),Ci(F,l),Ci(F,c)},onEnter:U(!1),onAppear:U(!0),onLeave(F,B){F._isLeaving=!0;const X=()=>S(F,B);Ci(F,f),F._enterCancelled?(Ci(F,h),Hf(F)):(Hf(F),Ci(F,h)),Of(()=>{F._isLeaving&&(Ps(F,f),Ci(F,m),Nf(g)||Bf(F,i,p,X))}),Rs(g,[F,X])},onEnterCancelled(F){y(F,!1,void 0,!0),Rs(b,[F])},onAppearCancelled(F){y(F,!0,void 0,!0),Rs(I,[F])},onLeaveCancelled(F){S(F),Rs(R,[F])}})}function Xv(n){if(n==null)return null;if(vt(n))return[Il(n.enter),Il(n.leave)];{const e=Il(n);return[e,e]}}function Il(n){return Km(n)}function Ci(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Oo]||(n[Oo]=new Set)).add(e)}function Ps(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Oo];t&&(t.delete(e),t.size||(n[Oo]=void 0))}function Of(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Yv=0;function Bf(n,e,t,i){const s=n._endId=++Yv,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=$v(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function $v(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${rs}Delay`),r=i(`${rs}Duration`),o=kf(s,r),a=i(`${oo}Delay`),l=i(`${oo}Duration`),c=kf(a,l);let u=null,f=0,h=0;e===rs?o>0&&(u=rs,f=o,h=r.length):e===oo?c>0&&(u=oo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?rs:oo:null,h=u?u===rs?r.length:l.length:0);const m=u===rs&&/\b(?:transform|all)(?:,|$)/.test(i(`${rs}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function kf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>zf(t)+zf(n[i])))}function zf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hf(n){return(n?n.ownerDocument:document).body.offsetHeight}function qv(n,e,t){const i=n[Oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Za=Symbol("_vod"),Up=Symbol("_vsh"),ds={name:"show",beforeMount(n,{value:e},{transition:t}){n[Za]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ao(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ao(n,!0),i.enter(n)):i.leave(n,()=>{ao(n,!1)}):ao(n,e))},beforeUnmount(n,{value:e}){ao(n,e)}};function ao(n,e){n.style.display=e?n[Za]:"none",n[Up]=!e}const Kv=Symbol(""),jv=/(?:^|;)\s*display\s*:/;function Zv(n,e,t){const i=n.style,s=Ot(t);let r=!1;if(t&&!s){if(e)if(Ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fa(i,a,"")}else for(const o in e)t[o]==null&&Fa(i,o,"");for(const o in t)o==="display"&&(r=!0),Fa(i,o,t[o])}else if(s){if(e!==t){const o=i[Kv];o&&(t+=";"+o),i.cssText=t,r=jv.test(t)}}else e&&n.removeAttribute("style");Za in n&&(n[Za]=r?i.display:"",n[Up]&&(i.display="none"))}const Vf=/\s*!important$/;function Fa(n,e,t){if(Ze(t))t.forEach(i=>Fa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Jv(n,e);Vf.test(t)?n.setProperty(Es(i),t.replace(Vf,""),"important"):n[i]=t}}const Gf=["Webkit","Moz","ms"],Ul={};function Jv(n,e){const t=Ul[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return Ul[e]=i;i=Ad(i);for(let s=0;s<Gf.length;s++){const r=Gf[s]+i;if(r in n)return Ul[e]=r}return e}const Wf="http://www.w3.org/1999/xlink";function Xf(n,e,t,i,s,r=tg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wf,e.slice(6,e.length)):n.setAttributeNS(Wf,e,t):t==null||r&&!Rd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":oi(t)?String(t):t)}function Yf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Rd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function gs(n,e,t,i){n.addEventListener(e,t,i)}function Qv(n,e,t,i){n.removeEventListener(e,t,i)}const $f=Symbol("_vei");function e0(n,e,t,i,s=null){const r=n[$f]||(n[$f]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=t0(e);if(i){const c=r[e]=s0(i,s);gs(n,a,c,l)}else o&&(Qv(n,a,o,l),r[e]=void 0)}}const qf=/(?:Once|Passive|Capture)$/;function t0(n){let e;if(qf.test(n)){e={};let i;for(;i=n.match(qf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Es(n.slice(2)),e]}let Fl=0;const n0=Promise.resolve(),i0=()=>Fl||(n0.then(()=>Fl=0),Fl=Date.now());function s0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;li(r0(i,t.value),e,5,[i])};return t.value=n,t.attached=i0(),t}function r0(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Kf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,o0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?qv(n,i,o):e==="style"?Zv(n,t,i):al(e)?ll(e)||e0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a0(n,e,i,o))?(Yf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xf(n,e,i,o,r,e!=="value")):n._isVueCE&&(l0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ot(i)))?Yf(n,ni(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xf(n,e,i,o))};function a0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kf(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Ot(t)?!1:e in n}function l0(n,e){const t=n._def.props;if(!t)return!1;const i=ni(e);return Array.isArray(t)?t.some(s=>ni(s)===i):Object.keys(t).some(s=>ni(s)===i)}const Vr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>Ia(e,t):e};function c0(n){n.target.composing=!0}function jf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi=Symbol("_assign");function Zf(n,e,t){return e&&(n=n.trim()),t&&(n=ul(n)),n}const Fp={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Wi]=Vr(s);const r=i||s.props&&s.props.type==="number";gs(n,e?"change":"input",o=>{o.target.composing||n[Wi](Zf(n.value,t,r))}),(t||r)&&gs(n,"change",()=>{n.value=Zf(n.value,t,r)}),e||(gs(n,"compositionstart",c0),gs(n,"compositionend",jf),gs(n,"change",jf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Wi]=Vr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ul(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},os={deep:!0,created(n,e,t){n[Wi]=Vr(t),gs(n,"change",()=>{const i=n._modelValue,s=Bo(n),r=n.checked,o=n[Wi];if(Ze(i)){const a=Fu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Jr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Np(n,r))})},mounted:Jf,beforeUpdate(n,e,t){n[Wi]=Vr(t),Jf(n,e,t)}};function Jf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=Fu(e,i.props.value)>-1;else if(Jr(e))s=e.has(i.props.value);else{if(e===t)return;s=Qr(e,Np(n,!0))}n.checked!==s&&(n.checked=s)}const u0={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Jr(e);gs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ul(Bo(o)):Bo(o));n[Wi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,mn(()=>{n._assigning=!1})}),n[Wi]=Vr(i)},mounted(n,{value:e}){Qf(n,e)},beforeUpdate(n,e,t){n[Wi]=Vr(t)},updated(n,{value:e}){n._assigning||Qf(n,e)}};function Qf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Jr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Bo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Fu(e,a)>-1}else o.selected=e.has(a);else if(Qr(Bo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Bo(n){return"_value"in n?n._value:n.value}function Np(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const f0=["ctrl","shift","alt","meta"],h0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>f0.some(t=>n[`${t}Key`]&&!e.includes(t))},Gs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=h0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},d0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Es(s.key);if(e.some(o=>o===r||d0[o]===r))return n(s)})},p0=Wt({patchProp:o0},zv);let th;function m0(){return th||(th=xv(p0))}const g0=(...n)=>{const e=m0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_0(i);if(!s)return;const r=e._component;!st(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,v0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function v0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _0(n){return Ot(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="170",Or={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x0=0,nh=1,y0=2,Op=1,M0=2,Ni=3,ji=0,Pn=1,Wn=2,ys=0,Br=1,ih=2,sh=3,rh=4,S0=5,Hs=100,b0=101,w0=102,E0=103,T0=104,A0=200,C0=201,R0=202,P0=203,Oc=204,Bc=205,D0=206,L0=207,I0=208,U0=209,F0=210,N0=211,O0=212,B0=213,k0=214,kc=0,zc=1,Hc=2,Gr=3,Vc=4,Gc=5,Wc=6,Xc=7,Bp=0,z0=1,H0=2,Ms=0,V0=1,G0=2,W0=3,X0=4,Y0=5,$0=6,q0=7,kp=300,Wr=301,Xr=302,Yc=303,$c=304,Ml=306,qc=1e3,Ws=1001,Kc=1002,si=1003,K0=1004,Jo=1005,en=1006,Nl=1007,_s=1008,Zi=1009,zp=1010,Hp=1011,ko=1012,Ku=1013,js=1014,Hi=1015,Wo=1016,ju=1017,Zu=1018,Yr=1020,Vp=35902,Gp=1021,Wp=1022,ei=1023,Xp=1024,Yp=1025,kr=1026,$r=1027,$p=1028,Ju=1029,qp=1030,Qu=1031,ef=1033,Na=33776,Oa=33777,Ba=33778,ka=33779,jc=35840,Zc=35841,Jc=35842,Qc=35843,eu=36196,tu=37492,nu=37496,iu=37808,su=37809,ru=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,fu=37816,hu=37817,du=37818,pu=37819,mu=37820,gu=37821,za=36492,vu=36494,_u=36495,Kp=36283,xu=36284,yu=36285,Mu=36286,j0=3200,Z0=3201,J0=0,Q0=1,vs="",Zt="srgb",eo="srgb-linear",Sl="linear",Mt="srgb",ar=7680,oh=519,e_=512,t_=513,n_=514,jp=515,i_=516,s_=517,r_=518,o_=519,Su=35044,ah="300 es",Vi=2e3,Ja=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const Ao=Math.PI/180,zo=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function fn(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function a_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function l_(n,e,t){return n!==e?(t-n)/(e-n):0}function Co(n,e,t){return(1-t)*n+t*e}function c_(n,e,t,i){return Co(n,e,1-Math.exp(-t*i))}function u_(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function h_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p_(n,e){return n+Math.random()*(e-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(lh=n);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*Ao}function __(n){return n*zo}function x_(n){return(n&n-1)===0&&n!==0}function y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bu={DEG2RAD:Ao,RAD2DEG:zo,generateUUID:Xi,clamp:fn,euclideanModulo:tf,mapLinear:a_,inverseLerp:l_,lerp:Co,damp:c_,pingpong:u_,smoothstep:f_,smootherstep:h_,randInt:d_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:v_,radToDeg:__,isPowerOfTwo:x_,ceilPowerOfTwo:y_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:S_,normalize:_t,denormalize:Qn};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],_=s[0],p=s[3],d=s[6],x=s[1],b=s[4],g=s[7],R=s[2],A=s[5],T=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*p+a*b+l*A,r[6]=o*d+a*g+l*T,r[1]=c*_+u*x+f*R,r[4]=c*p+u*b+f*A,r[7]=c*d+u*g+f*T,r[2]=h*_+m*x+v*R,r[5]=h*p+m*b+v*A,r[8]=h*d+m*g+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,v=t*f+i*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new ot;function Zp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b_(){const n=Qa("canvas");return n.style.display="block",n}const ch={};function xo(n){n in ch||(ch[n]=!0,console.warn(n))}function w_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function E_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(n.r=zr(n.r),n.g=zr(n.g),n.b=zr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vs?Sl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const uh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],hh=[.3127,.329],dh=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[eo]:{primaries:uh,whitePoint:hh,transfer:Sl,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:uh,whitePoint:hh,transfer:Mt,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}});let lr;class A_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Qa("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Sn extends Qs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Ws,s=Ws,r=en,o=_s,a=ei,l=Zi,c=Sn.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Xi(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=kp;Sn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,s=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,g=(m+1)/2,R=(d+1)/2,A=(u+h)/4,T=(f+_)/4,I=(v+p)/4;return b>g&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=T/i):g>R?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=A/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=I/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-v)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends Qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends P_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qp extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==v){let p=1-a;const d=l*h+c*m+u*v+f*_,x=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,d*x);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const g=a*x;if(l=l*p+h*g,c=c*p+m*g,u=u*p+v*g,f=f*p+_*g,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-a*m,e[t+2]=c*v+u*m+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new ee,mh=new bi;class Xo{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),ea.subVectors(this.max,lo),cr.subVectors(e.a,lo),ur.subVectors(e.b,lo),fr.subVectors(e.c,lo),as.subVectors(ur,cr),ls.subVectors(fr,ur),Ds.subVectors(cr,fr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ds.z,Ds.y,as.z,0,-as.x,ls.z,0,-ls.x,Ds.z,0,-Ds.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ds.y,Ds.x,0];return!zl(t,cr,ur,fr,ea)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,cr,ur,fr,ea))?!1:(ta.crossVectors(as,ls),t=[ta.x,ta.y,ta.z],zl(t,cr,ur,fr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],jn=new ee,Qo=new Xo,cr=new ee,ur=new ee,fr=new ee,as=new ee,ls=new ee,Ds=new ee,lo=new ee,ea=new ee,ta=new ee,Ls=new ee;function zl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);const a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const L_=new Xo,co=new ee,Hl=new ee;class nf{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):L_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Hl)),this.expandByPoint(co.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new ee,Vl=new ee,na=new ee,cs=new ee,Gl=new ee,ia=new ee,Wl=new ee;class sf{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Vl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=cs.dot(this.direction),l=-cs.dot(na),c=cs.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vl).addScaledVector(na,h),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){Gl.subVectors(t,e),ia.subVectors(i,e),Wl.crossVectors(Gl,ia);let o=this.direction.dot(Wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(cs,ia));if(l<0)return null;const c=a*this.direction.dot(Gl.cross(cs));if(c<0||l+c>o)return null;const u=-a*cs.dot(Wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p)}set(e,t,i,s,r,o,a,l,c,u,f,h,m,v,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,_=c*f;t[0]=h+_*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,i){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),us.crossVectors(i,Un),us.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),us.crossVectors(i,Un)),us.normalize(),sa.crossVectors(Un,us),s[0]=us.x,s[4]=sa.x,s[8]=Un.x,s[1]=us.y,s[5]=sa.y,s[9]=Un.y,s[2]=us.z,s[6]=sa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],_=i[6],p=i[10],d=i[14],x=i[3],b=i[7],g=i[11],R=i[15],A=s[0],T=s[4],I=s[8],y=s[12],S=s[1],U=s[5],F=s[9],B=s[13],X=s[2],K=s[6],$=s[10],te=s[14],V=s[3],re=s[7],O=s[11],j=s[15];return r[0]=o*A+a*S+l*X+c*V,r[4]=o*T+a*U+l*K+c*re,r[8]=o*I+a*F+l*$+c*O,r[12]=o*y+a*B+l*te+c*j,r[1]=u*A+f*S+h*X+m*V,r[5]=u*T+f*U+h*K+m*re,r[9]=u*I+f*F+h*$+m*O,r[13]=u*y+f*B+h*te+m*j,r[2]=v*A+_*S+p*X+d*V,r[6]=v*T+_*U+p*K+d*re,r[10]=v*I+_*F+p*$+d*O,r[14]=v*y+_*B+p*te+d*j,r[3]=x*A+b*S+g*X+R*V,r[7]=x*T+b*U+g*K+R*re,r[11]=x*I+b*F+g*$+R*O,r[15]=x*y+b*B+g*te+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],_=e[7],p=e[11],d=e[15];return v*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*m-i*l*m)+_*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],_=e[13],p=e[14],d=e[15],x=f*p*c-_*h*c+_*l*m-a*p*m-f*l*d+a*h*d,b=v*h*c-u*p*c-v*l*m+o*p*m+u*l*d-o*h*d,g=u*_*c-v*f*c+v*a*m-o*_*m-u*a*d+o*f*d,R=v*f*l-u*_*l-v*a*h+o*_*h+u*a*p-o*f*p,A=t*x+i*b+s*g+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(_*h*r-f*p*r-_*s*m+i*p*m+f*s*d-i*h*d)*T,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*T,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*m-i*l*m)*T,e[4]=b*T,e[5]=(u*p*r-v*h*r+v*s*m-t*p*m-u*s*d+t*h*d)*T,e[6]=(v*l*r-o*p*r-v*s*c+t*p*c+o*s*d-t*l*d)*T,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*T,e[8]=g*T,e[9]=(v*f*r-u*_*r-v*i*m+t*_*m+u*i*d-t*f*d)*T,e[10]=(o*_*r-v*a*r+v*i*c-t*_*c-o*i*d+t*a*d)*T,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*T,e[12]=R*T,e[13]=(u*_*s-v*f*s+v*i*h-t*_*h-u*i*p+t*f*p)*T,e[14]=(v*a*s-o*_*s-v*i*l+t*_*l+o*i*p-t*a*p)*T,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,v=r*f,_=o*u,p=o*f,d=a*f,x=l*c,b=l*u,g=l*f,R=i.x,A=i.y,T=i.z;return s[0]=(1-(_+d))*R,s[1]=(m+g)*R,s[2]=(v-b)*R,s[3]=0,s[4]=(m-g)*A,s[5]=(1-(h+d))*A,s[6]=(p+x)*A,s[7]=0,s[8]=(v+b)*T,s[9]=(p-x)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hr.set(s[0],s[1],s[2]).length();const o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);const c=1/r,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Vi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let m,v;if(a===Vi)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ja)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Vi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,m=(i+s)*u;let v,_;if(a===Vi)v=(o+r)*f,_=-2*f;else if(a===Ja)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new ee,Zn=new Dt,I_=new ee(0,0,0),U_=new ee(1,1,1),us=new ee,sa=new ee,Un=new ee,gh=new Dt,vh=new bi;class Ji{constructor(e=0,t=0,i=0,s=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const _h=new ee,dr=new bi,Di=new Dt,ra=new ee,uo=new ee,N_=new ee,O_=new bi,xh=new ee(1,0,0),yh=new ee(0,1,0),Mh=new ee(0,0,1),Sh={type:"added"},B_={type:"removed"},pr={type:"childadded",child:null},Xl={type:"childremoved",child:null};class Dn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ee,t=new Ji,i=new bi,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ot}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(uo,ra,this.up):Di.lookAt(ra,uo,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Di),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dn.DEFAULT_UP=new ee(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new ee,Li=new ee,Yl=new ee,Ii=new ee,mr=new ee,gr=new ee,bh=new ee,$l=new ee,ql=new ee,Kl=new ee,jl=new Ft,Zl=new Ft,Jl=new Ft;class Xn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Li.subVectors(i,t),Yl.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Li),l=Jn.dot(Yl),c=Li.dot(Li),u=Li.dot(Yl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return jl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),jl.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jl,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Li.subVectors(e,t),Jn.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Jn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;mr.subVectors(s,i),gr.subVectors(r,i),$l.subVectors(e,i);const l=mr.dot($l),c=gr.dot($l);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,s);const u=mr.dot(ql),f=gr.dot(ql);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(mr,o);Kl.subVectors(e,r);const m=mr.dot(Kl),v=gr.dot(Kl);if(v>=0&&m<=v)return t.copy(r);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(gr,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return bh.subVectors(r,s),a=(f-u)/(f-u+(m-v)),t.copy(s).addScaledVector(bh,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=tf(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ct.fromWorkingColorSpace(an.copy(this),e),Math.round(fn(an.r*255,0,255))*65536+Math.round(fn(an.g*255,0,255))*256+Math.round(fn(an.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Zt){ct.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(oa);const i=Co(fs.h,oa.h,t),s=Co(fs.s,oa.s,t),r=Co(fs.l,oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=em;let k_=0;class Yo extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Xi(),this.name="",this.blending=Br,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==Hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qr extends Yo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new ee,aa=new tt;class ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}}class tm extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nm extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qs extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let z_=0;const Vn=new Dt,ec=new Dn,vr=new ee,Fn=new Xo,fo=new Xo,qt=new ee;class Ts extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?nm:tm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qs(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Fn.min,fo.min),Fn.expandByPoint(qt),qt.addVectors(Fn.max,fo.max),Fn.expandByPoint(qt)):(Fn.expandByPoint(fo.min),Fn.expandByPoint(fo.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),qt.add(vr)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new ee,l[I]=new ee;const c=new ee,u=new ee,f=new ee,h=new tt,m=new tt,v=new tt,_=new ee,p=new ee;function d(I,y,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,S),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(U),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(U),a[I].add(_),a[y].add(_),a[S].add(_),l[I].add(p),l[y].add(p),l[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,y=x.length;I<y;++I){const S=x[I],U=S.start,F=S.count;for(let B=U,X=U+F;B<X;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new ee,g=new ee,R=new ee,A=new ee;function T(I){R.fromBufferAttribute(s,I),A.copy(R);const y=a[I];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),g.crossVectors(A,y);const U=g.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,U)}for(let I=0,y=x.length;I<y;++I){const S=x[I],U=S.start,F=S.count;for(let B=U,X=U+F;B<X;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new ee,r=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new ri(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ts,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new Dt,Is=new sf,la=new nf,Eh=new ee,ca=new ee,ua=new ee,fa=new ee,tc=new ee,ha=new ee,Th=new ee,da=new ee;class Nt extends Dn{constructor(e=new Ts,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(tc.fromBufferAttribute(f,e),o?ha.addScaledVector(tc,u):ha.addScaledVector(tc.sub(t),u))}t.add(ha)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(la.containsPoint(Is.origin)===!1&&(Is.intersectSphere(la,Eh)===null||Is.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Is.copy(e.ray).applyMatrix4(wh),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],x=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=x,R=b;g<R;g+=3){const A=a.getX(g),T=a.getX(g+1),I=a.getX(g+2);s=pa(this,d,e,i,c,u,f,A,T,I),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const x=a.getX(p),b=a.getX(p+1),g=a.getX(p+2);s=pa(this,o,e,i,c,u,f,x,b,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],x=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=x,R=b;g<R;g+=3){const A=g,T=g+1,I=g+2;s=pa(this,d,e,i,c,u,f,A,T,I),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const x=p,b=p+1,g=p+2;s=pa(this,o,e,i,c,u,f,x,b,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function H_(n,e,t,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;da.copy(a),da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function pa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ua),n.getVertexPosition(c,fa);const u=H_(n,e,t,i,ca,ua,fa,Th);if(u){const f=new ee;Xn.getBarycoord(Th,ca,ua,fa,f),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,l,c,f,new tt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,l,c,f,new tt)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,f,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ee,materialIndex:0};Xn.getNormal(ca,ua,fa,h.normal),u.face=h,u.barycoord=f}return u}class $o extends Ts{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qs(c,3)),this.setAttribute("normal",new qs(u,3)),this.setAttribute("uv",new qs(f,2));function v(_,p,d,x,b,g,R,A,T,I,y){const S=g/T,U=R/I,F=g/2,B=R/2,X=A/2,K=T+1,$=I+1;let te=0,V=0;const re=new ee;for(let O=0;O<$;O++){const j=O*U-B;for(let Z=0;Z<K;Z++){const fe=Z*S-F;re[_]=fe*x,re[p]=j*b,re[d]=X,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[d]=A>0?1:-1,u.push(re.x,re.y,re.z),f.push(Z/T),f.push(1-O/I),te+=1}}for(let O=0;O<I;O++)for(let j=0;j<T;j++){const Z=h+j+K*O,fe=h+j+K*(O+1),ie=h+(j+1)+K*(O+1),de=h+(j+1)+K*O;l.push(Z,fe,de),l.push(fe,ie,de),V+=6}a.addGroup(m,V,y),m+=V,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const s in i)e[s]=i[s]}return e}function V_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function im(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const G_={clone:Kr,merge:_n};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Yo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sm extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new ee,Ah=new tt,Ch=new tt;class Gn extends sm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Ch),t.subVectors(Ch,Ah)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,xr=1;class Y_ extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(_r,xr,e,t);s.layers=this.layers,this.add(s);const r=new Gn(_r,xr,e,t);r.layers=this.layers,this.add(r);const o=new Gn(_r,xr,e,t);o.layers=this.layers,this.add(o);const a=new Gn(_r,xr,e,t);a.layers=this.layers,this.add(a);const l=new Gn(_r,xr,e,t);l.layers=this.layers,this.add(l);const c=new Gn(_r,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class rm extends Sn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends Zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $o(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ys});r.uniforms.tEquirect.value=t;const o=new Nt(s,r),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=en),new Y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const nc=new ee,q_=new ee,K_=new ot;class xi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nc.subVectors(i,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K_.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new nf,ma=new ee;class om{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],v=s[9],_=s[10],p=s[11],d=s[12],x=s[13],b=s[14],g=s[15];if(i[0].setComponents(l-r,h-c,p-m,g-d).normalize(),i[1].setComponents(l+r,h+c,p+m,g+d).normalize(),i[2].setComponents(l+o,h+u,p+v,g+x).normalize(),i[3].setComponents(l-o,h-u,p-v,g-x).normalize(),i[4].setComponents(l-a,h-f,p-_,g-b).normalize(),t===Vi)i[5].setComponents(l+a,h+f,p+_,g+b).normalize();else if(t===Ja)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function am(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function j_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Jt extends Ts{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],v=[],_=[],p=[];for(let d=0;d<u;d++){const x=d*h-o;for(let b=0;b<c;b++){const g=b*f-r;v.push(g,-x,0),_.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const b=x+c*d,g=x+c*(d+1),R=x+1+c*(d+1),A=x+1+c*d;m.push(b,g,A),m.push(g,R,A)}this.setIndex(m),this.setAttribute("position",new qs(v,3)),this.setAttribute("normal",new qs(_,3)),this.setAttribute("uv",new qs(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z_=`#ifdef USE_ALPHAHASH
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
}`,at={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:sx,batching_pars_vertex:rx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:lx,bsdfs:cx,iridescence_fragment:ux,bumpmap_pars_fragment:fx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:vx,color_pars_vertex:_x,color_vertex:xx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:bx,displacementmap_vertex:wx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:Ax,colorspace_pars_fragment:Cx,envmap_fragment:Rx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Dx,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ix,fog_vertex:Ux,fog_pars_vertex:Fx,fog_fragment:Nx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:kx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Vx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:qx,lights_physical_pars_fragment:Kx,lights_fragment_begin:jx,lights_fragment_maps:Zx,lights_fragment_end:Jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:fy,morphtarget_pars_vertex:hy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:vy,normal_vertex:_y,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:by,opaque_fragment:wy,packing:Ey,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:Cy,dithering_pars_fragment:Ry,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Iy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Fy,skinbase_vertex:Ny,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:qy,worldpos_vertex:Ky,background_vert:jy,background_frag:Zy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:sM,distanceRGBA_frag:rM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:fM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:vM,meshphong_vert:_M,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:MM,meshtoon_vert:SM,meshtoon_frag:bM,points_vert:wM,points_frag:EM,shadow_vert:TM,shadow_frag:AM,sprite_vert:CM,sprite_frag:RM},Oe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Oe.points,Oe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Oe.common,Oe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Oe.sprite,Oe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Oe.common,Oe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Oe.lights,Oe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};yi.physical={uniforms:_n([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ga={r:0,b:0,g:0},Fs=new Ji,PM=new Dt;function DM(n,e,t,i,s,r,o){const a=new ht(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function v(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function _(x){let b=!1;const g=v(x);g===null?d(a,l):g&&g.isColor&&(d(g,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,b){const g=v(b);g&&(g.isCubeTexture||g.mapping===Ml)?(u===void 0&&(u=new Nt(new $o(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Kr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fs.copy(b.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Fs)),u.material.toneMapped=ct.getTransfer(g.colorSpace)!==Mt,(f!==g||h!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Nt(new Jt(2,2),new $n({name:"BackgroundMaterial",uniforms:Kr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ct.getTransfer(g.colorSpace)!==Mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,b){x.getRGB(ga,im(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:_,addToRenderList:p}}function LM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,U,F,B,X){let K=!1;const $=f(B,F,U);r!==$&&(r=$,c(r.object)),K=m(S,B,F,X),K&&v(S,B,F,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,g(S,U,F,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,U,F){const B=F.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let K=X[U.id];K===void 0&&(K={},X[U.id]=K);let $=K[B];return $===void 0&&($=h(l()),K[B]=$),$}function h(S){const U=[],F=[],B=[];for(let X=0;X<t;X++)U[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,U,F,B){const X=r.attributes,K=U.attributes;let $=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){const O=X[V];let j=K[V];if(j===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function v(S,U,F,B){const X={},K=U.attributes;let $=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){let O=K[V];O===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(O=S.instanceColor));const j={};j.attribute=O,O&&O.data&&(j.data=O.data),X[V]=j,$++}r.attributes=X,r.attributesNum=$,r.index=B}function _(){const S=r.newAttributes;for(let U=0,F=S.length;U<F;U++)S[U]=0}function p(S){d(S,0)}function d(S,U){const F=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;F[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),X[S]!==U&&(n.vertexAttribDivisor(S,U),X[S]=U)}function x(){const S=r.newAttributes,U=r.enabledAttributes;for(let F=0,B=U.length;F<B;F++)U[F]!==S[F]&&(n.disableVertexAttribArray(F),U[F]=0)}function b(S,U,F,B,X,K,$){$===!0?n.vertexAttribIPointer(S,U,F,X,K):n.vertexAttribPointer(S,U,F,B,X,K)}function g(S,U,F,B){_();const X=B.attributes,K=F.getAttributes(),$=U.defaultAttributeValues;for(const te in K){const V=K[te];if(V.location>=0){let re=X[te];if(re===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const O=re.normalized,j=re.itemSize,Z=e.get(re);if(Z===void 0)continue;const fe=Z.buffer,ie=Z.type,de=Z.bytesPerElement,xe=ie===n.INT||ie===n.UNSIGNED_INT||re.gpuType===Ku;if(re.isInterleavedBufferAttribute){const ve=re.data,Be=ve.stride,ze=re.offset;if(ve.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)d(V.location+He,ve.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<V.locationSize;He++)p(V.location+He);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let He=0;He<V.locationSize;He++)b(V.location+He,j/V.locationSize,ie,O,Be*de,(ze+j/V.locationSize*He)*de,xe)}else{if(re.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)d(V.location+ve,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ve=0;ve<V.locationSize;ve++)b(V.location+ve,j/V.locationSize,ie,O,j*de,j/V.locationSize*ve*de,xe)}}else if($!==void 0){const O=$[te];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(V.location,O);break;case 3:n.vertexAttrib3fv(V.location,O);break;case 4:n.vertexAttrib4fv(V.location,O);break;default:n.vertexAttrib1fv(V.location,O)}}}}x()}function R(){I();for(const S in i){const U=i[S];for(const F in U){const B=U[F];for(const X in B)u(B[X].object),delete B[X];delete U[F]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const F in U){const B=U[F];for(const X in B)u(B[X].object),delete B[X];delete U[F]}delete i[S.id]}function T(S){for(const U in i){const F=i[U];if(F[S.id]===void 0)continue;const B=F[S.id];for(const X in B)u(B[X].object),delete B[X];delete F[S.id]}}function I(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function IM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_]*h[_];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:g,vertexTextures:R,maxSamples:A}}function FM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new xi,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const x=r?0:i,b=x*4;let g=d.clippingState||null;l.value=g,g=u(v,h,b,m);for(let R=0;R!==b;++R)g[R]=t[R];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=m+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,g=m;b!==_;++b,g+=4)o.copy(f[b]).applyMatrix4(x,a),o.normal.toArray(p,g),p[g+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function NM(n){let e=new WeakMap;function t(o,a){return a===Yc?o.mapping=Wr:a===$c&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yc||a===$c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class er extends sm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,Rh=[.125,.215,.35,.446,.526,.582],Vs=20,ic=new er,Ph=new ht;let sc=null,rc=0,oc=0,ac=!1;const Bs=(1+Math.sqrt(5))/2,yr=1/Bs,Dh=[new ee(-Bs,yr,0),new ee(Bs,yr,0),new ee(-yr,0,Bs),new ee(yr,0,Bs),new ee(0,Bs,-yr),new ee(0,Bs,yr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Wo,format:ei,colorSpace:eo,depthBuffer:!1},s=Ih(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(r)),this._blurMaterial=BM(r,e,t)}return s}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,i,s){const a=new Gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ph),u.toneMapping=Ms,u.autoClear=!1;const m=new qr({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new Nt(new $o,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ph),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;va(s,x*b,d>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ic)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vs-1),_=r/v,p=isFinite(r)?1+Math.floor(u*_):Vs;p>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vs}`);const d=[];let x=0;for(let T=0;T<Vs;++T){const I=T/_,y=Math.exp(-I*I/2);d.push(y),T===0?x+=y:T<p&&(x+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-i;const g=this._sizeLods[s],R=3*g*(s>b-Cr?s-b+Cr:0),A=4*(this._cubeSize-g);va(t,R,A,3*g,2*g),l.setRenderTarget(t),l.render(f,ic)}}function OM(n){const e=[],t=[],i=[];let s=n;const r=n-Cr+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cr?l=Rh[o-n+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,d=1,x=new Float32Array(_*v*m),b=new Float32Array(p*v*m),g=new Float32Array(d*v*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,I=A>2?0:-1,y=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(y,_*v*A),b.set(h,p*v*A);const S=[A,A,A,A,A,A];g.set(S,d*v*A)}const R=new Ts;R.setAttribute("position",new ri(x,_)),R.setAttribute("uv",new ri(b,p)),R.setAttribute("faceIndex",new ri(g,d)),e.push(R),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ih(n,e,t){const i=new Zs(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function BM(n,e,t){const i=new Float32Array(Vs),s=new ee(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:of(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Uh(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Fh(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

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
	`}function kM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yc||l===$c,u=l===Wr||l===Xr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Lh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function HM(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let b=0,g=x.length;b<g;b+=3){const R=x[b+0],A=x[b+1],T=x[b+2];h.push(R,A,A,T,T,R)}}else if(v!==void 0){const x=v.array;_=v.version;for(let b=0,g=x.length/3-1;b<g;b+=3){const R=b+0,A=b+1,T=b+2;h.push(R,A,A,T,T,R)}}else return;const p=new(Zp(h)?nm:tm)(h,1);p.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,r,h*o),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,h*o,v),t.update(m,i,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,i,1)}function f(h,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,_,0,v);let d=0;for(let x=0;x<v;x++)d+=m[x]*_[x];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function GM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function WM(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),_===!0&&(g=2),p===!0&&(g=3);let R=a.attributes.position.count*g,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*f),I=new Qp(T,R,A,f);I.type=Hi,I.needsUpdate=!0;const y=g*4;for(let U=0;U<f;U++){const F=d[U],B=x[U],X=b[U],K=R*A*4*U;for(let $=0;$<F.count;$++){const te=$*y;v===!0&&(s.fromBufferAttribute(F,$),T[K+te+0]=s.x,T[K+te+1]=s.y,T[K+te+2]=s.z,T[K+te+3]=0),_===!0&&(s.fromBufferAttribute(B,$),T[K+te+4]=s.x,T[K+te+5]=s.y,T[K+te+6]=s.z,T[K+te+7]=0),p===!0&&(s.fromBufferAttribute(X,$),T[K+te+8]=s.x,T[K+te+9]=s.y,T[K+te+10]=s.z,T[K+te+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new tt(R,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function XM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class lm extends Sn{constructor(e,t,i,s,r,o,a,l,c,u=kr){if(u!==kr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=js),i===void 0&&u===$r&&(i=Yr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cm=new Sn,Nh=new lm(1,1),um=new Qp,fm=new D_,hm=new rm,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Yt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),Yt(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),Yt(t,i)}}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function aS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nh.compareFunction=jp,r=Nh):r=cm,t.setTexture2D(e||r,s)}function lS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fm,s)}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hm,s)}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||um,s)}function fS(n){switch(n){case 5126:return YM;case 35664:return $M;case 35665:return qM;case 35666:return KM;case 35674:return jM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}function hS(n,e){n.uniform1fv(this.addr,e)}function dS(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function pS(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function mS(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function gS(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vS(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _S(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xS(n,e){n.uniform1iv(this.addr,e)}function yS(n,e){n.uniform2iv(this.addr,e)}function MS(n,e){n.uniform3iv(this.addr,e)}function SS(n,e){n.uniform4iv(this.addr,e)}function bS(n,e){n.uniform1uiv(this.addr,e)}function wS(n,e){n.uniform2uiv(this.addr,e)}function ES(n,e){n.uniform3uiv(this.addr,e)}function TS(n,e){n.uniform4uiv(this.addr,e)}function AS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cm,r[o])}function CS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fm,r[o])}function RS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hm,r[o])}function PS(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||um,r[o])}function DS(n){switch(n){case 5126:return hS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return vS;case 35676:return _S;case 5124:case 35670:return xS;case 35667:case 35671:return yS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return bS;case 36294:return wS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}class LS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fS(t.type)}}class IS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Vh(n,e){n.seq.push(e),n.map[e.id]=e}function FS(n,e,t){const i=n.name,s=i.length;for(lc.lastIndex=0;;){const r=lc.exec(i),o=lc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(t,c===void 0?new LS(a,n,e):new IS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new US(a),Vh(t,f)),t=f}}}class Ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);FS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Gh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NS=37297;let OS=0;function BS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wh=new ot;function kS(n){ct._getMatrix(Wh,ct.workingColorSpace,n);const e=`mat3( ${Wh.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Sl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+BS(n.getShaderSource(e),o)}else return s}function zS(n,e){const t=kS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HS(n,e){let t;switch(e){case V0:t="Linear";break;case G0:t="Reinhard";break;case W0:t="Cineon";break;case X0:t="ACESFilmic";break;case $0:t="AgX";break;case q0:t="Neutral";break;case Y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new ee;function VS(){ct.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function WS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yo(n){return n!==""}function Yh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(YS,qS)}const $S=new Map;function qS(n,e){let t=at[e];if(t===void 0){const i=$S.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const KS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(KS,jS)}function jS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ZS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZS(t),c=JS(t),u=QS(t),f=eb(t),h=tb(t),m=GS(t),v=WS(r),_=s.createProgram();let p,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yo).join(`
`),d.length>0&&(d+=`
`)):(p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),d=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?at.tonemapping_pars_fragment:"",t.toneMapping!==Ms?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,zS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=wu(o),o=Yh(o,t),o=$h(o,t),a=wu(a),a=Yh(a,t),a=$h(a,t),o=qh(o),a=qh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=x+p+o,g=x+d+a,R=Gh(s,s.VERTEX_SHADER,b),A=Gh(s,s.FRAGMENT_SHADER,g);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(U){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(A).trim();let K=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,A);else{const te=Xh(s,R,"vertex"),V=Xh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+te+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&($=!1);$&&(U.diagnostics={runnable:K,programLog:F,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(R),s.deleteShader(A),I=new Ha(s,_),y=XS(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,NS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rb(e),t.set(e,i)),i}}class rb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,s,r,o){const a=new rf,l=new sb,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,U,F,B){const X=F.fog,K=B.geometry,$=y.isMeshStandardMaterial?F.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),V=te&&te.mapping===Ml?te.image.height:null,re=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const O=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,j=O!==void 0?O.length:0;let Z=0;K.morphAttributes.position!==void 0&&(Z=1),K.morphAttributes.normal!==void 0&&(Z=2),K.morphAttributes.color!==void 0&&(Z=3);let fe,ie,de,xe;if(re){const lt=yi[re];fe=lt.vertexShader,ie=lt.fragmentShader}else fe=y.vertexShader,ie=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),xe=l.getFragmentShaderID(y);const ve=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,ye=!!y.map,L=!!y.matcap,P=!!te,w=!!y.aoMap,se=!!y.lightMap,G=!!y.bumpMap,J=!!y.normalMap,ae=!!y.displacementMap,pe=!!y.emissiveMap,le=!!y.metalnessMap,E=!!y.roughnessMap,M=y.anisotropy>0,C=y.clearcoat>0,H=y.dispersion>0,Y=y.iridescence>0,ne=y.sheen>0,be=y.transmission>0,me=M&&!!y.anisotropyMap,Ee=C&&!!y.clearcoatMap,Ge=C&&!!y.clearcoatNormalMap,N=C&&!!y.clearcoatRoughnessMap,z=Y&&!!y.iridescenceMap,oe=Y&&!!y.iridescenceThicknessMap,Te=ne&&!!y.sheenColorMap,Me=ne&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Le=!!y.specularColorMap,qe=!!y.specularIntensityMap,W=be&&!!y.transmissionMap,Ce=be&&!!y.thicknessMap,he=!!y.gradientMap,Se=!!y.alphaMap,Ue=y.alphaTest>0,Ie=!!y.alphaHash,Qe=!!y.extensions;let xt=Ms;y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Lt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:ie,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:eo,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:L,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:se,bumpMap:G,normalMap:J,displacementMap:h&&ae,emissiveMap:pe,normalMapObjectSpace:J&&y.normalMapType===Q0,normalMapTangentSpace:J&&y.normalMapType===J0,metalnessMap:le,roughnessMap:E,anisotropy:M,anisotropyMap:me,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:Ge,clearcoatRoughnessMap:N,dispersion:H,iridescence:Y,iridescenceMap:z,iridescenceThicknessMap:oe,sheen:ne,sheenColorMap:Te,sheenRoughnessMap:Me,specularMap:Ne,specularColorMap:Le,specularIntensityMap:qe,transmission:be,transmissionMap:W,thicknessMap:Ce,gradientMap:he,opaque:y.transparent===!1&&y.blending===Br&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ue,alphaHash:Ie,combine:y.combine,mapUv:ye&&_(y.map.channel),aoMapUv:w&&_(y.aoMap.channel),lightMapUv:se&&_(y.lightMap.channel),bumpMapUv:G&&_(y.bumpMap.channel),normalMapUv:J&&_(y.normalMap.channel),displacementMapUv:ae&&_(y.displacementMap.channel),emissiveMapUv:pe&&_(y.emissiveMap.channel),metalnessMapUv:le&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:me&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(y.sheenRoughnessMap.channel),specularMapUv:Ne&&_(y.specularMap.channel),specularColorMapUv:Le&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:W&&_(y.transmissionMap.channel),thicknessMapUv:Ce&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(J||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(ye||Se),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Qe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)S.push(U),S.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function g(y){const S=v[y.type];let U;if(S){const F=yi[S];U=G_.clone(F.uniforms)}else U=y.uniforms;return U}function R(y,S){let U;for(let F=0,B=u.length;F<B;F++){const X=u[F];if(X.cacheKey===S){U=X,++U.usedTimes;break}}return U===void 0&&(U=new nb(n,S,y,r),u.push(U)),U}function A(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:I}}function ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,v,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||lb),i.length>1&&i.sort(h||jh),s.length>1&&s.sort(h||jh)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Zh,n.set(i,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new ht};break;case"SpotLight":t={position:new ee,direction:new ee,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hb=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new ub,t=fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const s=new ee,r=new Dt,o=new Dt;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,v=0,_=0,p=0,d=0,x=0,b=0,g=0,R=0,A=0,T=0;c.sort(db);for(let y=0,S=c.length;y<S;y++){const U=c[y],F=U.color,B=U.intensity,X=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=F.r*B,f+=F.g*B,h+=F.b*B;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],B);T++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,V=t.get(U);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=U.shadow.matrix,x++}i.directional[m]=$,m++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(F).multiplyScalar(B),$.distance=X,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[_]=$;const te=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,te.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=K,g++}_++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(F).multiplyScalar(B),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=$,p++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const te=U.shadow,V=t.get(U);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=U.shadow.matrix,b++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(B),$.groundColor.copy(U.groundColor).multiplyScalar(B),i.hemi[d]=$,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==m||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==x||I.numPointShadows!==b||I.numSpotShadows!==g||I.numSpotMaps!==R||I.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=g+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,I.directionalLength=m,I.pointLength=v,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=x,I.numPointShadows=b,I.numSpotShadows=g,I.numSpotMaps=R,I.numLightProbes=T,i.version=hb++)}function l(c,u){let f=0,h=0,m=0,v=0,_=0;const p=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const b=c[d];if(b.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),f++}else if(b.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const g=i.hemi[_];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Jh(n){const e=new pb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Jh(n),e.set(s,[a])):r>=o.length?(a=new Jh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gb extends Yo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=j0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vb extends Yo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _b=`void main() {
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
}`;function yb(n,e,t){let i=new om;const s=new tt,r=new tt,o=new Ft,a=new gb({depthPacking:Z0}),l=new vb,c={},u=t.maxTextureSize,f={[ji]:Pn,[Pn]:ji,[Wn]:Wn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:_b,fragmentShader:xb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ts;v.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let d=this.type;this.render=function(A,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ys),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==Ni&&this.type===Ni,X=d===Ni&&this.type!==Ni;for(let K=0,$=A.length;K<$;K++){const te=A[K],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||B===!0||X===!0){const j=this.type!==Ni?{minFilter:si,magFilter:si}:{};V.map!==null&&V.map.dispose(),V.map=new Zs(s.x,s.y,j),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const O=V.getViewportCount();for(let j=0;j<O;j++){const Z=V.getViewport(j);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(o),V.updateMatrices(te,j),i=V.getFrustum(),g(T,I,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&x(V,I),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,S,U)};function x(A,T){const I=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zs(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,I,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,I,m,_,null)}function b(A,T,I,y){let S=null;const U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,B=T.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let K=X[B];K===void 0&&(K=S.clone(),X[B]=K,T.addEventListener("dispose",R)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,y===Ni?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=I}return S}function g(A,T,I,y,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const K=B.groups;for(let $=0,te=K.length;$<te;$++){const V=K[$],re=X[V.materialIndex];if(re&&re.visible){const O=b(A,re,y,S);A.onBeforeShadow(n,A,T,I,B,O,V),n.renderBufferDirect(I,null,B,O,A,V),A.onAfterShadow(n,A,T,I,B,O,V)}}}else if(X.visible){const K=b(A,X,y,S);A.onBeforeShadow(n,A,T,I,B,K,null),n.renderBufferDirect(I,null,B,K,A,null),A.onAfterShadow(n,A,T,I,B,K,null)}}const F=A.children;for(let B=0,X=F.length;B<X;B++)g(F[B],T,I,y,S)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const y=c[I],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Mb={[kc]:zc,[Hc]:Wc,[Vc]:Xc,[Gr]:Gc,[zc]:kc,[Wc]:Hc,[Xc]:Vc,[Gc]:Gr};function Sb(n,e){function t(){let W=!1;const Ce=new Ft;let he=null;const Se=new Ft(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!W&&(n.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,Ie,Qe,xt,Lt){Lt===!0&&(Ue*=xt,Ie*=xt,Qe*=xt),Ce.set(Ue,Ie,Qe,xt),Se.equals(Ce)===!1&&(n.clearColor(Ue,Ie,Qe,xt),Se.copy(Ce))},reset:function(){W=!1,he=null,Se.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,he=null,Se=null,Ue=null;return{setReversed:function(Ie){if(Ce!==Ie){const Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ue;Ue=null,this.setClear(xt)}Ce=Ie},getReversed:function(){return Ce},setTest:function(Ie){Ie?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ie){he!==Ie&&!W&&(n.depthMask(Ie),he=Ie)},setFunc:function(Ie){if(Ce&&(Ie=Mb[Ie]),Se!==Ie){switch(Ie){case kc:n.depthFunc(n.NEVER);break;case zc:n.depthFunc(n.ALWAYS);break;case Hc:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case Vc:n.depthFunc(n.EQUAL);break;case Gc:n.depthFunc(n.GEQUAL);break;case Wc:n.depthFunc(n.GREATER);break;case Xc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){Ue!==Ie&&(Ce&&(Ie=1-Ie),n.clearDepth(Ie),Ue=Ie)},reset:function(){W=!1,he=null,Se=null,Ue=null,Ce=!1}}}function s(){let W=!1,Ce=null,he=null,Se=null,Ue=null,Ie=null,Qe=null,xt=null,Lt=null;return{setTest:function(lt){W||(lt?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!W&&(n.stencilMask(lt),Ce=lt)},setFunc:function(lt,rn,Ct){(he!==lt||Se!==rn||Ue!==Ct)&&(n.stencilFunc(lt,rn,Ct),he=lt,Se=rn,Ue=Ct)},setOp:function(lt,rn,Ct){(Ie!==lt||Qe!==rn||xt!==Ct)&&(n.stencilOp(lt,rn,Ct),Ie=lt,Qe=rn,xt=Ct)},setLocked:function(lt){W=lt},setClear:function(lt){Lt!==lt&&(n.clearStencil(lt),Lt=lt)},reset:function(){W=!1,Ce=null,he=null,Se=null,Ue=null,Ie=null,Qe=null,xt=null,Lt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,d=null,x=null,b=null,g=null,R=null,A=null,T=new ht(0,0,0),I=0,y=!1,S=null,U=null,F=null,B=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=te>=2);let re=null,O={};const j=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),fe=new Ft().fromArray(j),ie=new Ft().fromArray(Z);function de(W,Ce,he,Se){const Ue=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(W,Ie),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<he;Qe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Ce+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Ie}const xe={};xe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Gr),G(!1),J(nh),ve(n.CULL_FACE),w(ys);function ve(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Be(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function ze(W,Ce){return f[W]!==Ce?(n.bindFramebuffer(W,Ce),f[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function He(W,Ce){let he=m,Se=!1;if(W){he=h.get(Ce),he===void 0&&(he=[],h.set(Ce,he));const Ue=W.textures;if(he.length!==Ue.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Qe=Ue.length;Ie<Qe;Ie++)he[Ie]=n.COLOR_ATTACHMENT0+Ie;he.length=Ue.length,Se=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Se=!0);Se&&n.drawBuffers(he)}function ye(W){return v!==W?(n.useProgram(W),v=W,!0):!1}const L={[Hs]:n.FUNC_ADD,[b0]:n.FUNC_SUBTRACT,[w0]:n.FUNC_REVERSE_SUBTRACT};L[E0]=n.MIN,L[T0]=n.MAX;const P={[A0]:n.ZERO,[C0]:n.ONE,[R0]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[F0]:n.SRC_ALPHA_SATURATE,[I0]:n.DST_COLOR,[D0]:n.DST_ALPHA,[P0]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[U0]:n.ONE_MINUS_DST_COLOR,[L0]:n.ONE_MINUS_DST_ALPHA,[N0]:n.CONSTANT_COLOR,[O0]:n.ONE_MINUS_CONSTANT_COLOR,[B0]:n.CONSTANT_ALPHA,[k0]:n.ONE_MINUS_CONSTANT_ALPHA};function w(W,Ce,he,Se,Ue,Ie,Qe,xt,Lt,lt){if(W===ys){_===!0&&(Be(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),W!==S0){if(W!==p||lt!==y){if((d!==Hs||g!==Hs)&&(n.blendEquation(n.FUNC_ADD),d=Hs,g=Hs),lt)switch(W){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,b=null,R=null,A=null,T.set(0,0,0),I=0,p=W,y=lt}return}Ue=Ue||Ce,Ie=Ie||he,Qe=Qe||Se,(Ce!==d||Ue!==g)&&(n.blendEquationSeparate(L[Ce],L[Ue]),d=Ce,g=Ue),(he!==x||Se!==b||Ie!==R||Qe!==A)&&(n.blendFuncSeparate(P[he],P[Se],P[Ie],P[Qe]),x=he,b=Se,R=Ie,A=Qe),(xt.equals(T)===!1||Lt!==I)&&(n.blendColor(xt.r,xt.g,xt.b,Lt),T.copy(xt),I=Lt),p=W,y=!1}function se(W,Ce){W.side===Wn?Be(n.CULL_FACE):ve(n.CULL_FACE);let he=W.side===Pn;Ce&&(he=!he),G(he),W.blending===Br&&W.transparent===!1?w(ys):w(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Se=W.stencilWrite;a.setTest(Se),Se&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),pe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function J(W){W!==x0?(ve(n.CULL_FACE),W!==U&&(W===nh?n.cullFace(n.BACK):W===y0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),U=W}function ae(W){W!==F&&($&&n.lineWidth(W),F=W)}function pe(W,Ce,he){W?(ve(n.POLYGON_OFFSET_FILL),(B!==Ce||X!==he)&&(n.polygonOffset(Ce,he),B=Ce,X=he)):Be(n.POLYGON_OFFSET_FILL)}function le(W){W?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function E(W){W===void 0&&(W=n.TEXTURE0+K-1),re!==W&&(n.activeTexture(W),re=W)}function M(W,Ce,he){he===void 0&&(re===null?he=n.TEXTURE0+K-1:he=re);let Se=O[he];Se===void 0&&(Se={type:void 0,texture:void 0},O[he]=Se),(Se.type!==W||Se.texture!==Ce)&&(re!==he&&(n.activeTexture(he),re=he),n.bindTexture(W,Ce||xe[W]),Se.type=W,Se.texture=Ce)}function C(){const W=O[re];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function z(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(W){fe.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),fe.copy(W))}function Me(W){ie.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function Ne(W,Ce){let he=c.get(Ce);he===void 0&&(he=new WeakMap,c.set(Ce,he));let Se=he.get(W);Se===void 0&&(Se=n.getUniformBlockIndex(Ce,W.name),he.set(W,Se))}function Le(W,Ce){const Se=c.get(Ce).get(W);l.get(Ce)!==Se&&(n.uniformBlockBinding(Ce,Se,W.__bindingPointIndex),l.set(Ce,Se))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,O={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,d=null,x=null,b=null,g=null,R=null,A=null,T=new ht(0,0,0),I=0,y=!1,S=null,U=null,F=null,B=null,X=null,fe.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Be,bindFramebuffer:ze,drawBuffers:He,useProgram:ye,setBlending:w,setMaterial:se,setFlipSided:G,setCullFace:J,setLineWidth:ae,setPolygonOffset:pe,setScissorTest:le,activeTexture:E,bindTexture:M,unbindTexture:C,compressedTexImage2D:H,compressedTexImage3D:Y,texImage2D:z,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:Le,texStorage2D:Ge,texStorage3D:N,texSubImage2D:ne,texSubImage3D:be,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:Te,viewport:Me,reset:qe}}function Qh(n,e,t,i){const s=bb(i);switch(t){case Gp:return n*e;case Xp:return n*e;case Yp:return n*e*2;case $p:return n*e/s.components*s.byteLength;case Ju:return n*e/s.components*s.byteLength;case qp:return n*e*2/s.components*s.byteLength;case Qu:return n*e*2/s.components*s.byteLength;case Wp:return n*e*3/s.components*s.byteLength;case ei:return n*e*4/s.components*s.byteLength;case ef:return n*e*4/s.components*s.byteLength;case Na:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Qc:return Math.max(n,16)*Math.max(e,8)/4;case jc:case Jc:return Math.max(n,8)*Math.max(e,8)/2;case eu:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case vu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kp:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yu:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bb(n){switch(n){case Zi:case zp:return{byteLength:1,components:1};case ko:case Hp:case Wo:return{byteLength:2,components:1};case ju:case Zu:return{byteLength:2,components:4};case js:case Ku:case Hi:return{byteLength:4,components:1};case Vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,M){return m?new OffscreenCanvas(E,M):Qa("canvas")}function _(E,M,C){let H=1;const Y=le(E);if((Y.width>C||Y.height>C)&&(H=C/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(H*Y.width),be=Math.floor(H*Y.height);f===void 0&&(f=v(ne,be));const me=M?v(ne,be):f;return me.width=ne,me.height=be,me.getContext("2d").drawImage(E,0,0,ne,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ne+"x"+be+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,M,C,H,Y=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=M;if(M===n.RED&&(C===n.FLOAT&&(ne=n.R32F),C===n.HALF_FLOAT&&(ne=n.R16F),C===n.UNSIGNED_BYTE&&(ne=n.R8)),M===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(ne=n.R8UI),C===n.UNSIGNED_SHORT&&(ne=n.R16UI),C===n.UNSIGNED_INT&&(ne=n.R32UI),C===n.BYTE&&(ne=n.R8I),C===n.SHORT&&(ne=n.R16I),C===n.INT&&(ne=n.R32I)),M===n.RG&&(C===n.FLOAT&&(ne=n.RG32F),C===n.HALF_FLOAT&&(ne=n.RG16F),C===n.UNSIGNED_BYTE&&(ne=n.RG8)),M===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(ne=n.RG8UI),C===n.UNSIGNED_SHORT&&(ne=n.RG16UI),C===n.UNSIGNED_INT&&(ne=n.RG32UI),C===n.BYTE&&(ne=n.RG8I),C===n.SHORT&&(ne=n.RG16I),C===n.INT&&(ne=n.RG32I)),M===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),C===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),C===n.UNSIGNED_INT&&(ne=n.RGB32UI),C===n.BYTE&&(ne=n.RGB8I),C===n.SHORT&&(ne=n.RGB16I),C===n.INT&&(ne=n.RGB32I)),M===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),C===n.UNSIGNED_INT&&(ne=n.RGBA32UI),C===n.BYTE&&(ne=n.RGBA8I),C===n.SHORT&&(ne=n.RGBA16I),C===n.INT&&(ne=n.RGBA32I)),M===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),M===n.RGBA){const be=Y?Sl:ct.getTransfer(H);C===n.FLOAT&&(ne=n.RGBA32F),C===n.HALF_FLOAT&&(ne=n.RGBA16F),C===n.UNSIGNED_BYTE&&(ne=be===Mt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function g(E,M){let C;return E?M===null||M===js||M===Yr?C=n.DEPTH24_STENCIL8:M===Hi?C=n.DEPTH32F_STENCIL8:M===ko&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===js||M===Yr?C=n.DEPTH_COMPONENT24:M===Hi?C=n.DEPTH_COMPONENT32F:M===ko&&(C=n.DEPTH_COMPONENT16),C}function R(E,M){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==si&&E.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function T(E){const M=E.target;M.removeEventListener("dispose",T),S(M)}function I(E){const M=i.get(E);if(M.__webglInit===void 0)return;const C=E.source,H=h.get(C);if(H){const Y=H[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(E),Object.keys(H).length===0&&h.delete(C)}i.remove(E)}function y(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const C=E.source,H=h.get(C);delete H[M.__cacheKey],o.memory.textures--}function S(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let Y=0;Y<M.__webglFramebuffer[H].length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[H][Y]);else n.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)n.deleteFramebuffer(M.__webglFramebuffer[H]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const C=E.textures;for(let H=0,Y=C.length;H<Y;H++){const ne=i.get(C[H]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(C[H])}i.remove(E)}let U=0;function F(){U=0}function B(){const E=U;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function X(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function K(E,M){const C=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(C,E,M);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+M)}function $(E,M){const C=i.get(E);if(E.version>0&&C.__version!==E.version){ie(C,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+M)}function te(E,M){const C=i.get(E);if(E.version>0&&C.__version!==E.version){ie(C,E,M);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+M)}function V(E,M){const C=i.get(E);if(E.version>0&&C.__version!==E.version){de(C,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+M)}const re={[qc]:n.REPEAT,[Ws]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},O={[si]:n.NEAREST,[K0]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},j={[e_]:n.NEVER,[o_]:n.ALWAYS,[t_]:n.LESS,[jp]:n.LEQUAL,[n_]:n.EQUAL,[r_]:n.GEQUAL,[i_]:n.GREATER,[s_]:n.NOTEQUAL};function Z(E,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Nl||M.magFilter===Jo||M.magFilter===_s||M.minFilter===en||M.minFilter===Nl||M.minFilter===Jo||M.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,O[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,O[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===si||M.minFilter!==Jo&&M.minFilter!==_s||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function fe(E,M){let C=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const H=M.source;let Y=h.get(H);Y===void 0&&(Y={},h.set(H,Y));const ne=X(M);if(ne!==E.__cacheKey){Y[ne]===void 0&&(Y[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),Y[ne].usedTimes++;const be=Y[E.__cacheKey];be!==void 0&&(Y[E.__cacheKey].usedTimes--,be.usedTimes===0&&y(M)),E.__cacheKey=ne,E.__webglTexture=Y[ne].texture}return C}function ie(E,M,C){let H=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=n.TEXTURE_3D);const Y=fe(E,M),ne=M.source;t.bindTexture(H,E.__webglTexture,n.TEXTURE0+C);const be=i.get(ne);if(ne.version!==be.__version||Y===!0){t.activeTexture(n.TEXTURE0+C);const me=ct.getPrimaries(ct.workingColorSpace),Ee=M.colorSpace===vs?null:ct.getPrimaries(M.colorSpace),Ge=M.colorSpace===vs||me===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let N=_(M.image,!1,s.maxTextureSize);N=pe(M,N);const z=r.convert(M.format,M.colorSpace),oe=r.convert(M.type);let Te=b(M.internalFormat,z,oe,M.colorSpace,M.isVideoTexture);Z(H,M);let Me;const Ne=M.mipmaps,Le=M.isVideoTexture!==!0,qe=be.__version===void 0||Y===!0,W=ne.dataReady,Ce=R(M,N);if(M.isDepthTexture)Te=g(M.format===$r,M.type),qe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Te,N.width,N.height):t.texImage2D(n.TEXTURE_2D,0,Te,N.width,N.height,0,z,oe,null));else if(M.isDataTexture)if(Ne.length>0){Le&&qe&&t.texStorage2D(n.TEXTURE_2D,Ce,Te,Ne[0].width,Ne[0].height);for(let he=0,Se=Ne.length;he<Se;he++)Me=Ne[he],Le?W&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,z,oe,Me.data):t.texImage2D(n.TEXTURE_2D,he,Te,Me.width,Me.height,0,z,oe,Me.data);M.generateMipmaps=!1}else Le?(qe&&t.texStorage2D(n.TEXTURE_2D,Ce,Te,N.width,N.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,N.width,N.height,z,oe,N.data)):t.texImage2D(n.TEXTURE_2D,0,Te,N.width,N.height,0,z,oe,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Te,Ne[0].width,Ne[0].height,N.depth);for(let he=0,Se=Ne.length;he<Se;he++)if(Me=Ne[he],M.format!==ei)if(z!==null)if(Le){if(W)if(M.layerUpdates.size>0){const Ue=Qh(Me.width,Me.height,M.format,M.type);for(const Ie of M.layerUpdates){const Qe=Me.data.subarray(Ie*Ue/Me.data.BYTES_PER_ELEMENT,(Ie+1)*Ue/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ie,Me.width,Me.height,1,z,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,N.depth,z,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Te,Me.width,Me.height,N.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,N.depth,z,oe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Te,Me.width,Me.height,N.depth,0,z,oe,Me.data)}else{Le&&qe&&t.texStorage2D(n.TEXTURE_2D,Ce,Te,Ne[0].width,Ne[0].height);for(let he=0,Se=Ne.length;he<Se;he++)Me=Ne[he],M.format!==ei?z!==null?Le?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,z,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?W&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,z,oe,Me.data):t.texImage2D(n.TEXTURE_2D,he,Te,Me.width,Me.height,0,z,oe,Me.data)}else if(M.isDataArrayTexture)if(Le){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Te,N.width,N.height,N.depth),W)if(M.layerUpdates.size>0){const he=Qh(N.width,N.height,M.format,M.type);for(const Se of M.layerUpdates){const Ue=N.data.subarray(Se*he/N.data.BYTES_PER_ELEMENT,(Se+1)*he/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,N.width,N.height,1,z,oe,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,z,oe,N.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,N.width,N.height,N.depth,0,z,oe,N.data);else if(M.isData3DTexture)Le?(qe&&t.texStorage3D(n.TEXTURE_3D,Ce,Te,N.width,N.height,N.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,z,oe,N.data)):t.texImage3D(n.TEXTURE_3D,0,Te,N.width,N.height,N.depth,0,z,oe,N.data);else if(M.isFramebufferTexture){if(qe)if(Le)t.texStorage2D(n.TEXTURE_2D,Ce,Te,N.width,N.height);else{let he=N.width,Se=N.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Te,he,Se,0,z,oe,null),he>>=1,Se>>=1}}else if(Ne.length>0){if(Le&&qe){const he=le(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Te,he.width,he.height)}for(let he=0,Se=Ne.length;he<Se;he++)Me=Ne[he],Le?W&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,z,oe,Me):t.texImage2D(n.TEXTURE_2D,he,Te,z,oe,Me);M.generateMipmaps=!1}else if(Le){if(qe){const he=le(N);t.texStorage2D(n.TEXTURE_2D,Ce,Te,he.width,he.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,z,oe,N)}else t.texImage2D(n.TEXTURE_2D,0,Te,z,oe,N);p(M)&&d(H),be.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function de(E,M,C){if(M.image.length!==6)return;const H=fe(E,M),Y=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+C);const ne=i.get(Y);if(Y.version!==ne.__version||H===!0){t.activeTexture(n.TEXTURE0+C);const be=ct.getPrimaries(ct.workingColorSpace),me=M.colorSpace===vs?null:ct.getPrimaries(M.colorSpace),Ee=M.colorSpace===vs||be===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,z=[];for(let Se=0;Se<6;Se++)!Ge&&!N?z[Se]=_(M.image[Se],!0,s.maxCubemapSize):z[Se]=N?M.image[Se].image:M.image[Se],z[Se]=pe(M,z[Se]);const oe=z[0],Te=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),Ne=b(M.internalFormat,Te,Me,M.colorSpace),Le=M.isVideoTexture!==!0,qe=ne.__version===void 0||H===!0,W=Y.dataReady;let Ce=R(M,oe);Z(n.TEXTURE_CUBE_MAP,M);let he;if(Ge){Le&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ne,oe.width,oe.height);for(let Se=0;Se<6;Se++){he=z[Se].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ie=he[Ue];M.format!==ei?Te!==null?Le?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Ie.width,Ie.height,Te,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Ie.width,Ie.height,Te,Me,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Ne,Ie.width,Ie.height,0,Te,Me,Ie.data)}}}else{if(he=M.mipmaps,Le&&qe){he.length>0&&Ce++;const Se=le(z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ne,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Le?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,z[Se].width,z[Se].height,Te,Me,z[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ne,z[Se].width,z[Se].height,0,Te,Me,z[Se].data);for(let Ue=0;Ue<he.length;Ue++){const Qe=he[Ue].image[Se].image;Le?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,Qe.width,Qe.height,Te,Me,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Ne,Qe.width,Qe.height,0,Te,Me,Qe.data)}}else{Le?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te,Me,z[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ne,Te,Me,z[Se]);for(let Ue=0;Ue<he.length;Ue++){const Ie=he[Ue];Le?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,Te,Me,Ie.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Ne,Te,Me,Ie.image[Se])}}}p(M)&&d(n.TEXTURE_CUBE_MAP),ne.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,C,H,Y,ne){const be=r.convert(C.format,C.colorSpace),me=r.convert(C.type),Ee=b(C.internalFormat,be,me,C.colorSpace),Ge=i.get(M),N=i.get(C);if(N.__renderTarget=M,!Ge.__hasExternalTextures){const z=Math.max(1,M.width>>ne),oe=Math.max(1,M.height>>ne);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,ne,Ee,z,oe,M.depth,0,be,me,null):t.texImage2D(Y,ne,Ee,z,oe,0,be,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Y,N.__webglTexture,0,G(M)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Y,N.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(E,M,C){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const H=M.depthTexture,Y=H&&H.isDepthTexture?H.type:null,ne=g(M.stencilBuffer,Y),be=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=G(M);J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,ne,M.width,M.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ne,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,E)}else{const H=M.textures;for(let Y=0;Y<H.length;Y++){const ne=H[Y],be=r.convert(ne.format,ne.colorSpace),me=r.convert(ne.type),Ee=b(ne.internalFormat,be,me,ne.colorSpace),Ge=G(M);C&&J(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ee,M.width,M.height):J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(M.depthTexture);H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Y=H.__webglTexture,ne=G(M);if(M.depthTexture.format===kr)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(M.depthTexture.format===$r)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ze(E){const M=i.get(E),C=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=H}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,E)}else if(C){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[H],E,!1);else{const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,E,!1);else{const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(E,M,C){const H=i.get(E);M!==void 0&&xe(H.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ze(E)}function ye(E){const M=E.texture,C=i.get(E),H=i.get(M);E.addEventListener("dispose",T);const Y=E.textures,ne=E.isWebGLCubeRenderTarget===!0,be=Y.length>1;if(be||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=M.version,o.memory.textures++),ne){C.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){C.__webglFramebuffer[me]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)C.__webglFramebuffer[me][Ee]=n.createFramebuffer()}else C.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){C.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)C.__webglFramebuffer[me]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(be)for(let me=0,Ee=Y.length;me<Ee;me++){const Ge=i.get(Y[me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&J(E)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let me=0;me<Y.length;me++){const Ee=Y[me];C.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[me]);const Ge=r.convert(Ee.format,Ee.colorSpace),N=r.convert(Ee.type),z=b(Ee.internalFormat,Ge,N,Ee.colorSpace,E.isXRRenderTarget===!0),oe=G(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,C.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(C.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Z(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)xe(C.__webglFramebuffer[me][Ee],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else xe(C.__webglFramebuffer[me],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let me=0,Ee=Y.length;me<Ee;me++){const Ge=Y[me],N=i.get(Ge);t.bindTexture(n.TEXTURE_2D,N.__webglTexture),Z(n.TEXTURE_2D,Ge),xe(C.__webglFramebuffer,E,Ge,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),p(Ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,H.__webglTexture),Z(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)xe(C.__webglFramebuffer[Ee],E,M,n.COLOR_ATTACHMENT0,me,Ee);else xe(C.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,me,0);p(M)&&d(me),t.unbindTexture()}E.depthBuffer&&ze(E)}function L(E){const M=E.textures;for(let C=0,H=M.length;C<H;C++){const Y=M[C];if(p(Y)){const ne=x(E),be=i.get(Y).__webglTexture;t.bindTexture(ne,be),d(ne),t.unbindTexture()}}}const P=[],w=[];function se(E){if(E.samples>0){if(J(E)===!1){const M=E.textures,C=E.width,H=E.height;let Y=n.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(E),me=M.length>1;if(me)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ge=i.get(M[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,C,H,0,0,C,H,Y,n.NEAREST),l===!0&&(P.length=0,w.length=0,P.push(n.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(P.push(ne),w.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ge=i.get(M[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function G(E){return Math.min(s.maxSamples,E.samples)}function J(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(E){const M=o.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function pe(E,M){const C=E.colorSpace,H=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||C!==eo&&C!==vs&&(ct.getTransfer(C)===Mt?(H!==ei||Y!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),M}function le(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=J}function Eb(n,e){function t(i,s=vs){let r;const o=ct.getTransfer(s);if(i===Zi)return n.UNSIGNED_BYTE;if(i===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zp)return n.BYTE;if(i===Hp)return n.SHORT;if(i===ko)return n.UNSIGNED_SHORT;if(i===Ku)return n.INT;if(i===js)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===Wo)return n.HALF_FLOAT;if(i===Gp)return n.ALPHA;if(i===Wp)return n.RGB;if(i===ei)return n.RGBA;if(i===Xp)return n.LUMINANCE;if(i===Yp)return n.LUMINANCE_ALPHA;if(i===kr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===$p)return n.RED;if(i===Ju)return n.RED_INTEGER;if(i===qp)return n.RG;if(i===Qu)return n.RG_INTEGER;if(i===ef)return n.RGBA_INTEGER;if(i===Na||i===Oa||i===Ba||i===ka)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Zc||i===Jc||i===Qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eu||i===tu)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===iu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===su)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ru)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===du)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===vu||i===_u)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kp||i===xu||i===yu||i===Mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Tb extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Cb=`
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

}`;class Pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:Cb,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Db extends Qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const _=new Pb,p=t.getContextAttributes();let d=null,x=null;const b=[],g=[],R=new tt;let A=null;const T=new Gn;T.viewport=new Ft;const I=new Gn;I.viewport=new Ft;const y=[T,I],S=new Tb;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=b[ie];return de===void 0&&(de=new cc,b[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=b[ie];return de===void 0&&(de=new cc,b[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=b[ie];return de===void 0&&(de=new cc,b[ie]=de),de.getHandSpace()};function B(ie){const de=g.indexOf(ie.inputSource);if(de===-1)return;const xe=b[de];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||o),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let ie=0;ie<b.length;ie++){const de=g[ie];de!==null&&(g[ie]=null,b[ie].disconnect(de))}U=null,F=null,_.reset(),e.setRenderTarget(d),m=null,h=null,f=null,s=null,x=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Zs(m.framebufferWidth,m.framebufferHeight,{format:ei,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,xe=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?$r:kr,xe=p.stencil?Yr:js);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Zs(h.textureWidth,h.textureHeight,{format:ei,type:Zi,depthTexture:new lm(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(ie){for(let de=0;de<ie.removed.length;de++){const xe=ie.removed[de],ve=g.indexOf(xe);ve>=0&&(g[ve]=null,b[ve].disconnect(xe))}for(let de=0;de<ie.added.length;de++){const xe=ie.added[de];let ve=g.indexOf(xe);if(ve===-1){for(let ze=0;ze<b.length;ze++)if(ze>=g.length){g.push(xe),ve=ze;break}else if(g[ze]===null){g[ze]=xe,ve=ze;break}if(ve===-1)break}const Be=b[ve];Be&&Be.connect(xe)}}const $=new ee,te=new ee;function V(ie,de,xe){$.setFromMatrixPosition(de.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const ve=$.distanceTo(te),Be=de.projectionMatrix.elements,ze=xe.projectionMatrix.elements,He=Be[14]/(Be[10]-1),ye=Be[14]/(Be[10]+1),L=(Be[9]+1)/Be[5],P=(Be[9]-1)/Be[5],w=(Be[8]-1)/Be[0],se=(ze[8]+1)/ze[0],G=He*w,J=He*se,ae=ve/(-w+se),pe=ae*-w;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(pe),ie.translateZ(ae),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Be[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const le=He+ae,E=ye+ae,M=G-pe,C=J+(ve-pe),H=L*ye/E*le,Y=P*ye/E*le;ie.projectionMatrix.makePerspective(M,C,H,Y,le,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function re(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,xe=ie.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=I.near=T.near=de,S.far=I.far=T.far=xe,(U!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,F=S.far),T.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,S.layers.mask=T.layers.mask|I.layers.mask;const ve=ie.parent,Be=S.cameras;re(S,ve);for(let ze=0;ze<Be.length;ze++)re(Be[ze],ve);Be.length===2?V(S,T,I):S.projectionMatrix.copy(T.projectionMatrix),O(ie,S,ve)};function O(ie,de,xe){xe===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=zo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let j=null;function Z(ie,de){if(u=de.getViewerPose(c||o),v=de,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ve=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ze=0;ze<xe.length;ze++){const He=xe[ze];let ye=null;if(m!==null)ye=m.getViewport(He);else{const P=f.getViewSubImage(h,He);ye=P.viewport,ze===0&&(e.setRenderTargetTextures(x,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let L=y[ze];L===void 0&&(L=new Gn,L.layers.enable(ze),L.viewport=new Ft,y[ze]=L),L.matrix.fromArray(He.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(He.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ye.x,ye.y,ye.width,ye.height),ze===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(L)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ze=f.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&_.init(e,ze,s.renderState)}}for(let xe=0;xe<b.length;xe++){const ve=g[xe],Be=b[xe];ve!==null&&Be!==void 0&&Be.update(ve,de,c||o)}j&&j(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const fe=new am;fe.setAnimationLoop(Z),this.setAnimationLoop=function(ie){j=ie},this.dispose=function(){}}}const Ns=new Ji,Lb=new Dt;function Ib(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,im(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,x,b,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,g)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,x,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d),b=x.envMap,g=x.envMapRotation;b&&(p.envMap.value=b,Ns.copy(g),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(Ns)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ub(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const g=b.program;i.uniformBlockBinding(x,g)}function c(x,b){let g=s[x.id];g===void 0&&(v(x),g=u(x),s[x.id]=g,x.addEventListener("dispose",p));const R=b.program;i.updateUBOMapping(x,R);const A=e.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function u(x){const b=f();x.__bindingPointIndex=b;const g=n.createBuffer(),R=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,g),g}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=s[x.id],g=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,T=g.length;A<T;A++){const I=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,S=I.length;y<S;y++){const U=I[y];if(m(U,A,y,R)===!0){const F=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let K=0;K<B.length;K++){const $=B[K],te=_($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,F+X,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,b,g,R){const A=x.value,T=b+"_"+g;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const I=R[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function v(x){const b=x.uniforms;let g=0;const R=16;for(let T=0,I=b.length;T<I;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,U=y.length;S<U;S++){const F=y[S],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,K=B.length;X<K;X++){const $=B[X],te=_($),V=g%R,re=V%te.boundary,O=V+re;g+=re,O!==0&&R-O<te.storage&&(g+=R-O),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=g,g+=te.storage}}}const A=g%R;return A>0&&(g+=R-A),x.__size=g,x.__cache={},this}function _(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function p(x){const b=x.target;b.removeEventListener("dispose",p);const g=o.indexOf(b.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class tr{constructor(e={}){const{canvas:t=b_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Ms,this.toneMappingExposure=1;const g=this;let R=!1,A=0,T=0,I=null,y=-1,S=null;const U=new Ft,F=new Ft;let B=null;const X=new ht(0);let K=0,$=t.width,te=t.height,V=1,re=null,O=null;const j=new Ft(0,0,$,te),Z=new Ft(0,0,$,te);let fe=!1;const ie=new om;let de=!1,xe=!1;const ve=new Dt,Be=new Dt,ze=new ee,He=new Ft,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function P(){return I===null?V:1}let w=i;function se(D,q){return t.getContext(D,q)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qu}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),w===null){const q="webgl2";if(w=se(q,D),w===null)throw se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let G,J,ae,pe,le,E,M,C,H,Y,ne,be,me,Ee,Ge,N,z,oe,Te,Me,Ne,Le,qe,W;function Ce(){G=new zM(w),G.init(),Le=new Eb(w,G),J=new UM(w,G,e,Le),ae=new Sb(w,G),J.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),pe=new GM(w),le=new ab,E=new wb(w,G,ae,le,J,Le,pe),M=new NM(g),C=new kM(g),H=new j_(w),qe=new LM(w,H),Y=new HM(w,H,pe,qe),ne=new XM(w,Y,H,pe),Te=new WM(w,J,E),N=new FM(le),be=new ob(g,M,C,G,J,qe,N),me=new Ib(g,le),Ee=new cb,Ge=new mb(G),oe=new DM(g,M,C,ae,ne,m,l),z=new yb(g,ne,J),W=new Ub(w,pe,J,ae),Me=new IM(w,G,pe),Ne=new VM(w,G,pe),pe.programs=be.programs,g.capabilities=J,g.extensions=G,g.properties=le,g.renderLists=Ee,g.shadowMap=z,g.state=ae,g.info=pe}Ce();const he=new Db(g,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const D=G.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=G.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize($,te,!1))},this.getSize=function(D){return D.set($,te)},this.setSize=function(D,q,ce=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=D,te=q,t.width=Math.floor(D*V),t.height=Math.floor(q*V),ce===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set($*V,te*V).floor()},this.setDrawingBufferSize=function(D,q,ce){$=D,te=q,V=ce,t.width=Math.floor(D*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,q,ce,ue){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,q,ce,ue),ae.viewport(U.copy(j).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(Z)},this.setScissor=function(D,q,ce,ue){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,q,ce,ue),ae.scissor(F.copy(Z).multiplyScalar(V).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(D){ae.setScissorTest(fe=D)},this.setOpaqueSort=function(D){re=D},this.setTransparentSort=function(D){O=D},this.getClearColor=function(D){return D.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(D=!0,q=!0,ce=!0){let ue=0;if(D){let Q=!1;if(I!==null){const Re=I.texture.format;Q=Re===ef||Re===Qu||Re===Ju}if(Q){const Re=I.texture.type,ke=Re===Zi||Re===js||Re===ko||Re===Yr||Re===ju||Re===Zu,Xe=oe.getClearColor(),Ye=oe.getClearAlpha(),nt=Xe.r,rt=Xe.g,$e=Xe.b;ke?(v[0]=nt,v[1]=rt,v[2]=$e,v[3]=Ye,w.clearBufferuiv(w.COLOR,0,v)):(_[0]=nt,_[1]=rt,_[2]=$e,_[3]=Ye,w.clearBufferiv(w.COLOR,0,_))}else ue|=w.COLOR_BUFFER_BIT}q&&(ue|=w.DEPTH_BUFFER_BIT),ce&&(ue|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),Ge.dispose(),le.dispose(),M.dispose(),C.dispose(),ne.dispose(),qe.dispose(),W.dispose(),be.dispose(),he.dispose(),he.removeEventListener("sessionstart",sr),he.removeEventListener("sessionend",Ei),kn.stop()};function Se(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=pe.autoReset,q=z.enabled,ce=z.autoUpdate,ue=z.needsUpdate,Q=z.type;Ce(),pe.autoReset=D,z.enabled=q,z.autoUpdate=ce,z.needsUpdate=ue,z.type=Q}function Ie(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qe(D){const q=D.target;q.removeEventListener("dispose",Qe),xt(q)}function xt(D){Lt(D),le.remove(D)}function Lt(D){const q=le.get(D).programs;q!==void 0&&(q.forEach(function(ce){be.releaseProgram(ce)}),D.isShaderMaterial&&be.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ce,ue,Q,Re){q===null&&(q=ye);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Xe=et(D,q,ce,ue,Q);ae.setMaterial(ue,ke);let Ye=ce.index,nt=1;if(ue.wireframe===!0){if(Ye=Y.getWireframeAttribute(ce),Ye===void 0)return;nt=2}const rt=ce.drawRange,$e=ce.attributes.position;let ut=rt.start*nt,wt=(rt.start+rt.count)*nt;Re!==null&&(ut=Math.max(ut,Re.start*nt),wt=Math.min(wt,(Re.start+Re.count)*nt)),Ye!==null?(ut=Math.max(ut,0),wt=Math.min(wt,Ye.count)):$e!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,$e.count));const Tt=wt-ut;if(Tt<0||Tt===1/0)return;qe.setup(Q,ue,Xe,ce,Ye);let bn,dt=Me;if(Ye!==null&&(bn=H.get(Ye),dt=Ne,dt.setIndex(bn)),Q.isMesh)ue.wireframe===!0?(ae.setLineWidth(ue.wireframeLinewidth*P()),dt.setMode(w.LINES)):dt.setMode(w.TRIANGLES);else if(Q.isLine){let Ke=ue.linewidth;Ke===void 0&&(Ke=1),ae.setLineWidth(Ke*P()),Q.isLineSegments?dt.setMode(w.LINES):Q.isLineLoop?dt.setMode(w.LINE_LOOP):dt.setMode(w.LINE_STRIP)}else Q.isPoints?dt.setMode(w.POINTS):Q.isSprite&&dt.setMode(w.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ke=Q._multiDrawStarts,Ti=Q._multiDrawCounts,pt=Q._multiDrawCount,Kn=Ye?H.get(Ye).bytesPerElement:1,rr=le.get(ue).currentProgram.getUniforms();for(let In=0;In<pt;In++)rr.setValue(w,"_gl_DrawID",In),dt.render(Ke[In]/Kn,Ti[In])}else if(Q.isInstancedMesh)dt.renderInstances(ut,Tt,Q.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ti=Math.min(ce.instanceCount,Ke);dt.renderInstances(ut,Tt,Ti)}else dt.render(ut,Tt)};function lt(D,q,ce){D.transparent===!0&&D.side===Wn&&D.forceSinglePass===!1?(D.side=Pn,D.needsUpdate=!0,De(D,q,ce),D.side=ji,D.needsUpdate=!0,De(D,q,ce),D.side=Wn):De(D,q,ce)}this.compile=function(D,q,ce=null){ce===null&&(ce=D),d=Ge.get(ce),d.init(q),b.push(d),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),D!==ce&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights();const ue=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){const Xe=Re[ke];lt(Xe,ce,Q),ue.add(Xe)}else lt(Re,ce,Q),ue.add(Re)}),b.pop(),d=null,ue},this.compileAsync=function(D,q,ce=null){const ue=this.compile(D,q,ce);return new Promise(Q=>{function Re(){if(ue.forEach(function(ke){le.get(ke).currentProgram.isReady()&&ue.delete(ke)}),ue.size===0){Q(D);return}setTimeout(Re,10)}G.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let rn=null;function Ct(D){rn&&rn(D)}function sr(){kn.stop()}function Ei(){kn.start()}const kn=new am;kn.setAnimationLoop(Ct),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(D){rn=D,he.setAnimationLoop(D),D===null?kn.stop():kn.start()},he.addEventListener("sessionstart",sr),he.addEventListener("sessionend",Ei),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,q,I),d=Ge.get(D,b.length),d.init(q),b.push(d),Be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ie.setFromProjectionMatrix(Be),xe=this.localClippingEnabled,de=N.init(this.clippingPlanes,xe),p=Ee.get(D,x.length),p.init(),x.push(p),he.enabled===!0&&he.isPresenting===!0){const Re=g.xr.getDepthSensingMesh();Re!==null&&ns(Re,q,-1/0,g.sortObjects)}ns(D,q,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(re,O),L=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,L&&oe.addToRenderList(p,D),this.info.render.frame++,de===!0&&N.beginShadows();const ce=d.state.shadowsArray;z.render(ce,D,q),de===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=p.opaque,Q=p.transmissive;if(d.setupLights(),q.isArrayCamera){const Re=q.cameras;if(Q.length>0)for(let ke=0,Xe=Re.length;ke<Xe;ke++){const Ye=Re[ke];ge(ue,Q,D,Ye)}L&&oe.render(D);for(let ke=0,Xe=Re.length;ke<Xe;ke++){const Ye=Re[ke];k(p,D,Ye,Ye.viewport)}}else Q.length>0&&ge(ue,Q,D,q),L&&oe.render(D),k(p,D,q);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(g,D,q),qe.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],de===!0&&N.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function ns(D,q,ce,ue){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ie.intersectsSprite(D)){ue&&He.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Be);const ke=ne.update(D),Xe=D.material;Xe.visible&&p.push(D,ke,Xe,ce,He.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ie.intersectsObject(D))){const ke=ne.update(D),Xe=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),He.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),He.copy(ke.boundingSphere.center)),He.applyMatrix4(D.matrixWorld).applyMatrix4(Be)),Array.isArray(Xe)){const Ye=ke.groups;for(let nt=0,rt=Ye.length;nt<rt;nt++){const $e=Ye[nt],ut=Xe[$e.materialIndex];ut&&ut.visible&&p.push(D,ke,ut,ce,He.z,$e)}}else Xe.visible&&p.push(D,ke,Xe,ce,He.z,null)}}const Re=D.children;for(let ke=0,Xe=Re.length;ke<Xe;ke++)ns(Re[ke],q,ce,ue)}function k(D,q,ce,ue){const Q=D.opaque,Re=D.transmissive,ke=D.transparent;d.setupLightsView(ce),de===!0&&N.setGlobalState(g.clippingPlanes,ce),ue&&ae.viewport(U.copy(ue)),Q.length>0&&_e(Q,q,ce),Re.length>0&&_e(Re,q,ce),ke.length>0&&_e(ke,q,ce),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ge(D,q,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ue.id]===void 0&&(d.state.transmissionRenderTarget[ue.id]=new Zs(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Wo:Zi,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Re=d.state.transmissionRenderTarget[ue.id],ke=ue.viewport||U;Re.setSize(ke.z,ke.w);const Xe=g.getRenderTarget();g.setRenderTarget(Re),g.getClearColor(X),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),g.clear(),L&&oe.render(ce);const Ye=g.toneMapping;g.toneMapping=Ms;const nt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),d.setupLightsView(ue),de===!0&&N.setGlobalState(g.clippingPlanes,ue),_e(D,ce,ue),E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re),G.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let $e=0,ut=q.length;$e<ut;$e++){const wt=q[$e],Tt=wt.object,bn=wt.geometry,dt=wt.material,Ke=wt.group;if(dt.side===Wn&&Tt.layers.test(ue.layers)){const Ti=dt.side;dt.side=Pn,dt.needsUpdate=!0,Ae(Tt,ce,ue,bn,dt,Ke),dt.side=Ti,dt.needsUpdate=!0,rt=!0}}rt===!0&&(E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re))}g.setRenderTarget(Xe),g.setClearColor(X,K),nt!==void 0&&(ue.viewport=nt),g.toneMapping=Ye}function _e(D,q,ce){const ue=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Re=D.length;Q<Re;Q++){const ke=D[Q],Xe=ke.object,Ye=ke.geometry,nt=ue===null?ke.material:ue,rt=ke.group;Xe.layers.test(ce.layers)&&Ae(Xe,q,ce,Ye,nt,rt)}}function Ae(D,q,ce,ue,Q,Re){D.onBeforeRender(g,q,ce,ue,Q,Re),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(g,q,ce,ue,D,Re),Q.transparent===!0&&Q.side===Wn&&Q.forceSinglePass===!1?(Q.side=Pn,Q.needsUpdate=!0,g.renderBufferDirect(ce,q,ue,Q,D,Re),Q.side=ji,Q.needsUpdate=!0,g.renderBufferDirect(ce,q,ue,Q,D,Re),Q.side=Wn):g.renderBufferDirect(ce,q,ue,Q,D,Re),D.onAfterRender(g,q,ce,ue,Q,Re)}function De(D,q,ce){q.isScene!==!0&&(q=ye);const ue=le.get(D),Q=d.state.lights,Re=d.state.shadowsArray,ke=Q.state.version,Xe=be.getParameters(D,Q.state,Re,q,ce),Ye=be.getProgramCacheKey(Xe);let nt=ue.programs;ue.environment=D.isMeshStandardMaterial?q.environment:null,ue.fog=q.fog,ue.envMap=(D.isMeshStandardMaterial?C:M).get(D.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",Qe),nt=new Map,ue.programs=nt);let rt=nt.get(Ye);if(rt!==void 0){if(ue.currentProgram===rt&&ue.lightsStateVersion===ke)return We(D,Xe),rt}else Xe.uniforms=be.getUniforms(D),D.onBeforeCompile(Xe,g),rt=be.acquireProgram(Xe,Ye),nt.set(Ye,rt),ue.uniforms=Xe.uniforms;const $e=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=N.uniform),We(D,Xe),ue.needsLights=$t(D),ue.lightsStateVersion=ke,ue.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMap.value=Q.state.directionalShadowMap,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotShadowMap.value=Q.state.spotShadowMap,$e.spotLightMatrix.value=Q.state.spotLightMatrix,$e.spotLightMap.value=Q.state.spotLightMap,$e.pointShadowMap.value=Q.state.pointShadowMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=rt,ue.uniformsList=null,rt}function Ve(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=Ha.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function We(D,q){const ce=le.get(D);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function et(D,q,ce,ue,Q){q.isScene!==!0&&(q=ye),E.resetTextureUnits();const Re=q.fog,ke=ue.isMeshStandardMaterial?q.environment:null,Xe=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:eo,Ye=(ue.isMeshStandardMaterial?C:M).get(ue.envMap||ke),nt=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,rt=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),$e=!!ce.morphAttributes.position,ut=!!ce.morphAttributes.normal,wt=!!ce.morphAttributes.color;let Tt=Ms;ue.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const bn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,dt=bn!==void 0?bn.length:0,Ke=le.get(ue),Ti=d.state.lights;if(de===!0&&(xe===!0||D!==S)){const zn=D===S&&ue.id===y;N.setState(ue,D,zn)}let pt=!1;ue.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ti.state.version||Ke.outputColorSpace!==Xe||Q.isBatchedMesh&&Ke.batching===!1||!Q.isBatchedMesh&&Ke.batching===!0||Q.isBatchedMesh&&Ke.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ke.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Q.isInstancedMesh&&Ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ke.instancingMorph===!1&&Q.morphTexture!==null||Ke.envMap!==Ye||ue.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==N.numPlanes||Ke.numIntersection!==N.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==rt||Ke.morphTargets!==$e||Ke.morphNormals!==ut||Ke.morphColors!==wt||Ke.toneMapping!==Tt||Ke.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Ke.__version=ue.version);let Kn=Ke.currentProgram;pt===!0&&(Kn=De(ue,q,Q));let rr=!1,In=!1,no=!1;const At=Kn.getUniforms(),hi=Ke.uniforms;if(ae.useProgram(Kn.program)&&(rr=!0,In=!0,no=!0),ue.id!==y&&(y=ue.id,In=!0),rr||S!==D){ae.buffers.depth.getReversed()?(ve.copy(D.projectionMatrix),E_(ve),T_(ve),At.setValue(w,"projectionMatrix",ve)):At.setValue(w,"projectionMatrix",D.projectionMatrix),At.setValue(w,"viewMatrix",D.matrixWorldInverse);const is=At.map.cameraPosition;is!==void 0&&is.setValue(w,ze.setFromMatrixPosition(D.matrixWorld)),J.logarithmicDepthBuffer&&At.setValue(w,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&At.setValue(w,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,In=!0,no=!0)}if(Q.isSkinnedMesh){At.setOptional(w,Q,"bindMatrix"),At.setOptional(w,Q,"bindMatrixInverse");const zn=Q.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),At.setValue(w,"boneTexture",zn.boneTexture,E))}Q.isBatchedMesh&&(At.setOptional(w,Q,"batchingTexture"),At.setValue(w,"batchingTexture",Q._matricesTexture,E),At.setOptional(w,Q,"batchingIdTexture"),At.setValue(w,"batchingIdTexture",Q._indirectTexture,E),At.setOptional(w,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(w,"batchingColorTexture",Q._colorsTexture,E));const io=ce.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Te.update(Q,ce,Kn),(In||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,At.setValue(w,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(hi.envMap.value=Ye,hi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&q.environment!==null&&(hi.envMapIntensity.value=q.environmentIntensity),In&&(At.setValue(w,"toneMappingExposure",g.toneMappingExposure),Ke.needsLights&&tn(hi,no),Re&&ue.fog===!0&&me.refreshFogUniforms(hi,Re),me.refreshMaterialUniforms(hi,ue,V,te,d.state.transmissionRenderTarget[D.id]),Ha.upload(w,Ve(Ke),hi,E)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ha.upload(w,Ve(Ke),hi,E),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&At.setValue(w,"center",Q.center),At.setValue(w,"modelViewMatrix",Q.modelViewMatrix),At.setValue(w,"normalMatrix",Q.normalMatrix),At.setValue(w,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const zn=ue.uniformsGroups;for(let is=0,ss=zn.length;is<ss;is++){const mf=zn[is];W.update(mf,Kn),W.bind(mf,Kn)}}return Kn}function tn(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function $t(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,q,ce){le.get(D.texture).__webglTexture=q,le.get(D.depthTexture).__webglTexture=ce;const ue=le.get(D);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,q){const ce=le.get(D);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ce=0){I=D,A=q,T=ce;let ue=!0,Q=null,Re=!1,ke=!1;if(D){const Ye=le.get(D);if(Ye.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(w.FRAMEBUFFER,null),ue=!1;else if(Ye.__webglFramebuffer===void 0)E.setupRenderTarget(D);else if(Ye.__hasExternalTextures)E.rebindTextures(D,le.get(D.texture).__webglTexture,le.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $e=D.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&le.has($e)&&(D.width!==$e.image.width||D.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ke=!0);const rt=le.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?Q=rt[q][ce]:Q=rt[q],Re=!0):D.samples>0&&E.useMultisampledRTT(D)===!1?Q=le.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?Q=rt[ce]:Q=rt,U.copy(D.viewport),F.copy(D.scissor),B=D.scissorTest}else U.copy(j).multiplyScalar(V).floor(),F.copy(Z).multiplyScalar(V).floor(),B=fe;if(ae.bindFramebuffer(w.FRAMEBUFFER,Q)&&ue&&ae.drawBuffers(D,Q),ae.viewport(U),ae.scissor(F),ae.setScissorTest(B),Re){const Ye=le.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ye.__webglTexture,ce)}else if(ke){const Ye=le.get(D.texture),nt=q||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ye.__webglTexture,ce||0,nt)}y=-1},this.readRenderTargetPixels=function(D,q,ce,ue,Q,Re,ke){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){ae.bindFramebuffer(w.FRAMEBUFFER,Xe);try{const Ye=D.texture,nt=Ye.format,rt=Ye.type;if(!J.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ue&&ce>=0&&ce<=D.height-Q&&w.readPixels(q,ce,ue,Q,Le.convert(nt),Le.convert(rt),Re)}finally{const Ye=I!==null?le.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(D,q,ce,ue,Q,Re,ke){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){const Ye=D.texture,nt=Ye.format,rt=Ye.type;if(!J.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=D.width-ue&&ce>=0&&ce<=D.height-Q){ae.bindFramebuffer(w.FRAMEBUFFER,Xe);const $e=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,$e),w.bufferData(w.PIXEL_PACK_BUFFER,Re.byteLength,w.STREAM_READ),w.readPixels(q,ce,ue,Q,Le.convert(nt),Le.convert(rt),0);const ut=I!==null?le.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,ut);const wt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await w_(w,wt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,$e),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Re),w.deleteBuffer($e),w.deleteSync(wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,q=null,ce=0){D.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,D=arguments[1]);const ue=Math.pow(2,-ce),Q=Math.floor(D.image.width*ue),Re=Math.floor(D.image.height*ue),ke=q!==null?q.x:0,Xe=q!==null?q.y:0;E.setTexture2D(D,0),w.copyTexSubImage2D(w.TEXTURE_2D,ce,0,0,ke,Xe,Q,Re),ae.unbindTexture()},this.copyTextureToTexture=function(D,q,ce=null,ue=null,Q=0){D.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,D=arguments[1],q=arguments[2],Q=arguments[3]||0,ce=null);let Re,ke,Xe,Ye,nt,rt,$e,ut,wt;const Tt=D.isCompressedTexture?D.mipmaps[Q]:D.image;ce!==null?(Re=ce.max.x-ce.min.x,ke=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Ye=ce.min.x,nt=ce.min.y,rt=ce.isBox3?ce.min.z:0):(Re=Tt.width,ke=Tt.height,Xe=Tt.depth||1,Ye=0,nt=0,rt=0),ue!==null?($e=ue.x,ut=ue.y,wt=ue.z):($e=0,ut=0,wt=0);const bn=Le.convert(q.format),dt=Le.convert(q.type);let Ke;q.isData3DTexture?(E.setTexture3D(q,0),Ke=w.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),Ke=w.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),Ke=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);const Ti=w.getParameter(w.UNPACK_ROW_LENGTH),pt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Kn=w.getParameter(w.UNPACK_SKIP_PIXELS),rr=w.getParameter(w.UNPACK_SKIP_ROWS),In=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Tt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Tt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,rt);const no=D.isDataArrayTexture||D.isData3DTexture,At=q.isDataArrayTexture||q.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const hi=le.get(D),io=le.get(q),zn=le.get(hi.__renderTarget),is=le.get(io.__renderTarget);ae.bindFramebuffer(w.READ_FRAMEBUFFER,zn.__webglFramebuffer),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let ss=0;ss<Xe;ss++)no&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(D).__webglTexture,Q,rt+ss),D.isDepthTexture?(At&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(q).__webglTexture,Q,wt+ss),w.blitFramebuffer(Ye,nt,Re,ke,$e,ut,Re,ke,w.DEPTH_BUFFER_BIT,w.NEAREST)):At?w.copyTexSubImage3D(Ke,Q,$e,ut,wt+ss,Ye,nt,Re,ke):w.copyTexSubImage2D(Ke,Q,$e,ut,wt+ss,Ye,nt,Re,ke);ae.bindFramebuffer(w.READ_FRAMEBUFFER,null),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else At?D.isDataTexture||D.isData3DTexture?w.texSubImage3D(Ke,Q,$e,ut,wt,Re,ke,Xe,bn,dt,Tt.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(Ke,Q,$e,ut,wt,Re,ke,Xe,bn,Tt.data):w.texSubImage3D(Ke,Q,$e,ut,wt,Re,ke,Xe,bn,dt,Tt):D.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,$e,ut,Re,ke,bn,dt,Tt.data):D.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,$e,ut,Tt.width,Tt.height,bn,Tt.data):w.texSubImage2D(w.TEXTURE_2D,Q,$e,ut,Re,ke,bn,dt,Tt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ti),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kn),w.pixelStorei(w.UNPACK_SKIP_ROWS,rr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,In),Q===0&&q.generateMipmaps&&w.generateMipmap(Ke),ae.unbindTexture()},this.copyTextureToTexture3D=function(D,q,ce=null,ue=null,Q=0){return D.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,D=arguments[2],q=arguments[3],Q=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,q,ce,ue,Q)},this.initRenderTarget=function(D){le.get(D).__webglFramebuffer===void 0&&E.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?E.setTextureCube(D,0):D.isData3DTexture?E.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?E.setTexture2DArray(D,0):E.setTexture2D(D,0),ae.unbindTexture()},this.resetState=function(){A=0,T=0,I=null,ae.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class nr extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new ee;class el{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new el(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dm extends Yo{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const ho=new ee,Sr=new ee,br=new ee,wr=new tt,po=new tt,pm=new Dt,xa=new ee,mo=new ee,ya=new ee,ed=new tt,uc=new tt,td=new tt;class Nb extends Dn{constructor(e=new dm){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Ts;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fb(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new el(i,3,0,!1)),Mr.setAttribute("uv",new el(i,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-br.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ma(xa.set(-.5,-.5,0),br,o,Sr,s,r),Ma(mo.set(.5,-.5,0),br,o,Sr,s,r),Ma(ya.set(.5,.5,0),br,o,Sr,s,r),ed.set(0,0),uc.set(1,0),td.set(1,1);let a=e.ray.intersectTriangle(xa,mo,ya,!1,ho);if(a===null&&(Ma(mo.set(-.5,.5,0),br,o,Sr,s,r),uc.set(0,1),a=e.ray.intersectTriangle(xa,ya,mo,!1,ho),a===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:Xn.getInterpolation(ho,xa,mo,ya,ed,uc,td,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ma(n,e,t,i,s,r){wr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(po.x=r*wr.x-s*wr.y,po.y=s*wr.x+r*wr.y):po.copy(wr),n.copy(e),n.x+=po.x,n.y+=po.y,n.applyMatrix4(pm)}class wi extends Sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const nd=new Dt;class Ob{constructor(e,t,i=0,s=1/0){this.ray=new sf(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,i=[]){return Eu(e,this,i,t),i.sort(id),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Eu(e[s],this,i,t);return i.sort(id),i}}function id(n,e){return n.distance-e.distance}function Eu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Eu(r[o],e,t,!0)}}class sd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bb extends Qs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);const jr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Kt=30,Tu=12,kb=10,Va=14,mm=5;function tl(){return`${Tu}px system-ui, -apple-system, sans-serif`}function gm(n,e,t){const i=String(e??"");if(!i)return[""];const s=i.split(/\s+/).filter(Boolean);if(s.length===0)return[""];const r=[];let o="";for(const a of s){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(r.push(o),o=a)}return o&&r.push(o),r.length?r:[""]}function zb(n,e){return Math.max(e,n*Va+mm*2)}function af(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function nl(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const s=t+i+1>>1;n[s]<=e?t=s:i=s-1}return t}const vm=28;function Hb(n,e){if(typeof e=="function")return e(n);const t=n.filter(s=>s!=null&&s!=="");if(e==="count")return t.length;const i=t.map(s=>Number(s)).filter(s=>!Number.isNaN(s));if(i.length===0)return null;switch(e){case"sum":return i.reduce((s,r)=>s+r,0);case"avg":return i.reduce((s,r)=>s+r,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Vb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=jr[e.theme]??jr.none,{cols:a,rows:l,pinnedRows:c,rowHeight:u,scrollY:f,scrollX:h,glow:m}=e;t.clearRect(0,0,s,r),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const v=c.length*u,_=e.aggregateRow?vm:0,p=r-Kt-v-_;t.fillStyle=o.headerBg,t.fillRect(0,0,s,Kt),t.textBaseline="middle",t.textAlign="left";let d=-h;for(let O=0;O<a.length;O++){const j=a[O];if(d+j.width<=0){d+=j.width;continue}if(d>=s)break;const Z=!!e.colFilters[j.colId],fe=e.sorts.findIndex(xe=>xe.colId===j.colId),ie=fe>=0,de=(j.colDef.headerName??j.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(d,0,j.width,Kt),t.clip(),t.font=`bold ${kb}px system-ui, -apple-system, sans-serif`,t.fillStyle=Z?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(de,d+8,Kt/2),t.shadowBlur=4,t.fillText(de,d+8,Kt/2),t.shadowBlur=0):t.fillText(de,d+8,Kt/2),ie){const xe=t.measureText(de).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const ve=e.sorts[fe].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${ve}${fe+1}`:ve,d+8+xe+4,Kt/2)}j.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=Z?o.accent:o.textHeader,t.globalAlpha=Z?1:.38,t.fillText("⌕",d+j.width-20,Kt/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(d+j.width-.5,0),t.lineTo(d+j.width-.5,Kt),t.stroke(),d+=j.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Kt-.5),t.lineTo(s,Kt-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Kt,s,p),t.clip();const x=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,b=x?af(x,l.length):null,g=O=>b?b[O]:O*u,R=O=>x?x[O]:u,A=b?nl(b,f):Math.max(0,Math.floor(f/u));let T;if(b)for(T=A;T<l.length&&g(T)<f+p;)T++;else T=Math.min(l.length,Math.ceil((f+p)/u));const I=e.selectionAnchorRow??e.selectedRow,y=e.selectionAnchorCol??e.selectedCol,S=e.selectedRow>=0&&I>=0?Math.min(e.selectedRow,I):-1,U=e.selectedRow>=0&&I>=0?Math.max(e.selectedRow,I):-1,F=e.selectedCol>=0&&y>=0?Math.min(e.selectedCol,y):-1,B=e.selectedCol>=0&&y>=0?Math.max(e.selectedCol,y):-1,X=U>S||B>F;let K=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,te=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;const re=(O,j,Z,fe)=>{m?(t.shadowColor=fe,t.shadowBlur=12,t.fillText(O,j,Z),t.shadowBlur=6,t.fillText(O,j,Z),t.shadowBlur=2,t.fillText(O,j,Z),t.shadowBlur=0):t.fillText(O,j,Z)};for(let O=A;O<T;O++){const j=l[O],Z=R(O),fe=Kt+g(O)-f;O%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,fe,s,Z));const ie=O>=S&&O<=U;O===e.hoveredRow&&!ie&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,fe,s,Z)),ie&&!X&&(t.fillStyle=fc(o.accent,.1),t.fillRect(0,fe,s,Z)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,fe+Z-.5),t.lineTo(s,fe+Z-.5),t.stroke();let de=-h;for(let xe=0;xe<a.length;xe++){const ve=a[xe];if(de+ve.width<=0){de+=ve.width;continue}if(de>=s)break;const Be=ie&&xe>=F&&xe<=B;Be&&X&&(t.fillStyle=fc(o.accent,.14),t.fillRect(de,fe,ve.width,Z)),Be&&(de<K&&(K=de),de+ve.width>$&&($=de+ve.width),fe<te&&(te=fe),fe+Z>V&&(V=fe+Z));const ze=e.getCellStyle(ve,j),He=ze.color??o.text,ye=ze.textAlign??"left",L=e.formatCell(ve,j);if(t.save(),t.beginPath(),t.rect(de+1,fe,ve.width-2,Z),t.clip(),t.font=tl(),t.fillStyle=He,t.textBaseline="middle",ve.colDef.wrap){t.textAlign="left";const P=gm(t,L,Math.max(20,ve.width-16));let w=fe+mm+Va/2;for(const se of P){if(w-Va/2>=fe+Z)break;re(se,de+8,w,He),w+=Va}}else{const P=ye==="right"?de+ve.width-8:de+8;t.textAlign=ye==="right"?"right":"left",re(L,P,fe+Z/2,He)}t.restore(),O===e.selectedRow&&xe===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(de+1.5,fe+1.5,ve.width-3,Z-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(de+ve.width-.5,fe),t.lineTo(de+ve.width-.5,fe+Z),t.stroke(),de+=ve.width}}if(X&&K<$&&te<V&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(K+.5,te+.5,$-K-1,V-te-1)),t.restore(),c.length>0){const O=r-v-_;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,O-.5),t.lineTo(s,O-.5),t.stroke();for(let j=0;j<c.length;j++){const Z=c[j],fe=O+j*u;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,fe,s,u);let ie=-h;for(let de=0;de<a.length;de++){const xe=a[de];if(ie+xe.width<=0){ie+=xe.width;continue}if(ie>=s)break;const ve=e.getCellStyle(xe,Z),Be=ve.color??o.text,ze=ve.textAlign??"left",He=e.formatCell(xe,Z);t.save(),t.beginPath(),t.rect(ie+1,fe,xe.width-2,u),t.clip(),t.font=`bold ${Tu}px system-ui, -apple-system, sans-serif`,t.fillStyle=Be,t.textBaseline="middle",ze==="right"?(t.textAlign="right",t.fillText(He,ie+xe.width-8,fe+u/2)):(t.textAlign="left",t.fillText(He,ie+8,fe+u/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(ie+xe.width-.5,fe),t.lineTo(ie+xe.width-.5,fe+u),t.stroke(),ie+=xe.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,fe+u-.5),t.lineTo(s,fe+u-.5),t.stroke()}}if(e.aggregateRow){const O=r-_;t.fillStyle=fc(o.accent,.1),t.fillRect(0,O,s,_),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,O-.5),t.lineTo(s,O-.5),t.stroke();let j=-h;for(let Z=0;Z<a.length;Z++){const fe=a[Z];if(j+fe.width<=0){j+=fe.width;continue}if(j>=s)break;const de=e.getCellStyle(fe,e.aggregateRow).textAlign??"left",xe=e.aggregateRow[fe.colId]??"";t.save(),t.beginPath(),t.rect(j+1,O,fe.width-2,_),t.clip(),t.font=`bold ${Tu}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),de==="right"?(t.textAlign="right",t.fillText(xe,j+fe.width-8,O+_/2)):(t.textAlign="left",t.fillText(xe,j+8,O+_/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo(j+fe.width-.5,O),t.lineTo(j+fe.width-.5,O+_),t.stroke(),j+=fe.width}}t.restore()}function fc(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${s},${e})`}const Sa=190,hc=34;function Gb(n,e,t){const i=Math.max(4,Math.min(e,n-Sa-4)),s=Kt+6,r=t?26:0;return{box:{x:i,y:s,w:Sa,h:hc},input:{x:i+9,y:s+5,w:Sa-18-r,h:hc-10},clear:t?{x:i+Sa-28,y:s,w:28,h:hc}:null}}const dc=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function ba(n,e,t,i=1){return t.clear&&dc(n,e,t.clear,4*(i-1))?"clear":dc(n,e,t.input)?"input":dc(n,e,t.box)?"inside":"outside"}function Wb(n,e,t,i,s){const{box:r,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=s.accent,n.lineWidth=1,n.beginPath(),n.roundRect(r.x+.5,r.y+.5,r.w-1,r.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=tl(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=s.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=s.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=s.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=s.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=tl(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=s.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function Xb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r;if(t<0){const c=.5*r,f=1/(1-2*(.5*(1+c)*c)),h=(i+i*(1+o)*o*-1)*f,m=(s+s*(1+o)*o*-1)*f;return[.5+h,.5+m]}const a=i*(1+o)*o,l=s*(1+o)*o;return[n+a,e+l]}function _m(n,e,t,i,s,r=t,o=i){const a=n/t,l=1-e/i,[c,u]=Xb(a,l,s);return c<0||c>1||u<0||u>1?[-1,-1]:[c*r,(1-u)*o]}function pc(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function Yb(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function rd(n,e,t,i=1){const s=e+t;return n>=s-6*i&&n<=s+1*i}function $b(n,e,t,i,s,r,o,a,l,c=!1,u){const f=n+l;let h=-1,m=0;for(let x=0;x<t.length;x++){if(f>=m&&f<m+t[x].width){h=x;break}m+=t[x].width}if(e<Kt)return{area:"header",colIdx:h,rowIdx:-1};const v=c?vm:0;if(v>0&&e>=o-v)return{area:"agg",colIdx:h,rowIdx:-1};const _=a*s;if(_>0&&e>=o-_-v){const x=Math.floor((e-(o-_-v))/s);return{area:"pinned",colIdx:h,rowIdx:x}}const p=e-Kt+r,d=u&&u.length===i?nl(af(u,i),p):Math.floor(p/s);return d>=0&&d<i?{area:"body",colIdx:h,rowIdx:d}:{area:"none",colIdx:-1,rowIdx:-1}}function Js(n){return n/45*.55}function xm(n){const e=Math.abs(Js(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const qb=500,ym=qb/2,Au=1.6,Mm=`
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
`;function wm(){return{uMouseUV:{value:new tt(-999,-999)},uLensR:{value:0},uLensZoom:{value:Au},uLensTint:{value:new ht(7268263)},uAspect:{value:1}}}const Qt={x:-999,y:-999};function Em(n,e,t,i,s){const r=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=r&&s>0?ym/s:0,n.uniforms.uAspect.value=s>0?i/s:1}function qo(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const Kb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,jb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Zb=`
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
`;function Jb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r,a=(1+o)*o*Math.sign(t);let l=i+i*a,c=s+s*a;if(t<0){const u=.5*r,f=.5*(1+u)*u;l/=1-2*f,c/=1-2*f}return{x:.5+l,y:.5+c}}function Qb(n,e,t,i,s,r){if(!i||t.x===Qt.x||r<=0)return{x:n,y:e};const o=s/r,a=ym/r,l=(n-t.x)*o,c=e-t.y,u=Math.hypot(l,c);if(u>=a)return{x:n,y:e};const f=u/a,h=Math.min(Math.max((f-.88)/(1-.88),0),1),m=h*h*(3-2*h),v=Au+(1-Au)*m;return{x:t.x+l/v/o,y:t.y+c/v}}class ts{constructor(e){Fe(this,"canvas");Fe(this,"material");Fe(this,"mode");Fe(this,"dpr",1);Fe(this,"logicalW",0);Fe(this,"logicalH",0);Fe(this,"screenW",0);Fe(this,"screenH",0);Fe(this,"texture");Fe(this,"painter");Fe(this,"maxDpr");Fe(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});Fe(this,"mouse",{x:Qt.x,y:Qt.y});Fe(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new $n({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...wm()},vertexShader:this.mode==="world"?jb:Kb,fragmentShader:Zb,transparent:!0,side:this.mode==="world"?Wn:ji})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new wi(this.canvas);return e.magFilter=en,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=_s,e.anisotropy=this.anisotropy):e.minFilter=en,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const s=Math.min(i,this.maxDpr),r=Math.round(e*s),o=Math.round(t*s);return this.canvas.width===r&&this.canvas.height===o&&this.dpr===s?!1:(this.dpr=s,this.logicalW=e,this.logicalH=t,this.canvas.width=r,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:Qt.x,this.mouse.y=e?e.y:Qt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=Js(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,Em(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=Qb(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),s=Jb(i.x,i.y,Js(this.look.curvature));return s.x<0||s.x>1||s.y<0||s.y>1?null:{x:s.x*this.logicalW,y:(1-s.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const ew=600;function Tm(n){const e=hl(!0);return e.run(()=>tw(n,e))}function tw(n,e){var kn,ns;const{emit:t,host:i}=n,s=we(((kn=n.rowData)==null?void 0:kn.call(n))??[]),r=we(((ns=n.pinnedBottomRowData)==null?void 0:ns.call(n))??[]),o=we(""),a=we([]),l=Ir({}),c=Ir({}),u=Ir(new Set),f=we(0),h=we(0),m=we(0),v=we(0),_=we(0),p=we(0),d=we(0),x=we(-1),b=we(null),g=we(null),R=we(null),A=we(""),T=we(0);let I=null;const y=we(!0);let S=null;je(R,k=>{var ge;S&&(clearInterval(S),S=null),k?(y.value=!0,S=setInterval(()=>{y.value=!y.value,i.redraw()},530),mn(()=>{var _e;return(_e=i.focusFilterInput)==null?void 0:_e.call(i)})):(I=null,(ge=i.blurFilterInput)==null||ge.call(i)),i.redraw()});function U(k){return k.colId??k.field??(k.headerName?k.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const F=it(()=>{var ge;const k=((ge=n.defaultColDef)==null?void 0:ge.call(n))??{};return n.columnDefs().filter(_e=>!u.has(U(_e))).map(_e=>{const Ae=U(_e),De={...k,..._e};return{colId:Ae,colDef:De,width:c[Ae]??De.width??100}})}),B=it(()=>{const k=h.value;if(!k)return F.value;const ge=F.value.reduce((De,Ve)=>De+Ve.width,0);if(!ge||ge>=k)return F.value;const _e=k/ge;let Ae=0;return F.value.map((De,Ve)=>{const et=Ve===F.value.length-1?k-Ae:Math.max(8,Math.round(De.width*_e));return Ae+=et,{...De,width:et}})}),X=it(()=>{const k=B.value.reduce((ge,_e)=>ge+_e.width,0);return Math.max(0,k-h.value)});function K(k,ge){if(ge.colDef.valueGetter)return ge.colDef.valueGetter({data:k,colDef:ge.colDef});if(ge.colDef.field)return k[ge.colDef.field]}function $(k,ge){const _e=K(ge,k);return k.colDef.valueFormatter?k.colDef.valueFormatter({value:_e,data:ge,colDef:k.colDef})??"":k.colDef.cellRenderer?(k.colDef.cellRenderer({value:_e,data:ge,colDef:k.colDef})??"").replace(/<[^>]+>/g,""):_e==null?"":String(_e)}function te(k,ge){return k.colDef.cellStyle?typeof k.colDef.cellStyle=="function"?k.colDef.cellStyle({value:K(ge,k),data:ge,colDef:k.colDef})??{}:k.colDef.cellStyle:{}}function V(){return n.columnDefs().map((k,ge)=>({d:k,i:ge})).filter(({d:k})=>k.sort).sort((k,ge)=>(k.d.sortIndex??k.i)-(ge.d.sortIndex??ge.i)).map(({d:k})=>({colId:U(k),dir:k.sort}))}const re=it(()=>{f.value;let k=s.value;const ge=o.value.trim().toLowerCase();ge&&(k=k.filter(Ae=>F.value.some(De=>String(K(Ae,De)??"").toLowerCase().includes(ge))));for(const[Ae,De]of Object.entries(l)){if(!De)continue;const Ve=F.value.find(We=>We.colId===Ae);if(Ve)if(De.startsWith("__eq__")){const We=De.slice(6).toLowerCase();k=k.filter(et=>String(K(et,Ve)??"").toLowerCase()===We)}else{const We=De.toLowerCase();k=k.filter(et=>String(K(et,Ve)??"").toLowerCase().includes(We))}}const _e=a.value.map(({colId:Ae,dir:De})=>({col:F.value.find(Ve=>Ve.colId===Ae),dir:De})).filter(Ae=>!!Ae.col);return _e.length&&(k=[...k].sort((Ae,De)=>{for(const{col:Ve,dir:We}of _e){const et=K(Ae,Ve),tn=K(De,Ve);let $t=0;if(Ve.colDef.comparator?$t=Ve.colDef.comparator(et,tn):typeof et=="number"&&typeof tn=="number"?$t=et-tn:$t=String(et??"").localeCompare(String(tn??""),void 0,{numeric:!0}),$t)return We==="asc"?$t:-$t}return 0})),k});let O=null;function j(){if(typeof document>"u")return null;O||(O=document.createElement("canvas"));const k=O.getContext("2d");return k&&(k.font=tl()),k}const Z=it(()=>B.value.some(k=>k.colDef.wrap)),fe=it(()=>{if(!Z.value)return null;const k=j();if(!k)return null;const ge=B.value.filter(Ae=>Ae.colDef.wrap),_e=n.rowHeight();return re.value.map(Ae=>{let De=1;for(const Ve of ge){const We=gm(k,$(Ve,Ae),Math.max(20,Ve.width-16));We.length>De&&(De=We.length)}return zb(De,_e)})}),ie=it(()=>fe.value?af(fe.value,re.value.length):null),de=it(()=>ie.value?ie.value[re.value.length]:re.value.length*n.rowHeight()),xe=it(()=>{const k=r.value.length*n.rowHeight();return Math.max(0,m.value-Kt-k)}),ve=it(()=>Math.max(0,de.value-xe.value)),Be=it(()=>Math.max(1,Math.floor(xe.value/n.rowHeight()))),ze=it(()=>{const k=re.value.length;if(k===0)return 0;const ge=ie.value?nl(ie.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(k-1,ge)}),He=it(()=>{const k=re.value.length;return k===0?0:ie.value?Math.min(k-1,nl(ie.value,p.value+xe.value-1)):Math.min(k-1,ze.value+Be.value-1)}),ye=it(()=>{const k=F.value.filter(De=>De.colDef.aggFunc!=null);if(k.length===0)return null;const ge=re.value,_e={};for(const De of k){const Ve=ge.map(et=>K(et,De)),We=Hb(Ve,De.colDef.aggFunc);if(We==null){_e[De.colId]="";continue}_e[De.colId]=De.colDef.aggValueFormatter?De.colDef.aggValueFormatter(We):String(We)}const Ae=k[0].colId;return _e[Ae]===""&&(_e[Ae]="Σ"),_e});je(re,()=>{p.value=0,b.value=null}),je(X,()=>{d.value=Math.min(d.value,X.value)}),je(ve,()=>{p.value=Math.min(p.value,ve.value)}),je([re,()=>r.value,B,p,x,b],()=>mn(()=>i.redraw())),je(b,k=>{if(!k)return;const ge=re.value[k.row],_e=B.value[k.col];ge&&_e&&t("cell-selected",{data:ge,row:k.row,col:k.col,colId:_e.colId})});function L(k,ge,_e,Ae){v.value=_e,_.value=Ae,h.value=k,m.value=ge,d.value=Math.max(0,Math.min(X.value,d.value)),p.value=Math.max(0,Math.min(ve.value,p.value))}function P(k){const ge=ie.value,_e=ge?ge[k]:k*n.rowHeight(),Ae=ge?ge[k+1]:_e+n.rowHeight();_e<p.value?p.value=_e:Ae>p.value+xe.value&&(p.value=Math.min(ve.value,Ae-xe.value))}function w(k){var De;if(!h.value)return;let ge=0;for(let Ve=0;Ve<k;Ve++)ge+=B.value[Ve].width;const _e=((De=B.value[k])==null?void 0:De.width)??0,Ae=ge-d.value;Ae<0?d.value=Math.max(0,ge):Ae+_e>h.value&&(d.value=Math.min(X.value,ge+_e-h.value))}function se(){p.value=Math.max(0,p.value-xe.value),i.redraw()}function G(){p.value=Math.min(ve.value,p.value+xe.value),i.redraw()}let J=!1,ae="",pe=0,le=0,E=1,M=!1,C=!1,H=0,Y=0,ne=0,be=0,me=!1;function Ee(k,ge,_e=1){var Ae;J=!0,ae=k,pe=ge,E=_e,le=((Ae=B.value.find(De=>De.colId===k))==null?void 0:Ae.width)??100,M=!1}function Ge(k,ge){C=!0,me=!1,H=k,Y=ge,ne=d.value,be=p.value}function N(k,ge){const _e=H-k,Ae=Y-ge;(Math.abs(_e)>4||Math.abs(Ae)>4)&&(me=!0),d.value=Math.max(0,Math.min(X.value,ne+_e)),p.value=Math.max(0,Math.min(ve.value,be+Ae)),i.redraw()}function z(){C&&(me&&(M=!0),C=!1)}function oe(k,ge){if(C){N(k,ge);return}if(!J)return;const _e=h.value,Ae=Math.max(30,le+(k-pe)*E),De=F.value.filter(We=>We.colId!==ae).reduce((We,et)=>We+et.width,0),Ve=_e-Ae;Ve>10&&(c[ae]=Math.max(10,Math.round(Ae*De/Ve))),i.redraw()}function Te(){z(),J&&(J=!1,M=!0,t("column-resized"))}function Me(k,ge){return $b(k,ge,B.value,re.value.length,n.rowHeight(),p.value,m.value,r.value.length,d.value,ye.value!==null,fe.value??void 0)}let Ne=0;function Le(k,ge,_e){R.value=null;const Ae=Date.now();if(k!==0){Ne=Ae,d.value=Math.max(0,Math.min(X.value,d.value+k)),i.redraw();return}if(_e&&ge!==0){Ne=Ae,d.value=Math.max(0,Math.min(X.value,d.value+ge)),i.redraw();return}Ae-Ne<ew||(p.value=Math.max(0,Math.min(ve.value,p.value+ge)),i.redraw())}function qe(k){if(k.cx<0)return x.value=-1,i.redraw(),null;if(R.value&&I){const Ae=ba(k.cx,k.cy,I,k.hitScale);if(Ae!=="outside")return x.value=-1,i.redraw(),Ae==="clear"?"pointer":"text"}const ge=Me(k.cx,k.cy);x.value=ge.area==="body"?ge.rowIdx:-1;let _e;if(ge.area==="header"&&ge.colIdx>=0){const Ae=B.value[ge.colIdx],De=pc(ge.colIdx,B.value),Ve=k.cx+d.value;_e=Ae&&rd(Ve,De,Ae.width,k.hitScale)?"col-resize":"pointer"}else ge.area==="body"?_e="pointer":_e="default";return i.redraw(),_e}function W(){x.value=-1,i.redraw()}function Ce(k,ge,_e){if(k.cx<0||R.value&&I&&ba(k.cx,k.cy,I,k.hitScale)!=="outside")return;if(k.cy>=Kt){Ge(ge,_e);return}const Ae=k.cx+d.value;for(let De=0;De<B.value.length;De++){const Ve=B.value[De],We=pc(De,B.value);if(Ve.colDef.resizable!==!1&&rd(Ae,We,Ve.width,k.hitScale)){Ee(Ve.colId,ge,k.hitScale);return}}}function he(k,ge){var De,Ve,We;const _e={stopPropagation:!1};if(M)return M=!1,_e;if(J)return _e;if(k.cx<0)return R.value=null,_e;if(R.value&&I){const et=ba(k.cx,k.cy,I,k.hitScale);if(et==="clear")return xt(),_e;if(et!=="outside")return(De=i.focusFilterInput)==null||De.call(i),_e;R.value=null}const Ae=Me(k.cx,k.cy);if(Ae.area==="header"&&Ae.colIdx>=0){const et=B.value[Ae.colIdx],tn=pc(Ae.colIdx,B.value),$t=k.cx+d.value;if(et.colDef.filter&&Yb($t,tn,et.width,k.hitScale))_e.stopPropagation=!0,R.value===et.colId?R.value=null:(R.value=et.colId,A.value=(Ve=l[et.colId])!=null&&Ve.startsWith("__eq__")?l[et.colId].slice(6):l[et.colId]??"",T.value=Math.max(0,tn-d.value));else if(et.colDef.sortable!==!1){R.value=null;const D=a.value.find(ce=>ce.colId===et.colId),q=D?D.dir==="asc"?"desc":null:"asc";ge.shiftKey?a.value=D?q?a.value.map(ce=>ce.colId===et.colId?{colId:ce.colId,dir:q}:ce):a.value.filter(ce=>ce.colId!==et.colId):[...a.value,{colId:et.colId,dir:"asc"}]:a.value=q?[{colId:et.colId,dir:q}]:[],t("sort-changed")}return _e}if(R.value=null,Ae.area==="body"&&Ae.rowIdx>=0&&Ae.colIdx>=0){const et=Ae.rowIdx;ge.shiftKey&&b.value?(g.value||(g.value={...b.value}),b.value={row:et,col:Ae.colIdx}):(b.value={row:et,col:Ae.colIdx},g.value={row:et,col:Ae.colIdx}),(We=i.focusCanvas)==null||We.call(i);const tn=re.value[et],$t=B.value[Ae.colIdx];tn&&$t&&(t("row-clicked",{data:tn,event:ge}),t("cell-selected",{data:tn,row:et,col:Ae.colIdx,colId:$t.colId}))}return _e}function Se(k){R.value&&(k&&I&&k.cx>=0&&ba(k.cx,k.cy,I,k.hitScale)!=="outside"||(R.value=null))}function Ue(k){const _e=B.value.length-1,Ae=re.value.length-1;if(!b.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(k.key)&&(k.preventDefault(),b.value={row:ze.value,col:0},g.value={row:ze.value,col:0});return}let{row:De,col:Ve}=b.value;const We=(et,tn,$t=!1)=>{De=Math.max(0,Math.min(Ae,et)),Ve=Math.max(0,Math.min(_e,tn)),b.value={row:De,col:Ve},$t||(g.value={row:De,col:Ve}),P(De),w(Ve)};switch(k.key){case"ArrowDown":k.preventDefault(),We(De+1,Ve,k.shiftKey);break;case"ArrowUp":k.preventDefault(),We(De-1,Ve,k.shiftKey);break;case"ArrowRight":k.preventDefault(),k.shiftKey?We(De,Ve+1,!0):Ve<_e?We(De,Ve+1):We(De+1,0);break;case"ArrowLeft":k.preventDefault(),k.shiftKey?We(De,Ve-1,!0):Ve>0?We(De,Ve-1):We(De-1,_e);break;case"Tab":k.preventDefault(),k.shiftKey?Ve>0?We(De,Ve-1):We(De-1,_e):Ve<_e?We(De,Ve+1):We(De+1,0);break;case"Enter":k.preventDefault(),k.shiftKey?We(De-1,Ve):We(De+1,Ve);break;case"Home":k.preventDefault(),k.ctrlKey||k.metaKey?We(0,0,k.shiftKey):We(De,0,k.shiftKey);break;case"End":k.preventDefault(),k.ctrlKey||k.metaKey?We(Ae,_e,k.shiftKey):We(De,_e,k.shiftKey);break;case"PageDown":k.preventDefault(),We(Math.min(Ae,De+Be.value),Ve,k.shiftKey);break;case"PageUp":k.preventDefault(),We(Math.max(0,De-Be.value),Ve,k.shiftKey);break;case"Escape":b.value=null,g.value=null;break;case"c":case"C":(k.ctrlKey||k.metaKey)&&(k.preventDefault(),Ie());break}}function Ie(){var $t;if(!b.value)return;const k=B.value,ge=re.value,_e=g.value??b.value,Ae=Math.min(_e.row,b.value.row),De=Math.max(_e.row,b.value.row),Ve=Math.min(_e.col,b.value.col),We=Math.max(_e.col,b.value.col),et=[];for(let D=Ae;D<=De;D++){const q=ge[D];if(!q)continue;const ce=[];for(let ue=Ve;ue<=We;ue++){const Q=k[ue];Q&&ce.push($(Q,q).replace(/[\t\r\n]+/g," "))}et.push(ce.join("	"))}const tn=et.join(`
`);($t=navigator.clipboard)==null||$t.writeText(tn).catch(()=>{})}function Qe(k){A.value=k,k?l[R.value]=k:delete l[R.value],t("filter-changed")}function xt(){R.value&&delete l[R.value],A.value="",R.value=null,t("filter-changed")}function Lt(){R.value=null}function lt(k,ge){if(!R.value||!k.width)return;const _e=k.getContext("2d");if(!_e)return;_e.setTransform(ge,0,0,ge,0,0),I=Gb(k.width/ge,T.value,!!A.value);const Ae=jr[n.theme()]??jr.none;Wb(_e,I,A.value,y.value,Ae)}function rn(k,{dpr:ge,glow:_e}){var Ae,De,Ve,We;Vb(k,{cols:B.value,rows:re.value,pinnedRows:r.value,rowHeight:n.rowHeight(),rowHeights:fe.value??void 0,scrollY:p.value,scrollX:d.value,theme:n.theme(),glow:_e,sorts:a.value,colFilters:l,hoveredRow:x.value,selectedRow:((Ae=b.value)==null?void 0:Ae.row)??-1,selectedCol:((De=b.value)==null?void 0:De.col)??-1,selectionAnchorRow:((Ve=g.value)==null?void 0:Ve.row)??-1,selectionAnchorCol:((We=g.value)==null?void 0:We.col)??-1,formatCell:$,getCellStyle:te,aggregateRow:ye.value,dpr:ge}),lt(k,ge)}const Ct={setGridOption(k,ge){k==="rowData"?s.value=ge:k==="pinnedBottomRowData"?r.value=ge:k==="quickFilterText"&&(o.value=ge)},getColumnState(){return n.columnDefs().map(k=>{var _e;const ge=U(k);return{colId:ge,hide:u.has(ge),sort:((_e=a.value.find(Ae=>Ae.colId===ge))==null?void 0:_e.dir)??null,sortIndex:a.value.some(Ae=>Ae.colId===ge)?a.value.findIndex(Ae=>Ae.colId===ge):null,width:c[ge]??k.width}})},applyColumnState({state:k}){const ge=k.filter(_e=>_e.sort).sort((_e,Ae)=>(_e.sortIndex??0)-(Ae.sortIndex??0));ge.length&&(a.value=ge.map(_e=>({colId:_e.colId,dir:_e.sort})));for(const _e of k)_e.hide===!0&&u.add(_e.colId),_e.hide===!1&&u.delete(_e.colId),_e.width&&(c[_e.colId]=_e.width)},setFilterModel(k){for(const ge of Object.keys(l))delete l[ge];if(k)for(const[ge,_e]of Object.entries(k))(_e==null?void 0:_e.type)==="equals"?l[ge]=`__eq__${_e.filter}`:_e!=null&&_e.filter&&(l[ge]=_e.filter)},getFilterModel(){const k={};for(const[ge,_e]of Object.entries(l))_e&&(k[ge]=_e.startsWith("__eq__")?{type:"equals",filter:_e.slice(6)}:{type:"contains",filter:_e});return k},async setColumnFilterModel(k,ge){ge?ge.type==="equals"?l[k]=`__eq__${ge.filter}`:l[k]=ge.filter??"":delete l[k]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:k="export.csv"}={}){const ge=F.value,_e=ge.map(We=>We.colDef.headerName??We.colId).join(","),Ae=re.value.map(We=>ge.map(et=>`"${String($(et,We)).replace(/"/g,'""')}"`).join(",")),De=new Blob([[_e,...Ae].join(`
`)],{type:"text/csv"}),Ve=URL.createObjectURL(De);Object.assign(document.createElement("a"),{href:Ve,download:k}).click(),URL.revokeObjectURL(Ve)},resize(){var k;(k=i.resize)==null||k.call(i)},getSortModel(){return a.value.map(k=>({colId:k.colId,sort:k.dir}))},setSortModel(k){a.value=k.map(ge=>({colId:ge.colId,dir:ge.sort}))},getScrollY(){return p.value},setScrollY(k){mn(()=>{p.value=Math.max(0,Math.min(ve.value,k))})},resetColumnState(){u.clear();for(const k of n.columnDefs())k.hide&&u.add(U(k));a.value=V();for(const k of Object.keys(c))delete c[k];for(const k of Object.keys(l))delete l[k];o.value="",p.value=0,b.value=null,R.value=null}};function sr(){var k,ge;for(const _e of n.columnDefs())_e.hide&&u.add(U(_e));a.value.length||(a.value=V()),s.value=((k=n.rowData)==null?void 0:k.call(n))??[],r.value=((ge=n.pinnedBottomRowData)==null?void 0:ge.call(n))??[]}function Ei(){S&&(clearInterval(S),S=null),e.stop()}return{scrollX:d,scrollY:p,maxScrollX:X,maxScrollY:ve,filteredRows:re,displayCols:B,resolvedCols:F,aggregateRow:ye,rowHeights:fe,firstVisibleRow:ze,lastVisibleRow:He,visibleRowCount:Be,selectedCell:b,selectionAnchor:g,hoveredRow:x,activeFilter:R,filterPopupValue:A,caretOn:y,canvasW:h,canvasH:m,screenW:v,screenH:_,sortState:a,colFilters:l,formatCell:$,getCellValue:K,hit:Me,get resizing(){return J},get panning(){return C},setViewport:L,pageUp:se,pageDown:G,ensureRowVisible:P,ensureColVisible:w,wheel:Le,hover:qe,leave:W,pointerDown:Ce,click:he,docClick:Se,keyDown:Ue,panStart:Ge,panMove:N,panEnd:z,globalMove:oe,globalUp:Te,setFilterText:Qe,clearFilter:xt,closeFilter:Lt,paint:rn,api:Ct,init:sr,dispose:Ei}}const nw=["value"],iw=["disabled"],sw=["disabled"],rw=28,ow=ui({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,s=we(null),r=Tm({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>K(),resize:()=>X(),focusCanvas:()=>{var C;return(C=g.value)==null?void 0:C.focus()},focusFilterInput:()=>{var C;return(C=s.value)==null?void 0:C.focus()},blurFilterInput:()=>{var C;return(C=s.value)==null?void 0:C.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:c,selectedCell:u,firstVisibleRow:f,lastVisibleRow:h,activeFilter:m,filterPopupValue:v,formatCell:_,pageUp:p,pageDown:d,clearFilter:x}=r,b=we(null),g=we(null),R=Gi("cathodeResetTick",we(0));je(R,()=>G());let A=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),T=null,I=!1;function y(){if(T){try{T.forceContextLoss()}catch{}try{T.dispose()}catch{}T=null}}let S,U;const F=new ts({paint:(C,{dpr:H,glow:Y})=>r.paint(C,{dpr:H,glow:Y})});function B(){if(!(!g.value||!b.value)){try{T=new tr({canvas:g.value,antialias:!1,alpha:!0})}catch{I=!0}if(!I&&!T.getContext()&&(T.dispose(),T=null,I=!0),I){X();return}T.setPixelRatio(1),T.setClearColor(0,0),S=new nr,U=new er(-1,1,1,-1,0,1),S.add(new Nt(new Jt(2,2),F.material)),X()}}function X(){if(!b.value||!T&&!I)return;const C=b.value.clientWidth,H=b.value.clientHeight-(t.pagination?rw:0);if(!C||!H)return;const Y=t.bendField?Math.round(C*xm(t.curvature)):C;F.resize(Y,H),F.setScreenSize(C,H),A=F.dpr,r.setViewport(Y,H,C,H),T?(T.setPixelRatio(A),T.setSize(C,H)):g.value&&(g.value.width=Math.round(C*A),g.value.height=Math.round(H*A),g.value.style.width=C+"px",g.value.style.height=H+"px"),K()}function K(){if(!F.canvas.width)return;if(I){if(!g.value)return;F.paintOnly(!1);const H=F.canvas,Y=g.value.getContext("2d");Y&&Y.drawImage(H,0,0,H.width,H.height,0,0,g.value.width,g.value.height);return}if(!T)return;const C=t.theme==="paper";F.setLook({curvature:t.curvature,scanlines:t.scanlines&&!C,vignette:!C,magnify:t.magnify}),F.syncUniforms(),F.paint(t.glow),T.render(S,U)}function $(C,H){if(!g.value)return[-1,-1];const Y=g.value.getBoundingClientRect(),ne=C-Y.left,be=H-Y.top,me=Y.width,Ee=Y.height,Ge=Js(t.curvature),[N,z]=_m(ne,be,me,Ee,Ge,F.canvas.width/A||me,F.canvas.height/A||Ee);return N<0?[-1,-1]:[N,z]}function te(C){return $(C.clientX,C.clientY)}function V(C){if(!g.value)return 1;const[H]=$(C.clientX-4,C.clientY),[Y]=$(C.clientX+4,C.clientY);return H<0||Y<0?1:Math.max(1,Math.abs(Y-H)/8)}function re(C){const[H,Y]=te(C);return{cx:H,cy:Y,hitScale:V(C)}}function O(C){r.wheel(C.deltaX,C.deltaY,C.shiftKey)}function j(C){if(r.resizing)return;t.magnify&&g.value&&F.setLens(qo(C,g.value));const H=r.hover(re(C));H&&g.value&&(g.value.style.cursor=H)}function Z(){F.setLens(null),r.leave()}function fe(C){r.pointerDown(re(C),C.clientX,C.clientY)}function ie(C){r.click(re(C),C).stopPropagation&&C.stopPropagation()}function de(C){m.value&&r.docClick(C.target===g.value?re(C):null)}function xe(C){r.globalMove(C.clientX,C.clientY)}function ve(){r.globalUp()}function Be(C){C.touches.length===1&&r.panStart(C.touches[0].clientX,C.touches[0].clientY)}function ze(C){!r.panning||C.touches.length!==1||(C.preventDefault(),r.panMove(C.touches[0].clientX,C.touches[0].clientY))}function He(){r.panEnd()}function ye(C){r.keyDown(C)}function L(C){r.setFilterText(C.target.value)}je(()=>t.theme,()=>K()),je(()=>[t.curvature,t.bendField],()=>mn(X)),je(()=>t.scanlines,()=>K()),je(()=>t.glow,()=>K()),je(()=>t.magnify,C=>{C||F.setLens(null),K()});let P=null,w=null,se=0;function G(){cancelAnimationFrame(se),se=requestAnimationFrame(X)}function J(C){C.preventDefault()}function ae(){T==null||T.dispose(),T=null,I=!1,B()}Ln(()=>{r.init(),document.addEventListener("click",de),document.addEventListener("mousemove",xe),document.addEventListener("mouseup",ve),mn(()=>{var C;B(),g.value&&(g.value.addEventListener("webglcontextlost",J),g.value.addEventListener("webglcontextrestored",ae)),b.value&&(P=new ResizeObserver(()=>X()),P.observe(b.value),w=new IntersectionObserver(H=>{H.some(Y=>Y.isIntersecting)&&G()}),w.observe(b.value)),window.addEventListener("resize",G),(C=window.visualViewport)==null||C.addEventListener("resize",G),i("grid-ready",{api:r.api})})}),qn(()=>{var C,H,Y;document.removeEventListener("click",de),document.removeEventListener("mousemove",xe),document.removeEventListener("mouseup",ve),(C=g.value)==null||C.removeEventListener("webglcontextlost",J),(H=g.value)==null||H.removeEventListener("webglcontextrestored",ae),P==null||P.disconnect(),w==null||w.disconnect(),window.removeEventListener("resize",G),(Y=window.visualViewport)==null||Y.removeEventListener("resize",G),cancelAnimationFrame(se),y(),F.dispose(),r.dispose()});const pe=it(()=>jr[t.theme]??jr.none),le=it(()=>({background:pe.value.headerBg,borderTop:`1px solid ${pe.value.border}`,color:pe.value.text})),E=it(()=>({background:pe.value.bg})),M=it(()=>pe.value.accent);return(C,H)=>{var Y,ne;return Je(),gt("div",{ref_key:"wrapEl",ref:b,class:"cathode-wrap",style:On(E.value)},[Pe("canvas",{ref_key:"canvasEl",ref:g,class:"cathode-canvas",tabindex:"0",onWheel:Gs(O,["prevent"]),onMousemove:j,onMouseleave:Z,onMousedown:fe,onClick:ie,onKeydown:ye,onTouchstartPassive:Be,onTouchmove:ze,onTouchend:He,onTouchcancel:He},null,544),yt(m)?(Je(),gt("input",{key:0,ref_key:"filterGhostEl",ref:s,class:"cathode-filter-ghost","aria-label":"Filter column",value:yt(v),autofocus:"",onInput:L,onKeydown:[H[0]||(H[0]=eh((...be)=>yt(x)&&yt(x)(...be),["escape"])),H[1]||(H[1]=eh(be=>yt(r).closeFilter(),["enter"]))]},null,40,nw)):jt("",!0),n.pagination?(Je(),gt("div",{key:1,class:"cathode-pagination",style:On(le.value)},[Pe("button",{disabled:yt(o)<=0,onClick:H[2]||(H[2]=be=>yt(p)())},"◀",8,iw),Pe("span",null,xn((yt(f)+1).toLocaleString())+"–"+xn(Math.min(yt(l).length,yt(h)+1).toLocaleString())+" / "+xn(yt(l).length.toLocaleString()),1),Pe("button",{disabled:yt(o)>=yt(a),onClick:H[3]||(H[3]=be=>yt(d)())},"▶",8,sw),Pe("span",{class:"cathode-page-info",style:On({color:M.value})},xn(yt(l).length.toLocaleString())+" rows ",5),yt(u)?(Je(),gt("span",{key:0,class:"cathode-sel-readout",style:On({color:M.value})},xn(((Y=yt(c)[yt(u).col])==null?void 0:Y.colDef.headerName)??((ne=yt(c)[yt(u).col])==null?void 0:ne.colId))+" : "+xn(yt(_)(yt(c)[yt(u).col],yt(l)[yt(u).row])),5)):jt("",!0)],4)):jt("",!0)],4)}}}),fi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},od=fi(ow,[["__scopeId","data-v-3f5baab2"]]),il={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function aw(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const lw=12,nn=18,Ro=10,Ks=6,lf=`${lw}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function cw(n,e,t){if(t<=0||!e)return[e];const i=[];for(const s of e.split(`
`)){if(!s){i.push("");continue}if(n.measureText(s).width<=t){i.push(s);continue}const r=s.split(/(\s+)/);let o="";for(const a of r){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Am(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${s}`}return n}function uw(n,e){return Math.ceil(n.measureText(e).width)+12}function fw(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:s,wordWrap:r}=n,o=n.formatTs??Am;t.font=lf;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=s&&c.ts!=null?o(c.ts):"",h=r?cw(t,c.text,i):c.text.split(`
`);for(let m=0;m<h.length;m++)a.push({entryIdx:l,text:h[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(h[m]).width})}return a}function hw(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,s=n.width/i,r=n.height/i,o=il[e.theme]??il.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip(),t.font=lf,t.textBaseline="middle";const a=e.visualLines,l=Ro-e.scrollX,c=(e.showTimestamps?Ro+e.timestampWidth:Ro)-e.scrollX,u=Math.max(0,Math.floor((e.scrollY-Ks)/nn)),f=Math.min(a.length,Math.ceil((e.scrollY+r-Ks)/nn)+1);for(let h=u;h<f;h++){const m=a[h],v=Ks+h*nn-e.scrollY+nn/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;h+p<f&&a[h+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,v-nn/2,s,nn*p)}e.selectionStart>=0&&h>=e.selectionStart&&h<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,v-nn/2,s,nn)),h===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,v-nn/2,s,nn)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,v),t.shadowBlur=0);const _=aw(o,m.level);t.fillStyle=_,t.textAlign="left",e.glow?(t.shadowColor=_,t.shadowBlur=14,t.fillText(m.text,c,v),t.shadowBlur=7,t.fillText(m.text,c,v),t.shadowBlur=3,t.fillText(m.text,c,v),t.shadowBlur=0):t.fillText(m.text,c,v)}t.restore()}function ad(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Ks)/nn);return i<0||i>=t?-1:i}function dw(n){return Ks*2+n*nn}function Cm(n){const e=hl();return e.run(()=>{const t=()=>{var ye;return((ye=n.showTimestamps)==null?void 0:ye.call(n))??!0},i=()=>{var ye;return((ye=n.wordWrap)==null?void 0:ye.call(n))??!0},s=we(0),r=we(0),o=we(0),a=we(0),l=we(-1),c=we(!0),u=we(-1),f=we(-1),h=document.createElement("canvas"),m=it(()=>{var P;const ye=n.entries()??[],L=((P=n.maxLines)==null?void 0:P.call(n))??0;return L>0&&ye.length>L?ye.slice(ye.length-L):ye}),v=it(()=>{var P;if(!t())return"";const ye=((P=n.formatTs)==null?void 0:P.call(n))??Am;let L="00:00:00";for(const w of m.value){if(w.ts==null)continue;const se=ye(w.ts);se.length>L.length&&(L=se)}return L}),_=we(0),p=we([]);function d(){var P;const ye=h.getContext("2d");if(!ye)return;ye.font=lf;const L=t()?uw(ye,v.value):0;_.value=L,p.value=fw({entries:m.value,ctx:ye,textMaxWidth:Math.max(1,s.value-Ro*2-L),showTimestamps:t(),formatTs:(P=n.formatTs)==null?void 0:P.call(n),wordWrap:i()})}const x=it(()=>dw(p.value.length)),b=it(()=>Math.max(0,x.value-r.value)),g=it(()=>{let ye=0;for(const L of p.value)L.widthPx>ye&&(ye=L.widthPx);return Ro*2+_.value+ye}),R=it(()=>Math.max(0,g.value-s.value));je(b,()=>{c.value?o.value=b.value:o.value=Math.min(o.value,b.value)}),je(R,()=>{a.value=Math.min(a.value,R.value)}),je([m,s,t,i,v],()=>{d(),mn(()=>n.host.redraw())},{deep:!1}),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw()),je(l,()=>n.host.redraw()),je([u,f],()=>n.host.redraw());function A(ye,L){s.value=ye,r.value=L,d(),c.value&&(o.value=Math.max(0,x.value-r.value))}function T(ye){o.value=Math.max(0,Math.min(b.value,ye)),c.value=o.value>=b.value-4}function I(ye){a.value=Math.max(0,Math.min(R.value,ye))}function y(ye,L,P){P?I(a.value+L):Math.abs(ye)>Math.abs(L)?I(a.value+ye):T(o.value+L)}function S(){c.value=!0,o.value=b.value}function U(ye){T(Ks+ye*nn)}let F=!1,B=!1,X=0,K=0,$=0,te=0;function V(ye,L){F=!0,B=!1,X=ye,K=L,$=a.value,te=o.value}function re(ye,L){if(!F)return!1;const P=X-ye,w=K-L;return(Math.abs(P)>4||Math.abs(w)>4)&&(B=!0),I($+P),T(te+w),!0}function O(){F&&(F=!1,B&&(B=!1))}const j=()=>F;function Z(ye){l.value=ye<0?-1:ad(ye,o.value,p.value.length)}function fe(){l.value=-1}function ie(ye,L){if(B){B=!1;return}const P=ye<0?-1:ad(ye,o.value,p.value.length);if(P<0){u.value=-1,f.value=-1;return}L&&u.value>=0||(u.value=P),f.value=P}function de(ye,L){const P=p.value.length;if(P===0)return;const w=f.value<0?0:f.value,se=Math.max(0,Math.min(P-1,w+ye));f.value=se,(!L||u.value<0)&&(u.value=se),l.value=se;const G=Ks+se*nn,J=G+nn;G<o.value?T(G):J>o.value+r.value&&T(J-r.value)}function xe(){const ye=Math.min(u.value,f.value),L=Math.max(u.value,f.value);if(ye<0)return"";const P=p.value,w=new Set,se=[];for(let G=ye;G<=L&&G<P.length;G++){const J=P[G];if(w.has(J.entryIdx))continue;w.add(J.entryIdx);let ae="";for(let pe=0;pe<P.length;pe++)P[pe].entryIdx===J.entryIdx&&(ae+=(ae&&!P[pe].isFirstFrag?" ":"")+P[pe].text);se.push(J.timestamp?`${J.timestamp}  ${ae}`:ae)}return se.join(`
`)}async function ve(){const ye=xe();if(ye)try{await navigator.clipboard.writeText(ye)}catch{const L=document.createElement("textarea");L.value=ye,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();try{document.execCommand("copy")}catch{}document.body.removeChild(L)}}function Be(ye){if((ye.metaKey||ye.ctrlKey)&&(ye.key==="c"||ye.key==="C")){u.value>=0&&(ye.preventDefault(),ve());return}if((ye.metaKey||ye.ctrlKey)&&(ye.key==="a"||ye.key==="A")){ye.preventDefault(),u.value=0,f.value=p.value.length-1;return}switch(ye.key){case"ArrowDown":ye.preventDefault(),de(1,ye.shiftKey);break;case"ArrowUp":ye.preventDefault(),de(-1,ye.shiftKey);break;case"ArrowRight":ye.preventDefault(),I(a.value+nn*2);break;case"ArrowLeft":ye.preventDefault(),I(a.value-nn*2);break;case"PageDown":ye.preventDefault(),T(o.value+r.value);break;case"PageUp":ye.preventDefault(),T(o.value-r.value);break;case"Home":ye.preventDefault(),T(0),I(0);break;case"End":ye.preventDefault(),T(b.value);break;case"Escape":u.value=-1,f.value=-1;break}}function ze(ye,{dpr:L,glow:P}){hw(ye,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:P,showTimestamps:t(),timestampWidth:_.value,hoveredLine:l.value,selectionStart:Math.min(u.value,f.value),selectionEnd:Math.max(u.value,f.value),dpr:L})}function He(){e.stop()}return{canvasW:s,canvasH:r,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:c,selectionAnchor:u,selectionActive:f,visualLines:p,tsWidth:_,contentH:x,maxScrollY:b,maxScrollX:R,setViewport:A,setScroll:T,setScrollX:I,wheel:y,scrollToBottom:S,scrollToLine:U,panStart:V,panMove:re,panEnd:O,panning:j,hover:Z,leave:fe,click:ie,keyDown:Be,moveSelection:de,selectionAsText:xe,copySelection:ve,paint:ze,dispose:He}})}const pw=ui({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=we(null),s=we(null),r={...Qt},o=Cm({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function c(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let u,f,h=1;const m=new ts({paint:(Z,{dpr:fe,glow:ie})=>o.paint(Z,{dpr:fe,glow:ie})});function v(){if(!(!s.value||!i.value)){try{a=new tr({canvas:s.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){_();return}a.setPixelRatio(1),a.setClearColor(0,0),u=new nr,f=new er(-1,1,1,-1,0,1),u.add(new Nt(new Jt(2,2),m.material)),_()}}function _(){if(!i.value||!a&&!l)return;const Z=i.value.clientWidth,fe=i.value.clientHeight;!Z||!fe||m.resize(Z,fe)&&(m.setScreenSize(Z,fe),h=m.dpr,o.setViewport(Z,fe),a?(a.setPixelRatio(h),a.setSize(Z,fe)):s.value&&(s.value.width=Math.round(Z*h),s.value.height=Math.round(fe*h),s.value.style.width=Z+"px",s.value.style.height=fe+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!s.value)return;m.paintOnly(!1);const fe=s.value.getContext("2d");fe&&fe.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,s.value.width,s.value.height);return}if(!a)return;const Z=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!Z,vignette:!Z,magnify:t.magnify}),m.setLens(t.magnify?r:null),m.syncUniforms(),m.paint(t.glow),a.render(u,f)}je(()=>t.theme,()=>p()),je(()=>t.curvature,()=>p()),je(()=>t.scanlines,()=>p()),je(()=>t.glow,()=>p()),je(()=>t.magnify,Z=>{Z||(r.x=Qt.x,r.y=Qt.y),p()});function d(Z){if(!s.value)return[-1,-1];const fe=s.value.getBoundingClientRect();return[Z.clientX-fe.left,Z.clientY-fe.top]}function x(Z){o.wheel(Z.deltaX,Z.deltaY,Z.shiftKey)}function b(Z){o.panStart(Z.clientX,Z.clientY),i.value&&i.value.focus()}function g(Z){o.panMove(Z.clientX,Z.clientY)}function R(){o.panEnd()}function A(Z){if(Z.touches.length!==1)return;const fe=Z.touches[0];o.panStart(fe.clientX,fe.clientY),i.value&&i.value.focus()}function T(Z){if(!o.panning()||Z.touches.length!==1)return;Z.preventDefault();const fe=Z.touches[0];o.panMove(fe.clientX,fe.clientY)}function I(){o.panEnd()}function y(Z){const[,fe]=d(Z);o.click(fe,Z.shiftKey)}function S(Z){o.keyDown(Z)}function U(Z){if(t.magnify&&s.value){const ie=qo(Z,s.value);r.x=ie.x,r.y=ie.y,p()}const[,fe]=d(Z);o.hover(fe)}function F(){o.leave(),r.x=Qt.x,r.y=Qt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine(Z){o.scrollToLine(Z)}});let B=null,X=null,K=0;const $=Gi("cathodeResetTick",we(0));je($,()=>te());function te(){cancelAnimationFrame(K),K=requestAnimationFrame(_)}function V(Z){Z.preventDefault()}function re(){a==null||a.dispose(),a=null,l=!1,v()}Ln(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",R),mn(()=>{var Z;v(),s.value&&(s.value.addEventListener("webglcontextlost",V),s.value.addEventListener("webglcontextrestored",re)),i.value&&(B=new ResizeObserver(()=>_()),B.observe(i.value),X=new IntersectionObserver(fe=>{fe.some(ie=>ie.isIntersecting)&&te()}),X.observe(i.value)),window.addEventListener("resize",te),(Z=window.visualViewport)==null||Z.addEventListener("resize",te),o.scrollY.value=o.maxScrollY.value})}),qn(()=>{var Z,fe,ie;document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",R),(Z=s.value)==null||Z.removeEventListener("webglcontextlost",V),(fe=s.value)==null||fe.removeEventListener("webglcontextrestored",re),B==null||B.disconnect(),X==null||X.disconnect(),window.removeEventListener("resize",te),(ie=window.visualViewport)==null||ie.removeEventListener("resize",te),cancelAnimationFrame(K),c(),o.dispose(),m.dispose()});const O=it(()=>il[t.theme]??il.none),j=it(()=>({background:O.value.bg}));return(Z,fe)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:On(j.value),tabindex:"0",onKeydown:S},[Pe("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-log-canvas",onWheel:Gs(x,["prevent"]),onMousemove:U,onMouseleave:F,onMousedown:b,onClick:y,onTouchstartPassive:A,onTouchmove:T,onTouchend:I,onTouchcancel:I},null,544)],36))}}),Cu=fi(pw,[["__scopeId","data-v-328a73e4"]]),Zr={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},Rm=.18,go=8,cf=22,mw=4,ci=8,Ss=56,uf=42,Qi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",gw="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",mc=4,vw=1,_w=1;function xw(n,e,t,i=0,s=!1){const r=s?uf:Ss,o=Math.max(0,e-ci-r),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function yw(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,s=-1/0,r=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>s&&(s=c.high),c.volume>r&&(r=c.volume))}if(!isFinite(i)||!isFinite(s)||i===s){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,r)}}const a=(s-i)*.04;return{min:i-a,max:s+a,maxVol:Math.max(1,r)}}function Mw(n,e,t=!1){const i=t?mw:cf,s=Math.max(1,n-go-i-mc),r=Math.max(0,Math.round(s*e)),o=s-r;return{priceY0:go,priceY1:go+o,volumeY0:go+o+mc,volumeY1:go+o+mc+r}}function ti(n,e,t,i){const s=e.max-e.min;return s<=0?(t+i)/2:t+(1-(n-e.min)/s)*(i-t)}function ws(n,e,t){return ci+(n-e+.5)*t}function xs(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function ff(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${s}:${r}`}function Sw(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),s=t/i;let r;return s<1.5?r=1:s<3?r=2:s<7?r=5:r=10,r*i}function Pm(n,e){var v,_,p,d,x;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Zr[e.theme]??Zr.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,s,r),t.fillStyle=a.bg,t.fillRect(0,0,s,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const c=xw(e.candles.length,s,e.slotW,e.scrollX,l),u=yw(e.candles,c.firstIdx,c.count),f=Mw(r,e.showVolume?e.volumeFraction:0,l),h=Math.max(vw,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,c.firstIdx+c.count);for(let b=c.firstIdx;b<m;b++){const g=e.candles[b];if(!g)continue;const R=ws(b,c.firstIdx,e.slotW),A=ti(g.open,u,f.priceY0,f.priceY1),T=ti(g.close,u,f.priceY0,f.priceY1),I=ti(g.high,u,f.priceY0,f.priceY1),y=ti(g.low,u,f.priceY0,f.priceY1),S=g.close>=g.open,U=S?a.wickBull:a.wickBear,F=S?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=F),t.strokeStyle=U,t.lineWidth=_w,t.beginPath(),t.moveTo(Math.round(R)+.5,I),t.lineTo(Math.round(R)+.5,y),t.stroke(),t.fillStyle=F;const B=Math.min(A,T),X=Math.max(1,Math.abs(T-A)),K=Math.round(R-h/2),$=Math.round(B),te=Math.round(X);if(t.fillRect(K,$,h,te),e.glow&&(t.shadowBlur=4,t.fillRect(K,$,h,te)),t.shadowBlur=0,e.showVolume&&u.maxVol>0){const V=Math.round(g.volume/u.maxVol*(f.volumeY1-f.volumeY0));V>0&&(t.fillStyle=S?a.volumeBull:a.volumeBear,t.fillRect(Math.round(R-h/2),f.volumeY1-V,h,V))}}if((v=e.overlays)!=null&&v.length){const b={above:0,below:0},g=e.overlays.filter(A=>A.kind!=="hline"&&!!A.label).length,R=g?14+14*g+12:8;for(const A of e.overlays)A.kind==="hline"?ww(t,A,s,u,f,a,l,b,R):bw(t,A,c,u,f,e.slotW)}(_=e.markers)!=null&&_.length&&Lw(t,a,e.markers,e.candles,c,u,f,e.slotW),Iw(t,a,u,f,s,l),l||(Uw(t,a,e.candles,c,e.slotW,r),Pw(t,a,e.candles,s,r)),(p=e.overlays)!=null&&p.length&&Tw(t,a,e.overlays,f),e.hover&&(Fw(t,a,e.candles,c,u,f,e.slotW,e.hover,s),Aw(t,a,e.candles,c,e.slotW,e.hover,f,((d=e.overlays)==null?void 0:d.length)??0),(x=e.markers)!=null&&x.length&&Rw(t,a,e.markers,e.candles,c,u,f,e.slotW,e.hover,s)),t.restore()}function bw(n,e,t,i,s,r){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(ci,s.priceY0,999999,s.priceY1-s.priceY0),n.clip(),e.kind==="line")wa(n,e.data,t.firstIdx,o,r,i,s,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=Dm(e.color,e.fillAlpha??.08);Ew(n,e.upper,e.lower,t.firstIdx,o,r,i,s,l),wa(n,e.upper,t.firstIdx,o,r,i,s,e.color,1,!1),wa(n,e.lower,t.firstIdx,o,r,i,s,e.color,1,!1),(a=e.middle)!=null&&a.length&&wa(n,e.middle,t.firstIdx,o,r,i,s,e.color,1,e.middleDashed!==!1)}n.restore()}function ww(n,e,t,i,s,r,o,a={above:0,below:0},l=8){const c=ti(e.price,i,s.priceY0,s.priceY1),u=c<s.priceY0-.5,f=c>s.priceY1+.5,h=u||f,m=h?u?a.above++:a.below++:0,v=h?u?s.priceY0+l+m*20:s.priceY1-8-m*20:c,_=o?uf:Ss,p=Math.round(v)+.5;n.save(),h||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(ci,p),n.lineTo(t-_,p),n.stroke(),n.setLineDash([]));let d=e.label??xs(e.price);if(h&&d!==""&&(d=(u?"↑ ":"↓ ")+d),d!==""){n.font=Qi,n.textBaseline="middle",n.textAlign="left";const x=n.measureText(d).width,b=4,g=2,R=ci+2;n.fillStyle=e.color,h&&(n.globalAlpha=.85),n.fillRect(R,v-7-g,x+b*2,14+g*2),n.globalAlpha=1,n.fillStyle=r.bg&&!r.bg.startsWith("rgba(0,0,0,0)")?r.bg:"#0d1520",n.fillText(d,R+b,v)}n.restore()}function wa(n,e,t,i,s,r,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=ws(f,t,s),v=ti(h,r,o.priceY0,o.priceY1);u?n.lineTo(m,v):(n.moveTo(m,v),u=!0)}u&&n.stroke(),n.setLineDash([])}function Ew(n,e,t,i,s,r,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=s;f++){const h=e[f],m=t[f],v=f<s&&typeof h=="number"&&typeof m=="number"&&isFinite(h)&&isFinite(m);if(v&&!c&&(u=f,c=!0),!v&&c||f===s&&c){const _=v?f+1:f;n.beginPath();for(let p=u;p<_;p++){const d=ws(p,i,r),x=ti(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,x):n.lineTo(d,x)}for(let p=_-1;p>=u;p--){const d=ws(p,i,r),x=ti(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,x)}n.closePath(),n.fill(),c=!1}}}function Dm(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),s=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${i},${s},${r},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function Tw(n,e,t,i){const s=t.filter(_=>_.kind!=="hline"&&!!_.label);if(!s.length)return;n.save(),n.font=Qi;const r=8,o=5,a=12,l=6,c=14;let u=0;for(const _ of s){const p=n.measureText(_.label).width;p>u&&(u=p)}const f=r*2+a+l+u,h=o*2+c*s.length,m=ci+4,v=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,v,f,h),n.textBaseline="middle",n.textAlign="left";for(let _=0;_<s.length;_++){const p=s[_],d=v+o+c*(_+.5),x=m+r;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(x,d),n.lineTo(x+a,d),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=Dm(p.color,p.fillAlpha??.2),n.fillRect(x,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(x+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,x+a+l,d)}n.restore()}function Aw(n,e,t,i,s,r,o,a){const l=Math.floor((r.x-ci)/s),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",v=[["O",xs(u.open),void 0],["H",xs(u.high),void 0],["L",xs(u.low),void 0],["C",xs(u.close),void 0],["V",Cw(u.volume),void 0],["",`${m}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Qi,n.textBaseline="middle",n.textAlign="left";const _=8,p=4,d=14;let x=_;for(const[A,T]of v){const I=A?`${A} ${T}`:T,y=n.measureText(I).width+12;x+=y}x+=_-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),g=ci+4;n.fillStyle=e.panelBg,n.fillRect(g,b,x,d+p*2);let R=g+_;for(let A=0;A<v.length;A++){const[T,I,y]=v[A];n.fillStyle=e.text,T&&(n.globalAlpha=.6,n.fillText(T+" ",R,b+p+d/2),n.globalAlpha=1,R+=n.measureText(T+" ").width),y&&(n.fillStyle=y),n.fillText(I,R,b+p+d/2),R+=n.measureText(I).width+12}n.restore()}function Cw(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function Rw(n,e,t,i,s,r,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,s.firstIdx+s.count),m=9;let v=null;for(const I of t){let y=0,S=i.length-1,U=-1;for(;y<=S;){const X=y+S>>1,K=i[X].start-I.timestamp;if(Math.abs(K)<=f){U=X;break}K<0?y=X+1:S=X-1}if(U<0||U<s.firstIdx||U>=h)continue;const F=ws(U,s.firstIdx,a),B=ti(I.price,r,o.priceY0,o.priceY1);if(Math.abs(l.x-F)<=m&&Math.abs(l.y-B)<=m){v={m:I,x:F,y:B};break}}if(!v)return;const _=ff(v.m.timestamp),p=[`${v.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${_}`,`@ ${xs(v.m.price)}`];v.m.label&&p.push(v.m.label),n.save(),n.font=Qi,n.textBaseline="top",n.textAlign="left";const d=6,x=14;let b=0;for(const I of p){const y=n.measureText(I).width;y>b&&(b=y)}const g=b+d*2,R=p.length*x+d*2;let A=v.x+12;A+g>c-Ss&&(A=v.x-12-g);let T=v.y-R/2;T<o.priceY0&&(T=o.priceY0),T+R>o.priceY1&&(T=o.priceY1-R),n.fillStyle=e.panelBgSolid,n.strokeStyle=v.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(A,T,g,R),n.strokeRect(A+.5,T+.5,g-1,R-1);for(let I=0;I<p.length;I++){const y=p[I];n.fillStyle=I===0?v.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(y,A+d,T+d+I*x)}n.restore()}function Pw(n,e,t,i,s){if(t.length<2)return;const r=t[1].start-t[0].start,o=Dw(r);if(!o)return;n.save(),n.font=Qi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-Ss-a,f=s-cf+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function Dw(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,s=24*i,r=7*s;return n>=r&&n%r===0?n/r+"W":n>=s&&n%s===0?n/s+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function Lw(n,e,t,i,s,r,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,s.firstIdx+s.count),f=m=>{let v=0,_=i.length-1;for(;v<=_;){const p=v+_>>1,d=i[p].start-m;if(Math.abs(d)<=c)return p;d<0?v=p+1:_=p-1}return-1},h=7;for(const m of t){const v=f(m.timestamp);if(v<0||v<s.firstIdx||v>=u)continue;const _=ws(v,s.firstIdx,a),p=ti(m.price,r,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(_,p-h),n.lineTo(_-h,p+h-1),n.lineTo(_+h,p+h-1)):(n.moveTo(_,p+h),n.lineTo(_-h,p-h+1),n.lineTo(_+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function Iw(n,e,t,i,s,r=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=r?Math.max(2,Math.min(4,Math.round(a/36))):6,c=Sw(o,l),u=Math.ceil(t.min/c)*c,f=r?uf:Ss;n.font=r?gw:Qi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const m=ti(h,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(ci,Math.round(m)+.5),n.lineTo(s-f,Math.round(m)+.5),n.stroke(),n.fillText(xs(h),s-f+3,m))}n.globalAlpha=1}function Uw(n,e,t,i,s,r){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Qi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=ws(c,i.firstIdx,s);n.fillText(ff(u.start),f,r-cf+4)}n.globalAlpha=1}function Fw(n,e,t,i,s,r,o,a,l){const c=Math.floor((a.x-ci)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=ws(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,r.priceY0),n.lineTo(Math.round(h)+.5,r.volumeY1||r.priceY1),n.stroke();const m=Math.max(r.priceY0,Math.min(r.priceY1,a.y));n.beginPath(),n.moveTo(ci,Math.round(m)+.5),n.lineTo(l-Ss,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const v=s.max-s.min;if(v>0){const d=s.max-(m-r.priceY0)/(r.priceY1-r.priceY0)*v,x=xs(d);n.font=Qi,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(x).width,g=4,R=2;n.fillStyle=e.accent,n.fillRect(l-Ss+2,m-7-R,b+g*2,14+R*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(x,l-Ss+2+g,m)}n.font=Qi,n.textBaseline="top",n.textAlign="center";const _=ff(f.start),p=n.measureText(_).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,r.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(_,h,r.volumeY1+4),n.restore()}const gc=.25,vc=6,ld=8;function Lm(n){const e=hl();return e.run(()=>{const t=we(0),i=we(0),s=we(0),r=we(1),o=we(null),a=it(()=>Math.max(1,n.slotW()*r.value));je([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var I;return(I=n.compact)==null?void 0:I.call(n)},()=>n.candles(),()=>{var I;return(I=n.overlays)==null?void 0:I.call(n)},()=>{var I;return(I=n.markers)==null?void 0:I.call(n)}],()=>n.host.redraw(),{deep:!1}),je(()=>{var I;return(I=n.colors)==null?void 0:I.call(n)},()=>n.host.redraw(),{deep:!0}),je(s,()=>n.host.redraw()),je(r,()=>n.host.redraw()),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw());function l(I,y){t.value=I,i.value=y}function c(I){var B;const y=a.value;if(y<=0)return 0;const S=((B=n.candles())==null?void 0:B.length)??0,U=Math.max(1,Math.floor((t.value||1)/y)),F=Math.max(0,S-U);return Math.max(0,Math.min(I,F*y))}function u(I,y,S,U){if(I!==0||S&&y!==0){const K=I!==0?I:y;s.value=c(s.value+K);return}if(y===0)return;const F=n.candles(),B=a.value,X=Math.exp(-y*.0015);if(U>=0&&B>0&&(F!=null&&F.length)){const K=Math.max(1,Math.floor((t.value||1)/B)),te=Math.max(0,F.length-K-Math.floor(s.value/B))+(U-ld)/B,V=Math.max(gc,Math.min(vc,r.value*X));r.value=V;const re=n.slotW()*V,O=Math.max(1,Math.floor((t.value||1)/re)),j=te-(U-ld)/re,Z=Math.max(0,F.length-O-j);s.value=c(Z*re)}else r.value=Math.max(gc,Math.min(vc,r.value*X))}let f=!1,h=0,m=0;function v(I){f=!0,h=I,m=s.value,o.value=null}function _(I){return f?(s.value=c(m+(I-h)),!0):!1}function p(){f=!1}const d=()=>f;function x(I,y){f||(o.value=I<0||y<0?null:{x:I,y})}function b(){o.value=null}function g(I){r.value=Math.max(gc,Math.min(vc,r.value*Math.exp(I*.18))),s.value=c(s.value)}function R(I){const y=a.value,S=I.shiftKey?20:3;switch(I.key){case"ArrowLeft":I.preventDefault(),s.value=c(s.value+y*S);break;case"ArrowRight":I.preventDefault(),s.value=c(s.value-y*S);break;case"ArrowUp":I.preventDefault(),g(1);break;case"ArrowDown":I.preventDefault(),g(-1);break;case"Home":I.preventDefault(),s.value=c(Number.MAX_SAFE_INTEGER);break;case"End":I.preventDefault(),s.value=0;break}}function A(I,{dpr:y,glow:S}){var U,F,B,X;Pm(I,{candles:n.candles(),slotW:a.value,scrollX:s.value,theme:n.theme(),glow:S,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(U=n.overlays)==null?void 0:U.call(n),markers:(F=n.markers)==null?void 0:F.call(n),compact:(B=n.compact)==null?void 0:B.call(n),colors:(X=n.colors)==null?void 0:X.call(n),dpr:y})}function T(){e.stop()}return{canvasW:t,canvasH:i,scrollX:s,zoomLevel:r,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:c,wheel:u,panStart:v,panMove:_,panEnd:p,panning:d,hoverAt:x,leave:b,keyDown:R,applyZoom:g,paint:A,dispose:T}})}const Nw=ui({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:Rm},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=we(null),i=we(null),s={...Qt},r=Lm({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>_()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let c,u,f=1;const h=new ts({paint:(O,{dpr:j,glow:Z})=>r.paint(O,{dpr:j,glow:Z})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,v();return}try{o=new tr({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){v();return}o.setPixelRatio(1),o.setClearColor(0,0),c=new nr,u=new er(-1,1,1,-1,0,1),c.add(new Nt(new Jt(2,2),h.material)),v()}}function v(){if(!t.value||!o&&!a)return;const O=t.value.clientWidth,j=t.value.clientHeight;!O||!j||h.resize(O,j)&&(h.setScreenSize(O,j),f=h.dpr,r.setViewport(O,j),o?(o.setPixelRatio(f),o.setSize(O,j)):i.value&&(i.value.width=Math.round(O*f),i.value.height=Math.round(j*f),i.value.style.width=O+"px",i.value.style.height=j+"px"),_())}function _(){if(!h.canvas.width)return;if(a){if(!i.value)return;h.paintOnly(!1);const j=i.value.getContext("2d");j&&(j.clearRect(0,0,i.value.width,i.value.height),j.drawImage(h.canvas,0,0));return}if(!o)return;const O=e.theme==="paper";h.setLook({curvature:e.curvature,scanlines:e.scanlines&&!O,vignette:!O,magnify:e.magnify}),h.setLens(e.magnify?s:null),h.syncUniforms(),h.paint(e.glow),o.render(c,u)}je(()=>e.curvature,()=>_()),je(()=>e.scanlines,()=>_()),je(()=>e.glow,()=>_()),je(()=>e.magnify,O=>{O||(s.x=Qt.x,s.y=Qt.y),_()}),je(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,d=null,x=0;const b=Gi("cathodeResetTick",we(0));je(b,()=>g());function g(){cancelAnimationFrame(x),x=requestAnimationFrame(v)}function R(O){O.preventDefault()}function A(){o==null||o.dispose(),o=null,a=!1,m()}function T(O){if(!i.value)return[-1,-1];const j=i.value.getBoundingClientRect();return[O.clientX-j.left,O.clientY-j.top]}function I(O){const[j]=T(O);r.wheel(O.deltaX,O.deltaY,O.shiftKey,j)}function y(O){O.button===0&&(r.panStart(O.clientX),t.value&&t.value.focus())}function S(O){r.keyDown(O)}function U(O){r.panMove(O.clientX)}function F(){r.panEnd()}function B(O){O.touches.length===1&&r.panStart(O.touches[0].clientX)}function X(O){!r.panning()||O.touches.length!==1||(O.preventDefault(),r.panMove(O.touches[0].clientX))}function K(){r.panEnd()}function $(O){if(e.magnify&&i.value){const fe=qo(O,i.value);s.x=fe.x,s.y=fe.y,_()}const[j,Z]=T(O);r.hoverAt(j,Z)}function te(){r.leave(),s.x=Qt.x,s.y=Qt.y,_()}Ln(()=>{document.addEventListener("mousemove",U),document.addEventListener("mouseup",F),mn(()=>{var O;m(),i.value&&(i.value.addEventListener("webglcontextlost",R),i.value.addEventListener("webglcontextrestored",A)),t.value&&(p=new ResizeObserver(()=>v()),p.observe(t.value),d=new IntersectionObserver(j=>{j.some(Z=>Z.isIntersecting)&&g()}),d.observe(t.value)),window.addEventListener("resize",g),(O=window.visualViewport)==null||O.addEventListener("resize",g)})}),qn(()=>{var O,j,Z;document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",F),(O=i.value)==null||O.removeEventListener("webglcontextlost",R),(j=i.value)==null||j.removeEventListener("webglcontextrestored",A),p==null||p.disconnect(),d==null||d.disconnect(),window.removeEventListener("resize",g),(Z=window.visualViewport)==null||Z.removeEventListener("resize",g),cancelAnimationFrame(x),l(),r.dispose(),h.dispose()});const V=it(()=>Zr[e.theme]??Zr.none),re=it(()=>({background:V.value.bg}));return(O,j)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:On(re.value),tabindex:"0",onKeydown:S},[Pe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Gs(I,["prevent"]),onMousedown:y,onMousemove:$,onMouseleave:te,onTouchstartPassive:B,onTouchmove:X,onTouchend:K,onTouchcancel:K},null,544)],36))}}),cd=fi(Nw,[["__scopeId","data-v-f2099684"]]),Ow=["disabled"],Bw=ui({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=we(null),o=we(null),a=we(""),l=we([]),c=we(-1);let u="";function f(R){R.trim()&&(l.value.length&&l.value[l.value.length-1]===R||(l.value.push(R),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(R){if(!i.disabled){if(R.key==="Enter"){R.preventDefault();const A=a.value;A.trim()&&f(A),c.value=-1,a.value="",s("submit",A);return}if(R.key==="ArrowUp"){if(!l.value.length)return;R.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(R.key==="ArrowDown"){if(c.value===-1)return;R.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=we(!0);let v=null;function _(){v||(v=setInterval(()=>{m.value=!m.value},530))}function p(){v&&(clearInterval(v),v=null),m.value=!0}const d=it(()=>{let R;return i.disabled?R=" ":i.busy?R="█":R=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${R}`}}),x=it(()=>[...i.entries,d.value]);function b(){var R;i.disabled||(R=o.value)==null||R.focus()}je(()=>i.busy,(R,A)=>{A&&!R&&!i.disabled&&mn(()=>{var T;return(T=o.value)==null?void 0:T.focus()})});function g(){var R;(R=o.value)==null||R.focus()}return e({focus:g}),Ln(()=>{_(),i.disabled||requestAnimationFrame(()=>{var R;return(R=o.value)==null?void 0:R.focus()})}),qn(()=>{p()}),(R,A)=>(Je(),gt("div",{ref_key:"wrapEl",ref:r,class:"cathode-terminal-wrap",onClick:b},[Rt(Cu,{entries:x.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Vt(Pe("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":A[0]||(A[0]=T=>a.value=T),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,Ow),[[Fp,a.value]])],512))}}),ud=fi(Bw,[["__scopeId","data-v-a2b39934"]]),hf=we(0),Ru=28;let Pu=10,sl="cathode.layout",rl=!1;const sn=we({});function kw(n,e="cathode.layout"){if(!rl){rl=!0,sl=e;try{const t=localStorage.getItem(sl);if(t){sn.value=JSON.parse(t),fd();return}}catch{}sn.value={...n},fd()}}function fd(){let n=10;for(const e of Object.values(sn.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);Pu=n}function ir(){localStorage.setItem(sl,JSON.stringify(sn.value))}function zw(n){rl=!1,localStorage.removeItem(sl),sn.value={...n},ir(),rl=!0,hf.value++}function Im(n){Pu++,sn.value[n]&&(sn.value[n].zIndex=Pu)}function Hw(n,e){sn.value[n].visible=e,ir()}function Vw(n,e){sn.value[n].minimized=e,e&&(sn.value[n].maximized=!1),ir()}function Gw(n,e){sn.value[n].maximized=e,e&&(sn.value[n].minimized=!1,Im(n)),ir()}function Ww(n,e,t){sn.value[n].x=Math.round(e),sn.value[n].y=Math.round(t),ir()}function Xw(n,e,t){sn.value[n].w=Math.round(e),sn.value[n].h=Math.round(t),ir()}function Um(){return{containers:sn,TITLEBAR_H:Ru,load:kw,save:ir,reset:zw,bringToFront:Im,setVisible:Hw,setMinimized:Vw,setMaximized:Gw,updatePos:Ww,updateSize:Xw}}const Yw={class:"ws-toolbar"},$w={key:0,class:"ws-restore-menu"},qw={key:0,class:"ws-restore-empty"},Kw=["onClick"],jw=ui({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:s,setVisible:r}=Um(),o=we(null);Cc("cathodeWorkspace",o),Cc("cathodeResetTick",hf),Ln(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,x=e.initialLayout??{};i(x,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var x;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const d=(x=o.value)==null?void 0:x.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||s(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(x=>x.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=we(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){r(p,!0),u.value=!1}function m(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function v(p){p.key==="Escape"&&(u.value=!1)}Ln(()=>{document.addEventListener("click",m),document.addEventListener("keydown",v)}),qn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",v)});function _(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(Je(),gt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[Pc(p.$slots,"default",{},void 0),Pc(p.$slots,"overlay",{},void 0),Pe("div",Yw,[n.initialLayout?(Je(),gt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):jt("",!0),d[1]||(d[1]=Pe("div",{class:"ws-sep"},null,-1)),Pe("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=x=>u.value=!u.value)}," ⊞ Restore Panel ")]),Rt(Gv,{name:"menu"},{default:ks(()=>[u.value?(Je(),gt("div",$w,[d[3]||(d[3]=Pe("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?jt("",!0):(Je(),gt("div",qw," No closed panels ")),(Je(!0),gt(un,null,Zg(f(),x=>(Je(),gt("div",{key:x,class:"ws-restore-item",onClick:b=>h(x)},[d[2]||(d[2]=Pe("span",{class:"ws-restore-icon"},"⊞",-1)),ln(" "+xn(_(x)),1)],8,Kw))),128))])):jt("",!0)]),_:1})],544))}}),Zw=fi(jw,[["__scopeId","data-v-5838d04b"]]),Jw=["id"],Qw={class:"cc-title"},eE={key:0,class:"cc-size-badge"},tE={class:"cc-controls"},nE=["title"],iE={class:"cc-body"},sE=200,rE=80,hd=60,oE=ui({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:s,setMinimized:r,setMaximized:o,updatePos:a,updateSize:l}=Um(),c=Gi("cathodeWorkspace",we(null)),u=it(()=>t.value[e.id]),f=it(()=>{const O=u.value,j=e.curvature??0;if(!O)return{};const Z={"--curvature":Math.abs(j)};return O.maximized?{...Z,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:O.zIndex}:{...Z,left:O.x+"px",top:O.y+"px",width:O.w+"px",height:O.minimized?Ru+"px":O.h+"px",zIndex:O.zIndex,display:O.visible?"flex":"none"}});let h=!1,m=0,v=0;function _(O){var fe;if(O.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const j=(fe=c.value)==null?void 0:fe.querySelector(`#cc-${e.id}`);if(!j)return;const Z=j.getBoundingClientRect();m=O.clientX-Z.left,v=O.clientY-Z.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),O.preventDefault()}function p(O){var de;if(!h||!c.value)return;const j=c.value.getBoundingClientRect(),Z=((de=u.value)==null?void 0:de.w)??300;let fe=O.clientX-j.left-m,ie=O.clientY-j.top-v;fe=Math.max(hd-Z,Math.min(j.width-hd,fe)),ie=Math.max(0,Math.min(j.height-Ru,ie)),a(e.id,fe,ie)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let x=!1,b=0,g=0,R=0,A=0;const T=we("");function I(O){u.value.maximized||(i(e.id),x=!0,b=O.clientX,g=O.clientY,R=u.value.w,A=u.value.h,document.addEventListener("mousemove",y),document.addEventListener("mouseup",S),O.preventDefault(),O.stopPropagation())}function y(O){if(!x)return;const j=Math.max(sE,R+(O.clientX-b)),Z=Math.max(rE,A+(O.clientY-g));l(e.id,j,Z),T.value=`${Math.round(j)}×${Math.round(Z)}`}function S(){x=!1,T.value="",document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",S),U.value++}const U=we(0);je(hf,()=>{U.value++}),qn(()=>{var O;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",S),(O=F.value)==null||O.removeEventListener("scroll",X),K()});const F=we(null);function B(O){if(e.canvas)return[];const j=O.children[0];return j?Array.from(j.children):[]}function X(){const O=F.value,j=e.curvature??0;if(!O)return;const Z=B(O);if(!Z.length)return;const fe=O.clientHeight,ie=fe/2,de=j*.0038;Z.forEach(xe=>{if(!xe.dataset.origFs){const se=getComputedStyle(xe);xe.dataset.origFs=se.fontSize,xe.dataset.origLh=se.lineHeight}if(j===0){xe.style.fontSize="",xe.style.lineHeight="";return}const ve=xe.getBoundingClientRect(),Be=O.getBoundingClientRect(),ze=ve.top-Be.top+ve.height/2,He=Math.min(1,Math.abs(ze-ie)/(fe/2)),ye=1+de*Math.cos(He*Math.PI/2),L=parseFloat(xe.dataset.origFs),P=xe.dataset.origLh,w=P==="normal"?L*1.4:parseFloat(P);isNaN(L)||(xe.style.fontSize=`${(L*ye).toFixed(2)}px`),isNaN(w)||(xe.style.lineHeight=`${(w*ye).toFixed(2)}px`)})}function K(){const O=F.value;O&&B(O).forEach(j=>{j.style.fontSize="",j.style.lineHeight="",delete j.dataset.origFs,delete j.dataset.origLh})}je(()=>e.curvature,O=>{(O??0)===0?K():X()}),Ln(()=>{var O;(O=F.value)==null||O.addEventListener("scroll",X,{passive:!0}),mn(X)});function $(){r(e.id,!u.value.minimized),mn(()=>{U.value++})}function te(){o(e.id,!u.value.maximized),mn(()=>{U.value++})}function V(){s(e.id,!1)}function re(){i(e.id)}return(O,j)=>u.value&&u.value.visible?(Je(),gt("div",{key:0,id:`cc-${n.id}`,class:Gt(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:On(f.value),onMousedown:re},[Pe("div",{class:"cc-titlebar",onMousedown:_},[j[0]||(j[0]=Pe("span",{class:"cc-status-dot"},null,-1)),Pe("span",Qw,xn(n.title),1),T.value?(Je(),gt("span",eE,xn(T.value),1)):jt("",!0),Pe("div",tE,[Pe("button",{class:"cc-btn",title:"Minimize",onClick:Gs($,["stop"])},"─"),Pe("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Gs(te,["stop"])},xn(u.value.maximized?"⤡":"⤢"),9,nE),Pe("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Gs(V,["stop"])},"✕")])],32),Vt(Pe("div",iE,[Pe("div",{ref_key:"bodyEl",ref:F,class:"cc-screen",onScroll:X},[Pc(O.$slots,"default",{resizeKey:U.value},void 0),j[1]||(j[1]=Pe("div",{class:"cc-shine"},null,-1))],544)],512),[[ds,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),gt("div",{key:0,class:"cc-resize",onMousedown:Gs(I,["stop"])},null,32)):jt("",!0)],46,Jw)):jt("",!0)}}),Ea=fi(oE,[["__scopeId","data-v-ca0af4ca"]]),aE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,lE=`
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
`,cE=100,uE=ui({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=we(null),s=we(null);let r=null,o=!1;function a(){if(r){try{r.forceContextLoss()}catch{}try{r.dispose()}catch{}r=null}}let l,c,u,f,h,m=null,v=0;function _(A){A-v>=cE&&(x(),v=A),m=requestAnimationFrame(_)}function p(){if(!i.value||!h)return;const A=i.value.clientWidth,T=i.value.clientHeight;A<=0||T<=0||h.width===A&&h.height===T||(h.width=A,h.height=T,r&&r.setSize(A,T,!1),s.value&&(s.value.width=A,s.value.height=T,s.value.style.width=A+"px",s.value.style.height=T+"px"))}function d(){if(!(h!=null&&h.width))return;const A=h.getContext("2d");if(!A)return;const T=h.width,I=h.height,y=t[e.theme]??t.none;A.clearRect(0,0,T,I),A.fillStyle=y.bg,A.fillRect(0,0,T,I);const S=Date.now(),U=(S/500|0)%2===0,F=(S/400|0)%4;A.font=`bold ${Math.max(14,Math.min(T,I)*.06)}px monospace`,A.textAlign="center",A.textBaseline="middle",A.fillStyle=y.text,e.glow&&(A.shadowColor=y.text,A.shadowBlur=14);const B=".".repeat(F).padEnd(3," "),X=`${e.label}${B}`;if(A.fillText(X,T/2,I/2),A.shadowBlur=0,U){const K=A.measureText(X),$=A.measureText("M").width,te=parseFloat(A.font),V=T/2+K.width/2+4,re=I/2-te/2+2;A.fillStyle=y.cursor,e.glow&&(A.shadowColor=y.cursor,A.shadowBlur=12),A.fillRect(V,re,$*.7,te*.95),A.shadowBlur=0}}function x(){if(!h)return;if(d(),o){if(!s.value)return;const T=s.value.getContext("2d");T&&T.drawImage(h,0,0);return}if(!r||!u||!f)return;const A=e.theme==="paper";u.uniforms.uStrength.value=Js(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!A?1:0,u.uniforms.uVignette.value=A?0:1,f.needsUpdate=!0,r.render(l,c)}function b(){if(!(!s.value||!i.value)){h=document.createElement("canvas");try{r=new tr({canvas:s.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!r.getContext()&&(r.dispose(),r=null,o=!0),o){p();return}r.setPixelRatio(1),r.setClearColor(0,0),l=new nr,c=new er(-1,1,1,-1,0,1),f=new wi(h),f.minFilter=en,f.magFilter=en,u=new $n({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:aE,fragmentShader:lE,transparent:!0}),l.add(new Nt(new Jt(2,2),u)),p()}}let g=null;Ln(()=>{b(),x(),m=requestAnimationFrame(_),i.value&&(g=new ResizeObserver(()=>p()),g.observe(i.value))}),qn(()=>{m!==null&&cancelAnimationFrame(m),g==null||g.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>x());const R=it(()=>({background:(t[e.theme]??t.none).bg}));return(A,T)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:On(R.value)},[Pe("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-loader-canvas"},null,512)],4))}}),Ui=fi(uE,[["__scopeId","data-v-d00e5f47"]]),Fm=22,Nm=6;function df(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),s=Fm+i+Nm;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*s-n.scrollY,w:t,h:s})),rowH:s,totalH:Math.ceil(n.count/e)*s,cols:e}}function Du(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const Om=(n,e)=>Math.max(0,n-e);function fE(n,e,t,i,s){const r=t.candles[t.candles.length-1],o=`${i}x${s}@${e.dpr}|${t.candles.length}|${r?r.start+":"+r.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(s*e.dpr);const c=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),u=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return Pm(l,{candles:t.candles,slotW:c,scrollX:Math.max(0,t.candles.length*c-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:u,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function Bm(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const s=e.dpr,r={...Zr[e.theme]??Zr.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),r.bg&&r.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=r.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(s,0,0,s,0,0);const{rects:o}=df({count:e.cells.length,width:n.width/s,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=Fm,l=Nm;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let c=0;c<e.cells.length;c++){const u=e.cells[c],f=o[c];if(f.y+f.h<0||f.y>n.height/s)continue;const h=f.x+l/2,m=f.w-l;i.strokeStyle=u.open?r.candleBull:r.gridline,i.lineWidth=c===e.hoveredCell?2:1,i.strokeRect(h+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(h,f.y,m,a),i.clip();const v=f.y+a/2+1,_=u.note?i.measureText(u.note).width+(u.open?22:12):u.open?16:0,p=u.badge?i.measureText(u.badge).width+6:0,d=m-14-p-_;let x=u.title;if(i.measureText(x).width>d){for(;x.length>1&&i.measureText(x+"…").width>d;)x=x.slice(0,-1);x+="…"}let b=h+7;i.fillStyle=r.text,i.textAlign="left",i.fillText(x,b,v),b+=i.measureText(x).width+6,u.badge&&(i.fillStyle=r.accent,i.fillText(u.badge,b,v)),u.note&&(i.textAlign="right",i.fillStyle=u.noteColor||r.accent,i.fillText(u.note,h+m-(u.open?16:7),v),i.textAlign="left"),i.restore(),u.open&&(i.fillStyle=r.candleBull,i.beginPath(),i.arc(h+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const g=f.y+a,R=f.h-a-l;u.candles.length?i.drawImage(fE(t,e,u,m-2,R-1),h+1,g,m-2,R-1):(i.fillStyle=r.accent,i.textAlign="center",i.fillText("· · ·",h+m/2,g+R/2),i.textAlign="left")}}const hE=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,dE=ui({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,s=we(null),r=we(null),o=we(-1),a=we(0),l={...Qt};let c=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),u=null,f=!1;function h(){if(u){try{u.forceContextLoss()}catch{}try{u.dispose()}catch{}u=null}}let m,v,_,p,d;const x=we(0),b=we(0),g=`
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
`;function R(){if(!(!r.value||!s.value)){d=document.createElement("canvas");try{u=new tr({canvas:r.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!u.getContext()&&(u.dispose(),u=null,f=!0),f){A();return}u.setPixelRatio(c),u.setClearColor(0,0),m=new nr,v=new er(-1,1,1,-1,0,1),p=new wi(d),p.minFilter=en,p.magFilter=en,_=new $n({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...wm()},vertexShader:hE,fragmentShader:g,transparent:!0}),m.add(new Nt(new Jt(2,2),_)),A()}}function A(){if(!s.value||!u&&!f)return;const V=s.value.clientWidth,re=s.value.clientHeight;if(!V||!re)return;x.value=V,b.value=re,c=Math.min(window.devicePixelRatio||1,2);const O=t.bendField?Math.round(V*xm(t.curvature)):V,j=Math.round(O*c),Z=Math.round(re*c),fe=d.width!==j||d.height!==Z;d.width=j,d.height=Z,u?(fe&&p&&(p.dispose(),p=new wi(d),p.minFilter=en,p.magFilter=en,_.uniforms.uTex.value=p),u.setPixelRatio(c),u.setSize(V,re)):r.value&&(r.value.width=Math.round(V*c),r.value.height=Math.round(re*c),r.value.style.width=V+"px",r.value.style.height=re+"px"),S()}function T(){return df({count:t.cells.length,width:((d==null?void 0:d.width)||0)/c,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const I=()=>Om(T().totalH,((d==null?void 0:d.height)||0)/c),y=new Map;function S(){var V;if(d!=null&&d.width){if(Bm(d,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:c},y),f){const re=(V=r.value)==null?void 0:V.getContext("2d");re&&r.value&&re.drawImage(d,0,0,d.width,d.height,0,0,r.value.width,r.value.height);return}!u||!_||!p||(_.uniforms.uStrength.value=Js(t.curvature),_.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,_.uniforms.uVignette.value=t.theme==="paper"?0:1,Em(_,t.magnify,l,x.value||d.width,b.value||d.height),p.needsUpdate=!0,u.render(m,v))}}function U(V){if(!r.value)return[-1,-1];const re=r.value.getBoundingClientRect();return _m(V.clientX-re.left,V.clientY-re.top,re.width,re.height,Js(t.curvature),((d==null?void 0:d.width)||re.width)/c,((d==null?void 0:d.height)||re.height)/c)}function F(V,re){return Du(T().rects,V,re)}function B(V){const[re,O]=U(V),j=F(re,O);j>=0&&i("cell-click",t.cells[j].id)}function X(V){if(t.magnify&&r.value){const Z=qo(V,r.value);l.x=Z.x,l.y=Z.y}const[re,O]=U(V),j=F(re,O);j!==o.value?(o.value=j,S()):t.magnify&&S(),r.value&&(r.value.style.cursor=j>=0?"pointer":"default")}function K(){o.value=-1,l.x=Qt.x,l.y=Qt.y,S()}function $(V){const re=I();re<=0||(V.preventDefault(),a.value=Math.max(0,Math.min(re,a.value+V.deltaY)),S())}let te=null;return Ln(()=>{R(),te=new ResizeObserver(()=>A()),s.value&&te.observe(s.value)}),qn(()=>{te==null||te.disconnect(),h(),y.clear()}),je(()=>[t.curvature,t.bendField],()=>mn(A)),je(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,I()),S()},{deep:!1}),(V,re)=>(Je(),gt("div",{ref_key:"wrapEl",ref:s,class:"cathode-candle-grid-wrap"},[Pe("canvas",{ref_key:"canvasEl",ref:r,onClick:B,onMousemove:X,onMouseleave:K,onWheel:$},null,544)],512))}}),pE=fi(dE,[["__scopeId","data-v-f4e5e064"]]),ol={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},dd=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,zt="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Pt=12;function _c(n,e,t){const i=[];for(const s of e.split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;r&&n.measureText(a).width>t?(i.push(r),r=o):r=a}i.push(r)}return i}function vo(n,e,t,i,s,r){const o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+s-o),n.quadraticCurveTo(e+i,t+s,e+i-o,t+s),n.lineTo(e+o,t+s),n.quadraticCurveTo(e,t+s,e,t+s-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function km(n,e){var T,I;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,s=n.width/i,r=n.height/i,o={...ol[e.theme]??ol.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r);const a=y=>y>0?o.right:y<0?o.left:o.neutral,l=a(e.value),c=(y,S=10)=>{e.glow&&(t.shadowColor=y,t.shadowBlur=S)},u=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,s-Pt*2);let h=Pt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${zt}`;const v=t.measureText(m).width;t.fillStyle=l,c(l,14),t.fillText(m,Pt,h+30),u();const _=Pt+v+14;e.stance&&(t.font=`700 14px ${zt}`,t.fillStyle=l,c(l,8),t.fillText(e.stance.toUpperCase(),_,h+15),u()),e.sub&&(t.font=`11px ${zt}`,t.fillStyle=o.dim,t.fillText(e.sub,_,h+31)),h+=48,t.font=`700 9px ${zt}`;const p=e.leftLabel.toUpperCase(),d=e.rightLabel.toUpperCase(),x=t.measureText(p).width,b=t.measureText(d).width,g=Pt+x+8,R=s-Pt-b-8,A=h+10;if(t.fillStyle=o.left,t.fillText(p,Pt,A+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(d,s-Pt,A+3),t.textAlign="left",R-g>24){const y=t.createLinearGradient(g,0,R,0);y.addColorStop(0,o.left),y.addColorStop(.45,o.surface),y.addColorStop(.55,o.surface),y.addColorStop(1,o.right),vo(t,g,A-4,R-g,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=y,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const S=(g+R)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(S,A-8),t.lineTo(S,A+8),t.stroke();for(const K of[.25,.75]){const $=g+K*(R-g);t.beginPath(),t.moveTo($,A-5),t.lineTo($,A+5),t.stroke()}const U=e.max-e.min||1,F=Math.max(0,Math.min(1,(e.shown-e.min)/U)),B=g+F*(R-g),X=a(e.shown);t.beginPath(),t.moveTo(B,A-10),t.lineTo(B-4.5,A-17),t.lineTo(B+4.5,A-17),t.closePath(),t.fillStyle=X,t.fill(),t.beginPath(),t.arc(B,A,6.5,0,Math.PI*2),t.fillStyle=X,c(X,12),t.fill(),u(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const K of e.marks??[]){const $=(K.value-e.min)/U;if($<0||$>1)continue;const te=g+$*(R-g),V=dd(o,K.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=V,t.lineWidth=1,t.beginPath(),t.moveTo(te,A-9),t.lineTo(te,A+9),t.stroke(),t.restore(),K.label){t.font=`700 8px ${zt}`,t.fillStyle=V;const re=t.measureText(K.label).width;t.fillText(K.label,Math.max(g,Math.min(R-re,te-re/2)),A+20)}}}if(h+=(T=e.marks)!=null&&T.some(y=>y.label)?42:30,e.meter){const y=e.meter,S=y.min??0,U=y.max??1,F=U-S||1,B=y.tone==="up"?o.right:y.tone==="down"?o.left:y.tone==="warn"?o.warn:o.neutral;y.label&&(t.font=`700 9px ${zt}`,t.fillStyle=o.dim,t.fillText(y.label.toUpperCase(),Pt,h+9)),y.hint&&(t.font=`9px ${zt}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(y.hint,s-Pt,h+9),t.textAlign="left"),(y.label||y.hint)&&(h+=15),t.font=`700 12px ${zt}`;const X=y.valueText??(y.value==null?"—":String(y.value)),K=t.measureText(X).width,$=Pt,te=s-Pt-K-10,V=h+6,re=!!((I=y.thresholds)!=null&&I.some(O=>O.label));if(te-$>24){if(vo(t,$,V-5,te-$,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),y.value!=null){const O=Math.max(0,Math.min(1,(y.value-S)/F));O>0&&(t.save(),vo(t,$,V-5,te-$,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=B,c(B,8),t.fillRect($,V-5,(te-$)*O,10),t.restore())}for(const O of y.thresholds??[]){const j=(O.value-S)/F;if(j<0||j>1)continue;const Z=$+j*(te-$),fe=dd(o,O.color);if(t.strokeStyle=fe,t.lineWidth=1,t.beginPath(),t.moveTo(Z,V-7),t.lineTo(Z,V+7),t.stroke(),O.label){t.font=`700 7.5px ${zt}`,t.fillStyle=fe;const ie=t.measureText(O.label).width;t.fillText(O.label,Math.max($,Math.min(te-ie,Z-ie/2)),V+17)}}}t.font=`700 12px ${zt}`,t.fillStyle=B,t.textAlign="right",c(B,8),t.fillText(X,s-Pt,V+4),u(),t.textAlign="left",h+=re?32:22}if(e.caption){t.font=`600 11.5px ${zt}`;const y=_c(t,e.caption,f-18),S=y.length*15+12;vo(t,Pt,h,f,S,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,y.forEach((U,F)=>t.fillText(U,Pt+9,h+17+F*15)),h+=S+10}if(e.note){t.font=`10px ${zt}`,t.fillStyle=o.dim;const y=_c(t,e.note,f);y.forEach((S,U)=>t.fillText(S,Pt,h+10+U*14)),h+=y.length*14+10}if(e.items.length){let U=Pt;for(const F of e.items){const B=F.side==="left"?o.left:F.side==="right"?o.right:o.neutral,X=F.side==="left"?e.sideLetters[0]:F.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${zt}`;const K=t.measureText(F.label).width;t.font=`700 8px ${zt}`;const $=X?t.measureText(X).width+6:0;t.font=`10px ${zt}`;const te=F.value?t.measureText(F.value).width:0,V=7+K+(X?4+$:0)+(F.value?4+te:0)+7;U+V>s-Pt&&U>Pt&&(U=Pt,h+=23),vo(t,U,h,V,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=B,t.fillRect(U,h+1,2,16);let re=U+7;t.font=`700 10px ${zt}`,t.fillStyle=o.text,t.fillText(F.label,re,h+12.5),re+=K+4,X&&(t.font=`700 8px ${zt}`,t.fillStyle=B,t.fillText(X,re+3,h+12),re+=$+4),F.value&&(t.font=`10px ${zt}`,t.fillStyle=F.tone==="up"?o.right:F.tone==="down"?o.left:o.dim,t.fillText(F.value,re,h+12.5)),U+=V+5}h+=18}else if(e.emptyText){t.font=`10px ${zt}`,t.fillStyle=o.dim;const y=_c(t,e.emptyText,f);y.forEach((S,U)=>t.fillText(S,Pt,h+10+U*14)),h+=y.length*14}return h+Pt}const mE=ui({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=we(null),i=we(null),s=()=>(e.min+e.max)/2,r=we(e.animate?s():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){r.value=e.value,p();return}const U=()=>{const F=e.value-r.value;if(Math.abs(F)<.004){r.value=e.value,p();return}r.value+=F*.18,p(),o=requestAnimationFrame(U)};o=requestAnimationFrame(U)}je(()=>e.value,a);let l=null,c=!1;function u(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,h;const m=new ts({paint:(U,{dpr:F,glow:B})=>km(U,{dpr:F,theme:e.theme,colors:e.colors,glow:B,shown:r.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function v(){if(!(!i.value||!t.value)){try{l=new tr({canvas:i.value,antialias:!1,alpha:!0})}catch{c=!0}if(!c&&!l.getContext()&&(l.dispose(),l=null,c=!0),c){_();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new nr,h=new er(-1,1,1,-1,0,1),f.add(new Nt(new Jt(2,2),m.material)),_()}}function _(){if(!t.value||!l&&!c)return;const U=t.value.clientWidth,F=t.value.clientHeight;m.resize(U,F)&&(l?(l.setPixelRatio(m.dpr),l.setSize(U,F)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=U+"px",i.value.style.height=F+"px"),p())}function p(){if(!m.canvas.width)return;if(c){if(!i.value)return;m.paintOnly(!1);const F=i.value.getContext("2d");F&&(F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,i.value.width,i.value.height),F.drawImage(m.canvas,0,0));return}if(!l)return;const U=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!U,vignette:!U,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,h)}je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),je(()=>e.magnify,U=>{U||m.setLens(null),p()});function d(U){!e.magnify||!i.value||(m.setLens(qo(U,i.value)),p())}function x(){m.setLens(null),p()}let b=null,g=null,R=0;const A=Gi("cathodeResetTick",we(0));je(A,()=>T());function T(){cancelAnimationFrame(R),R=requestAnimationFrame(_)}function I(U){U.preventDefault()}function y(){l==null||l.dispose(),l=null,c=!1,v(),p()}Ln(()=>{mn(()=>{var U;v(),i.value&&(i.value.addEventListener("webglcontextlost",I),i.value.addEventListener("webglcontextrestored",y)),t.value&&(b=new ResizeObserver(()=>_()),b.observe(t.value),g=new IntersectionObserver(F=>{F.some(B=>B.isIntersecting)&&T()}),g.observe(t.value)),window.addEventListener("resize",T),(U=window.visualViewport)==null||U.addEventListener("resize",T),a()})}),qn(()=>{var U,F,B;cancelAnimationFrame(o),cancelAnimationFrame(R),(U=i.value)==null||U.removeEventListener("webglcontextlost",I),(F=i.value)==null||F.removeEventListener("webglcontextrestored",y),b==null||b.disconnect(),g==null||g.disconnect(),window.removeEventListener("resize",T),(B=window.visualViewport)==null||B.removeEventListener("resize",T),u(),m.dispose()});const S=it(()=>({background:(ol[e.theme]??ol.none).bg}));return(U,F)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:On(S.value)},[Pe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:d,onMouseleave:x},null,544)],4))}}),gE=fi(mE,[["__scopeId","data-v-6c2fc3b2"]]),pd={type:"change"},pf={type:"start"},zm={type:"end"},Ta=new sf,md=new xi,vE=Math.cos(70*bu.DEG2RAD),Ht=new ee,wn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6;class _E extends Bb{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new bi,this._lastTargetPosition=new ee,this._quat=new bi().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sd,this._sphericalDelta=new sd,this._scale=1,this._panOffset=new ee,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new ee,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yE.bind(this),this._onPointerDown=xE.bind(this),this._onPointerUp=ME.bind(this),this._onContextMenu=CE.bind(this),this._onMouseWheel=wE.bind(this),this._onKeyDown=EE.bind(this),this._onTouchStart=TE.bind(this),this._onTouchMove=AE.bind(this),this._onMouseDown=SE.bind(this),this._onMouseMove=bE.bind(this),this._interceptControlDown=RE.bind(this),this._interceptControlUp=PE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new ee(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new ee(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ta.origin.copy(this.object.position),Ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ta.direction))<vE?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ta.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wn/60*this.autoRotateSpeed*e:wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function yE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ME(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zm),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function SE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Or.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Or.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(pf)}function bE(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wE(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zm))}function EE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function TE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(pf)}function AE(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function CE(n){this.enabled!==!1&&n.preventDefault()}function RE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const DE={bg:"#0d1520",border:"#2a3a50",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",hover:"rgba(255,255,255,0.07)",divider:"#1e2a3a"},LE=-40,IE=40,Aa=2,kt=188,Nn=26,En=24,pi=30,Hm=24,Fi=Nn+En*3+pi+Hm,yc="11px system-ui, -apple-system, sans-serif",It=22,Er=10;class Pr{constructor(e,t={}){Fe(this,"mesh");Fe(this,"panel",null);Fe(this,"canvas",document.createElement("canvas"));Fe(this,"texture");Fe(this,"colors");Fe(this,"display",{curvature:0,scanlines:!1,glow:!1,magnify:!1});Fe(this,"hover",null);this.ppu=e,this.colors={...DE,...t};const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(kt*i),this.canvas.height=Math.round(Fi*i),this.texture=new wi(this.canvas),this.texture.colorSpace=Zt,this.mesh=new Nt(new Jt(kt/e,Fi/e),new qr({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=1e6,this.mesh.visible=!1}get isOpen(){return!!this.panel}setColors(e){this.colors={...this.colors,...e},this.panel&&this.draw()}open(e,t,i,s){this.close(),this.panel=e,this.display={...s},this.hover=null;const r=e.content.width,o=e.content.height,a=Math.max(4,Math.min(t,r-kt-4)),l=Math.max(4,Math.min(i,o-Fi-4));this.mesh.position.set((a+kt/2-r/2)/this.ppu,(o/2-(l+Fi/2))/this.ppu,.02),e.group.add(this.mesh),this.mesh.visible=!0,this.draw()}close(){this.panel&&(this.panel.group.remove(this.mesh),this.mesh.visible=!1,this.panel=null,this.hover=null)}update(e){this.display={...e},this.draw()}setHover(e){e!==this.hover&&(this.hover=e,this.draw())}rowAtUV(e,t){const i=e*kt,r=(1-t)*Fi-Nn;if(r<0)return null;if(r<En*3)return["scanlines","glow","magnify"][Math.floor(r/En)];if(r-En*3<pi){if(i>=kt-Er-It)return"curve+";if(i>=kt-Er-It-54-It&&i<kt-Er-It-54)return"curve-"}return null}static rowCentre(e){switch(e){case"scanlines":return{x:90,y:Nn+En*.5};case"glow":return{x:90,y:Nn+En*1.5};case"magnify":return{x:90,y:Nn+En*2.5};case"curve-":return{x:kt-Er-It-54-It/2,y:Nn+En*3+pi/2};case"curve+":return{x:kt-Er-It/2,y:Nn+En*3+pi/2}}}draw(){var c;const e=Math.min(window.devicePixelRatio||1,2),t=this.colors,i=this.canvas.getContext("2d");i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,kt,Fi),i.fillStyle=t.bg,i.fillRect(0,0,kt,Fi),i.strokeStyle=t.border,i.lineWidth=1,i.strokeRect(.5,.5,kt-1,Fi-1),i.textBaseline="middle",i.fillStyle=t.muted,i.font="bold 9px system-ui, -apple-system, sans-serif",i.letterSpacing="1px",i.textAlign="left",i.fillText("DISPLAY",10,Nn/2),i.letterSpacing="0px",i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="right",i.fillText(`curve: ${this.display.curvature}`,kt-10,Nn/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,Nn-.5),i.lineTo(kt,Nn-.5),i.stroke(),[["scanlines","Scan lines",this.display.scanlines],["glow","Glow",this.display.glow],["magnify","Magnify (hover lens)",this.display.magnify]].forEach(([u,f,h],m)=>{const v=Nn+m*En;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(1,v,kt-2,En));const _=10,p=v+(En-12)/2;i.strokeStyle=h?t.accent:t.muted,i.lineWidth=1.2,i.strokeRect(_+.5,p+.5,11,11),h&&(i.lineWidth=1.8,i.lineCap="round",i.beginPath(),i.moveTo(_+3,p+6.5),i.lineTo(_+5.5,p+9),i.lineTo(_+9.5,p+3.5),i.stroke()),i.fillStyle=t.text,i.font=yc,i.textAlign="left",i.fillText(f,30,v+En/2)});const r=Nn+En*3;i.strokeStyle=t.divider,i.lineWidth=1,i.beginPath(),i.moveTo(0,r+.5),i.lineTo(kt,r+.5),i.stroke(),i.fillStyle=t.text,i.font=yc,i.textAlign="left",i.fillText("Bend",10,r+pi/2);const o=(u,f,h)=>{const m=r+(pi-It)/2;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(f,m,It,It)),i.strokeStyle=this.hover===u?t.accent:t.border,i.lineWidth=1,i.strokeRect(f+.5,m+.5,It-1,It-1),i.strokeStyle=t.text,i.lineWidth=1.6,i.lineCap="round",i.beginPath(),i.moveTo(f+6,m+It/2),i.lineTo(f+It-6,m+It/2),h&&(i.moveTo(f+It/2,m+6),i.lineTo(f+It/2,m+It-6)),i.stroke()},a=kt-Er-It,l=a-54-It;o("curve-",l,!1),o("curve+",a,!0),i.fillStyle=t.text,i.font=yc,i.textAlign="center",i.fillText(String(this.display.curvature),l+It+27,r+pi/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,r+pi+.5),i.lineTo(kt,r+pi+.5),i.stroke(),i.fillStyle=t.muted,i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="left",i.fillText("Cmd+Shift +/−  bends the hovered panel",10,r+pi+Hm/2),this.texture.needsUpdate=!0,(c=this.panel)==null||c.invalidate()}dispose(){this.close(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}}Fe(Pr,"width",kt),Fe(Pr,"height",Fi);const gd={bg:"#08130e",bgFocused:"#0f2a1d",line:"#2f6b4c",lineFocused:"#6ee7a7",text:"#6fae8f",textFocused:"#b6f5d2",box:"#2f6b4c",boxFocused:"#3f8f6b",accent:"#6ee7a7",accentText:"#d5fbe6"},Cn=26,Ca=20,Ra=18,Pa=4,Da=8,Xs=16,vd="11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",_d=4,UE={w:240,h:160},FE={w:1600,h:1e3};class NE{constructor(e,t){Fe(this,"id");Fe(this,"content");Fe(this,"group",new Rr);Fe(this,"body");Fe(this,"bar");Fe(this,"glow");Fe(this,"_display",{curvature:0,scanlines:!0,glow:!0,magnify:!1});Fe(this,"dirty",!0);Fe(this,"barDirty",!0);Fe(this,"_title");Fe(this,"controls");Fe(this,"resizable");Fe(this,"minSize");Fe(this,"maxSize");Fe(this,"_grip",null);Fe(this,"_minimized",!1);Fe(this,"_maximized",!1);Fe(this,"hoverControl",null);Fe(this,"hoverAction",null);Fe(this,"_actions",[]);Fe(this,"barCanvas",document.createElement("canvas"));Fe(this,"barTexture");var l,c,u,f,h;this.stage=e,this.id=t.id,this._title=t.title??t.id,this.controls=t.controls??[],this._actions=(t.actions??[]).map(m=>({...m})),this.content=t.content,this.resizable=!!t.resizable&&typeof t.content.resize=="function",this.minSize=t.minSize??UE,this.maxSize=t.maxSize??FE,this.glow=t.glow??!0;const i=t.content.surface;if(i.mode!=="world")throw new Error("CathodeStage3D panels need a CathodeSurface created with mode: 'world'");const s=e.pxPerUnit,r=t.content.width/s,o=t.content.height/s,a=Cn/s;if(this.body=new Nt(new Jt(r,o),i.material),this.barTexture=new wi(this.barCanvas),this.barTexture.colorSpace=Zt,this.bar=new Nt(new Jt(r,a),new qr({map:this.barTexture,toneMapped:!1})),this.bar.position.y=o/2+a/2,this.group.add(this.body,this.bar),this.body.userData.panel=this,this.bar.userData.panel=this,this.resizable){const m=Xs/s,v=document.createElement("canvas");v.width=v.height=32;const _=v.getContext("2d");_.strokeStyle="#6ee7a7",_.lineWidth=3,_.lineCap="round",_.beginPath();for(const d of[10,18,26])_.moveTo(30,d),_.lineTo(d,30);_.stroke();const p=new wi(v);p.colorSpace=Zt,this._grip=new Nt(new Jt(m,m),new qr({map:p,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.group.add(this._grip),this.placeGrip()}t.visible===!1&&(this.group.visible=!1),t.minimized&&(this._minimized=!0,this.body.visible=!1),t.position&&this.group.position.set(...t.position),this.group.rotation.y=t.rotationY??0,t.look&&i.setLook(t.look),this._display={curvature:((l=t.look)==null?void 0:l.curvature)??0,scanlines:((c=t.look)==null?void 0:c.scanlines)??!0,glow:this.glow,magnify:((u=t.look)==null?void 0:u.magnify)??!1},i.resize(t.content.width,t.content.height,window.devicePixelRatio||1),(h=(f=t.content).attach)==null||h.call(f,()=>this.invalidate())}get grip(){return this._grip}get title(){return this._title}setTitle(e){e!==this._title&&(this._title=e,this.invalidateBar())}placeGrip(){if(!this.grip)return;const e=this.stage.pxPerUnit;this.grip.position.set((this.content.width-Xs)/2/e,-(this.content.height-Xs)/2/e,.003),this.grip.visible=!this._minimized}setHoverGrip(e){this.grip&&(this.grip.material.opacity=e?1:.55,this.stage.invalidate())}resize(e,t){if(!this.resizable||(e=Math.round(Math.min(this.maxSize.w,Math.max(this.minSize.w,e))),t=Math.round(Math.min(this.maxSize.h,Math.max(this.minSize.h,t))),e===this.content.width&&t===this.content.height))return!1;this.content.resize(e,t),this.content.surface.resize(e,t,window.devicePixelRatio||1);const i=this.stage.pxPerUnit,s=Cn/i;return this.body.geometry.dispose(),this.body.geometry=new Jt(e/i,t/i),this.bar.geometry.dispose(),this.bar.geometry=new Jt(e/i,s),this.bar.position.y=t/i/2+s/2,this.placeGrip(),this.dirty=!0,this.barDirty=!0,this.stage.invalidate(),!0}get minimized(){return this._minimized}get maximized(){return this._maximized}setMinimized(e){this._minimized!==e&&(this._minimized=e,this.body.visible=!e,this.grip&&(this.grip.visible=!e),this.invalidateBar(),e||this.invalidate())}setMaximized(e){this._maximized!==e&&(this._maximized=e,this.invalidateBar())}setHoverControl(e,t=null){this.hoverControl===e&&this.hoverAction===t||(this.hoverControl=e,this.hoverAction=t,this.invalidateBar())}get actions(){return this._actions.map(e=>({...e}))}setActions(e){e.length===this._actions.length&&e.every((i,s)=>i.id===this._actions[s].id&&i.label===this._actions[s].label&&!!i.active==!!this._actions[s].active)||(this._actions=e.map(i=>({...i})),this.invalidateBar())}controlsLeft(){return this.controls.length?this.content.width-Da-this.controls.length*(Ca+Pa)+Pa:this.content.width-Da}actionRects(){if(!this._actions.length)return[];const e=this.barCanvas.getContext("2d");e.font=vd;const t=this._actions.map(r=>Math.ceil(e.measureText(r.label).width)+14),i=t.reduce((r,o)=>r+o,0)+(t.length-1)*_d;let s=this.controlsLeft()-10-i;return this._actions.map((r,o)=>{const a={id:r.id,x:s,y:(Cn-Ra)/2-1,w:t[o],h:Ra};return s+=t[o]+_d,a})}controlRect(e){const t=this.controls.indexOf(e);if(t<0)return null;const i=this.controls.length;return{x:this.content.width-Da-(i-t)*Ca-(i-1-t)*Pa,y:(Cn-Ra)/2-1,w:Ca,h:Ra}}controlAt(e,t){for(const i of this.controls){const s=this.controlRect(i);if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return i}return null}actionAt(e,t){for(const i of this.actionRects())if(e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return i.id;return null}get visible(){return this.group.visible}setVisible(e){this.group.visible!==e&&(this.group.visible=e,e?this.invalidate():this.stage.invalidate())}invalidate(){this.dirty=!0,this.stage.invalidate()}invalidateBar(){this.barDirty=!0,this.stage.invalidate()}setLook(e){this.content.surface.setLook(e);const t=this._display;e.curvature!==void 0&&(t.curvature=e.curvature),e.scanlines!==void 0&&(t.scanlines=e.scanlines),e.magnify!==void 0&&(t.magnify=e.magnify),this.invalidate()}get display(){return{...this._display}}setDisplay(e){this._display={...this._display,...e};const t=this._display;this.content.surface.setLook({curvature:t.curvature,scanlines:t.scanlines,magnify:t.magnify}),this.glow=t.glow,t.magnify||this.content.surface.setLens(null),this.invalidate()}setPosition(e,t,i){this.group.position.set(e,t,i),this.stage.invalidate()}setRotationY(e){this.group.rotation.y=e,this.stage.invalidate()}paintIfDirty(){if(!this.group.visible)return;const e=this.content.surface;this.dirty&&(e.syncUniforms(),e.paint(this.glow),this.dirty=!1),this.barDirty&&(this.drawBar(),this.barDirty=!1)}drawBar(){const e=Math.min(window.devicePixelRatio||1,2),t=this.content.width,i=Cn,s=this.barCanvas;(s.width!==Math.round(t*e)||s.height!==Math.round(i*e))&&(s.width=Math.round(t*e),s.height=Math.round(i*e),this.barTexture.dispose(),this.barTexture=new wi(s),this.barTexture.colorSpace=Zt,this.bar.material.map=this.barTexture,this.bar.material.needsUpdate=!0);const r=s.getContext("2d");r.setTransform(e,0,0,e,0,0);const o=this.stage.focusedId===this.id,a=this.stage.barColors,l=this.stage.barStyle==="cockpit";r.fillStyle=o?a.bgFocused:a.bg,r.fillRect(0,0,t,i),r.fillStyle=o?a.lineFocused:a.line,r.fillRect(0,i-2,t,2),r.textBaseline="middle",r.font="12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";const c=this.actionRects(),u=l?23:10,f=c.length?c[0].x-8-u:this.controls.length?t-10-(Da+this.controls.length*(Ca+Pa))-(u-10):t-10-u;l?(r.save(),r.fillStyle=a.accent,r.shadowColor=a.accent,r.shadowBlur=4,r.beginPath(),r.arc(12.5,i/2-1,2.5,0,Math.PI*2),r.fill(),r.restore(),r.font="bold 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",r.letterSpacing="1.26px",r.fillStyle=(o?a.titleFocused:a.title)??(o?a.textFocused:a.text),r.fillText(this._title.toUpperCase(),u,i/2-1,Math.max(20,f)),r.letterSpacing="0px"):(r.fillStyle=o?a.textFocused:a.text,r.fillText(this._title,u,i/2-1,Math.max(20,f))),this.drawActions(r,o,c),this.drawControls(r,o),this.barTexture.needsUpdate=!0}drawActions(e,t,i){const s=this.stage.barColors;e.font=vd,e.textAlign="center",e.textBaseline="middle",this._actions.forEach((r,o)=>{const a=i[o];r.active?this.fillAlpha(e,s.accent,.28,a):this.hoverAction===r.id&&this.fillAlpha(e,s.accent,.14,a),e.strokeStyle=r.active?s.accent:t?s.boxFocused:s.box,e.lineWidth=1,e.strokeRect(a.x+.5,a.y+.5,a.w-1,a.h-1),e.fillStyle=r.active?s.accentText:t?s.textFocused:s.text,e.fillText(r.label,a.x+a.w/2,a.y+a.h/2+.5)}),e.textAlign="left"}fillAlpha(e,t,i,s){const r=/^#([0-9a-f]{6})$/i.exec(t);if(r){const o=parseInt(r[1],16);e.fillStyle=`rgba(${o>>16&255},${o>>8&255},${o&255},${i})`,e.fillRect(s.x,s.y,s.w,s.h);return}e.save(),e.globalAlpha=i,e.fillStyle=t,e.fillRect(s.x,s.y,s.w,s.h),e.restore()}drawControls(e,t){const i=this.stage.barColors;for(const s of this.controls){const r=this.controlRect(s);this.hoverControl===s&&this.fillAlpha(e,i.accent,.2,r),e.strokeStyle=t?i.textFocused:i.text,e.lineWidth=1.4;const o=r.x+r.w/2,a=r.y+r.h/2;e.beginPath(),s==="info"?(e.arc(o,a,6,0,Math.PI*2),e.moveTo(o,a-.5),e.lineTo(o,a+3),e.moveTo(o,a-3.2),e.lineTo(o,a-2.6)):s==="close"?(e.moveTo(o-4,a-4),e.lineTo(o+4,a+4),e.moveTo(o+4,a-4),e.lineTo(o-4,a+4)):s==="minimize"?this._minimized?(e.moveTo(o-5,a),e.lineTo(o+5,a),e.moveTo(o,a-5),e.lineTo(o,a+5)):(e.moveTo(o-5,a+3),e.lineTo(o+5,a+3)):this._maximized?(e.rect(o-5,a-2,7,6),e.moveTo(o-2,a-2),e.lineTo(o-2,a-5),e.lineTo(o+5,a-5),e.lineTo(o+5,a+1),e.lineTo(o+2,a+1)):e.rect(o-5,a-4,10,8),e.stroke()}}dispose(){var e,t,i;if(this.body.geometry.dispose(),this.bar.geometry.dispose(),this.bar.material.dispose(),this.barTexture.dispose(),this.grip){this.grip.geometry.dispose();const s=this.grip.material;(e=s.map)==null||e.dispose(),s.dispose()}(i=(t=this.content).dispose)==null||i.call(t)}}class OE{constructor(e){Fe(this,"renderer");Fe(this,"scene",new nr);Fe(this,"camera");Fe(this,"canvas");Fe(this,"panels",new Map);Fe(this,"pxPerUnit");Fe(this,"focusedId",null);Fe(this,"barColors",{...gd});Fe(this,"barStyle","plain");Fe(this,"controls",null);Fe(this,"ray",new Ob);Fe(this,"ndc",new tt);Fe(this,"raf",0);Fe(this,"rendering",!1);Fe(this,"raiseCounter",0);Fe(this,"hovered",null);Fe(this,"pressed",null);Fe(this,"dragging",null);Fe(this,"suppressClick",!1);Fe(this,"menu",null);Fe(this,"lensPanel",null);Fe(this,"resizeObserver");Fe(this,"disposers",[]);Fe(this,"lastCursor","");Fe(this,"passThrough");Fe(this,"swallowClick",!1);Fe(this,"pressedControl",null);Fe(this,"resizing",null);Fe(this,"hoverGrip",null);Fe(this,"hoverBar",null);Fe(this,"cancelFly",null);Fe(this,"expandedState",null);this.o=e,this.pxPerUnit=e.pxPerUnit??360,this.passThrough=!!e.passThrough,this.renderer=new tr({antialias:!0,alpha:!!e.transparent}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(e.background??329738,e.transparent?0:1),this.canvas=this.renderer.domElement,this.passThrough||(this.canvas.tabIndex=0),this.canvas.style.cssText="display:block;width:100%;height:100%;outline:none;touch-action:none"+(this.passThrough?";pointer-events:none":""),e.container.appendChild(this.canvas),this.camera=new Gn(e.fov??45,1,e.near??.05,e.far??100);const t=e.cameraPosition??[0,.1,3.4];this.camera.position.set(...t),this.camera.lookAt(0,0,0),e.controls&&(this.controls=e.controls(this.camera,this.canvas),this.controls.addEventListener("change",()=>this.invalidate()));const i=this.passThrough?e.inputTarget??document:this.canvas;this.on(i,"pointerdown",s=>this.onPointerDown(s),{capture:!0}),this.on(i,"pointermove",s=>this.onPointerMove(s)),this.passThrough||this.on(this.canvas,"pointerleave",()=>this.setHover(null)),this.on(window,"pointerup",s=>this.onPointerUp(s)),this.on(window,"pointercancel",s=>this.onPointerUp(s)),this.on(i,"click",s=>this.onClick(s),{capture:this.passThrough}),this.on(i,"wheel",s=>this.onWheel(s),{capture:!0,passive:!1}),this.on(this.passThrough?window:this.canvas,"keydown",s=>this.onKey(s)),e.barColors&&(this.barColors={...gd,...e.barColors}),e.barStyle&&(this.barStyle=e.barStyle),e.displayMenu&&(this.menu=new Pr(this.pxPerUnit,typeof e.displayMenu=="object"?e.displayMenu.colors:{}),this.on(i,"contextmenu",s=>this.onContextMenu(s),{capture:!0})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.container),this.resize()}on(e,t,i,s){e.addEventListener(t,i,s),this.disposers.push(()=>e.removeEventListener(t,i,s))}setCameraPose(e){var t,i;this.camera.position.set(...e.position),this.camera.lookAt(...e.target),this.camera.updateMatrixWorld(!0),(i=(t=this.controls)==null?void 0:t.target)==null||i.set(...e.target),this.invalidate()}facingPose(e,t={}){const i=this.panels.get(e);if(!i)return null;i.group.updateWorldMatrix(!0,!0);const s=this.pxPerUnit,r=i.content.height/s,o=Cn/s,a=i.content.width/s,l=r/2+o,c=i.minimized?r/2:-r/2,u=l-c,f=i.body.localToWorld(new ee(0,(l+c)/2,0)),h=new ee(0,0,1).applyQuaternion(i.group.getWorldQuaternion(new bi)),m=Math.tan(bu.degToRad(this.camera.fov/2)),v=Math.max(u/2/m,a/2/(m*this.camera.aspect))*(1+(t.margin??.12)),_=f.clone().addScaledVector(h,v);return{position:[_.x,_.y,_.z],target:[f.x,f.y,f.z]}}framePose(e,t={}){const i=(e??[...this.panels.keys()]).map(A=>this.panels.get(A)).filter(A=>!!A);if(!i.length)return null;const s=this.pxPerUnit,r=Cn/s,o=new ee;for(const A of i)A.group.updateWorldMatrix(!0,!0),o.add(new ee(0,0,1).applyQuaternion(A.group.getWorldQuaternion(new bi)));o.normalize(),isFinite(o.x)||o.set(0,0,1);const a=new ee().crossVectors(new ee(0,1,0),o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new ee().crossVectors(o,a).normalize();let c=1/0,u=-1/0,f=1/0,h=-1/0,m=0,v=0;for(const A of i){const T=A.content.width/s,I=A.content.height/s,y=I/2+r,S=A.minimized?I/2:-I/2;for(const[U,F]of[[-T/2,S],[T/2,S],[-T/2,y],[T/2,y]]){const B=A.body.localToWorld(new ee(U,F,0)),X=B.dot(a),K=B.dot(l);c=Math.min(c,X),u=Math.max(u,X),f=Math.min(f,K),h=Math.max(h,K),m+=B.dot(o),v++}}const _=1+(t.margin??.08),p=(u-c)*_,d=(h-f)*_,x=Math.tan(bu.degToRad(this.camera.fov/2)),b=Math.max(d/2/x,p/2/(x*this.camera.aspect),t.minDistance??0),g=a.clone().multiplyScalar((c+u)/2).addScaledVector(l,(f+h)/2).addScaledVector(o,m/v),R=g.clone().addScaledVector(o,b);return{position:[R.x,R.y,R.z],target:[g.x,g.y,g.z]}}flyTo(e,t=550){var s;if((s=this.cancelFly)==null||s.call(this),t<=0)return this.setCameraPose(e),Promise.resolve();const i=this.getCameraPose();return new Promise(r=>{const o=performance.now();let a=0;this.cancelFly=()=>{cancelAnimationFrame(a),this.cancelFly=null,r()};const l=c=>{const u=Math.min(1,(c-o)/t),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,h=(m,v)=>[m[0]+(v[0]-m[0])*f,m[1]+(v[1]-m[1])*f,m[2]+(v[2]-m[2])*f];this.setCameraPose({position:h(i.position,e.position),target:h(i.target,e.target)}),u<1?a=requestAnimationFrame(l):(this.cancelFly=null,r())};a=requestAnimationFrame(l)})}getCameraPose(){const e=this.camera.position,t=this.camera.getWorldDirection(new ee).add(e);return{position:[e.x,e.y,e.z],target:[t.x,t.y,t.z]}}footprint(e){const t=this.pxPerUnit,i=e.content.width/t,s=e.content.height/t,r=Cn/t,o=s/2+r,a=e.minimized?s/2:-s/2;return{x0:e.group.position.x-i/2,x1:e.group.position.x+i/2,y0:e.group.position.y+a,y1:e.group.position.y+o}}freeSpot(e,t={}){const i=this.pxPerUnit,s=(t.gap??24)/i,r=e.w/i,o=(e.h+Cn)/i,a=[...this.panels.values()].filter(g=>g.group.visible).map(g=>this.footprint(g)),l=[...this.panels.values()].map(g=>g.group.position.z),c=l.length?l.reduce((g,R)=>g+R,0)/l.length:0,u=(g,R)=>[g+r/2,R-Cn/i-e.h/i/2,c];if(!a.length)return{position:[0,0,0]};const f=a.reduce((g,R)=>({x0:Math.min(g.x0,R.x0),x1:Math.max(g.x1,R.x1),y0:Math.min(g.y0,R.y0),y1:Math.max(g.y1,R.y1)}),{x0:1/0,x1:-1/0,y0:1/0,y1:-1/0}),h=t.near?this.panels.get(t.near):void 0,m=h?(()=>{const g=this.footprint(h);return{x:(g.x0+g.x1)/2,y:(g.y0+g.y1)/2}})():{x:(f.x0+f.x1)/2,y:(f.y0+f.y1)/2},v=[],_=["right","below","left","above"],p=g=>_.indexOf(t.prefer??"right")===_.indexOf(g)?0:1+(_.indexOf(g)-_.indexOf(t.prefer??"right")+4)%4*.01;for(const g of[...a,f]){const R=[g.x0,(g.x0+g.x1)/2-r/2,g.x1-r],A=[g.y1,(g.y0+g.y1)/2+o/2,g.y0+o];for(const T of A)v.push({x0:g.x1+s,y1:T,rank:p("right")}),v.push({x0:g.x0-s-r,y1:T,rank:p("left")});for(const T of R)v.push({x0:T,y1:g.y0-s,rank:p("below")}),v.push({x0:T,y1:g.y1+s+o,rank:p("above")})}const d=g=>a.every(R=>g.x0+r+s*.999<=R.x0||g.x0>=R.x1+s*.999||g.y1-o-s*.999>=R.y1||g.y1<=R.y0-s*.999);let x=null,b=1/0;for(const g of v){if(!d(g))continue;const R=Math.hypot(g.x0+r/2-m.x,g.y1-o/2-m.y)+g.rank*.01;R<b-1e-9&&(b=R,x=g)}return{position:u(x.x0,x.y1)}}get expandedId(){var e;return((e=this.expandedState)==null?void 0:e.id)??null}expand(e,t={}){var r;const i=this.panels.get(e);if(!i)return Promise.resolve();this.expandedState?(this.expandedState.id!==e&&((r=this.panels.get(this.expandedState.id))==null||r.setMaximized(!1)),this.expandedState.id=e):this.expandedState={id:e,pose:this.getCameraPose()},i.minimized&&this.setPanelMinimized(e,!1),i.setMaximized(!0);const s=this.facingPose(e,{margin:t.margin??.03});return s?this.flyTo(s,t.ms??650):Promise.resolve()}unexpand(e,t={}){var s;const i=this.expandedState;return!i||e!==void 0&&i.id!==e?Promise.resolve():((s=this.panels.get(i.id))==null||s.setMaximized(!1),this.expandedState=null,this.flyTo(i.pose,t.ms??650))}toggleExpand(e,t={}){var i;return((i=this.expandedState)==null?void 0:i.id)===e?this.unexpand(e,t):this.expand(e,t)}addPopup(e,t={}){const i=this.freeSpot({w:e.content.width,h:e.content.height},{near:t.near,gap:t.gap,prefer:t.prefer}),s=this.addPanel({...e,position:i.position,rotationY:0,controls:e.controls??["minimize","maximize","close"]});return this.setFocus(e.id),t.zoom!==!1&&this.expand(e.id,{margin:t.margin,ms:t.ms}),s}closePanel(e,t={}){const i=this.unexpand(e,t);return this.removePanel(e),i}addPanel(e){if(this.panels.has(e.id))throw new Error(`CathodeStage3D: duplicate panel id "${e.id}"`);const t=new NE(this,e);return t.content.surface.setAnisotropy(this.renderer.capabilities.getMaxAnisotropy()),this.panels.set(e.id,t),this.scene.add(t.group),this.raise(t),this.invalidate(),t}removePanel(e){var i,s;const t=this.panels.get(e);t&&(((i=this.expandedState)==null?void 0:i.id)===e&&(this.expandedState=null),this.focusedId===e&&this.setFocus(null),this.hovered===t&&(this.hovered=null),this.pressed===t&&(this.pressed=null),this.lensPanel===t&&(this.lensPanel=null),((s=this.menu)==null?void 0:s.panel)===t&&this.menu.close(),this.scene.remove(t.group),t.dispose(),this.panels.delete(e),this.invalidate())}setPanelVisible(e,t){var s;const i=this.panels.get(e);i&&(i.setVisible(t),t||(this.focusedId===e&&this.setFocus(null),this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null),((s=this.dragging)==null?void 0:s.panel)===i&&(this.dragging=null)),this.invalidate())}setPanelMinimized(e,t){const i=this.panels.get(e);i&&(i.setMinimized(t),t&&(this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null)),this.invalidate())}setFocus(e){var s,r;if(this.focusedId===e){e&&this.raise(this.panels.get(e));return}const t=this.focusedId&&this.panels.get(this.focusedId);this.focusedId=e,t&&t.invalidateBar();const i=e?this.panels.get(e):null;i&&(this.raise(i),i.invalidateBar()),(r=(s=this.o).onFocus)==null||r.call(s,e),this.invalidate()}raise(e){e.body.renderOrder=e.bar.renderOrder=++this.raiseCounter,e.grip&&(e.grip.renderOrder=e.body.renderOrder+.5)}getLayout(){const e={};for(const[t,i]of this.panels)e[t]={x:i.group.position.x,y:i.group.position.y,z:i.group.position.z,rotY:i.group.rotation.y,visible:i.visible,minimized:i.minimized,...i.resizable?{size:{w:i.content.width,h:i.content.height}}:{}};return e}applyLayout(e){for(const[t,i]of Object.entries(e)){const s=this.panels.get(t);s&&(s.group.position.set(i.x??s.group.position.x,i.y??s.group.position.y,i.z??s.group.position.z),i.rotY!==void 0&&(s.group.rotation.y=i.rotY),i.visible!==void 0&&this.setPanelVisible(t,i.visible),i.minimized!==void 0&&this.setPanelMinimized(t,i.minimized),i.size&&s.resize(i.size.w,i.size.h))}this.invalidate()}invalidate(){this.raf||this.rendering||(this.raf=requestAnimationFrame(()=>{this.raf=0,this.frame()}))}frame(){var e;this.rendering=!0;for(const t of this.panels.values())t.paintIfDirty();(e=this.controls)==null||e.update(),this.renderer.render(this.scene,this.camera),this.rendering=!1}resize(){const e=this.o.container.clientWidth,t=this.o.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate())}setRay(e,t){const i=this.canvas.getBoundingClientRect();this.ndc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}contentAt(e,t,i){this.setRay(t,i);const s=this.ray.intersectObject(e.body)[0];return s!=null&&s.uv?e.content.surface.contentPoint(s.uv.x,s.uv.y):null}hitScaleAt(e,t,i){const s=this.contentAt(e,t-4,i),r=this.contentAt(e,t+4,i);return!s||!r?1:Math.max(1,Math.abs(r.x-s.x)/8)}pick(e,t){this.setRay(e,t);const i=[];for(const m of this.panels.values())m.visible&&(m.minimized||i.push(m.body),i.push(m.bar));const s=this.ray.intersectObjects(i,!1);if(!s.length)return null;const r=s[0].distance;let o=s[0];for(const m of s)m.distance-r<.001&&m.object.renderOrder>o.object.renderOrder&&(o=m);const a=o.object.userData.panel,l=o.object===a.bar?"bar":"body",c=l==="body"&&o.uv?a.content.surface.contentPoint(o.uv.x,o.uv.y):null,u=l==="bar"&&o.uv?a.controlAt(o.uv.x*a.content.width,(1-o.uv.y)*Cn):null,f=l==="bar"&&o.uv&&!u?a.actionAt(o.uv.x*a.content.width,(1-o.uv.y)*Cn):null,h=l==="body"&&a.resizable&&!a.minimized&&!!o.uv&&o.uv.x*a.content.width>a.content.width-Xs&&(1-o.uv.y)*a.content.height>a.content.height-Xs;return{panel:a,part:l,content:c,control:u,action:f,handle:h,uv:o.uv?{x:o.uv.x,y:o.uv.y}:null}}clientPointForContent(e,t,i){const s=this.panels.get(e);if(!s)return null;const r=s.content.surface,o=s.content.width,a=s.content.height;let l=t/o,c=1-i/a;const u=(v,_)=>r.contentPoint(v,_);for(let v=0;v<12;v++){const _=u(l,c);if(!_){l=.5+(l-.5)*.8,c=.5+(c-.5)*.8;continue}const p=_.x-t,d=_.y-i;if(Math.hypot(p,d)<.05)break;const x=1e-4,b=u(l+x,c),g=u(l,c+x);if(!b||!g)break;const R=(b.x-_.x)/x,A=(g.x-_.x)/x,T=(b.y-_.y)/x,I=(g.y-_.y)/x,y=R*I-A*T;if(Math.abs(y)<1e-9)break;l-=(I*p-A*d)/y,c-=(-T*p+R*d)/y}const f=u(l,c);if(!f||Math.hypot(f.x-t,f.y-i)>1.5)return null;s.group.updateWorldMatrix(!0,!0);const h=s.body.localToWorld(new ee((l-.5)*(o/this.pxPerUnit),(c-.5)*(a/this.pxPerUnit),0));h.project(this.camera);const m=this.canvas.getBoundingClientRect();return{x:m.left+(h.x+1)/2*m.width,y:m.top+(1-h.y)/2*m.height}}clientPointForHandle(e){const t=this.panels.get(e);if(!t||!t.resizable)return null;t.group.updateWorldMatrix(!0,!0);const i=this.pxPerUnit,s=t.body.localToWorld(new ee((t.content.width/2-Xs/2)/i,-(t.content.height/2-Xs/2)/i,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}clientPointForAction(e,t){const i=this.panels.get(e),s=i==null?void 0:i.actionRects().find(l=>l.id===t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=i.bar.localToWorld(new ee((s.x+s.w/2-i.content.width/2)/r,-(s.y+s.h/2-Cn/2)/r,0)).project(this.camera),a=this.canvas.getBoundingClientRect();return{x:a.left+(o.x+1)/2*a.width,y:a.top+(1-o.y)/2*a.height}}clientPointForControl(e,t){const i=this.panels.get(e),s=i==null?void 0:i.controlRect(t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=new ee((s.x+s.w/2-i.content.width/2)/r,0,0);o.y=(Cn/2-(s.y+s.h/2))/r;const a=i.bar.localToWorld(o).project(this.camera),l=this.canvas.getBoundingClientRect();return{x:l.left+(a.x+1)/2*l.width,y:l.top+(1-a.y)/2*l.height}}clientPointForBar(e){const t=this.panels.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!0);const i=t.bar.getWorldPosition(new ee).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}send(e,t,i,s={}){var a,l;const r=this.contentAt(e,i.clientX,i.clientY),o={kind:t,x:r?r.x:-1,y:r?r.y:-1,hitScale:r?this.hitScaleAt(e,i.clientX,i.clientY):1,clientX:i.clientX,clientY:i.clientY,deltaX:s.deltaX??0,deltaY:s.deltaY??0,detail:t==="click"?i.detail??0:0,shiftKey:!!i.shiftKey};return((l=(a=e.content).pointer)==null?void 0:l.call(a,o))??null}setCursor(e){e!==this.lastCursor&&(this.lastCursor=e,this.o.onCursor?this.o.onCursor(e):this.canvas.style.cursor=e)}setHover(e,t){this.hovered&&this.hovered!==e&&this.send(this.hovered,"leave",t??{clientX:-1,clientY:-1}),this.hovered=e,e||(this.setCursor(""),this.setLens(null))}accepts(e){return!this.passThrough||!this.o.shouldHandle||this.o.shouldHandle(e.target)}onPointerDown(e){var i;if(e.button!==0||!this.accepts(e))return;if((i=this.menu)!=null&&i.isOpen){const s=this.pickMenu(e.clientX,e.clientY);if(s){e.preventDefault(),e.stopPropagation(),this.suppressClick=!0,this.menuAct(s);return}this.menu.close(),this.invalidate()}this.passThrough||this.canvas.focus({preventScroll:!0});const t=this.pick(e.clientX,e.clientY);if(!t){this.passThrough&&this.setFocus(null);return}this.passThrough&&(e.stopPropagation(),this.swallowClick=!0),this.controls&&(this.controls.enabled=!1),this.setFocus(t.panel.id),this.suppressClick=!1,t.part==="bar"&&(t.control||t.action)?(this.pressedControl={panel:t.panel,control:t.control,action:t.action},this.setCursor("pointer")):t.part==="bar"?(this.startDrag(t.panel),this.setCursor("grabbing")):t.handle?(this.startResize(t.panel),this.setCursor("nwse-resize")):(this.pressed=t.panel,this.send(t.panel,"down",e))}onPointerMove(e){var s;if(this.resizing){this.resizeTo(e);return}if(this.dragging){this.dragTo(e);return}if(this.pressed){this.send(this.pressed,"drag",e);return}if(this.pressedControl)return;if(!this.accepts(e)){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null);return}if((s=this.menu)!=null&&s.isOpen){const r=this.pickMenu(e.clientX,e.clientY);if(this.menu.setHover(r),r){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null),this.setLens(null),this.setCursor("pointer");return}}const t=this.pick(e.clientX,e.clientY);if(this.setLens(t&&t.part==="body"&&!t.handle?t:null),this.setHoverGrip(t!=null&&t.handle?t.panel:null),this.setHover(t&&t.part==="body"&&!t.handle?t.panel:null,e),this.setHoverBar(t&&t.part==="bar"?t.panel:null,(t==null?void 0:t.control)??null,(t==null?void 0:t.action)??null),!t){this.setCursor("");return}if(t.part==="bar"){this.setCursor(t.control||t.action?"pointer":"grab");return}if(t.handle){this.setCursor("nwse-resize");return}const i=this.send(t.panel,"move",e);i&&this.setCursor(i)}setHoverBar(e,t,i=null){this.hoverBar&&this.hoverBar!==e&&this.hoverBar.setHoverControl(null,null),this.hoverBar=e,e==null||e.setHoverControl(t,i)}setHoverGrip(e){this.hoverGrip&&this.hoverGrip!==e&&this.hoverGrip.setHoverGrip(!1),this.hoverGrip=e,e==null||e.setHoverGrip(!0)}onPointerUp(e){var t,i,s,r;if(this.pressedControl=null,this.resizing){const o=this.resizing;if(this.resizing=null,o.moved){this.suppressClick=!0;const a=o.panel.group.position;(i=(t=this.o).onPanelResized)==null||i.call(t,o.panel.id,{w:o.panel.content.width,h:o.panel.content.height},{x:a.x,y:a.y,z:a.z})}this.setCursor("")}if(this.dragging){this.dragging.moved&&(this.suppressClick=!0);const o=this.dragging.panel;this.dragging=null,this.setCursor(""),(r=(s=this.o).onPanelMoved)==null||r.call(s,o.id,{x:o.group.position.x,y:o.group.position.y,z:o.group.position.z})}this.pressed&&(this.send(this.pressed,"up",e),this.pressed=null),this.controls&&(this.controls.enabled=!0)}onClick(e){var i,s,r,o,a,l;if(!this.accepts(e))return;if(this.passThrough&&this.swallowClick&&(this.swallowClick=!1,e.stopPropagation()),this.suppressClick){this.suppressClick=!1;return}const t=this.pick(e.clientX,e.clientY);t&&this.passThrough&&e.stopPropagation(),t&&t.part==="body"&&this.send(t.panel,"click",e),t&&t.part==="bar"&&(t.control?(s=(i=this.o).onPanelControl)==null||s.call(i,t.panel.id,t.control):t.action?(o=(r=this.o).onPanelAction)==null||o.call(r,t.panel.id,t.action):e.detail>=2&&((l=(a=this.o).onPanelActivate)==null||l.call(a,t.panel.id)))}onWheel(e){if(!this.accepts(e))return;const t=this.pick(e.clientX,e.clientY);!t||t.part!=="body"||(e.preventDefault(),e.stopImmediatePropagation(),this.send(t.panel,"wheel",e,{deltaX:e.deltaX,deltaY:e.deltaY}))}onKey(e){if(this.passThrough){const i=e.target;if(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))return}if(this.menu){if(e.key==="Escape"&&this.menu.isOpen){this.menu.close(),this.invalidate();return}if(e.metaKey&&e.shiftKey&&/^[=+\-_]$/.test(e.key)){const i=this.menu.panel??this.hovered;if(i){e.preventDefault(),this.stepBend(i,e.key==="="||e.key==="+"?Aa:-Aa);return}}}const t=this.focusedId?this.panels.get(this.focusedId):null;t!=null&&t.content.key&&(t.content.key(e),t.invalidate())}onContextMenu(e){if(!this.menu)return;if(!this.accepts(e)){this.menu.close(),this.invalidate();return}if(this.dragging||this.resizing)return;const t=this.pick(e.clientX,e.clientY);if(!t){this.menu.isOpen&&(this.menu.close(),this.invalidate());return}e.preventDefault(),e.stopPropagation(),this.setFocus(t.panel.id);const i=t.panel.content.width,s=t.panel.content.height,r=t.part==="body"&&t.uv||t.uv?t.uv.x*i:0,o=t.part==="body"&&t.uv?(1-t.uv.y)*s:0;this.menu.open(t.panel,r,o,t.panel.display),this.invalidate()}openDisplayMenu(e,t=8,i=8){const s=this.panels.get(e);!this.menu||!s||(this.menu.open(s,t,i,s.display),this.invalidate())}setMenuColors(e){var t;(t=this.menu)==null||t.setColors(e),this.invalidate()}setBarColors(e){this.barColors={...this.barColors,...e};for(const t of this.panels.values())t.invalidateBar();this.invalidate()}setBarStyle(e){if(this.barStyle!==e){this.barStyle=e;for(const t of this.panels.values())t.invalidateBar();this.invalidate()}}closeDisplayMenu(){var e;(e=this.menu)!=null&&e.isOpen&&(this.menu.close(),this.invalidate())}get displayMenuPanel(){var e;return((e=this.menu)==null?void 0:e.panel)??null}pickMenu(e,t){var s;if(!((s=this.menu)!=null&&s.isOpen))return null;this.setRay(e,t);const i=this.ray.intersectObject(this.menu.mesh,!1)[0];return i!=null&&i.uv?this.menu.rowAtUV(i.uv.x,i.uv.y):null}clientPointForMenuRow(e){var o;if(!((o=this.menu)!=null&&o.isOpen))return null;const{x:t,y:i}=Pr.rowCentre(e);this.menu.mesh.updateWorldMatrix(!0,!1);const s=this.menu.mesh.localToWorld(new ee((t-Pr.width/2)/this.pxPerUnit,(Pr.height/2-i)/this.pxPerUnit,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}menuAct(e){var s;const t=(s=this.menu)==null?void 0:s.panel;if(!t)return;const i=t.display;if(e==="curve-"||e==="curve+"){this.stepBend(t,e==="curve+"?Aa:-Aa);return}this.applyDisplay(t,{[e]:!i[e]})}stepBend(e,t){this.applyDisplay(e,{curvature:Math.max(LE,Math.min(IE,e.display.curvature+t))})}applyDisplay(e,t){var i,s,r;e.setDisplay(t),((i=this.menu)==null?void 0:i.panel)===e&&this.menu.update(e.display),(r=(s=this.o).onPanelDisplay)==null||r.call(s,e.id,e.display),this.invalidate()}setLens(e){const t=e&&e.uv&&e.panel.display.magnify?e.panel:null;this.lensPanel&&this.lensPanel!==t&&(this.lensPanel.content.surface.setLens(null),this.lensPanel.invalidate()),this.lensPanel=t,t&&e.uv&&(t.content.surface.setLens({x:e.uv.x,y:e.uv.y}),t.invalidate())}startResize(e){var c;(c=this.menu)==null||c.close(),e.group.updateWorldMatrix(!0,!0);const t=e.group.getWorldQuaternion(new bi),i=new ee(1,0,0).applyQuaternion(t),s=new ee(0,1,0).applyQuaternion(t),r=new ee(0,0,1).applyQuaternion(t),o=this.pxPerUnit,a=e.body.localToWorld(new ee(-e.content.width/o/2,e.content.height/o/2,0)),l=new xi().setFromNormalAndCoplanarPoint(r,a);this.resizing={panel:e,tl:a,right:i,up:s,plane:l,moved:!1}}resizeTo(e){const t=this.resizing;this.setRay(e.clientX,e.clientY);const i=new ee;if(!this.ray.ray.intersectPlane(t.plane,i))return;const s=this.pxPerUnit,r=i.sub(t.tl),o=Math.round(r.dot(t.right)*s),a=Math.round(-r.dot(t.up)*s),l=t.panel,c=Math.round(Math.min(l.maxSize.w,Math.max(l.minSize.w,o))),u=Math.round(Math.min(l.maxSize.h,Math.max(l.minSize.h,a)));c===l.content.width&&u===l.content.height||(l.group.position.copy(t.tl).addScaledVector(t.right,c/s/2).addScaledVector(t.up,-u/s/2),l.resize(c,u),t.moved=!0)}startDrag(e){var o;(o=this.menu)==null||o.close(),e.group.updateWorldMatrix(!0,!0);const t=new ee(0,0,1).applyQuaternion(e.group.quaternion),i=new xi().setFromNormalAndCoplanarPoint(t,e.group.position),s=new ee,r=new ee;this.ray.ray.intersectPlane(i,s)&&r.copy(e.group.position).sub(s),this.dragging={panel:e,plane:i,offset:r,moved:!1}}dragTo(e){const t=this.dragging;this.setRay(e.clientX,e.clientY);const i=new ee;this.ray.ray.intersectPlane(t.plane,i)&&(t.panel.group.position.copy(i.add(t.offset)),t.moved=!0,this.invalidate())}dispose(){var e,t,i;(e=this.cancelFly)==null||e.call(this),cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();for(const s of this.disposers)s();for(const s of[...this.panels.values()])this.removePanel(s.id);(t=this.menu)==null||t.dispose(),(i=this.controls)==null||i.dispose();try{this.renderer.forceContextLoss()}catch{}this.renderer.dispose(),this.canvas.remove()}}function BE(n){const e=hl();return e.run(()=>{const t=we(0),i=we(0),s=we(0),r=we(-1),o=new Map,a=()=>{var x;return((x=n.minCellW)==null?void 0:x.call(n))??210},l=()=>{var x;return((x=n.cellAspect)==null?void 0:x.call(n))??.6},c=()=>df({count:n.cells().length,width:t.value,minCellW:a(),cellAspect:l(),scrollY:s.value}),u=()=>Om(c().totalH,i.value);je([n.cells,n.theme,()=>{var x;return(x=n.showVolume)==null?void 0:x.call(n)},()=>{var x;return(x=n.volumeFraction)==null?void 0:x.call(n)},()=>{var x;return(x=n.slotW)==null?void 0:x.call(n)},()=>{var x;return(x=n.colors)==null?void 0:x.call(n)},a,l],()=>{s.value=Math.min(s.value,u()),n.host.redraw()}),je([s,r],()=>n.host.redraw());function f(x,b){t.value=x,i.value=b,s.value=Math.min(s.value,u()),n.host.redraw()}function h(x){const b=u();return b<=0?!1:(s.value=Math.max(0,Math.min(b,s.value+x)),!0)}function m(x,b){const g=Du(c().rects,x,b);return g>=0?n.cells()[g].id:null}function v(x,b){const g=Du(c().rects,x,b);return r.value=g,g}function _(){r.value=-1}function p(x,{dpr:b,glow:g}){var R,A,T,I;Bm(x,{cells:n.cells(),theme:n.theme(),glow:g,showVolume:((R=n.showVolume)==null?void 0:R.call(n))??!0,volumeFraction:((A=n.volumeFraction)==null?void 0:A.call(n))??.22,slotW:((T=n.slotW)==null?void 0:T.call(n))??3,colors:(I=n.colors)==null?void 0:I.call(n),hoveredCell:r.value,scrollY:s.value,minCellW:a(),cellAspect:l(),dpr:b},o)}function d(){o.clear(),e.stop()}return{viewW:t,viewH:i,scrollY:s,hoveredCell:r,layout:c,maxScroll:u,setViewport:f,wheel:h,cellIdAt:m,hover:v,leave:_,paint:p,dispose:d}})}function kE(n){let e=()=>{};const t=n.theme??"phosphor",i=Tm({columnDefs:()=>n.columnDefs,defaultColDef:()=>n.defaultColDef,rowData:()=>n.rowData,pinnedBottomRowData:()=>n.pinnedBottomRowData,rowHeight:()=>n.rowHeight??28,theme:()=>t,emit:n.emit??(()=>{}),host:{redraw:()=>e()}});i.init(),i.setViewport(n.width,n.height,n.width,n.height);const s=new ts({mode:"world",paint:(l,c)=>i.paint(l,c)}),r=l=>{const c={cx:l.x,cy:l.y,hitScale:l.hitScale};switch(l.kind){case"move":return i.resizing?null:i.hover(c);case"leave":return i.leave(),null;case"down":return i.pointerDown(c,l.clientX,l.clientY),null;case"drag":return i.globalMove(l.clientX,l.clientY),null;case"up":return i.globalUp(),null;case"click":return i.click(c,{shiftKey:l.shiftKey,detail:l.detail}),null;case"wheel":return i.wheel(l.deltaX,l.deltaY,l.shiftKey),null}},o=l=>{if(i.activeFilter.value){if(l.key==="Escape"){l.preventDefault(),i.clearFilter();return}if(l.key==="Enter"){l.preventDefault(),i.closeFilter();return}if(l.key==="Backspace"){l.preventDefault(),i.setFilterText(i.filterPopupValue.value.slice(0,-1)),e();return}if(l.key.length===1&&!l.ctrlKey&&!l.metaKey){l.preventDefault(),i.setFilterText(i.filterPopupValue.value+l.key),e();return}}i.keyDown(l)},a={model:i,surface:s,width:n.width,height:n.height,attach:l=>{e=l},pointer:r,key:o,resize(l,c){a.width=l,a.height=c,i.setViewport(l,c,l,c),e()},dispose:()=>{i.dispose(),s.dispose()}};return a}function xd(n){let e=()=>{};const t=pl({entries:n.entries,theme:n.theme??"phosphor",showTimestamps:n.showTimestamps,formatTs:n.formatTs,wordWrap:n.wordWrap,maxLines:n.maxLines}),i=Cm({entries:()=>t.entries,theme:()=>t.theme??"phosphor",showTimestamps:()=>t.showTimestamps??!0,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap??!0,maxLines:()=>t.maxLines??0,host:{redraw:()=>e()}});i.setViewport(n.width,n.height),i.scrollToBottom();const s=new ts({mode:"world",paint:(c,u)=>i.paint(c,u)});let r={x:0,y:0},o=!1;const a=c=>{switch(c.kind){case"move":return i.hover(c.x<0?-1:c.y),null;case"leave":return i.leave(),null;case"down":return r={x:c.clientX,y:c.clientY},o=!1,i.panStart(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"drag":return Math.hypot(c.clientX-r.x,c.clientY-r.y)>4&&(o=!0),i.panMove(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"up":return i.panEnd(),null;case"click":return o||i.click(c.x<0?-1:c.y,c.shiftKey),o=!1,null;case"wheel":return i.wheel(c.deltaX,c.deltaY,c.shiftKey),null}},l={model:i,surface:s,width:n.width,height:n.height,attach:c=>{e=c},pointer:a,key:c=>i.keyDown(c),update(c){Object.assign(t,c),e()},resize(c,u){l.width=c,l.height=u,i.setViewport(c,u),e()},dispose:()=>{i.dispose(),s.dispose()}};return l}function zE(n){let e=()=>{};const t=pl({candles:n.candles,theme:n.theme,slotW:n.slotW,showVolume:n.showVolume,volumeFraction:n.volumeFraction,overlays:n.overlays,markers:n.markers,compact:n.compact,colors:n.colors}),i=Lm({candles:()=>t.candles,theme:()=>t.theme??"phosphor",slotW:()=>t.slotW??8,showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??Rm,overlays:()=>t.overlays,markers:()=>t.markers,compact:()=>t.compact??!1,colors:()=>t.colors,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new ts({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{switch(a.kind){case"move":return i.hoverAt(a.x,a.y),null;case"leave":return i.leave(),null;case"down":return i.panStart(a.clientX*a.hitScale),null;case"drag":return i.panMove(a.clientX*a.hitScale),null;case"up":return i.panEnd(),null;case"wheel":return i.wheel(a.deltaX,a.deltaY,a.shiftKey,a.x),null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,key:a=>i.keyDown(a),update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function HE(n){let e=()=>{};const t=pl({cells:n.cells,theme:n.theme,showVolume:n.showVolume,volumeFraction:n.volumeFraction,slotW:n.slotW,minCellW:n.minCellW,cellAspect:n.cellAspect,colors:n.colors}),i=BE({cells:()=>t.cells,theme:()=>t.theme??"phosphor",showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??.22,slotW:()=>t.slotW??3,colors:()=>t.colors,minCellW:()=>t.minCellW??210,cellAspect:()=>t.cellAspect??.6,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new ts({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{var l;switch(a.kind){case"move":return i.hover(a.x,a.y)>=0?"pointer":null;case"leave":return i.leave(),null;case"click":{const c=i.cellIdAt(a.x,a.y);return c&&((l=n.onCellClick)==null||l.call(n,c)),null}case"wheel":return i.wheel(a.deltaY),null;default:return null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function VE(n){let e=()=>{},t={...n};const i=()=>((t.min??-1)+(t.max??1))/2;let s=t.animate===!1?t.value:i(),r=0;const o=new ts({mode:"world",paint:(c,{dpr:u,glow:f})=>{km(c,{dpr:u,theme:t.theme??"none",colors:t.colors,glow:f,shown:s,value:t.value,min:t.min??-1,max:t.max??1,readout:t.readout,stance:t.stance,sub:t.sub,leftLabel:t.leftLabel??"−",rightLabel:t.rightLabel??"+",sideLetters:t.sideLetters??["−","+"],marks:t.marks??[],meter:t.meter??null,caption:t.caption,note:t.note,items:t.items??[],emptyText:t.emptyText})}}),a=()=>{if(cancelAnimationFrame(r),t.animate===!1){s=t.value,e();return}const c=()=>{const u=t.value-s;if(Math.abs(u)<.004){s=t.value,e();return}s+=u*.18,e(),r=requestAnimationFrame(c)};r=requestAnimationFrame(c)},l={surface:o,width:n.width,height:n.height,attach:c=>{e=c,a()},resize(c,u){l.width=c,l.height=u,e()},update(c){const u=c.value!==void 0&&c.value!==t.value;t={...t,...c},u||c.animate!==void 0?a():e()},get shown(){return s},dispose:()=>{cancelAnimationFrame(r),e=()=>{},o.dispose()}};return l}const ms=300,GE=36e5,WE=Date.UTC(2026,9,1,0,0,0);let Mc=20261122;const La=()=>(Mc=Mc*1664525+1013904223>>>0,Mc/4294967296),Rn=[];let yd=100;for(let n=0;n<ms;n++){const e=yd,t=e*(1+(La()-.48)*.02+Math.sin(n/17)*.002),i=Math.max(e,t)*(1+La()*.006),s=Math.min(e,t)*(1-La()*.006);Rn.push({start:WE+n*GE,open:e,high:i,low:s,close:t,volume:800+Math.round(La()*2200)}),yd=t}const Vm=n=>Rn.map((e,t)=>t<n-1?NaN:Rn.slice(t-n+1,t+1).reduce((i,s)=>i+s.close,0)/n),Ga=Vm(20),Md=Rn.map((n,e)=>e<19?NaN:Math.sqrt(Rn.slice(e-19,e+1).reduce((t,i)=>t+(i.close-Ga[e])**2,0)/20)),XE=[{kind:"band",upper:Ga.map((n,e)=>n+2*Md[e]),lower:Ga.map((n,e)=>n-2*Md[e]),middle:Ga,color:"#6ee7a7"},{kind:"line",data:Vm(50),color:"#fbbf24",label:"SMA50"},{kind:"hline",price:Rn[ms-1].close,color:"#60a5fa",label:"last"}],YE=[{timestamp:Rn[ms-40].start,price:Rn[ms-40].low,kind:"entry"},{timestamp:Rn[ms-12].start,price:Rn[ms-12].high,kind:"exit"},{timestamp:Rn[ms-90].start,price:Rn[ms-90].low,kind:"entry",label:"E"}];function $E(n){return Array.from({length:n},(e,t)=>{const i=Rn.slice(t*7,t*7+70),s=t%3===0;return{id:`P${t}`,title:t%5===4?`Will the long question number ${t} resolve before the end of the quarter?`:`AAPL${t}`,badge:t%2?"EQ":"₿",note:`${t%2?"-":"+"}${(t*.37+.2).toFixed(2)}%`,noteColor:t%2?"#e74c3c":"#00bc8c",open:s,candles:i,overlays:s?[{kind:"hline",price:i[20].close,color:"#5b8ff9",dashed:!1,label:"entry"}]:[]}})}const qE={class:"ws3d-bar"},KE=["aria-pressed"],jE={key:0,class:"ws3d-caption",role:"status"},Sd=26,Sc=.85,ZE=ui({__name:"Workspace3D",props:{theme:{}},setup(n){const e=n,t=we(null),i=we(""),s=we(!1),r=we(!1),o={paper:{bars:{bg:"#e6edf6",bgFocused:"#f3f7fc",line:"#b9c7da",lineFocused:"#2f6fd0",text:"#5a6b80",textFocused:"#1d2b3d",title:"#2f6fd0",titleFocused:"#1f56ad",box:"#b9c7da",boxFocused:"#8aa0bd",accent:"#1f9d66",accentText:"#0b2a1a"},menu:{bg:"#f8fafd",border:"#b9c7da",text:"#1d2b3d",muted:"#6b7c92",accent:"#2f6fd0",divider:"#d6dfeb",hover:"rgba(47,111,208,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #fbfdff 0%, #eaf1fa 55%, #d3e0f1 100%)",dot:"rgba(47,111,208,0.16)",floor:"#2f6fd0",floorAlpha:.55,panel:{curvature:5,scanlines:!1,glow:!1},up:"#16794f",down:"#c0392b",ui:{ink:"#2f6fd0",btnBg:"rgba(255,255,255,0.75)",btnBorder:"#b9c7da",btnInk:"#33465e",btnHoverInk:"#fff",capBg:"rgba(31,86,173,0.92)",capInk:"#fff",hint:"#5a6b80"}},none:{bars:{bg:"#12122a",bgFocused:"#181840",line:"#26324a",lineFocused:"#40a0f0",text:"#6a85a8",textFocused:"#b8d0ea",title:"#40a0f0",titleFocused:"#7cc4ff",box:"#26324a",boxFocused:"#3a5a80",accent:"#00bc8c",accentText:"#e8fff6"},menu:{bg:"#10182a",border:"#2a3a55",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",divider:"#1e2a3a",hover:"rgba(255,255,255,0.07)"},bg:"radial-gradient(ellipse at 50% 30%, #131c33 0%, #0a1020 60%, #060a14 100%)",dot:"rgba(64,160,240,0.14)",floor:"#40a0f0",floorAlpha:.5,panel:{curvature:8,scanlines:!0,glow:!1},up:"#00bc8c",down:"#e74c3c",ui:{ink:"#40a0f0",btnBg:"rgba(16,24,42,0.78)",btnBorder:"#2a3a55",btnInk:"#a8c4e4",btnHoverInk:"#06101e",capBg:"rgba(64,160,240,0.95)",capInk:"#06101e",hint:"#6a85a8"}},phosphor:{bars:{},menu:{},bg:"radial-gradient(ellipse at 50% 30%, #0e1a22 0%, #070d12 60%, #04080b 100%)",dot:"rgba(110,231,167,0.14)",floor:"#6ee7a7",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#6ee7a7",down:"#f87171",ui:{ink:"#6ee7a7",btnBg:"rgba(8,19,14,0.7)",btnBorder:"#2f6b4c",btnInk:"#9fd9bd",btnHoverInk:"#06150e",capBg:"rgba(110,231,167,0.95)",capInk:"#06150e",hint:"#6fae8f"}},amber:{bars:{bg:"#1a1205",bgFocused:"#271a07",line:"#5e4310",lineFocused:"#ffcc33",text:"#b8883a",textFocused:"#ffd983",title:"#ffcc33",titleFocused:"#ffe08a",box:"#5e4310",boxFocused:"#8a6418",accent:"#ffcc33",accentText:"#2a1c04"},menu:{bg:"#1a1205",border:"#5e4310",text:"#ffd983",muted:"#b8883a",accent:"#ffcc33",divider:"#3a2a0a",hover:"rgba(255,204,51,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #20160a 0%, #120c04 60%, #0a0702 100%)",dot:"rgba(255,204,51,0.13)",floor:"#ffb62e",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#ffcc33",down:"#d9531e",ui:{ink:"#ffcc33",btnBg:"rgba(26,18,5,0.78)",btnBorder:"#5e4310",btnInk:"#e0b560",btnHoverInk:"#1a1205",capBg:"rgba(255,204,51,0.95)",capInk:"#1a1205",hint:"#b8883a"}}},a=()=>o[e.theme],l=()=>{const P=a();return{"--bg":P.bg,"--dot":P.dot,"--ink":P.ui.ink,"--btn-bg":P.ui.btnBg,"--btn-border":P.ui.btnBorder,"--btn-ink":P.ui.btnInk,"--btn-hover-ink":P.ui.btnHoverInk,"--cap-bg":P.ui.capBg,"--cap-ink":P.ui.capInk,"--hint":P.ui.hint}},c=["BTC-USD","ETH-USD","SOL-USD","AVAX-USD","LINK-USD","DOGE-USD","ADA-USD","XRP-USD"],u=Array.from({length:80},(P,w)=>({id:w+1,product:c[w%c.length],side:w%3===0?"short":"long",pnl:Math.round(Math.sin(w*1.7)*480)/10,size:100+w*37%900})),f=Date.UTC(2026,10,22,14,0,0),h=["info","info","success","warn","debug","info"],m=Array.from({length:60},(P,w)=>({ts:f+w*7e3,level:h[w%h.length],text:`scanner cycle ${w*3} complete — ${w%5} candidates passed the filter`})),v=P=>{const w=new Date(P);return`${String(w.getUTCHours()).padStart(2,"0")}:${String(w.getUTCMinutes()).padStart(2,"0")}:${String(w.getUTCSeconds()).padStart(2,"0")}`},_={trades:{x:0,y:0,w:560,h:320,title:"Open positions"},candle:{x:580,y:0,w:600,h:320,title:"BTC-USD · 1h"},tilt:{x:1200,y:0,w:340,h:320,title:"Net tilt"},wall:{x:0,y:370,w:740,h:320,title:"Charts"},log:{x:760,y:370,w:780,h:320,title:"Monitor log"}},p=1540,d=690+Sd;let x=null,b=null,g=null,R=0,A=null,T=null,I=null,y=null;function S(P,w,se){const G=new $n({transparent:!0,depthWrite:!1,side:Wn,uniforms:{uColor:{value:new ht(P)},uAlpha:{value:w},uCell:{value:.3},uFar:{value:20}},vertexShader:"varying vec3 vP; void main() { vP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vP, 1.0); }",fragmentShader:`
      varying vec3 vP; uniform vec3 uColor; uniform float uAlpha; uniform float uCell; uniform float uFar;
      float lines(vec2 p, float cell) { vec2 c = p / cell; vec2 g = abs(fract(c - 0.5) - 0.5) / max(fwidth(c), vec2(1e-4)); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main() {
        float minor = lines(vP.xz, uCell), major = lines(vP.xz, uCell * 5.0);
        float fade = smoothstep(uFar, 1.5, length(vP.xz));
        float front = smoothstep(0.0, 0.4, vP.z);              // only IN FRONT of the panels (a ledge they hover over) — never behind their glass, where it would cross their text
        float a = max(minor * 0.55, major) * fade * front * uAlpha;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`}),J=new Nt(new Jt(80,80),G);return J.rotation.x=-Math.PI/2,J.position.set(0,se,-10),J.renderOrder=-10,J.name="floor",J}const U=["BTC","ETH","SOL","AVAX","LINK","DOGE","ADA","XRP","AAPL","MSFT","NVDA","TSLA"],F=[];function B(P,w){const se=P.canvas,G=se.getContext("2d"),J=se.width,ae=se.height,pe=e.theme==="paper";G.clearRect(0,0,J,ae),G.fillStyle=pe?"rgba(255,255,255,0.78)":"rgba(8,14,24,0.74)",G.fillRect(0,0,J,ae);const le=P.series.length,E=Math.min(...P.series),M=Math.max(...P.series),C=Math.max(1e-6,M-E),Y=P.series[le-1]>=P.series[0]?w.up:w.down;G.strokeStyle=pe?"rgba(47,111,208,0.12)":"rgba(255,255,255,0.08)",G.lineWidth=1;for(let me=1;me<4;me++)G.beginPath(),G.moveTo(0,ae*me/4),G.lineTo(J,ae*me/4),G.stroke();const ne=me=>10+(J-20)*me/(le-1),be=me=>ae-14-(ae-34)*(me-E)/C;G.beginPath(),G.moveTo(ne(0),be(P.series[0]));for(let me=1;me<le;me++)G.lineTo(ne(me),be(P.series[me]));G.lineTo(ne(le-1),ae-8),G.lineTo(ne(0),ae-8),G.closePath(),G.globalAlpha=.16,G.fillStyle=Y,G.fill(),G.globalAlpha=1,G.beginPath(),G.moveTo(ne(0),be(P.series[0]));for(let me=1;me<le;me++)G.lineTo(ne(me),be(P.series[me]));G.strokeStyle=Y,G.lineWidth=3,G.lineJoin="round",G.stroke(),G.fillStyle=Y,G.beginPath(),G.arc(ne(le-1),be(P.series[le-1]),5,0,Math.PI*2),G.fill(),G.lineWidth=P.open?5:2,G.strokeStyle=P.open?w.up:pe?"rgba(47,111,208,0.45)":"rgba(255,255,255,0.22)",G.strokeRect(2,2,J-4,ae-4),P.tex.needsUpdate=!0}function X(P,w){const se=new Rr;se.name="scape";const G=K=new Jt(.5,.3),J=6,ae=2;for(let pe=0;pe<ae;pe++)for(let le=0;le<J;le++){const E=pe*J+le,M=document.createElement("canvas");M.width=256,M.height=154;const C=new wi(M);C.colorSpace=Zt,C.anisotropy=4;let H=100;const Y=Array.from({length:36},(z,oe)=>H*=1+Math.sin(oe/5+E)*.012+(Math.random()-.5)*.014),ne=new Nt(G,new qr({map:C,transparent:!0,depthWrite:!1,toneMapped:!1,side:Wn}));ne.rotation.x=-Math.PI/2,ne.position.set((le-(J-1)/2)*.62,w+.004,.2+pe*.42),ne.renderOrder=-9,se.add(ne);const be={mesh:ne,tex:C,canvas:M,series:Y,open:E%4===0};F.push(be),B(be,P);const me=document.createElement("canvas");me.width=128,me.height=40;const Ee=me.getContext("2d");Ee.font="700 26px ui-monospace, monospace",Ee.textAlign="center",Ee.fillStyle=e.theme==="paper"?"#1d2b3d":"#cfe3f2",Ee.fillText(U[E%U.length],64,29);const Ge=new wi(me);Ge.colorSpace=Zt;const N=new Nb(new dm({map:Ge,transparent:!0,depthWrite:!1,toneMapped:!1}));N.scale.set(.15,.047,1),N.position.set(ne.position.x,w+.085,ne.position.z),N.renderOrder=-8,se.add(N)}return se}let K=null;function $(){K==null||K.dispose(),K=null,y&&clearInterval(y),y=null,I&&(I.traverse(P=>{var se;const w=P.material;(se=w==null?void 0:w.map)==null||se.dispose(),w==null||w.dispose()}),I.removeFromParent()),I=null,F.length=0}const te=Sc+.2;function V(P){P.autoRotateSpeed=.9,P.addEventListener("start",()=>O()),P.addEventListener("change",()=>{if(!r.value)return;const w=P.getAzimuthalAngle();w>=Sc?P.autoRotateSpeed=Math.abs(P.autoRotateSpeed):w<=-Sc&&(P.autoRotateSpeed=-Math.abs(P.autoRotateSpeed))})}function re(P=!1){!T||!x||(P||L(),x.expandedId&&x.unexpand(void 0,{ms:0}),r.value=!0,T.minAzimuthAngle=-te,T.maxAzimuthAngle=te,T.autoRotateSpeed=Math.abs(T.autoRotateSpeed)||.9,T.autoRotate=!0,x.invalidate())}function O(){!r.value||!T||(r.value=!1,T.autoRotate=!1,T.minAzimuthAngle=-1/0,T.maxAzimuthAngle=1/0)}function j(){r.value?O():re()}function Z(P){const w=t.value,se=a(),G=e.theme;x=new OE({container:w,transparent:!0,controls:(C,H)=>{const Y=new _E(C,H);return Y.enableDamping=!0,Y.minDistance=.4,Y.maxDistance=16,Y.zoomSpeed=.9,T=Y,V(Y),Y},cameraPosition:[0,0,6],displayMenu:{colors:se.menu},barStyle:"cockpit",barColors:se.bars,onPanelActivate:C=>{const H=x.facingPose(C,{margin:.04});H&&x.flyTo(H,650)},onPanelControl:(C,H)=>{const Y=x.panels.get(C);if(H==="info"){de(C);return}if(H==="minimize"){x.setPanelMinimized(C,!Y.minimized);return}if(H==="close"){x.closePanel(C);return}x.toggleExpand(C)}});const J={curvature:se.panel.curvature,scanlines:se.panel.scanlines,vignette:!1},ae=se.panel.glow,pe=x.pxPerUnit,le=C=>{const H=_[C];return[(H.x+H.w/2-p/2)/pe,-(H.y+Sd+H.h/2-d/2)/pe,0]},E=(C,H,Y={})=>x.addPanel({id:C,title:_[C].title,content:H,position:le(C),look:J,glow:ae,controls:["info","minimize","maximize"],resizable:!0,...Y});E("trades",kE({width:_.trades.w,height:_.trades.h,theme:G,rowData:u,columnDefs:[{field:"id",headerName:"ID",width:60,sortable:!0},{field:"product",headerName:"Product",width:130,sortable:!0,filter:!0},{field:"side",headerName:"Side",width:90,sortable:!0},{field:"pnl",headerName:"P&L %",width:110,sortable:!0,cellStyle:C=>({color:C.value>=0?se.up:se.down})},{field:"size",headerName:"Size",width:100,sortable:!0}],rowHeight:24})),E("candle",zE({width:_.candle.w,height:_.candle.h,candles:Rn,overlays:XE,markers:YE,theme:G})),g=VE({width:_.tilt.w,height:_.tilt.h,theme:G,value:.62,min:-1,max:1,stance:"net long",sub:"5 long · 3 short · 9 flat",leftLabel:"SHORT",rightLabel:"LONG",sideLetters:["S","L"],caption:"tilt of the book",note:"a gauge, in the same scene",items:[{label:"BTC",side:"right",value:"+2.1%",tone:"up"},{label:"ETH",side:"right",value:"+0.8%",tone:"up"},{label:"XRP",side:"left",value:"−1.4%",tone:"down"}]}),E("tilt",g),E("wall",HE({width:_.wall.w,height:_.wall.h,cells:$E(9),theme:G})),E("log",xd({width:_.log.w,height:_.log.h,entries:m,theme:G,formatTs:v})),A=S(se.floor,se.floorAlpha,-358/pe-.12),x.scene.add(A),I=X(se,-358/pe-.12),x.scene.add(I),y=setInterval(()=>{for(const C of F)C.series.push(C.series[C.series.length-1]*(1+(Math.random()-.48)*.016)),C.series.shift(),B(C,se);x==null||x.invalidate()},2600);const M=P??xe();M&&x.setCameraPose(M),b=setInterval(()=>{const C=Math.round(Math.sin(Date.now()/4e3)*90)/100;g==null||g.update({value:C,stance:C>=0?"net long":"net short"})},2500),window.__ws3d={stage:x,overview:ve,recenter:Be,tour:ye,stopTour:L,openAbout:de,toggleRotate:j,get orbit(){return T},get scape(){return I},get floor(){return A},theme:()=>e.theme,layout:_,setCaption:C=>{i.value=C},setTilt:C=>{b&&clearInterval(b),b=null,g==null||g.update({value:C,stance:C>=0?"net long":"net short"})}}}function fe(){b&&clearInterval(b),b=null,A&&(A.geometry.dispose(),A.material.dispose()),A=null,$(),r.value=!1,T=null,x==null||x.dispose(),x=null,g=null}const ie={trades:["A sortable, filterable canvas grid.","Click a header to sort; the funnel opens a filter you type into — there is no DOM input in 3D.","Rows are real data: select, copy as TSV, double-click to open."],candle:["A three.js candlestick chart.","Wheel zooms the series, drag pans, hover shows the crosshair and the OHLCV strip.","Overlays (Bollinger band, SMA50), a live price line and trade markers."],tilt:["A bipolar gauge.","The needle eases to each new reading; the figure and stance follow it."],wall:["A wall of mini charts drawn into ONE surface.","Hover rings a card, a click reports it, the wheel scrolls the wall.","Open positions are framed, with their P&L and entry line."],log:["A scrolling console.","Follows the tail until you scroll up; select and copy lines."]};function de(P){if(!x)return;const w=`about-${P}`;if(x.panels.has(w)){x.expand(w);return}const se=a(),G=ie[P].map(ae=>({text:ae,level:"info"})),J=xd({width:520,height:220,entries:G,theme:e.theme,showTimestamps:!1});J.model.setScroll(0),x.addPopup({id:w,title:`About — ${_[P].title}`,content:J,look:{curvature:se.panel.curvature,scanlines:se.panel.scanlines,vignette:!1},glow:se.panel.glow,resizable:!0},{near:P})}function xe(){const P=x==null?void 0:x.framePose(void 0,{margin:.12});if(!P)return null;const w=.17;return{position:[P.position[0],P.position[1]-w,P.position[2]],target:[P.target[0],P.target[1]-w,P.target[2]]}}function ve(){O();const P=xe();P&&x.flyTo(P,800)}function Be(){O(),x!=null&&x.expandedId?x.unexpand():ve()}const ze=P=>new Promise(w=>setTimeout(w,P));let He=null;async function ye(){if(s.value){L();return}O(),s.value=!0;const P=++R,w=()=>R===P&&!!x,se=[{text:"Zoom out — the whole workspace in one view",run:()=>ve(),hold:1500},{text:"Fly in — □ expands a panel until it fills the view",run:()=>x.expand("trades",{ms:900}),hold:1500},{text:"Fly out — □ again restores the view you had",run:()=>x.unexpand(void 0,{ms:900}),hold:1300},{text:"Fly in on the chart …",run:()=>x.expand("candle",{ms:900}),hold:1400},{text:"… and out again",run:()=>x.unexpand(void 0,{ms:900}),hold:1100},{text:"ⓘ opens a pop-up in the wall — the camera flies to it",run:()=>{He="about-wall",de("wall")},hold:2300},{text:"Close it — and the camera flies back",run:async()=>{await x.closePanel("about-wall",{ms:900}),He=null},hold:1200},{text:"Rotate — the camera sweeps around the wall; the charts on the floor show their depth",run:async()=>{re(!0),await ze(5200),O()},hold:200},{text:"Back out to the overview",run:()=>ve(),hold:1500}];for(const G of se){if(!w())break;i.value=G.text,await G.run(),await ze(G.hold)}R===P&&(i.value="",s.value=!1)}function L(){R++,s.value=!1,i.value="",O(),He&&(x!=null&&x.panels.has(He))&&x.closePanel(He,{ms:0}),He=null,x==null||x.flyTo(x.getCameraPose(),0),x!=null&&x.expandedId&&x.unexpand(void 0,{ms:600})}return je(()=>e.theme,()=>{if(!x)return;const P=x.getCameraPose();L(),fe(),Z(P)}),Ln(()=>{Z(null)}),Wu(()=>{R++,fe(),delete window.__ws3d}),(P,w)=>(Je(),gt("div",{class:Gt(["ws3d",`t-${n.theme}`]),style:On(l()),"data-testid":"ws3d"},[Pe("div",{ref_key:"host",ref:t,class:"ws3d-stage"},null,512),Pe("div",qE,[w[0]||(w[0]=Pe("span",{class:"ws3d-title"},"3D workspace",-1)),Pe("button",{class:"ws3d-btn",title:"Zoom the whole workspace out until every panel is in frame",onClick:ve},"Overview"),Pe("button",{class:"ws3d-btn",title:"Fly back to the start",onClick:Be},"Recenter"),Pe("button",{class:Gt(["ws3d-btn",{on:r.value}]),title:"Sweep the camera slowly around the wall (a drag or the wheel takes it back) — the charts on the floor show their depth","aria-pressed":r.value,onClick:j},"⟳ Rotate",10,KE),Pe("button",{class:Gt(["ws3d-btn",{on:s.value}]),title:"Play a tour: zoom out, fly in on a panel and out again, a pop-up joining the wall, a sweep around it",onClick:ye},xn(s.value?"■ Stop":"▶ Tour"),3)]),i.value?(Je(),gt("div",jE,xn(i.value),1)):jt("",!0),w[1]||(w[1]=Pe("div",{class:"ws3d-hint"},[ln("scroll to "),Pe("b",null,"zoom"),ln(" · drag to "),Pe("b",null,"orbit"),ln(" · "),Pe("b",null,"⟳"),ln(" sweeps around the wall · "),Pe("b",null,"□"),ln(" expands a panel (and flies back) · "),Pe("b",null,"ⓘ"),ln(" opens a pop-up beside it · double-click a title bar to face it · right-click a panel for its display menu · the look follows the Theme menu")],-1))],6))}}),JE=fi(ZE,[["__scopeId","data-v-4e84a30f"]]),QE={class:"demo-bar"},eT={class:"demo-tabs"},tT={key:1,class:"demo-btns"},nT={key:2},iT={key:3},sT={key:4},rT={class:"demo-btns"},oT=["value"],aT={class:"tab-content"},lT={class:"tab-content"},cT={class:"tab-content"},uT={class:"tab-content"},fT={class:"tab-content"},hT={class:"tab-content"},dT={key:0,class:"stage-tab"},pT=720,mT=ui({__name:"App",setup(n){const e=we((()=>{const N=new URLSearchParams(location.search).get("tab");return["grid","workspace","stage3d","log","candle","wall","terminal","gauge"].includes(N??"")?N:"stage3d"})()),t=we(e.value==="stage3d"?"paper":"none"),i=it(()=>t.value!=="paper"),s=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],r=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(N,z){return+(Math.random()*(z-N)+N).toFixed(4)}function l(N){return N[Math.floor(Math.random()*N.length)]}function c(N){return N.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],m=Array.from({length:240},(N,z)=>{const oe=z%r.length,Te=r[oe],Me=o[oe],Ne=l(s),Le=u-Math.floor(Math.random()*30*24*36e5),qe=Math.random()<.15,W=a(10,3e3),Ce=a(-8,22),he=+(Ce-.12).toFixed(4),Se=+(W*a(.2,2)).toFixed(2),Ue=qe?null:Le+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(Le)),entry_timestamp:c(new Date(Le)),exit_timestamp:Ue?c(new Date(Ue)):"",product:Te,strategy:Ne,exchange:Me,status:qe?"open":"closed",entry_price:W.toFixed(4),exit_price:qe?"":a(W*.92,W*1.25).toFixed(4),pnl_pct:Ce.toFixed(4),net_pnl_pct:he.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Se.toFixed(2),reason:qe?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),v=N=>z=>z.value!==""&&z.value!=null&&!isNaN(Number(z.value))?Number(z.value).toFixed(N):"",_=N=>N.value!==""&&N.value!=null&&!isNaN(Number(N.value))?Number(N.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(N){var Le,qe;const z=(Le=N.data)==null?void 0:Le.entry_timestamp,oe=(qe=N.data)==null?void 0:qe.exit_timestamp;if(!z||!oe)return"—";const Te=new Date(oe).getTime()-new Date(z).getTime();if(Te<0)return"—";const Me=Math.floor(Te/36e5),Ne=Math.floor(Te%36e5/6e4);return Me>0?`${Me}h ${Ne}m`:`${Ne}m`}const x=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:N=>N.data.entry_timestamp||N.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:N=>N.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:N=>N.data.status??"closed",cellStyle:N=>({color:N.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:N=>`${N} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:v(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:v(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:v(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:v(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:_,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:_,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:_,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:v(1),cellStyle:N=>({...p,color:Number(N.value)>65?"#e74c3c":Number(N.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:N=>(Number(N.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},g=we(null),R=we(25),A=we(!0),T=we(!0),I=we(!1),y=we(!1),S=we(-1),U=we([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),F=it(()=>S.value>0?"net long":S.value<0?"net short":"flat"),B=it(()=>S.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":S.value<0?"tilting short — a downtrend is developing.":S.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),X=we(.31),K=it(()=>{const N=X.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:N,min:0,max:.6,valueText:N.toFixed(2),tone:N<.15?"down":N<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function $(){let N=S.value;for(;N===S.value;)N=Math.floor(Math.random()*9)-4;S.value=N,X.value=+(.03+Math.random()*.5).toFixed(2)}const te=we(typeof window<"u"?window.innerWidth:1200),V=it(()=>te.value<pT);function re(){te.value=window.innerWidth}Ln(()=>window.addEventListener("resize",re)),qn(()=>window.removeEventListener("resize",re)),je(V,N=>{N&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const O=we(!1),j=we(""),Z=we("all"),fe=we(0),ie=we(!0),de=we(!1),xe=we(!1);je(e,N=>{N==="grid"&&fe.value++});function ve(N){g.value=N.api,window.__cathodeGridApi=N.api,N.api.setGridOption("rowData",m),Z.value!=="all"&&ze(Z.value)}function Be(N){var oe;const z=N.target.value;j.value=z,(oe=g.value)==null||oe.setGridOption("quickFilterText",z)}function ze(N){var z,oe,Te;Z.value=N,N==="all"?(z=g.value)==null||z.setFilterModel(null):(oe=g.value)==null||oe.setFilterModel({status:{type:"equals",filter:N}}),(Te=g.value)==null||Te.onFilterChanged()}const He={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function ye(N,z){const Te=Math.round(N*.62)-12,Me=Te+12*2,Ne=N-Me-12,Le=Math.round(z*.62),qe=Le+12*2,W=z-qe-12;return{trades:{x:12,y:12,w:Te,h:Le,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:Me,y:12,w:Ne,h:Le,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:qe,w:Te,h:W,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:Me,y:qe,w:Ne,h:W,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const L=ye(window.innerWidth,window.innerHeight-88),P=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const N=[],z=Date.now()-45e5;for(let oe=0;oe<140;oe++){const Te=P[oe%P.length];N.push({ts:z+oe*32e3,text:Te.text,level:Te.level})}return N})();const w=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],se=we([]),G=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],J=we([{level:"info",text:"CathodeTerminal demo"},...G]),ae=we(!1),pe={help:()=>G,echo:N=>({level:"info",text:N||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:N=>{const z=N.trim();return z?z==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:z==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${z}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:N=>{const z=N.trim()||"localhost",oe=[{level:"info",text:`PING ${z}: 56 data bytes`}];for(let Te=0;Te<4;Te++){const Me=(12+Math.random()*18).toFixed(1);oe.push({level:"success",text:`64 bytes from ${z}: icmp_seq=${Te} ttl=64 time=${Me} ms`})}return oe},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:N=>{const z=N.trim()||"moo",oe="─".repeat(Math.max(2,z.length+2));return[{level:"info",text:` ╭${oe}╮`},{level:"info",text:` │ ${z} │`},{level:"info",text:` ╰${oe}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const N=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:N[Math.floor(Math.random()*N.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function le(N){J.value=[...J.value,{level:"info",text:`→ ${N}`}];const z=N.trim();if(!z)return;if(z==="clear"){J.value=[];return}const oe=z.indexOf(" "),Te=oe===-1?z:z.slice(0,oe),Me=oe===-1?"":z.slice(oe+1),Ne=pe[Te];let Le;Ne?Le=Ne(Me):Le={level:"warn",text:`unknown command: ${Te} — type 'help' for the demo vocabulary`},ae.value=!0,setTimeout(()=>{if(Le!==null){const qe=Array.isArray(Le)?Le:[Le];J.value=[...J.value,...qe]}ae.value=!1},180)}const M=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((N,z)=>{const oe=C(90+z*7%60),Te=(oe[oe.length-1].close/oe[0].close-1)*100;return{id:N,title:N,badge:z>=12?"EQ":"₿",note:`${Te>=0?"+":""}${Te.toFixed(1)}%`,noteColor:Te>=0?"#00bc8c":"#e74c3c",open:z%5===0,candles:oe}});function C(N){const z=[];let oe=6e4;const Te=Date.now()-N*36e5;for(let Me=0;Me<N;Me++){const Ne=(Math.random()-.495)*oe*.012,Le=oe,qe=Math.max(1,oe+Ne),W=Math.max(Le,qe)*(1+Math.random()*.005),Ce=Math.min(Le,qe)*(1-Math.random()*.005),he=Math.round(20+Math.random()*80);z.push({start:Te+Me*36e5,open:Le,close:qe,high:W,low:Ce,volume:he}),oe=qe}return z}const H=we(C(300));function Y(N,z){const oe=new Array(N.length).fill(NaN);let Te=0;for(let Me=0;Me<N.length;Me++)Te+=N[Me],Me>=z&&(Te-=N[Me-z]),Me+1>=z&&(oe[Me]=Te/z);return oe}function ne(N,z){const oe=new Array(N.length).fill(NaN);if(!N.length)return oe;const Te=2/(z+1);let Me=N[0];oe[0]=Me;for(let Ne=1;Ne<N.length;Ne++)Me=N[Ne]*Te+Me*(1-Te),oe[Ne]=Me;for(let Ne=0;Ne<Math.min(z-1,N.length);Ne++)oe[Ne]=NaN;return oe}function be(N,z=20,oe=2){const Te=Y(N,z),Me=new Array(N.length).fill(NaN),Ne=new Array(N.length).fill(NaN);for(let Le=z-1;Le<N.length;Le++){let qe=0;for(let Ce=Le-z+1;Ce<=Le;Ce++){const he=N[Ce]-Te[Le];qe+=he*he}const W=Math.sqrt(qe/z);Me[Le]=Te[Le]+oe*W,Ne[Le]=Te[Le]-oe*W}return{upper:Me,middle:Te,lower:Ne}}const me=it(()=>{const N=H.value.map(oe=>oe.close),z=be(N,20,2);return[{kind:"band",upper:z.upper,middle:z.middle,lower:z.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:ne(N,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:ne(N,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),Ee=it(()=>{const N=H.value;if(N.length<130)return[];const z=oe=>N[oe];return[{timestamp:z(N.length-120).start,price:z(N.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:z(N.length-100).start,price:z(N.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:z(N.length-80).start,price:z(N.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:z(N.length-60).start,price:z(N.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:z(N.length-40).start,price:z(N.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:z(N.length-20).start,price:z(N.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const N=H.value,z=Ee.value;if(!N.length||!z.length)return[];const oe=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!oe)return[];const Te=oe.width/(window.devicePixelRatio||1),Me=oe.height/(window.devicePixelRatio||1),Ne=8,Le=56,qe=8,W=22,Ce=8,he=Te-Ne-Le,Se=Math.max(1,Math.floor(he/Ce)),Ue=Math.max(0,N.length-Se);let Ie=1/0,Qe=-1/0;for(let Ct=Ue;Ct<N.length;Ct++)N[Ct].low<Ie&&(Ie=N[Ct].low),N[Ct].high>Qe&&(Qe=N[Ct].high);const xt=(Qe-Ie)*.04;Ie-=xt,Qe+=xt;const Lt=qe,lt=qe+(Me-qe-W-4)*(1-.18),rn=[];for(const Ct of z){const sr=N[1].start-N[0].start;let Ei=-1;for(let k=0;k<N.length;k++)if(Math.abs(N[k].start-Ct.timestamp)<=sr*.5){Ei=k;break}if(Ei<Ue||Ei>=N.length)continue;const kn=Ne+(Ei-Ue+.5)*Ce,ns=Lt+(1-(Ct.price-Ie)/(Qe-Ie))*(lt-Lt);rn.push({x:kn,y:ns,kind:Ct.kind,label:Ct.label||""})}return rn}});function Ge(){const N=[],z=Date.now()-54e5;for(let oe=0;oe<320;oe++){const Te=w[oe%w.length];N.push({ts:z+oe*16e3,text:Te.text,level:Te.level})}se.value=N}return Ge(),(N,z)=>(Je(),gt("div",{class:Gt(["demo-shell",{"cathode-light":!i.value,mobile:V.value}])},[Pe("div",QE,[z[31]||(z[31]=Pe("span",{class:"demo-title"},"⬛ CATHODE",-1)),Pe("div",eT,[Pe("button",{class:Gt(["tab-btn",{active:e.value==="stage3d"}]),onClick:z[0]||(z[0]=oe=>e.value="stage3d")}," 3D Workspace ",2),V.value?jt("",!0):(Je(),gt("button",{key:0,class:Gt(["tab-btn",{active:e.value==="workspace"}]),onClick:z[1]||(z[1]=oe=>e.value="workspace")}," Workspace ",2)),Pe("button",{class:Gt(["tab-btn",{active:e.value==="grid"}]),onClick:z[2]||(z[2]=oe=>e.value="grid")}," Grid ",2),Pe("button",{class:Gt(["tab-btn",{active:e.value==="log"}]),onClick:z[3]||(z[3]=oe=>e.value="log")}," Log ",2),Pe("button",{class:Gt(["tab-btn",{active:e.value==="wall"}]),onClick:z[4]||(z[4]=oe=>e.value="wall")}," WALL ",2),Pe("button",{class:Gt(["tab-btn",{active:e.value==="candle"}]),onClick:z[5]||(z[5]=oe=>e.value="candle")}," Candle ",2),Pe("button",{class:Gt(["tab-btn",{active:e.value==="terminal"}]),onClick:z[6]||(z[6]=oe=>e.value="terminal")}," Terminal ",2),Pe("button",{class:Gt(["tab-btn",{active:e.value==="gauge"}]),onClick:z[7]||(z[7]=oe=>e.value="gauge")}," Gauge ",2)]),z[32]||(z[32]=Pe("label",null,"Theme",-1)),Vt(Pe("select",{"onUpdate:modelValue":z[8]||(z[8]=oe=>t.value=oe)},[...z[22]||(z[22]=[Pe("option",{value:"none"},"Default (dark)",-1),Pe("option",{value:"phosphor"},"Phosphor Green",-1),Pe("option",{value:"amber"},"Amber",-1),Pe("option",{value:"paper"},"Paper (light)",-1)])],512),[[u0,t.value]]),e.value!=="stage3d"?(Je(),gt(un,{key:0},[Pe("label",null,"Curve "+xn(R.value)+" · "+xn(R.value<0?"concave":R.value>0?"convex":"flat"),1),Vt(Pe("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":z[9]||(z[9]=oe=>R.value=oe),style:{width:"110px"}},null,512),[[Fp,R.value,void 0,{number:!0}]]),Pe("label",null,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[10]||(z[10]=oe=>A.value=oe),"data-testid":"cf-bendfield"},null,512),[[os,A.value]]),z[23]||(z[23]=ln(" Field",-1))]),Pe("label",null,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[11]||(z[11]=oe=>T.value=oe)},null,512),[[os,T.value]]),z[24]||(z[24]=ln(" Scanlines",-1))]),Pe("label",null,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[12]||(z[12]=oe=>O.value=oe)},null,512),[[os,O.value]]),z[25]||(z[25]=ln(" Glow",-1))]),Pe("label",null,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[13]||(z[13]=oe=>I.value=oe),"data-testid":"cf-magnify"},null,512),[[os,I.value]]),z[26]||(z[26]=ln(" Magnify ",-1))]),Pe("label",null,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[14]||(z[14]=oe=>y.value=oe),"data-testid":"cf-show-loaders"},null,512),[[os,y.value]]),z[27]||(z[27]=ln(" Show loaders ",-1))])],64)):jt("",!0),e.value==="gauge"?(Je(),gt("div",tT,[Pe("button",{"data-testid":"cf-tilt",onClick:$},"Tilt")])):jt("",!0),e.value==="candle"?(Je(),gt("label",nT,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[15]||(z[15]=oe=>ie.value=oe),"data-testid":"cf-show-indicators"},null,512),[[os,ie.value]]),z[28]||(z[28]=ln(" Indicators ",-1))])):jt("",!0),e.value==="candle"?(Je(),gt("label",iT,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[16]||(z[16]=oe=>de.value=oe),"data-testid":"cf-flat"},null,512),[[os,de.value]]),z[29]||(z[29]=ln(" Flat (no GL) ",-1))])):jt("",!0),e.value==="candle"?(Je(),gt("label",sT,[Vt(Pe("input",{type:"checkbox","onUpdate:modelValue":z[17]||(z[17]=oe=>xe.value=oe),"data-testid":"cf-compact"},null,512),[[os,xe.value]]),z[30]||(z[30]=ln(" Compact ",-1))])):jt("",!0),z[33]||(z[33]=Pe("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),gt(un,{key:5},[Pe("div",rT,[Pe("button",{class:Gt({active:Z.value==="all"}),onClick:z[18]||(z[18]=oe=>ze("all"))},"All",2),Pe("button",{class:Gt({active:Z.value==="open"}),onClick:z[19]||(z[19]=oe=>ze("open"))},"Open",2),Pe("button",{class:Gt({active:Z.value==="closed"}),onClick:z[20]||(z[20]=oe=>ze("closed"))},"Closed",2)]),Pe("input",{class:"demo-filter",placeholder:"Quick filter…",value:j.value,onInput:Be},null,40,oT)],64)):jt("",!0)]),Vt(Pe("div",aT,[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(od,{key:fe.value,"column-defs":x,"default-col-def":b,"row-height":28,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[ds,e.value==="grid"]]),Vt(Pe("div",lT,[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(Cu,{key:1,entries:se.value,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[ds,e.value==="log"]]),Vt(Pe("div",cT,[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(cd,{key:`cf-${de.value}`,candles:H.value,overlays:ie.value?me.value:[],markers:ie.value?Ee.value:[],theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,flat:de.value,compact:xe.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[ds,e.value==="candle"]]),Vt(Pe("div",uT,[Rt(pE,{cells:yt(M),theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,"bend-field":A.value,onCellClick:z[21]||(z[21]=oe=>console.log("wall cell:",oe))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[ds,e.value==="wall"]]),Vt(Pe("div",fT,[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(gE,{key:1,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,value:S.value,min:-6,max:6,stance:F.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:K.value,caption:B.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:U.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[ds,e.value==="gauge"]]),Vt(Pe("div",hT,[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(ud,{key:1,entries:J.value,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,busy:ae.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[ds,e.value==="terminal"]]),e.value==="stage3d"?(Je(),gt("div",dT,[Rt(JE,{theme:t.value},null,8,["theme"])])):jt("",!0),Vt(Rt(Zw,{"storage-key":"cathode.demo.layout","initial-layout":yt(L),"container-titles":He},{default:ks(()=>[Rt(Ea,{id:"trades",title:"Trades",curvature:R.value,canvas:""},{default:ks(({resizeKey:oe})=>[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(od,{key:oe,"column-defs":x,"default-col-def":b,"row-height":26,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"chart",title:"Chart",curvature:R.value,canvas:""},{default:ks(({resizeKey:oe})=>[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(cd,{key:oe,candles:H.value,overlays:me.value,markers:Ee.value,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"log",title:"Log",curvature:R.value,canvas:""},{default:ks(()=>[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(Cu,{key:1,entries:se.value,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Rt(Ea,{id:"terminal",title:"Terminal",curvature:R.value,canvas:""},{default:ks(()=>[y.value?(Je(),Ut(Ui,{key:0,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,"bend-field":A.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Ut(ud,{key:1,entries:J.value,theme:t.value,curvature:R.value,scanlines:T.value,glow:O.value,magnify:I.value,busy:ae.value,prompt:"→ ",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[ds,e.value==="workspace"]])],2))}}),gT=fi(mT,[["__scopeId","data-v-bdd27823"]]);g0(gT).mount("#app");
