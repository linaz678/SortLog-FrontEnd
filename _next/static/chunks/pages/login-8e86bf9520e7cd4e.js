(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{83236:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(13739)}])},13739:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return S}});var t=r(47568),s=r(20414),o=r(85893),i=r(67836),a=r(30120),l=r(36336),c=r(49837),u=r(29630),d=r(54225),x=r(68346),h=r(81719),f=r(81872),g=r(67294),m=function(e){var n=(0,g.useState)(e),r=n[0],t=n[1];return{value:r,setValue:t,reset:function(){return t("")},bind:{value:r,onChange:function(e){t(e.target.value)},required:!0}}},p=r(11163),j=r(89731),y=r(86501),b=r(22469),v=r(41664),Z=r.n(v),w=r(37510),C=r(9008),_=r.n(C),k=(0,h.ZP)(i.Z)({borderRadius:"5px",background:"transparent"}),S=function(){var e=m(""),n=e.value,r=e.bind,i=m(""),h=i.value,g=i.bind,v=(0,p.useRouter)(),C=(0,j.a)().login,S=function(){var e=(0,t.Z)((function(e){var r,t,o;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:e.preventDefault(),s.label=1;case 1:return s.trys.push([1,4,,5]),[4,C(n,h)];case 2:return r=s.sent(),console.log(r),[4,(0,b.CX)(r.username)];case 3:return t=s.sent(),console.log("mong"+t),localStorage.setItem("userInfo",JSON.stringify(t.data)),localStorage.setItem("currentUser",JSON.stringify(t.data)),localStorage.setItem("token",r.signInUserSession.idToken.jwtToken),localStorage.setItem("cognitoUser",r),v.push("/dashboard"),y.ZP.success(r.username+" logged in successfully"),[3,5];case 4:return o=s.sent(),console.log(o),y.ZP.error(o.message),[3,5];case 5:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_(),{children:(0,o.jsx)("title",{children:"Login | SortLog "})}),(0,o.jsx)(a.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"row",minHeight:"100vh"},children:(0,o.jsxs)(l.Z,{sx:{py:{xs:"60px",md:"120px"},display:"flex",flexDirection:"row"},children:[(0,o.jsxs)(c.Z,{square:!0,sx:{p:8},children:[(0,o.jsxs)(a.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,o.jsx)(Z(),{href:"/",passHref:!0,children:(0,o.jsx)("a",{children:(0,o.jsx)(w.T,{sx:{height:40,width:40}})})}),(0,o.jsx)(u.Z,{variant:"h4",children:"Welcome Back!"}),(0,o.jsx)(u.Z,{color:"textSecondary",component:"p",sx:{mb:2},children:"Log in to your account."})]}),(0,o.jsx)(a.Z,{sx:{flexGrow:1,mt:3},children:(0,o.jsxs)(a.Z,{component:"form",noValidate:!0,onSubmit:S,sx:{mt:2},children:[(0,o.jsx)(k,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"text",autoFocus:!0,onChange:function(e){return r.onChange(e)}}),(0,o.jsx)(k,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return g.onChange(e)}}),(0,o.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"neutral.200",color:"text.primary"},children:"Continue"}),(0,o.jsxs)(a.Z,{display:"flex",sx:{alignItems:"center","& hr":{flexBasis:"45%",height:1,bgcolor:"divider"}},children:[(0,o.jsx)("hr",{}),(0,o.jsx)(u.Z,{component:"span",sx:{color:"text.secondary"},children:"OR"}),(0,o.jsx)("hr",{})]})]})}),(0,o.jsxs)(d.Z,{type:"submit",fullWidth:!0,variant:"outlined",sx:{mt:3,mb:2,bgcolor:"background.default",color:"text.primary",display:"flex",borderColor:"neutral.300"},children:[(0,o.jsx)(f.JM8,{fontSize:22,style:{justifySelf:"flex-start"}}),(0,o.jsx)(u.Z,{component:"p",sx:{margin:"0 auto"},children:"Sign in via Google"})]}),(0,o.jsx)(a.Z,{display:"flex",justifyContent:"center",children:(0,o.jsxs)(u.Z,{children:["New here?\xa0",(0,o.jsx)(x.Z,{href:"./register",variant:"body2",color:"info.main",children:"Create an account"})]})})]}),(0,o.jsx)(c.Z,{square:!0,sx:{display:"flex",backgroundColor:"#f6f8f9"},children:(0,o.jsx)(a.Z,{sx:{my:4,ml:12,Height:"100%",display:"flex"},children:(0,o.jsx)("img",{src:"./png/logo-no-background.png",alt:"logo",style:{width:"80%",minWidth:"200px",objectFit:"contain"}})})})]})})]})}},22469:function(e,n,r){"use strict";r.d(n,{CX:function(){return s},_W:function(){return o}});var t=r(21744),s=function(e){return(0,t.h)("/users/email/".concat(e),{method:"GET"})},o=function(e,n){return(0,t.h)("/users/".concat(e),{method:"PUT",data:n})}}},function(e){e.O(0,[994,9429,3218,7510,9774,2888,179],(function(){return n=83236,e(e.s=n);var n}));var n=e.O();_N_E=n}]);