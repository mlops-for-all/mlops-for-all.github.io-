"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Install Docker",description:"Install docker to start.",sidebar_position:1,contributors:["Jongseob Jeon","Jaeyeon Kim"]},l=void 0,i={unversionedId:"prerequisites/docker/install",id:"version-1.0/prerequisites/docker/install",title:"Install Docker",description:"Install docker to start.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/install.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/install",permalink:"/en/docs/1.0/prerequisites/docker/install",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/install.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:1,frontMatter:{title:"Install Docker",description:"Install docker to start.",sidebar_position:1,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",next:{title:"Why Docker & Kubernetes ?",permalink:"/en/docs/1.0/prerequisites/docker/introduction"}},s={},c=[{value:"Docker",id:"docker",level:2},{value:"Check Installation",id:"check-installation",level:2},{value:"Before diving in..",id:"before-diving-in",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"To practice Docker, you need to install Docker.",(0,a.kt)("br",{parentName:"p"}),"\n","The Docker installation varies depending on which OS you are using.",(0,a.kt)("br",{parentName:"p"}),"\n","Please refer to the official website for the Docker installation that fits your environment: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"ubuntu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"mac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"windows"))),(0,a.kt)("h2",{id:"check-installation"},"Check Installation"),(0,a.kt)("p",null,"Check installation requires an OS, terminal environment where ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run hello-world")," runs correctly."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"OS"),(0,a.kt)("th",{parentName:"tr",align:null},"Docker Engine"),(0,a.kt)("th",{parentName:"tr",align:null},"Terminal"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"zsh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"Powershell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"WSL2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Engine"),(0,a.kt)("td",{parentName:"tr",align:null},"bash")))),(0,a.kt)("h2",{id:"before-diving-in"},"Before diving in.."),(0,a.kt)("p",null,"It is possible that many metaphors and examples will be focused towards MLOps as they explain the necessary Docker usage to use MLOps."))}d.isMDXComponent=!0}}]);