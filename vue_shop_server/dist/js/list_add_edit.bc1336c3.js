(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[508],{6077:function(e,t,o){var a=o(614),r=String,n=TypeError;e.exports=function(e){if("object"==typeof e||a(e))return e;throw n("Can't set "+r(e)+" as a prototype")}},3658:function(e,t,o){"use strict";var a=o(9781),r=o(3157),n=TypeError,l=Object.getOwnPropertyDescriptor,i=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=i?function(e,t){if(r(e)&&!l(e,"length").writable)throw n("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},648:function(e,t,o){var a=o(1694),r=o(614),n=o(4326),l=o(5112),i=l("toStringTag"),d=Object,s="Arguments"==n(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(o){}};e.exports=a?n:function(e){var t,o,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=c(t=d(e),i))?o:s?n(t):"Object"==(a=n(t))&&r(t.callee)?"Arguments":a}},7207:function(e){var t=TypeError,o=9007199254740991;e.exports=function(e){if(e>o)throw t("Maximum allowed index exceeded");return e}},1060:function(e,t,o){var a=o(1702),r=Error,n=a("".replace),l=function(e){return String(r(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,d=i.test(l);e.exports=function(e,t){if(d&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=n(e,i,"");return e}},5392:function(e,t,o){var a=o(8880),r=o(1060),n=o(2914),l=Error.captureStackTrace;e.exports=function(e,t,o,i){n&&(l?l(e,t):a(e,"stack",r(o,i)))}},2914:function(e,t,o){var a=o(7293),r=o(9114);e.exports=!a((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2104:function(e,t,o){var a=o(4374),r=Function.prototype,n=r.apply,l=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(a?l.bind(n):function(){return l.apply(n,arguments)})},5668:function(e,t,o){var a=o(1702),r=o(9662);e.exports=function(e,t,o){try{return a(r(Object.getOwnPropertyDescriptor(e,t)[o]))}catch(n){}}},9587:function(e,t,o){var a=o(614),r=o(111),n=o(7674);e.exports=function(e,t,o){var l,i;return n&&a(l=t.constructor)&&l!==o&&r(i=l.prototype)&&i!==o.prototype&&n(e,i),e}},8340:function(e,t,o){var a=o(111),r=o(8880);e.exports=function(e,t){a(t)&&"cause"in t&&r(e,"cause",t.cause)}},3157:function(e,t,o){var a=o(4326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},6277:function(e,t,o){var a=o(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:a(e)}},7674:function(e,t,o){var a=o(5668),r=o(9670),n=o(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={};try{e=a(Object.prototype,"__proto__","set"),e(o,[]),t=o instanceof Array}catch(l){}return function(o,a){return r(o),n(a),t?e(o,a):o.__proto__=a,o}}():void 0)},2626:function(e,t,o){var a=o(3070).f;e.exports=function(e,t,o){o in e||a(e,o,{configurable:!0,get:function(){return t[o]},set:function(e){t[o]=e}})}},1694:function(e,t,o){var a=o(5112),r=a("toStringTag"),n={};n[r]="z",e.exports="[object z]"===String(n)},1340:function(e,t,o){var a=o(648),r=String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},9191:function(e,t,o){"use strict";var a=o(5005),r=o(2597),n=o(8880),l=o(7976),i=o(7674),d=o(9920),s=o(2626),c=o(9587),u=o(6277),p=o(8340),h=o(5392),m=o(9781),g=o(1913);e.exports=function(e,t,o,f){var _="stackTraceLimit",v=f?2:1,b=e.split("."),V=b[b.length-1],C=a.apply(null,b);if(C){var w=C.prototype;if(!g&&r(w,"cause")&&delete w.cause,!o)return C;var x=a("Error"),y=t((function(e,t){var o=u(f?t:e,void 0),a=f?new C(e):new C;return void 0!==o&&n(a,"message",o),h(a,y,a.stack,2),this&&l(w,this)&&c(a,this,y),arguments.length>v&&p(a,arguments[v]),a}));if(y.prototype=w,"Error"!==V?i?i(y,x):d(y,x,{name:!0}):m&&_ in C&&(s(y,C,_),s(y,C,"prepareStackTrace")),d(y,C),!g)try{w.name!==V&&n(w,"name",V),w.constructor=y}catch(N){}return y}}},7658:function(e,t,o){"use strict";var a=o(2109),r=o(7908),n=o(6244),l=o(3658),i=o(7207),d=o(7293),s=d((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},u=s||!c();a({target:"Array",proto:!0,arity:1,forced:u},{push:function(e){var t=r(this),o=n(t),a=arguments.length;i(o+a);for(var d=0;d<a;d++)t[o]=arguments[d],o++;return l(t,o),o}})},1703:function(e,t,o){var a=o(2109),r=o(7854),n=o(2104),l=o(9191),i="WebAssembly",d=r[i],s=7!==Error("e",{cause:7}).cause,c=function(e,t){var o={};o[e]=l(e,t,s),a({global:!0,constructor:!0,arity:1,forced:s},o)},u=function(e,t){if(d&&d[e]){var o={};o[e]=l(i+"."+e,t,s),a({target:i,stat:!0,constructor:!0,arity:1,forced:s},o)}};c("Error",(function(e){return function(t){return n(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return n(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return n(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return n(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return n(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return n(e,this,arguments)}})),c("URIError",(function(e){return function(t){return n(e,this,arguments)}})),u("CompileError",(function(e){return function(t){return n(e,this,arguments)}})),u("LinkError",(function(e){return function(t){return n(e,this,arguments)}})),u("RuntimeError",(function(e){return function(t){return n(e,this,arguments)}}))},1247:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return u}});var a=o(311);const r=["src"];function n(e,t,o,n,l,i){const d=(0,a.resolveComponent)("el-breadcrumb-item"),s=(0,a.resolveComponent)("el-breadcrumb"),c=(0,a.resolveComponent)("el-alert"),u=(0,a.resolveComponent)("el-step"),p=(0,a.resolveComponent)("el-steps"),h=(0,a.resolveComponent)("el-input"),m=(0,a.resolveComponent)("el-form-item"),g=(0,a.resolveComponent)("el-cascader"),f=(0,a.resolveComponent)("el-tab-pane"),_=(0,a.resolveComponent)("el-checkbox"),v=(0,a.resolveComponent)("el-checkbox-group"),b=(0,a.resolveComponent)("el-button"),V=(0,a.resolveComponent)("el-upload"),C=(0,a.resolveComponent)("quill-editor"),w=(0,a.resolveComponent)("el-tabs"),x=(0,a.resolveComponent)("el-form"),y=(0,a.resolveComponent)("el-card"),N=(0,a.resolveComponent)("el-dialog");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(s,{"separator-icon":l.ArrowRight},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{to:{path:"/home/welcome"}},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("首页")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品管理")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品列表")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("添加商品")])),_:1})])),_:1},8,["separator-icon"]),(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}),(0,a.createVNode)(p,{active:1*l.activeIndex,"finish-status":"success","align-center":""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,{title:"基本信息"}),(0,a.createVNode)(u,{title:"商品参数"}),(0,a.createVNode)(u,{title:"商品属性"}),(0,a.createVNode)(u,{title:"商品图片"}),(0,a.createVNode)(u,{title:"商品内容"}),(0,a.createVNode)(u,{title:"完成"})])),_:1},8,["active"]),(0,a.createVNode)(x,{ref:"addFormRef",model:l.addForm,rules:l.addFormRules,"label-width":"100px","label-position":"top"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{"tab-position":"left",modelValue:l.activeIndex,"onUpdate:modelValue":t[6]||(t[6]=e=>l.activeIndex=e),"before-leave":i.beforeTabChange,onTabChange:i.tabChanged},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(f,{label:"基本信息",name:"0"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(m,{label:"商品名称",prop:"goods_name"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.addForm.goods_name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.addForm.goods_name=e),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品价格",prop:"goods_price"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.addForm.goods_price,"onUpdate:modelValue":t[1]||(t[1]=e=>l.addForm.goods_price=e),type:"number",placeholder:"请输入商品价格"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品重量",prop:"goods_weight"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.addForm.goods_weight,"onUpdate:modelValue":t[2]||(t[2]=e=>l.addForm.goods_weight=e),type:"number",placeholder:"请输入商品重量"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品数量",prop:"goods_number"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.addForm.goods_number,"onUpdate:modelValue":t[3]||(t[3]=e=>l.addForm.goods_number=e),type:"number",placeholder:"请输入商品数量"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品分类",prop:"goods_cat"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{modelValue:l.addForm.goods_cat,"onUpdate:modelValue":t[4]||(t[4]=e=>l.addForm.goods_cat=e),options:l.cateList,props:l.cascadeProps,onChange:i.handleCascadeChange},null,8,["modelValue","options","props","onChange"])])),_:1})])),_:1}),(0,a.createVNode)(f,{label:"商品参数",name:"1"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.manyTableData,(e=>((0,a.openBlock)(),(0,a.createBlock)(m,{key:e.attr_id,label:e.attr_name},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,{modelValue:e.attr_vals,"onUpdate:modelValue":t=>e.attr_vals=t},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.attr_vals,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(_,{key:t,label:e,border:""},null,8,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1}),(0,a.createVNode)(f,{label:"商品属性",name:"2"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.onlyTableData,(e=>((0,a.openBlock)(),(0,a.createBlock)(m,{key:e.attr_id,label:e.attr_name},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:e.attr_vals,"onUpdate:modelValue":t=>e.attr_vals=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1}),(0,a.createVNode)(f,{label:"商品图片",name:"3"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(m,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{action:l.uploadURL,"on-preview":i.handlePreview,"on-remove":i.handleRemove,"list-type":"picture",headers:l.headerObj,"on-success":i.handleSuccess},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(b,{type:"primary",size:"small"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("点击上传")])),_:1})])),_:1},8,["action","on-preview","on-remove","headers","on-success"])])),_:1})])),_:1}),(0,a.createVNode)(f,{label:"商品内容",name:"4"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,{content:l.addForm.goods_introduce,"onUpdate:content":t[5]||(t[5]=e=>l.addForm.goods_introduce=e),toolbar:"full","content-type":"html",onTextChange:e.textChange},null,8,["content","onTextChange"]),(0,a.createVNode)(b,{type:"primary",class:"btnAdd",onClick:i.addGood},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("添加商品")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue","before-leave","onTabChange"])])),_:1},8,["model","rules"])])),_:1}),(0,a.createVNode)(N,{modelValue:l.previewDialogVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>l.previewDialogVisible=e),title:"图片预览",width:"80%"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("img",{src:l.previewPath,alt:"预览图片",class:"previewImg"},null,8,r)])),_:1},8,["modelValue"])])}o(1703),o(7658);var l=o(3010),i=o(2611),d={data(){const e=(e,t,o)=>{t<0&&o(new Error("输入的数字不能小于0")),o()};return{ArrowRight:l.ArrowRight,Search:l.Search,Edit:l.Edit,Delete:l.Delete,activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"},{validator:e,trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"},{validator:e,trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"},{validator:e,trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},cateList:[],cascadeProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewPath:"",previewDialogVisible:!1}},created(){this.getCateList()},methods:{getCateList(){this.$api.httpGet("categories",{showOuter:"error",error:["获取商品分类信息失败！"]}).then((e=>{this.cateList=e.data}))},handleCascadeChange(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[]),this.getManyTableData(),this.getOnlyTableData()},beforeTabChange(e,t){if("0"===t&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类"),!1},tabChanged(){"1"===this.activeIndex?this.getManyTableData():"2"===this.activeIndex&&this.getOnlyTableData()},getManyTableData(){this.$api.httpGet(`categories/${this.cateId}/attributes`,{showOuter:"error",error:["获取分类参数失败！"]},200,{params:{sel:"many"}}).then((e=>{e.data.forEach((e=>{e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),this.manyTableData=e.data}))},getOnlyTableData(){this.$api.httpGet(`categories/${this.cateId}/attributes`,{showOuter:"error",error:["获取分类属性失败！"]},200,{params:{sel:"only"}}).then((e=>{this.onlyTableData=e.data}))},handlePreview(e){this.previewPath=e.response.data.url,this.previewDialogVisible=!0},handleRemove(e){const t=e.response.data.tmp_path,o=this.addForm.pics.findIndex((e=>e.pic===t));this.addForm.pics.splice(o,1)},handleSuccess(e){const t={pic:e.data.tmp_path};this.addForm.pics.push(t)},addGood(){this.$refs.addFormRef.validate((e=>{if(!e)return this.$message.error({message:"请填写必要的表单项",duration:1200});this.manyTableData.forEach((e=>{this.addForm.attrs.push({attr_id:e.attr_id,attr_value:e.attr_vals.join(" ")})})),this.onlyTableData.forEach((e=>{this.addForm.attrs.push({attr_id:e.attr_id,attr_value:e.attr_vals})}));const t=(0,i.cloneDeep)(this.addForm);t.goods_cat=t.goods_cat.join(","),this.$api.httpPost("goods",t,{error:["创建商品失败！"]},201).then((()=>{this.$router.push("goods")}))}))}},computed:{cateId(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},s=o(89);const c=(0,s.Z)(d,[["render",n],["__scopeId","data-v-9476cc96"]]);var u=c},4825:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var a=o(311);const r=["src"];function n(e,t,o,n,l,i){const d=(0,a.resolveComponent)("el-breadcrumb-item"),s=(0,a.resolveComponent)("el-breadcrumb"),c=(0,a.resolveComponent)("el-alert"),u=(0,a.resolveComponent)("el-step"),p=(0,a.resolveComponent)("el-steps"),h=(0,a.resolveComponent)("el-input"),m=(0,a.resolveComponent)("el-form-item"),g=(0,a.resolveComponent)("el-cascader"),f=(0,a.resolveComponent)("el-tab-pane"),_=(0,a.resolveComponent)("el-checkbox"),v=(0,a.resolveComponent)("el-checkbox-group"),b=(0,a.resolveComponent)("el-button"),V=(0,a.resolveComponent)("el-upload"),C=(0,a.resolveComponent)("quill-editor"),w=(0,a.resolveComponent)("el-tabs"),x=(0,a.resolveComponent)("el-form"),y=(0,a.resolveComponent)("el-card"),N=(0,a.resolveComponent)("el-dialog");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(s,{"separator-icon":l.ArrowRight},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{to:{path:"/home/welcome"}},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("首页")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品管理")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品列表")])),_:1}),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("编辑商品")])),_:1})])),_:1},8,["separator-icon"]),(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{title:"编辑商品信息",type:"info",center:"","show-icon":"",closable:!1}),(0,a.createVNode)(p,{active:1*l.activeIndex,"finish-status":"success","align-center":""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,{title:"基本信息"}),(0,a.createVNode)(u,{title:"商品参数"}),(0,a.createVNode)(u,{title:"商品属性"}),(0,a.createVNode)(u,{title:"商品图片"}),(0,a.createVNode)(u,{title:"商品内容"}),(0,a.createVNode)(u,{title:"完成"})])),_:1},8,["active"]),(0,a.createVNode)(x,{ref:"editFormRef",model:l.editForm,rules:l.editFormRules,"label-width":"100px","label-position":"top"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{"tab-position":"left",modelValue:l.activeIndex,"onUpdate:modelValue":t[6]||(t[6]=e=>l.activeIndex=e),"before-leave":e.beforeTabChange,onTabChange:i.tabChanged},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(f,{label:"基本信息",name:"0"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(m,{label:"商品名称",prop:"goods_name"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.editForm.goods_name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.editForm.goods_name=e),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品价格",prop:"goods_price"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.editForm.goods_price,"onUpdate:modelValue":t[1]||(t[1]=e=>l.editForm.goods_price=e),type:"number",placeholder:"请输入商品价格"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品重量",prop:"goods_weight"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.editForm.goods_weight,"onUpdate:modelValue":t[2]||(t[2]=e=>l.editForm.goods_weight=e),type:"number",placeholder:"请输入商品重量"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品数量",prop:"goods_number"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:l.editForm.goods_number,"onUpdate:modelValue":t[3]||(t[3]=e=>l.editForm.goods_number=e),type:"number",placeholder:"请输入商品数量"},null,8,["modelValue"])])),_:1}),(0,a.createVNode)(m,{label:"商品分类"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{modelValue:l.goods_cat,"onUpdate:modelValue":t[4]||(t[4]=e=>l.goods_cat=e),options:l.cateList,props:l.cascadeProps,disabled:""},null,8,["modelValue","options","props"])])),_:1})])),_:1}),(0,a.createVNode)(f,{label:"商品参数",name:"1"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.manyTableData,(e=>((0,a.openBlock)(),(0,a.createBlock)(m,{key:e.attr_id,label:e.attr_name},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,{modelValue:e.attr_vals,"onUpdate:modelValue":t=>e.attr_vals=t},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.attr_vals,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(_,{key:t,label:e,border:""},null,8,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1}),(0,a.createVNode)(f,{label:"商品属性",name:"2"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.onlyTableData,(e=>((0,a.openBlock)(),(0,a.createBlock)(m,{key:e.attr_id,label:e.attr_name},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{modelValue:e.attr_vals,"onUpdate:modelValue":t=>e.attr_vals=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1}),(0,a.createVNode)(f,{label:"商品图片",name:"3"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(m,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{"file-list":l.uploadFileList,action:l.uploadURL,"on-preview":i.handlePreview,"on-remove":i.handleRemove,"list-type":"picture",headers:l.headerObj,"on-success":i.handleSuccess},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(b,{type:"primary",size:"small"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("点击上传")])),_:1})])),_:1},8,["file-list","action","on-preview","on-remove","headers","on-success"])])),_:1})])),_:1}),(0,a.createVNode)(f,{label:"商品内容",name:"4"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,{content:l.editForm.goods_introduce,"onUpdate:content":t[5]||(t[5]=e=>l.editForm.goods_introduce=e),toolbar:"full","content-type":"html",onTextChange:e.textChange},null,8,["content","onTextChange"]),(0,a.createVNode)(b,{type:"primary",class:"btnEdit",onClick:i.editGood},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("编辑商品")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue","before-leave","onTabChange"])])),_:1},8,["model","rules"])])),_:1}),(0,a.createVNode)(N,{modelValue:l.previewDialogVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>l.previewDialogVisible=e),title:"图片预览",width:"60%"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("img",{src:l.previewPath,alt:"预览图片",class:"previewImg"},null,8,r)])),_:1},8,["modelValue"])])}o(1703),o(7658);var l=o(3010),i={data(){const e=(e,t,o)=>{t<0&&o(new Error("输入的数字不能小于0")),o()};return{ArrowRight:l.ArrowRight,Search:l.Search,Edit:l.Edit,Delete:l.Delete,activeIndex:"0",editForm:{goods_name:"",goods_price:0,goods_number:0,goods_weight:0,goods_cat:"",pics:[],goods_introduce:"",attrs:[]},editFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"},{validator:e,trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"},{validator:e,trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"},{validator:e,trigger:"blur"}]},cateList:[],goods_cat:[],cascadeProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},uploadFileList:[],previewPath:"",previewDialogVisible:!1}},created(){this.goodId=this.$route.params.id,this.getGoodInfo(),this.getCateList()},methods:{getGoodInfo(){this.$api.httpGet(`goods/${this.goodId}`,{showOuter:"error",error:["商品信息获取失败！"]}).then((e=>{for(let t in this.editForm)this.editForm[t]=e.data[t];this.goods_cat=0===e.data.goods_cat.length?[]:e.data.goods_cat.split(","),this.goods_cat.forEach(((e,t)=>{this.goods_cat[t]=parseInt(e)})),e.data.attrs.forEach((e=>{"many"===e.attr_sel?this.manyTableData.push({attr_id:e.attr_id,attr_name:e.attr_name,attr_vals:0===e.attr_vals.length?[]:e.attr_vals.split(",")}):this.onlyTableData.push({attr_id:e.attr_id,attr_name:e.attr_name,attr_vals:e.attr_vals})})),e.data.pics.forEach((e=>{this.uploadFileList.push({name:"点击预览",url:e.pics_mid_url,pics_id:e.pics_id,saved:!0})}))}))},getCateList(){this.$api.httpGet("categories",{showOuter:"error",error:["获取商品分类信息失败！"]}).then((e=>{this.cateList=e.data}))},tabChanged(){"1"===this.activeIndex?this.getManyTableData():"2"===this.activeIndex&&this.getOnlyTableData()},getManyTableData(){this.$api.httpGet(`categories/${this.cateId}/attributes`,{showOuter:"error",error:["获取分类参数失败！"]},200,{params:{sel:"many"}}).then((e=>{e.data.forEach((e=>{e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(",")})),this.manyTableData=e.data}))},getOnlyTableData(){this.$api.httpGet(`categories/${this.cateId}/attributes`,{showOuter:"error",error:["获取分类属性失败！"]},200,{params:{sel:"only"}}).then((e=>{this.onlyTableData=e.data}))},handlePreview(e){e.saved?this.previewPath=e.url:this.previewPath=e.response.data.url,this.previewDialogVisible=!0},handleRemove(e){if(e.saved){const t=this.editForm.pics.findIndex((t=>t.pics_id===e.pics_id));this.editForm.pics.splice(t,1)}else{const t=e.response.data.tmp_path,o=this.editForm.pics.findIndex((e=>e.pic===t));this.editForm.pics.splice(o,1)}},handleSuccess(e){const t={pic:e.data.tmp_path};this.editForm.pics.push(t)},editGood(){this.$refs.editFormRef.validate((e=>{if(!e)return this.$message.error({message:"请填写必要的表单项",duration:1200});this.editForm.attrs=[],this.manyTableData.forEach((e=>{this.editForm.attrs.push({attr_id:e.attr_id,attr_value:e.attr_vals.join(",")})})),this.onlyTableData.forEach((e=>{this.editForm.attrs.push({attr_id:e.attr_id,attr_value:e.attr_vals})})),this.editForm.pics.forEach(((e,t)=>{if(e.pics_id){const o=e.pics_mid,a=o.substring(23);this.editForm.pics[t]={pic:"tmp_uploads\\"+a}}})),this.$api.httpPut("goods/"+this.goodId,this.editForm,{showOuter:"error",success:["编辑商品成功！"],error:["编辑商品失败！"]},200).then((()=>{this.$router.push("/home/goods")}))}))}},computed:{cateId(){return 3===this.goods_cat.length?this.goods_cat[2]:null}}},d=o(89);const s=(0,d.Z)(i,[["render",n],["__scopeId","data-v-389014d0"]]);var c=s},1437:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}});var a=o(311);function r(e,t,o,r,n,l){const i=(0,a.resolveComponent)("el-breadcrumb-item"),d=(0,a.resolveComponent)("el-breadcrumb"),s=(0,a.resolveComponent)("el-button"),c=(0,a.resolveComponent)("el-input"),u=(0,a.resolveComponent)("el-col"),p=(0,a.resolveComponent)("el-row"),h=(0,a.resolveComponent)("el-table-column"),m=(0,a.resolveComponent)("el-table"),g=(0,a.resolveComponent)("el-pagination"),f=(0,a.resolveComponent)("el-card");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(d,{"separator-icon":n.ArrowRight},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(i,{to:{path:"/home/welcome"}},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("首页")])),_:1}),(0,a.createVNode)(i,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品管理")])),_:1}),(0,a.createVNode)(i,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("商品列表")])),_:1})])),_:1},8,["separator-icon"]),(0,a.createVNode)(f,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,{gutter:"20"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,{span:8},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{modelValue:n.queryInfo.query,"onUpdate:modelValue":t[0]||(t[0]=e=>n.queryInfo.query=e),placeholder:"请输入内容",clearable:"",onClear:l.getGoodsList,onKeyup:(0,a.withKeys)(l.getGoodsList,["enter"])},{append:(0,a.withCtx)((()=>[(0,a.createVNode)(s,{icon:n.Search,onClick:l.getGoodsList},null,8,["icon","onClick"])])),_:1},8,["modelValue","onClear","onKeyup"])])),_:1}),(0,a.createVNode)(u,{span:4},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s,{type:"primary",onClick:l.goAddPage},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("添加商品")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.createVNode)(m,{data:n.goodsList,border:"",stripe:"",style:{width:"100%"}},{default:(0,a.withCtx)((()=>[n.goodsList.length>0?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,type:"index",label:"#"})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(h,{prop:"goods_name",label:"商品名称","min-width":"666px"}),(0,a.createVNode)(h,{prop:"goods_price",label:"商品价格(元)",width:"97px"}),(0,a.createVNode)(h,{prop:"goods_weight",label:"商品重量",width:"74px"}),(0,a.createVNode)(h,{label:"创建时间","min-width":"150px"},{default:(0,a.withCtx)((e=>[(0,a.createTextVNode)((0,a.toDisplayString)(l.dateFormat(e.row.add_time)),1)])),_:1}),(0,a.createVNode)(h,{label:"操作",width:"165px"},{default:(0,a.withCtx)((e=>[(0,a.createVNode)(s,{type:"primary",icon:n.Edit,size:"small",onClick:t=>l.goEditPage(e.row.goods_id)},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("编辑")])),_:2},1032,["icon","onClick"]),(0,a.createVNode)(s,{type:"danger",icon:n.Delete,size:"small",onClick:t=>l.removeGood(e.row.goods_id)},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("删除")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data"]),(0,a.createVNode)(g,{"current-page":n.queryInfo.pagenum,"onUpdate:currentPage":t[1]||(t[1]=e=>n.queryInfo.pagenum=e),"page-size":n.queryInfo.pagesize,"onUpdate:pageSize":t[2]||(t[2]=e=>n.queryInfo.pagesize=e),total:n.total,"page-sizes":[10,20,50,100],small:"",background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])),_:1})])}o(7658);var n=o(3010),l={data(){return{ArrowRight:n.ArrowRight,Search:n.Search,Edit:n.Edit,Delete:n.Delete,goodsList:[],queryInfo:{query:"",pagesize:10,pagenum:1},total:0}},created(){this.getGoodsList()},methods:{getGoodsList(){this.$api.httpGet("goods",{showOuter:"error",error:["获取商品列表信息失败！"]},200,{params:this.queryInfo}).then((e=>{this.goodsList=e.data.goods,this.total=e.data.total}))},dateFormat(e){const t=new Date(e),o=t.getFullYear(),a=(t.getMonth()+1+"").padStart(2,"0"),r=(t.getDate()+"").padStart(2,"0"),n=(t.getHours()+"").padStart(2,"0"),l=(t.getMinutes()+"").padStart(2,"0"),i=(t.getSeconds()+"").padStart(2,"0");return`${o}-${a}-${r} ${n}:${l}:${i}`},handleSizeChange(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange(e){this.queryInfo.pagenum=e,this.getGoodsList()},removeGood(e){this.$confirm("此操作将永久删除该商品，是否继续？","删除",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$api.httpDelete("goods/"+e,{error:["删除失败！"]}).then((()=>{this.getGoodsList()}))})).catch((()=>{this.$message({type:"info",message:"删除取消",duration:1200})}))},goAddPage(){this.$router.push("goodsAdd")},goEditPage(e){this.$router.push(`goodsEdit/${e}`)}}},i=o(89);const d=(0,i.Z)(l,[["render",r]]);var s=d}}]);
//# sourceMappingURL=list_add_edit.bc1336c3.js.map