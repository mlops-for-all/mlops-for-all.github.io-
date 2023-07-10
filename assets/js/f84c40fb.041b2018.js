"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),_=p,c=s["".concat(o,".").concat(_)]||s[_]||d[_]||r;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function c(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,i=new Array(r);i[0]=_;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:p,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},4046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(7462),p=(t(7294),t(3905));const r={title:"11. Pipeline - Run Result",description:"",sidebar_position:11,contributors:["Jongseob Jeon","SeungTae Kim"]},i=void 0,l={unversionedId:"kubeflow/advanced-run",id:"version-1.0/kubeflow/advanced-run",title:"11. Pipeline - Run Result",description:"",source:"@site/versioned_docs/version-1.0/kubeflow/advanced-run.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-run",permalink:"/docs/1.0/kubeflow/advanced-run",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/advanced-run.md",tags:[],version:"1.0",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 10\uc77c",sidebarPosition:11,frontMatter:{title:"11. Pipeline - Run Result",description:"",sidebar_position:11,contributors:["Jongseob Jeon","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"10. Pipeline - Setting",permalink:"/docs/1.0/kubeflow/advanced-pipeline"},next:{title:"12. Component - MLFlow",permalink:"/docs/1.0/kubeflow/advanced-mlflow"}},o={},u=[{value:"Run Result",id:"run-result",level:2},{value:"Graph",id:"graph",level:2},{value:"Input/Output",id:"inputoutput",level:3},{value:"Logs",id:"logs",level:3},{value:"Visualizations",id:"visualizations",level:3},{value:"Run output",id:"run-output",level:2},{value:"Config",id:"config",level:2}],m={toc:u},s="wrapper";function d(e){let{components:n,...r}=e;return(0,p.kt)(s,(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"run-result"},"Run Result"),(0,p.kt)("p",null,"Run \uc2e4\ud589 \uacb0\uacfc\ub97c \ub20c\ub7ec\ubcf4\uba74 3\uac1c\uc758 \ud0ed\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.\n\uac01\uac01 Graph, Run output, Config \uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-0.png",src:t(6394).Z,width:"3360",height:"2100"})),(0,p.kt)("h2",{id:"graph"},"Graph"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-1.png",src:t(6255).Z,width:"3360",height:"2100"})),(0,p.kt)("p",null,"\uadf8\ub798\ud504\uc5d0\uc11c\ub294 \uc2e4\ud589\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub204\ub974\uba74 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc2e4\ud589 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"inputoutput"},"Input/Output"),(0,p.kt)("p",null,"Input/Output \ud0ed\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud55c Config\ub4e4\uacfc Input, Output Artifacts\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"logs"},"Logs"),(0,p.kt)("p",null,"Logs\uc5d0\uc11c\ub294 \ud30c\uc774\uc36c \ucf54\ub4dc \uc2e4\ud589 \uc911 \ub098\uc624\ub294 \ubaa8\ub4e0 stdout\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e4\ub9cc pod\uc740 \uc77c\uc815 \uc2dc\uac04\uc774 \uc9c0\ub09c \ud6c4 \uc9c0\uc6cc\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uc77c\uc815 \uc2dc\uac04\uc774 \uc9c0\ub098\uba74 \uc774 \ud0ed\uc5d0\uc11c\ub294 \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc774\ub54c\ub294 Output artifacts\uc758 main-logs\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"visualizations"},"Visualizations"),(0,p.kt)("p",null,"Visualizations\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0dd\uc131\ub41c \ud50c\ub78f\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud50c\ub78f\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},'mlpipeline_ui_metadata: OutputPath("UI_Metadata")')," argument\ub85c \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc740 \uac12\uc744 \uc800\uc7a5\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \ub54c \ud50c\ub78f\uc758 \ud615\ud0dc\ub294 html \ud3ec\ub9f7\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'\n@partial(\n    create_component_from_func,\n    packages_to_install=["matplotlib"],\n)\ndef plot_linear(\n    mlpipeline_ui_metadata: OutputPath("UI_Metadata")\n):\n    import base64\n    import json\n    from io import BytesIO\n\n    import matplotlib.pyplot as plt\n\n    plt.plot(x=[1, 2, 3], y=[1, 2,3])\n\n    tmpfile = BytesIO()\n    plt.savefig(tmpfile, format="png")\n    encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n\n    html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n    metadata = {\n        "outputs": [\n            {\n                "type": "web-app",\n                "storage": "inline",\n                "source": html,\n            },\n        ],\n    }\n    with open(mlpipeline_ui_metadata, "w") as html_writer:\n        json.dump(metadata, html_writer)\n')),(0,p.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nimport kfp\nfrom kfp.components import create_component_from_func, OutputPath\nfrom kfp.dsl import pipeline\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["matplotlib"],\n)\ndef plot_linear(mlpipeline_ui_metadata: OutputPath("UI_Metadata")):\n    import base64\n    import json\n    from io import BytesIO\n\n    import matplotlib.pyplot as plt\n\n    plt.plot([1, 2, 3], [1, 2, 3])\n\n    tmpfile = BytesIO()\n    plt.savefig(tmpfile, format="png")\n    encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n\n    html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n    metadata = {\n        "outputs": [\n            {\n                "type": "web-app",\n                "storage": "inline",\n                "source": html,\n            },\n        ],\n    }\n    with open(mlpipeline_ui_metadata, "w") as html_writer:\n        json.dump(metadata, html_writer)\n\n\n@pipeline(name="plot_pipeline")\ndef plot_pipeline():\n    plot_linear()\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(plot_pipeline, "plot_pipeline.yaml")\n')),(0,p.kt)("p",null,"\uc774 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud574\uc11c \ub098\uc628 ",(0,p.kt)("inlineCode",{parentName:"p"},"plot_pipeline.yaml"),"\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("details",null,(0,p.kt)("summary",null,"plot_pipeline.yaml"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: plot-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9, pipelines.kubeflow.org/pipeline_compilation_time: \'2\n022-01-17T13:31:32.963214\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"name": "plot_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9}\nspec:\n  entrypoint: plot-pipeline\n  templates:\n  - name: plot-linear\n    container:\n      args: [--mlpipeline-ui-metadata, /tmp/outputs/mlpipeline_ui_metadata/data]\n      command:\n      - sh\n      - -c\n      - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n        \'matplotlib\' || PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet\n        --no-warn-script-location \'matplotlib\' --user) && "$0" "$@"\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def _make_parent_dirs_and_return_path(file_path: str):\n            import os\n            os.makedirs(os.path.dirname(file_path), exist_ok=True)\n            return file_path\n        def plot_linear(mlpipeline_ui_metadata):\n            import base64\n            import json\n            from io import BytesIO\n            import matplotlib.pyplot as plt\n            plt.plot([1, 2, 3], [1, 2, 3])\n            tmpfile = BytesIO()\n            plt.savefig(tmpfile, format="png")\n            encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n            html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n            metadata = {\n                "outputs": [\n                    {\n                        "type": "web-app",\n                        "storage": "inline",\n                        "source": html,\n                    },\n                ],\n            }\n            with open(mlpipeline_ui_metadata, "w") as html_writer:\n                json.dump(metadata, html_writer)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Plot linear\', description=\'\')\n        _parser.add_argument("--mlpipeline-ui-metadata", dest="mlpipeline_ui_metadata", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n        _outputs = plot_linear(**_parsed_args)\n      image: python:3.7\n    outputs:\n      artifacts:\n      - {name: mlpipeline-ui-metadata, path: /tmp/outputs/mlpipeline_ui_metadata/data}\n    metadata:\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--mlpipeline-ui-metadata", {"outputPath": "mlpipeline_ui_metadata"}],\n          "command": ["sh", "-c", "(PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip\n          install --quiet --no-warn-script-location \'\'matplotlib\'\' || PIP_DISABLE_PIP_VERSION_CHECK=1\n          python3 -m pip install --quiet --no-warn-script-location \'\'matplotlib\'\'\n          --user) && \\"$0\\" \\"$@\\"", "sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def _make_parent_dirs_and_return_path(file_path: str):\\n    import os\\n    os.makedirs(os.path.dirname(file_path),\n          exist_ok=True)\\n    return file_path\\n\\ndef plot_linear(mlpipeline_ui_metadata):\\n    import\n          base64\\n    import json\\n    from io import BytesIO\\n\\n    import matplotlib.pyplot\n          as plt\\n\\n    plt.plot([1, 2, 3], [1, 2, 3])\\n\\n    tmpfile = BytesIO()\\n    plt.savefig(tmpfile,\n          format=\\"png\\")\\n    encoded = base64.b64encode(tmpfile.getvalue()).decode(\\"utf-8\\")\\n\\n    html\n          = f\\"<img src=\'\'data:image/png;base64,{encoded}\'\'>\\"\\n    metadata = {\\n        \\"outputs\\":\n          [\\n            {\\n                \\"type\\": \\"web-app\\",\\n                \\"storage\\":\n          \\"inline\\",\\n                \\"source\\": html,\\n            },\\n        ],\\n    }\\n    with\n          open(mlpipeline_ui_metadata, \\"w\\") as html_writer:\\n        json.dump(metadata,\n          html_writer)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Plot\n          linear\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--mlpipeline-ui-metadata\\",\n          dest=\\"mlpipeline_ui_metadata\\", type=_make_parent_dirs_and_return_path,\n          required=True, default=argparse.SUPPRESS)\\n_parsed_args = vars(_parser.parse_args())\\n\\n_outputs\n          = plot_linear(**_parsed_args)\\n"], "image": "python:3.7"}}, "name": "Plot\n          linear", "outputs": [{"name": "mlpipeline_ui_metadata", "type": "UI_Metadata"}]}\',\n        pipelines.kubeflow.org/component_ref: \'{}\'}\n  - name: plot-pipeline\n    dag:\n      tasks:\n      - {name: plot-linear, template: plot-linear}\n  arguments:\n    parameters: []\n  serviceAccountName: pipeline-runner\n')))),(0,p.kt)("p",null,"\uc2e4\ud589 \ud6c4 Visualization\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-5.png",src:t(2244).Z,width:"3360",height:"2100"})),(0,p.kt)("h2",{id:"run-output"},"Run output"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-2.png",src:t(6266).Z,width:"3360",height:"2100"})),(0,p.kt)("p",null,"Run output\uc740 kubeflow\uc5d0\uc11c \uc9c0\uc815\ud55c \ud615\ud0dc\ub85c \uc0dd\uae34 Artifacts\ub97c \ubaa8\uc544\uc11c \ubcf4\uc5ec\uc8fc\ub294 \uacf3\uc774\uba70 \ud3c9\uac00 \uc9c0\ud45c(Metric)\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud3c9\uac00 \uc9c0\ud45c(Metric)\uc744 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},'mlpipeline_metrics_path: OutputPath("Metrics")')," argument\uc5d0 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc740 \uc774\ub984\uacfc \uac12\uc744 json \ud615\ud0dc\ub85c \uc800\uc7a5\ud558\uba74 \ub429\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'@create_component_from_func\ndef show_metric_of_sum(\n    number: int,\n    mlpipeline_metrics_path: OutputPath("Metrics"),\n  ):\n    import json\n    metrics = {\n        "metrics": [\n            {\n                "name": "sum_value",\n                "numberValue": number,\n            },\n        ],\n    }\n    with open(mlpipeline_metrics_path, "w") as f:\n        json.dump(metrics, f)\n')),(0,p.kt)("p",null,"\ud3c9\uac00 \uc9c0\ud45c\ub97c \uc0dd\uc131\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c ",(0,p.kt)("a",{parentName:"p",href:"/docs/1.0/kubeflow/basic-pipeline"},"\ud30c\uc774\ud504\ub77c\uc778"),"\uc5d0\uc11c \uc0dd\uc131\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \ucd94\uac00 \ud6c4 \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n\uc804\uccb4 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func, OutputPath\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int) -> int:\n    sum_number = number_1 + number_2\n    print(sum_number)\n    return sum_number\n\n@create_component_from_func\ndef show_metric_of_sum(\n    number: int,\n    mlpipeline_metrics_path: OutputPath("Metrics"),\n  ):\n    import json\n    metrics = {\n        "metrics": [\n            {\n                "name": "sum_value",\n                "numberValue": number,\n            },\n        ],\n    }\n    with open(mlpipeline_metrics_path, "w") as f:\n        json.dump(metrics, f)\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n    show_metric_of_sum(sum_result.output)\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,p.kt)("p",null,"\uc2e4\ud589 \ud6c4 Run Output\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-4.png",src:t(1882).Z,width:"3360",height:"2100"})),(0,p.kt)("h2",{id:"config"},"Config"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"advanced-run-3.png",src:t(1487).Z,width:"3360",height:"2100"})),(0,p.kt)("p",null,"Config\uc5d0\uc11c\ub294 \ud30c\uc774\ud504\ub77c\uc778 Config\ub85c \uc785\ub825\ubc1b\uc740 \ubaa8\ub4e0 \uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},6394:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-0-adc975b65f29dee20a2bf33c969773d5.png"},6255:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-1-cfdbe4b3c9d101eecde409c9baf10dbb.png"},6266:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-2-2b0de3bdf8fa16c0e318d2dffda1f9f8.png"},1487:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-3-13783474cf32a499f90a11fc84575eea.png"},1882:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-4-3bfbf40826566f37cb8512a2e2889038.png"},2244:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-5-8de88b76e09f491c9a7c86642a12fbd9.png"}}]);