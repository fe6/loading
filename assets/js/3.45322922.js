(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,r){"use strict";var i=r(2),a=r(11),n=r(15),s=r(58),_=r(56),o=r(4),v=r(80).f,d=r(79).f,c=r(7).f,h=r(146).trim,l=i.Number,u=l,g=l.prototype,f="Number"==n(r(57)(g)),m="trim"in String.prototype,p=function(t){var e=_(t,!1);if("string"==typeof e&&e.length>2){var r,i,a,n=(e=m?e.trim():h(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,o=e.slice(2),v=0,d=o.length;v<d;v++)if((s=o.charCodeAt(v))<48||s>a)return NaN;return parseInt(o,i)}}return+e};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof l&&(f?o(function(){g.valueOf.call(r)}):"Number"!=n(r))?s(new u(p(e)),r,l):p(e)};for(var b,N=r(5)?v(u):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)a(u,b=N[I])&&!a(l,b)&&c(l,b,d(u,b));l.prototype=g,g.constructor=l,r(8)(i,"Number",l)}},146:function(t,e,r){var i=r(10),a=r(18),n=r(4),s=r(147),_="["+s+"]",o=RegExp("^"+_+_+"*"),v=RegExp(_+_+"*$"),d=function(t,e,r){var a={},_=n(function(){return!!s[t]()||"​"!="​"[t]()}),o=a[t]=_?e(c):s[t];r&&(a[r]=o),i(i.P+i.F*_,"String",a)},c=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},147:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},149:function(t,e,r){},152:function(t,e,r){"use strict";var i=r(149);r.n(i).a},155:function(t,e,r){"use strict";r.r(e);r(145);var i="https://static2.evente.cn/static/img/",a={data:function(){return{imgPath:"",imgHostDef:i,imgTypeDef:"gif",imgNameDef:"loading201904171",imgVersionDef:""}},props:{imgStyle:Object,imgType:{type:String,default:"gif"},imgHost:{type:String,default:i},imgName:{type:String,default:"loading201904171"},imgVersion:{type:String,default:""},mode:{type:String,default:"fixed"},orgId:[Number,String],classWrapName:[Object,String],classImgName:[Object,String]},computed:{wrapClass:function(){return["w-loading-wap-".concat(this.mode),this.className]},imgClass:function(){return["w-loading-wap-".concat(this.mode,"-img"),this.classImgName]}},mounted:function(){var t=this.orgId||this.imgName;this.imgPath="".concat(this.imgHost).concat(t).concat(this.imgVersion,".").concat(this.imgType)},methods:{errorHandle:function(){this.imgPath="".concat(this.imgHostDef).concat(this.imgNameDef).concat(this.imgVersionDef,".").concat(this.imgTypeDef)}}},n=(r(152),r(0)),s={data:function(){return{status:!1}},components:{WLoadingWap:Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.wrapClass},[e("img",{class:this.imgClass,style:this.imgStyle,attrs:{src:this.imgPath},on:{error:this.errorHandle}})])},[],!1,null,"713632ed",null).exports}},_=Object(n.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[r("a",{attrs:{href:"https://output.jsbin.com/tisusuk",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器手机模式在线预览"),r("OutboundLink")],1)]),t._v(" "),r("br"),t._v(" "),r("p",[r("w-loading-wap",{style:{position:"static",transform:"none"}})],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(3),t._v(" "),r("p",[r("a",{attrs:{href:"https://output.jsbin.com/bemezav",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器手机模式在线预览"),r("OutboundLink")],1)]),t._v(" "),r("br"),t._v(" "),r("p",[r("button",{staticStyle:{width:"100px",height:"20px",background:"#1995f9",color:"#fff","font-size":"14px","line-height":"20px",padding:"0"},on:{click:function(e){t.status=!0}}},[t._v(t._s(t.status?"显示":"隐藏"))]),t._v(" "),r("br"),t._v(" "),t.status?r("w-loading-wap",{style:{zIndex:999},attrs:{mode:"mask",orgId:"100213",imgVersion:"1"},nativeOn:{click:function(e){t.status=!1}}}):t._e()],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(4),t._v(" "),r("p",[r("a",{attrs:{href:"https://output.jsbin.com/cudaden",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器手机模式在线预览"),r("OutboundLink")],1)]),t._v(" "),r("br"),t._v(" "),r("p",[r("w-loading-wap",{style:{position:"static",transform:"none"},attrs:{orgId:"100213",imgVersion:"1"}})],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(5),t._v(" "),r("p",[r("a",{attrs:{href:"https://output.jsbin.com/yujeguh",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器手机模式在线预览"),r("OutboundLink")],1),t._v(" | "),r("a",{attrs:{href:"https://output.jsbin.com/wedokos",target:"_blank",rel:"noopener noreferrer"}},[t._v("店铺浏览器手机模式在线预览"),r("OutboundLink")],1)]),t._v(" "),r("br"),t._v(" "),r("p",[r("w-loading-wap",{style:{position:"static",transform:"none"},attrs:{imgName:"loading"}}),t._v(" "),r("br"),t._v(" "),r("w-loading-wap",{style:{position:"static",transform:"none"},attrs:{imgName:"loading-shop"}})],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"loadingwap-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loadingwap-组件","aria-hidden":"true"}},[this._v("#")]),this._v(" LoadingWap 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("手机端进入之前的 Loading 组件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"遮罩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遮罩","aria-hidden":"true"}},[this._v("#")]),this._v(" 遮罩")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通过主办id-orgid-定制图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过主办id-orgid-定制图片","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过主办id(orgId)定制图片")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"定义图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义图片","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义图片")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("是否必填")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("mode")]),t._v(" "),r("td",[t._v("loading 的模式，可选模式: fixed(没有遮罩，固定居中)， mask(外层一个充满视觉的透明无颜色遮罩，并固定居中)")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("fixed")])]),t._v(" "),r("tr",[r("td",[t._v("classWrapName")]),t._v(" "),r("td",[t._v("loading 外层的 class 名")]),t._v(" "),r("td",[t._v("Object, String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("classImgName")]),t._v(" "),r("td",[t._v("loading 图片的 class 名")]),t._v(" "),r("td",[t._v("Object, String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("imgType")]),t._v(" "),r("td",[t._v("loading 图片的 类型")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("gif")])]),t._v(" "),r("tr",[r("td",[t._v("imgStyle")]),t._v(" "),r("td",[t._v("loading 图片的 样式")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("imgHost")]),t._v(" "),r("td",[t._v("loading 图片的 路径")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("https://static2.evente.cn/static/img/")])]),t._v(" "),r("tr",[r("td",[t._v("imgName")]),t._v(" "),r("td",[t._v("loading 图片的 名字")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("loading201904171")])]),t._v(" "),r("tr",[r("td",[t._v("imgVersion")]),t._v(" "),r("td",[t._v("loading 图片的 版本")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("orgId")]),t._v(" "),r("td",[t._v("loading 图片的 特定版本，与 imgName 互斥")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])])])}],!1,null,null,null);e.default=_.exports}}]);