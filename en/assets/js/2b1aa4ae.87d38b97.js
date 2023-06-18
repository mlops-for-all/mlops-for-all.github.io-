"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"3. Install Requirements",description:"",sidebar_position:3,contributors:["Jongseob Jeon"]},i=void 0,l={unversionedId:"kubeflow/basic-requirements",id:"kubeflow/basic-requirements",title:"3. Install Requirements",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/basic-requirements.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-requirements",permalink:"/en/docs/kubeflow/basic-requirements",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/basic-requirements.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:3,frontMatter:{title:"3. Install Requirements",description:"",sidebar_position:3,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"2. Kubeflow Concepts",permalink:"/en/docs/kubeflow/kubeflow-concepts"},next:{title:"4. Component - Write",permalink:"/en/docs/kubeflow/basic-component"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc2e4\uc2b5\uc744 \uc704\ud574 \uad8c\uc7a5\ud558\ub294 \ud30c\uc774\uc36c \ubc84\uc804\uc740 python>=3.7\uc785\ub2c8\ub2e4. \ud30c\uc774\uc36c \ud658\uacbd\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc740 \ubd84\ub4e4\uc740 \ub2e4\uc74c ",(0,o.kt)("a",{parentName:"p",href:"../appendix/pyenv"},"Appendix 1. \ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd"),"\uc744 \ucc38\uace0\ud558\uc5ec ",(0,o.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc"),"\uc5d0 \uc124\uce58\ud574\uc8fc\uc2e0 \ub4a4 \ud328\ud0a4\uc9c0 \uc124\uce58\ub97c \uc9c4\ud589\ud574\uc8fc\uc2dc\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc2e4\uc2b5\uc744 \uc9c4\ud589\ud558\uae30\uc5d0\uc11c \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub4e4\uacfc \ubc84\uc804\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"requirements.txt"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kfp==1.8.9\nscikit-learn==1.0.1\nmlflow==1.21.0\npandas==1.3.4\ndill==0.3.4\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/appendix/pyenv#python-%EA%B0%80%EC%83%81%ED%99%98%EA%B2%BD-%EC%83%9D%EC%84%B1"},"\uc55e\uc5d0\uc11c \ub9cc\ub4e0 \ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd"),"\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pyenv activate demo\n")),(0,o.kt)("p",null,"\ud328\ud0a4\uc9c0 \uc124\uce58\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pip3 install -U pip\npip3 install kfp==1.8.9 scikit-learn==1.0.1 mlflow==1.21.0 pandas==1.3.4 dill==0.3.4\n")))}m.isMDXComponent=!0}}]);