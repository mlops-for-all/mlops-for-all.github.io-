"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",sidebar_position:5,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,i={unversionedId:"setup-kubernetes/install-kubernetes-module",id:"version-1.0/setup-kubernetes/install-kubernetes-module",title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/install-kubernetes-module.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/install-kubernetes-module",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes-module",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/install-kubernetes-module.md",tags:[],version:"1.0",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:5,frontMatter:{title:"5. Install Kubernetes Modules",description:"Install Helm, Kustomize",sidebar_position:5,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"4.2. Minikube",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube"},next:{title:"6. (Optional) Setup GPU",permalink:"/en/docs/1.0/setup-kubernetes/setup-nvidia-gpu"}},s={},p=[{value:"Setup Kubernetes Modules",id:"setup-kubernetes-modules",level:2},{value:"Helm",id:"helm",level:2},{value:"Kustomize",id:"kustomize",level:2},{value:"CSI Plugin : Local Path Provisioner",id:"csi-plugin--local-path-provisioner",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"setup-kubernetes-modules"},"Setup Kubernetes Modules"),(0,l.kt)("p",null,"On this page, we will explain how to install the modules that will be used on the cluster from the client nodes.",(0,l.kt)("br",{parentName:"p"}),"\n","All the processes introduced here will be done on the ",(0,l.kt)("strong",{parentName:"p"},"client nodes"),"."),(0,l.kt)("h2",{id:"helm"},"Helm"),(0,l.kt)("p",null,"Helm is one of the package management tools that helps to deploy and manage resources related to Kubernetes packages at once."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download Helm version 3.7.1 into the current folder.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Linux amd64"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Other OS refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases/tag/v3.7.1"},"official website")," for the download path of the binary that matches the OS and CPU of your client node."))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Unzip the file to use helm and move the file to its desired location."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf helm-v3.7.1-linux-amd64.tar.gz\nsudo mv linux-amd64/helm /usr/local/bin/helm\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check to see if the installation was successful:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm help\n")),(0,l.kt)("p",{parentName:"li"},"If you see the following message, it means that it has been installed normally. "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"The Kubernetes package manager\n\nCommon actions for Helm:\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"helm search:    search for charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"helm pull:      download a chart to your local directory to view")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"helm install:   upload the chart to Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"helm list:      list releases of charts"),(0,l.kt)("p",{parentName:"li"},"Environment variables:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$HELM_CACHE_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing cached files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$HELM_CONFIG_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing Helm configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$HELM_DATA_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"set an alternative location for storing Helm data.")))),(0,l.kt)("p",{parentName:"li"},"..."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"")))),(0,l.kt)("h2",{id:"kustomize"},"Kustomize"),(0,l.kt)("p",null,"Kustomize is one of the package management tools that helps to deploy and manage multiple Kubernetes resources at once."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the binary version of kustomize v3.10.0 in the current folder.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Linux amd64"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv3.10.0/kustomize_v3.10.0_linux_amd64.tar.gz\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Other OS can be downloaded from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/releases/tag/kustomize%2Fv3.10.0"},"kustomize/v3.10.0")," after checking."))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Unzip to use kustomize, and change the file location. "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf kustomize_v3.10.0_linux_amd64.tar.gz\nsudo mv kustomize /usr/local/bin/kustomize\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check if it is installed correctly."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kustomize help\n")),(0,l.kt)("p",{parentName:"li"},"If you see the following message, it means that it has been installed normally."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Manages declarative configuration of Kubernetes.\nSee https://sigs.k8s.io/kustomize\n\nUsage:\n  kustomize [command]\n\nAvailable Commands:\n  build                     Print configuration per contents of kustomization.yaml\n  cfg                       Commands for reading and writing configuration.\n  completion                Generate shell completion script\n  create                    Create a new kustomization in the current directory\n  edit                      Edits a kustomization file\n  fn                        Commands for running functions against configuration.\n...\n")))),(0,l.kt)("h2",{id:"csi-plugin--local-path-provisioner"},"CSI Plugin : Local Path Provisioner"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The CSI Plugin is a module that is responsible for storage within Kubernetes. Install the CSI Plugin, Local Path Provisioner, which is easy to use in single node clusters."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/v0.0.20/deploy/local-path-storage.yaml\n")),(0,l.kt)("p",{parentName:"li"},"If you see the following messages, it means that the installation was successful: "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/local-path-storage created\nserviceaccount/local-path-provisioner-service-account created\nclusterrole.rbac.authorization.k8s.io/local-path-provisioner-role created\nclusterrolebinding.rbac.authorization.k8s.io/local-path-provisioner-bind created\ndeployment.apps/local-path-provisioner created\nstorageclass.storage.k8s.io/local-path created\nconfigmap/local-path-config created\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Also, check if the provisioner pod in the local-path-storage namespace is Running by executing the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n local-path-storage get pod\n")))),(0,l.kt)("p",null,"If successful, it will display the following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY     STATUS    RESTARTS   AGE\nlocal-path-provisioner-d744ccf98-xfcbk   1/1       Running   0          7m\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Execute the following command to change the default storage class:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,l.kt)("p",{parentName:"li"},"If the command is successful, the following output will be displayed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"storageclass.storage.k8s.io/local-path patched\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Verify that the default storage class has been set:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc\n")),(0,l.kt)("p",{parentName:"li"},"Check if there is a storage class with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"local-path (default)")," in the NAME column:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nlocal-path (default)   rancher.io/local-path   Delete          WaitForFirstConsumer   false                  2h\n")))))}c.isMDXComponent=!0}}]);