(this["webpackJsonpsheety-writer"]=this["webpackJsonpsheety-writer"]||[]).push([[0],{112:function(e,t,n){e.exports=n(179)},117:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(117),n(19)),c=n(219),s=n(227),u=n(234),d=n(97),p=n.n(d),g=n(100),f=n(238),v=n(224),h=n(88),m=n.n(h),b=Object(c.a)((function(e){return{close:{padding:e.spacing(.5)}}}));function E(e){var t=b(),n=r.a.useState(!1),a=Object(l.a)(n,2),i=a[0],o=a[1],c=r.a.useState("Hello!"),s=Object(l.a)(c,2),u=s[0],d=s[1];function p(e,t){"clickaway"!==t&&o(!1)}return e.logger.log=function(e){d(e),o(!0)},r.a.createElement(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,autoHideDuration:3e3,onClose:p,message:u,action:[r.a.createElement(v.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:p},r.a.createElement(m.a,null))]})}var y=n(242),w=n(236),S=n(228),I=n(58),O=n(27),j=n.n(O),P=n(39),C=n(226),k=n(235);function x(e){return r.a.createElement(k.a,{id:"date",label:"Date",type:"date",fullWidth:!0,value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},InputLabelProps:{shrink:!0}})}var N=n(241),W=n(89);function F(e){return r.a.createElement("div",null,r.a.createElement(N.a,{shrink:!0,htmlFor:"age-native-label-placeholder"},"Type"),r.a.createElement(W.a,{fullWidth:!0,value:e.value,onChange:function(t){return e.onChange(t.target.value)}},r.a.createElement("option",{value:"",key:-1},"- None -"),e.choices.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))}function G(e){return r.a.createElement(k.a,{id:"standard-number",label:"Amount",placeholder:"How much was spent...",value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},type:"number",fullWidth:!0,InputLabelProps:{shrink:!0},margin:"normal"})}function R(e){return r.a.createElement(k.a,{id:"standard-full-width",label:"Comment",value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},type:"text",placeholder:"What you spent money on...",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})}var M=n(99),Y=n(98),A=n(24),U=n(225),q=n(180),L=n(240),z=Object(c.a)((function(e){return Object(y.a)({root:{flexGrow:1},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{color:e.palette.text.hint,position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}})}));function K(e){var t=e.inputRef,n=Object(M.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:t},n))}var J={Control:function(e){var t=e.children,n=e.innerProps,a=e.innerRef,i=e.selectProps,o=i.classes,l=i.TextFieldProps;return r.a.createElement(k.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:K,inputProps:Object(P.a)({className:o.input,ref:a,children:t},n)}},l))},Menu:function(e){return r.a.createElement(q.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},NoOptionsMessage:function(e){return r.a.createElement(g.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(L.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return r.a.createElement(g.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return r.a.createElement(g.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return r.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function V(e){var t=e.suggestions.map((function(e){return{value:e,label:e}})),n=z(),a=Object(A.a)();var i={input:function(e){return Object(P.a)({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}},o=e.value?{label:e.value,value:e.value}:null;return r.a.createElement("div",{className:n.root},r.a.createElement(U.a,null,r.a.createElement(Y.a,{classes:n,styles:i,inputId:"react-select-single",TextFieldProps:{label:"Type",InputLabelProps:{htmlFor:"react-select-single",shrink:!0}},placeholder:"Expense type...",isClearable:!0,options:t,components:J,value:o,onChange:function(t){null!==t&&void 0!==t?e.onChange(t.value):e.onChange(void 0)}})))}var B=n(68),H=n.n(B),D=n(91),T=n.n(D);var Q=n(92),X=new URL(window.location.href);function Z(){return function(e){return null!==e&&"true"===e.toLowerCase()}(X.searchParams.get("debug"))}function $(e){var t=function(){var e=X.searchParams.get("config");return null===e?Q:e}();if("string"===typeof t){try{return{valid:!0,value:JSON.parse(t)}}catch(n){if(e)try{return{valid:!0,value:function(e,t){var n=H.a.AES.decrypt(e,t);return JSON.parse(n.toString(H.a.enc.Utf8))}(t,e)}}catch(a){}}return{valid:!1}}return{valid:!0,value:t}}function _(e){var t=$(e);if(!t.valid)return{valid:!1};var n=function(e){var t=new T.a({allErrors:!0}).compile({title:"GApiData",type:"object",properties:{apiKey:{type:"string"},clientId:{type:"string"},spreadsheetId:{type:"string"},sheetData:{type:"array",minItems:1,items:{type:"object",required:["title","headers"],properties:{title:{type:"string"},headers:{type:"array",minItems:1,items:{type:"object",required:["title"],properties:{title:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}}},additionalProperties:!1,required:["apiKey","clientId","spreadsheetId","sheetData"]});return t(e)?{valid:!0,value:e}:{valid:!1,errors:t.errors}}(t.value);return n.valid?{valid:!0,value:n.value}:{valid:!1}}var ee=["https://sheets.googleapis.com/$discovery/rest?version=v4"];function te(e,t,n){function a(){return j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.awrap(gapi.client.init({apiKey:e,clientId:t,discoveryDocs:ee,scope:"https://www.googleapis.com/auth/spreadsheets"}));case 3:gapi.auth2.getAuthInstance().isSignedIn.listen(n),n(gapi.auth2.getAuthInstance().isSignedIn.get()),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(JSON.stringify(a.t0,null,2));case 10:case"end":return a.stop()}}),null,null,[[0,7]])}var r=document.createElement("script");r.src="https://apis.google.com/js/client.js",r.onload=function(){gapi.load("client:auth2",a)},document.body.appendChild(r)}function ne(){gapi.auth2.getAuthInstance().signIn()}function ae(){gapi.auth2.getAuthInstance().signOut()}function re(e,t,n){var a;return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.awrap(gapi.client.sheets.spreadsheets.values.append({spreadsheetId:e,range:"".concat(t),valueInputOption:"USER_ENTERED",resource:{values:[n]}}));case 2:return a=r.sent,r.abrupt("return",{response:a,updatedRange:a.result.updates.updatedRange,updatedRows:a.result.updates.updatedRows});case 4:case"end":return r.stop()}}))}var ie=Object(c.a)((function(){return{root:{padding:24},button:{marginTop:"30px"}}}));function oe(e,t){var n=Array.from({length:e.length}).fill(void 0);return e.forEach((function(e,a){var r=e.title,i=t[a];i&&(/date/i.test(r)?n[a]=function(e){var t=new Date(e),n="".concat(t.getFullYear()).padStart(4,"0"),a="".concat(t.getMonth()+1).padStart(2,"0"),r="".concat(t.getDate()).padStart(2,"0");return"".concat(r,"/").concat(a,"/").concat(n)}(i):n[a]=i)})),n}function le(e){var t=ie(),n={};e.elements.forEach((function(e,t){var a=e.title;/date/i.test(a)?n[t]=function(){var e=new Date,t="".concat(e.getFullYear()).padStart(4,"0"),n="".concat(e.getMonth()+1).padStart(2,"0"),a="".concat(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(a)}():n[t]=""}));var a=r.a.useState(Object(P.a)({},n)),i=Object(l.a)(a,2),o=i[0],c=i[1],s=function(e){return function(t){c((function(n){return Object(P.a)({},n,Object(I.a)({},e,String(t)))}))}};return r.a.createElement("div",{className:t.root},e.elements.map((function(e,t){var n={key:t,value:o[t],onChange:s(t)};return/date/i.test(e.title)?r.a.createElement(x,n):/amount/i.test(e.title)?r.a.createElement(G,n):/comment/i.test(e.title)?r.a.createElement(R,n):/type/i.test(e.title)?r.a.createElement(F,Object.assign({},n,{choices:e.values||[]})):/text/i.test(e.title)?r.a.createElement(V,Object.assign({},n,{suggestions:e.values||[]})):r.a.createElement(g.a,{key:t},'Cannot build widget for "',e.title,'"')})),e.isSignedIn?r.a.createElement(C.a,{fullWidth:!0,size:"large",variant:"contained",color:"secondary",className:t.button,onClick:function(){return function(){var t,a;return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=oe(e.elements,o),console.log(JSON.stringify([e.spreadsheetId,e.sheet,t],null,2)),Z()){r.next=8;break}return r.next=5,j.a.awrap(re(e.spreadsheetId,e.sheet,t));case 5:a=r.sent,console.log(a),e.logger.log("Updated: ".concat(a.updatedRange));case 8:c(Object(P.a)({},n));case 9:case"end":return r.stop()}}))}()}},"submit"):r.a.createElement(C.a,{disabled:!0,fullWidth:!0,size:"large",variant:"contained",color:"secondary",className:t.button},"You must sign in to submit"))}var ce=Object(c.a)((function(e){return Object(y.a)({root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}})}));function se(e){var t=ce(),n=r.a.useState(0),a=Object(l.a)(n,2),i=a[0],o=a[1];return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{position:"static",color:"default"},r.a.createElement(w.a,{value:i,onChange:function(e,t){return o(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},e.sheets.map((function(e,t){var n=e.title;return r.a.createElement(S.a,{label:n,key:t})})))),e.sheets.map((function(t,n){var a=t.headers,o=t.title;return i===n&&r.a.createElement(le,{isSignedIn:e.isSignedIn,spreadsheetId:e.spreadsheetId,logger:e.logger,elements:a,sheet:o,key:n})})))}var ue=n(93),de=n.n(ue),pe=n(94),ge=n.n(pe),fe=n(229);function ve(e,t,n){ve.loaded||(ve.loaded=!0,te(e,t,n))}function he(e){r.a.useEffect((function(){return ve(e.apiKey,e.clientId,e.onSignIn)}),[e.apiKey,e.clientId,e.onSignIn]);var t=r.a.createElement(v.a,{onClick:ne,title:"Sign In",color:"inherit"},r.a.createElement(fe.a,{badgeContent:"1",color:"secondary"},r.a.createElement(de.a,null))),n=r.a.createElement(v.a,{onClick:ae,title:"Sign Out",color:"inherit"},r.a.createElement(ge.a,null));return r.a.createElement("div",null,e.isSignedIn?n:t)}ve.loaded=!1;var me=n(239),be=n(233),Ee=n(231),ye=n(232),we=n(230),Se=n(95),Ie=n.n(Se),Oe=n(96),je=n.n(Oe);function Pe(e){var t=r.a.useState(!e.isValid),n=Object(l.a)(t,2),a=n[0],i=n[1],o=e.isValidPassword(""),c=r.a.useState(o),s=Object(l.a)(c,2),u=s[0],d=s[1],p=r.a.useState(""),g=Object(l.a)(p,2),f=g[0],h=g[1];function m(t){i(!1),t&&e.onValue(f),h("")}return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:function(){h(""),i(!0)},title:"Set unlock secret",color:"inherit"},e.isValid?r.a.createElement(je.a,null):r.a.createElement(fe.a,{badgeContent:"1",color:"secondary"},r.a.createElement(Ie.a,null))),r.a.createElement(me.a,{open:a,onClose:function(){return m(!1)}},r.a.createElement(we.a,null,"Set unlock secret"),r.a.createElement(Ee.a,null,r.a.createElement(ye.a,null,"Set the secret to decrypt the API key and sheet id."),r.a.createElement(k.a,{error:!u,autoFocus:!0,margin:"dense",label:"Unlock secret",type:"text",onChange:function(t){var n=t.target.value;h(n),d(e.isValidPassword(n))},fullWidth:!0,value:f})),r.a.createElement(be.a,null,r.a.createElement(C.a,{onClick:function(){return m(!1)},color:"primary"},"Cancel"),r.a.createElement(C.a,{onClick:function(){return m(!0)},color:"primary"},"Set"))))}var Ce=n(69),ke=Object(c.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1,whiteSpace:"nowrap",paddingRight:10},subtitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:"bold"},failure:{padding:24,fontStyle:"italic"}}}));var xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(){var e=ke(),t=localStorage.getItem("config-secret")||"",n=r.a.useState(_(t)),a=Object(l.a)(n,2),i=a[0],o=a[1],c=r.a.useState(i.valid),d=Object(l.a)(c,2),f=d[0],v=d[1],h=r.a.useState(!0),m=Object(l.a)(h,2),b=m[0],y=m[1],w=r.a.useState(!1),S=Object(l.a)(w,2),I=S[0],O=S[1],P=r.a.useState(""),C=Object(l.a)(P,2),k=C[0],x=C[1];window.addEventListener("online",(function(){return y(!0)})),window.addEventListener("offline",(function(){return y(!1)}));var N={log:function(e){return console.log(e)}};return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title,onClick:function(){return N.log("".concat(Ce.a,": ").concat(Ce.b))}},"Sheety Writer"),k&&r.a.createElement(g.a,{className:e.subtitle},k),!b&&r.a.createElement(p.a,null),i.valid&&r.a.createElement(he,{isSignedIn:I,onSignIn:function(e){O(e),function(e){var t;return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.awrap(gapi.client.sheets.spreadsheets.get({spreadsheetId:e}));case 2:return t=n.sent,n.abrupt("return",String(t.result.properties.title));case 4:case"end":return n.stop()}}))}(i.value.spreadsheetId).then((function(e){return x(e)}))},apiKey:i.value.apiKey,clientId:i.value.clientId}),!i.valid&&r.a.createElement(Pe,{isValid:f,onValue:function(e){var t=_(e);o(t),v(t.valid),t.valid&&localStorage.setItem("config-secret",e)},isValidPassword:function(e){return _(e).valid}}))),i.valid?r.a.createElement(se,{isSignedIn:I,spreadsheetId:i.value.spreadsheetId,sheets:i.value.sheetData,logger:N}):r.a.createElement(g.a,{className:e.failure,variant:"h6"},"Invalid, or encrypted, config file."),r.a.createElement(E,{logger:N}))}),null),document.getElementById("root")),Z()?"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})):function(e){if("serviceWorker"in navigator){if(new URL("/sheety-writer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sheety-writer","/service-worker.js");xe?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ne(t,e)}))}}()},69:function(e){e.exports=JSON.parse('{"a":"sheety-writer","b":"0.1.1"}')},92:function(e){e.exports=JSON.parse('"U2FsdGVkX19tsw/Nykpp0ZvsVlSPHkEFs/PtB/yFpCBdIO/KPQ+TOVkhYfs0kTXR0tT+Y4ghTqSeuF7xEVw43UVb1iFbli3isvSSvK9WZaqo/yAFGJ/qdbweoFDbYC85AxQgeehGeIQtjFk4r6A7zs354SOOh1FaIg8SKxfO4Ws3t8aCzmSqezgYud7R5cbTeROvOq+MH+2oS2xJPsbpNPmsUNjKD3XaerMUf6yyOAHkOFagr8ummcfUgodycf8601MC2zMPUXV77ilaNnkjQDuEMc3LtO7WTBeOdYJ1n1YLfl1r9hF3AT5dFdFwQrK0qmP+jYE0sUW03/YSHkll34P5HvBxQEu1hYwD3T93QkFzBAIrLprjpWfhN8Y77cj/sIB7mBEsvyDKg2lpkXH5jN0EoMGnnmFHjdmzWgvIgtK3ovb2ZI1GRJ2u88p+gvZzRN5NlmIGcqEIhn3ZyN6xlHKiKUKUB8SuxQL/ugDVXnGM6kb2C4ucGtjequOfUUM0k/mcjKDOW19lOTUjWOMEDE8Ax75tq5x1qAhr1b4i4lRc+Y1eKc3EYIg/GYZ7Uy/834Vv7Bsq9rM03lpxXRhFUHY37FrlWQ+ML/EUPiiLRQrvz76uPvCxgdyIIGaCYxdf4hV4UIcs0u9JY7wG9J0PooLWLBCrCrlHnsozSssCjxpcd/Hf16NqXdihHqe0aJhvQzkvXSGIaYHGugF61aVJHv1c4iw9HWtO7Rw+Aaa5g40EGtc2ef/gtMgolB6QSe7Yfxj0WvHB3m6AlvxGtPRjXi78pDWroYhQvifV8+dNjp1L9vhLj5r3mPWrw+fSjZesrFMXNyGzKMIZpr7CaqMh9s1XAYZ3+9AIagSB1Qv477Olzwt1AMy3/huNLyYPQZuqDao9WoKvjoWJatvVpZqdpu6WPRmH02wBG6nWEwMGLSCKMG+tsn+tZGpUp0PoTvYfx93o8ajAEy76NlGPnJprOaJq06biuPr6igqPlmhWtpxFQQLGDOnGj3q2PTqmzOiNlAkVW9iSiMqzrgdYB+MFEmxuHgylmyy4knzwBGz5KaAsetR1uG0d3JEw3KqGVRwiPeq2YSP10sYNtiPJaXIL65i8CnifZFuqz9fCeJsA88o4yMxU99PFwtg5iPQ/FDEtMp/Qm2vzK6hC+QBIB8LmCUH2lpqWqx2iBNwUzR8R+VQ8ZcIKxLg3X5GfA4eXpsU6ZGCJsmhgjkKeEnvuCuH9PzrK6r+nsixMT9SP8edM2QcNNi0PkFYfS0OEr6G5zHLYJ3sSLFcTjuzT8D6sUf1P6VCuN5PBb3IGJBcst3Eo16IhPP4nTLIuzpPDiOG0cnkIFTRFBc77djPh0aWgMJ82UHsejmE4H5Jah0m+B7iMzTONeIYifpqLm8NsvlmmREWx4+gIRlIfM+J0MvbYQb5NB/RecHg53gL9vcNx7OKYUPQ="')}},[[112,1,2]]]);
//# sourceMappingURL=main.5dd80e94.chunk.js.map