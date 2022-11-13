(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{7089:function(t,e,n){"use strict";n.d(e,{S:function(){return s},u:function(){return u}});var i=n(5445),a=n(2784),r=n(1511);const s=t=>{let{children:e,title:n}=t;const{colors:a,shadow:r}=(0,i.Fg)();return(0,i.tZ)("div",null,(0,i.tZ)("head",null,(0,i.tZ)("title",null,n||"Keystone")),(0,i.tZ)(i.M5,{css:{minWidth:"100vw",minHeight:"100vh",backgroundColor:a.backgroundMuted},rounding:"medium"},(0,i.tZ)(i.xu,{css:{background:a.background,width:600,boxShadow:r.s100},margin:"medium",padding:"xlarge",rounding:"medium"},e)))},u=()=>{const t=(0,r.tv)();return(0,a.useMemo)((()=>{var e;return!Array.isArray(t.query.from)&&null!==(e=t.query.from)&&void 0!==e&&e.startsWith("/")?t.query.from:"/"}),[t])}},4176:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(6119)}])},6119:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var i=n(3028),a=n(2784),r=n(5445),s=n(5631),u=n(2445),o=n(3900),d=n(81),l=n(3379),c=n(9575),g=n(1511),m=n(6759),h=n(7089);const v=t=>{var e,n;let{identityField:v,secretField:p,mutationName:y,successTypename:f,failureTypename:Z}=t;const w=d.Ps`
    mutation($identity: String!, $secret: String!) {
      authenticate: ${y}(${v}: $identity, ${p}: $secret) {
        ... on ${f} {
          item {
            id
          }
        }
        ... on ${Z} {
          message
        }
      }
    }
  `,[_,b]=(0,a.useState)("signin"),[S,k]=(0,a.useState)({identity:"",secret:""}),q=(0,a.useRef)(null);(0,a.useEffect)((()=>{var t;null===(t=q.current)||void 0===t||t.focus()}),[_]);const[E,{error:F,loading:$,data:x}]=(0,l.D)(w),T=(0,c.Mz)(),N=(0,g.tv)(),C=(0,c.gS)(),I=(0,h.u)();return(0,a.useEffect)((()=>{"authenticated"===C.authenticatedItem.state&&N.push(I)}),[C.authenticatedItem,N,I]),"authenticated"===C.authenticatedItem.state?(0,r.tZ)(r.M5,{fillView:!0},(0,r.tZ)(m.xg,{label:"Loading page",size:"large"})):(0,r.tZ)(h.S,{title:"Keystone - Sign In"},(0,r.tZ)(r.Kq,{gap:"xlarge",as:"form",onSubmit:async t=>{if(t.preventDefault(),"signin"===_){try{var e;if((null===(e=(await E({variables:{identity:S.identity,secret:S.secret}})).data.authenticate)||void 0===e?void 0:e.__typename)!==f)return}catch(n){return}T(),N.push(I)}}},(0,r.tZ)(r.H1,null,"Sign In"),F&&(0,r.tZ)(o.qX,{title:"Error",tone:"negative"},F.message),(null===x||void 0===x||null===(e=x.authenticate)||void 0===e?void 0:e.__typename)===Z&&(0,r.tZ)(o.qX,{title:"Error",tone:"negative"},null===x||void 0===x?void 0:x.authenticate.message),(0,r.tZ)(r.Kq,{gap:"medium"},(0,r.tZ)(r.TX,{as:"label",htmlFor:"identity"},v),(0,r.tZ)(u.oi,{id:"identity",name:"identity",value:S.identity,onChange:t=>k((0,i.Z)((0,i.Z)({},S),{},{identity:t.target.value})),placeholder:v,ref:q}),"signin"===_&&(0,r.tZ)(a.Fragment,null,(0,r.tZ)(r.TX,{as:"label",htmlFor:"password"},p),(0,r.tZ)(u.oi,{id:"password",name:"password",value:S.secret,onChange:t=>k((0,i.Z)((0,i.Z)({},S),{},{secret:t.target.value})),placeholder:p,type:"password"}))),"forgot password"===_?(0,r.tZ)(r.Kq,{gap:"medium",across:!0},(0,r.tZ)(s.zx,{type:"submit",weight:"bold",tone:"active"},"Log reset link"),(0,r.tZ)(s.zx,{weight:"none",tone:"active",onClick:()=>b("signin")},"Go back")):(0,r.tZ)(r.Kq,{gap:"medium",across:!0},(0,r.tZ)(s.zx,{weight:"bold",tone:"active",isLoading:$||(null===x||void 0===x||null===(n=x.authenticate)||void 0===n?void 0:n.__typename)===f,type:"submit"},"Sign In"))))};var p,y=(p={identityField:"email",secretField:"password",mutationName:"authenticateUserWithPassword",successTypename:"UserAuthenticationWithPasswordSuccess",failureTypename:"UserAuthenticationWithPasswordFailure"},()=>(0,r.tZ)(v,p))}},function(t){t.O(0,[888,774,179],(function(){return e=4176,t(t.s=e);var e}));var e=t.O();_N_E=e}]);