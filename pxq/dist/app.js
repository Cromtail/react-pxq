webpackJsonp([7],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),a=o(r),i=n(87),s=(o(i),n(15)),u=n(284),c=o(u),l=n(283),d=o(l);n(75),n(271),n(272),n(273),n(270),n(268),n(269),n(265),n(266),n(267),d.default.subscribe(function(){}),(0,i.render)(a.default.createElement(s.Provider,{store:d.default},c.default),document.body.appendChild(document.createElement("div")))},16:function(e,t,n){"use strict";function o(e,t){return!s(this.props,e)||!s(this.state,t)}function r(e){var t=e.prototype&&e.prototype.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||"a component"}function a(e){return void 0!==e.prototype.shouldComponentUpdate&&i(!1,"Cannot decorate `%s` with @pureRenderDecorator, because it already implements `shouldComponentUpdate().",r(e)),e.prototype.shouldComponentUpdate=o,e}var i=n(2),s=n(39);e.exports=a},21:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.Tool=void 0;var r=n(75),a=o(r),i=(a.target,t.Tool={});i.paramType=function(e){e.uid="1",e.token="pt";var t=[],n="";for(var o in e)t.push(o+"="+e[o]);return n=t.join("&"),n="?"+n},i.ajax=function(e){return new Promise(function(t,n){var o=new XMLHttpRequest;o.open("get",e,!0),o.onload=t,o.onerror=n,o.send()})};var s=document.createElement("div");s.setAttribute("id","alertText");var u=document.createElement("div");u.setAttribute("id","alertTip"),u.appendChild(s),document.body.appendChild(u);var c=null;i.alert=function(e,t){clearTimeout(c),t?s.innerHTML=e+'<div class="alert_bottom">'+t+"</div>":s.innerHTML=e,u.style.display="block",u.onclick=function(){clearTimeout(c),u.style.display="none"},c=setTimeout(function(){u.style.display="none",clearTimeout(c)},3e3)},i.getStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null)[t]},i.nextPage=function(e,t,n,o,r){var a=r,s=t,u=0,c=window.screen.height,l=0,d=0,f=0;e.addEventListener("touchstart",function(){u=e.offsetHeight,l=e.offsetTop,d=parseInt(i.getStyle(e,"marginBottom"))},!1),e.addEventListener("touchmove",function(){m()},!1),e.addEventListener("touchend",function(){f=document.body.scrollTop,h()},!1);var p=void 0,h=function e(){p=requestAnimationFrame(function(){document.body.scrollTop!=f?(f=document.body.scrollTop,e()):m()})},m=function(){s<n&&1==a&&document.body.scrollTop+c>=u+l+d&&(cancelAnimationFrame(p),s++,a=!1,o(s))}}},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=t.template=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),l=n(20),d=n(16),f=(o(d),n(11)),p=(n(21),n(278)),h=o(p);t.template=h.default,t.Header=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.state={showHide:"none"},o.showNav=function(){"block"==o.state.showHide?o.setState({showHide:"none"}):o.setState({showHide:"block"})},o}return i(t,e),s(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(0,f.is)((0,f.fromJS)(this.props),(0,f.fromJS)(e))||!(0,f.is)((0,f.fromJS)(this.state),(0,f.fromJS)(t))}},{key:"render",value:function(){var e=this.props,t=e.nav,n=e.saleRecord,o=e.title,r=(e.HideList,e.goback),a=e.save,i=(e.productsInform,e.applyRecord),s=e.params,u=this.state.showHide,d={};return t&&(t=c.default.createElement("div",{className:"head_menu",onClick:this.showNav},c.default.createElement("ul",{className:"head_listname",style:{display:u}},c.default.createElement("li",null,c.default.createElement(l.IndexLink,{to:"/"},c.default.createElement("span",null,"销售录入"),c.default.createElement("span",{className:"head_arrow"}))),c.default.createElement("li",null,c.default.createElement(l.Link,{to:"/allDeposit"},c.default.createElement("span",null,"提现"),c.default.createElement("span",{className:"head_arrow"}))),c.default.createElement("li",null,c.default.createElement(l.Link,{to:"/helpCenter"},c.default.createElement("span",null,"帮助中心"),c.default.createElement("span",{className:"head_arrow"})))))),r&&s?r=c.default.createElement(l.Link,{to:"/index"+s,className:"head_goback left"},"返回"):r&&(r=c.default.createElement("span",{className:"head_goback left",onClick:function(){return window.history.back()}},"返回")),o&&"销售录入"==o&&(d={position:"absolute"}),c.default.createElement("header",{className:"head-list",style:d},t,r,n&&c.default.createElement(l.Link,{to:"/saleRecord",className:"head_icon_right"}),o&&c.default.createElement("span",{className:"head_title"},o),a&&c.default.createElement(l.Link,{to:"/index"+s,className:"head_save right"},"确定"),i&&c.default.createElement(l.Link,{to:"/applyRecord",className:"head_icon_right head_applyrecord_right"}))}}]),t}(u.Component)},75:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.system=t.target=void 0;var r=n(264),a=o(r);!function(e,t){var n=e.documentElement,o="orientationchange"in window?"orientationchange":"resize",r=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(o,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){a.default.attach(document.body)},!1);var i=function(){var e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,n=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=void 0;return t?o="Android":n&&(o="IOS"),o}(),s="http://shopro.putaoevent.com";t.target=s,t.system=i},125:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.testAction=t.getData=t.deleteItem=t.newProductData=t.saveProductlist=t.recordState=t.fetchPosts=t.TEST_DISPATCH=t.GET_DATA_SUCCESS=t.GET_DATA_START=t.RECEIVE_POSTS=t.REQUEST_POSTS=t.DELETE_ITEM=t.NEW_PRODUCT_DATA=t.SAVE_PRODUCT_LIST=t.RECORD_STATE=t.SET_STATE=void 0;var r=n(147),a=o(r),i=n(75),s=n(21),u=(t.SET_STATE="SET_STATE",t.RECORD_STATE="RECORD_STATE"),c=t.SAVE_PRODUCT_LIST="SAVE_PRODUCT_LIST",l=t.NEW_PRODUCT_DATA="NEW_PRODUCT_DATA",d=t.DELETE_ITEM="DELETE_ITEM",f=t.REQUEST_POSTS="REQUEST_POSTS",p=t.RECEIVE_POSTS="RECEIVE_POSTS",h=t.GET_DATA_START="GET_DATA_START",m=t.GET_DATA_SUCCESS="GET_DATA_SUCCESS",y=t.TEST_DISPATCH="TEST_DISPATCH",v=function(e){return{type:f,path:e}},E=function(e,t){return{type:p,path:e,json:t}},b=(t.fetchPosts=function(e,t){var n=i.target+e+s.Tool.paramType(t);return function(o){return o(v(t)),(0,a.default)(n,{mode:"no-cors"}).then(function(t){t.ok?t.json().then(function(t){return o(E(e,t))}):console.log("status",t.status)}).catch(function(e){return console.log(e)})}},t.recordState=function(e,t,n,o){return{type:u,id:e,chooseState:t,num:n,index:o}},t.saveProductlist=function(e){return{type:c,productList:e}},t.newProductData=function(e){return{type:l,productData:e}},t.deleteItem=function(e){return{type:d,index:e}},function(e){return{type:h,path:e}}),g=function(e,t,n,o){return{type:m,path:e,json:t,success:n,name:o}};t.getData=function(e,t,n,o){var r=i.target+e+s.Tool.paramType(t);return function(i){return i(b(t)),(0,a.default)(r,{method:"GET",headers:{"Content-Type":"application/json"},mode:"no-cors"}).then(function(e){return e.json()}).then(function(t){return i(g(e,t,n,o))}).catch(function(e){return console.log(e)})}},t.testAction=function(e){return{type:y,data:e}}},126:function(e,t){(function(t){e.exports=t}).call(t,{})},147:function(e,t,n){"use strict";n(263),e.exports=self.fetch.bind(self)},263:function(e,t){"use strict";!function(e){function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function r(e){this.map={},e instanceof r?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function a(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function i(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=i(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=i(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);return n.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&b(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var n=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new r(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(r))}}),t}function m(e){var t=new r;return e.split("\r\n").forEach(function(e){var n=e.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();t.append(o,r)}}),t}function y(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new r(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var E=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&E.indexOf(Object.prototype.toString.call(e))>-1};r.prototype.append=function(e,o){e=t(e),o=n(o);var r=this.map[e];this.map[e]=r?r+","+o:o},r.prototype.delete=function(e){delete this.map[t(e)]},r.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(e,o){this.map[t(e)]=n(o)},r.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},r.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),o(e)},r.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),o(e)},v.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},d.call(p.prototype),d.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];y.redirect=function(e,t){if(T.indexOf(t)===-1)throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},e.Headers=r,e.Request=p,e.Response=y,e.fetch=function(e,t){return new Promise(function(n,o){var r=new p(e,t),a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:m(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;n(new y(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(r.method,r.url,!0),"include"===r.credentials&&(a.withCredentials=!0),"responseType"in a&&v.blob&&(a.responseType="blob"),r.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof r._bodyInit?null:r._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0)},264:function(e,t,n){var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){"use strict";function a(e,t){function n(e,t){return function(){return e.apply(t,arguments)}}var o;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!a.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,u=0,c=r.length;u<c;u++)i[r[u]]=n(i[r[u]],i);s&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var r=Node.prototype.removeEventListener;"click"===t?r.call(e,t,n.hijacked||n,o):r.call(e,t,n,o)},e.addEventListener=function(t,n,o){var r=Node.prototype.addEventListener;"click"===t?r.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):r.call(e,t,n,o)}),"function"==typeof e.onclick&&(o=e.onclick,e.addEventListener("click",function(e){o(e)},!1),e.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!i,u=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,c=u&&/OS 4_\d(_\d)?/.test(navigator.userAgent),l=u&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(u&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},a.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},a.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},a.prototype.determineEventType=function(e){return s&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(e){var t;u&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},a.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},a.prototype.onTouchStart=function(e){var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],u){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!c){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},a.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},a.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},a.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(e){var t,n,o,r,a,i=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,l&&(a=e.changedTouches[0],i=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)||i,i.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=i.tagName.toLowerCase(),"label"===o){if(t=this.findControl(i)){if(this.focus(i),s)return!1;i=t}}else if(this.needsFocus(i))return e.timeStamp-n>100||u&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(i),this.sendClick(i,e),u&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!u||c||(r=i.fastClickScrollParent,!r||r.fastClickLastScrollTop===r.scrollTop))||(this.needsClick(i)||(e.preventDefault(),this.sendClick(i,e)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(e){return!(this.targetElement&&!e.forwardedTouchEvent&&e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)&&(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),1))},a.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},a.prototype.destroy=function(){var e=this.layer;s&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(e){var t,n,o,r;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0;if(t=document.querySelector("meta[name=viewport]")){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(r>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||"none"===e.style.touchAction||"manipulation"===e.style.touchAction)},a.attach=function(e,t){return new a(e,t)},"object"===r(n(126))&&n(126)?(o=function(){return a}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))):"undefined"!=typeof e&&e.exports?(e.exports=a.attach,e.exports.FastClick=a):window.FastClick=a}()},265:function(e,t){},266:function(e,t){},267:function(e,t){},268:function(e,t){},269:function(e,t){},270:function(e,t){},271:function(e,t){},272:function(e,t){},273:function(e,t){},278:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(3),d=r(l),f=n(16),p=(r(f),n(15)),h=n(11),m=n(125),y=o(m),v=function(e){var t,n,o={id:"",url:"",data:{},component:d.default.createElement("div",null)};for(var r in e)o[r]=e[r];var f=(n=t=function(e){function t(e,n){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return s(t,e),c(t,[{key:"render",value:function(){return d.default.createElement(this.props.seting.component,u({},this.props,{state:this.props.state.toJS()}))}},{key:"componentDidMount",value:function(){this.props.fetchPosts(this.props.seting.url,this.props.seting.data)}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!(e.state.get("isFetching")||(0,h.is)((0,h.fromJS)(this.props),(0,h.fromJS)(e))&&(0,h.is)((0,h.fromJS)(this.state),(0,h.fromJS)(t)))}}]),t}(l.Component),t.defaultProps={seting:o},n);return(0,p.connect)(function(e){var t=e.producRecord,n=e.saleRecord,o=e.requestData;return e.testData,{state:e.fetchData,producRecord:t,saleRecord:n,requestData:o}},y)(f)};t.default=v},280:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),l=n(16),d=(o(l),n(20)),f=(n(15),n(11)),p=n(21),h=n(26),m=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={saleMoney:"",name:"",phone:"",products:[],postProduct:[],serverId:"",picSrc:"",saleOldvalue:"",preventMountSubmit:!0},e.changeValue=function(t,n){if("money"===t){var o=n.target.value;/^\d*?\.?\d{0,2}?$/gi.test(o)?(/^0+[1-9]+/.test(o)&&(o=o.replace(/^0+/,"")),/^0+0\./.test(o)&&(o=o.replace(/^0+/,"0")),o=o.replace(/^\./gi,"0."),e.state.saleOldvalue=o,e.state.inputLength=o.length):o=e.state.saleOldvalue,e.setState({saleMoney:o})}else if("name"===t)e.setState({name:n.target.value});else if("phone"===t){var r=n.target.value.replace(/\D/gi,"");e.setState({phone:r})}},e.chooseImage=function(){var t=e;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var n=e.localIds;t.setState({picSrc:n}),t.uploadImage(n)}})},e.uploadImage=function(t){var n=e;t=t.toString(),wx.uploadImage({localId:t,isShowProgressTips:1,success:function(e){var t=e.serverId;n.setState({serverId:t})}})},e.postInform=function(){""==e.state.saleMoney?p.Tool.alert("请输入订单金额"):""==e.state.name?p.Tool.alert("请输入客户姓名"):""!=e.state.phone&&/^1\d{10}$/.test(e.state.phone)?0==e.state.postProduct.length?p.Tool.alert("请选择销售的产品"):""!==e.state.picSrc&&""==e.state.serverId?p.Tool.alert("图片上传失败，请重新上传图片"):""==e.state.serverId?p.Tool.alert("请上传售卖发票凭证"):(e.state.postProduct instanceof Object&&(e.state.postProduct=JSON.stringify(e.state.postProduct)),e.state.preventMountSubmit&&(0==e.state.preventMountSubmit,e.props.getData("/sales/sales/input",{sales_money:e.state.saleMoney,customers_name:e.state.name,customers_phone:e.state.phone,products:e.state.postProduct,invoice_ids:e.state.serverId},function(t){200==t.http_code?(p.Tool.alert(t.data.msg),e.setState({saleMoney:"",name:"",phone:"",products:[],serverId:"",picSrc:"",postProduct:[],preventMountSubmit:!0})):(e.state.preventMountSubmit=!0,p.Tool.alert(t.msg))},"input"))):p.Tool.alert("请输入正确的电话号码")},e.deleteImg=function(){e.setState({picSrc:"",serverId:""})},e}return i(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location.query;this.props.producRecord.productList&&""!==this.props.location.search&&!function(){var t=e.props.producRecord.productList,n=0;t.forEach(function(t,o){t.chooseState&&t.num>0&&(e.state.products[n]=[t.productName,t.num.toString()],e.state.postProduct[n]={},e.state.postProduct[n].id=t.id,e.state.postProduct[n].quantity=t.num,n++)})}(),this.state.saleMoney=t.saleMoney||"",this.state.name=t.name||"",this.state.phone=t.phone||"",this.state.picSrc=t.picSrc||"",this.state.serverId=t.serverId||""}},{key:"componentDidMount",value:function(){var e=window.location.href.split("#")[0],t=function(e){wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","uploadImage"]})};this.props.getData("/core/wx/jssdk",{url:e},t,"jssdk"),wx.ready(function(){wx.hideOptionMenu()})}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,f.is)((0,f.fromJS)(this.props),(0,f.fromJS)(e))||!(0,f.is)((0,f.fromJS)(this.state),(0,f.fromJS)(t))}},{key:"componentWillUpdate",value:function(e,t){this.props!==e&&e.state.data}},{key:"render",value:function(){var e=this.state.products;return c.default.createElement("div",{className:"component_container index_module"},c.default.createElement(h.Header,{nav:!0,saleRecord:!0,title:"销售录入"}),c.default.createElement("div",{className:"index_tip"},c.default.createElement("span",{className:"tip_text"},"请录入您的销售业绩")),c.default.createElement("form",{className:"form_style"},c.default.createElement("div",{className:"input_container"},c.default.createElement("span",{className:"input_descript"},"销售金额："),c.default.createElement("input",{type:"text",value:this.state.saleMoney,placeholder:"请输入订单金额",onChange:this.changeValue.bind(this,"money")})),c.default.createElement("div",{className:"input_container"},c.default.createElement("span",{className:"input_descript"},"客户姓名："),c.default.createElement("input",{type:"text",value:this.state.name,placeholder:"请输入客户姓名",onChange:this.changeValue.bind(this,"name")})),c.default.createElement("div",{className:"input_container"},c.default.createElement("span",{className:"input_descript"},"客户电话："),c.default.createElement("input",{type:"text",maxLength:"11",value:this.state.phone,placeholder:"请输入客户电话",onChange:this.changeValue.bind(this,"phone")}))),c.default.createElement("div",{className:"index_tip"},c.default.createElement("span",{className:"tip_text"},"请选择销售的产品")),c.default.createElement("div",{className:"choose_product"},c.default.createElement(d.Link,{to:"/chooseProducts?saleMoney="+this.state.saleMoney+"&name="+this.state.name+"&phone="+this.state.phone+"&picSrc="+this.state.picSrc+"&serverId="+this.state.serverId,className:e.length>0?"showIcon":"link_choose"
},e.length>0?"":"请选择销售的产品"),c.default.createElement("ul",{className:"choosed_ul clear "+(e.length>0?"show":"hide")},e.length>0?e.map(function(e,t){return c.default.createElement("li",{key:t,className:"product_li left"},c.default.createElement("span",{className:"product_style product_name ellips",style:{maxWidth:4.8-.6*e[1].length+"rem"}},e[0]),c.default.createElement("span",{className:"product_style"},"x"),c.default.createElement("span",{className:"product_style"},e[1]))}):null)),c.default.createElement("div",{className:"index_tip"},c.default.createElement("span",{className:"tip_text"},"请上传售卖发票凭证")),""!==this.state.picSrc?c.default.createElement("div",{className:"img_container"},c.default.createElement("span",{className:"delet_img",onClick:this.deleteImg}),c.default.createElement("img",{src:this.state.picSrc,className:"chooseImg"})):c.default.createElement("div",{className:"choosePic",onClick:this.chooseImage},c.default.createElement("span",{className:"choose_button"},"请点击上传凭证")),c.default.createElement("div",{className:"submit",onClick:this.postInform},"提交"))}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.state.requestID)}}]),t}(u.Component);t.default=(0,h.template)({id:"index",component:m,url:"/user/user/checkRegister"})},282:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.saleRecord=t.producRecord=t.testData=t.requestData=t.fetchData=void 0;var a=n(11),i=o(a),s=n(125),u=i.default.fromJS({data:{},isFetching:!1});t.fetchData=function(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case s.REQUEST_POSTS:return e.set("isFetching",!0);case s.RECEIVE_POSTS:return i.default.Map({data:t.json,isFetching:!1});default:return e}},t.requestData=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case s.GET_DATA_START:return e;case s.GET_DATA_SUCCESS:return t.success(t.json),e[t.name]=t.json,e;default:return e}},t.testData=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case s.TEST_DISPATCH:return Object.assign({},e,t);default:return e}},t.producRecord=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case s.RECORD_STATE:return Object.assign({},e,t);case s.SAVE_PRODUCT_LIST:return e.productList=[].concat(r(t.productList)),e;case s.NEW_PRODUCT_DATA:return e.productData=[].concat(r(t.productData)),e;default:return e}},t.saleRecord=function(){var e=arguments.length<=0||void 0===arguments[0]?i.default.fromJS({}):arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case s.DELETE_ITEM:return i.default.Map({index:t.index});default:return e}}},283:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=n(282),s=r(i),u=n(121),c=o(u),l=(0,a.createStore)((0,a.combineReducers)(s),(0,a.applyMiddleware)(c.default));t.default=l},284:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),l=n(20),d=n(280),f=o(d),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return c.default.createElement("div",null,this.props.children)}}]),t}(u.Component),h=l.hashHistory,m=function(e,t){n.e(3,function(e){t(null,n(277).default)})},y=function(e,t){n.e(2,function(e){t(null,n(279).default)})},v=function(e,t){n.e(1,function(e){t(null,n(281).default)})},E=function(e,t){n.e(6,function(e){t(null,n(274).default)})},b=function(e,t){n.e(4,function(e){t(null,n(276).default)})},g=function(e,t){n.e(5,function(e){t(null,n(275).default)})},_=c.default.createElement(l.Router,{history:h},c.default.createElement(l.Route,{path:"/",component:p},c.default.createElement(l.IndexRoute,{component:f.default}),"//首页",c.default.createElement(l.Route,{path:"index",component:f.default}),c.default.createElement(l.Route,{path:"helpCenter",getComponent:y}),"//帮助中心",c.default.createElement(l.Route,{path:"saleRecord",getComponent:v}),"//销售记录",c.default.createElement(l.Route,{path:"chooseProducts",getComponent:m}),"//选择商品",c.default.createElement(l.Route,{path:"allDeposit",getComponent:E}),"//余额",c.default.createElement(l.Route,{path:"applyDeposit",getComponent:g}),"//申请提现",c.default.createElement(l.Route,{path:"applyRecord",getComponent:b})," //提现记录",c.default.createElement(l.Redirect,{from:"*",to:"/"})));t.default=_}});