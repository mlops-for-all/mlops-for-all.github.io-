"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8693],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,f=s["".concat(l,".").concat(c)]||s[c]||m[c]||o;return n?a.createElement(f,p(p({ref:e},d),{},{components:n})):a.createElement(f,p({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[s]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2323:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"8. Component - InputPath/OutputPath",description:"",sidebar_position:8,contributors:["Jongseob Jeon","SeungTae Kim"]},p=void 0,i={unversionedId:"kubeflow/advanced-component",id:"version-1.0/kubeflow/advanced-component",title:"8. Component - InputPath/OutputPath",description:"",source:"@site/versioned_docs/version-1.0/kubeflow/advanced-component.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-component",permalink:"/docs/1.0/kubeflow/advanced-component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/advanced-component.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 1\uc77c",sidebarPosition:8,frontMatter:{title:"8. Component - InputPath/OutputPath",description:"",sidebar_position:8,contributors:["Jongseob Jeon","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"7. Pipeline - Run",permalink:"/docs/1.0/kubeflow/basic-run"},next:{title:"9. Component - Environment",permalink:"/docs/1.0/kubeflow/advanced-environment"}},l={},u=[{value:"Complex Outputs",id:"complex-outputs",level:2},{value:"Component Contents",id:"component-contents",level:2},{value:"Component Wrapper",id:"component-wrapper",level:2},{value:"Define a standalone Python function",id:"define-a-standalone-python-function",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"Rule to use InputPath/OutputPath",id:"rule-to-use-inputpathoutputpath",level:2},{value:"Load Data Component",id:"load-data-component",level:3},{value:"Write Pipeline",id:"write-pipeline",level:3}],d={toc:u},s="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"complex-outputs"},"Complex Outputs"),(0,r.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/kubeflow/kubeflow-concepts#component-contents"},"Kubeflow Concepts")," \uc608\uc2dc\ub85c \ub098\uc654\ub358 \ucf54\ub4dc\ub97c \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc791\uc131\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"component-contents"},"Component Contents"),(0,r.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/kubeflow/kubeflow-concepts#component-contents"},"Kubeflow Concepts"),"\uc5d0\uc11c \uc0ac\uc6a9\ud588\ub358 \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import dill\nimport pandas as pd\n\nfrom sklearn.svm import SVC\n\ntrain_data = pd.read_csv(train_data_path)\ntrain_target = pd.read_csv(train_target_path)\n\nclf = SVC(kernel=kernel)\nclf.fit(train_data, train_target)\n\nwith open(model_path, mode="wb") as file_writer:\n    dill.dump(clf, file_writer)\n')),(0,r.kt)("h2",{id:"component-wrapper"},"Component Wrapper"),(0,r.kt)("h3",{id:"define-a-standalone-python-function"},"Define a standalone Python function"),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\uc5d0 \ud544\uc694\ud55c Config\ub4e4\uacfc \ud568\uaed8 \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def train_from_csv(\n    train_data_path: str,\n    train_target_path: str,\n    model_path: str,\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../kubeflow/basic-component"},"Basic Usage Component"),"\uc5d0\uc11c \uc124\uba85\ud560 \ub54c \uc785\ub825\uacfc \ucd9c\ub825\uc5d0 \ub300\ud55c \ud0c0\uc785 \ud78c\ud2b8\ub97c \uc801\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc124\uba85 \ud588\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub9cc\uc57d json\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ubcf8 \ud0c0\uc785\uc774 \uc544\ub2cc dataframe, model\uc640 \uac19\uc774 \ubcf5\uc7a1\ud55c \uac1d\uccb4\ub4e4\uc740 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?"),(0,r.kt)("p",null,"\ud30c\uc774\uc36c\uc5d0\uc11c \ud568\uc218\uac04\uc5d0 \uac12\uc744 \uc804\ub2ec\ud560 \ub54c, \uac1d\uccb4\ub97c \ubc18\ud658\ud574\ub3c4 \uadf8 \uac12\uc774 \ud638\uc2a4\ud2b8\uc758 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ub2e4\uc74c \ud568\uc218\uc5d0\uc11c\ub3c4 \uac19\uc740 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc kubeflow\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \uac01\uac01 \ucee8\ud14c\uc774\ub108 \uc704\uc5d0\uc11c \uc11c\ub85c \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc989, \uac19\uc740 \uba54\ubaa8\ub9ac\ub97c \uacf5\uc720\ud558\uace0 \uc788\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \ubcf4\ud1b5\uc758 \ud30c\uc774\uc36c \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uacfc \uac19\uc774 \uac1d\uccb4\ub97c \uc804\ub2ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc5d0 \ub118\uaca8 \uc904 \uc218 \uc788\ub294 \uc815\ubcf4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \uc73c\ub85c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c Model\uc774\ub098 DataFrame\uacfc \uac19\uc774 json \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ud560 \uc218 \uc5c6\ub294 \ud0c0\uc785\uc758 \uac1d\uccb4\ub294 \ub2e4\ub978 \ubc29\ubc95\uc744 \ud1b5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Kubeflow\uc5d0\uc11c\ub294 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 json-serializable \ud558\uc9c0 \uc54a\uc740 \ud0c0\uc785\uc758 \uac1d\uccb4\ub294 \uba54\ubaa8\ub9ac \ub300\uc2e0 \ud30c\uc77c\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud55c \ub4a4, \uadf8 \ud30c\uc77c\uc744 \uc774\uc6a9\ud574 \uc815\ubcf4\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4. \uc800\uc7a5\ub41c \ud30c\uc77c\uc758 \uacbd\ub85c\ub294 str\uc774\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub7f0\ub370 kubeflow\uc5d0\uc11c\ub294 minio\ub97c \uc774\uc6a9\ud574 \ud30c\uc77c\uc744 \uc800\uc7a5\ud558\ub294\ub370 \uc720\uc800\ub294 \uc2e4\ud589\uc744 \ud558\uae30 \uc804\uc5d0\ub294 \uac01 \ud30c\uc77c\uc758 \uacbd\ub85c\ub97c \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c kubeflow\uc5d0\uc11c\ub294 \uc785\ub825\uacfc \ucd9c\ub825\uc758 \uacbd\ub85c\uc640 \uad00\ub828\ub41c \ub9e4\uc9c1\uc744 \uc81c\uacf5\ud558\ub294\ub370 \ubc14\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"InputPath"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputPath")," \uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"InputPath"),"\ub294 \ub2e8\uc5b4 \uadf8\ub300\ub85c \uc785\ub825 \uacbd\ub85c\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputPath")," \ub294 \ub2e8\uc5b4 \uadf8\ub300\ub85c \ucd9c\ub825 \uacbd\ub85c\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uace0 \ubc18\ud658\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"data_path: OutputPath()"),"\ub97c argument\ub85c \ub9cc\ub4ed\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ub370\uc774\ud130\ub97c \ubc1b\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"data_path: InputPath()"),"\uc744 argument\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ub9cc\ub4e0 \ud6c4 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc11c\ub85c \uc5f0\uacb0\uc744 \ud558\uba74 kubeflow\uc5d0\uc11c \ud544\uc694\ud55c \uacbd\ub85c\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud6c4 \uc785\ub825\ud574 \uc8fc\uae30 \ub54c\ubb38\uc5d0 \ub354 \uc774\uc0c1 \uc720\uc800\ub294 \uacbd\ub85c\ub97c \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uace0 \ucef4\ud3ec\ub10c\ud2b8\uac04\uc758 \uad00\uacc4\ub9cc \uc2e0\uacbd\uc4f0\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c \uc774 \ub0b4\uc6a9\uc744 \ubc14\ud0d5\uc73c\ub85c \ub2e4\uc2dc \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub97c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath\n\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,r.kt)("p",null,"InputPath\ub098 OutputPath\ub294 string\uc744 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 string\uc740 \uc785\ub825 \ub610\ub294 \ucd9c\ub825\ud558\ub824\uace0 \ud558\ub294 \ud30c\uc77c\uc758 \ud3ec\ub9f7\uc785\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\ub2e4\uace0 \uaf2d \uc774 \ud3ec\ub9f7\uc73c\ub85c \ud30c\uc77c \ud615\ud0dc\ub85c \uc800\uc7a5\uc774 \uac15\uc81c\ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub2e4\ub9cc \ud30c\uc774\ud504\ub77c\uc778\uc744 \ucef4\ud30c\uc77c\ud560 \ub54c \ucd5c\uc18c\ud55c\uc758 \ud0c0\uc785 \uccb4\ud06c\ub97c \uc704\ud55c \ub3c4\uc6b0\ubbf8 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \ud30c\uc77c \ud3ec\ub9f7\uc774 \uace0\uc815\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc785\ub825\ud558\uc9c0 \uc54a\uc73c\uba74 \ub429\ub2c8\ub2e4 (\ud0c0\uc785 \ud78c\ud2b8 \uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," \uc640 \uac19\uc740 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4)."),(0,r.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,r.kt)("p",null,"\uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c kubeflow\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud3ec\ub9f7\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n')),(0,r.kt)("h2",{id:"rule-to-use-inputpathoutputpath"},"Rule to use InputPath/OutputPath"),(0,r.kt)("p",null,"InputPath\ub098 OutputPath argument\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uc791\uc131\ud560 \ub54c \uc9c0\ucf1c\uc57c\ud558\ub294 \uaddc\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"load-data-component"},"Load Data Component"),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub370\uc774\ud130\uac00 \ud544\uc694\ud558\ubbc0\ub85c \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef load_iris_data(\n    data_path: OutputPath("csv"),\n    target_path: OutputPath("csv"),\n):\n    import pandas as pd\n    from sklearn.datasets import load_iris\n\n    iris = load_iris()\n\n    data = pd.DataFrame(iris["data"], columns=iris["feature_names"])\n    target = pd.DataFrame(iris["target"], columns=["target"])\n\n    data.to_csv(data_path, index=False)\n    target.to_csv(target_path, index=False)\n')),(0,r.kt)("h3",{id:"write-pipeline"},"Write Pipeline"),(0,r.kt)("p",null,"\uc774\uc81c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud574 \ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.dsl import pipeline\n\n\n@pipeline(name="complex_pipeline")\ndef complex_pipeline(kernel: str):\n    iris_data = load_iris_data()\n    model = train_from_csv(\n        train_data=iris_data.outputs["data"],\n        train_target=iris_data.outputs["target"],\n        kernel=kernel,\n    )\n')),(0,r.kt)("p",null,"\ud55c \uac00\uc9c0 \uc774\uc0c1\ud55c \uc810\uc744 \ud655\uc778\ud558\uc168\ub098\uc694?",(0,r.kt)("br",{parentName:"p"}),"\n","\ubc14\ub85c \uc785\ub825\uacfc \ucd9c\ub825\uc5d0\uc11c \ubc1b\ub294 argument\uc911 \uacbd\ub85c\uc640 \uad00\ub828\ub41c \uac83\ub4e4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"_path")," \uc811\ubbf8\uc0ac\uac00 \ubaa8\ub450 \uc0ac\ub77c\uc84c\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'iris_data.outputs["data_path"]')," \uac00 \uc544\ub2cc ",(0,r.kt)("inlineCode",{parentName:"p"},'iris_data.outputs["data"]')," \uc73c\ub85c \uc811\uadfc\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 kubeflow\uc5d0\uc11c \uc815\ud55c \ubc95\uce59\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"InputPath")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputPath")," \uc73c\ub85c \uc0dd\uc131\ub41c \uacbd\ub85c\ub4e4\uc740 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc811\uadfc\ud560 \ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"_path")," \uc811\ubbf8\uc0ac\ub97c \uc0dd\ub7b5\ud558\uc5ec \uc811\uadfc\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\ub9cc \ubc29\uae08 \uc791\uc131\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc5c5\ub85c\ub4dc\ud560 \uacbd\uc6b0 \uc2e4\ud589\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc774\uc720\ub294 \ub2e4\uc74c \ud398\uc774\uc9c0\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);