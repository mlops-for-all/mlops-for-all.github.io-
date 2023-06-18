"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7189],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>k});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(l),f=r,k=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return l?n.createElement(k,o(o({ref:t},m),{},{components:l})):n.createElement(k,o({ref:t},m))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<a;i++)o[i]=l[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},6928:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=l(7462),r=(l(7294),l(3905));const a={title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",sidebar_position:2,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,s={unversionedId:"setup-components/install-components-mlflow",id:"setup-components/install-components-mlflow",title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-components/install-components-mlflow.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-mlflow",permalink:"/en/docs/setup-components/install-components-mlflow",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-components/install-components-mlflow.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:2,frontMatter:{title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",sidebar_position:2,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Kubeflow",permalink:"/en/docs/setup-components/install-components-kf"},next:{title:"3. Seldon-Core",permalink:"/en/docs/setup-components/install-components-seldon"}},p={},i=[{value:"Install MLflow Tracking Server",id:"install-mlflow-tracking-server",level:2},{value:"Before Install MLflow Tracking Server",id:"before-install-mlflow-tracking-server",level:2},{value:"PostgreSQL DB \uc124\uce58",id:"postgresql-db-\uc124\uce58",level:3},{value:"Minio \uc124\uc815",id:"minio-\uc124\uc815",level:3},{value:"Let&#39;s Install MLflow Tracking Server",id:"lets-install-mlflow-tracking-server",level:2},{value:"Helm Repository \ucd94\uac00",id:"helm-repository-\ucd94\uac00",level:3},{value:"Helm Repository \uc5c5\ub370\uc774\ud2b8",id:"helm-repository-\uc5c5\ub370\uc774\ud2b8",level:3},{value:"Helm Install",id:"helm-install",level:3},{value:"\uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:3}],m={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-mlflow-tracking-server"},"Install MLflow Tracking Server"),(0,r.kt)("p",null,"MLflow\ub294 \ub300\ud45c\uc801\uc778 \uc624\ud508\uc18c\uc2a4 ML \uc2e4\ud5d8 \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4. MLflow\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/tracking.html#tracking"},"\uc2e4\ud5d8 \uad00\ub9ac \uc6a9\ub3c4")," \uc678\uc5d0\ub3c4 ",(0,r.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/projects.html#projects"},"ML Model \ud328\ud0a4\uc9d5"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/models.html#models"},"ML \ubaa8\ub378 \ubc30\ud3ec \uad00\ub9ac"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/model-registry.html#registry"},"ML \ubaa8\ub378 \uc800\uc7a5"),"\uacfc \uac19\uc740 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 MLflow\ub97c \uc2e4\ud5d8 \uad00\ub9ac \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c MLflow\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 UI\ub97c \uc81c\uacf5\ud558\ub294 MLflow Tracking Server\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"before-install-mlflow-tracking-server"},"Before Install MLflow Tracking Server"),(0,r.kt)("h3",{id:"postgresql-db-\uc124\uce58"},"PostgreSQL DB \uc124\uce58"),(0,r.kt)("p",null,"MLflow Tracking Server\uac00 Backend Store\ub85c \uc0ac\uc6a9\ud560 \uc6a9\ub3c4\uc758 PostgreSQL DB\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba3c\uc800 ",(0,r.kt)("inlineCode",{parentName:"p"},"mlflow-system"),"\uc774\ub77c\ub294 namespace \ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl create ns mlflow-system\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"namespace/mlflow-system created\n")),(0,r.kt)("p",null,"postgresql DB\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"mlflow-system")," namespace \uc5d0 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl -n mlflow-system apply -f https://raw.githubusercontent.com/mlops-for-all/helm-charts/b94b5fe4133f769c04b25068b98ccfa7a505aa60/mlflow/manifests/postgres.yaml \n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"service/postgresql-mlflow-service created\ndeployment.apps/postgresql-mlflow created\npersistentvolumeclaim/postgresql-mlflow-pvc created\n")),(0,r.kt)("p",null,"mlflow-system namespace \uc5d0 1\uac1c\uc758 postgresql \uad00\ub828 pod \uac00 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get pod -n mlflow-system | grep postgresql\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub41c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"postgresql-mlflow-7b9bc8c79f-srkh7   1/1     Running   0          38s\n")),(0,r.kt)("h3",{id:"minio-\uc124\uc815"},"Minio \uc124\uc815"),(0,r.kt)("p",null,"MLflow Tracking Server\uac00 Artifacts Store\ub85c \uc0ac\uc6a9\ud560 \uc6a9\ub3c4\uc758 Minio\ub294 \uc774\uc804 Kubeflow \uc124\uce58 \ub2e8\uacc4\uc5d0\uc11c \uc124\uce58\ud55c Minio\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub2e8, kubeflow \uc6a9\ub3c4\uc640 mlflow \uc6a9\ub3c4\ub97c \ubd84\ub9ac\ud558\uae30 \uc704\ud574, mlflow \uc804\uc6a9 \ubc84\ud0b7(bucket)\uc744 \uc0dd\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","minio \uc5d0 \uc811\uc18d\ud558\uc5ec \ubc84\ud0b7\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574, \uc6b0\uc120 minio-service \ub97c \ud3ec\ud2b8\ud3ec\uc6cc\ub529\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl port-forward svc/minio-service -n kubeflow 9000:9000\n")),(0,r.kt)("p",null,"\uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc5f4\uc5b4 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000"},"localhost:9000"),"\uc73c\ub85c \uc811\uc18d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"minio-install",src:l(4642).Z,width:"2906",height:"1946"})),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uc18d \uc815\ubcf4\ub97c \uc785\ub825\ud558\uc5ec \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"minio")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"minio123"))),(0,r.kt)("p",null,"\uc6b0\uce21 \ud558\ub2e8\uc758 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"+"))," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec, ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Bucket"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-bucket",src:l(1817).Z,width:"2902",height:"1950"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bucket Name"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"mlflow"),"\ub97c \uc785\ub825\ud558\uc5ec \ubc84\ud0b7\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc67c\ucabd\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"mlflow"),"\ub77c\ub294 \uc774\ub984\uc758 \ubc84\ud0b7\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mlflow-bucket",src:l(1047).Z,width:"2902",height:"1950"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"lets-install-mlflow-tracking-server"},"Let's Install MLflow Tracking Server"),(0,r.kt)("h3",{id:"helm-repository-\ucd94\uac00"},"Helm Repository \ucd94\uac00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"helm repo add mlops-for-all https://mlops-for-all.github.io/helm-charts\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \ucd94\uac00\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"mlops-for-all" has been added to your repositories\n')),(0,r.kt)("h3",{id:"helm-repository-\uc5c5\ub370\uc774\ud2b8"},"Helm Repository \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"helm repo update\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "mlops-for-all" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,r.kt)("h3",{id:"helm-install"},"Helm Install"),(0,r.kt)("p",null,"mlflow-server Helm Chart 0.2.0 \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"helm install mlflow-server mlops-for-all/mlflow-server \\\n  --namespace mlflow-system \\\n  --version 0.2.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc8fc\uc758"),": \uc704\uc758 helm chart\ub294 MLflow \uc758 backend store \uc640 artifacts store \uc758 \uc811\uc18d \uc815\ubcf4\ub97c kubeflow \uc124\uce58 \uacfc\uc815\uc5d0\uc11c \uc0dd\uc131\ud55c minio\uc640 \uc704\uc758 ",(0,r.kt)("a",{parentName:"li",href:"#postgresql-db-%EC%84%A4%EC%B9%98"},"PostgreSQL DB \uc124\uce58"),"\uc5d0\uc11c \uc0dd\uc131\ud55c postgresql \uc815\ubcf4\ub97c default\ub85c \ud558\uc5ec \uc124\uce58\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcc4\uac1c\ub85c \uc0dd\uc131\ud55c DB \ud639\uc740 Object storage\ub97c \ud65c\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mlops-for-all/helm-charts/tree/main/mlflow/chart"},"Helm Chart Repo"),"\ub97c \ucc38\uace0\ud558\uc5ec helm install \uc2dc value\ub97c \ub530\ub85c \uc124\uc815\ud558\uc5ec \uc124\uce58\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME: mlflow-server\nLAST DEPLOYED: Sat Dec 18 22:02:13 2021\nNAMESPACE: mlflow-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get pod -n mlflow-system | grep mlflow-server\n")),(0,r.kt)("p",null,"mlflow-system namespace \uc5d0 1 \uac1c\uc758 mlflow-server \uad00\ub828 pod \uac00 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub41c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mlflow-server-ffd66d858-6hm62        1/1     Running   0          74s\n")),(0,r.kt)("h3",{id:"\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"\uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,r.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c MLflow Server\uc5d0 \uc815\uc0c1\uc801\uc73c\ub85c \uc811\uc18d\ub418\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc5d0\uc11c \uc811\uc18d\ud558\uae30 \uc704\ud574, \ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl port-forward svc/mlflow-server-service -n mlflow-system 5000:5000\n")),(0,r.kt)("p",null,"\uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc5f4\uc5b4 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5000"},"localhost:5000"),"\uc73c\ub85c \uc811\uc18d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mlflow-install",src:l(2852).Z,width:"2882",height:"1464"})))}u.isMDXComponent=!0},1817:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/create-bucket-58bd2a673744c0144ffb14a2aeeef821.png"},4642:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/minio-install-587ecd302eecc621dbb568c124c80ccf.png"},1047:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/mlflow-bucket-63b427bd7a5147b8bae2ac69c57facff.png"},2852:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/mlflow-install-b3920befde2af7fdbf3677ab12036440.png"}}]);