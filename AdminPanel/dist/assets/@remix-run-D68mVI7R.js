/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const j="popstate";function oe(e){e===void 0&&(e={});function t(r,i){let{pathname:s="/",search:o="",hash:l=""}=P(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),I("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let s=r.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof i=="string"?i:M(i))}function a(r,i){O(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return k(t,n,a,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function O(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,n,a){return n===void 0&&(n=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:n,key:t&&t.key||a||V()})}function M(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function P(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function k(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,s=r.history,o=v.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(S({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function u(){o=v.Pop;let h=f(),p=h==null?null:h-c;c=h,l&&l({action:o,location:g.location,delta:p})}function m(h,p){o=v.Push;let d=I(g.location,h,p);n&&n(d,h),c=f()+1;let E=L(d,c),w=g.createHref(d);try{s.pushState(E,"",w)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;r.location.assign(w)}i&&l&&l({action:o,location:g.location,delta:1})}function $(h,p){o=v.Replace;let d=I(g.location,h,p);n&&n(d,h),c=f();let E=L(d,c),w=g.createHref(d);s.replaceState(E,"",w),i&&l&&l({action:o,location:g.location,delta:0})}function x(h){let p=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof h=="string"?h:M(h);return d=d.replace(/ $/,"%20"),y(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let g={get action(){return o},get location(){return e(r,s)},listen(h){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(j,u),l=h,()=>{r.removeEventListener(j,u),l=null}},createHref(h){return t(r,h)},createURL:x,encodeLocation(h){let p=x(h);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:$,go(h){return s.go(h)}};return g}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function ce(e,t,n){return n===void 0&&(n="/"),N(e,t,n,!1)}function N(e,t,n,a){let r=typeof t=="string"?P(t):t,i=ee(r.pathname||"/",n);if(i==null)return null;let s=U(e);q(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=Z(i);o=X(s[l],c,a)}return o}function U(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,s,o)=>{let l={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(y(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let c=R([a,l.relativePath]),f=n.concat(l);i.children&&i.children.length>0&&(y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:K(c,i.index),routesMeta:f})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))r(i,s);else for(let l of A(i.path))r(i,s,l)}),t}function A(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let s=A(a.join("/")),o=[];return o.push(...s.map(l=>l===""?i:[i,l].join("/"))),r&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function q(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const z=/^:[\w-]+$/,_=3,D=2,F=1,J=10,G=-2,H=e=>e==="*";function K(e,t){let n=e.split("/"),a=n.length;return n.some(H)&&(a+=G),t&&(a+=D),n.filter(r=>!H(r)).reduce((r,i)=>r+(z.test(i)?_:i===""?F:J),a)}function Q(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function X(e,t,n){let{routesMeta:a}=e,r={},i="/",s=[];for(let o=0;o<a.length;++o){let l=a[o],c=o===a.length-1,f=i==="/"?t:t.slice(i.length)||"/",u=C({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),m=l.route;if(!u&&c&&n&&!a[a.length-1].route.index&&(u=C({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!u)return null;Object.assign(r,u.params),s.push({params:r,pathname:R([i,u.pathname]),pathnameBase:re(R([i,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(i=R([i,u.pathnameBase]))}return s}function C(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Y(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce((c,f,u)=>{let{paramName:m,isOptional:$}=f;if(m==="*"){let g=o[u]||"";s=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const x=o[u];return $&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Y(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),O(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(a.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Z(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return O(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function te(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:n?n.startsWith("/")?n:ne(n,t):t,search:ie(a),hash:le(r)}}function ne(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function b(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ae(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function he(e,t){let n=ae(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function ue(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=P(e):(r=S({},e),y(!r.pathname||!r.pathname.includes("?"),b("?","pathname","search",r)),y(!r.pathname||!r.pathname.includes("#"),b("#","pathname","hash",r)),y(!r.search||!r.search.includes("#"),b("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,o;if(s==null)o=n;else{let u=t.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),u-=1;r.pathname=m.join("/")}o=u>=0?t[u]:"/"}let l=te(r,o),c=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const R=e=>e.join("/").replace(/\/\/+/g,"/"),re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,le=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T=["post","put","patch","delete"];new Set(T);const se=["get",...T];new Set(se);export{v as A,fe as a,C as b,M as c,oe as d,he as g,y as i,R as j,ce as m,P as p,ue as r,ee as s};
