(this.webpackJsonpantiantispoofing_frontend=this.webpackJsonpantiantispoofing_frontend||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"webcam":{"bar":{"success_count":{"title":"Successful attempts: ","text":"{{success_count}} out of 5"},"face_score":{"target_face_text":"Target face","not_target_face_text":"Not target face - open the given image on another device"},"input_select":{"title":"Select input device: "},"mirror_toggle":{"title":"Mirror image: "}},"view":{"timer":{"title":"Time left: ","expired":"Time limit was reached. Try again later."},"success":{"text":"5 successful attempts were reached, here\'s your key: {{key}}","copy_button":"Copy to clipboard"}}}}')},28:function(e){e.exports=JSON.parse('{"webcam":{"bar":{"success_count":{"title":"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438: ","text":"{{success_count}} \u0438\u0437 5"},"face_score":{"target_face_text":"\u0426\u0435\u043b\u0435\u0432\u043e\u0435 \u043b\u0438\u0446\u043e","not_target_face_text":"\u041d\u0435\u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u043b\u0438\u0446\u043e - \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438, \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435"},"input_select":{"title":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u043c\u0435\u0440\u0443: "},"mirror_toggle":{"title":"\u041f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435: "}},"view":{"timer":{"title":"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ","expired":"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043f\u043e\u0437\u0436\u0435."},"success":{"text":"\u0411\u044b\u043b\u043e \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043e 5 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a, \u0432\u043e\u0442 \u0432\u0430\u0448 \u043a\u043b\u044e\u0447: {{key}}","copy_button":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u0443\u0444\u0435\u0440"}}}}')},33:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(20),i=c.n(a),s=(c(33),c(13)),u=c(2),o=c(5),l=c.n(o),d=c(7),b=c(3),j=c(17),f=c(48),h=c(1),O=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(null),s=Object(b.a)(i,2),u=s[0],o=s[1],O=Object(n.useState)(null),v=Object(b.a)(O,2),m=v[0],p=v[1],x=Object(n.useState)(!0),g=Object(b.a)(x,2),w=g[0],k=g[1],S=Object(n.useState)(0),_=Object(b.a)(S,2),y=_[0],I=_[1],C=Object(n.useState)(null),N=Object(b.a)(C,2),T=N[0],R=N[1],L=Object(n.useState)(null),E=Object(b.a)(L,2),D=E[0],P=E[1],U=Object(n.useState)(null),J=Object(b.a)(U,2),M=(J[0],J[1]),W=Object(n.useState)(0),F=Object(b.a)(W,2),B=F[0],H=F[1],V=Object(n.useState)(null),q=Object(b.a)(V,2),z=(q[0],q[1],Object(n.useRef)(null)),A=Object(n.useRef)(null),G=Object(n.useRef)(null),K=Object(n.useRef)(null),Q=Object(n.useRef)(null),X=Object(n.useRef)(null),Y=Object(f.a)("common"),Z=Y.t,$=(Y.i18n,function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r&&r.getTracks().forEach((function(e){return e.stop()})),e.t0=a,e.next=4,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:null!==m&&void 0!==m?m:void 0}},audio:!1});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),ee=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=5;break}return e.next=3,navigator.mediaDevices.enumerateDevices();case 3:t=e.sent,o(t.filter((function(e){return"videoinput"===e.kind})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){ee()}),[]),Object(n.useEffect)((function(){$()}),[m]),Object(n.useEffect)((function(){var e;G.current.srcObject=r,null===(e=G.current)||void 0===e||e.play()}),[r]),Object(n.useEffect)((function(){B>=5&&e.callback&&e.callback()}),[B]),Object(n.useEffect)((function(){var t=G.current,c=K.current,n=c.getContext("2d"),r=X.current.offsetWidth/t.videoWidth,a=function(){var e=Q.current,c=e.getContext("2d"),n=600*(t.videoHeight/t.videoWidth);return e.width=600,e.height=n,c.drawImage(t,0,0,600,n),e.toDataURL("image/jpeg",1)};!function(){var e,a;c.width=t.videoWidth*r,c.height=t.videoHeight*r,(null===(e=z.current)||void 0===e?void 0:e.checked)&&n.scale(-1,1),n.drawImage(t,(null===(a=z.current)||void 0===a?void 0:a.checked)?-1*c.width:0,0,c.width,c.height)}(),function(){if(T){var e,t=c.width/600;n.strokeStyle=T.color,n.lineWidth=2,n.rect(T.left*t-((null===(e=z.current)||void 0===e?void 0:e.checked)?c.width:0),T.top*t,(T.right-T.left)*t,(T.bottom-T.top)*t),n.stroke()}}();var i=function(){var t=Object(d.a)(l.a.mark((function t(){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.submitImage({imageURL:a(),id:e.faceID,assignmentId:e.assignmentId,cameraSelected:null===u||void 0===u?void 0:u.find((function(e){return e.deviceId==m})),cameraList:u});case 2:c=t.sent,e.expiredCallback&&c.stop&&!0===c.stop&&e.expiredCallback(),console.log(c,c.success),console.log("aaa"),n=c.success,R(Object(j.a)(Object(j.a)({},c.bbox),{},{color:n?"green":"blue"})),M(c.face_score),P(c.spoofing),n&&H((function(e){return e+1}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.submitImage&&y%15===0&&i();var s=setTimeout((function(){return I((function(e){return e+1}))}),100);return function(){return clearTimeout(s)}}),[y]),Object(h.jsxs)("div",{children:[Object(h.jsx)("video",{autoPlay:!0,className:"hidden",ref:G,muted:!0,playsInline:!0}),Object(h.jsxs)("div",{className:"grid grid-cols-2",children:[Object(h.jsx)("div",{ref:X,className:"col-span-2 lg:col-span-1",children:Object(h.jsx)("canvas",{ref:K})}),Object(h.jsx)("div",{className:"col-span-2 lg:col-span-1 w-50 p-6 bg-gray-100",children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:Z("webcam.bar.success_count.title")}),Z("webcam.bar.success_count.text",{success_count:B})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"spoofing:"})," ",D]}),Object(h.jsx)("li",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("b",{children:Z("webcam.bar.input_select.title")}),Object(h.jsx)("br",{}),Object(h.jsx)("select",{ref:A,onChange:function(e){return p(e.target.value)},children:null===u||void 0===u?void 0:u.map((function(e){return Object(h.jsxs)("option",{value:e.deviceId,children:[" ",e.label||"Camera ".concat(e.deviceId)," "]})}))})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("label",{className:"flex items-center",children:[Object(h.jsx)("b",{className:"pr-2 flex-col",children:Z("webcam.bar.mirror_toggle.title")}),Object(h.jsx)("input",{className:"flex-col",type:"checkbox",ref:z,checked:w,onChange:function(e){k(e.target.checked)}})]})}),Object(h.jsx)("li",{children:e.children}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{id:"successButton",className:"hidden",onClick:function(){return H((function(e){return e+1}))},children:" Success button "})})]})})]}),Object(h.jsx)("canvas",{ref:Q,className:"hidden"})]})},v=function(e){var t,c=Object(n.useState)(null!==(t=e.seconds)&&void 0!==t?t:120),r=Object(b.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){if(!(a<=0)){var t=setTimeout((function(){return i((function(e){return e-1}))}),1e3);return function(){return clearTimeout(t)}}e.callback&&e.callback()}),[a]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[" ",Math.floor(a/60).toString().padStart(2,"0")," "]}),":",Object(h.jsxs)("span",{children:[" ",Math.floor(a%60).toString().padStart(2,"0")," "]})]})},m=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.imageURL.split(",")[1],e.abrupt("return",fetch("https://toloka.suricatvision.com:8443/predictions/biometric",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(JSON.stringify({image:a,assignmentId:t.assignmentId,camera_name:{deviceId:null===(c=t.cameraSelected)||void 0===c?void 0:c.deviceId,label:null===(n=t.cameraSelected)||void 0===n?void 0:n.label},camera_list:null===(r=t.cameraList)||void 0===r?void 0:r.map((function(e){return{deviceId:e.deviceId,label:e.label}})),task:"real"}))}).then((function(e){return e.json()})).catch((function(e){return null})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function p(){var e=Object(u.f)(),t=new URLSearchParams(e.search).get("key"),c=new URLSearchParams(e.search).get("language"),r=new URLSearchParams(e.search).get("faceid"),a=Object(n.useState)(!1),i=Object(b.a)(a,2),s=i[0],o=i[1],j=Object(n.useState)(!1),p=Object(b.a)(j,2),x=p[0],g=p[1],w=Object(f.a)("common"),k=w.t,S=w.i18n;if(Object(n.useEffect)((function(){S.changeLanguage(null!==c&&void 0!==c?c:"en")}),[]),!t)return Object(h.jsx)("div",{});if(s)return Object(h.jsx)("div",{children:k("webcam.view.timer.expired")});if(x){var _=btoa(atob(t)+"|>*<|aaaaa");return Object(h.jsxs)("div",{children:[k("webcam.view.success.text",{key:_}),Object(h.jsx)("button",{className:"pl-2 underline text-gray-600",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(_);case 2:case"end":return e.stop()}}),e)}))),children:k("webcam.view.success.copy_button")})]})}return Object(h.jsx)("div",{children:Object(h.jsx)(O,{assignmentId:atob(t),callback:function(){return g(!0)},expiredCallback:function(){return o(!0)},faceID:r,submitImage:m,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:k("webcam.view.timer.title")}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{seconds:900,callback:function(){return o(!0)}})]})})})}var x=function(){return Object(h.jsx)(s.a,{children:Object(h.jsx)(u.c,{children:Object(h.jsxs)(u.a,{path:"/",children:[" ",Object(h.jsx)(p,{})," "]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},w=c(15),k=c(47),S=c(27),_=c(28);w.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:S},ru:{common:_}}}),i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k.a,{i18n:w.a,children:Object(h.jsx)(x,{})})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.362f9cb5.chunk.js.map