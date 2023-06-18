"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),b=o,d=s["".concat(u,".").concat(b)]||s[b]||f[b]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},l=void 0,a={unversionedId:"kubeflow/kubeflow-intro",id:"kubeflow/kubeflow-intro",title:"1. Kubeflow Introduction",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/kubeflow-intro.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-intro",permalink:"/en/docs/kubeflow/kubeflow-intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/kubeflow-intro.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:1,frontMatter:{title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Kubeflow Pipeline \uad00\ub828",permalink:"/en/docs/kubeflow-dashboard-guide/experiments-and-others"},next:{title:"2. Kubeflow Concepts",permalink:"/en/docs/kubeflow/kubeflow-concepts"}},u={},c=[],p={toc:c},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubeflow\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8(Component)\uc640 \ud30c\uc774\ud504\ub77c\uc778(Pipeline)\uc744 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c \uc124\uba85\ud558\ub294 \ubc29\uc2dd\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/overview/quickstart/"},"Kubeflow Pipeline \uacf5\uc2dd \ud648\ud398\uc774\uc9c0"),"\uc5d0\uc11c \uc124\uba85\ud558\ub294 \ubc29\uc2dd\uacfc\ub294 \ub2e4\uc18c \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 Kubeflow Pipeline\uc744 \uc6cc\ud06c\ud50c\ub85c(Workflow)\uac00 \uc544\ub2cc \uc55e\uc11c \uc124\uba85\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/kubeflow-concepts#component-contents"},"MLOps\ub97c \uad6c\uc131\ud558\ub294 \uc694\uc18c")," \uc911 \ud558\ub098\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubb34\uc5c7\uc774\uba70 \uc5b4\ub5bb\uac8c \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);