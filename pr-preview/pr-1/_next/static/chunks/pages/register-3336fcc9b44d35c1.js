(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{54722:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(20761)}])},46723:function(e,r,n){"use strict";n.d(r,{s:function(){return a}});var s=n(67294),a=function(){var e=(0,s.useRef)(!1);return(0,s.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,s.useCallback)((function(){return e.current}),[])}},20761:function(e,r,n){"use strict";n.r(r),n.d(r,{AmplifyRegister:function(){return E}});var s=n(47568),a=n(26042),i=n(69396),l=n(20414),o=n(85893),t=n(11163),c=n(74231),u=n(82580),d=n(67836),h=n(30120),m=n(75158),x=n(29630),f=n(68346),p=n(32631),g=n(54225),j=n(36336),v=n(49837),y=n(44373),b=n(89731),Z=n(46723),w=n(9008),C=n.n(w),_=n(41664),S=n.n(_),B=n(37510),k=n(86501),E=function(e){var r=(0,Z.s)(),n=(0,t.useRouter)(),j=(0,b.a)().register,v=(0,u.TA)({initialValues:{email:"",password:"",policy:!0,name:"",provider:"",submit:null},validationSchema:c.Ry({email:c.Z_().email("Must be a valid email").max(255).required("Email is required"),password:c.Z_().min(7).max(255).required("Password is required"),policy:c.O7().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=(0,s.Z)((function(e,s){var a;return(0,l.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,j(e.email,e.password)];case 1:return i.sent(),localStorage.setItem("userInfo",JSON.stringify({email:e.email,password:e.password,name:e.name,provider:e.provider})),console.log("localstorage save userinfo",localStorage.getItem("userInfo")),r()&&n.push("/verify-code").catch(console.error),[3,3];case 2:return a=i.sent(),console.error(a),k.ZP.error(a.message),r()&&(s.setStatus({success:!1}),s.setErrors({submit:a.message}),s.setSubmitting(!1)),[3,3];case 3:return[2]}}))}));return function(r,n){return e.apply(this,arguments)}}()});return(0,o.jsxs)("form",(0,i.Z)((0,a.Z)({noValidate:!0,onSubmit:v.handleSubmit},e),{children:[(0,o.jsx)(d.Z,{error:Boolean(v.touched.email&&v.errors.email),fullWidth:!0,label:"Email Address",margin:"normal",name:"email",onBlur:v.handleBlur,onChange:v.handleChange,type:"email",value:v.values.email}),(0,o.jsx)(d.Z,{error:Boolean(v.touched.password&&v.errors.password),fullWidth:!0,label:"Password",margin:"normal",name:"password",onBlur:v.handleBlur,onChange:v.handleChange,type:"password",value:v.values.password}),(0,o.jsx)(d.Z,{error:Boolean(v.touched.email&&v.errors.email),fullWidth:!0,label:"Name",margin:"normal",name:"name",onBlur:v.handleBlur,onChange:v.handleChange,value:v.values.name}),(0,o.jsx)(d.Z,{error:Boolean(v.touched.email&&v.errors.email),fullWidth:!0,label:"Company Name",margin:"normal",name:"provider",onBlur:v.handleBlur,onChange:v.handleChange,value:v.values.provider}),(0,o.jsxs)(h.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,o.jsx)(m.Z,{checked:v.values.policy,name:"policy",onChange:v.handleChange}),(0,o.jsxs)(x.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,o.jsx)(f.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(v.touched.policy&&v.errors.policy)&&(0,o.jsx)(p.Z,{error:!0,children:(0,o.jsx)(o.Fragment,{children:v.errors.policy})}),v.errors.submit&&(0,o.jsx)(h.Z,{sx:{mt:3},children:(0,o.jsx)(p.Z,{error:!0,children:(0,o.jsx)(o.Fragment,{children:v.errors.submit})})}),(0,o.jsx)(h.Z,{sx:{mt:2},children:(0,o.jsx)(g.Z,{disabled:v.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))};r.default=function(){var e=(0,t.useRouter)().query.disableGuard;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C(),{children:(0,o.jsx)("title",{children:"Register | SortLog "})}),(0,o.jsx)(h.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"row",minHeight:"100vh"},children:(0,o.jsxs)(j.Z,{sx:{py:{xs:"60px",md:"120px"},display:"flex",flexDirection:"row"},children:[(0,o.jsxs)(v.Z,{square:!0,sx:{p:4},children:[(0,o.jsxs)(h.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,o.jsx)(S(),{href:"/",passHref:!0,children:(0,o.jsx)("a",{children:(0,o.jsx)(B.T,{sx:{height:40,width:40}})})}),(0,o.jsx)(x.Z,{variant:"h4",children:"Register"}),(0,o.jsx)(x.Z,{color:"textSecondary",component:"p",sx:{mb:2},children:"Register on the internal platform"})]}),(0,o.jsx)(h.Z,{sx:{flexGrow:1,mt:3},children:(0,o.jsx)(E,{})}),(0,o.jsx)(y.Z,{sx:{my:3}}),(0,o.jsx)("div",{children:(0,o.jsx)(S(),{href:e?"./login?disableGuard=".concat(e):"./login",passHref:!0,children:(0,o.jsx)(f.Z,{color:"textSecondary",variant:"body2",children:"Having an account"})})})]}),(0,o.jsx)(v.Z,{square:!0,sx:{display:"flex",backgroundColor:"#f6f8f9"},children:(0,o.jsx)(h.Z,{sx:{my:4,mx:4,Height:"100%",display:"flex"},children:(0,o.jsx)("img",{src:"./png/logo-no-background.png",alt:"logo",style:{width:"100%",minWidth:"200px",objectFit:"contain"}})})})]})})]})}}},function(e){e.O(0,[429,161,70,510,774,888,179],(function(){return r=54722,e(e.s=r);var r}));var r=e.O();_N_E=r}]);