(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(6),o=(t(0),t(133)),i={id:"spring-boot",title:"REST API and Kafka Message Publishing"},l={id:"spring/javaSpring/spring-boot",isDocsHomePage:!1,title:"REST API and Kafka Message Publishing",description:"Time: 40 minutes",source:"@site/docs\\spring\\javaSpring\\javaSpring.md",permalink:"/code_now/docs/spring/javaSpring/spring-boot",editUrl:"https://github.com/VitSestak/code_now/docs/spring/javaSpring/javaSpring.md",sidebar:"Docs",previous:{title:"Local development with CodeNOW",permalink:"/code_now/docs/local_development/local-dev"},next:{title:"User admin",permalink:"/code_now/docs/user_adm/useAdm"}},c=[{value:"What you&#39;ll learn",id:"what-youll-learn",children:[]},{value:"Project source",id:"project-source",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],p={rightToc:c};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Time: 40 minutes"),Object(o.b)("h2",{id:"what-youll-learn"},"What you'll learn"),Object(o.b)("p",null,"How to setup your application for : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"connecting to Kafka and publishing messages to its\u2019 topic,"),Object(o.b)("li",{parentName:"ul"},"getting data from REST API, "),Object(o.b)("li",{parentName:"ul"},"providing data to REST API. ")),Object(o.b)("p",null,"In this tutorial, we will create a simple java component with java spring-boot scaffolder. We want to expose a single REST endpoint for getting client data. Client data is provided by another REST component client-data-db, so we need to configure a spring rest call for it. Any access to client data should be logged in the Kafka topic, so we need Kafka client configuration as well."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/spring/javaSpring/img/ClientDataService.png",alt:"Client data service image"}))),Object(o.b)("h2",{id:"project-source"},"Project source"),Object(o.b)("p",null,"This example project can be cloned from: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:git@gitlab.factory.innobank.codenow.com"}),"git@gitlab.factory.innobank.codenow.com"),"\n:innobank/client-data-service.git)"),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Prepare your local development environment for CodeNOW with Java Spring Boot. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Follow the tutorial instructions in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.codenow.com/docs/local-development-with-codenow/java-spring-boot-local-development/"}),"Java Spring Boot Local Development"),"."))),Object(o.b)("li",{parentName:"ul"},"Run Apache Kafka locally. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use docker compose as described in the section ",Object(o.b)("em",{parentName:"li"},"Docker compose and third-party tools")," of the Java Spring Boot Local Development tutorial. "))),Object(o.b)("li",{parentName:"ul"},"Create a new component",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For details see the section ",Object(o.b)("em",{parentName:"li"},"Prerequisites")," of the Java Spring Boot Local Development tutorial. ")))),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("p",null,"Open your IDE, import created component and start coding:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Define the message payload. Here is an example of the Client, which is a simple POJO with basic client data:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"generate getters and setters with your IDE"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  package io.codenow.client.data.service.model;\n02 \n03  import java.time.LocalDate;\n04 \n05  public class Client {\n06     private String username;\n07     private String firstname;\n08     private String surname;\n09     private LocalDate birthdate;\n10 \n11  }\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next prepare the configuration for the Kafka logging client:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to Kafka administration console (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/"}),"http://localhost:9000")," if using Kafdrop from our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/local-development-with-codenow/java-spring-boot-local-development/"}),"Java Spring Local Development")," manual.) and create a new topic ",Object(o.b)("strong",{parentName:"p"},"client-logging"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add maven dependency to your pom.xml"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  <dependency>\n02      <groupId>org.springframework.kafka</groupId>\n03      <artifactId>spring-kafka</artifactId>\n04  </dependency>\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More detail about spring-kafka: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/projects/spring-kafka"}),"https://spring.io/projects/spring-kafka"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Now add the configuration for Kafka template to your Application.java (package io.codenow.client.data.service): "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'01     \n02  @Value("${kafka.broker.url}") private String kafkaBrokerUrl;\n03 \n04    @Bean\n05    public ProducerFactory<String, String> producerFactory() {\n06        return new DefaultKafkaProducerFactory<>(producerConfigs());\n07    }\n08 \n09    @Bean\n10    public Map<String, Object> producerConfigs() {\n11        Map<String, Object> props = new HashMap<>();\n12        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBrokerUrl);\n13        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n14        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n15        // See https://kafka.apache.org/documentation/#producerconfigs for more properties\n16        return props;\n17    }\n18 \n19    @Bean\n20    public KafkaTemplate<String, String> kafkaTemplate() {\n21        return new KafkaTemplate<String, String>(producerFactory());\n22    }\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next, create a new controller and put all the parts together"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More detail about spring REST controller:  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/guides/gs/rest-service/"}),"https://spring.io/guides/gs/rest-service/")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'01  package io.codenow.client.data.service.controller;\n02   \n03  import org.slf4j.Logger;\n04  import org.slf4j.LoggerFactory;\n05  import org.springframework.beans.factory.annotation.Value;\n06  import org.springframework.kafka.core.KafkaTemplate;\n07  import org.springframework.web.bind.annotation.GetMapping;\n08  import org.springframework.web.bind.annotation.PathVariable;\n09  import org.springframework.web.bind.annotation.RequestMapping;\n10  import org.springframework.web.bind.annotation.RestController;\n11  import org.springframework.web.reactive.function.client.WebClient;\n12 \n13  import io.codenow.client.data.service.model.Client;\n14  import reactor.core.publisher.Flux;\n15 \n16  @RestController\n17  @RequestMapping("/data")\n18  public class ClientDataController {\n19      private static final Logger LOG = LoggerFactory.getLogger(ClientDataController.class);\n20 \n21      private String clientDataDBURL;\n22      private String kafkaTopicName;\n23      private String kafkaTopicKey;\n24      private KafkaTemplate<String, String> kafkaTemplate;\n25 \n26 \n27      public ClientDataController(@Value("${endpoint.client.data.db}") String clientDataDBURL, @Value("${kafka.topic.name}") String           kafkaTopicName, KafkaTemplate<String, String> kafkaTemplate, @Value("${kafka.topic.key}") String kafkaTopicKey) {\n28       super();\n29       this.clientDataDBURL = clientDataDBURL;\n30       this.kafkaTopicName = kafkaTopicName;\n31       this.kafkaTemplate = kafkaTemplate;\n32       this.kafkaTopicKey = kafkaTopicKey;\n33      }\n34   \n35      @GetMapping("/{username}")\n36      private Flux<Client> getClientData(@PathVariable String username) {\n37       LOG.info("Get data for username: {}", username);\n38       kafkaTemplate.send(kafkaTopicName, kafkaTopicKey, username);\n39 \n40       Flux<Client> clientFlux = WebClient.create().get().uri(clientDataDBURL + "/db/clients/" + username).retrieve()\n         .bodyToFlux(Client.class);\n41 \n42       clientFlux.subscribe(client -> LOG.info(client.toString()));\n43       return clientFlux;\n44 \n45      }\n46  }\n'))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Last but not least, append the configuration for Kafka to ",Object(o.b)("em",{parentName:"p"},"config/application.yaml")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Note that this configuration depends on your local development setup for Kafka and can be different case-by-case.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure you follow yaml syntax (especially whitespaces)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"01  endpoint:\n02    client:\n03      data:\n04      db: http://client-data-db\n05  kafka:\n06    broker:\n07      url: client-logging-kafka-kafka-brokers.managed-components:9092\n08    topic:\n09      name: client-logging\n10      key: client-data-service\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Try to build and run the application in your IDE. After startup, you should be able to access your new controller\u2019s swagger: ",Object(o.b)("strong",{parentName:"p"},"http://localhost:8080/swagger/index.html")))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/spring/javaSpring/img/ClientDataService_swagger.png",alt:"ClientDataServiceImageSwagger"}))),Object(o.b)("h2",{id:"whats-next"},"What\u2019s next?"),Object(o.b)("p",null,"If your code works in local development, you are ready to push your changes to GIT and try to build and deploy your new component version to the CodeNOW environment. For more information see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/administration-manuals/deploy-application/"}),"Application Deployment")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codenow.com/docs/administration-manuals/deployment-monitoring/"}),"Monitoring"),", just make sure to ",Object(o.b)("strong",{parentName:"p"},"change application.yaml properties from the local to the production setup.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.codenow.com/docs/managed-components-administration/get-new-apache-kafka/"}),"Get New Apache Kafka")," for setup in the CodeNOW environment.")))}s.isMDXComponent=!0}}]);