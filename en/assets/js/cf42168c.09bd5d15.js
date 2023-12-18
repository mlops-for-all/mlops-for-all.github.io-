"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8376],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"1. What is API Deployment?",description:"",sidebar_position:1,date:new Date("2021-12-22T00:00:00.000Z"),lastmod:new Date("2021-12-22T00:00:00.000Z"),contributors:["Youngcheol Jang"]},i=void 0,l={unversionedId:"api-deployment/what-is-api-deployment",id:"api-deployment/what-is-api-deployment",title:"1. What is API Deployment?",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api-deployment/what-is-api-deployment.md",sourceDirName:"api-deployment",slug:"/api-deployment/what-is-api-deployment",permalink:"/en/docs/api-deployment/what-is-api-deployment",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/what-is-api-deployment.md",tags:[],version:"current",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"1. What is API Deployment?",description:"",sidebar_position:1,date:"2021-12-22T00:00:00.000Z",lastmod:"2021-12-22T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"13. Component - Debugging",permalink:"/en/docs/kubeflow/how-to-debug"},next:{title:"2. Deploy SeldonDeployment",permalink:"/en/docs/api-deployment/seldon-iris"}},s={},p=[{value:"What is API Deployment?",id:"what-is-api-deployment",level:2},{value:"Serving Framework",id:"serving-framework",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-api-deployment"},"What is API Deployment?"),(0,o.kt)("p",null,"After training a machine learning model, how should it be used? When training a machine learning model, you expect a model with higher performance to come out, but when you infer with the trained model, you want to get the inference results quickly and easily."),(0,o.kt)("p",null,"When you want to check the inference results of the model, you can load the trained model and infer through a Jupyter notebook or a Python script. However, this method becomes inefficient as the model gets bigger, and you can only use the model in the environment where the trained model exists and cannot be used by many people."),(0,o.kt)("p",null,"Therefore, when machine learning is used in actual services, it uses an API to use the trained model. The model is loaded only once in the environment where the API server is running, and you can easily get the inference results using DNS, and you can also link it with other services."),(0,o.kt)("p",null,"However, there is a lot of ancillary work necessary to make the model into an API. In order to make it easier to make an API, machine learning frameworks such as Tensorflow have developed inference engines."),(0,o.kt)("p",null,"Using inference engines, we can create APIs (REST or gRPC) that can load and infer from machine learning models developed and trained in the corresponding frameworks. When we send a request with the data we want to infer to an API server built using these inference engines, the engine performs the inference and sends back the results in the response."),(0,o.kt)("p",null,"Some well-known open-source inference engines include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tensorflow/serving"},"Tensorflow: Tensorflow Serving")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pytorch/serve"},"PyTorch: Torchserve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/onnxruntime"},"ONNX: ONNX Runtime"))),(0,o.kt)("p",null,"While not officially supported in open-source, there are also inference engines developed for popular frameworks like sklearn and XGBoost."),(0,o.kt)("p",null,"Deploying and serving the model's inference results through an API is called ",(0,o.kt)("strong",{parentName:"p"},"API deployment"),"."),(0,o.kt)("h2",{id:"serving-framework"},"Serving Framework"),(0,o.kt)("p",null,"I introduced the fact that various inference engines have been developed. Now, if we want to deploy these inference engines in a Kubernetes environment for API deployment, what steps are involved? We need to deploy various Kubernetes resources such as Deployments for the inference engines, Services to create endpoints for sending inference requests, and Ingress to forward external inference requests to the inference engines. Additionally, we may need to handle requirements such as scaling out when there is a high volume of inference requests, monitoring the status of the inference engines, and updating the version when an improved model is available. There are many considerations when operating an inference engine, and it goes beyond just a few tasks."),(0,o.kt)("p",null,"To address these requirements, serving frameworks have been developed to further abstract the deployment of inference engines in a Kubernetes environment."),(0,o.kt)("p",null,"Some popular serving frameworks include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core"},"Seldon Core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kserve"},"Kserve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bentoml/BentoML"},"BentoML"))),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"MLOps for ALL"),", we use Seldon Core to demonstrate the process of API deployment."))}u.isMDXComponent=!0}}]);