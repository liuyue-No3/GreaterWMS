(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{6207:function(e,t,a){"use strict";var r=a("a13e"),o=a.n(r);t["default"]=o.a},a13e:function(e,t){},cce9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("new"),icon:"add"},on:{click:function(t){e.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("newtip"))+"\n           ")])],1),a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1),a("q-space")]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"warehouse_name",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_name"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},model:{value:e.editFormData.warehouse_name,callback:function(t){e.$set(e.editFormData,"warehouse_name",t)},expression:"editFormData.warehouse_name"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_name",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_name)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"warehouse_city",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_city"),rules:[function(t){return t&&t.length>0||e.error2}]},model:{value:e.editFormData.warehouse_city,callback:function(t){e.$set(e.editFormData,"warehouse_city",t)},expression:"editFormData.warehouse_city"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_city",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_city)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"warehouse_address",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_address"),rules:[function(t){return t&&t.length>0||e.error3}]},model:{value:e.editFormData.warehouse_address,callback:function(t){e.$set(e.editFormData,"warehouse_address",t)},expression:"editFormData.warehouse_address"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_address",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_address)+"\n           ")])]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_contact",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_contact)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"warehouse_contact",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("warehouse.view_warehouse.warehouse_contact"),rules:[function(t){return t&&t>0||e.error4}]},model:{value:e.editFormData.warehouse_contact,callback:function(t){e.$set(e.editFormData,"warehouse_contact",e._n(t))},expression:"editFormData.warehouse_contact"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_contact",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_contact)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"warehouse_manager",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_manager"),rules:[function(t){return t&&t>0||e.error5}]},model:{value:e.editFormData.warehouse_manager,callback:function(t){e.$set(e.editFormData,"warehouse_manager",t)},expression:"editFormData.warehouse_manager"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"warehouse_manager",attrs:{props:t}},[e._v("\n             "+e._s(t.row.warehouse_manager)+"\n           ")])]:e._e(),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),e.editMode?e.editMode?[t.row.id===e.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("confirmedit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("canceledit"))+"\n              ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return e.editData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("edit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("delete"))+"\n              ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_name"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.warehouse_name,callback:function(t){e.$set(e.newFormData,"warehouse_name",t)},expression:"newFormData.warehouse_name"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_city"),rules:[function(t){return t&&t.length>0||e.error2}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.warehouse_city,callback:function(t){e.$set(e.newFormData,"warehouse_city",t)},expression:"newFormData.warehouse_city"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_address"),rules:[function(t){return t&&t.length>0||e.error3}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.warehouse_address,callback:function(t){e.$set(e.newFormData,"warehouse_address",t)},expression:"newFormData.warehouse_address"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("warehouse.view_warehouse.warehouse_contact"),rules:[function(t){return t&&t>0||e.error4}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.warehouse_contact,callback:function(t){e.$set(e.newFormData,"warehouse_contact",e._n(t))},expression:"newFormData.warehouse_contact"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_warehouse.warehouse_manager"),rules:[function(t){return t&&t.length>0||e.error5}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.warehouse_manager,callback:function(t){e.$set(e.newFormData,"warehouse_manager",t)},expression:"newFormData.warehouse_manager"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       "+e._s(e.$t("deletetip"))+"\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},o=[],n=a("3004"),s=a("18d6"),i={name:"Pagewarehouse",data(){return{openid:"",login_name:"",authin:"0",pathname:"warehouse/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"warehouse_name",required:!0,label:this.$t("warehouse.view_warehouse.warehouse_name"),align:"left",field:"warehouse_name"},{name:"warehouse_city",label:this.$t("warehouse.view_warehouse.warehouse_city"),field:"warehouse_city",align:"center"},{name:"warehouse_address",label:this.$t("warehouse.view_warehouse.warehouse_address"),field:"warehouse_address",align:"center"},{name:"warehouse_contact",label:this.$t("warehouse.view_warehouse.warehouse_contact"),field:"warehouse_contact",align:"center"},{name:"warehouse_manager",label:this.$t("warehouse.view_warehouse.warehouse_manager"),field:"warehouse_manager",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{warehouse_name:"",warehouse_city:"",warehouse_address:"",warehouse_contact:"",warehouse_manager:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,error1:this.$t("warehouse.view_warehouseset.error1"),error2:this.$t("warehouse.view_warehouseset.error2"),error3:this.$t("warehouse.view_warehouseset.error3"),error4:this.$t("warehouse.view_warehouseset.error4"),error5:this.$t("warehouse.view_warehouseset.error5")}},methods:{getList(){var e=this;s["a"].has("auth")&&Object(n["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;s["a"].has("auth")&&Object(n["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;s["a"].has("auth")&&Object(n["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this,t=[];e.table_list.forEach((e=>{t.push(e.warehouse_name)})),-1===t.indexOf(e.newFormData.warehouse_name)&&0!==e.newFormData.warehouse_name.length?(e.newFormData.creater=e.login_name,Object(n["h"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):(e.newFormData.creater=e.login_name,Object(n["h"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"",icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))),t=[]},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={warehouse_name:"",warehouse_city:"",warehouse_address:"",warehouse_contact:"",warehouse_manager:"",creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={warehouse_name:e.warehouse_name,warehouse_city:e.warehouse_city,warehouse_address:e.warehouse_address,warehouse_contact:e.warehouse_contact,warehouse_manager:e.warehouse_manager,creater:t.login_name}},editDataSubmit(){var e=this;Object(n["i"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={warehouse_name:"",warehouse_city:"",warehouse_address:"",warehouse_contact:"",warehouse_manager:"",creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(n["d"])(e.pathname+e.deleteid+"/").then((t=>{e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0}},created(){var e=this;s["a"].has("openid")?e.openid=s["a"].getItem("openid"):(e.openid="",s["a"].set("openid","")),s["a"].has("login_name")?e.login_name=s["a"].getItem("login_name"):(e.login_name="",s["a"].set("login_name","")),s["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=i,l=a("42e1"),u=a("6207"),d=a("eaac"),h=a("e7a9"),w=a("9c40"),_=a("05c0"),m=a("2c91"),p=a("bd08"),b=a("db86"),f=a("27f9"),g=a("24e8"),v=a("f09f"),y=a("d847"),q=a("a370"),k=a("7f67"),x=a("eebe"),$=a.n(x),D=Object(l["a"])(c,r,o,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(D);t["default"]=D.exports;$()(D,"components",{QTable:d["a"],QBtnGroup:h["a"],QBtn:w["a"],QTooltip:_["a"],QSpace:m["a"],QTr:p["a"],QTd:b["a"],QInput:f["a"],QDialog:g["a"],QCard:v["a"],QBar:y["a"],QCardSection:q["a"]}),$()(D,"directives",{ClosePopup:k["a"]})}}]);