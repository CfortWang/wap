webpackJsonp([12],{KdDB:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("K/Lq"),a=e.n(s),n=e("4kSj"),o=e.n(n),r=e("7QTg"),d=e("8wSn"),c={name:"pindouDetails",i18n:new VueI18n({locale:"pindouDetails",groupID:"",messages:d}),components:{swiper:r.swiper,swiperSlide:r.swiperSlide},data:function(){return{bannerItems:[],packageName:"",packagePrice:"",packageDesc:"",newPackagePrice:"",groupSize:"",joinNumber:"",groupOnNumber:"",shopName:"",shopAddress:"",shopAddressDetail:"",shopPhoneNum:"",groupID:"",moreData:!1,clearTimer:"",clearMoreTimer:[],allTimer:[],swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0},centeredSlides:!0,loop:!0}}},created:function(){var i=this;o()("body").css({"background-color":"#F4F4F4","font-family":"PingFangSC-Regular","font-size":"16px"});var t=this.$route.params,e=this;t.groupID?this.groupID=t.groupID:this.groupID=a.a.get("group_id"),axios({method:"GET",url:"http://dev-new-api.beanpop.cn/event/groupOn/"+this.groupID,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:""}}).then(function(t){var e=t.data.data;a.a.set("group_id",i.groupID,1),i.$i18n.groupID=a.a.get("group_id"),i.bannerItems=e.banner,i.packageName=e.title,i.packagePrice="￥"+e.price,i.newPackagePrice="￥"+e.discountedPrice,i.groupSize=e.groupSize,i.joinNumber=e.joinNumber,i.packageDesc=i.groupSize+"人成团·"+i.joinNumber+"人已拼",i.groupOnNumber=e.groupOnNumber;var s=e.shop;i.shopName=s.name,i.shopAddress=s.addressDetail,i.shopAddressDetail=s.nearAddress,i.shopPhoneNum=s.phoneNum;for(var n=e.goods,r=0;r<n.length;r++){var d="·"+n[r].name,c="（"+n[r].number+"份）",p="￥"+n[r].price;o()(".selected-food").append('<div class="food-details justified"><span><span class="food-name"></span><span class="food-amount"></span></span><span class="price"></span></div>'),o()(".selected-food .food-details:eq("+r+") .food-name").text(d),o()(".selected-food .food-details:eq("+r+") .food-amount").text(c),o()(".selected-food .food-details:eq("+r+") .price").text(p)}var l=e.remark;o()(".pindou-remarks-content").append(l);for(var v=e.tips,u=0;u<v.length;u++){var m=v[u].title,g=v[u].value;o()(".tips-content").append('<div class="tips-content-title"></div><div class="tips-content-text"></div>'),o()(".tips-content .tips-content-title:eq("+u+")").text(m),o()(".tips-content .tips-content-text:eq("+u+")").text(g)}for(var h=e.groupOn,f=i,_=function(t){k=""==h[t].iamge||null==h[t].image?"/static/img/share/no-image.png":h[t].image,b=h[t].id,w=h[t].nickname,x=h[t].needNum+"人",j=h[t].timeLeft,o()(".pindouing").append('<div class="pindou-box justified"><div class="user-info"><img/><span class="user-name"></span></div><div class="pindou-right justified"><div class="pindou-info"><span>还差</span><span class="lack-people"></span><span>拼成</span><p></p></div><div class="go-pindou" data-groupid=""><span>去拼豆</span></div></div></div>'),o()(".pindouing .pindou-box:eq("+t+") .go-pindou").attr("data-groupid",b),o()(".pindouing .pindou-box:eq("+t+") img").attr("src",k),o()(".pindouing .pindou-box:eq("+t+") .user-name").text(w),o()(".pindouing .pindou-box:eq("+t+") .lack-people").text(x),o()(".pindouing .pindou-box:eq("+t+") .pindou-info p").text(i.timer(j)),function(i){var e=setInterval(function(){i--,o()(".pindouing .pindou-box:eq("+t+") .pindou-info p").text(f.timer(i))},1e3);f.allTimer.push(e)}(j)},C=0;C<h.length;C++){var k,b,w,x,j;_(C)}o()(".go-pindou").click(function(){f.$options.methods.goToPindou();var i=o()(this).attr("data-groupid");axios({method:"GET",url:"http://dev-new-api.beanpop.cn/event/beforeGroupOn/"+i,withCredentials:!0,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:""}}).then(function(i){var t=i.data.data,e=t.ownerName,s=t.needNum,a=t.timeLeft;o()(".join-pindou-box .join-pindou-desc .orange:eq(1)").text(f.timer(a)),function(i){f.clearTimer=setInterval(function(){i--,o()(".join-pindou-box .join-pindou-desc .orange:eq(1)").text(f.timer(i))},1e3),f.allTimer.push(f.clearTimer)}(a);var n=t.user,r=t.groupSize,d='<div class="pindou-partner"><div class="avatar"><img/></div></div>';o()(".join-pindou-box .join-pindou-title").text("参与"+e+"的拼豆豆单"),o()(".join-pindou-box .join-pindou-desc .orange:eq(0)").text(s+"个"),o()(".user-joined").append('<div class="pindou-partner"><div class="avatar"><img/></div><div class="owner"><img src="/static/img/share/pindou-owner.png"/><div class="owner-text">拼主</div></div></div>'),setTimeout(function(){for(var i=0;i<n.length;i++){i>=1&&o()(".user-joined").append(d);var t=n[i].image;null!=t&&""!=t||(t="/static/img/share/pindou-wait.png"),o()(".user-joined .avatar:eq("+i+") img").attr("src",t)}for(var e=n.length;e<r;e++){o()(".user-joined").append(d);o()(".user-joined .avatar:eq("+e+") img").attr("src","/static/img/share/pindou-wait.png")}},1)}).catch(function(i){console.log(i)})});var I=e.ownerGot;o()(".award").append(I)}).catch(function(i){console.log(i)}),o()(window).on("unload",function(){e.clearAllTimer(e.allTimer)}),window.onpopstate=function(){e.clearAllTimer(e.allTimer)}},methods:{goToPindou:function(){var i=o()(window).height();o()(".mask1, .mask2").height(i+100),o()(".join-pindou-box, .mask2").show(),o()(".initiate-box").hide()},closePindou:function(i){o()(".join-pindou-box, .mask2").hide(),o()(".initiate-box").show(),clearInterval(i),o()(".user-joined").empty()},signPindou:function(){var i=o()(window).height();o()(".mask1, .mask2").height(i+100),o()(".initiate-failed-box, .mask2").show(),o()(".initiate-box").hide()},closeSign:function(){o()(".initiate-failed-box, .mask2").hide(),o()(".initiate-box").show()},joinOther:function(){o()(".initiate-failed-box, .mask2").hide(),o()(".initiate-box").show(),o()("html,body").animate({scrollTop:o()(".pindouing").offset().top},500)},showAward:function(){var i=o()(window).height();o()(".mask1, .mask2").height(i+100),o()(".award, .mask1").show()},closeAward:function(){o()(".award, .mask1").hide()},callShop:function(){var i="tel:"+this.shopPhoneNum;window.location.href=i},goBack:function(i){this.moreData=!1;for(var t=0;t<i.length;t++)clearInterval(i[t]);i.length=0},timer:function(i){var t=parseInt(i%60)<10?"0"+parseInt(i%60):parseInt(i%60),e=parseInt(i/60%60)<10?"0"+parseInt(i/60%60):parseInt(i/60%60),s=parseInt(i/3600%24)<10?"0"+parseInt(i/3600%24):parseInt(i/3600%24);return(Math.floor(i/86400)>=1?Math.floor(i/86400):"")+":"+s+":"+e+":"+t},clearAllTimer:function(i){for(var t=0;t<i.length;t++)clearInterval(i[t])},morePindou:function(){var i=this;this.moreData=!0,axios({method:"GET",url:"http://dev-new-api.beanpop.cn/event/groupOnList/"+this.groupID,withCredentials:!0,headers:{lang:"zh",token:"",os:"web",version:"1.0.0",time:""}}).then(function(t){for(var e=t.data.data,s=function(t){n=""==e[t].iamge||null==e[t].image?"/static/img/share/no-image.png":e[t].image,r=e[t].id,d=e[t].nickname,c=e[t].needNum+"人",p=e[t].timeLeft,l=i,o()(".terms-div-contents").append('<div class="pindou-box justified"><div class="user-info"><span class="user-name"></span><img/></div><div class="pindou-right justified"><div class="pindou-info"><span>还差</span><span class="lack-people"></span><span>拼成</span><p></p></div><div class="go-pindou" data-groupid=""><span>去拼豆</span></div></div></div>'),o()(".terms-div-contents .pindou-box:eq("+t+") .go-pindou").attr("data-groupid",r),o()(".terms-div-contents .pindou-box:eq("+t+") img").attr("src",n),o()(".terms-div-contents .pindou-box:eq("+t+") .user-name").text(d),o()(".terms-div-contents .pindou-box:eq("+t+") .lack-people").text(c),o()(".terms-div-contents .pindou-box:eq("+t+") .pindou-info p").text(i.$options.methods.timer(p)),function(i){var e=setInterval(function(){i--,o()(".terms-div-contents .pindou-box:eq("+t+") .pindou-info p").text(l.$options.methods.timer(i))},1e3);l.clearMoreTimer.push(e),l.allTimer.push(e)}(p)},a=0;a<e.length;a++){var n,r,d,c,p,l;s(a)}}).catch(function(i){console.log(i)})}}},p={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"content"},[i.moreData?e("div",{staticClass:"terms-div-wrapper"},[e("div",{staticClass:"terms-div-header"},[e("div",{staticClass:"header-title-wrapper"},[i._v("更多拼豆豆")]),i._v(" "),e("div",{staticClass:"header-back-wrapper",on:{click:function(t){i.goBack(i.clearMoreTimer)}}},[i._m(0)])]),i._v(" "),e("div",{staticClass:"terms-div-contents"})]):i._e(),i._v(" "),e("swiper",{attrs:{options:i.swiperOption}},[i._l(i.bannerItems,function(i){return e("swiper-slide",{key:i.index,staticClass:"swiper-div"},[e("img",{attrs:{src:i.image,alt:""}})])}),i._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),i._v(" "),e("div",{staticClass:"fixed-right-btn"},[i._v("打开App")]),i._v(" "),e("div",{staticClass:"package"},[e("div",{staticClass:"package-top justified"},[e("div",{staticClass:"package-name"},[i._v(i._s(i.packageName))]),i._v(" "),e("div",{staticClass:"new-price"},[i._v(i._s(i.newPackagePrice))])]),i._v(" "),e("div",{staticClass:"package-bottom justified"},[e("div",{staticClass:"package-desc"},[i._v(i._s(i.packageDesc))]),i._v(" "),e("div",{staticClass:"old-price"},[e("del",[i._v(i._s(i.packagePrice))])])])]),i._v(" "),i._m(1),i._v(" "),i._m(2),i._v(" "),e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-info-title"},[i._v(i._s(i.shopName))]),i._v(" "),e("div",{staticClass:"location-info justified"},[e("div",{staticClass:"location justified"},[i._m(3),i._v(" "),e("div",{staticClass:"address"},[e("span",[i._v(i._s(i.shopAddress))]),i._v(" "),e("p",[i._v(i._s(i.shopAddressDetail))])])]),i._v(" "),e("div",{staticClass:"contact-box",on:{click:i.callShop}},[e("img",{attrs:{src:"/static/img/share/contact.png"}})])])]),i._v(" "),e("div",{staticClass:"pindouing-title"},[e("span",{staticClass:"people-count"},[i._v(i._s(i.groupOnNumber)+"人")]),i._v(" "),e("span",[i._v("正在拼豆豆")]),i._v(" "),e("span",{staticClass:"more-pindou",on:{click:i.morePindou}},[i._v("查看更多")])]),i._v(" "),e("div",{staticClass:"pindouing"}),i._v(" "),e("div",{staticClass:"initiate-failed-box"},[e("div",{staticClass:"initiate-failed"},[e("div",{staticClass:"initiate-failed-title"},[i._v("您还没资格成为拼主哦！")]),i._v(" "),e("div",{staticClass:"get-qualifications"},[i._v("您可以去购买带有喜豆码商品后获得发起资格，享更多优惠或参与其他拼主已发起的拼豆豆。")]),i._v(" "),e("div",{staticClass:"join-other-btn",on:{click:i.joinOther}},[e("span",[i._v("参与其他拼豆豆")])])]),i._v(" "),e("div",{staticClass:"close-join-other",on:{click:i.closeSign}},[e("img",{attrs:{src:"/static/img/share/close.png",alt:""}})])]),i._v(" "),e("div",{staticClass:"join-pindou-box"},[i._m(4),i._v(" "),e("div",{staticClass:"close-join-pindou",on:{click:function(t){i.closePindou(i.clearTimer)}}},[e("img",{attrs:{src:"/static/img/share/close.png",alt:""}})])]),i._v(" "),e("div",{staticClass:"mask1",on:{click:i.closeAward}}),i._v(" "),e("div",{staticClass:"mask2"}),i._v(" "),i._m(5),i._v(" "),e("div",{staticClass:"initiate-box"},[e("div",{staticClass:"initiate-left"},[i._m(6),i._v(" "),e("span",{staticClass:"initiate-remark"},[i._v("拼主拼团成功将获得额外奖励")]),i._v(" "),e("img",{staticClass:"pindou-question",attrs:{src:"/static/img/share/question.png"},on:{click:i.showAward}})]),i._v(" "),e("div",{staticClass:"initiate-btn",on:{click:i.signPindou}},[e("span",[i._v("发起拼豆豆")])])])],1)},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"header-back-arrow"},[t("img",{attrs:{src:"/static/img/icon/goback.png"}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"pindou-content"},[t("div",{staticClass:"pindou-titlt"},[this._v("拼豆豆内容")]),this._v(" "),t("div",{staticClass:"selected-food"}),this._v(" "),t("div",{staticClass:"pindou-remarks"},[t("div",{staticClass:"pindou-remarks-title"},[this._v("备注")]),this._v(" "),t("div",{staticClass:"pindou-remarks-content"})])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"tips"},[t("div",{staticClass:"tips-title"},[this._v("温馨提示")]),this._v(" "),t("div",{staticClass:"tips-content"})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"location-icon"},[t("img",{attrs:{src:"/static/img/share/position.png"}})])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"join-pindou"},[e("div",{staticClass:"join-pindou-title"}),i._v(" "),e("div",{staticClass:"join-pindou-desc"},[e("span",{staticClass:"grey"},[i._v("仅限")]),i._v(" "),e("span",{staticClass:"orange"}),i._v(" "),e("span",{staticClass:"grey"},[i._v("名额，")]),i._v(" "),e("span",{staticClass:"orange"}),i._v(" "),e("span",{staticClass:"grey"},[i._v("后结束")])]),i._v(" "),e("div",{staticClass:"user-joined"}),i._v(" "),e("div",{staticClass:"join-pindou-btn"},[e("span",[i._v("参与拼豆豆")])])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"award"},[t("div",{staticClass:"award-title"},[this._v("拼主拼团成功额外奖励")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("p",[t("span",{staticClass:"deposit"},[this._v("10元")]),t("span",[this._v("订金")])])}]};var l=e("VU/8")(c,p,!1,function(i){e("iCPv")},"data-v-3d14d28e",null);t.default=l.exports},iCPv:function(i,t){}});