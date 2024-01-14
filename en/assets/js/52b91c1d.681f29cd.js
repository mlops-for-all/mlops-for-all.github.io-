"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=l,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const s={title:"2. Deploy SeldonDeployment",description:"",sidebar_position:2,date:new Date("2021-12-22T00:00:00.000Z"),lastmod:new Date("2021-12-22T00:00:00.000Z"),contributors:["Youngcheol Jang","SeungTae Kim"]},r=void 0,o={unversionedId:"api-deployment/seldon-iris",id:"api-deployment/seldon-iris",title:"2. Deploy SeldonDeployment",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api-deployment/seldon-iris.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-iris",permalink:"/en/docs/api-deployment/seldon-iris",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/seldon-iris.md",tags:[],version:"current",lastUpdatedBy:"conqrean",lastUpdatedAt:1705274857,formattedLastUpdatedAt:"Jan 14, 2024",sidebarPosition:2,frontMatter:{title:"2. Deploy SeldonDeployment",description:"",sidebar_position:2,date:"2021-12-22T00:00:00.000Z",lastmod:"2021-12-22T00:00:00.000Z",contributors:["Youngcheol Jang","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. What is API Deployment?",permalink:"/en/docs/api-deployment/what-is-api-deployment"},next:{title:"3. Seldon Monitoring",permalink:"/en/docs/api-deployment/seldon-pg"}},i={},d=[{value:"Deploy with SeldonDeployment",id:"deploy-with-seldondeployment",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:4},{value:"2. Define Spec",id:"2-define-spec",level:3},{value:"Ingress URL",id:"ingress-url",level:2},{value:"NODE_IP / NODE_PORT",id:"node_ip--node_port",level:3},{value:"namespace / seldon-deployment-name",id:"namespace--seldon-deployment-name",level:3},{value:"method-name",id:"method-name",level:3},{value:"Using Swagger",id:"using-swagger",level:2},{value:"1. Accessing Swagger",id:"1-accessing-swagger",level:3},{value:"2. Selecting Swagger Predictions",id:"2-selecting-swagger-predictions",level:3},{value:"3. Choosing <em>Try it out</em>",id:"3-choosing-try-it-out",level:3},{value:"4. Inputting data in the Request body",id:"4-inputting-data-in-the-request-body",level:3},{value:"5. Check the inference results",id:"5-check-the-inference-results",level:3},{value:"Using CLI",id:"using-cli",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...s}=e;return(0,l.kt)(c,(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"deploy-with-seldondeployment"},"Deploy with SeldonDeployment"),(0,l.kt)("p",null,"Let's deploy our trained model as an API using SeldonDeployment. SeldonDeployment is a custom resource definition (CRD) defined to deploy models as REST/gRPC servers on Kubernetes."),(0,l.kt)("h4",{id:"1-prerequisites"},"1. Prerequisites"),(0,l.kt)("p",null,"We will conduct the SeldonDeployment related practice in a new namespace called seldon-deploy. After creating the namespace, set seldon-deploy as the current namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace seldon-deploy\nkubectl config set-context --current --namespace=seldon-deploy\n")),(0,l.kt)("h3",{id:"2-define-spec"},"2. Define Spec"),(0,l.kt)("p",null,"Generate a yaml file to deploy SeldonDeployment.\nIn this page, we will use a publicly available iris model.\nBecause this iris model is trained through the sklearn framework, we use SKLEARN_SERVER."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > iris-sdep.yaml\napiVersion: machinelearning.seldon.io/v1alpha2\nkind: SeldonDeployment\nmetadata:\n  name: sklearn\n  namespace: seldon-deploy\nspec:\n  name: iris\n  predictors:\n  - graph:\n      children: []\n      implementation: SKLEARN_SERVER\n      modelUri: gs://seldon-models/v1.12.0-dev/sklearn/iris\n      name: classifier\n    name: default\n    replicas: 1\nEOF\n")),(0,l.kt)("p",null,"Deploy yaml file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f iris-sdep.yaml\n")),(0,l.kt)("p",null,"Check if the deployment was successful through the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --selector seldon-app=sklearn-default -n seldon-deploy\n")),(0,l.kt)("p",null,"If everyone runs, similar results will be printed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                            READY   STATUS    RESTARTS   AGE\nsklearn-default-0-classifier-5fdfd7bb77-ls9tr   2/2     Running   0          5m\n")),(0,l.kt)("h2",{id:"ingress-url"},"Ingress URL"),(0,l.kt)("p",null,"Now, send a inference request to the deployed model to get the inference result. The API created by the SeldonDeployment follows the following rule:\n",(0,l.kt)("inlineCode",{parentName:"p"},"http://{NODE_IP}:{NODE_PORT}/seldon/{namespace}/{seldon-deployment-name}/api/v1.0/{method-name}/")),(0,l.kt)("h3",{id:"node_ip--node_port"},"NODE_IP / NODE_PORT"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/en/docs/setup-components/install-components-seldon"},"Since Seldon Core was installed with Ambassador as the Ingress Controller"),", all APIs created by SeldonDeployment can be requested through the Ambassador Ingress gateway."),(0,l.kt)("p",null,"Therefore, first set the url of the Ambassador Ingress Gateway as an environment variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export NODE_IP=$(kubectl get nodes -o jsonpath=\'{ $.items[*].status.addresses[?(@.type=="InternalIP")].address }\')\nexport NODE_PORT=$(kubectl get service ambassador -n seldon-system -o jsonpath="{.spec.ports[0].nodePort}")\n')),(0,l.kt)("p",null,"Check the set url."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "NODE_IP"=$NODE_IP\necho "NODE_PORT"=$NODE_PORT\n')),(0,l.kt)("p",null,"It should be outputted similarly as follows, and if set through the cloud, you can check that internal IP address is set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_IP=192.168.0.19\nNODE_PORT=30486\n")),(0,l.kt)("h3",{id:"namespace--seldon-deployment-name"},"namespace / seldon-deployment-name"),(0,l.kt)("p",null,"This refers to the ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"seldon-deployment-name")," where the SeldonDeployment is deployed and used to define the values defined in the metadata when defining the spec."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"metadata:\n  name: sklearn\n  namespace: seldon-deploy\n")),(0,l.kt)("p",null,"In the example above, ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," is seldon-deploy, ",(0,l.kt)("inlineCode",{parentName:"p"},"seldon-deployment-name")," is sklearn."),(0,l.kt)("h3",{id:"method-name"},"method-name"),(0,l.kt)("p",null,"In SeldonDeployment, the commonly used ",(0,l.kt)("inlineCode",{parentName:"p"},"method-name")," has two options:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"doc"),(0,l.kt)("li",{parentName:"ol"},"predictions")),(0,l.kt)("p",null,"The detailed usage of each method is explained below."),(0,l.kt)("h2",{id:"using-swagger"},"Using Swagger"),(0,l.kt)("p",null,"First, let's explore how to use the doc method, which allows access to the Swagger generated by Seldon."),(0,l.kt)("h3",{id:"1-accessing-swagger"},"1. Accessing Swagger"),(0,l.kt)("p",null,"According to the provided ingress URL rules, you can access the Swagger documentation using the following URL:\n",(0,l.kt)("inlineCode",{parentName:"p"},"http://192.168.0.19:30486/seldon/seldon-deploy/sklearn/api/v1.0/doc/")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger1.png",src:t(1885).Z,width:"3068",height:"1650"})),(0,l.kt)("h3",{id:"2-selecting-swagger-predictions"},"2. Selecting Swagger Predictions"),(0,l.kt)("p",null,"In the Swagger UI, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"/seldon/seldon-deploy/sklearn/api/v1.0/predictions")," endpoint."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger2.png",src:t(2260).Z,width:"3068",height:"1652"})),(0,l.kt)("h3",{id:"3-choosing-try-it-out"},"3. Choosing ",(0,l.kt)("em",{parentName:"h3"},"Try it out")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger3.png",src:t(982).Z,width:"3069",height:"1653"})),(0,l.kt)("h3",{id:"4-inputting-data-in-the-request-body"},"4. Inputting data in the Request body"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger4.png",src:t(6070).Z,width:"3072",height:"1652"})),(0,l.kt)("p",null,"Enter the following data into the Request body."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "data": {\n    "ndarray":[[1.0, 2.0, 5.0, 6.0]]\n  }\n}\n')),(0,l.kt)("h3",{id:"5-check-the-inference-results"},"5. Check the inference results"),(0,l.kt)("p",null,"You can click the ",(0,l.kt)("inlineCode",{parentName:"p"},"Execute")," button to obtain the inference result."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger5.png",src:t(8481).Z,width:"3583",height:"1969"})),(0,l.kt)("p",null,"If everything is executed successfully, you will obtain the following inference result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "data": {\n    "names": [\n      "t:0",\n      "t:1",\n      "t:2"\n    ],\n    "ndarray": [\n      [\n        9.912315378486697e-7,\n        0.0007015931307746079,\n        0.9992974156376876\n      ]\n    ]\n  },\n  "meta": {\n    "requestPath": {\n      "classifier": "seldonio/sklearnserver:1.11.2"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"using-cli"},"Using CLI"),(0,l.kt)("p",null,"Also, you can use http client CLI tools such as curl to make API requests.\nFor example, requesting ",(0,l.kt)("inlineCode",{parentName:"p"},"/predictions")," as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://$NODE_IP:$NODE_PORT/seldon/seldon-deploy/sklearn/api/v1.0/predictions \\\n-H 'Content-Type: application/json' \\\n-d '{ \"data\": { \"ndarray\": [[1,2,3,4]] } }'\n")),(0,l.kt)("p",null,"You can confirm that the following response is outputted normally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"data":{"names":["t:0","t:1","t:2"],"ndarray":[[0.0006985194531162835,0.00366803903943666,0.995633441507447]]},"meta":{"requestPath":{"classifier":"seldonio/sklearnserver:1.11.2"}}}\n')))}u.isMDXComponent=!0},1885:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger1-1d3574d988c85be7534f518f1e5fe097.png"},2260:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger2-ff43013f3e20de5f305d2215a599aa88.png"},982:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger3-af84538f8d07efd95a2e820e32be2670.png"},6070:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger4-8ba33dee625455b3de8326a6677ac6ca.png"},8481:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger5-53bd997e4f2e7f1904edebd974c6e128.png"}}]);