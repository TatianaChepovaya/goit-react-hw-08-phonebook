(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{134:function(e,a,r){"use strict";r.d(a,"a",(function(){return b}));var t=r(22),n=r(112),s=r(31),o=(r(0),r(123)),i=r(135),c=r.n(i),l=r(1),u=["label"],b=function(e){var a=e.label,r=Object(s.a)(e,u),i=Object(o.c)(r),b=Object(n.a)(i,2),m=b[0],d=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{className:c.a.label,htmlFor:r.id||r.name,children:a}),Object(l.jsx)("input",Object(t.a)(Object(t.a)({className:c.a.input},m),r)),d.touched&&d.error?Object(l.jsx)("div",{className:c.a.error,children:d.error}):null]})}},135:function(e,a,r){e.exports={label:"MyTextInput_label__3Ter4",input:"MyTextInput_input__3CHKz",error:"MyTextInput_error__2h0UX"}},273:function(e,a,r){e.exports={form:"Registration_form__3Uihy",btn:"Registration_btn__286F9"}},277:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return h}));var t=r(18),n=r.n(t),s=r(26),o=r(123),i=r(161),c=r(273),l=r.n(c),u=r(134),b=r(17),m=r(9),d=r(0),p=r(23),j=(r(53),r(1)),f=i.a({name:i.c().required("Required"),email:i.c().email("Invalid email address").required("Required"),password:i.c().min(6,"Min 8 symbols").max(20,"Max 15 symbols").required("Required"),confirmPassword:i.c().oneOf([i.b("password"),null],"Passwords must match").required("Required")}),h=function(){var e=Object(m.b)(),a=Object(d.useCallback)(function(){var a=Object(s.a)(n.a.mark((function a(r,t){var s,o,i,c,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.setSubmitting,o=t.resetForm,i=r.name,c=r.email,l=r.password,a.prev=2,a.next=5,e(b.a.register({name:i,email:c,password:l}));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),400===a.t0.message&&p.b.error("Incorrect password or login");case 10:console.log(r),s(!1),o({values:""});case 13:case"end":return a.stop()}}),a,null,[[2,7]])})));return function(e,r){return a.apply(this,arguments)}}(),[e]);return Object(j.jsx)(o.b,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:f,onSubmit:a,children:function(e){return Object(j.jsxs)(o.a,{className:l.a.form,children:[Object(j.jsx)(u.a,{label:"Your name",name:"name",type:"text",placeholder:"Sara"}),Object(j.jsx)(u.a,{label:"Your email",name:"email",type:"email",placeholder:"jane@formik.com"}),Object(j.jsx)(u.a,{label:"Your password",name:"password",type:"password"}),Object(j.jsx)(u.a,{label:"Confirm your password",name:"confirmPassword",type:"password"}),Object(j.jsx)("button",{className:l.a.btn,type:"submit",disabled:!(e.dirty&&e.isValid),children:"Submit"})]})}})}}}]);
//# sourceMappingURL=6.aba7ba11.chunk.js.map