!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxSwiper=e():t.vuxSwiper=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(89)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(24)("wks"),o=n(15),i=n(1).Symbol,u="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};s.store=r},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(30),i=n(26),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(64),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(6),o=n(14);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(35),o=n(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(1),o=n(3),i=n(61),u=n(8),s="prototype",a=function(t,e,n){var c,f,l,h=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,y=t&a.B,_=t&a.W,m=p?o:o[e]||(o[e]={}),g=m[s],b=p?r:d?r[e]:(r[e]||{})[s];p&&(n=e);for(c in n)f=!h&&b&&void 0!==b[c],f&&c in m||(l=f?b[c]:n[c],m[c]=p&&"function"!=typeof b[c]?n[c]:y&&f?i(l,r):_&&b[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[c]=l,t&a.R&&g&&!g[c]&&u(g,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(5),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(24)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(3),i=n(20),u=n(28),s=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(10)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(20),o=n(19),i=n(36),u=n(8),s=n(5),a=n(12),c=n(66),f=n(22),l=n(73),h=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",y="values",_=function(){return this};t.exports=function(t,e,n,m,g,b,x){c(n,e,m);var w,O,j,S=function(t){if(!p&&t in P)return P[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",E=g==y,T=!1,P=t.prototype,M=P[h]||P[d]||g&&P[g],$=M||S(g),N=g?E?S("entries"):$:void 0,I="Array"==e?P.entries||M:M;if(I&&(j=l(I.call(new t)),j!==Object.prototype&&(f(j,k,!0),r||s(j,h)||u(j,h,_))),E&&M&&M.name!==y&&(T=!0,$=function(){return M.call(this)}),r&&!x||!p&&!T&&P[h]||u(P,h,$),a[e]=$,a[k]=_,g)if(w={values:E?$:S(y),keys:b?$:S(v),entries:N},x)for(O in w)O in P||i(P,O,w[O]);else o(o.P+o.F*(p||T),e,w);return w}},function(t,e,n){var r=n(9),o=n(70),i=n(18),u=n(23)("IE_PROTO"),s=function(){},a="prototype",c=function(){var t,e=n(29)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(63).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),c=t.F;r--;)delete c[a][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[a]=r(t),n=new s,s[a]=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(35),o=n(18).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(5),o=n(7),i=n(59)(!1),u=n(23)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";var r=n(74)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(80);for(var r=n(1),o=n(8),i=n(12),u=n(2)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var c=s[a],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){t.exports="function"==typeof Array.from?Array.from:n(40)},function(t,e){t.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},n=Math.pow(2,53)-1,r=function(t){var r=e(t);return Math.min(Math.max(r,0),n)},o=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},i=function(e,n){if(null!=e&&null!=n){var r=e[n];if(null==r)return;if(!t(r))throw new TypeError(r+" is not a function");return r}},u=function(t){var e=t.next(),n=Boolean(e.done);return!n&&e};return function(e){"use strict";var n,s=this,a=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}var c,f,l=i(e,o(e));if(void 0!==l){c=t(s)?Object(new s):[];var h=l.call(e);if(null==h)throw new TypeError("Array.from requires an array-like or iterable object");f=0;for(var p,d;;){if(p=u(h),!p)return c.length=f,c;d=p.value,a?c[f]=a.call(n,d,f):c[f]=d,f++}}else{var v=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var y=r(v.length);c=t(s)?Object(new s(y)):new Array(y),f=0;for(var _;f<y;)_=v[f],a?c[f]=a.call(n,_,f):c[f]=_,f++;c.length=y}return c}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(45),i=r(o),u=n(42),s=r(u),a=n(43);e["default"]={ready:function(){this.list&&0===this.list.length||this.render(),this.xheight=this.getHeight()},methods:{clickListItem:function(t){(0,a.go)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse((0,i["default"])(t)))},buildBackgroundUrl:function(t){return"url("+t+")"},render:function(){var t=this;this.swiper=new s["default"]({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,n){t.current=n,t.index=n})},rerender:function(){var t=this;this.$el&&this.$nextTick(function(){t.index=0,t.current=0,t.length=t.list.length||t.$children.length,t.destroy(),t.render()})},destroy:function(){this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":this.list.length?"180px":"auto"}},props:{list:{type:Array,"default":function(){return[]}},direction:{type:String,"default":"horizontal"},showDots:{type:Boolean,"default":!0},dotsPosition:{type:String,"default":"right"},dotsClass:String,auto:{type:Boolean,"default":!1},loop:Boolean,interval:{type:Number,"default":3e3},threshold:{type:Number,"default":50},duration:{type:Number,"default":300},height:{type:String,"default":"auto"},aspectRatio:Number,minMovingDistance:{type:Number,"default":0},index:{type:Number,"default":0}},data:function(){return{current:this.index,xheight:"auto",length:this.list.length}},watch:{list:function(t){this.rerender()},current:function(t){this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper.go(t)})}},beforeDestroy:function(){this.destroy()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(44),i=r(o),u=n(49),s=r(u),a=n(50),c=r(a),f=n(39),l=r(f),h=n(87),p=r(h),d=function(){function t(e){if((0,s["default"])(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=(0,p["default"])(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return(0,c["default"])(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.count>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth();var e=t._getZeroIndexByPosition();t._initOffset(e),t._setTransfrom()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._initOffset(),this._setTransfrom(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.count;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var e=this;if(t>0){var n=e._position.splice(0,1);e._position.push(n[0])}else if(t<0){var r=e._position.pop();e._position.unshift(r)}}},{key:"_initOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=(e-t)*this._distance}},{key:"_moveOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=this._offset[e]+t*this._distance}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";(0,l["default"])(this.$items).forEach(function(t,n){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransfrom",value:function(t){var e=this;t=t||0,(0,l["default"])(e.$items).forEach(function(n,r){var o=e._offset[r]+t,i="translate3d("+o+"px, 0, 0)";"vertical"===e._options.direction&&(i="translate3d(0, "+o+"px, 0)"),n.style.webkitTransform=i,n.style.transform=i})}},{key:"_bind",value:function(){var t=this;t.touchstartHandler=function(e){t.stop(),t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var n=t._move.x-t._start.x,r=t._move.y-t._start.y,o=r,i=Math.abs(n)>Math.abs(r);"horizontal"===t._options.direction&&i&&(o=n),(t._options.minMovingDistance&&o>=t._options.minMovingDistance||!t._options.minMovingDistance)&&i&&t._setTransfrom(o),i&&e.preventDefault()},t.touchendHandler=function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var n=t._end.y-t._start.y;"horizontal"===t._options.direction&&(n=t._end.x-t._start.x),n=t.getDistance(n),n>t._options.threshold?t.move(-1):n<-t._options.threshold?t.move(1):t.move(0),t._loopRender()},t.transitionEndHandler=function(e){t._activate(t._current);var n=t._eventHandlers.swiped;n&&n.apply(t,[t._prev,t._current]),t._auto(),t._loopRender(),e.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;if(t._loop())if(0===t._offset[t._offset.length-1]){var e=t.$items[0].cloneNode(!0);t.$container.appendChild(e),t.$container.removeChild(t.$items[0]),t._loopEvent(1)}else if(0===t._offset[0]){var n=t.$items[t.$items.length-1].cloneNode(!0);t.$container.insertBefore(n,t.$container.firstChild),t.$container.removeChild(t.$items[t.$items.length-1]),t._loopEvent(-1)}}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._moveOffset(t),e._setTransfrom()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.count-1?0:t}},{key:"_moveIndex",value:function(t){this._prev=this._current,this._current+=t,this._current%=this.count,this._current=this._current<0?this.count+this._current:this._current}},{key:"_activate",value:function(t){var e=this,n=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(r,o){r.classList.remove(n),t===e._position[o]&&r.classList.add(n)})}},{key:"_getZeroIndexByPosition",value:function(){for(var t=0;t<this._position.length;t++){if(0===this._position[t])return t;if(t===this._position.length-1)return-1}}},{key:"_goOffset",value:function(t){t=t||0,t%=this.count;for(var e=this,n=e._getZeroIndexByPosition(),r=0;r<e._offset.length;r++)if(0===e._offset[r])return n-r}},{key:"go",value:function(t){var e=this;if(e.stop(),e._loop()){var n=e._goOffset(t);e._moveOffset(-n),e._moveIndex(n),e._setTransition(),e._setTransfrom()}else{if(t<0||t>e.count-1||t===e._current)return;e._prev=e._current,e._current=t;for(var r=-(t-e._prev)*e._distance,o=0;o<e._offset.length;o++)e._offset[o]=e._offset[o]+r;e._setTransition(),e._setTransfrom()}return e._auto(),this}},{key:"next",value:function(){var t=this;if(t._loop())t.move(1);else{var e=t._current;e=e===t.count-1?0:e+1,t.go(e)}return this}},{key:"move",value:function(t,e){var n=this;return n._moveOffset(-t),n._movePosition(-t),n._moveIndex(t),n._setTransition(e?"none":void 0),n._setTransfrom(),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=(0,i["default"])(this.$items);!(t=(r=o.next()).done);t=!0){var u=r.value;u.removeEventListener("webkitTransitionEnd",this.transitionEndHandler,!1)}}catch(s){e=!0,n=s}finally{try{!t&&o["return"]&&o["return"]()}finally{if(e)throw n}}}},{key:"destroy",value:function(){this.stop(),this._current=0,this._setTransfrom(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy()}}]),t}();e["default"]=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,s["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(51),s=r(u);e.go=o,e.getUrl=i},function(t,e,n){t.exports={"default":n(52),__esModule:!0}},function(t,e,n){t.exports={"default":n(53),__esModule:!0}},function(t,e,n){t.exports={"default":n(54),__esModule:!0}},function(t,e,n){t.exports={"default":n(55),__esModule:!0}},function(t,e,n){t.exports={"default":n(56),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(46),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(48),i=r(o),u=n(47),s=r(u),a="function"==typeof s["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":typeof t};e["default"]="function"==typeof s["default"]&&"symbol"===a(i["default"])?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){n(38),n(37),t.exports=n(79)},function(t,e,n){var r=n(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(81);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(83),n(82),n(84),n(85),t.exports=n(3).Symbol},function(t,e,n){n(37),n(38),t.exports=n(28).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(76),i=n(75);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if(s=a[f++],s!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(16),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(57);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(13),o=n(34),i=n(21);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),a=i.f,c=0;s.length>c;)a.call(t,u=s[c++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),o=n(14),i=n(22),u={};n(8)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(13),o=n(7);t.exports=function(t,e){for(var n,i=o(t),u=r(i),s=u.length,a=0;s>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var r=n(15)("meta"),o=n(11),i=n(5),u=n(6).f,s=0,a=Object.isExtensible||function(){return!0},c=!n(10)(function(){return a(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return c&&d.NEED&&a(t)&&!i(t,r)&&f(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},function(t,e,n){var r=n(6),o=n(9),i=n(13);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(21),o=n(14),i=n(7),u=n(26),s=n(5),a=n(30),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(n){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(7),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(5),o=n(77),i=n(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(25),o=n(17);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(60),o=n(2)("iterator"),i=n(12);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(9),o=n(78);t.exports=n(3).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(58),o=n(67),i=n(12),u=n(7);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(19);r(r.S+r.F*!n(4),"Object",{defineProperty:n(6).f})},function(t,e){},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(4),u=n(19),s=n(36),a=n(69).KEY,c=n(10),f=n(24),l=n(22),h=n(15),p=n(2),d=n(28),v=n(27),y=n(68),_=n(62),m=n(65),g=n(9),b=n(7),x=n(26),w=n(14),O=n(32),j=n(72),S=n(71),k=n(6),E=n(13),T=S.f,P=k.f,M=j.f,$=r.Symbol,N=r.JSON,I=N&&N.stringify,A="prototype",L=p("_hidden"),D=p("toPrimitive"),H={}.propertyIsEnumerable,C=f("symbol-registry"),F=f("symbols"),R=f("op-symbols"),B=Object[A],z="function"==typeof $,W=r.QObject,J=!W||!W[A]||!W[A].findChild,q=i&&c(function(){return 7!=O(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=T(B,e);r&&delete B[e],P(t,e,n),r&&t!==B&&P(B,e,r)}:P,U=function(t){var e=F[t]=O($[A]);return e._k=t,e},Y=z&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},G=function(t,e,n){return t===B&&G(R,e,n),g(t),e=x(e,!0),g(n),o(F,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,L)||P(t,L,w(1,{})),t[L][e]=!0),q(t,e,n)):P(t,e,n)},K=function(t,e){g(t);for(var n,r=_(e=b(e)),o=0,i=r.length;i>o;)G(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?O(t):K(O(t),e)},Z=function(t){var e=H.call(this,t=x(t,!0));return!(this===B&&o(F,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,L)&&this[L][t])||e)},Q=function(t,e){if(t=b(t),e=x(e,!0),t!==B||!o(F,e)||o(R,e)){var n=T(t,e);return!n||!o(F,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},V=function(t){for(var e,n=M(b(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==L||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===B,r=M(n?R:b(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(B,e)||i.push(F[e]);return i};z||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(R,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),q(this,t,w(1,n))};return i&&J&&q(B,t,{configurable:!0,set:e}),U(t)},s($[A],"toString",function(){return this._k}),S.f=Q,k.f=G,n(33).f=j.f=V,n(21).f=Z,n(34).f=tt,i&&!n(20)&&s(B,"propertyIsEnumerable",Z,!0),d.f=function(t){return U(p(t))}),u(u.G+u.W+u.F*!z,{Symbol:$});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var et=E(p.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!z,"Symbol",{"for":function(t){return o(C,t+="")?C[t]:C[t]=$(t)},keyFor:function(t){if(Y(t))return y(C,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!z,"Object",{create:X,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:V,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!z||c(function(){var t=$();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Y(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,I.apply(N,r)}}}),$[A][D]||n(8)($[A],D,$[A].valueOf),l($,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(27)("asyncIterator")},function(t,e,n){n(27)("observable")},function(t,e){},function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,u,s=n(t),a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var c in r)o.call(r,c)&&(s[c]=r[c]);if(Object.getOwnPropertySymbols){u=Object.getOwnPropertySymbols(r);for(var f=0;f<u.length;f++)i.call(r,u[f])&&(s[u[f]]=r[u[f]])}}return s}},function(t,e){t.exports=' <div class=vux-slider> <div class=vux-swiper :style="{height: xheight}"> <slot></slot> <div class=vux-swiper-item v-for="item in list" @click=clickListItem(item)> <a href=javascript:> <div class=vux-img :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div> <p class=vux-swiper-desc>{{item.title}}</p> </a> </div> </div> <div :class="[dotsClass, \'vux-indicator\', \'vux-indicator-\' + dotsPosition]" v-show=showDots> <a href=javascript: v-for="key in length"> <i class=vux-icon-dot :class="{\'active\': key === current}"></i> </a> </div> </div> '},function(t,e,n){var r,o;n(86),r=n(41),o=n(88),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});