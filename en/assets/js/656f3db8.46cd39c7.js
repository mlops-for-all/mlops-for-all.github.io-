"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},i=void 0,l={unversionedId:"kubeflow-dashboard-guide/intro",id:"kubeflow-dashboard-guide/intro",title:"1. Central Dashboard",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow-dashboard-guide/intro.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/intro",permalink:"/en/docs/kubeflow-dashboard-guide/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/intro.md",tags:[],version:"current",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Prometheus & Grafana",permalink:"/en/docs/setup-components/install-components-pg"},next:{title:"2. Notebooks",permalink:"/en/docs/kubeflow-dashboard-guide/notebooks"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have completed ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/setup-components/install-components-kf"},"Kubeflow installation"),", you can access the dashboard through the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 svc/istio-ingressgateway -n istio-system 8080:80\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"after-login",src:r(5794).Z,width:"4008",height:"1266"})),(0,a.kt)("p",null,"The Central Dashboard is a UI that integrates all the features provided by Kubeflow. The features provided by the Central Dashboard can be divided based on the tabs on the left side"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"left-tabs",src:r(9268).Z,width:"3940",height:"1278"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Home"),(0,a.kt)("li",{parentName:"ul"},"Notebooks"),(0,a.kt)("li",{parentName:"ul"},"Tensorboards"),(0,a.kt)("li",{parentName:"ul"},"Volumes"),(0,a.kt)("li",{parentName:"ul"},"Models"),(0,a.kt)("li",{parentName:"ul"},"Experiments(AutoML)"),(0,a.kt)("li",{parentName:"ul"},"Experiments(KFP)"),(0,a.kt)("li",{parentName:"ul"},"Pipelines"),(0,a.kt)("li",{parentName:"ul"},"Runs"),(0,a.kt)("li",{parentName:"ul"},"Recurring Runs"),(0,a.kt)("li",{parentName:"ul"},"Artifacts"),(0,a.kt)("li",{parentName:"ul"},"Executions")),(0,a.kt)("p",null,"Let's now look at the simple usage of each feature."))}d.isMDXComponent=!0},5794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/after-login-4b41daca6d9a97824552770b832d59b0.png"},9268:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);