"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"[Practice] Docker images",description:"Practice to use docker image.",sidebar_position:5,contributors:["Jongseob Jeon","Jaeyeon Kim"]},i=void 0,l={unversionedId:"prerequisites/docker/images",id:"version-1.0/prerequisites/docker/images",title:"[Practice] Docker images",description:"Practice to use docker image.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/images.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/images",permalink:"/en/docs/1.0/prerequisites/docker/images",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/images.md",tags:[],version:"1.0",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:5,frontMatter:{title:"[Practice] Docker images",description:"Practice to use docker image.",sidebar_position:5,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"[Practice] Docker command",permalink:"/en/docs/1.0/prerequisites/docker/command"},next:{title:"[Practice] Docker Advanced",permalink:"/en/docs/1.0/prerequisites/docker/advanced"}},c={},p=[],s={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker commit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running container \ub97c docker image \ub85c \ub9cc\ub4dc\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'docker commit -m "message" -a "author" <container-id> <image-name>')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker commit")," \uc744 \uc0ac\uc6a9\ud558\uba74, \uc218\ub3d9\uc73c\ub85c Dockerfile \uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uace0\ub3c4 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"touch Dockerfile\n")))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move to the docker-practice folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an empty file called Dockerfile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubbf8\uc9c0\uc5d0 \ud2b9\uc815 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\ub294 \uba85\ub839\uc5b4\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?"))),(0,r.kt)("p",null,"Answer: ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")),(0,r.kt)("p",null,"Translation: Let's look at the basic commands that can be used in Dockerfile one by one. FROM is a command that specifies which image to use as a base image for Dockerfile. When creating a Docker image, instead of creating the environment I intend from scratch, I can use a pre-made image such as ",(0,r.kt)("inlineCode",{parentName:"p"},"python:3.9"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"python-3.9-alpine"),", etc. as the base and install pytorch and add my source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"FROM <image>[:<tag>] [AS <name>]\n\n# \uc608\uc2dc\nFROM ubuntu\nFROM ubuntu:18.04\nFROM nginx:latest AS ngx\n")),(0,r.kt)("p",null,"The command to copy files or directories from the ",(0,r.kt)("inlineCode",{parentName:"p"},"<src>")," path on the host (local) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<dest>")," path inside the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"COPY <src>... <dest>\n\n# \uc608\uc2dc\nCOPY a.txt /some-directory/b.txt\nCOPY my-directory /some-directory-2\n")),(0,r.kt)("p",null,"ADD is similar to COPY but it has additional features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# 1 - \ud638\uc2a4\ud2b8\uc5d0 \uc555\ucd95\ub418\uc5b4\uc788\ub294 \ud30c\uc77c\uc744 \ud480\uba74\uc11c \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\ub85c copy \ud560 \uc218 \uc788\uc74c\nADD scripts.tar.gz /tmp\n# 2 - Remote URLs \uc5d0 \uc788\ub294 \ud30c\uc77c\uc744 \uc18c\uc2a4 \uacbd\ub85c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\uc74c\nADD http://www.example.com/script.sh /tmp\n\n# \uc704 \ub450 \uac00\uc9c0 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \uacbd\uc6b0\uc5d0\ub9cc COPY \ub300\uc2e0 ADD \ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\n")),(0,r.kt)("p",null,"The command to run the specified command inside a Docker container.\nDocker images maintain the state in which the commands are executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},'RUN <command>\nRUN ["executable-command", "parameter1", "parameter2"]\n\n# \uc608\uc2dc\nRUN pip install torch\nRUN pip install -r requirements.txt\n')),(0,r.kt)("p",null,"CMD specifies a command that the Docker container will ",(0,r.kt)("strong",{parentName:"p"},"run when it starts"),". There is a similar command called ",(0,r.kt)("strong",{parentName:"p"},"ENTRYPOINT"),". The difference between them will be discussed ",(0,r.kt)("strong",{parentName:"p"},"later"),". Note that only one ",(0,r.kt)("strong",{parentName:"p"},"CMD")," can be run in one Docker image, which is different from ",(0,r.kt)("strong",{parentName:"p"},"RUN")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},'CMD <command>\nCMD ["executable-command", "parameter1", "parameter2"]\nCMD ["parameter1", "parameter2"] # ENTRYPOINT \uc640 \ud568\uaed8 \uc0ac\uc6a9\ub420 \ub54c\n\n# \uc608\uc2dc\nCMD python main.py\n')),(0,r.kt)("p",null,"WORKDIR is a command that specifies which directory inside the container to perform future additional commands. If the directory does not exist, it will be created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"WORKDIR /path/to/workdir\n\n# \uc608\uc2dc\nWORKDIR /home/demo\nRUN pwd # /home/demo \uac00 \ucd9c\ub825\ub428\n")),(0,r.kt)("p",null,"This is a command to set the value of environment variables that will be used continuously inside the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"ENV <KEY> <VALUE>\nENV <KEY>=<VALUE>\n\n# \uc608\uc2dc\n# default \uc5b8\uc5b4 \uc124\uc815\nRUN locale-gen ko_KR.UTF-8\nENV LANG ko_KR.UTF-8\nENV LANGUAGE ko_KR.UTF-8\nENV LC_ALL ko_KR.UTF-8\n")),(0,r.kt)("p",null,"You can specify the port/protocol to be opened from the container. If ",(0,r.kt)("inlineCode",{parentName:"p"},"<protocol>")," is not specified, TCP is set as the default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"EXPOSE <port>\nEXPOSE <port>/<protocol>\n\n# \uc608\uc2dc\nEXPOSE 8080\n")),(0,r.kt)("p",null,"Write a simple Dockerfile by using ",(0,r.kt)("inlineCode",{parentName:"p"},"vim Dockerfile")," or an editor like vscode and write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# base image \ub97c ubuntu 18.04 \ub85c \uc124\uc815\ud569\ub2c8\ub2e4.\nFROM ubuntu:18.04\n\n# apt-get update \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\nRUN apt-get update\n\n# TEST env var\uc758 \uac12\uc744 hello \ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\nENV TEST hello\n\n# DOCKER CONTAINER \uac00 \uc2dc\uc791\ub420 \ub54c, \ud658\uacbd\ubcc0\uc218 TEST \uc758 \uac12\uc744 \ucd9c\ub825\ud569\ub2c8\ub2e4.\nCMD echo $TEST\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to create a Docker Image from a Dockerfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build --help\n")),(0,r.kt)("p",null,"Run the following command from the path where the Dockerfile is located."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-image:v1.0.0 .\n")),(0,r.kt)("p",null,'The command above means to build an image with the name "my-image" and the tag "v1.0.0" from the Dockerfile in the current path. Let\'s check if the image was built successfully.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# grep : my-image \uac00 \uc788\ub294\uc9c0\ub97c \uc7a1\uc544\ub0b4\ub294 (grep) \ud558\ub294 \uba85\ub839\uc5b4\ndocker images | grep my-image\n")),(0,r.kt)("p",null,"If performed normally, it will output as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"my-image     v1.0.0    143114710b2d   3 seconds ago   87.9MB\n")),(0,r.kt)("p",null,"Let's now ",(0,r.kt)("strong",{parentName:"p"},"run")," a docker container with the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-image:v1.0.0")," image that we just built."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run my-image:v1.0.0\n")),(0,r.kt)("p",null,"If performed normally, it will result in the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hello\n")),(0,r.kt)("p",null,"Let's run a docker container and change the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TEST")," env var at the time of running the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-image:v1.0.0")," image we just built."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e TEST=bye my-image:v1.0.0\n")),(0,r.kt)("p",null,"If performed normally, it will be as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bye\n")))}d.isMDXComponent=!0}}]);