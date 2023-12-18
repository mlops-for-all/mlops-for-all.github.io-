"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",sidebar_position:2,contributors:["Jongseob Jeon","Jaeyeon Kim"]},i=void 0,s={unversionedId:"prerequisites/docker/introduction",id:"version-1.0/prerequisites/docker/introduction",title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/introduction.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/introduction",permalink:"/en/docs/1.0/prerequisites/docker/introduction",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/introduction.md",tags:[],version:"1.0",lastUpdatedBy:"Minwook Je",lastUpdatedAt:1702865124,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:2,frontMatter:{title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",sidebar_position:2,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"Install Docker",permalink:"/en/docs/1.0/prerequisites/docker/install"},next:{title:"What is Docker?",permalink:"/en/docs/1.0/prerequisites/docker/"}},l={},c=[{value:"Why Kubernetes ?",id:"why-kubernetes-",level:2},{value:"Docker &amp; Kubernetes",id:"docker--kubernetes",level:2},{value:"Not a software but  a product",id:"not-a-software-but--a-product",level:3},{value:"Docker",id:"docker",level:4},{value:"Kubernetes",id:"kubernetes",level:4},{value:"History of Open source",id:"history-of-open-source",level:3},{value:"Initial Docker &amp; Kubernetes",id:"initial-docker--kubernetes",level:4},{value:"Open Container Initiative",id:"open-container-initiative",level:4},{value:"CRI-O",id:"cri-o",level:4},{value:"Current docker &amp; kubernetes",id:"current-docker--kubernetes",level:4},{value:"References",id:"references",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-kubernetes-"},"Why Kubernetes ?"),(0,o.kt)("p",null,"To operationalize machine learning models, additional functionalities beyond model development are required."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Training Phase",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Schedule management for model training commands"),(0,o.kt)("li",{parentName:"ul"},"Ensuring reproducibility of trained models"))),(0,o.kt)("li",{parentName:"ol"},"Deployment Phase",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Traffic distribution"),(0,o.kt)("li",{parentName:"ul"},"Monitoring service failures"),(0,o.kt)("li",{parentName:"ul"},"Troubleshooting in case of failures")))),(0,o.kt)("p",null,"Fortunately, the software development field has already put a lot of thought and effort into addressing these needs. Therefore, when deploying machine learning models, leveraging the outcomes of these considerations can be highly beneficial. Docker and Kubernetes are two prominent software products widely used in MLOps to address these needs."),(0,o.kt)("h2",{id:"docker--kubernetes"},"Docker & Kubernetes"),(0,o.kt)("h3",{id:"not-a-software-but--a-product"},"Not a software but  a product"),(0,o.kt)("p",null,"Docker and Kubernetes are representative software (products) that provide containerization and container orchestration functions respectively."),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker was the mainstream in the past, but its usage has been decreasing gradually with the addition of various paid policy.",(0,o.kt)("br",{parentName:"p"}),"\n","However, as of March 2022, it is still the most commonly used container virtualization software."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sysdig-2019.png",src:n(6067).Z,width:"1600",height:"900"})),(0,o.kt)("center",null," [from sysdig 2019] "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sysdig-2021.png",src:n(5579).Z,width:"750",height:"437"})),(0,o.kt)("center",null," [from sysdig 2021]  "),(0,o.kt)("h4",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Kubernetes: Kubernetes is a product that has almost no comparison so far."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cncf-survey.png",src:n(6721).Z,width:"2048",height:"1317"})),(0,o.kt)("center",null," [from cncf survey] "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"t4-ai.png",src:n(6207).Z,width:"926",height:"629"})),(0,o.kt)("center",null," [from t4.ai]  "),(0,o.kt)("h3",{id:"history-of-open-source"},"History of Open source"),(0,o.kt)("h4",{id:"initial-docker--kubernetes"},"Initial Docker & Kubernetes"),(0,o.kt)("p",null,"At the beginning of Docker development, ",(0,o.kt)("strong",{parentName:"p"},"one package")," called Docker Engine contained multiple features such as API, CLI, networking, storage, etc., but it began to be ",(0,o.kt)("strong",{parentName:"p"},"divided one by one")," according to the philosophy of ",(0,o.kt)("strong",{parentName:"p"},"MSA"),".",(0,o.kt)("br",{parentName:"p"}),"\n","However, the initial Kubernetes included Docker Engine for container virtualization.",(0,o.kt)("br",{parentName:"p"}),"\n","Therefore, whenever the Docker version was updated, the interface of Docker Engine changed and Kubernetes was greatly affected."),(0,o.kt)("h4",{id:"open-container-initiative"},"Open Container Initiative"),(0,o.kt)("p",null,"In order to alleviate such inconveniences, many groups interested in container technology such as Google have come together to start the Open Container Initiative (OCI) project to set standards for containers.",(0,o.kt)("br",{parentName:"p"}),"\n","Docker further separated its interface and developed Containerd, a Container Runtime that adheres to the OCI standard, and added an abstraction layer so that dockerd calls the API of Containerd."),(0,o.kt)("p",null,"In accordance with this flow, Kubernetes also now supports not only Docker, but any Container Runtime that adheres to the OCI standard and the specified specifications with the Container Runtime Interface (CRI) specification, starting from version 1.5. "),(0,o.kt)("h4",{id:"cri-o"},"CRI-O"),(0,o.kt)("p",null,"CRI-O is a container runtime developed by Red Hat, Intel, SUSE, and IBM, which adheres to the OCI standard + CRI specifications, specifically for Kubernetes."),(0,o.kt)("h4",{id:"current-docker--kubernetes"},"Current docker & kubernetes"),(0,o.kt)("p",null,"Currently, Docker and Kubernetes have been using Docker Engine as the default container runtime, but since Docker's API did not match the CRI specification (",(0,o.kt)("em",{parentName:"p"},"OCI follows"),"), Kubernetes developed and supported a ",(0,o.kt)("strong",{parentName:"p"},"dockershim")," to make Docker's API compatible with CRI, (",(0,o.kt)("em",{parentName:"p"},"it was a huge burden for Kubernetes, not for Docker"),"). This was ",(0,o.kt)("strong",{parentName:"p"},"deprecated from Kubernetes v1.20 and abandoned from v1.23"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"v1.23 will be released in December 2021")),(0,o.kt)("p",null,"So from Kubernetes v1.23, you can no longer use Docker natively.\nHowever, ",(0,o.kt)("strong",{parentName:"p"},"users are not much affected by this change")," because Docker images created through Docker Engine comply with the OCI standard, so they can be used regardless of what container runtime Kubernetes is made of."),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/containerd%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-sean-lee/?originalSubdomain=kr"},(0,o.kt)("em",{parentName:"a"},"https://www.linkedin.com/pulse/containerd\ub294-\ubb34\uc5c7\uc774\uace0-\uc65c-\uc911\uc694\ud560\uae4c-sean-lee/?originalSubdomain=kr"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/"},"https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/"},"https://kubernetes.io/blog/2020/12/02/dockershim-faq/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/ko/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"https://kubernetes.io/ko/blog/2020/12/02/dont-panic-kubernetes-and-docker/"))))}p.isMDXComponent=!0},6721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cncf-survey-53378aeae96c2069d60cbd72e31baa22.png"},6067:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysdig-2019-a7a9178a83773e8126833287a7fb755c.png"},5579:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysdig-2021-d575835a018c7b99ef06c932a46953a3.png"},6207:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/t4-ai-f055bc33fd1f8fd7b098b71508aac896.png"}}]);