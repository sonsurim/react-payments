import{j as b}from"./jsx-runtime-CKrituN3.js";import{r as f,a as O}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}var g;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(g||(g={}));function I(t){t===void 0&&(t={});let{initialEntries:e=["/"],initialIndex:n,v5Compat:r=!1}=t,l;l=e.map((a,o)=>d(a,typeof a=="string"?null:a.state,o===0?"default":void 0));let c=h(n??l.length-1),s=g.Pop,i=null;function h(a){return Math.min(Math.max(a,0),l.length-1)}function p(){return l[c]}function d(a,o,u){o===void 0&&(o=null);let v=A(l?p().pathname:"/",a,o,u);return S(v.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(a)),v}function m(a){return typeof a=="string"?a:T(a)}return{get index(){return c},get action(){return s},get location(){return p()},createHref:m,createURL(a){return new URL(m(a),"http://localhost")},encodeLocation(a){let o=typeof a=="string"?C(a):a;return{pathname:o.pathname||"",search:o.search||"",hash:o.hash||""}},push(a,o){s=g.Push;let u=d(a,o);c+=1,l.splice(c,l.length,u),r&&i&&i({action:s,location:u,delta:1})},replace(a,o){s=g.Replace;let u=d(a,o);l[c]=u,r&&i&&i({action:s,location:u,delta:0})},go(a){s=g.Pop;let o=h(c+a),u=l[o];c=o,i&&i({action:s,location:u,delta:a})},listen(a){return i=a,()=>{i=null}}}}function M(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function S(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function j(){return Math.random().toString(36).substr(2,8)}function A(t,e,n,r){return n===void 0&&(n=null),y({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?C(e):e,{state:n,key:e&&e.key||r||j()})}function T(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function C(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}var w;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(w||(w={}));function _(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const R=["post","put","patch","delete"];new Set(R);const N=["get",...R];new Set(N);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},P.apply(this,arguments)}const H=f.createContext(null),E=f.createContext(null);function U(){return f.useContext(E)!=null}const $="startTransition",L=O[$];function q(t){let{basename:e,children:n,initialEntries:r,initialIndex:l,future:c}=t,s=f.useRef();s.current==null&&(s.current=I({initialEntries:r,initialIndex:l,v5Compat:!0}));let i=s.current,[h,p]=f.useState({action:i.action,location:i.location}),{v7_startTransition:d}=c||{},m=f.useCallback(x=>{d&&L?L(()=>p(x)):p(x)},[p,d]);return f.useLayoutEffect(()=>i.listen(m),[i,m]),f.createElement(W,{basename:e,children:n,location:h.location,navigationType:h.action,navigator:i,future:c})}function W(t){let{basename:e="/",children:n=null,location:r,navigationType:l=g.Pop,navigator:c,static:s=!1,future:i}=t;U()&&M(!1);let h=e.replace(/^\/*/,"/"),p=f.useMemo(()=>({basename:h,navigator:c,static:s,future:P({v7_relativeSplatPath:!1},i)}),[h,i,c,s]);typeof r=="string"&&(r=C(r));let{pathname:d="/",search:m="",hash:x="",state:a=null,key:o="default"}=r,u=f.useMemo(()=>{let v=_(d,h);return v==null?null:{location:{pathname:v,search:m,hash:x,state:a,key:o},navigationType:l}},[h,d,m,x,a,o,l]);return u==null?null:f.createElement(H.Provider,{value:p},f.createElement(E.Provider,{children:n,value:u}))}new Promise(()=>{});const k=[t=>b.jsx(q,{initialEntries:["/"],children:b.jsx(t,{})})],B={actions:{argTypesRegex:"^on[A-Z].*"},docs:{toc:!0,canvas:{sourceState:"shown"},controls:{sort:"requiredFirst"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},K={decorators:k,parameters:B};export{K as default,B as parameters};
