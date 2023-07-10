"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={title:"3. Components of MLOps",description:"Describe MLOps Components",sidebar_position:3,date:new Date("2021-12-03T00:00:00.000Z"),lastmod:new Date("2021-12-10T00:00:00.000Z"),contributors:["Youngcheol Jang"]},o=void 0,a={unversionedId:"introduction/component",id:"introduction/component",title:"3. Components of MLOps",description:"Describe MLOps Components",source:"@site/docs/introduction/component.md",sourceDirName:"introduction",slug:"/introduction/component",permalink:"/docs/introduction/component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/introduction/component.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 10\uc77c",sidebarPosition:3,frontMatter:{title:"3. Components of MLOps",description:"Describe MLOps Components",sidebar_position:3,date:"2021-12-03T00:00:00.000Z",lastmod:"2021-12-10T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"2. Levels of MLOps",permalink:"/docs/introduction/levels"},next:{title:"4. Why Kubernetes?",permalink:"/docs/introduction/why_kubernetes"}},p={},u=[{value:"Practitioners guide to MLOps",id:"practitioners-guide-to-mlops",level:2},{value:"1. Experimentation",id:"1-experimentation",level:3},{value:"2. Data Processing",id:"2-data-processing",level:3},{value:"3. Model training",id:"3-model-training",level:3},{value:"4. Model evaluation",id:"4-model-evaluation",level:3},{value:"5. Model serving",id:"5-model-serving",level:3},{value:"6. Online experimentation",id:"6-online-experimentation",level:3},{value:"7. Model Monitoring",id:"7-model-monitoring",level:3},{value:"8. ML Pipeline",id:"8-ml-pipeline",level:3},{value:"9. Model Registry",id:"9-model-registry",level:3},{value:"10. Dataset and Feature Repository",id:"10-dataset-and-feature-repository",level:3},{value:"11. ML Metadata and Artifact Tracking",id:"11-ml-metadata-and-artifact-tracking",level:3}],s={toc:u},d="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"practitioners-guide-to-mlops"},"Practitioners guide to MLOps"),(0,i.kt)("p",null," 2021\ub144 5\uc6d4\uc5d0 \ubc1c\ud45c\ub41c \uad6c\uae00\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://services.google.com/fh/files/misc/practitioners_guide_to_mlops_whitepaper.pdf"},"white paper : Practitioners guide to MLOps: A framework for continuous delivery and automation of machine learning"),"\uc5d0\uc11c\ub294 MLOps\uc758 \ud575\uc2ec \uae30\ub2a5\ub4e4\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \uc5b8\uae09\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mlops-component",src:n(878).Z,width:"2352",height:"1890"})),(0,i.kt)("p",null," \uac01 \uae30\ub2a5\uc774 \uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"1-experimentation"},"1. Experimentation"),(0,i.kt)("p",null," \uc2e4\ud5d8(Experimentation)\uc740 \uba38\uc2e0\ub7ec\ub2dd \uc5d4\uc9c0\ub2c8\uc5b4\ub4e4\uc774 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uace0, \ud504\ub85c\ud1a0\ud0c0\uc785 \ubaa8\ub378\uc744 \ub9cc\ub4e4\uba70 \ud559\uc2b5 \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uae43(Git)\uacfc \uac19\uc740 \ubc84\uc804 \ucee8\ud2b8\ub864 \ub3c4\uad6c\uc640 \ud1b5\ud569\ub41c \ub178\ud2b8\ubd81(Jupyter Notebook) \ud658\uacbd \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud55c \ub370\uc774\ud130, \ud558\uc774\ud37c \ud30c\ub77c\ubbf8\ud130, \ud3c9\uac00 \uc9c0\ud45c\ub97c \ud3ec\ud568\ud55c \uc2e4\ud5d8 \ucd94\uc801 \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc640 \ubaa8\ub378\uc5d0 \ub300\ud55c \ubd84\uc11d \ubc0f \uc2dc\uac01\ud654 \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"2-data-processing"},"2. Data Processing"),(0,i.kt)("p",null," \ub370\uc774\ud130 \ucc98\ub9ac(Data Processing)\ub294 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378 \uac1c\ubc1c \ub2e8\uacc4, \uc9c0\uc18d\uc801\uc778 \ud559\uc2b5(Continuous Training) \ub2e8\uacc4, \uadf8\ub9ac\uace0 API \ubc30\ud3ec(API Deployment) \ub2e8\uacc4\uc5d0\uc11c \ub9ce\uc740 \uc591\uc758 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574 \uc8fc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ub370\uc774\ud130 \uc18c\uc2a4\uc640 \uc11c\ube44\uc2a4\uc5d0 \ud638\ud658\ub418\ub294 \ub370\uc774\ud130 \ucee4\ub125\ud130(connector) \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ud615\ud0dc\uc758 \ub370\uc774\ud130\uc640 \ud638\ud658\ub418\ub294 \ub370\uc774\ud130 \uc778\ucf54\ub354(encoder) & \ub514\ucf54\ub354(decoder) \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ud615\ud0dc\uc758 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ub370\uc774\ud130 \ubcc0\ud658\uacfc \ud53c\ucc98 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1(feature engineering) \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ud559\uc2b5\uacfc \uc11c\ube59\uc744 \uc704\ud55c \ud655\uc7a5 \uac00\ub2a5\ud55c \ubc30\uce58, \uc2a4\ud2b8\ub9bc \ub370\uc774\ud130 \ucc98\ub9ac \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"3-model-training"},"3. Model training"),(0,i.kt)("p",null," \ubaa8\ub378 \ud559\uc2b5(Model training)\uc740 \ubaa8\ub378 \ud559\uc2b5\uc744 \uc704\ud55c \uc54c\uace0\ub9ac\uc998\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc2e4\ud589\uc2dc\ucf1c\uc8fc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ML \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uc2e4\ud589\uc744 \uc704\ud55c \ud658\uacbd \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc218\uc758 GPU / \ubd84\uc0b0 \ud559\uc2b5 \uc0ac\uc6a9\uc744 \uc704\ud55c \ubd84\uc0b0 \ud559\uc2b5 \ud658\uacbd \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ud558\uc774\ud37c \ud30c\ub77c\ubbf8\ud130 \ud29c\ub2dd\uacfc \ucd5c\uc801\ud654 \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"4-model-evaluation"},"4. Model evaluation"),(0,i.kt)("p",null," \ubaa8\ub378 \ud3c9\uac00(Model evaluation)\ub294 \uc2e4\ud5d8 \ud658\uacbd\uacfc \uc0c1\uc6a9 \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ubaa8\ub378\uc758 \uc131\ub2a5\uc744 \uad00\ucc30\ud560 \uc218 \uc788\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud3c9\uac00 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ubaa8\ub378 \uc131\ub2a5 \ud3c9\uac00 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \uc9c0\uc18d \ud559\uc2b5 \uc2e4\ud589 \uacb0\uacfc\uc5d0 \ub300\ud55c \uc608\uce21 \uc131\ub2a5 \ucd94\uc801"),(0,i.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \ubaa8\ub378\uc758 \uc131\ub2a5 \ube44\uad50\uc640 \uc2dc\uac01\ud654"),(0,i.kt)("li",{parentName:"ul"},"\ud574\uc11d\ud560 \uc218 \uc788\ub294 AI \uae30\uc220\uc744 \uc774\uc6a9\ud55c \ubaa8\ub378 \ucd9c\ub825 \ud574\uc11d \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"5-model-serving"},"5. Model serving"),(0,i.kt)("p",null," \ubaa8\ub378 \uc11c\ube59(Model serving)\uc740 \uc0c1\uc6a9 \ud658\uacbd\uc5d0 \ubaa8\ub378\uc744 \ubc30\ud3ec\ud558\uace0 \uc11c\ube59\ud558\uae30 \uc704\ud55c \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc800 \uc9c0\uc5f0 \ucd94\ub860\uacfc \uace0\uac00\uc6a9\uc131 \ucd94\ub860 \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c ML \ubaa8\ub378 \uc11c\ube59 \ud504\ub808\uc784\uc6cc\ud06c \uc9c0\uc6d0(Tensorflow Serving, TorchServe, NVIDIA Triton, Scikit-learn, XGGoost. etc)"),(0,i.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \ud615\ud0dc\uc758 \ucd94\ub860 \ub8e8\ud2f4 \uae30\ub2a5 \uc81c\uacf5, \uc608\ub97c \ub4e4\uc5b4 \uc804\ucc98\ub9ac(preprocess) \ub610\ub294 \ud6c4\ucc98\ub9ac(postprocess) \uae30\ub2a5\uacfc \ucd5c\uc885 \uacb0\uacfc\ub97c \uc704\ud574 \ub2e4\uc218\uc758 \ubaa8\ub378\uc774 \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\ub97c \ub9d0\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc21c\uac04\uc801\uc73c\ub85c \uce58\uc19f\ub294 \ucd94\ub860 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud55c \uc624\ud1a0 \uc2a4\ucf00\uc77c\ub9c1(autoscaling) \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ucd94\ub860 \uc694\uccad\uacfc \ucd94\ub860 \uacb0\uacfc\uc5d0 \ub300\ud55c \ub85c\uae45 \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"6-online-experimentation"},"6. Online experimentation"),(0,i.kt)("p",null," \uc628\ub77c\uc778 \uc2e4\ud5d8(Online experimentation)\uc740 \uc0c8\ub85c\uc6b4 \ubaa8\ub378\uc774 \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c, \uc774 \ubaa8\ub378\uc744 \ubc30\ud3ec\ud558\uba74 \uc5b4\ub290 \uc815\ub3c4\uc758 \uc131\ub2a5\uc744 \ubcf4\uc77c \uac83\uc778\uc9c0 \uac80\uc99d\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc740 \uc0c8 \ubaa8\ub378\uc744 \ubc30\ud3ec\ud558\ub294 \uac83\uae4c\uc9c0 \uc5f0\ub3d9\ud558\uae30 \uc704\ud574 \ubaa8\ub378 \uc800\uc7a5\uc18c(Model Registry)\uc640 \uc5f0\ub3d9\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uce74\ub098\ub9ac(canary) & \uc100\ub3c4(shadow) \ubc30\ud3ec \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"A/B \ud14c\uc2a4\ud2b8 \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\uba40\ud2f0 \uc554\ub4dc \ubc34\ub527(Multi-armed bandit) \ud14c\uc2a4\ud2b8 \uae30\ub2a5 \uc81c\uacf5")),(0,i.kt)("h3",{id:"7-model-monitoring"},"7. Model Monitoring"),(0,i.kt)("p",null,"\ubaa8\ub378 \ubaa8\ub2c8\ud130\ub9c1(Model Monitoring)\uc740 \uc0c1\uc6a9 \ud658\uacbd\uc5d0 \ubc30\ud3ec\ub41c \ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uace0 \uc788\ub294\uc9c0\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ubaa8\ub378\uc758 \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc838 \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4 \ub4f1\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"8-ml-pipeline"},"8. ML Pipeline"),(0,i.kt)("p",null,"\uba38\uc2e0\ub7ec\ub2dd \ud30c\uc774\ud504\ub77c\uc778(ML Pipeline)\uc740 \uc0c1\uc6a9 \ud658\uacbd\uc5d0\uc11c \ubcf5\uc7a1\ud55c ML \ud559\uc2b5\uacfc \ucd94\ub860 \uc791\uc5c5\uc744 \uad6c\uc131\ud558\uace0 \uc81c\uc5b4\ud558\uace0 \uc790\ub3d9\ud654\ud558\uae30 \uc704\ud55c \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \uc774\ubca4\ud2b8\ub97c \uc18c\uc2a4\ub97c \ud1b5\ud55c \ud30c\uc774\ud504\ub77c\uc778 \uc2e4\ud589 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\ud30c\uc774\ud504\ub77c\uc778 \ud30c\ub77c\ubbf8\ud130\uc640 \uc0dd\uc131\ub418\ub294 \uc0b0\ucd9c\ubb3c \uad00\ub9ac\ub97c \uc704\ud55c \uba38\uc2e0\ub7ec\ub2dd \uba54\ud0c0\ub370\uc774\ud130 \ucd94\uc801\uacfc \uc5f0\ub3d9 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \uba38\uc2e0\ub7ec\ub2dd \uc791\uc5c5\uc744 \uc704\ud55c \ub0b4\uc7a5 \ucef4\ud3ec\ub10c\ud2b8 \uc9c0\uc6d0\uacfc \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \uad6c\ud604\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \uc9c0\uc6d0 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \uc2e4\ud589 \ud658\uacbd \uc81c\uacf5 \uae30\ub2a5")),(0,i.kt)("h3",{id:"9-model-registry"},"9. Model Registry"),(0,i.kt)("p",null," \ubaa8\ub378 \uc800\uc7a5\uc18c(Model Registry)\ub294 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc758 \uc0dd\uba85 \uc8fc\uae30(Lifecycle)\uc744 \uc911\uc559 \uc800\uc7a5\uc18c\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud574 \uc8fc\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud559\uc2b5\ub41c \ubaa8\ub378 \uadf8\ub9ac\uace0 \ubc30\ud3ec\ub41c \ubaa8\ub378\uc5d0 \ub300\ud55c \ub4f1\ub85d, \ucd94\uc801, \ubc84\uc800\ub2dd \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ubc30\ud3ec\ub97c \uc704\ud574 \ud544\uc694\ud55c \ub370\uc774\ud130\uc640 \ub7f0\ud0c0\uc784 \ud328\ud0a4\uc9c0\ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4 \uc800\uc7a5 \uae30\ub2a5")),(0,i.kt)("h3",{id:"10-dataset-and-feature-repository"},"10. Dataset and Feature Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc5d0 \ub300\ud55c \uacf5\uc720, \uac80\uc0c9, \uc7ac\uc0ac\uc6a9 \uadf8\ub9ac\uace0 \ubc84\uc804 \uad00\ub9ac \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc2a4\ud2b8\ub9ac\ubc0d \ubc0f \uc628\ub77c\uc778 \ucd94\ub860 \uc791\uc5c5\uc5d0 \ub300\ud55c \uc2e4\uc2dc\uac04 \ucc98\ub9ac \ubc0f \uc800 \uc9c0\uc5f0 \uc11c\ube59 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc9c4, \ud14d\uc2a4\ud2b8, \ud14c\uc774\ube14 \ud615\ud0dc\uc758 \ub370\uc774\ud130\uc640 \uac19\uc740 \ub2e4\uc591\ud55c \ud615\ud0dc\uc758 \ub370\uc774\ud130 \uc9c0\uc6d0 \uae30\ub2a5")),(0,i.kt)("h3",{id:"11-ml-metadata-and-artifact-tracking"},"11. ML Metadata and Artifact Tracking"),(0,i.kt)("p",null," MLOps\uc758 \uac01 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \ud615\ud0dc\uc758 \uc0b0\ucd9c\ubb3c\ub4e4\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. ML \uba54\ud0c0\ub370\uc774\ud130\ub294 \uc774\ub7f0 \uc0b0\ucd9c\ubb3c\ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.\nML \uba54\ud0c0\ub370\uc774\ud130\uc640 \uc0b0\ucd9c\ubb3c \uad00\ub9ac\ub294 \uc0b0\ucd9c\ubb3c\uc758 \uc704\uce58, \ud0c0\uc785, \uc18d\uc131, \uadf8\ub9ac\uace0 \uad00\ub828\ub41c \uc2e4\ud5d8(experiment)\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ML \uc0b0\ucd9c\ubb3c\uc5d0 \ub300\ud55c \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\uc2e4\ud5d8\uacfc \ud30c\uc774\ud504\ub77c\uc778 \ud30c\ub77c\ubbf8\ud130 \uc124\uc815\uc5d0 \ub300\ud55c \ucd94\uc801, \uacf5\uc720 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"ML \uc0b0\ucd9c\ubb3c\uc5d0 \ub300\ud55c \uc800\uc7a5, \uc811\uadfc, \uc2dc\uac01\ud654, \ub2e4\uc6b4\ub85c\ub4dc \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\ub978 MLOps \uae30\ub2a5\uacfc\uc758 \ud1b5\ud569 \uae30\ub2a5 \uc81c\uacf5")))}c.isMDXComponent=!0},878:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mlops-component-540cce1f22f97807b54c5e0dd1fec01e.png"}}]);