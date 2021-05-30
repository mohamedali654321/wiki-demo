/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["source"],{"./client/components/admin/admin-dev-flags.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{attrs:{fluid:"","grid-list-lg":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("div",{staticClass:"admin-header"},[t("img",{staticStyle:{width:"80px"},attrs:{src:"/_assets/svg/icon-console.svg",alt:"Developer Tools"}}),t("div",{staticClass:"admin-header-title"},[t("div",{staticClass:"headline primary--text"},[e._v("Developer Tools")]),t("div",{staticClass:"subtitle-1 grey--text"},[e._v("Flags")])]),t("v-spacer"),t("v-btn",{attrs:{color:"success",depressed:"",large:""},on:{click:e.save}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),t("span",[e._v(e._s(e.$t("common:actions.apply")))])],1)],1),t("v-card",{staticClass:"mt-3",class:e.$vuetify.theme.dark?"grey darken-3-d5":"white grey--text text--darken-3"},[t("v-alert",{attrs:{color:"red",value:!0,icon:"mdi-alert",dark:"",prominent:""}},[t("span",[e._v("Do NOT enable these flags unless you know what you're doing!")]),t("div",{staticClass:"caption"},[e._v("Doing so may result in data loss or broken installation!")])]),t("v-card-text",[t("v-switch",{staticClass:"mt-3",attrs:{color:"primary",hint:"Log detailed debug info on LDAP/AD login attempts.","persistent-hint":"",label:"LDAP Debug",inset:""},model:{value:e.flags.ldapdebug,callback:function(s){e.$set(e.flags,"ldapdebug",s)},expression:"flags.ldapdebug"}}),t("v-divider",{staticClass:"mt-3"}),t("v-switch",{staticClass:"mt-3",attrs:{color:"red",hint:"Log all queries made to the database to console.","persistent-hint":"",label:"SQL Query Logging",inset:""},model:{value:e.flags.sqllog,callback:function(s){e.$set(e.flags,"sqllog",s)},expression:"flags.sqllog"}})],1)],1)],1)],1)],1)};o._withStripped=!0;var n=t("./node_modules/lodash/set.js"),i=t.n(n),a=t("./node_modules/lodash/transform.js"),l=t.n(a),d=t("./client/graph/admin/dev/dev-query-flags.gql"),r=t.n(d),c=t("./client/graph/admin/dev/dev-mutation-save-flags.gql"),u=t.n(c),m={data:()=>({flags:{sqllog:!1}}),methods:{async save(){try{await this.$apollo.mutate({mutation:u.a,variables:{flags:l()(this.flags,(e,s,t)=>{e.push({key:t,value:s})},[])},watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"admin-dev-flags-update")}}),this.$store.commit("showNotification",{style:"success",message:"Flags applied successfully.",icon:"check"})}catch(e){this.$store.commit("pushGraphError",e)}}},apollo:{flags:{query:r.a,fetchPolicy:"network-only",update:e=>l()(e.system.flags,(e,s)=>{i()(e,s.key,s.value)},{}),watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"admin-dev-flags-refresh")}}}},v=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),f=t.n(p),_=t("./node_modules/vuetify/lib/components/VAlert/VAlert.js"),g=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),b=t("./node_modules/vuetify/lib/components/VCard/VCard.js"),y=t("./node_modules/vuetify/lib/components/VCard/index.js"),h=t("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),j=t("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),k=t("./node_modules/vuetify/lib/components/VGrid/VFlex.js"),V=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),x=t("./node_modules/vuetify/lib/components/VGrid/VLayout.js"),C=t("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),S=t("./node_modules/vuetify/lib/components/VSwitch/VSwitch.js"),w=Object(v.a)(m,o,[],!1,null,null,null);f()(w,{VAlert:_.a,VBtn:g.a,VCard:b.a,VCardText:y.b,VContainer:h.a,VDivider:j.a,VFlex:k.a,VIcon:V.a,VLayout:x.a,VSpacer:C.a,VSwitch:S.a}),w.options.__file="client/components/admin/admin-dev-flags.vue";s.default=w.exports},"./client/components/editor/editor-redirect.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"editor-redirect"},[t("div",{staticClass:"editor-redirect-main"},[t("div",{staticClass:"editor-redirect-editor"},[t("v-container",{staticClass:"px-2 pt-1",attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",lg:"8","offset-lg":"2",xl:"6","offset-xl":"3"}},[t("v-card",{staticClass:"pt-2"},[t("v-card-text",[t("div",{staticClass:"pb-1"},[t("div",{staticClass:"subtitle-2 primary--text"},[e._v("When a user reaches this page")]),t("div",{staticClass:"caption grey--text text--darken-1"},[e._v("and matches one of these rules...")])]),t("v-timeline",{attrs:{dense:""}},[t("v-slide-x-reverse-transition",{attrs:{group:"","hide-on-leave":""}},[t("v-timeline-item",{key:"cond-add-new",attrs:{"hide-dot":""}},[t("v-btn",{attrs:{color:"primary"},on:{click:function(e){}}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),t("span",[e._v("Add Conditional Rule")])],1)],1),t("v-timeline-item",{key:"cond-none",attrs:{small:"",color:"grey"}},[t("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[t("v-card-text",[t("div",{staticClass:"body-2"},[t("strong",[e._v("No conditional rule")])]),t("em",[e._v("Add conditional rules to direct users to a different page based on their group.")])])],1)],1),t("v-timeline-item",{key:"cond-rule-1",attrs:{small:"",color:"primary"}},[t("v-card",{staticClass:"blue-grey lighten-5",attrs:{flat:""}},[t("v-card-text",[t("div",{staticClass:"d-flex align-center"},[t("div",{staticClass:"body-2"},[t("strong",[e._v("User is a member of any of these groups:")])]),t("v-select",{staticClass:"ml-3",attrs:{color:"primary",items:e.groups,"item-text":"name","item-value":"id",multiple:"",solo:"",flat:"","hide-details":"",dense:"",chips:"","small-chips":""}})],1),t("v-divider",{staticClass:"my-3"}),t("div",{staticClass:"d-flex align-center"},[t("div",{staticClass:"body-2 mr-3"},[e._v("then redirect to")]),t("v-btn-toggle",{staticClass:"mr-3",attrs:{mandatory:"",color:"primary",borderless:"",dense:""},model:{value:e.fallbackMode,callback:function(s){e.fallbackMode=s},expression:"fallbackMode"}},[t("v-btn",{staticClass:"text-none",attrs:{value:"page"}},[e._v("Page")]),t("v-btn",{staticClass:"text-none",attrs:{value:"url"}},[e._v("External URL")])],1),"page"===e.fallbackMode?t("v-btn",{staticClass:"mr-3",attrs:{color:"primary"}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-magnify")]),t("span",[e._v("Select Page...")])],1):e._e(),"url"===e.fallbackMode?t("v-text-field",{attrs:{label:"External URL",outlined:"",hint:"Required - Title of the API","hide-details":"",dense:"","single-line":""},model:{value:e.fallbackUrl,callback:function(s){e.fallbackUrl=s},expression:"fallbackUrl"}}):e._e()],1)],1)],1)],1)],1)],1),t("v-divider",{staticClass:"mb-5"}),t("div",{staticClass:"subtitle-2 primary--text"},[e._v("Otherwise, redirect to...")]),t("div",{staticClass:"caption grey--text text--darken-1 pb-2"},[e._v("This fallback rule is mandatory and used if none of the conditional rules above applies.")]),t("div",{staticClass:"d-flex align-center"},[t("v-btn-toggle",{staticClass:"mr-3",attrs:{mandatory:"",color:"primary",borderless:"",dense:""},model:{value:e.fallbackMode,callback:function(s){e.fallbackMode=s},expression:"fallbackMode"}},[t("v-btn",{staticClass:"text-none",attrs:{value:"page"}},[e._v("Page")]),t("v-btn",{staticClass:"text-none",attrs:{value:"url"}},[e._v("External URL")])],1),"page"===e.fallbackMode?t("v-btn",{staticClass:"mr-3",attrs:{color:"primary"}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-magnify")]),t("span",[e._v("Select Page...")])],1):e._e(),"url"===e.fallbackMode?t("v-text-field",{attrs:{label:"External URL",outlined:"",hint:"Required - Title of the API","hide-details":"",dense:"","single-line":""},model:{value:e.fallbackUrl,callback:function(s){e.fallbackUrl=s},expression:"fallbackUrl"}}):e._e()],1)],1)],1)],1)],1)],1)],1)]),t("v-system-bar",{staticClass:"editor-redirect-sysbar",attrs:{dark:"",status:"",color:"grey darken-3"}},[t("div",{staticClass:"caption editor-redirect-sysbar-locale"},[e._v(e._s(e.locale.toUpperCase()))]),t("div",{staticClass:"caption px-3"},[e._v("/"+e._s(e.path))]),e.$vuetify.breakpoint.mdAndUp?[t("v-spacer"),t("div",{staticClass:"caption"},[e._v("Redirect")]),t("v-spacer"),t("div",{staticClass:"caption"},[e._v("0 rules")])]:e._e()],2)],1)};o._withStripped=!0;var n=t("./node_modules/vuex-pathify/dist/vuex-pathify.js"),i={data:()=>({fallbackMode:"page",fallbackUrl:"https://"}),computed:{isMobile(){return this.$vuetify.breakpoint.smAndDown},locale:Object(n.get)("page/locale"),path:Object(n.get)("page/path"),mode:Object(n.get)("editor/mode"),activeModal:Object(n.sync)("editor/activeModal")},methods:{},mounted(){this.$store.set("editor/editorKey","redirect"),"create"===this.mode&&this.$store.set("editor/content","<h1>Title</h1>\n\n<p>Some text here</p>")},apollo:{groups:{query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"groups"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"list"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:127,source:{body:"\n        {\n          groups {\n            list {\n              id\n              name\n            }\n          }\n        }\n      ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},fetchPolicy:"network-only",update:e=>e.groups.list,watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"editor-redirect-groups")}}}},a=(t("./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),d=t.n(l),r=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=t("./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js"),u=t("./node_modules/vuetify/lib/components/VCard/VCard.js"),m=t("./node_modules/vuetify/lib/components/VCard/index.js"),v=t("./node_modules/vuetify/lib/components/VGrid/VCol.js"),p=t("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),f=t("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),_=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),g=t("./node_modules/vuetify/lib/components/VGrid/VRow.js"),b=t("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),y=t("./node_modules/vuetify/lib/components/transitions/index.js"),h=t("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),j=t("./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js"),k=t("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),V=t("./node_modules/vuetify/lib/components/VTimeline/VTimeline.js"),x=t("./node_modules/vuetify/lib/components/VTimeline/VTimelineItem.js"),C=Object(a.a)(i,o,[],!1,null,null,null);d()(C,{VBtn:r.a,VBtnToggle:c.a,VCard:u.a,VCardText:m.b,VCol:v.a,VContainer:p.a,VDivider:f.a,VIcon:_.a,VRow:g.a,VSelect:b.a,VSlideXReverseTransition:y.e,VSpacer:h.a,VSystemBar:j.a,VTextField:k.a,VTimeline:V.a,VTimelineItem:x.a}),C.options.__file="client/components/editor/editor-redirect.vue";s.default=C.exports},"./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){"use strict";t("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&")},"./client/components/new-page.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",[t("div",{staticClass:"newpage"},[t("div",{staticClass:"newpage-content"},[t("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-file.svg",alt:"Not Found"}}),t("div",{staticClass:"headline"},[e._v(e._s(e.$t("newpage.title")))]),t("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("newpage.subtitle")))]),t("v-btn",{staticClass:"mt-5",attrs:{href:"/e/"+e.locale+"/"+e.path,"x-large":""}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),t("span",[e._v(e._s(e.$t("newpage.create")))])],1),t("v-btn",{staticClass:"mt-5",attrs:{color:"purple lighten-3",href:"javascript:window.history.go(-1);",outlined:""}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),t("span",[e._v(e._s(e.$t("newpage.goback")))])],1)],1)])])};o._withStripped=!0;var n={props:{locale:{type:String,default:"en"},path:{type:String,default:"home"}},data:()=>({})},i=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=t.n(a),d=t("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(i.a)(n,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/new-page.vue";s.default=u.exports},"./client/components/source.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",{staticClass:"source",attrs:{dark:e.$vuetify.theme.dark}},[t("nav-header"),t("v-content",[t("v-toolbar",{attrs:{color:"primary",dark:""}},[e.versionId>0?t("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSourceVersion",tag:"div"}},[t("strong",{attrs:{place:"date",title:e.$options.filters.moment(e.versionDate,"LLL")}},[e._v(e._s(e._f("moment")(e.versionDate,"lll")))]),t("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]):t("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSource",tag:"div"}},[t("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]),e.$vuetify.breakpoint.mdAndUp?[t("v-spacer"),t("div",{staticClass:"caption blue--text text--lighten-3"},[e._v(e._s(e.$t("common:page.id",{id:e.pageId})))]),e.versionId>0?t("div",{staticClass:"caption blue--text text--lighten-3 ml-4"},[e._v(e._s(e.$t("common:page.versionId",{id:e.versionId})))]):e._e(),e.versionId>0?t("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goHistory}},[t("v-icon",[e._v("mdi-history")])],1):e._e(),t("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goLive}},[e._v(e._s(e.$t("common:page.returnNormalView")))])]:e._e()],2),t("v-card",{attrs:{tile:""}},[t("v-card-text",[t("v-card",{staticClass:"grey radius-7",class:e.$vuetify.theme.dark?"darken-4":"lighten-4",attrs:{flat:""}},[t("v-card-text",[t("pre",[t("code",[e._t("default")],2)])])],1)],1)],1)],1),t("nav-footer"),t("notify"),t("search-results")],1)};o._withStripped=!0;var n=t("./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&").a,i=(t("./client/components/source.vue?vue&type=style&index=0&lang=scss&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=t.n(a),d=t("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=t("./node_modules/vuetify/lib/components/VCard/VCard.js"),u=t("./node_modules/vuetify/lib/components/VCard/index.js"),m=t("./node_modules/vuetify/lib/components/VContent/VContent.js"),v=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),p=t("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),f=t("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),_=Object(i.a)(n,o,[],!1,null,null,null);l()(_,{VApp:d.a,VBtn:r.a,VCard:c.a,VCardText:u.b,VContent:m.a,VIcon:v.a,VSpacer:p.a,VToolbar:f.a}),_.options.__file="client/components/source.vue";s.default=_.exports},"./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){"use strict";t("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&")},"./client/components/unauthorized.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",[t("div",{staticClass:"unauthorized"},[t("div",{staticClass:"unauthorized-content"},[t("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-shield.svg",alt:"Unauthorized"}}),t("div",{staticClass:"headline"},[e._v(e._s(e.$t("unauthorized.title")))]),t("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("unauthorized.action."+e.action)))]),t("v-btn",{staticClass:"mt-5",attrs:{href:"/login","x-large":""}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),t("span",[e._v(e._s(e.$t("unauthorized.login")))])],1),t("v-btn",{staticClass:"mt-5",attrs:{color:"red lighten-4",href:"javascript:window.history.go(-1);",outlined:""}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),t("span",[e._v(e._s(e.$t("unauthorized.goback")))])],1)],1)])])};o._withStripped=!0;var n={props:{action:{type:String,default:"view"}},data:()=>({})},i=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=t.n(a),d=t("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(i.a)(n,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/unauthorized.vue";s.default=u.exports},"./client/graph/admin/dev/dev-mutation-save-flags.gql":function(e,s){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"flags"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"SystemFlagInput"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"system"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateFlags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"flags"},value:{kind:"Variable",name:{kind:"Name",value:"flags"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:208}};t.loc.source={body:"mutation (\n  $flags: [SystemFlagInput]!\n) {\n  system {\n    updateFlags(\n      flags: $flags\n    ) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};t.definitions.forEach((function(e){if(e.name){var s=new Set;!function e(s,t){if("FragmentSpread"===s.kind)t.add(s.name.value);else if("VariableDefinition"===s.kind){var o=s.type;"NamedType"===o.kind&&t.add(o.name.value)}s.selectionSet&&s.selectionSet.selections.forEach((function(s){e(s,t)})),s.variableDefinitions&&s.variableDefinitions.forEach((function(s){e(s,t)})),s.definitions&&s.definitions.forEach((function(s){e(s,t)}))}(e,s),o[e.name.value]=s}})),e.exports=t,t.documentId="052a8e4029d6854633f789f8b009cac356347038739a73028b70173840a4800e"},"./client/graph/admin/dev/dev-query-flags.gql":function(e,s){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"system"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:59}};t.loc.source={body:"{\n  system {\n    flags {\n      key\n      value\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};t.definitions.forEach((function(e){if(e.name){var s=new Set;!function e(s,t){if("FragmentSpread"===s.kind)t.add(s.name.value);else if("VariableDefinition"===s.kind){var o=s.type;"NamedType"===o.kind&&t.add(o.name.value)}s.selectionSet&&s.selectionSet.selections.forEach((function(s){e(s,t)})),s.variableDefinitions&&s.variableDefinitions.forEach((function(s){e(s,t)})),s.definitions&&s.definitions.forEach((function(s){e(s,t)}))}(e,s),o[e.name.value]=s}})),e.exports=t,t.documentId="dd09a7f763d58fd4f9ef07351d7deb7b845daf59cf35ad3352eb501d51676687"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";(function(e){s.a={props:{pageId:{type:Number,default:0},locale:{type:String,default:"en"},path:{type:String,default:"home"},versionId:{type:Number,default:0},versionDate:{type:String,default:""},effectivePermissions:{type:String,default:""}},data:()=>({}),created(){this.$store.commit("page/SET_ID",this.id),this.$store.commit("page/SET_LOCALE",this.locale),this.$store.commit("page/SET_PATH",this.path),this.$store.commit("page/SET_MODE","source"),this.effectivePermissions&&this.$store.set("page/effectivePermissions",JSON.parse(e.from(this.effectivePermissions,"base64").toString()))},methods:{goLive(){window.location.assign("/".concat(this.locale,"/").concat(this.path))},goHistory(){window.location.assign("/h/".concat(this.locale,"/").concat(this.path))}}}}).call(this,t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};o(n,i);e.exports=n.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};o(n,i);e.exports=n.locals||{}},"./node_modules/lodash/transform.js":function(e,s,t){var o=t("./node_modules/lodash/_arrayEach.js"),n=t("./node_modules/lodash/_baseCreate.js"),i=t("./node_modules/lodash/_baseForOwn.js"),a=t("./node_modules/lodash/_baseIteratee.js"),l=t("./node_modules/lodash/_getPrototype.js"),d=t("./node_modules/lodash/isArray.js"),r=t("./node_modules/lodash/isBuffer.js"),c=t("./node_modules/lodash/isFunction.js"),u=t("./node_modules/lodash/isObject.js"),m=t("./node_modules/lodash/isTypedArray.js");e.exports=function(e,s,t){var v=d(e),p=v||r(e)||m(e);if(s=a(s,4),null==t){var f=e&&e.constructor;t=p?v?new f:[]:u(e)&&c(f)?n(l(e)):{}}return(p?o:i)(e,(function(e,o,n){return s(t,e,o,n)})),t}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){}}]);