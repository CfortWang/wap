webpackJsonp([6],{"5Abd":function(e,t){e.exports={en:{title:"Bean Pop",info:{title:"Enjoy the 喜豆!",remark1:"Mobile lottery event,",remark2:"invite you to 喜豆."},recommend1:"",recommend2:"invites you.",input:{title:"Check register",phonePlaceholder:"Phone number",confirmButton:"Confirm"},message:{insertPhone:"Please insert your phone number.",wrongRequest:"Wrong request.",noUser:"This phone number is not registeyellow in 喜豆. Do you want join the 喜豆?",areadyRecommend:"You already recommended someone."}},ko:{title:"Bean Pop",info:{title:"喜豆 함께 즐겨요!",remark1:"모바일로 즐기는 로또이벤트",remark2:"喜豆 초대합니다."},recommend1:"님이",recommend2:"당신을 초대하였습니다.",input:{title:"가입여부 확인",phonePlaceholder:"핸드폰 번호를 입력해주세요.",confirmButton:"확인"},message:{insertPhone:"핸드폰 번호를 입력해주세요.",wrongRequest:"잘못된 요청입니다.",noUser:"가입되지 않은 사용자 입니다. 회원 가입을 진행하시겠습니까?",areadyRecommend:"이미 다른 아이디를 추천했습니다."}},zh:{title:"喜豆",info:{title:"一起玩转喜豆吧",remark1:"邀请您参加手机彩票抽奖喜豆",remark2:"彩票抽奖喜豆"},recommend1:"",recommend2:"邀请您参加抽奖",input:{title:"确认注册与否",phonePlaceholder:"请输入手机号",confirmButton:"确定"},message:{insertPhone:"请输入手机号",wrongRequest:"输入错误",noUser:"没有注册的用户，是否前往注册？",areadyRecommend:"已经推荐别的ID"}},ja:{title:"Bean Pop",info:{title:"喜豆 함께 즐겨요!",remark1:"모바일로 즐기는 로또이벤트",remark2:"喜豆에 초대합니다."},recommend1:"님이",recommend2:"당신을 초대하였습니다.",input:{title:"가입여부 확인",phonePlaceholder:"핸드폰 번호를 입력해주세요.",confirmButton:"확인"},message:{insertPhone:"핸드폰 번호를 입력해주세요.",wrongRequest:"잘못된 요청입니다.",noUser:"가입되지 않은 사용자 입니다. 회원 가입을 진행하시겠습니까?",areadyRecommend:"이미 다른 아이디를 추천했습니다."}}}},cV3P:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("TXmL"),s=n("K/Lq"),o=n.n(s),i=n("mtWM"),c=n.n(i),m=n("5Abd");a.a.use(r.a);var u={name:"recommend",i18n:new r.a({locale:"zh",messages:m}),components:{},data:function(){return{items:[{title:"English",value:"en"},{title:"한국어",value:"ko"},{title:"中国",value:"zh"}],currentLanguage:"zh",phoneNumber:"",countryItems:[],selectedCountry:1,nickname:"",code:""}},created:function(){var e=this;if(o.a.get("qr_language")?(this.$i18n.locale=o.a.get("qr_language"),this.currentLanguage=o.a.get("qr_language")):(this.$i18n.locale="zh",this.currentLanguage="zh",o.a.set("qr_language","zh",1)),this.nickname=this.$route.query.nickname,this.code=this.$route.query.recommend_code,!this.nickname||!this.code)return this.$router.push({name:"AppDown",params:{code:"default"}}),!1;c()({url:"https://bpapi.beanpop.cn/api/countries"}).then(function(t){var n=t.data.data;e.countryItems=n.data,e.selectedCountry=parseInt(e.countryItems[0].seq)}).catch(function(e){console.log(e)})},methods:{languageChangeItem:function(e){o.a.set("qr_language",e.target.value,1),this.$i18n.locale=o.a.get("qr_language"),this.currentLanguage=o.a.get("qr_language")},confirmButton:function(){var e=this;if(this.phoneNumber=this.phoneNumber.replace(/ /gi,""),""===this.phoneNumber)return alert(this.$i18n.t("message.insertPhone")),!1;c()({method:"POST",url:"https://bpapi.beanpop.cn/api/validations/phone-num",params:{phone_num:this.phoneNumber,country:this.selectedCountry}}).then(function(t){if(!confirm(e.$i18n.t("message.noUser")))return!1;e.$router.push({name:"Register",params:{type:"recommend",phoneNumber:e.phoneNumber,countryCode:e.selectedCountry,nickname:e.nickname,code:e.code}})}).catch(function(t){console.log(t);var n=t.response.data;if(409!==n.status)return alert(e.$i18n.t("message.wrongRequest")),!1;n.data.recommended_user?(alert(e.$i18n.t("message.areadyRecommend")),e.$router.push({name:"AppDown",params:{code:"recommend"}})):e.$router.push({name:"ConfirmRecommend",params:{phoneNumber:e.phoneNumber,countryCode:e.selectedCountry,nickname:e.nickname,code:e.code}})})},countryChangeItem:function(e){this.selectedCountry=parseInt(e.target.value)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"contents-wrapper"},[n("header",[n("div",{staticClass:"header-logo-wrapper fs-14"},[e._v("\n        "+e._s(e.$t("title"))+"\n      ")]),e._v(" "),n("div",{staticClass:"header-language-wrapper"},[n("img",{attrs:{src:"/static/img/icon/language_icon_black.png"}}),e._v(" "),n("div",{staticClass:"header-language-text float-wrapper"},[n("select",{staticClass:"float-l",on:{change:function(t){e.languageChangeItem(t)}}},e._l(e.items,function(t){return n("option",{key:t.index,domProps:{value:t.value,selected:e.currentLanguage===t.value}},[e._v(e._s(t.title))])})),e._v(" "),e._m(0)])])]),e._v(" "),n("div",{staticClass:"contents-wrapper"},[n("div",{staticClass:"recommend-wrapper"},[n("div",{staticClass:"recommend-text-wrapper dsp-table"},[n("div",{staticClass:"dsp-table-cell"},[n("span",{staticClass:"tl-20 fs-14"},[e._v(e._s(e.$t("info.title")))]),n("br"),e._v(" "),n("span",{staticClass:"tl-15"},[e._v(e._s(e.$t("info.remark1"))),n("br"),e._v("\n            "+e._s(e.$t("info.remark2")))])])]),e._v(" "),n("div",{staticClass:"recommend-img-wrapper"},["ko"===e.currentLanguage?n("img",{attrs:{src:"/static/img/recommend/recommend_phone_ko.png"}}):"en"===e.currentLanguage?n("img",{attrs:{src:"/static/img/recommend/recommend_phone_en.png"}}):n("img",{attrs:{src:"/static/img/recommend/recommend_phone_zh.png"}})]),e._v(" "),n("div",{staticClass:"recommend-recommender-wrapper dsp-table"},[n("div",{staticClass:"dsp-table-cell fs-11 tl-15"},[n("span",{staticClass:"bold-text"},[e._v(e._s(e.code)+"("+e._s(e.nickname)+")")]),e._v(" "+e._s(e.$t("recommend1"))),n("br"),e._v("\n            "+e._s(e.$t("recommend2"))+"\n          ")])]),e._v(" "),n("div",{staticClass:"recommend-input-wrapper"},[n("div",{staticClass:"input-box"},[n("div",{staticClass:"input-title"},[e._v("\n              "+e._s(e.$t("input.title"))+"\n            ")]),e._v(" "),n("div",{staticClass:"input-row-wrapper float-wrapper"},[n("select",{staticClass:"w-25 float-l",on:{change:function(t){e.countryChangeItem(t)}}},e._l(e.countryItems,function(t){return n("option",{key:t.index,domProps:{value:t.seq,selected:e.selectedCountry===t.seq}},[e._v("+"+e._s(t.calling_code))])})),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"phone-number-input w-70 float-r",attrs:{type:"number",placeholder:e.$t("input.phonePlaceholder")},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-button-wrapper"},[n("button",{staticClass:"btn recommend-btn",attrs:{type:"button"},on:{click:e.confirmButton}},[e._v(e._s(e.$t("input.confirmButton")))])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-arrow-wrapper fs-05 float-l dsp-table"},[t("div",{staticClass:"dsp-table-cell"},[this._v("▼")])])}]};var p=n("VU/8")(u,l,!1,function(e){n("jTNu")},"data-v-719c9d5f",null);t.default=p.exports},jTNu:function(e,t){}});