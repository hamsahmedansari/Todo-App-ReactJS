(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(7),c=a.n(r),m=(a(14),a(1)),i=a(2),o=a(4),s=a(3),u=a(5),d=(a(15),a(16),a(17),a(18),function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleTodo=function(e){var t=e.currentTarget,l=a.state.isActive,n=a.props.title;l?(t.classList.remove("active"),n=n.length>=30?n.slice(0,30)+"...":n):t.classList.add("active"),a.setState({isActive:!l,title:n})};var l=e.title;return l=l.length>=30?l.slice(0,30)+"...":l,a.state={isActive:!1,title:l},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isActive,a=e.title;return n.a.createElement("div",{className:"todo flex-container",onClick:this.handleTodo},n.a.createElement("div",{className:"todo-header item flex-container"},n.a.createElement("div",{className:"title item"},n.a.createElement("h4",null,a)),n.a.createElement("div",{className:"priority item"},"MG")),t&&n.a.createElement("div",{className:"todo-section item flex-container"},n.a.createElement("div",{className:"content item"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing...")),n.a.createElement("span",{className:"date item"},"10 days ago")),n.a.createElement("div",{className:"todo-action item flex-container"},n.a.createElement("button",{className:"item btn blue"},"Done"),n.a.createElement("button",{className:"item btn purple"},"InProgress"),n.a.createElement("button",{className:"item btn grey"},"Delete")))}}]),t}(l.Component)),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"item open"},n.a.createElement("div",{className:"flex-container p-relative inner-box"},n.a.createElement("header",{className:"item flex-container"},n.a.createElement("div",{className:"item"},n.a.createElement("i",{className:"fa fa-lightbulb-o\t"})),n.a.createElement("div",{className:"item"},n.a.createElement("h4",null,"Open")),n.a.createElement("div",{className:"item"},n.a.createElement("span",null,"1")))),n.a.createElement("div",{className:"item section"},n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"})))}}]),t}(l.Component),v=(a(19),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"item inProgress"},n.a.createElement("div",{className:"flex-container p-relative inner-box"},n.a.createElement("header",{className:"item flex-container"},n.a.createElement("div",{className:"item"},n.a.createElement("i",{className:"fa fa-bar-chart-o\t"})),n.a.createElement("div",{className:"item"},n.a.createElement("h4",null,"InProgress")),n.a.createElement("div",{className:"item"},n.a.createElement("span",null,"1")))),n.a.createElement("div",{className:"item section"},n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"})))}}]),t}(l.Component)),f=(a(20),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"item done flex-container"},n.a.createElement("div",{className:"flex-container p-relative inner-box item"},n.a.createElement("header",{className:"item flex-container"},n.a.createElement("div",{className:"item"},n.a.createElement("i",{className:"fa fa-check-square-o"})),n.a.createElement("div",{className:"item"},n.a.createElement("h4",null,"Done")),n.a.createElement("div",{className:"item"},n.a.createElement("span",null,"1")))),n.a.createElement("div",{className:"item section"},n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}),n.a.createElement(d,{title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"})))}}]),t}(l.Component)),h=(a(21),a(22),function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"item activity flex-container"},n.a.createElement("div",{className:"item icon"},n.a.createElement("i",{className:"fa fa-paper-plane-o"})),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"flex-container activity-section"},n.a.createElement("div",{className:"item date"},n.a.createElement("p",null,"13 hour ago")),n.a.createElement("div",{className:"item title"},n.a.createElement("h5",null,"Abc asd")),n.a.createElement("div",{className:"item details"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur,")))))}}]),t}(l.Component)),p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"inner item"},n.a.createElement("div",{className:"flex-container header"},n.a.createElement("div",{className:"item"},n.a.createElement("h3",null,"Activity")),n.a.createElement("div",{className:"item icon"},n.a.createElement("i",{className:"fa fa-paper-plane-o"}))),n.a.createElement("div",{className:"flex-container section"},n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null),n.a.createElement(h,null)))}}]),t}(l.Component),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"actionBar item flex-container"},n.a.createElement("button",{className:"item btn close",onClick:function(){return e.props.handleDestroy()}},n.a.createElement("i",{className:"fa fa-close"})),n.a.createElement("button",{className:"add"===this.props.panel?"item btn add active":"item btn add",onClick:function(){return e.props.handleSide("add")}},n.a.createElement("i",{className:"fa fa-plus"})),n.a.createElement("button",{className:"activity"===this.props.panel?"item btn activity active":"item btn add",onClick:function(){return e.props.handleSide("activity")}},n.a.createElement("i",{className:"fa fa-exclamation-triangle"})))}}]),t}(l.Component),N=(a(23),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleInputBlur=function(e){var t=e.currentTarget,a=t.parentElement.children[0];if(t.value)return a.classList.add("active");a.classList.remove("active")},a.handleInputFocus=function(e){var t=e.currentTarget,a=t.parentElement.children[0];if(t.value)return a.classList.add("active");a.classList.add("active")},a.state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"addTodo item"},n.a.createElement("div",{className:"flex-container header"},n.a.createElement("div",{className:"item"},n.a.createElement("h3",null,"Add Todo")),n.a.createElement("div",{className:"item icons"},n.a.createElement("i",{className:"fa fa-paper-plane-o"}))),n.a.createElement("div",{className:"flex-container section"},n.a.createElement("form",{className:"flex-container"},n.a.createElement("div",{className:"form-element"},n.a.createElement("label",{htmlFor:"title",className:"item"},"Title"),n.a.createElement("input",{type:"text",id:"title",className:"title form item",onBlur:this.handleInputBlur,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"form-element"},n.a.createElement("label",{htmlFor:"title",className:"item"},"Description"),n.a.createElement("textarea",{type:"text",id:"title",className:"title form item",onBlur:this.handleInputBlur,onFocus:this.handleInputFocus})),n.a.createElement("select",null,n.a.createElement("option",null,"Select Type"),n.a.createElement("option",null,"Open"),n.a.createElement("option",null,"Work"),n.a.createElement("option",null,"Assignment"),n.a.createElement("option",null,"Other")),n.a.createElement("select",null,n.a.createElement("option",null,"Select Status"),n.a.createElement("option",null,"Done"),n.a.createElement("option",null,"InProgress"),n.a.createElement("option",null,"Done")),n.a.createElement("button",{className:"btn blue"},"Added"))))}}]),t}(l.Component)),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleSide=function(e){"activity"===e?a.setState({panel:"activity"}):a.setState({panel:"add"})},a.state={panel:"activity"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"sidebar flex-container"},"activity"===this.state.panel&&n.a.createElement(p,null),"add"===this.state.panel&&n.a.createElement(N,null),n.a.createElement(b,{handleSide:this.handleSide,panel:this.state.panel,handleDestroy:this.props.handleDestroy}))}}]),t}(l.Component),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleDestroy=function(){a.setState({isSideBarActive:!1})},a.handleCreateSideBar=function(){console.log("asd"),a.setState({isSideBarActive:!0})},a.state={isSideBarActive:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header-container flex-container"},n.a.createElement("div",{className:"item left-logo flex-container"},n.a.createElement("i",{className:"fa fa-sticky-note-o\tlogo-icon item"}),n.a.createElement("span",{className:"logo item"},n.a.createElement("h2",null,"todo",n.a.createElement("span",null,"With"),n.a.createElement("span",null,"React"))))),n.a.createElement("div",{className:"flex-container w-100 h-100 outer-container"},n.a.createElement(E,null),n.a.createElement(v,null),n.a.createElement(f,null)),n.a.createElement("button",{className:"float-btn",onClick:function(){return e.handleCreateSideBar()}},n.a.createElement("i",{className:"fa fa-plus-square-o"})),this.state.isSideBarActive&&n.a.createElement(O,{handleDestroy:this.handleDestroy}))}}]),t}(l.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(j,null)}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3cd55d46.chunk.js.map