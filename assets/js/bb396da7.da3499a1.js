"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,f=u["".concat(l,".").concat(b)]||u[b]||c[b]||a;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={title:"3. Tensorboards",description:"",sidebar_position:3,contributors:["Jaeyeon Kim"]},s=void 0,i={unversionedId:"kubeflow-dashboard-guide/tensorboards",id:"kubeflow-dashboard-guide/tensorboards",title:"3. Tensorboards",description:"",source:"@site/docs/kubeflow-dashboard-guide/tensorboards.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/tensorboards",permalink:"/docs/kubeflow-dashboard-guide/tensorboards",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/tensorboards.md",tags:[],version:"current",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 18\uc77c",sidebarPosition:3,frontMatter:{title:"3. Tensorboards",description:"",sidebar_position:3,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"2. Notebooks",permalink:"/docs/kubeflow-dashboard-guide/notebooks"},next:{title:"4. Volumes",permalink:"/docs/kubeflow-dashboard-guide/volumes"}},l={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294 Central Dashboard\uc758 \uc67c\ucabd \ud0ed\uc758 Tensorboards\ub97c \ud074\ub9ad\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"left-tabs",src:r(7511).Z,width:"3940",height:"1278"})),(0,n.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tensorboard",src:r(1076).Z,width:"2030",height:"406"})),(0,n.kt)("p",null,"Tensorboards \ud0ed\uc740 Tensorflow, PyTorch \ub4f1\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Tensorboard \uc720\ud2f8\uc774 \uc0dd\uc131\ud55c ML \ud559\uc2b5 \uad00\ub828 \ub370\uc774\ud130\ub97c \uc2dc\uac01\ud654\ud558\ub294 \ud150\uc11c\ubcf4\ub4dc \uc11c\ubc84(Tensorboard Server)\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc0dd\uc131\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774\ub807\uac8c \uc0dd\uc131\ud55c \ud150\uc11c\ubcf4\ub4dc \uc11c\ubc84\ub294, \uc77c\ubc18\uc801\uc778 \uc6d0\uaca9 \ud150\uc11c\ubcf4\ub4dc \uc11c\ubc84\uc758 \uc0ac\uc6a9\ubc95\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc73c\uba70, ",(0,n.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/output-viewer/#tensorboard"},"Kubeflow \ud30c\uc774\ud504\ub77c\uc778 \ub7f0\uc5d0\uc11c \ubc14\ub85c \ud150\uc11c\ubcf4\ub4dc \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uc6a9\ub3c4"),"\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"Kubeflow \ud30c\uc774\ud504\ub77c\uc778 \ub7f0\uc758 \uacb0\uacfc\ub97c \uc2dc\uac01\ud654\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 ",(0,n.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/output-viewer/"},"\ub2e4\uc591\ud55c \ubc29\uc2dd"),"\uc774 \uc788\uc73c\uba70, ",(0,n.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \ub354 \uc77c\ubc18\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d Kubeflow \ucef4\ud3ec\ub10c\ud2b8\uc758 Visualization \uae30\ub2a5\uacfc MLflow\uc758 \uc2dc\uac01\ud654 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud560 \uc608\uc815\uc774\ubbc0\ub85c, Tensorboards \ud398\uc774\uc9c0\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 \uc0dd\ub7b5\ud558\uaca0\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0},7511:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},1076:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/tensorboard-ec19f59c613e94e6b1ba7759e853f4ed.png"}}]);