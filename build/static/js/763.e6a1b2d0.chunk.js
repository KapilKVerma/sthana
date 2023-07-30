"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[763],{12:function(e,s,n){n.r(s),n.d(s,{default:function(){return S}});var a=n(9439),i=n(2791),r=n(9743),l=n(2677),o=n(6157),t=n(6144),c=n(7022),d=n.p+"static/media/home-background.64f44070d2b3f28aeaf0.jpg",m=n(184),u=function(){return(0,m.jsx)("div",{className:"Home__title",style:{backgroundImage:"url(".concat(d,")")}})},p=n(1413),h=n(7689),x=n(5630),j=n(5390),f=n(848),v=n(1134),w=n(874),g=(0,w.Ry)({email:(0,w.Z_)().min(6,"Email is required").email("Invalid email format").refine((function(e){return e.endsWith("".concat(".com"))}),"Email must end with .com"),password:(0,w.Z_)().nonempty("Password is required").min(8,"Password must be at least 8 characters long").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Invalid password")}),Z=function(e){var s,n,a=e.setButtonActive,r=(0,i.useContext)(j.S).signIn,l=(0,h.s0)(),t=(0,v.cI)({resolver:(0,f.F)(g),defaultValues:{email:"",password:""}}),c=t.register,d=t.handleSubmit,u=t.formState.errors;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"w-75",children:[(0,m.jsx)("h1",{children:"Sign in to your account"}),(0,m.jsxs)("h5",{children:["Don't have an account?",(0,m.jsx)("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){return a(3)},children:"\xa0\xa0Sign Up"})]}),(0,m.jsxs)(x.Z,{className:"w-100 p-1 mt-4",onSubmit:d((function(e){console.log(e),r(),l("/dashboard")})),children:[(0,m.jsxs)(x.Z.Group,{className:"mb-3",children:[(0,m.jsx)(x.Z.Label,{children:"Email address"}),(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"email"},c("email"))),(null===u||void 0===u||null===(s=u.email)||void 0===s?void 0:s.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.email.message})]}),(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsx)(x.Z.Label,{children:"Password"}),(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"password"},c("password"))),(null===u||void 0===u||null===(n=u.password)||void 0===n?void 0:n.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.password.message})]}),(0,m.jsx)(o.Z,{type:"submit",variant:"info",className:"form__button",children:"Submit"})]})]})})},b=(0,w.Ry)({name:(0,w.Z_)().nonempty("Name is required"),email:(0,w.Z_)().min(6,"Email is required").email("Invalid email format"),accountType:(0,w.Z_)().nonempty("Select account type").refine((function(e){return"choose account type"!==e.toLowerCase()}),"Select account type"),password:(0,w.Z_)().nonempty("Password is required").min(8,"Password must be at least 8 characters long").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Invalid password"),confirmPassword:(0,w.Z_)().nonempty("Confirm password is required")}).refine((function(e){return e.password===e.confirmPassword}),{message:"Password doesn't match",path:["confirmPassword"]}),y=function(e){return e.personal="Personal",e.business="Business",e}(y||{}),N=function(e){var s,n,a,i,r,l=e.setButtonActive,t=(0,v.cI)({resolver:(0,f.F)(b),defaultValues:{name:"",email:"",accountType:"",password:"",confirmPassword:""}}),c=t.register,d=t.handleSubmit,u=t.formState.errors;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"w-75",children:[(0,m.jsx)("h1",{children:"Create your account"}),(0,m.jsxs)("h5",{children:["Have an account?",(0,m.jsx)("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){return l(2)},children:"\xa0\xa0Sign in now"})]}),(0,m.jsxs)(x.Z,{className:"w-100 p-1 mt-4",onSubmit:d((function(e){console.log(e)})),children:[(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"text",placeholder:"Enter name"},c("name"))),(null===u||void 0===u||null===(s=u.name)||void 0===s?void 0:s.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.name.message})]}),(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"email",placeholder:"Enter email"},c("email"))),(null===u||void 0===u||null===(n=u.email)||void 0===n?void 0:n.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.email.message})]}),(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsxs)(x.Z.Control,(0,p.Z)((0,p.Z)({as:"select",defaultValue:"Choose account type"},c("accountType")),{},{children:[(0,m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Choose account type"}),(0,m.jsx)("option",{value:y.personal,className:"text-capitalize",children:y.personal}),(0,m.jsx)("option",{value:y.business,className:"text-capitalize",children:y.business})]})),(null===u||void 0===u||null===(a=u.accountType)||void 0===a?void 0:a.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.accountType.message})]}),(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"password",placeholder:"Password"},c("password"))),(null===u||void 0===u||null===(i=u.password)||void 0===i?void 0:i.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.password.message})]}),(0,m.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,m.jsx)(x.Z.Control,(0,p.Z)({type:"password",placeholder:"Confirm password"},c("confirmPassword"))),(null===u||void 0===u||null===(r=u.confirmPassword)||void 0===r?void 0:r.message)&&(0,m.jsx)(x.Z.Text,{className:"input__field--error",children:u.confirmPassword.message})]}),(0,m.jsx)(o.Z,{variant:"info",type:"submit",className:"form__button",children:"Submit"})]})]})})},_=n(978),C=n(6856),S=function(){var e=(0,i.useState)(0),s=(0,a.Z)(e,2),n=s[0],d=s[1];return(0,m.jsx)(i.Fragment,{children:(0,m.jsxs)(r.Z,{className:"Home",children:[(0,m.jsx)(l.Z,{lg:8,className:"p-0",children:(0,m.jsx)(u,{})}),(0,m.jsxs)(l.Z,{lg:4,className:"p-0",style:{position:"relative"},children:[(0,m.jsx)("section",{className:"d-flex flex-row justify-content-start p-3",children:(0,m.jsxs)(t.Z,{"aria-label":"Basic example",children:[(0,m.jsx)(o.Z,{variant:0===n?"dark":"light",className:"form__button",onClick:function(){return d(0)},children:"Home"}),(0,m.jsx)(o.Z,{variant:2===n?"dark":"light",className:"form__button",onClick:function(){return d(2)},children:"Sign In"}),(0,m.jsx)(o.Z,{variant:3===n?"dark":"light",className:"form__button",onClick:function(){return d(3)},children:"Sign Up"})]})}),(0,m.jsxs)("section",{className:"p-3 pl-5 pr-5",children:[(0,m.jsxs)("div",{className:"Home__logo mb-4",children:[(0,m.jsx)(_.$Iu,{}),(0,m.jsx)("span",{children:"\xa0sthana"})]}),(0,m.jsxs)("div",{style:{minHeight:"30rem"},children:[0===n?(0,m.jsxs)(c.Z,{children:[(0,m.jsx)("div",{className:"p-1",style:{fontSize:"1.25rem"},children:"A comprehensive project management solution designed to streamline and simplify project management processes."}),(0,m.jsx)("div",{className:"m-5"}),(0,m.jsxs)("div",{className:"d-flex flex-row justify-content between mb-3",children:[(0,m.jsxs)("div",{className:"p-1 w-50",children:[(0,m.jsx)(C.JZ9,{size:"3rem"}),(0,m.jsxs)("div",{className:"p-1",children:[(0,m.jsx)("h5",{children:"Analysis Dashboard"}),(0,m.jsx)("p",{children:"Provides valuable insights and visualizations to analyze data and make informed decisions."})]})]}),(0,m.jsxs)("div",{className:"p-1 w-50",children:[(0,m.jsx)(C.k8I,{size:"3rem"}),(0,m.jsxs)("div",{className:"p-1",children:[(0,m.jsx)("h5",{children:"Kanban Board"}),(0,m.jsx)("p",{children:"Improves workflow, increase productivity, and enhance collaboration."})]})]})]}),(0,m.jsxs)("div",{className:"d-flex flex-row justify-content between",children:[(0,m.jsxs)("div",{className:"p-1 w-50",children:[(0,m.jsx)(C.klg,{size:"3rem"})," ",(0,m.jsxs)("div",{className:"p-1",children:[(0,m.jsx)("h5",{children:"Projects Timeline"}),(0,m.jsx)("p",{children:"Provides a clear overview of project milestones, tasks, and dependencies."})]})]}),(0,m.jsx)("div",{className:"p-1 w-50"})]})]}):null,1===n?(0,m.jsxs)(c.Z,{children:[(0,m.jsx)("h4",{children:"Manage projects with ease"}),(0,m.jsx)("p",{style:{fontSize:"1rem"},children:"A comprehensive project management solution designed to streamline and simplify project management processes."}),(0,m.jsx)("div",{className:"m-4"}),(0,m.jsx)("h4",{children:"Manage projects with ease"}),(0,m.jsx)("p",{style:{fontSize:"1.25rem"},children:"A comprehensive project management solution designed to streamline and simplify project management processes."})]}):null,2===n?(0,m.jsx)(Z,{setButtonActive:d}):null,3===n?(0,m.jsx)(N,{setButtonActive:d}):null]})]}),(0,m.jsx)("section",{className:"p-3 pl-5 pr-5 w-100",style:{position:"absolute",bottom:"0"},children:(0,m.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,m.jsx)("small",{children:"Developed by Kapil Verma"}),(0,m.jsx)("small",{children:"\xa9 Copyright 2023, Example Corporation"})]})})]})]})})}}}]);
//# sourceMappingURL=763.e6a1b2d0.chunk.js.map