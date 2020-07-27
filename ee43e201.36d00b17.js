(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(142)),i=a(143),c={id:"spring-boot",title:"REST API and Kafka Message Publishing"},l={id:"spring/javaSpring/spring-boot",isDocsHomePage:!1,title:"REST API and Kafka Message Publishing",description:"Time: 40 minutes",source:"@site/docs\\spring\\javaSpring\\javaSpring.mdx",permalink:"/code_now/docs/spring/javaSpring/spring-boot",editUrl:"https://github.com/VitSestak/code_now/docs/spring/javaSpring/javaSpring.mdx",sidebar:"Docs",previous:{title:"Java Spring Boot \u2013 Local Development",permalink:"/code_now/docs/local_development/springLocDev/sprLocDev"},next:{title:"Invite new collaborator",permalink:"/code_now/docs/user_adm/invNewCol"}},p=[{value:"What you&#39;ll learn",id:"what-youll-learn",children:[]},{value:"Project source",id:"project-source",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],s={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Time: 40 minutes"),Object(o.b)("h2",{id:"what-youll-learn"},"What you'll learn"),Object(o.b)("p",null,"How to setup your application for : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"connecting to Kafka and publishing messages to its\u2019 topic,"),Object(o.b)("li",{parentName:"ul"},"getting data from REST API, "),Object(o.b)("li",{parentName:"ul"},"providing data to REST API. ")),Object(o.b)("p",null,"In this tutorial, we will create a simple java component with java spring-boot scaffolder. We want to expose a single REST endpoint for getting client data. Client data is provided by another REST component client-data-db, so we need to configure a spring rest call for it. Any access to client data should be logged in the Kafka topic, so we need Kafka client configuration as well."),Object(o.b)("img",{alt:"ClientDataServiceImage",src:Object(i.a)("img/spring/springBoot/ClientDataService.png")}),Object(o.b)("h2",{id:"project-source"},"Project source"),Object(o.b)("p",null,"This example project can be cloned from: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:git@gitlab.factory.innobank.codenow.com"}),"git@gitlab.factory.innobank.codenow.com"),"\n:innobank/client-data-service.git)"),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Prepare your local development environment for CodeNOW with Java Spring Boot. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Follow the tutorial instructions in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.codenow.com/docs/local-development-with-codenow/java-spring-boot-local-development/"}),"Java Spring Boot Local Development"),"."))),Object(o.b)("li",{parentName:"ul"},"Run Apache Kafka locally. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use docker compose as described in the section ",Object(o.b)("em",{parentName:"li"},"Docker compose and third-party tools")," of the Java Spring Boot Local Development tutorial. "))),Object(o.b)("li",{parentName:"ul"},"Create a new component",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For details see the section ",Object(o.b)("em",{parentName:"li"},"Prerequisites")," of the Java Spring Boot Local Development tutorial. ")))),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("p",null,"Open your IDE, import created component and start coding:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Define the message payload. Here is an example of the Client, which is a simple POJO with basic client data:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"generate getters and setters with your IDE"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  package io.codenow.client.data.service.model;\n02 \n03  import java.time.LocalDate;\n04 \n05  public class Client {\n06     private String username;\n07     private String firstname;\n08     private String surname;\n09     private LocalDate birthdate;\n10 \n11  }\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next prepare the configuration for the Kafka logging client:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to Kafka administration console (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/"}),"http://localhost:9000")," if using Kafdrop from our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/local-development-with-codenow/java-spring-boot-local-development/"}),"Java Spring Local Development")," manual.) and create a new topic ",Object(o.b)("strong",{parentName:"p"},"client-logging"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add maven dependency to your pom.xml"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  <dependency>\n02      <groupId>org.springframework.kafka</groupId>\n03      <artifactId>spring-kafka</artifactId>\n04  </dependency>\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More detail about spring-kafka: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/projects/spring-kafka"}),"https://spring.io/projects/spring-kafka"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Now add the configuration for Kafka template to your Application.java (package io.codenow.client.data.service): "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'01     \n02  @Value("${kafka.broker.url}") private String kafkaBrokerUrl;\n03 \n04    @Bean\n05    public ProducerFactory<String, String> producerFactory() {\n06        return new DefaultKafkaProducerFactory<>(producerConfigs());\n07    }\n08 \n09    @Bean\n10    public Map<String, Object> producerConfigs() {\n11        Map<String, Object> props = new HashMap<>();\n12        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBrokerUrl);\n13        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n14        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n15        // See https://kafka.apache.org/documentation/#producerconfigs for more properties\n16        return props;\n17    }\n18 \n19    @Bean\n20    public KafkaTemplate<String, String> kafkaTemplate() {\n21        return new KafkaTemplate<String, String>(producerFactory());\n22    }\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next, create a new controller and put all the parts together"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More detail about spring REST controller:  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/guides/gs/rest-service/"}),"https://spring.io/guides/gs/rest-service/")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'01  package io.codenow.client.data.service.controller;\n02   \n03  import org.slf4j.Logger;\n04  import org.slf4j.LoggerFactory;\n05  import org.springframework.beans.factory.annotation.Value;\n06  import org.springframework.kafka.core.KafkaTemplate;\n07  import org.springframework.web.bind.annotation.GetMapping;\n08  import org.springframework.web.bind.annotation.PathVariable;\n09  import org.springframework.web.bind.annotation.RequestMapping;\n10  import org.springframework.web.bind.annotation.RestController;\n11  import org.springframework.web.reactive.function.client.WebClient;\n12 \n13  import io.codenow.client.data.service.model.Client;\n14  import reactor.core.publisher.Flux;\n15 \n16  @RestController\n17  @RequestMapping("/data")\n18  public class ClientDataController {\n19      private static final Logger LOG = LoggerFactory.getLogger(ClientDataController.class);\n20 \n21      private String clientDataDBURL;\n22      private String kafkaTopicName;\n23      private String kafkaTopicKey;\n24      private KafkaTemplate<String, String> kafkaTemplate;\n25 \n26 \n27      public ClientDataController(@Value("${endpoint.client.data.db}") String clientDataDBURL, @Value("${kafka.topic.name}") String           kafkaTopicName, KafkaTemplate<String, String> kafkaTemplate, @Value("${kafka.topic.key}") String kafkaTopicKey) {\n28       super();\n29       this.clientDataDBURL = clientDataDBURL;\n30       this.kafkaTopicName = kafkaTopicName;\n31       this.kafkaTemplate = kafkaTemplate;\n32       this.kafkaTopicKey = kafkaTopicKey;\n33      }\n34   \n35      @GetMapping("/{username}")\n36      private Flux<Client> getClientData(@PathVariable String username) {\n37       LOG.info("Get data for username: {}", username);\n38       kafkaTemplate.send(kafkaTopicName, kafkaTopicKey, username);\n39 \n40       Flux<Client> clientFlux = WebClient.create().get().uri(clientDataDBURL + "/db/clients/" + username).retrieve()\n         .bodyToFlux(Client.class);\n41 \n42       clientFlux.subscribe(client -> LOG.info(client.toString()));\n43       return clientFlux;\n44 \n45      }\n46  }\n'))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Last but not least, append the configuration for Kafka to ",Object(o.b)("em",{parentName:"p"},"config/application.yaml")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Note that this configuration depends on your local development setup for Kafka and can be different case-by-case.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure you follow yaml syntax (especially whitespaces)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  endpoint:\n02    client:\n03      data:\n04      db: http://client-data-db\n05  kafka:\n06    broker:\n07      url: client-logging-kafka-kafka-brokers.managed-components:9092\n08    topic:\n09      name: client-logging\n10      key: client-data-service\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Try to build and run the application in your IDE. After startup, you should be able to access your new controller\u2019s swagger: ",Object(o.b)("strong",{parentName:"p"},"http://localhost:8080/swagger/index.html")))),Object(o.b)("img",{alt:"ClientDataServiceImageSwagger",src:Object(i.a)("img/spring/springBoot/clientDataService_swagger.png")}),Object(o.b)("h2",{id:"whats-next"},"What\u2019s next?"),Object(o.b)("p",null,"If your code works in local development, you are ready to push your changes to GIT and try to build and deploy your new component version to the CodeNOW environment. For more information see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/administration-manuals/deploy-application/"}),"Application Deployment")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/administration-manuals/deployment-monitoring/"}),"Monitoring"),", just make sure to ",Object(o.b)("strong",{parentName:"p"},"change application.yaml properties from the local to the production setup.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.codenow.com/docs/managed-components-administration/get-new-apache-kafka/"}),"Get New Apache Kafka")," for setup in the CodeNOW environment.")))}b.isMDXComponent=!0},141:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,g=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(g,c(c({ref:t},p),{},{components:a})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(141),r=a(144);function o(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(r.a)(e))return e;const c=o+e.replace(/^\//,"");return a?i+c:c}},144:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);