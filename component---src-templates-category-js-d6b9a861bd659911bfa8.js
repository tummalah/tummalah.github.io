(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{E39E:function(e,a,t){"use strict";var r=t("TqRt"),o=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("q1tI")),i=(0,r(t("8/g6")).default)(n.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");a.default=i},Mdw5:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),o=t.n(r),n=(t("qhky"),t("9sSY")),i=t("S7am"),c=(t("IpnI"),t("tRbT")),l=t("ofer");a.default=function(e){var a=e.data,t=e.pageContext;return o.a.createElement(n.a,null,o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(l.a,{color:"inherit",variant:"h6"},"Category: ",t.category)),o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(i.a,{postEdges:a.allMarkdownRemark.edges}))))}},S7am:function(e,a,t){"use strict";var r=t("q1tI"),o=t.n(r),n=t("R/WZ"),i=t("ZBNC"),c=t("tRbT"),l=t("wx14"),d=t("Ff2n"),s=t("iuhU"),m=t("kKAo"),u=t("H2TA"),b=r.forwardRef((function(e,a){var t=e.classes,o=e.className,n=e.raised,i=void 0!==n&&n,c=Object(d.a)(e,["classes","className","raised"]);return r.createElement(m.a,Object(l.a)({className:Object(s.a)(t.root,o),elevation:i?8:1,ref:a},c))})),p=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(b),h=r.forwardRef((function(e,a){var t=e.classes,o=e.className,n=e.component,i=void 0===n?"div":n,c=Object(d.a)(e,["classes","className","component"]);return r.createElement(i,Object(l.a)({className:Object(s.a)(t.root,o),ref:a},c))})),g=Object(u.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(h),f=t("ofer"),v=r.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,n=e.classes,i=e.className,c=Object(d.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(l.a)({className:Object(s.a)(n.root,i,!o&&n.spacing),ref:a},c))})),w=Object(u.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(v),E=t("XX3T"),y=t("E39E"),x=t.n(y),j=Object(n.a)((function(e){return Object(i.a)({right:{marginLeft:"auto"}})}));a.a=function(e){var a=e.postEdges,t=j(),r=a.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:3},r.map((function(e,a){return o.a.createElement(c.a,{item:!0,xs:12,md:6,key:a},o.a.createElement("article",null,o.a.createElement(c.a,{container:!0,spacing:1},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(p,null,o.a.createElement(g,null,o.a.createElement(f.a,{variant:"h5",color:"textSecondary",gutterBottom:!0},e.title),o.a.createElement(f.a,{variant:"caption",gutterBottom:!0}," ",e.date," —"," "," ",o.a.createElement("span",null,e.categories.join(" / "))," —"," "," ",e.timeToRead," Min Read"," "," "),o.a.createElement(f.a,{variant:"body1"},e.excerpt),o.a.createElement(w,null,o.a.createElement(E.a,{className:t.right,size:"medium",href:e.path,key:e.title,"aria-label":"view"},o.a.createElement(x.a,null)))))))))}))))}},XX3T:function(e,a,t){"use strict";var r=t("Ff2n"),o=t("wx14"),n=t("q1tI"),i=t("iuhU"),c=t("H2TA"),l=t("VD++"),d=t("NqtD"),s=n.forwardRef((function(e,a){var t=e.children,c=e.classes,s=e.className,m=e.color,u=void 0===m?"default":m,b=e.component,p=void 0===b?"button":b,h=e.disabled,g=void 0!==h&&h,f=e.disableFocusRipple,v=void 0!==f&&f,w=e.focusVisibleClassName,E=e.size,y=void 0===E?"large":E,x=e.variant,j=void 0===x?"circular":x,k=Object(r.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.createElement(l.a,Object(o.a)({className:Object(i.a)(c.root,s,"large"!==y&&c["size".concat(Object(d.a)(y))],g&&c.disabled,"extended"===j&&c.extended,{primary:c.primary,secondary:c.secondary,inherit:c.colorInherit}[u]),component:p,disabled:g,focusRipple:!v,focusVisibleClassName:Object(i.a)(c.focusVisible,w),ref:a},k),n.createElement("span",{className:c.label},t))}));a.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(s)}}]);
//# sourceMappingURL=component---src-templates-category-js-d6b9a861bd659911bfa8.js.map