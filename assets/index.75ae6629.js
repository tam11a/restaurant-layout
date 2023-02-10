import{R as L,r as l,j as u,a as T,F as ee,_ as R,N as U}from"./index.9943f3a2.js";/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const A="popstate";function te(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:i}=r.location;return B("",{pathname:a,search:s,hash:i},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:V(o)}return oe(t,n,null,e)}function re(){return Math.random().toString(36).substr(2,8)}function N(e){return{usr:e.state,key:e.key}}function B(e,t,n,r){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?S(t):t,{state:n,key:t&&t.key||r||re()})}function V(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function S(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ne(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:V(e);return new URL(n,t)}function oe(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,i=y.Pop,c=null;function f(){i=y.Pop,c&&c({action:i,location:m.location})}function d(h,p){i=y.Push;let g=B(m.location,h,p);n&&n(g,h);let b=N(g),P=m.createHref(g);try{s.pushState(b,"",P)}catch{o.location.assign(P)}a&&c&&c({action:i,location:m.location})}function x(h,p){i=y.Replace;let g=B(m.location,h,p);n&&n(g,h);let b=N(g),P=m.createHref(g);s.replaceState(b,"",P),a&&c&&c({action:i,location:m.location})}let m={get action(){return i},get location(){return e(o,s)},listen(h){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(A,f),c=h,()=>{o.removeEventListener(A,f),c=null}},createHref(h){return t(o,h)},encodeLocation(h){let p=ne(V(h));return w({},h,{pathname:p.pathname,search:p.search,hash:p.hash})},push:d,replace:x,go(h){return s.go(h)}};return m}var k;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(k||(k={}));function se(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?S(t):t,o=q(r.pathname||"/",n);if(o==null)return null;let a=Y(e);ae(a);let s=null;for(let i=0;s==null&&i<a.length;++i)s=me(a[i],ge(o));return s}function Y(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,a)=>{let s={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(v(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let i=E([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(v(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+i+'".')),Y(o.children,t,c,i)),!(o.path==null&&!o.index)&&t.push({path:i,score:pe(i,o.index),routesMeta:c})}),t}function ae(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fe(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ie=/^:\w+$/,le=3,ue=2,ce=1,de=10,he=-2,W=e=>e==="*";function pe(e,t){let n=e.split("/"),r=n.length;return n.some(W)&&(r+=he),t&&(r+=ue),n.filter(o=>!W(o)).reduce((o,a)=>o+(ie.test(a)?le:a===""?ce:de),r)}function fe(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function me(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let s=0;s<n.length;++s){let i=n[s],c=s===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=ve({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},f);if(!d)return null;Object.assign(r,d.params);let x=i.route;a.push({params:r,pathname:E([o,d.pathname]),pathnameBase:Ee(E([o,d.pathnameBase])),route:x}),d.pathnameBase!=="/"&&(o=E([o,d.pathnameBase]))}return a}function ve(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:r.reduce((f,d,x)=>{if(d==="*"){let m=i[x]||"";s=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}return f[d]=ye(i[x]||"",d),f},{}),pathname:a,pathnameBase:s,pattern:e}}function xe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),F(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,i)=>(r.push(i),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ge(e){try{return decodeURI(e)}catch(t){return F(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ye(e,t){try{return decodeURIComponent(e)}catch(n){return F(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function q(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function F(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}const E=e=>e.join("/").replace(/\/\/+/g,"/"),Ee=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class Re{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Ce(e){return e instanceof Re}const Pe=new Set(["POST","PUT","PATCH","DELETE"]);[...Pe];/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function we(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Se=typeof Object.is=="function"?Object.is:we,{useState:Oe,useEffect:_e,useLayoutEffect:be,useDebugValue:Ue}=L;function De(e,t,n){const r=t(),[{inst:o},a]=Oe({inst:{value:r,getSnapshot:t}});return be(()=>{o.value=r,o.getSnapshot=t,D(o)&&a({inst:o})},[e,r,t]),_e(()=>(D(o)&&a({inst:o}),e(()=>{D(o)&&a({inst:o})})),[e]),Ue(r),r}function D(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Se(n,r)}catch{return!0}}function Le(e,t,n){return t()}const Te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Be=!Te,Ie=Be?Le:De;"useSyncExternalStore"in L&&(e=>e.useSyncExternalStore)(L);const $e=l.exports.createContext(null),je=l.exports.createContext(null),Q=l.exports.createContext(null),Ve=l.exports.createContext(null),O=l.exports.createContext(null),_=l.exports.createContext({outlet:null,matches:[]}),Z=l.exports.createContext(null);function M(){return l.exports.useContext(O)!=null}function Fe(){return M()||v(!1),l.exports.useContext(O).location}const Me=l.exports.createContext(null);function Ae(e){let t=l.exports.useContext(_).outlet;return t&&u(Me.Provider,{value:e,children:t})}function Ne(e,t){M()||v(!1);let n=l.exports.useContext(Q),{matches:r}=l.exports.useContext(_),o=r[r.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let i=Fe(),c;if(t){var f;let p=typeof t=="string"?S(t):t;s==="/"||((f=p.pathname)==null?void 0:f.startsWith(s))||v(!1),c=p}else c=i;let d=c.pathname||"/",x=s==="/"?d:d.slice(s.length)||"/",m=se(e,{pathname:x}),h=He(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:E([s,p.pathname]),pathnameBase:p.pathnameBase==="/"?s:E([s,p.pathnameBase])})),r,n||void 0);return t&&h?u(O.Provider,{value:{location:I({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:y.Pop},children:h}):h}function ke(){let e=Je(),t=Ce(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r};return T(ee,{children:[u("h2",{children:"Unhandled Thrown Error!"}),u("h3",{style:{fontStyle:"italic"},children:t}),n?u("pre",{style:o,children:n}):null,u("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),T("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",u("code",{style:a,children:"errorElement"})," props on\xA0",u("code",{style:a,children:"<Route>"})]})]})}class We extends l.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u(Z.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function ze(e){let{routeContext:t,match:n,children:r}=e,o=l.exports.useContext($e);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),u(_.Provider,{value:t,children:r})}function He(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let a=r.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));a>=0||v(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,s,i)=>{let c=s.route.id?o==null?void 0:o[s.route.id]:null,f=n?s.route.errorElement||u(ke,{}):null,d=()=>u(ze,{match:s,routeContext:{outlet:a,matches:t.concat(r.slice(0,i+1))},children:c?f:s.route.element!==void 0?s.route.element:a});return n&&(s.route.errorElement||i===0)?u(We,{location:n.location,component:f,error:c,children:d()}):d()},null)}var z;(function(e){e.UseRevalidator="useRevalidator"})(z||(z={}));var $;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($||($={}));function Ge(e){let t=l.exports.useContext(Q);return t||v(!1),t}function Je(){var e;let t=l.exports.useContext(Z),n=Ge($.UseRouteError),r=l.exports.useContext(_),o=r.matches[r.matches.length-1];return t||(r||v(!1),o.route.id||v(!1),(e=n.errors)==null?void 0:e[o.route.id])}function ot(e){return Ae(e.context)}function C(e){v(!1)}function Ke(e){let{basename:t="/",children:n=null,location:r,navigationType:o=y.Pop,navigator:a,static:s=!1}=e;M()&&v(!1);let i=t.replace(/^\/*/,"/"),c=l.exports.useMemo(()=>({basename:i,navigator:a,static:s}),[i,a,s]);typeof r=="string"&&(r=S(r));let{pathname:f="/",search:d="",hash:x="",state:m=null,key:h="default"}=r,p=l.exports.useMemo(()=>{let g=q(f,i);return g==null?null:{pathname:g,search:d,hash:x,state:m,key:h}},[i,f,d,x,m,h]);return p==null?null:u(Ve.Provider,{value:c,children:u(O.Provider,{children:n,value:{location:p,navigationType:o}})})}function Xe(e){let{children:t,location:n}=e,r=l.exports.useContext(je),o=r&&!t?r.router.routes:j(t);return Ne(o,n)}var H;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(H||(H={}));new Promise(()=>{});function j(e,t){t===void 0&&(t=[]);let n=[];return l.exports.Children.forEach(e,(r,o)=>{if(!l.exports.isValidElement(r))return;if(r.type===l.exports.Fragment){n.push.apply(n,j(r.props.children,t));return}r.type!==C&&v(!1),!r.props.index||!r.props.children||v(!1);let a=[...t,o],s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=j(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ye(e){let{basename:t,children:n,window:r}=e,o=l.exports.useRef();o.current==null&&(o.current=te({window:r,v5Compat:!0}));let a=o.current,[s,i]=l.exports.useState({action:a.action,location:a.location});return l.exports.useLayoutEffect(()=>a.listen(i),[a]),u(Ke,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var G;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(G||(G={}));var J;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(J||(J={}));const K={HOME:"",NOTFOUND:"*"},X={DASHBOARD:"",NOTFOUND:"*"},qe=[{path:K.HOME,Component:l.exports.lazy(()=>R(()=>import("./index.42c6a834.js"),["assets/index.42c6a834.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css","assets/App.7360b200.js"]))},{path:K.NOTFOUND,Component:l.exports.lazy(()=>R(()=>import("./index.d6005d90.js"),["assets/index.d6005d90.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css"]))}],Qe=[{path:X.DASHBOARD,Component:l.exports.lazy(()=>R(()=>import("./index.6db663c3.js"),["assets/index.6db663c3.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css"]))},{path:X.NOTFOUND,Component:l.exports.lazy(()=>R(()=>import("./index.d6005d90.js"),["assets/index.d6005d90.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css"]))}],Ze=l.exports.lazy(()=>R(()=>import("./index.a70cad0a.js"),["assets/index.a70cad0a.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css"])),et=l.exports.lazy(()=>R(()=>import("./index.c283e06b.js"),["assets/index.c283e06b.js","assets/index.9943f3a2.js","assets/index.49ee67e5.css"])),tt=()=>u(l.exports.Suspense,{fallback:u(U,{}),children:u(Ye,{children:T(Xe,{children:[u(C,{path:"app/*",element:u(et,{}),children:Qe.map(({path:e,Component:t})=>u(C,{path:e,element:u(l.exports.Suspense,{fallback:u(U,{}),children:u(t,{})})},e))}),u(C,{path:"*",element:u(Ze,{}),children:qe.map(({path:e,Component:t})=>u(C,{path:e,element:u(l.exports.Suspense,{fallback:u(U,{}),children:u(t,{})})},e))})]})})}),st=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{ot as O,st as i};