"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2779],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>k});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?t.createElement(k,s(s({ref:a},c),{},{components:n})):t.createElement(k,s({ref:a},c))}));function k(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[m]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7013:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const r={title:"2. Bare Metal \ud074\ub7ec\uc2a4\ud130\uc6a9 load balancer metallb \uc124\uce58",sidebar_position:2},s=void 0,o={unversionedId:"appendix/metallb",id:"appendix/metallb",title:"2. Bare Metal \ud074\ub7ec\uc2a4\ud130\uc6a9 load balancer metallb \uc124\uce58",description:"MetalLB\ub780?",source:"@site/docs/appendix/metallb.md",sourceDirName:"appendix",slug:"/appendix/metallb",permalink:"/docs/appendix/metallb",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/appendix/metallb.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 10\uc77c",sidebarPosition:2,frontMatter:{title:"2. Bare Metal \ud074\ub7ec\uc2a4\ud130\uc6a9 load balancer metallb \uc124\uce58",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Python \uac00\uc0c1\ud658\uacbd \uc124\uce58",permalink:"/docs/appendix/pyenv"},next:{title:"\ub2e4\ub8e8\uc9c0 \ubabb\ud55c \uac83\ub4e4",permalink:"/docs/further-readings/info"}},i={},p=[{value:"MetalLB\ub780?",id:"metallb\ub780",level:2},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:2},{value:"MetalLB \uc124\uce58",id:"metallb-\uc124\uce58",level:2},{value:"Preparation",id:"preparation",level:3},{value:"\uc124\uce58 - Manifest",id:"\uc124\uce58---manifest",level:3},{value:"1. MetalLB \ub97c \uc124\uce58\ud569\ub2c8\ub2e4.",id:"1-metallb-\ub97c-\uc124\uce58\ud569\ub2c8\ub2e4",level:4},{value:"2. \uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"2-\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Layer 2 Configuration",id:"layer-2-configuration",level:3},{value:"metallb_config.yaml",id:"metallb_configyaml",level:4},{value:"MetalLB \uc0ac\uc6a9",id:"metallb-\uc0ac\uc6a9",level:2},{value:"Kubeflow Dashboard",id:"kubeflow-dashboard",level:3},{value:"minio Dashboard",id:"minio-dashboard",level:3},{value:"mlflow Dashboard",id:"mlflow-dashboard",level:3},{value:"Grafana Dashboard",id:"grafana-dashboard",level:3}],c={toc:p},m="wrapper";function u(e){let{components:a,...r}=e;return(0,l.kt)(m,(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"metallb\ub780"},"MetalLB\ub780?"),(0,l.kt)("p",null,"Kubernetes \uc0ac\uc6a9 \uc2dc AWS, GCP, Azure \uc640 \uac19\uc740 \ud074\ub77c\uc6b0\ub4dc \ud50c\ub7ab\ud3fc\uc5d0\uc11c\ub294 \uc790\uccb4\uc801\uc73c\ub85c \ub85c\ub4dc \ubca8\ub7f0\uc11c(Load Balancer)\ub97c \uc81c\uacf5\ud574 \uc8fc\uc9c0\ub9cc, \uc628\ud504\ub808\ubbf8\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c\ub294 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ubaa8\ub4c8\uc744 \ucd94\uac00\uc801\uc73c\ub85c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/"},"MetalLB"),"\ub294 \ubca0\uc5b4\uba54\ud0c8 \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub85c\ub4dc \ubca8\ub7f0\uc11c\ub97c \uc81c\uacf5\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc694\uad6c \uc0ac\ud56d"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubc84\uc804 \ubc0f \ub0b4\uc6a9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,l.kt)("td",{parentName:"tr",align:null},"\ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc774 \uc5c6\ub294 >= v1.13.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://metallb.universe.tf/installation/network-addons/"},"\ud638\ud658\uac00\ub2a5\ud55c \ub124\ud2b8\uc6cc\ud06c  CNI")),(0,l.kt)("td",{parentName:"tr",align:null},"Calico, Canal, Cilium, Flannel, Kube-ovn, Kube-router, Weave  Net")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 \uc8fc\uc18c"),(0,l.kt)("td",{parentName:"tr",align:null},"MetalLB \ubc30\ud3ec\uc5d0 \uc0ac\uc6a9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BGP \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,l.kt)("td",{parentName:"tr",align:null},"BGP \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \ub77c\uc6b0\ud130")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc \uac04 \ud3ec\ud2b8 TCP/UDP 7946 \uc624\ud508"),(0,l.kt)("td",{parentName:"tr",align:null},"memberlist \uc694\uad6c \uc0ac\ud56d")))),(0,l.kt)("h2",{id:"metallb-\uc124\uce58"},"MetalLB \uc124\uce58"),(0,l.kt)("h3",{id:"preparation"},"Preparation"),(0,l.kt)("p",null,"IPVS \ubaa8\ub4dc\uc5d0\uc11c kube-proxy\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 Kubernetes v1.14.2 \uc774\ud6c4\ubd80\ud130\ub294 \uc5c4\uaca9\ud55c ARP(strictARP) \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","Kube-router\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc5c4\uaca9\ud55c ARP\ub97c \ud65c\uc131\ud654\ud558\ubbc0\ub85c \uc11c\ube44\uc2a4 \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc774 \uae30\ub2a5\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc5c4\uaca9\ud55c ARP \ubaa8\ub4dc\ub97c \uc801\uc6a9\ud558\uae30\uc5d0 \uc55e\uc11c, \ud604\uc7ac \ubaa8\ub4dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# see what changes would be made, returns nonzero returncode if different\nkubectl get configmap kube-proxy -n kube-system -o yaml | \\\ngrep strictARP\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strictARP: false\n")),(0,l.kt)("p",null,"strictARP: false \uac00 \ucd9c\ub825\ub418\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec strictARP: true\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.\n(strictARP: true\uac00 \uc774\ubbf8 \ucd9c\ub825\ub41c\ub2e4\uba74 \ub2e4\uc74c \ucee4\ub9e8\ub4dc\ub97c \uc218\ud589\ud558\uc9c0 \uc54a\uc73c\uc154\ub3c4 \ub429\ub2c8\ub2e4.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# actually apply the changes, returns nonzero returncode on errors only\nkubectl get configmap kube-proxy -n kube-system -o yaml | \\\nsed -e "s/strictARP: false/strictARP: true/" | \\\nkubectl apply -f - -n kube-system\n')),(0,l.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Warning: resource configmaps/kube-proxy is missing the kubectl.kubernetes.io/last-applied-configuration annotation which is required by kubectl apply. kubectl apply should only be used on resources created declaratively by either kubectl create --save-config or kubectl apply. The missing annotation will be patched automatically.\nconfigmap/kube-proxy configured\n")),(0,l.kt)("h3",{id:"\uc124\uce58---manifest"},"\uc124\uce58 - Manifest"),(0,l.kt)("h4",{id:"1-metallb-\ub97c-\uc124\uce58\ud569\ub2c8\ub2e4"},"1. MetalLB \ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/namespace.yaml\nkubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/metallb.yaml\n")),(0,l.kt)("h4",{id:"2-\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"2. \uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,l.kt)("p",null,"metallb-system namespace \uc758 2 \uac1c\uc758 pod \uc774 \ubaa8\ub450 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n metallb-system\n")),(0,l.kt)("p",null,"\ubaa8\ub450 Running \uc774 \ub418\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud55c \uacb0\uacfc\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                          READY   STATUS    RESTARTS   AGE\ncontroller-7dcc8764f4-8n92q   1/1     Running   1          1m\nspeaker-fnf8l                 1/1     Running   1          1m\n")),(0,l.kt)("p",null,"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc758 \uad6c\uc131 \uc694\uc18c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metallb-system/controller",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"deployment \ub85c \ubc30\ud3ec\ub418\uba70, \ub85c\ub4dc \ubca8\ub7f0\uc2f1\uc744 \uc218\ud589\ud560 external IP \uc8fc\uc18c\uc758 \ud560\ub2f9\uc744 \ucc98\ub9ac\ud558\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"metallb-system/speaker",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"daemonset \ud615\ud0dc\ub85c \ubc30\ud3ec\ub418\uba70, \uc678\ubd80 \ud2b8\ub798\ud53d\uacfc \uc11c\ube44\uc2a4\ub97c \uc5f0\uacb0\ud574 \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \uad6c\uc131\ud558\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\uc11c\ube44\uc2a4\uc5d0\ub294 \ucee8\ud2b8\ub864\ub7ec \ubc0f \uc2a4\ud53c\ucee4\uc640 \uad6c\uc131 \uc694\uc18c\uac00 \uc791\ub3d9\ud558\ub294 \ub370 \ud544\uc694\ud55c RBAC \uc0ac\uc6a9 \uad8c\ud55c\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"MetalLB \uc758 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uc815\ucc45 \uc124\uc815\uc740 \uad00\ub828 \uc124\uc815 \uc815\ubcf4\ub97c \ub2f4\uc740 configmap \uc744 \ubc30\ud3ec\ud558\uc5ec \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"MetalLB \uc5d0\uc11c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubaa8\ub4dc\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 2\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/concepts/layer2/"},"Layer 2 \ubaa8\ub4dc")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/concepts/bgp/"},"BGP \ubaa8\ub4dc"))),(0,l.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 Layer 2 \ubaa8\ub4dc\ub85c \uc9c4\ud589\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"layer-2-configuration"},"Layer 2 Configuration"),(0,l.kt)("p",null,"Layer 2 \ubaa8\ub4dc\ub294 \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud560 IP \uc8fc\uc18c\uc758 \ub300\uc5ed\ub9cc \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","Layer 2 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc6cc\ucee4 \ub178\ub4dc\uc758 \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4\uc5d0 IP\ub97c \ubc14\uc778\ub529 \ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294\ub370 \ub85c\uceec \ub124\ud2b8\uc6cc\ud06c\uc758 ARP \uc694\uccad\uc5d0 \uc9c1\uc811 \uc751\ub2f5\ud558\uc5ec \ucef4\ud4e8\ud130\uc758 MAC\uc8fc\uc18c\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc74c ",(0,l.kt)("inlineCode",{parentName:"p"},"metallb_config.yaml")," \ud30c\uc77c\uc740 MetalLB \uac00 192.168.35.100 ~ 192.168.35.110\uc758 IP\uc5d0 \ub300\ud55c \uc81c\uc5b4 \uad8c\ud55c\uc744 \uc81c\uacf5\ud558\uace0 Layer 2 \ubaa8\ub4dc\ub97c \uad6c\uc131\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130 \ub178\ub4dc\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uac00 \ubd84\ub9ac\ub41c \uacbd\uc6b0, 192.168.35.100 ~ 192.168.35.110 \ub300\uc5ed\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc640 \ud074\ub7ec\uc2a4\ud130 \ub178\ub4dc \ubaa8\ub450 \uc811\uadfc \uac00\ub2a5\ud55c \ub300\uc5ed\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"metallb_configyaml"},"metallb_config.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: metallb-system\n  name: config\ndata:\n  config: |\n    address-pools:\n    - name: default\n      protocol: layer2\n      addresses:\n      - 192.168.35.100-192.168.35.110  # IP \ub300\uc5ed\ud3ed\n")),(0,l.kt)("p",null,"\uc704\uc758 \uc124\uc815\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-test"},"kubectl apply -f metallb_config.yaml \n")),(0,l.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-test"},"configmap/config created\n")),(0,l.kt)("h2",{id:"metallb-\uc0ac\uc6a9"},"MetalLB \uc0ac\uc6a9"),(0,l.kt)("h3",{id:"kubeflow-dashboard"},"Kubeflow Dashboard"),(0,l.kt)("p",null,"\uba3c\uc800 kubeflow\uc758 Dashboard \ub97c \uc81c\uacf5\ud558\ub294 istio-system \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 istio-ingressgateway \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"\ub85c \ubcc0\uacbd\ud558\uc5ec MetalLB\ub85c\ubd80\ud130 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ubc1b\uae30 \uc804\uc5d0, \ud604\uc7ac \uc0c1\ud0dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/istio-ingressgateway -n istio-system\n")),(0,l.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc740 ClusterIP\uc774\uba70, External-IP \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)                                        AGE\nistio-ingressgateway   ClusterIP   10.103.72.5   <none>        15021/TCP,80/TCP,443/TCP,31400/TCP,15443/TCP   4h21m\n")),(0,l.kt)("p",null,"type \uc744 LoadBalancer \ub85c \ubcc0\uacbd\ud558\uace0 \uc6d0\ud558\ub294 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 loadBalancerIP \ud56d\ubaa9\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ucd94\uac00 \ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc704\uc5d0\uc11c \uc124\uc815\ud55c IP \uc8fc\uc18c\ud480\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c IP \uc8fc\uc18c\uac00 \ubc30\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit svc/istio-ingressgateway -n istio-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"spec:\n  clusterIP: 10.103.72.5\n  clusterIPs:\n  - 10.103.72.5\n  ipFamilies:\n  - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n  - name: status-port\n    port: 15021\n    protocol: TCP\n    targetPort: 15021\n  - name: http2\n    port: 80\n    protocol: TCP\n    targetPort: 8080\n  - name: https\n    port: 443\n    protocol: TCP\n    targetPort: 8443\n  - name: tcp\n    port: 31400\n    protocol: TCP\n    targetPort: 31400\n  - name: tls\n    port: 15443\n    protocol: TCP\n    targetPort: 15443\n  selector:\n    app: istio-ingressgateway\n    istio: ingressgateway\n  sessionAffinity: None\n  type: LoadBalancer # Change ClusterIP to LoadBalancer\n  loadBalancerIP: 192.168.35.100   # Add IP\nstatus:\n  loadBalancer: {}\n")),(0,l.kt)("p",null,"\ub2e4\uc2dc \ud655\uc778\uc744 \ud574\ubcf4\uba74 External-IP \uac12\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.35.100")," \uc778 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/istio-ingressgateway -n istio-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)                                                                      AGE\nistio-ingressgateway   LoadBalancer   10.103.72.5   192.168.35.100   15021:31054/TCP,80:30853/TCP,443:30443/TCP,31400:30012/TCP,15443:31650/TCP   5h1m\n")),(0,l.kt)("p",null,"Web Browser \ub97c \uc5f4\uc5b4 ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.35.100"},"http://192.168.35.100")," \uc73c\ub85c \uc811\uc18d\ud558\uc5ec, \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"login-after-istio-ingressgateway-setting.png",src:n(5568).Z,width:"1811",height:"1046"})),(0,l.kt)("h3",{id:"minio-dashboard"},"minio Dashboard"),(0,l.kt)("p",null,"\uba3c\uc800 minio \uc758 Dashboard \ub97c \uc81c\uacf5\ud558\ub294 kubeflow \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 minio-service \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc744 LoadBalancer\ub85c \ubcc0\uacbd\ud558\uc5ec MetalLB\ub85c\ubd80\ud130 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ubc1b\uae30 \uc804\uc5d0, \ud604\uc7ac \uc0c1\ud0dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/minio-service -n kubeflow\n")),(0,l.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc740 ClusterIP\uc774\uba70, External-IP \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nminio-service   ClusterIP   10.109.209.87   <none>        9000/TCP   5h14m\n")),(0,l.kt)("p",null,"type \uc744 LoadBalancer \ub85c \ubcc0\uacbd\ud558\uace0 \uc6d0\ud558\ub294 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 loadBalancerIP \ud56d\ubaa9\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ucd94\uac00 \ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc704\uc5d0\uc11c \uc124\uc815\ud55c IP \uc8fc\uc18c\ud480\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c IP \uc8fc\uc18c\uac00 \ubc30\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit svc/minio-service -n kubeflow\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"application-crd-id":"kubeflow-pipelines"},"name":"minio-ser>\n  creationTimestamp: "2022-01-05T08:44:23Z"\n  labels:\n    application-crd-id: kubeflow-pipelines\n  name: minio-service\n  namespace: kubeflow\n  resourceVersion: "21120"\n  uid: 0053ee28-4f87-47bb-ad6b-7ad68aa29a48\nspec:\n  clusterIP: 10.109.209.87\n  clusterIPs:\n  - 10.109.209.87\n  ipFamilies:\n  - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n  - name: http\n    port: 9000\n    protocol: TCP\n    targetPort: 9000\n  selector:\n    app: minio\n    application-crd-id: kubeflow-pipelines\n  sessionAffinity: None\n  type: LoadBalancer # Change ClusterIP to LoadBalancer\n  loadBalancerIP: 192.168.35.101 # Add IP\nstatus:\n  loadBalancer: {}\n')),(0,l.kt)("p",null,"\ub2e4\uc2dc \ud655\uc778\uc744 \ud574\ubcf4\uba74 External-IP \uac12\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.35.101")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/minio-service -n kubeflow\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME            TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)          AGE\nminio-service   LoadBalancer   10.109.209.87   192.168.35.101   9000:31371/TCP   5h21m\n")),(0,l.kt)("p",null,"Web Browser \ub97c \uc5f4\uc5b4 ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.35.101:9000"},"http://192.168.35.101:9000")," \uc73c\ub85c \uc811\uc18d\ud558\uc5ec, \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"login-after-minio-setting.png",src:n(369).Z,width:"1811",height:"1046"})),(0,l.kt)("h3",{id:"mlflow-dashboard"},"mlflow Dashboard"),(0,l.kt)("p",null,"\uba3c\uc800 mlflow \uc758 Dashboard \ub97c \uc81c\uacf5\ud558\ub294 mlflow-system \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 mlflow-server-service \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc744 LoadBalancer\ub85c \ubcc0\uacbd\ud558\uc5ec MetalLB\ub85c\ubd80\ud130 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ubc1b\uae30 \uc804\uc5d0, \ud604\uc7ac \uc0c1\ud0dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/mlflow-server-service -n mlflow-system\n")),(0,l.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc740 ClusterIP\uc774\uba70, External-IP \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nmlflow-server-service   ClusterIP   10.111.173.209   <none>        5000/TCP   4m50s\n")),(0,l.kt)("p",null,"type \uc744 LoadBalancer \ub85c \ubcc0\uacbd\ud558\uace0 \uc6d0\ud558\ub294 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 loadBalancerIP \ud56d\ubaa9\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ucd94\uac00 \ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc704\uc5d0\uc11c \uc124\uc815\ud55c IP \uc8fc\uc18c\ud480\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c IP \uc8fc\uc18c\uac00 \ubc30\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit svc/mlflow-server-service -n mlflow-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: mlflow-server\n    meta.helm.sh/release-namespace: mlflow-system\n  creationTimestamp: "2022-01-07T04:00:19Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: mlflow-server-service\n  namespace: mlflow-system\n  resourceVersion: "276246"\n  uid: e5d39fb7-ad98-47e7-b512-f9c673055356\nspec:\n  clusterIP: 10.111.173.209\n  clusterIPs:\n  - 10.111.173.209\n  ipFamilies:\n  - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n  - port: 5000\n    protocol: TCP\n    targetPort: 5000\n  selector:\n    app.kubernetes.io/name: mlflow-server\n  sessionAffinity: None\n  type: LoadBalancer # Change ClusterIP to LoadBalancer\n  loadBalancerIP: 192.168.35.102 # Add IP\nstatus:\n  loadBalancer: {}\n')),(0,l.kt)("p",null,"\ub2e4\uc2dc \ud655\uc778\uc744 \ud574\ubcf4\uba74 External-IP \uac12\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.35.102")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/mlflow-server-service -n mlflow-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                    TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)          AGE\nmlflow-server-service   LoadBalancer   10.111.173.209   192.168.35.102   5000:32287/TCP   6m11s\n")),(0,l.kt)("p",null,"Web Browser \ub97c \uc5f4\uc5b4 ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.35.102:5000"},"http://192.168.35.102:5000")," \uc73c\ub85c \uc811\uc18d\ud558\uc5ec, \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"login-after-mlflow-setting.png",src:n(7827).Z,width:"1922",height:"1082"})),(0,l.kt)("h3",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,l.kt)("p",null,"\uba3c\uc800 Grafana \uc758 Dashboard \ub97c \uc81c\uacf5\ud558\ub294 seldon-system \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 seldon-core-analytics-grafana \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc744 LoadBalancer\ub85c \ubcc0\uacbd\ud558\uc5ec MetalLB\ub85c\ubd80\ud130 \ub85c\ub4dc \ubca8\ub7f0\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ubc1b\uae30 \uc804\uc5d0, \ud604\uc7ac \uc0c1\ud0dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/seldon-core-analytics-grafana -n seldon-system\n")),(0,l.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \ud0c0\uc785\uc740 ClusterIP\uc774\uba70, External-IP \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE\nseldon-core-analytics-grafana   ClusterIP   10.109.20.161   <none>        80/TCP    94s\n")),(0,l.kt)("p",null,"type \uc744 LoadBalancer \ub85c \ubcc0\uacbd\ud558\uace0 \uc6d0\ud558\ub294 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 loadBalancerIP \ud56d\ubaa9\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ucd94\uac00 \ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc704\uc5d0\uc11c \uc124\uc815\ud55c IP \uc8fc\uc18c\ud480\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c IP \uc8fc\uc18c\uac00 \ubc30\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit svc/seldon-core-analytics-grafana -n seldon-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: seldon-core-analytics\n    meta.helm.sh/release-namespace: seldon-system\n  creationTimestamp: "2022-01-07T04:16:47Z"\n  labels:\n    app.kubernetes.io/instance: seldon-core-analytics\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: grafana\n    app.kubernetes.io/version: 7.0.3\n    helm.sh/chart: grafana-5.1.4\n  name: seldon-core-analytics-grafana\n  namespace: seldon-system\n  resourceVersion: "280605"\n  uid: 75073b78-92ec-472c-b0d5-240038ea8fa5\nspec:\n  clusterIP: 10.109.20.161\n  clusterIPs:\n  - 10.109.20.161\n  ipFamilies:\n  - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n  - name: service\n    port: 80\n    protocol: TCP\n    targetPort: 3000\n  selector:\n    app.kubernetes.io/instance: seldon-core-analytics\n    app.kubernetes.io/name: grafana\n  sessionAffinity: None\n  type: LoadBalancer # Change ClusterIP to LoadBalancer\n  loadBalancerIP: 192.168.35.103 # Add IP\nstatus:\n  loadBalancer: {}\n')),(0,l.kt)("p",null,"\ub2e4\uc2dc \ud655\uc778\uc744 \ud574\ubcf4\uba74 External-IP \uac12\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.35.103")," \uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc/seldon-core-analytics-grafana -n seldon-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                            TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE\nseldon-core-analytics-grafana   LoadBalancer   10.109.20.161   192.168.35.103   80:31191/TCP   5m14s\n")),(0,l.kt)("p",null,"Web Browser \ub97c \uc5f4\uc5b4 ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.35.103:80"},"http://192.168.35.103:80")," \uc73c\ub85c \uc811\uc18d\ud558\uc5ec, \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"login-after-grafana-setting.png",src:n(2043).Z,width:"1922",height:"1082"})))}u.isMDXComponent=!0},2043:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/login-after-grafana-setting-95945b35a1316b2dbd1f0109991c0a0b.png"},5568:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/login-after-istio-ingressgateway-setting-3adfcf1bd5c4ddf45c54f4c4b5d4ceab.png"},369:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/login-after-minio-setting-78fb86dafe3137ae3ecfbb49e2d7effb.png"},7827:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/login-after-mlflow-setting-a4b0d197be47701209a6ef99612e89d6.png"}}]);