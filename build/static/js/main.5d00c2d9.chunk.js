(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:" Task Tracker"};var h=b,O=n(8),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},m=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(d.jsxs)("form",{className:"add-forms",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:O}),o(""),j(""),x(!1)):alert("Please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"teht\xe4v\xe4"}),Object(d.jsx)("input",{type:"text",placeholder:"lis\xe4\xe4 teht\xe4v\xe4",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"p\xe4iv\xe4 ja aika"}),Object(d.jsx)("input",{type:"text",placeholder:"lis\xe4\xe4 pvm ja aika",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control\r form-control-check",children:[Object(d.jsx)("label",{children:" Aseta muistutus"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"save task",className:"btn btn-block"})]})},k=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"meeting",day:"December 5:th  at 20:00",reminder:!0},{id:2,text:"shop",day:"January 1.st at 9:00",reminder:!1}]),o=Object(l.a)(a,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(m,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(d.jsx)(f,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"There\xb4s nothing"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.5d00c2d9.chunk.js.map