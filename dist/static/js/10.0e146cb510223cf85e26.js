webpackJsonp([10],{"8YIz":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("4kSj"),e=a.n(s),n=a("8wSn"),o={name:"spellBean",i18n:new VueI18n({locale:"spellBean",phone:"",messages:n}),components:{},data:function(){return{rulesOpen:!1,phoneKind:"",groupStatus:"",groupCreateAt:"",groupExpriedAt:"",groupSuccessAt:"",groupStatusDesc:"",groupName:"",shopImage:"",groupSize:"",pinzhu:"",ownerAvatar:"",pinSuccess:!0,pinFailed:!0,pinIng:!0,needNum:"",shopName:"",groupOnPrice:"",oldPrice:"",discountPrice:"",newPrice:"",startUseTime:"",endUseTime:"",minDistance:"",shopCount:"",shopID:"",groupID:"",payAmount:"",payID:"",payPackageName:"",payShopName:"",payRule:"",clearTimer:""}},created:function(){var t=this,i=this.$route.query.groupid;console.log(i),/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?this.phoneKind="ios":/(Android)/i.test(navigator.userAgent)&&(this.phoneKind="android");var a=this;e()("body").css({"background-color":"#F4F4F4","font-family":"PingFangSC-Regular","font-size":"16px"}),axios({method:"GET",url:"http://dev-new-api.beanpop.cn/myGroupOn/"+i,withCredentials:!0,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:"","Content-Type":"application/x-www-form-urlencoded"}}).then(function(i){var s=i.data.data;t.groupName=s.groupName,t.groupCreateAt=s.createdAt,t.groupSuccessAt=s.paidAt,t.groupExpriedAt=s.expriedAt,t.shopName=s.shopName,t.shopImage=s.image,t.groupOnPrice=s.grouponPrice,t.oldPrice=s.price,t.discountPrice=s.discountedPrice,t.newPrice=parseFloat(t.discountPrice-t.groupOnPrice),t.startUseTime=s.startUseTime,t.endUseTime=s.endUseTime,t.groupStatus=s.groupStatus,t.shopID=s.buyerID,t.groupID=s.groupOnId,t.needNum=s.needNum,2==t.groupStatus?(t.groupStatusDesc="拼团成功",t.pinSuccess=!0):1==t.groupStatus?(t.groupStatusDesc="拼豆中...",t.pinSuccess=!1,t.pinIng=!0):(t.groupStatusDesc="拼团失败",t.pinSuccess=!1,t.pinIng=!1);var n=s.timeLeft;e()(".finish-count-down").text(a.timer(n)),function(t){a.clearTimer=setInterval(function(){t--,e()(".finish-count-down").text(a.timer(t))},1e3)}(n),t.groupSize=s.groupSize;for(var o=s.tips,c=0;c<o.length;c++){var p=o[c].title,r=o[c].value;e()(".must-know-contain").append('<div class="must-know-title"></div><div class="must-know-text"></div>'),e()(".must-know-contain .must-know-title:eq("+c+")").text(p),e()(".must-know-contain .must-know-text:eq("+c+")").text(r)}for(var l=s.user,d=0;d<l.length;d++){1==l[d].isOwner&&(t.ownerAvatar=l[d].image,t.pinzhu=l[d].nickname,null!=t.ownerAvatar&&""!=t.ownerAvatar||(t.ownerAvatar="/static/img/share/pindou-wait.png"))}var u=s.nowSize,v='<div class="pindou-partner"><div class="avatar"><img/></div></div>';setTimeout(function(){for(var i=1;i<u;i++){e()(".user-joined").append(v);var a=l[i].image;null==a&&(a="/static/img/share/pindou-wait.png"),e()(".user-joined .avatar:eq("+i+") img").attr("src",a)}for(var s=u;s<t.groupSize;s++){e()(".user-joined").append(v);e()(".user-joined .avatar:eq("+s+") img").attr("src","/static/img/share/pindou-wait.png")}},100);var m=s.shop;t.minDistance=9999999,t.shopCount=m.length,0==t.shopCount&&e()(".min-distance span").text("附近无门店");for(var h=0;h<m.length;h++){e()(".applicative-contain").append('<div class="applicative-shop justified"><div class="applicative-shop-desc"><div class="applicative-shop-name-box justified"><div class="applicative-shop-name"></div><div class="applicative-shop-distance"></div></div><div class="applicative-shop-location"></div></div><div class="applicative-shop-icon"><img src="/static/img/share/position.png"/></div></div>');var g=m[h].name,_=m[h].location,w=m[h].distance;t.minDistance=w<t.minDistance?w:t.minDistance,w>=1e3?w=parseFloat(w/1e3)+"km":w+="m",e()(".applicative-contain .applicative-shop-name:eq("+h+")").text(g),e()(".applicative-contain .applicative-shop-distance:eq("+h+")").text(w),e()(".applicative-contain .applicative-shop-location:eq("+h+")").text(_)}console.log(s)}).catch(function(t){console.log(t)})},methods:{showMustKnow:function(){"none"==e()(".must-know-contain").css("display")?(e()(".must-know-contain").show(),e()(".must-know-icon img").attr("src","/static/img/share/open_hollow.png")):(e()(".must-know-contain").hide(),e()(".must-know-icon img").attr("src","/static/img/share/close_hollow.png"))},showApplicative:function(){this.shopCount>0&&("none"==e()(".applicative-contain").css("display")?(e()(".applicative-contain").show(),e()(".shop-count").show(),e()(".min-distance").hide(),e()(".applicative-icon img").attr("src","/static/img/share/open_hollow.png")):(e()(".applicative-contain").hide(),e()(".shop-count").hide(),e()(".min-distance").show(),e()(".applicative-icon img").attr("src","/static/img/share/close_hollow.png")))},rulesClick:function(){this.rulesOpen=!0},backKey:function(){this.rulesOpen=!1},goShopDetail:function(t){clearInterval(t),this.$router.push({name:"ShopDetails",params:{shopID:this.shopID}})},goPindouDetail:function(t){clearInterval(t),this.$router.push({name:"PindouDetails",params:{groupID:this.groupID}})},timer:function(t){var i=parseInt(t%60)<10?"0"+parseInt(t%60):parseInt(t%60),a=parseInt(t/60%60)<10?"0"+parseInt(t/60%60):parseInt(t/60%60),s=parseInt(t/3600%24)<10?"0"+parseInt(t/3600%24):parseInt(t/3600%24);return(Math.floor(t/86400)>=1?Math.floor(t/86400)+":":"")+s+":"+a+":"+i},goPindou:function(t){var i=this;clearInterval(t),axios({method:"POST",url:"http://dev-new-api.beanpop.cn/event/groupOn",params:{groupon_id:this.groupID},withCredentials:!0,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:"","Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){var a=t.data.data,s=t.data.code;i.payID=a.id,i.payAmount=a.amount,i.payPackageName=a.priductName,i.payShopName=a.shopName,i.payRule=a.rule,console.log(a),410==s?i.$router.push({name:"Login"}):200==s&&i.$router.push({name:"PayDeposit",params:{payID:i.payID,payAmount:i.payAmount,payPackageName:i.payPackageName,payShopName:i.payShopName,payRule:i.payRule}})}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content"},[t.rulesOpen?a("div",{staticClass:"terms-div-wrapper"},[a("div",{staticClass:"terms-div-header"},[a("div",{staticClass:"header-title-wrapper"},[t._v("\n\t\t\t"+t._s(t.$t("pddrule"))+"\n\t\t")]),t._v(" "),a("div",{staticClass:"header-back-wrapper",on:{click:t.backKey}},[t._m(0)])]),t._v(" "),t._m(1)]):t._e(),t._v(" "),a("div",{staticClass:"fixed-right-btn",on:{click:function(i){t.openApp(t.phoneKind)}}},[t._v("打开App")]),t._v(" "),a("div",{staticClass:"main-top"},[a("div",{staticClass:"main-top-title"},[a("img",{attrs:{src:"/static/img/share/rule.png",alt:""},on:{click:t.rulesClick}}),t._v(" "),a("span",[t._v(t._s(t.groupStatusDesc))])]),t._v(" "),t.pinIng?a("div",{staticClass:"finish-time"},[a("span",{staticClass:"finish-count-down"}),t._v(" "),a("span",{staticClass:"orange"},[t._v("后结束")])]):t._e(),t._v(" "),a("div",{staticClass:"pin-success-box"},[a("div",{staticClass:"user-joined justified"},[a("div",{staticClass:"pindou-partner"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.ownerAvatar}})]),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"join-pindou-desc"},[a("div",{staticClass:"times"},[a("span",[t._v("发起时间：")]),t._v(" "),a("span",[t._v(t._s(t.groupCreateAt))])]),t._v(" "),t.pinSuccess?a("div",{staticClass:"times"},[a("span",[t._v("成功时间：")]),t._v(" "),a("span",[t._v(t._s(t.groupSuccessAt))])]):t._e(),t._v(" "),t.pinSuccess||t.pinIng?t._e():a("div",{staticClass:"times"},[a("span",[t._v("失败时间：")]),t._v(" "),a("span",[t._v(t._s(t.groupExpriedAt))])]),t._v(" "),t.pinIng?a("div",{staticClass:"group-info"},[a("span",{staticClass:"orange"},[t._v(t._s(t.pinzhu))]),t._v(" "),a("span",{staticClass:"grey"},[t._v("发起的拼豆豆还差")]),t._v(" "),a("span",{staticClass:"orange"},[t._v(t._s(t.needNum)+"人")]),t._v(" "),a("span",{staticClass:"grey"},[t._v("，即可获得优惠 ")])]):t._e()])])]),t._v(" "),a("div",{staticClass:"pindou-details"},[a("div",{staticClass:"pindou-details-top",on:{click:function(i){t.goShopDetail(t.clearTimer)}}},[t._v(t._s(t.shopName))]),t._v(" "),a("div",{staticClass:"pindou-details-middle",on:{click:function(i){t.goPindouDetail(t.clearTimer)}}},[a("div",{staticClass:"middle-left"},[a("img",{attrs:{src:t.shopImage,alt:""}})]),t._v(" "),a("div",{staticClass:"middle-right"},[a("div",{staticClass:"package-name"},[t._v(t._s(t.groupName))]),t._v(" "),a("div",{staticClass:"right-second-div clear-fix"},[a("div",{staticClass:"owner-box"},[t._v("拼主")]),t._v(" "),a("div",{staticClass:"new-package-price"},[t._v("￥"+t._s(t.discountPrice))])]),t._v(" "),a("div",{staticClass:"right-third-div clear-fix"},[a("div",{staticClass:"really-price-box"},[a("span",[t._v("到店使用仍需支付：")]),t._v(" "),a("span",[t._v("￥"+t._s(t.newPrice))])]),t._v(" "),a("div",{staticClass:"old-package-price"},[a("del",[t._v("￥"+t._s(t.oldPrice))])])])])]),t._v(" "),a("div",{staticClass:"pindou-details-bottom"},[t.pinSuccess?a("div",[a("span",[t._v("使用期限：")]),t._v(" "),a("span",[t._v(t._s(t.startUseTime))]),t._v(" "),a("span",[t._v("至")]),t._v(" "),a("span",[t._v(t._s(t.endUseTime))])]):t._e()])]),t._v(" "),a("div",{staticClass:"must-know justified",on:{click:t.showMustKnow}},[a("span",{staticClass:"must-know-text"},[t._v("使用须知")]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"must-know-contain"}),t._v(" "),a("div",{staticClass:"applicative justified",on:{click:t.showApplicative}},[a("div",{staticClass:"applicative-text"},[t._v("适用门店")]),t._v(" "),a("div",{staticClass:"applicative-icon justified"},[a("div",{staticClass:"min-distance"},[a("span",[t._v("最近门店"+t._s(t.minDistance)+"米")])]),t._v(" "),a("div",{staticClass:"shop-count"},[a("span",[t._v("共"+t._s(t.shopCount)+"家门店")])]),t._v(" "),a("img",{attrs:{src:"/static/img/share/close_hollow.png"}})])]),t._v(" "),a("div",{staticClass:"applicative-contain"}),t._v(" "),a("div",{staticClass:"goto-pindou",on:{click:function(i){t.goPindou(t.clearTimer)}}},[a("span",[t._v("去拼豆")])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-back-arrow"},[i("img",{attrs:{src:"/static/img/icon/goback.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"terms-div-contents"},[i("iframe",{attrs:{src:"https://www.beanpop.cn/pddrule",width:"100%",height:"100%",frameborder:"0",name:"_blank",id:"_blank"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"owner"},[i("img",{attrs:{src:"/static/img/share/pindou-owner.png"}}),this._v(" "),i("div",{staticClass:"owner-text"},[this._v("拼主")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"must-know-icon"},[i("img",{attrs:{src:"/static/img/share/close_hollow.png"}})])}]};var p=a("VU/8")(o,c,!1,function(t){a("MeI5")},"data-v-d69dcbb6",null);i.default=p.exports},MeI5:function(t,i){}});