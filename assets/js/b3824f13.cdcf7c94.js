"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const r={title:"2. Kubeflow Concepts",description:"",sidebar_position:2,contributors:["Jongseob Jeon"]},i=void 0,a={unversionedId:"kubeflow/kubeflow-concepts",id:"kubeflow/kubeflow-concepts",title:"2. Kubeflow Concepts",description:"",source:"@site/docs/kubeflow/kubeflow-concepts.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-concepts",permalink:"/docs/kubeflow/kubeflow-concepts",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/kubeflow-concepts.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 1\uc77c",sidebarPosition:2,frontMatter:{title:"2. Kubeflow Concepts",description:"",sidebar_position:2,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"1. Kubeflow Introduction",permalink:"/docs/kubeflow/kubeflow-intro"},next:{title:"3. Install Requirements",permalink:"/docs/kubeflow/basic-requirements"}},p={},c=[{value:"Component",id:"component",level:2},{value:"Component Contents",id:"component-contents",level:3},{value:"Component Wrapper",id:"component-wrapper",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Model",id:"model",level:4},{value:"Data",id:"data",level:4},{value:"Metric",id:"metric",level:4},{value:"Pipeline",id:"pipeline",level:2},{value:"Pipeline Config",id:"pipeline-config",level:3},{value:"Run",id:"run",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"component"},"Component"),(0,l.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8(Component)\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20(Component contents)\uc640 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c(Component wrapper)\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\ud558\ub098\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub97c \ud1b5\ud574 kubeflow\uc5d0 \uc804\ub2ec\ub418\uba70 \uc804\ub2ec\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc815\uc758\ub41c \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uc2e4\ud589(execute)\ud558\uace0 \uc544\ud2f0\ud329\ud2b8(artifacts)\ub4e4\uc744 \uc0dd\uc0b0\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-0.png",src:n(3396).Z,width:"1392",height:"704"})),(0,l.kt)("h3",{id:"component-contents"},"Component Contents"),(0,l.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uad6c\uc131\ud558\ub294 \uac83\uc740 \ucd1d 3\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-1.png",src:n(8482).Z,width:"574",height:"436"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Environemnt"),(0,l.kt)("li",{parentName:"ol"},"Python code w\\ Config"),(0,l.kt)("li",{parentName:"ol"},"Generates Artifacts")),(0,l.kt)("p",null,"\uc608\uc2dc\uc640 \ud568\uaed8 \uac01 \uad6c\uc131 \uc694\uc18c\uac00 \uc5b4\ub5a4 \uac83\uc778\uc9c0 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc74c\uacfc \uac19\uc774 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc640 SVC(Support Vector Classifier)\ub97c \ud559\uc2b5\ud55c \ud6c4 SVC \ubaa8\ub378\uc744 \uc800\uc7a5\ud558\ub294 \uacfc\uc815\uc744 \uc801\uc740 \ud30c\uc774\uc36c \ucf54\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import dill\nimport pandas as pd\n\nfrom sklearn.svm import SVC\n\ntrain_data = pd.read_csv(train_data_path)\ntrain_target= pd.read_csv(train_target_path)\n\nclf= SVC(\n    kernel=kernel\n)\nclf.fit(train_data)\n\nwith open(model_path, mode="wb") as file_writer:\n     dill.dump(clf, file_writer)\n')),(0,l.kt)("p",null,"\uc704\uc758 \ud30c\uc774\uc36c \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-2.png",src:n(4582).Z,width:"832",height:"410"})),(0,l.kt)("p",null,"Environment\ub294 \ud30c\uc774\uc36c \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud328\ud0a4\uc9c0\ub4e4\uc744 import\ud558\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uc73c\ub85c Python Code w\\ Config \uc5d0\uc11c\ub294 \uc8fc\uc5b4\uc9c4 Config\ub97c \uc774\uc6a9\ud574 \uc2e4\uc81c\ub85c \ud559\uc2b5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc544\ud2f0\ud329\ud2b8\ub97c \uc800\uc7a5\ud558\ub294 \uacfc\uc815\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"component-wrapper"},"Component Wrapper"),(0,l.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\uc5d0 \ud544\uc694\ud55c Config\ub97c \uc804\ub2ec\ud558\uace0 \uc2e4\ud589\uc2dc\ud0a4\ub294 \uc791\uc5c5\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-3.png",src:n(3204).Z,width:"1066",height:"766"})),(0,l.kt)("p",null,"Kubeflow\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub97c \uc704\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"train_svc_from_csv"),"\uc640 \uac19\uc774 \ud568\uc218\uc758 \ud615\ud0dc\ub85c \uc815\uc758\ud569\ub2c8\ub2e4.\n\ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\uac00 \ucf58\ud150\uce20\ub97c \uac10\uc2f8\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-4.png",src:n(4175).Z,width:"464",height:"826"})),(0,l.kt)("h3",{id:"artifacts"},"Artifacts"),(0,l.kt)("p",null,"\uc704\uc758 \uc124\uba85\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc544\ud2f0\ud329\ud2b8(Artifacts)\ub97c \uc0dd\uc131\ud55c\ub2e4\uace0 \ud588\uc2b5\ub2c8\ub2e4. \uc544\ud2f0\ud329\ud2b8\ub780 evaluation result, log \ub4f1 \uc5b4\ub5a4 \ud615\ud0dc\ub85c\ub4e0 \ud30c\uc77c\ub85c \uc0dd\uc131\ub418\ub294 \uac83\uc744 \ud1b5\ud2c0\uc5b4\uc11c \uce6d\ud558\ub294 \uc6a9\uc5b4\uc785\ub2c8\ub2e4.\n\uadf8\uc911 \uc6b0\ub9ac\uac00 \uad00\uc2ec\uc744 \ub450\ub294 \uc720\uc758\ubbf8\ud55c \uac83\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-5.png",src:n(7436).Z,width:"1700",height:"454"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Metric"),(0,l.kt)("li",{parentName:"ul"},"etc")),(0,l.kt)("h4",{id:"model"},"Model"),(0,l.kt)("p",null,"\uc800\ud76c\ub294 \ubaa8\ub378\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758 \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubaa8\ub378\uc774\ub780 \ud30c\uc774\uc36c \ucf54\ub4dc\uc640 \ud559\uc2b5\ub41c Weights\uc640 Network \uad6c\uc870 \uadf8\ub9ac\uace0 \uc774\ub97c \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud55c \ud658\uacbd\uc774 \ubaa8\ub450 \ud3ec\ud568\ub41c \ud615\ud0dc")),(0,l.kt)("h4",{id:"data"},"Data"),(0,l.kt)("p",null,"\ub370\uc774\ud130\ub294 \uc804 \ucc98\ub9ac\ub41c \ud53c\ucc98, \ubaa8\ub378\uc758 \uc608\uce21 \uac12 \ub4f1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"metric"},"Metric"),(0,l.kt)("p",null,"Metric\uc740 \ub3d9\uc801 \uc9c0\ud45c\uc640 \uc815\uc801 \uc9c0\ud45c \ub450 \uac00\uc9c0\ub85c \ub098\ub204\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \uc9c0\ud45c\ub780 train loss\uc640 \uac19\uc774 \ud559\uc2b5\uc774 \uc9c4\ud589\ub418\ub294 \uc911 \uc5d0\ud3ed(Epoch)\ub9c8\ub2e4 \uacc4\uc18d\ud574\uc11c \ubcc0\ud654\ud558\ub294 \uac12\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc801 \uc9c0\ud45c\ub780 \ud559\uc2b5\uc774 \ub05d\ub09c \ud6c4 \ucd5c\uc885\uc801\uc73c\ub85c \ubaa8\ub378\uc744 \ud3c9\uac00\ud558\ub294 \uc815\ud655\ub3c4 \ub4f1\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"pipeline"},"Pipeline"),(0,l.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc9d1\ud569\uacfc \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uc21c\uc11c\ub3c4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c, \uc21c\uc11c\ub3c4\ub294 \ubc29\ud5a5 \uc21c\ud658\uc774 \uc5c6\ub294 \uadf8\ub798\ud504\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc73c\uba70, \uac04\ub2e8\ud55c \uc870\uac74\ubb38\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-6.png",src:n(9429).Z,width:"1696",height:"746"})),(0,l.kt)("h3",{id:"pipeline-config"},"Pipeline Config"),(0,l.kt)("p",null,"\uc55e\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\ub294 Config\uac00 \ud544\uc694\ud558\ub2e4\uace0 \uc124\uba85\ud588\uc2b5\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\uc131\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 Config \ub4e4\uc744 \ubaa8\uc544 \ub454 \uac83\uc774 \ud30c\uc774\ud504\ub77c\uc778 Config\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-7.png",src:n(4607).Z,width:"1810",height:"432"})),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc774 \ud544\uc694\ub85c \ud558\ub294 \ud30c\uc774\ud504\ub77c\uc778 Config\uac00 \uc8fc\uc5b4\uc838\uc57c\uc9c0\ub9cc \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","Kubeflow\uc5d0\uc11c\ub294 \uc2e4\ud589\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc744 Run \uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-8.png",src:n(6818).Z,width:"1810",height:"576"})),(0,l.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc774 \uc2e4\ud589\ub418\uba74 \uac01 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc544\ud2f0\ud329\ud2b8\ub4e4\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.\nKubeflow pipeline\uc5d0\uc11c\ub294 Run \ud558\ub098\ub2f9 \uace0\uc720\ud55c ID \ub97c \uc0dd\uc131\ud558\uace0, Run\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ubaa8\ub4e0 \uc544\ud2f0\ud329\ud2b8\ub4e4\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"concept-9.png",src:n(7446).Z,width:"1810",height:"592"})),(0,l.kt)("p",null,"\uadf8\ub7ec\uba74 \uc774\uc81c \uc9c1\uc811 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},3396:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-0-c3636a3fe20bb4a74d64d8565b4a51d9.png"},8482:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-1-887ac07d1b11b84ee3fc5d7b882ad4bc.png"},4582:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-2-00e4917a1ec11cff7fc7a3b00c75a9e9.png"},3204:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-3-0916d8982b42a638e986fd955f4b5fd0.png"},4175:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-4-3e6a8ee159e889b5e1bffc58dbb24b85.png"},7436:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-5-31eb60d97518af020d18d30e3b5c5d16.png"},9429:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-6-db0ab4d56f11dcad062bb89374f7ff5b.png"},4607:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-7-277a9b30da3a2fc3519d3453964c5d52.png"},6818:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-8-2350dff71d7f031b8cce3b73f8fd4381.png"},7446:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-9-f366186846ec1d019b742bf478928f80.png"}}]);