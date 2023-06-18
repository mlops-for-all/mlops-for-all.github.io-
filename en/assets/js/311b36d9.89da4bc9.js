"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"Install Docker",description:"Install docker to start.",sidebar_position:1,contributors:["Jongseob Jeon","Jaeyeon Kim"]},o=void 0,i={unversionedId:"prerequisites/docker/install",id:"version-1.0/prerequisites/docker/install",title:"Install Docker",description:"Install docker to start.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/install.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/install",permalink:"/en/docs/1.0/prerequisites/docker/install",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/install.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:1,frontMatter:{title:"Install Docker",description:"Install docker to start.",sidebar_position:1,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",next:{title:"Why Docker & Kubernetes ?",permalink:"/en/docs/1.0/prerequisites/docker/introduction"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"\uc124\uce58 \ud655\uc778",id:"\uc124\uce58-\ud655\uc778",level:2},{value:"\ub4e4\uc5b4\uac00\uae30 \uc55e\uc11c\uc11c..",id:"\ub4e4\uc5b4\uac00\uae30-\uc55e\uc11c\uc11c",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"\ub3c4\ucee4 \uc2e4\uc2b5\uc744 \uc704\ud574 \ub3c4\ucee4\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4 \uc124\uce58\ub294 \uc5b4\ub5a4 OS\ub97c \uc0ac\uc6a9\ud558\ub294\uc9c0\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uac01 \ud658\uacbd\uc5d0 \ub9de\ub294 \ub3c4\ucee4 \uc124\uce58\ub294 \uacf5\uc2dd \ud648\ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"ubuntu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"mac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"windows"))),(0,a.kt)("h2",{id:"\uc124\uce58-\ud655\uc778"},"\uc124\uce58 \ud655\uc778"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run hello-world")," \uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\ub294 OS, \ud130\ubbf8\ub110 \ud658\uacbd\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"OS"),(0,a.kt)("th",{parentName:"tr",align:null},"Docker Engine"),(0,a.kt)("th",{parentName:"tr",align:null},"Terminal"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"zsh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"Powershell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,a.kt)("td",{parentName:"tr",align:null},"WSL2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Engine"),(0,a.kt)("td",{parentName:"tr",align:null},"bash")))),(0,a.kt)("h2",{id:"\ub4e4\uc5b4\uac00\uae30-\uc55e\uc11c\uc11c"},"\ub4e4\uc5b4\uac00\uae30 \uc55e\uc11c\uc11c.."),(0,a.kt)("p",null,"MLOps\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \ub3c4\ucee4 \uc0ac\uc6a9\ubc95\uc744 \uc124\uba85\ud558\ub2c8 \ub9ce\uc740 \ube44\uc720\uc640 \uc608\uc2dc\uac00 MLOps \ucabd\uc73c\ub85c \uce58\uc911\ub418\uc5b4 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);