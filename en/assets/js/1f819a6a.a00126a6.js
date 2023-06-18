"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1714],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||p;return n?a.createElement(g,o(o({ref:e},s),{},{components:n})):a.createElement(g,o({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<p;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5818:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const p={title:"13. Component - Debugging",description:"",sidebar_position:13,contributors:["Jongseob Jeon"]},o=void 0,i={unversionedId:"kubeflow/how-to-debug",id:"kubeflow/how-to-debug",title:"13. Component - Debugging",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/how-to-debug.md",sourceDirName:"kubeflow",slug:"/kubeflow/how-to-debug",permalink:"/en/docs/kubeflow/how-to-debug",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/how-to-debug.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:13,frontMatter:{title:"13. Component - Debugging",description:"",sidebar_position:13,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"12. Component - MLFlow",permalink:"/en/docs/kubeflow/advanced-mlflow"},next:{title:"1. What is API Deployment?",permalink:"/en/docs/api-deployment/what-is-api-deployment"}},l={},d=[{value:"Debugging Pipeline",id:"debugging-pipeline",level:2},{value:"Failed Component",id:"failed-component",level:2}],s={toc:d},u="wrapper";function c(t){let{components:e,...p}=t;return(0,r.kt)(u,(0,a.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"debugging-pipeline"},"Debugging Pipeline"),(0,r.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 Kubeflow \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub514\ubc84\uae45\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"failed-component"},"Failed Component"),(0,r.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/advanced-mlflow#mlflow-pipeline"},"Component - MLFlow")," \uc5d0\uc11c \uc774\uc6a9\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc870\uae08 \uc218\uc815\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\ud328\ud558\ub3c4\ub85d \ud30c\uc774\ud504\ub77c\uc778\uc744 \ubcc0\uacbd\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nimport kfp\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["pandas", "scikit-learn"],\n)\ndef load_iris_data(\n    data_path: OutputPath("csv"),\n    target_path: OutputPath("csv"),\n):\n    import pandas as pd\n    from sklearn.datasets import load_iris\n\n    iris = load_iris()\n\n    data = pd.DataFrame(iris["data"], columns=iris["feature_names"])\n    target = pd.DataFrame(iris["target"], columns=["target"])\n    \n    data["sepal length (cm)"] = None\n    data.to_csv(data_path, index=False)\n    target.to_csv(target_path, index=False)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["pandas"],\n)\ndef drop_na_from_csv(\n    data_path: InputPath("csv"),\n    output_path: OutputPath("csv"),\n):\n    import pandas as pd\n\n    data = pd.read_csv(data_path)\n    data = data.dropna()\n    data.to_csv(output_path, index=False)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill", "pandas", "scikit-learn", "mlflow"],\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    input_example_path: OutputPath("dill"),\n    signature_path: OutputPath("dill"),\n    conda_env_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n    from sklearn.svm import SVC\n\n    from mlflow.models.signature import infer_signature\n    from mlflow.utils.environment import _mlflow_conda_env\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\n    input_example = train_data.sample(1)\n    with open(input_example_path, "wb") as file_writer:\n        dill.dump(input_example, file_writer)\n\n    signature = infer_signature(train_data, clf.predict(train_data))\n    with open(signature_path, "wb") as file_writer:\n        dill.dump(signature, file_writer)\n\n    conda_env = _mlflow_conda_env(\n        additional_pip_deps=["dill", "pandas", "scikit-learn"]\n    )\n    with open(conda_env_path, "wb") as file_writer:\n        dill.dump(conda_env, file_writer)\n\n\n\n@pipeline(name="debugging_pipeline")\ndef debugging_pipeline(kernel: str):\n    iris_data = load_iris_data()\n    drop_data = drop_na_from_csv(data=iris_data.outputs["data"])\n    model = train_from_csv(\n        train_data=drop_data.outputs["output"],\n        train_target=iris_data.outputs["target"],\n        kernel=kernel,\n    )\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(debugging_pipeline, "debugging_pipeline.yaml")\n\n')),(0,r.kt)("p",null,"\uc218\uc815\ud55c \uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"load_iris_data")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"li"},"sepal length (cm)")," \ud53c\ucc98\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," \uac12\uc744 \uc8fc\uc785"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"drop_na_from_csv")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"li"},"drop_na()")," \ud568\uc218\ub97c \uc774\uc6a9\ud574 na \uac12\uc774 \ud3ec\ud568\ub41c ",(0,r.kt)("inlineCode",{parentName:"li"},"row"),"\ub97c \uc81c\uac70")),(0,r.kt)("p",null,"\uc774\uc81c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc5c5\ub85c\ub4dc\ud558\uace0 \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc2e4\ud589 \ud6c4 Run\uc744 \ub20c\ub7ec\uc11c \ud655\uc778\ud574\ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"Train from csv")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc2e4\ud328\ud588\ub2e4\uace0 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debug-0.png",src:n(1870).Z,width:"2826",height:"1790"})),(0,r.kt)("p",null,"\uc2e4\ud328\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud074\ub9ad\ud558\uace0 \ub85c\uadf8\ub97c \ud655\uc778\ud574\uc11c \uc2e4\ud328\ud55c \uc774\uc720\ub97c \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debug-2.png",src:n(7955).Z,width:"2826",height:"1796"})),(0,r.kt)("p",null,"\ub85c\uadf8\ub97c \ud655\uc778\ud558\uba74 \ub370\uc774\ud130\uc758 \uac1c\uc218\uac00 0\uc774\uc5ec\uc11c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ub098\uc635\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ubd84\uba85 \uc815\uc0c1\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud588\ub294\ub370 \uc65c \ub370\uc774\ud130\uc758 \uac1c\uc218\uac00 0\uac1c\uc77c\uae4c\uc694?  "),(0,r.kt)("p",null,"\uc774\uc81c \uc785\ub825\ubc1b\uc740 \ub370\uc774\ud130\uc5d0 \uc5b4\ub5a4 \ubb38\uc81c\uac00 \uc788\uc5c8\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc6b0\uc120 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud074\ub9ad\ud558\uace0 Input/Ouput \ud0ed\uc5d0\uc11c \uc785\ub825\uac12\uc73c\ub85c \ub4e4\uc5b4\uac04 \ub370\uc774\ud130\ub4e4\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc6b4\ub85c\ub4dc\ub294 \ube68\uac04\uc0c9 \ub124\ubaa8\ub85c \ud45c\uc2dc\ub41c \uacf3\uc758 \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debug-5.png",src:n(2935).Z,width:"2690",height:"1740"})),(0,r.kt)("p",null,"\ub450 \uac1c\uc758 \ud30c\uc77c\uc744 \uac19\uc740 \uacbd\ub85c\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub9ac\uace0 \ud574\ub2f9 \uacbd\ub85c\ub85c \uc774\ub3d9\ud574\uc11c \ud30c\uc77c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ls\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ub450 \uac1c\uc758 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"drop-na-from-csv-output.tgz load-iris-data-target.tgz\n")),(0,r.kt)("p",null,"\uc555\ucd95\uc744 \ud480\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"tar -xzvf load-iris-data-target.tgz ; mv data target.csv\ntar -xzvf drop-na-from-csv-output.tgz ; mv data data.csv\n")),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc774\ub97c \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81\uc744 \uc774\uc6a9\ud574 \ucef4\ud3ec\ub10c\ud2b8 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debug-3.png",src:n(2451).Z,width:"2434",height:"1690"})),(0,r.kt)("p",null,"\ub514\ubc84\uae45\uc744 \ud574\ubcf8 \uacb0\uacfc dropna \ud560 \ub54c column\uc744 \uae30\uc900\uc73c\ub85c drop\uc744 \ud574\uc57c \ud558\ub294\ub370 row\ub97c \uae30\uc900\uc73c\ub85c drop\uc744 \ud574\uc11c \ub370\uc774\ud130\uac00 \ubaa8\ub450 \uc0ac\ub77c\uc84c\uc2b5\ub2c8\ub2e4.\n\uc774\uc81c \ubb38\uc81c\uc758 \uc6d0\uc778\uc744 \uc54c\uc544\ub0c8\uc73c\ub2c8 column\uc744 \uae30\uc900\uc73c\ub85c drop\uc774 \ub418\uac8c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@partial(\n    create_component_from_func,\n    packages_to_install=["pandas"],\n)\ndef drop_na_from_csv(\n    data_path: InputPath("csv"),\n    output_path: OutputPath("csv"),\n):\n    import pandas as pd\n\n    data = pd.read_csv(data_path)\n    data = data.dropna(axis="columns")\n    data.to_csv(output_path, index=False)\n')),(0,r.kt)("p",null,"\uc218\uc815 \ud6c4 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub2e4\uc2dc \uc5c5\ub85c\ub4dc\ud558\uace0 \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debug-6.png",src:n(5833).Z,width:"2694",height:"1748"})))}c.isMDXComponent=!0},1870:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-0-9ab1af1c9020a9dfc907d8d36dadac71.png"},7955:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-2-50081530b33b57206f6ef497212cf2a9.png"},2451:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-3-4fda7b9b4f2c366147cd6aeb124cc9c5.png"},2935:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-5-5b7edcc1e29c85f71b279af3f54f3f69.png"},5833:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-6-e2da46f9318827a339b04097e68f635a.png"}}]);