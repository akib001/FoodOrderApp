(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{61:function(e,t,o){e.exports={auth:"AuthForm_auth__2UsH7",control:"AuthForm_control__1t_GN",actions:"AuthForm_actions__1KO9a",toggle:"AuthForm_toggle__Xy4ue",error:"AuthForm_error__3rUfu","login-with-google-btn":"AuthForm_login-with-google-btn__mySLS"}},68:function(e,t,o){"use strict";o.r(t);var n=o(3),c=o(1),r=o(2),a=o(59),i=o(65),s=Object(a.a)({apiKey:"AIzaSyAL0N1DDE5PErh_25vFihwZzgbQ2cozKYY",authDomain:"react-http-597d3.firebaseapp.com",databaseURL:"https://react-http-597d3-default-rtdb.firebaseio.com",projectId:"react-http-597d3",storageBucket:"react-http-597d3.appspot.com",messagingSenderId:"353984176080",appId:"1:353984176080:web:6b50fb5fff9b938a1ea3d5"}),l=Object(i.b)(s),u=new i.a,h=o(5),d=o(17),b=o(61),j=o.n(b),g=o(0),p=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),o=Object(c.useState)(!0),a=Object(n.a)(o,2),s=a[0],b=a[1],p=Object(c.useState)(!1),m=Object(n.a)(p,2),f=m[0],O=m[1],_=Object(r.g)(),w=Object(h.b)(),x=Object(h.c)((function(e){return e.auth.error})),v=function(){w(d.a.setError(!1))};return Object(g.jsxs)("section",{className:j.a.auth,children:[Object(g.jsx)("h1",{children:s?"Login":"Sign Up"}),Object(g.jsxs)("form",{onSubmit:function(o){o.preventDefault();var n,c=e.current.value,r=t.current.value;O(!0),n=s?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAL0N1DDE5PErh_25vFihwZzgbQ2cozKYY":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAL0N1DDE5PErh_25vFihwZzgbQ2cozKYY",fetch(n,{method:"POST",body:JSON.stringify({email:c,password:r,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return O(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication Failed!";throw e&&e.error.message&&e.error&&(t=e.error.message),new Error(t)}))})).then((function(e){console.log(e),w(d.a.login(e.idToken)),_("/admin")})).catch((function(e){w(d.a.setError(e.message))}))},children:[Object(g.jsxs)("div",{className:j.a.control,children:[Object(g.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(g.jsx)("input",{onFocus:v,type:"email",id:"email",required:!0,ref:e})]}),Object(g.jsxs)("div",{className:j.a.control,children:[Object(g.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(g.jsx)("input",{onFocus:v,type:"password",id:"password",required:!0,ref:t})]}),x&&Object(g.jsx)("div",{className:j.a.error,children:Object(g.jsx)("p",{children:x})}),Object(g.jsxs)("div",{className:j.a.actions,children:[!f&&Object(g.jsx)("button",{children:s?"Login":"Create Account"}),f&&Object(g.jsx)("p",{children:"Loading..."}),Object(g.jsx)("div",{className:j.a.actions,children:Object(g.jsx)("button",{className:j.a["login-with-google-btn"],onClick:function(){Object(i.c)(l,u).then((function(e){console.log(e._tokenResponse.idToken),console.log(e),w(d.a.login(e._tokenResponse.idToken)),_("/admin")})).catch((function(e){console.log(e)}))},children:"Sign In With Google"})}),Object(g.jsx)("button",{type:"button",className:j.a.toggle,onClick:function(){b((function(e){return!e}))},children:s?"Create new account":"Login with existing account"})]})]})]})};t.default=function(){return Object(g.jsx)(p,{})}}}]);
//# sourceMappingURL=5.a71ec83b.chunk.js.map