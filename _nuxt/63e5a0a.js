(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,n){"use strict";n.r(e);var o=n(471),r=n(469),c=n(467),l=n(61),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(o.a,[e(r.a,{attrs:{app:""}},[e(c.a),t._v(" "),e("span",{staticClass:"mr-8 text-caption"},[t._v("Version: 23.04.05.0119")]),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("CopyRight © "+t._s((new Date).getFullYear())+" Ngazi Technologies")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";var o=n(0),r=n(200);o.a.use(r.a),e.a=function(t){t.app.i18n=new r.a({locale:"en",fallbackLocale:"en",messages:{en:n(442),sw:n(443)}})}},201:function(t,e,n){"use strict";var o=n(0),r=n(93);o.a.use(r.a),e.a=function(t){var e=new r.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#06065e",accent:"#0000",secondary:"#ffffff",success:"#f2b72d",info:"#2196F3",warning:"#FB8C00",error:"#9D0000"},light:{primary:"#3CB371",accent:"#000000",secondary:"#f49123",success:"#008000",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",bg:"#006666",button:"#a470fd"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},202:function(t,e,n){"use strict";n(7),n(40),n(43);var o={components:{"skeleton-table-loader":function(){return n.e(3).then(n.bind(null,455))},"skeleton-datepicker-loader":function(){return n.e(1).then(n.bind(null,453))},"skeleton-summary-card":function(){return n.e(2).then(n.bind(null,454))}},data:function(){return{delay:3e3,footerprops:{"items-per-page-options":[5,10,20,30,40,50,10]}}},methods:{},computed:{msisdn:function(){return localStorage.getItem("msisdn")}}};n(0).a.mixin(o)},203:function(t,e,n){"use strict";var o=n(295),r=n(296),c=new(n.n(r).a)({isCompression:!1});e.a=function(t){var e=t.store;window.onNuxtReady((function(){Object(o.a)({paths:["banks","groups","authentication","users"],storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(e)}))}},204:function(t,e,n){"use strict";e.a=function(t,e){var n=t.$axios,o=(t.redirect,t.store);n.setHeader("Content-Type","application/json"),n.defaults.withCredentials=!0;var r=n.create({headers:{common:{Accept:"*/*","Content-Type":"application/json"}}});r.onRequest((function(t){o.getters.accessToken})),r.onError((function(t){t.response.data.defaultUserMessage,parseInt(t.response&&t.response.status)})),r.onResponseError((function(t){var code=parseInt(t.response&&t.response.status);if(404===code){var e=t.response.data.defaultUserMessage;Vue.toasted.error("".concat(e),{icon:"close-circle",position:"top-center",keepOnHover:!0,type:"error",theme:"bubble",duration:5e3})}if(401===code){t.response.data.error;o.dispatch("_logoutsession")}})),r.setBaseURL("https://eppg.ngazi.co.tz/api/v1"),e("api",r)}},205:function(t,e,n){"use strict";n(13),n(7),n(24),n(41),n(42);var o=n(0);o.a.filter("percentage",(function(t){return null==t?"":(t=t.toString())+".00%"})),o.a.filter("currency",(function(t){return null==t?"":(t=t.toString()).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})),o.a.filter("dateformat",(function(t){if(!t)return"";var e=new Date(t);return e.toDateString()+" ["+e.toLocaleTimeString("en-TZ")+"]"})),o.a.filter("simpledateformat",(function(t){return t?t[2]+"-"+t[1]+"-"+t[0]:""}))},282:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("21a3e434",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var o=n(466),r=n(470),c=n(449),l=n(471),f=n(469),d=n(468),m=n(467),h=(n(133),{name:"DefaultLayout",components:{"footer-component":n(195).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,messages:8,adv:7,notifications:1,profile:[{title:"Logout",icon:"logout-variant"}],menus:[{title:"Home",icon:"home-outline",to:"/"},{title:"Groups",icon:"account-group-outline",to:"/groups"},{title:"Members",icon:"account-group-outline",to:"/members"},{title:"Reports",icon:"file-chart",to:"/transactions"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",url:"logo.png",miniUrl:"logo.png"}},methods:{_checkSelectedAction:function(t){"Logout"===t.title&&this.$store.dispatch("_logoutsession")}}}),v=n(61),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[t._e(),t._v(" "),e(r.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"primary",flat:""}},[e("nuxt-link",{attrs:{to:"/"}},[e(c.a,{attrs:{size:"62"}},[e("img",{attrs:{src:"https://elirehema.github.io/meddash/doctor.png",alt:"Doctors"}})])],1),t._v(" "),e(m.a),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),e(d.a,[e(l.a,{staticClass:"ma-0",attrs:{height:"100%",fluid:""}},[e("nuxt")],1)],1),t._v(" "),e(f.a,{attrs:{absolute:!t.fixed,app:""}},[e("footer-component")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{FooterComponent:n(195).default})},299:function(t,e,n){"use strict";var o=n(466),r=n(468),c={data:function(){return{locales:["English","Kiswahili"],socials:[{icon:"mdi-twitter",link:"https://twitter.com/MarketGrid_?ref_src=twsrc%5Etfw"},{icon:"mdi-facebook",link:null},{icon:"mdi-linkedin",link:null},{icon:"mdi-instagram",link:null}]}},head:function(){return{title:"Login Page"}}},l=(n(416),n(61)),component=Object(l.a)(c,(function(){var t=this._self._c;return t(o.a,{staticClass:"app login"},[t(r.a,{staticClass:"transparent"},[t("nuxt")],1)],1)}),[],!1,null,"081f62a9",null);e.a=component.exports},309:function(t,e,n){n(310),t.exports=n(311)},355:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.app,n=(t.route,t.from,t.store);t.redirect;e.router.beforeEach((function(t,e,o){n.getters.isAuthenticated||"/signin"===t.path||"/verify"===t.path?o():n.dispatch("_logoutsession")})),e.router.afterEach((function(t,e){}))}},395:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("2a082f94",content,!0,{sourceMap:!1})},396:function(t,e,n){var o=n(32),r=n(397),c=n(398),l=n(399),f=o((function(i){return i[1]})),d=r(c),m=r(l);f.push([t.i,'@font-face{font-family:"Mulish";font-style:normal;src:url('+d+')}@font-face{font-family:"Inter";font-style:normal;src:url('+m+')}#__nuxt .app{font-family:"Inter",sans-serif}body #app,html{background:#f3f2f9!important;margin:0;overflow-x:hidden}a,body #app,div,h1,h2,h3,h4,h5,h6,html,p,p.primary--text.text-h6,span{-webkit-font-smoothing:antialiased;font-family:"Inter",sans-serif!important;font-style:normal!important}main{background-attachment:fixed;background-color:#f3f2f9;background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:inset 0 0 0 1000px rgba(63,203,98,0);zoom:90%}main.v-main.default{zoom:0}main.v-main.login{background:transparent;background-image:url(https://vicsguide.com/wp-content/uploads/2021/07/Best-loan-apps.jpg);background-repeat:no-repeat;background-size:cover;height:70%}@media screen and (-webkit-min-device-pixel-ratio:0){::i-block-chrome,main{zoom:80%}}.v-application--wrap{background:transparent;background-repeat:no-repeat;background-size:cover;height:70%}.v-application--wrap footer.v-footer{background-color:#fff!important;opacity:.65;text-decoration-color:#000}header,nav{zoom:90%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.badge{z-index:10!important}.apexcharts-toolbar{z-index:0!important}.vuetify-logo{animation:turn 3.5s ease-out 1s forwards;height:180px;transform:rotateY(560deg);width:180px}@keyframes turn{to{transform:rotateY(0deg)}}button span.v-btn__content{color:#fff;font-weight:700;text-decoration-color:#fff}.v-data-footer button span.v-btn__content{color:#a470fd!important;font-weight:700;text-decoration-color:#fff}td,th{padding:0;text-align:left}table,td,tr{border:none!important}tr:nth-child(2n){background-color:#e0f2f1}.v-input.search{align-content:flex-start!important;max-width:500px!important}',""]),f.locals={},t.exports=f},398:function(t,e,n){t.exports=n.p+"fonts/Mulish-Regular.2ca0688.ttf"},399:function(t,e,n){t.exports=n.p+"fonts/inter_variable.0c819cf.ttf"},416:function(t,e,n){"use strict";n(282)},417:function(t,e,n){var o=n(32)((function(i){return i[1]}));o.push([t.i,"#layout[data-v-081f62a9],#nuxt[data-v-081f62a9]{background-color:brown}",""]),o.locals={},t.exports=o},418:function(t,e,n){"use strict";n.r(e);e.default={namespaced:!1,state:function(){return{count:0}},mutations:{},actions:{},getters:{}}},419:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(71),{_fetchaccounts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=t.commit)("GET_ACCOUNTS"),n.next=4,e.$api.$get("/accounts").then((function(t){o("GET_ACCOUNTS_SUCCESS",t)})).catch((function(){o("GET_ACCOUNTS_ERROR")}));case 4:case"end":return n.stop()}}),n)})))()}});e.default={namespaced:!1,state:function(){return{accounts:null}},mutations:{GET_ACCOUNTS:function(t){t.showLoader=!0},GET_ACCOUNTS_FAILED:function(t){t.showLoader=!1},GET_ACCOUNTS_ERROR:function(t){t.showLoader=!1},GET_ACCOUNTS_SUCCESS:function(t,e){t.showLoader=!1,t.accounts=e}},actions:r,getters:{accounts:function(t){return t.accounts}}}},420:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(71),{AUTHENTICATE:function(t){t.showLoader=!0},AUTHENTICATE_FAILED:function(t){t.showLoader=!1},AUTHENTICATE_ERROR:function(t){t.showLoader=!1},AUTHENTICATE_SUCCESS:function(t,e){t.showLoader=!1,t.msisdn=e.msisdn,t.account=e,t.isAuthenticated=!0,t.accessToken=e.accessToken,localStorage.setItem("msisdn",e.msisdn),this.$router.push("/")},LOGOUT_SESSION:function(t){window.localStorage.clear(),sessionStorage.clear(),this.$router.push("/signin"),t.msisdn=null,t.authenticated=!1},UPDATPASSWORD_SUCCESS:function(t,e){t.showLoader=!1,t.authenticated=!0,0===e.responseCode&&this.$router.push("/")},UPDATPASSWORD_ERROR:function(t){t.showLoader=!1},SAVE_MSISDN:function(t,e){localStorage.setItem("msisdn",e.phoneNumber),t.msisdn=e.phoneNumber,this.$router.push("/verify")}}),c={_savemsisdn:function(t,e){(0,t.commit)("SAVE_MSISDN",e)},_authenticate:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(r=t.commit)("AUTHENTICATE"),o.next=4,n.$api.$post("/otp/verify",e).then((function(t){r("AUTHENTICATE_SUCCESS",t)})).catch((function(){r("AUTHENTICATE_ERROR")}));case 4:case"end":return o.stop()}}),o)})))()},_requestotp:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.commit,o.next=3,n.$api.$post("/otp",e).then((function(t){r("SAVE_MSISDN",e)})).catch((function(){r("UPDATPASSWORD_ERROR")}));case 3:case"end":return o.stop()}}),o)})))()},_logoutsession:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,n("LOGOUT_SESSION");case 3:case"end":return e.stop()}}),e)})))()}},l={msisdn:function(t){return t.msisdn},accessToken:function(t){return t.accessToken},isAuthenticated:function(t){return void 0!==localStorage.getItem("accessToken")}};e.default={namespaced:!1,state:function(){return{showLoader:Boolean,msisdn:null,account:null,authenticated:!1,accessToken:null}},mutations:r,actions:c,getters:l}},421:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(71),{_fetchgroups:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=t.commit)("GET_GROUPS"),n.next=4,e.$api.$get("/groups").then((function(t){o("GET_GROUPS_SUCCESS",t)})).catch((function(){o("GET_GROUPS_ERROR")}));case 4:case"end":return n.stop()}}),n)})))()}});e.default={namespaced:!1,state:function(){return{groups:null}},mutations:{GET_GROUPS:function(t){t.showLoader=!0},GET_GROUPS_FAILED:function(t){t.showLoader=!1},GET_GROUPS_ERROR:function(t){t.showLoader=!1},GET_GROUPS_SUCCESS:function(t,e){t.showLoader=!1,t.groups=e}},actions:r,getters:{groups:function(t){return t.groups}}}},422:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(71),{_fetchgroupusers:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(r=t.commit)("GET_USERS"),o.next=4,n.$api.$post("/users",e).then((function(t){r("GET_USERS_SUCCESS",t)})).catch((function(){r("GET_USERS_ERROR")}));case 4:case"end":return o.stop()}}),o)})))()},_addgroupuser:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.dispatch,o.next=3,n.$api.$post("/user",e).then((function(t){r("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return o.stop()}}),o)})))()},_editgroupuser:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.dispatch,o.next=3,n.$api.$put("/users",e).then((function(t){r("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return o.stop()}}),o)})))()},_deletegroupuser:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.dispatch,o.next=3,n.$api.$post("/users",e).then((function(t){r("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return o.stop()}}),o)})))()}});e.default={namespaced:!1,state:function(){return{users:null}},mutations:{GET_USERS:function(t){t.showLoader=!0},GET_USERS_FAILED:function(t){t.showLoader=!1},GET_USERS_ERROR:function(t){t.showLoader=!1},GET_USERS_SUCCESS:function(t,e){t.showLoader=!1,t.users=e.users}},actions:r,getters:{users:function(t){return t.users}}}},442:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us","btnaddservicename":"Add Service Name","btnaddbankaccount":"Add bank account","addgroupleader":"Add organization leader","btncancel":"Cancel","btnsave":"Save","btnyessure":"Yes I\'m Sure","btnnotsure":"No I\'m not","adduser":"Add user"},"menu":{"home":"Home"},"message":{"nodataavailable":"No Data available ...","aboutusmessage":"Nbs Administrator Dashboard Application is a Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","thanksmessage":"Thank you for developing with {{app_name}} and I look forward to bringing more exciting features in the future.","motto":"Making awesome stuffs","saveschedule":"By Clicking save this repayment schedule will be saved and can be re-calculated later. \\n\\n Are you sure you want to save this ? \\n\\n If yes Provide the Name below and click save button to save ","profileupdate":"By clicking *I Agree* you are agreeing to the Terms and Conditions and your profile informattions will be updated with a newly data you provide and your login infomations will also be updated. So you will be requested to re-login with new username if any. \\n\\n Do you agree ?"},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"title":{"groupservices":"organization Services"},"tab":{"appointments":"Appointments"},"search":{"searchreportbynameanddescription":"Search report by name/desc"},"breadcrumb":{"dashboard":"Dashboard"}}}')},443:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us"},"menu":{"dashboard":"Dashibodi"},"message":{"nodataavailable":"No Data available ..."},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"titles":{"settings":"Mipangilio"}}}')},84:function(t,e,n){"use strict";var o=n(447),r=n(465),c=n(471),l=n(464),f={computed:{screen:function(){return window.screen.height-200}}},d=n(61),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"fill-height",attrs:{fluid:""}},[e(l.a,{staticClass:"d-flex align-center justify-center",attrs:{align:"center",justify:"center","no-gutters":""}},[e(r.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"elevation-12 d-flex align-center",attrs:{outlined:"",elevation:"0",color:"grey lighten-3",height:t.screen}},[e(c.a,{staticClass:"fill-height",attrs:{fluid:""}},[e(l.a,{attrs:{"no-gutters":""}},[e(r.a,{staticClass:"d-flex justify-center align-center text-h1 gradient font-weight-bold primary--text",attrs:{cols:"12"}},[t._v("\n              Page not found\n            ")]),t._v(" "),e(r.a,{staticClass:"d-flex justify-center align-center font-weight-bold accent--text pt-4",attrs:{cols:"12"}},[t._v("\n              Sorry, then page you were looking for is not found\n            ")]),t._v(" "),e(r.a,{staticClass:"d-flex justify-center align-center mt-5",attrs:{cols:"12"}},[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n                Home page\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports}},[[309,14,6,15]]]);