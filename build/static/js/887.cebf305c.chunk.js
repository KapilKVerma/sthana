"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[887],{2409:function(e,s,t){t(2791);var n=t(6157),r=t(7692),a=t(6856),i=t(8617),l=t(8820),c=t(184);s.Z=function(e){var s=e.title,t=e.type,o=e.variant,d=void 0===o?"light":o,u={expandButton:(0,c.jsx)(r.QpC,{size:"1.25rem"}),menuButton:(0,c.jsx)(i.jw9,{size:"1.25rem"}),startButton:(0,c.jsx)(a.B7V,{size:"1.25rem"}),deleteButton:(0,c.jsx)(r.SW4,{size:"1.25rem"}),editButton:(0,c.jsx)(r.Hlf,{size:"1.25rem"}),completeButton:(0,c.jsx)(r.hXj,{size:"1.25rem"}),closeButton:(0,c.jsx)(l.oHP,{size:"1.25rem"})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n.Z,{size:"sm",variant:d,className:"w-100 text-left",children:[u[t],s?(0,c.jsxs)("span",{children:["\xa0\xa0",s]}):null]})})}},9915:function(e,s,t){t(2791);var n=t(6157),r=t(184);s.Z=function(e){var s=e.task,t=e.setEditTask;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:"object__form",children:[(0,r.jsxs)("section",{className:"mb-3",children:[(0,r.jsxs)("div",{className:"input__field mb-3",children:[(0,r.jsx)("label",{children:"Task Title:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",name:"title",defaultValue:s.title,placeholder:"Enter Task title",className:"input__field--text"})]}),(0,r.jsxs)("div",{className:"input__field mb-3",children:[(0,r.jsx)("label",{children:"Task Description:"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{name:"description",rows:2,defaultValue:s.description,placeholder:"Enter Task Description",className:"input__field--text"})]}),(0,r.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-3",children:[(0,r.jsxs)("div",{className:"input__field w-50",children:[(0,r.jsx)("label",{children:"Start Date:"}),(0,r.jsx)("input",{type:"date",name:"startDate",className:"input__field--date"})]}),(0,r.jsx)("div",{className:"m-2"}),(0,r.jsxs)("div",{className:"input__field w-50",children:[(0,r.jsx)("label",{children:"Completion Date:"}),(0,r.jsx)("input",{type:"date",name:"endDate",className:"input__field--date"})]})]})]}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[(0,r.jsx)(n.Z,{variant:"outline-info",className:"form__button",onClick:function(){return t(!1)},children:"Close"}),(0,r.jsx)("div",{className:"m-1"}),(0,r.jsx)(n.Z,{variant:"info",type:"submit",className:"form__button",children:"Save"})]})})]})})}},3208:function(e,s,t){var n=t(1413),r=t(4165),a=t(5861),i=t(9439),l=t(2791),c=t(6157),o=t(848),d=t(1134),u=t(874),m=t(6669),p=t(1243),x=t(184),j=(0,u.Ry)({title:(0,u.Z_)().nonempty("Title is required"),description:(0,u.Z_)().nonempty("Description is required"),startDate:(0,u.Z_)().nonempty("Start date is required"),endDate:(0,u.Z_)().nonempty("Completion date is required"),project:(0,u.Rx)().refine((function(e){return e>0}),"Project is required")}).refine((function(e){return new Date(e.startDate)<=new Date(e.endDate)}),{message:"End date must be greater than completion date",path:["endDate"]});s.Z=function(e){var s,t,u,h,f,v=e.setClose,_=(0,l.useState)([]),g=(0,i.Z)(_,2),b=g[0],N=g[1],Z=(0,d.cI)({resolver:(0,o.F)(j),defaultValues:{title:"",description:"",startDate:"",endDate:"",project:0}}),y=Z.register,w=Z.handleSubmit,D=Z.formState.errors,k=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.get("".concat(m.K,"/api/0.1/projects/"));case 3:s=e.sent,N(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){k()}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:"object__form",onSubmit:w((function(e){console.log(e)})),children:[(0,x.jsxs)("section",{className:"mb-3",children:[(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Task Title:"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,n.Z)({type:"text",placeholder:"Enter Task title",className:"input__field--text"},y("title"))),(null===D||void 0===D||null===(s=D.title)||void 0===s?void 0:s.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.title.message})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Task Description:"}),(0,x.jsx)("br",{}),(0,x.jsx)("textarea",(0,n.Z)({rows:2,placeholder:"Enter Task Description",className:"input__field--text"},y("description"))),(null===D||void 0===D||null===(t=D.description)||void 0===t?void 0:t.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.description.message})]}),(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-3",children:[(0,x.jsxs)("div",{className:"input__field w-50",children:[(0,x.jsx)("label",{children:"Start Date:"}),(0,x.jsx)("input",(0,n.Z)({type:"date",className:"input__field--date"},y("startDate",{valueAsDate:!1}))),(null===D||void 0===D||null===(u=D.startDate)||void 0===u?void 0:u.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.startDate.message})]}),(0,x.jsx)("div",{className:"m-2"}),(0,x.jsxs)("div",{className:"input__field w-50",children:[(0,x.jsx)("label",{children:"Completion Date:"}),(0,x.jsx)("input",(0,n.Z)({type:"date",className:"input__field--date"},y("endDate",{valueAsDate:!1}))),(null===D||void 0===D||null===(h=D.endDate)||void 0===h?void 0:h.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.endDate.message})]})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Task Project:"}),(0,x.jsx)("select",(0,n.Z)((0,n.Z)({className:"input__field--select"},y("project",{valueAsNumber:!0})),{},{children:b.map((function(e,s){return(0,x.jsx)("option",{value:e.id,children:e.name},s)}))})),(null===D||void 0===D||null===(f=D.project)||void 0===f?void 0:f.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.project.message})]})]}),(0,x.jsx)("section",{children:(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[(0,x.jsx)(c.Z,{variant:"outline-info",type:"submit",className:"form__button",onClick:function(){return v(!1)},children:"Close"}),(0,x.jsx)("div",{className:"m-1"}),(0,x.jsx)(c.Z,{variant:"info",type:"submit",className:"form__button",children:"Submit"})]})})]})})}},4311:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var n=t(4165),r=t(5861),a=t(9439),i=t(2791),l=t(9743),c=t(2677),o=t(6157),d=t(1910),u=t(8820),m=t(1413),p=t(3433),x=t(184),j=function(e){var s=e.member,t=e.addMember,n=e.removeMember,r=(0,i.useState)(!1),l=(0,a.Z)(r,2),c=l[0],d=l[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Z,{variant:"outline-dark",className:"input__field__select--button",active:c,onClick:function(){d(!c),c?n(s):t(s)},children:null!==s&&void 0!==s&&s.profileImg?(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-start",children:[(0,x.jsx)("div",{className:"input__field__select--button--image",style:{backgroundImage:"url(".concat(s.profileImg,")")}}),(0,x.jsx)("div",{className:"p-1 pl-2 pr-3",children:"".concat(s.firstName," ").concat(s.lastName)})]}):(0,x.jsx)("div",{className:"p-1 pl-2 pr-3",children:"".concat(s.firstName," ").concat(s.lastName)})})})},h=t(848),f=t(1134),v=t(874),_=t(6669),g=t(1243),b=(0,v.Ry)({title:(0,v.Z_)().nonempty("Title is required"),budget:(0,v.Rx)().nonnegative().refine((function(e){return e>0}),"Budget is required"),description:(0,v.Z_)().nonempty("Description is required"),purpose:(0,v.Z_)().nonempty("Purpose is required"),startDate:(0,v.Z_)().nonempty("Start date is required"),endDate:(0,v.Z_)().nonempty("Completion date is required")}).refine((function(e){return new Date(e.startDate)<=new Date(e.endDate)}),{message:"End date must be greater than completion date",path:["endDate"]}),N=function(e){var s,t,c,d,u,v,N=e.setClose,Z=(0,f.cI)({resolver:(0,h.F)(b),defaultValues:{title:"",budget:0,description:"",purpose:"",startDate:"",endDate:""}}),y=Z.register,w=Z.handleSubmit,D=Z.formState.errors,k=(0,i.useState)([]),C=(0,a.Z)(k,2),P=C[0],S=C[1],T=(0,i.useState)(""),E=(0,a.Z)(T,2),M=E[0],Y=E[1],F=(0,i.useState)([]),z=(0,a.Z)(F,2),B=z[0],I=z[1],A=function(e){var s=(0,p.Z)(P);0===s.filter((function(s){return s.id===e.id})).length&&(s.push(e),Y("")),S(s),console.log("added",s)},q=function(e){var s=(0,p.Z)(P);if(0===s.length&&Y("Project manager not selected"),s.length>0){var t=s.filter((function(s){return s.id!==e.id}));S(t),console.log("removed",t)}},R=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("".concat(_.K,"/api/0.1/users/company/1"));case 3:s=e.sent,I(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){R()}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:"object__form",onSubmit:w((function(e){0!==P.length?P.length>=2?Y("Only 2 manager should be selected"):(e.managers=P,console.log("new project",e)):Y("Project manager not selected")})),children:[(0,x.jsxs)("section",{className:"mb-3",children:[(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Project Title:"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,m.Z)({type:"text",placeholder:"Enter Project Title",className:"input__field--text"},y("title"))),(null===D||void 0===D||null===(s=D.title)||void 0===s?void 0:s.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.title.message})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Project Budget:"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,m.Z)({type:"number",className:"input__field--number",placeholder:"Enter budget"},y("budget",{valueAsNumber:!0}))),(null===D||void 0===D||null===(t=D.budget)||void 0===t?void 0:t.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.budget.message})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Project Description:"}),(0,x.jsx)("br",{}),(0,x.jsx)("textarea",(0,m.Z)({rows:2,placeholder:"Enter Project Description",className:"input__field--text"},y("description"))),(null===D||void 0===D||null===(c=D.description)||void 0===c?void 0:c.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.description.message})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Project Purpose:"}),(0,x.jsx)("br",{}),(0,x.jsx)("textarea",(0,m.Z)({rows:2,placeholder:"Enter Project Purpose",className:"input__field--text"},y("purpose"))),(null===D||void 0===D||null===(d=D.purpose)||void 0===d?void 0:d.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.purpose.message})]}),(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-3",children:[(0,x.jsxs)("div",{className:"input__field w-50",children:[(0,x.jsx)("label",{children:"Start Date:"}),(0,x.jsx)("input",(0,m.Z)({type:"date",className:"input__field--date"},y("startDate",{valueAsDate:!1}))),(null===D||void 0===D||null===(u=D.startDate)||void 0===u?void 0:u.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.startDate.message})]}),(0,x.jsx)("div",{className:"m-2"}),(0,x.jsxs)("div",{className:"input__field w-50",children:[(0,x.jsx)("label",{children:"Completion Date:"}),(0,x.jsx)("input",(0,m.Z)({type:"date",className:"input__field--date"},y("endDate",{valueAsDate:!1}))),(null===D||void 0===D||null===(v=D.endDate)||void 0===v?void 0:v.message)&&(0,x.jsx)("p",{className:"input__field--error",children:D.endDate.message})]})]}),(0,x.jsxs)("div",{className:"input__field mb-3",children:[(0,x.jsx)("label",{children:"Project Managers:"}),(0,x.jsx)(l.Z,{className:"input__field__select--container",children:B.map((function(e,s){return(0,x.jsx)("span",{children:(0,x.jsx)(j,{member:e,addMember:A,removeMember:q})},s)}))}),M&&(0,x.jsx)("p",{className:"input__field--error",children:M})]})]}),(0,x.jsx)("section",{children:(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[(0,x.jsx)(o.Z,{variant:"outline-info",type:"submit",className:"form__button",onClick:function(){return N(!1)},children:"Close"}),(0,x.jsx)("div",{className:"m-1"}),(0,x.jsx)(o.Z,{variant:"info",type:"submit",className:"form__button",children:"Submit"})]})})]})})},Z=function(e){var s=e.projectsList,t=e.projectDetail,n=e.setProjectsToShow,r=(0,i.useState)(!1),l=(0,a.Z)(r,2),c=l[0],m=l[1],p=function(){return m(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,x.jsx)("section",{className:"w-50",children:!t&&(0,x.jsxs)("div",{className:"w-75 d-flex flex-row justify-content-start",children:[(0,x.jsx)("div",{children:(0,x.jsxs)("form",{className:"search__bar",children:[(0,x.jsx)("input",{type:"text",name:"title",placeholder:"Enter project name...",className:"search__bar---input",onChange:function(e){!function(e,s){var t=s.filter((function(s){return s.name.toLowerCase().includes(e.toLowerCase())}));n(t)}(e.target.value,s)}}),(0,x.jsx)(o.Z,{variant:"dark",type:"submit",className:"search__bar---button",children:(0,x.jsx)(u.RB5,{size:"1.25rem"})})]})}),(0,x.jsx)("div",{className:"m-2"}),(0,x.jsx)("div",{children:(0,x.jsx)(o.Z,{variant:"info",onClick:function(){return m(!0)},children:c?(0,x.jsx)("span",{children:"Close"}):(0,x.jsx)("span",{children:"New Project"})})})]})}),(0,x.jsx)("section",{className:"w-50 d-flex flex-row justify-content-end"})]}),(0,x.jsxs)(d.Z,{size:"lg",show:c,onHide:p,children:[(0,x.jsx)(d.Z.Header,{children:(0,x.jsx)(d.Z.Title,{children:"New Project"})}),(0,x.jsx)(d.Z.Body,{className:"p-0",children:(0,x.jsx)(N,{setClose:p})})]})]})},y=t(3593),w=function(e){var s=e.children;return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"project__card",children:[(0,x.jsx)("section",{children:(0,x.jsx)("span",{className:"project__card--icon",children:(0,x.jsx)(u.Tk2,{size:"2rem"})})}),s]})})},D=t(8617),k=t(7892),C=t.n(k),P=function(e){var s=e.project,t=e.setProjectDetail,d=(0,i.useState)([]),u=(0,a.Z)(d,2),m=u[0],p=u[1],j=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("".concat(_.K,"/api/0.1/users/company/1"));case 3:s=e.sent,p(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){j()}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(w,{children:[(0,x.jsxs)("section",{children:[(0,x.jsxs)("h5",{className:"d-flex flex-row justify-content-between",style:{position:"relative"},children:[(0,x.jsx)("div",{className:"w-75",children:"".concat(s.name)}),(0,x.jsx)(o.Z,{size:"sm",variant:"light",onClick:function(){return t(s)},style:{position:"absolute",right:"0"},children:(0,x.jsx)(D.jw9,{size:"1.25rem"})})]}),(0,x.jsx)("h6",{children:"Description"}),(0,x.jsx)("p",{children:"".concat(s.description)}),(0,x.jsx)("h6",{children:"Purpose"}),(0,x.jsx)("p",{children:"".concat(s.purpose)}),(0,x.jsx)("hr",{})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(c.Z,{lg:6,children:[(0,x.jsx)("h6",{children:"Progress (65%)"}),(0,x.jsx)(y.Z,{children:(0,x.jsx)(y.Z,{striped:!0,variant:"success",now:65},1)})]}),(0,x.jsxs)(c.Z,{lg:3,children:[(0,x.jsx)("h6",{children:"Started on"}),(0,x.jsx)("h6",{children:C()(s.startDate).format("DD/MM/YYYY")})]}),(0,x.jsxs)(c.Z,{lg:3,children:[(0,x.jsx)("h6",{children:"Budget"}),(0,x.jsxs)("h6",{children:["$",s.budget]})]})]}),(0,x.jsx)("hr",{}),(0,x.jsxs)("section",{className:"mb-3",children:[(0,x.jsx)("h6",{children:"Team Member(s)"}),(0,x.jsx)(l.Z,{className:"member__skills--list m-0 p-0",children:m.slice(0,6).map((function(e,s){return(0,x.jsx)("span",{className:"team__member__card--image m-1",style:{backgroundImage:"url(".concat(e.profileImg,")"),width:"2.5rem",height:"2.5rem"}},s)}))})]}),(0,x.jsxs)("section",{children:[(0,x.jsx)("h6",{children:"Project Manager(s)"}),(0,x.jsx)(l.Z,{className:"member__skills--list m-0 p-0",children:m.slice(6,8).map((function(e,s){return(0,x.jsx)("span",{className:"team__member__card--image m-1",style:{backgroundImage:"url(".concat(e.profileImg,")"),width:"2.5rem",height:"2.5rem"}},s)}))})]})]})]})})},S=t(2409),T=t(3208),E=t(4896),M=t(9915),Y=function(e){var s=e.task,t=e.handleDeleteTask,n=(0,i.useState)(!1),r=(0,a.Z)(n,2),l=r[0],c=r[1],o=(0,i.useState)(!1),d=(0,a.Z)(o,2),u=d[0],m=d[1];return(0,x.jsxs)(x.Fragment,{children:[u?null:(0,x.jsx)(E.Z,{task:s,showDetails:l,children:(0,x.jsx)("section",{children:(0,x.jsx)("div",{className:"task__menu--container d-flex flex-row justify-content-start",children:l?(0,x.jsx)("span",{onClick:function(){return c(!l)},children:(0,x.jsx)(S.Z,{title:"",type:"closeButton",variant:"dark"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:"mr-1",onClick:function(){return c(!l)},children:(0,x.jsx)(S.Z,{title:"",type:"expandButton"})}),(0,x.jsx)("span",{onClick:function(){return t(s)},children:(0,x.jsx)(S.Z,{title:"",type:"deleteButton"})})]})})})}),u?(0,x.jsx)(M.Z,{task:s,setEditTask:m}):null]})},F=t(4346),z=(t(9739),[{start:new Date(2023,0,1),end:new Date(2023,0,18),name:"Network Infrastructure Upgrade",id:"project 1",type:"project",progress:100,isDisabled:!0,hideChildren:!1,styles:{progressColor:"#17C3A5",progressSelectedColor:"#17C3A5"}},{start:new Date(2023,0,1),end:new Date(2023,0,3),name:"Task 1",id:"task 1",type:"task",progress:100,isDisabled:!0,project:"project 1",styles:{progressColor:"#5096F7",progressSelectedColor:"#5096F7"}},{start:new Date(2023,0,3),end:new Date(2023,0,6),name:"Task 2",id:"task 2",type:"task",progress:50,isDisabled:!0,dependencies:["task 1"],project:"project 1",styles:{progressColor:"#5096F7",progressSelectedColor:"#5096F7"}},{start:new Date(2023,0,4),end:new Date(2023,0,6),name:"Task 3",id:"task 3",type:"task",progress:55,isDisabled:!0,dependencies:["task 1"],project:"project 1",styles:{progressColor:"#5096F7",progressSelectedColor:"#5096F7"}},{start:new Date(2023,0,7),end:new Date(2023,0,15),name:"Task 4",id:"task 4",type:"task",progress:30,isDisabled:!0,dependencies:["task 2","task 3"],project:"project 1",styles:{progressColor:"#5096F7",progressSelectedColor:"#5096F7"}},{start:new Date(2023,0,16),end:new Date(2023,0,18),name:"Task 5",id:"task 5",type:"task",progress:10,isDisabled:!0,dependencies:["task 4"],project:"project 1",styles:{progressColor:"#5096F7",progressSelectedColor:"#5096F7"}}]),B=function(e){var s=e.monthViewMode,t=(0,i.useState)(z),n=(0,a.Z)(t,2),r=n[0],l=n[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{style:{background:"#fff"},children:(0,x.jsx)(F.A,{tasks:r,viewMode:s?F.w.Month:F.w.Day,listCellWidth:"",onExpanderClick:function(e){l(r.map((function(s){return s.id===e.id?e:s}))),console.log("On expander click Id:"+e.id)},columnWidth:100})})})},I=function(e){var s=e.project,t=e.setProjectDetail,d=(0,i.useState)(!1),m=(0,a.Z)(d,2),p=m[0],j=m[1],h=(0,i.useState)([]),f=(0,a.Z)(h,2),v=f[0],b=f[1],N=(0,i.useState)(!0),Z=(0,a.Z)(N,2),w=Z[0],D=Z[1],k=(0,i.useState)([]),P=(0,a.Z)(k,2),E=P[0],M=P[1],F=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(s){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.delete("".concat(_.K,"/api/0.1/tasks/").concat(s.id));case 3:t=e.sent,b(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),z=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=[g.Z.get("".concat(_.K,"/api/0.1/tasks/")),g.Z.get("".concat(_.K,"/api/0.1/users/company/1"))],e.next=4,Promise.all(s);case 4:t=e.sent,b(t[0].data),M(t[1].data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){z()}),[]),(0,x.jsxs)("div",{className:"project__card mt-3",children:[(0,x.jsx)("section",{children:(0,x.jsx)("span",{className:"project__card--icon",children:(0,x.jsx)(u.Tk2,{size:"2rem"})})}),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{className:"d-flex flex-row justify-content-between",style:{position:"relative"},children:[(0,x.jsx)("div",{className:"w-75",children:"".concat(s.name)}),(0,x.jsx)("span",{onClick:function(){return t(null)},children:(0,x.jsx)(S.Z,{title:"",type:"closeButton",variant:"dark"})})]}),(0,x.jsx)("h6",{children:"Description"}),(0,x.jsx)("p",{children:"".concat(s.description)}),(0,x.jsx)("h6",{children:"Purpose"}),(0,x.jsx)("p",{children:"".concat(s.purpose)})]}),(0,x.jsx)("hr",{})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(c.Z,{lg:6,children:[(0,x.jsx)("h6",{children:"Progress (65%)"}),(0,x.jsx)(y.Z,{children:(0,x.jsx)(y.Z,{striped:!0,variant:"success",now:65},1)})]}),(0,x.jsxs)(c.Z,{lg:2,children:[(0,x.jsx)("h6",{children:"Started on"}),(0,x.jsx)("h6",{children:C()(s.startDate).format("DD/MM/YYYY")})]}),(0,x.jsxs)(c.Z,{lg:2,children:[(0,x.jsx)("h6",{children:"Ends on"}),(0,x.jsx)("h6",{children:C()(s.endDate).format("DD/MM/YYYY")})]}),(0,x.jsxs)(c.Z,{lg:2,children:[(0,x.jsx)("h6",{children:"Budget"}),(0,x.jsxs)("h6",{children:["$",s.budget]})]})]}),(0,x.jsx)("hr",{})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(c.Z,{lg:6,md:6,sm:6,children:(0,x.jsxs)("section",{className:"mb-3",children:[(0,x.jsx)("h6",{children:"Team Member(s)"}),(0,x.jsx)(l.Z,{className:"member__skills--list m-0 p-0 ",children:E.slice(0,6).map((function(e,s){return(0,x.jsx)("span",{className:"team__member__card--image m-1",style:{backgroundImage:"url(".concat(e.profileImg,")"),width:"2.5rem",height:"2.5rem"}},s)}))})]})}),(0,x.jsx)(c.Z,{lg:6,md:6,sm:6,children:(0,x.jsxs)("section",{children:[(0,x.jsx)("h6",{children:"Project Manager(s)"}),(0,x.jsx)(l.Z,{className:"member__skills--list m-0 p-0 ",children:E.slice(6,8).map((function(e,s){return(0,x.jsx)("span",{className:"team__member__card--image m-1",style:{backgroundImage:"url(".concat(e.profileImg,")"),width:"2.5rem",height:"2.5rem"}})}))})]})})]}),(0,x.jsx)("hr",{})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:"mb-2 d-flex flex-row justify-content-between",children:[(0,x.jsx)("h5",{children:"Timeline"}),(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[(0,x.jsx)(o.Z,{variant:w?"dark":"light",size:"sm",onClick:function(){return D(!0)},children:"Month"}),(0,x.jsx)("div",{className:"m-1"}),(0,x.jsx)(o.Z,{variant:w?"light":"dark",size:"sm",onClick:function(){return D(!1)},children:"Day"})]})]}),(0,x.jsx)(B,{monthViewMode:w}),(0,x.jsx)("hr",{})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-2",children:[(0,x.jsx)("h5",{className:"mb-3",children:p?(0,x.jsx)("span",{children:"Add New Task "}):(0,x.jsxs)("span",{children:["Associated Tasks (",v.slice(0,10).length,")"]})}),(0,x.jsx)(o.Z,{variant:"info",onClick:function(){return j(!p)},children:p?(0,x.jsx)("span",{children:"Close"}):(0,x.jsx)("span",{children:"Add Task"})})]}),(0,x.jsx)("div",{children:p?(0,x.jsx)(T.Z,{setClose:j}):(0,x.jsx)("div",{className:"tasks__list__container",style:{height:"20rem"},children:v.slice(0,10).map((function(e){return(0,x.jsx)("div",{className:"tasks__list__item",children:(0,x.jsx)(Y,{task:e,handleDeleteTask:F})},e.id)}))})})]})]})},A=function(){var e=(0,i.useState)(null),s=(0,a.Z)(e,2),t=s[0],o=s[1],d=(0,i.useState)([]),u=(0,a.Z)(d,2),m=u[0],p=u[1],j=(0,i.useState)([]),h=(0,a.Z)(j,2),f=h[0],v=h[1],b=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("".concat(_.K,"/api/0.1/projects"));case 3:s=e.sent,p(s.data),v(s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){b()}),[]),(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("section",{children:(0,x.jsx)(Z,{projectDetail:t,projectsList:m,setProjectsToShow:v})}),(0,x.jsx)("section",{children:!t&&(0,x.jsx)(l.Z,{className:"m-0 p-0 mt-3",children:f.map((function(e,s){return(0,x.jsx)(c.Z,{lg:4,md:6,sm:12,className:"m-0 p-1",children:(0,x.jsx)(P,{project:e,setProjectDetail:o})},s)}))})}),(0,x.jsx)("section",{className:"pt-3",children:t&&(0,x.jsx)(I,{project:t,setProjectDetail:o})})]})}},4896:function(e,s,t){var n=t(4165),r=t(5861),a=t(9439),i=t(2791),l=t(6856),c=t(7892),o=t.n(c),d=t(6669),u=t(1243),m=t(184),p={marginRight:".5rem",padding:".4rem 1rem",borderRadius:"50px",background:"rgb(81, 151, 248, 0.25)",fontWeight:"500"};s.Z=function(e){var s=e.children,t=e.task,c=e.showDetails,x=(0,i.useState)([]),j=(0,a.Z)(x,2),h=j[0],f=j[1],v=h[8],_=h[4],g=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(d.K,"/api/0.1/users/company/1"));case 3:s=e.sent,f(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){g()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:{position:"relative",padding:".7rem"},children:[(0,m.jsx)("section",{children:(0,m.jsx)("span",{className:"tasks__list__item--icon",children:(0,m.jsx)(l.q4n,{size:"1.5rem"})})}),(0,m.jsx)("section",{children:(0,m.jsx)("div",{style:{width:"80%"},children:c?(0,m.jsxs)("section",{className:"p-3 ",children:[(0,m.jsx)("h5",{children:t.title}),(0,m.jsx)("h6",{children:"Description"}),(0,m.jsx)("p",{children:t.description}),(0,m.jsxs)("ul",{className:"d-flex flex-row justify-content-start p-0 m-0",style:{listStyleType:"none"},children:[(0,m.jsxs)("li",{style:p,children:["Created On:\xa0\xa0",o()(t.createdOn).format("DD/MM/YYYY")]}),(0,m.jsxs)("li",{style:p,children:["Start Date:\xa0\xa0",o()(t.endDate).format("DD/MM/YYYY")]}),(0,m.jsxs)("li",{style:p,children:["Due Date:\xa0\xa0",o()(t.endDate).format("DD/MM/YYYY")]}),(0,m.jsxs)("li",{style:p,children:["Created By:\xa0\xa0","".concat(_.firstName," ").concat(_.lastName)]}),(0,m.jsxs)("li",{style:p,children:["Assigned To:\xa0\xa0","".concat(v.firstName," ").concat(v.lastName)]})]})]}):(0,m.jsx)("section",{children:(0,m.jsxs)("h6",{className:"text-capitalize",children:[t.title.length>130?(0,m.jsxs)("span",{children:["\xa0\xa0\xa0\xa0",t.title.slice(0,100),"..."]}):(0,m.jsxs)("span",{children:["\xa0\xa0\xa0\xa0",t.title]}),"\xa0\xa0|\xa0\xa0Due:\xa0\xa0",o()(t.endDate).format("DD/MM/YYYY")]})})})}),s]})})}},6669:function(e,s,t){t.d(s,{K:function(){return n}});var n="http://localhost:5001"},2677:function(e,s,t){var n=t(9439),r=t(1413),a=t(5987),i=t(1694),l=t.n(i),c=t(2791),o=t(162),d=t(184),u=["as","bsPrefix","className"],m=["className"];var p=c.forwardRef((function(e,s){var t=function(e){var s=e.as,t=e.bsPrefix,n=e.className,i=(0,a.Z)(e,u);t=(0,o.vE)(t,"col");var c=(0,o.pi)(),d=(0,o.zG)(),m=[],p=[];return c.forEach((function(e){var s,n,r,a=i[e];delete i[e],"object"===typeof a&&null!=a?(s=a.span,n=a.offset,r=a.order):s=a;var l=e!==d?"-".concat(e):"";s&&m.push(!0===s?"".concat(t).concat(l):"".concat(t).concat(l,"-").concat(s)),null!=r&&p.push("order".concat(l,"-").concat(r)),null!=n&&p.push("offset".concat(l,"-").concat(n))})),[(0,r.Z)((0,r.Z)({},i),{},{className:l().apply(void 0,[n].concat(m,p))}),{as:s,bsPrefix:t,spans:m}]}(e),i=(0,n.Z)(t,2),c=i[0],p=c.className,x=(0,a.Z)(c,m),j=i[1],h=j.as,f=void 0===h?"div":h,v=j.bsPrefix,_=j.spans;return(0,d.jsx)(f,(0,r.Z)((0,r.Z)({},x),{},{ref:s,className:l()(p,!_.length&&v)}))}));p.displayName="Col",s.Z=p},1701:function(e,s,t){t.d(s,{UI:function(){return r},XW:function(){return a}});var n=t(2791);function r(e,s){var t=0;return n.Children.map(e,(function(e){return n.isValidElement(e)?s(e,t++):e}))}function a(e,s){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===s}))}},3593:function(e,s,t){var n=t(4942),r=t(1413),a=t(5987),i=t(1694),l=t.n(i),c=t(2791),o=t(162),d=t(1701),u=t(184),m=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],x=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"],j=1e3;function h(e,s,t){var n=(e-s)/(t-s)*100;return Math.round(n*j)/j}function f(e,s){var t,i=e.min,c=e.now,o=e.max,d=e.label,p=e.visuallyHidden,x=e.striped,j=e.animated,f=e.className,v=e.style,_=e.variant,g=e.bsPrefix,b=(0,a.Z)(e,m);return(0,u.jsx)("div",(0,r.Z)((0,r.Z)({ref:s},b),{},{role:"progressbar",className:l()(f,"".concat(g,"-bar"),(t={},(0,n.Z)(t,"bg-".concat(_),_),(0,n.Z)(t,"".concat(g,"-bar-animated"),j),(0,n.Z)(t,"".concat(g,"-bar-striped"),j||x),t)),style:(0,r.Z)({width:"".concat(h(c,i,o),"%")},v),"aria-valuenow":c,"aria-valuemin":i,"aria-valuemax":o,children:p?(0,u.jsx)("span",{className:"visually-hidden",children:d}):d}))}var v=c.forwardRef((function(e,s){var t=e.isChild,n=void 0!==t&&t,i=(0,a.Z)(e,p),m=(0,r.Z)({min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1},i);if(m.bsPrefix=(0,o.vE)(m.bsPrefix,"progress"),n)return f(m,s);var j=m.min,h=m.now,v=m.max,_=m.label,g=m.visuallyHidden,b=m.striped,N=m.animated,Z=m.bsPrefix,y=m.variant,w=m.className,D=m.children,k=(0,a.Z)(m,x);return(0,u.jsx)("div",(0,r.Z)((0,r.Z)({ref:s},k),{},{className:l()(w,Z),children:D?(0,d.UI)(D,(function(e){return(0,c.cloneElement)(e,{isChild:!0})})):f({min:j,now:h,max:v,label:_,visuallyHidden:g,striped:b,animated:N,bsPrefix:Z,variant:y},s)}))}));v.displayName="ProgressBar",s.Z=v},9743:function(e,s,t){var n=t(1413),r=t(5987),a=t(1694),i=t.n(a),l=t(2791),c=t(162),o=t(184),d=["bsPrefix","className","as"],u=l.forwardRef((function(e,s){var t=e.bsPrefix,a=e.className,l=e.as,u=void 0===l?"div":l,m=(0,r.Z)(e,d),p=(0,c.vE)(t,"row"),x=(0,c.pi)(),j=(0,c.zG)(),h="".concat(p,"-cols"),f=[];return x.forEach((function(e){var s,t=m[e];delete m[e],s=null!=t&&"object"===typeof t?t.cols:t;var n=e!==j?"-".concat(e):"";null!=s&&f.push("".concat(h).concat(n,"-").concat(s))})),(0,o.jsx)(u,(0,n.Z)((0,n.Z)({ref:s},m),{},{className:i().apply(void 0,[a,p].concat(f))}))}));u.displayName="Row",s.Z=u}}]);
//# sourceMappingURL=887.cebf305c.chunk.js.map