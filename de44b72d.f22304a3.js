(window.webpackJsonp=window.webpackJsonp||[]).push([[33,11,22,25],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return f})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return N})),a.d(t,"default",(function(){return w}));var o=a(2),n=a(6),r=a(0),l=a.n(r),i=a(144),c=a(152),p=a(148),u=a(131),s=a.n(u);const b=37,m=39;var d=function(e){const{block:t,children:a,defaultValue:o,values:n,groupId:i}=e,{tabGroupChoices:u,setTabGroupChoices:d}=Object(c.a)(),[h,j]=Object(r.useState)(o);if(null!=i){const e=u[i];null!=e&&e!==h&&n.some(t=>t.value===e)&&j(e)}const O=e=>{j(e),null!=i&&d(i,e)},v=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(p.a)("tabs",{"tabs--block":t})},n.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(p.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter(e=>e.props.value===h)[0]))};var h=function(e){return l.a.createElement("div",null,e.children)},j=a(92),O=a(94),v=a(93),f={id:"locDev",title:"Local Development"},g={id:"locDevWitCodNow/locDev",isDocsHomePage:!1,title:"Local Development",description:"Choose tutorial:",source:"@site/docs\\locDevWitCodNow\\localDevelopment.mdx",permalink:"/code_now/docs/locDevWitCodNow/locDev",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/localDevelopment.mdx",sidebar:"Docs",previous:{title:"Deployment Monitoring",permalink:"/code_now/docs/admMan/depMon"},next:{title:"REST API and Kafka Message Publishing",permalink:"/code_now/docs/javSprBooExa/resApiAndKafMesPub"}},N=[{value:"Choose tutorial:",id:"choose-tutorial",children:[]}],y={rightToc:N};function w(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"choose-tutorial"},"Choose tutorial:"),Object(i.b)(d,{defaultValue:"mic",values:[{label:"Micronaut",value:"mic"},{label:"Spring Boot",value:"spring"},{label:"React",value:"react"}],mdxType:"Tabs"},Object(i.b)(h,{value:"mic",mdxType:"TabItem"},Object(i.b)(j.default,{mdxType:"Micronaut"})),Object(i.b)(h,{value:"spring",mdxType:"TabItem"},Object(i.b)(O.default,{mdxType:"Spring"})),Object(i.b)(h,{value:"react",mdxType:"TabItem"},Object(i.b)(v.default,{mdxType:"JSReact"}))))}w.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=o,d=s["".concat(l,".").concat(m)]||s[m]||b[m]||r;return a?n.a.createElement(d,i(i({ref:t},p),{},{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},148:function(e,t,a){"use strict";function o(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},151:function(e,t,a){"use strict";var o=a(0);const n=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=n},152:function(e,t,a){"use strict";var o=a(0),n=a(151);t.a=function(){return Object(o.useContext)(n.a)}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a(2),n=a(6),r=(a(0),a(144)),l={id:"micLocDev",title:"Java Micronaut \u2013 Local Development"},i={id:"locDevWitCodNow/micLocDev",isDocsHomePage:!1,title:"Java Micronaut \u2013 Local Development",description:"\ud83d\udd53 30 minutes",source:"@site/docs\\locDevWitCodNow\\javaMicronautLocalDevelopment.mdx",permalink:"/code_now/docs/locDevWitCodNow/micLocDev",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/javaMicronautLocalDevelopment.mdx"},c=[{value:"What you\u2019ll learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare local development IDE",id:"prepare-local-development-ide",children:[]},{value:"Docker compose and third-party tools",id:"docker-compose-and-third-party-tools",children:[]}],p={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83d\udd53 30 minutes "),Object(r.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),Object(r.b)("p",null,"How to set up your local development environment for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Micronaut component development. "),Object(r.b)("li",{parentName:"ul"},"Run the developed component in the local development mode on your machine.")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new CodeNOW component in your application.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use the Java Micronaut scaffolder."),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("em",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://vitsestak.github.io/code_now/docs/admMan/creNewCom/"}),"How to Create a New Application Component"))," tutorial.")))),Object(r.b)("h2",{id:"prepare-local-development-ide"},"Prepare local development IDE"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clone code from the created git repository to your local machine."),Object(r.b)("li",{parentName:"ul"},"Use your favourite IDE and import repository as a maven project. You will require:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Java 11+"),Object(r.b)("li",{parentName:"ul"},"Enable maven support in your IDE and install Apache maven (if required) \u2013 ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://maven.apache.org/ide.html"}),"http://maven.apache.org/ide.html")," "),Object(r.b)("li",{parentName:"ul"},"Enable Micronaut support \u2013 ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.micronaut.io/latest/guide/quickStart.html#ideSetup"}),"https://docs.micronaut.io/latest/guide/quickStart.html#ideSetup"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Make sure you enabled \u201cEnable annotation processing\u201d checkbox in your IDE\u2019s maven configuration.")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run the project in the local development setup, check README.md . The required minimum is to set the path to Micronaut configuration file as a JVM startup parameter:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dmicronaut.config.files=file:config/application.yaml"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Check the Run configuration dialog in your IDE and set this line as a VM argument")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start Run/Debug in your IDE.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The component should successfully start up with port 8080 exposed"),Object(r.b)("li",{parentName:"ul"},"Check the swagger-ui by clicking on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:8080/swagger/index.html"}),"http://localhost:8080/swagger/index.html"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For more information about the Swagger UI check: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://swagger.io/tools/swagger-ui/"}),"https://swagger.io/tools/swagger-ui/")),Object(r.b)("li",{parentName:"ul"},"Swagger UI is used as a simple swagger presentation UI."),Object(r.b)("li",{parentName:"ul"},"Any changes must apply to the swagger.yaml in the src/main/resources/META-INF/swagger directory"),Object(r.b)("li",{parentName:"ul"},"The same swagger UI is used as a documentation tool and is also an easy way to test the functionality of your component\u2019s API.")))))),Object(r.b)("h2",{id:"docker-compose-and-third-party-tools"},"Docker compose and third-party tools"),Object(r.b)("p",null,"Some manuals for CodeNOW work with different third-party components like Apache Kafka or Redis. The easiest way for local development is to download the publicly available docker compose receipts. Some examples used during the writing of this manual:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"More about docker compose: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(r.b)("li",{parentName:"ul"},"Kafka with Kafdrop: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git"}),"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git")),Object(r.b)("li",{parentName:"ul"},"Redis with Redis Commander: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/ikknd/docker-study.git"}),"https://github.com/ikknd/docker-study.git")),Object(r.b)("li",{parentName:"ul"},"PostgreSQL with PgAdmin: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/khezen/compose-postgres.git"}),"https://github.com/khezen/compose-postgres.git"))))}u.isMDXComponent=!0},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a(2),n=a(6),r=(a(0),a(144)),l={id:"reaLocDev",title:"Javascript React Local Development"},i={id:"locDevWitCodNow/reaLocDev",isDocsHomePage:!1,title:"Javascript React Local Development",description:"\ud83d\udd53 15 minutes",source:"@site/docs\\locDevWitCodNow\\javascriptReactLocalDevelopment.mdx",permalink:"/code_now/docs/locDevWitCodNow/reaLocDev",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/javascriptReactLocalDevelopment.mdx"},c=[{value:"What you\u2019ll learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare local development IDE",id:"prepare-local-development-ide",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],p={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83d\udd53 15 minutes "),Object(r.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),Object(r.b)("p",null,"How to set up your local development environment for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Javascript React"),Object(r.b)("li",{parentName:"ul"},"Run the developed component in the local development mode on your machine. ")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new CodeNOW component in your application.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use the Javascript React scaffolder."),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("em",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://vitsestak.github.io/code_now/docs/admMan/creNewCom/"}),"How to Create a New Application Component"))," tutorial.")))),Object(r.b)("h2",{id:"prepare-local-development-ide"},"Prepare local development IDE"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clone code from the created git repository to your local machine."),Object(r.b)("li",{parentName:"ul"},"Use your favourite IDE and import the repository as a maven project. You must have:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"an installed npm package manager ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"https://www.npmjs.com/")))),Object(r.b)("li",{parentName:"ul"},"To run the project in local development setup, check README.md",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For installation of the required npm modules, go to project root and run the command below",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm install")))),Object(r.b)("li",{parentName:"ul"},"To start the project in development mode, run the command",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm start")))),Object(r.b)("li",{parentName:"ul"},"The application starts in development mode on the local machine, running on default port 3000"))),Object(r.b)("li",{parentName:"ul"},"You can start your browser now and go to ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"))),Object(r.b)("h2",{id:"whats-next"},"What\u2019s next?"),Object(r.b)("p",null,"Now you are ready to start with some development. See the other developer manuals. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Javascript React UI with REST HTTP call")))}u.isMDXComponent=!0},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a(2),n=a(6),r=(a(0),a(144)),l={id:"sprLocDev",title:"Java Spring Boot \u2013 Local Development"},i={id:"locDevWitCodNow/sprLocDev",isDocsHomePage:!1,title:"Java Spring Boot \u2013 Local Development",description:"\ud83d\udd53 30 minutes",source:"@site/docs\\locDevWitCodNow\\javaSpringBootLocalDevelopment.mdx",permalink:"/code_now/docs/locDevWitCodNow/sprLocDev",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/javaSpringBootLocalDevelopment.mdx"},c=[{value:"What you\u2019ll learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare local development IDE",id:"prepare-local-development-ide",children:[]},{value:"Docker compose and third-party tools",id:"docker-compose-and-third-party-tools",children:[]}],p={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83d\udd53 30 minutes "),Object(r.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),Object(r.b)("p",null,"How to set up your local development environment for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Spring Boot component development. "),Object(r.b)("li",{parentName:"ul"},"Run the developed component in the local development mode on your machine.")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new CodeNOW component in your application.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use the Java Spring Boot scaffolder."),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("em",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://vitsestak.github.io/code_now/docs/admMan/creNewCom/"}),"How to Create a New Application Component"))," tutorial.")))),Object(r.b)("h2",{id:"prepare-local-development-ide"},"Prepare local development IDE"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clone code from the created git repository to your local machine."),Object(r.b)("li",{parentName:"ul"},"Use your favourite IDE and import repository as a maven project. You will require:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Java 11+"),Object(r.b)("li",{parentName:"ul"},"Enable Maven support in your IDE and install Apache maven (if required) \u2013 ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://maven.apache.org/ide.html"}),"http://maven.apache.org/ide.html")," ")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run the project in the local development setup, check README.md . The required minimum is to set the path to Micronaut configuration file as a JVM startup parameter:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dmicronaut.config.files=file:config/application.yaml"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Check the Run configuration dialog in your IDE and set this line as a VM argument"))),Object(r.b)("li",{parentName:"ul"},"NOTE: You can also configure this server to listen on a custom port (the default port is 8080).",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dserver.port=9090")),Object(r.b)("li",{parentName:"ul"},"This comes in handy when running multiple projects at once, which is very common with micro-service oriented architecture.")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start Run/Debug in your IDE.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The component should successfully start up with port 8080 exposed"),Object(r.b)("li",{parentName:"ul"},"Check the swagger-ui by clicking on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:8080/swagger/index.html"}),"http://localhost:8080/swagger/index.html"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For more information about the Swagger UI check: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://swagger.io/tools/swagger-ui/"}),"https://swagger.io/tools/swagger-ui/")),Object(r.b)("li",{parentName:"ul"},"Swagger UI is used as a simple swagger presentation UI."),Object(r.b)("li",{parentName:"ul"},"Any changes must apply to the swagger.yaml in the src/main/resources/META-INF/swagger directory"),Object(r.b)("li",{parentName:"ul"},"The same swagger UI is used as a documentation tool and is also an easy way to test the functionality of your component\u2019s API.")))))),Object(r.b)("h2",{id:"docker-compose-and-third-party-tools"},"Docker compose and third-party tools"),Object(r.b)("p",null,"Some manuals for CodeNOW work with different third-party components like Apache Kafka or Redis. The easiest way for local development is to download the publicly available docker compose receipts. Some examples used during the writing of this manual:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"More about docker compose: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(r.b)("li",{parentName:"ul"},"Kafka with Kafdrop: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git"}),"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git")),Object(r.b)("li",{parentName:"ul"},"Redis with Redis Commander: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/ikknd/docker-study.git"}),"https://github.com/ikknd/docker-study.git")),Object(r.b)("li",{parentName:"ul"},"PostgreSQL with PgAdmin: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/khezen/compose-postgres.git"}),"https://github.com/khezen/compose-postgres.git"))))}u.isMDXComponent=!0}}]);