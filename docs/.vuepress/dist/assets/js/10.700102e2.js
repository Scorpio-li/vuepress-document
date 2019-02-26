(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{173:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题","aria-hidden":"true"}},[a._v("#")]),a._v(" 面试题")]),a._v(" "),s("h2",{attrs:{id:"操作计算题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作计算题","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作计算题")]),a._v(" "),s("h3",{attrs:{id:"_1-console-log-1-2-3-map-parseint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-console-log-1-2-3-map-parseint","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. console.log(['1','2','3'].map(parseInt))")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("答案：[1,NaN,NaN]")])]),a._v(" "),s("li",[s("p",[a._v("解析：")]),a._v(" "),s("ul",[s("li",[a._v("map的参数：\n"),s("ol",[s("li",[s("p",[a._v("currentValue\ncallback 数组中正在处理的当前元素。")])]),a._v(" "),s("li",[s("p",[a._v("**index可选 ** 看到这里先注意起来这个参数，思考一下\ncallback 数组中正在处理的当前元素的索引。")])]),a._v(" "),s("li",[s("p",[a._v("array可选\ncallback  map 方法被调用的数组。")])])])]),a._v(" "),s("li",[a._v("parseInt参数：\n"),s("ul",[s("li",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/22/1691435685020630?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"parseInt"}})]),a._v(" "),s("li",[a._v("string: 必须，要被解析的字符串")]),a._v(" "),s("li",[a._v("radix：可选。表示要解析的数字的基数。")])])])])]),a._v(" "),s("li",[s("p",[a._v("实际调用情况：")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("parseInt('1',0,theArray);\nparseInt('2',1,theArray);\nparseInt('3',2,theArray);\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[s("p",[a._v("第一次，当我我们第一次调用的时候 是这样的：parseInt('1',0) 这个是没问题的 转十进制的 看我红框的图片\n返回 1")])]),a._v(" "),s("li",[s("p",[a._v("第二次，调用第二个index参数是1,也是说1作为数值的基础。规范里说的很清楚了，如果基础是非0或者小于2，函数都不会查询字符串直接返回NaN。")])]),a._v(" "),s("li",[s("p",[a._v("第三次，2作为基数。这就意味着字符串将被解析成字节数，也就是仅仅包含数值0和1。parseInt的规范第十一步指出，它仅尝试分析第一个字符的左侧，这个字符还不是要求基数的有效数字。这个字符串的第一个字符是“3”，它并不是基础基数2的一个有效数字。所以这个子字符串将被解析为空。第十二步说了：如果子字符串被解析成空了，函数将返回为NaN。")])]),a._v(" "),s("li",[s("p",[a._v("解决：")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("['1','2','3'].map(function(value){\n        return parseInt(value)\n})\n\x3c!--或--\x3e\n['1','2','3'].map(Number)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}],!1,null,null,null);e.default=n.exports}}]);