(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"h5-键盘兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h5-键盘兼容性","aria-hidden":"true"}},[s._v("#")]),s._v(" H5 键盘兼容性")]),s._v(" "),t("h2",{attrs:{id:"_1-键盘弹出的不同表现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-键盘弹出的不同表现","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 键盘弹出的不同表现")]),s._v(" "),t("ul",[t("li",[s._v("IOS：IOS 的键盘处在窗口的最上层，当键盘弹起时，webview 的高度 height 并没有改变，只是 scrollTop 发生变化，页面可以滚动。且页面可以滚动的最大限度为弹出的键盘的高度，而只有键盘弹出时页面恰好也滚动到最底部时，scrollTop 的变化值为键盘的高度，其他情况下则无法获取。这就导致在 IOS 情况下难以获取键盘的真实高度。")]),s._v(" "),t("li",[s._v("Android: webview 中留出空间，该空间小于等于的键盘空间，变化的高度差会随着布局而不同，有的认为 ==键盘高度 + 页面高度 = 原页面高度；== 是错误的误导，只有在某种很巧合的布局情况下才可套用此公式。")])]),s._v(" "),t("h2",{attrs:{id:"_2-键盘收起的不同表现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-键盘收起的不同表现","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 键盘收起的不同表现")]),s._v(" "),t("ul",[t("li",[s._v("IOS：触发键盘上的按钮收起键盘或者输入框以外的页面区域时，输入框会失去焦点，因此会触发输入框的 blur 事件。")]),s._v(" "),t("li",[s._v("Android: 触发键盘上的按钮收起键盘时，输入框并不会失去焦点，因此不会触发页面的 blur 事件；触发输入框以外的区域时，输入框会失去焦点，触发输入框的 blur 事件。")])]),s._v(" "),t("h2",{attrs:{id:"_3-监听键盘的弹出与收起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-监听键盘的弹出与收起","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 监听键盘的弹出与收起")]),s._v(" "),t("p",[s._v("在 h5 中目前没有接口可以直接监听键盘事件，但我们可以通过分析键盘弹出、收起的触发过程及表现形式，来判断键盘是弹出还是收起的状态。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("键盘弹出：输入框获取焦点时会自动触发键盘的弹起动作，因此，我们可以监听输入框的 focus 事件，在里面实现键盘弹出后所需的页面逻辑。这在 ios 及 android 中表现一致。")])]),s._v(" "),t("li",[t("p",[s._v("键盘收起：从第 2 部分可知，触发键盘收起的不同形式会存在差异化表现，当触发其他页面区域收起键盘时，我们可以监听输入框的 blur 事件，在里面实现键盘收起后所需的页面逻辑。而在通过键盘按钮收起键盘时在 ios 与 android 端存在差异化表现，下面具体分析：")]),s._v(" "),t("ul",[t("li",[s._v("IOS：触发了输入框 blur 事件，仍然通过该办法监听。")]),s._v(" "),t("li",[s._v("Android：没有触发输入框的 blur 事件。但通过第 1、2 部分我们可以知道，在 android 中，键盘的状态切换（弹出、收起）不仅和输入框关联，同时还会影响到 webview 高度的变化，那我们不妨通过监听 webview height 的变化来判断键盘是否收起。")])])]),s._v(" "),t("li",[t("p",[s._v("下面举例说明，其中页面中含有一个输入框：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<div class="txd"> \n\tWelcome to TXD!  \n</div>\n<div class="input">\n\t<input id="input" type="tel" />\n</div>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("ios & android 键盘弹出：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const $input = document.getElementById('input');\n$input.addEventListener('focus', () => {\n\t// 处理键盘弹出后所需的页面逻辑\n}, false);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("ios 键盘收起：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const $input = document.getElementById('input');\n$input.addEventListener('blur', () => {\n\t// 处理键盘收起后所需的页面逻辑\n}, false);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("android 键盘弹出与收起：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/*键盘弹起后页面高度变小*/\nconst originHeight = document.documentElement.clientHeight || document.body.clientHeight;\nwindow.addEventListener('resize', () => {\n\tconst resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;\n\tif (resizeHeight < originHeight) {\n\t\t// 键盘弹起所后所需的页面逻辑\n\t} else {\n\t\t// 键盘弹起所后所需的页面逻辑\n\t}\n}, false);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("在实践中通过判断 userAgent 来决定使用哪种方法：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const ua = window.navigator.userAgent.toLocaleLowerCase();\nconst isIOS = /iphone|ipad|ipod/.test(ua);\nconst isAndroid = /android/.test(ua);、\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-小结","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. 小结")]),s._v(" "),t("ol",[t("li",[s._v("在 ios 中，无论何种布局，为了使输入框展示在可视区域中，键盘弹出时，页面会向上滚动，该过程与 Element.scrollIntoViewIfNeeded() 方法（将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域）产生的效果一致；且高度始终不变，页面可滚动。")]),s._v(" "),t("li",[s._v("在 android 中，键盘唤起后，页面可滚动与否由其处在正常文档流中的元素决定：如果正常文档流中的元素可全量展示，页面不可滚动，否则页面支持滚动；")]),s._v(" "),t("li",[s._v("在 android 中，键盘唤起后，fixed 元素的基准会发生变化：根据 bottom 定位的元素，其基线变为键盘上部；根据 top 定位的元素，仍然根据页面顶部，因此为照顾正常文档流及 fixed 元素的用户体验，有的元素可根据顶部定位，有的可以根据底部定位。")])])])}],!1,null,null,null);e.default=a.exports}}]);