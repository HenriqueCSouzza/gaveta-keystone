(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{3241:function(t,e,n){"use strict";n.d(e,{G:function(){return f}});var r=n(5445),i=n(6759),o=n(5631),l=n(5632),a=n(5118),s=(n(7268),n(2784),n(9378),n(8799)),c=n(9575),d=(n(9097),n(7595),n(487),n(891),n(5273),n(444),n(8999),n(5177)),u=n(5852),g=n(7162);n(1511),n(5364),n(6765),n(4002),n(7132),n(7668),n(1168),n(5976),n(581),n(9403),n(3900);function p(t){var e,n;const i=(0,d.u)(t.list),s=(0,l.useRouter)();return(0,r.tZ)(r.xu,{paddingTop:"xlarge"},i.error&&(0,r.tZ)(u.G,{networkError:null===(e=i.error)||void 0===e?void 0:e.networkError,errors:null===(n=i.error)||void 0===n?void 0:n.graphQLErrors}),(0,r.tZ)("form",{onSubmit:async e=>{e.preventDefault();const n=await i.create();n&&s.push(`/${t.list.path}/${n.id}`)}},(0,r.tZ)(a.F,i.props),(0,r.tZ)(g.B,null,(0,r.tZ)(o.zx,{isLoading:"loading"===i.state,type:"submit",weight:"bold",tone:"active"},"Create ",t.list.singular))))}const f=t=>()=>(0,r.tZ)(m,t);function m(t){const e=(0,c.sm)(t.listKey),{createViewFieldModes:n}=(0,c.jf)();return(0,r.tZ)(s.P,{title:`Create ${e.singular}`,header:(0,r.tZ)(g.I,{list:e,label:"Create"})},(0,r.tZ)(g.C,null,(0,r.tZ)(r.xu,null,"error"===n.state&&(0,r.tZ)(u.G,{networkError:n.error instanceof Error?n.error:void 0,errors:n.error instanceof Error?void 0:n.error}),"loading"===n.state&&(0,r.tZ)(i.xg,{label:"Loading create form"}),(0,r.tZ)(p,{list:e}))))}},8799:function(t,e,n){"use strict";n.d(e,{H:function(){return v},P:function(){return k}});var r=n(7896),i=n(5445),o=n(2784),l=n(5632),a=(n(5631),n(487),n(891),n(5273),n(9575)),s=n(1511),c=n(444),d=n(9097),u=n.n(d);const g=()=>{var t;const{spacing:e}=(0,i.Fg)(),{adminConfig:n}=(0,a.jf)();return null!==(t=n.components)&&void 0!==t&&t.Logo?(0,i.tZ)(n.components.Logo,null):(0,i.tZ)(i.H3,null,(0,i.tZ)(u(),{href:"/",passHref:!0},(0,i.tZ)("a",{css:{backgroundImage:"linear-gradient(to right, #0ea5e9, #6366f1)",backgroundClip:"text",lineHeight:"1.75rem",color:"transparent",verticalAlign:"middle",transition:"color 0.3s ease",textDecoration:"none"}},(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220 220",css:{display:"inline-block",width:"2rem",height:"2rem",margin:`0  ${e.medium}px ${e.xsmall}px 0`,verticalAlign:"middle"}},(0,i.tZ)("defs",null,(0,i.tZ)("linearGradient",{id:"logo-a",x1:"0%",x2:"50%",y1:"0%",y2:"71.9%"},(0,i.tZ)("stop",{offset:"0%",stopColor:"#5AE8FA"}),(0,i.tZ)("stop",{offset:"100%",stopColor:"#2684FF"}))),(0,i.tZ)("path",{fill:"url(#logo-a)",fillRule:"evenodd",d:"M290.1 47h117.5c17.8 0 24.3 1.9 30.8 5.3a36.3 36.3 0 0115.1 15.2c3.5 6.5 5.4 13 5.4 30.8v117.4c0 17.9-1.9 24.3-5.4 30.8a36.3 36.3 0 01-15.1 15.2c-6.5 3.4-13 5.3-30.8 5.3H290c-17.8 0-24.3-1.9-30.8-5.3a36.3 36.3 0 01-15.1-15.2c-3.5-6.5-5.3-13-5.3-30.8V98.3c0-17.9 1.8-24.3 5.3-30.8a36.3 36.3 0 0115.1-15.2c6.5-3.4 13-5.3 30.8-5.3zm11.8 56.8V218H327v-36.8l14.4-14.6 34.4 51.4h31.5l-49-69.1 44.7-45.1h-31.3L327 151v-47.3H302z",transform:"translate(-238.9 -47)"})),"Keystone 6")))},p=t=>{let{href:e,children:n,isSelected:r}=t;const{colors:o,palette:a,spacing:c,radii:d,typography:u}=(0,i.Fg)(),g=(0,l.useRouter)(),p=void 0!==r?r:g.pathname===e;return(0,i.tZ)("li",null,(0,i.tZ)(s.rU,{"aria-current":!!p&&"location",href:e,css:{background:"transparent",borderBottomRightRadius:d.xsmall,borderTopRightRadius:d.xsmall,color:a.neutral700,display:"block",fontWeight:u.fontWeight.medium,marginBottom:c.xsmall,marginRight:c.xlarge,padding:`${c.small}px ${c.xlarge}px`,position:"relative",textDecoration:"none",":hover":{background:o.backgroundHover,color:o.linkHoverColor},"&[aria-current=location]":{background:a.neutral200,color:a.neutral900}}},n))},f=t=>{let{item:e}=t;const{apiPath:n}=(0,a.jf)(),{spacing:r,typography:o}=(0,i.Fg)();return(0,i.tZ)("div",{css:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:r.xlarge,marginBottom:0}},!(!e||"authenticated"!==e.state)&&(0,i.tZ)("div",{css:{fontSize:o.fontSize.small}},"Signed in as ",(0,i.tZ)("strong",{css:{display:"block"}},e.label)),e&&"authenticated"===e.state&&(0,i.tZ)(c.S,null))},m=t=>{let{authenticatedItem:e,children:n}=t;const{spacing:r}=(0,i.Fg)();return(0,i.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"}},(0,i.tZ)(f,{item:e}),(0,i.tZ)("nav",{role:"navigation","aria-label":"Side Navigation",css:{marginTop:r.xlarge}},(0,i.tZ)("ul",{css:{padding:0,margin:0,li:{listStyle:"none"}}},n)))},h=t=>{let{list:e}=t;const n=(0,l.useRouter)();return(0,i.tZ)(p,{isSelected:n.pathname.split("/")[1]===`/${e.path}`.split("/")[1],href:`/${e.path}${e.isSingleton?"/1":""}`},e.label)},Z=t=>{let{lists:e=[],include:n=[]}=t;const r=n.length>0?e.filter((t=>n.includes(t.key))):e;return(0,i.tZ)(o.Fragment,null,r.map((t=>(0,i.tZ)(h,{key:t.key,list:t}))))},x=()=>{var t;const{adminMeta:{lists:e},adminConfig:n,authenticatedItem:r,visibleLists:o}=(0,a.jf)();if("loading"===o.state)return null;if("error"===o.state)return(0,i.tZ)(i.xv,{as:"span",paddingLeft:"xlarge",css:{color:"red"}},o.error instanceof Error?o.error.message:o.error[0].message);const l=Object.keys(e).map((t=>o.lists.has(t)?e[t]:null)).filter((t=>Boolean(t)));return null!==n&&void 0!==n&&null!==(t=n.components)&&void 0!==t&&t.Navigation?(0,i.tZ)(n.components.Navigation,{authenticatedItem:r,lists:l}):(0,i.tZ)(m,{authenticatedItem:r},(0,i.tZ)(p,{href:"/"},"Dashboard"),(0,i.tZ)(Z,{lists:l}))},v=80,b=t=>(0,i.tZ)(o.Fragment,null,(0,i.tZ)("style",null,"body { overflow: hidden; }"),(0,i.tZ)("div",(0,r.Z)({css:{display:"grid",gridTemplateColumns:"minmax(300px, 1fr) 4fr",gridTemplateRows:`${v}px auto`,height:"100vh",isolation:"isolate"}},t))),y=t=>(0,i.tZ)("aside",(0,r.Z)({css:{minWidth:0,overflowY:"auto",WebkitOverflowScrolling:"touch"}},t)),w=t=>{const{colors:e,spacing:n}=(0,i.Fg)();return(0,i.tZ)("main",(0,r.Z)({css:{backgroundColor:e.background,boxSizing:"border-box",minWidth:0,paddingLeft:n.xlarge,paddingRight:n.xlarge,overflowY:"auto",WebkitOverflowScrolling:"touch",position:"relative"}},t))},k=t=>{let{children:e,header:n,title:r}=t;const{colors:o,spacing:l}=(0,i.Fg)();return(0,i.tZ)(b,null,(0,i.tZ)("div",{css:{alignItems:"center",borderBottom:`1px solid ${o.border}`,display:"flex",justifyContent:"space-between",paddingLeft:l.xlarge,paddingRight:l.xlarge}},(0,i.tZ)(g,null)),(0,i.tZ)("header",{css:{alignItems:"center",backgroundColor:o.background,borderBottom:`1px solid ${o.border}`,display:"flex",justifyContent:"space-between",minWidth:0,paddingLeft:l.xlarge,paddingRight:l.xlarge}},(0,i.tZ)("title",null,r?`Keystone - ${r}`:"Keystone"),n),(0,i.tZ)(y,null,(0,i.tZ)(x,null)),(0,i.tZ)(w,null,e))}},7162:function(t,e,n){"use strict";n.d(e,{B:function(){return p},C:function(){return g},I:function(){return u}});var r=n(7896),i=n(5445),o=n(5273),l=n(2784),a=n(9740),s=n(1511);const c=["children"],d=t=>{let{children:e}=t,n=(0,a.Z)(t,c);return(0,i.tZ)("div",(0,r.Z)({css:{minWidth:0,maxWidth:1080}},n),e)};function u(t){const{palette:e,spacing:n}=(0,i.Fg)();return(0,i.tZ)(d,{css:{alignItems:"center",display:"flex",flex:1,justifyContent:"space-between"}},(0,i.tZ)("div",{css:{alignItems:"center",display:"flex",flex:1,minWidth:0}},t.list.isSingleton?(0,i.tZ)(i.X6,{type:"h3"},t.list.label):(0,i.tZ)(l.Fragment,null,(0,i.tZ)(i.X6,{type:"h3"},(0,i.tZ)(s.rU,{href:`/${t.list.path}`,css:{textDecoration:"none"}},t.list.label)),(0,i.tZ)("div",{css:{color:e.neutral500,marginLeft:n.xsmall,marginRight:n.xsmall}},(0,i.tZ)(o.X,null)),(0,i.tZ)(i.X6,{as:"h1",type:"h3",css:{minWidth:0,maxWidth:"100%",overflow:"hidden",flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.label))))}function g(t){const{spacing:e}=(0,i.Fg)();return(0,i.tZ)(d,{css:{position:"relative",height:"100%"}},(0,i.tZ)("div",(0,r.Z)({css:{alignItems:"start",display:"grid",gap:e.xlarge,gridTemplateColumns:"2fr 1fr"}},t)))}function p(t){const{colors:e,spacing:n}=(0,i.Fg)();return(0,i.tZ)("div",{css:{background:e.background,borderTop:`1px solid ${e.border}`,bottom:0,display:"flex",justifyContent:"space-between",marginTop:n.xlarge,paddingBottom:n.xlarge,paddingTop:n.xlarge,position:"sticky",zIndex:20}},t.children)}},4696:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/create",function(){return n(5889)}])},5889:function(t,e,n){"use strict";n.r(e);var r=n(3241);e.default=(0,r.G)({listKey:"Project"})}},function(t){t.O(0,[888,774,179],(function(){return e=4696,t(t.s=e);var e}));var e=t.O();_N_E=e}]);