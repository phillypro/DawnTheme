/**
Input Mask 6.0.7
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).IMask={})}(this,function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var e={exports:{}};return t(e,e.exports),e.exports}var u=function(t){return t&&t.Math==Math&&t},r=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},a=!i(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),s={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,l={f:o&&!s.call({1:2},1)?function(t){var e=o(this,t);return!!e&&e.enumerable}:s},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},c={}.toString,f="".split,p=i(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==function(t){return c.call(t).slice(8,-1)}(t)?f.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return p(d(t))},k=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,e){if(!k(t))return t;var n,u;if(e&&"function"==typeof(n=t.toString)&&!k(u=n.call(t)))return u;if("function"==typeof(n=t.valueOf)&&!k(u=n.call(t)))return u;if(!e&&"function"==typeof(n=t.toString)&&!k(u=n.call(t)))return u;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,m=function(t,e){return y.call(t,e)},_=r.document,A=k(_)&&k(_.createElement),b=!a&&!i(function(){return 7!=Object.defineProperty((t="div",A?_.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),E=Object.getOwnPropertyDescriptor,C={f:a?E:function(t,e){if(t=v(t),e=g(e,!0),b)try{return E(t,e)}catch(t){}if(m(t,e))return h(!l.f.call(t,e),t[e])}},F=function(t){if(!k(t))throw TypeError(String(t)+" is not an object");return t},S=Object.defineProperty,D={f:a?S:function(t,e,n){if(F(t),e=g(e,!0),F(n),b)try{return S(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},B=a?function(t,e,n){return D.f(t,e,h(1,n))}:function(t,e,n){return t[e]=n,t},w=function(t,e){try{B(r,t,e)}catch(n){r[t]=e}return e},O=r["__core-js_shared__"]||w("__core-js_shared__",{}),M=Function.toString;"function"!=typeof O.inspectSource&&(O.inspectSource=function(t){return M.call(t)});var T,x,P,I,R=O.inspectSource,j=r.WeakMap,V="function"==typeof j&&/native code/.test(R(j)),N=n(function(t){(t.exports=function(t,e){return O[t]||(O[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),L=0,H=Math.random(),U=N("keys"),G={},z=r.WeakMap;if(V){var Y=O.state||(O.state=new z),Z=Y.get,K=Y.has,q=Y.set;T=function(t,e){return e.facade=t,q.call(Y,t,e),e},x=function(t){return Z.call(Y,t)||{}},P=function(t){return K.call(Y,t)}}else{var W=U[I="state"]||(U[I]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++L+H).toString(36)}(I));G[W]=!0,T=function(t,e){return e.facade=t,B(t,W,e),e},x=function(t){return m(t,W)?t[W]:{}},P=function(t){return m(t,W)}}var $={set:T,get:x,has:P,enforce:function(t){return P(t)?x(t):T(t,{})},getterFor:function(t){return function(e){var n;if(!k(e)||(n=x(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},X=n(function(t){var e=$.get,n=$.enforce,u=String(String).split("String");(t.exports=function(t,e,i,a){var s,o=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||m(i,"name")||B(i,"name",e),(s=n(i)).source||(s.source=u.join("string"==typeof e?e:""))),t!==r?(o?!h&&t[e]&&(l=!0):delete t[e],l?t[e]=i:B(t,e,i)):l?t[e]=i:w(e,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||R(this)})}),J=r,Q=function(t){return"function"==typeof t?t:void 0},tt=function(t,e){return arguments.length<2?Q(J[t])||Q(r[t]):J[t]&&J[t][e]||r[t]&&r[t][e]},et=Math.ceil,nt=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?nt:et)(t)},rt=Math.min,it=function(t){return t>0?rt(ut(t),9007199254740991):0},at=Math.max,st=Math.min,ot=function(t){return function(e,n,u){var r,i=v(e),a=it(i.length),s=function(t,e){var n=ut(t);return n<0?at(n+e,0):st(n,e)}(u,a);if(t&&n!=n){for(;a>s;)if((r=i[s++])!=r)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},lt={includes:ot(!0),indexOf:ot(!1)}.indexOf,ht=function(t,e){var n,u=v(t),r=0,i=[];for(n in u)!m(G,n)&&m(u,n)&&i.push(n);for(;e.length>r;)m(u,n=e[r++])&&(~lt(i,n)||i.push(n));return i},ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ft=ct.concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return ht(t,ft)}},dt={f:Object.getOwnPropertySymbols},vt=tt("Reflect","ownKeys")||function(t){var e=pt.f(F(t)),n=dt.f;return n?e.concat(n(t)):e},kt=function(t,e){for(var n=vt(e),u=D.f,r=C.f,i=0;i<n.length;i++){var a=n[i];m(t,a)||u(t,a,r(e,a))}},gt=/#|\.prototype\./,yt=function(t,e){var n=_t[mt(t)];return n==bt||n!=At&&("function"==typeof e?i(e):!!e)},mt=yt.normalize=function(t){return String(t).replace(gt,".").toLowerCase()},_t=yt.data={},At=yt.NATIVE="N",bt=yt.POLYFILL="P",Et=yt,Ct=C.f,Ft=function(t,e){var n,u,i,a,s,o=t.target,l=t.global,h=t.stat;if(n=l?r:h?r[o]||w(o,{}):(r[o]||{}).prototype)for(u in e){if(a=e[u],i=t.noTargetGet?(s=Ct(n,u))&&s.value:n[u],!Et(l?u:o+(h?".":"#")+u,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;kt(a,i)}(t.sham||i&&i.sham)&&B(a,"sham",!0),X(n,u,a,t)}},St=Object.keys||function(t){return ht(t,ct)},Dt=Object.assign,Bt=Object.defineProperty,wt=!Dt||i(function(){if(a&&1!==Dt({b:1},Dt(Bt({},"a",{enumerable:!0,get:function(){Bt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(t){e[t]=t}),7!=Dt({},t)[n]||"abcdefghijklmnopqrst"!=St(Dt({},e)).join("")})?function(t,e){for(var n=Object(d(t)),u=arguments.length,r=1,i=dt.f,s=l.f;u>r;)for(var o,h=p(arguments[r++]),c=i?St(h).concat(i(h)):St(h),f=c.length,v=0;f>v;)o=c[v++],a&&!s.call(h,o)||(n[o]=h[o]);return n}:Dt;Ft({target:"Object",stat:!0,forced:Object.assign!==wt},{assign:wt});var Ot="".repeat||function(t){var e=String(d(this)),n="",u=ut(t);if(u<0||u==1/0)throw RangeError("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(n+=e);return n},Mt=Math.ceil,Tt=function(t){return function(e,n,u){var r,i,a=String(d(e)),s=a.length,o=void 0===u?" ":String(u),l=it(n);return l<=s||""==o?a:(r=l-s,(i=Ot.call(o,Mt(r/o.length))).length>r&&(i=i.slice(0,r)),t?a+i:i+a)}},xt={start:Tt(!1),end:Tt(!0)},Pt=tt("navigator","userAgent")||"",It=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Pt),Rt=xt.end;Ft({target:"String",proto:!0,forced:It},{padEnd:function(t){return Rt(this,t,arguments.length>1?arguments[1]:void 0)}});var jt=xt.start;function Vt(t){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lt(t,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function Ht(t,e,n){return e&&Lt(t.prototype,e),n&&Lt(t,n),t}function Ut(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e)}function Gt(t){return(Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Yt(t,e){if(null==t)return{};var n,u,r=function(t,e){if(null==t)return{};var n,u,r={},i=Object.keys(t);for(u=0;u<i.length;u++)n=i[u],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(u=0;u<i.length;u++)n=i[u],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Zt(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,u=Gt(t);if(e){var r=Gt(this).constructor;n=Reflect.construct(u,arguments,r)}else n=u.apply(this,arguments);return Zt(this,n)}}function qt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Gt(t)););return t}function Wt(t,e,n){return(Wt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var u=qt(t,e);if(u){var r=Object.getOwnPropertyDescriptor(u,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function $t(t,e,n,u){return($t="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,u){var r,i=qt(t,e);if(i){if((r=Object.getOwnPropertyDescriptor(i,e)).set)return r.set.call(u,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(u,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(u,e,r)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(u,e,n);return!0})(t,e,n,u)}function Xt(t,e,n,u,r){if(!$t(t,e,n,u||t)&&r)throw new Error("failed to set property");return n}function Jt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],u=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(u=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);u=!0);}catch(t){r=!0,i=t}finally{try{u||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,u=new Array(e);n<e;n++)u[n]=t[n];return u}function te(t){return"string"==typeof t||t instanceof String}Ft({target:"String",proto:!0,forced:It},{padStart:function(t){return jt(this,t,arguments.length>1?arguments[1]:void 0)}}),Ft({target:"String",proto:!0},{repeat:Ot}),Ft({global:!0},{globalThis:r});var ee={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function ne(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}var ue=function(){function t(e,n,u,r){for(Nt(this,t),this.value=e,this.cursorPos=n,this.oldValue=u,this.oldSelection=r;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return Ht(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?ee.NONE:this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos?ee.RIGHT:ee.LEFT}}]),t}(),re=function(){function t(e){Nt(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return Ht(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}(),ie=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2?arguments[2]:void 0;Nt(this,t),this.value=e,this.from=n,this.stop=u}return Ht(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.value.length)return"";var e=this.value[0];return this.value=this.value.slice(1),e}}]),t}();function ae(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new ae.InputMask(t,e)}var se=function(){function t(e){Nt(this,t),this._value="",this._update(Object.assign({},t.DEFAULTS,e)),this.isInitialized=!0}return Ht(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(t){this.value=this.doFormat(t)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new ie(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return te(t)&&(t=new ie(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){return t?(this._value+=t,new re({inserted:t,rawInserted:t})):new re}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,u=this.state,r=this._appendCharRaw(this.doPrepare(t,e),e);if(r.inserted){var i,a=!1!==this.doValidate(e);if(a&&null!=n){var s=this.state;this.overwrite&&(i=n.state,n.shiftBefore(this.value.length));var o=this.appendTail(n);(a=o.rawInserted===n.toString())&&o.inserted&&(this.state=s)}a||(r=new re,this.state=u,n&&i&&(n.state=i))}return r}},{key:"_appendPlaceholder",value:function(){return new re}},{key:"append",value:function(t,e,n){if(!te(t))throw new Error("value should be string");var u=new re,r=te(n)?new ie(String(n)):n;e&&e.tail&&(e._beforeTailState=this.state);for(var i=0;i<t.length;++i)u.aggregate(this._appendChar(t[i],e,r));return null!=r&&(u.tailShift+=this.appendTail(r).tailShift),u}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new re}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.rawInputValue,n=this.value,u=t();return this.rawInputValue=e,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,u}},{key:"runIsolated",value:function(t){if(this._isolated||!this.isInitialized)return t(this);this._isolated=!0;var e=this.state,n=t(this);return this.state=e,delete this._isolated,n}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(t){return this.format?this.format(t,this):t}},{key:"doParse",value:function(t){return this.parse?this.parse(t,this):t}},{key:"splice",value:function(t,e,n,u){var r=t+e,i=this.extractTail(r),a=this.nearestInputPos(t,u);return new re({tailShift:a-t}).aggregate(this.remove(a)).aggregate(this.append(n,{input:!0},i))}}]),t}();function oe(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?ae.MaskedRegExp:te(t)?ae.MaskedPattern:t instanceof Date||t===Date?ae.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?ae.MaskedNumber:Array.isArray(t)||t===Array?ae.MaskedDynamic:ae.Masked&&t.prototype instanceof ae.Masked?t:t instanceof Function?ae.MaskedFunction:t instanceof ae.Masked?t.constructor:(console.warn("Mask not found for mask",t),ae.Masked)}function le(t){if(ae.Masked&&t instanceof ae.Masked)return t;var e=(t=Object.assign({},t)).mask;if(ae.Masked&&e instanceof ae.Masked)return e;var n=oe(e);if(!n)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(t)}se.DEFAULTS={format:function(t){return t},parse:function(t){return t}},ae.Masked=se,ae.createMask=le;var he={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},ce=function(){function t(e){Nt(this,t);var n=e.mask,u=Yt(e,["mask"]);this.masked=le({mask:n}),Object.assign(this,u)}return Ht(t,[{key:"reset",value:function(){this._isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this._isFilled=!1,this.masked.remove(t,e)):new re}},{key:"value",get:function(){return this.masked.value||(this._isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._isFilled)return new re;var n=this.masked.state,u=this.masked._appendChar(t,e);return u.inserted&&!1===this.doValidate(e)&&(u.inserted=u.rawInserted="",this.masked.state=n),u.inserted||this.isOptional||this.lazy||e.input||(u.inserted=this.placeholderChar),u.skip=!u.inserted&&!this.isOptional,this._isFilled=Boolean(u.inserted),u}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new re;return this._isFilled||this.isOptional?t:(this._isFilled=!0,t.inserted=this.placeholderChar,t)}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee.NONE,n=this.value.length,u=Math.min(Math.max(t,0),n);switch(e){case ee.LEFT:case ee.FORCE_LEFT:return this.isComplete?u:0;case ee.RIGHT:case ee.FORCE_RIGHT:return this.isComplete?u:n;case ee.NONE:default:return u}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,_isFilled:this._isFilled}},set:function(t){this.masked.state=t.masked,this._isFilled=t._isFilled}}]),t}(),fe=function(){function t(e){Nt(this,t),Object.assign(this,e),this._value=""}return Ht(t,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new re}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee.NONE,n=this._value.length;switch(e){case ee.LEFT:case ee.FORCE_LEFT:return 0;case ee.NONE:case ee.RIGHT:case ee.FORCE_RIGHT:default:return n}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"isComplete",get:function(){return!0}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new re;if(this._value)return n;var u=this.char===t[0]&&(this.isUnmasking||e.input||e.raw)&&!e.tail;return u&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=u&&(e.raw||e.input),n}},{key:"_appendPlaceholder",value:function(){var t=new re;return this._value?t:(this._value=t.inserted=this.char,t)}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,new ie("")}},{key:"appendTail",value:function(t){return te(t)&&(t=new ie(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var u=this._appendChar(t,e);return null!=n&&(u.tailShift+=this.appendTail(n).tailShift),u}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),pe=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Nt(this,t),this.chunks=e,this.from=n}return Ht(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){te(e)&&(e=new ie(String(e)));var n=this.chunks[this.chunks.length-1],u=n&&(n.stop===e.stop||null==e.stop)&&e.from===n.from+n.toString().length;if(e instanceof ie)u?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(var r;e.chunks.length&&null==e.chunks[0].stop;)(r=e.chunks.shift()).from+=e.from,this.extend(r);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof ae.MaskedPattern))return new ie(this.toString()).appendTo(e);for(var n=new re,u=0;u<this.chunks.length&&!n.skip;++u){var r=this.chunks[u],i=e._mapPosToBlock(e.value.length),a=r.stop,s=void 0;if(null!=a&&(!i||i.index<=a)&&((r instanceof t||e._stops.indexOf(a)>=0)&&n.aggregate(e._appendPlaceholder(a)),s=r instanceof t&&e._blocks[a]),s){var o=s.appendTail(r);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=r.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(r.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map(function(t){return t.state}),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks,u=Yt(e,["chunks"]);Object.assign(this,u),this.chunks=n.map(function(e){var n="chunks"in e?new t:new ie;return n.state=e,n})}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.chunks.length)return"";for(var e=t-this.from,n=0;n<this.chunks.length;){var u=this.chunks[n],r=u.shiftBefore(e);if(u.toString()){if(!r)break;++n}else this.chunks.splice(n,1);if(r)return r}return""}}]),t}(),de=function(t){Ut(n,se);var e=Kt(n);function n(){return Nt(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),Wt(Gt(n.prototype),"_update",this).call(this,t)}}]),n}();ae.MaskedRegExp=de;var ve=function(t){Ut(n,se);var e=Kt(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Nt(this,n),t.definitions=Object.assign({},he,t.definitions),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),Wt(Gt(n.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,e=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var u=this.mask;if(u&&e)for(var r=!1,i=!1,a=0;a<u.length;++a){if(this.blocks)if("continue"===function(){var e=u.slice(a),n=Object.keys(t.blocks).filter(function(t){return 0===e.indexOf(t)});n.sort(function(t,e){return e.length-t.length});var r=n[0];if(r){var i=le(Object.assign({parent:t,lazy:t.lazy,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[r]));return i&&(t._blocks.push(i),t._maskedBlocks[r]||(t._maskedBlocks[r]=[]),t._maskedBlocks[r].push(t._blocks.length-1)),a+=r.length-1,"continue"}}())continue;var s=u[a],o=s in e;if(s!==n.STOP_CHAR)if("{"!==s&&"}"!==s)if("["!==s&&"]"!==s){if(s===n.ESCAPE_CHAR){if(!(s=u[++a]))break;o=!1}var l=o?new ce({parent:this,lazy:this.lazy,placeholderChar:this.placeholderChar,mask:e[s],isOptional:i}):new fe({char:s,isUnmasking:r});this._blocks.push(l)}else i=!i;else r=!r;else this._stops.push(this._blocks.length)}}},{key:"state",get:function(){return Object.assign({},Wt(Gt(n.prototype),"state",this),{_blocks:this._blocks.map(function(t){return t.state})})},set:function(t){var e=t._blocks,u=Yt(t,["_blocks"]);this._blocks.forEach(function(t,n){return t.state=e[n]}),Xt(Gt(n.prototype),"state",u,this,!0)}},{key:"reset",value:function(){Wt(Gt(n.prototype),"reset",this).call(this),this._blocks.forEach(function(t){return t.reset()})}},{key:"isComplete",get:function(){return this._blocks.every(function(t){return t.isComplete})}},{key:"doCommit",value:function(){this._blocks.forEach(function(t){return t.doCommit()}),Wt(Gt(n.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce(function(t,e){return t+e.unmaskedValue},"")},set:function(t){Xt(Gt(n.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce(function(t,e){return t+e.value},"")},set:function(t){Xt(Gt(n.prototype),"value",t,this,!0)}},{key:"appendTail",value:function(t){return Wt(Gt(n.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),u=new re;if(!n)return u;for(var r=n.index;;++r){var i=this._blocks[r];if(!i)break;var a=i._appendChar(t,e),s=a.skip;if(u.aggregate(a),s||a.rawInserted)break}return u}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=new pe;return e===n?u:(this._forEachBlocksInRange(e,n,function(e,n,r,i){var a=e.extractTail(r,i);a.stop=t._findStopBefore(n),a.from=t._blockStartPos(n),a instanceof pe&&(a.blockIndex=n),u.extend(a)}),u)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var u="";return this._forEachBlocksInRange(t,e,function(t,e,r,i){u+=t.extractInput(r,i,n)}),u}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var u=this._stops[n];if(!(u<=t))break;e=u}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new re;if(this.lazy&&null==t)return n;var u=this._mapPosToBlock(this.value.length);if(!u)return n;var r=u.index,i=null!=t?t:this._blocks.length;return this._blocks.slice(r,i).forEach(function(u){if(!u.lazy||null!=t){var r=null!=u._blocks?[u._blocks.length]:[],i=u._appendPlaceholder.apply(u,r);e._value+=i.inserted,n.aggregate(i)}}),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var u=this._blocks[n],r=e.length;if(t<=(e+=u.value).length)return{index:n,offset:t-r}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce(function(t,e){return t+e.value.length},0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,u=this._mapPosToBlock(t);if(u){var r=this._mapPosToBlock(e),i=r&&u.index===r.index,a=u.offset,s=r&&i?r.offset:this._blocks[u.index].value.length;if(n(this._blocks[u.index],u.index,a,s),r&&!i){for(var o=u.index+1;o<r.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[r.index],r.index,0,r.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=Wt(Gt(n.prototype),"remove",this).call(this,t,e);return this._forEachBlocksInRange(t,e,function(t,e,n,r){u.aggregate(t.remove(n,r))}),u}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee.NONE,n=this._mapPosToBlock(t)||{index:0,offset:0},u=n.offset,r=n.index,i=this._blocks[r];if(!i)return t;var a=u;0!==a&&a<i.value.length&&(a=i.nearestInputPos(u,function(t){switch(t){case ee.LEFT:return ee.FORCE_LEFT;case ee.RIGHT:return ee.FORCE_RIGHT;default:return t}}(e)));var s=a===i.value.length;if(!(0===a)&&!s)return this._blockStartPos(r)+a;var o=s?r+1:r;if(e===ee.NONE){if(o>0){var l=o-1,h=this._blocks[l],c=h.nearestInputPos(0,ee.NONE);if(!h.value.length||c!==h.value.length)return this._blockStartPos(o)}for(var f=o;f<this._blocks.length;++f){var p=this._blocks[f],d=p.nearestInputPos(0,ee.NONE);if(!p.value.length||d!==p.value.length)return this._blockStartPos(f)+d}for(var v=o-1;v>=0;--v){var k=this._blocks[v],g=k.nearestInputPos(0,ee.NONE);if(!k.value.length||g!==k.value.length)return this._blockStartPos(v)+k.value.length}return t}if(e===ee.LEFT||e===ee.FORCE_LEFT){for(var y,m=o;m<this._blocks.length;++m)if(this._blocks[m].value){y=m;break}if(null!=y){var _=this._blocks[y],A=_.nearestInputPos(0,ee.RIGHT);if(0===A&&_.unmaskedValue.length)return this._blockStartPos(y)+A}for(var b,E=-1,C=o-1;C>=0;--C){var F=this._blocks[C],S=F.nearestInputPos(F.value.length,ee.FORCE_LEFT);if(F.value&&0===S||(b=C),0!==S){if(S!==F.value.length)return this._blockStartPos(C)+S;E=C;break}}if(e===ee.LEFT)for(var D=E+1;D<=Math.min(o,this._blocks.length-1);++D){var B=this._blocks[D],w=B.nearestInputPos(0,ee.NONE),O=this._blockStartPos(D)+w;if(O>t)break;if(w!==B.value.length)return O}if(E>=0)return this._blockStartPos(E)+this._blocks[E].value.length;if(e===ee.FORCE_LEFT||this.lazy&&!this.extractInput()&&!function(t){if(!t)return!1;var e=t.value;return!e||t.nearestInputPos(0,ee.NONE)!==e.length}(this._blocks[o]))return 0;if(null!=b)return this._blockStartPos(b);for(var M=o;M<this._blocks.length;++M){var T=this._blocks[M],x=T.nearestInputPos(0,ee.NONE);if(!T.value.length||x!==T.value.length)return this._blockStartPos(M)+x}return 0}if(e===ee.RIGHT||e===ee.FORCE_RIGHT){for(var P,I,R=o;R<this._blocks.length;++R){var j=this._blocks[R],V=j.nearestInputPos(0,ee.NONE);if(V!==j.value.length){I=this._blockStartPos(R)+V,P=R;break}}if(null!=P&&null!=I){for(var N=P;N<this._blocks.length;++N){var L=this._blocks[N],H=L.nearestInputPos(0,ee.FORCE_RIGHT);if(H!==L.value.length)return this._blockStartPos(N)+H}return e===ee.FORCE_RIGHT?this.value.length:I}for(var U=Math.min(o,this._blocks.length-1);U>=0;--U){var G=this._blocks[U],z=G.nearestInputPos(G.value.length,ee.LEFT);if(0!==z){var Y=this._blockStartPos(U)+z;if(Y>=t)return Y;break}}}return t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map(function(t){return e._blocks[t]}):[]}}]),n}();ve.DEFAULTS={lazy:!0,placeholderChar:"_"},ve.STOP_CHAR="`",ve.ESCAPE_CHAR="\\",ve.InputDefinition=ce,ve.FixedDefinition=fe,ae.MaskedPattern=ve;var ke=function(t){Ut(n,ve);var e=Kt(n);function n(){return Nt(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(t){t=Object.assign({to:this.to||0,from:this.from||0},t);var e=String(t.to).length;null!=t.maxLength&&(e=Math.max(e,t.maxLength)),t.maxLength=e;for(var u=String(t.from).padStart(e,"0"),r=String(t.to).padStart(e,"0"),i=0;i<r.length&&r[i]===u[i];)++i;t.mask=r.slice(0,i).replace(/0/g,"\\0")+"0".repeat(e-i),Wt(Gt(n.prototype),"_update",this).call(this,t)}},{key:"isComplete",get:function(){return Wt(Gt(n.prototype),"isComplete",this)&&Boolean(this.value)}},{key:"boundaries",value:function(t){var e="",n="",u=Jt(t.match(/^(\D*)(\d*)(\D*)/)||[],3),r=u[1],i=u[2];return i&&(e="0".repeat(r.length)+i,n="9".repeat(r.length)+i),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=Wt(Gt(n.prototype),"doPrepare",this).call(this,t,e).replace(/\D/g,""),!this.autofix)return t;for(var u=String(this.from).padStart(this.maxLength,"0"),r=String(this.to).padStart(this.maxLength,"0"),i=this.value,a="",s=0;s<t.length;++s){var o=i+a+t[s],l=Jt(this.boundaries(o),2),h=l[0],c=l[1];Number(c)<this.from?a+=u[o.length-1]:Number(h)>this.to?a+=r[o.length-1]:a+=t[s]}return a}},{key:"doValidate",value:function(){var t,e=this.value;if(-1===e.search(/[^0]/)&&e.length<=this._matchFrom)return!0;for(var u=Jt(this.boundaries(e),2),r=u[0],i=u[1],a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return this.from<=Number(i)&&Number(r)<=this.to&&(t=Wt(Gt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(s))}}]),n}();ae.MaskedRange=ke;var ge=function(t){Ut(n,ve);var e=Kt(n);function n(t){return Nt(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var e=t.blocks;t.blocks=Object.assign({},n.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,e),Object.keys(t.blocks).forEach(function(e){var n=t.blocks[e];"autofix"in n||(n.autofix=t.autofix)}),Wt(Gt(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this.date,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return(t=Wt(Gt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}},{key:"date",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"typedValue",get:function(){return this.isComplete?Wt(Gt(n.prototype),"typedValue",this):null},set:function(t){Xt(Gt(n.prototype),"typedValue",t,this,!0)}}]),n}();ge.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join(".")},parse:function(t){var e=Jt(t.split("."),3),n=e[0],u=e[1],r=e[2];return new Date(r,u-1,n)}},ge.GET_DEFAULT_BLOCKS=function(){return{d:{mask:ke,from:1,to:31,maxLength:2},m:{mask:ke,from:1,to:12,maxLength:2},Y:{mask:ke,from:1900,to:9999}}},ae.MaskedDate=ge;var ye=function(){function t(){Nt(this,t)}return Ht(t,[{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}}]),t}();ae.MaskElement=ye;var me=function(t){Ut(n,ye);var e=Kt(n);function n(t){var u;return Nt(this,n),(u=e.call(this)).input=t,u._handlers={},u}return Ht(n,[{key:"rootElement",get:function(){return this.input.getRootNode?this.input.getRootNode():document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}},{key:"bindEvents",value:function(t){var e=this;Object.keys(t).forEach(function(u){return e._toggleEventHandler(n.EVENTS_MAP[u],t[u])})}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach(function(e){return t._toggleEventHandler(e)})}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}}]),n}();me.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},ae.HTMLMaskElement=me;var _e=function(t){Ut(n,me);var e=Kt(n);function n(){return Nt(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_unsafeSelectionStart",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&e.anchorOffset}},{key:"_unsafeSelectionEnd",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&this._unsafeSelectionStart+String(e).length}},{key:"_unsafeSelect",value:function(t,e){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,t),n.setEnd(this.input.lastChild||this.input,e);var u=this.rootElement,r=u.getSelection&&u.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}]),n}();ae.HTMLContenteditableMaskElement=_e;var Ae=function(){function t(e,n){Nt(this,t),this.el=e instanceof ye?e:e.isContentEditable&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName?new _e(e):new me(e),this.masked=le(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return Ht(t,[{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t))if(t instanceof ae.Masked||this.masked.constructor!==oe(t)){var e=le({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}else this.masked.updateOptions({mask:t})}},{key:"maskEquals",value:function(t){return null==t||t===this.masked.mask||t===Date&&this.masked instanceof ge}},{key:"value",get:function(){return this._value},set:function(t){this.masked.value=t,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValue=t,this.updateControl(),this.alignCursor()}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];var r=this._listeners[t];r&&r.forEach(function(t){return t.apply(void 0,n)})}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var e=t.mask,n=Yt(t,["mask"]),u=!this.maskEquals(e),r=!function t(e,n){if(n===e)return!0;var u,r=Array.isArray(n),i=Array.isArray(e);if(r&&i){if(n.length!=e.length)return!1;for(u=0;u<n.length;u++)if(!t(n[u],e[u]))return!1;return!0}if(r!=i)return!1;if(n&&e&&"object"===Vt(n)&&"object"===Vt(e)){var a=n instanceof Date,s=e instanceof Date;if(a&&s)return n.getTime()==e.getTime();if(a!=s)return!1;var o=n instanceof RegExp,l=e instanceof RegExp;if(o&&l)return n.toString()==e.toString();if(o!=l)return!1;var h=Object.keys(n);for(u=0;u<h.length;u++)if(!Object.prototype.hasOwnProperty.call(e,h[u]))return!1;for(u=0;u<h.length;u++)if(!t(e[h[u]],n[h[u]]))return!1;return!0}return!(!n||!e||"function"!=typeof n||"function"!=typeof e)&&n.toString()===e.toString()}(this.masked,n);u&&(this.mask=e),r&&this.masked.updateOptions(n),(u||r)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout(function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())},10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.cursorPos,ee.LEFT)}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(t){if(this._inputEvent=t,this._abortUpdateCursor(),!this._selection)return this.updateValue();var e=new ue(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,u=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection).offset,r=n===this.masked.rawInputValue?e.removeDirection:ee.NONE,i=this.masked.nearestInputPos(e.startChangePos+u,r);this.updateControl(),this.updateCursor(i),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.alignCursorFriendly()}},{key:"_onClick",value:function(t){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),t}();ae.InputMask=Ae;var be=function(t){Ut(n,ve);var e=Kt(n);function n(){return Nt(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),Wt(Gt(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.enum.some(function(t){return t.indexOf(e.unmaskedValue)>=0})&&(t=Wt(Gt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))}}]),n}();ae.MaskedEnum=be;var Ee=function(t){Ut(n,se);var e=Kt(n);function n(t){return Nt(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(t){Wt(Gt(n.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+ne(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(ne).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(ne(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){for(var e,u=arguments.length,r=new Array(u>1?u-1:0),i=1;i<u;i++)r[i-1]=arguments[i];return(e=Wt(Gt(n.prototype),"doPrepare",this)).call.apply(e,[this,this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp,this.radix))].concat(r))}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,u=0;u<t;++u)this._value.indexOf(this.thousandsSeparator,u)===u&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=arguments.length>2?arguments[2]:void 0,r=Jt(this._adjustRangeWithSeparators(t,e),2);return t=r[0],e=r[1],this._removeThousandsSeparators(Wt(Gt(n.prototype),"extractInput",this).call(this,t,e,u))}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return Wt(Gt(n.prototype),"_appendCharRaw",this).call(this,t,e);var u=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,r=this._separatorsCountFromSlice(u);this._value=this._removeThousandsSeparators(this.value);var i=Wt(Gt(n.prototype),"_appendCharRaw",this).call(this,t,e);this._value=this._insertThousandsSeparators(this._value);var a=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,s=this._separatorsCountFromSlice(a);return i.tailShift+=(s-r)*this.thousandsSeparator.length,i.skip=!i.rawInserted&&t===this.thousandsSeparator,i}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var u=this._findSeparatorAround(e);return u>=0&&(e=u+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=Jt(this._adjustRangeWithSeparators(t,e),2);t=n[0],e=n[1];var u=this.value.slice(0,t),r=this.value.slice(e),i=this._separatorsCount(u.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(u+r));var a=this._separatorsCountFromSlice(u);return new re({tailShift:(a-i)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case ee.NONE:case ee.LEFT:case ee.FORCE_LEFT:var n=this._findSeparatorAround(t-1);if(n>=0){var u=n+this.thousandsSeparator.length;if(t<u||this.value.length<=u||e===ee.FORCE_LEFT)return n}break;case ee.RIGHT:case ee.FORCE_RIGHT:var r=this._findSeparatorAround(t);if(r>=0)return r+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var e=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(e){var u=this.number;e=e&&!isNaN(u)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return e&&Wt(Gt(n.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=String(e));var u=this.value;this.normalizeZeros&&(u=this._normalizeZeros(u)),this.padFractionalZeros&&(u=this._padFractionalZeros(u)),this._value=u}Wt(Gt(n.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,function(t,e,n,u){return e+u}),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){Xt(Gt(n.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(t){Xt(Gt(n.prototype),"unmaskedValue",String(t),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),n}();Ee.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},ae.MaskedNumber=Ee;var Ce=function(t){Ut(n,se);var e=Kt(n);function n(){return Nt(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),Wt(Gt(n.prototype),"_update",this).call(this,t)}}]),n}();ae.MaskedFunction=Ce;var Fe=function(t){Ut(n,se);var e=Kt(n);function n(t){var u;return Nt(this,n),(u=e.call(this,Object.assign({},n.DEFAULTS,t))).currentMask=null,u}return Ht(n,[{key:"_update",value:function(t){Wt(Gt(n.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map(function(t){return le(t)}):[])}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(t,e);return this.currentMask&&n.aggregate(this.currentMask._appendChar(t,e)),n}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,u=this.rawInputValue,r=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:u,i=u.slice(r.length),a=this.currentMask,s=new re,o=a&&a.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask)if(this.currentMask!==a){if(this.currentMask.reset(),r){var l=this.currentMask.append(r,{raw:!0});s.tailShift=l.inserted.length-n.length}i&&(s.tailShift+=this.currentMask.append(i,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o;return s}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return(t=Wt(Gt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.currentMask||(e=this.currentMask).doValidate.apply(e,r))}},{key:"reset",value:function(){this.currentMask&&this.currentMask.reset(),this.compiledMasks.forEach(function(t){return t.reset()})}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){Xt(Gt(n.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){Xt(Gt(n.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){return!!this.currentMask&&this.currentMask.isComplete}},{key:"remove",value:function(){var t,e=new re;this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch());return e}},{key:"state",get:function(){return Object.assign({},Wt(Gt(n.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(function(t){return t.state}),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(t){var e=t.compiledMasks,u=t.currentMaskRef,r=t.currentMask,i=Yt(t,["compiledMasks","currentMaskRef","currentMask"]);this.compiledMasks.forEach(function(t,n){return t.state=e[n]}),null!=u&&(this.currentMask=u,this.currentMask.state=r),Xt(Gt(n.prototype),"state",i,this,!0)}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.currentMask?(t=this.currentMask).extractTail.apply(t,r):(e=Wt(Gt(n.prototype),"extractTail",this)).call.apply(e,[this].concat(r))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),Wt(Gt(n.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,r):(e=Wt(Gt(n.prototype),"nearestInputPos",this)).call.apply(e,[this].concat(r))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:Wt(Gt(n.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}}]),n}();Fe.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var u=e.rawInputValue,r=e.compiledMasks.map(function(e,r){return e.reset(),e.append(u,{raw:!0}),e.append(t,n),{weight:e.rawInputValue.length,index:r}});return r.sort(function(t,e){return e.weight-t.weight}),e.compiledMasks[r[0].index]}}},ae.MaskedDynamic=Fe;var Se={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function De(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Se.MASKED,u=le(t);return function(t){return u.runIsolated(function(u){return u[e]=t,u[n]})}}function Be(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];return De.apply(void 0,n)(t)}ae.PIPE_TYPE=Se,ae.createPipe=De,ae.pipe=Be;try{globalThis.IMask=ae}catch(t){}t.HTMLContenteditableMaskElement=_e,t.HTMLMaskElement=me,t.InputMask=Ae,t.MaskElement=ye,t.Masked=se,t.MaskedDate=ge,t.MaskedDynamic=Fe,t.MaskedEnum=be,t.MaskedFunction=Ce,t.MaskedNumber=Ee,t.MaskedPattern=ve,t.MaskedRange=ke,t.MaskedRegExp=de,t.PIPE_TYPE=Se,t.createMask=le,t.createPipe=De,t.default=ae,t.pipe=Be,Object.defineProperty(t,"__esModule",{value:!0})});

/**ID
 * fullscreenForm.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';



	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * createElement function
	 * creates an element with tag = tag, className = opt.cName, innerHTML = opt.inner and appends it to opt.appendTo
	 */
	function createElement( tag, opt ) {
		var el = document.createElement( tag )
		if( opt ) {
			if( opt.cName ) {
				el.className = opt.cName;
			}
			if( opt.inner ) {
				el.innerHTML = opt.inner;
			}
			if( opt.appendTo ) {
				opt.appendTo.appendChild( el );
			}
		}	
		return el;
	}

	/**
	 * FForm function
	 */
	function FForm( el, options, refresh ) {
		
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
		if(refresh) {
	    this._refresh();		
		}else{
  		this._init();
		}
	}
	/**
	 * FForm options
	 */
	FForm.prototype.options = {
		// show progress bar
		ctrlProgress : true,
		// show navigation dots
		ctrlNavDots : true,
		// show [current field]/[total fields] status
		ctrlNavPosition : true,
		// reached the review and submit step
		onReview : function() { return false; }
	};

	/**
	 * init function
	 * initialize and cache some vars
	 */
	FForm.prototype._init = function() {
		// the form element
		this.formEl = this.el.querySelector( 'form' );
      
      	// Submit button
      	this.submitBtn = this.formEl.querySelector('button[type="submit"]');
      
		// list of fields
		this.fieldsList = this.formEl.querySelector( 'ol.fs-fields' );


      
		// current field position
		this.current = 0;

		// all fields
		this.fields = [].slice.call( this.fieldsList.children );
		
		// total fields
		this.fieldsCount = this.fields.length;
		
		// show first field
        this.fields[ this.current ].classList.add('fs-current');

		// create/add controls
		this._addControls();

		// create/add messages
		this._addErrorMsg();
		
		// init events
		this._initEvents();
      
        // init fieldPlugins
		this._fieldPlugins();
      
        // init posts
		this._post();
	};

	FForm.prototype._refresh = function() {
		// the form element
		this.formEl = this.el.querySelector( 'form' );
      
      	// Submit button
      	this.submitBtn = this.formEl.querySelector('button[type="submit"]');
      
		// list of fields
		this.fieldsList = this.formEl.querySelector( 'ol.fs-fields' );


      
		// current field position
		this.current = 0;

		// all fields
		this.fields = [].slice.call( this.fieldsList.children );
		
		// total fields
		this.fieldsCount = this.fields.length;
		
		// show first field
        this.fields[ this.current ].classList.add('fs-current');

			// create/add controls
			this._addControls();
		
		// init events
	//	this._initEvents();
      
        // init fieldPlugins
		//this._fieldPlugins();
      
        // init posts
		//this._post();
	};
  
  

    
    /**
	 * look for field types that need plugins and init
	 */
	FForm.prototype._fieldPlugins = function() {
       this.fields.forEach( function( fld ) {
         var phone_input = fld.querySelector( 'input[type="tel"]' )
         var website_input = fld.querySelector( 'input[type="url"]' )
         if(phone_input) {
           var phoneMask = IMask(
           phone_input, {
           mask: '(000) 000-0000'
           });
         }
         if(website_input) {
           var regex =/^.+$/;
           var websiteMask = IMask(
           website_input, {
             mask: 'https://***********************************', 
             placeholderChar: ''  
           });
         }
     }
    )
	}
    
    
    /**
	 * Post Form Data to appropriate places
	 */
    	FForm.prototype._post = function() {
     
	}
    

	/**
	 * addControls function
	 * create and insert the structure for the controls
	 */
	FForm.prototype._addControls = function() {
		// main controls wrapper
		this.ctrls = createElement( 'div', { cName : 'fs-controls', appendTo : this.el } );

		// continue button (jump to next field)
		this.ctrlContinue = createElement( 'button', { cName : 'fs-continue', inner : 'Continue', appendTo : this.ctrls } );
		this._showCtrl( this.ctrlContinue );

		// navigation dots
		if( this.options.ctrlNavDots ) {
			this.ctrlNav = createElement( 'nav', { cName : 'fs-nav-dots', appendTo : this.ctrls } );
			var dots = '';
			for( var i = 0; i < this.fieldsCount; ++i ) {
				dots += i === this.current ? '<button class="fs-dot-current"></button>' : '<button disabled></button>';
			}
			this.ctrlNav.innerHTML = dots;
			this._showCtrl( this.ctrlNav );
			this.ctrlNavDots = [].slice.call( this.ctrlNav.children );
		}

		// field number status
		if( this.options.ctrlNavPosition ) {
			this.ctrlFldStatus = createElement( 'span', { cName : 'fs-numbers', appendTo : this.ctrls } );

			// current field placeholder
			this.ctrlFldStatusCurr = createElement( 'span', { cName : 'fs-number-current', inner : Number( this.current + 1 ) } );
			this.ctrlFldStatus.appendChild( this.ctrlFldStatusCurr );

			// total fields placeholder
			this.ctrlFldStatusTotal = createElement( 'span', { cName : 'fs-number-total', inner : this.fieldsCount } );
			this.ctrlFldStatus.appendChild( this.ctrlFldStatusTotal );
			this._showCtrl( this.ctrlFldStatus );
		}

		// progress bar
		if( this.options.ctrlProgress ) {
			this.ctrlProgress = createElement( 'div', { cName : 'fs-progress', appendTo : this.ctrls } );
			this._showCtrl( this.ctrlProgress );
		}
	}

	/**
	 * addErrorMsg function
	 * create and insert the structure for the error message
	 */
	FForm.prototype._addErrorMsg = function() {
		// error message
		this.msgError = createElement( 'span', { cName : 'fs-message-error', appendTo : this.el } );
	}

	/**
	 * init events
	 */
	FForm.prototype._initEvents = function() {
		var self = this;
      
      	// attach trigger to submit button
        this.formEl.addEventListener('submit', (e) => this._onSubmit(e));
      
        // attach update event to check conditionals
        this.formEl.addEventListener('update', (e) => this._conditional(e));  
       
        

		// show next field
		this.ctrlContinue.addEventListener( 'click', function() {
			self._nextField(); 
		} );

		// navigation dots
		if( this.options.ctrlNavDots ) {
			this.ctrlNavDots.forEach( function( dot, pos ) {
				dot.addEventListener( 'click', function() {
					self._showField( pos );
				} );
			} );
		}

		// jump to next field without clicking the continue button (for fields/list items with the attribute "data-input-trigger")
		this.fields.forEach( function( fld ) {

          
          		if( fld.hasAttribute( 'data-link-trigger' ) ) {
				var a = fld.querySelector( 'a' );
                if( !a ) return;
                a.addEventListener( 'click', function() { 
                  self._nextField(); 
                });
                }
          
          
      

            // handle payment logic
            if($(fld).hasClass('payment') && !$(fld).hasClass('paymentreceived')) {
              // disable continue button
              var button = $(fld).closest('.fs-form-wrap').find('.fs-continue');
              $('body').off('paymentreceived').on('paymentreceived', function() {
               $(fld).addClass('paymentreceived');  
               button.attr("disabled", false); 
               self._nextField();
              }) 
            }   
          
			if( fld.hasAttribute( 'data-input-trigger' ) ) {
				var input = fld.querySelector( 'input[type="radio"]' ) || /*fld.querySelector( '.cs-select' ) ||*/ fld.querySelector( 'select' ); // assuming only radio and select elements (TODO: exclude multiple selects)
                if( !input ) return;

				switch( input.tagName.toLowerCase() ) {
					case 'select' : 
						input.addEventListener( 'change', function() { self._nextField(); } );
						break;

					case 'input' : 
						[].slice.call( fld.querySelectorAll( 'input[type="radio"]' ) ).forEach( function( inp ) {
							inp.addEventListener( 'change', function(ev) { self._nextField(); } );
						} ); 
						break;

					/*
					// for our custom select we would do something like:
					case 'div' : 
						[].slice.call( fld.querySelectorAll( 'ul > li' ) ).forEach( function( inp ) {
							inp.addEventListener( 'click', function(ev) { self._nextField(); } );
						} ); 
						break;
					*/
				}
			}
          
	
		} );

		// keyboard navigation events - jump to next field when pressing enter
		document.addEventListener( 'keydown', function( ev ) {
			if( !self.isLastStep && ev.target.tagName.toLowerCase() !== 'textarea' ) {
				var keyCode = ev.keyCode || ev.which;
				if( keyCode === 13 ) {
					ev.preventDefault();
					self._nextField();
				}
			}
		} );


		let getSiblings = function (e) {
			// for collecting siblings
			let siblings = []; 
			// if no parent, return no sibling
			if(!e.parentNode) {
				return siblings;
			}
			// first child of the parent node
			let sibling  = e.parentNode.firstChild;
			
			// collecting siblings
			while (sibling) {
				if (sibling.nodeType === 1 && sibling !== e) {
					siblings.push(sibling);
				}
				sibling = sibling.nextSibling;
			}
			return siblings;
		};

		document.addEventListener('shopify:block:select', function(e) {
			if (e.detail.sectionId.indexOf('FullScreenForm') !== -1) {
			  let siblings = getSiblings(e.target);
			  siblings.forEach((sibling) => {
				sibling.classList.remove('fs-current');
			  });
              e.target.classList.add('fs-current');
			}
		  });

		  document.addEventListener('shopify:section:load', function(e) {
			if (e.detail.sectionId.indexOf('FullScreenForm') !== -1) {
				(function() {
					var formWrap = document.getElementById( 'fs-form-wrap' );
					new FForm( formWrap, {
						onReview : function() {
								document.body.classList.add('overview' ); // for demo purposes only
						}
					}, true );
					})();
			}
		  });

	};

	/**
	 * nextField function
	 * jumps to the next field
	 */
	FForm.prototype._nextField = function( backto ) {
		if( this.isLastStep || !this._validade() || this.isAnimating ) {
			return false;
		}
		this.isAnimating = true;

        //let everyone know we are moving on
        const eventCon = new CustomEvent('update', { detail: this.fields[ this.current ].id });
        this.formEl.dispatchEvent(eventCon);
      
      
		// check if on last step
		this.isLastStep = this.current === this.fieldsCount - 1 && backto === undefined ? true : false;
		
		// clear any previous error messages
		this._clearError();

		// current field
		var currentFld = this.fields[ this.current ];

		// save the navigation direction
		this.navdir = backto !== undefined ? backto < this.current ? 'prev' : 'next' : 'next';

		// update current field
		this.current = backto !== undefined ? backto : this.current + 1;

		if( backto === undefined ) {
			// update progress bar (unless we navigate backwards)
			this._progress();

			// save farthest position so far
			this.farthest = this.current;
		}

		// add class "fs-display-next" or "fs-display-prev" to the list of fields
        this.fieldsList.classList.add('fs-display-' + this.navdir);
      
  


		// remove class "fs-current" from current field and add it to the next one
		// also add class "fs-show" to the next field and the class "fs-hide" to the current one
        currentFld.classList.remove('fs-current');
        currentFld.classList.add('fs-hide');
		
		if( !this.isLastStep ) {
			// update nav
			this._updateNav();

			// change the current field number/status
			this._updateFieldNumber();

			var nextField = this.fields[ this.current ];

          nextField.classList.add('fs-current');
          nextField.classList.add('fs-show');
		}
      
      
              if( !this.isLastStep ) {
              // check for variable blocks and replace them
              var label = nextField.querySelector('label');        
              var answerblock = label.querySelector('answer');  
                if(answerblock) {

                 var variable =  answerblock.dataset.id;
                   var formValue = [];
                this.fields.forEach(function (field, index) {
                  if(variable == field.id) {
                   switch(field.querySelector('[name]').type) { 
                   case 'radio':
                     formValue.push(field.querySelector('[name]:checked').value); 
                   break    
                   default:
                     formValue.push(field.querySelector('[name]').value);
                   }
                  }
                 });
               formValue = formValue[0];
               answerblock.innerHTML = formValue;
              }
             }   

		// after animation ends remove added classes from fields
		var self = this,
			onEndAnimationFn = function( ev ) {
			
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend".split(" ").map(animEndEventName => this.removeEventListener(animEndEventName, onEndAnimationFn));
		
				
				
                self.fieldsList.classList.remove('fs-display-' + self.navdir );
                currentFld.classList.remove('fs-hide' );
              
                //if has youtube stop it
                var youtube = currentFld.querySelector('iframe');
                  if(youtube) {
                   var youtube_src = youtube.getAttribute('src');
                   youtube.setAttribute('src',youtube_src);
                  }

				if( self.isLastStep ) {
					// show the complete form and hide the controls
					self._hideCtrl( self.ctrlNav );
					self._hideCtrl( self.ctrlProgress );
					self._hideCtrl( self.ctrlContinue );
					self._hideCtrl( self.ctrlFldStatus );
					// replace class fs-form-full with fs-form-overview

                  self.formEl.classList.remove('fs-form-full');
                  self.formEl.classList.add('fs-form-overview');
                  self.formEl.classList.add('fs-show' );
				
					// callback
					self.options.onReview();
				}
				else {
				
                   nextField.classList.remove('fs-show');
					
					if( self.options.ctrlNavPosition ) {
						self.ctrlFldStatusCurr.innerHTML = self.ctrlFldStatusNew.innerHTML;
						self.ctrlFldStatus.removeChild( self.ctrlFldStatusNew );
                        self.ctrlFldStatus.classList.remove('fs-show-' + self.navdir );
					}
				}
				self.isAnimating = false;
              
    // focus on next field          
	if(!jQuery(self.formEl).hasClass('fs-form-overview')) {		 
	  jQuery(nextField).find('input, textarea').focus();
	}else{
		jQuery(self.formEl).find('.fs-current input, .fs-current textarea').blur();
	}
              
              
  

  
              //if(nextField.querySelector('label').includes('[' + blockId + ']'))

             
    // jump if conditional          
   	if(jQuery('.fs-current').hasClass('skip')) {
		self._nextField();		
	}
              
              
      // stop continue if payment   
   	if(jQuery('.fs-current').hasClass('payment') && !jQuery('.fs-current').hasClass('paymentreceived')) {
		      var button = jQuery('.fs-current').closest('.fs-form-wrap').find('.fs-continue');
              button.attr("disabled", true);
	}          
              

           
              
              
              
			};

	
			if( this.navdir === 'next' ) {
				if( this.isLastStep ) {
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend".split(" ").map(animEndEventName => currentFld.querySelector( '.fs-anim-upper' ).addEventListener(animEndEventName, onEndAnimationFn));

				}
				else {
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend".split(" ").map(animEndEventName => nextField.querySelector( '.fs-anim-lower' ).addEventListener(animEndEventName, onEndAnimationFn));

				}
			}
			else {
       "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend".split(" ").map(animEndEventName => nextField.querySelector( '.fs-anim-upper' ).addEventListener(animEndEventName, onEndAnimationFn));

			}

	}

	/**
	 * showField function
	 * jumps to the field at position pos
	 */
	FForm.prototype._showField = function( pos ) {
		if( pos === this.current || pos < 0 || pos > this.fieldsCount - 1 ) {
			return false;
		}
		this._nextField( pos );
	}

	/**
	 * updateFieldNumber function
	 * changes the current field number
	 */
	FForm.prototype._updateFieldNumber = function() {
		if( this.options.ctrlNavPosition ) {
			// first, create next field number placeholder
			this.ctrlFldStatusNew = document.createElement( 'span' );
			this.ctrlFldStatusNew.className = 'fs-number-new';
			this.ctrlFldStatusNew.innerHTML = Number( this.current + 1 );
			
			// insert it in the DOM
			this.ctrlFldStatus.appendChild( this.ctrlFldStatusNew );
			
			// add class "fs-show-next" or "fs-show-prev" depending on the navigation direction
			var self = this;
			setTimeout( function() {
		
               self.ctrlFldStatus.classList.add(self.navdir === 'next' ? 'fs-show-next' : 'fs-show-prev' );
			}, 25 );
		}
	}

	/**
	 * progress function
	 * updates the progress bar by setting its width
	 */
	FForm.prototype._progress = function() {
		if( this.options.ctrlProgress ) {
			this.ctrlProgress.style.width = this.current * ( 100 / this.fieldsCount ) + '%';
		}
	}

	/**
	 * updateNav function
	 * updates the navigation dots
	 */
	FForm.prototype._updateNav = function() {
		if( this.options.ctrlNavDots ) {
        this.ctrlNav.querySelector( 'button.fs-dot-current' ).classList.remove('fs-dot-current' );
        this.ctrlNavDots[ this.current ].classList.add('fs-dot-current' );
			this.ctrlNavDots[ this.current ].disabled = false;
		}
	}

	/**
	 * showCtrl function
	 * shows a control
	 */
	FForm.prototype._showCtrl = function( ctrl ) {
		ctrl.classList.add('fs-show' );
	}

	/**
	 * hideCtrl function
	 * hides a control
	 */
	FForm.prototype._hideCtrl = function( ctrl ) {
		ctrl.classList.remove('fs-show' );
	}

	// TODO: this is a very basic validation function. Only checks for required fields..
	FForm.prototype._validade = function() {
        
        // add email validation
        function validateEmail(email) {
           const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(String(email).toLowerCase());
         }
      
		var fld = this.fields[ this.current ],
			input = fld.querySelector( 'input[required]' ) || fld.querySelector( 'textarea[required]' ) || fld.querySelector( 'select[required]') || ( !fld.classList.contains('checkbox-form') ? null : fld.classList.contains('required') ? fld : null ),
			error;

		if( !input ) return true;
       
		switch( input.tagName.toLowerCase() ) {
			case 'input' : 
				if( input.type === 'radio' || input.type === 'checkbox' ) {
					var checked = 0;
					[].slice.call( fld.querySelectorAll( 'input[type="' + input.type + '"]' ) ).forEach( function( inp ) {
						if( inp.checked ) {
							++checked;
						}
					} );
					if( !checked ) {
						error = 'NOVAL';
					}
				}
            	if( input.type === 'email') {
                  if(!validateEmail(input.value)) {
                   error = 'INVALIDEMAIL';
                  }
				}
				else if( input.value === '' ) {
					error = 'NOVAL';
				}
				break;

			case 'select' : 
				// assuming here '' or '-1' only
				if( input.value === '' || input.value === '-1' ) {
					error = 'NOVAL';
				}
				break;

			case 'textarea' :
				if( input.value === '' ) {
					error = 'NOVAL';
				}
				break;
            case 'li' :
                console.log('test');
                var checked = 0;
					[].slice.call( fld.querySelectorAll( 'input[type="checkbox"]' ) ).forEach( function( inp ) {
						if( inp.checked ) {
							++checked;
						}
					} );
					if( !checked ) {
						error = 'NOVAL';
					}
		}

		if( error != undefined ) {
			this._showError( error );
			return false;
		}

		return true;
	}

	// TODO
	FForm.prototype._showError = function( err ) {
		var message = '';
		switch( err ) {
			case 'NOVAL' : 
				message = 'Please fill the field before continuing';
				break;
			case 'INVALIDEMAIL' : 
				message = 'Please fill a valid email address';
				break;
			// ...
		};
		this.msgError.innerHTML = message;
		this._showCtrl( this.msgError );
	}

	// clears/hides the current error message
	FForm.prototype._clearError = function() {
		this._hideCtrl( this.msgError );
	}
    
    // Conditional logic
    FForm.prototype._conditional = async function (e) {
     var formFields = e.target.querySelectorAll('.fs-fields [data-conditional]');
     [].forEach.call(formFields, function(formField) {
       var conArray = JSON.parse(formField.dataset.conditional);
       if('block-' + conArray[0] == e.detail) {
         var triggerField = document.querySelector('#'+ e.detail);
         var input = triggerField.querySelector( 'input[type="radio"]' ) ||  triggerField.querySelector( 'select' ) ||  triggerField.querySelector( 'input' ); 
         var triggerInput = [];
         switch(input.type) {
			case 'select' : 
           var triggerInput = input;  
         break;
         case 'radio' : 
            [].slice.call( triggerField.querySelectorAll( 'input[type="radio"]' ) ).forEach( function( inp ) {
              console.log(inp);
              if(inp.checked) {
               triggerInput.push(inp); 
               triggerInput = triggerInput[0]; 
              }
            }); 
         	break;
           default: 
              var triggerInput = input;  
	     }
         

         switch (conArray[1]) {
           case 'is': 
             if(triggerInput.value == conArray[2]) {  
               formField.classList.remove('skip');
             }else{
              formField.classList.add('skip');
             }
             break;
             if(triggerInput.value !== conArray[2]) {
               formField.classList.remove('skip');
             }else{
              formField.classList.add('skip');
             }
             break;
           case 'contains': 
             if(triggerInput.value.indexOf(conArray[2])) {
               formField.classList.remove('skip');
             }else{
              formField.classList.add('skip');
             }
             break;
           case 'less than': 
             if( parseInt(triggerInput.value.replace(/\D/g,''), 10) < parseInt(conArray[2].replace(/\D/g,''))) {  
               formField.classList.remove('skip');
             }else{
              formField.classList.add('skip');
             }
             break;
            case 'greater than':  
             if( parseInt(triggerInput.value.replace(/\D/g,''), 10) > parseInt(conArray[2].replace(/\D/g,''))) {  
               formField.classList.remove('skip');
             }else{
              formField.classList.add('skip');
             }
               break;
             default:

         }
       }
     });
    }
    
    // Submit event
    FForm.prototype._onSubmit = async function (e) {
      	e.preventDefault();
      
        var data = {}
		var endpoints = {}
        var formDataset = this.formEl.dataset;

		if (Object.keys(formDataset).length === 0) {}else{
			for (const key in formDataset) {
				if (formDataset.hasOwnProperty(key)) {
				   endpoints[key] = formDataset[key];
				}
			  }
		}
      
        this.fields.forEach(el => {
        	var elClass = el.className;
          	var className = el.className;
            var fieldName = el.getAttribute('data-field-id');
          	var inputName = 'input'
            if (className.includes('dropdown-form')){
              	inputName = 'select';
            }
          
          	if (className.includes('radio-form')){
              	inputName = 'input[type="radio"]:checked';
            }
                   	
          	if (className.includes('textarea-form')){
              	inputName = 'textarea';
            }
          	
            try	{
              if (className.includes('checkbox-form')){
               	inputName = 'input[type="checkbox"]:checked';
                var values = [];
                var allchecked = el.querySelectorAll(inputName), i;  
                for (i = 0; i < allchecked.length; ++i) {
                  values.push(allchecked[i].value);
                }
                data[fieldName] = values;
              }else{
              data[fieldName] = el.querySelector(inputName).value;
              }
            }catch{}
        });
      	
        this.submitBtn.innerText = 'Working ...';
        this.submitBtn.disabled = true;   

       // await this._onGoHighLevelAdd(data);
              
       // await this._onCloseIOAdd(data);
        if('klaviyo' in endpoints)  {
          await this._onKlaviyoAdd(data, endpoints['klaviyo']);
		}

	//	await this._onCCAdd(data); 

         
        this.done();
      
      	return false;
    }
                            
 
      	FForm.prototype._onKlaviyoAdd = async function (data, endpoint) {
	
			
          var formData = {
            email: data['email']
          };

		  if(data['phone']) {
		  formData['phone_number'] = '+1' + data['phone'].replace(/\D/g, '');
		  formData['sms_consent'] = true;
		  }
          
          //add name or split
		  if(data['name']) {
          var clientName = data['name'].split(" ");
		  if  (clientName.toString().indexOf(' ') >= 0) {
            formData['$first_name'] = data['name'];
          }else{
           formData['$first_name'] = clientName[0];
           formData['$last_name'] = clientName[1];
          }
		}
         
          var customFields = [];
          Object.keys(data).forEach(key => {
          	if(key.includes('email') || key.includes('name') || key.includes('phone')) return;
            if(Array.isArray(data[key])) {
            formData[key] = data[key].toString();  
            }else{
            formData[key] = data[key];
            }
            customFields.push(key);
          });
    
          
          console.log('new success');
		
	const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        profiles: [
          formData
        ]
      })
    };	
		
          
         fetch(endpoint, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err.message));
     
}


    // This function is ran when the form is submitted  
    FForm.prototype.done = function () {
     // hide form, show confirm
      this.el.nextElementSibling.classList.add("showanim");
     var namearray = [];
     this.fields.forEach( function( fld ) {
       if(fld.dataset.fieldId == 'name') {
        namearray.push(fld.querySelector('input').value);
       }
       if(fld.dataset.fieldId == 'email') {
        namearray.push(fld.querySelector('input').value);
       }
       if(fld.dataset.fieldId == 'phone') {
        namearray.push(fld.querySelector('input').value);
       }
     });
    }

	// add to global namespace
	window.FForm = FForm;

})( window );


(function() {
var formWrap = document.getElementById( 'fs-form-wrap' );
new FForm( formWrap, {
	onReview : function() {
			document.body.classList.add('overview' ); // for demo purposes only
	}
}, false );
})();
