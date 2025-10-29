(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Dm={exports:{}},il={},Om={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),_0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),A0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),yf=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Mm={};function Ei(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Vm}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ei.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bm(){}bm.prototype=Ei.prototype;function qc(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Vm}var Qc=qc.prototype=new bm;Qc.constructor=qc;Lm(Qc,Ei.prototype);Qc.isPureReactComponent=!0;var vf=Array.isArray,Fm=Object.prototype.hasOwnProperty,Xc={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Fm.call(e,r)&&!jm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gs,type:t,key:s,ref:a,props:i,_owner:Xc.current}}function x0(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _f=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function Xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Gs:case _0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+tu(a,0):r,vf(i)?(n="",t!=null&&(n=t.replace(_f,"$&/")+"/"),Xo(i,e,n,"",function(d){return d})):i!=null&&(Yc(i)&&(i=x0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_f,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",vf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+tu(s,l);a+=Xo(s,e,n,u,i)}else if(u=R0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+tu(s,l++),a+=Xo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(t,e,n){if(t==null)return t;var r=[],i=0;return Xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function D0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Yo={transition:null},O0={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Xc};function Bm(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!Yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Ei;Q.Fragment=w0;Q.Profiler=I0;Q.PureComponent=qc;Q.StrictMode=E0;Q.Suspense=k0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;Q.act=Bm;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lm({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fm.call(e,u)&&!jm.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:a}};Q.createContext=function(t){return t={$$typeof:S0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T0,_context:t},t.Consumer=t};Q.createElement=Um;Q.createFactory=function(t){var e=Um.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:A0,render:t}};Q.isValidElement=Yc;Q.lazy=function(t){return{$$typeof:P0,_payload:{_status:-1,_result:t},_init:D0}};Q.memo=function(t,e){return{$$typeof:C0,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Q.unstable_act=Bm;Q.useCallback=function(t,e){return tt.current.useCallback(t,e)};Q.useContext=function(t){return tt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return tt.current.useEffect(t,e)};Q.useId=function(){return tt.current.useId()};Q.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return tt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};Q.useRef=function(t){return tt.current.useRef(t)};Q.useState=function(t){return tt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return tt.current.useTransition()};Q.version="18.3.1";Om.exports=Q;var _e=Om.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=_e,L0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,F0=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)b0.call(e,r)&&!j0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:L0,type:t,key:s,ref:a,props:i,_owner:F0.current}}il.Fragment=M0;il.jsx=zm;il.jsxs=zm;Dm.exports=il;var S=Dm.exports,$m={exports:{}},gt={},Hm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var G=B.length;B.push(K);e:for(;0<G;){var he=G-1>>>1,ne=B[he];if(0<i(ne,K))B[he]=K,B[G]=ne,G=he;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],G=B.pop();if(G!==K){B[0]=G;e:for(var he=0,ne=B.length,ve=ne>>>1;he<ve;){var Xt=2*(he+1)-1,Yt=B[Xt],Jt=Xt+1,Zt=B[Jt];if(0>i(Yt,G))Jt<ne&&0>i(Zt,Yt)?(B[he]=Zt,B[Jt]=G,he=Jt):(B[he]=Yt,B[Xt]=G,he=Xt);else if(Jt<ne&&0>i(Zt,G))B[he]=Zt,B[Jt]=G,he=Jt;else break e}}return K}function i(B,K){var G=B.sortIndex-K.sortIndex;return G!==0?G:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],m=1,g=null,I=3,R=!1,x=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var K=n(d);K!==null;){if(K.callback===null)r(d);else if(K.startTime<=B)r(d),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(d)}}function O(B){if(D=!1,A(B),!x)if(n(u)!==null)x=!0,Ri(j);else{var K=n(d);K!==null&&Qt(O,K.startTime-B)}}function j(B,K){x=!1,D&&(D=!1,T(p),p=-1),R=!0;var G=I;try{for(A(K),g=n(u);g!==null&&(!(g.expirationTime>K)||B&&!k());){var he=g.callback;if(typeof he=="function"){g.callback=null,I=g.priorityLevel;var ne=he(g.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?g.callback=ne:g===n(u)&&r(u),A(K)}else r(u);g=n(u)}if(g!==null)var ve=!0;else{var Xt=n(d);Xt!==null&&Qt(O,Xt.startTime-K),ve=!1}return ve}finally{g=null,I=G,R=!1}}var U=!1,v=null,p=-1,y=5,w=-1;function k(){return!(t.unstable_now()-w<y)}function P(){if(v!==null){var B=t.unstable_now();w=B;var K=!0;try{K=v(!0,B)}finally{K?E():(U=!1,v=null)}}else U=!1}var E;if(typeof _=="function")E=function(){_(P)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,ir=vt.port2;vt.port1.onmessage=P,E=function(){ir.postMessage(null)}}else E=function(){b(P,0)};function Ri(B){v=B,U||(U=!0,E())}function Qt(B,K){p=b(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,Ri(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(I){case 1:case 2:case 3:var K=3;break;default:K=I}var G=I;I=K;try{return B()}finally{I=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=I;I=B;try{return K()}finally{I=G}},t.unstable_scheduleCallback=function(B,K,G){var he=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?he+G:he):G=he,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=G+ne,B={id:m++,callback:K,priorityLevel:B,startTime:G,expirationTime:ne,sortIndex:-1},G>he?(B.sortIndex=G,e(d,B),n(u)===null&&B===n(d)&&(D?(T(p),p=-1):D=!0,Qt(O,G-he))):(B.sortIndex=ne,e(u,B),x||R||(x=!0,Ri(j))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var K=I;return function(){var G=I;I=K;try{return B.apply(this,arguments)}finally{I=G}}}})(Wm);Hm.exports=Wm;var U0=Hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=_e,pt=U0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Km=new Set,ws={};function xr(t,e){li(t,e),li(t+"Capture",e)}function li(t,e){for(ws[t]=e,t=0;t<e.length;t++)Km.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf={},Ef={};function $0(t){return bu.call(Ef,t)?!0:bu.call(wf,t)?!1:z0.test(t)?Ef[t]=!0:(wf[t]=!0,!1)}function H0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W0(t,e,n,r){if(e===null||typeof e>"u"||H0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jc=/[\-:]([a-z])/g;function Zc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jc,Zc);Fe[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jc,Zc);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jc,Zc);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W0(e,n,i,r)&&(n=null),r||i===null?$0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _n=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Qm=Symbol.for("react.offscreen"),If=Symbol.iterator;function $i(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,nu;function Zi(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var ru=!1;function iu(t,e){if(!t||ru)return"";ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zi(t):""}function K0(t){switch(t.tag){case 5:return Zi(t.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case jr:return"Portal";case Fu:return"Profiler";case th:return"StrictMode";case ju:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function G0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=q0(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function $u(t,e){Jm(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var es=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(es(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function Zm(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q0=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(t){Q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),os[e]=os[t]})});function ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||os.hasOwnProperty(t)&&os[t]?(""+e).trim():e+"px"}function rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ng(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var X0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gu(t,e){if(e){if(X0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,Zr=null,ei=null;function Cf(t){if(t=Xs(t)){if(typeof Xu!="function")throw Error(L(280));var e=t.stateNode;e&&(e=ul(e),Xu(t.stateNode,t.type,e))}}function ig(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function sg(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function og(t,e){return t(e)}function ag(){}var su=!1;function lg(t,e,n){if(su)return t(e,n);su=!0;try{return og(t,e,n)}finally{su=!1,(Zr!==null||ei!==null)&&(ag(),sg())}}function Is(t,e){var n=t.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Yu=!1;if(fn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Yu=!1}function Y0(t,e,n,r,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var as=!1,ga=null,ya=!1,Ju=null,J0={onError:function(t){as=!0,ga=t}};function Z0(t,e,n,r,i,s,a,l,u){as=!1,ga=null,Y0.apply(J0,arguments)}function ew(t,e,n,r,i,s,a,l,u){if(Z0.apply(this,arguments),as){if(as){var d=ga;as=!1,ga=null}else throw Error(L(198));ya||(ya=!0,Ju=d)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pf(t){if(Nr(t)!==t)throw Error(L(188))}function tw(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pf(i),t;if(s===r)return Pf(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function cg(t){return t=tw(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var dg=pt.unstable_scheduleCallback,Rf=pt.unstable_cancelCallback,nw=pt.unstable_shouldYield,rw=pt.unstable_requestPaint,we=pt.unstable_now,iw=pt.unstable_getCurrentPriorityLevel,sh=pt.unstable_ImmediatePriority,fg=pt.unstable_UserBlockingPriority,va=pt.unstable_NormalPriority,sw=pt.unstable_LowPriority,pg=pt.unstable_IdlePriority,sl=null,zt=null;function ow(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:uw,aw=Math.log,lw=Math.LN2;function uw(t){return t>>>=0,t===0?32:31-(aw(t)/lw|0)|0}var xo=64,No=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ts(l):(s&=a,s!==0&&(r=ts(s)))}else a=n&~i,a!==0?r=ts(a):s!==0&&(r=ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vt(e),i=1<<n,r|=t[n],e&=~i;return r}function cw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=cw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mg(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=n}function dw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yg,ah,vg,_g,wg,ec=!1,Do=[],Fn=null,jn=null,Un=null,Ts=new Map,Ss=new Map,xn=[],fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(e.pointerId)}}function Wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pw(t,e,n,r,i){switch(e){case"focusin":return Fn=Wi(Fn,t,e,n,r,i),!0;case"dragenter":return jn=Wi(jn,t,e,n,r,i),!0;case"mouseover":return Un=Wi(Un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ts.set(s,Wi(Ts.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ss.set(s,Wi(Ss.get(s)||null,t,e,n,r,i)),!0}return!1}function Eg(t){var e=dr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=ug(n),e!==null){t.blockedOn=e,wg(t.priority,function(){vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qu=r,n.target.dispatchEvent(r),Qu=null}else return e=Xs(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){Jo(t)&&n.delete(e)}function mw(){ec=!1,Fn!==null&&Jo(Fn)&&(Fn=null),jn!==null&&Jo(jn)&&(jn=null),Un!==null&&Jo(Un)&&(Un=null),Ts.forEach(Nf),Ss.forEach(Nf)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,ec||(ec=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,mw)))}function As(t){function e(i){return Ki(i,t)}if(0<Do.length){Ki(Do[0],t);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fn!==null&&Ki(Fn,t),jn!==null&&Ki(jn,t),Un!==null&&Ki(Un,t),Ts.forEach(e),Ss.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&xn.shift()}var ti=_n.ReactCurrentBatchConfig,wa=!0;function gw(t,e,n,r){var i=te,s=ti.transition;ti.transition=null;try{te=1,lh(t,e,n,r)}finally{te=i,ti.transition=s}}function yw(t,e,n,r){var i=te,s=ti.transition;ti.transition=null;try{te=4,lh(t,e,n,r)}finally{te=i,ti.transition=s}}function lh(t,e,n,r){if(wa){var i=tc(t,e,n,r);if(i===null)gu(t,e,r,Ea,n),xf(t,r);else if(pw(i,t,e,n,r))r.stopPropagation();else if(xf(t,r),e&4&&-1<fw.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&yg(s),s=tc(t,e,n,r),s===null&&gu(t,e,r,Ea,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gu(t,e,r,null,n)}}var Ea=null;function tc(t,e,n,r){if(Ea=null,t=ih(r),t=dr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iw()){case sh:return 1;case fg:return 4;case va:case sw:return 16;case pg:return 536870912;default:return 16}default:return 16}}var Mn=null,uh=null,Zo=null;function Tg(){if(Zo)return Zo;var t,e=uh,n=e.length,r,i="value"in Mn?Mn.value:Mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function Df(){return!1}function yt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:Df,this.isPropagationStopped=Df,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=yt(Ii),Qs=me({},Ii,{view:0,detail:0}),vw=yt(Qs),au,lu,Gi,ol=me({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(au=t.screenX-Gi.screenX,lu=t.screenY-Gi.screenY):lu=au=0,Gi=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Of=yt(ol),_w=me({},ol,{dataTransfer:0}),ww=yt(_w),Ew=me({},Qs,{relatedTarget:0}),uu=yt(Ew),Iw=me({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),Tw=yt(Iw),Sw=me({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aw=yt(Sw),kw=me({},Ii,{data:0}),Vf=yt(kw),Cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rw[t])?!!e[t]:!1}function hh(){return xw}var Nw=me({},Qs,{key:function(t){if(t.key){var e=Cw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dw=yt(Nw),Ow=me({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=yt(Ow),Vw=me({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),Lw=yt(Vw),Mw=me({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),bw=yt(Mw),Fw=me({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jw=yt(Fw),Uw=[9,13,27,32],dh=fn&&"CompositionEvent"in window,ls=null;fn&&"documentMode"in document&&(ls=document.documentMode);var Bw=fn&&"TextEvent"in window&&!ls,Sg=fn&&(!dh||ls&&8<ls&&11>=ls),Mf=" ",bf=!1;function Ag(t,e){switch(t){case"keyup":return Uw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function zw(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(bf=!0,Mf);case"textInput":return t=e.data,t===Mf&&bf?null:t;default:return null}}function $w(t,e){if(Br)return t==="compositionend"||!dh&&Ag(t,e)?(t=Tg(),Zo=uh=Mn=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var Hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hw[t.type]:e==="textarea"}function Cg(t,e,n,r){ig(r),e=Ia(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var us=null,ks=null;function Ww(t){Fg(t,0)}function al(t){var e=Hr(t);if(Ym(e))return t}function Kw(t,e){if(t==="change")return e}var Pg=!1;if(fn){var cu;if(fn){var hu="oninput"in document;if(!hu){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),hu=typeof jf.oninput=="function"}cu=hu}else cu=!1;Pg=cu&&(!document.documentMode||9<document.documentMode)}function Uf(){us&&(us.detachEvent("onpropertychange",Rg),ks=us=null)}function Rg(t){if(t.propertyName==="value"&&al(ks)){var e=[];Cg(e,ks,t,ih(t)),lg(Ww,e)}}function Gw(t,e,n){t==="focusin"?(Uf(),us=e,ks=n,us.attachEvent("onpropertychange",Rg)):t==="focusout"&&Uf()}function qw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(ks)}function Qw(t,e){if(t==="click")return al(e)}function Xw(t,e){if(t==="input"||t==="change")return al(e)}function Yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:Yw;function Cs(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bu.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zf(t,e){var n=Bf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jw(t){var e=Ng(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(r!==null&&fh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zf(n,s);var a=zf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zw=fn&&"documentMode"in document&&11>=document.documentMode,zr=null,nc=null,cs=null,rc=!1;function $f(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rc||zr==null||zr!==ma(r)||(r=zr,"selectionStart"in r&&fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cs&&Cs(cs,r)||(cs=r,r=Ia(nc,"onSelect"),0<r.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},du={},Dg={};fn&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function ll(t){if(du[t])return du[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return du[t]=e[n];return t}var Og=ll("animationend"),Vg=ll("animationiteration"),Lg=ll("animationstart"),Mg=ll("transitionend"),bg=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){bg.set(t,e),xr(e,[t])}for(var fu=0;fu<Hf.length;fu++){var pu=Hf[fu],eE=pu.toLowerCase(),tE=pu[0].toUpperCase()+pu.slice(1);er(eE,"on"+tE)}er(Og,"onAnimationEnd");er(Vg,"onAnimationIteration");er(Lg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Mg,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function Wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ew(r,e,void 0,t),t.currentTarget=null}function Fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wf(i,l,d),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wf(i,l,d),s=u}}}if(ya)throw t=Ju,ya=!1,Ju=null,t}function le(t,e){var n=e[lc];n===void 0&&(n=e[lc]=new Set);var r=t+"__bubble";n.has(r)||(jg(e,t,2,!1),n.add(r))}function mu(t,e,n){var r=0;e&&(r|=4),jg(n,t,r,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ps(t){if(!t[Lo]){t[Lo]=!0,Km.forEach(function(n){n!=="selectionchange"&&(nE.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,mu("selectionchange",!1,e))}}function jg(t,e,n,r){switch(Ig(e)){case 1:var i=gw;break;case 4:i=yw;break;default:i=lh}n=i.bind(null,e,n,t),i=void 0,!Yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=dr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}lg(function(){var d=s,m=ih(n),g=[];e:{var I=bg.get(t);if(I!==void 0){var R=ch,x=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":R=Dw;break;case"focusin":x="focus",R=uu;break;case"focusout":x="blur",R=uu;break;case"beforeblur":case"afterblur":R=uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Lw;break;case Og:case Vg:case Lg:R=Tw;break;case Mg:R=bw;break;case"scroll":R=vw;break;case"wheel":R=jw;break;case"copy":case"cut":case"paste":R=Aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Lf}var D=(e&4)!==0,b=!D&&t==="scroll",T=D?I!==null?I+"Capture":null:I;D=[];for(var _=d,A;_!==null;){A=_;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,T!==null&&(O=Is(_,T),O!=null&&D.push(Rs(_,O,A)))),b)break;_=_.return}0<D.length&&(I=new R(I,x,null,n,m),g.push({event:I,listeners:D}))}}if(!(e&7)){e:{if(I=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",I&&n!==Qu&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[pn]))break e;if((R||I)&&(I=m.window===m?m:(I=m.ownerDocument)?I.defaultView||I.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=d,x=x?dr(x):null,x!==null&&(b=Nr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=d),R!==x)){if(D=Of,O="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=Lf,O="onPointerLeave",T="onPointerEnter",_="pointer"),b=R==null?I:Hr(R),A=x==null?I:Hr(x),I=new D(O,_+"leave",R,n,m),I.target=b,I.relatedTarget=A,O=null,dr(m)===d&&(D=new D(T,_+"enter",x,n,m),D.target=A,D.relatedTarget=b,O=D),b=O,R&&x)t:{for(D=R,T=x,_=0,A=D;A;A=br(A))_++;for(A=0,O=T;O;O=br(O))A++;for(;0<_-A;)D=br(D),_--;for(;0<A-_;)T=br(T),A--;for(;_--;){if(D===T||T!==null&&D===T.alternate)break t;D=br(D),T=br(T)}D=null}else D=null;R!==null&&Kf(g,I,R,D,!1),x!==null&&b!==null&&Kf(g,b,x,D,!0)}}e:{if(I=d?Hr(d):window,R=I.nodeName&&I.nodeName.toLowerCase(),R==="select"||R==="input"&&I.type==="file")var j=Kw;else if(Ff(I))if(Pg)j=Xw;else{j=qw;var U=Gw}else(R=I.nodeName)&&R.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(j=Qw);if(j&&(j=j(t,d))){Cg(g,j,n,m);break e}U&&U(t,I,d),t==="focusout"&&(U=I._wrapperState)&&U.controlled&&I.type==="number"&&Hu(I,"number",I.value)}switch(U=d?Hr(d):window,t){case"focusin":(Ff(U)||U.contentEditable==="true")&&(zr=U,nc=d,cs=null);break;case"focusout":cs=nc=zr=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,$f(g,n,m);break;case"selectionchange":if(Zw)break;case"keydown":case"keyup":$f(g,n,m)}var v;if(dh)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Br?Ag(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Sg&&n.locale!=="ko"&&(Br||p!=="onCompositionStart"?p==="onCompositionEnd"&&Br&&(v=Tg()):(Mn=m,uh="value"in Mn?Mn.value:Mn.textContent,Br=!0)),U=Ia(d,p),0<U.length&&(p=new Vf(p,t,null,n,m),g.push({event:p,listeners:U}),v?p.data=v:(v=kg(n),v!==null&&(p.data=v)))),(v=Bw?zw(t,n):$w(t,n))&&(d=Ia(d,"onBeforeInput"),0<d.length&&(m=new Vf("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=v))}Fg(g,e)})}function Rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Is(t,n),s!=null&&r.unshift(Rs(t,s,i)),s=Is(t,e),s!=null&&r.push(Rs(t,s,i))),t=t.return}return r}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Is(n,s),u!=null&&a.unshift(Rs(n,u,l))):i||(u=Is(n,s),u!=null&&a.push(Rs(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var rE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(rE,`
`).replace(iE,"")}function Mo(t,e,n){if(e=Gf(e),Gf(t)!==e&&n)throw Error(L(425))}function Ta(){}var ic=null,sc=null;function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,oE=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(aE)}:ac;function aE(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),As(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);As(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ti,xs="__reactProps$"+Ti,pn="__reactContainer$"+Ti,lc="__reactEvents$"+Ti,lE="__reactListeners$"+Ti,uE="__reactHandles$"+Ti;function dr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qf(t);t!==null;){if(n=t[Bt])return n;t=Qf(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Bt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function ul(t){return t[xs]||null}var uc=[],Wr=-1;function tr(t){return{current:t}}function ue(t){0>Wr||(t.current=uc[Wr],uc[Wr]=null,Wr--)}function se(t,e){Wr++,uc[Wr]=t.current,t.current=e}var Xn={},Qe=tr(Xn),ot=tr(!1),wr=Xn;function ui(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Sa(){ue(ot),ue(Qe)}function Xf(t,e,n){if(Qe.current!==Xn)throw Error(L(168));se(Qe,e),se(ot,n)}function Ug(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,G0(t)||"Unknown",i));return me({},n,r)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,wr=Qe.current,se(Qe,t),se(ot,ot.current),!0}function Yf(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Ug(t,e,wr),r.__reactInternalMemoizedMergedChildContext=t,ue(ot),ue(Qe),se(Qe,t)):ue(ot),se(ot,n)}var rn=null,cl=!1,vu=!1;function Bg(t){rn===null?rn=[t]:rn.push(t)}function cE(t){cl=!0,Bg(t)}function nr(){if(!vu&&rn!==null){vu=!0;var t=0,e=te;try{var n=rn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,cl=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),dg(sh,nr),i}finally{te=e,vu=!1}}return null}var Kr=[],Gr=0,ka=null,Ca=0,_t=[],wt=0,Er=null,sn=1,on="";function ur(t,e){Kr[Gr++]=Ca,Kr[Gr++]=ka,ka=t,Ca=e}function zg(t,e,n){_t[wt++]=sn,_t[wt++]=on,_t[wt++]=Er,Er=t;var r=sn;t=on;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,sn=1<<32-Vt(e)+i|n<<i|r,on=s+t}else sn=1<<s|n<<i|r,on=t}function ph(t){t.return!==null&&(ur(t,1),zg(t,1,0))}function mh(t){for(;t===ka;)ka=Kr[--Gr],Kr[Gr]=null,Ca=Kr[--Gr],Kr[Gr]=null;for(;t===Er;)Er=_t[--wt],_t[wt]=null,on=_t[--wt],_t[wt]=null,sn=_t[--wt],_t[wt]=null}var ft=null,dt=null,ce=!1,xt=null;function $g(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,dt=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,dt=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(ce){var e=dt;if(e){var n=e;if(!Jf(t,e)){if(cc(t))throw Error(L(418));e=Bn(n.nextSibling);var r=ft;e&&Jf(t,e)?$g(r,n):(t.flags=t.flags&-4097|2,ce=!1,ft=t)}}else{if(cc(t))throw Error(L(418));t.flags=t.flags&-4097|2,ce=!1,ft=t}}}function Zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function bo(t){if(t!==ft)return!1;if(!ce)return Zf(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oc(t.type,t.memoizedProps)),e&&(e=dt)){if(cc(t))throw Hg(),Error(L(418));for(;e;)$g(t,e),e=Bn(e.nextSibling)}if(Zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ft?Bn(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=dt;t;)t=Bn(t.nextSibling)}function ci(){dt=ft=null,ce=!1}function gh(t){xt===null?xt=[t]:xt.push(t)}var hE=_n.ReactCurrentBatchConfig;function qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function Wg(t){function e(T,_){if(t){var A=T.deletions;A===null?(T.deletions=[_],T.flags|=16):A.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=Wn(T,_),T.index=0,T.sibling=null,T}function s(T,_,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<_?(T.flags|=2,_):A):(T.flags|=2,_)):(T.flags|=1048576,_)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,A,O){return _===null||_.tag!==6?(_=Au(A,T.mode,O),_.return=T,_):(_=i(_,A),_.return=T,_)}function u(T,_,A,O){var j=A.type;return j===Ur?m(T,_,A.props.children,O,A.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pn&&ep(j)===_.type)?(O=i(_,A.props),O.ref=qi(T,_,A),O.return=T,O):(O=aa(A.type,A.key,A.props,null,T.mode,O),O.ref=qi(T,_,A),O.return=T,O)}function d(T,_,A,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=ku(A,T.mode,O),_.return=T,_):(_=i(_,A.children||[]),_.return=T,_)}function m(T,_,A,O,j){return _===null||_.tag!==7?(_=yr(A,T.mode,O,j),_.return=T,_):(_=i(_,A),_.return=T,_)}function g(T,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Au(""+_,T.mode,A),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:return A=aa(_.type,_.key,_.props,null,T.mode,A),A.ref=qi(T,null,_),A.return=T,A;case jr:return _=ku(_,T.mode,A),_.return=T,_;case Pn:var O=_._init;return g(T,O(_._payload),A)}if(es(_)||$i(_))return _=yr(_,T.mode,A,null),_.return=T,_;Fo(T,_)}return null}function I(T,_,A,O){var j=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(T,_,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Co:return A.key===j?u(T,_,A,O):null;case jr:return A.key===j?d(T,_,A,O):null;case Pn:return j=A._init,I(T,_,j(A._payload),O)}if(es(A)||$i(A))return j!==null?null:m(T,_,A,O,null);Fo(T,A)}return null}function R(T,_,A,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(A)||null,l(_,T,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Co:return T=T.get(O.key===null?A:O.key)||null,u(_,T,O,j);case jr:return T=T.get(O.key===null?A:O.key)||null,d(_,T,O,j);case Pn:var U=O._init;return R(T,_,A,U(O._payload),j)}if(es(O)||$i(O))return T=T.get(A)||null,m(_,T,O,j,null);Fo(_,O)}return null}function x(T,_,A,O){for(var j=null,U=null,v=_,p=_=0,y=null;v!==null&&p<A.length;p++){v.index>p?(y=v,v=null):y=v.sibling;var w=I(T,v,A[p],O);if(w===null){v===null&&(v=y);break}t&&v&&w.alternate===null&&e(T,v),_=s(w,_,p),U===null?j=w:U.sibling=w,U=w,v=y}if(p===A.length)return n(T,v),ce&&ur(T,p),j;if(v===null){for(;p<A.length;p++)v=g(T,A[p],O),v!==null&&(_=s(v,_,p),U===null?j=v:U.sibling=v,U=v);return ce&&ur(T,p),j}for(v=r(T,v);p<A.length;p++)y=R(v,T,p,A[p],O),y!==null&&(t&&y.alternate!==null&&v.delete(y.key===null?p:y.key),_=s(y,_,p),U===null?j=y:U.sibling=y,U=y);return t&&v.forEach(function(k){return e(T,k)}),ce&&ur(T,p),j}function D(T,_,A,O){var j=$i(A);if(typeof j!="function")throw Error(L(150));if(A=j.call(A),A==null)throw Error(L(151));for(var U=j=null,v=_,p=_=0,y=null,w=A.next();v!==null&&!w.done;p++,w=A.next()){v.index>p?(y=v,v=null):y=v.sibling;var k=I(T,v,w.value,O);if(k===null){v===null&&(v=y);break}t&&v&&k.alternate===null&&e(T,v),_=s(k,_,p),U===null?j=k:U.sibling=k,U=k,v=y}if(w.done)return n(T,v),ce&&ur(T,p),j;if(v===null){for(;!w.done;p++,w=A.next())w=g(T,w.value,O),w!==null&&(_=s(w,_,p),U===null?j=w:U.sibling=w,U=w);return ce&&ur(T,p),j}for(v=r(T,v);!w.done;p++,w=A.next())w=R(v,T,p,w.value,O),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?p:w.key),_=s(w,_,p),U===null?j=w:U.sibling=w,U=w);return t&&v.forEach(function(P){return e(T,P)}),ce&&ur(T,p),j}function b(T,_,A,O){if(typeof A=="object"&&A!==null&&A.type===Ur&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Co:e:{for(var j=A.key,U=_;U!==null;){if(U.key===j){if(j=A.type,j===Ur){if(U.tag===7){n(T,U.sibling),_=i(U,A.props.children),_.return=T,T=_;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pn&&ep(j)===U.type){n(T,U.sibling),_=i(U,A.props),_.ref=qi(T,U,A),_.return=T,T=_;break e}n(T,U);break}else e(T,U);U=U.sibling}A.type===Ur?(_=yr(A.props.children,T.mode,O,A.key),_.return=T,T=_):(O=aa(A.type,A.key,A.props,null,T.mode,O),O.ref=qi(T,_,A),O.return=T,T=O)}return a(T);case jr:e:{for(U=A.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(T,_.sibling),_=i(_,A.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=ku(A,T.mode,O),_.return=T,T=_}return a(T);case Pn:return U=A._init,b(T,_,U(A._payload),O)}if(es(A))return x(T,_,A,O);if($i(A))return D(T,_,A,O);Fo(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,A),_.return=T,T=_):(n(T,_),_=Au(A,T.mode,O),_.return=T,T=_),a(T)):n(T,_)}return b}var hi=Wg(!0),Kg=Wg(!1),Pa=tr(null),Ra=null,qr=null,yh=null;function vh(){yh=qr=Ra=null}function _h(t){var e=Pa.current;ue(Pa),t._currentValue=e}function dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ra=t,yh=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(Ra===null)throw Error(L(308));qr=t,Ra.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var fr=null;function wh(t){fr===null?fr=[t]:fr.push(t)}function Gg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}function tp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xa(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,m=d=u=null,l=s;do{var I=l.lane,R=l.eventTime;if((r&I)===I){m!==null&&(m=m.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(I=e,R=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){g=x.call(R,g,I);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,I=typeof x=="function"?x.call(R,g,I):x,I==null)break e;g=me({},g,I);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,I=i.effects,I===null?i.effects=[l]:I.push(l))}else R={eventTime:R,lane:I,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=R,u=g):m=m.next=R,a|=I;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;I=l,l=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(m===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=g}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Ys={},$t=tr(Ys),Ns=tr(Ys),Ds=tr(Ys);function pr(t){if(t===Ys)throw Error(L(174));return t}function Ih(t,e){switch(se(Ds,e),se(Ns,t),se($t,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}ue($t),se($t,e)}function di(){ue($t),ue(Ns),ue(Ds)}function Qg(t){pr(Ds.current);var e=pr($t.current),n=Ku(e,t.type);e!==n&&(se(Ns,t),se($t,n))}function Th(t){Ns.current===t&&(ue($t),ue(Ns))}var fe=tr(0);function Na(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Sh(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var na=_n.ReactCurrentDispatcher,wu=_n.ReactCurrentBatchConfig,Ir=0,pe=null,Ae=null,Pe=null,Da=!1,hs=!1,Os=0,dE=0;function ze(){throw Error(L(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function kh(t,e,n,r,i,s){if(Ir=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?gE:yE,t=n(r,i),hs){s=0;do{if(hs=!1,Os=0,25<=s)throw Error(L(301));s+=1,Pe=Ae=null,e.updateQueue=null,na.current=vE,t=n(r,i)}while(hs)}if(na.current=Oa,e=Ae!==null&&Ae.next!==null,Ir=0,Pe=Ae=pe=null,Da=!1,e)throw Error(L(300));return t}function Ch(){var t=Os!==0;return Os=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?pe.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function At(){if(Ae===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Pe===null?pe.memoizedState:Pe.next;if(e!==null)Pe=e,Ae=t;else{if(t===null)throw Error(L(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Pe===null?pe.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Vs(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=At(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,d=s;do{var m=d.lane;if((Ir&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,pe.lanes|=m,Tr|=m}d=d.next}while(d!==null&&d!==s);u===null?a=r:u.next=l,bt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=At(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);bt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xg(){}function Yg(t,e){var n=pe,r=At(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Ph(ey.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ls(9,Zg.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(L(349));Ir&30||Jg(n,e,i)}return i}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zg(t,e,n,r){e.value=n,e.getSnapshot=r,ty(e)&&ny(t)}function ey(t,e,n){return n(function(){ty(e)&&ny(t)})}function ty(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function ny(t){var e=mn(t,1);e!==null&&Lt(e,t,1,-1)}function rp(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:t},e.queue=t,t=t.dispatch=mE.bind(null,pe,t),[e.memoizedState,t]}function Ls(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ry(){return At().memoizedState}function ra(t,e,n,r){var i=Ut();pe.flags|=t,i.memoizedState=Ls(1|e,n,void 0,r===void 0?null:r)}function hl(t,e,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var a=Ae.memoizedState;if(s=a.destroy,r!==null&&Ah(r,a.deps)){i.memoizedState=Ls(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Ls(1|e,n,s,r)}function ip(t,e){return ra(8390656,8,t,e)}function Ph(t,e){return hl(2048,8,t,e)}function iy(t,e){return hl(4,2,t,e)}function sy(t,e){return hl(4,4,t,e)}function oy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ay(t,e,n){return n=n!=null?n.concat([t]):null,hl(4,4,oy.bind(null,e,t),n)}function Rh(){}function ly(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ah(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uy(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ah(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cy(t,e,n){return Ir&21?(bt(n,e)||(n=mg(),pe.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function fE(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{te=n,wu.transition=r}}function hy(){return At().memoizedState}function pE(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dy(t))fy(e,n);else if(n=Gg(t,e,n,r),n!==null){var i=et();Lt(n,t,r,i),py(n,e,r)}}function mE(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dy(t))fy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,a)){var u=e.interleaved;u===null?(i.next=i,wh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Gg(t,e,i,r),n!==null&&(i=et(),Lt(n,t,r,i),py(n,e,r))}}function dy(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function fy(t,e){hs=Da=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}var Oa={readContext:St,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},gE={readContext:St,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,oy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pE.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Rh,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=fE.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Ut();if(ce){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),xe===null)throw Error(L(349));Ir&30||Jg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ip(ey.bind(null,r,s,t),[t]),r.flags|=2048,Ls(9,Zg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=xe.identifierPrefix;if(ce){var n=on,r=sn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Os++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yE={readContext:St,useCallback:ly,useContext:St,useEffect:Ph,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:sy,useMemo:uy,useReducer:Eu,useRef:ry,useState:function(){return Eu(Vs)},useDebugValue:Rh,useDeferredValue:function(t){var e=At();return cy(e,Ae.memoizedState,t)},useTransition:function(){var t=Eu(Vs)[0],e=At().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Yg,useId:hy,unstable_isNewReconciler:!1},vE={readContext:St,useCallback:ly,useContext:St,useEffect:Ph,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:sy,useMemo:uy,useReducer:Iu,useRef:ry,useState:function(){return Iu(Vs)},useDebugValue:Rh,useDeferredValue:function(t){var e=At();return Ae===null?e.memoizedState=t:cy(e,Ae.memoizedState,t)},useTransition:function(){var t=Iu(Vs)[0],e=At().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Yg,useId:hy,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=Hn(t),s=cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=Hn(t),s=cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=Hn(t),i=cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Lt(e,t,r,n),ta(e,t,r))}};function sp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Cs(n,r)||!Cs(i,s):!0}function my(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=at(e)?wr:Qe.current,r=e.contextTypes,s=(r=r!=null)?ui(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=at(e)?wr:Qe.current,i.context=ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dl.enqueueReplaceState(i,i.state,null),xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=K0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _E=typeof WeakMap=="function"?WeakMap:Map;function gy(t,e,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){La||(La=!0,Ac=r),mc(t,e)},n}function yy(t,e,n){n=cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mc(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ap(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _E;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OE.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var wE=_n.ReactCurrentOwner,st=!1;function Ze(t,e,n,r){e.child=t===null?Kg(e,null,n,r):hi(e,t.child,n,r)}function cp(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=kh(t,e,n,r,s,i),n=Ch(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ce&&n&&ph(e),e.flags|=1,Ze(t,e,r,i),e.child)}function hp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vy(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cs,n(a,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function vy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,gn(t,e,i)}return gc(t,e,n,r,i)}function _y(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Xr,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Xr,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Xr,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Xr,ht),ht|=r;return Ze(t,e,i,n),e.child}function wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gc(t,e,n,r,i){var s=at(n)?wr:Qe.current;return s=ui(e,s),ni(e,i),n=kh(t,e,n,r,s,i),r=Ch(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ce&&r&&ph(e),e.flags|=1,Ze(t,e,n,i),e.child)}function dp(t,e,n,r,i){if(at(n)){var s=!0;Aa(e)}else s=!1;if(ni(e,i),e.stateNode===null)ia(t,e),my(e,n,r),pc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=St(d):(d=at(n)?wr:Qe.current,d=ui(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&op(e,a,r,d),Rn=!1;var I=e.memoizedState;a.state=I,xa(e,r,a,i),u=e.memoizedState,l!==r||I!==u||ot.current||Rn?(typeof m=="function"&&(fc(e,n,m,r),u=e.memoizedState),(l=Rn||sp(e,n,l,r,I,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,qg(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Pt(e.type,l),a.props=d,g=e.pendingProps,I=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=St(u):(u=at(n)?wr:Qe.current,u=ui(e,u));var R=n.getDerivedStateFromProps;(m=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||I!==u)&&op(e,a,r,u),Rn=!1,I=e.memoizedState,a.state=I,xa(e,r,a,i);var x=e.memoizedState;l!==g||I!==x||ot.current||Rn?(typeof R=="function"&&(fc(e,n,R,r),x=e.memoizedState),(d=Rn||sp(e,n,d,r,I,x,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),r=!1)}return yc(t,e,n,r,s,i)}function yc(t,e,n,r,i,s){wy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Yf(e,n,!1),gn(t,e,s);r=e.stateNode,wE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=hi(e,t.child,null,s),e.child=hi(e,null,l,s)):Ze(t,e,l,s),e.memoizedState=r.state,i&&Yf(e,n,!0),e.child}function Ey(t){var e=t.stateNode;e.pendingContext?Xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xf(t,e.context,!1),Ih(t,e.containerInfo)}function fp(t,e,n,r,i){return ci(),gh(i),e.flags|=256,Ze(t,e,n,r),e.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function _c(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iy(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(fe,i&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ml(a,r,0,null),t=yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_c(n),e.memoizedState=vc,t):xh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EE(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Wn(l,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?_c(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=vc,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xh(t,e){return e=ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,r){return r!==null&&gh(r),hi(e,t.child,null,n),t=xh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EE(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Tu(Error(L(422))),jo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ml({mode:"visible",children:r.children},i,0,null),s=yr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hi(e,t.child,null,a),e.child.memoizedState=_c(a),e.memoizedState=vc,s);if(!(e.mode&1))return jo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Tu(s,r,void 0),jo(t,e,a,r)}if(l=(a&t.childLanes)!==0,st||l){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Lt(r,t,i,-1))}return Mh(),r=Tu(Error(L(421))),jo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Bn(i.nextSibling),ft=e,ce=!0,xt=null,t!==null&&(_t[wt++]=sn,_t[wt++]=on,_t[wt++]=Er,sn=t.id,on=t.overflow,Er=e),e=xh(e,r.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dc(t.return,e,n)}function Su(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ty(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Na(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Su(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Na(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IE(t,e,n){switch(e.tag){case 3:Ey(e),ci();break;case 5:Qg(e);break;case 1:at(e.type)&&Aa(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Pa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?Iy(t,e,n):(se(fe,fe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ty(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,_y(t,e,n)}return gn(t,e,n)}var Sy,wc,Ay,ky;Sy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wc=function(){};Ay=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr($t.current);var s=null;switch(n){case"input":i=zu(t,i),r=zu(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Wu(t,i),r=Wu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ta)}Gu(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ws.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ws.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&le("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};ky=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qi(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TE(t,e,n){var r=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return at(e.type)&&Sa(),$e(e),null;case 3:return r=e.stateNode,di(),ue(ot),ue(Qe),Sh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Pc(xt),xt=null))),wc(t,e),$e(e),null;case 5:Th(e);var i=pr(Ds.current);if(n=e.type,t!==null&&e.stateNode!=null)Ay(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return $e(e),null}if(t=pr($t.current),bo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[xs]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ns.length;i++)le(ns[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Tf(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Af(r,s),le("invalid",r)}Gu(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Mo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Mo(r.textContent,l,t),i=["children",""+l]):ws.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":Po(r),Sf(r,s,!0);break;case"textarea":Po(r),kf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ta)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Bt]=e,t[xs]=r,Sy(t,e,!1,!1),e.stateNode=t;e:{switch(a=qu(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<ns.length;i++)le(ns[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Tf(t,r),i=zu(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":Af(t,r),i=Wu(t,r),le("invalid",t);break;default:i=r}Gu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Es(t,u):typeof u=="number"&&Es(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&le("scroll",t):u!=null&&eh(t,s,u,a))}switch(n){case"input":Po(t),Sf(t,r,!1);break;case"textarea":Po(t),kf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)ky(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=pr(Ds.current),pr($t.current),bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Mo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return $e(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&dt!==null&&e.mode&1&&!(e.flags&128))Hg(),ci(),e.flags|=98560,s=!1;else if(s=bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Bt]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else xt!==null&&(Pc(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?ke===0&&(ke=3):Mh())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return di(),wc(t,e),t===null&&Ps(e.stateNode.containerInfo),$e(e),null;case 10:return _h(e.type._context),$e(e),null;case 17:return at(e.type)&&Sa(),$e(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Qi(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Na(t),a!==null){for(e.flags|=128,Qi(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>pi&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Na(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ce)return $e(e),null}else 2*we()-s.renderingStartTime>pi&&n!==1073741824&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Lh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function SE(t,e){switch(mh(e),e.tag){case 1:return at(e.type)&&Sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return di(),ue(ot),ue(Qe),Sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Th(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return di(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Uo=!1,Ke=!1,AE=typeof WeakSet=="function"?WeakSet:Set,z=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Ec(t,e,n){try{n()}catch(r){ye(t,e,r)}}var mp=!1;function kE(t,e){if(ic=wa,t=Ng(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,m=0,g=t,I=null;t:for(;;){for(var R;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(R=g.firstChild)!==null;)I=g,g=R;for(;;){if(g===t)break t;if(I===n&&++d===i&&(l=a),I===s&&++m===r&&(u=a),(R=g.nextSibling)!==null)break;g=I,I=g.parentNode}g=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:t,selectionRange:n},wa=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,b=x.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?D:Pt(e.type,D),b);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(O){ye(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return x=mp,mp=!1,x}function ds(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ec(e,n,s)}i=i.next}while(i!==r)}}function fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cy(t){var e=t.alternate;e!==null&&(t.alternate=null,Cy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[xs],delete e[lc],delete e[lE],delete e[uE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Py(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Py(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ta));else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}function Sc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sc(t,e,n),t=t.sibling;t!==null;)Sc(t,e,n),t=t.sibling}var Oe=null,Rt=!1;function kn(t,e,n){for(n=n.child;n!==null;)Ry(t,e,n),n=n.sibling}function Ry(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ke||Qr(n,e);case 6:var r=Oe,i=Rt;Oe=null,kn(t,e,n),Oe=r,Rt=i,Oe!==null&&(Rt?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Rt?(t=Oe,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),As(t)):yu(Oe,n.stateNode));break;case 4:r=Oe,i=Rt,Oe=n.stateNode.containerInfo,Rt=!0,kn(t,e,n),Oe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ec(n,e,a),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!Ke&&(Qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,kn(t,e,n),Ke=r):kn(t,e,n);break;default:kn(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AE),e.forEach(function(r){var i=LE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,Rt=!1;break e;case 3:Oe=l.stateNode.containerInfo,Rt=!0;break e;case 4:Oe=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Oe===null)throw Error(L(160));Ry(s,a,i),Oe=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ye(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xy(e,t),e=e.sibling}function xy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),jt(t),r&4){try{ds(3,t,t.return),fl(3,t)}catch(D){ye(t,t.return,D)}try{ds(5,t,t.return)}catch(D){ye(t,t.return,D)}}break;case 1:Ct(e,t),jt(t),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(Ct(e,t),jt(t),r&512&&n!==null&&Qr(n,n.return),t.flags&32){var i=t.stateNode;try{Es(i,"")}catch(D){ye(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jm(i,s),qu(l,a);var d=qu(l,s);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?rg(i,g):m==="dangerouslySetInnerHTML"?tg(i,g):m==="children"?Es(i,g):eh(i,m,g,d)}switch(l){case"input":$u(i,s);break;case"textarea":Zm(i,s);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Jr(i,!!s.multiple,R,!1):I!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[xs]=s}catch(D){ye(t,t.return,D)}}break;case 6:if(Ct(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ye(t,t.return,D)}}break;case 3:if(Ct(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{As(e.containerInfo)}catch(D){ye(t,t.return,D)}break;case 4:Ct(e,t),jt(t);break;case 13:Ct(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oh=we())),r&4&&yp(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(d=Ke)||m,Ct(e,t),Ke=d):Ct(e,t),jt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(z=t,m=t.child;m!==null;){for(g=z=m;z!==null;){switch(I=z,R=I.child,I.tag){case 0:case 11:case 14:case 15:ds(4,I,I.return);break;case 1:Qr(I,I.return);var x=I.stateNode;if(typeof x.componentWillUnmount=="function"){r=I,n=I.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){ye(r,n,D)}}break;case 5:Qr(I,I.return);break;case 22:if(I.memoizedState!==null){_p(g);continue}}R!==null?(R.return=I,z=R):_p(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ng("display",a))}catch(D){ye(t,t.return,D)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(D){ye(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ct(e,t),jt(t),r&4&&yp(t);break;case 21:break;default:Ct(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Py(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Es(i,""),r.flags&=-33);var s=gp(t);Sc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=gp(t);Tc(t,l,a);break;default:throw Error(L(161))}}catch(u){ye(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CE(t,e,n){z=t,Ny(t)}function Ny(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Uo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ke;l=Uo;var d=Ke;if(Uo=a,(Ke=u)&&!d)for(z=i;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?wp(i):u!==null?(u.return=a,z=u):wp(i);for(;s!==null;)z=s,Ny(s),s=s.sibling;z=i,Uo=l,Ke=d}vp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):vp(t)}}function vp(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&As(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ke||e.flags&512&&Ic(e)}catch(I){ye(e,e.return,I)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function _p(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function wp(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fl(4,e)}catch(u){ye(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ye(e,i,u)}}var s=e.return;try{Ic(e)}catch(u){ye(e,s,u)}break;case 5:var a=e.return;try{Ic(e)}catch(u){ye(e,a,u)}}}catch(u){ye(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var PE=Math.ceil,Va=_n.ReactCurrentDispatcher,Nh=_n.ReactCurrentOwner,Tt=_n.ReactCurrentBatchConfig,Z=0,xe=null,Se=null,be=0,ht=0,Xr=tr(0),ke=0,Ms=null,Tr=0,pl=0,Dh=0,fs=null,it=null,Oh=0,pi=1/0,nn=null,La=!1,Ac=null,$n=null,Bo=!1,bn=null,Ma=0,ps=0,kc=null,sa=-1,oa=0;function et(){return Z&6?we():sa!==-1?sa:sa=we()}function Hn(t){return t.mode&1?Z&2&&be!==0?be&-be:hE.transition!==null?(oa===0&&(oa=mg()),oa):(t=te,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function Lt(t,e,n,r){if(50<ps)throw ps=0,kc=null,Error(L(185));qs(t,n,r),(!(Z&2)||t!==xe)&&(t===xe&&(!(Z&2)&&(pl|=n),ke===4&&Nn(t,be)),lt(t,r),n===1&&Z===0&&!(e.mode&1)&&(pi=we()+500,cl&&nr()))}function lt(t,e){var n=t.callbackNode;hw(t,e);var r=_a(t,t===xe?be:0);if(r===0)n!==null&&Rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rf(n),e===1)t.tag===0?cE(Ep.bind(null,t)):Bg(Ep.bind(null,t)),oE(function(){!(Z&6)&&nr()}),n=null;else{switch(gg(r)){case 1:n=sh;break;case 4:n=fg;break;case 16:n=va;break;case 536870912:n=pg;break;default:n=va}n=jy(n,Dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dy(t,e){if(sa=-1,oa=0,Z&6)throw Error(L(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=_a(t,t===xe?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ba(t,r);else{e=r;var i=Z;Z|=2;var s=Vy();(xe!==t||be!==e)&&(nn=null,pi=we()+500,gr(t,e));do try{NE();break}catch(l){Oy(t,l)}while(!0);vh(),Va.current=s,Z=i,Se!==null?e=0:(xe=null,be=0,e=ke)}if(e!==0){if(e===2&&(i=Zu(t),i!==0&&(r=i,e=Cc(t,i))),e===1)throw n=Ms,gr(t,0),Nn(t,r),lt(t,we()),n;if(e===6)Nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!RE(i)&&(e=ba(t,r),e===2&&(s=Zu(t),s!==0&&(r=s,e=Cc(t,s))),e===1))throw n=Ms,gr(t,0),Nn(t,r),lt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:cr(t,it,nn);break;case 3:if(Nn(t,r),(r&130023424)===r&&(e=Oh+500-we(),10<e)){if(_a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ac(cr.bind(null,t,it,nn),e);break}cr(t,it,nn);break;case 4:if(Nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Vt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PE(r/1960))-r,10<r){t.timeoutHandle=ac(cr.bind(null,t,it,nn),r);break}cr(t,it,nn);break;case 5:cr(t,it,nn);break;default:throw Error(L(329))}}}return lt(t,we()),t.callbackNode===n?Dy.bind(null,t):null}function Cc(t,e){var n=fs;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=ba(t,e),t!==2&&(e=it,it=n,e!==null&&Pc(e)),t}function Pc(t){it===null?it=t:it.push.apply(it,t)}function RE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~Dh,e&=~pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vt(e),r=1<<n;t[n]=-1,e&=~r}}function Ep(t){if(Z&6)throw Error(L(327));ri();var e=_a(t,0);if(!(e&1))return lt(t,we()),null;var n=ba(t,e);if(t.tag!==0&&n===2){var r=Zu(t);r!==0&&(e=r,n=Cc(t,r))}if(n===1)throw n=Ms,gr(t,0),Nn(t,e),lt(t,we()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,it,nn),lt(t,we()),null}function Vh(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(pi=we()+500,cl&&nr())}}function Sr(t){bn!==null&&bn.tag===0&&!(Z&6)&&ri();var e=Z;Z|=1;var n=Tt.transition,r=te;try{if(Tt.transition=null,te=1,t)return t()}finally{te=r,Tt.transition=n,Z=e,!(Z&6)&&nr()}}function Lh(){ht=Xr.current,ue(Xr)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sE(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:di(),ue(ot),ue(Qe),Sh();break;case 5:Th(r);break;case 4:di();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:_h(r.type._context);break;case 22:case 23:Lh()}n=n.return}if(xe=t,Se=t=Wn(t.current,null),be=ht=e,ke=0,Ms=null,Dh=pl=Tr=0,it=fs=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}fr=null}return t}function Oy(t,e){do{var n=Se;try{if(vh(),na.current=Oa,Da){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Da=!1}if(Ir=0,Pe=Ae=pe=null,hs=!1,Os=0,Nh.current=null,n===null||n.return===null){ke=1,Ms=e,Se=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var I=m.alternate;I?(m.updateQueue=I.updateQueue,m.memoizedState=I.memoizedState,m.lanes=I.lanes):(m.updateQueue=null,m.memoizedState=null)}var R=lp(a);if(R!==null){R.flags&=-257,up(R,a,l,s,e),R.mode&1&&ap(s,d,e),e=R,u=d;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){ap(s,d,e),Mh();break e}u=Error(L(426))}}else if(ce&&l.mode&1){var b=lp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),up(b,a,l,s,e),gh(fi(u,l));break e}}s=u=fi(u,l),ke!==4&&(ke=2),fs===null?fs=[s]:fs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=gy(s,u,e);tp(s,T);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&($n===null||!$n.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=yy(s,l,e);tp(s,O);break e}}s=s.return}while(s!==null)}My(n)}catch(j){e=j,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function Vy(){var t=Va.current;return Va.current=Oa,t===null?Oa:t}function Mh(){(ke===0||ke===3||ke===2)&&(ke=4),xe===null||!(Tr&268435455)&&!(pl&268435455)||Nn(xe,be)}function ba(t,e){var n=Z;Z|=2;var r=Vy();(xe!==t||be!==e)&&(nn=null,gr(t,e));do try{xE();break}catch(i){Oy(t,i)}while(!0);if(vh(),Z=n,Va.current=r,Se!==null)throw Error(L(261));return xe=null,be=0,ke}function xE(){for(;Se!==null;)Ly(Se)}function NE(){for(;Se!==null&&!nw();)Ly(Se)}function Ly(t){var e=Fy(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?My(t):Se=e,Nh.current=null}function My(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SE(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Se=null;return}}else if(n=TE(n,e,ht),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);ke===0&&(ke=5)}function cr(t,e,n){var r=te,i=Tt.transition;try{Tt.transition=null,te=1,DE(t,e,n,r)}finally{Tt.transition=i,te=r}return null}function DE(t,e,n,r){do ri();while(bn!==null);if(Z&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dw(t,s),t===xe&&(Se=xe=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,jy(va,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tt.transition,Tt.transition=null;var a=te;te=1;var l=Z;Z|=4,Nh.current=null,kE(t,n),xy(n,t),Jw(sc),wa=!!ic,sc=ic=null,t.current=n,CE(n),rw(),Z=l,te=a,Tt.transition=s}else t.current=n;if(Bo&&(Bo=!1,bn=t,Ma=i),s=t.pendingLanes,s===0&&($n=null),ow(n.stateNode),lt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,t=Ac,Ac=null,t;return Ma&1&&t.tag!==0&&ri(),s=t.pendingLanes,s&1?t===kc?ps++:(ps=0,kc=t):ps=0,nr(),null}function ri(){if(bn!==null){var t=gg(Ma),e=Tt.transition,n=te;try{if(Tt.transition=null,te=16>t?16:t,bn===null)var r=!1;else{if(t=bn,bn=null,Ma=0,Z&6)throw Error(L(331));var i=Z;for(Z|=4,z=t.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:ds(8,m,s)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var I=m.sibling,R=m.return;if(Cy(m),m===d){z=null;break}if(I!==null){I.return=R,z=I;break}z=R}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ds(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,z=T;break e}z=s.return}}var _=t.current;for(z=_;z!==null;){a=z;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,z=A;else e:for(a=_;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fl(9,l)}}catch(j){ye(l,l.return,j)}if(l===a){z=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,z=O;break e}z=l.return}}if(Z=i,nr(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(sl,t)}catch{}r=!0}return r}finally{te=n,Tt.transition=e}}return!1}function Ip(t,e,n){e=fi(n,e),e=gy(t,e,1),t=zn(t,e,1),e=et(),t!==null&&(qs(t,1,e),lt(t,e))}function ye(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=fi(n,t),t=yy(e,t,1),e=zn(e,t,1),t=et(),e!==null&&(qs(e,1,t),lt(e,t));break}}e=e.return}}function OE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(be&n)===n&&(ke===4||ke===3&&(be&130023424)===be&&500>we()-Oh?gr(t,0):Dh|=n),lt(t,e)}function by(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=et();t=mn(t,e),t!==null&&(qs(t,e,n),lt(t,n))}function VE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),by(t,n)}function LE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),by(t,n)}var Fy;Fy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,IE(t,e,n);st=!!(t.flags&131072)}else st=!1,ce&&e.flags&1048576&&zg(e,Ca,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=ui(e,Qe.current);ni(e,n),i=kh(null,e,r,t,i,n);var s=Ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Aa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(e),i.updater=dl,e.stateNode=i,i._reactInternals=e,pc(e,r,t,n),e=yc(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&ph(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bE(r),t=Pt(r,t),i){case 0:e=gc(null,e,r,t,n);break e;case 1:e=dp(null,e,r,t,n);break e;case 11:e=cp(null,e,r,t,n);break e;case 14:e=hp(null,e,r,Pt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),gc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),dp(t,e,r,i,n);case 3:e:{if(Ey(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qg(t,e),xa(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fi(Error(L(423)),e),e=fp(t,e,r,n,i);break e}else if(r!==i){i=fi(Error(L(424)),e),e=fp(t,e,r,n,i);break e}else for(dt=Bn(e.stateNode.containerInfo.firstChild),ft=e,ce=!0,xt=null,n=Kg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===i){e=gn(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return Qg(e),t===null&&hc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,oc(r,i)?a=null:s!==null&&oc(r,s)&&(e.flags|=32),wy(t,e),Ze(t,e,a,n),e.child;case 6:return t===null&&hc(e),null;case 13:return Iy(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hi(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),cp(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,se(Pa,r._currentValue),r._currentValue=a,s!==null)if(bt(s.value,a)){if(s.children===i.children&&!ot.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=cn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),dc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=St(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),hp(t,e,r,i,n);case 15:return vy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ia(t,e),e.tag=1,at(r)?(t=!0,Aa(e)):t=!1,ni(e,n),my(e,r,i),pc(e,r,i,n),yc(null,e,r,!0,t,n);case 19:return Ty(t,e,n);case 22:return _y(t,e,n)}throw Error(L(156,e.tag))};function jy(t,e){return dg(t,e)}function ME(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new ME(t,e,n,r)}function bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bE(t){if(typeof t=="function")return bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===rh)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")bh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ur:return yr(n.children,i,s,e);case th:a=8,i|=8;break;case Fu:return t=Et(12,n,e,i|2),t.elementType=Fu,t.lanes=s,t;case ju:return t=Et(13,n,e,i),t.elementType=ju,t.lanes=s,t;case Uu:return t=Et(19,n,e,i),t.elementType=Uu,t.lanes=s,t;case Qm:return ml(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:a=10;break e;case qm:a=9;break e;case nh:a=11;break e;case rh:a=14;break e;case Pn:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Et(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function ml(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Qm,t.lanes=n,t.stateNode={isHidden:!1},t}function Au(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,r,i,s,a,l,u){return t=new FE(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function jE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uy(t){if(!t)return Xn;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(at(n))return Ug(t,n,e)}return e}function By(t,e,n,r,i,s,a,l,u){return t=Fh(n,r,!0,t,i,s,a,l,u),t.context=Uy(null),n=t.current,r=et(),i=Hn(n),s=cn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,qs(t,i,r),lt(t,r),t}function gl(t,e,n,r){var i=e.current,s=et(),a=Hn(i);return n=Uy(n),e.context===null?e.context=n:e.pendingContext=n,e=cn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,a),t!==null&&(Lt(t,i,a,s),ta(t,i,a)),a}function Fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jh(t,e){Tp(t,e),(t=t.alternate)&&Tp(t,e)}function UE(){return null}var zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uh(t){this._internalRoot=t}yl.prototype.render=Uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));gl(t,e,null,null)};yl.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){gl(null,t,null,null)}),e[pn]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&Eg(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function BE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Fa(a);s.call(d)}}var a=By(e,r,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=a,t[pn]=a.current,Ps(t.nodeType===8?t.parentNode:t),Sr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Fa(u);l.call(d)}}var u=Fh(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=u,t[pn]=u.current,Ps(t.nodeType===8?t.parentNode:t),Sr(function(){gl(e,u,n,r)}),u}function _l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Fa(a);l.call(u)}}gl(e,a,t,i)}else a=BE(n,e,t,i,r);return Fa(a)}yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ts(e.pendingLanes);n!==0&&(oh(e,n|1),lt(e,we()),!(Z&6)&&(pi=we()+500,nr()))}break;case 13:Sr(function(){var r=mn(t,1);if(r!==null){var i=et();Lt(r,t,1,i)}}),jh(t,1)}};ah=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=et();Lt(e,t,134217728,n)}jh(t,134217728)}};vg=function(t){if(t.tag===13){var e=Hn(t),n=mn(t,e);if(n!==null){var r=et();Lt(n,t,e,r)}jh(t,e)}};_g=function(){return te};wg=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Xu=function(t,e,n){switch(e){case"input":if($u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ul(r);if(!i)throw Error(L(90));Ym(r),$u(r,i)}}}break;case"textarea":Zm(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};og=Vh;ag=Sr;var zE={usingClientEntryPoint:!1,Events:[Xs,Hr,ul,ig,sg,Vh]},Xi={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$E={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||UE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{sl=zo.inject($E),zt=zo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(L(200));return jE(t,e,null,n)};gt.createRoot=function(t,e){if(!Bh(t))throw Error(L(299));var n=!1,r="",i=zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Ps(t.nodeType===8?t.parentNode:t),new Uh(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Sr(t)};gt.hydrate=function(t,e,n){if(!vl(e))throw Error(L(200));return _l(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=By(e,null,t,1,n??null,i,!1,s,a),t[pn]=e.current,Ps(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yl(e)};gt.render=function(t,e,n){if(!vl(e))throw Error(L(200));return _l(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!vl(t))throw Error(L(40));return t._reactRootContainer?(Sr(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};gt.unstable_batchedUpdates=Vh;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return _l(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function $y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y)}catch(t){console.error(t)}}$y(),$m.exports=gt;var HE=$m.exports,Hy,Ap=HE;Hy=Ap.createRoot,Ap.hydrateRoot;/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wy=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=_e.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},u)=>_e.createElement("svg",{ref:u,...KE,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wy("lucide",i),...l},[...a.map(([d,m])=>_e.createElement(d,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=_e.forwardRef(({className:r,...i},s)=>_e.createElement(GE,{ref:s,iconNode:e,className:Wy(`lucide-${WE(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=rt("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=rt("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=rt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=rt("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=rt("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=rt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=rt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=rt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=rt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=rt("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=rt("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=rt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var kp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,m=s>>2,g=(s&3)<<4|l>>4;let I=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(I=64)),r.push(n[m],n[g],n[I],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new uI;const I=s<<2|l>>4;if(r.push(I),d!==64){const R=l<<4&240|d>>2;if(r.push(R),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(t){const e=Gy(t);return qy.encodeByteArray(e,!0)},ja=function(t){return cI(t).replace(/\./g,"")},Qy=function(t){try{return qy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=()=>hI().__FIREBASE_DEFAULTS__,fI=()=>{if(typeof process>"u"||typeof kp>"u")return;const t=kp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qy(t[1]);return e&&JSON.parse(e)},wl=()=>{try{return dI()||fI()||pI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xy=t=>{var e,n;return(n=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mI=t=>{const e=Xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yy=()=>{var t;return(t=wl())===null||t===void 0?void 0:t.config},Jy=t=>{var e;return(e=wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ja(JSON.stringify(n)),ja(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function _I(){var t;const e=(t=wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function II(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SI(){return!_I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AI(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CI,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?PI(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new wn(i,l,r)}}function PI(t,e){return t.replace(RI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RI=/\{\$([^}]+)}/g;function xI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Cp(s)&&Cp(a)){if(!Ua(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NI(t,e){const n=new DI(t,e);return n.subscribe.bind(n)}class DI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cu),i.error===void 0&&(i.error=Cu),i.complete===void 0&&(i.complete=Cu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MI(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LI(t){return t===hr?void 0:t}function MI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=[];var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const FI={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},jI=X.INFO,UI={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=BI,this._userLogHandler=null,Zy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}function zI(t){Zy.forEach(e=>{e.setLogLevel(t)})}const $I=(t,e)=>e.some(n=>t instanceof n);let Pp,Rp;function HI(){return Pp||(Pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WI(){return Rp||(Rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ev=new WeakMap,Rc=new WeakMap,tv=new WeakMap,Pu=new WeakMap,$h=new WeakMap;function KI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Kn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ev.set(n,t)}).catch(()=>{}),$h.set(e,t),e}function GI(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Rc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){xc=t(xc)}function QI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ru(this),e,...n);return tv.set(r,e.sort?e.sort():[e]),Kn(r)}:WI().includes(t)?function(...e){return t.apply(Ru(this),e),Kn(ev.get(this))}:function(...e){return Kn(t.apply(Ru(this),e))}}function XI(t){return typeof t=="function"?QI(t):(t instanceof IDBTransaction&&GI(t),$I(t,HI())?new Proxy(t,xc):t)}function Kn(t){if(t instanceof IDBRequest)return KI(t);if(Pu.has(t))return Pu.get(t);const e=XI(t);return e!==t&&(Pu.set(t,e),$h.set(e,t)),e}const Ru=t=>$h.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Kn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kn(a.result),u.oldVersion,u.newVersion,Kn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const JI=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],xu=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JI.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return xu.set(e,s),s}qI(t=>({...t,get:(e,n,r)=>xp(e,n)||t.get(e,n,r),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Np="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new zh("@firebase/app"),nT="@firebase/app-compat",rT="@firebase/analytics-compat",iT="@firebase/analytics",sT="@firebase/app-check-compat",oT="@firebase/app-check",aT="@firebase/auth",lT="@firebase/auth-compat",uT="@firebase/database",cT="@firebase/data-connect",hT="@firebase/database-compat",dT="@firebase/functions",fT="@firebase/functions-compat",pT="@firebase/installations",mT="@firebase/installations-compat",gT="@firebase/messaging",yT="@firebase/messaging-compat",vT="@firebase/performance",_T="@firebase/performance-compat",wT="@firebase/remote-config",ET="@firebase/remote-config-compat",IT="@firebase/storage",TT="@firebase/storage-compat",ST="@firebase/firestore",AT="@firebase/vertexai-preview",kT="@firebase/firestore-compat",CT="firebase",PT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",RT={[Nc]:"fire-core",[nT]:"fire-core-compat",[iT]:"fire-analytics",[rT]:"fire-analytics-compat",[oT]:"fire-app-check",[sT]:"fire-app-check-compat",[aT]:"fire-auth",[lT]:"fire-auth-compat",[uT]:"fire-rtdb",[cT]:"fire-data-connect",[hT]:"fire-rtdb-compat",[dT]:"fire-fn",[fT]:"fire-fn-compat",[pT]:"fire-iid",[mT]:"fire-iid-compat",[gT]:"fire-fcm",[yT]:"fire-fcm-compat",[vT]:"fire-perf",[_T]:"fire-perf-compat",[wT]:"fire-rc",[ET]:"fire-rc-compat",[IT]:"fire-gcs",[TT]:"fire-gcs-compat",[ST]:"fire-fst",[kT]:"fire-fst-compat",[AT]:"fire-vertex","fire-js":"fire-js",[CT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map,xT=new Map,Oc=new Map;function Dp(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Oc.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of Ba.values())Dp(n,t);for(const n of xT.values())Dp(n,t);return!0}function Hh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Js("app","Firebase",NT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=PT;function nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=Yy()),!n)throw Gn.create("no-options");const s=Ba.get(i);if(s){if(Ua(n,s.options)&&Ua(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const a=new bI(i);for(const u of Oc.values())a.addComponent(u);const l=new DT(n,r,a);return Ba.set(i,l),l}function rv(t=Dc){const e=Ba.get(t);if(!e&&t===Dc&&Yy())return nv();if(!e)throw Gn.create("no-app",{appName:t});return e}function qn(t,e,n){var r;let i=(r=RT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(l.join(" "));return}mi(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function OT(t){zI(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebase-heartbeat-database",LT=1,bs="firebase-heartbeat-store";let Nu=null;function iv(){return Nu||(Nu=YI(VT,LT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Nu}async function MT(t){try{const n=(await iv()).transaction(bs),r=await n.objectStore(bs).get(sv(t));return await n.done,r}catch(e){if(e instanceof wn)yn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Op(t,e){try{const r=(await iv()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,sv(t)),await r.done}catch(n){if(n instanceof wn)yn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=1024,FT=30*24*60*60*1e3;class jT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=FT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vp(),{heartbeatsToSend:r,unsentEntries:i}=UT(this._heartbeatsCache.heartbeats),s=ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yn.warn(n),""}}}function Vp(){return new Date().toISOString().substring(0,10)}function UT(t,e=bT){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Lp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lp(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){mi(new Ar("platform-logger",e=>new eT(e),"PRIVATE")),mi(new Ar("heartbeat",e=>new jT(e),"PRIVATE")),qn(Nc,Np,t),qn(Nc,Np,"esm2017"),qn("fire-js","")}zT("");var $T="firebase",HT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn($T,HT,"app");function Wh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=ov,av=new Js("auth","Firebase",ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new zh("@firebase/auth");function KT(t,...e){za.logLevel<=X.WARN&&za.warn(`Auth (${Si}): ${t}`,...e)}function la(t,...e){za.logLevel<=X.ERROR&&za.error(`Auth (${Si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw Kh(t,...e)}function Ht(t,...e){return Kh(t,...e)}function lv(t,e,n){const r=Object.assign(Object.assign({},WT()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function Mt(t){return lv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return av.create(t,...e)}function H(t,e,...n){if(!t)throw Kh(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function vn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GT(){return Mp()==="http:"||Mp()==="https:"}function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GT()||EI()||"connection"in navigator)?navigator.onLine:!0}function QT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=vI()||II()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new eo(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,i={}){return cv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Zs(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return wI()||(d.referrerPolicy="no-referrer"),uv.fetch()(hv(t,t.config.apiHost,n,l),d)})}async function cv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XT),e);try{const i=new ZT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $o(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw $o(t,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lv(t,m,d);Ft(t,m)}}catch(i){if(i instanceof wn)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function Ai(t,e,n,r,i={}){const s=await rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gh(t.config,i):`${t.config.apiScheme}://${i}`}function JT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),YT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function bp(t){return t!==void 0&&t.enterprise!==void 0}class e1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function t1(t,e){return rr(t,"GET","/v2/recaptchaConfig",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function dv(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=qh(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ms(Du(i.auth_time)),issuedAtTime:ms(Du(i.iat)),expirationTime:ms(Du(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function qh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qy(n);return i?JSON.parse(i):(la("Failed to decode base64 JWT payload"),null)}catch(i){return la("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fp(t){const e=qh(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&i1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fs(t,dv(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fv(s.providerUserInfo):[],l=a1(t.providerData,a),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lc(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,g)}async function o1(t){const e=mt(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fv(t){return t.map(e=>{var{providerId:n}=e,r=Wh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){const n=await cv(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=hv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function u1(t,e){return rr(t,"POST","/v2/accounts:revokeToken",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ii;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Fs(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,d,m;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,I=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:A,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:v}=n;H(A&&v,e,"internal-error");const p=ii.fromJSON(this.name,v);H(typeof A=="string",e,"internal-error"),Cn(g,e.name),Cn(I,e.name),H(typeof O=="boolean",e,"internal-error"),H(typeof j=="boolean",e,"internal-error"),Cn(R,e.name),Cn(x,e.name),Cn(D,e.name),Cn(b,e.name),Cn(T,e.name),Cn(_,e.name);const y=new ln({uid:A,auth:e,email:I,emailVerified:O,displayName:g,isAnonymous:j,photoURL:x,phoneNumber:R,tenantId:D,stsTokenManager:p,createdAt:T,lastLoginAt:_});return U&&Array.isArray(U)&&(y.providerData=U.map(w=>Object.assign({},w))),b&&(y._redirectEventId=b),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ii;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ii;l.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;function un(t){vn(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pv.type="NONE";const Up=pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(un(Up),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||un(Up);const a=ua(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(a);if(m){const g=ln._fromJSON(e,m);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new si(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wv(e))return"Blackberry";if(Ev(e))return"Webos";if(gv(e))return"Safari";if((e.includes("chrome/")||yv(e))&&!e.includes("edge/"))return"Chrome";if(_v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mv(t=Xe()){return/firefox\//i.test(t)}function gv(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yv(t=Xe()){return/crios\//i.test(t)}function vv(t=Xe()){return/iemobile/i.test(t)}function _v(t=Xe()){return/android/i.test(t)}function wv(t=Xe()){return/blackberry/i.test(t)}function Ev(t=Xe()){return/webos/i.test(t)}function Qh(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c1(t=Xe()){var e;return Qh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h1(){return TI()&&document.documentMode===10}function Iv(t=Xe()){return Qh(t)||_v(t)||Ev(t)||wv(t)||/windows phone/i.test(t)||vv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t,e=[]){let n;switch(t){case"Browser":n=Bp(Xe());break;case"Worker":n=`${Bp(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e={}){return rr(t,"GET","/v2/passwordPolicy",En(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=6;class m1{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:p1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dv(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(Mt(this));const n=e?mt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f1(this),n=new m1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await u1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function In(t){return mt(t)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(t){El=t}function Sv(t){return El.loadJS(t)}function v1(){return El.recaptchaEnterpriseScript}function _1(){return El.gapiScript}function w1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const E1="recaptcha-enterprise",I1="NO_RECAPTCHA";class T1{constructor(e){this.type=E1,this.auth=In(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{t1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new e1(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;bp(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(I1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&bp(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=v1();u.length!==0&&(u+=l),Sv(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function $p(t,e,n,r=!1){const i=new T1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $p(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $p(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t,e){const n=Hh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ua(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function A1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k1(t,e,n){const r=In(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Av(e),{host:a,port:l}=C1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),P1()}function Av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C1(t){const e=Av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hp(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Hp(a)}}}function Hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function R1(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e){return Ai(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function D1(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Xh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mc(e,n,"signInWithPassword",x1);case"emailLink":return N1(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mc(e,r,"signUpPassword",R1);case"emailLink":return D1(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return Ai(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="http://localhost";class kr extends Xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wh(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new kr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:O1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L1(t){const e=rs(is(t)).link,n=e?rs(is(e)).deep_link_id:null,r=rs(is(t)).deep_link_id;return(r?rs(is(r)).link:null)||r||n||e||t}class Yh{constructor(e){var n,r,i,s,a,l;const u=rs(is(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,g=V1((i=u.mode)!==null&&i!==void 0?i:null);H(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=L1(e);try{return new Yh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yh.parseLink(n);return H(r,"argument-error"),js._fromEmailAndCode(e,r.code,r.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends to{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends to{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends to{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t,e){return Ai(t,"POST","/v1/accounts:signUp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),a=Wp(r);return new Kt({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t){var e;if(It(t.app))return Promise.reject(Mt(t));const n=In(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Cv(n,{returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ha(e,n,r,i)}}function Pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,s,e,r):s})}async function b1(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){const{auth:r}=t;if(It(r.app))return Promise.reject(Mt(r));const i="reauthenticate";try{const s=await Fs(t,Pv(r,i,e,t),n);H(s.idToken,r,"internal-error");const a=qh(s.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(t.uid===l,r,"user-mismatch"),Kt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(t,e,n=!1){if(It(t.app))return Promise.reject(Mt(t));const r="signIn",i=await Pv(t,r,e),s=await Kt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function j1(t,e){return Rv(In(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e){return Ai(t,"POST","/v1/accounts:signInWithCustomToken",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e){if(It(t.app))return Promise.reject(Mt(t));const n=In(t),r=await U1(n,{token:e,returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function z1(t,e,n){if(It(t.app))return Promise.reject(Mt(t));const r=In(t),a=await Mc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xv(t),u}),l=await Kt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function $1(t,e,n){return It(t.app)?Promise.reject(Mt(t)):j1(mt(t),ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xv(t),r})}function H1(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function W1(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function K1(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function G1(t){return mt(t).signOut()}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=1e3,Q1=10;class Dv extends Nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);h1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dv.type="LOCAL";const X1=Dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends Nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Vv=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),u=await Y1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Jh("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const I=g;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(I.data.response);break;default:clearTimeout(m),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Z1(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function eS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nS(){return Lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firebaseLocalStorageDb",rS=1,Ka="firebaseLocalStorage",bv="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function iS(){const t=indexedDB.deleteDatabase(Mv);return new no(t).toPromise()}function bc(){const t=indexedDB.open(Mv,rS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:bv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await iS(),e(await bc()))})})}async function Kp(t,e,n){const r=Tl(t,!0).put({[bv]:e,value:n});return new no(r).toPromise()}async function sS(t,e){const n=Tl(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Gp(t,e){const n=Tl(t,!0).delete(e);return new no(n).toPromise()}const oS=800,aS=3;class Fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(nS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eS(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Kp(e,Wa,"1"),await Gp(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new no(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fv.type="LOCAL";const lS=Fv;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){return e?un(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh extends Xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cS(t){return Rv(t.auth,new Zh(t),t.bypassAuthState)}function hS(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),F1(n,new Zh(t),t.bypassAuthState)}async function dS(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),b1(n,new Zh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cS;case"linkViaPopup":case"linkViaRedirect":return dS;case"reauthViaPopup":case"reauthViaRedirect":return hS;default:Ft(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=new eo(2e3,1e4);class Yr extends jv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fS.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="pendingRedirect",ca=new Map;class mS extends jv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await gS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gS(t,e){const n=_S(e),r=vS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yS(t,e){ca.set(t._key(),e)}function vS(t){return un(t._redirectPersistence)}function _S(t){return ua(pS,t.config.apiKey,t.name)}async function wS(t,e,n=!1){if(It(t.app))return Promise.reject(Mt(t));const r=In(t),i=uS(r,e),a=await new mS(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=10*60*1e3;class IS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ES&&this.cachedEventUids.clear(),this.cachedEventUids.has(qp(e))}saveEventToCache(e){this.cachedEventUids.add(qp(e)),this.lastProcessedEventTime=Date.now()}}function qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function CS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SS(t);for(const n of e)try{if(PS(n))return}catch{}Ft(t,"unauthorized-domain")}function PS(t){const e=Vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!kS.test(n))return!1;if(AS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new eo(3e4,6e4);function Qp(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xS(t){return new Promise((e,n)=>{var r,i,s;function a(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(Ht(t,"network-request-failed"))},timeout:RS.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)a();else{const l=w1("iframefcb");return Wt()[l]=()=>{gapi.load?a():n(Ht(t,"network-request-failed"))},Sv(`${_1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ha=null,e})}let ha=null;function NS(t){return ha=ha||xS(t),ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new eo(5e3,15e3),OS="__/auth/iframe",VS="emulator/auth/iframe",LS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bS(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gh(e,VS):`https://${t.config.authDomain}/${OS}`,r={apiKey:e.apiKey,appName:t.name,v:Si},i=MS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function FS(t){const e=await NS(t),n=Wt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:bS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ht(t,"network-request-failed"),l=Wt().setTimeout(()=>{s(a)},DS.get());function u(){Wt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},US=500,BS=600,zS="_blank",$S="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HS(t,e,n,r=US,i=BS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},jS),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Xe().toLowerCase();n&&(l=yv(d)?zS:n),mv(d)&&(e=e||$S,u.scrollbars="yes");const m=Object.entries(u).reduce((I,[R,x])=>`${I}${R}=${x},`,"");if(c1(d)&&l!=="_self")return WS(e||"",l),new Xp(null);const g=window.open(e||"",l,m);H(g,t,"popup-blocked");try{g.focus()}catch{}return new Xp(g)}function WS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="__/auth/handler",GS="emulator/auth/handler",qS=encodeURIComponent("fac");async function Yp(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Si,eventId:i};if(e instanceof kv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",xI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof to){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${qS}=${encodeURIComponent(u)}`:"";return`${QS(t)}?${Zs(l).slice(1)}${d}`}function QS({config:t}){return t.emulator?Gh(t,GS):`https://${t.authDomain}/${KS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="webStorageSupport";class XS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vv,this._completeRedirectFn=wS,this._overrideRedirectResult=yS}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yp(e,n,r,Vc(),i);return HS(e,a,Jh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yp(e,n,r,Vc(),i);return Z1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FS(e),r=new IS(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ou,{type:Ou},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ou];a!==void 0&&n(!!a),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iv()||gv()||Qh()}}const YS=XS;var Jp="@firebase/auth",Zp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eA(t){mi(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tv(t)},d=new g1(r,i,s,u);return A1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mi(new Ar("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new JS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(Jp,Zp,ZS(t)),qn(Jp,Zp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=5*60,nA=Jy("authIdTokenMaxAge")||tA;let em=null;const rA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nA)return;const i=n==null?void 0:n.token;em!==i&&(em=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iA(t=rv()){const e=Hh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=S1(t,{popupRedirectResolver:YS,persistence:[lS,X1,Vv]}),r=Jy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=rA(s.toString());W1(n,a,()=>a(n.currentUser)),H1(n,l=>a(l))}}const i=Xy("auth");return i&&k1(n,`http://${i}`),n}function sA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}y1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eA("Browser");var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,p){function y(){}y.prototype=p.prototype,v.D=p.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(w,k,P){for(var E=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)E[vt-2]=arguments[vt];return p.prototype[k].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,y){y||(y=0);var w=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)w[k]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(k=0;16>k;++k)w[k]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=v.g[0],y=v.g[1],k=v.g[2];var P=v.g[3],E=p+(P^y&(k^P))+w[0]+3614090360&4294967295;p=y+(E<<7&4294967295|E>>>25),E=P+(k^p&(y^k))+w[1]+3905402710&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(y^P&(p^y))+w[2]+606105819&4294967295,k=P+(E<<17&4294967295|E>>>15),E=y+(p^k&(P^p))+w[3]+3250441966&4294967295,y=k+(E<<22&4294967295|E>>>10),E=p+(P^y&(k^P))+w[4]+4118548399&4294967295,p=y+(E<<7&4294967295|E>>>25),E=P+(k^p&(y^k))+w[5]+1200080426&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(y^P&(p^y))+w[6]+2821735955&4294967295,k=P+(E<<17&4294967295|E>>>15),E=y+(p^k&(P^p))+w[7]+4249261313&4294967295,y=k+(E<<22&4294967295|E>>>10),E=p+(P^y&(k^P))+w[8]+1770035416&4294967295,p=y+(E<<7&4294967295|E>>>25),E=P+(k^p&(y^k))+w[9]+2336552879&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(y^P&(p^y))+w[10]+4294925233&4294967295,k=P+(E<<17&4294967295|E>>>15),E=y+(p^k&(P^p))+w[11]+2304563134&4294967295,y=k+(E<<22&4294967295|E>>>10),E=p+(P^y&(k^P))+w[12]+1804603682&4294967295,p=y+(E<<7&4294967295|E>>>25),E=P+(k^p&(y^k))+w[13]+4254626195&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(y^P&(p^y))+w[14]+2792965006&4294967295,k=P+(E<<17&4294967295|E>>>15),E=y+(p^k&(P^p))+w[15]+1236535329&4294967295,y=k+(E<<22&4294967295|E>>>10),E=p+(k^P&(y^k))+w[1]+4129170786&4294967295,p=y+(E<<5&4294967295|E>>>27),E=P+(y^k&(p^y))+w[6]+3225465664&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^y&(P^p))+w[11]+643717713&4294967295,k=P+(E<<14&4294967295|E>>>18),E=y+(P^p&(k^P))+w[0]+3921069994&4294967295,y=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(y^k))+w[5]+3593408605&4294967295,p=y+(E<<5&4294967295|E>>>27),E=P+(y^k&(p^y))+w[10]+38016083&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^y&(P^p))+w[15]+3634488961&4294967295,k=P+(E<<14&4294967295|E>>>18),E=y+(P^p&(k^P))+w[4]+3889429448&4294967295,y=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(y^k))+w[9]+568446438&4294967295,p=y+(E<<5&4294967295|E>>>27),E=P+(y^k&(p^y))+w[14]+3275163606&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^y&(P^p))+w[3]+4107603335&4294967295,k=P+(E<<14&4294967295|E>>>18),E=y+(P^p&(k^P))+w[8]+1163531501&4294967295,y=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(y^k))+w[13]+2850285829&4294967295,p=y+(E<<5&4294967295|E>>>27),E=P+(y^k&(p^y))+w[2]+4243563512&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^y&(P^p))+w[7]+1735328473&4294967295,k=P+(E<<14&4294967295|E>>>18),E=y+(P^p&(k^P))+w[12]+2368359562&4294967295,y=k+(E<<20&4294967295|E>>>12),E=p+(y^k^P)+w[5]+4294588738&4294967295,p=y+(E<<4&4294967295|E>>>28),E=P+(p^y^k)+w[8]+2272392833&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^y)+w[11]+1839030562&4294967295,k=P+(E<<16&4294967295|E>>>16),E=y+(k^P^p)+w[14]+4259657740&4294967295,y=k+(E<<23&4294967295|E>>>9),E=p+(y^k^P)+w[1]+2763975236&4294967295,p=y+(E<<4&4294967295|E>>>28),E=P+(p^y^k)+w[4]+1272893353&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^y)+w[7]+4139469664&4294967295,k=P+(E<<16&4294967295|E>>>16),E=y+(k^P^p)+w[10]+3200236656&4294967295,y=k+(E<<23&4294967295|E>>>9),E=p+(y^k^P)+w[13]+681279174&4294967295,p=y+(E<<4&4294967295|E>>>28),E=P+(p^y^k)+w[0]+3936430074&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^y)+w[3]+3572445317&4294967295,k=P+(E<<16&4294967295|E>>>16),E=y+(k^P^p)+w[6]+76029189&4294967295,y=k+(E<<23&4294967295|E>>>9),E=p+(y^k^P)+w[9]+3654602809&4294967295,p=y+(E<<4&4294967295|E>>>28),E=P+(p^y^k)+w[12]+3873151461&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^y)+w[15]+530742520&4294967295,k=P+(E<<16&4294967295|E>>>16),E=y+(k^P^p)+w[2]+3299628645&4294967295,y=k+(E<<23&4294967295|E>>>9),E=p+(k^(y|~P))+w[0]+4096336452&4294967295,p=y+(E<<6&4294967295|E>>>26),E=P+(y^(p|~k))+w[7]+1126891415&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~y))+w[14]+2878612391&4294967295,k=P+(E<<15&4294967295|E>>>17),E=y+(P^(k|~p))+w[5]+4237533241&4294967295,y=k+(E<<21&4294967295|E>>>11),E=p+(k^(y|~P))+w[12]+1700485571&4294967295,p=y+(E<<6&4294967295|E>>>26),E=P+(y^(p|~k))+w[3]+2399980690&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~y))+w[10]+4293915773&4294967295,k=P+(E<<15&4294967295|E>>>17),E=y+(P^(k|~p))+w[1]+2240044497&4294967295,y=k+(E<<21&4294967295|E>>>11),E=p+(k^(y|~P))+w[8]+1873313359&4294967295,p=y+(E<<6&4294967295|E>>>26),E=P+(y^(p|~k))+w[15]+4264355552&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~y))+w[6]+2734768916&4294967295,k=P+(E<<15&4294967295|E>>>17),E=y+(P^(k|~p))+w[13]+1309151649&4294967295,y=k+(E<<21&4294967295|E>>>11),E=p+(k^(y|~P))+w[4]+4149444226&4294967295,p=y+(E<<6&4294967295|E>>>26),E=P+(y^(p|~k))+w[11]+3174756917&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~y))+w[2]+718787259&4294967295,k=P+(E<<15&4294967295|E>>>17),E=y+(P^(k|~p))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(k+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var y=p-this.blockSize,w=this.B,k=this.h,P=0;P<p;){if(k==0)for(;P<=y;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<p;)if(w[k++]=v.charCodeAt(P++),k==this.blockSize){i(this,w),k=0;break}}else for(;P<p;)if(w[k++]=v[P++],k==this.blockSize){i(this,w),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var y=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=y&255,y/=256;for(this.u(v),v=Array(16),p=y=0;4>p;++p)for(var w=0;32>w;w+=8)v[y++]=this.g[p]>>>w&255;return v};function s(v,p){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=p(v)}function a(v,p){this.h=p;for(var y=[],w=!0,k=v.length-1;0<=k;k--){var P=v[k]|0;w&&P==p||(y[k]=P,w=!1)}this.g=y}var l={};function u(v){return-128<=v&&128>v?s(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return b(d(-v));for(var p=[],y=1,w=0;v>=y;w++)p[w]=v/y|0,y*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return b(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),w=g,k=0;k<v.length;k+=8){var P=Math.min(8,v.length-k),E=parseInt(v.substring(k,k+P),p);8>P?(P=d(Math.pow(p,P)),w=w.j(P).add(d(E))):(w=w.j(y),w=w.add(d(E)))}return w}var g=u(0),I=u(1),R=u(16777216);t=a.prototype,t.m=function(){if(D(this))return-b(this).m();for(var v=0,p=1,y=0;y<this.g.length;y++){var w=this.i(y);v+=(0<=w?w:4294967296+w)*p,p*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(D(this))return"-"+b(this).toString(v);for(var p=d(Math.pow(v,6)),y=this,w="";;){var k=O(y,p).g;y=T(y,k.j(p));var P=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=k,x(y))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=T(this,v),D(v)?-1:x(v)?0:1};function b(v){for(var p=v.g.length,y=[],w=0;w<p;w++)y[w]=~v.g[w];return new a(y,~v.h).add(I)}t.abs=function(){return D(this)?b(this):this},t.add=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],w=0,k=0;k<=p;k++){var P=w+(this.i(k)&65535)+(v.i(k)&65535),E=(P>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);w=E>>>16,P&=65535,E&=65535,y[k]=E<<16|P}return new a(y,y[y.length-1]&-2147483648?-1:0)};function T(v,p){return v.add(b(p))}t.j=function(v){if(x(this)||x(v))return g;if(D(this))return D(v)?b(this).j(b(v)):b(b(this).j(v));if(D(v))return b(this.j(b(v)));if(0>this.l(R)&&0>v.l(R))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,y=[],w=0;w<2*p;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var k=0;k<v.g.length;k++){var P=this.i(w)>>>16,E=this.i(w)&65535,vt=v.i(k)>>>16,ir=v.i(k)&65535;y[2*w+2*k]+=E*ir,_(y,2*w+2*k),y[2*w+2*k+1]+=P*ir,_(y,2*w+2*k+1),y[2*w+2*k+1]+=E*vt,_(y,2*w+2*k+1),y[2*w+2*k+2]+=P*vt,_(y,2*w+2*k+2)}for(w=0;w<p;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=p;w<2*p;w++)y[w]=0;return new a(y,0)};function _(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function A(v,p){this.g=v,this.h=p}function O(v,p){if(x(p))throw Error("division by zero");if(x(v))return new A(g,g);if(D(v))return p=O(b(v),p),new A(b(p.g),b(p.h));if(D(p))return p=O(v,b(p)),new A(b(p.g),p.h);if(30<v.g.length){if(D(v)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,w=p;0>=w.l(v);)y=j(y),w=j(w);var k=U(y,1),P=U(w,1);for(w=U(w,2),y=U(y,2);!x(w);){var E=P.add(w);0>=E.l(v)&&(k=k.add(y),P=E),w=U(w,1),y=U(y,1)}return p=T(v,k.j(p)),new A(k,p)}for(k=g;0<=v.l(p);){for(y=Math.max(1,Math.floor(v.m()/p.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=d(y),E=P.j(p);D(E)||0<E.l(v);)y-=w,P=d(y),E=P.j(p);x(P)&&(P=I),k=k.add(P),v=T(v,E)}return new A(k,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)&v.i(w);return new a(y,this.h&v.h)},t.or=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)|v.i(w);return new a(y,this.h|v.h)},t.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)^v.i(w);return new a(y,this.h^v.h)};function j(v){for(var p=v.g.length+1,y=[],w=0;w<p;w++)y[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(y,v.h)}function U(v,p){var y=p>>5;p%=32;for(var w=v.g.length-y,k=[],P=0;P<w;P++)k[P]=0<p?v.i(P+y)>>>p|v.i(P+y+1)<<32-p:v.i(P+y);return new a(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Bv=a}).apply(typeof tm<"u"?tm:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zv,ss,$v,da,Fc,Hv,Wv,Kv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var C=o[f];if(!(C in h))break e;h=h[C]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,C={next:function(){if(!f&&h<o.length){var N=h++;return{value:c(N,o[N]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),o.apply(c,C)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,I.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,C,N){for(var F=Array(arguments.length-2),re=2;re<arguments.length;re++)F[re-2]=arguments[re];return c.prototype[C].apply(f,F)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function b(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const C=o.length||0,N=f.length||0;o.length=C+N;for(let F=0;F<N;F++)o[C+F]=f[F]}else o.push(f)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(o){return/^[\s\xa0]*$/.test(o)}function A(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function v(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(h in f)o[h]=f[h];for(let N=0;N<y.length;N++)h=y[N],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function k(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function P(o){l.setTimeout(()=>{throw o},0)}function E(){var o=K;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class vt{constructor(){this.h=this.g=null}add(c,h){const f=ir.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var ir=new T(()=>new Ri,o=>o.reset());class Ri{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,B=!1,K=new vt,G=()=>{const o=l.Promise.resolve(void 0);Qt=()=>{o.then(he)}};var he=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){P(h)}var c=ir;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}B=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Yt(o,c){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(j){e:{try{O(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yt.aa.h.call(this)}}x(Yt,ve);var Jt={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),z_=0;function $_(o,c,h,f,C){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=C,this.key=++z_,this.da=this.fa=!1}function ao(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function lo(o){this.src=o,this.g={},this.h=0}lo.prototype.add=function(o,c,h,f,C){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var F=Ol(o,c,f,C);return-1<F?(c=o[F],h||(c.fa=!1)):(c=new $_(c,this.src,N,!!f,C),c.fa=h,o.push(c)),c};function Dl(o,c){var h=c.type;if(h in o.g){var f=o.g[h],C=Array.prototype.indexOf.call(f,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(f,C,1),N&&(ao(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ol(o,c,h,f){for(var C=0;C<o.length;++C){var N=o[C];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==f)return C}return-1}var Vl="closure_lm_"+(1e6*Math.random()|0),Ll={};function yd(o,c,h,f,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)yd(o,c[N],h,f,C);return null}return h=wd(h),o&&o[Zt]?o.K(c,h,d(f)?!!f.capture:!1,C):H_(o,c,h,!1,f,C)}function H_(o,c,h,f,C,N){if(!c)throw Error("Invalid event type");var F=d(C)?!!C.capture:!!C,re=bl(o);if(re||(o[Vl]=re=new lo(o)),h=re.add(c,h,f,F,N),h.proxy)return h;if(f=W_(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Xt||(C=F),C===void 0&&(C=!1),o.addEventListener(c.toString(),f,C);else if(o.attachEvent)o.attachEvent(_d(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function W_(){function o(h){return c.call(o.src,o.listener,h)}const c=K_;return o}function vd(o,c,h,f,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)vd(o,c[N],h,f,C);else f=d(f)?!!f.capture:!!f,h=wd(h),o&&o[Zt]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],h=Ol(N,h,f,C),-1<h&&(ao(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=bl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ol(c,h,f,C)),(h=-1<o?c[o]:null)&&Ml(h))}function Ml(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Zt])Dl(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(_d(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=bl(c))?(Dl(h,o),h.h==0&&(h.src=null,c[Vl]=null)):ao(o)}}}function _d(o){return o in Ll?Ll[o]:Ll[o]="on"+o}function K_(o,c){if(o.da)o=!0;else{c=new Yt(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ml(o),o=h.call(f,c)}return o}function bl(o){return o=o[Vl],o instanceof lo?o:null}var Fl="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(o){return typeof o=="function"?o:(o[Fl]||(o[Fl]=function(c){return o.handleEvent(c)}),o[Fl])}function je(){ne.call(this),this.i=new lo(this),this.M=this,this.F=null}x(je,ne),je.prototype[Zt]=!0,je.prototype.removeEventListener=function(o,c,h,f){vd(this,o,c,h,f)};function Ye(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ve(c,o);else if(c instanceof ve)c.target=c.target||o;else{var C=c;c=new ve(f,o),w(c,C)}if(C=!0,h)for(var N=h.length-1;0<=N;N--){var F=c.g=h[N];C=uo(F,f,!0,c)&&C}if(F=c.g=o,C=uo(F,f,!0,c)&&C,C=uo(F,f,!1,c)&&C,h)for(N=0;N<h.length;N++)F=c.g=h[N],C=uo(F,f,!1,c)&&C}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)ao(h[f]);delete o.g[c],o.h--}}this.F=null},je.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},je.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function uo(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var F=c[N];if(F&&!F.da&&F.capture==h){var re=F.listener,De=F.ha||F.src;F.fa&&Dl(o.i,F),C=re.call(De,f)!==!1&&C}}return C&&!f.defaultPrevented}function Ed(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Id(o){o.g=Ed(()=>{o.g=null,o.i&&(o.i=!1,Id(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class G_ extends ne{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Id(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(o){ne.call(this),this.h=o,this.g={}}x(xi,ne);var Td=[];function Sd(o){U(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ml(c)},o),o.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Sd(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jl=l.JSON.stringify,q_=l.JSON.parse,Q_=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ul(){}Ul.prototype.h=null;function Ad(o){return o.h||(o.h=o.i())}function kd(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bl(){ve.call(this,"d")}x(Bl,ve);function zl(){ve.call(this,"c")}x(zl,ve);var sr={},Cd=null;function co(){return Cd=Cd||new je}sr.La="serverreachability";function Pd(o){ve.call(this,sr.La,o)}x(Pd,ve);function Di(o){const c=co();Ye(c,new Pd(c))}sr.STAT_EVENT="statevent";function Rd(o,c){ve.call(this,sr.STAT_EVENT,o),this.stat=c}x(Rd,ve);function Je(o){const c=co();Ye(c,new Rd(c,o))}sr.Ma="timingevent";function xd(o,c){ve.call(this,sr.Ma,o),this.size=c}x(xd,ve);function Oi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function X_(o,c,h,f,C,N){o.info(function(){if(o.g)if(N)for(var F="",re=N.split("&"),De=0;De<re.length;De++){var ee=re[De].split("=");if(1<ee.length){var Ue=ee[0];ee=ee[1];var Be=Ue.split("_");F=2<=Be.length&&Be[1]=="type"?F+(Ue+"="+ee+"&"):F+(Ue+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+c+`
`+h+`
`+F})}function Y_(o,c,h,f,C,N,F){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+c+`
`+h+`
`+N+" "+F})}function Or(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Z_(o,h)+(f?" "+f:"")})}function J_(o,c){o.info(function(){return"TIMEOUT: "+c})}Vi.prototype.info=function(){};function Z_(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return jl(h)}catch{return c}}var ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$l;function fo(){}x(fo,Ul),fo.prototype.g=function(){return new XMLHttpRequest},fo.prototype.i=function(){return{}},$l=new fo;function Tn(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dd}function Dd(){this.i=null,this.g="",this.h=!1}var Od={},Hl={};function Wl(o,c,h){o.L=1,o.v=yo(en(c)),o.m=h,o.P=!0,Vd(o,null)}function Vd(o,c){o.F=Date.now(),po(o),o.A=en(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),qd(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Dd,o.g=ff(o.j,h?c:null,!o.m),0<o.O&&(o.M=new G_(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Td[0]=C.toString()),C=Td);for(var N=0;N<C.length;N++){var F=yd(h,C[N],f||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Di(),X_(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const c=this.M;c&&tn(o)==3?c.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const Be=tn(this.g);var c=this.g.Ba();const Mr=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||tf(this.g)))){this.J||Be!=4||c==7||(c==8||0>=Mr?Di(3):Di(2)),Kl(this);var h=this.g.Z();this.X=h;t:if(Ld(this)){var f=tf(this.g);o="";var C=f.length,N=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Li(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(N&&c==C-1)});f.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Y_(this.i,this.u,this.A,this.l,this.R,Be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,De=this.g;if((re=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(re)){var ee=re;break t}}ee=null}if(h=ee)Or(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gl(this,h);else{this.o=!1,this.s=3,Je(12),or(this),Li(this);break e}}if(this.P){h=!0;let kt;for(;!this.J&&this.C<F.length;)if(kt=e0(this,F),kt==Hl){Be==4&&(this.s=4,Je(14),h=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Od){this.s=4,Je(15),Or(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else Or(this.i,this.l,kt,null),Gl(this,kt);if(Ld(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||F.length!=0||this.h.h||(this.s=1,Je(16),h=!1),this.o=this.o&&h,!h)Or(this.i,this.l,F,"[Invalid Chunked Response]"),or(this),Li(this);else if(0<F.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Zl(Ue),Ue.M=!0,Je(11))}}else Or(this.i,this.l,F,null),Gl(this,F);Be==4&&or(this),this.o&&!this.J&&(Be==4?uf(this.j,this):(this.o=!1,po(this)))}else y0(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),or(this),Li(this)}}}catch{}finally{}};function Ld(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function e0(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Hl:(h=Number(c.substring(h,f)),isNaN(h)?Od:(f+=1,f+h>c.length?Hl:(c=c.slice(f,f+h),o.C=f+h,c)))}Tn.prototype.cancel=function(){this.J=!0,or(this)};function po(o){o.S=Date.now()+o.I,Md(o,o.I)}function Md(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Oi(I(o.ba,o),c)}function Kl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(J_(this.i,this.A),this.L!=2&&(Di(),Je(17)),or(this),this.s=2,Li(this)):Md(this,this.S-o)};function Li(o){o.j.G==0||o.J||uf(o.j,o)}function or(o){Kl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Sd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Gl(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ql(h.h,o))){if(!o.K&&ql(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)To(h),Eo(h);else break e;Jl(h),Je(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Oi(I(h.Za,h),6e3));if(1>=jd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else lr(h,11)}else if((o.K||h.g==o)&&To(h),!_(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let ee=C[c];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];const Ue=ee[3];Ue!=null&&(h.la=Ue,h.j.info("VER="+h.la));const Be=ee[4];Be!=null&&(h.Aa=Be,h.j.info("SVER="+h.Aa));const Mr=ee[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(f=1.5*Mr,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const kt=o.g;if(kt){const Ao=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ao){var N=f.h;N.g||Ao.indexOf("spdy")==-1&&Ao.indexOf("quic")==-1&&Ao.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ql(N,N.h),N.h=null))}if(f.D){const eu=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;eu&&(f.ya=eu,ae(f.I,f.D,eu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var F=o;if(f.qa=df(f,f.J?f.ia:null,f.W),F.K){Ud(f.h,F);var re=F,De=f.L;De&&(re.I=De),re.B&&(Kl(re),po(re)),f.g=F}else af(f);0<h.i.length&&Io(h)}else ee[0]!="stop"&&ee[0]!="close"||lr(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?lr(h,7):Yl(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}Di(4)}catch{}}var t0=class{constructor(o,c){this.g=o,this.map=c}};function bd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function jd(o){return o.h?1:o.g?o.g.size:0}function ql(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ql(o,c){o.g?o.g.add(c):o.h=c}function Ud(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}bd.prototype.cancel=function(){if(this.i=Bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function n0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function r0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function zd(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=r0(o),f=n0(o),C=f.length,N=0;N<C;N++)c.call(void 0,f[N],h&&h[N],o)}var $d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i0(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),C=null;if(0<=f){var N=o[h].substring(0,f);C=o[h].substring(f+1)}else N=o[h];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,mo(this,o.j),this.o=o.o,this.g=o.g,go(this,o.s),this.l=o.l;var c=o.i,h=new Fi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Hd(this,h),this.m=o.m}else o&&(c=String(o).match($d))?(this.h=!1,mo(this,c[1]||"",!0),this.o=Mi(c[2]||""),this.g=Mi(c[3]||"",!0),go(this,c[4]),this.l=Mi(c[5]||"",!0),Hd(this,c[6]||"",!0),this.m=Mi(c[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}ar.prototype.toString=function(){var o=[],c=this.j;c&&o.push(bi(c,Wd,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(bi(c,Wd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(bi(h,h.charAt(0)=="/"?a0:o0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",bi(h,u0)),o.join("")};function en(o){return new ar(o)}function mo(o,c,h){o.j=h?Mi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function go(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Hd(o,c,h){c instanceof Fi?(o.i=c,c0(o.i,o.h)):(h||(c=bi(c,l0)),o.i=new Fi(c,o.h))}function ae(o,c,h){o.i.set(c,h)}function yo(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Mi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bi(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,s0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function s0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wd=/[#\/\?@]/g,o0=/[#\?:]/g,a0=/[#\?]/g,l0=/[#\?@]/g,u0=/#/g;function Fi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Sn(o){o.g||(o.g=new Map,o.h=0,o.i&&i0(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Fi.prototype,t.add=function(o,c){Sn(this),this.i=null,o=Vr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Kd(o,c){Sn(o),c=Vr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Gd(o,c){return Sn(o),c=Vr(o,c),o.g.has(c)}t.forEach=function(o,c){Sn(this),this.g.forEach(function(h,f){h.forEach(function(C){o.call(c,C,f,this)},this)},this)},t.na=function(){Sn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const C=o[f];for(let N=0;N<C.length;N++)h.push(c[f])}return h},t.V=function(o){Sn(this);let c=[];if(typeof o=="string")Gd(this,o)&&(c=c.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return Sn(this),this.i=null,o=Vr(this,o),Gd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function qd(o,c,h){Kd(o,c),0<h.length&&(o.i=null,o.g.set(Vr(o,c),D(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const N=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var C=N;F[f]!==""&&(C+="="+encodeURIComponent(String(F[f]))),o.push(C)}}return this.i=o.join("&")};function Vr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function c0(o,c){c&&!o.j&&(Sn(o),o.i=null,o.g.forEach(function(h,f){var C=f.toLowerCase();f!=C&&(Kd(this,f),qd(this,C,h))},o)),o.j=c}function h0(o,c){const h=new Vi;if(l.Image){const f=new Image;f.onload=R(An,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(An,h,"TestLoadImage: error",!1,c,f),f.onabort=R(An,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(An,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function d0(o,c){const h=new Vi,f=new AbortController,C=setTimeout(()=>{f.abort(),An(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(N=>{clearTimeout(C),N.ok?An(h,"TestPingServer: ok",!0,c):An(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),An(h,"TestPingServer: error",!1,c)})}function An(o,c,h,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(h)}catch{}}function f0(){this.g=new Q_}function p0(o,c,h){const f=h||"";try{zd(o,function(C,N){let F=C;d(C)&&(F=jl(C)),c.push(f+N+"="+encodeURIComponent(F))})}catch(C){throw c.push(f+"type="+encodeURIComponent("_badmap")),C}}function vo(o){this.l=o.Ub||null,this.j=o.eb||!1}x(vo,Ul),vo.prototype.g=function(){return new _o(this.l,this.j)},vo.prototype.i=function(o){return function(){return o}}({});function _o(o,c){je.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(_o,je),t=_o.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ui(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ji(this):Ui(this),this.readyState==3&&Qd(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ji(this))},t.Qa=function(o){this.g&&(this.response=o,ji(this))},t.ga=function(){this.g&&ji(this)};function ji(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ui(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ui(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xd(o){let c="";return U(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Xl(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Xd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ae(o,c,h))}function ge(o){je.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ge,je);var m0=/^https?$/i,g0=["POST","PUT"];t=ge.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$l.g(),this.v=this.o?Ad(this.o):Ad($l),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){Yd(this,N);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)h.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const N of f.keys())h.set(N,f.get(N));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(g0,c,void 0))||f||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of h)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ef(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Yd(this,N)}};function Yd(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Jd(o),wo(o)}function Jd(o){o.A||(o.A=!0,Ye(o,"complete"),Ye(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ye(this,"complete"),Ye(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zd(this):this.bb())},t.bb=function(){Zd(this)};function Zd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)Ed(o.Ea,0,o);else if(Ye(o,"readystatechange"),tn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=F===0){var C=String(o.D).match($d)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),f=!m0.test(C?C.toLowerCase():"")}h=f}if(h)Ye(o,"complete"),Ye(o,"success");else{o.m=6;try{var N=2<tn(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",Jd(o)}}finally{wo(o)}}}}function wo(o,c){if(o.g){ef(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ye(o,"ready");try{h.onreadystatechange=f}catch{}}}function ef(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),q_(c)}};function tf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function y0(o){const c={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=k(o[f]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[C]||[];c[C]=N,N.push(h)}v(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function nf(o){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bi("baseRetryDelayMs",5e3,o),this.cb=Bi("retryDelaySeedMs",1e4,o),this.Wa=Bi("forwardChannelMaxRetries",2,o),this.wa=Bi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(o&&o.concurrentRequestLimit),this.Da=new f0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nf.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,f){Je(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=df(this,null,this.W),Io(this)};function Yl(o){if(rf(o),o.G==3){var c=o.U++,h=en(o.I);if(ae(h,"SID",o.K),ae(h,"RID",c),ae(h,"TYPE","terminate"),zi(o,h),c=new Tn(o,o.j,c),c.L=2,c.v=yo(en(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ff(c.j,null),c.g.ea(c.v)),c.F=Date.now(),po(c)}hf(o)}function Eo(o){o.g&&(Zl(o),o.g.cancel(),o.g=null)}function rf(o){Eo(o),o.u&&(l.clearTimeout(o.u),o.u=null),To(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Io(o){if(!Fd(o.h)&&!o.s){o.s=!0;var c=o.Ga;Qt||G(),B||(Qt(),B=!0),K.add(c,o),o.B=0}}function v0(o,c){return jd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Oi(I(o.Ga,o,c),cf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Tn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=p(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=of(this,C,c),h=en(this.I),ae(h,"RID",o),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),zi(this,h),N&&(this.O?c="headers="+encodeURIComponent(String(Xd(N)))+"&"+c:this.m&&Xl(h,this.m,N)),Ql(this.h,C),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",c),ae(h,"SID","null"),C.T=!0,Wl(C,h,null)):Wl(C,h,c),this.G=2}}else this.G==3&&(o?sf(this,o):this.i.length==0||Fd(this.h)||sf(this))};function sf(o,c){var h;c?h=c.l:h=o.U++;const f=en(o.I);ae(f,"SID",o.K),ae(f,"RID",h),ae(f,"AID",o.T),zi(o,f),o.m&&o.o&&Xl(f,o.m,o.o),h=new Tn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=of(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ql(o.h,h),Wl(h,f,c)}function zi(o,c){o.H&&U(o.H,function(h,f){ae(c,f,h)}),o.l&&zd({},function(h,f){ae(c,f,h)})}function of(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;e:{var C=o.i;let N=-1;for(;;){const F=["count="+h];N==-1?0<h?(N=C[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let re=!0;for(let De=0;De<h;De++){let ee=C[De].g;const Ue=C[De].map;if(ee-=N,0>ee)N=Math.max(0,C[De].g-100),re=!1;else try{p0(Ue,F,"req"+ee+"_")}catch{f&&f(Ue)}}if(re){f=F.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function af(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Qt||G(),B||(Qt(),B=!0),K.add(c,o),o.v=0}}function Jl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Oi(I(o.Fa,o),cf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,lf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Oi(I(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),Eo(this),lf(this))};function Zl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function lf(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=en(o.qa);ae(c,"RID","rpc"),ae(c,"SID",o.K),ae(c,"AID",o.T),ae(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(c,"TO",o.ja),ae(c,"TYPE","xmlhttp"),zi(o,c),o.m&&o.o&&Xl(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=yo(en(c)),h.m=null,h.P=!0,Vd(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Eo(this),Jl(this),Je(19))};function To(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function uf(o,c){var h=null;if(o.g==c){To(o),Zl(o),o.g=null;var f=2}else if(ql(o.h,c))h=c.D,Ud(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=o.B;f=co(),Ye(f,new xd(f,h)),Io(o)}else af(o);else if(C=c.s,C==3||C==0&&0<c.X||!(f==1&&v0(o,c)||f==2&&Jl(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),C){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function cf(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function lr(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const C=!f;f=new ar(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||mo(f,"https"),yo(f),C?h0(f.toString(),h):d0(f.toString(),h)}else Je(2);o.G=0,o.l&&o.l.sa(c),hf(o),rf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function hf(o){if(o.G=0,o.ka=[],o.l){const c=Bd(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function df(o,c,h){var f=h instanceof ar?en(h):new ar(h);if(f.g!="")c&&(f.g=c+"."+f.g),go(f,f.s);else{var C=l.location;f=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new ar(null);f&&mo(N,f),c&&(N.g=c),C&&go(N,C),h&&(N.l=h),f=N}return h=o.D,c=o.ya,h&&c&&ae(f,h,c),ae(f,"VER",o.la),zi(o,f),f}function ff(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ge(new vo({eb:h})):new ge(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pf(){}t=pf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function So(){}So.prototype.g=function(o,c){return new ct(o,c)};function ct(o,c){je.call(this),this.g=new nf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!_(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Lr(this)}x(ct,je),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){Yl(this.g)},ct.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=jl(o),o=h);c.i.push(new t0(c.Ya++,o)),c.G==3&&Io(c)},ct.prototype.N=function(){this.g.l=null,delete this.j,Yl(this.g),delete this.g,ct.aa.N.call(this)};function mf(o){Bl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}x(mf,Bl);function gf(){zl.call(this),this.status=1}x(gf,zl);function Lr(o){this.g=o}x(Lr,pf),Lr.prototype.ua=function(){Ye(this.g,"a")},Lr.prototype.ta=function(o){Ye(this.g,new mf(o))},Lr.prototype.sa=function(o){Ye(this.g,new gf)},Lr.prototype.ra=function(){Ye(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,Kv=function(){return new So},Wv=function(){return co()},Hv=sr,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,da=ho,Nd.COMPLETE="complete",$v=Nd,kd.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",je.prototype.listen=je.prototype.K,ss=kd,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,zv=ge}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const nm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new zh("@firebase/firestore");function Yi(){return Cr.logLevel}function $(t,...e){if(Cr.logLevel<=X.DEBUG){const n=e.map(ed);Cr.debug(`Firestore (${Ci}): ${t}`,...n)}}function Pr(t,...e){if(Cr.logLevel<=X.ERROR){const n=e.map(ed);Cr.error(`Firestore (${Ci}): ${t}`,...n)}}function Ga(t,...e){if(Cr.logLevel<=X.WARN){const n=e.map(ed);Cr.warn(`Firestore (${Ci}): ${t}`,...n)}}function ed(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Ee(t,e){t||Y()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lA{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new Gv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new We(e)}}class uA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new hA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Ne(0,0))}static max(){return new de(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Us{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Us{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function mA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Yn(i,q.empty(),e)}function gA(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(de.min(),q.empty(),-1)}static max(){return new Yn(de.max(),q.empty(),-1)}}function yA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==vA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(m=>{a[d]=m,++l,l===s&&r(a)},m=>i(m))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Sl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xv.oe=-1;function td(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function EA(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new im(this.data.getIterator())}getIteratorFrom(e){return new im(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class im{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new qe(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IA("Invalid base64 string: "+s):s}}(e);return new Gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const TA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=TA.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bs(t){return typeof t=="string"?Gt.fromBase64String(t):Gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jv(t){const e=t.mapValue.fields.__previous_value__;return nd(e)?Jv(e):e}function Qa(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i,s,a,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Xa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nd(t)?4:kA(t)?9007199254740991:AA(t)?10:11:Y()}function qt(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qa(t).isEqual(Qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Rr(i.timestampValue),l=Rr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bs(i.bytesValue).isEqual(Bs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Le(i.doubleValue),l=Le(s.doubleValue);return a===l?qa(a)===qa(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rm(a)!==rm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!qt(a[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function zs(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Le(s.integerValue||s.doubleValue),u=Le(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(Qa(t),Qa(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Bs(s),u=Bs(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=ie(l[d],u[d]);if(m!==0)return m}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ie(Le(s.latitude),Le(a.latitude));return l!==0?l:ie(Le(s.longitude),Le(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return om(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,m;const g=s.fields||{},I=a.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=(u=I.value)===null||u===void 0?void 0:u.arrayValue,D=ie(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=x==null?void 0:x.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:om(R,x)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ko.mapValue&&a===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(a===Ko.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const I=ie(u[g],m[g]);if(I!==0)return I;const R=vi(l[u[g]],d[m[g]]);if(R!==0)return R}return ie(u.length,m.length)}(t.mapValue,e.mapValue);default:throw Y()}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Rr(t),r=Rr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function om(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vi(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function _i(t){return jc(t)}function jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${jc(n.fields[a])}`;return i+"}"}(t.mapValue):Y()}function Uc(t){return!!t&&"integerValue"in t}function rd(t){return!!t&&"arrayValue"in t}function fa(t){return!!t&&"mapValue"in t}function AA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=gs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ro(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(gs(this.value))}}function Zv(t){const e=[];return ro(t.fields,(n,r)=>{const i=new Me([n]);if(fa(r)){const s=Zv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,de.min(),de.min(),de.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,de.min(),de.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,de.min(),de.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function am(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),n.key):r=vi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function CA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{}class Re extends e_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RA(e,n,r):n==="array-contains"?new DA(e,r):n==="in"?new OA(e,r):n==="not-in"?new VA(e,r):n==="array-contains-any"?new LA(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xA(e,r):new NA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends e_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jn(e,n)}matches(e){return t_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function t_(t){return t.op==="and"}function n_(t){return PA(t)&&t_(t)}function PA(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function Bc(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(n_(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function r_(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&qt(r.value,i.value)}(t,e):t instanceof Jn?function(r,i){return i instanceof Jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&r_(a,i.filters[l]),!0):!1}(t,e):void Y()}function i_(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`}(t):t instanceof Jn?function(n){return n.op.toString()+" {"+n.getFilters().map(i_).join(" ,")+"}"}(t):"Filter"}class RA extends Re{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class xA extends Re{constructor(e,n){super(e,"in",n),this.keys=s_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NA extends Re{constructor(e,n){super(e,"not-in",n),this.keys=s_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function s_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class DA extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rd(n)&&zs(n.arrayValue,this.value)}}class OA extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zs(this.value.arrayValue,n)}}class VA extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zs(this.value.arrayValue,n)}}class LA extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function um(t,e=null,n=[],r=[],i=null,s=null,a=null){return new MA(t,e,n,r,i,s,a)}function id(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),td(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_i(r)).join(",")),e.ue=n}return e.ue}function sd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lm(t.startAt,e.startAt)&&lm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bA(t,e,n,r,i,s,a,l){return new Al(t,e,n,r,i,s,a,l)}function FA(t){return new Al(t)}function cm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jA(t){return t.collectionGroup!==null}function ys(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qe(Me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ja(s,r))}),n.has(Me.keyField().canonicalString())||e.ce.push(new Ja(Me.keyField(),r))}return e.ce}function _r(t){const e=oe(t);return e.le||(e.le=UA(e,ys(t))),e.le}function UA(t,e){if(t.limitType==="F")return um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ja(i.field,s)});const n=t.endAt?new Ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ya(t.startAt.position,t.startAt.inclusive):null;return um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zc(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function o_(t,e){return sd(_r(t),_r(e))&&t.limitType===e.limitType}function a_(t){return`${id(_r(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>i_(i)).join(", ")}]`),td(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_i(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_i(i)).join(",")),`Target(${r})`}(_r(t))}; limitType=${t.limitType})`}function od(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=am(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,ys(r),i)||r.endAt&&!function(a,l,u){const d=am(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,ys(r),i))}(t,e)}function BA(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const s=zA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zA(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?vi(u,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ro(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Yv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new ut(q.comparator);function Za(){return $A}const l_=new ut(q.comparator);function Go(...t){let e=l_;for(const n of t)e=e.insert(n.key,n);return e}function u_(t){let e=l_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return vs()}function c_(){return vs()}function vs(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const HA=new ut(q.comparator),WA=new qe(q.comparator);function Ge(...t){let e=WA;for(const n of t)e=e.add(n);return e}const KA=new qe(ie);function GA(){return KA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function h_(t){return{integerValue:""+t}}function qA(t,e){return EA(e)?h_(e):ad(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof el?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nd(s)&&(s=Jv(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof $s?f_(t,e):t instanceof Hs?p_(t,e):function(i,s){const a=d_(i,s),l=hm(a)+hm(i.Pe);return Uc(a)&&Uc(i.Pe)?h_(l):ad(i.serializer,l)}(t,e)}function XA(t,e,n){return t instanceof $s?f_(t,e):t instanceof Hs?p_(t,e):n}function d_(t,e){return t instanceof tl?function(r){return Uc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class el extends kl{}class $s extends kl{constructor(e){super(),this.elements=e}}function f_(t,e){const n=m_(e);for(const r of t.elements)n.some(i=>qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hs extends kl{constructor(e){super(),this.elements=e}}function p_(t,e){let n=m_(e);for(const r of t.elements)n=n.filter(i=>!qt(i,r));return{arrayValue:{values:n}}}class tl extends kl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hm(t){return Le(t.integerValue||t.doubleValue)}function m_(t){return rd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $s&&i instanceof $s||r instanceof Hs&&i instanceof Hs?gi(r.elements,i.elements,qt):r instanceof tl&&i instanceof tl?qt(r.Pe,i.Pe):r instanceof el&&i instanceof el}(t.transform,e.transform)}class JA{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function g_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new v_(t.key,hn.none()):new io(t.key,t.data,hn.none());{const n=t.data,r=Dt.empty();let i=new qe(Me.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Dr(t.key,r,new Ot(i.toArray()),hn.none())}}function ZA(t,e,n){t instanceof io?function(i,s,a){const l=i.value.clone(),u=fm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,a){if(!pa(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=fm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(y_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function _s(t,e,n,r){return t instanceof io?function(s,a,l,u){if(!pa(s.precondition,a))return l;const d=s.value.clone(),m=pm(s.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,a,l,u){if(!pa(s.precondition,a))return l;const d=pm(s.fieldTransforms,u,a),m=a.data;return m.setAll(y_(s)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return pa(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function ek(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=d_(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gi(r,i,(s,a)=>YA(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends Cl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Cl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function y_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fm(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,XA(a,l,n[i]))}return r}function pm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,QA(s,a,e))}return r}class v_ extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tk extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=c_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=g_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ge())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>dm(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>dm(n,r))}}class ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return HA}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ld(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,J;function ik(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function sk(t){if(t===void 0)return Pr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ie.OK:return M.OK;case Ie.CANCELLED:return M.CANCELLED;case Ie.UNKNOWN:return M.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return M.INTERNAL;case Ie.UNAVAILABLE:return M.UNAVAILABLE;case Ie.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ie.NOT_FOUND:return M.NOT_FOUND;case Ie.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ie.ABORTED:return M.ABORTED;case Ie.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ie.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(J=Ie||(Ie={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bv([4294967295,4294967295],0);class ok{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ak(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lk(t,e){return $c(t,e.toTimestamp())}function ai(t){return Ee(!!t),de.fromTimestamp(function(n){const r=Rr(n);return new Ne(r.seconds,r.nanos)}(t))}function __(t,e){return Hc(t,e).canonicalString()}function Hc(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uk(t){const e=Te.fromString(t);return Ee(yk(e)),e}function Wc(t,e){return __(t.databaseId,e.path)}function ck(t){const e=uk(t);return e.length===4?Te.emptyPath():dk(e)}function hk(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dk(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mm(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function fk(t,e){let n;if(e instanceof io)n={update:mm(t,e.key,e.value)};else if(e instanceof v_)n={delete:Wc(t,e.key)};else if(e instanceof Dr)n={update:mm(t,e.key,e.data),updateMask:gk(e.fieldMask)};else{if(!(e instanceof tk))return Y();n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof el)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $s)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tl)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function pk(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?ai(i.updateTime):ai(s);return a.isEqual(de.min())&&(a=ai(s)),new JA(a,i.transformResults||[])}(n,e))):[]}function mk(t){let e=ck(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let s=[];n.where&&(s=function(g){const I=w_(g);return I instanceof Jn&&n_(I)?I.getFilters():[I]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(I=>function(x){return new Ja(Fr(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(I))}(n.orderBy));let l=null;n.limit&&(l=function(g){let I;return I=typeof g=="object"?g.value:g,td(I)?null:I}(n.limit));let u=null;n.startAt&&(u=function(g){const I=!!g.before,R=g.values||[];return new Ya(R,I)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const I=!g.before,R=g.values||[];return new Ya(R,I)}(n.endAt)),bA(e,i,a,s,l,"F",u,d)}function w_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fr(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fr(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(n.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(Fr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jn.create(n.compositeFilter.filters.map(r=>w_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Fr(t){return Me.fromServerFormat(t.fieldPath)}function gk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.ct=e}}function _k(t){const e=mk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.un=new Ek}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Ek{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wi(0)}static kn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_s(r.mutation,i,Ot.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ge()){const i=mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Go();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Za();const a=vs(),l=function(){return vs()}();return n.forEach((u,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Dr)?s=s.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),_s(m.mutation,d,m.mutation.getFieldMask(),Ne.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,m)=>a.set(d,m)),n.forEach((d,m)=>{var g;return l.set(d,new Tk(m,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vs();let i=new ut((a,l)=>a-l),s=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let m=r.get(u)||Ot.empty();m=l.applyToLocalView(d,m),r.set(u,m);const g=(i.get(l.batchId)||Ge()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,g=c_();m.forEach(I=>{if(!s.has(I)){const R=g_(n.get(I),r.get(I));R!==null&&g.set(I,R),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(mr());let l=-1,u=s;return a.next(d=>V.forEach(d,(m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next(I=>{u=u.insert(m,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Ge())).next(m=>({batchId:l,changes:u_(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Go();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const d=function(g,I){return new Al(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Nt.newInvalidDocument(m)))});let l=Go();return a.forEach((u,d)=>{const m=s.get(u);m!==void 0&&_s(m.mutation,d,Ot.empty(),Ne.now()),od(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ai(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_k(i.bundledQuery),readTime:ai(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.overlays=new ut(q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=mr(),s=n.length+1,a=new q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=s.get(d.largestBatchId);m===null&&(m=mr(),s=s.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rk(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ge(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Tr=new qe(Ce.Er),this.dr=new qe(Ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ce(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ce(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Te([])),r=new Ce(n,e),i=new Ce(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Te([])),r=new Ce(n,e),i=new Ce(n,e+1);let s=Ge();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ce(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Ce.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nk(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ce(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ce(n,0),i=new Ce(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ie);return n.forEach(i=>{const s=new Ce(i,0),a=new Ce(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Ce(new q(s),0);let l=new qe(ie);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ce(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ce(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.Mr=e,this.docs=function(){return new ut(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Za();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Za();const a=n.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yA(gA(m),r)<=0||(i.has(m.key)||od(n,m))&&(s=s.insert(m.key,m.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xk(this)}getSize(e){return V.resolve(this.size)}}class xk extends Ik{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.persistence=e,this.Nr=new Pi(n=>id(n),sd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ud,this.targetCount=0,this.kr=wi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xv(0),this.Kr=!1,this.Kr=!0,this.$r=new Ck,this.referenceDelegate=e(this),this.Ur=new Nk(this),this.indexManager=new wk,this.remoteDocumentCache=function(i){return new Rk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new vk(n),this.Gr=new Ak(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Pk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new Ok(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Ok extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class cd{constructor(e){this.persistence=e,this.Jr=new ud,this.Yr=null}static Zr(e){return new cd(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ge(),i=Ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return SI()?8:wA(Xe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Vk;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Yi()<=X.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Yi()<=X.DEBUG&&$("QueryEngine","Query:",Ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yi()<=X.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(n))):V.resolve())}Yi(e,n){if(cm(n))return V.resolve(null);let r=_r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zc(n,null,"F"),r=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ge(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,a,u.readTime)?this.Yi(e,zc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return cm(n)||i.isEqual(de.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(Yi()<=X.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(n)),this.rs(e,a,n,mA(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(BA(e));return n.forEach((i,s)=>{od(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Yi()<=X.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ut(ie),this._s=new Pi(s=>id(s),sd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bk(t,e,n,r){return new Mk(t,e,n,r)}async function E_(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Ge();for(const d of i){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of s){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function Fk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const g=d.batch,I=g.keys();let R=V.resolve();return I.forEach(x=>{R=R.next(()=>m.getEntry(u,x)).next(D=>{const b=d.docVersions.get(x);Ee(b!==null),D.version.compareTo(b)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ge();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jk(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Uk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class gm{constructor(){this.activeTargetIds=GA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bk{constructor(){this.so=new gm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Vu(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class Wk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Vu(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,u,d,i).then(m=>($("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw Ga("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",u,"request:",i),m})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=$k[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vu();return new Promise((a,l)=>{const u=new zv;u.setWithCredentials(!0),u.listenOnce($v.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case da.NO_ERROR:const m=u.getResponseJson();$(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(m)),a(m);break;case da.TIMEOUT:$(He,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case da.HTTP_ERROR:const g=u.getStatus();if($(He,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const x=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(R.status);l(new W(x,R.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(He,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);$(He,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Vu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Kv(),l=Wv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=s.join("");$(He,`Creating RPC '${e}' stream ${i}: ${m}`,u);const g=a.createWebChannel(m,u);let I=!1,R=!1;const x=new Hk({Io:b=>{R?$(He,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(I||($(He,`Opening RPC '${e}' stream ${i} transport.`),g.open(),I=!0),$(He,`RPC '${e}' stream ${i} sending:`,b),g.send(b))},To:()=>g.close()}),D=(b,T,_)=>{b.listen(T,A=>{try{_(A)}catch(O){setTimeout(()=>{throw O},0)}})};return D(g,ss.EventType.OPEN,()=>{R||($(He,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),D(g,ss.EventType.CLOSE,()=>{R||(R=!0,$(He,`RPC '${e}' stream ${i} transport closed`),x.So())}),D(g,ss.EventType.ERROR,b=>{R||(R=!0,Ga(He,`RPC '${e}' stream ${i} transport errored:`,b),x.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,ss.EventType.MESSAGE,b=>{var T;if(!R){const _=b.data[0];Ee(!!_);const A=_,O=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(O){$(He,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let U=function(y){const w=Ie[y];if(w!==void 0)return sk(w)}(j),v=O.message;U===void 0&&(U=M.INTERNAL,v="Unknown error status: "+j+" with message "+O.message),R=!0,x.So(new W(U,v)),g.close()}else $(He,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),D(l,Hv.STAT_EVENT,b=>{b.stat===Fc.PROXY?$(He,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Fc.NOPROXY&&$(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){return new ok(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new I_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gk extends Kk{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=pk(e.writeResults,e.commitTime),r=ai(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=hk(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Hc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Hc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{oo(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=oe(u);d.L_.add(4),await so(d),d.q_.set("Unknown"),d.L_.delete(4),await Rl(d)}(this))})}),this.q_=new Qk(r,i)}}async function Rl(t){if(oo(t))for(const e of t.B_)await e(!0)}async function so(t){for(const e of t.B_)await e(!1)}function oo(t){return oe(t).L_.size===0}async function T_(t,e,n){if(!Sl(e))throw e;t.L_.add(1),await so(t),t.q_.set("Offline"),n||(n=()=>jk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rl(t)})}function S_(t,e){return e().catch(n=>T_(t,n,e))}async function xl(t){const e=oe(t),n=Zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yk(e);)try{const i=await Uk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Jk(e,i)}catch(i){await T_(e,i)}A_(e)&&k_(e)}function Yk(t){return oo(t)&&t.O_.length<10}function Jk(t,e){t.O_.push(e);const n=Zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function A_(t){return oo(t)&&!Zn(t).n_()&&t.O_.length>0}function k_(t){Zn(t).start()}async function Zk(t){Zn(t).p_()}async function eC(t){const e=Zn(t);for(const n of t.O_)e.m_(n.mutations)}async function tC(t,e,n){const r=t.O_.shift(),i=ld.from(r,e,n);await S_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xl(t)}async function nC(t,e){e&&Zn(t).V_&&await async function(r,i){if(function(a){return ik(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();Zn(r).s_(),await S_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xl(r)}}(t,e),A_(t)&&k_(t)}async function vm(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=oo(n);n.L_.add(3),await so(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rl(n)}async function rC(t,e){const n=oe(t);e?(n.L_.delete(2),await Rl(n)):e||(n.L_.add(2),await so(n),n.q_.set("Unknown"))}function Zn(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new Gk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zk.bind(null,t),mo:nC.bind(null,t),f_:eC.bind(null,t),g_:tC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xl(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new dd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function C_(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Sl(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}class iC{constructor(){this.queries=_m(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=_m(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function _m(){return new Pi(t=>a_(t),o_)}function sC(t){t.Y_.forEach(e=>{e.next()})}var wm,Em;(Em=wm||(wm={})).ea="default",Em.Cache="cache";class oC{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Pi(l=>a_(l),o_),this.Ma=new Map,this.xa=new Set,this.Oa=new ut(q.comparator),this.Na=new Map,this.La=new ud,this.Ba={},this.ka=new Map,this.qa=wi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function aC(t,e,n){const r=hC(t);try{const i=await function(a,l){const u=oe(a),d=Ne.now(),m=l.reduce((R,x)=>R.add(x.key),Ge());let g,I;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=Za(),D=Ge();return u.cs.getEntries(R,m).next(b=>{x=b,x.forEach((T,_)=>{_.isValidDocument()||(D=D.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,x)).next(b=>{g=b;const T=[];for(const _ of l){const A=ek(_,g.get(_.key).overlayedDocument);A!=null&&T.push(new Dr(_.key,A,Zv(A.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,T,l)}).next(b=>{I=b;const T=b.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(R,b.batchId,T)})}).then(()=>({batchId:I.batchId,changes:u_(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ut(ie)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,n),await Nl(r,i.changes),await xl(r.remoteStore)}catch(i){const s=C_(i,"Failed to persist write");n.reject(s)}}function Im(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=oe(a);u.onlineState=l;let d=!1;u.queries.forEach((m,g)=>{for(const I of g.j_)I.Z_(l)&&(d=!0)}),d&&sC(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lC(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await Fk(n.localStore,e);R_(n,r,null),P_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await Qv(i)}}async function uC(t,e,n){const r=oe(t);try{const i=await function(a,l){const u=oe(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Ee(g!==null),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);R_(r,e,n),P_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await Qv(i)}}function P_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function R_(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Nl(t,e,n){const r=oe(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(m=void 0)===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=hd.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const m=oe(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,I=>V.forEach(I.$i,R=>m.persistence.referenceDelegate.addReference(g,I.targetId,R)).next(()=>V.forEach(I.Ui,R=>m.persistence.referenceDelegate.removeReference(g,I.targetId,R)))))}catch(g){if(!Sl(g))throw g;$("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const R=m.os.get(I),x=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(x);m.os=m.os.insert(I,D)}}}(r.localStore,s))}async function cC(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await E_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.hs)}}function hC(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uC.bind(null,e),e}class nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bk(this.persistence,new Lk,e.initialUser,this.serializer)}Ga(e){return new Dk(cd.Zr,this.serializer)}Wa(e){return new Bk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nl.provider={build:()=>new nl};class Kc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Im(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iC}()}createDatastore(e){const n=Pl(e.databaseInfo.databaseId),r=function(s){return new Wk(s)}(e.databaseInfo);return function(s,a,l,u){return new qk(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new Xk(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Im(this.syncEngine,n,0),function(){return ym.D()?new ym:new zk}())}createSyncEngine(e,n){return function(i,s,a,l,u,d,m){const g=new oC(i,s,a,l,u,d);return m&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await so(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Kc.provider={build:()=>new Kc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=qv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=C_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mu(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fC(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>vm(e.remoteStore,i)),t._onlineComponents=e}async function fC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ga("Error using user provided cache. Falling back to memory cache: "+n),await Mu(t,new nl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Mu(t,new nl);return t._offlineComponents}async function pC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Tm(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Tm(t,new Kc))),t._onlineComponents}function mC(t){return pC(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yC(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Am(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Gc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sm.get(n);r&&($("ComponentProvider","Removing Datastore"),Sm.delete(n),r.terminate())}(this),Promise.resolve()}}function vC(t,e,n,r={}){var i;const s=(t=Gc(t,pd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=We.MOCK_USER;else{l=yI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new We(d)}t._authCredentials=new aA(new Gv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new md(this.firestore,e,this._query)}}class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Ws extends md{constructor(e,n,r){super(e,n,FA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new q(e))}withConverter(e){return new Ws(this.firestore,e,this._path)}}function _C(t,e,...n){if(t=mt(t),arguments.length===1&&(e=qv.newId()),gC("doc","path",e),t instanceof pd){const r=Te.fromString(e,...n);return Am(r),new dn(t,null,new q(r))}{if(!(t instanceof dn||t instanceof Ws))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Am(r),new dn(t.firestore,t instanceof Ws?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new I_(this,"async_queue_retry"),this.Vu=()=>{const r=Lu();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Sl(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=dd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class N_ extends pd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cm(e),this._firestoreClient=void 0,await e}}}function wC(t,e){const n=typeof t=="object"?t:rv(),r=typeof t=="string"?t:"(default)",i=Hh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mI("firestore");s&&vC(i,...s)}return i}function EC(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||IC(t),t._firestoreClient}function IC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,m){return new SA(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,x_(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new dC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Gt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^__.*__$/;class SC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}function M_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class gd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(M_(this.Cu)&&TC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pl(e)}Qu(e,n,r,i=!1){return new gd({Cu:e,methodName:n,qu:r,path:Me.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kC(t){const e=t._freezeSettings(),n=Pl(t._databaseId);return new AC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CC(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);U_("Data must be an object, but it was:",a,r);const l=F_(r,a);let u,d;if(s.merge)u=new Ot(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const m=[];for(const g of s.mergeFields){const I=PC(e,g,n);if(!a.contains(I))throw new W(M.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);NC(m,I)||m.push(I)}u=new Ot(m),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new SC(new Dt(l),u,d)}function b_(t,e){if(j_(t=mt(t)))return U_("Unsupported field value:",e,t),F_(t,e);if(t instanceof O_)return function(r,i){if(!M_(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=b_(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:$c(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$c(i.serializer,s)}}if(r instanceof V_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:ak(i.serializer,r._byteString)};if(r instanceof dn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:__(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof L_)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ad(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${fd(r)}`)}(t,e)}function F_(t,e){const n={};return Yv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ro(t,(r,i)=>{const s=b_(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function j_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof V_||t instanceof Ks||t instanceof dn||t instanceof O_||t instanceof L_)}function U_(t,e,n){if(!j_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function PC(t,e,n){if((e=mt(e))instanceof D_)return e._internalPath;if(typeof e=="string")return xC(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const RC=new RegExp("[~\\*/\\[\\]]");function xC(t,e,n){if(e.search(RC)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new D_(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function NC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function OC(t,e,n){t=Gc(t,dn);const r=Gc(t.firestore,N_),i=DC(t.converter,e);return VC(r,[CC(kC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function VC(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>aC(await mC(r),i,s)),s.promise}(EC(t),e)}(function(e,n=!0){(function(i){Ci=i})(Si),mi(new Ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new N_(new lA(r.getProvider("auth-internal")),new dA(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(d.options.projectId,m)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qn(nm,"4.7.3",e),qn(nm,"4.7.3","esm2017")})();const LC={apiKey:"AIzaSyAVSYlXtPwHQKtxFiE-A4kMP_X4u3m6m_M",authDomain:"justartefactss.firebaseapp.com",projectId:"justartefactss",storageBucket:"justartefactss.firebasestorage.app",messagingSenderId:"240717554796",appId:"1:240717554796:web:133c0f17211fa103566449",measurementId:"G-2YLDPSZWFS"},MC=typeof __firebase_config<"u"?JSON.parse(__firebase_config):LC,Qo=typeof __app_id<"u"?__app_id:"default-app-id",Pm=nv(MC);OT("Debug");function bC(){const[t,e]=_e.useState("home"),[n,r]=_e.useState(!1),[i,s]=_e.useState(null),[a,l]=_e.useState(null),[u,d]=_e.useState(!1),[m,g]=_e.useState(null),[I,R]=_e.useState(!1);_e.useEffect(()=>{const T=iA(Pm),_=wC(Pm);s(T),l(_),(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await B1(T,__initial_auth_token):await M1(T)}catch(j){console.error("Error signing in:",j)}})();const O=K1(T,j=>{j?(d(!0),g(j.uid),t==="login"&&x("dashboard")):(d(!1),g(null)),R(!0)});return()=>O()},[t]);const x=T=>{e(T),r(!1)},D=async()=>{if(i)try{await G1(i),x("home")}catch(T){console.error("Error signing out:",T)}},b=()=>{if(!I)return S.jsx("div",{className:"flex justify-center items-center h-[calc(100vh-80px)]",children:S.jsx("p",{className:"text-2xl font-serif",children:"Loading..."})});switch(t){case"home":return S.jsx(Rm,{navigateTo:x});case"about":return S.jsx($C,{});case"categories":return S.jsx(zC,{});case"artisan-hub":return S.jsx(WC,{});case"collectors":return S.jsx(KC,{});case"login":return u?S.jsx(Nm,{navigateTo:x,userId:m,appId:Qo}):S.jsx(xm,{navigateTo:x,auth:i,db:a,appId:Qo});case"dashboard":return u?S.jsx(Nm,{navigateTo:x,userId:m,appId:Qo}):S.jsx(xm,{navigateTo:x,auth:i,db:a,appId:Qo});default:return S.jsx(Rm,{navigateTo:x})}};return S.jsxs("div",{className:"min-h-screen bg-white font-sans text-gray-900",children:[S.jsx(FC,{navigateTo:x,isMobileMenuOpen:n,setIsMobileMenuOpen:r,isAuthenticated:u,handleLogout:D}),S.jsx("main",{className:"pt-20",children:b()}),S.jsx(HC,{})]})}function FC({navigateTo:t,isMobileMenuOpen:e,setIsMobileMenuOpen:n,isAuthenticated:r,handleLogout:i}){const s=[{name:"Home",page:"home"},{name:"About Us",page:"about"},{name:"Categories",page:"categories"},{name:"Artisan Hub",page:"artisan-hub"},{name:"Collectors",page:"collectors"}];return S.jsxs("header",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",children:[S.jsx("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"flex justify-between items-center h-20",children:[S.jsx("div",{className:"flex-shrink-0 flex items-center",children:S.jsxs("button",{onClick:()=>t("home"),className:"flex items-center text-3xl font-bold text-orange-700 focus:outline-none",children:[S.jsx(ZE,{className:"h-8 w-8 mr-2"}),"Just Artefacts"]})}),S.jsxs("div",{className:"hidden md:flex md:items-center md:space-x-8",children:[s.map(a=>S.jsx("button",{onClick:()=>t(a.page),className:"text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out",children:a.name},a.name)),r?S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:()=>t("dashboard"),className:"bg-orange-100 text-orange-700 px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-sm",children:"Dashboard"}),S.jsx("button",{onClick:i,className:"bg-orange-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm",children:"Sign Out"})]}):S.jsx("button",{onClick:()=>t("login"),className:"bg-orange-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm",children:"Sign In"})]}),S.jsx("div",{className:"md:hidden flex items-center",children:S.jsxs("button",{onClick:()=>n(!e),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",children:[S.jsx("span",{className:"sr-only",children:"Open main menu"}),e?S.jsx(aI,{className:"block h-8 w-8","aria-hidden":"true"}):S.jsx(nI,{className:"block h-8 w-8","aria-hidden":"true"})]})})]})}),e&&S.jsx("div",{className:"md:hidden bg-white shadow-lg",children:S.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[s.map(a=>S.jsx("button",{onClick:()=>t(a.page),className:"text-gray-600 hover:text-orange-600 hover:bg-orange-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:a.name},a.name)),r?S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:()=>t("dashboard"),className:"bg-orange-100 text-orange-700 w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-sm",children:"Dashboard"}),S.jsx("button",{onClick:i,className:"bg-orange-500 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm",children:"Sign Out"})]}):S.jsx("button",{onClick:()=>t("login"),className:"bg-orange-500 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm",children:"Sign In"})]})})]})}function Rm({navigateTo:t}){return S.jsxs(S.Fragment,{children:[S.jsx(jC,{navigateTo:t}),S.jsx(UC,{}),S.jsx(BC,{}),S.jsx(B_,{})]})}function jC({navigateTo:t}){return S.jsxs("section",{className:"flex flex-col md:flex-row min-h-[calc(100vh-80px)]",children:[S.jsx("div",{className:"w-full md:w-1/2 bg-orange-50 flex items-center justify-center",children:S.jsxs("div",{className:"max-w-2xl py-24 px-4 sm:px-6 lg:px-8",children:[S.jsxs("h2",{className:"font-serif text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl",children:["Preserving Heritage.",S.jsx("span",{className:"block text-orange-500",children:"Empowering Artisans."})]}),S.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"Just Artefacts is a secure, transparent, and culturally sensitive marketplace integrating numismatic collectors and traditional artisans. Discover vintage coins, pottery, and unique craft pieces while supporting cultural preservation."}),S.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[S.jsx("button",{onClick:()=>t("categories"),className:"bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-lg transform hover:-translate-y-0.5",children:"Explore Collections"}),S.jsx("button",{onClick:()=>t("about"),className:"bg-orange-100 text-orange-700 border border-orange-200 px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-lg transform hover:-translate-y-0.5",children:"Learn More"})]})]})}),S.jsx("div",{className:"w-full md:w-1/2 bg-orange-200 flex items-center justify-center min-h-[300px] md:min-h-0",children:S.jsx("h2",{className:"font-serif text-5xl font-bold text-white opacity-90",children:"Handcrafted Pottery"})})]})}function UC(){return S.jsx("div",{className:"bg-white py-6 shadow-sm",children:S.jsx("h3",{className:"text-center text-sm font-semibold text-orange-700 tracking-widest uppercase",children:"Our Vision"})})}function BC(){const t=[{name:"Ensure Authenticity",description:"Providing a secure and transparent environment for trading collectibles.",icon:iI,color:"text-orange-600"},{name:"Cultural Preservation",description:"Contributing to the preservation of heritage and artisanal livelihoods.",icon:qE,color:"text-amber-600"},{name:"Sustainable Economics",description:"Offering sustainable opportunities to artisans, the backbone of India's handicraft industry.",icon:Ky,color:"text-orange-400"}];return S.jsx("section",{className:"py-24 bg-white",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[S.jsx("div",{className:"text-center",children:S.jsx("p",{className:"mt-2 text-4xl font-extrabold font-serif text-gray-900",children:"Beyond Commerce"})}),S.jsx("div",{className:"mt-20 grid gap-10 md:grid-cols-3",children:t.map(e=>S.jsxs("div",{className:"flex flex-col items-center text-center p-8 bg-orange-50 rounded-lg shadow-lg",children:[S.jsx("div",{className:"flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md",children:S.jsx(e.icon,{className:`h-8 w-8 ${e.color}`,"aria-hidden":"true"})}),S.jsx("h3",{className:"mt-6 text-2xl font-bold text-gray-900 font-serif",children:e.name}),S.jsx("p",{className:"mt-4 text-lg text-gray-600",children:e.description})]},e.name))})]})})}function zC(){return S.jsx("div",{className:"bg-white py-24",children:S.jsx(B_,{})})}function B_(){const t=[{name:"Vintage Coins",description:"Rare numismatics from across eras.",icon:XE},{name:"Currencies & Notes",description:"Historic banknotes and paper money.",icon:YE},{name:"Handcrafted Pottery",description:"Unique pieces from traditional artisans.",icon:JE},{name:"Other Collectibles",description:"Explore unique crafts and more.",icon:Ky}];return S.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl font-extrabold text-gray-900 font-serif",children:"Explore Our Categories"}),S.jsx("p",{className:"mt-4 text-xl text-gray-600",children:"From ancient coins to modern handicrafts."})]}),S.jsx("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",children:t.map(e=>S.jsxs("div",{className:"group relative bg-white border border-orange-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer",children:[S.jsx("img",{src:`https://placehold.co/300x200/FFF7ED/f97316?text=${e.name.replace(" ","+")}`,alt:e.name,className:"w-full h-48 object-cover",onError:n=>{n.target.onerror=null,n.target.src="https://placehold.co/300x200/CCCCCC/FFFFFF?text=Image+Error"}}),S.jsxs("div",{className:"p-6",children:[S.jsxs("div",{className:"flex items-center mb-3",children:[S.jsx(e.icon,{className:"h-7 w-7 text-orange-600"}),S.jsx("h3",{className:"ml-3 text-2xl font-bold text-gray-900 font-serif",children:e.name})]}),S.jsx("p",{className:"text-lg text-gray-700",children:e.description}),S.jsx("button",{className:"mt-6 text-orange-600 font-semibold text-lg group-hover:text-orange-700 transition duration-150",children:"View More →"})]})]},e.name))})]})}function $C(){return S.jsx("section",{className:"py-24 bg-orange-50",children:S.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h2",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif",children:"About Just Artefacts"}),S.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"Just Artefacts is a proposed digital marketplace conceptualized to integrate two niche yet culturally significant communities in India: numismatic collectors and traditional artisans. With India's centuries-old legacy of handicrafts and coinage, these groups represent both the preservation of heritage and the continuity of artisanal livelihoods. However, they often remain underrepresented in mainstream e-commerce ecosystems."}),S.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"The vision of Just Artefacts is to create a secure, transparent, and culturally sensitive platform where vintage coins, currencies, pottery, and unique craft pieces can be traded and appreciated. Beyond commerce, the platform seeks to contribute to cultural preservation, ensure authenticity of collectibles, and provide sustainable economic opportunities to artisans who form the backbone of India's handicraft industry, which employs nearly 200 million people and contributes significantly to rural livelihoods (Ministry of Textiles)."})]})})})}function HC(){return S.jsx("footer",{className:"bg-orange-950 text-orange-200",children:S.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[S.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-white",children:"Shop"}),S.jsxs("ul",{className:"mt-4 space-y-2",children:[S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Coins"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Currency"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Pottery"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Handicrafts"})})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-white",children:"Sell"}),S.jsxs("ul",{className:"mt-4 space-y-2",children:[S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Become a Seller"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Seller Hub"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Authenticity Guide"})})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-white",children:"About"}),S.jsxs("ul",{className:"mt-4 space-y-2",children:[S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"About Us"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Our Vision"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Careers"})})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-white",children:"Support"}),S.jsxs("ul",{className:"mt-4 space-y-2",children:[S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Help Center"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Contact Us"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Privacy Policy"})}),S.jsx("li",{children:S.jsx("a",{href:"#",className:"hover:text-white",children:"Terms of Service"})})]})]})]}),S.jsx("div",{className:"mt-12 border-t border-orange-800 pt-8 text-center",children:S.jsxs("p",{children:["© ",new Date().getFullYear()," Just Artefacts. All rights reserved."]})})]})})}function xm({navigateTo:t,auth:e,db:n,appId:r}){const[i,s]=_e.useState(!0),[a,l]=_e.useState(""),[u,d]=_e.useState(""),[m,g]=_e.useState(""),[I,R]=_e.useState(""),x=async()=>{if(e){R("");try{await $1(e,a,u)}catch(T){console.error("Sign in error:",T.message),R("Failed to sign in. Please check your email and password.")}}},D=async()=>{if(!(!e||!n)){R("");try{const _=(await z1(e,a,u)).user,A=_C(n,"artifacts",r,"users",_.uid,"profile","data");await OC(A,{name:m,email:a,createdAt:new Date().toISOString()})}catch(T){console.error("Sign up error:",T.message),R("Failed to create account. "+T.message)}}},b=T=>{T.preventDefault(),i?x():D()};return S.jsx("section",{className:"bg-orange-50 py-20 md:py-32",children:S.jsx("div",{className:"flex flex-col items-center justify-center px-6 mx-auto",children:S.jsx("div",{className:"w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0",children:S.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[S.jsx("h1",{className:"text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl font-serif",children:i?"Sign in to your account":"Create an account"}),I&&S.jsx("div",{className:"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg",role:"alert",children:I}),S.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:b,children:[!i&&S.jsxs("div",{children:[S.jsx("label",{htmlFor:"name",className:"block mb-2 text-lg font-medium text-gray-900",children:"Your name"}),S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:S.jsx(QE,{className:"h-6 w-6 text-gray-400"})}),S.jsx("input",{type:"text",name:"name",id:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3",placeholder:"Name",value:m,onChange:T=>g(T.target.value),required:!0})]})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"email",className:"block mb-2 text-lg font-medium text-gray-900",children:"Your email"}),S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:S.jsx(tI,{className:"h-6 w-6 text-gray-400"})}),S.jsx("input",{type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3",placeholder:"your gmail",value:a,onChange:T=>l(T.target.value),required:!0})]})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"password",className:"block mb-2 text-lg font-medium text-gray-900",children:"Password"}),S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:S.jsx(eI,{className:"h-6 w-6 text-gray-400"})}),S.jsx("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3",value:u,onChange:T=>d(T.target.value),required:!0})]})]}),i&&S.jsx("div",{className:"flex items-center justify-between",children:S.jsx("a",{href:"#",className:"text-lg font-medium text-orange-600 hover:underline",children:"Forgot password?"})}),S.jsx("button",{type:"submit",className:"w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out",children:i?"Sign in":"Create account"}),S.jsxs("p",{className:"text-lg font-light text-gray-600",children:[i?"Don’t have an account yet? ":"Already have an account? ",S.jsx("button",{type:"button",onClick:()=>{s(!i),R("")},className:"font-medium text-orange-600 hover:underline",children:i?"Sign up":"Sign in"})]})]})]})})})})}function WC(){return S.jsx("div",{className:"py-24 bg-orange-50",children:S.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[S.jsx("h2",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif",children:"Artisan Hub"}),S.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"This is a placeholder page for the Artisan Hub. Content coming soon!"})]})})}function KC(){return S.jsx("div",{className:"py-24 bg-orange-50",children:S.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[S.jsx("h2",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif",children:"Collectors Corner"}),S.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"This is a placeholder page for Collectors. Content coming soon!"})]})})}function Nm({navigateTo:t,userId:e,appId:n}){const r=[{name:"My Collection",icon:oI,color:"text-orange-600",page:"collectors"},{name:"My Listings",icon:sI,color:"text-amber-600",page:"artisan-hub"},{name:"Account Settings",icon:rI,color:"text-gray-600",page:"home"}];return S.jsx("section",{className:"bg-orange-50 py-24",children:S.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"max-w-3xl mx-auto",children:[S.jsx("h1",{className:"text-4xl font-extrabold text-gray-900 font-serif mb-4",children:"Welcome to your Dashboard"}),S.jsx("p",{className:"text-xl text-gray-700 mb-12",children:"Manage your collection, listings, and account settings all in one place."}),S.jsxs("div",{className:"mb-8 p-4 bg-orange-100 border border-orange-200 rounded-lg text-sm",children:[S.jsxs("p",{className:"font-mono text-orange-900",children:[S.jsx("span",{className:"font-semibold",children:"App ID:"})," ",n]}),S.jsxs("p",{className:"font-mono text-orange-900 mt-2",children:[S.jsx("span",{className:"font-semibold",children:"User ID:"})," ",e]})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:r.map(i=>S.jsxs("button",{onClick:()=>t(i.page),className:"group flex flex-col items-center p-8 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-2",children:[S.jsx("div",{className:"p-4 bg-orange-100 rounded-full transition duration-300 group-hover:bg-orange-200",children:S.jsx(i.icon,{className:`h-10 w-10 ${i.color}`})}),S.jsx("h3",{className:"mt-6 text-2xl font-bold text-gray-900 font-serif",children:i.name})]},i.name))}),S.jsxs("div",{className:"mt-20",children:[S.jsx("h2",{className:"text-3xl font-bold text-gray-900 font-serif mb-6",children:"Recent Activity"}),S.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8",children:[S.jsx("p",{className:"text-lg text-gray-600",children:"Your recent activity will appear here. You haven't listed or purchased any items yet."}),S.jsx("button",{onClick:()=>t("categories"),className:"mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm",children:"Start Exploring"})]})]})]})})})}Hy(document.getElementById("root")).render(S.jsx(_e.StrictMode,{children:S.jsx(bC,{})}));
