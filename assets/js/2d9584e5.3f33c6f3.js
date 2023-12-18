"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[3870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(f,o(o({ref:t},c),{},{components:n})):l.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const r={title:"2. Levels of MLOps",description:"Levels of MLOps",sidebar_position:2,date:new Date("2021-12-03T00:00:00.000Z"),lastmod:new Date("2022-03-05T00:00:00.000Z"),contributors:["Jongseob Jeon"]},o=void 0,a={unversionedId:"introduction/levels",id:"version-1.0/introduction/levels",title:"2. Levels of MLOps",description:"Levels of MLOps",source:"@site/versioned_docs/version-1.0/introduction/levels.md",sourceDirName:"introduction",slug:"/introduction/levels",permalink:"/docs/1.0/introduction/levels",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/introduction/levels.md",tags:[],version:"1.0",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 18\uc77c",sidebarPosition:2,frontMatter:{title:"2. Levels of MLOps",description:"Levels of MLOps",sidebar_position:2,date:"2021-12-03T00:00:00.000Z",lastmod:"2022-03-05T00:00:00.000Z",contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"1. What is MLOps?",permalink:"/docs/1.0/introduction/intro"},next:{title:"3. Components of MLOps",permalink:"/docs/1.0/introduction/component"}},p={},s=[{value:"Hidden Technical Debt in ML System",id:"hidden-technical-debt-in-ml-system",level:2},{value:"0\ub2e8\uacc4: \uc218\ub3d9 \ud504\ub85c\uc138\uc2a4",id:"0\ub2e8\uacc4-\uc218\ub3d9-\ud504\ub85c\uc138\uc2a4",level:2},{value:"1\ub2e8\uacc4: ML \ud30c\uc774\ud504\ub77c\uc778 \uc790\ub3d9\ud654",id:"1\ub2e8\uacc4-ml-\ud30c\uc774\ud504\ub77c\uc778-\uc790\ub3d9\ud654",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"Continuous Training",id:"continuous-training",level:3},{value:"Auto Retrain",id:"auto-retrain",level:4},{value:"Auto Deploy",id:"auto-deploy",level:4},{value:"2\ub2e8\uacc4: CI/CD \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc790\ub3d9\ud654",id:"2\ub2e8\uacc4-cicd-\ud30c\uc774\ud504\ub77c\uc778\uc758-\uc790\ub3d9\ud654",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uad6c\uae00\uc5d0\uc11c \ubc1c\ud45c\ud55c MLOps\uc758 \ub2e8\uacc4\ub97c \ubcf4\uba70 MLOps\uc758 \ud575\uc2ec \uae30\ub2a5\uc740 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uc544 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"hidden-technical-debt-in-ml-system"},"Hidden Technical Debt in ML System"),(0,i.kt)("p",null,"\uad6c\uae00\uc740 \ubb34\ub824 2015\ub144\ubd80\ud130 MLOps\uc758 \ud544\uc694\uc131\uc744 \ub9d0\ud588\uc2b5\ub2c8\ub2e4. Hidden Technical Debt in Machine Learning Systems \uc740 \uadf8\ub7f0 \uad6c\uae00\uc758 \uc0dd\uac01\uc744 \ub2f4\uc740 \ub17c\ubb38\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"paper",src:n(765).Z,width:"840",height:"638"})),(0,i.kt)("p",null,"\uc774 \ub17c\ubb38\uc758 \ud575\uc2ec\uc740 \ubc14\ub85c \uba38\uc2e0\ub7ec\ub2dd\uc744 \uc774\uc6a9\ud55c \uc81c\ud488\uc744 \ub9cc\ub4dc\ub294\ub370 \uc788\uc5b4\uc11c \uba38\uc2e0\ub7ec\ub2dd \ucf54\ub4dc\ub294 \uc804\uccb4 \uc2dc\uc2a4\ud15c\uc744 \uad6c\uc131\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc544\uc8fc \uc77c\ubd80\uc77c \ubfd0\uc774\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"paper-2",src:n(2422).Z,width:"1186",height:"422"})),(0,i.kt)("p",null,"\uad6c\uae00\uc740 \uc774 \ub17c\ubb38\uc744 \ub354 \ubc1c\uc804\uc2dc\ucf1c\uc11c MLOps\ub77c\ub294 \uc6a9\uc5b4\ub97c \ub9cc\ub4e4\uc5b4 \ud655\uc7a5\uc2dc\ucf30\uc2b5\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"},"\uad6c\uae00 \ud074\ub77c\uc6b0\ub4dc \ud648\ud398\uc774\uc9c0"),"\uc5d0\uc11c \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \uad6c\uae00\uc5d0\uc11c \ub9d0\ud558\ub294 MLOps\ub780 \uc5b4\ub5a4 \uac83\uc778\uc9c0\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud574\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uad6c\uae00\uc5d0\uc11c\ub294 MLOps\uc758 \ubc1c\uc804 \ub2e8\uacc4\ub97c \ucd1d 3(0~2)\ub2e8\uacc4\ub85c \ub098\ub204\uc5c8\uc2b5\ub2c8\ub2e4. \uac01 \ub2e8\uacc4\ub4e4\uc5d0 \ub300\ud574 \uc124\uba85\ud558\uae30 \uc55e\uc11c \uc774\uc804 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \uc124\uba85\ud588\ub358 \uac1c\ub150 \uc911 \ud544\uc694\ud55c \ubd80\ubd84\uc744 \ub2e4\uc2dc \ud55c\ubc88 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \uc6b4\uc601\ud558\uae30 \uc704\ud574\uc11c\ub294 \ubaa8\ub378\uc744 \uac1c\ubc1c\ud558\ub294 \uba38\uc2e0\ub7ec\ub2dd \ud300\uacfc \ubc30\ud3ec \ubc0f \uc6b4\uc601\uc744 \ub2f4\ub2f9\ud558\ub294 \uc6b4\uc601\ud300\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub450 \ud300\uc758 \uc6d0\ud560\ud55c \ud611\uc5c5\uc744 \uc704\ud574\uc11c MLOps\uac00 \ud544\uc694\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0\ub294 \uac04\ub2e8\ud788 Continuous Integration(CI)/Continuous Deployment(CD)\ub97c \ud1b5\ud574\uc11c \ud560 \uc218 \uc788\ub2e4\uace0 \ud558\uc600\ub294\ub370, \uc5b4\ub5bb\uac8c CI/CD\ub97c \ud558\ub294\uc9c0\uc5d0 \ub300\ud574\uc11c \uc54c\uc544 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"0\ub2e8\uacc4-\uc218\ub3d9-\ud504\ub85c\uc138\uc2a4"},"0\ub2e8\uacc4: \uc218\ub3d9 \ud504\ub85c\uc138\uc2a4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"level-0",src:n(5450).Z,width:"1332",height:"494"})),(0,i.kt)("p",null,"0\ub2e8\uacc4\uc5d0\uc11c \ub450 \ud300\uc740 \u201c\ubaa8\ub378\u201d\uc744 \ud1b5\ud574 \uc18c\ud1b5\ud569\ub2c8\ub2e4. \uba38\uc2e0 \ub7ec\ub2dd\ud300\uc740 \uc313\uc5ec\uc788\ub294 \ub370\uc774\ud130\ub85c \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ud0a4\uace0 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \uc6b4\uc601\ud300\uc5d0\uac8c \uc804\ub2ec \ud569\ub2c8\ub2e4. \uc6b4\uc601\ud300\uc740 \uc774\ub807\uac8c \uc804\ub2ec\ubc1b\uc740 \ubaa8\ub378\uc744 \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"toon",src:n(2412).Z,width:"1282",height:"1746"})),(0,i.kt)("p",null,"\ucd08\uae30\uc758 \uba38\uc2e0 \ub7ec\ub2dd \ubaa8\ub378\ub4e4\uc740 \uc774 \u201c\ubaa8\ub378\u201d \uc911\uc2ec\uc758 \uc18c\ud1b5\uc744 \ud1b5\ud574 \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc774\ub7f0 \ubc30\ud3ec \ubc29\uc2dd\uc740 \uc5ec\ub7ec \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4\uc11c \uc5b4\ub5a4 \uae30\ub2a5\uc5d0\uc11c\ub294 \ud30c\uc774\uc36c 3.7\uc744 \uc4f0\uace0 \uc5b4\ub5a4 \uae30\ub2a5\uc5d0\uc11c\ub294 \ud30c\uc774\uc36c 3.8\uc744 \uc4f4\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc744 \uc790\uc8fc \ubaa9\uaca9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \uc0c1\ud669\uc774 \uc77c\uc5b4\ub098\ub294 \uc774\uc720\ub294 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc758 \ud2b9\uc131\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \ud559\uc2b5\ub41c \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc774 \ub3d9\uc791\ud558\uae30 \uc704\ud574\uc11c\ub294 3\uac00\uc9c0\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud30c\uc774\uc36c \ucf54\ub4dc"),(0,i.kt)("li",{parentName:"ol"},"\ud559\uc2b5\ub41c \uac00\uc911\uce58"),(0,i.kt)("li",{parentName:"ol"},"\ud658\uacbd (\ud328\ud0a4\uc9c0, \ubc84\uc804 \ub4f1)")),(0,i.kt)("p",null,"\ub9cc\uc57d \uc774 3\uac00\uc9c0 \uc911 \ud55c \uac00\uc9c0\ub77c\ub3c4 \uc804\ub2ec\uc774 \uc798\ubabb \ub41c\ub2e4\uba74 \ubaa8\ub378\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\uac70\ub098 \uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uc608\uce21\uc744 \ud560\uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub9ce\uc740 \uacbd\uc6b0 \ud658\uacbd\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc544\uc11c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uba38\uc2e0\ub7ec\ub2dd\uc740 \ub2e4\uc591\ud55c \uc624\ud508\uc18c\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294\ub370 \uc624\ud508\uc18c\uc2a4\ub294 \ud2b9\uc131\uc0c1 \uc5b4\ub5a4 \ubc84\uc804\uc744 \uc4f0\ub294\uc9c0\uc5d0 \ub530\ub77c\uc11c \uac19\uc740 \ud568\uc218\ub77c\ub3c4 \uacb0\uacfc\uac00 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub294 \uc11c\ube44\uc2a4 \ucd08\uae30\uc5d0\ub294 \uad00\ub9ac\ud560 \ubaa8\ub378\uc774 \ub9ce\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uae08\ubc29 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uad00\ub9ac\ud558\ub294 \uae30\ub2a5\ub4e4\uc774 \ub9ce\uc544\uc9c0\uace0 \uc11c\ub85c \uc18c\ud1b5\uc5d0 \uc5b4\ub824\uc6c0\uc744 \uacaa\uac8c \ub41c\ub2e4\uba74 \uc131\ub2a5\uc774 \ub354 \uc88b\uc740 \ubaa8\ub378\uc744 \ube60\ub974\uac8c \ubc30\ud3ec\ud560 \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"1\ub2e8\uacc4-ml-\ud30c\uc774\ud504\ub77c\uc778-\uc790\ub3d9\ud654"},"1\ub2e8\uacc4: ML \ud30c\uc774\ud504\ub77c\uc778 \uc790\ub3d9\ud654"),(0,i.kt)("h3",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"level-1-pipeline",src:n(1972).Z,width:"1356",height:"942"})),(0,i.kt)("p",null,"\uadf8\ub798\uc11c MLOps\uc5d0\uc11c\ub294 \u201c\ud30c\uc774\ud504\ub77c\uc778(Pipeline)\u201d\uc744 \uc774\uc6a9\ud574 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ubc29\uc9c0\ud558\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. MLOps\uc758 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ub3c4\ucee4\uc640 \uac19\uc740 \ucee8\ud14c\uc774\ub108\ub97c \uc774\uc6a9\ud574 \uba38\uc2e0\ub7ec\ub2dd \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \ubaa8\ub378 \uac1c\ubc1c\uc5d0 \uc0ac\uc6a9\ud55c \uac83\uacfc \ub3d9\uc77c\ud55c \ud658\uacbd\uc73c\ub85c \ub3d9\uc791\ub418\ub294 \uac83\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574\uc11c \ud658\uacbd\uc774 \ub2ec\ub77c\uc11c \ubaa8\ub378\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \uc0c1\ud669\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7f0\ub370 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc94\uc6a9\uc801\uc778 \uc6a9\uc5b4\ub85c \uc5ec\ub7ec \ub2e4\uc591\ud55c \ud0dc\uc2a4\ud06c\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uba38\uc2e0\ub7ec\ub2dd \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \uc791\uc131\ud558\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc5ed\ud560\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",(0,i.kt)("br",{parentName:"p"}),"\n","\uba38\uc2e0\ub7ec\ub2dd \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \uc791\uc131\ud558\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \uc0dd\uc0b0\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud30c\uc774\ud504\ub77c\uc778 \ub300\uc2e0 \ud559\uc2b5 \ud30c\uc774\ud504\ub77c\uc778(Training Pipeline)\uc774 \ub354 \uc815\ud655\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"continuous-training"},"Continuous Training"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"level-1-ct.png",src:n(3155).Z,width:"1356",height:"942"})),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 Continuous Training(CT) \uac1c\ub150\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 CT\ub294 \uc65c \ud544\uc694\ud560\uae4c\uc694?"),(0,i.kt)("h4",{id:"auto-retrain"},"Auto Retrain"),(0,i.kt)("p",null,"Real World\uc5d0\uc11c \ub370\uc774\ud130\ub294 Data Shift\ub77c\ub294 \ub370\uc774\ud130\uc758 \ubd84\ud3ec\uac00 \uacc4\uc18d\ud574\uc11c \ubcc0\ud558\ub294 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uacfc\uac70\uc5d0 \ud559\uc2b5\ud55c \ubaa8\ub378\uc774 \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \ubaa8\ub378\uc758 \uc131\ub2a5\uc774 \uc800\ud558\ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uac00\uc7a5 \uac04\ub2e8\ud558\uace0 \ud6a8\uacfc\uc801\uc778 \ud574\uacb0\ucc45\uc740 \ubc14\ub85c \ucd5c\uadfc \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \ubaa8\ub378\uc744 \uc7ac\ud559\uc2b5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ubcc0\ud654\ub41c \ub370\uc774\ud130 \ubd84\ud3ec\uc5d0 \ub9de\ucdb0\uc11c \ubaa8\ub378\uc744 \uc7ac\ud559\uc2b5\ud558\uba74 \ub2e4\uc2dc \uc900\uc218\ud55c \uc131\ub2a5\uc744 \ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"auto-deploy"},"Auto Deploy"),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc81c\uc870\uc5c5\uacfc \uac19\uc774 \ud55c \uacf5\uc7a5\uc5d0\uc11c \uc5ec\ub7ec \ub808\uc2dc\ud53c\ub97c \ucc98\ub9ac\ud558\ub294 \uacbd\uc6b0 \ubb34\uc870\uac74 \uc7ac\ud559\uc2b5\uc744 \ud558\ub294 \uac83\uc774 \uc88b\uc9c0 \uc54a\uc744 \uc218 \ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Blind Spot\uc774 \ub300\ud45c\uc801\uc778 \uc608\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \uc790\ub3d9\ucc28 \uc0dd\uc0b0 \ub77c\uc778\uc5d0\uc11c \ubaa8\ub378 A\uc5d0 \ub300\ud574\uc11c \ubaa8\ub378\uc744 \ub9cc\ub4e4\uace0 \uc774\ub97c \uc774\uc6a9\ud574 \uc608\uce21\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc804\ud600 \ub2e4\ub978 \ubaa8\ub378 B\uac00 \ub4e4\uc5b4\uc624\uba74 \uc774\uc804\uc5d0 \ubcf4\uc9c0 \ubabb\ud55c \ub370\uc774\ud130 \ud328\ud134\uc774\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub378 B\uc5d0 \ub300\ud574\uc11c \uc0c8\ub85c\uc6b4 \ubaa8\ub378\uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uc81c \ubaa8\ub378 B\uc5d0 \ub300\ud574\uc11c \ubaa8\ub378\uc744 \ub9cc\ub4e4\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub378\uc740 \uc608\uce21\uc744 \uc9c4\ud589\ud560 \uac83 \uc785\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub9cc\uc57d \ub370\uc774\ud130\uac00 \ub2e4\uc2dc \ubaa8\ub378 A\ub85c \ubc14\ub010\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?",(0,i.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d Retraining \uaddc\uce59\ub9cc \uc788\ub2e4\uba74 \ub2e4\uc2dc \ubaa8\ub378 A\uc5d0 \ub300\ud574\uc11c \uc0c8\ub85c\uc6b4 \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc774 \ucda9\ubd84\ud55c \uc131\ub2a5\uc744 \ubcf4\uc774\uae30 \uc704\ud574\uc11c\ub294 \ucda9\ubd84\ud55c \uc591\uc758 \ub370\uc774\ud130\uac00 \ubaa8\uc5ec\uc57c \ud569\ub2c8\ub2e4. Blind Spot\uc774\ub780 \uc774\ub807\uac8c \ub370\uc774\ud130\ub97c \ubaa8\uc73c\uae30 \uc704\ud574\uc11c \ubaa8\ub378\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \uad6c\uac04\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c Blind Spot\uc744 \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc740 \uac04\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc14\ub85c \ubaa8\ub378 A\uc5d0 \ub300\ud55c \ubaa8\ub378\uc774 \uacfc\uac70\uc5d0 \uc788\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uace0 \ub9cc\uc57d \uc788\uc5c8\ub2e4\uba74 \uc0c8\ub85c\uc6b4 \ubaa8\ub378\uc744 \ubc14\ub85c \ud559\uc2b5\ud558\uae30 \ubcf4\ub2e4\ub294 \uc774 \uc804 \ubaa8\ub378\uc744 \uc774\uc6a9\ud574 \ub2e4\uc2dc \uc608\uce21\uc744 \ud558\uba74 \uc774\ub7f0 Blind Spot\uc744 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ubaa8\ub378\uc640 \uac19\uc740 \uba54\ud0c0 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \ubaa8\ub378\uc744 \uc790\ub3d9\uc73c\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \uac83\uc744 Auto Deploy\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74 CT\ub97c \uc704\ud574\uc11c\ub294 Auto Retraining\uc758\uacfc Auto Deploy \ub450 \uac00\uc9c0 \uae30\ub2a5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ub458\uc740 \uc11c\ub85c\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud574 \uacc4\uc18d\ud574\uc11c \ubaa8\ub378\uc758 \uc131\ub2a5\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"2\ub2e8\uacc4-cicd-\ud30c\uc774\ud504\ub77c\uc778\uc758-\uc790\ub3d9\ud654"},"2\ub2e8\uacc4: CI/CD \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc790\ub3d9\ud654"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"level-2",src:n(6730).Z,width:"1356",height:"862"})),(0,i.kt)("p",null,"2\ub2e8\uacc4\uc758 \uc81c\ubaa9\uc740 CI\uc640 CD\uc758 \uc790\ub3d9\ud654 \uc785\ub2c8\ub2e4. DevOps\uc5d0\uc11c\uc758 CI/CD\uc758 \ub300\uc0c1\uc740 \uc18c\uc2a4 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 MLOps\ub294 \uc5b4\ub5a4 \uac83\uc774 CI/CD\uc758 \ub300\uc0c1\uc77c\uae4c\uc694?"),(0,i.kt)("p",null,"MLOps\uc758 CI/CD \ub300\uc0c1 \ub610\ud55c \uc18c\uc2a4 \ucf54\ub4dc\uc778 \uac83\uc740 \ub9de\uc9c0\ub9cc \uc870\uae08 \ub354 \uc5c4\ubc00\ud788 \uc815\uc758\ud558\uc790\uba74 \ud559\uc2b5 \ud30c\uc774\ud504\ub77c\uc778\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub798\uc11c \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc601\ud5a5\uc774 \uc788\ub294 \ubcc0\ud654\uc5d0 \ub300\ud574\uc11c \uc2e4\uc81c\ub85c \ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ud559\uc2b5\uc774 \ub418\ub294\uc9c0 (CI), \ud559\uc2b5\ub41c \ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 (CD)\ub97c \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud559\uc2b5\uc744 \ud558\ub294 \ucf54\ub4dc\uc5d0 \uc9c1\uc811\uc801\uc778 \uc218\uc815\uc774 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 CI/CD\ub97c \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucf54\ub4dc \uc678\uc5d0\ub3c4 \uc0ac\uc6a9\ud558\ub294 \ud328\ud0a4\uc9c0\uc758 \ubc84\uc804, \ud30c\uc774\uc36c\uc758 \ubc84\uc804 \ubcc0\uacbd\ub3c4 CI/CD\uc758 \ub300\uc0c1\uc785\ub2c8\ub2e4. \ub9ce\uc740 \uacbd\uc6b0 \uba38\uc2e0 \ub7ec\ub2dd\uc740 \uc624\ud508 \uc18c\uc2a4\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc624\ud508 \uc18c\uc2a4\ub294 \uadf8 \ud2b9\uc131\uc0c1 \ubc84\uc804\uc774 \ubc14\ub00c\uc5c8\uc744 \ub54c \ud568\uc218\uc758 \ub0b4\ubd80 \ub85c\uc9c1\uc774 \ubcc0\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \uc5b4\ub290 \uc815\ub3c4 \ubc84\uc804\uc774 \uc62c\ub77c \uac08 \ub54c \uc774\uc640 \uad00\ub828\ub41c \uc54c\ub9bc\uc744 \uc8fc\uc9c0\ub9cc \ud55c \ubc88\uc5d0 \ubc84\uc804\uc774 \ud06c\uac8c \ubc14\ub010\ub2e4\uba74 \uc774\ub7ec\ud55c \ubcc0\ud654\ub97c \ubaa8\ub97c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \uc0ac\uc6a9\ud558\ub294 \ud328\ud0a4\uc9c0\uc758 \ubc84\uc804\uc774 \ubcc0\ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 CI/CD\ub97c \ud1b5\ud574 \uc815\uc0c1\uc801\uc73c\ub85c \ubaa8\ub378\uc774 \ud559\uc2b5, \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},5450:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/level-0-85b288b20c458e64055199fc50b1fe86.png"},3155:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/level-1-ct-a1ac90943bd5dd8e9af840cbcf51e985.png"},1972:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/level-1-pipeline-b2979b34d4804546ef4005cdf0f6311a.png"},6730:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/level-2-a4bb6a840eb99f33f3027217a5a04d8e.png"},2422:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/paper-2-b10bd2ae7445c3098c9f133131859466.png"},765:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/paper-67df32c03d5288f214c8cd189f85b2ea.png"},2412:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/toon-8ff2a8fb63a502a2b419a4cd459a7e41.png"}}]);