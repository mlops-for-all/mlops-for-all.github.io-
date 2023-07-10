"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",sidebar_position:6,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,s={unversionedId:"setup-kubernetes/setup-nvidia-gpu",id:"setup-kubernetes/setup-nvidia-gpu",title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-kubernetes/setup-nvidia-gpu.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/setup-nvidia-gpu",permalink:"/en/docs/setup-kubernetes/setup-nvidia-gpu",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-kubernetes/setup-nvidia-gpu.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:6,frontMatter:{title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",sidebar_position:6,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"5. Install Kubernetes Modules",permalink:"/en/docs/setup-kubernetes/install-kubernetes-module"},next:{title:"1. Kubeflow",permalink:"/en/docs/setup-components/install-components-kf"}},l={},u=[{value:"1. Install NVIDIA Driver",id:"1-install-nvidia-driver",level:2},{value:"2. Install NVIDIA-Docker.",id:"2-install-nvidia-docker",level:2},{value:"3. Setting NVIDIA-Docker as the Default Container Runtime",id:"3-setting-nvidia-docker-as-the-default-container-runtime",level:2},{value:"4. Nvidia-Device-Plugin",id:"4-nvidia-device-plugin",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For using GPU in Kubernetes and Kubeflow, the following tasks are required."),(0,i.kt)("h2",{id:"1-install-nvidia-driver"},"1. Install NVIDIA Driver"),(0,i.kt)("p",null,"If the following screen is output when executing ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-smi"),", please omit this step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ nvidia-smi \n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |\n| 25%   32C    P8     4W / 120W |    211MiB /  6078MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce ...  Off  | 00000000:02:00.0 Off |                  N/A |\n|  0%   34C    P8     7W / 175W |      5MiB /  7982MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|    0   N/A  N/A      1644      G   /usr/lib/xorg/Xorg                198MiB |\n|    0   N/A  N/A      1893      G   /usr/bin/gnome-shell               10MiB |\n|    1   N/A  N/A      1644      G   /usr/lib/xorg/Xorg                  4MiB |\n+-----------------------------------------------------------------------------+\n")),(0,i.kt)("p",null,"If the output of nvidia-smi is not as above, please install the nvidia driver that fits your installed GPU."),(0,i.kt)("p",null,"If you are not familiar with the installation of nvidia drivers, please install it through the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:graphics-drivers/ppa\nsudo apt update && sudo apt install -y ubuntu-drivers-common\nsudo ubuntu-drivers autoinstall\nsudo reboot\n")),(0,i.kt)("h2",{id:"2-install-nvidia-docker"},"2. Install NVIDIA-Docker."),(0,i.kt)("p",null,"Let's install NVIDIA-Docker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \\\n  sudo apt-key add -\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID)\ncurl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\nsudo apt-get update\nsudo apt-get install -y nvidia-docker2 &&\nsudo systemctl restart docker\n")),(0,i.kt)("p",null,"To check if it is installed correctly, we will run the docker container using the GPU."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi\n")),(0,i.kt)("p",null,"If the following message appears, it means that the installation was successful: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi\n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |\n| 25%   32C    P8     4W / 120W |    211MiB /  6078MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce ...  Off  | 00000000:02:00.0 Off |                  N/A |\n|  0%   34C    P8     6W / 175W |      5MiB /  7982MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n+-----------------------------------------------------------------------------+\n")),(0,i.kt)("h2",{id:"3-setting-nvidia-docker-as-the-default-container-runtime"},"3. Setting NVIDIA-Docker as the Default Container Runtime"),(0,i.kt)("p",null,"By default, Kubernetes uses Docker-CE as the default container runtime. To use NVIDIA GPU within Docker containers, you need to configure NVIDIA-Docker as the container runtime and modify the default runtime for creating pods."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," file and make the following modifications:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo vi /etc/docker/daemon.json\n\n{\n  "default-runtime": "nvidia",\n  "runtimes": {\n      "nvidia": {\n          "path": "nvidia-container-runtime",\n          "runtimeArgs": []\n  }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After confirming the file changes, restart Docker."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo service docker restart\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the changes have been applied."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker info | grep nvidia\n")),(0,i.kt)("p",{parentName:"li"},"If you see the following message, it means that the installation was successful."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ docker info | grep nvidia\nRuntimes: io.containerd.runc.v2 io.containerd.runtime.v1.linux nvidia runc\nDefault Runtime: nvidia\n")))),(0,i.kt)("h2",{id:"4-nvidia-device-plugin"},"4. Nvidia-Device-Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the nvidia-device-plugin daemonset."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.10.0/nvidia-device-plugin.yml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the nvidia-device-plugin pod is in the RUNNING state."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep nvidia\n")))),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kube-system   nvidia-device-plugin-daemonset-nlqh2   1/1     Running   0    1h\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the nodes have been configured to have GPUs available."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get nodes "-o=custom-columns=NAME:.metadata.name,GPU:.status.allocatable.nvidia\\.com/gpu"\n')),(0,i.kt)("p",{parentName:"li"},"If you see the following message, it means that the configuration was successful.",(0,i.kt)("br",{parentName:"p"}),"\n","(",(0,i.kt)("em",{parentName:"p"},"In the "),"MLOps for ALL* tutorial cluster, there are two GPUs, so the output is 2.\nIf the output shows the correct number of GPUs for your cluster, it is fine.)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME       GPU\nubuntu     2\n")),(0,i.kt)("p",{parentName:"li"},"If it is not configured, the GPU value will be displayed as ",(0,i.kt)("inlineCode",{parentName:"p"},"<None>"),"."))))}c.isMDXComponent=!0}}]);