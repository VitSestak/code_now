(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(142)),o=n(143),i={id:"getNewApaKaf",title:"Get new Apache Kafka"},l={id:"manComAdm/getNewApaKaf",isDocsHomePage:!1,title:"Get new Apache Kafka",description:"Context",source:"@site/docs\\manComAdm\\getNewApacheKafka.mdx",permalink:"/code_now/docs/manComAdm/getNewApaKaf",editUrl:"https://github.com/VitSestak/code_now/docs/manComAdm/getNewApacheKafka.mdx",sidebar:"Docs",previous:{title:"SSH settings",permalink:"/code_now/docs/useAdm/sshSet"},next:{title:"Get new PostgreSQL",permalink:"/code_now/docs/manComAdm/getNewPos"}},p=[{value:"Context",id:"context",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Screenshot",id:"screenshot",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"context"},"Context"),Object(c.b)("p",null,"You want to create a new instance of Apache Kafka streaming data platform. "),Object(c.b)("h2",{id:"steps"},"Steps"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Choose the ",Object(c.b)("em",{parentName:"li"},"Get New Services")," in the ",Object(c.b)("em",{parentName:"li"},"Marketplace")," menu."),Object(c.b)("li",{parentName:"ol"},"Add selected service Apache Kafka."),Object(c.b)("li",{parentName:"ol"},"Type new instance service name, choose the box for deployment, and confirm it."),Object(c.b)("li",{parentName:"ol"},"Wait for request processing and see the details of the new Apache Kafka instance. ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Use the admin panel link and generated credentials for ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/obsidiandynamics/kafdrop"}),"Kafdrop")," \u2013 tool for monitoring Apache Kafka. The tool e.g. displays brokers, topics, partitions, and messages."),Object(c.b)("li",{parentName:"ul"},"For connection from your component use connection string and your favorite Kafka client.")))),Object(c.b)("h2",{id:"screenshot"},"Screenshot"),Object(c.b)("p",null,"App 125"),Object(c.b)("img",{alt:"app125",src:Object(o.a)("img/manComAdm/getNewApacheKafka/app125.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("p",null,"Kafka 125"),Object(c.b)("img",{alt:"kafka125",src:Object(o.a)("img/manComAdm/getNewApacheKafka/kafka125.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("p",null,"Step 1,2,3"),Object(c.b)("img",{alt:"fullKafka",src:Object(o.a)("img/manComAdm/getNewApacheKafka/fullKafka.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("p",null,"Step 4a"),Object(c.b)("img",{alt:"kafkaDetailStep",src:Object(o.a)("img/manComAdm/getNewApacheKafka/kafkaDetailStep5.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("p",null,"Step 4b"),Object(c.b)("img",{alt:"kafkaAdminPanel",src:Object(o.a)("img/manComAdm/getNewApacheKafka/kafkaAdminPanelStep5b.png")}))}s.isMDXComponent=!0},141:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(141),r=n(144);function c(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:c="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return c+e;if(!Object(r.a)(e))return e;const i=c+e.replace(/^\//,"");return n?o+i:i}},144:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);