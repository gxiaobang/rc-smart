webpackJsonp([8],{603:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(19),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"handleClick",value:function(e){console.log(e)}},{key:"handleDelete",value:function(){}},{key:"render",value:function(){var e=this,t=[{title:"影片",key:"filmName"},{title:"影片长度",key:"duration"},{title:"时间",key:"date"},{title:"操作",key:"action",render:function(t,n){return u.default.createElement("div",null,u.default.createElement(c.Link,{onClick:e.handleClick.bind(e,n)},"修改"),u.default.createElement(c.Link,{type:"danger",onClick:e.handleDelete.bind(e)},"删除"))}}],n=[{filmName:"影片1",duration:"100",date:"09:00"},{filmName:"影片2",duration:"110",date:"10:00"},{filmName:"影片3",duration:"120",date:"09:00"},{filmName:"影片4",duration:"100",date:"12:00"},{filmName:"影片5",duration:"110",date:"14:00"},{filmName:"影片6",duration:"100",date:"15:00"}];return u.default.createElement("div",{className:"page"},u.default.createElement("h3",null,this.props.data.title,"组件"),u.default.createElement("div",null,u.default.createElement(c.Table,{columns:t,data:n,pagination:{index:1,size:20,total:200}})))}}]),t}(u.default.Component);t.default=f}});