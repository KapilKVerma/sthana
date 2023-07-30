"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[344],{8344:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var n=a(4165),c=a(5861),t=a(9439),r=a(2791),i=a(9743),l=a(2677),o=a(6157),m=a(9126),d=a(8820),u=a(184),f=function(e){var s=e.listView,a=e.setListView,n=e.membersList,c=e.setMembersToShow;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,u.jsx)("section",{className:"w-50",children:(0,u.jsx)("div",{children:(0,u.jsxs)("form",{className:"search__bar",children:[(0,u.jsx)("input",{type:"text",name:"title",placeholder:"Enter member name...",className:"search__bar---input",onChange:function(e){!function(e,s){var a=s.filter((function(s){return(s.firstName+" "+s.lastName).toLowerCase().includes(e.toLowerCase())}));c(a)}(e.target.value,n)}}),(0,u.jsx)(o.Z,{variant:"dark",type:"submit",className:"search__bar---button",children:(0,u.jsx)(d.RB5,{size:"1.25rem"})})]})})}),(0,u.jsxs)("section",{className:"d-flex flex-row justify-content-end",children:[(0,u.jsx)(o.Z,{variant:s?"dark":"light",onClick:function(){return a(!0)},active:s,children:(0,u.jsx)(m.ut$,{size:"1.25rem"})}),(0,u.jsx)("div",{className:"m-1"}),(0,u.jsx)(o.Z,{variant:s?"light":"dark",onClick:function(){return a(!1)},active:!s,children:(0,u.jsx)(m.lTV,{size:"1.25rem"})})]})]})})},h=function(e){var s=e.children,a=e.profileImage;return(0,u.jsxs)("div",{className:"team__member__card d-flex flex-row justify-content-start",children:[(0,u.jsx)("div",{className:"team__member__card--image",style:{backgroundImage:"url(".concat(a,")")}}),s]})},x=function(e){var s=e.children,a=e.profileImage;return(0,u.jsxs)("div",{className:"team__member__card",children:[(0,u.jsx)("div",{className:"team__member__card--image",style:{backgroundImage:"url(".concat(a,")"),margin:"1rem auto",width:"150px",height:"150px"}}),s]})},p=a(6669),j=a(1243),v=function(){var e=(0,r.useState)(!0),s=(0,t.Z)(e,2),a=s[0],o=s[1],m=(0,r.useState)([]),d=(0,t.Z)(m,2),v=d[0],N=d[1],b=(0,r.useState)([]),_=(0,t.Z)(b,2),g=_[0],Z=_[1],w=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.get("".concat(p.K,"/api/0.1/users/company/1"));case 3:s=e.sent,N(s.data),Z(s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){w()}),[]),(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("section",{children:(0,u.jsx)(f,{listView:a,setListView:o,membersList:g,setMembersToShow:N})}),(0,u.jsx)("section",{children:a?(0,u.jsx)(i.Z,{className:"m-0 p-0 mt-3",children:v.map((function(e,s){return(0,u.jsx)(l.Z,{lg:12,md:12,sm:12,className:"m-0 p-1",children:(0,u.jsxs)(h,{profileImage:e.profileImg,children:[(0,u.jsx)("section",{className:"w-25",children:(0,u.jsxs)("div",{className:"p-3",children:[(0,u.jsx)("h5",{children:"".concat(e.firstName," ").concat(e.lastName)}),(0,u.jsx)("h6",{children:"".concat(e.jobTitle)})]})}),(0,u.jsx)("section",{className:"w-75",children:(0,u.jsxs)("div",{className:"member__skills--container",children:[(0,u.jsx)("h6",{className:"",children:"Skilled In"}),(0,u.jsx)(i.Z,{className:"member__skills--list m-0 p-0",children:e.skills.map((function(e,s){return(0,u.jsx)("span",{className:"member__skills--tag",children:e},s)}))})]})})]})},s)}))}):null}),(0,u.jsx)("section",{children:a?null:(0,u.jsx)(i.Z,{className:"m-0 p-0 mt-3",children:v.map((function(e,s){return(0,u.jsx)(l.Z,{lg:3,md:4,sm:6,className:"m-0 p-1",children:(0,u.jsxs)(x,{profileImage:e.profileImg,children:[(0,u.jsx)("section",{children:(0,u.jsxs)("div",{className:"text-center",children:[(0,u.jsx)("h5",{children:"".concat(e.firstName," ").concat(e.lastName)}),(0,u.jsx)("h6",{children:"".concat(e.jobTitle)})]})}),(0,u.jsx)("section",{children:(0,u.jsxs)("div",{className:"member__skills--container",children:[(0,u.jsx)("h6",{className:"pl-1",children:"Skilled In"}),(0,u.jsx)(i.Z,{className:"member__skills--list m-0 p-0 ",children:e.skills.map((function(e,s){return(0,u.jsx)("span",{className:"member__skills--tag",children:e},s)}))})]})})]})},s)}))})})]})}},6669:function(e,s,a){a.d(s,{K:function(){return n}});var n="http://localhost:5001"},2677:function(e,s,a){var n=a(9439),c=a(1413),t=a(5987),r=a(1694),i=a.n(r),l=a(2791),o=a(162),m=a(184),d=["as","bsPrefix","className"],u=["className"];var f=l.forwardRef((function(e,s){var a=function(e){var s=e.as,a=e.bsPrefix,n=e.className,r=(0,t.Z)(e,d);a=(0,o.vE)(a,"col");var l=(0,o.pi)(),m=(0,o.zG)(),u=[],f=[];return l.forEach((function(e){var s,n,c,t=r[e];delete r[e],"object"===typeof t&&null!=t?(s=t.span,n=t.offset,c=t.order):s=t;var i=e!==m?"-".concat(e):"";s&&u.push(!0===s?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(s)),null!=c&&f.push("order".concat(i,"-").concat(c)),null!=n&&f.push("offset".concat(i,"-").concat(n))})),[(0,c.Z)((0,c.Z)({},r),{},{className:i().apply(void 0,[n].concat(u,f))}),{as:s,bsPrefix:a,spans:u}]}(e),r=(0,n.Z)(a,2),l=r[0],f=l.className,h=(0,t.Z)(l,u),x=r[1],p=x.as,j=void 0===p?"div":p,v=x.bsPrefix,N=x.spans;return(0,m.jsx)(j,(0,c.Z)((0,c.Z)({},h),{},{ref:s,className:i()(f,!N.length&&v)}))}));f.displayName="Col",s.Z=f},9743:function(e,s,a){var n=a(1413),c=a(5987),t=a(1694),r=a.n(t),i=a(2791),l=a(162),o=a(184),m=["bsPrefix","className","as"],d=i.forwardRef((function(e,s){var a=e.bsPrefix,t=e.className,i=e.as,d=void 0===i?"div":i,u=(0,c.Z)(e,m),f=(0,l.vE)(a,"row"),h=(0,l.pi)(),x=(0,l.zG)(),p="".concat(f,"-cols"),j=[];return h.forEach((function(e){var s,a=u[e];delete u[e],s=null!=a&&"object"===typeof a?a.cols:a;var n=e!==x?"-".concat(e):"";null!=s&&j.push("".concat(p).concat(n,"-").concat(s))})),(0,o.jsx)(d,(0,n.Z)((0,n.Z)({ref:s},u),{},{className:r().apply(void 0,[t,f].concat(j))}))}));d.displayName="Row",s.Z=d}}]);
//# sourceMappingURL=344.b5424bd7.chunk.js.map