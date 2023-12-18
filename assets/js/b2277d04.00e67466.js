"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6746],{3905:(n,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>b});var t=r(7294);function p(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,p=function(n,e){if(null==n)return{};var r,t,p={},u=Object.keys(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||(p[r]=n[r]);return p}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(p[r]=n[r])}return p}var s=t.createContext({}),m=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},o=function(n){var e=m(n.components);return t.createElement(s.Provider,{value:e},n.children)},_="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,p=n.mdxType,u=n.originalType,s=n.parentName,o=i(n,["components","mdxType","originalType","parentName"]),_=m(r),d=p,b=_["".concat(s,".").concat(d)]||_[d]||l[d]||u;return r?t.createElement(b,a(a({ref:e},o),{},{components:r})):t.createElement(b,a({ref:e},o))}));function b(n,e){var r=arguments,p=e&&e.mdxType;if("string"==typeof n||p){var u=r.length,a=new Array(u);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[_]="string"==typeof n?n:p,a[1]=i;for(var m=2;m<u;m++)a[m]=r[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8526:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>i,toc:()=>m});var t=r(7462),p=(r(7294),r(3905));const u={title:"5. Pipeline - Write",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},a=void 0,i={unversionedId:"kubeflow/basic-pipeline",id:"kubeflow/basic-pipeline",title:"5. Pipeline - Write",description:"",source:"@site/docs/kubeflow/basic-pipeline.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-pipeline",permalink:"/docs/kubeflow/basic-pipeline",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/basic-pipeline.md",tags:[],version:"current",lastUpdatedBy:"Minwook Je",lastUpdatedAt:1702865124,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 18\uc77c",sidebarPosition:5,frontMatter:{title:"5. Pipeline - Write",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"4. Component - Write",permalink:"/docs/kubeflow/basic-component"},next:{title:"6. Pipeline - Upload",permalink:"/docs/kubeflow/basic-pipeline-upload"}},s={},m=[{value:"Pipeline",id:"pipeline",level:2},{value:"Component Set",id:"component-set",level:2},{value:"Component Order",id:"component-order",level:2},{value:"Define Order",id:"define-order",level:3},{value:"Single Output",id:"single-output",level:3},{value:"Multi Output",id:"multi-output",level:3},{value:"Write to python code",id:"write-to-python-code",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:2},{value:"Conclusion",id:"conclusion",level:2}],o={toc:m},_="wrapper";function l(n){let{components:e,...u}=n;return(0,p.kt)(_,(0,t.Z)({},o,u,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pipeline"},"Pipeline"),(0,p.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub294 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uace0 \ud30c\uc774\ud504\ub77c\uc778\uc758 \uad6c\uc131\uc694\uc18c\ub85c\uc368 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud574 \ubcf4\ub824\uba74 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc9d1\ud569\uacfc \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc2e4\ud589 \uc21c\uc11c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uc22b\uc790\ub97c \uc785\ub825\ubc1b\uace0 \ucd9c\ub825\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ub450 \uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130 \uc22b\uc790\ub97c \ubc1b\uc544\uc11c \ud569\uc744 \ucd9c\ub825\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc788\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"component-set"},"Component Set"),(0,p.kt)("p",null,"\uc6b0\uc120 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"print_and_return_number")),(0,p.kt)("p",{parentName:"li"},"\uc785\ub825\ubc1b\uc740 \uc22b\uc790\ub97c \ucd9c\ub825\ud558\uace0 \ubc18\ud658\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc785\ub825\ubc1b\uc740 \uac12\uc744 \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 int\ub97c return\uc758 \ud0c0\uc785 \ud78c\ud2b8\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-python"},"@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"sum_and_print_numbers")),(0,p.kt)("p",{parentName:"li"},"\uc785\ub825\ubc1b\uc740 \ub450 \uac1c\uc758 \uc22b\uc790\uc758 \ud569\uc744 \ucd9c\ub825\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774 \ucef4\ud3ec\ub10c\ud2b8 \uc5ed\uc2dc \ub450 \uc22b\uc790\uc758 \ud569\uc744 \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 int\ub97c return\uc758 \ud0c0\uc785 \ud78c\ud2b8\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-python"},"@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int) -> int:\n    sum_num = number_1 + number_2\n    print(sum_num)\n    return sum_num\n")))),(0,p.kt)("h2",{id:"component-order"},"Component Order"),(0,p.kt)("h3",{id:"define-order"},"Define Order"),(0,p.kt)("p",null,"\ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc9d1\ud569\uc744 \ub9cc\ub4e4\uc5c8\uc73c\uba74, \ub2e4\uc74c\uc73c\ub85c\ub294 \uc774\ub4e4\uc758 \uc21c\uc11c\ub97c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c \ub9cc\ub4e4 \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc21c\uc11c\ub97c \uadf8\ub9bc\uc73c\ub85c \ud45c\ud604\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"pipeline-0.png",src:r(3618).Z,width:"586",height:"262"})),(0,p.kt)("h3",{id:"single-output"},"Single Output"),(0,p.kt)("p",null,"\uc774\uc81c \uc774 \uc21c\uc11c\ub97c \ucf54\ub4dc\ub85c \uc62e\uaca8\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.  "),(0,p.kt)("p",null,"\uc6b0\uc120 \uc704\uc758 \uadf8\ub9bc\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"print_and_return_number_1")," \uacfc ",(0,p.kt)("inlineCode",{parentName:"p"},"print_and_return_number_2")," \ub97c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline():\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n")),(0,p.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud558\uace0 \uadf8 \ubc18\ud658 \uac12\uc744 \uac01\uac01 ",(0,p.kt)("inlineCode",{parentName:"p"},"number_1_result")," \uc640 ",(0,p.kt)("inlineCode",{parentName:"p"},"number_2_result")," \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc800\uc7a5\ub41c ",(0,p.kt)("inlineCode",{parentName:"p"},"number_1_result")," \uc758 \ubc18\ud658 \uac12\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"number_1_resulst.output")," \ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"multi-output"},"Multi Output"),(0,p.kt)("p",null,"\uc704\uc758 \uc608\uc2dc\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e8\uc77c \uac12\ub9cc\uc744 \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"output"),"\uc744 \uc774\uc6a9\ud574 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d, \uc5ec\ub7ec \uac1c\uc758 \ubc18\ud658 \uac12\uc774 \uc788\ub2e4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"outputs"),"\uc5d0 \uc800\uc7a5\uc774 \ub418\uba70 dict \ud0c0\uc785\uc774\uae30\uc5d0 key\ub97c \uc774\uc6a9\ud574 \uc6d0\ud558\ub294 \ubc18\ud658 \uac12\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4\uc11c \uc55e\uc5d0\uc11c \uc791\uc131\ud55c \uc5ec\ub7ec \uac1c\ub97c \ubc18\ud658\ud558\ub294 ",(0,p.kt)("a",{parentName:"p",href:"/docs/kubeflow/basic-component#define-a-standalone-python-function"},"\ucef4\ud3ec\ub10c\ud2b8")," \uc758 \uacbd\uc6b0\ub97c \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n",(0,p.kt)("inlineCode",{parentName:"p"},"divde_and_return_number")," \uc758 return \uac12\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"quotient")," \uc640 ",(0,p.kt)("inlineCode",{parentName:"p"},"remainder")," \uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub450 \uac12\uc744 ",(0,p.kt)("inlineCode",{parentName:"p"},"print_and_return_number")," \uc5d0 \uc804\ub2ec\ud558\ub294 \uc608\uc2dc\ub97c \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'def multi_pipeline():\n    divided_result = divde_and_return_number(number)\n    num_1_result = print_and_return_number(divided_result.outputs["quotient"])\n    num_2_result = print_and_return_number(divided_result.outputs["remainder"])\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"divde_and_return_number"),"\uc758 \uacb0\uacfc\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"divided_result"),"\uc5d0 \uc800\uc7a5\ud558\uace0 \uac01\uac01 ",(0,p.kt)("inlineCode",{parentName:"p"},'divided_result.outputs["quotient"]'),", ",(0,p.kt)("inlineCode",{parentName:"p"},'divided_result.outputs["remainder"]'),"\ub85c \uac12\uc744 \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"write-to-python-code"},"Write to python code"),(0,p.kt)("p",null,"\uc774\uc81c \ub2e4\uc2dc \ubcf8\ub860\uc73c\ub85c \ub3cc\uc544\uc640\uc11c \uc774 \ub450 \uac12\uc758 \uacb0\uacfc\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"sum_and_print_numbers")," \uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline():\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n")),(0,p.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud544\uc694\ud55c Config\ub4e4\uc744 \ubaa8\uc544\uc11c \ud30c\uc774\ud504\ub77c\uc778 Config\ub85c \uc815\uc758 \ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline(number_1: int, number_2:int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n")),(0,p.kt)("h2",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,p.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c kubeflow\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4. \ubcc0\ud658\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"kfp.dsl.pipeline")," \ud568\uc218\ub97c \uc774\uc6a9\ud574 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.dsl import pipeline\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n')),(0,p.kt)("p",null,"Kubeflow\uc5d0\uc11c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 yaml \ud615\uc2dd\uc73c\ub85c\ub9cc \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0dd\uc131\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc815\ud574\uc9c4 yaml \ud615\uc2dd\uc73c\ub85c \ucef4\ud30c\uc77c(Compile) \ud574 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\ucef4\ud30c\uc77c\uc740 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud574 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    import kfp\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("h2",{id:"conclusion"},"Conclusion"),(0,p.kt)("p",null,"\uc55e\uc11c \uc124\uba85\ud55c \ub0b4\uc6a9\uc744 \ud55c \ud30c\uc774\uc36c \ucf54\ub4dc\ub85c \ubaa8\uc73c\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("p",null,"\ucef4\ud30c\uc77c\ub41c \uacb0\uacfc\ub97c \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("details",null,(0,p.kt)("summary",null,"example_pipeline.yaml"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: example-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline_compilation_time: \'2021-12-05T13:38:51.566777\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"inputs": [{"name": "number_1", "type":\n      "Integer"}, {"name": "number_2", "type": "Integer"}], "name": "example_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3}\nspec:\n  entrypoint: example-pipeline\n  templates:\n  - name: example-pipeline\n    inputs:\n      parameters:\n      - {name: number_1}\n      - {name: number_2}\n    dag:\n      tasks:\n      - name: print-and-return-number\n        template: print-and-return-number\n        arguments:\n          parameters:\n          - {name: number_1, value: \'{{inputs.parameters.number_1}}\'}\n      - name: print-and-return-number-2\n        template: print-and-return-number-2\n        arguments:\n          parameters:\n          - {name: number_2, value: \'{{inputs.parameters.number_2}}\'}\n      - name: sum-and-print-numbers\n        template: sum-and-print-numbers\n        dependencies: [print-and-return-number, print-and-return-number-2]\n        arguments:\n          parameters:\n          - {name: print-and-return-number-2-Output, value: \'{{tasks.print-and-return-number-2.outputs.parameters.print-and-return-number-2-Output}}\'}\n          - {name: print-and-return-number-Output, value: \'{{tasks.print-and-return-number.outputs.parameters.print-and-return-number-Output}}\'}\n  - name: print-and-return-number\n    container:\n      args: [--number, \'{{inputs.parameters.number_1}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_1}\n    outputs:\n      parameters:\n      - name: print-and-return-number-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number", {"inputValue": "number"}, "----output-paths", {"outputPath":\n          "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(str(int_value), str(type(int_value))))\\n    return\n          str(int_value)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Print\n          and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_1}}"}\'}\n  - name: print-and-return-number-2\n    container:\n      args: [--number, \'{{inputs.parameters.number_2}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_2}\n    outputs:\n      parameters:\n      - name: print-and-return-number-2-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-2-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number", {"inputValue": "number"}, "----output-paths", {"outputPath":\n          "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(str(int_value), str(type(int_value))))\\n    return\n          str(int_value)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Print\n          and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_2}}"}\'}\n  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: print-and-return-number-2-Output}\n      - {name: print-and-return-number-Output}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number-1", {"inputValue": "number_1"}, "--number-2", {"inputValue":\n          "number_2"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          sum_and_print_numbers(number_1, number_2):\\n    print(number_1 + number_2)\\n\\nimport\n          argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Sum and print numbers\'\',\n          description=\'\'\'\')\\n_parser.add_argument(\\"--number-1\\", dest=\\"number_1\\",\n          type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"--number-2\\",\n          dest=\\"number_2\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parsed_args\n          = vars(_parser.parse_args())\\n\\n_outputs = sum_and_print_numbers(**_parsed_args)\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number_1", "type": "Integer"},\n          {"name": "number_2", "type": "Integer"}], "name": "Sum and print numbers"}\',\n        pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number_1":\n          "{{inputs.parameters.print-and-return-number-Output}}", "number_2": "{{inputs.parameters.print-and-return-number-2-Output}}"}\'}\n  arguments:\n    parameters:\n    - {name: number_1}\n    - {name: number_2}\n  serviceAccountName: pipeline-runner\n'))))}l.isMDXComponent=!0},3618:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/pipeline-0-c62220ce65ed4a187b70947bccb0f1e6.png"}}]);