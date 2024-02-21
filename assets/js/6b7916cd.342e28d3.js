"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=l.createContext({}),s=function(e){var n=l.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return l.createElement(m.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return t?l.createElement(f,r(r({ref:n},p),{},{components:t})):l.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=t(7462),a=(t(7294),t(3905));const o={title:"5. Model from MLflow",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},r=void 0,i={unversionedId:"api-deployment/seldon-mlflow",id:"version-1.0/api-deployment/seldon-mlflow",title:"5. Model from MLflow",description:"",source:"@site/versioned_docs/version-1.0/api-deployment/seldon-mlflow.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-mlflow",permalink:"/docs/1.0/api-deployment/seldon-mlflow",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/api-deployment/seldon-mlflow.md",tags:[],version:"1.0",lastUpdatedBy:"Tim cho",lastUpdatedAt:1708479021,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 21\uc77c",sidebarPosition:5,frontMatter:{title:"5. Model from MLflow",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"4. Seldon Fields",permalink:"/docs/1.0/api-deployment/seldon-fields"},next:{title:"6. Multi Models",permalink:"/docs/1.0/api-deployment/seldon-children"}},m={},s=[{value:"Model from MLflow",id:"model-from-mlflow",level:2},{value:"Secret",id:"secret",level:2},{value:"Seldon Core yaml",id:"seldon-core-yaml",level:2},{value:"args",id:"args",level:3},{value:"envFrom",id:"envfrom",level:3},{value:"API \uc0dd\uc131",id:"api-\uc0dd\uc131",level:2}],p={toc:s},c="wrapper";function d(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,l.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"model-from-mlflow"},"Model from MLflow"),(0,a.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/kubeflow/advanced-mlflow"},"MLflow Component"),"\uc5d0\uc11c \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \uc774\uc6a9\ud574 API\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"secret"},"Secret"),(0,a.kt)("p",null,"initContainer\uac00 minio\uc5d0 \uc811\uadfc\ud574\uc11c \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc73c\ub824\uba74 credentials\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\nminio\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c credentials\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\ntype: Opaque\nkind: Secret\nmetadata:\n  name: seldon-init-container-secret\n  namespace: kubeflow-user-example-com\ndata:\n  AWS_ACCESS_KEY_ID: bWluaW8K=\n  AWS_SECRET_ACCESS_KEY: bWluaW8xMjM=\n  AWS_ENDPOINT_URL: aHR0cDovL21pbmlvLm1ha2luYXJvY2tzLmFp\n  USE_SSL: ZmFsc2U=\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," \uc758 \uc785\ub825\uac12\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"minio"),"\uc785\ub2c8\ub2e4. \ub2e4\ub9cc secret\uc758 \uc785\ub825\uac12\uc740 \uc778\ucf54\ub529\ub41c \uac12\uc774\uc5ec\uc57c \ub418\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c\ub85c \uc785\ub825\ub418\ub294 \uac12\uc740 \ub2e4\uc74c\uc744 \uc218\ud589\ud6c4 \ub098\uc624\ub294 \uac12\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"data\uc5d0 \uc785\ub825\ub418\uc5b4\uc57c \ud558\ub294 \uac12\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID: minio"),(0,a.kt)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY: minio123"),(0,a.kt)("li",{parentName:"ul"},"AWS_ENDPOINT_URL: ",(0,a.kt)("a",{parentName:"li",href:"http://minio-service.kubeflow.svc:9000"},"http://minio-service.kubeflow.svc:9000")),(0,a.kt)("li",{parentName:"ul"},"USE_SSL: false")),(0,a.kt)("p",null,"\uc778\ucf54\ub529\uc740 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo -n minio | base64\n")),(0,a.kt)("p",null,"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uac12\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bWluaW8=\n")),(0,a.kt)("p",null,"\uc778\ucf54\ub529\uc744 \uc804\uccb4 \uac12\uc5d0 \ub300\ud574\uc11c \uc9c4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID: bWluaW8="),(0,a.kt)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY: bWluaW8xMjM="),(0,a.kt)("li",{parentName:"ul"},"AWS_ENDPOINT_URL: aHR0cDovL21pbmlvLXNlcnZpY2Uua3ViZWZsb3cuc3ZjOjkwMDA="),(0,a.kt)("li",{parentName:"ul"},"USE_SSL: ZmFsc2U=")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 secret\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 yaml\ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > seldon-init-container-secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: seldon-init-container-secret\n  namespace: kubeflow-user-example-com\ntype: Opaque\ndata:\n  AWS_ACCESS_KEY_ID: bWluaW8=\n  AWS_SECRET_ACCESS_KEY: bWluaW8xMjM=\n  AWS_ENDPOINT_URL: aHR0cDovL21pbmlvLXNlcnZpY2Uua3ViZWZsb3cuc3ZjOjkwMDA=\n  USE_SSL: ZmFsc2U=\nEOF\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 secret\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f seldon-init-container-secret.yaml\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"secret/seldon-init-container-secret created\n")),(0,a.kt)("h2",{id:"seldon-core-yaml"},"Seldon Core yaml"),(0,a.kt)("p",null,"\uc774\uc81c Seldon Core\ub97c \uc0dd\uc131\ud558\ub294 yaml\ud30c\uc77c\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: seldon-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: model-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/74ba8e33994144f599e50b3be176cdb0/artifacts/svc"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n\n        containers:\n        - name: model\n          image: ghcr.io/mlops-for-all/mlflowserver\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: model\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      children: []\n')),(0,a.kt)("p",null,"\uc774 \uc804\uc5d0 \uc791\uc131\ud55c ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/api-deployment/seldon-fields"},"Seldon Fields"),"\uc640 \ub2ec\ub77c\uc9c4 \uc810\uc740 \ud06c\uac8c \ub450 \ubd80\ubd84\uc785\ub2c8\ub2e4.\ninitContainer\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"envFrom")," \ud544\ub4dc\uac00 \ucd94\uac00\ub418\uc5c8\uc73c\uba70 args\uc758 \uc8fc\uc18c\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"s3://mlflow/mlflow/artifacts/0/74ba8e33994144f599e50b3be176cdb0/artifacts/svc")," \ub85c \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"args"},"args"),(0,a.kt)("p",null,"\uc55e\uc11c args\uc758 \uccab\ubc88\uc9f8 array\ub294 \uc6b0\ub9ac\uac00 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc744 \ubaa8\ub378\uc758 \uacbd\ub85c\ub77c\uace0 \ud588\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7fc mlflow\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub378\uc758 \uacbd\ub85c\ub294 \uc5b4\ub5bb\uac8c \uc54c \uc218 \uc788\uc744\uae4c\uc694?"),(0,a.kt)("p",null,"\ub2e4\uc2dc mlflow\uc5d0 \ub4e4\uc5b4\uac00\uc11c run\uc744 \ud074\ub9ad\ud558\uace0 \ubaa8\ub378\uc744 \ub204\ub974\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"seldon-mlflow-0.png",src:t(8764).Z,width:"3466",height:"2274"})),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud655\uc778\ub41c \uacbd\ub85c\ub97c \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"envfrom"},"envFrom"),(0,a.kt)("p",null,"minio\uc5d0 \uc811\uadfc\ud574\uc11c \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\ub294 \ub370 \ud544\uc694\ud55c \ud658\uacbd\ubcc0\uc218\ub97c \uc785\ub825\ud574\uc8fc\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4.\n\uc55e\uc11c \ub9cc\ub4e0 ",(0,a.kt)("inlineCode",{parentName:"p"},"seldon-init-container-secret"),"\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"api-\uc0dd\uc131"},"API \uc0dd\uc131"),(0,a.kt)("p",null,"\uc6b0\uc120 \uc704\uc5d0\uc11c \uc815\uc758\ud55c \uc2a4\ud399\uc744 yaml \ud30c\uc77c\ub85c \uc0dd\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: seldon-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: model-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/74ba8e33994144f599e50b3be176cdb0/artifacts/svc"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n\n        containers:\n        - name: model\n          image: ghcr.io/mlops-for-all/mlflowserver\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: model\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      - name: xtype\n        type: STRING\n        value: "dataframe"\n      children: []\nEOF\n')),(0,a.kt)("p",null,"seldon pod\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f seldon-mlflow.yaml\n\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"seldondeployment.machinelearning.seldon.io/seldon-example created\n")),(0,a.kt)("p",null,"\uc774\uc81c pod\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub730 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n kubeflow-user-example-com | grep seldon\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c API\ub97c \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"seldon-example-model-0-model-5c949bd894-c5f28      3/3     Running     0          69s\n")),(0,a.kt)("p",null,"CLI\ub97c \uc774\uc6a9\ud574 \uc0dd\uc131\ub41c API\uc5d0\ub294 \ub2e4\uc74c request\ub97c \ud1b5\ud574 \uc2e4\ud589\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://$NODE_IP:$NODE_PORT/seldon/seldon-deploy/sklearn/api/v1.0/predictions \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n    "data": {\n        "ndarray": [\n            [\n                143.0,\n                0.0,\n                30.0,\n                30.0\n            ]\n        ],\n        "names": [\n            "sepal length (cm)",\n            "sepal width (cm)",\n            "petal length (cm)",\n            "petal width (cm)"\n        ]\n    }\n}\'\n')),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub420 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{"data":{"names":[],"ndarray":["Virginica"]},"meta":{"requestPath":{"model":"ghcr.io/mlops-for-all/mlflowserver:e141f57"}}}\n')))}d.isMDXComponent=!0},8764:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/seldon-mlflow-0-1d29992e36aa6ee88621e221794159d1.png"}}]);