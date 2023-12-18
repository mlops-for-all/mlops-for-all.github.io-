"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[924],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>b});var n=t(7294);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function p(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?p(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,l=function(e,i){if(null==e)return{};var t,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=n.createContext({}),s=function(e){var i=n.useContext(r),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},c=function(e){var i=s(e.components);return n.createElement(r.Provider,{value:i},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,l=e.mdxType,p=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=l,b=u["".concat(r,".").concat(g)]||u[g]||d[g]||p;return t?n.createElement(b,a(a({ref:i},c),{},{components:t})):n.createElement(b,a({ref:i},c))}));function b(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var p=t.length,a=new Array(p);a[0]=g;var o={};for(var r in i)hasOwnProperty.call(i,r)&&(o[r]=i[r]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<p;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7515:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=t(7462),l=(t(7294),t(3905));const p={title:"6. Pipeline - Upload",description:"",sidebar_position:6,contributors:["Jongseob Jeon"]},a=void 0,o={unversionedId:"kubeflow/basic-pipeline-upload",id:"version-1.0/kubeflow/basic-pipeline-upload",title:"6. Pipeline - Upload",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/basic-pipeline-upload.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-pipeline-upload",permalink:"/en/docs/1.0/kubeflow/basic-pipeline-upload",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/basic-pipeline-upload.md",tags:[],version:"1.0",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:6,frontMatter:{title:"6. Pipeline - Upload",description:"",sidebar_position:6,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"5. Pipeline - Write",permalink:"/en/docs/1.0/kubeflow/basic-pipeline"},next:{title:"7. Pipeline - Run",permalink:"/en/docs/1.0/kubeflow/basic-run"}},r={},s=[{value:"Upload Pipeline",id:"upload-pipeline",level:2},{value:"1. Click Pipelines Tab",id:"1-click-pipelines-tab",level:3},{value:"2. Click Upload Pipeline",id:"2-click-upload-pipeline",level:3},{value:"3. Click Choose file",id:"3-click-choose-file",level:3},{value:"4. Upload created yaml file",id:"4-upload-created-yaml-file",level:3},{value:"5. Create",id:"5-create",level:3},{value:"Upload Pipeline Version",id:"upload-pipeline-version",level:2}],c={toc:s},u="wrapper";function d(e){let{components:i,...p}=e;return(0,l.kt)(u,(0,n.Z)({},c,p,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"upload-pipeline"},"Upload Pipeline"),(0,l.kt)("p",null,"Now, let's upload the pipeline we created directly to kubeflow.",(0,l.kt)("br",{parentName:"p"}),"\n","Pipeline uploads can be done through the kubeflow dashboard UI.\nUse the method used in ",(0,l.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-components/install-components-kf"},"Install Kubeflow")," to do port forwarding."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/istio-ingressgateway -n istio-system 8080:80\n")),(0,l.kt)("p",null,"Access ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," to open the dashboard."),(0,l.kt)("h3",{id:"1-click-pipelines-tab"},"1. Click Pipelines Tab"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-0.png",src:t(1962).Z,width:"3360",height:"2100"})),(0,l.kt)("h3",{id:"2-click-upload-pipeline"},"2. Click Upload Pipeline"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-1.png",src:t(5675).Z,width:"3360",height:"2100"})),(0,l.kt)("h3",{id:"3-click-choose-file"},"3. Click Choose file"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-2.png",src:t(4964).Z,width:"3360",height:"2100"})),(0,l.kt)("h3",{id:"4-upload-created-yaml-file"},"4. Upload created yaml file"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-3.png",src:t(1777).Z,width:"3360",height:"2100"})),(0,l.kt)("h3",{id:"5-create"},"5. Create"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-4.png",src:t(1636).Z,width:"3360",height:"2100"})),(0,l.kt)("h2",{id:"upload-pipeline-version"},"Upload Pipeline Version"),(0,l.kt)("p",null,"The uploaded pipeline allows you to manage versions through uploads. However, it serves the role of gathering pipelines with the same name rather than version management at the code level, such as Github.\nIn the example above, clicking on example_pipeline will bring up the following screen."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-5.png",src:t(5050).Z,width:"3360",height:"2100"})),(0,l.kt)("p",null,"If you click this screen shows."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-4.png",src:t(1636).Z,width:"3360",height:"2100"})),(0,l.kt)("p",null,"If you click Upload Version, a screen appears where you can upload the pipeline."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-6.png",src:t(2485).Z,width:"3360",height:"2100"})),(0,l.kt)("p",null,"Now, upload your pipeline."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-7.png",src:t(6958).Z,width:"3360",height:"2100"})),(0,l.kt)("p",null,"Once uploaded, you can check the pipeline version as follows."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pipeline-gui-8.png",src:t(1912).Z,width:"3360",height:"2100"})))}d.isMDXComponent=!0},1962:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-0-f7b76be96957b718745ed2097584c522.png"},5675:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-1-db1f71e3803fa7f7864928391e5b515e.png"},4964:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-2-3ebafe6d26ce8382bed6c39fdb949ffc.png"},1777:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-3-39b0f036fc76c0832ea02dc835db627a.png"},1636:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-4-c6013b589b7ab9ec9b83fbbb68f41b2d.png"},5050:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-5-0b90b4869ebaf0654826f5763609e34a.png"},2485:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-6-2a94de3824c6e38732d1d18ecb4b7d10.png"},6958:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-7-af0c439edb4ba0f0b7d7e11488d9c971.png"},1912:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pipeline-gui-8-2aecbdbeaa0c064cb224d77c268717ca.png"}}]);