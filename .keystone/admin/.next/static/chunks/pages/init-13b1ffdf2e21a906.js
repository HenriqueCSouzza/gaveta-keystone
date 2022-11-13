(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{7089:function(t,e,r){"use strict";r.d(e,{S:function(){return s},u:function(){return a}});var n=r(5445),o=r(2784),i=r(1511);const s=t=>{let{children:e,title:r}=t;const{colors:o,shadow:i}=(0,n.Fg)();return(0,n.tZ)("div",null,(0,n.tZ)("head",null,(0,n.tZ)("title",null,r||"Keystone")),(0,n.tZ)(n.M5,{css:{minWidth:"100vw",minHeight:"100vh",backgroundColor:o.backgroundMuted},rounding:"medium"},(0,n.tZ)(n.xu,{css:{background:o.background,width:600,boxShadow:i.s100},margin:"medium",padding:"xlarge",rounding:"medium"},e)))},a=()=>{const t=(0,i.tv)();return(0,o.useMemo)((()=>{var e;return!Array.isArray(t.query.from)&&null!==(e=t.query.from)&&void 0!==e&&e.startsWith("/")?t.query.from:"/"}),[t])}},8799:function(t,e,r){"use strict";r.d(e,{H:function(){return v},P:function(){return E}});var n=r(7896),o=r(5445),i=r(2784),s=r(5632),a=(r(5631),r(487),r(891),r(5273),r(9575)),l=r(1511),u=r(444),c=r(9097),d=r.n(c);const h=()=>{var t;const{spacing:e}=(0,o.Fg)(),{adminConfig:r}=(0,a.jf)();return null!==(t=r.components)&&void 0!==t&&t.Logo?(0,o.tZ)(r.components.Logo,null):(0,o.tZ)(o.H3,null,(0,o.tZ)(d(),{href:"/",passHref:!0},(0,o.tZ)("a",{css:{backgroundImage:"linear-gradient(to right, #0ea5e9, #6366f1)",backgroundClip:"text",lineHeight:"1.75rem",color:"transparent",verticalAlign:"middle",transition:"color 0.3s ease",textDecoration:"none"}},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220 220",css:{display:"inline-block",width:"2rem",height:"2rem",margin:`0  ${e.medium}px ${e.xsmall}px 0`,verticalAlign:"middle"}},(0,o.tZ)("defs",null,(0,o.tZ)("linearGradient",{id:"logo-a",x1:"0%",x2:"50%",y1:"0%",y2:"71.9%"},(0,o.tZ)("stop",{offset:"0%",stopColor:"#5AE8FA"}),(0,o.tZ)("stop",{offset:"100%",stopColor:"#2684FF"}))),(0,o.tZ)("path",{fill:"url(#logo-a)",fillRule:"evenodd",d:"M290.1 47h117.5c17.8 0 24.3 1.9 30.8 5.3a36.3 36.3 0 0115.1 15.2c3.5 6.5 5.4 13 5.4 30.8v117.4c0 17.9-1.9 24.3-5.4 30.8a36.3 36.3 0 01-15.1 15.2c-6.5 3.4-13 5.3-30.8 5.3H290c-17.8 0-24.3-1.9-30.8-5.3a36.3 36.3 0 01-15.1-15.2c-3.5-6.5-5.3-13-5.3-30.8V98.3c0-17.9 1.8-24.3 5.3-30.8a36.3 36.3 0 0115.1-15.2c6.5-3.4 13-5.3 30.8-5.3zm11.8 56.8V218H327v-36.8l14.4-14.6 34.4 51.4h31.5l-49-69.1 44.7-45.1h-31.3L327 151v-47.3H302z",transform:"translate(-238.9 -47)"})),"Keystone 6")))},f=t=>{let{href:e,children:r,isSelected:n}=t;const{colors:i,palette:a,spacing:u,radii:c,typography:d}=(0,o.Fg)(),h=(0,s.useRouter)(),f=void 0!==n?n:h.pathname===e;return(0,o.tZ)("li",null,(0,o.tZ)(l.rU,{"aria-current":!!f&&"location",href:e,css:{background:"transparent",borderBottomRightRadius:c.xsmall,borderTopRightRadius:c.xsmall,color:a.neutral700,display:"block",fontWeight:d.fontWeight.medium,marginBottom:u.xsmall,marginRight:u.xlarge,padding:`${u.small}px ${u.xlarge}px`,position:"relative",textDecoration:"none",":hover":{background:i.backgroundHover,color:i.linkHoverColor},"&[aria-current=location]":{background:a.neutral200,color:a.neutral900}}},r))},p=t=>{let{item:e}=t;const{apiPath:r}=(0,a.jf)(),{spacing:n,typography:i}=(0,o.Fg)();return(0,o.tZ)("div",{css:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:n.xlarge,marginBottom:0}},!(!e||"authenticated"!==e.state)&&(0,o.tZ)("div",{css:{fontSize:i.fontSize.small}},"Signed in as ",(0,o.tZ)("strong",{css:{display:"block"}},e.label)),e&&"authenticated"===e.state&&(0,o.tZ)(u.S,null))},y=t=>{let{authenticatedItem:e,children:r}=t;const{spacing:n}=(0,o.Fg)();return(0,o.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"}},(0,o.tZ)(p,{item:e}),(0,o.tZ)("nav",{role:"navigation","aria-label":"Side Navigation",css:{marginTop:n.xlarge}},(0,o.tZ)("ul",{css:{padding:0,margin:0,li:{listStyle:"none"}}},r)))},g=t=>{let{list:e}=t;const r=(0,s.useRouter)();return(0,o.tZ)(f,{isSelected:r.pathname.split("/")[1]===`/${e.path}`.split("/")[1],href:`/${e.path}${e.isSingleton?"/1":""}`},e.label)},m=t=>{let{lists:e=[],include:r=[]}=t;const n=r.length>0?e.filter((t=>r.includes(t.key))):e;return(0,o.tZ)(i.Fragment,null,n.map((t=>(0,o.tZ)(g,{key:t.key,list:t}))))},b=()=>{var t;const{adminMeta:{lists:e},adminConfig:r,authenticatedItem:n,visibleLists:i}=(0,a.jf)();if("loading"===i.state)return null;if("error"===i.state)return(0,o.tZ)(o.xv,{as:"span",paddingLeft:"xlarge",css:{color:"red"}},i.error instanceof Error?i.error.message:i.error[0].message);const s=Object.keys(e).map((t=>i.lists.has(t)?e[t]:null)).filter((t=>Boolean(t)));return null!==r&&void 0!==r&&null!==(t=r.components)&&void 0!==t&&t.Navigation?(0,o.tZ)(r.components.Navigation,{authenticatedItem:n,lists:s}):(0,o.tZ)(y,{authenticatedItem:n},(0,o.tZ)(f,{href:"/"},"Dashboard"),(0,o.tZ)(m,{lists:s}))},v=80,w=t=>(0,o.tZ)(i.Fragment,null,(0,o.tZ)("style",null,"body { overflow: hidden; }"),(0,o.tZ)("div",(0,n.Z)({css:{display:"grid",gridTemplateColumns:"minmax(300px, 1fr) 4fr",gridTemplateRows:`${v}px auto`,height:"100vh",isolation:"isolate"}},t))),Z=t=>(0,o.tZ)("aside",(0,n.Z)({css:{minWidth:0,overflowY:"auto",WebkitOverflowScrolling:"touch"}},t)),x=t=>{const{colors:e,spacing:r}=(0,o.Fg)();return(0,o.tZ)("main",(0,n.Z)({css:{backgroundColor:e.background,boxSizing:"border-box",minWidth:0,paddingLeft:r.xlarge,paddingRight:r.xlarge,overflowY:"auto",WebkitOverflowScrolling:"touch",position:"relative"}},t))},E=t=>{let{children:e,header:r,title:n}=t;const{colors:i,spacing:s}=(0,o.Fg)();return(0,o.tZ)(w,null,(0,o.tZ)("div",{css:{alignItems:"center",borderBottom:`1px solid ${i.border}`,display:"flex",justifyContent:"space-between",paddingLeft:s.xlarge,paddingRight:s.xlarge}},(0,o.tZ)(h,null)),(0,o.tZ)("header",{css:{alignItems:"center",backgroundColor:i.background,borderBottom:`1px solid ${i.border}`,display:"flex",justifyContent:"space-between",minWidth:0,paddingLeft:s.xlarge,paddingRight:s.xlarge}},(0,o.tZ)("title",null,n?`Keystone - ${n}`:"Keystone"),r),(0,o.tZ)(Z,null,(0,o.tZ)(b,null)),(0,o.tZ)(x,null,e))}},6279:function(t,e){var r="undefined"!==typeof self?self:this,n=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!==typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||l(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=p(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=c(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=function(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function Z(t){var e=new h;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];x.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(_){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function A(t,r){return new Promise((function(n,i){var s=new v(t,r);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:Z(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;n(new x(e,t))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",l)}),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}A.polyfill=!0,t.fetch||(t.fetch=A,t.Headers=h,t.Request=v,t.Response=x),e.Headers=h,e.Request=v,e.Response=x,e.fetch=A,Object.defineProperty(e,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},7784:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/init",function(){return r(1607)}])},1607:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return C}});var n=r(2784),o=r(6279),i=r.n(o),s=r(5445),a=r(5631),l=r(2445),u=r(9575),c=r(9378),d=r.n(c),h=r(3379),f=r(81),p=r(1511),y=(r(1781),r(9317),r(7589),r(8799),r(7572),r(5852)),g=(r(5632),r(9097),r(7595),r(487),r(891),r(5273),r(5364),r(6759)),m=(r(8999),r(6765),r(4002),r(7132),r(7668),r(1168),r(5976),r(581),r(9403),r(444),r(5118)),b=(r(5177),r(3900),r(7268),r(1160)),v=r(7896),w=r(9740),Z=r(7089);const x=["email","username"],E=["children"],A=["as"],_=t=>{let{children:e}=t,r=(0,w.Z)(t,E);return(0,s.tZ)("a",(0,v.Z)({css:{color:"#6C798F",display:"flex",alignItems:"center",justifyContent:"center",height:24,width:24,":hover,:focus":{color:"#253858"},svg:{width:"100%"}}},r),e)},S=t=>(0,s.tZ)(_,t,(0,s.tZ)("svg",{viewBox:"0 0 24 20",xmlns:"http://www.w3.org/2000/svg"},(0,s.tZ)("path",{d:"M7.548 20c9.056 0 14.01-7.695 14.01-14.368 0-.219 0-.437-.015-.653.964-.715 1.796-1.6 2.457-2.614a9.638 9.638 0 0 1-2.828.794A5.047 5.047 0 0 0 23.337.366a9.72 9.72 0 0 1-3.127 1.226C18.684-.072 16.258-.48 14.294.598c-1.964 1.078-2.98 3.374-2.475 5.6C7.859 5.994 4.17 4.076 1.67.922.363 3.229 1.031 6.18 3.195 7.662A4.795 4.795 0 0 1 .96 7.032v.064c0 2.403 1.653 4.474 3.95 4.95a4.797 4.797 0 0 1-2.223.087c.645 2.057 2.494 3.466 4.6 3.506A9.725 9.725 0 0 1 0 17.732a13.688 13.688 0 0 0 7.548 2.264",fill:"currentColor",fillRule:"nonzero"})),(0,s.tZ)(T,null,"Hear about KeystoneJS on Twitter")),k=t=>(0,s.tZ)(_,t,(0,s.tZ)("svg",{viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"},(0,s.tZ)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),(0,s.tZ)(T,null,"KeystoneJS repository on GitHub")),T=(0,s.yV)(((t,e)=>{let{as:r="span"}=t,n=(0,w.Z)(t,A);return(0,s.tZ)(r,(0,v.Z)({ref:e,css:{border:0,clip:"rect(1px, 1px, 1px, 1px)",height:1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:1}},n))})),O=t=>{let{value:e}=t;const[r,o]=(0,n.useState)(!1),[u,c]=(0,n.useState)((t=>{for(const e of x)if(t[e]&&"string"===typeof t[e].value)return t[e].value})(e)),[d,h]=(0,n.useState)(null),[f,y]=(0,n.useState)(!1),g=(0,p.tv)(),m=(0,Z.u)();return(0,s.tZ)(s.Kq,{gap:"large"},(0,s.tZ)(s.Kq,{gap:"small",align:"center",across:!0,css:{width:"100%",justifyContent:"space-between"}},(0,s.tZ)(s.H1,null,"Welcome"),(0,s.tZ)(s.Kq,{across:!0,gap:"small"},(0,s.tZ)(S,{title:"Twitter Logo"}),(0,s.tZ)(k,{href:"https://github.com/keystonejs/keystone",target:"_blank",title:"Github"}))),(0,s.tZ)("p",{css:{margin:0}},"Thanks for installing KeystoneJS. While you're getting started, check out the docs at"," ",(0,s.tZ)("a",{href:"https://keystonejs.com"},"keystonejs.com")),(0,s.tZ)("div",null,"If you'd like to stay up to date with the exciting things we have planned, join our mailing list (just useful announcements, no spam!)"),(0,s.tZ)("div",null,(0,s.tZ)(l.XZ,{checked:r,onChange:()=>{h(null),o(!r)}},"sign up to our mailing list")),(0,s.tZ)("form",{onSubmit:t=>(t.preventDefault(),h(null),r?(y(!0),(t=>/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t))(u)?i()("https://signup.keystonejs.cloud/api/newsletter-signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.username,email:u,source:"@keystone-6/auth InitPage"})}).then((t=>{200!==t.status?t.json().then((t=>{let{error:e}=t;h(e),y(!1)})):g.push(m)})).catch((t=>{h(t.toString()),y(!1)})):(y(!1),void h("Email is invalid"))):g.push(m))},(0,s.tZ)(s.TX,{as:"label",htmlFor:"email-field"},"Email Address"),(0,s.tZ)(l.oi,{id:"email-field",disabled:!r,autoFocus:!0,placeholder:"Email",value:u,onChange:t=>c(t.target.value)}),(0,s.tZ)("p",{css:{color:"red"}},d),(0,s.tZ)(s.gF,{gap:"medium",align:"center"},(0,s.tZ)(a.zx,{isLoading:f,type:"submit",weight:"bold",tone:"active"},d?"Try again":"Continue"),d&&(0,s.tZ)(a.zx,{as:p.rU,href:"/",tone:"active"},"Continue"))))},j=t=>{var e;let{fieldPaths:r,listKey:o,enableWelcome:i}=t;const{adminMeta:l}=(0,u.jf)(),c=(0,n.useMemo)((()=>{const t={};return r.forEach((e=>{t[e]=l.lists[o].fields[e]})),t}),[r,l.lists,o]),[v,w]=(0,n.useState)((()=>{let t={};return Object.keys(c).forEach((e=>{t[e]={kind:"value",value:c[e].controller.defaultValue}})),t})),x=(0,b.a)(c,v),[E,A]=(0,n.useState)(!1),[_,S]=(0,n.useState)("init"),[k,{loading:T,error:j,data:B}]=(0,h.D)(f.Ps`mutation($data: CreateInitial${o}Input!) {
    authenticate: createInitial${o}(data: $data) {
      ... on ${o}AuthenticationWithPasswordSuccess {
        item {
          id
        }
      }
    }
  }`),C=(0,u.Mz)(),R=(0,p.tv)(),P=(0,Z.u)(),D=(0,u.gS)();return(0,n.useEffect)((()=>{"authenticated"===D.authenticatedItem.state&&(i?S("welcome"):R.push(P))}),[D.authenticatedItem,i,R,P]),"authenticated"!==D.authenticatedItem.state||i?"init"===_?(0,s.tZ)(Z.S,{title:"Welcome to KeystoneJS"},(0,s.tZ)(s.H1,null,"Welcome to KeystoneJS"),(0,s.tZ)("p",null,"Create your first user to get started"),(0,s.tZ)("form",{onSubmit:t=>{t.preventDefault();const e=0!==x.size;if(A(e),e)return;const r={},n=(0,b.s)(c,v);Object.keys(n).forEach((t=>{const{controller:e}=c[t],o=n[t];d()(o,e.serialize(e.defaultValue))||Object.assign(r,o)})),k({variables:{data:r}}).then((()=>{C()})).catch((()=>{}))}},(0,s.tZ)(s.Kq,{gap:"large"},j&&(0,s.tZ)(y.G,{errors:null===j||void 0===j?void 0:j.graphQLErrors,networkError:null===j||void 0===j?void 0:j.networkError}),(0,s.tZ)(m.F,{fields:c,fieldModes:null,forceValidation:E,invalidFields:x,onChange:w,value:v}),(0,s.tZ)(a.zx,{isLoading:T||(null===B||void 0===B||null===(e=B.authenticate)||void 0===e?void 0:e.__typename)===`${o}AuthenticationWithPasswordSuccess`,type:"submit",weight:"bold",tone:"active"},"Get started")))):(0,s.tZ)(Z.S,null,(0,s.tZ)(O,{value:v})):(0,s.tZ)(s.M5,{fillView:!0},(0,s.tZ)(g.xg,{label:"Loading page",size:"large"}))};var B,C=(B={listKey:"User",fieldPaths:["name","email","password"],enableWelcome:!0},()=>(0,s.tZ)(j,B))}},function(t){t.O(0,[888,774,179],(function(){return e=7784,t(t.s=e);var e}));var e=t.O();_N_E=e}]);