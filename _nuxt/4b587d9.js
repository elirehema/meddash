(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{491:function(t,e,r){t.exports=r.p+"img/logo.9d4d709.png"},598:function(t,e,r){"use strict";r.r(e);var n=r(518),o=r(485),c=r(483),l=r(538),m=r(481),f=r(532),d=r(135),h=r(202),v=r(136),y=r(86),x=r(593),O=r(594),j=r(520),w=r(533),_=r(476),C=(r(14),r(10),r(18),r(19),r(11),r(4),r(13),r(2)),k=(r(27),r(53),r(133));function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var S={layout:"login",data:function(){return{loading:!1,form:{otp:null},title:"Market Grid : Login"}},head:function(){return{title:"Login Page"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(C.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(k.c)(["processing"])),created:function(){this.isAuthenticated&&this.$router.replace("/")},methods:{onFinish:function(t){this.loading=!0;var e={phoneNumber:localStorage.getItem("msisdn"),message:this.form.otp};this.$store.dispatch("_authenticate",e)},formSubmit:function(){var t={phoneNumber:localStorage.getItem("msisdn"),message:this.form.otp};this.$store.dispatch("_authenticate",t)}}},D=S,$=r(61),component=Object($.a)(D,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"form-box",on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e(m.a,{attrs:{height:"100%"}},[e("div",{staticClass:"d-flex align-center justify-center mt-15"},[e(w.a,{staticClass:"mt-0",attrs:{"no-gutters":""}},[e(l.a,{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"5"}},[e(h.a,{attrs:{color:"transparent"}},[e(v.a,{attrs:{"three-line":""}},[e(y.a,[e(y.c,{staticClass:"text-sm-h4 text-md-h3 text-lg-h2 font-weight-black red--text text-sm-center text-md-left"},[t._v("\n                  M-Koba\n                ")]),t._v(" "),e(y.b,{staticClass:"mt-10 text-sm-caption text-md-caption text-lg-h5 grey--text text-sm-center text-md-left"},[t._v("\n                  M-Koba self service web portal\n                ")])],1)],1)],1)],1),t._v(" "),e(_.a),t._v(" "),e(l.a,{staticClass:"mt-5 d-flex justify-center",attrs:{cols:"12",md:"5",lg:"4"}},[e(o.a,{staticClass:"py-12"},[e(c.b,{staticClass:"d-flex justify-center"},[e("img",{staticClass:"ml-2 dark-logo",attrs:{src:r(491),alt:"homepage",width:"100px"}})]),t._v(" "),e(c.a,[e(w.a,{staticClass:"mt-5",attrs:{"no-gutters":""}},[e(l.a,{staticClass:"mt-3",attrs:{cols:"12"}},[e("div",{staticClass:"ma-auto position-relative",staticStyle:{"max-width":"300px"}},[e(x.a,{attrs:{disabled:t.loading,length:"4"},on:{finish:t.onFinish},model:{value:t.form.otp,callback:function(e){t.$set(t.form,"otp",e)},expression:"form.otp"}}),t._v(" "),e(O.a,{attrs:{absolute:"",value:t.loading}},[e(j.a,{attrs:{indeterminate:"",color:"primary"}})],1)],1)]),t._v(" "),e(l.a,{staticClass:"mt-5 d-flex justify-center",attrs:{cols:"12"}},[e(n.a,{attrs:{block:"",type:"submit",color:"primary",dark:""}},[t._v("\n                    Verify\n                    "),e(d.a,{attrs:{right:""}},[t._v("\n                      mdi-arrow-right-bold\n                    ")])],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12"}})],1)],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);