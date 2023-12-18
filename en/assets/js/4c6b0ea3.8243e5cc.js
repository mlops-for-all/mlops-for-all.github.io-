"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2984],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),o=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=o(e.components);return i.createElement(u.Provider,{value:n},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},b=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(t),b=a,m=p["".concat(u,".").concat(b)]||p[b]||k[b]||r;return t?i.createElement(m,s(s({ref:n},d),{},{components:t})):i.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}b.displayName="MDXCreateElement"},851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(7462),a=(t(7294),t(3905));const r={title:"4.2. Minikube",description:"",sidebar_position:2,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},s=void 0,l={unversionedId:"setup-kubernetes/install-kubernetes/kubernetes-with-minikube",id:"version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube",title:"4.2. Minikube",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube.md",sourceDirName:"setup-kubernetes/install-kubernetes",slug:"/setup-kubernetes/install-kubernetes/kubernetes-with-minikube",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube.md",tags:[],version:"1.0",lastUpdatedBy:"Minwook Je",lastUpdatedAt:1702865124,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:2,frontMatter:{title:"4.2. Minikube",description:"",sidebar_position:2,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"4.3. Kubeadm",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm"},next:{title:"5. Install Kubernetes Modules",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes-module"}},u={},o=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"Minikube binary",id:"minikube-binary",level:3},{value:"2. Setup Kubernetes Cluster",id:"2-setup-kubernetes-cluster",level:2},{value:"Disable default addons",id:"disable-default-addons",level:3},{value:"3. Setup Kubernetes Client",id:"3-setup-kubernetes-client",level:3},{value:"4. Install Kubernetes Default Modules",id:"4-install-kubernetes-default-modules",level:2},{value:"5. Verify Successful Installation",id:"5-verify-successful-installation",level:2}],d={toc:o},p="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-prerequisite"},"1. Prerequisite"),(0,a.kt)("p",null,"Before setting up a Kubernetes cluster, install the necessary components on the ",(0,a.kt)("strong",{parentName:"p"},"cluster"),"."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-kubernetes/install-prerequisite"},"Install Prerequisite")," to install the necessary components on the ",(0,a.kt)("strong",{parentName:"p"},"cluster")," before installing Kubernetes."),(0,a.kt)("h3",{id:"minikube-binary"},"Minikube binary"),(0,a.kt)("p",null,"Install the v1.24.0 version of the Minikube binary to use Minikube."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kubernetes/minikube/releases/download/v1.24.0/minikube-linux-amd64\nsudo install minikube-linux-amd64 /usr/local/bin/minikube\n")),(0,a.kt)("p",null,"Check if it is installed properly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube version\n")),(0,a.kt)("p",null,"If this message appears, it means the installation was successful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ minikube version\nminikube version: v1.24.0\ncommit: 76b94fb3c4e8ac5062daf70d60cf03ddcc0a741b\n")),(0,a.kt)("h2",{id:"2-setup-kubernetes-cluster"},"2. Setup Kubernetes Cluster"),(0,a.kt)("p",null,"Now let's build the Kubernetes cluster using Minikube.\nTo facilitate the smooth use of GPUs and communication between cluster and client, Minikube is run using the ",(0,a.kt)("inlineCode",{parentName:"p"},"driver=none")," option. Please note that this option must be run as root user. "),(0,a.kt)("p",null,"Switch to root user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube start")," to build the Kubernetes cluster for Kubeflow's smooth operation, specifying the Kubernetes version as v1.21.7 and adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--extra-config"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --driver=none \\\n  --kubernetes-version=v1.21.7 \\\n  --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key \\\n  --extra-config=apiserver.service-account-issuer=kubernetes.default.svc\n")),(0,a.kt)("h3",{id:"disable-default-addons"},"Disable default addons"),(0,a.kt)("p",null,"When installing Minikube, there are default addons that are installed. We will disable any addons that we do not intend to use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons disable storage-provisioner\nminikube addons disable default-storageclass\n")),(0,a.kt)("p",null,"Confirm that all addons are disabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons list\n")),(0,a.kt)("p",null,"If the following message appears, it means that the installation was successful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@ubuntu:/home/mlops# minikube addons list\n|-----------------------------|----------|--------------|-----------------------|\n|         ADDON NAME          | PROFILE  |    STATUS    |      MAINTAINER       |\n|-----------------------------|----------|--------------|-----------------------|\n| ambassador                  | minikube | disabled     | unknown (third-party) |\n| auto-pause                  | minikube | disabled     | google                |\n| csi-hostpath-driver         | minikube | disabled     | kubernetes            |\n| dashboard                   | minikube | disabled     | kubernetes            |\n| default-storageclass        | minikube | disabled     | kubernetes            |\n| efk                         | minikube | disabled     | unknown (third-party) |\n| freshpod                    | minikube | disabled     | google                |\n| gcp-auth                    | minikube | disabled     | google                |\n| gvisor                      | minikube | disabled     | google                |\n| helm-tiller                 | minikube | disabled     | unknown (third-party) |\n| ingress                     | minikube | disabled     | unknown (third-party) |\n| ingress-dns                 | minikube | disabled     | unknown (third-party) |\n| istio                       | minikube | disabled     | unknown (third-party) |\n| istio-provisioner           | minikube | disabled     | unknown (third-party) |\n| kubevirt                    | minikube | disabled     | unknown (third-party) |\n| logviewer                   | minikube | disabled     | google                |\n| metallb                     | minikube | disabled     | unknown (third-party) |\n| metrics-server              | minikube | disabled     | kubernetes            |\n| nvidia-driver-installer     | minikube | disabled     | google                |\n| nvidia-gpu-device-plugin    | minikube | disabled     | unknown (third-party) |\n| olm                         | minikube | disabled     | unknown (third-party) |\n| pod-security-policy         | minikube | disabled     | unknown (third-party) |\n| portainer                   | minikube | disabled     | portainer.io          |\n| registry                    | minikube | disabled     | google                |\n| registry-aliases            | minikube | disabled     | unknown (third-party) |\n| registry-creds              | minikube | disabled     | unknown (third-party) |\n| storage-provisioner         | minikube | disabled     | kubernetes            |\n| storage-provisioner-gluster | minikube | disabled     | unknown (third-party) |\n| volumesnapshots             | minikube | disabled     | kubernetes            |\n|-----------------------------|----------|--------------|-----------------------|\n")),(0,a.kt)("h3",{id:"3-setup-kubernetes-client"},"3. Setup Kubernetes Client"),(0,a.kt)("p",null,"Now, let's install the necessary tools for smooth usage of Kubernetes on the ",(0,a.kt)("strong",{parentName:"p"},"client")," machine. If the ",(0,a.kt)("strong",{parentName:"p"},"client")," and ",(0,a.kt)("strong",{parentName:"p"},"cluster")," nodes are not separated, please note that you need to perform all the operations as the root user."),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"client")," and ",(0,a.kt)("strong",{parentName:"p"},"cluster")," nodes are separated, first, we need to retrieve the Kubernetes administrator credentials from the ",(0,a.kt)("strong",{parentName:"p"},"cluster")," to the ",(0,a.kt)("strong",{parentName:"p"},"client"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the config on the ",(0,a.kt)("strong",{parentName:"p"},"cluster"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster node\nminikube kubectl -- config view --flatten\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The following information will be displayed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nclusters:\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cluster:\ncertificate-authority-data: LS0tLS1CRUd....\nextensions:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- extension:\n    last-update: Mon, 06 Dec 2021 06:55:46 UTC\n    provider: minikube.sigs.k8s.io\n    version: v1.24.0\n  name: cluster_info\nserver: https://192.168.0.62:8443\n")),"  name: minikube\ncontexts:"),(0,a.kt)("li",{parentName:"ul"},"context:\ncluster: minikube\nextensions:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- extension:\n    last-update: Mon, 06 Dec 2021 06:55:46 UTC\n    provider: minikube.sigs.k8s.io\n    version: v1.24.0\n  name: context_info\nnamespace: default\nuser: minikube\n")),"  name: minikube\ncurrent-context: minikube\nkind: Config\npreferences: {}\nusers:"),(0,a.kt)("li",{parentName:"ul"},"name: minikube\nuser:\nclient-certificate-data: LS0tLS1CRUdJTi....\nclient-key-data: LS0tLS1CRUdJTiBSU0....",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},".kube")," folder on the ",(0,a.kt)("strong",{parentName:"p"},"client")," node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Client node\nmkdir -p /home/$USER/.kube\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the information obtained from Step 2 into the file and save it:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vi /home/$USER/.kube/config\n")))),(0,a.kt)("h2",{id:"4-install-kubernetes-default-modules"},"4. Install Kubernetes Default Modules"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-kubernetes/install-kubernetes-module"},"Setup Kubernetes Modules")," to install the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm"),(0,a.kt)("li",{parentName:"ul"},"kustomize"),(0,a.kt)("li",{parentName:"ul"},"CSI plugin"),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," nvidia-docker, nvidia-device-plugin")),(0,a.kt)("h2",{id:"5-verify-successful-installation"},"5. Verify Successful Installation"),(0,a.kt)("p",null,"Finally, check that the node is Ready, and check the OS, Docker, and Kubernetes versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),(0,a.kt)("p",null,"If this message appears, it means that the installation has completed normally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME     STATUS   ROLES                  AGE     VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME\nubuntu   Ready    control-plane,master   2d23h   v1.21.7   192.168.0.75   <none>        Ubuntu 20.04.3 LTS   5.4.0-91-generic   docker://20.10.11\n")))}k.isMDXComponent=!0}}]);