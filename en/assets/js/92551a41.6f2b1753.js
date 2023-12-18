"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"8. Component - InputPath/OutputPath",description:"",sidebar_position:8,contributors:["Jongseob Jeon","SeungTae Kim"]},i=void 0,p={unversionedId:"kubeflow/advanced-component",id:"version-1.0/kubeflow/advanced-component",title:"8. Component - InputPath/OutputPath",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/advanced-component.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-component",permalink:"/en/docs/1.0/kubeflow/advanced-component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/advanced-component.md",tags:[],version:"1.0",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:8,frontMatter:{title:"8. Component - InputPath/OutputPath",description:"",sidebar_position:8,contributors:["Jongseob Jeon","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"7. Pipeline - Run",permalink:"/en/docs/1.0/kubeflow/basic-run"},next:{title:"9. Component - Environment",permalink:"/en/docs/1.0/kubeflow/advanced-environment"}},l={},s=[{value:"Complex Outputs",id:"complex-outputs",level:2},{value:"Component Contents",id:"component-contents",level:2},{value:"Component Wrapper",id:"component-wrapper",level:2},{value:"Define a standalone Python function",id:"define-a-standalone-python-function",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"Rule for using InputPath/OutputPath",id:"rule-for-using-inputpathoutputpath",level:2},{value:"Load Data Component",id:"load-data-component",level:3},{value:"Write Pipeline",id:"write-pipeline",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"complex-outputs"},"Complex Outputs"),(0,o.kt)("p",null,"On this page, we will write the code example from ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/kubeflow-concepts#component-contents"},"Kubeflow Concepts")," as a component."),(0,o.kt)("h2",{id:"component-contents"},"Component Contents"),(0,o.kt)("p",null,"Below is the component content used in ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/kubeflow-concepts#component-contents"},"Kubeflow Concepts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import dill\nimport pandas as pd\n\nfrom sklearn.svm import SVC\n\ntrain_data = pd.read_csv(train_data_path)\ntrain_target = pd.read_csv(train_target_path)\n\nclf = SVC(kernel=kernel)\nclf.fit(train_data, train_target)\n\nwith open(model_path, mode="wb") as file_writer:\n    dill.dump(clf, file_writer)\n')),(0,o.kt)("h2",{id:"component-wrapper"},"Component Wrapper"),(0,o.kt)("h3",{id:"define-a-standalone-python-function"},"Define a standalone Python function"),(0,o.kt)("p",null,"With the necessary Configs for the Component Wrapper, it will look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def train_from_csv(\n    train_data_path: str,\n    train_target_path: str,\n    model_path: str,\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,o.kt)("p",null,"In the ","[Basic Usage Component]","](../kubeflow/basic-component), we explained that you should provide type hints for input and output when describing. But what about complex objects such as dataframes, models, that cannot be used in json?"),(0,o.kt)("p",null,"When passing values between functions in Python, objects can be returned and their value will be stored in the host's memory, so the same object can be used in the next function. However, in Kubeflow, components are running independently on each container, that is, they are not sharing the same memory, so you cannot pass objects in the same way as in a normal Python function. The only information that can be passed between components is in ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format. Therefore, objects of types that cannot be converted into json format such as Model or DataFrame must be passed in some other way."),(0,o.kt)("p",null,"Kubeflow solves this by storing the data in a file instead of memory, and then using the file to pass information. Since the path of the stored file is a string, it can be passed between components. However, in Kubeflow, the user does not know the path of the file before the execution. For this, Kubeflow provides a magic related to the input and output paths, ",(0,o.kt)("inlineCode",{parentName:"p"},"InputPath")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OutputPath"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"InputPath")," literally means the input path, and ",(0,o.kt)("inlineCode",{parentName:"p"},"OutputPath")," literally means the output path."),(0,o.kt)("p",null,"For example, in a component that generates and returns data, ",(0,o.kt)("inlineCode",{parentName:"p"},"data_path: OutputPath()")," is created as an argument. And in a component that receives data, ",(0,o.kt)("inlineCode",{parentName:"p"},"data_path: InputPath()")," is created as an argument."),(0,o.kt)("p",null,"Once these are created, when connecting them in a pipeline, Kubeflow automatically generates and inputs the necessary paths. Therefore, users no longer need to worry about the paths and only need to consider the relationships between components."),(0,o.kt)("p",null,"Based on this information, when rewriting the component wrapper, it would look like the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath\n\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,o.kt)("p",null,"InputPath or OutputPath can accept a string. This string is the format of the file to be input or output.",(0,o.kt)("br",{parentName:"p"}),"\n","However, it does not necessarily mean that the file has to be stored in this format.",(0,o.kt)("br",{parentName:"p"}),"\n","It just serves as a helper for type checking when compiling the pipeline.",(0,o.kt)("br",{parentName:"p"}),"\n","If the file format is not fixed, then no input is needed (it serves the role of something like ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," in type hints)."),(0,o.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,o.kt)("p",null,"Convert the written component into a format that can be used in Kubeflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,o.kt)("h2",{id:"rule-for-using-inputpathoutputpath"},"Rule for using InputPath/OutputPath"),(0,o.kt)("p",null,"There are rules to follow when using InputPath or OutputPath arguments in pipeline."),(0,o.kt)("h3",{id:"load-data-component"},"Load Data Component"),(0,o.kt)("p",null,"To execute the previously written component, a component that generates data is created since data is required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef load_iris_data(\n    data_path: OutputPath("csv"),\n    target_path: OutputPath("csv"),\n):\n    import pandas as pd\n    from sklearn.datasets import load_iris\n\n    iris = load_iris()\n\n    data = pd.DataFrame(iris["data"], columns=iris["feature_names"])\n    target = pd.DataFrame(iris["target"], columns=["target"])\n\n    data.to_csv(data_path, index=False)\n    target.to_csv(target_path, index=False)\n')),(0,o.kt)("h3",{id:"write-pipeline"},"Write Pipeline"),(0,o.kt)("p",null,"Now let's write the pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.dsl import pipeline\n\n\n@pipeline(name="complex_pipeline")\ndef complex_pipeline(kernel: str):\n    iris_data = load_iris_data()\n    model = train_from_csv(\n        train_data=iris_data.outputs["data"],\n        train_target=iris_data.outputs["target"],\n        kernel=kernel,\n    )\n')),(0,o.kt)("p",null,"Have you noticed something strange?",(0,o.kt)("br",{parentName:"p"}),"\n","All the ",(0,o.kt)("inlineCode",{parentName:"p"},"_path")," suffixes have disappeared from the arguments received in the input and output.",(0,o.kt)("br",{parentName:"p"}),"\n","We can see that instead of accessing ",(0,o.kt)("inlineCode",{parentName:"p"},'iris_data.outputs["data_path"]'),", we are accessing ",(0,o.kt)("inlineCode",{parentName:"p"},'iris_data.outputs["data"]'),".",(0,o.kt)("br",{parentName:"p"}),"\n","This happens because Kubeflow has a rule that paths created with ",(0,o.kt)("inlineCode",{parentName:"p"},"InputPath")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OutputPath")," can be accessed without the ",(0,o.kt)("inlineCode",{parentName:"p"},"_path")," suffix when accessed from the pipeline."),(0,o.kt)("p",null,"However, if you upload the pipeline just written, it will not run.",(0,o.kt)("br",{parentName:"p"}),"\n","The reason is explained on the next page."))}c.isMDXComponent=!0}}]);