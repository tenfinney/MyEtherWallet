(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01b815b4"],{"1e57":function(e,t,s){},"2bdf":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"manage-ens-container"},[s("h3",[e._v(e._s(e.$t("dapps.manage"))+" "+e._s(e.domainName))]),s("div",{staticClass:"inputs-container"},[s("div",{staticClass:"form-container"},[s("form",{staticClass:"manage-form"},[s("div",{staticClass:"input-container"},[s("label",{attrs:{for:"updateResolver"}},[e._v(e._s(e.$t("dapps.updateResolver"))+":")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.locResolverAddr,expression:"locResolverAddr"}],attrs:{type:"text",name:"updateResolver",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.locResolverAddr},on:{input:function(t){t.target.composing||(e.locResolverAddr=t.target.value)}}})]),s("div",{staticClass:"submit-container"},[s("button",{class:e.isAddress(e.locResolverAddr)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.updateResolver(e.locResolverAddr)}}},[e._v("\n            Update\n          ")])])])]),s("div",{staticClass:"form-container"},[s("form",{staticClass:"manage-form"},[s("div",{staticClass:"input-container"},[s("label",{attrs:{for:"transferEns"}},[e._v(e._s(e.$t("dapps.transferEnsTo"))+":")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.transferTo},on:{input:function(t){t.target.composing||(e.transferTo=t.target.value)}}})]),s("div",{staticClass:"submit-container"},[s("button",{class:e.isAddress(e.transferTo)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.transferDomain(e.transferTo)}}},[e._v("\n            Transfer\n          ")])])])])]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},n=[],r=s("cebc"),o=s("539d"),i=s("b7d3"),c=s("2f62"),d={components:{"interface-bottom-text":o["a"]},props:{domainName:{type:String,default:""},updateResolver:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},resolverAddress:{type:String,default:""},tld:{type:String,default:""}},data:function(){return{locResolverAddr:this.resolverAddress,transferTo:"",isAddress:i["a"]}},computed:Object(r["a"])({},Object(c["b"])(["web3"])),mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")}},l=d,u=(s("619e"),s("2877")),p=Object(u["a"])(l,a,n,!1,null,"2401b7af",null),f=p.exports;s.d(t,"default",function(){return f})},"619e":function(e,t,s){"use strict";var a=s("1e57"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-01b815b4.5cbcbe4a.js.map