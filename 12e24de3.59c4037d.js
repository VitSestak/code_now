(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(144)),c=n(146),i={id:"creNewApp",title:"Create a New Application",slug:"create-new-application"},p={id:"admMan/creNewApp",isDocsHomePage:!1,title:"Create a New Application",description:"\ud83d\udd53 5 minutes",source:"@site/docs\\admMan\\createNewApplication.mdx",permalink:"/code_now/docs/admMan/create-new-application",editUrl:"https://github.com/VitSestak/code_now/docs/admMan/createNewApplication.mdx",sidebar:"Docs",previous:{title:"Java Micronaut REST API",permalink:"/code_now/docs/javMicExa/java-micronaut-rest-api"},next:{title:"Create a New Application Component",permalink:"/code_now/docs/admMan/create-new-component"}},l=[{value:"What you\u2019ll learn?",id:"what-youll-learn",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Screenshot",id:"screenshot",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\ud83d\udd53 5 minutes"),Object(o.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn?"),Object(o.b)("p",null,"How to create a new application. "),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new application in your customer space.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"An application consists of one or more simple microservice components. "),Object(o.b)("li",{parentName:"ul"},"An application in the microservice architecture is described by application components and their orchestration."))),Object(o.b)("li",{parentName:"ol"},"See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://vitsestak.github.io/code_now/docs/admMan/creNewCom/"}),"How to Create a New Application Component")," tutorial.")),Object(o.b)("h2",{id:"screenshot"},"Screenshot"),Object(o.b)("img",{alt:"createApp",src:Object(c.a)("img/admMan/createNewApp/createApp.png")}))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(145),a=n(147);function o(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:o="/",url:c}={}}=Object(r.a)();if(!e)return e;if(t)return o+e;if(!Object(a.a)(e))return e;const i=o+e.replace(/^\//,"");return n?c+i:i}},147:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);