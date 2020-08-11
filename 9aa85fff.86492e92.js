(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(2),o=a(6),n=(a(0),a(144)),i={id:"sprLocDev",title:"Java Spring Boot \u2013 Local Development"},l={id:"locDevWitCodNow/sprLocDev",isDocsHomePage:!1,title:"Java Spring Boot \u2013 Local Development",description:"Time: 30 minutes",source:"@site/docs\\locDevWitCodNow\\javaSpringBootLocalDevelopment.md",permalink:"/code_now/docs/locDevWitCodNow/sprLocDev",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/javaSpringBootLocalDevelopment.md"},c=[{value:"What you\u2019ll learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare local development IDE",id:"prepare-local-development-ide",children:[]},{value:"Docker compose and third-party tools",id:"docker-compose-and-third-party-tools",children:[]}],p={rightToc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Time: 30 minutes "),Object(n.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),Object(n.b)("p",null,"How to set up your local development environment for:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Java Spring Boot component development. "),Object(n.b)("li",{parentName:"ul"},"Run developed component in local development mode on your machine.")),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a new CodeNOW component in your application.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use the Java Spring Boot scaffolder."),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("em",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://www.codenow.com/docs/administration-manuals/create-new-component/"}),"How to Create a New Application Component"))," tutorial.")))),Object(n.b)("h2",{id:"prepare-local-development-ide"},"Prepare local development IDE"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clone code from the created git repository to your local machine."),Object(n.b)("li",{parentName:"ul"},"Use your favourite IDE and import repository as a maven project. You will require:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Java 11+"),Object(n.b)("li",{parentName:"ul"},"Enable maven support in your IDE and install Apache maven (if required) \u2013 ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://maven.apache.org/ide.html"}),"http://maven.apache.org/ide.html")," "),Object(n.b)("li",{parentName:"ul"},"Enable Micronaut support \u2013 ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.micronaut.io/latest/guide/quickStart.html#ideSetup"}),"https://docs.micronaut.io/latest/guide/quickStart.html#ideSetup"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Make sure you enabled \u201cEnable annotation processing\u201d checkbox in your IDE\u2019s maven configuration.")))))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To run the project in the local development setup, check README.md . The required minimum is to set the path to Micronaut configuration file as a JVM startup parameter:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"-Dmicronaut.config.files=file:config/application.yaml",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Check the Run configuration dialog in your IDE and set this line as a VM argument")))))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start Run/Debug in your IDE.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The component should successfully start up with port 8080 exposed"),Object(n.b)("li",{parentName:"ul"},"Check the swagger-ui by clicking on ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:8080/swagger/index.html"}),"http://localhost:8080/swagger/index.html"))))),Object(n.b)("p",null,"For more information about the Swagger UI check: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/tools/swagger-ui/"}),"https://swagger.io/tools/swagger-ui/")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Swagger UI is used as a simple swagger presentation UI."),Object(n.b)("li",{parentName:"ul"},"Any changes must apply to the swagger.yaml in the src/main/resources/META-INF/swagger directory"),Object(n.b)("li",{parentName:"ul"},"The same swagger UI is used as a documentation tool and is also an easy way to test the functionality of your component\u2019s API.")),Object(n.b)("h2",{id:"docker-compose-and-third-party-tools"},"Docker compose and third-party tools"),Object(n.b)("p",null,"Some manuals for CodeNOW work with different third-party components like Apache Kafka or Redis. The easiest way for local development is to download the publicly available docker compose receipts. Some examples used during the writing of this manual:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"More about docker compose: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(n.b)("li",{parentName:"ul"},"Kafka with Kafdrop: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git"}),"https://github.com/StratoxEnterprises/oxus-docker-kafka-dev.git")),Object(n.b)("li",{parentName:"ul"},"Redis with Redis Commander: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ikknd/docker-study.git"}),"https://github.com/ikknd/docker-study.git")),Object(n.b)("li",{parentName:"ul"},"PostgreSQL with PgAdmin: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/khezen/compose-postgres.git"}),"https://github.com/khezen/compose-postgres.git"))))}u.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||n;return a?o.a.createElement(d,l(l({ref:t},p),{},{components:a})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);