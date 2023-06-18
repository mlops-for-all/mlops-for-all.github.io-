"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,b=c["".concat(i,".").concat(d)]||c[d]||k[d]||l;return n?r.createElement(b,u(u({ref:t},p),{},{components:n})):r.createElement(b,u({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,u[1]=s;for(var o=2;o<l;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={title:"4.3. Kubeadm",description:"",sidebar_position:3,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Youngcheol Jang"]},u=void 0,s={unversionedId:"setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",id:"version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",title:"4.3. Kubeadm",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm.md",sourceDirName:"setup-kubernetes/install-kubernetes",slug:"/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:3,frontMatter:{title:"4.3. Kubeadm",description:"",sidebar_position:3,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"4.1. K3s",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s"},next:{title:"4.2. Minikube",permalink:"/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-minikube"}},i={},o=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"2. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \uc14b\uc5c5",id:"2-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-\uc14b\uc5c5",level:2},{value:"3. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc14b\uc5c5",id:"3-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc14b\uc5c5",level:2},{value:"4. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uae30\ubcf8 \ubaa8\ub4c8 \uc124\uce58",id:"4-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uae30\ubcf8-\ubaa8\ub4c8-\uc124\uce58",level:2},{value:"5. \uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"5-\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:2},{value:"6. References",id:"6-references",level:2}],p={toc:o},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-prerequisite"},"1. Prerequisite"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud558\uae30\uc5d0 \uc55e\uc11c, \ud544\uc694\ud55c \uad6c\uc131 \uc694\uc18c\ub4e4\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub7ec\uc2a4\ud130\uc5d0")," \uc124\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-kubernetes/install-prerequisite"},"Install Prerequisite"),"\uc744 \ucc38\uace0\ud558\uc5ec Kubernetes\ub97c \uc124\uce58\ud558\uae30 \uc804\uc5d0 \ud544\uc694\ud55c \uc694\uc18c\ub4e4\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub7ec\uc2a4\ud130\uc5d0")," \uc124\uce58\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc704\ud55c \ub124\ud2b8\uc6cc\ud06c\uc758 \uc124\uc815\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo modprobe br_netfilter\n\ncat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\nbr_netfilter\nEOF\n\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system\n")),(0,a.kt)("h2",{id:"2-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-\uc14b\uc5c5"},"2. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \uc14b\uc5c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubeadm : kubelet\uc744 \uc11c\ube44\uc2a4\uc5d0 \ub4f1\ub85d\ud558\uace0, \ud074\ub7ec\uc2a4\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub4e4 \uc0ac\uc774\uc758 \ud1b5\uc2e0\uc744 \uc704\ud55c \uc778\uc99d\uc11c \ubc1c\uae09 \ub4f1 \uc124\uce58 \uacfc\uc815 \uc790\ub3d9\ud654"),(0,a.kt)("li",{parentName:"ul"},"kubelet : container \ub9ac\uc18c\uc2a4\ub97c \uc2e4\ud589, \uc885\ub8cc\ub97c \ud574 \uc8fc\ub294 \ucee8\ud14c\uc774\ub108 \ud578\ub4e4\ub7ec"),(0,a.kt)("li",{parentName:"ul"},"kubectl : \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \ud130\ubbf8\ub110\uc5d0\uc11c \ud655\uc778, \uc870\uc791\ud558\uae30 \uc704\ud55c CLI \ub3c4\uad6c")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 kubeadm, kubelet, kubectl\uc744 \uc124\uce58\ud569\ub2c8\ub2e4.\n\uc2e4\uc218\ub85c \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \ubc84\uc804\uc774 \ubcc0\uacbd\ud558\uba74, \uc608\uae30\uce58 \uc54a\uc740 \uc7a5\uc560\ub97c \ub0b3\uc744 \uc218 \uc788\uc73c\ubbc0\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl &&\nsudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg &&\necho "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list &&\nsudo apt-get update\nsudo apt-get install -y kubelet=1.21.7-00 kubeadm=1.21.7-00 kubectl=1.21.7-00 &&\nsudo apt-mark hold kubelet kubeadm kubectl\n')),(0,a.kt)("p",null,"kubeadm, kubelet, kubectl \uc774 \uc798 \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'mlops@ubuntu:~$ kubeadm version\nkubeadm version: &version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.7", GitCommit:"1f86634ff08f37e54e8bfcd86bc90b61c98f84d4", GitTreeState:"clean", BuildDate:"2021-11-17T14:40:08Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mlops@ubuntu:~$ kubelet --version\nKubernetes v1.21.7\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'mlops@ubuntu:~$ kubectl version --client\nClient Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.7", GitCommit:"1f86634ff08f37e54e8bfcd86bc90b61c98f84d4", GitTreeState:"clean", BuildDate:"2021-11-17T14:41:19Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,a.kt)("p",null,"\uc774\uc81c kubeadm\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kubeadm config images list\nkubeadm config images pull\n\nsudo kubeadm init --pod-network-cidr=10.244.0.0/16\n")),(0,a.kt)("p",null,"kubectl\uc744 \ud1b5\ud574\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\ub3c4\ub85d admin \uc778\uc99d\uc11c\ub97c $HOME/.kube/config \uacbd\ub85c\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,a.kt)("p",null,"CNI\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.\n\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub0b4\ubd80\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc744 \uc804\ub2f4\ud558\ub294 CNI\ub294 \uc5ec\ub7ec \uc885\ub958\uac00 \uc788\uc73c\uba70, ",(0,a.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 flannel\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/v0.13.0/Documentation/kube-flannel.yml\n")),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub178\ub4dc\uc758 \uc885\ub958\uc5d0\ub294 \ud06c\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub9c8\uc2a4\ud130 \ub178\ub4dc"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc6cc\ucee4 \ub178\ub4dc"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\uc548\uc815\uc131\uc744 \uc704\ud558\uc5ec ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub9c8\uc2a4\ud130 \ub178\ub4dc"),"\uc5d0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc81c\uc5b4\ud558\ub294 \uc791\uc5c5\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\uc9c0\ub9cc,\n\uc774 \ub9e4\ub274\uc5bc\uc5d0\uc11c\ub294 \uc2f1\uae00 \ud074\ub7ec\uc2a4\ud130\ub97c \uac00\uc815\ud558\uace0 \uc788\uc73c\ubbc0\ub85c \ub9c8\uc2a4\ud130 \ub178\ub4dc\uc5d0 \ubaa8\ub4e0 \uc885\ub958\uc758 \uc791\uc5c5\uc774 \uc2e4\ud589\ub420 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kubectl taint nodes --all node-role.kubernetes.io/master-\n")),(0,a.kt)("h2",{id:"3-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc14b\uc5c5"},"3. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc14b\uc5c5"),(0,a.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130\uc5d0 \uc0dd\uc131\ub41c kubeconfig \ud30c\uc77c\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8"),"\uc5d0 \ubcf5\uc0ac\ud558\uc5ec kubectl\uc744 \ud1b5\ud574 \ud074\ub7ec\uc2a4\ud130\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mkdir -p $HOME/.kube\nscp -p {CLUSTER_USER_ID}@{CLUSTER_IP}:~/.kube/config ~/.kube/config\n")),(0,a.kt)("h2",{id:"4-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uae30\ubcf8-\ubaa8\ub4c8-\uc124\uce58"},"4. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uae30\ubcf8 \ubaa8\ub4c8 \uc124\uce58"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.0/setup-kubernetes/install-kubernetes-module"},"Setup Kubernetes Modules"),"\uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc124\uce58\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm"),(0,a.kt)("li",{parentName:"ul"},"kustomize"),(0,a.kt)("li",{parentName:"ul"},"CSI plugin"),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," nvidia-docker, nvidia-device-plugin")),(0,a.kt)("h2",{id:"5-\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"5. \uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ub178\ub4dc\uc758 STATUS\uac00 Ready \uc0c1\ud0dc\uac00 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get nodes\n")),(0,a.kt)("p",null,"Ready \uac00 \ub418\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud55c \uacb0\uacfc\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME     STATUS   ROLES                  AGE     VERSION\nubuntu   Ready    control-plane,master   2m55s   v1.21.7\n")),(0,a.kt)("h2",{id:"6-references"},"6. References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm"},"kubeadm"))))}k.isMDXComponent=!0}}]);