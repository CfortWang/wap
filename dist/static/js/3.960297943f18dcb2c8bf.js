webpackJsonp([3],{"+E39":function(e,t,n){e.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(e,t,n){var o=n("lOnJ");e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},"77Pl":function(e,t,n){var o=n("EqjI");e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},"7KvD":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"9bBU":function(e,t,n){n("mClu");var o=n("FeBl").Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},EqjI:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},FeBl:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},MmMw:function(e,t,n){var o=n("EqjI");e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},ON07:function(e,t,n){var o=n("EqjI"),r=n("7KvD").document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},"Qy/0":function(e,t){e.exports={en:{skip:"Skip",wait:"Wait"},ko:{skip:"Skip",wait:"Wait"},zh:{skip:"Skip",wait:"淡定一会..."},ja:{skip:"Skip",wait:"Wait"}}},S82l:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},SfB7:function(e,t,n){e.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},WXan:function(e,t){},X8DO:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n("C4MV"),i=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},evD5:function(e,t,n){var o=n("77Pl"),r=n("SfB7"),i=n("MmMw"),a=Object.defineProperty;t.f=n("+E39")?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},hJx8:function(e,t,n){var o=n("evD5"),r=n("X8DO");e.exports=n("+E39")?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},hsRq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("bOdI"),r=n.n(o),i=n("K/Lq"),a=n.n(i),s=n("Qy/0"),u={name:"ad",i18n:new VueI18n({locale:"zh",messages:s}),data:function(){var e;return e={countdownText:2,endCountDown:!1,adURL:"",bannerUrl:"",bottomAdUrl:"",market:"",shopEvent:"",shopAD:"",landingUrl:"",qrCode:"",lang:"",showHeader:!1,shopAdlanding:""},r()(e,"showHeader",!1),r()(e,"shopCoupon",[]),r()(e,"timeLeft",""),r()(e,"roundNow",""),e},created:function(){var e=this,t=this.$route.params;this.qrCode=t.qrCode,this.adURL=t.skipAD,this.bannerUrl=t.banner,this.bottomAdUrl=t.bottomAd,this.landingUrl=t.landingUrl,this.lang=t.lang,this.showHeader=t.showHeader,this.device=t.device,this.timeLeft=t.timeLeft,this.roundNow=t.roundNow,this.shopAdLanding=t.shopAdLanding,console.log(this.timeLeft+this.roundNow),this.lang?this.$i18n.locale=this.lang:a.a.get("qr_language")?this.$i18n.locale=a.a.get("qr_language"):(this.$i18n.locale="zh","Asia/Seoul"===Intl.DateTimeFormat().resolvedOptions().timeZone?this.$i18n.locale="ko":"Asia/Shanghai"===Intl.DateTimeFormat().resolvedOptions().timeZone?this.$i18n.locale="zh":this.$i18n.locale="en"),null!=this.qrCode||""!=this.qrCode?axios({method:"POST",url:"http://dev-new-api.beanpop.cn/lottery/event",params:{code:t.qrCode}}).then(function(t){var n=t.data;console.log(n);var o=n.shop.ad,r=n.marketing_event_result,i=n.shop.event_result;(e.shopCoupon=n.shop.event_result,0!==o.length)&&((new Image).src=n.shop.ad[0].shop_ad_image_file_url,e.shopAD=o[0].shop_ad_image_file_url);0!==i.length&&null!==i[0]&&("win"===i[0].result&&((new Image).src=n.shop.event_result[0].gift.shop_gift_image_file.url,e.shopEvent=i[0].gift.shop_gift_image_file.url));0!==r.length&&((new Image).src=n.marketing_event_result[0].img,e.market=r[0].img)}).catch(function(e){console.log(e)}):(console.log("no code"),this.market=t.marketEvent,this.shopAD=t.shopAD,this.shopAdlanding=t.shopAdlanding);var n=1,o=setInterval(function(){if(e.countdownText=n,-1===(n-=1)){e.endCountDown=!0,clearInterval(o);var t=e.$route.params;e.$router.push({name:"Complete",params:{yellowBall:t.yellowBall,greenBall:t.greenBall,type:t.type,qrCode:e.qrCode,banner:e.bannerUrl,bottomAd:e.bottomAdUrl,market:e.market,shopEvent:e.shopEvent,shopAD:e.shopAD,tmpUser:e.tmpUser,landingUrl:e.landingUrl,shopCoupon:e.shopCoupon,device:e.device,lang:e.lang,timeLeft:e.timeLeft,roundNow:e.roundNow}})}},1e3)},methods:{skipAD:function(){var e=this.$route.params;this.$router.push({name:"Complete",params:{yellowBall:e.yellowBall,greenBall:e.greenBall,type:e.type,qrCode:e.qrCode,timeLeft:this.timeLeft,roundNow:this.roundNow}})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ad-page-wrapper"},[e.endCountDown?n("div",{staticClass:"skip-btn-wrapper",on:{click:e.skipAD}},[n("div",{staticClass:"skip-btn fs-12"},[e._v("\n      "+e._s(e.$t("skip"))+"\n    ")])]):n("div",{staticClass:"count-down-wrapper"},[n("div",{staticClass:"count-down-circle fs-15"},[e._v("\n      "+e._s(e.$t("wait"))+e._s(e.countdownText)+"\n    ")])]),e._v(" "),n("img",{attrs:{src:e.adURL}})])},staticRenderFns:[]};var c=n("VU/8")(u,l,!1,function(e){n("WXan")},"data-v-7b3ddd30",null);t.default=c.exports},kM2E:function(e,t,n){var o=n("7KvD"),r=n("FeBl"),i=n("+ZMJ"),a=n("hJx8"),s=function(e,t,n){var u,l,c,p=e&s.F,f=e&s.G,d=e&s.S,h=e&s.P,v=e&s.B,m=e&s.W,g=f?r:r[t]||(r[t]={}),w=g.prototype,_=f?o:d?o[t]:(o[t]||{}).prototype;for(u in f&&(n=t),n)(l=!p&&_&&void 0!==_[u])&&u in g||(c=l?_[u]:n[u],g[u]=f&&"function"!=typeof _[u]?n[u]:v&&l?i(c,o):m&&_[u]==c?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((g.virtual||(g.virtual={}))[u]=c,e&s.R&&w&&!w[u]&&a(w,u,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},lOnJ:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},mClu:function(e,t,n){var o=n("kM2E");o(o.S+o.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})}});