webpackJsonp([7],{Q6Ig:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("K/Lq"),i=s.n(o),n=s("4kSj"),a=s.n(n),l=s("c9Bb"),r={name:"complete",i18n:new VueI18n({locale:"zh",phone:"",messages:l}),components:{},data:function(){var e=new Date;return{result:[],endTime:new Date(e.getTime()+1e5)-e,currentDate:e,yellowItems:[],greenItems:[],currentLanguage:"zh",currentPhoneNum:"",countryItems:[],phoneNumber:"",selectedCountry:1,verificationCode:"",shopADUrl:null,shopEventUrl:null,marketUrl:null,tmpUser:null,bannerUrl:null,bottomAdUrl:null,rulePicUrl:"",landingUrl:"",reload:!1,hasCookie:!1,noCookie:!0,rulesOpen:!1,shopCouponShow:!1,shopCoupon:[],device:"",shopAdLanding:"",lang:"",showHeader:!1,round:"",deviceUrl:""}},created:function(){var e=this,t=this.$route.params;this.lang=t.lang,this.device=t.device,this.shopAdLanding=t.shopAdLanding;var s=t.qrCode;console.log(s),s?"ios"==this.device||"android"==this.device?(console.log("app complete"),this.showHeader=!1,"ios"==this.device&&(this.deviceUrl="seedo://"),"android"==this.device&&(this.deviceUrl="xidou://app"),console.log(this.deviceUrl)):(this.showHeader=!0,i.a.get("qr_language")?(this.$i18n.locale=i.a.get("qr_language"),this.currentLanguage=i.a.get("qr_language")):(this.$i18n.locale="zh",this.currentLanguage="zh"),i.a.get("qr_phone_num")?(this.$i18n.phone=i.a.get("qr_phone_num"),this.currentPhoneNum=i.a.get("qr_phone_num"),this.hasCookie=!0,this.noCookie=!1):(this.hasCookie=!1,this.noCookie=!0),axios({url:"https://bpapi.beanpop.cn/api/countries"}).then(function(t){var s=t.data.data;e.countryItems=s.data,e.selectedCountry=parseInt(e.countryItems[0].seq)}).catch(function(e){console.log(e)})):(this.$i18n.locale=this.lang,this.shopCouponShow=!1),console.log(this.$i18n.phone);t=this.$route.params;if(this.tmpUser=t.tmpUser,this.shopADUrl=t.shopAD,this.shopEventUrl=t.shopEvent,this.marketUrl=t.market,this.bannerUrl=t.banner,this.bottomAdUrl=t.bottomAd,this.landingUrl=t.landingUrl,this.shopCoupon=t.shopCoupon,console.log(this.shopADUrl),this.yellowItems=[t.yellowBall[0],t.yellowBall[1],t.yellowBall[2],t.yellowBall[3],t.yellowBall[4],t.yellowBall[5]],this.greenItems=[t.greenBall[0]],this.shopCoupon&&this.shopCoupon.length>0){this.shopCouponShow=!0;var o=this;setTimeout(function(){var e=o.shopCoupon.length;console.log(e);for(var t=0;t<e;t++){a()(".shop-coupon-box").append('<div class="shop-coupon"><div class="coupon-img"><img/></div><div class="shop-coupon-detail justified"><div class="coupon-desc"><div class="coupon-name"></div><div class="store-name"></div><div class="term"><span class="start-date"></span><span class="end-date"></span></div></div><div class="use-shop-coupon-btn">使用</div></div></div>');var s=o.shopCoupon[t].coupon.create_date.split(" ")[0]+"至",i=o.shopCoupon[t].coupon.expire_date.date.split(" ")[0],n=o.shopCoupon[t].coupon.shop_logo,l=o.shopCoupon[t].coupon.name,r=o.shopCoupon[t].coupon.shop_name;a()(".shop-coupon-box .shop-coupon:eq("+t+") img").attr("src",n),a()(".shop-coupon-box .shop-coupon:eq("+t+") .coupon-name").text(l),a()(".shop-coupon-box .shop-coupon:eq("+t+") .store-name").text(r),a()(".shop-coupon-box .shop-coupon:eq("+t+") .start-date").text(s),a()(".shop-coupon-box .shop-coupon:eq("+t+") .end-date").text(i)}a()(".use-shop-coupon-btn").click(function(){window.location.href="seedo://?action=history"})},100)}this.selectedBlue=[],this.selectedRed=[];for(var n=0;n<this.greenItems.length;n++)this.greenItems[n]<10?this.selectedBlue.push("0"+this.greenItems[n]):this.selectedBlue.push(this.greenItems[n]);for(n=0;n<this.yellowItems.length;n++)this.yellowItems[n]<10?this.selectedRed.push("0"+this.yellowItems[n]):this.selectedRed.push(this.yellowItems[n])},methods:{countryChangeItem:function(e){this.selectedCountry=parseInt(e.target.value)},openModal:function(){document.getElementsByClassName("modal-wrapper")[0].style.display="block",document.getElementsByClassName("mask")[0].style.display="block"},hide:function(){document.getElementsByClassName("modal-wrapper")[0].style.display="none",document.getElementsByClassName("mask")[0].style.display="none"},rulesClick:function(){this.rulesOpen=!0},backKey:function(){this.rulesOpen=!1},clickBottomAd:function(e){window.location.href=e},entryButton:function(){var e=this;/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?this.phoneKind="ios":/(Android)/i.test(navigator.userAgent)&&(this.phoneKind="android");var t=navigator.userAgent.toLowerCase();if("micromessenger"==t.match(/MicroMessenger/i)||"qq"==t.match(/QQ/i)?this.notWechat=!1:this.notWechat=!0,this.phoneNumber=this.phoneNumber.replace(/ /gi,""),""===this.phoneNumber)return alert(this.$i18n.t("message.insertPhone")),!1;axios({method:"POST",url:"https://bpapi.beanpop.cn/api/validations/phone-num",params:{phone_num:this.phoneNumber,country:this.selectedCountry}}).then(function(e){document.getElementsByClassName("verification-box")[0].style.display="block",document.getElementsByClassName("login-btn")[0].style.display="none",document.getElementsByClassName("reg-btn")[0].style.display="block"}).catch(function(t){if(console.log(t),409!==t.response.data.status)return alert(e.$i18n.t("message.wrongRequest")),!1;var s=e.$route.params,o=e.$route.params.qrCode,n=s.yellowBall[0],a=s.yellowBall[1],l=s.yellowBall[2],r=s.yellowBall[3],c=s.yellowBall[4],p=s.yellowBall[5],d=s.greenBall[0];axios({method:"POST",url:"https://bpapi.beanpop.cn/api/entries/phone-num",params:{code:o,num_1:n,num_2:a,num_3:l,num_4:r,num_5:c,num_6:p,num_7:d,country:e.selectedCountry,phone_num:e.phoneNumber,temp_user:e.tmpUser}}).then(function(t){var s=document.getElementById("phoneNum").value;i.a.set("qr_phone_num",s,1),e.$i18n.phone=i.a.get("qr_phone_num"),e.currentPhoneNum=i.a.get("qr_phone_num"),e.$router.push({name:"AppDown",params:{code:"default",reload:e.reload,refresh:e.refresh}})}).catch(function(e){console.log(e);var t=e.response.data;console.log(t)})})},noPage:function(){alert(this.$i18n.t("info.click"))},timer:function(e){var t=parseInt(e%60)<10?"0"+parseInt(e%60):parseInt(e%60),s=(parseInt(e/60%60)<10?"0"+parseInt(e/60%60):parseInt(e/60%60))+":"+t;a()(".count-down").text(s)},getVerification:function(){var e=this;axios({method:"POST",url:"https://bpapi.beanpop.cn/api/certifications/phone-num/sign-up",params:{phone_num:this.phoneNumber,country:this.selectedCountry}}).then(function(t){var s=59;e.$options.methods.timer(s),document.getElementById("get-verification").disabled=!0;var o=e,i=setInterval(function(){o.$options.methods.timer(s),--s<0&&(clearInterval(i),document.getElementById("get-verification").disabled=!1)},1e3)}).catch(function(t){console.log(t),alert(e.$i18n.t("message.sendFail"))})},doRegister:function(){var e=this;return""===this.verificationCode?(alert(this.$i18n.t("message.insertAuthCode")),!1):6!==this.verificationCode.length?(alert(this.$i18n.t("message.wrongAuthCodeSize")),!1):void axios({method:"POST",url:"https://bpapi.beanpop.cn/api/register/code",params:{country:this.selectedCountry,phone_num:this.phoneNumber,code:this.verificationCode}}).then(function(t){var s=e.$route.params;if(console.log(s),"event"===s.type||"code"===s.type){var o=s.qrCode,i=s.yellowBall[0],n=s.yellowBall[1],a=s.yellowBall[2],l=s.yellowBall[3],r=s.yellowBall[4],c=s.yellowBall[5],p=s.greenBall[0],d=s.tempUser;axios({method:"POST",url:"https://bpapi.beanpop.cn/api/entries/phone-num",params:{code:o,num_1:i,num_2:n,num_3:a,num_4:l,num_5:r,num_6:c,num_7:p,country:e.selectedCountry,phone_num:e.phoneNumber,temp_user:d}}).then(function(t){e.$router.push({name:"AppDown",params:{code:"default"}})}).catch(function(e){console.log(e)})}else"recommend"===s.type&&e.$router.push({name:"AppDown",params:{code:"recommend"}})}).catch(function(t){console.log(t);var s=t.response.status,o=t.response.data;return 404===s?100===o.status?(alert(e.$i18n.t("message.wrongRecommendCode")),!1):200===o.status?(alert(e.$i18n.t("message.wrongAuthCode")),!1):(console.log(t),!1):400===s?(alert(e.$i18n.t("message.wrongAuthCode")),!1):(console.log(t),!1)})},history:function(){window.location.href=this.deviceUrl+"/history?action=history"},palyAgain:function(){window.location.href="http://dev-m.beanpop.cn/event?lang="+this.lang+"&device="+this.device},goBack:function(){window.location.href=this.deviceUrl+"/home?action=home"}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"outer-box"},[e.rulesOpen?s("div",{staticClass:"terms-div-wrapper"},[s("div",{staticClass:"terms-div-header"},[s("div",{staticClass:"header-title-wrapper"},[e._v("\n        "+e._s(e.$t("gameRule"))+"\n      ")]),e._v(" "),s("div",{staticClass:"header-back-wrapper",on:{click:e.backKey}},[e._m(0)])]),e._v(" "),e._m(1)]):e._e(),e._v(" "),e.showHeader?s("header",[s("div",{staticClass:"header-title-wrapper fs-14"},[e._v("\n      "+e._s(e.$t("title"))+"\n    ")])]):e._e(),e._v(" "),s("div",{staticClass:"mask blockScroll"}),e._v(" "),s("div",{staticClass:"contents-wrapper"},[s("div",{staticClass:"complete-event-top-wrapper"},[s("div",{staticClass:"win-rule",on:{click:e.rulesClick}},[s("img",{attrs:{src:"/static/img/complete/rule.png",alt:""}}),e._v(" "),s("span",[e._v(e._s(e.$t("moreInfo")))])]),e._v(" "),e._m(2),e._v(" "),s("div",{staticClass:"complete-ball-wrapper float-wrapper justified"},[s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[0]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[1]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[2]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[3]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[4]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size yellow complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedRed[5]))])]),e._v(" "),s("div",{staticClass:"ball-wrapper ball-size green complete-size float-l"},[s("div",{staticClass:"ball-size-item1",attrs:{"data-v-18718bba":""}},[e._v(e._s(e.selectedBlue[0]))])])]),e._v(" "),e._m(3)]),e._v(" "),s("div",{staticClass:"complete-event-bottom-wrapper"},[e.shopCouponShow?s("div",{staticClass:"shop-coupon-wrapper"},[s("div",{staticClass:"shop-coupon-title"},[e._v(e._s(e.$t("event.title1")))]),e._v(" "),s("div",{staticClass:"shop-coupon-box"})]):e._e(),e._v(" "),s("div",{staticClass:"seedo-gifts-wrapper"},[s("div",{staticClass:"seedo-gifts-title"},[e._v("喜豆大礼包")]),e._v(" "),s("div",{staticClass:"seedo-gifts-box",on:{click:e.history}},[e._m(4)]),e._v(" "),s("div",{staticClass:"seedo-gifts-box",on:{click:e.history}},[e._m(5)])]),e._v(" "),e.showHeader?s("div",{staticClass:"login-wrapper",class:{showLoginBox:e.noCookie,notShowLoginBox:e.hasCookie}},[s("div",{staticClass:"complete-info-wrapper"},[s("div",{staticClass:"info-title float-wrapper"},[e._v("\n            "+e._s(e.$t("info.title"))+"\n          ")])]),e._v(" "),s("div",{staticClass:"login-box"},[s("div",{staticClass:"login-input-wrapper"},[s("select",{staticClass:"country-selete",on:{change:function(t){e.countryChangeItem(t)}}},e._l(e.countryItems,function(t){return s("option",{key:t.index,domProps:{value:t.seq}},[e._v("+"+e._s(t.calling_code))])})),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"phone-number-input",attrs:{type:"number",id:"phoneNum",placeholder:e.$t("phone.placeholder")},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"verification-box clear-fix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationCode,expression:"verificationCode"}],staticClass:"verification",attrs:{type:"text",id:"verification",placeholder:e.$t("phone.verification")},domProps:{value:e.verificationCode},on:{input:function(t){t.target.composing||(e.verificationCode=t.target.value)}}}),e._v(" "),s("span",{staticClass:"count-down"},[e._v("01:00")]),e._v(" "),s("button",{staticClass:"get-verification",attrs:{id:"get-verification"},on:{click:e.getVerification}},[e._v(e._s(e.$t("phone.getVerification")))])]),e._v(" "),s("div",{staticClass:"login-btn"},[s("span",{on:{click:e.entryButton}},[e._v(e._s(e.$t("phone.button")))])]),e._v(" "),s("div",{staticClass:"reg-btn"},[s("span",{on:{click:e.doRegister}},[e._v(e._s(e.$t("phone.button")))])])])]):e._e(),e._v(" "),s("div",{staticClass:"hasLogined",class:{showLoginedBox:e.hasCookie,notShowLoginedBox:e.noCookie}},[e._v("\n        礼包已放入手机号 : "+e._s(e.currentPhoneNum)+"\n      ")]),e._v(" "),s("div",{staticClass:"go-to-download",class:{showLoginedBox:e.hasCookie,notShowLoginedBox:e.noCookie}},[e._v("登录或下载APP即可使用")]),e._v(" "),s("div",{staticClass:"dashed-line"}),e._v(" "),""!==e.shopADUrl?s("div",{staticClass:"complete-event-contents-wrapper"},[s("div",{staticClass:"company-event-wrapper"},[s("div",{staticClass:"event-img-wrapper"},[s("img",{attrs:{src:e.shopADUrl}})])])]):e._e(),e._v(" "),""!==e.shopEventUrl?s("div",{staticClass:"complete-event-contents-wrapper"},[s("div",{staticClass:"company-event-wrapper"},[s("div",{staticClass:"event-img-wrapper"},[s("img",{attrs:{src:e.shopEventUrl}})])])]):e._e()]),e._v(" "),e.showHeader?e._e():s("div",{staticClass:"bottom-btn clear-fix"},[s("div",{staticClass:"play-again",on:{click:e.palyAgain}},[s("img",{attrs:{src:"/static/img/complete/bet_finished_btn_replay.png",alt:""}}),e._v(" "),s("span",[e._v("再玩一次")])]),e._v(" "),s("div",{staticClass:"go-back",on:{click:e.goBack}},[s("span",[e._v("回到首页")])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-back-arrow"},[t("img",{attrs:{src:"/static/img/icon/goback.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"terms-div-contents"},[t("iframe",{attrs:{src:"https://wap.beanpop.cn/rule",width:"100%",height:"100%",frameborder:"0",name:"_blank",id:"_blank"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lottery-date"},[t("div",{staticClass:"lottery-date-line"}),this._v(" "),t("div",{staticClass:"lottery-date-text"},[t("span",[this._v("距离开奖2天9小时")]),this._v(" "),t("span"),this._v(" "),t("span")]),this._v(" "),t("div",{staticClass:"lottery-date-line"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"terms"},[t("span"),this._v(" "),t("span",[this._v("20180908期")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"seedo-gifts"},[t("div",{staticClass:"congratulate"},[this._v("恭喜您获得800喜豆点")]),this._v(" "),t("div",{staticClass:"gifts-desc"},[this._v("累积喜豆点可兑换现金及其他礼物哦")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"seedo-gifts"},[t("div",{staticClass:"congratulate"},[this._v("恭喜您获得一次发起拼豆豆机会")]),this._v(" "),t("div",{staticClass:"gifts-desc"},[this._v("成为拼主发起拼豆豆获更多奖励")])])}]};var p=s("VU/8")(r,c,!1,function(e){s("c5QQ")},"data-v-7212276e",null);t.default=p.exports},c5QQ:function(e,t){},c9Bb:function(e,t){e.exports={en:{title:"Complete",rule:{title:"Winning rules",rules:"Pick 6 red beans and 1 blue bean as your quiz number",firstPrize:"First prize：6 red beans match perfectly",secondPrize:"Second prize: 5 red beans + 1 blue bean match",thirdPrize:"Third prize: 4 red beans + 1 blue bean match or 5 red beans match",fourthPrize:"Fourth prize: 3 red beans + 1 blue bean match or 4 red beans match",fifthPrize:"Fifth prize: match the number of blue bean",sixthPrize:"Sixth Prize: Matching the numbers before and after the blue bean",example:"(For example, if the blue bean is 4, then the 3 or 5 won)"},event:{title1:"Shop Coupon",title2:"Maket' AD/Event",title3:"Gift"},info:{title:"Entry Info",date:"Entry Date",winningDate:"Winning date",drawing:"Drawing",remainTime:"Count down",balltext:"Number:",period:"2018.07.15(No.18003)",click:"Comming soon."},phone:{title:"Check Register",placeholder:"Phone Number",verification:"Verification Code",getVerification:"Get Code",button:"Check and Entry"},message:{insertPhone:"Please insert your phone number.",wrongRequest:"Wrong request.",insertAuthCode:"Please insert auth code.",wrongAuthCodeSize:"Auth code size is wrong.(6 characters)",wrongAuthCode:"Wrong auth code",sendSuccess:"We send auth code. Please insert received auth code.",sendFail:"Send auth code failed."},moreInfo:"Prize Info",gameRule:"中奖规则及说明",appDownMessage:"You can check more information through mobile App."},ko:{title:"응모완료",rule:{title:"승리 규칙",rules:"퀴즈 번호로 6 개의 팥과 1 개의 파란색 콩 선택",firstPrize:"1 등상 : 6 개의 팥이 완벽하게 일치합니다.",secondPrize:"2 등상 : 팥 5 개 + 푸른 콩 1 개",thirdPrize:"3 등상 : 팥 4 개 + 푸른 콩 1 개 또는 팥 5 개 일치",fourthPrize:"4 등상 : 팥 3 개 + 푸른 콩 1 개 또는 팥 4 개 일치",fifthPrize:"5 등상 : 푸른 콩 수와 일치",sixthPrize:"6 등상 : 푸른 콩 전후의 숫자 매치",example:"(예를 들어, 파란색 콩이 4이면 3 또는 5 원입니다)"},event:{title1:"Shop AD/Event",title2:"Maket' AD/Event",title3:"상품정보"},info:{title:"응모 현황",date:"응모일",winningDate:"당첨일",drawing:"회차",remainTime:"남은시간",balltext:"퀴즈번호:",period:"2018.07.15(번호 18003)",click:"곧 온다."},phone:{title:"가입여부 확인",placeholder:"핸드폰번호를 입력하세요.",verification:"인증코드",getVerification:"인증코드받기",button:"확인 후 응모"},message:{insertPhone:"핸드폰 번호를 입력해주세요.",wrongRequest:"잘못된 요청입니다.",insertAuthCode:"인증코드를 입력해 주세요.",wrongAuthCodeSize:"인등코드형식이 올바르지 않습니다.",wrongAuthCode:"잘못된 인증코드 입니다.",sendSuccess:"인증코드를 전송했습니다. 받은 인증코드를 입력해주세요.",sendFail:"인증코드 전송에 실패했습니다. 관리자에게 문의해주세요."},moreInfo:"당첨금 정보",gameRule:"中奖规则及说明",appDownMessage:"앱에서 응모현황, 당첨현황 등을 확인할 수 있습니다."},zh:{title:"喜豆大抽奖",rule:{title:"中奖规则",rules:"挑选6颗红豆与一颗蓝豆作为你的竞猜号码",firstPrize:"一等奖：6颗红豆完全匹配",secondPrize:"二等奖：5颗红豆+1颗蓝豆匹配",thirdPrize:"三等奖：4颗红豆+1颗蓝豆匹配或者5颗红豆匹配",fourthPrize:"四等奖：3颗红豆+1颗蓝豆匹配或者4颗红豆匹配",fifthPrize:"五等奖：与蓝豆的数字相匹配",sixthPrize:"六等奖：与蓝豆前后的数字相匹配",example:"(比如蓝豆是4，则选3号或5号中奖)"},event:{title1:"商家优惠券",title2:"喜豆活动",title3:"劲爆大奖"},info:{title:"送你喜豆大礼包",date:"申请日期",winningDate:"开奖时间",drawing:"届次",remainTime:"倒计时",balltext:"竞猜号码:",period:"2018.07.15(第18003期)",click:"即将到来"},phone:{title:"确认注册与否",placeholder:"输入手机号,送你喜豆大礼包",verification:"请输入验证码",getVerification:"获取验证码",button:"点击领取"},message:{insertPhone:"请输入手机号",wrongRequest:"输入错误",insertAuthCode:"请输入验证码",wrongAuthCodeSize:"验证码形式不正确",wrongAuthCode:"错误的验证码",sendSuccess:"已发送，请输入验证码",sendFail:"验证码发送失败，请询问管理员"},moreInfo:"中奖规则及说明",gameRule:"中奖规则及说明",appDownMessage:"喜豆一下，有吃有喝有钱拿"},ja:{title:"응모완료",event:{title1:"Shop AD/Event",title2:"Maket' AD/Event",title3:"상품정보"},info:{title:"응모 현황",date:"응모일",winningDate:"당첨일",drawing:"회차",remainTime:"남은시간"},phone:{title:"가입여부 확인",placeholder:"핸드폰번호를 입력하세요.",button:"확인 후 응모"},message:{insertPhone:"핸드폰 번호를 입력해주세요.",wrongRequest:"잘못된 요청입니다.",noUser:"가입되지 않은 사용자 입니다. 회원 가입을 진행하시겠습니까?",noUser2:"没有注册的用户，是否前往注册？没有注册的用户"},moreInfo:"당첨금 정보",appDownMessage:"앱에서 응모현황, 당첨현황 등을 확인할 수 있습니다."}}}});