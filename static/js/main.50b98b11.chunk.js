(this["webpackJsonpreact-material-portfolio"]=this["webpackJsonpreact-material-portfolio"]||[]).push([[0],{78:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),o=a.n(r),i=a(50),l=a(104),s=a(118),m=a(106),j=a(117),b=a(107),d=a(108),h=a(109),u=a(110),p=a(111),O=a(112),g=a(51),x=a(105),f=a(61),v=a.n(f),y=a.p+"static/media/logo-1.ff9c5359.png",w=a(66),k=a(82),I=Object(k.a)((function(e){return{toolbarMargin:Object(w.a)({},e.mixins.toolbar),logo:{height:"4rem",marginLeft:"25px"},tabContainer:{marginLeft:"auto"},tab:{fontFamily:"Open Sans",fontWeight:700,minWidth:10,marginRight:"25px"},tabActive:{color:e.palette.common.blue},drawerIcon:{color:e.palette.common.white,marginLeft:"auto",marginRight:"20px","&:hover":{color:e.palette.common.blue}},drawer:{backgroundColor:e.palette.common.black,width:"50%"},list:{margin:"auto 0"},drawerActive:{color:e.palette.common.blue,fontFamily:"Open Sans",fontWeight:700,textTransform:"uppercase",textAlign:"center",margin:"5vh auto"},drawerText:{color:e.palette.common.white,fontFamily:"Open Sans",fontWeight:700,textTransform:"uppercase",textAlign:"center",margin:"5vh auto"},menuIcon:{fontSize:"30px"}}})),N=a(3);function C(e){var t=e.children,a=Object(l.a)({disableHysteresis:!0,threshold:0});return n.a.cloneElement(t,{elevation:a?4:0})}var A=[{key:1,name:"home",value:0},{key:2,name:"about",value:1},{key:3,name:"services",value:2},{key:4,name:"portfolio",value:3},{key:5,name:"contact",value:4}],F=function(){var e=I(),t=Object(c.useState)(0),a=Object(i.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),f=l[0],w=l[1],k=Object(g.a)(),F=Object(x.a)(k.breakpoints.down("md")),S=Object(N.jsx)(s.a,{value:n,onChange:function(e,t){r(t)},className:e.tabContainer,indicatorColor:"primary",children:A.map((function(t){var a=t.name,c=t.value,r=t.key;return Object(N.jsx)(m.a,{className:"".concat(e.tab," ").concat(n===c?"".concat(e.tabActive):""),label:a},r)}))}),T=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(j.a,{open:f,onClose:function(){return w(!1)},onOpen:function(){return w(!0)},classes:{paper:e.drawer},children:Object(N.jsx)(b.a,{className:e.list,children:A.map((function(t){var a=t.name,c=t.value,o=t.key;return Object(N.jsx)(d.a,{className:e.listItem,onClick:function(){w(!1),r(c)},divider:!0,button:!0,children:Object(N.jsx)(h.a,{disableTypography:!0,"arial-type":"centered",className:"".concat("".concat(n===c?e.drawerActive:e.drawerText)),children:a})},o)}))})}),Object(N.jsx)(u.a,{className:e.drawerIcon,onClick:function(){return w(!f)},disableRipple:!0,children:!1===f?Object(N.jsx)(v.a,{className:e.menuIcon}):null})]});return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(C,{children:Object(N.jsx)(p.a,{children:Object(N.jsxs)(O.a,{disableGutters:!0,children:[Object(N.jsx)("img",{className:e.logo,src:y,alt:"logo"}),F?T:S]})})}),Object(N.jsx)("div",{className:e.toolbarMargin})]})},S=a(113),T=Object(S.a)((function(e){return{footer:{backgroundColor:e.palette.common.black,width:"100%",color:e.palette.common.white},logo:{height:"4rem",marginLeft:"25px"},copyright:{fontFamily:"Open Sans"},gridItem:{margin:"15px auto"},socialIcons:{marginRight:"25px"},socialIcon:{"&:hover":{color:e.palette.common.blue,cursor:"pointer"}}}})),L=a(114),R=a(62),W=a.n(R),z=a(63),E=a.n(z),H=a(64),J=a.n(H),M=function(){var e=Object(g.a)(),t=T(),a=Object(x.a)(e.breakpoints.down("xs"));return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("footer",{className:t.footer,children:Object(N.jsxs)(L.a,{container:!0,direction:a?"column":"row",justify:a?"center":"space-between",alignItems:"center",children:[Object(N.jsx)(L.a,{className:a?"".concat(t.gridItem):"",item:!0,children:Object(N.jsx)("img",{className:t.logo,src:y,alt:"footer logo"})}),Object(N.jsx)(L.a,{className:a?"".concat(t.gridItem," ").concat(t.copyright):"".concat(t.copyright),item:!0,children:"Copyright \xa9 2021"}),Object(N.jsx)(L.a,{className:"".concat(a?t.gridItem:t.socialIcons),item:!0,children:Object(N.jsxs)(L.a,{container:!0,spacing:3,children:[Object(N.jsx)(L.a,{className:t.socialIcon,item:!0,children:Object(N.jsx)(W.a,{})}),Object(N.jsx)(L.a,{className:t.socialIcon,item:!0,children:Object(N.jsx)(E.a,{})}),Object(N.jsx)(L.a,{className:t.socialIcon,item:!0,children:Object(N.jsx)(J.a,{})})]})})]})})})},B=a(44),G=a(115),q=a.p+"static/media/bg.81d6b607.jpg",D=Object(S.a)((function(e){return{landing:{height:"90vh",background:"url(".concat(q,") no-repeat"),backgroundSize:"cover",padding:"0 200px"},name:{color:e.palette.common.blue}}})),K=function(){var e=D();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(L.a,{className:e.landing,direction:"column",justify:"center",alignItems:"flex-start",container:!0,children:[Object(N.jsx)(L.a,{item:!0,children:Object(N.jsx)(B.a,{color:"secondary",variant:"h3",children:"Hello"})}),Object(N.jsx)(L.a,{item:!0,children:Object(N.jsx)(B.a,{className:e.name,variant:"h2",children:"I'm Ace"})}),Object(N.jsx)(L.a,{item:!0,children:Object(N.jsx)(B.a,{color:"secondary",variant:"h3",children:"A web developer"})}),Object(N.jsx)(L.a,{item:!0,children:Object(N.jsx)(G.a,{variant:"contained",children:"Continue"})})]})})},P=a(116),Q=a(65),U="#252a34",V="#eaeaea",X=Object(Q.a)({palette:{common:{blue:"#08d9d6",black:U,red:"#ff2e63",white:V},primary:{main:U},secondary:{main:V}}});var Y=function(){return Object(N.jsxs)(P.a,{theme:X,children:[Object(N.jsx)(F,{}),Object(N.jsx)(K,{}),Object(N.jsx)(M,{})]})};o.a.render(Object(N.jsx)(Y,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.50b98b11.chunk.js.map