"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=i(r),d=u,k=c["".concat(p,".").concat(d)]||c[d]||b[d]||s;return r?n.createElement(k,o(o({ref:t},l),{},{components:r})):n.createElement(k,o({ref:t},l))}));function k(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:u,o[1]=a;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var n=r(7462),u=(r(7294),r(3905));const s={title:"2. Setup Kubernetes",description:"Setup Kubernetes",sidebar_position:2,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,a={unversionedId:"setup-kubernetes/kubernetes",id:"setup-kubernetes/kubernetes",title:"2. Setup Kubernetes",description:"Setup Kubernetes",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-kubernetes/kubernetes.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/kubernetes",permalink:"/en/docs/setup-kubernetes/kubernetes",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-kubernetes/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:2,frontMatter:{title:"2. Setup Kubernetes",description:"Setup Kubernetes",sidebar_position:2,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/en/docs/setup-kubernetes/intro"},next:{title:"3. Install Prerequisite",permalink:"/en/docs/setup-kubernetes/install-prerequisite"}},p={},i=[{value:"Setup Kubernetes Cluster",id:"setup-kubernetes-cluster",level:2}],l={toc:i},c="wrapper";function b(e){let{components:t,...r}=e;return(0,u.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"setup-kubernetes-cluster"},"Setup Kubernetes Cluster"),(0,u.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \ucc98\uc74c \ubc30\uc6b0\uc2dc\ub294 \ubd84\ub4e4\uc5d0\uac8c \uccab \uc9c4\uc785 \uc7a5\ubcbd\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc2e4\uc2b5 \ud658\uacbd\uc744 \uad6c\ucd95\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,u.kt)("p",null,"\ud504\ub85c\ub355\uc158 \ub808\ubca8\uc758 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\uac8c \uacf5\uc2dd\uc801\uc73c\ub85c \uc9c0\uc6d0\ud558\ub294 \ub3c4\uad6c\ub294 kubeadm \uc774\uc9c0\ub9cc, \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc870\uae08 \ub354 \uc27d\uac8c \uad6c\ucd95\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 kubespray, kops \ub4f1\uc758 \ub3c4\uad6c\ub3c4 \uc874\uc7ac\ud558\uba70, \ud559\uc2b5 \ubaa9\uc801\uc744 \uc704\ud574\uc11c \ucef4\ud329\ud2b8\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc815\ub9d0 \uc27d\uac8c \uad6c\ucd95\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 k3s, minikube, microk8s, kind \ub4f1\uc758 \ub3c4\uad6c\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,u.kt)("p",null,"\uac01\uac01\uc758 \ub3c4\uad6c\ub294 \uc7a5\ub2e8\uc810\uc774 \ub2e4\ub974\uae30\uc5d0 \uc0ac\uc6a9\uc790\ub9c8\ub2e4 \uc120\ud638\ud558\ub294 \ub3c4\uad6c\uac00 \ub2e4\ub978 \uc810\uc744 \uace0\ub824\ud558\uc5ec, \ubcf8 \uae00\uc5d0\uc11c\ub294 kubeadm, k3s, minikube\uc758 3\uac00\uc9c0 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud558\uc5ec \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc744 \ub2e4\ub8f9\ub2c8\ub2e4.\n\uac01 \ub3c4\uad6c\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ube44\uad50\ub294 \ub2e4\uc74c \ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,u.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/tools/"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ud655\uc778\ud574\uc8fc\uc2dc\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c \uad8c\uc7a5\ud558\ub294 \ud234\uc740 ",(0,u.kt)("strong",{parentName:"p"},"k3s"),"\ub85c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud560 \ub54c \uc27d\uac8c \ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,u.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \ub178\ub4dc \uad6c\uc131\uae4c\uc9c0 \ud65c\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,u.kt)("strong",{parentName:"p"},"kubeadm"),"\uc744 \uad8c\uc7a5\ud574 \ub4dc\ub9bd\ub2c8\ub2e4.",(0,u.kt)("br",{parentName:"p"}),"\n","minikube\ub294 \uc800\ud76c\uac00 \uc124\uba85\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uc678\uc5d0\ub3c4 \ub2e4\ub978 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c add-on \ud615\uc2dd\uc73c\ub85c \uc27d\uac8c \uc124\uce58\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,u.kt)("p",null,"\ubcf8 ",(0,u.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \uad6c\ucd95\ud558\uac8c \ub420 MLOps \uad6c\uc131 \uc694\uc18c\ub4e4\uc744 \uc6d0\ud65c\ud788 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574, \uac01\uac01\uc758 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud560 \ub54c, \ucd94\uac00\ub85c \uc124\uc815\ud574 \uc8fc\uc5b4\uc57c \ud558\ub294 \ubd80\ubd84\uc774 \ucd94\uac00\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,u.kt)("p",null,"Ubuntu OS\uae4c\uc9c0\ub294 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ub370\uc2a4\ud06c\ud0d1\uc744 k8s cluster\ub85c \uad6c\ucd95\ud55c \ub4a4, \uc678\ubd80 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc5d0\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc811\uadfc\ud558\ub294 \uac83\uc744 \ud655\uc778\ud558\ub294 \uac83\uae4c\uc9c0\uac00 \ubcf8 ",(0,u.kt)("strong",{parentName:"p"},"Setup Kubernetes"),"\ub2e8\uc6d0\uc758 \ubc94\uc704\uc785\ub2c8\ub2e4."),(0,u.kt)("p",null,"\uc790\uc138\ud55c \uad6c\ucd95 \ubc29\ubc95\uc740 3\uac00\uc9c0 \ub3c4\uad6c\ub9c8\ub2e4 \ub2e4\ub974\uae30\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \ud750\ub984\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"3. Setup Prerequisite\n4. Setup Kubernetes\n  4.1. with k3s\n  4.2. with minikube\n  4.3. with kubeadm\n5. Setup Kubernetes Modules\n")),(0,u.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \uac01\uac01\uc758 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ubc18\ub4dc\uc2dc \ubaa8\ub4e0 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud574 \ubcfc \ud544\uc694\ub294 \uc5c6\uc73c\uba70, \uc774 \uc911 \uc5ec\ub7ec\ubd84\uc774 \uc775\uc219\ud558\uc2e0 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574\uc8fc\uc2dc\uba74 \ucda9\ubd84\ud569\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);