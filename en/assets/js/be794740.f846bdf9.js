"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=l,g=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={title:"2. Deploy SeldonDeployment",description:"",sidebar_position:2,date:new Date("2021-12-22T00:00:00.000Z"),lastmod:new Date("2021-12-22T00:00:00.000Z"),contributors:["Youngcheol Jang","SeungTae Kim"]},o=void 0,s={unversionedId:"api-deployment/seldon-iris",id:"version-1.0/api-deployment/seldon-iris",title:"2. Deploy SeldonDeployment",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/api-deployment/seldon-iris.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-iris",permalink:"/en/docs/1.0/api-deployment/seldon-iris",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/api-deployment/seldon-iris.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:2,frontMatter:{title:"2. Deploy SeldonDeployment",description:"",sidebar_position:2,date:"2021-12-22T00:00:00.000Z",lastmod:"2021-12-22T00:00:00.000Z",contributors:["Youngcheol Jang","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. What is API Deployment?",permalink:"/en/docs/1.0/api-deployment/what-is-api-deployment"},next:{title:"3. Seldon Monitoring",permalink:"/en/docs/1.0/api-deployment/seldon-pg"}},i={},p=[{value:"SeldonDeployment\ub97c \ud1b5\ud574 \ubc30\ud3ec\ud558\uae30",id:"seldondeployment\ub97c-\ud1b5\ud574-\ubc30\ud3ec\ud558\uae30",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:3},{value:"2. \uc2a4\ud399 \uc815\uc758",id:"2-\uc2a4\ud399-\uc815\uc758",level:3},{value:"Ingress URL",id:"ingress-url",level:2},{value:"NODE_IP / NODE_PORT",id:"node_ip--node_port",level:3},{value:"namespace / seldon-deployment-name",id:"namespace--seldon-deployment-name",level:3},{value:"method-name",id:"method-name",level:3},{value:"Use Swagger",id:"use-swagger",level:2},{value:"1. Swagger \uc811\uc18d",id:"1-swagger-\uc811\uc18d",level:3},{value:"2. Swagger Predictions \uba54\ub274 \uc120\ud0dd",id:"2-swagger-predictions-\uba54\ub274-\uc120\ud0dd",level:3},{value:"3. <em>Try it out</em> \uc120\ud0dd",id:"3-try-it-out-\uc120\ud0dd",level:3},{value:"4. Request body\uc5d0 data \uc785\ub825",id:"4-request-body\uc5d0-data-\uc785\ub825",level:3},{value:"5. \ucd94\ub860 \uacb0\uacfc \ud655\uc778",id:"5-\ucd94\ub860-\uacb0\uacfc-\ud655\uc778",level:3},{value:"Using CLI",id:"using-cli",level:2}],d={toc:p},m="wrapper";function c(e){let{components:n,...r}=e;return(0,l.kt)(m,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"seldondeployment\ub97c-\ud1b5\ud574-\ubc30\ud3ec\ud558\uae30"},"SeldonDeployment\ub97c \ud1b5\ud574 \ubc30\ud3ec\ud558\uae30"),(0,l.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ud559\uc2b5\ub41c \ubaa8\ub378\uc774 \uc788\uc744 \ub54c SeldonDeployment\ub97c \ud1b5\ud574 API Deployment\ub97c \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\nSeldonDeployment\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4(Kubernetes)\uc5d0 \ubaa8\ub378\uc744 REST/gRPC \uc11c\ubc84\uc758 \ud615\ud0dc\ub85c \ubc30\ud3ec\ud558\uae30 \uc704\ud574 \uc815\uc758\ub41c CRD(CustomResourceDefinition)\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"1-prerequisites"},"1. Prerequisites"),(0,l.kt)("p",null,"SeldonDeployment \uad00\ub828\ub41c \uc2e4\uc2b5\uc740 seldon-deploy\ub77c\ub294 \uc0c8\ub85c\uc6b4 \ub124\uc784\uc2a4\ud398\uc774\uc2a4(namespace)\uc5d0\uc11c \uc9c4\ud589\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0dd\uc131\ud55c \ub4a4, seldon-deploy\ub97c \ud604\uc7ac \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kubectl create namespace seldon-deploy\nkubectl config set-context --current --namespace=seldon-deploy\n")),(0,l.kt)("h3",{id:"2-\uc2a4\ud399-\uc815\uc758"},"2. \uc2a4\ud399 \uc815\uc758"),(0,l.kt)("p",null,"SeldonDeployment\ub97c \ubc30\ud3ec\ud558\uae30 \uc704\ud55c yaml \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.\n\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uacf5\uac1c\ub41c iris model\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\uc774 iris model\uc740 sklearn \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud1b5\ud574 \ud559\uc2b5\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 SKLEARN_SERVER\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"cat <<EOF > iris-sdep.yaml\napiVersion: machinelearning.seldon.io/v1alpha2\nkind: SeldonDeployment\nmetadata:\n  name: sklearn\n  namespace: seldon-deploy\nspec:\n  name: iris\n  predictors:\n  - graph:\n      children: []\n      implementation: SKLEARN_SERVER\n      modelUri: gs://seldon-models/v1.12.0-dev/sklearn/iris\n      name: classifier\n    name: default\n    replicas: 1\nEOF\n")),(0,l.kt)("p",null,"yaml \ud30c\uc77c\uc744 \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kubectl apply -f iris-sdep.yaml\n")),(0,l.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc815\uc0c1\uc801\uc73c\ub85c \ubc30\ud3ec\uac00 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get pods --selector seldon-app=sklearn-default -n seldon-deploy\n")),(0,l.kt)("p",null,"\ubaa8\ub450 Running \uc774 \ub418\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud55c \uacb0\uacfc\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"NAME                                            READY   STATUS    RESTARTS   AGE\nsklearn-default-0-classifier-5fdfd7bb77-ls9tr   2/2     Running   0          5m\n")),(0,l.kt)("h2",{id:"ingress-url"},"Ingress URL"),(0,l.kt)("p",null,"\uc774\uc81c \ubc30\ud3ec\ub41c \ubaa8\ub378\uc5d0 \ucd94\ub860 \uc694\uccad(predict request)\ub97c \ubcf4\ub0b4\uc11c \ucd94\ub860 \uacb0\uad0f\uac12\uc744 \ubc1b\uc544\uc635\ub2c8\ub2e4.\n\ubc30\ud3ec\ub41c API\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uaddc\uce59\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4.\n",(0,l.kt)("inlineCode",{parentName:"p"},"http://{NODE_IP}:{NODE_PORT}/seldon/{namespace}/{seldon-deployment-name}/api/v1.0/{method-name}/")),(0,l.kt)("h3",{id:"node_ip--node_port"},"NODE_IP / NODE_PORT"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-components/install-components-seldon"},"Seldon Core \uc124\uce58 \uc2dc, Ambassador\ub97c Ingress Controller\ub85c \uc124\uc815\ud558\uc600\uc73c\ubbc0\ub85c"),", SeldonDeployment\ub85c \uc0dd\uc131\ub41c API \uc11c\ubc84\ub294 \ubaa8\ub450 Ambassador\uc758 Ingress gateway\ub97c \ud1b5\ud574 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uc6b0\uc120 Ambassador Ingress Gateway\uc758 url\uc744 \ud658\uacbd \ubcc0\uc218\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'export NODE_IP=$(kubectl get nodes -o jsonpath=\'{ $.items[*].status.addresses[?(@.type=="InternalIP")].address }\')\nexport NODE_PORT=$(kubectl get service ambassador -n seldon-system -o jsonpath="{.spec.ports[0].nodePort}")\n')),(0,l.kt)("p",null,"\uc124\uc815\ub41c url\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'echo "NODE_IP"=$NODE_IP\necho "NODE_PORT"=$NODE_PORT\n')),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub418\uc5b4\uc57c \ud558\uba70, \ud074\ub77c\uc6b0\ub4dc \ub4f1\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uacbd\uc6b0, internal ip \uc8fc\uc18c\uac00 \uc124\uc815\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"NODE_IP=192.168.0.19\nNODE_PORT=30486\n")),(0,l.kt)("h3",{id:"namespace--seldon-deployment-name"},"namespace / seldon-deployment-name"),(0,l.kt)("p",null,"SeldonDeployment\uac00 \ubc30\ud3ec\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"seldon-deployment-name"),"\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.\n\uc774\ub294 \uc2a4\ud399\uc744 \uc815\uc758\ud560 \ub54c metadata\uc5d0 \uc815\uc758\ub41c \uac12\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"metadata:\n  name: sklearn\n  namespace: seldon-deploy\n")),(0,l.kt)("p",null,"\uc704\uc758 \uc608\uc2dc\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),"\ub294 seldon-deploy, ",(0,l.kt)("inlineCode",{parentName:"p"},"seldon-deployment-name"),"\uc740 sklearn \uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"method-name"},"method-name"),(0,l.kt)("p",null,"SeldonDeployment\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"method-name"),"\uc740 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"doc"),(0,l.kt)("li",{parentName:"ol"},"predictions")),(0,l.kt)("p",null,"\uac01\uac01\uc758 method\uc758 \uc790\uc138\ud55c \uc0ac\uc6a9 \ubc29\ubc95\uc740 \uc544\ub798\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"use-swagger"},"Use Swagger"),(0,l.kt)("p",null,"\uc6b0\uc120 doc method\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. doc method\ub97c \uc774\uc6a9\ud558\uba74 seldon\uc5d0\uc11c \uc0dd\uc131\ud55c swagger\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"1-swagger-\uc811\uc18d"},"1. Swagger \uc811\uc18d"),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c ingress url \uaddc\uce59\uc5d0 \ub530\ub77c \uc544\ub798 \uc8fc\uc18c\ub97c \ud1b5\ud574 swagger\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"http://192.168.0.19:30486/seldon/seldon-deploy/sklearn/api/v1.0/doc/")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger1.png",src:t(2909).Z,width:"3068",height:"1650"})),(0,l.kt)("h3",{id:"2-swagger-predictions-\uba54\ub274-\uc120\ud0dd"},"2. Swagger Predictions \uba54\ub274 \uc120\ud0dd"),(0,l.kt)("p",null,"UI\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"/seldon/seldon-deploy/sklearn/api/v1.0/predictions")," \uba54\ub274\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger2.png",src:t(1087).Z,width:"3068",height:"1652"})),(0,l.kt)("h3",{id:"3-try-it-out-\uc120\ud0dd"},"3. ",(0,l.kt)("em",{parentName:"h3"},"Try it out")," \uc120\ud0dd"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger3.png",src:t(5197).Z,width:"3069",height:"1653"})),(0,l.kt)("h3",{id:"4-request-body\uc5d0-data-\uc785\ub825"},"4. Request body\uc5d0 data \uc785\ub825"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger4.png",src:t(6669).Z,width:"3072",height:"1652"})),(0,l.kt)("p",null,"\ub2e4\uc74c \ub370\uc774\ud130\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "data": {\n    "ndarray":[[1.0, 2.0, 5.0, 6.0]]\n  }\n}\n')),(0,l.kt)("h3",{id:"5-\ucd94\ub860-\uacb0\uacfc-\ud655\uc778"},"5. \ucd94\ub860 \uacb0\uacfc \ud655\uc778"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Execute")," \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc11c \ucd94\ub860 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iris-swagger5.png",src:t(8503).Z,width:"3583",height:"1969"})),(0,l.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ucd94\ub860 \uacb0\uacfc\ub97c \uc5bb\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "data": {\n    "names": [\n      "t:0",\n      "t:1",\n      "t:2"\n    ],\n    "ndarray": [\n      [\n        9.912315378486697e-7,\n        0.0007015931307746079,\n        0.9992974156376876\n      ]\n    ]\n  },\n  "meta": {\n    "requestPath": {\n      "classifier": "seldonio/sklearnserver:1.11.2"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"using-cli"},"Using CLI"),(0,l.kt)("p",null,"\ub610\ud55c, curl\uacfc \uac19\uc740 http client CLI \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574\uc11c\ub3c4 API \uc694\uccad\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"/predictions"),"\ub97c \uc694\uccad\ud558\uba74"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"curl -X POST http://$NODE_IP:$NODE_PORT/seldon/seldon-deploy/sklearn/api/v1.0/predictions \\\n-H 'Content-Type: application/json' \\\n-d '{ \"data\": { \"ndarray\": [[1,2,3,4]] } }'\n")),(0,l.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \uc751\ub2f5\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'{"data":{"names":["t:0","t:1","t:2"],"ndarray":[[0.0006985194531162835,0.00366803903943666,0.995633441507447]]},"meta":{"requestPath":{"classifier":"seldonio/sklearnserver:1.11.2"}}}\n')))}c.isMDXComponent=!0},2909:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger1-1d3574d988c85be7534f518f1e5fe097.png"},1087:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger2-ff43013f3e20de5f305d2215a599aa88.png"},5197:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger3-af84538f8d07efd95a2e820e32be2670.png"},6669:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger4-8ba33dee625455b3de8326a6677ac6ca.png"},8503:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/iris-swagger5-53bd997e4f2e7f1904edebd974c6e128.png"}}]);