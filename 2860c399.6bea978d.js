(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),l=n(6),i=(n(0),n(142)),r=n(143),c={id:"depApp",title:"Deploy application"},o={id:"admin_manuals/depApp",isDocsHomePage:!1,title:"Deploy application",description:"Context",source:"@site/docs\\admin_manuals\\deployApplication.mdx",permalink:"/code_now/docs/admin_manuals/depApp",editUrl:"https://github.com/VitSestak/code_now/docs/admin_manuals/deployApplication.mdx",sidebar:"Docs",previous:{title:"Create a New Component",permalink:"/code_now/docs/admin_manuals/creNewCom"},next:{title:"Create a new environment",permalink:"/code_now/docs/admin_manuals/creNewEnv"}},p=[{value:"Context",id:"context",children:[]},{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Screenshots",id:"screenshots",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"context"},"Context"),Object(i.b)("p",null,"After fierce development/integration/testing/\u2026, it\u2019s time to deploy the application into the CodeNOW application environment. "),Object(i.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(i.b)("p",null,"-",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://codenow.danielsadek.cz/documentation/create-new-application/"}),"Create new application and application components")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improve application components code")),Object(i.b)("h2",{id:"steps"},"Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Build a new component version",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An application release has to contain only released components because it makes clear which fixed bugs and newly developed features are contained in a particular build."),Object(i.b)("li",{parentName:"ul"},"A released component:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"is tagged in git,"),Object(i.b)("li",{parentName:"ul"},"has updated its pom.xml descriptors,"),Object(i.b)("li",{parentName:"ul"},"is uploaded to the nexus artifact repository."))),Object(i.b)("li",{parentName:"ul"},"Developers can check the build progress in CI/CD Builds Overview."))),Object(i.b)("li",{parentName:"ol"},"See the result of code quality check",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SonarQube is the most popular open-source tool for static code analysis and is integrated into CodeNOW. See more about the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.sonarqube.org/latest/"}),"SonarQube"),". "),Object(i.b)("li",{parentName:"ul"},"Let\u2019s use the default oxus-java profile for quality check."),Object(i.b)("li",{parentName:"ul"},"Code quality check is a good first-line measure to evaluate overall code quality."),Object(i.b)("li",{parentName:"ul"},"Defining quality gateways help for first glance decisions on whether the code is release-ready."),Object(i.b)("li",{parentName:"ul"},"If the code quality is too low, improve your code and build a new component version (STEP 1)"))),Object(i.b)("li",{parentName:"ol"},"Repeat STEP 1 and STEP 2 for each improved application component"),Object(i.b)("li",{parentName:"ol"},"Create application package",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Define application package version."),Object(i.b)("li",{parentName:"ul"},"Select which components (and which version of components) to include in the application package.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An application package consists of individual component released builds with individual build versions."),Object(i.b)("li",{parentName:"ul"},"An application package is merely a descriptor, so far no real deployment exists."),Object(i.b)("li",{parentName:"ul"},"An application as an orchestration of components is delivered to the selected environment as the whole package."))))),Object(i.b)("li",{parentName:"ol"},"Define deployment configuration",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Select the target environment and application package version. "))),Object(i.b)("li",{parentName:"ol"},"Deploy the application. "),Object(i.b)("li",{parentName:"ol"},"Check the application deployment status using CI / CD Deployments Overview. ")),Object(i.b)("h2",{id:"screenshots"},"Screenshots"),Object(i.b)("p",null,"Step 1.1"),Object(i.b)("img",{alt:"dep1.1",src:Object(r.a)("img/admin_manuals/deployApplication/dep1_1.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 1.2"),Object(i.b)("img",{alt:"dep1.2",src:Object(r.a)("img/admin_manuals/deployApplication/dep1_2.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 1.3"),Object(i.b)("img",{alt:"dep1.3",src:Object(r.a)("img/admin_manuals/deployApplication/dep1_3.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 1.4"),Object(i.b)("img",{alt:"dep1.4",src:Object(r.a)("img/admin_manuals/deployApplication/dep1_4.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 1.5"),Object(i.b)("img",{alt:"dep1.5",src:Object(r.a)("img/admin_manuals/deployApplication/dep1_5.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 2.1"),Object(i.b)("img",{alt:"dep2.1",src:Object(r.a)("img/admin_manuals/deployApplication/dep2_1.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 2.2"),Object(i.b)("img",{alt:"dep2.2",src:Object(r.a)("img/admin_manuals/deployApplication/dep2_2.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 4.1"),Object(i.b)("img",{alt:"dep4.1",src:Object(r.a)("img/admin_manuals/deployApplication/dep4_1.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 4.2"),Object(i.b)("img",{alt:"dep4.2",src:Object(r.a)("img/admin_manuals/deployApplication/dep4_2.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 5.1"),Object(i.b)("img",{alt:"dep5.1",src:Object(r.a)("img/admin_manuals/deployApplication/dep5_1.png")}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Step 5.2"),Object(i.b)("img",{alt:"dep5.2",src:Object(r.a)("img/admin_manuals/deployApplication/dep5_2.png")}),Object(i.b)("br",null),Object(i.b)("br",null))}u.isMDXComponent=!0},141:function(e,t,n){"use strict";var a=n(0),l=n(35);t.a=function(){return Object(a.useContext)(l.a)}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||s[d]||i;return n?l.a.createElement(m,c(c({ref:t},p),{},{components:n})):l.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(141),l=n(144);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(l.a)(e))return e;const c=i+e.replace(/^\//,"");return n?r+c:c}},144:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);