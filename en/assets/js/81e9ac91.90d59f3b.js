"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(n),k=s,f=p["".concat(i,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:s,l[1]=u;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=n(7462),s=(n(7294),n(3905));const a={title:"4.1. K3s",description:"",sidebar_position:1,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),draft:!1,weight:221,contributors:["Jongseob Jeon"],menu:{docs:'parent:../setup-kubernetes"'},images:[]},l=void 0,u={unversionedId:"setup-kubernetes/install-kubernetes/kubernetes-with-k3s",id:"setup-kubernetes/install-kubernetes/kubernetes-with-k3s",title:"4.1. K3s",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-kubernetes/install-kubernetes/kubernetes-with-k3s.md",sourceDirName:"setup-kubernetes/install-kubernetes",slug:"/setup-kubernetes/install-kubernetes/kubernetes-with-k3s",permalink:"/en/docs/setup-kubernetes/install-kubernetes/kubernetes-with-k3s",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-kubernetes/install-kubernetes/kubernetes-with-k3s.md",tags:[],version:"current",lastUpdatedBy:"Minwook Je",lastUpdatedAt:1702865124,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"4.1. K3s",description:"",sidebar_position:1,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",draft:!1,weight:221,contributors:["Jongseob Jeon"],menu:{docs:'parent:../setup-kubernetes"'},images:[]},sidebar:"tutorialSidebar",previous:{title:"3. Install Prerequisite",permalink:"/en/docs/setup-kubernetes/install-prerequisite"},next:{title:"4.3. Kubeadm",permalink:"/en/docs/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm"}},i={},o=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"2. Setup Kubernetes Cluster",id:"2-setup-kubernetes-cluster",level:2},{value:"3. Setup Kubernetes Client",id:"3-setup-kubernetes-client",level:2},{value:"4. Install Kubernetes Default Modules",id:"4-install-kubernetes-default-modules",level:2},{value:"5. Verify Successful Installation",id:"5-verify-successful-installation",level:2},{value:"6. References",id:"6-references",level:2}],c={toc:o},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-prerequisite"},"1. Prerequisite"),(0,s.kt)("p",null,"Before setting up a Kubernetes cluster, install the necessary components on the ",(0,s.kt)("strong",{parentName:"p"},"cluster"),"."),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/setup-kubernetes/install-prerequisite"},"Install Prerequisite")," to install the necessary components on the ",(0,s.kt)("strong",{parentName:"p"},"cluster")," before installing Kubernetes."),(0,s.kt)("p",null,"k3s uses containerd as the backend by default.\nHowever, we need to use docker as the backend to use GPU, so we will install the backend with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--docker")," option."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.21.7+k3s1 sh -s - server --disable traefik --disable servicelb --disable local-storage --docker\n")),(0,s.kt)("p",null,"After installing k3s, check the k3s config."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cat /etc/rancher/k3s/k3s.yaml\n")),(0,s.kt)("p",null,"If installed correctly, the following items will be output. (Security related keys are hidden with <...>.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data:\n    <...>\n    server: https://127.0.0.1:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data:\n    <...>\n    client-key-data:\n    <...>\n")),(0,s.kt)("h2",{id:"2-setup-kubernetes-cluster"},"2. Setup Kubernetes Cluster"),(0,s.kt)("p",null,"Set up the Kubernetes cluster by copying the k3s config to be used as the cluster\u2019s kubeconfig."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir .kube\nsudo cp /etc/rancher/k3s/k3s.yaml .kube/config\n")),(0,s.kt)("p",null,"Grant user access permission to the copied config file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown $USER:$USER .kube/config\n")),(0,s.kt)("h2",{id:"3-setup-kubernetes-client"},"3. Setup Kubernetes Client"),(0,s.kt)("p",null,"Now move the kubeconfig configured in the cluster to the local.\nSet the path to ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," on the local."),(0,s.kt)("p",null,"The config file copied at first has the server ip set to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:6443"),".\nModify this value to match the ip of the cluster.\n(We modified it to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://192.168.0.19:6443")," to match the ip of the cluster used in this page.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data:\n    <...>\n    server: https://192.168.0.19:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data:\n    <...>\n    client-key-data:\n    <...>\n")),(0,s.kt)("h2",{id:"4-install-kubernetes-default-modules"},"4. Install Kubernetes Default Modules"),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/setup-kubernetes/install-kubernetes-module"},"Setup Kubernetes Modules")," to install the following components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"helm"),(0,s.kt)("li",{parentName:"ul"},"kustomize"),(0,s.kt)("li",{parentName:"ul"},"CSI plugin"),(0,s.kt)("li",{parentName:"ul"},"[Optional]"," nvidia-docker, nvidia-device-plugin")),(0,s.kt)("h2",{id:"5-verify-successful-installation"},"5. Verify Successful Installation"),(0,s.kt)("p",null,"Finally, check if the nodes are Ready and verify the OS, Docker, and Kubernetes versions."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),(0,s.kt)("p",null,"If you see the following message, it means that the installation was successful."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME    STATUS   ROLES                  AGE   VERSION        INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME\nubuntu   Ready    control-plane,master   11m   v1.21.7+k3s1   192.168.0.19   <none>        Ubuntu 20.04.3 LTS   5.4.0-91-generic   docker://20.10.11\n")),(0,s.kt)("h2",{id:"6-references"},"6. References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"https://rancher.com/docs/k3s/latest/en/installation/install-options/"))))}d.isMDXComponent=!0}}]);