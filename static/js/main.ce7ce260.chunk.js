(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(173)},108:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=(n(108),n(18)),c=n(213),s=n(219),u=n(226),d=n(92),p=n.n(d),f=n(95),g=n(231),v=n(216),h=n(84),m=n.n(h),y=Object(c.a)(function(e){return{close:{padding:e.spacing(.5)}}});function b(e){var t=y(),n=r.a.useState(!1),a=Object(l.a)(n,2),o=a[0],i=a[1],c=r.a.useState("Hello!"),s=Object(l.a)(c,2),u=s[0],d=s[1];function p(e,t){"clickaway"!==t&&i(!1)}return e.logger.log=function(e){d(e),i(!0)},r.a.createElement(g.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:3e3,onClose:p,message:u,action:[r.a.createElement(v.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:p},r.a.createElement(m.a,null))]})}var w=n(233),E=n(228),S=n(220),O=n(54),I=n(25),j=n.n(I),C=n(42),k=n(34),x=n(218),P=n(227);function N(e){return r.a.createElement(P.a,{id:"date",label:"Date",type:"date",fullWidth:!0,value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},InputLabelProps:{shrink:!0}})}function W(e){return r.a.createElement(P.a,{id:"standard-number",label:"Amount",placeholder:"How much was spent...",value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},type:"number",fullWidth:!0,InputLabelProps:{shrink:!0},margin:"normal"})}function q(e){return r.a.createElement(P.a,{id:"standard-full-width",label:"Comment",value:e.value,onChange:function(t){var n=t.target.value;e.onChange(n)},type:"text",placeholder:"What you spent money on...",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})}var A=n(94),D=n(93),M=n(52),L=n(217),R=n(174),z=n(232),T=Object(c.a)(function(e){return Object(w.a)({root:{flexGrow:1},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{color:e.palette.text.hint,position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}})});function G(e){var t=e.inputRef,n=Object(A.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:t},n))}var U={Control:function(e){var t=e.children,n=e.innerProps,a=e.innerRef,o=e.selectProps,i=o.classes,l=o.TextFieldProps;return r.a.createElement(P.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:G,inputProps:Object(k.a)({className:i.input,ref:a,children:t},n)}},l))},Menu:function(e){return r.a.createElement(R.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},NoOptionsMessage:function(e){return r.a.createElement(f.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(z.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return r.a.createElement(f.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return r.a.createElement(f.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return r.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function F(e){var t=e.suggestions.map(function(e){return{value:e,label:e}}),n=T(),a=Object(M.a)();var o={input:function(e){return Object(k.a)({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}},i=e.value?{label:e.value,value:e.value}:null;return r.a.createElement("div",{className:n.root},r.a.createElement(L.a,null,r.a.createElement(D.a,{classes:n,styles:o,inputId:"react-select-single",TextFieldProps:{label:"type",InputLabelProps:{htmlFor:"react-select-single",shrink:!0}},placeholder:"Type expense",isClearable:!0,options:t,components:U,value:i,onChange:function(t){null!==t&&void 0!==t?e.onChange(t.value):e.onChange(void 0)}})))}var Q=n(63),V=n.n(Q),B=n(86),J=n.n(B);var K=n(87),H=new URL(window.location.href);function Y(){return function(e){return null!==e&&"true"===e.toLowerCase()}(H.searchParams.get("debug"))}function Z(e){var t=function(){var e=H.searchParams.get("config");return null===e?K:e}();if("string"===typeof t){try{return{valid:!0,value:JSON.parse(t)}}catch(n){if(e)try{return{valid:!0,value:function(e,t){var n=V.a.AES.decrypt(e,t);return JSON.parse(n.toString(V.a.enc.Utf8))}(t,e)}}catch(a){}}return{valid:!1}}return{valid:!0,value:t}}function X(e){var t=Z(e);if(!t.valid)return{valid:!1};var n=function(e){var t=new J.a({allErrors:!0}).compile({title:"GApiData",type:"object",properties:{apiKey:{type:"string"},clientId:{type:"string"},spreadsheetId:{type:"string"},sheetData:{type:"array",minItems:1,items:{type:"object",required:["title","headers"],properties:{title:{type:"string"},headers:{type:"array",minItems:1,items:{type:"object",required:["title"],properties:{title:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}}},additionalProperties:!1,required:["apiKey","clientId","spreadsheetId","sheetData"]});return t(e)?{valid:!0,value:e}:{valid:!1,errors:t.errors}}(t.value);return n.valid?{valid:!0,value:n.value}:{valid:!1}}var $=["https://sheets.googleapis.com/$discovery/rest?version=v4"],_="https://www.googleapis.com/auth/spreadsheets";function ee(e,t,n){function a(){return r.apply(this,arguments)}function r(){return(r=Object(C.a)(j.a.mark(function a(){return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,gapi.client.init({apiKey:e,clientId:t,discoveryDocs:$,scope:_});case 3:gapi.auth2.getAuthInstance().isSignedIn.listen(n),n(gapi.auth2.getAuthInstance().isSignedIn.get()),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(JSON.stringify(a.t0,null,2));case 10:case"end":return a.stop()}},a,null,[[0,7]])}))).apply(this,arguments)}var o=document.createElement("script");o.src="https://apis.google.com/js/client.js",o.onload=function(){gapi.load("client:auth2",a)},document.body.appendChild(o)}function te(){gapi.auth2.getAuthInstance().signIn()}function ne(){gapi.auth2.getAuthInstance().signOut()}function ae(e,t,n){return re.apply(this,arguments)}function re(){return(re=Object(C.a)(j.a.mark(function e(t,n,a){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.sheets.spreadsheets.values.append({spreadsheetId:t,range:"".concat(n),valueInputOption:"USER_ENTERED",resource:{values:[a]}});case 2:return r=e.sent,e.abrupt("return",{response:r,updatedRange:r.result.updates.updatedRange,updatedRows:r.result.updates.updatedRows});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(){return(oe=Object(C.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.sheets.spreadsheets.get({spreadsheetId:t});case 2:return n=e.sent,e.abrupt("return",String(n.result.properties.title));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ie=Object(c.a)(function(){return{root:{padding:24},button:{marginTop:"30px"}}});function le(e,t){var n=Array.from({length:e.length}).fill(void 0);return e.forEach(function(e,a){var r=e.title,o=t[a];o&&(/date/i.test(r)?n[a]=function(e){var t=new Date(e),n="".concat(t.getFullYear()).padStart(4,"0"),a="".concat(t.getMonth()+1).padStart(2,"0"),r="".concat(t.getDate()).padStart(2,"0");return"".concat(r,"/").concat(a,"/").concat(n)}(o):n[a]=o)}),n}function ce(e){var t=ie(),n={};e.elements.forEach(function(e,t){var a=e.title;/date/i.test(a)?n[t]=function(){var e=new Date,t="".concat(e.getFullYear()).padStart(4,"0"),n="".concat(e.getMonth()+1).padStart(2,"0"),a="".concat(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(a)}():n[t]=""});var a=r.a.useState(Object(k.a)({},n)),o=Object(l.a)(a,2),i=o[0],c=o[1],s=function(){var t=Object(C.a)(j.a.mark(function t(){var a,r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=le(e.elements,i),console.log(JSON.stringify([e.spreadsheetId,e.sheet,a],null,2)),Y()){t.next=8;break}return t.next=5,ae(e.spreadsheetId,e.sheet,a);case 5:r=t.sent,console.log(r),e.logger.log("Updated: ".concat(r.updatedRange));case 8:c(Object(k.a)({},n));case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),u=function(e){return function(t){c(function(n){return Object(k.a)({},n,Object(O.a)({},e,String(t)))})}};return r.a.createElement("div",{className:t.root},e.elements.map(function(e,t){var n={key:t,value:i[t],onChange:u(t)};return/date/i.test(e.title)?r.a.createElement(N,n):/amount/i.test(e.title)?r.a.createElement(W,n):/comment/i.test(e.title)?r.a.createElement(q,n):/type/i.test(e.title)?r.a.createElement(F,Object.assign({},n,{suggestions:e.values||[]})):r.a.createElement(f.a,{key:t},'Cannot build widget for "',e.title,'"')}),e.isSignedIn?r.a.createElement(x.a,{fullWidth:!0,size:"large",variant:"contained",color:"secondary",className:t.button,onClick:function(){return s()}},"submit"):r.a.createElement(x.a,{disabled:!0,fullWidth:!0,size:"large",variant:"contained",color:"secondary",className:t.button},"You must sign in to submit"))}var se=Object(c.a)(function(e){return Object(w.a)({root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}})});function ue(e){var t=se(),n=r.a.useState(0),a=Object(l.a)(n,2),o=a[0],i=a[1];return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{position:"static",color:"default"},r.a.createElement(E.a,{value:o,onChange:function(e,t){return i(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},e.sheets.map(function(e,t){var n=e.title;return r.a.createElement(S.a,{label:n,key:t})}))),e.sheets.map(function(t,n){var a=t.headers,i=t.title;return o===n&&r.a.createElement(ce,{isSignedIn:e.isSignedIn,spreadsheetId:e.spreadsheetId,logger:e.logger,elements:a,sheet:i,key:n})}))}var de=n(88),pe=n.n(de),fe=n(89),ge=n.n(fe),ve=n(221);function he(e,t,n){he.loaded||(he.loaded=!0,ee(e,t,n))}function me(e){r.a.useEffect(function(){return he(e.apiKey,e.clientId,e.onSignIn)},[e.apiKey,e.clientId,e.onSignIn]);var t=r.a.createElement(v.a,{onClick:te,title:"Sign In",color:"inherit"},r.a.createElement(ve.a,{badgeContent:"1",color:"secondary"},r.a.createElement(pe.a,null))),n=r.a.createElement(v.a,{onClick:ne,title:"Sign Out",color:"inherit"},r.a.createElement(ge.a,null));return r.a.createElement("div",null,e.isSignedIn?n:t)}he.loaded=!1;var ye=n(230),be=n(225),we=n(223),Ee=n(224),Se=n(222),Oe=n(90),Ie=n.n(Oe),je=n(91),Ce=n.n(je),ke="";function xe(e){var t=r.a.useState(!e.isValid),n=Object(l.a)(t,2),a=n[0],o=n[1],i=e.isValidPassword(ke),c=r.a.useState(i),s=Object(l.a)(c,2),u=s[0],d=s[1],p=r.a.useState(ke),f=Object(l.a)(p,2),g=f[0],h=f[1];function m(t){o(!1),t&&e.onValue(g),h(ke)}return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:function(){h(ke),o(!0)},title:"Set unlock secret",color:"inherit"},e.isValid?r.a.createElement(Ce.a,null):r.a.createElement(ve.a,{badgeContent:"1",color:"secondary"},r.a.createElement(Ie.a,null))),r.a.createElement(ye.a,{open:a,onClose:function(){return m(!1)}},r.a.createElement(Se.a,null,"Set unlock secret"),r.a.createElement(we.a,null,r.a.createElement(Ee.a,null,"Set the secret to decrypt the API key and sheet id."),r.a.createElement(P.a,{error:!u,autoFocus:!0,margin:"dense",label:"Unlock secret",type:"text",onChange:function(t){var n=t.target.value;h(n),d(e.isValidPassword(n))},fullWidth:!0,value:g})),r.a.createElement(be.a,null,r.a.createElement(x.a,{onClick:function(){return m(!1)},color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:function(){return m(!0)},color:"primary"},"Set"))))}var Pe="Sheety Writer",Ne=Object(c.a)(function(){return{root:{flexGrow:1},title:{flexGrow:1,whiteSpace:"nowrap",paddingRight:10},subtitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:"bold"},failure:{padding:24,fontStyle:"italic"}}}),We=!0,qe="config-secret";var Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(function(){var e=Ne(),t=localStorage.getItem(qe)||"",n=r.a.useState(X(t)),a=Object(l.a)(n,2),o=a[0],i=a[1],c=r.a.useState(o.valid),d=Object(l.a)(c,2),g=d[0],v=d[1],h=r.a.useState(!0),m=Object(l.a)(h,2),y=m[0],w=m[1],E=r.a.useState(!1),S=Object(l.a)(E,2),O=S[0],I=S[1],j=r.a.useState(""),C=Object(l.a)(j,2),k=C[0],x=C[1];window.addEventListener("online",function(){return w(!0)}),window.addEventListener("offline",function(){return w(!1)});var P={log:function(e){return console.log(e)}};return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(f.a,{variant:"h6",className:e.title},Pe),k&&r.a.createElement(f.a,{className:e.subtitle},"Test Only -- Copy of Despesas Londres"),!y&&r.a.createElement(p.a,null),o.valid&&r.a.createElement(me,{isSignedIn:O,onSignIn:function(e){I(e),function(e){return oe.apply(this,arguments)}(o.value.spreadsheetId).then(function(e){return x(e)})},apiKey:o.value.apiKey,clientId:o.value.clientId}),(!o.valid||!We)&&r.a.createElement(xe,{isValid:g,onValue:function(e){var t=X(e);i(t),v(t.valid),t.valid&&localStorage.setItem(qe,e)},isValidPassword:function(e){return X(e).valid}}))),o.valid?r.a.createElement(ue,{isSignedIn:O,spreadsheetId:o.value.spreadsheetId,sheets:o.value.sheetData,logger:P}):r.a.createElement(f.a,{className:e.failure,variant:"h6"},"Invalid, or encrypted, config file."),r.a.createElement(b,{logger:P}))},null),document.getElementById("root")),Y()?"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}):function(e){if("serviceWorker"in navigator){if(new URL("/sheety-writer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sheety-writer","/service-worker.js");Ae?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):De(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):De(t,e)})}}()},87:function(e){e.exports="U2FsdGVkX19oQw4qMaSxvQ96231a+nzayDp2fM2MZ6XwtaLfzgrCWL6MNRezOtOEqruH4vqEGJUkREBsA4TIW1KYRrvBeIx1ugT9qvHQ3jpij6JhZ4QqI6E4Zqc6NlAgtjwXxQB57gGTaZj8yc/saBVQ79kBGQvUEA/qG661fEvqw0Kyia5un+xUTzDQwl0BhAO/PNQqdlFoyjrymNUS0CZcMEYyZbK0q0j4aCPqdgQnbOeQvetxpJNk0M4l+fLQWHNOyDGX0D6bBotw1XISzleMRn6c/q+SBMZ5+3Ok6OdMC+hhHmFJzt41c5zjSH1y1hNo+Z7K617jv+ooNyrN7nTqnvTxAfkqLvjaWRfnHLyd9JYNYcx5eTvOtT1RWGXVwNtLXXls0lMZEt+cDi6vMrLnxTtZNoyS0/ti7eDf09nk4iYiHeUzGTBRoty3/mIVydFxfwPsqOsqD/59BIYjvHcTcqmyuGHwt9GLC+nQ9+7rkUFPmtHtYZ90rCeJ+2Vqp+ez7ASAD0UufwnZpfLUH/uuP0wky8CBNiZLWhSw/5ACKFxUQoS50WeqkYjElxmWCJrSCyLJopBq0zvd6Jx+tPXqGb9lin5uurpfwMA69JFqxqyG/A1nPYtVyPOFKQDKqZC8mkmWIFBxvn2rxI58IrhbwanEccas17ouILOGs6db+/Qnsw5ME88cVpm5hPCeni/PxyNSM1InJmgcYtnKlmobSMTbSMRIU475G6WuU8P1zzjlO6jllKEDzWkrhlGQwsC+XMQbxL3geNdiMF6zOcD/rDthssjFYJ1lozBg/+fggjIMQyItbBF8oA61j/iA"}},[[103,1,2]]]);
//# sourceMappingURL=main.ce7ce260.chunk.js.map