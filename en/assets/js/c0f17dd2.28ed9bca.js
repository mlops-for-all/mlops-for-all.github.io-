"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2011],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7957:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={title:"4. Volumes",description:"",sidebar_position:4,contributors:["Jaeyeon Kim"]},s=void 0,i={unversionedId:"kubeflow-dashboard-guide/volumes",id:"version-1.0/kubeflow-dashboard-guide/volumes",title:"4. Volumes",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow-dashboard-guide/volumes.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/volumes",permalink:"/en/docs/1.0/kubeflow-dashboard-guide/volumes",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow-dashboard-guide/volumes.md",tags:[],version:"1.0",lastUpdatedBy:"conqrean",lastUpdatedAt:1705274857,formattedLastUpdatedAt:"Jan 14, 2024",sidebarPosition:4,frontMatter:{title:"4. Volumes",description:"",sidebar_position:4,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"3. Tensorboards",permalink:"/en/docs/1.0/kubeflow-dashboard-guide/tensorboards"},next:{title:"5. Experiments(AutoML)",permalink:"/en/docs/1.0/kubeflow-dashboard-guide/experiments"}},l={},u=[{value:"Volumes",id:"volumes",level:2},{value:"Creating a Volume",id:"creating-a-volume",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"volumes"},"Volumes"),(0,r.kt)("p",null,"Next, let's click on the Volumes tab in the left of the Central Dashboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"left-tabs",src:o(7173).Z,width:"3940",height:"1278"})),(0,r.kt)("p",null,"You will see the following screen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"volumes",src:o(2983).Z,width:"1386",height:"382"})),(0,r.kt)("p",null,"Volumes tab provides the functionality to manage the Persistent Volume Claims (PVC) belonging to the current user's namespace in Kubernetes' Volume (Volume)."),(0,r.kt)("p",null,"By looking at the screenshot, you can see the information of the Volume created on the ",(0,r.kt)("a",{parentName:"p",href:"../kubeflow-dashboard-guide/notebooks"},"1. Notebooks")," page. It can be seen that the Storage Class of the Volume is set to local-path, which is the Default Storage Class installed at the time of Kubernetes cluster installation."),(0,r.kt)("p",null,"In addition, the Volumes page can be used if you want to create, view, or delete a new Volume in the user namespace."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-a-volume"},"Creating a Volume"),(0,r.kt)("p",null,"By clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"+ NEW VOLUME")," button at the top right, you can see the following screen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"new-volume",src:o(6876).Z,width:"1192",height:"934"})),(0,r.kt)("p",null,"You can create a volume by specifying its name, size, storage class, and access mode."),(0,r.kt)("p",null,"When you specify the desired resource specs to create a volume, its Status will be shown as Pending on this page. When you hover over the Status icon, you will see a message that this ",(0,r.kt)("em",{parentName:"p"},"(This volume will be bound when its first consumer is created.)"),(0,r.kt)("br",{parentName:"p"}),"\n","This is according to the volume creation policy of the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/storage-classes/"},"StorageClass")," used in the lab, which is local-path. ",(0,r.kt)("strong",{parentName:"p"},"This is not a problem situation."),(0,r.kt)("br",{parentName:"p"}),"\n","When the Status is shown as Pending on this page, you can still specify the name of the volume in the notebook server or pod that you want to use the volume and the volume creation will be triggered at that time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"creating-volume",src:o(2996).Z,width:"1572",height:"450"})))}p.isMDXComponent=!0},2996:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/creating-volume-38085f1d8dcc5f1a0f2df336a6ad99e7.png"},7173:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},6876:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/new-volume-b14c633d4f22b7948f111122da491ccd.png"},2983:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/volumes-8a47fc94771470514efa705ec8b6d0fe.png"}}]);