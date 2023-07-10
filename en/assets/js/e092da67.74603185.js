"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,b=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"5. Experiments(AutoML)",description:"",sidebar_position:5,contributors:["Jaeyeon Kim"]},i=void 0,s={unversionedId:"kubeflow-dashboard-guide/experiments",id:"kubeflow-dashboard-guide/experiments",title:"5. Experiments(AutoML)",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow-dashboard-guide/experiments.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/experiments",permalink:"/en/docs/kubeflow-dashboard-guide/experiments",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/experiments.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:5,frontMatter:{title:"5. Experiments(AutoML)",description:"",sidebar_position:5,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Volumes",permalink:"/en/docs/kubeflow-dashboard-guide/volumes"},next:{title:"6. Kubeflow Pipeline Relates",permalink:"/en/docs/kubeflow-dashboard-guide/experiments-and-others"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Next, we will click the Experiments(AutoML) tab on the left of the Central Dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(9268).Z,width:"3940",height:"1278"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"automl",src:r(2847).Z,width:"1498",height:"272"})),(0,o.kt)("p",null,"The Experiments(AutoML) page is where you can manage ",(0,o.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/katib/overview/"},"Katib"),", which is responsible for AutoML through Hyperparameter Tuning and Neural Architecture Search in Kubeflow."),(0,o.kt)("p",null,"The usage of Katib and Experiments(AutoML) is not covered in ",(0,o.kt)("em",{parentName:"p"},"MLOps for Everyone")," v1.0, and will be added in v2.0."))}d.isMDXComponent=!0},2847:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/automl-7f762c2c67e5319953ec8567769722fb.png"},9268:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);