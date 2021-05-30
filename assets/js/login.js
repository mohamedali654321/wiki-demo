/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["login"],{"./client/components/login.vue":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("div",{staticClass:"login",style:"background-image: url("+e.bgUrl+");"},[i("div",{staticClass:"login-sd"},[i("div",{staticClass:"d-flex mb-5"},[i("div",{staticClass:"login-logo"},[i("v-avatar",{attrs:{tile:"",size:"34"}},[i("v-img",{attrs:{src:e.logoUrl}})],1)],1),i("div",{staticClass:"login-title"},[i("div",{staticClass:"text-h6 grey--text text--darken-4"},[e._v(e._s(e.siteTitle))])])]),i("v-alert",{staticClass:"mb-0",attrs:{transition:"slide-y-reverse-transition",color:"red darken-2",tile:"",dark:"",dense:"",icon:"mdi-alert"},model:{value:e.errorShown,callback:function(t){e.errorShown=t},expression:"errorShown"}},[i("div",{staticClass:"body-2"},[e._v(e._s(e.errorMessage))])]),"login"===e.screen&&e.strategies.length>1?[i("div",{staticClass:"login-subtitle"},[i("div",{staticClass:"text-subtitle-1"},[e._v(e._s(e.$t("auth:selectAuthProvider")))])]),i("div",{staticClass:"login-list"},[i("v-list",{staticClass:"elevation-1 radius-7",attrs:{nav:"",light:""}},[i("v-list-item-group",{model:{value:e.selectedStrategyKey,callback:function(t){e.selectedStrategyKey=t},expression:"selectedStrategyKey"}},e._l(e.filteredStrategies,(function(t,n){return i("v-list-item",{key:t.key,attrs:{value:t.key,color:t.strategy.color}},[i("v-avatar",{staticClass:"mr-3",attrs:{tile:"",size:"24"},domProps:{innerHTML:e._s(t.strategy.icon)}}),i("span",{staticClass:"text-none"},[e._v(e._s(t.displayName))])],1)})),1)],1)],1)]:e._e(),"login"===e.screen&&e.selectedStrategy.strategy.useForm?[i("div",{staticClass:"login-subtitle"},[i("div",{staticClass:"text-subtitle-1"},[e._v(e._s(e.$t("auth:enterCredentials")))])]),i("div",{staticClass:"login-form"},[i("v-text-field",{ref:"iptEmail",attrs:{solo:"",flat:"","prepend-inner-icon":"mdi-clipboard-account","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.isUsernameEmail?e.$t("auth:fields.email"):e.$t("auth:fields.username"),type:e.isUsernameEmail?"email":"text",autocomplete:e.isUsernameEmail?"email":"username",light:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),i("v-text-field",{ref:"iptPassword",staticClass:"mt-2",attrs:{solo:"",flat:"","prepend-inner-icon":"mdi-form-textbox-password","background-color":"white",color:"blue darken-2","hide-details":"","append-icon":e.hidePassword?"mdi-eye-off":"mdi-eye",type:e.hidePassword?"password":"text",placeholder:e.$t("auth:fields.password"),autocomplete:"current-password",light:""},on:{"click:append":function(){return e.hidePassword=!e.hidePassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("v-btn",{staticClass:"mt-2 text-none",attrs:{width:"100%",large:"",color:"blue darken-2",dark:"",loading:e.isLoading},on:{click:e.login}},[e._v(e._s(e.$t("auth:actions.login")))]),i("div",{staticClass:"text-center mt-5"},[i("v-btn",{staticClass:"text-none",attrs:{text:"",rounded:"",color:"grey darken-3",href:"#forgot"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.forgotPassword(t)}}},[i("div",{staticClass:"caption"},[e._v(e._s(e.$t("auth:forgotPasswordLink")))])]),"local"===e.selectedStrategyKey&&e.selectedStrategy.selfRegistration?i("v-btn",{staticClass:"text-none",attrs:{color:"indigo darken-2",text:"",rounded:"",href:"/register"}},[i("div",{staticClass:"caption"},[e._v(e._s(e.$t("auth:switchToRegister.link")))])]):e._e()],1)],1)]:e._e(),"forgot"===e.screen?[i("div",{staticClass:"login-subtitle"},[i("div",{staticClass:"text-subtitle-1"},[e._v(e._s(e.$t("auth:forgotPasswordTitle")))])]),i("div",{staticClass:"login-info"},[e._v(e._s(e.$t("auth:forgotPasswordSubtitle")))]),i("div",{staticClass:"login-form"},[i("v-text-field",{ref:"iptForgotPwdEmail",attrs:{solo:"",flat:"","prepend-inner-icon":"mdi-clipboard-account","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.$t("auth:fields.email"),type:"email",autocomplete:"email",light:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),i("v-btn",{staticClass:"mt-2 text-none",attrs:{width:"100%",large:"",color:"blue darken-2",dark:"",loading:e.isLoading},on:{click:e.forgotPasswordSubmit}},[e._v(e._s(e.$t("auth:sendResetPassword")))]),i("div",{staticClass:"text-center mt-5"},[i("v-btn",{staticClass:"text-none",attrs:{text:"",rounded:"",color:"grey darken-3",href:"#forgot"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.screen="login"}}},[i("div",{staticClass:"caption"},[e._v(e._s(e.$t("auth:forgotPasswordCancel")))])])],1)],1)]:e._e(),"changePwd"===e.screen?[i("div",{staticClass:"login-subtitle"},[i("div",{staticClass:"text-subtitle-1"},[e._v(e._s(e.$t("auth:changePwd.subtitle")))])]),i("div",{staticClass:"login-form"},[i("v-text-field",{ref:"iptNewPassword",staticClass:"mt-2",attrs:{type:"password",solo:"",flat:"","prepend-inner-icon":"mdi-form-textbox-password","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.$t("auth:changePwd.newPasswordPlaceholder"),autocomplete:"new-password",light:""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}},[i("password-strength",{attrs:{slot:"progress"},slot:"progress",model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),i("v-text-field",{staticClass:"mt-2",attrs:{type:"password",solo:"",flat:"","prepend-inner-icon":"mdi-form-textbox-password","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.$t("auth:changePwd.newPasswordVerifyPlaceholder"),autocomplete:"new-password",light:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changePassword(t)}},model:{value:e.newPasswordVerify,callback:function(t){e.newPasswordVerify=t},expression:"newPasswordVerify"}}),i("v-btn",{staticClass:"mt-2 text-none",attrs:{width:"100%",large:"",color:"blue darken-2",dark:"",loading:e.isLoading},on:{click:e.changePassword}},[e._v(e._s(e.$t("auth:changePwd.proceed")))])],1)]:e._e()],2)]),i("v-dialog",{attrs:{"max-width":"500",persistent:""},model:{value:e.isTFAShown,callback:function(t){e.isTFAShown=t},expression:"isTFAShown"}},[i("v-card",[i("div",{staticClass:"login-tfa text-center pa-5 grey--text text--darken-3"},[i("img",{attrs:{src:"_assets/svg/icon-pin-pad.svg"}}),i("div",{staticClass:"subtitle-2"},[e._v(e._s(e.$t("auth:tfaFormTitle")))]),i("v-text-field",{ref:"iptTFA",staticClass:"login-tfa-field mt-2",attrs:{solo:"",flat:"","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.$t("auth:tfa.placeholder"),autocomplete:"one-time-code",light:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.verifySecurityCode(!1)}},model:{value:e.securityCode,callback:function(t){e.securityCode=t},expression:"securityCode"}}),i("v-btn",{staticClass:"mt-2 text-none",attrs:{width:"100%",large:"",color:"blue darken-2",dark:"",loading:e.isLoading},on:{click:function(t){return e.verifySecurityCode(!1)}}},[e._v(e._s(e.$t("auth:tfa.verifyToken")))])],1)])],1),i("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:e.isTFASetupShown,callback:function(t){e.isTFASetupShown=t},expression:"isTFASetupShown"}},[i("v-card",[i("div",{staticClass:"login-tfa text-center pa-5 grey--text text--darken-3"},[i("div",{staticClass:"subtitle-1 primary--text"},[e._v(e._s(e.$t("auth:tfaSetupTitle")))]),i("v-divider",{staticClass:"my-5"}),i("div",{staticClass:"subtitle-2"},[e._v(e._s(e.$t("auth:tfaSetupInstrFirst")))]),i("div",{staticClass:"caption"},[e._v("("),i("a",{attrs:{href:"https://authy.com/",target:"_blank",noopener:""}},[e._v("Authy")]),e._v(", "),i("a",{attrs:{href:"https://support.google.com/accounts/answer/1066447",target:"_blank",noopener:""}},[e._v("Google Authenticator")]),e._v(", "),i("a",{attrs:{href:"https://www.microsoft.com/en-us/account/authenticator",target:"_blank",noopener:""}},[e._v("Microsoft Authenticator")]),e._v(", etc.)")]),e.isTFASetupShown?i("div",{staticClass:"login-tfa-qr mt-5",domProps:{innerHTML:e._s(e.tfaQRImage)}}):e._e(),i("div",{staticClass:"subtitle-2 mt-5"},[e._v(e._s(e.$t("auth:tfaSetupInstrSecond")))]),i("v-text-field",{ref:"iptTFASetup",staticClass:"login-tfa-field mt-2",attrs:{solo:"",flat:"","background-color":"white",color:"blue darken-2","hide-details":"",placeholder:e.$t("auth:tfa.placeholder"),autocomplete:"one-time-code",light:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.verifySecurityCode(!0)}},model:{value:e.securityCode,callback:function(t){e.securityCode=t},expression:"securityCode"}}),i("v-btn",{staticClass:"mt-2 text-none",attrs:{width:"100%",large:"",color:"blue darken-2",dark:"",loading:e.isLoading},on:{click:function(t){return e.verifySecurityCode(!0)}}},[e._v(e._s(e.$t("auth:tfa.verifyToken")))])],1)])],1),i("loader",{attrs:{color:e.loaderColor,title:e.loaderTitle,subtitle:e.$t("auth:pleaseWait")},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),i("notify",{staticStyle:{"padding-top":"64px"}})],1)};n._withStripped=!0;var s=i("./node_modules/lodash/sortBy.js"),a=i.n(s),o=i("./node_modules/lodash/delay.js"),r=i.n(o),d=i("./node_modules/lodash/get.js"),l=i.n(d),c=i("./node_modules/lodash/has.js"),u=i.n(c),m=i("./node_modules/lodash/find.js"),g=i.n(m),v=i("./node_modules/lodash/head.js"),k=i.n(v),h=i("./node_modules/lodash/reject.js"),p=i.n(h),y=i("./node_modules/js-cookie/src/js.cookie.js"),f=i.n(y),w=i("./node_modules/vuex-pathify/dist/vuex-pathify.js"),S={i18nOptions:{namespaces:"auth"},props:{bgUrl:{type:String,default:""},hideLocal:{type:Boolean,default:!1},changePwdContinuationToken:{type:String,default:null}},data:()=>({error:!1,strategies:[],selectedStrategyKey:"unselected",selectedStrategy:{key:"unselected",strategy:{useForm:!1,usernameType:"email"}},screen:"login",username:"",password:"",hidePassword:!0,securityCode:"",continuationToken:"",isLoading:!1,loaderColor:"grey darken-4",loaderTitle:"Working...",isShown:!1,newPassword:"",newPasswordVerify:"",isTFAShown:!1,isTFASetupShown:!1,tfaQRImage:"",errorShown:!1,errorMessage:""}),computed:{activeModal:Object(w.sync)("editor/activeModal"),siteTitle:()=>siteConfig.title,isSocialShown(){return this.strategies.length>1},logoUrl:()=>siteConfig.logoUrl,filteredStrategies(){const e=new URLSearchParams(window.location.search);return this.hideLocal&&!e.has("all")?p()(this.strategies,["key","local"]):this.strategies},isUsernameEmail(){return"email"===this.selectedStrategy.strategy.usernameType}},watch:{filteredStrategies(e,t){k()(e).strategy.useForm&&(this.selectedStrategyKey=k()(e).key)},selectedStrategyKey(e,t){this.selectedStrategy=g()(this.strategies,["key",e]),"changePwd"!==this.screen&&(this.screen="login",this.selectedStrategy.strategy.useForm?this.$nextTick(()=>{this.$refs.iptEmail.focus()}):(this.isLoading=!0,window.location.assign("/login/"+e)))}},mounted(){this.isShown=!0,this.changePwdContinuationToken&&(this.screen="changePwd",this.continuationToken=this.changePwdContinuationToken)},methods:{async login(){if(this.errorShown=!1,this.username.length<2)this.errorMessage=this.$t("auth:invalidEmailUsername"),this.errorShown=!0,this.$refs.iptEmail.focus();else if(this.password.length<2)this.errorMessage=this.$t("auth:invalidPassword"),this.errorShown=!0,this.$refs.iptPassword.focus();else{this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:signingIn"),this.isLoading=!0;try{const e=await this.$apollo.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"Argument",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustChangePwd"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustProvideTFA"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustSetupTFA"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"continuationToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"redirect"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tfaQRImage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:678,source:{body:"\n              mutation($username: String!, $password: String!, $strategy: String!) {\n                authentication {\n                  login(username: $username, password: $password, strategy: $strategy) {\n                    responseResult {\n                      succeeded\n                      errorCode\n                      slug\n                      message\n                    }\n                    jwt\n                    mustChangePwd\n                    mustProvideTFA\n                    mustSetupTFA\n                    continuationToken\n                    redirect\n                    tfaQRImage\n                  }\n                }\n              }\n            ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{username:this.username,password:this.password,strategy:this.selectedStrategy.key}});if(!u()(e,"data.authentication.login"))throw new Error(this.$t("auth:genericError"));{const t=l()(e,"data.authentication.login",{});if(!0!==t.responseResult.succeeded)throw new Error(t.responseResult.message);this.handleLoginResponse(t)}}catch(e){console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"}),this.isLoading=!1}}},async verifySecurityCode(e=!1){if(6!==this.securityCode.length)this.$store.commit("showNotification",{style:"red",message:"Enter a valid security code.",icon:"alert"}),e?this.$refs.iptTFASetup.focus():this.$refs.iptTFA.focus();else{this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:signingIn"),this.isLoading=!0;try{const t=await this.$apollo.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"securityCode"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"setup"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginTFA"},arguments:[{kind:"Argument",name:{kind:"Name",value:"continuationToken"},value:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}}},{kind:"Argument",name:{kind:"Name",value:"securityCode"},value:{kind:"Variable",name:{kind:"Name",value:"securityCode"}}},{kind:"Argument",name:{kind:"Name",value:"setup"},value:{kind:"Variable",name:{kind:"Name",value:"setup"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustChangePwd"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"continuationToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"redirect"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:756,source:{body:"\n              mutation(\n                $continuationToken: String!\n                $securityCode: String!\n                $setup: Boolean\n                ) {\n                authentication {\n                  loginTFA(\n                    continuationToken: $continuationToken\n                    securityCode: $securityCode\n                    setup: $setup\n                    ) {\n                    responseResult {\n                      succeeded\n                      errorCode\n                      slug\n                      message\n                    }\n                    jwt\n                    mustChangePwd\n                    continuationToken\n                    redirect\n                  }\n                }\n              }\n            ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{continuationToken:this.continuationToken,securityCode:this.securityCode,setup:e}});if(!u()(t,"data.authentication.loginTFA"))throw new Error(this.$t("auth:genericError"));{let i=l()(t,"data.authentication.loginTFA",{});if(!0!==i.responseResult.succeeded)throw e||(this.isTFAShown=!1),new Error(i.responseResult.message);this.handleLoginResponse(i)}}catch(e){console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"}),this.isLoading=!1}}},async changePassword(){this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:changePwd.loading"),this.isLoading=!0;try{const e=await this.$apollo.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newPassword"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginChangePassword"},arguments:[{kind:"Argument",name:{kind:"Name",value:"continuationToken"},value:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}}},{kind:"Argument",name:{kind:"Name",value:"newPassword"},value:{kind:"Variable",name:{kind:"Name",value:"newPassword"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"continuationToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"redirect"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:618,source:{body:"\n            mutation (\n              $continuationToken: String!\n              $newPassword: String!\n            ) {\n              authentication {\n                loginChangePassword (\n                  continuationToken: $continuationToken\n                  newPassword: $newPassword\n                ) {\n                  responseResult {\n                    succeeded\n                    errorCode\n                    slug\n                    message\n                  }\n                  jwt\n                  continuationToken\n                  redirect\n                }\n              }\n            }\n          ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{continuationToken:this.continuationToken,newPassword:this.newPassword}});if(!u()(e,"data.authentication.loginChangePassword"))throw new Error(this.$t("auth:genericError"));{let t=l()(e,"data.authentication.loginChangePassword",{});if(!0!==t.responseResult.succeeded)throw new Error(t.responseResult.message);this.handleLoginResponse(t)}}catch(e){console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"}),this.isLoading=!1}},forgotPassword(){this.screen="forgot",this.$nextTick(()=>{this.$refs.iptForgotPwdEmail.focus()})},async forgotPasswordSubmit(){this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:forgotPasswordLoading"),this.isLoading=!0;try{const e=await this.$apollo.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"forgotPassword"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:412,source:{body:"\n            mutation (\n              $email: String!\n            ) {\n              authentication {\n                forgotPassword (\n                  email: $email\n                ) {\n                  responseResult {\n                    succeeded\n                    errorCode\n                    slug\n                    message\n                  }\n                }\n              }\n            }\n          ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{email:this.username}});if(!u()(e,"data.authentication.forgotPassword.responseResult"))throw new Error(this.$t("auth:genericError"));{let t=l()(e,"data.authentication.forgotPassword.responseResult",{});if(!0!==t.succeeded)throw new Error(t.message);this.$store.commit("showNotification",{style:"success",message:this.$t("auth:forgotPasswordSuccess"),icon:"email"}),this.screen="login"}}catch(e){console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"})}this.isLoading=!1},handleLoginResponse(e){this.continuationToken=e.continuationToken,!0===e.mustChangePwd?(this.screen="changePwd",this.$nextTick(()=>{this.$refs.iptNewPassword.focus()}),this.isLoading=!1):!0===e.mustProvideTFA?(this.securityCode="",this.isTFAShown=!0,setTimeout(()=>{this.$refs.iptTFA.focus()},500),this.isLoading=!1):!0===e.mustSetupTFA?(this.securityCode="",this.isTFASetupShown=!0,this.tfaQRImage=e.tfaQRImage,setTimeout(()=>{this.$refs.iptTFASetup.focus()},500),this.isLoading=!1):(this.loaderColor="green darken-1",this.loaderTitle=this.$t("auth:loginSuccess"),f.a.set("jwt",e.jwt,{expires:365}),r()(()=>{const t=f.a.get("loginRedirect");"/"===t&&e.redirect?(f.a.remove("loginRedirect"),window.location.replace(e.redirect)):t?(f.a.remove("loginRedirect"),window.location.replace(t)):e.redirect?window.location.replace(e.redirect):window.location.replace("/")},1e3))}},apollo:{strategies:{query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"activeStrategies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"enabledOnly"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"strategy"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"useForm"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"usernameType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selfRegistration"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:403,source:{body:"\n        {\n          authentication {\n            activeStrategies(enabledOnly: true) {\n              key\n              strategy {\n                key\n                logo\n                color\n                icon\n                useForm\n                usernameType\n              }\n              displayName\n              order\n              selfRegistration\n            }\n          }\n        }\n      ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},update:e=>a()(e.authentication.activeStrategies,["order"]),watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"login-strategies-refresh")}}}},b=(i("./client/components/login.vue?vue&type=style&index=0&lang=scss&"),i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),N=i("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),_=i.n(N),C=i("./node_modules/vuetify/lib/components/VAlert/VAlert.js"),T=i("./node_modules/vuetify/lib/components/VApp/VApp.js"),F=i("./node_modules/vuetify/lib/components/VAvatar/VAvatar.js"),x=i("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),P=i("./node_modules/vuetify/lib/components/VCard/VCard.js"),j=i("./node_modules/vuetify/lib/components/VDialog/VDialog.js"),$=i("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),V=i("./node_modules/vuetify/lib/components/VImg/VImg.js"),A=i("./node_modules/vuetify/lib/components/VList/VList.js"),L=i("./node_modules/vuetify/lib/components/VList/VListItem.js"),R=i("./node_modules/vuetify/lib/components/VList/VListItemGroup.js"),D=i("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),E=Object(b.a)(S,n,[],!1,null,null,null);_()(E,{VAlert:C.a,VApp:T.a,VAvatar:F.a,VBtn:x.a,VCard:P.a,VDialog:j.a,VDivider:$.a,VImg:V.a,VList:A.a,VListItem:L.a,VListItemGroup:R.a,VTextField:D.a}),E.options.__file="client/components/login.vue";t.default=E.exports},"./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,t,i){"use strict";i("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&")},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,t,i){var n=i("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=i("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};n(s,a);e.exports=s.locals||{}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,t,i){}}]);