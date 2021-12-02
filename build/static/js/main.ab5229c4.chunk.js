(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{107:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(21),o=n.n(a),i=(n(59),n(60),n(12)),s=n(6),u=n(16),l=n(23),j=n(47),b=n.n(j),d=n(1);var h=function(t){var e=t.children;return Object(d.jsx)("div",{className:b.a.container,children:e})},f=n(48),O=n.n(f),p=n(15),g=n(24),v=n.n(g),x=function(){return Object(d.jsxs)("nav",{className:v.a.nav,children:[Object(d.jsx)(p.c,{exact:!0,to:"/",className:v.a.link,activeClassName:v.a.activeLink,children:"Phonebook"}),Object(d.jsx)(p.c,{to:"/contacts",className:v.a.link,activeClassName:v.a.activeLink,children:"Contacts"})]})},m=n(25),k=n.n(m),_=function(){return Object(d.jsxs)("div",{className:k.a.wrap,children:[Object(d.jsx)(p.c,{to:"/register",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"Registration"}),Object(d.jsx)(p.c,{to:"/login",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"Login"})]})},w=n(33),y=n.n(w),L=n(19),C=function(){var t=Object(i.c)(L.a.getUsername),e=Object(i.b)();return Object(d.jsxs)("div",{className:y.a.container,children:[Object(d.jsxs)("p",{className:y.a.name,children:["Welcome, ",t]}),Object(d.jsx)("button",{className:y.a.btn,type:"button",onClick:function(){return e(u.a.logOut())},children:"Logout"})]})},N=function(){var t=Object(i.c)(L.a.getIsLoggedIn);return Object(d.jsxs)("header",{className:O.a.header,children:[Object(d.jsx)(x,{}),t?Object(d.jsx)(C,{}):Object(d.jsx)(_,{})]})},I=n(22),S=n(31),R=["children","redirectTo"];function T(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,r=Object(S.a)(t,R),a=Object(i.c)(L.a.getIsLoggedIn);return Object(d.jsx)(s.b,Object(I.a)(Object(I.a)({},r),{},{children:a?e:Object(d.jsx)(s.a,{to:c})}))}var z=["children","restricted","redirectTo"];function A(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,o=Object(S.a)(t,z),u=Object(i.c)(L.a.getIsLoggedIn)&&c;return Object(d.jsx)(s.b,Object(I.a)(Object(I.a)({},o),{},{children:u?Object(d.jsx)(s.a,{to:a}):e}))}var B=n(50),E=n.n(B),U=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,276))})),W=Object(c.lazy)((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,275))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,277))})),P=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,278))}));var V,q,M,Y,J=function(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(u.a.fetchCurrentUser())}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(h,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(s.d,{children:Object(d.jsxs)(c.Suspense,{fallback:Object(d.jsx)(E.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),children:[Object(d.jsx)(A,{exact:!0,path:"/",children:Object(d.jsx)(U,{})}),Object(d.jsx)(A,{exact:!0,path:"/register",restricted:!0,children:Object(d.jsx)(F,{})}),Object(d.jsx)(A,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(d.jsx)(P,{})}),Object(d.jsx)(T,{path:"/contacts",redirectTo:"/login",children:Object(d.jsx)(W,{})})]})})]}),Object(d.jsx)(l.a,{})]})},K=n(29),X=n(3),Z=n(18),D=n(51),G=n.n(D),H=n(5),Q=n(7),$=n(8),tt=Object(X.d)([],(V={},Object(H.a)(V,Q.j,(function(t,e){return e.payload})),Object(H.a)(V,Q.c,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(H.a)(V,Q.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),V)),et=Object(X.d)(!1,(q={},Object(H.a)(q,Q.i,(function(){return!0})),Object(H.a)(q,Q.j,(function(){return!1})),Object(H.a)(q,Q.h,(function(){return!1})),Object(H.a)(q,Q.b,(function(){return!0})),Object(H.a)(q,Q.c,(function(){return!1})),Object(H.a)(q,Q.a,(function(){return!1})),Object(H.a)(q,Q.f,(function(){return!0})),Object(H.a)(q,Q.g,(function(){return!1})),Object(H.a)(q,Q.e,(function(){return!1})),q)),nt=Object(X.d)("",Object(H.a)({},Q.d,(function(t,e){return e.payload}))),ct=Object(X.d)(null,(M={},Object(H.a)(M,Q.h,(function(t,e){return e.payload})),Object(H.a)(M,Q.e,(function(t,e){return e.payload})),Object(H.a)(M,Q.a,(function(t,e){return e.payload})),M)),rt=Object($.b)({items:tt,filter:nt,loading:et,error:ct}),at=Object(X.e)({name:"auth",initialState:{user:{name:null,email:null,password:null},token:null,isLoggedIn:!1,error:null},extraReducers:(Y={},Object(H.a)(Y,u.a.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(H.a)(Y,u.a.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(H.a)(Y,u.a.logOut.fulfilled,(function(t,e){t.user={name:null,email:null,password:null},t.token=null,t.isLoggedIn=!1})),Object(H.a)(Y,u.a.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),Y)}).reducer,ot=Object(K.a)(Object(X.f)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),it={key:"auth",storage:G.a,whitelist:["token"]},st=Object(X.a)({reducer:{auth:Object(Z.g)(it,at),contacts:rt},middleware:ot}),ut=Object(Z.h)(st),lt=(n(106),n(52));o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(i.a,{store:st,children:Object(d.jsx)(lt.a,{loading:null,persistor:ut,children:Object(d.jsx)(p.a,{children:Object(d.jsx)(J,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";var c=n(17),r=n.n(c),a=n(26),o=n(20),i=n.n(o),s=n(3),u=n(23);n(53);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},j=function(){i.a.defaults.headers.common.Authorization=""},b=Object(s.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/signup",e);case 4:return a=t.sent,o=a.data,l(o.token),t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(1),400===t.t0.response.status&&u.b.error("This user is already exist"),500===t.t0.response.status&&u.b.error("Something went wrong. Try another time"),c(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(s.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/login",e);case 4:return a=t.sent,o=a.data,l(o.token),t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(1),400===t.t0.response.status&&u.b.error("Incorrect password or login"),c(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(s.c)("auth/logout",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/logout");case 4:j(),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(1),c(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(s.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return o=t.sent,s=o.data,t.abrupt("return",s);case 13:throw t.prev=13,t.t0=t.catch(5),n.rejectWithValue(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),O={register:b,logOut:h,logIn:d,fetchCurrentUser:f};e.a=O},19:function(t,e,n){"use strict";var c={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name}};e.a=c},24:function(t,e,n){t.exports={nav:"Navigation_nav__aRA_s",link:"Navigation_link__3dzhM",activeLink:"Navigation_activeLink__29v1M"}},25:function(t,e,n){t.exports={wrap:"AuthNav_wrap__3mEvj",link:"AuthNav_link__1kaYZ",activeLink:"AuthNav_activeLink__2CxoC"}},33:function(t,e,n){t.exports={container:"LogoutBtn_container__37jbY",name:"LogoutBtn_name__jxY9K",btn:"LogoutBtn_btn__1ElPp"}},47:function(t,e,n){t.exports={container:"Container_container__3mgxx"}},48:function(t,e,n){t.exports={header:"AppBar_header__lRRXS"}},59:function(t,e,n){},7:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return d}));var c=n(3),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),o=Object(c.b)("contacts/fetchContactError"),i=Object(c.b)("contacts/addContactRequest"),s=Object(c.b)("contacts/addContactSuccess"),u=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),b=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/changeFilter")}},[[107,2,3]]]);
//# sourceMappingURL=main.ab5229c4.chunk.js.map