webpackJsonp([2],{599:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(19),p=n(64),d=(r(p),n(609)),h=r(d),y=h.default.QueryForm,m=h.default.QueryList,b=h.default.QueryBtns,v=s.Form.FormItem,g=s.Select.Option,_=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={refreshIndex:0},r.columns=[{title:"编码",key:"code"},{title:"编号",key:"id"},{title:"名称",key:"name"},{title:"操作",key:"action",render:function(){return f.default.createElement("div",null,f.default.createElement(s.Link,{onClick:function(){s.Dialog.open("/query/info","详情").on("ok",function(){r.refresh()})}},"修改"))}}],r.http={url:"/basedata/hotel/pageList",params:{}},u=n,a(r,u)}return u(t,e),l(t,[{key:"refresh",value:function(e){this.http.params=i({},e),this.setState({refreshIndex:++this.state.refreshIndex})}},{key:"render",value:function(){var e=this;return f.default.createElement(h.default,null,f.default.createElement(y,{onSubmit:function(t){return e.refresh(t)}},f.default.createElement(v,{label:"编码"},f.default.createElement(s.Input,{name:"code"})),f.default.createElement(v,{label:"选项"},f.default.createElement(s.Select,{name:"option"},f.default.createElement(g,{value:""},"请选择"),f.default.createElement(g,{value:"1"},"选项一"),f.default.createElement(g,{value:"2"},"选项二")))),f.default.createElement(b,null,f.default.createElement(s.Button,{type:"primary"},"新增")),f.default.createElement(m,{columns:this.columns,http:this.http,refreshIndex:this.state.refreshIndex}))}}]),t}(f.default.Component);t.default=_},609:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),p=r(s),d=n(5),h=r(d),y=n(19),m=n(65),b=n(64),v=r(b),g=n(41),_=r(g);n(610);var O=y.Form.FormItem,E=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.handleSubmit=r.props.onSubmit,u=n,a(r,u)}return u(t,e),f(t,[{key:"componentDidMount",value:function(){var e=h.default.findDOMNode(this.refs.form),t=(0,m.getFormParam)(e);this.handleSubmit(t)}},{key:"render",value:function(){return p.default.createElement("div",{className:"query-form"},p.default.createElement(y.Form,{ref:"form",layout:"inline",onSubmit:this.handleSubmit},this.props.children,p.default.createElement(O,null,p.default.createElement(y.Button,{type:"primary",submit:!0},"查询"))))}}]),t}(p.default.Component),k=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"query-btns"},this.props.children)}}]),t}(p.default.Component),j=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={data:r.props.data,loading:r.props.loading,pagination:r.props.pagination},u=n,a(r,u)}return u(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){this.props.refreshIndex!==e.refreshIndex&&this.request()}},{key:"componentDidMount",value:function(){}},{key:"request",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({loading:!0}),(0,v.default)(c({},this.props.http,{param:c({},this.props.param),onSuccess:function(t){var n=t.data,r=n.list,o=n.page;e.setState({data:r,pagination:{index:o.pageNo,total:o.totalRecord,size:o.pageSize},loading:!1})}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.columns,r=(t.onChange,this.state),o=r.data,a=r.loading,u=r.pagination;return p.default.createElement("div",{className:"query-list"},this.props.children,p.default.createElement(y.Table,{columns:n,data:o,pagination:u,onChange:function(t,n){e.request({pageNo:t,pageSize:n})},loading:a}))}}]),t}(p.default.Component),w=(l=i=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){var e=this.props.children,t=void 0,n=void 0,r=void 0,o=void 0;return o=_.default.isArray(e)?e:[e],o.forEach(function(e){switch(e.type.name){case"QueryForm":t=e;break;case"QueryList":n=e;break;case"QueryBtns":r=e}}),p.default.createElement("div",{className:"query"},t,r,n)}}]),t}(p.default.Component),i.QueryForm=E,i.QueryList=j,i.QueryBtns=k,l);t.default=w},610:function(e,t){}});