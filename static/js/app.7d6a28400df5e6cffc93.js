webpackJsonp([1,0],[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=n(6),s=i(a),o=n(4),r=i(o);new s["default"]({el:"#app",render:function(e){return e(r["default"])}})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=i(a);t["default"]={data:function(){return{title:"People Manage System.",newName:"",newAge:"",newSex:"",isActive:!1,items:s["default"].fetch()}},watch:{items:{handler:function(){s["default"].save(this.items)},deep:!0}},methods:{addNew:function(){var e;if(this.newSex&&this.newAge&&this.newName)this.items.push({name:this.newName,age:this.newAge,sex:this.newSex}),this.newName="",this.newSex="",this.newAge="";else{var t=this;t.isActive=!0,e=setTimeout(function(){t.isActive=!1},1e3)}},deletePerson:function(e){this.items.splice(this.items.indexOf(e),1)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="todos-vuejs";t["default"]={fetch:function(){return JSON.parse(window.localStorage.getItem(n)||"[]")},save:function(e){window.localStorage.setItem(n,window.JSON.stringify(e))}}},function(e,t){},function(e,t,n){var i,a;n(3),i=n(1);var s=n(5);a=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(a=i=i["default"]),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,e.exports=i},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("h1",{domProps:{textContent:_s(title)}})," ",_h("div",{staticClass:"input-item"},[_h("div",[_m(0)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:newName,expression:"newName"}],attrs:{type:"text",placeholder:"Please Enter Name."},domProps:{value:_s(newName)},on:{input:function(e){e.target.composing||(newName=e.target.value)}}})])," ",_h("div",[_m(1)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:newAge,expression:"newAge"}],attrs:{type:"text",placeholder:"Please Enter Sex."},domProps:{value:_s(newAge)},on:{input:function(e){e.target.composing||(newAge=e.target.value)}}})])," ",_h("div",[_m(2)," ",_h("select",{directives:[{name:"model",rawName:"v-model",value:newSex,expression:"newSex"}],on:{change:function(e){newSex=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value})[0]}}},[_m(3)," ",_m(4)])])," ",_h("div",[_m(5)," ",_h("button",{attrs:{type:"submit",value:"addNew"},on:{click:addNew}},["addNew"])])])," ",_h("table",[_m(6)," ",_h("tbody",[_l(items,function(e){return _h("tr",[_h("td",[_s(e.name)])," ",_h("td",[_s(e.age)])," ",_h("td",[_s(e.sex)])," ",_h("td",[_h("button",{on:{click:function(t){deletePerson(e)}}},["Delete"])])])})])])," ",_h("div",{staticClass:"console","class":{active:isActive}},["请完善信息."])])},staticRenderFns:[function(){with(this)return _h("label",["name:"])},function(){with(this)return _h("label",["age:"])},function(){with(this)return _h("label",["sex:"])},function(){with(this)return _h("option",{attrs:{value:"male"}},["male"])},function(){with(this)return _h("option",{attrs:{value:"female"}},["female"])},function(){with(this)return _h("label")},function(){with(this)return _h("thead",[_h("tr",[_h("th",["Name"])," ",_h("th",["Age"])," ",_h("th",["Sex"])," ",_h("th",["Remove"])])])}]}}]);
//# sourceMappingURL=app.7d6a28400df5e6cffc93.js.map