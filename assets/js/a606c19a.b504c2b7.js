"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"4. Volumes",description:"",sidebar_position:4,contributors:["Jaeyeon Kim"]},s=void 0,l={unversionedId:"kubeflow-dashboard-guide/volumes",id:"kubeflow-dashboard-guide/volumes",title:"4. Volumes",description:"",source:"@site/docs/kubeflow-dashboard-guide/volumes.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/volumes",permalink:"/docs/kubeflow-dashboard-guide/volumes",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/volumes.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 1\uc77c",sidebarPosition:4,frontMatter:{title:"4. Volumes",description:"",sidebar_position:4,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"3. Tensorboards",permalink:"/docs/kubeflow-dashboard-guide/tensorboards"},next:{title:"5. Experiments(AutoML)",permalink:"/docs/kubeflow-dashboard-guide/experiments"}},i={},u=[{value:"Volumes",id:"volumes",level:2},{value:"\ubcfc\ub968 \uc0dd\uc131\ud558\uae30",id:"\ubcfc\ub968-\uc0dd\uc131\ud558\uae30",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"volumes"},"Volumes"),(0,o.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294 Central Dashboard\uc758 \uc67c\ucabd \ud0ed\uc758 Volumes\ub97c \ud074\ub9ad\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(7511).Z,width:"3940",height:"1278"})),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"volumes",src:r(4156).Z,width:"1386",height:"382"})),(0,o.kt)("p",null,"Volumes \ud0ed\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/volumes/"},"Kubernetes\uc758 \ubcfc\ub968(Volume)"),", \uc815\ud655\ud788\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/persistent-volumes/"},"\ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968 \ud074\ub808\uc784(Persistent Volume Claim, \uc774\ud558 pvc)")," \uc911 \ud604\uc7ac user\uc758 namespace\uc5d0 \uc18d\ud55c pvc\ub97c \uad00\ub9ac\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc704 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ubcf4\uba74, ",(0,o.kt)("a",{parentName:"p",href:"../kubeflow-dashboard-guide/notebooks"},"1. Notebooks")," \ud398\uc774\uc9c0\uc5d0\uc11c \uc0dd\uc131\ud55c Volume\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 Volume\uc758 Storage Class\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \uc124\uce58 \ub2f9\uc2dc \uc124\uce58\ud55c Default Storage Class\uc778 local-path\ub85c \uc124\uc815\ub418\uc5b4\uc788\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc678\uc5d0\ub3c4 user namespace\uc5d0 \uc0c8\ub85c\uc6b4 \ubcfc\ub968\uc744 \uc0dd\uc131\ud558\uac70\ub098, \uc870\ud68c\ud558\uac70\ub098, \uc0ad\uc81c\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0 Volumes \ud398\uc774\uc9c0\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ubcfc\ub968-\uc0dd\uc131\ud558\uae30"},"\ubcfc\ub968 \uc0dd\uc131\ud558\uae30"),(0,o.kt)("p",null,"\uc624\ub978\ucabd \uc704\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"+ NEW VOLUME")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new-volume",src:r(1037).Z,width:"1192",height:"934"})),(0,o.kt)("p",null,"name, size, storage class, access mode\ub97c \uc9c0\uc815\ud558\uc5ec \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc6d0\ud558\ub294 \ub9ac\uc18c\uc2a4 \uc2a4\ud399\uc744 \uc9c0\uc815\ud558\uc5ec \uc0dd\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ubcfc\ub968\uc758 Status\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending"),"\uc73c\ub85c \uc870\ud68c\ub429\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"Status")," \uc544\uc774\ucf58\uc5d0 \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \uac00\uc838\ub2e4 \ub300\uba74 ",(0,o.kt)("em",{parentName:"p"},"\ud574\ub2f9 \ubcfc\ub968\uc740 mount\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 first consumer\uac00 \ub098\ud0c0\ub0a0 \ub54c \uc2e4\uc81c\ub85c \uc0dd\uc131\uc744 \uc9c4\ud589\ud55c\ub2e4(This volume will be bound when its first consumer is created.)"),"\ub294 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud558\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/storage-classes/"},"StorageClass"),"\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"local-path"),"\uc758 \ubcfc\ub968 \uc0dd\uc131 \uc815\ucc45\uc5d0 \ud574\ub2f9\ud558\uba70, ",(0,o.kt)("strong",{parentName:"p"},"\ubb38\uc81c \uc0c1\ud669\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,o.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0\uc11c Status\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending")," \uc73c\ub85c \ubcf4\uc774\ub354\ub77c\ub3c4 \ud574\ub2f9 \ubcfc\ub968\uc744 \uc0ac\uc6a9\ud558\uae38 \uc6d0\ud558\ub294 \ub178\ud2b8\ubd81 \uc11c\ubc84 \ud639\uc740 \ud30c\ub4dc(Pod)\uc5d0\uc11c\ub294 \ud574\ub2f9 \ubcfc\ub968\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, \uadf8\ub54c \uc2e4\uc81c\ub85c \ubcfc\ub968 \uc0dd\uc131\uc774 \uc9c4\ud589\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"creating-volume",src:r(4502).Z,width:"1572",height:"450"})))}d.isMDXComponent=!0},4502:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/creating-volume-38085f1d8dcc5f1a0f2df336a6ad99e7.png"},7511:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},1037:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new-volume-b14c633d4f22b7948f111122da491ccd.png"},4156:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/volumes-8a47fc94771470514efa705ec8b6d0fe.png"}}]);