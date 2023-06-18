"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6680],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>c});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},p=Object.keys(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),s=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=s(n.components);return a.createElement(o.Provider,{value:e},n.children)},d="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,p=n.originalType,o=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),d=s(t),u=r,c=d["".concat(o,".").concat(u)]||d[u]||_[u]||p;return t?a.createElement(c,i(i({ref:e},m),{},{components:t})):a.createElement(c,i({ref:e},m))}));function c(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var p=t.length,i=new Array(p);i[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l[d]="string"==typeof n?n:r,i[1]=l;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},201:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>_,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const p={title:"9. Component - Environment",description:"",sidebar_position:9,contributors:["Jongseob Jeon"]},i=void 0,l={unversionedId:"kubeflow/advanced-environment",id:"kubeflow/advanced-environment",title:"9. Component - Environment",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/advanced-environment.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-environment",permalink:"/en/docs/kubeflow/advanced-environment",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/advanced-environment.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1687104512,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:9,frontMatter:{title:"9. Component - Environment",description:"",sidebar_position:9,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"8. Component - InputPath/OutputPath",permalink:"/en/docs/kubeflow/advanced-component"},next:{title:"10. Pipeline - Setting",permalink:"/en/docs/kubeflow/advanced-pipeline"}},o={},s=[{value:"Component Environment",id:"component-environment",level:2},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"\ud328\ud0a4\uc9c0 \ucd94\uac00 \ubc29\ubc95",id:"\ud328\ud0a4\uc9c0-\ucd94\uac00-\ubc29\ubc95",level:2},{value:"1. base_image",id:"1-base_image",level:3},{value:"2. packages_to_install",id:"2-packages_to_install",level:3}],m={toc:s},d="wrapper";function _(n){let{components:e,...t}=n;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"component-environment"},"Component Environment"),(0,r.kt)("p",null,"\uc55e\uc11c  ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/advanced-component"},"8. Component - InputPath/OutputPath"),"\uc5d0\uc11c \uc791\uc131\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\ud558\uba74 \uc2e4\ud328\ud558\uac8c \ub429\ub2c8\ub2e4. \uc65c \uc2e4\ud328\ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uace0 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub420 \uc218 \uc788\ub3c4\ub85d \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/advanced-component#convert-to-kubeflow-format"},"\uc55e\uc5d0\uc11c \uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8"),"\ub97c yaml\ud30c\uc77c\ub85c \ubcc0\ud658\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"\uc704\uc758 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," \ud30c\uc77c\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: model, type: dill}\n- {name: kernel, type: String}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --model\n    - {inputPath: model}\n    - --kernel\n    - {inputValue: kernel}\n')),(0,r.kt)("p",null,"\uc55e\uc11c ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/basic-component#convert-to-kubeflow-format"},"Basic Usage Component"),"\uc5d0\uc11c \uc124\uba85\ud55c \ub0b4\uc6a9\uc5d0 \ub530\ub974\uba74 \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704\uc5d0\uc11c \uc0dd\uc131\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud558\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8 \uc774\uc720\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\uac00 \uc2e4\ud589\ub418\ub294 \ubc29\uc2dd\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","Kubeflow\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub294 \uac01\uac01 \ub3c5\ub9bd\ub41c \ucee8\ud14c\uc774\ub108 \uc704\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\uc138\ud788 \ubcf4\uba74 \uc0dd\uc131\ub41c \ub9cc\ub4e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," \uc5d0\uc11c \uc815\ud574\uc9c4 \uc774\ubbf8\uc9c0\ub294  ",(0,r.kt)("inlineCode",{parentName:"p"},"image: python:3.7")," \uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c \uc5b4\ub5a4 \uc774\uc720 \ub54c\ubb38\uc5d0 \uc2e4\ud589\uc774 \uc548 \ub418\ub294\uc9c0 \ub208\uce58\ucc44\uc2e0 \ubd84\ub4e4\ub3c4 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"python:3.7")," \uc774\ubbf8\uc9c0\uc5d0\ub294 \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\uace0\uc790 \ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"dill"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sklearn")," \uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\ubbc0\ub85c \uc2e4\ud589\ud560 \ub54c \ud574\ub2f9 \ud328\ud0a4\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc5d0\ub7ec\uc640 \ud568\uaed8 \uc2e4\ud589\uc774 \uc548 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7fc \uc5b4\ub5bb\uac8c \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc744\uae4c\uc694?"),(0,r.kt)("h2",{id:"\ud328\ud0a4\uc9c0-\ucd94\uac00-\ubc29\ubc95"},"\ud328\ud0a4\uc9c0 \ucd94\uac00 \ubc29\ubc95"),(0,r.kt)("p",null,"Kubeflow\ub97c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \ud1b5\ud574 \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"base_image")," \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"package_to_install")," \uc0ac\uc6a9")),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \ub54c \uc0ac\uc6a9\ud588\ub358 \ud568\uc218 ",(0,r.kt)("inlineCode",{parentName:"p"},"create_component_from_func")," \uac00 \uc5b4\ub5a4 argument\ub4e4\uc744 \ubc1b\uc744 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"def create_component_from_func(\n    func: Callable,\n    output_component_file: Optional[str] = None,\n    base_image: Optional[str] = None,\n    packages_to_install: List[str] = None,\n    annotations: Optional[Mapping[str, str]] = None,\n):\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func"),": \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub9cc\ub4e4 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base_image"),": \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\uac00 \uc2e4\ud589\ud560 \uc774\ubbf8\uc9c0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages_to_install"),": \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc11c \ucd94\uac00\ub85c \uc124\uce58\ud574\uc57c \ud558\ub294 \ud328\ud0a4\uc9c0")),(0,r.kt)("h3",{id:"1-base_image"},"1. base_image"),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \uc21c\uc11c\ub97c \uc880 \ub354 \uc790\uc138\ud788 \ub4e4\uc5ec\ub2e4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull base_image")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install packages_to_install")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"\ub9cc\uc57d \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ud558\ub294 base_image\uc5d0 \ud328\ud0a4\uc9c0\ub4e4\uc774 \uc804\ubd80 \uc124\uce58\ub418\uc5b4 \uc788\ub2e4\uba74 \ucd94\uac00\uc801\uc778 \ud328\ud0a4\uc9c0 \uc124\uce58 \uc5c6\uc774 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 Dockerfile\uc744 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM python:3.7\n\nRUN pip install dill pandas scikit-learn\n")),(0,r.kt)("p",null,"\uc704\uc758 Dockerfile\uc744 \uc774\uc6a9\ud574 \uc774\ubbf8\uc9c0\ub97c \ube4c\ub4dc\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc2e4\uc2b5\uc5d0\uc11c \uc0ac\uc6a9\ud574\ubcfc \ub3c4\ucee4 \ud5c8\ube0c\ub294 ghcr\uc785\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uac01\uc790 \ud658\uacbd\uc5d0 \ub9de\ucd94\uc5b4\uc11c \ub3c4\ucee4 \ud5c8\ube0c\ub97c \uc120\ud0dd \ud6c4 \uc5c5\ub85c\ub4dc\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker build . -f Dockerfile -t ghcr.io/mlops-for-all/base-image\ndocker push ghcr.io/mlops-for-all/base-image\n")),(0,r.kt)("p",null,"\uc774\uc81c base_image\ub97c \uc785\ub825\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n@partial(\n    create_component_from_func,\n    base_image="ghcr.io/mlops-for-all/base-image:latest",\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"\uc774\uc81c \uc0dd\uc131\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucef4\ud30c\uc77c\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: kernel, type: String}\noutputs:\n- {name: model, type: dill}\nimplementation:\n  container:\n    image: ghcr.io/mlops-for-all/base-image:latest\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def _make_parent_dirs_and_return_path(file_path: str):\n          import os\n          os.makedirs(os.path.dirname(file_path), exist_ok=True)\n          return file_path\n\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --kernel\n    - {inputValue: kernel}\n    - --model\n    - {outputPath: model}\n')),(0,r.kt)("p",null,"base_image\uac00 \uc6b0\ub9ac\uac00 \uc124\uc815\ud55c \uac12\uc73c\ub85c \ubc14\ub010 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"2-packages_to_install"},"2. packages_to_install"),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \ud328\ud0a4\uc9c0\uac00 \ucd94\uac00\ub420 \ub54c\ub9c8\ub2e4 docker \uc774\ubbf8\uc9c0\ub97c \uacc4\uc18d\ud574\uc11c \uc0c8\ub85c \uc0dd\uc131\ud558\ub294 \uc791\uc5c5\uc740 \ub9ce\uc740 \uc2dc\uac04\uc774 \uc18c\uc694\ub429\ub2c8\ub2e4.\n\uc774 \ub54c, ",(0,r.kt)("inlineCode",{parentName:"p"},"packages_to_install")," argument \ub97c \uc0ac\uc6a9\ud558\uba74 \ud328\ud0a4\uc9c0\ub97c \ucee8\ud14c\uc774\ub108\uc5d0 \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill==0.3.4", "pandas==1.3.4", "scikit-learn==1.0.1"],\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: kernel, type: String}\noutputs:\n- {name: model, type: dill}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -c\n    - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n      \'dill==0.3.4\' \'pandas==1.3.4\' \'scikit-learn==1.0.1\' || PIP_DISABLE_PIP_VERSION_CHECK=1\n      python3 -m pip install --quiet --no-warn-script-location \'dill==0.3.4\' \'pandas==1.3.4\'\n      \'scikit-learn==1.0.1\' --user) && "$0" "$@"\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def _make_parent_dirs_and_return_path(file_path: str):\n          import os\n          os.makedirs(os.path.dirname(file_path), exist_ok=True)\n          return file_path\n\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --kernel\n    - {inputValue: kernel}\n    - --model\n    - {outputPath: model}\n')),(0,r.kt)("p",null,"\uc704\uc5d0 \uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \uc21c\uc11c\ub97c \uc880 \ub354 \uc790\uc138\ud788 \ub4e4\uc5ec\ub2e4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install dill==0.3.4 pandas==1.3.4 scikit-learn==1.0.1")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"\uc0dd\uc131\ub41c yaml \ud30c\uc77c\uc744 \uc790\uc138\ud788 \ubcf4\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 \uc904\uc774 \uc790\ub3d9\uc73c\ub85c \ucd94\uac00\ub418\uc5b4 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub418\uae30 \ub54c\ubb38\uc5d0 \uc624\ub958 \uc5c6\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"    command:\n    - sh\n    - -c\n    - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n      'dill==0.3.4' 'pandas==1.3.4' 'scikit-learn==1.0.1' || PIP_DISABLE_PIP_VERSION_CHECK=1\n      python3 -m pip install --quiet --no-warn-script-location 'dill==0.3.4' 'pandas==1.3.4'\n      'scikit-learn==1.0.1' --user) && \"$0\" \"$@\"\n")))}_.isMDXComponent=!0}}]);