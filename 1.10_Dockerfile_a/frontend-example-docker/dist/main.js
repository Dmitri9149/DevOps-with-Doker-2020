!function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([270,1]),n()}({251:function(e,t,n){e.exports=n.p+"a3e2211dddcba197b5bbf2aa9d5d9a9a.svg"},252:function(e,t,n){e.exports=n.p+"bff6c47a9da5c7cfa2e8a552e2df3a78.svg"},270:function(e,t,n){n(271),e.exports=n(602)},466:function(e,t,n){},602:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(77),a=n(612),u=n(80),i=(n(465),n(466),n(55)),s=n(250),l=n(78),f=n.n(l);function p(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function a(e){p(c,r,o,a,u,"next",e)}function u(e){p(c,r,o,a,u,"throw",e)}a(void 0)}))}}var b=function(){return f.a.create({baseURL:"/api"})},h=function(){var e=y(regeneratorRuntime.mark((function e(t){var n,r,o,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.length>1&&void 0!==c[1]?c[1]:"get",r=c.length>2?c[2]:void 0,o={headers:{}},e.t0=n,e.next="get"===e.t0?6:"post"===e.t0?7:"put"===e.t0?8:"delete"===e.t0?9:10;break;case 6:return e.abrupt("return",b().get(t,o));case 7:return e.abrupt("return",b().post(t,r,o));case 8:return e.abrupt("return",b().put(t,r,o));case 9:return e.abrupt("return",b().delete(t,o));case 10:return e.abrupt("return",Promise.reject(new Error("Invalid http method")));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return{type:"".concat(t,"_ATTEMPT"),requestSettings:{route:e,method:n,data:r,prefix:t,query:o}}};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(i.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MESSAGES_SUCCESS":return g({},e,{data:t.response});case"CREATE_MESSAGE_ATTEMPT":return g({},e,{pending:!0});case"CREATE_MESSAGE_FAILURE":return g({},e,{pending:!1,error:!0});case"CREATE_MESSAGE_SUCCESS":return g({},e,{pending:!1,error:!1});default:return e}},connectionTest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONNECTION_ATTEMPT":return E({},e,{pending:!0});case"GET_CONNECTION_SUCCESS":return E({},e,{data:t.response,pending:!1});case"GET_CONNECTION_FAILURE":return E({},e,{pending:!1});default:return e}}}),j=i.d,P=Object(i.e)(S,j(Object(i.a)(s.a,(function(e){return function(t){return function(){var n=y(regeneratorRuntime.mark((function n(r){var o,c,a,u,i,s,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t(r),!(o=r.requestSettings)){n.next=14;break}return c=o.route,a=o.method,u=o.data,i=o.prefix,s=o.query,n.prev=4,n.next=7,h(c,a,u);case 7:l=n.sent,e.dispatch({type:"".concat(i,"_SUCCESS"),response:l.data,query:s}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),e.dispatch({type:"".concat(i,"_FAILURE"),response:n.t0,query:s});case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}()}})))),_=n(251),T=n.n(_),x=n(252),R=n.n(x),C={toska_color:T.a,toska_grayscale:R.a},k=function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("img",{src:C.toska_color,style:{height:"100%"},alt:"tosca"}))},N=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("img",{src:C.toska_color,style:{height:"100%",float:"right"},alt:"tosca"}))},M=n(614),A=n(615);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,c,a=(t=u,function(){var e,n=L(t);if(J()){var r=L(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return U(this,e)});function u(){var e;G(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return W(B(e=a.call.apply(a,[this].concat(n))),"secretMessage",window.atob("Q29uZ3JhdHVsYXRpb25zISBZb3UgY29uZmlndXJlZCB5b3VyIHBvcnRzIGNvcnJlY3RseSE=")),e}return n=u,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("span",null," Exercise ",this.props.exerciseNumber,": ",this.secretMessage," "))}}])&&I(n.prototype,r),c&&I(n,c),u}(r.Component),F=n(603);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?Q(e):t}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,r,c,a=(t=u,function(){var e,n=$(t);if(K()){var r=$(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return X(this,e)});function u(){var e;z(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ee(Q(e=a.call.apply(a,[this].concat(n))),"handleTestConnection",e.props.testConnection),e}return n=u,(r=[{key:"render",value:function(){var e="pong"===this.props.connectionTest.data;return o.a.createElement("div",null,o.a.createElement("span",null," Exercise ",this.props.exerciseNumber,": "),o.a.createElement(F.a,{color:e?"green":"orange",onClick:this.handleTestConnection,disabled:this.props.connectionTest.pending},"Press to Test!"),e?"Working!":"Not yet working")}}])&&H(n.prototype,r),c&&H(n,c),u}(r.Component),ne=Object(u.b)((function(e){return{connectionTest:e.connectionTest}}),(function(e){return{testConnection:function(){return e(m("/ping","GET_CONNECTION"))}}}))(te);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function ce(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function a(e){oe(c,r,o,a,u,"next",e)}function u(e){oe(c,r,o,a,u,"throw",e)}a(void 0)}))}}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?le(e):t}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(u,e);var t,n,r,c,a=(t=u,function(){var e,n=pe(t);if(fe()){var r=pe(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return se(this,e)});function u(){var e;ae(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ye(le(e=a.call.apply(a,[this].concat(n))),"state",{pending:!1,success:!1,error:!1}),ye(le(e),"testConnection",ce(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pending:!0,error:!1,success:!1}),t.prev=1,t.next=4,f.a.get("/api/ping");case 4:n=t.sent,e.setState({pending:!1,success:"pong"===n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({error:!0,pending:!1});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))),ye(le(e),"message",(function(){return e.state.error?"Not working correctly":e.state.success?"Working!":""})),e}return n=u,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("span",null," Exercise ",this.props.exerciseNumber,": "),o.a.createElement(F.a,{color:this.state.success?"green":"orange",onClick:this.testConnection,disabled:this.state.pending},"Press to Test!"),this.message())}}])&&ue(n.prototype,r),c&&ue(n,c),u}(r.Component);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function de(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function a(e){me(c,r,o,a,u,"next",e)}function u(e){me(c,r,o,a,u,"throw",e)}a(void 0)}))}}function ge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?Oe(e):t}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(u,e);var t,n,r,c,a=(t=u,function(){var e,n=je(t);if(Se()){var r=je(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Ee(this,e)});function u(){var e;ge(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Pe(Oe(e=a.call.apply(a,[this].concat(n))),"state",{pending:!1,success:!1,responseTime:void 0,error:!1}),Pe(Oe(e),"testConnection",de(regeneratorRuntime.mark((function t(){var n,r,o,c,a,u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pending:!0,error:!1,success:!1}),n=(new Date).getTime(),t.prev=2,t.next=5,f.a.get("/api/slow");case 5:if(r=t.sent,o=(new Date).getTime(),c=(o-n)/1e3,"pong"===r.data){t.next=10;break}throw new Error("Not pong");case 10:if(!(c>1)){t.next=12;break}throw new Error("Too slow");case 12:e.setState({pending:!1,success:!0,responseTime:c}),t.next=24;break;case 15:t.prev=15,t.t0=t.catch(2),u=(new Date).getTime(),i=(u-n)/1e3,t.t0.response||(a="Backend is not up or has crashed"),t.t0.response&&404===t.t0.response.status&&(a="Request sent to unknown address, 404. Check network tab where the request was sent."),"Not pong"===t.t0.message&&(a="Response was not what was expected. Check network tab where the request was sent."),"Too slow"===t.t0.message&&(a="Response was correct but it was slow, did you set up the cache correctly?"),e.setState({error:a,pending:!1,responseTime:i});case 24:case"end":return t.stop()}}),t,null,[[2,15]])})))),Pe(Oe(e),"message",(function(){var t=e.state,n=t.responseTime,r=t.success,o=t.error,c=n?"It took ".concat(n," seconds."):"";return o?"Not working correctly. ".concat(c," ").concat(o):r?"Working! ".concat(c):c})),e}return n=u,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("span",null," Exercise ",this.props.exerciseNumber,": "),o.a.createElement(F.a,{color:this.state.success?"green":"orange",onClick:this.testConnection,disabled:this.state.pending},"Press to Test!"),this.message(),o.a.createElement("br",null))}}])&&ve(n.prototype,r),c&&ve(n,c),u}(r.Component),Te=n(611),xe=n(613);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Me(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?Ae(e):t}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function De(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Ge(e){return(Ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var qe={message:""},Ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(u,e);var t,n,r,c,a=(t=u,function(){var e,n=Ge(t);if(De()){var r=Ge(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Me(this,e)});function u(){var e;Ce(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ie(Ae(e=a.call.apply(a,[this].concat(n))),"state",qe),Ie(Ae(e),"handleGetMessages",e.props.getMessages),Ie(Ae(e),"handlePostMessage",(function(){return e.props.postMessage(e.state.message)})),Ie(Ae(e),"handleChange",(function(t){return e.setState(Ie({},t.target.id,t.target.value))})),e}return n=u,(r=[{key:"render",value:function(){var e=this.props.messages;return o.a.createElement("div",null,o.a.createElement("span",null," Exercise ",this.props.exerciseNumber,":"),o.a.createElement(Te.a,{id:"message",placeholder:"Write message here",value:this.state.message,onChange:this.handleChange}),o.a.createElement(F.a,{color:"purple",onClick:this.handlePostMessage},"Send message!"),o.a.createElement(F.a,{color:"purple",onClick:this.handleGetMessages},"Get all messages!"),o.a.createElement(xe.a,null,e.map((function(e){return o.a.createElement(xe.a.Item,{key:e.id},e.body)}))))}}])&&ke(n.prototype,r),c&&ke(n,c),u}(r.Component),Be=Object(u.b)((function(e){return{messages:e.messages.data.sort((function(e,t){return e.body.localeCompare(t.body)}))}}),(function(e){return{postMessage:function(t){return e(function(e){return m("/messages","CREATE_MESSAGE","post",e)}({message:t}))},getMessages:function(){return e(m("/messages","GET_MESSAGES"))}}}))(Ue),Je=function(){return o.a.createElement("div",{style:{paddingTop:"1em"}},o.a.createElement("h3",null,"Part 1"),o.a.createElement(Z,{exerciseNumber:"1.10"}),o.a.createElement("hr",null),o.a.createElement(ne,{exerciseNumber:"1.12"}),o.a.createElement("hr",null),o.a.createElement("h3",null,"Part 2"),o.a.createElement(_e,{exerciseNumber:"2.5"}),o.a.createElement("hr",null),o.a.createElement(Be,{exerciseNumber:"2.6"}),o.a.createElement("hr",null),o.a.createElement(be,{exerciseNumber:"2.8"}),o.a.createElement("hr",null))},Le=function(){return o.a.createElement("div",null,o.a.createElement(Je,null))},We=function(){return o.a.createElement("div",{className:"content"},o.a.createElement(M.a,null,o.a.createElement(A.a,{path:"/",component:Le})))},Ze=function(){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(We,null),o.a.createElement(N,null))};Object(c.render)(o.a.createElement(u.a,{store:P},o.a.createElement(a.a,null,o.a.createElement(Ze,null))),document.getElementById("root"))}});