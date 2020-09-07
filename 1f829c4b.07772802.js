(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(l,".").concat(s)]||m[s]||b[s]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(144)),l={id:"reaLocDev",title:"Javascript React Local Development",slug:"javascript-react-local-development"},c={id:"locDevWitCodNow/reaLocDev",isDocsHomePage:!1,title:"Javascript React Local Development",description:"\ud83d\udd53 15 minutes",source:"@site/docs\\locDevWitCodNow\\javascriptReactLocalDevelopment.mdx",permalink:"/code_now/docs/locDevWitCodNow/javascript-react-local-development",editUrl:"https://github.com/VitSestak/code_now/docs/locDevWitCodNow/javascriptReactLocalDevelopment.mdx"},i=[{value:"What you\u2019ll learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare local development IDE",id:"prepare-local-development-ide",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],p={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\ud83d\udd53 15 minutes "),Object(o.b)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),Object(o.b)("p",null,"How to set up your local development environment for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Javascript React"),Object(o.b)("li",{parentName:"ul"},"Run the developed component in the local development mode on your machine. ")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new CodeNOW component in your application.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use the Javascript React scaffolder."),Object(o.b)("li",{parentName:"ul"},"See the ",Object(o.b)("em",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://vitsestak.github.io/code_now/docs/admMan/creNewCom/"}),"How to Create a New Application Component"))," tutorial.")))),Object(o.b)("h2",{id:"prepare-local-development-ide"},"Prepare local development IDE"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone code from the created git repository to your local machine."),Object(o.b)("li",{parentName:"ul"},"Use your favourite IDE and import the repository as a maven project. You must have:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"an installed npm package manager ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"https://www.npmjs.com/")))),Object(o.b)("li",{parentName:"ul"},"To run the project in local development setup, check README.md",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For installation of the required npm modules, go to project root and run the command below",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm install")))),Object(o.b)("li",{parentName:"ul"},"To start the project in development mode, run the command",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm start")))),Object(o.b)("li",{parentName:"ul"},"The application starts in development mode on the local machine, running on default port 3000"))),Object(o.b)("li",{parentName:"ul"},"You can start your browser now and go to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"))),Object(o.b)("h2",{id:"whats-next"},"What\u2019s next?"),Object(o.b)("p",null,"Now you are ready to start with some development. See the other developer manuals. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Javascript React UI with REST HTTP call")))}u.isMDXComponent=!0}}]);