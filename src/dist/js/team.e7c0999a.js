(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["team"],{1779:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("f2bf"),c=function(e){return Object(n["pushScopeId"])("data-v-89961710"),e=e(),Object(n["popScopeId"])(),e},o={key:1},r={class:"container-fluid"},l={class:"d-flex justify-content-start mt-3"},i={class:"btn btn-primary-blue p-2","data-bs-toggle":"modal","data-bs-target":"#moduleAdd"},s=c((function(){return Object(n["createElementVNode"])("i",{class:"fas fa-microchip me-1"},null,-1)})),d={key:0,class:"btn btn-primary-blue p-2 ms-2","data-bs-toggle":"modal","data-bs-target":"#memberAdd"},m=c((function(){return Object(n["createElementVNode"])("i",{class:"fas fa-user me-1"},null,-1)})),b={class:"row mt-2 display-table"},u={class:"col-lg-8"},p={class:"card p-3",style:{"min-height":"6rem"}},O={class:"fw-bolder"},j={class:"table table-bordernone table-hover mt-3"},v=c((function(){return Object(n["createElementVNode"])("th",null,null,-1)})),f={class:"ps-0"},h=["data-bs-target"],y={class:"ps-0"},E={class:"ps-0"},g=["onClick"],V={class:"modal-body p-4"},N={class:"row"},w={class:"col-lg-4 d-flex justify-content-center align-items-center"},k={class:"w-100 h-100"},T={class:"col-lg-8"},B={class:"row"},C={class:"col-lg-6 mb-4"},S={class:"col-lg-6 mb-4"},_={class:"col-lg-6"},D={class:"col-lg-6"},M={class:"col-lg-4"},x={class:"card p-3",style:{"min-height":"6rem"}},$={class:"fw-bolder"},A={class:"table table-bordernone table-hover mt-3"},U=c((function(){return Object(n["createElementVNode"])("th",null,null,-1)})),L=["onClick"],I={class:"ps-0"},F={class:"ps-0"},H=["onClick"];function W(e,t,a,c,W,J){var P=Object(n["resolveComponent"])("Spinner"),R=Object(n["resolveComponent"])("Breadcrumb"),q=Object(n["resolveComponent"])("AddModuleForm"),z=Object(n["resolveComponent"])("AddMemberForm"),G=Object(n["resolveComponent"])("avataaars"),K=Object(n["resolveComponent"])("ModalBasicWindow"),Q=Object(n["resolveComponent"])("MainContent");return Object(n["openBlock"])(),Object(n["createBlock"])(Q,null,{default:Object(n["withCtx"])((function(){return[e.loading?(Object(n["openBlock"])(),Object(n["createBlock"])(P,{key:0})):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(R,{heading:e.team.name,second:e.$t("views.teams_view.link"),secondPath:"/teams",third:e.team.name},null,8,["heading","second","third"]),Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("button",i,[s,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.$t("buttons.add_modul")),1)]),e.permission.assertUserToCompany?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",d,[m,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.$t("buttons.add_member")),1)])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(q,{id:"moduleAdd",title:e.$t("buttons.add_modul"),onAddModuleToteam:t[0]||(t[0]=function(t){return e.addModule(t)})},null,8,["title"]),Object(n["createVNode"])(z,{id:"memberAdd",users:e.team.userEntityList,title:e.$t("buttons.add_member"),onAddUserToteam:t[1]||(t[1]=function(t){return e.addMember(t)})},null,8,["users","title"])]),Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("h5",O,Object(n["toDisplayString"])(e.$t("views.teams_view.members")),1),Object(n["createElementVNode"])("table",j,[Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("th",null,Object(n["toDisplayString"])(e.$t("views.team_view.first_name")),1),Object(n["createElementVNode"])("th",null,Object(n["toDisplayString"])(e.$t("views.team_view.surname")),1),v]),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.team.userEntityList,(function(t,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:a},[Object(n["createElementVNode"])("td",f,[Object(n["createElementVNode"])("a",{class:"primary-link","data-bs-toggle":"modal","data-bs-target":"#"+t.name+t.surname+a},Object(n["toDisplayString"])(t.name),9,h)]),Object(n["createElementVNode"])("td",y,Object(n["toDisplayString"])(t.surname),1),Object(n["createElementVNode"])("td",E,[e.permission.removeModule?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",{key:0,class:"fas fa-times text-danger",onClick:Object(n["withModifiers"])((function(a){return e.removeUser(t.id)}),["stop"])},null,8,g)):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(K,{identifier:t.name+""+t.surname+a,title:"User Profile"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("div",k,[Object(n["createVNode"])(G,{clotheType:e.avatar.clotheType,accessoriesType:e.avatar.accessoriesType,clotheColor:e.avatar.clotheColor,eyebrowType:e.avatar.eyebrowType,eyeType:e.avatar.eyeType,mouthType:e.avatar.mouthType,facialHairColor:e.avatar.facialHairColor,facialHairType:e.avatar.facialHairType,hairColor:e.avatar.hairColor,skinColor:e.avatar.skinColor,topColor:e.avatar.topColor,topType:e.avatar.topType,graphicType:e.avatar.graphicType},null,8,["clotheType","accessoriesType","clotheColor","eyebrowType","eyeType","mouthType","facialHairColor","facialHairType","hairColor","skinColor","topColor","topType","graphicType"])])]),Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("views.team_view.first_name")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]),Object(n["createElementVNode"])("div",S,[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("views.team_view.surname")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.surname),1)]),Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("views.team_view.email")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.email),1)]),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("views.team_view.phone")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.phone),1)])])])])])]})),_:2},1032,["identifier"])])})),128))])])])]),Object(n["createElementVNode"])("div",M,[Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("h5",$,Object(n["toDisplayString"])(e.$t("views.teams_view.modules")),1),Object(n["createElementVNode"])("table",A,[Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("th",null,Object(n["toDisplayString"])(e.$t("views.team_view.name")),1),U]),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.team.moduleEntityList,(function(t,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:a,style:{cursor:"pointer"},onClick:function(a){return e.redirect(t.id)}},[Object(n["createElementVNode"])("td",I,Object(n["toDisplayString"])(t.name),1),Object(n["createElementVNode"])("td",F,[Object(n["createElementVNode"])("i",{class:"fas fa-times text-danger",style:{cursor:"pointer"},onClick:Object(n["withModifiers"])((function(a){return e.removeModule(t.id)}),["stop"])},null,8,H)])],8,L)})),128))])])])])])])]))]})),_:1})}a("4de4"),a("d3b7"),a("b64b");var J=a("5c40"),P=a("2133"),R=a("b1d7"),q=a("2fbc"),z={class:"modal-body"},G={class:"form-group"},K={for:"name",class:"fw-bolder"},Q=["placeholder"],X={class:"form-group mt-3"},Y={for:"name",class:"fw-bolder"},Z=["placeholder"],ee={class:"form-group mt-3"},te={for:"name",class:"fw-bolder"},ae=["placeholder"],ne={class:"modal-footer bg-light"},ce=["value"];function oe(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("ModalBasicWindow");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{identifier:e.id,title:e.title},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("form",{onSubmit:t[4]||(t[4]=Object(n["withModifiers"])((function(){}),["prevent"]))},[Object(n["createElementVNode"])("div",z,[Object(n["createElementVNode"])("div",G,[Object(n["createElementVNode"])("label",K,Object(n["toDisplayString"])(e.$t("views.team_view.modals.name")),1),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.modul.name=t}),id:"name",placeholder:e.$t("views.team_view.modals.name")},null,8,Q),[[n["vModelText"],e.modul.name]])]),Object(n["createElementVNode"])("div",X,[Object(n["createElementVNode"])("label",Y,Object(n["toDisplayString"])(e.$t("views.team_view.modals.icon")),1),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.modul.icon=t}),id:"icon",placeholder:e.$t("views.team_view.modals.icon")},null,8,Z),[[n["vModelText"],e.modul.icon]])]),Object(n["createElementVNode"])("div",ee,[Object(n["createElementVNode"])("label",te,Object(n["toDisplayString"])(e.$t("views.team_view.modals.endpoint")),1),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.modul.api=t}),id:"api",placeholder:e.$t("views.team_view.modals.endpoint")},null,8,ae),[[n["vModelText"],e.modul.api]])])]),Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("input",{type:"submit",class:"btn btn-primary-blue","data-bs-dismiss":"modal",onClick:t[3]||(t[3]=function(t){return e.submitData()}),value:e.title},null,8,ce)])],32)]})),_:1},8,["identifier","title"])}var re=a("5e6f"),le=Object(J["E"])({name:"AddModuleForm",props:["id","title"],emits:["addModuleToteam"],data:function(){return{modul:{}}},components:{ModalBasicWindow:re["a"]},methods:{submitData:function(){this.modul.dashboardEntityList=new Array,this.$emit("addModuleToteam",this.modul)}}}),ie=a("6b0d"),se=a.n(ie);const de=se()(le,[["render",oe]]);var me=de,be={class:"modal-body"},ue={class:"form-group"},pe={for:"email",class:"fw-bolder"},Oe={class:"w-50 form-select mt-2"},je={value:""},ve=["value"],fe={class:"modal-footer bg-light"},he=["value"];function ye(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("ModalBasicWindow");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{identifier:e.id,title:e.title},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("form",{onSubmit:t[1]||(t[1]=Object(n["withModifiers"])((function(){}),["prevent"]))},[Object(n["createElementVNode"])("div",be,[Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("label",pe,Object(n["toDisplayString"])(e.$t("views.team_view.available_members")),1),Object(n["createElementVNode"])("select",Oe,[Object(n["createElementVNode"])("option",je,Object(n["toDisplayString"])(e.$t("views.team_view.select_member")),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.available,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e.id},Object(n["toDisplayString"])(e.name)+" "+Object(n["toDisplayString"])(e.surname),9,ve)})),128))])])]),Object(n["createElementVNode"])("div",fe,[Object(n["createElementVNode"])("input",{type:"submit",class:"btn btn-primary-blue","data-bs-dismiss":"modal",onClick:t[0]||(t[0]=function(t){return e.submitData()}),value:e.title},null,8,he)])],32)]})),_:1},8,["identifier","title"])}a("caad"),a("2532");var Ee=a("c2a5"),ge=Object(J["E"])({name:"AddMemberForm",props:["id","title","users"],emits:["addUserToteam"],data:function(){return{available:[],selectedUser:{}}},components:{ModalBasicWindow:re["a"]},created:function(){var e=this,t=Object.assign({},JSON.parse(sessionStorage.getItem("user")||"{}"));null!=t.id&&void 0!=t.id&&Ee["a"].getCompanyIdByUserId(t.id).then((function(t){t.data.userEntityList&&e.listOfAvailableUsers(t.data.userEntityList)})).catch((function(e){console.log(e)}))},methods:{selected:function(e){var t=this.available.filter((function(t){return t.id==e}));this.selectedUser=t[0]},submitData:function(){this.$emit("addUserToteam",this.selectedUser)},listOfAvailableUsers:function(e){var t=this,a=e.filter((function(e){return t.users.includes(e)}));this.available=a}}});const Ve=se()(ge,[["render",ye]]);var Ne=Ve,we=a("2375"),ke=a("d662"),Te=Object(J["E"])({name:"TeamView",props:["id"],components:{MainContent:P["a"],Breadcrumb:q["a"],AddModuleForm:me,AddMemberForm:Ne,Spinner:we["a"],ModalBasicWindow:re["a"],Avataaars:ke["a"]},data:function(){return{team:{},loading:!0,permission:{},avatar:{}}},created:function(){var e=this,t=Object.assign({},JSON.parse(sessionStorage.getItem("user")||"{}"));t.permissionEntity&&(this.permission=t.permissionEntity),t.avatar&&(this.avatar=JSON.parse(t.avatar)),R["a"].getTeamById(this.id).then((function(t){e.team=t.data,e.loading=!1})).catch((function(e){console.log(e)}))},methods:{removeUser:function(e){var t;this.team.userEntityList=null===(t=this.team.userEntityList)||void 0===t?void 0:t.filter((function(t){return t.id!=e})),this.updateTeam()},removeModule:function(e){var t;this.team.moduleEntityList=null===(t=this.team.moduleEntityList)||void 0===t?void 0:t.filter((function(t){return t.id!=e})),this.updateTeam()},addMember:function(e){var t;Object.keys(e).length>0&&(null===(t=this.team.userEntityList)||void 0===t||t.push(e),this.updateTeam())},updateTeam:function(){var e=this;R["a"].addTeam(this.team).then((function(t){e.team=t.data})).catch((function(e){console.log(e)}))},redirect:function(e){this.$router.push({path:"/modules/"+e})},addModule:function(e){var t;Object.keys(e).length>0&&(null===(t=this.team.moduleEntityList)||void 0===t||t.push(e),this.updateTeam())}}});a("1c4b");const Be=se()(Te,[["render",W],["__scopeId","data-v-89961710"]]);t["default"]=Be},"1c4b":function(e,t,a){"use strict";a("2838")},2375:function(e,t,a){"use strict";var n=a("f2bf"),c={class:"loading-bg"},o=Object(n["createElementVNode"])("div",{class:"loading"},null,-1),r=Object(n["createElementVNode"])("p",{class:"fw-bolder mt-4"},"Loading...",-1),l=[o,r];function i(e,t,a,o,r,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,l)}var s={name:"Spinner"},d=(a("6c00"),a("6b0d")),m=a.n(d);const b=m()(s,[["render",i]]);t["a"]=b},2532:function(e,t,a){"use strict";var n=a("23e7"),c=a("e330"),o=a("5a34"),r=a("1d80"),l=a("577e"),i=a("ab13"),s=c("".indexOf);n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~s(l(r(this)),l(o(e)),arguments.length>1?arguments[1]:void 0)}})},2838:function(e,t,a){},"2fbc":function(e,t,a){"use strict";var n=a("f2bf"),c={class:"container-fluid"},o={class:"page-header"},r={class:"row"},l={class:"col-sm-6"},i={class:"breadcrumb"},s={class:"breadcrumb-item"},d={key:0,class:"breadcrumb-item"},m={class:"breadcrumb-item active"};function b(e,t,a,b,u,p){var O=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(e.heading),1),Object(n["createElementVNode"])("ol",i,[Object(n["createElementVNode"])("li",s,[Object(n["createVNode"])(O,{to:"/home"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("main_content.home_breadcrumb")),1)]})),_:1})]),e.second?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",d,[Object(n["createVNode"])(O,{to:e.secondPath},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.second),1)]})),_:1},8,["to"])])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",m,Object(n["toDisplayString"])(e.third),1)])])])])])}var u=a("5c40"),p=Object(u["E"])({name:"Breadcrumb",props:["heading","second","secondPath","third"]}),O=(a("9b99"),a("6b0d")),j=a.n(O);const v=j()(p,[["render",b],["__scopeId","data-v-3ce5cf6a"]]);t["a"]=v},"44e7":function(e,t,a){var n=a("861d"),c=a("c6b6"),o=a("b622"),r=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==c(e))}},"4bc7":function(e,t,a){},"5a34":function(e,t,a){var n=a("da84"),c=a("44e7"),o=n.TypeError;e.exports=function(e){if(c(e))throw o("The method doesn't accept regular expressions");return e}},"6c00":function(e,t,a){"use strict";a("4bc7")},"9b99":function(e,t,a){"use strict";a("9d30")},"9d30":function(e,t,a){},ab13:function(e,t,a){var n=a("b622"),c=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[c]=!1,"/./"[e](t)}catch(n){}}return!1}},b1d7:function(e,t,a){"use strict";var n=a("d4ec"),c=a("bee2"),o=a("5a15"),r=function(){function e(){Object(n["a"])(this,e)}return Object(c["a"])(e,[{key:"getTeamById",value:function(e){return o["a"].get("team/getTeamById/"+e)}},{key:"getTeamsByUserID",value:function(e){return o["a"].get("team/getAllTeamsByUserId/"+e)}},{key:"getAllTeamsByCompanyId",value:function(e){return o["a"].get("team/getAllTeamsByCompany?company="+e)}},{key:"addTeam",value:function(e){return o["a"].post("team/addTeam",e)}},{key:"removeTeam",value:function(e){return o["a"].delete("team/deleteTeam/"+e)}}]),e}();t["a"]=new r},caad:function(e,t,a){"use strict";var n=a("23e7"),c=a("4d64").includes,o=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
//# sourceMappingURL=team.e7c0999a.js.map