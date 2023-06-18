"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[3774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},i=void 0,l={unversionedId:"kubeflow-dashboard-guide/intro",id:"version-1.0/kubeflow-dashboard-guide/intro",title:"1. Central Dashboard",description:"",source:"@site/versioned_docs/version-1.0/kubeflow-dashboard-guide/intro.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/intro",permalink:"/docs/1.0/kubeflow-dashboard-guide/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow-dashboard-guide/intro.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"2023\ub144 6\uc6d4 18\uc77c",sidebarPosition:1,frontMatter:{title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Prometheus & Grafana",permalink:"/docs/1.0/setup-components/install-components-pg"},next:{title:"2. Notebooks",permalink:"/docs/1.0/kubeflow-dashboard-guide/notebooks"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/setup-components/install-components-kf"},"Kubeflow \uc124\uce58"),"\ub97c \uc644\ub8cc\ud558\uba74, \ub2e4\uc74c \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kubectl port-forward --address 0.0.0.0 svc/istio-ingressgateway -n istio-system 8080:80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"after-login",src:r(2920).Z,width:"4008",height:"1266"})),(0,o.kt)("p",null,"Central Dashboard\ub294 Kubeflow\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubaa8\ub4e0 \uae30\ub2a5\uc744 \ud1b5\ud569\ud558\uc5ec \uc81c\uacf5\ud558\ub294 UI\uc785\ub2c8\ub2e4. Central Dashboard\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc740 \ud06c\uac8c \uc67c\ucabd\uc758 \ud0ed\uc744 \uae30\uc900\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(6316).Z,width:"3940",height:"1278"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Home"),(0,o.kt)("li",{parentName:"ul"},"Notebooks"),(0,o.kt)("li",{parentName:"ul"},"Tensorboards"),(0,o.kt)("li",{parentName:"ul"},"Volumes"),(0,o.kt)("li",{parentName:"ul"},"Models"),(0,o.kt)("li",{parentName:"ul"},"Experiments(AutoML)"),(0,o.kt)("li",{parentName:"ul"},"Experiments(KFP)"),(0,o.kt)("li",{parentName:"ul"},"Pipelines"),(0,o.kt)("li",{parentName:"ul"},"Runs"),(0,o.kt)("li",{parentName:"ul"},"Recurring Runs"),(0,o.kt)("li",{parentName:"ul"},"Artifacts"),(0,o.kt)("li",{parentName:"ul"},"Executions")),(0,o.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \uae30\ub2a5\ubcc4 \uac04\ub2e8\ud55c \uc0ac\uc6a9\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},2920:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/after-login-4b41daca6d9a97824552770b832d59b0.png"},6316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);