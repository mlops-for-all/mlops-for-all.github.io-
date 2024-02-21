"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1714],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(f,i(i({ref:e},s),{},{components:n})):a.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5818:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"13. Component - Debugging",description:"",sidebar_position:13,contributors:["Jongseob Jeon"]},i=void 0,l={unversionedId:"kubeflow/how-to-debug",id:"kubeflow/how-to-debug",title:"13. Component - Debugging",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/how-to-debug.md",sourceDirName:"kubeflow",slug:"/kubeflow/how-to-debug",permalink:"/en/docs/kubeflow/how-to-debug",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/how-to-debug.md",tags:[],version:"current",lastUpdatedBy:"Tim cho",lastUpdatedAt:1708479021,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:13,frontMatter:{title:"13. Component - Debugging",description:"",sidebar_position:13,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"12. Component - MLFlow",permalink:"/en/docs/kubeflow/advanced-mlflow"},next:{title:"1. What is API Deployment?",permalink:"/en/docs/api-deployment/what-is-api-deployment"}},p={},d=[{value:"Debugging Pipeline",id:"debugging-pipeline",level:2},{value:"Failed Component",id:"failed-component",level:2}],s={toc:d},u="wrapper";function c(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debugging-pipeline"},"Debugging Pipeline"),(0,o.kt)("p",null,"This page covers how to debug Kubeflow components."),(0,o.kt)("h2",{id:"failed-component"},"Failed Component"),(0,o.kt)("p",null,"We will modify a pipeline used in ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/advanced-mlflow#mlflow-pipeline"},"Component - MLFlow")," in this page."),(0,o.kt)("p",null,"First, let's modify the pipeline so that the component fails."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nimport kfp\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["pandas", "scikit-learn"],\n)\ndef load_iris_data(\n    data_path: OutputPath("csv"),\n    target_path: OutputPath("csv"),\n):\n    import pandas as pd\n    from sklearn.datasets import load_iris\n\n    iris = load_iris()\n\n    data = pd.DataFrame(iris["data"], columns=iris["feature_names"])\n    target = pd.DataFrame(iris["target"], columns=["target"])\n    \n    data["sepal length (cm)"] = None\n    data.to_csv(data_path, index=False)\n    target.to_csv(target_path, index=False)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["pandas"],\n)\ndef drop_na_from_csv(\n    data_path: InputPath("csv"),\n    output_path: OutputPath("csv"),\n):\n    import pandas as pd\n\n    data = pd.read_csv(data_path)\n    data = data.dropna()\n    data.to_csv(output_path, index=False)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill", "pandas", "scikit-learn", "mlflow"],\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    input_example_path: OutputPath("dill"),\n    signature_path: OutputPath("dill"),\n    conda_env_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n    from sklearn.svm import SVC\n\n    from mlflow.models.signature import infer_signature\n    from mlflow.utils.environment import _mlflow_conda_env\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\n    input_example = train_data.sample(1)\n    with open(input_example_path, "wb") as file_writer:\n        dill.dump(input_example, file_writer)\n\n    signature = infer_signature(train_data, clf.predict(train_data))\n    with open(signature_path, "wb") as file_writer:\n        dill.dump(signature, file_writer)\n\n    conda_env = _mlflow_conda_env(\n        additional_pip_deps=["dill", "pandas", "scikit-learn"]\n    )\n    with open(conda_env_path, "wb") as file_writer:\n        dill.dump(conda_env, file_writer)\n\n\n\n@pipeline(name="debugging_pipeline")\ndef debugging_pipeline(kernel: str):\n    iris_data = load_iris_data()\n    drop_data = drop_na_from_csv(data=iris_data.outputs["data"])\n    model = train_from_csv(\n        train_data=drop_data.outputs["output"],\n        train_target=iris_data.outputs["target"],\n        kernel=kernel,\n    )\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(debugging_pipeline, "debugging_pipeline.yaml")\n\n')),(0,o.kt)("p",null,"The modifications are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"load_iris_data")," component for loading data, ",(0,o.kt)("inlineCode",{parentName:"li"},"None")," was injected into the ",(0,o.kt)("inlineCode",{parentName:"li"},"sepal length (cm)")," feature."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"drop_na_from_csv")," component, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"drop_na()")," function to remove rows with na values.")),(0,o.kt)("p",null,"Now let's upload and run the pipeline.",(0,o.kt)("br",{parentName:"p"}),"\n","After running, if you press Run you will see that it has failed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Train from csv")," component."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debug-0.png",src:n(1870).Z,width:"2826",height:"1790"})),(0,o.kt)("p",null,"Click on the failed component and check the log to see the reason for the failure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debug-2.png",src:n(7955).Z,width:"2826",height:"1796"})),(0,o.kt)("p",null,"If the log shows that the data count is 0 and the component did not run, there may be an issue with the input data.",(0,o.kt)("br",{parentName:"p"}),"\n","Let's investigate what might be the problem."),(0,o.kt)("p",null,"First, click on the component and go to the Input/Output tab to download the input data.",(0,o.kt)("br",{parentName:"p"}),"\n","You can click on the link indicated by the red square to download the data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debug-5.png",src:n(2935).Z,width:"2690",height:"1740"})),(0,o.kt)("p",null,"Download both files to the same location. Then navigate to the specified path and check the downloaded files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,o.kt)("p",null,"There are two files as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"drop-na-from-csv-output.tgz load-iris-data-target.tgz\n")),(0,o.kt)("p",null,"I will try to unzip it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xzvf load-iris-data-target.tgz ; mv data target.csv\ntar -xzvf drop-na-from-csv-output.tgz ; mv data data.csv\n")),(0,o.kt)("p",null,"And then run the component code using a Jupyter notebook.\n",(0,o.kt)("img",{alt:"debug-3.png",src:n(2451).Z,width:"2434",height:"1690"})),(0,o.kt)("p",null,"Debugging revealed that dropping the data was based on rows instead of columns, resulting in all the data being removed.\nNow that we know the cause of the problem, we can modify the component to drop based on columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@partial(\n    create_component_from_func,\n    packages_to_install=["pandas"],\n)\ndef drop_na_from_csv(\n    data_path: InputPath("csv"),\n    output_path: OutputPath("csv"),\n):\n    import pandas as pd\n\n    data = pd.read_csv(data_path)\n    data = data.dropna(axis="columns")\n    data.to_csv(output_path, index=False)\n')),(0,o.kt)("p",null,"After modifying, upload the pipeline again and run it to confirm that it is running normally as follows."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debug-6.png",src:n(5833).Z,width:"2694",height:"1748"})))}c.isMDXComponent=!0},1870:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-0-9ab1af1c9020a9dfc907d8d36dadac71.png"},7955:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-2-50081530b33b57206f6ef497212cf2a9.png"},2451:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-3-4fda7b9b4f2c366147cd6aeb124cc9c5.png"},2935:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-5-5b7edcc1e29c85f71b279af3f54f3f69.png"},5833:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/debug-6-e2da46f9318827a339b04097e68f635a.png"}}]);