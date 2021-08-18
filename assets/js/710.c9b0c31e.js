(window.webpackJsonp=window.webpackJsonp||[]).push([[710],{1435:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"class-jsonentitystore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-jsonentitystore"}},[s._v("#")]),s._v(" Class JsonEntityStore")]),s._v(" "),a("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { JsonEntityStore } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/schema"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.62.4/packages/schema/src/domain/JsonEntityStore.ts#L0-L0"}},[s._v("/packages/schema/src/domain/JsonEntityStore.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" JsonEntityStore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Entity.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Entity")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStoreOptions.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStoreOptions")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),a("a",{pre:!0,attrs:{href:"/api/core/domain/DecoratorTypes.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("DecoratorTypes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<JsonEntityStore>>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Store.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Store")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" isStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token keyword">readonly</span> children<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span> | <span class="token keyword">number</span><span class="token punctuation">,</span> JsonEntityStore&gt;<span class="token punctuation">;</span>\n\npath<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> _schema<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> _operation<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonOperation.html"><span class="token">JsonOperation</span></a><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> _parameter<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonParameter.html"><span class="token">JsonParameter</span></a><span class="token punctuation">;</span>\n<span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">constructor</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonEntityStoreOptions.html"><span class="token">JsonEntityStoreOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nget <span class="token function">schema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">;</span>\n\nget <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonOperation.html"><span class="token">JsonOperation</span></a> | undefined<span class="token punctuation">;</span>\n\nget <span class="token function">parameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonParameter.html"><span class="token">JsonParameter</span></a> | undefined<span class="token punctuation">;</span>\nget <span class="token function">nestedGenerics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nset <span class="token function">nestedGenerics</span><span class="token punctuation">(</span>nestedGenerics<span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nget <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt; | <span class="token keyword">any</span><span class="token punctuation">;</span>\n\nset <span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt; | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nget <span class="token function">computedType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\nget <span class="token function">itemSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">;</span>\nget <span class="token function">parentSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">;</span>\nget <span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> JsonEntityStore<span class="token punctuation">;</span>\n\nget <span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n\nset <span class="token function">required</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">allowedRequiredValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">static</span> <span class="token keyword">from</span>&lt;T <span class="token keyword">extends</span> JsonEntityStore<span class="token punctuation"> = </span>JsonEntityStore&gt;<span class="token punctuation">(</span>...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> NonNullable&lt;T&gt;<span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token function">fromMethod</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span><span class="token punctuation">:</span> JsonEntityStore<span class="token punctuation">;</span>\n<span class="token function">getResponseOptions</span><span class="token punctuation">(</span>contentType?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> undefined | <span class="token keyword">any</span><span class="token punctuation">;</span>\n\n<span class="token function">isRequired</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">createProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">createOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonOperation.html"><span class="token">JsonOperation</span></a><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">createParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonParameter.html"><span class="token">JsonParameter</span></a><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),a("a",{pre:!0,attrs:{href:"/api/core/domain/DecoratorTypes.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("DecoratorTypes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),s._v(">>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Store.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Store")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" isStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("List of children JsonEntityStore (properties or methods or params)")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Path used to generate open spec.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Ref to JsonSchema")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonOperation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonOperation")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Ref to JsonOperation when the decorated object is a method.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonParameter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonParameter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Ref to JsonParameter when the decorated object is a parameter.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the JsonSchema")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonOperation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonOperation")])]),s._v(" | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the JsonOperation")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonParameter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonParameter")])]),s._v(" | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the JsonParameter")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nestedGenerics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("set "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nestedGenerics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nestedGenerics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v("> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("set "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v("> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Get original type without transformation")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("computedType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the itemSchema computed type. if the type is a function used for recursive model, the function will be called to\nget the right type.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("itemSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parentSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the required state.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("set "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Change the state of the required data.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("allowedRequiredValues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("<T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("...args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NonNullable<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonEntityStore")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResponseOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("contentType?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" undefined | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isRequired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Check precondition between value, required and allowedRequiredValues to know if the entity is required.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonOperation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonOperation")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createParameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonParameter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonParameter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);