"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4600],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},_="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),_=m(t),d=a,b=_["".concat(s,".").concat(d)]||_[d]||l[d]||p;return t?r.createElement(b,u(u({ref:n},o),{},{components:t})):r.createElement(b,u({ref:n},o))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,u=new Array(p);u[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[_]="string"==typeof e?e:a,u[1]=i;for(var m=2;m<p;m++)u[m]=t[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const p={title:"10. Pipeline - Setting",description:"",sidebar_position:10,contributors:["Jongseob Jeon"]},u=void 0,i={unversionedId:"kubeflow/advanced-pipeline",id:"version-1.0/kubeflow/advanced-pipeline",title:"10. Pipeline - Setting",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/advanced-pipeline.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-pipeline",permalink:"/en/docs/1.0/kubeflow/advanced-pipeline",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/advanced-pipeline.md",tags:[],version:"1.0",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:10,frontMatter:{title:"10. Pipeline - Setting",description:"",sidebar_position:10,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"9. Component - Environment",permalink:"/en/docs/1.0/kubeflow/advanced-environment"},next:{title:"11. Pipeline - Run Result",permalink:"/en/docs/1.0/kubeflow/advanced-run"}},s={},m=[{value:"Pipeline Setting",id:"pipeline-setting",level:2},{value:"Display Name",id:"display-name",level:2},{value:"set_display_name",id:"set_display_name",level:3},{value:"UI in Kubeflow",id:"ui-in-kubeflow",level:3},{value:"Resources",id:"resources",level:2},{value:"GPU",id:"gpu",level:3},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3}],o={toc:m},_="wrapper";function l(e){let{components:n,...p}=e;return(0,a.kt)(_,(0,r.Z)({},o,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pipeline-setting"},"Pipeline Setting"),(0,a.kt)("p",null,"In this page, we will look at values that can be set in the pipeline."),(0,a.kt)("h2",{id:"display-name"},"Display Name"),(0,a.kt)("p",null,"Created within the pipeline, components have two names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"task_name: the function name when writing the component"),(0,a.kt)("li",{parentName:"ul"},"display_name: the name that appears in the kubeflow UI")),(0,a.kt)("p",null,"For example, in the case where both components are set to Print and return number, it is difficult to tell which component is 1 or 2."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run-7",src:t(510).Z,width:"3408",height:"2156"})),(0,a.kt)("h3",{id:"set_display_name"},"set_display_name"),(0,a.kt)("p",null,"The solution for this is the display_name.",(0,a.kt)("br",{parentName:"p"}),"\n","We can set the display_name in the pipeline by using the set_display_name ",(0,a.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html#kfp.dsl.ContainerOp.set_display_name"},"attribute")," of the component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,a.kt)("p",null,"If you run this script and check the resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"example_pipeline.yaml"),", it would be like this."),(0,a.kt)("p",null,(0,a.kt)("details",null,(0,a.kt)("summary",null,"example_pipeline.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: example-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9, pipelines.kubeflow.org/pipeline_compilation_time: \'2021-12-09T18:11:43.193190\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"inputs": [{"name": "number_1", "type":\n      "Integer"}, {"name": "number_2", "type": "Integer"}], "name": "example_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9}\nspec:\n  entrypoint: example-pipeline\n  templates:\n  - name: example-pipeline\n    inputs:\n      parameters:\n      - {name: number_1}\n      - {name: number_2}\n    dag:\n      tasks:\n      - name: print-and-return-number\n        template: print-and-return-number\n        arguments:\n          parameters:\n          - {name: number_1, value: \'{{inputs.parameters.number_1}}\'}\n      - name: print-and-return-number-2\n        template: print-and-return-number-2\n        arguments:\n          parameters:\n          - {name: number_2, value: \'{{inputs.parameters.number_2}}\'}\n      - name: sum-and-print-numbers\n        template: sum-and-print-numbers\n        dependencies: [print-and-return-number, print-and-return-number-2]\n        arguments:\n          parameters:\n          - {name: print-and-return-number-2-Output, value: \'{{tasks.print-and-return-number-2.outputs.parameters.print-and-return-number-2-Output}}\'}\n          - {name: print-and-return-number-Output, value: \'{{tasks.print-and-return-number.outputs.parameters.print-and-return-number-Output}}\'}\n  - name: print-and-return-number\n    container:\n      args: [--number, \'{{inputs.parameters.number_1}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(\n                    str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_1}\n    outputs:\n      parameters:\n      - name: print-and-return-number-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is number 1, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number", {"inputValue": "number"}, "----output-paths",\n          {"outputPath": "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(\\n            str(int_value),\n          str(type(int_value))))\\n    return str(int_value)\\n\\nimport argparse\\n_parser\n          = argparse.ArgumentParser(prog=\'\'Print and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_1}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  - name: print-and-return-number-2\n    container:\n      args: [--number, \'{{inputs.parameters.number_2}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(\n                    str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_2}\n    outputs:\n      parameters:\n      - name: print-and-return-number-2-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-2-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is number 2, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number", {"inputValue": "number"}, "----output-paths",\n          {"outputPath": "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(\\n            str(int_value),\n          str(type(int_value))))\\n    return str(int_value)\\n\\nimport argparse\\n_parser\n          = argparse.ArgumentParser(prog=\'\'Print and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_2}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: print-and-return-number-2-Output}\n      - {name: print-and-return-number-Output}\n    metadata:\n      annotations: {pipelines.kubeflow.org/task_display_name: This is sum of number\n          1 and number 2, pipelines.kubeflow.org/component_spec: \'{"implementation":\n          {"container": {"args": ["--number-1", {"inputValue": "number_1"}, "--number-2",\n          {"inputValue": "number_2"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def sum_and_print_numbers(number_1, number_2):\\n    print(number_1 + number_2)\\n\\nimport\n          argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Sum and print numbers\'\',\n          description=\'\'\'\')\\n_parser.add_argument(\\"--number-1\\", dest=\\"number_1\\",\n          type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"--number-2\\",\n          dest=\\"number_2\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parsed_args\n          = vars(_parser.parse_args())\\n\\n_outputs = sum_and_print_numbers(**_parsed_args)\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number_1", "type": "Integer"},\n          {"name": "number_2", "type": "Integer"}], "name": "Sum and print numbers"}\',\n        pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number_1":\n          "{{inputs.parameters.print-and-return-number-Output}}", "number_2": "{{inputs.parameters.print-and-return-number-2-Output}}"}\'}\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n  arguments:\n    parameters:\n    - {name: number_1}\n    - {name: number_2}\n  serviceAccountName: pipeline-runner\n')))),(0,a.kt)("p",null,"If compared with the previous file, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"pipelines.kubeflow.org/task_display_name"))," key has been newly created."),(0,a.kt)("h3",{id:"ui-in-kubeflow"},"UI in Kubeflow"),(0,a.kt)("p",null,"We will upload the version of the previously created ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/basic-pipeline-upload#upload-pipeline-version"},"pipeline")," using the files we created earlier."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"adv-pipeline-0.png",src:t(6562).Z,width:"3360",height:"2100"})),(0,a.kt)("p",null,"As you can see, the configured name is displayed as shown above."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("h3",{id:"gpu"},"GPU"),(0,a.kt)("p",null,"By default, when the pipeline runs components as Kubernetes pods, it uses the default resource specifications.",(0,a.kt)("br",{parentName:"p"}),"\n","If you need to train a model using a GPU and the Kubernetes environment doesn't allocate a GPU, the training may not be performed correctly.",(0,a.kt)("br",{parentName:"p"}),"\n","To address this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_gpu_limit()")," ",(0,a.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.UserContainer.set_gpu_limit"},"attribute")," to set the GPU limit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1)\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,a.kt)("p",null,"If you execute the above script, you can see that the resources has been added with ",(0,a.kt)("inlineCode",{parentName:"p"},"{nvidia.com/gpu: 1}")," in the generated file when you look closely at ",(0,a.kt)("inlineCode",{parentName:"p"},"sum-and-print-numbers"),".\nThrough this, you can allocate a GPU."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n      resources:\n        limits: {nvidia.com/gpu: 1}\n')),(0,a.kt)("h3",{id:"cpu"},"CPU"),(0,a.kt)("p",null,"The function to set the number of CPUs can be set using the ",(0,a.kt)("inlineCode",{parentName:"p"},".set_cpu_limit()")," attribute ",(0,a.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.Sidecar.set_cpu_limit"},"attribute"),".",(0,a.kt)("br",{parentName:"p"}),"\n","The difference from GPUs is that the input must be a string, not an int."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1).set_cpu_limit("16")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,a.kt)("p",null,"The changed part only can be confirmed as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"      resources:\n        limits: {nvidia.com/gpu: 1, cpu: '16'}\n")),(0,a.kt)("h3",{id:"memory"},"Memory"),(0,a.kt)("p",null,"Memory can be set using the ",(0,a.kt)("inlineCode",{parentName:"p"},".set_memory_limit()")," ",(0,a.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.dsl.html?highlight=set_gpu_limit#kfp.dsl.Sidecar.set_memory_limit"},"attribute"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1).set_display_name("This is number 1")\n    number_2_result = print_and_return_number(number_2).set_display_name("This is number 2")\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    ).set_display_name("This is sum of number 1 and number 2").set_gpu_limit(1).set_memory_limit("1G")\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n\n')),(0,a.kt)("p",null,"The changed parts are as follows if checked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"      resources:\n        limits: {nvidia.com/gpu: 1, memory: 1G}\n")))}l.isMDXComponent=!0},6562:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/adv-pipeline-0-16dd5e9fed2f2d5c4a1d1b683a7a144d.png"},510:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/run-7-53ba486fe934b320289bf98ddbf9a4b6.png"}}]);