(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9704],{90244:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(63366),n=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(21109),c=r(78884),d=r(81719),p=r(1588),u=r(34867);function h(e){return(0,u.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);var g=r(85893);const Z=["className","component","padding","size","stickyHeader"],m=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),v="table";var x=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:p=v,padding:u="normal",size:x="medium",stickyHeader:y=!1}=r,f=(0,a.Z)(r,Z),b=(0,n.Z)({},r,{component:p,padding:u,size:x,stickyHeader:y}),j=(e=>{const{classes:t,stickyHeader:r}=e,a={root:["root",r&&"stickyHeader"]};return(0,s.Z)(a,h,t)})(b),w=o.useMemo((()=>({padding:u,size:x,stickyHeader:y})),[u,x,y]);return(0,g.jsx)(l.Z.Provider,{value:w,children:(0,g.jsx)(m,(0,n.Z)({as:p,role:p===v?null:"table",ref:t,className:(0,i.Z)(j.root,d),ownerState:b},f))})}))},21109:function(e,t,r){"use strict";const a=r(67294).createContext();t.Z=a},80858:function(e,t,r){"use strict";const a=r(67294).createContext();t.Z=a},39807:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(87462),n=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(80858),c=r(78884),d=r(81719),p=r(1588),u=r(34867);function h(e){return(0,u.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);var g=r(85893);const Z=["className","component"],m=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),v={variant:"body"},x="tbody";var y=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:o,component:d=x}=r,p=(0,n.Z)(r,Z),u=(0,a.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)})(u);return(0,g.jsx)(l.Z.Provider,{value:v,children:(0,g.jsx)(m,(0,a.Z)({className:(0,i.Z)(y.root,o),as:d,ref:t,role:d===x?null:"rowgroup",ownerState:u},p))})}))},5605:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(63366),n=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(36622),d=r(21109),p=r(80858),u=r(78884),h=r(81719),g=r(1588),Z=r(34867);function m(e){return(0,Z.Z)("MuiTableCell",e)}var v=(0,g.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),x=r(85893);const y=["align","className","component","padding","scope","size","sortDirection","variant"],f=(0,h.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,c.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${v.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})));var b=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:h,component:g,padding:Z,scope:v,size:b,sortDirection:j,variant:w}=r,T=(0,a.Z)(r,y),k=o.useContext(d.Z),M=o.useContext(p.Z),N=M&&"head"===M.variant;let C;C=g||(N?"th":"td");let R=v;!R&&N&&(R="col");const H=w||M&&M.variant,B=(0,n.Z)({},r,{align:l,component:C,padding:Z||(k&&k.padding?k.padding:"normal"),size:b||(k&&k.size?k.size:"medium"),sortDirection:j,stickyHeader:"head"===H&&k&&k.stickyHeader,variant:H}),S=(e=>{const{classes:t,variant:r,align:a,padding:n,size:o,stickyHeader:i}=e,l={root:["root",r,i&&"stickyHeader","inherit"!==a&&`align${(0,c.Z)(a)}`,"normal"!==n&&`padding${(0,c.Z)(n)}`,`size${(0,c.Z)(o)}`]};return(0,s.Z)(l,m,t)})(B);let P=null;return j&&(P="asc"===j?"ascending":"descending"),(0,x.jsx)(f,(0,n.Z)({as:C,ref:t,className:(0,i.Z)(S.root,h),"aria-sort":P,scope:R,ownerState:B},T))}))},93978:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(87462),n=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(80858),c=r(78884),d=r(81719),p=r(1588),u=r(34867);function h(e){return(0,u.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);var g=r(85893);const Z=["className","component"],m=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),v={variant:"head"},x="thead";var y=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:o,component:d=x}=r,p=(0,n.Z)(r,Z),u=(0,a.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)})(u);return(0,g.jsx)(l.Z.Provider,{value:v,children:(0,g.jsx)(m,(0,a.Z)({as:d,className:(0,i.Z)(y.root,o),ref:t,role:d===x?null:"rowgroup",ownerState:u},p))})}))},69417:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(87462),n=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(80858),d=r(78884),p=r(81719),u=r(1588),h=r(34867);function g(e){return(0,h.Z)("MuiTableRow",e)}var Z=(0,u.Z)("MuiTableRow",["root","selected","hover","head","footer"]),m=r(85893);const v=["className","component","hover","selected"],x=(0,p.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Z.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),y="tr";var f=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:l,component:p=y,hover:u=!1,selected:h=!1}=r,Z=(0,n.Z)(r,v),f=o.useContext(c.Z),b=(0,a.Z)({},r,{component:p,hover:u,selected:h,head:f&&"head"===f.variant,footer:f&&"footer"===f.variant}),j=(e=>{const{classes:t,selected:r,hover:a,head:n,footer:o}=e,i={root:["root",r&&"selected",a&&"hover",n&&"head",o&&"footer"]};return(0,s.Z)(i,g,t)})(b);return(0,m.jsx)(x,(0,a.Z)({as:p,ref:t,className:(0,i.Z)(j.root,l),role:p===y?null:"row",ownerState:b},Z))}))},29630:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(63366),n=r(87462),o=r(67294),i=r(86010),s=r(39707),l=r(94780),c=r(81719),d=r(78884),p=r(36622),u=r(1588),h=r(34867);function g(e){return(0,h.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var Z=r(85893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var f=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(r.color),c=(0,s.Z)((0,n.Z)({},r,{color:o})),{align:u="inherit",className:h,component:f,gutterBottom:b=!1,noWrap:j=!1,paragraph:w=!1,variant:T="body1",variantMapping:k=x}=c,M=(0,a.Z)(c,m),N=(0,n.Z)({},c,{align:u,color:o,className:h,component:f,gutterBottom:b,noWrap:j,paragraph:w,variant:T,variantMapping:k}),C=f||(w?"p":k[T]||x[T])||"span",R=(e=>{const{align:t,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,g,i)})(N);return(0,Z.jsx)(v,(0,n.Z)({as:C,ref:t,ownerState:N,className:(0,i.Z)(R.root,h)},M))}))},29581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/history/history-preview",function(){return r(90492)}])},90492:function(e,t,r){"use strict";r.r(t);var a=r(26042),n=r(69396),o=r(99534),i=r(85893),s=r(17961),l=r(92077),c=r.n(l),d=r(70918),p=r(30120),u=r(79072),h=r(29630),g=r(90244),Z=r(93978),m=r(69417),v=r(5605),x=r(39807);t.default=function(e){var t=e.history,r=(0,o.Z)(e,["history"]);return(0,i.jsx)(d.Z,(0,n.Z)((0,a.Z)({},r),{children:(0,i.jsxs)(p.Z,{sx:{minWidth:800,p:6},children:[(0,i.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",children:[(0,i.jsxs)(u.ZP,{item:!0,children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Company"}),(0,i.jsx)(h.Z,{variant:"subtitle2",children:t.user.companyName})]}),(0,i.jsxs)(u.ZP,{item:!0,children:[(0,i.jsx)(h.Z,{align:"right",variant:"h4",children:t.status.toUpperCase()}),(0,i.jsxs)(h.Z,{align:"right",variant:"subtitle2",children:["Form ID: #",t.id]})]})]}),(0,i.jsx)(p.Z,{sx:{my:4},children:(0,i.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",children:[(0,i.jsxs)(u.ZP,{item:!0,children:[(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"subtitle2",children:"Date"}),(0,i.jsx)(h.Z,{variant:"body2",children:t.Date&&(0,s.Z)(t.Date,"dd MMM yyyy")})]}),(0,i.jsxs)(u.ZP,{item:!0,children:[(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"subtitle2",children:"Tracking Number"}),(0,i.jsx)(h.Z,{variant:"body2",children:t.trackingNumber})]})]})}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(Z.Z,{children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(v.Z,{children:"SKU"}),(0,i.jsx)(v.Z,{children:"Item Name"}),(0,i.jsx)(v.Z,{children:"Unit Price"}),(0,i.jsx)(v.Z,{children:"QTY"}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{align:"right",children:"Total Price"})]})}),(0,i.jsxs)(x.Z,{children:[(t.items||[]).map((function(e){return(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(v.Z,{children:e.SKU}),(0,i.jsx)(v.Z,{children:e.name}),(0,i.jsx)(v.Z,{children:c()(e.price).format("".concat(e.price,"0,0.00"))}),(0,i.jsx)(v.Z,{children:e.QTY}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{align:"right",children:c()(e.price*e.QTY).format("$0,0.00")})]},e.SKU)})),(0,i.jsx)(m.Z,{sx:{borderTop:1}}),(0,i.jsxs)(m.Z,{sx:{borderTop:1},children:[(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{align:"right",children:(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"subtitle1",children:"Total QTY"})}),(0,i.jsx)(v.Z,{align:"right",children:(0,i.jsxs)(h.Z,{gutterBottom:!0,variant:"subtitle1",children:["x ",t.items.reduce((function(e,t){return e+t.QTY}),0)]})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{align:"right",children:(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"subtitle1",children:"Total Price"})}),(0,i.jsx)(v.Z,{align:"right",children:(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"subtitle1",children:c()(t.items.reduce((function(e,t){return e+t.price*t.QTY}),0)).format("$ 0,0.00")})})]})]})]}),(0,i.jsxs)(p.Z,{sx:{mt:2},children:[(0,i.jsx)(h.Z,{gutterBottom:!0,variant:"h6",children:"Notes"}),(0,i.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Please make sure you double check the quantity and unit price of each item and inbound/outbound method."})]})]})}))}}},function(e){e.O(0,[9072,7961,2077,9774,2888,179],(function(){return t=29581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);