!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.error=e.magnifier=e.loading=e.apiAddressNukat=e.apiAddress=e.availableLangs=e.defaultLang=e.searchProviders=e.dictionary=e.defaultQuery=void 0;e.defaultQuery="title";e.dictionary={pl:{seeMore:"Więcej wyników",error:"Wystąpił błąd",reload:"Załaduj ponownie",noResults:"Nie znaleziono wyników",poweredBy:"Dostarczone przez",titleLabel:"Tytuł",authorLabel:"Autor",dateLabel:"Data"},en:{seeMore:"See more results",error:"Error",reload:"Reload",noResults:"Results not found",poweredBy:"Powered by",titleLabel:"Title",authorLabel:"Author",dateLabel:"Date"}};e.searchProviders=[{name:"FBC",label:{pl:"Federacja Bibliotek Cyfrowych",en:"FBC"}}];e.defaultLang="pl";e.availableLangs=["pl","en"];e.apiAddress="http://fbc.pionier.net.pl";var r="".concat("http://fbc.pionier.net.pl","/pro/nukat-plugin");e.apiAddressNukat=r;var o="".concat(r,"/25cfd9d8fb2fd564b7b895b002a8efee.gif");e.loading=o;var i="".concat(r,"/8c26a5fa4c4d5c403be9dc2055deaebe.svg");e.magnifier=i;var a="".concat(r,"/92c2349cce04f147afcf108c8dd8437a.svg");e.error=a},function(t,e,n){"use strict";n(2);var r=function(t){return t&&t.__esModule?t:{default:t}}(n(3)),o=n(4),i=n(0);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return d(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function d(t,e,n){return(d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(){var t=document.createElement("template");t.innerHTML=r.default;var e=function(e){function n(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=s(this,f(n).call(this))).attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0)),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,l(HTMLElement)),function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(n,[{key:"connectedCallback",value:function(){if(this.$titleQuery=document.getElementById(i.defaultQuery)?document.getElementById(i.defaultQuery).innerHTML:void 0,this.$container=this.shadowRoot.querySelector(".chcontext__container"),this.$lang=i.availableLangs.includes(this.getAttribute("lang"))?this.getAttribute("lang"):i.defaultLang,this.$theme=this.getAttribute("theme"),this.updateTheme(),this.$titleQuery){this.$query=this.$titleQuery.includes("/")?this.$titleQuery.split("/")[0]:this.$titleQuery.includes(";")?this.$titleQuery.split(";")[0]:this.$titleQuery,this.$page=this.getAttribute("page");this.$page&&function(t){return i.searchProviders.filter(function(e){return e.name===t}).length>0}(this.$page)?this.createService():this.showError()}else this.showError()}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"theme":this.$theme=n,this.updateTheme(n);break;case"query":this.$query=n,(0,o.updateData)(this);break;case"page":this.$page=n,createService()}}},{key:"createService",value:function(){switch(this.$page){case"FBC":(0,o.createServiceFBC)(this)}}},{key:"updateTheme",value:function(){var t="violet";["violet"].indexOf(this.$theme)>-1&&(t=this.$theme),this.$container.className="chcontext__container "+t}},{key:"showError",value:function(){console.log("config error");var t='<div class="chcontext__error">';t+='<img class="chcontext__error__img" src="'.concat(i.error,'" />'),t+='<p class="chcontext__error__text">'.concat(i.dictionary[this.$lang].error,"</p>"),t+="</div>",this.$container.innerHTML=t}}]),n}();customElements.define("chcontext-widget",e)}()},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};d.prototype.append=function(t,e){t=c(t),e=s(e);var n=this.map[t];this.map[t]=n?n+","+e:e},d.prototype.delete=function(t){delete this.map[c(t)]},d.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},d.prototype.set=function(t,e){this.map[c(t)]=s(e)},d.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},d.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),l(t)},d.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),l(t)},d.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),l(t)},e.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},p.call(y.prototype),p.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var a=[301,302,303,307,308];m.redirect=function(t,e){if(-1===a.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=d,t.Request=y,t.Response=m,t.fetch=function(t,n){return new Promise(function(r,o){var i=new y(t,n),a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:function(t){var e=new d;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;r(new m(e,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function d(t){this.map={},t instanceof d?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function h(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function _(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=_(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=_(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=f(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t,e){var n=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=function(t){var e=t.toUpperCase();return i.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="<style>\n    @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);\n\n    .chcontext__container {\n      background-color: #FFF;\n      border-radius: 4px;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, .075);\n      border: 1px solid #ddd;\n      margin-bottom: 10px;\n      position: relative;\n      min-height: 100px;\n      font-family: 'Roboto Condensed', sans-serif;\n      transition: border .2s ease-in-out;\n      font-family: tahoma, arial, helvetica, sans-serif;\n      font-size: 14px;\n      width: 100%;\n      padding: 14px;\n      text-align: center;\n      box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      -webkit-box-sizing: border-box\n    }\n\n    .chcontext__data-list {\n      list-style: none;\n      padding: 0;\n      text-align: left;\n      width: 100%;\n    }\n\n    .chcontext__data-list__item {\n      border: solid 1px #dadada;\n      margin: 5px 0;\n      display: block;\n      padding: 10px;\n      border-radius: 4px;\n    }\n\n    .chcontext__data-list__item:hover {\n      background-color: #dadada;\n    }\n\n    .chcontext__data-list__item:hover .chcontext__data-list__link {\n      color: #fff;\n    }\n\n    .chcontext__data-list__item--left {\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .chcontext__data-list__item--right {\n      flex: 1;\n      padding-right: 10px;\n    }\n\n    .chcontext__data-list__item__img {\n      width: 70px;\n      margin-right: 10px;\n    }\n\n    .chcontext__data-list__item__text {\n      margin-bottom: 1px;\n    }\n\n    .chcontext__data-list__item__text.title {\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 3px;\n    }\n\n    .chcontext__data-list__item__text.author span {\n      font-style: italic;\n    }\n\n    .chcontext__data-list__item__text.date {\n      color: #444444;\n      font-size: 13px;\n    }\n\n    .chcontext__data-list__link {\n      display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n      display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n      display: -ms-flexbox;      /* TWEENER - IE 10 */\n      display: -webkit-flex;     /* NEW - Chrome */\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n    }\n\n    .chcontext__loading {\n      padding: 10px 0;\n    }\n\n    .chcontext__loading__img {\n      height: 30px;\n    }\n\n    .chcontext__data-list__link:hover {\n    }\n\n    .chcontext__total__link {\n      color: #fff !important;\n    }\n\n    .chcontext__no-results {\n      margin: 40px 0 10px;\n    }\n\n    .chcontext__error {\n      margin: 10px;\n    }\n\n    .chcontext__no-results__img,\n    .chcontext__error__img {\n      height: 50px;\n    }\n\n    .chcontext__logo a {\n      text-decoration: none;\n    }\n\n    .chcontext__reload {\n      cursor: pointer;\n    }\n\n    /* THEME CODE */\n    .chcontext__container.violet {\n      border-color: #6f4897;\n    }\n\n    .chcontext__container.violet .chcontext__error__text,\n    .chcontext__container.violet .chcontext__no-results__text {\n      color: #6f4897;\n      font-size: 14px;\n    }\n\n    .chcontext__container.violet .chcontext__logo-name {\n      color: #6f4897;\n      font-weight: normal;\n      margin: 9px 0;\n    }\n\n    .chcontext__container.violet .chcontext__logo__img {\n      height: 50px;\n    }\n\n    .chcontext__container.violet .chcontext__total__link,\n    .chcontext__container.violet .chcontext__reload {\n      background-image: -webkit-linear-gradient(top, #6f4897 0%, #563d7c 100%);\n      background-image: -o-linear-gradient(top, #6f4897 0%, #563d7c 100%);\n      background-image: -webkit-gradient(linear, left top, left bottom, from(#6f4897), to(#563d7c ));\n      background-image: linear-gradient(to bottom, #6f4897 0%, #563d7c 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\n      filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n      background-repeat: repeat-x;\n      border-color: #563d7c;\n      color: #ffffff;\n      padding: 9px 12px;\n      font-size: 14px;\n      border-radius: 4px;\n      text-decoration: none;\n      display: inline-block;\n    }\n\n    .chcontext__container.violet .chcontext__total__link:hover,\n    .chcontext__container.violet .chcontext__reload:hover {\n      background: #563d7c;\n      border-color: #563d7c;\n    }\n\n    .chcontext__container.violet .chcontext__data-list__link {\n      color: #6f4897;\n    }\n\n    .chcontext__container.violet .chcontext__data-list__item {\n      border-color: #6f4897;\n    }\n\n    .chcontext__container.violet .chcontext__data-list__item:hover {\n      background-color: #6f4897;\n    }\n\n    .chcontext__container.violet .chcontext__data-list__item:hover .chcontext__data-list__link,\n    .chcontext__container.violet .chcontext__data-list__item:hover .chcontext__data-list__item__text.date {\n      color: #fff !important;\n    }\n\n  </style>\n\n  <div class=\"chcontext__container\">\n  </div>"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createServiceFBC=e.updateData=void 0;var r=n(0),o=r.apiAddress+"/index/select?q=",i=r.apiAddress+"/search/query?q=",a=r.apiAddress+"/search#q=id:",c=r.apiAddress+"/thumbnails/",s=function(t){l(t),fetch("".concat(o).concat(encodeURIComponent(t.$query),"&rows=").concat(3,"&fl=dc_title%2Cdcterms_alternative%2Cdc_creator%2Cdc_contributor%2Cid%2Cdc_date&wt=json")).then(function(t){return t.ok?Promise.resolve(t):Promise.reject(new Error("Failed to load"))}).then(function(t){return t.json()}).then(function(e){u(t),f(t,e.response)}).catch(function(e){u(t),d(t),console.log("Error: ".concat(e.message))})};e.updateData=s;var l=function(t){var e='<div class="chcontext__loading" />';e+='<img class="chcontext__loading__img" src='.concat(r.loading," />"),e+="</div>",t.$container.querySelector(".chcontext__results__container").innerHTML=e},d=function(t){var e='<div class="chcontext__error">';e+='<img class="chcontext__error__img" src="'.concat(r.error,'" />'),e+='<p class="chcontext__error__text">'.concat(r.dictionary[t.$lang].error,"</p>"),e+='<button class="chcontext__reload" type="button">'.concat(r.dictionary[t.$lang].reload,"</button>"),e+="</div>",t.$container.querySelector(".chcontext__results__container").innerHTML=e,t.$container.querySelector(".chcontext__reload").addEventListener("click",function(){s(t)})},u=function(t){t.$container.querySelector(".chcontext__results__container").innerHTML=""},f=function(t,e){t.$numFound=e.numFound,e.docs.length&&(t.$listData=e.docs.map(function(t){var e=t.dc_title;void 0!==e&&e instanceof Array&&(e=e[0]);var n=t.dc_creator;void 0!==n&&n instanceof Array&&(n=n[0]);var r=t.dc_date;return void 0!==r&&r instanceof Array&&(r=r[0]),{link:a+t.id,imgLink:c+t.id,title:e,author:n,date:r}})),h(t)},h=function(t){if(t.$listData&&t.$listData.length){var e='<ul class="chcontext__data-list">';t.$listData.forEach(function(t,n){e+='<li class="chcontext__data-list__item">',t.link&&(e+='<a target="_blank" class="chcontext__data-list__link" href='.concat(t.link,">")),t.imgLink&&(e+='<div class="chcontext__data-list__item--left">',e+='<img class="chcontext__data-list__item__img" src='.concat(t.imgLink," onerror=\"this.style='display: none;'\" />"),e+="</div>"),e+='<div class="chcontext__data-list__item--right">',t.title&&(e+='<div class="chcontext__data-list__item__text title">'.concat(t.title,"</div>")),t.author&&(e+='<div class="chcontext__data-list__item__text author"><span>'.concat(t.author,"</span></div>")),t.date&&(e+='<div class="chcontext__data-list__item__text date"><span>'.concat(t.date,"</span></div>")),e+="</div>",t.link&&(e+="</a>"),e+="</li>"}),e+="</ul>",t.$container.querySelector(".chcontext__results__container").insertAdjacentHTML("beforeend",e),_(t)}},_=function(t){var e="<div>";e+='<a target="_blank" href="'.concat(i).concat(t.$query,'" class="chcontext__total__link">'),e+="".concat(r.dictionary[t.$lang].seeMore),e+="<span> (".concat(t.$numFound,")</span>"),e+="</a>",e+="</div>",t.$container.querySelector(".chcontext__results__container").insertAdjacentHTML("beforeend",e)};e.createServiceFBC=function(t){!function(t){var e=r.searchProviders.filter(function(e){return e.name===t.$page})[0].label[t.$lang];t.$container.insertAdjacentHTML("afterbegin",'<div class="chcontext__logo">\n          <a href='.concat(r.apiAddress,' target="_blank">\n            <img class="chcontext__logo__img" src="').concat(r.apiAddress,'/images/base/logo.svg?_debugResources=y&n=1446630144466" />\n            <h4 class="chcontext__logo-name">').concat(e,"</h4>\n          </a>\n      </div>")),t.$container.insertAdjacentHTML("beforeend",'<div class="chcontext__results__container">\n      </div>'),t.$container.querySelector(".chcontext__logo__img").addEventListener("error",function(){this.style="display: none"})}(t),s(t)}}]);
//# sourceMappingURL=main.bundle.js.map