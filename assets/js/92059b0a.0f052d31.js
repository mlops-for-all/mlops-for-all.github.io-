"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5658],{3905:(n,e,r)=>{r.d(e,{Zo:()=>_,kt:()=>b});var t=r(7294);function p(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){p(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,p=function(n,e){if(null==n)return{};var r,t,p={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(p[r]=n[r]);return p}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(p[r]=n[r])}return p}var s=t.createContext({}),m=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):u(u({},e),n)),r},_=function(n){var e=m(n.components);return t.createElement(s.Provider,{value:e},n.children)},o="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,p=n.mdxType,a=n.originalType,s=n.parentName,_=i(n,["components","mdxType","originalType","parentName"]),o=m(r),d=p,b=o["".concat(s,".").concat(d)]||o[d]||l[d]||a;return r?t.createElement(b,u(u({ref:e},_),{},{components:r})):t.createElement(b,u({ref:e},_))}));function b(n,e){var r=arguments,p=e&&e.mdxType;if("string"==typeof n||p){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[o]="string"==typeof n?n:p,u[1]=i;for(var m=2;m<a;m++)u[m]=r[m];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8719:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var t=r(7462),p=(r(7294),r(3905));const a={title:"10. Pipeline - Setting",description:"",sidebar_position:10,contributors:["Jongseob Jeon"]},u=void 0,i={unversionedId:"kubeflow/advanced-pipeline",id:"kubeflow/advanced-pipeline",title:"10. Pipeline - Setting",description:"",source:"@site/docs/kubeflow/advanced-pipeline.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-pipeline",permalink:"/docs/kubeflow/advanced-pipeline",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/advanced-pipeline.md",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 1\uc77c",sidebarPosition:10,frontMatter:{title:"10. Pipeline - Setting",description:"",sidebar_position:10,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"9. Component - Environment",permalink:"/docs/kubeflow/advanced-environment"},next:{title:"11. Pipeline - Run Result",permalink:"/docs/kubeflow/advanced-run"}},s={},m=[{value:"Pipeline Setting",id:"pipeline-setting",level:2},{value:"Display Name",id:"display-name",level:2},{value:"set_display_name",id:"set_display_name",level:3},{value:"UI in Kubeflow",id:"ui-in-kubeflow",level:3},{value:"Resources",id:"resources",level:2},{value:"GPU",id:"gpu",level:3},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3}],_={toc:m},o="wrapper";function l(n){let{components:e,...a}=n;return(0,p.kt)(o,(0,t.Z)({},_,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pipeline-setting"},"Pipeline Setting"),(0,p.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uac12\ub4e4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"display-name"},"Display Name"),(0,p.kt)("p",null,"\uc0dd\uc131\ub41c \ud30c\uc774\ud504\ub77c\uc778 \ub0b4\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub450 \uac1c\uc758 \uc774\ub984\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"task_name: \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \uc791\uc131\ud55c \ud568\uc218 \uc774\ub984"),(0,p.kt)("li",{parentName:"ul"},"display_name: kubeflow UI\uc0c1\uc5d0 \ubcf4\uc774\ub294 \uc774\ub984")),(0,p.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0 \ub450 \ucef4\ud3ec\ub10c\ud2b8 \ubaa8\ub450 Print and return number\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\uc11c \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 1\ubc88\uc778\uc9c0 2\ubc88\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"run-7",src:r(1816).Z,width:"3408",height:"2156"})),(0,p.kt)("h3",{id:"set_display_name"},"set_display_name"),(0,p.kt)("p",null,"\uc774\ub97c \uc704\ud55c \uac83\uc774 \ubc14\ub85c display_name \uc785\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc124\uc815\ud558\ub294 \ubc29\ubc95\uc740 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"set_display_name")," ",(0,p.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html#kfp.dsl.ContainerOp.set_display_name"},"attribute"),"\ub97c \uc774\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("p",null,"\uc774 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud574\uc11c \ub098\uc628 ",(0,p.kt)("inlineCode",{parentName:"p"},"example_pipeline.yaml"),"\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("details",null,(0,p.kt)("summary",null,"example_pipeline.yaml"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: example-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9, pipelines.kubeflow.org/pipeline_compilation_time: \'2021-12-09T18:11:43.193190\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"inputs": [{"name": "number_1", "type":\n      "Integer"}, {"name": "number_2", "type": "Integer"}], "name": "example_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9}\nspec:\n  entrypoint: example-pipeline\n  templates:\n  - name: example-pipeline\n    inputs:\n      parameters:\n      - {name: number_1}\n      - {name: number_2}\n    dag:\n      tasks:\n      - name: print-and-return-number\n        template: print-and-return-number\n        arguments:\n          parameters:\n          - {name: number_1, value: \'{{inputs.parameters.number_1}}\'}\n      - name: print-and-return-number-2\n        template: print-and-return-number-2\n        arguments:\n          parameters:\n          - {name: number_2, value: \'{{inputs.parameters.number_2}}\'}\n      - name: sum-and-print-numbers\n        template: sum-and-print-numbers\n        dependencies: [print-and-return-number, print-and-return-number-2]\n        arguments:\n          parameters:\n          - {name: print-and-return-number-2-Output, value: \'{{tasks.print-and-return-number-2.outputs.parameters.print-and-return-number-2-Output}}\'}\n          - {name: print-and-return-number-Output, value: \'{{tasks.print-and-return-number.outputs.parameters.print-and-return-number-Output}}\'}\n  - name: print-and-return-number\n    container:\n      args: [--number, \'{{inputs.parameters.number_1}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(\n                    str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_1}\n    outputs:\n      parameters:\n      - name: print-and-return-number-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is number 1, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number", {"inputValue": "number"}, "----output-paths",\n          {"outputPath": "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(\\n            str(int_value),\n          str(type(int_value))))\\n    return str(int_value)\\n\\nimport argparse\\n_parser\n          = argparse.ArgumentParser(prog=\'\'Print and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_1}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  - name: print-and-return-number-2\n    container:\n      args: [--number, \'{{inputs.parameters.number_2}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(\n                    str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_2}\n    outputs:\n      parameters:\n      - name: print-and-return-number-2-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-2-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is number 2, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number", {"inputValue": "number"}, "----output-paths",\n          {"outputPath": "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(\\n            str(int_value),\n          str(type(int_value))))\\n    return str(int_value)\\n\\nimport argparse\\n_parser\n          = argparse.ArgumentParser(prog=\'\'Print and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_2}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: print-and-return-number-2-Output}\n      - {name: print-and-return-number-Output}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is sum of number\n          1 and number 2, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number-1", {"inputValue": "number_1"}, "--number-2",\n          {"inputValue": "number_2"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def sum_and_print_numbers(number_1, number_2):\\n    print(number_1 + number_2)\\n\\nimport\n          argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Sum and print numbers\'\',\n          description=\'\'\'\')\\n_parser.add_argument(\\"--number-1\\", dest=\\"number_1\\",\n          type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"--number-2\\",\n          dest=\\"number_2\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parsed_args\n          = vars(_parser.parse_args())\\n\\n_outputs = sum_and_print_numbers(**_parsed_args)\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number_1", "type": "Integer"},\n          {"name": "number_2", "type": "Integer"}], "name": "Sum and print numbers"}\',\n        pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number_1":\n          "{{inputs.parameters.print-and-return-number-Output}}", "number_2": "{{inputs.parameters.print-and-return-number-2-Output}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  arguments:\n    parameters:\n    - {name: number_1}\n    - {name: number_2}\n  serviceAccountName: pipeline-runner\n')))),(0,p.kt)("p",null,"\uc774 \uc804\uc758 \ud30c\uc77c\uacfc \ube44\uad50\ud558\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"pipelines.kubeflow.org/task_display_name")," key\uac00 \uc0c8\ub85c \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"ui-in-kubeflow"},"UI in Kubeflow"),(0,p.kt)("p",null,"\uc704\uc5d0\uc11c \ub9cc\ub4e0 \ud30c\uc77c\uc744 \uc774\uc6a9\ud574 \uc774\uc804\uc5d0 \uc0dd\uc131\ud55c ",(0,p.kt)("a",{parentName:"p",href:"/docs/kubeflow/basic-pipeline-upload#upload-pipeline-version"},"\ud30c\uc774\ud504\ub77c\uc778"),"\uc758 \ubc84\uc804\uc744 \uc62c\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"adv-pipeline-0.png",src:r(9072).Z,width:"3360",height:"2100"})),(0,p.kt)("p",null,"\uadf8\ub7ec\uba74 \uc704\uc640 \uac19\uc774 \uc124\uc815\ud55c \uc774\ub984\uc774 \ub178\ucd9c\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"resources"},"Resources"),(0,p.kt)("h3",{id:"gpu"},"GPU"),(0,p.kt)("p",null,"\ud2b9\ubcc4\ud55c \uc124\uc815\uc774 \uc5c6\ub2e4\uba74 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud30c\ub4dc(pod)\ub85c \uc2e4\ud589\ud560 \ub54c, \uae30\ubcf8 \ub9ac\uc18c\uc2a4 \uc2a4\ud399\uc73c\ub85c \uc2e4\ud589\ud558\uac8c \ub429\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d GPU\ub97c \uc0ac\uc6a9\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5\ud574\uc57c \ud560 \ub54c \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc0c1\uc5d0\uc11c GPU\ub97c \ud560\ub2f9\ubc1b\uc9c0 \ubabb\ud574 \uc81c\ub300\ub85c \ud559\uc2b5\uc774 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \uc704\ud574 ",(0,p.kt)("inlineCode",{parentName:"p"},"set_gpu_limit()")," ",(0,p.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.UserContainer.set_gpu_limit"},"attribute"),"\uc744 \uc774\uc6a9\ud574 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1)\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("p",null,"\uc704\uc758 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uba74 \uc0dd\uc131\ub41c \ud30c\uc77c\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"sum-and-print-numbers"),"\ub97c \uc790\uc138\ud788 \ubcf4\uba74 resources\uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"{nvidia.com/gpu: 1}")," \ub3c4 \ucd94\uac00\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \ud1b5\ud574 GPU\ub97c \ud560\ub2f9\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n      resources:\n        limits: {nvidia.com/gpu: 1}\n')),(0,p.kt)("h3",{id:"cpu"},"CPU"),(0,p.kt)("p",null,"cpu\uc758 \uac1c\uc218\ub97c \uc815\ud558\uae30 \uc704\ud574\uc11c \uc774\uc6a9\ud558\ub294 \ud568\uc218\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},".set_cpu_limit()")," ",(0,p.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.Sidecar.set_cpu_limit"},"attribute"),"\uc744 \uc774\uc6a9\ud574 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","gpu\uc640\ub294 \ub2e4\ub978 \uc810\uc740 int\uac00 \uc544\ub2cc string\uc73c\ub85c \uc785\ub825\ud574\uc57c \ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1).set_cpu_limit("16")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("p",null,"\ubc14\ub010 \ubd80\ubd84\ub9cc \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"      resources:\n        limits: {nvidia.com/gpu: 1, cpu: '16'}\n")),(0,p.kt)("h3",{id:"memory"},"Memory"),(0,p.kt)("p",null,"\uba54\ubaa8\ub9ac\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},".set_memory_limit()")," ",(0,p.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.Sidecar.set_memory_limit"},"attribute"),"\uc744 \uc774\uc6a9\ud574 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1).set_memory_limit("1G")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n\n')),(0,p.kt)("p",null,"\ubc14\ub010 \ubd80\ubd84\ub9cc \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"      resources:\n        limits: {nvidia.com/gpu: 1, memory: 1G}\n")))}l.isMDXComponent=!0},9072:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/adv-pipeline-0-16dd5e9fed2f2d5c4a1d1b683a7a144d.png"},1816:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/run-7-53ba486fe934b320289bf98ddbf9a4b6.png"}}]);