(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{10:function(e,t,c){e.exports={"todo-block":"ToDo_todo-block__4dTlo","todo-block__title":"ToDo_todo-block__title__USH3W","create-task":"ToDo_create-task__zOWjD",input:"ToDo_input__1QUjr",task:"ToDo_task__28Hee",task__text:"ToDo_task__text__KwIEZ",tasks:"ToDo_tasks__jDYPd",nothing:"ToDo_nothing__1H79f"}},38:function(e,t,c){e.exports={fullScreen:"Home_fullScreen__WLOms"}},39:function(e,t,c){e.exports={block:"GetUsers_block__2-gyL"}},52:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(18),n=c.n(s),r=c(13),o=c(11),i=(c(52),c(2)),l=c(9),d=c.n(l),j=c(1),u=function(e){return Object(j.jsx)("div",{className:d.a.header__item,children:Object(j.jsx)(r.b,{className:d.a.link,to:e.path,children:e.text})})};var b=function(){return Object(j.jsx)("header",{className:d.a.header,children:Object(j.jsxs)("div",{className:d.a.wrapper,children:[Object(j.jsx)("div",{className:d.a.header__logo,children:Object(j.jsxs)(r.b,{className:d.a.link,to:"/",children:[Object(j.jsx)("img",{src:"./assets/img/logo.png",alt:""}),Object(j.jsx)("div",{children:"Logo"})]})}),Object(j.jsx)("div",{className:d.a.header__row,children:[{text:"ToDo",path:"/toDo"},{text:"GetUsers",path:"/getUsers"}].map((function(e){return Object(j.jsx)(u,{text:e.text,path:e.path})}))})]})})},_=c(38),h=c.n(_),O=function(){return Object(a.useEffect)((function(){document.title="Welcome"}),[]),Object(j.jsx)("div",{className:h.a.fullScreen,children:Object(j.jsx)("div",{children:"Welcome"})})},p=c(12),x=c(42),f=c(10),m=c.n(f),k=function(){Object(a.useEffect)((function(){document.title="ToDo"}),[]);var e=Object(o.b)(),t=Object(o.c)((function(e){return e.todo.tasks})),c=Object(a.useState)(""),s=Object(x.a)(c,2),n=s[0],r=s[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:m.a["todo-block"],children:[Object(j.jsx)("div",{className:m.a["todo-block__title"],children:"TODO List"}),Object(j.jsxs)("div",{className:m.a["create-task"],children:[Object(j.jsx)("label",{htmlFor:"create",children:"New Task: "}),Object(j.jsx)("div",{className:m.a.input,children:Object(j.jsx)("input",{onChange:function(e){r(null===e||void 0===e?void 0:e.target.value)},value:n,type:"text",id:"create"})}),Object(j.jsx)("button",{onClick:function(){(null===n||void 0===n?void 0:n.length)>=5?(e({type:"ADD_TASK",payload:{id:Date.now(),checked:!1,text:n}}),r("")):alert("The text must contain at least 5 chars")},children:Object(j.jsx)("img",{src:"./assets/img/create.png",alt:""})})]}),Object(j.jsx)("div",{className:m.a.tasks,children:0!==t.length?[].concat(Object(p.a)(t.filter((function(e){return!1===e.checked}))),Object(p.a)(t.filter((function(e){return!0===e.checked})))).map((function(t){return Object(j.jsxs)("div",{className:m.a.task,children:[Object(j.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(){var c;c=t.id,e({type:"CHANGE_TASK",payload:c})},id:"check".concat(t.id)}),Object(j.jsx)("label",{htmlFor:"check".concat(t.id),className:m.a.task__text,children:t.text}),Object(j.jsx)("button",{onClick:function(){var c;c=t.id,e({type:"DELETE_TASK",payload:c})},children:Object(j.jsx)("img",{src:"./assets/img/delete.png",alt:""})})]})})):Object(j.jsx)("div",{className:m.a.nothing,children:"No tasks"})})]})})},g=Object(a.memo)(k),v=c(39),N=c.n(v),S="ADD_TASK",T="GET_USERS",y="CHANGE_TASK",D="DELETE_TASK",w=c(61),E=function(e){return{type:T,payload:Object(p.a)(e)}};var H=function(){Object(a.useEffect)((function(){document.title="GetUsers"}),[]);var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users.users}));return 0===t.length&&e((function(e){w.get("https://jsonplaceholder.typicode.com/users").then((function(t){e(E(t.data))}))})),Object(j.jsx)("div",{className:N.a.block,children:t.map((function(e,t){return Object(j.jsxs)("div",{children:[t+1,". ",e.name]})}))})};var A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(i.b,{path:"/ToDo",render:function(){return Object(j.jsx)(g,{})}}),Object(j.jsx)(i.b,{path:"/getUsers",render:function(){return Object(j.jsx)(H,{})}}),Object(j.jsx)(i.a,{to:"/"})]})})]})},I=(c(80),c(14)),J=c(8),U={tasks:JSON.parse(localStorage.getItem("tasks"))||[]};var K=c(40),L=c(41),C={users:JSON.parse(localStorage.getItem("users"))||[]};var G=Object(I.combineReducers)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var c=[].concat(Object(p.a)(e.tasks),[t.payload]);return localStorage.setItem("tasks",JSON.stringify(c)),Object(J.a)(Object(J.a)({},e),{},{tasks:c});case y:var a=e.tasks.reduce((function(e,c){return c.id===t.payload&&(c.checked=!c.checked),[].concat(Object(p.a)(e),[c])}),[]);return localStorage.setItem("tasks",JSON.stringify(a)),Object(J.a)(Object(J.a)({},e),{},{tasks:a});case D:var s=e.tasks.filter((function(e){return e.id!==t.payload}));return localStorage.setItem("tasks",JSON.stringify(s)),Object(J.a)(Object(J.a)({},e),{},{tasks:s});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var c=t.payload.splice(0,10);return localStorage.setItem("users",JSON.stringify(c)),e.users=c,Object(J.a)(Object(J.a)({},e),{},{users:c});default:return e}}}),W=Object(I.createStore)(G,Object(K.composeWithDevTools)(Object(I.applyMiddleware)(L.a)));n.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{store:W,children:Object(j.jsx)(A,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={header:"Header_header__36s2s",header__logo:"Header_header__logo__2Ol4Z",header__row:"Header_header__row__VQLAi",header__item:"Header_header__item__2f5Or",link:"Header_link__5eMHl",wrapper:"Header_wrapper__3m-Y_"}}},[[81,1,2]]]);
//# sourceMappingURL=main.198fdb1a.chunk.js.map