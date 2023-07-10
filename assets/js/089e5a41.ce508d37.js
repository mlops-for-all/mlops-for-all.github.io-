"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",sidebar_position:5,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,i={unversionedId:"setup-kubernetes/install-kubernetes-module",id:"setup-kubernetes/install-kubernetes-module",title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",source:"@site/docs/setup-kubernetes/install-kubernetes-module.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/install-kubernetes-module",permalink:"/docs/setup-kubernetes/install-kubernetes-module",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-kubernetes/install-kubernetes-module.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 10\uc77c",sidebarPosition:5,frontMatter:{title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",sidebar_position:5,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"4.2. Minikube",permalink:"/docs/setup-kubernetes/install-kubernetes/kubernetes-with-minikube"},next:{title:"6. (Optional) Setup GPU",permalink:"/docs/setup-kubernetes/setup-nvidia-gpu"}},s={},p=[{value:"Setup Kubernetes Modules",id:"setup-kubernetes-modules",level:2},{value:"Helm",id:"helm",level:2},{value:"Kustomize",id:"kustomize",level:2},{value:"CSI Plugin : Local Path Provisioner",id:"csi-plugin--local-path-provisioner",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup-kubernetes-modules"},"Setup Kubernetes Modules"),(0,r.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ubaa8\ub4c8\uc744 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc5d0\uc11c \uc124\uce58\ud558\ub294 \uacfc\uc815\uc5d0 \uad00\ud574\uc11c \uc124\uba85\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc55e\uc73c\ub85c \uc18c\uac1c\ub418\ub294 \uacfc\uc815\uc740 \ubaa8\ub450 ",(0,r.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc"),"\uc5d0\uc11c \uc9c4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"helm"},"Helm"),(0,r.kt)("p",null,"Helm\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0\uc640 \uad00\ub828\ub41c \uc790\uc6d0\uc744 \ud55c \ubc88\uc5d0 \ubc30\ud3ec\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ub3c4\uc640\uc8fc\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc9d5 \ub3c4\uad6c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud604\uc7ac \ud3f4\ub354\uc5d0 Helm v3.7.1 \ubc84\uc804\uc744 \ub0b4\ub824\ubc1b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Linux amd64"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\ub978 OS\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases/tag/v3.7.1"},"\uacf5\uc2dd \ud648\ud398\uc774\uc9c0"),"\ub97c \ucc38\uace0\ud558\uc2dc\uc5b4, \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc758 OS\uc640 CPU\uc5d0 \ub9de\ub294 \ubc14\uc774\ub108\ub9ac\uc758 \ub2e4\uc6b4 \uacbd\ub85c\ub97c \ud655\uc778\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"helm\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc555\ucd95\uc744 \ud480\uace0, \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf helm-v3.7.1-linux-amd64.tar.gz\nsudo mv linux-amd64/helm /usr/local/bin/helm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm help\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The Kubernetes package manager\n\nCommon actions for Helm:\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"helm search:    search for charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"helm pull:      download a chart to your local directory to view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"helm install:   upload the chart to Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"helm list:      list releases of charts"),(0,r.kt)("p",{parentName:"li"},"Environment variables:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$HELM_CACHE_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing cached files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$HELM_CONFIG_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing Helm configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$HELM_DATA_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing Helm data.")))),(0,r.kt)("p",{parentName:"li"},"..."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"")))),(0,r.kt)("h2",{id:"kustomize"},"Kustomize"),(0,r.kt)("p",null,"kustomize \ub610\ud55c \uc5ec\ub7ec \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub9ac\uc18c\uc2a4\ub97c \ud55c \ubc88\uc5d0 \ubc30\ud3ec\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ub3c4\uc640\uc8fc\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc9d5 \ub3c4\uad6c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud604\uc7ac \ud3f4\ub354\uc5d0 kustomize v3.10.0 \ubc84\uc804\uc758 \ubc14\uc774\ub108\ub9ac\ub97c \ub2e4\uc6b4\ubc1b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Linux amd64"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv3.10.0/kustomize_v3.10.0_linux_amd64.tar.gz\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\ub978 OS\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/releases/tag/kustomize%2Fv3.10.0"},"kustomize/v3.10.0"),"\uc5d0\uc11c \ud655\uc778 \ud6c4 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"kustomize \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc555\ucd95\uc744 \ud480\uace0, \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf kustomize_v3.10.0_linux_amd64.tar.gz\nsudo mv kustomize /usr/local/bin/kustomize\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kustomize help\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Manages declarative configuration of Kubernetes.\nSee https://sigs.k8s.io/kustomize\n\nUsage:\n  kustomize [command]\n\nAvailable Commands:\n  build                     Print configuration per contents of kustomization.yaml\n  cfg                       Commands for reading and writing configuration.\n  completion                Generate shell completion script\n  create                    Create a new kustomization in the current directory\n  edit                      Edits a kustomization file\n  fn                        Commands for running functions against configuration.\n...\n")))),(0,r.kt)("h2",{id:"csi-plugin--local-path-provisioner"},"CSI Plugin : Local Path Provisioner"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CSI Plugin\uc740 kubernetes \ub0b4\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ub2f4\ub2f9\ud558\ub294 \ubaa8\ub4c8\uc785\ub2c8\ub2e4. \ub2e8\uc77c \ub178\ub4dc \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 CSI Plugin\uc778 Local Path Provisioner\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/v0.0.20/deploy/local-path-storage.yaml\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/local-path-storage created\nserviceaccount/local-path-provisioner-service-account created\nclusterrole.rbac.authorization.k8s.io/local-path-provisioner-role created\nclusterrolebinding.rbac.authorization.k8s.io/local-path-provisioner-bind created\ndeployment.apps/local-path-provisioner created\nstorageclass.storage.k8s.io/local-path created\nconfigmap/local-path-config created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub610\ud55c, \ub2e4\uc74c\uacfc \uac19\uc774 local-path-storage namespace \uc5d0 provisioner pod\uc774 Running \uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n local-path-storage get pod\n")),(0,r.kt)("p",{parentName:"li"},"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \uc544\ub798\uc640 \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY     STATUS    RESTARTS   AGE\nlocal-path-provisioner-d744ccf98-xfcbk   1/1       Running   0          7m\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc5ec default storage class\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch storageclass local-path  -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,r.kt)("p",{parentName:"li"},"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \uc544\ub798\uc640 \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"storageclass.storage.k8s.io/local-path patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"default storage class\ub85c \uc124\uc815\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc774 NAME\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"local-path (default)")," \uc778 storage class\uac00 \uc874\uc7ac\ud558\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nlocal-path (default)   rancher.io/local-path   Delete          WaitForFirstConsumer   false                  2h\n")))))}c.isMDXComponent=!0}}]);