webpackJsonp([13],{U1gF:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4kSj"),i=e.n(a),r={name:"paySuccess",components:{},data:function(){return{payID:"",needNum:"",timeLeft:"",payStatus:"",groupFinish:!1,countDown:0,ownerAvatar:""}},created:function(){var t=this,s=this.$options.methods.getArgs();this.payID=s.groupon_record_id,axios({method:"GET",url:"http://dev-new-api.beanpop.cn/event/success?groupon_record_id="+this.payID,withCredentials:!0,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:""}}).then(function(s){var e=s.data.data,a=s.data.code;t.needNum=e.needNum,t.timeLeft=e.timeLeft,t.timer(t.timeLeft),200==a?(t.payStatus=!0,t.groupFinish=!1):100==a?t.groupFinish=!0:101==a&&(t.payStatus=!1,t.groupFinish=!1);for(var r=e.user,n=0;n<r.length;n++){1==r[n].isOwner&&(t.ownerAvatar=r[n].image,null!=t.ownerAvatar&&""!=t.ownerAvatar||(t.ownerAvatar="/static/img/share/pindou-wait.png"))}var c=t.needNum+r.length,o='<div class="pindou-partner"><div class="avatar"><img/></div></div>';setTimeout(function(){for(var t=1;t<r.length;t++){i()(".user-joined").append(o);var s=r[t].image;null!=s&&""!=s||(s="/static/img/share/pindou-wait.png"),i()(".user-joined .avatar:eq("+t+") img").attr("src",s)}for(var e=r.length;e<c;e++){i()(".user-joined").append(o);i()(".user-joined .avatar:eq("+e+") img").attr("src","/static/img/share/pindou-wait.png")}},100),console.log(e)}).catch(function(t){console.log(t)}),setInterval(function(){t.timer(t.timeLeft),t.timeLeft--},1e3)},methods:{getArgs:function(){var t=location.search,s={};if(-1!=t.indexOf("?"))for(var e=t.substr(1).split("&"),a=0;a<e.length;a++)s[e[a].split("=")[0]]=unescape(e[a].split("=")[1]);return s},timer:function(t){var s=parseInt(t%60)<10?"0"+parseInt(t%60):parseInt(t%60),e=parseInt(t/60%60)<10?"0"+parseInt(t/60%60):parseInt(t/60%60),a=parseInt(t/3600%24)<10?"0"+parseInt(t/3600%24):parseInt(t/3600%24),r=(Math.floor(t/86400)>=1?Math.floor(t/86400):"")+"天"+a+"时"+e+"分"+s+"秒";i()(".time").text(r)}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t.payStatus&&!t.groupFinish?e("div",[e("div",{staticClass:"congratulate"},[t._v("恭喜您！支付定金成功")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.payStatus||t.groupFinish?t._e():e("div",[e("div",{staticClass:"congratulate"},[t._v("支付失败")]),t._v(" "),t._m(2)]),t._v(" "),t.groupFinish?e("div",[e("div",{staticClass:"congratulate"},[t._v("很抱歉，拼团已结束")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),e("div",{staticClass:"fixed-right-btn"},[t._v("打开App")]),t._v(" "),e("div",{staticClass:"pin-success-box"},[e("div",{staticClass:"user-joined"},[e("div",{staticClass:"pindou-partner"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.ownerAvatar}})]),t._v(" "),t._m(4)])]),t._v(" "),t.groupFinish?t._e():e("div",{staticClass:"join-pindou-desc"},[e("span",{staticClass:"grey"},[t._v("还剩")]),t._v(" "),e("span",{staticClass:"orange"},[t._v(t._s(t.needNum)+"个")]),t._v(" "),e("span",{staticClass:"grey"},[t._v("名额即可获得优惠 ")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"orange time"}),t._v(" "),e("span",{staticClass:"grey"},[t._v("后结束")])]),t._v(" "),e("div",{staticClass:"share-soon"},[t._v("赶紧邀请好友来拼豆豆吧！")])]),t._v(" "),t.groupFinish?e("div",{staticClass:"pay-error-desc"},[e("div",{staticClass:"grey"},[t._v("有人抢先一步付款成功")]),t._v(" "),e("div",[t._v("你可以开一个新团，或者看看别的团哦~")])]):t._e(),t._v(" "),t.groupFinish?t._e():e("div",{staticClass:"use-coupon-btn"},[t._v("下载APP，拼豆成功后立享优惠")]),t._v(" "),t.groupFinish?e("div",{staticClass:"pay-error-text"},[t._v("已支持的费用将退还至您的支付账户")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"pay-header-title"},[this._v("参与拼豆豆")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"success-icon"},[s("img",{attrs:{src:"/static/img/share/icon_pay_successed_90x90.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"success-icon"},[s("img",{attrs:{src:"/static/img/share/icon_pay_successed_90x90.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"success-icon"},[s("img",{attrs:{src:"/static/img/share/pay-error.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"owner"},[s("img",{attrs:{src:"/static/img/share/pindou-owner.png"}}),this._v(" "),s("div",{staticClass:"owner-text"},[this._v("拼主")])])}]};var c=e("VU/8")(r,n,!1,function(t){e("cz7g")},"data-v-355ea77f",null);s.default=c.exports},cz7g:function(t,s){}});