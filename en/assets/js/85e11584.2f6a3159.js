"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7966],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>_});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,_=m["".concat(l,".").concat(c)]||m[c]||d[c]||p;return t?a.createElement(_,r(r({ref:n},s),{},{components:t})):a.createElement(_,r({ref:n},s))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<p;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const p={title:"11. Pipeline - Run Result",description:"",sidebar_position:11,contributors:["Jongseob Jeon","SeungTae Kim"]},r=void 0,o={unversionedId:"kubeflow/advanced-run",id:"kubeflow/advanced-run",title:"11. Pipeline - Run Result",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/advanced-run.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-run",permalink:"/en/docs/kubeflow/advanced-run",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/advanced-run.md",tags:[],version:"current",lastUpdatedBy:"Dayoung Kang",lastUpdatedAt:1702862934,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:11,frontMatter:{title:"11. Pipeline - Run Result",description:"",sidebar_position:11,contributors:["Jongseob Jeon","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"10. Pipeline - Setting",permalink:"/en/docs/kubeflow/advanced-pipeline"},next:{title:"12. Component - MLFlow",permalink:"/en/docs/kubeflow/advanced-mlflow"}},l={},u=[{value:"Run Result",id:"run-result",level:2},{value:"Graph",id:"graph",level:2},{value:"Input/Output",id:"inputoutput",level:3},{value:"Logs",id:"logs",level:3},{value:"Visualizations",id:"visualizations",level:3},{value:"Run output",id:"run-output",level:2},{value:"Config",id:"config",level:2}],s={toc:u},m="wrapper";function d(e){let{components:n,...p}=e;return(0,i.kt)(m,(0,a.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"run-result"},"Run Result"),(0,i.kt)("p",null,"Click Run Result and you will see three tabs:\nGraph, Run Output, and Config."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-0.png",src:t(9216).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"graph"},"Graph"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-1.png",src:t(388).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"In the graph, if you click on the run component, you can check the running information of the component."),(0,i.kt)("h3",{id:"inputoutput"},"Input/Output"),(0,i.kt)("p",null,"The Input/Output tab allows you to view and download the Configurations, Input, and Output Artifacts used in the components."),(0,i.kt)("h3",{id:"logs"},"Logs"),(0,i.kt)("p",null,"In the Logs tab, you can view all the stdout output generated during the execution of the Python code.\nHowever, pods are deleted after a certain period of time, so you may not be able to view them in this tab after a certain time.\nIn that case, you can check them in the main-logs section of the Output artifacts."),(0,i.kt)("h3",{id:"visualizations"},"Visualizations"),(0,i.kt)("p",null,"The Visualizations tab displays plots generated by the components."),(0,i.kt)("p",null,"To generate a plot, you can save the desired values as an argument using ",(0,i.kt)("inlineCode",{parentName:"p"},'mlpipeline_ui_metadata: OutputPath("UI_Metadata")'),". The plot should be in HTML format.\nThe conversion process is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\n@partial(\n    create_component_from_func,\n    packages_to_install=["matplotlib"],\n)\ndef plot_linear(\n    mlpipeline_ui_metadata: OutputPath("UI_Metadata")\n):\n    import base64\n    import json\n    from io import BytesIO\n\n    import matplotlib.pyplot as plt\n\n    plt.plot(x=[1, 2, 3], y=[1, 2,3])\n\n    tmpfile = BytesIO()\n    plt.savefig(tmpfile, format="png")\n    encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n\n    html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n    metadata = {\n        "outputs": [\n            {\n                "type": "web-app",\n                "storage": "inline",\n                "source": html,\n            },\n        ],\n    }\n    with open(mlpipeline_ui_metadata, "w") as html_writer:\n        json.dump(metadata, html_writer)\n')),(0,i.kt)("p",null,"If written in pipeline, it will be like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nimport kfp\nfrom kfp.components import create_component_from_func, OutputPath\nfrom kfp.dsl import pipeline\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["matplotlib"],\n)\ndef plot_linear(mlpipeline_ui_metadata: OutputPath("UI_Metadata")):\n    import base64\n    import json\n    from io import BytesIO\n\n    import matplotlib.pyplot as plt\n\n    plt.plot([1, 2, 3], [1, 2, 3])\n\n    tmpfile = BytesIO()\n    plt.savefig(tmpfile, format="png")\n    encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n\n    html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n    metadata = {\n        "outputs": [\n            {\n                "type": "web-app",\n                "storage": "inline",\n                "source": html,\n            },\n        ],\n    }\n    with open(mlpipeline_ui_metadata, "w") as html_writer:\n        json.dump(metadata, html_writer)\n\n\n@pipeline(name="plot_pipeline")\ndef plot_pipeline():\n    plot_linear()\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(plot_pipeline, "plot_pipeline.yaml")\n')),(0,i.kt)("p",null,"If you run this script and check the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"plot_pipeline.yaml"),", you will see the following."),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"plot_pipeline.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: plot-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9, pipelines.kubeflow.org/pipeline_compilation_time: \'2\n022-01-17T13:31:32.963214\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"name": "plot_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.8.9}\nspec:\n  entrypoint: plot-pipeline\n  templates:\n  - name: plot-linear\n    container:\n      args: [--mlpipeline-ui-metadata, /tmp/outputs/mlpipeline_ui_metadata/data]\n      command:\n      - sh\n      - -c\n      - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n        \'matplotlib\' || PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet\n        --no-warn-script-location \'matplotlib\' --user) && "$0" "$@"\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def _make_parent_dirs_and_return_path(file_path: str):\n            import os\n            os.makedirs(os.path.dirname(file_path), exist_ok=True)\n            return file_path\n        def plot_linear(mlpipeline_ui_metadata):\n            import base64\n            import json\n            from io import BytesIO\n            import matplotlib.pyplot as plt\n            plt.plot([1, 2, 3], [1, 2, 3])\n            tmpfile = BytesIO()\n            plt.savefig(tmpfile, format="png")\n            encoded = base64.b64encode(tmpfile.getvalue()).decode("utf-8")\n            html = f"<img src=\'data:image/png;base64,{encoded}\'>"\n            metadata = {\n                "outputs": [\n                    {\n                        "type": "web-app",\n                        "storage": "inline",\n                        "source": html,\n                    },\n                ],\n            }\n            with open(mlpipeline_ui_metadata, "w") as html_writer:\n                json.dump(metadata, html_writer)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Plot linear\', description=\'\')\n        _parser.add_argument("--mlpipeline-ui-metadata", dest="mlpipeline_ui_metadata", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n        _outputs = plot_linear(**_parsed_args)\n      image: python:3.7\n    outputs:\n      artifacts:\n      - {name: mlpipeline-ui-metadata, path: /tmp/outputs/mlpipeline_ui_metadata/data}\n    metadata:\n      labels:\n        pipelines.kubeflow.org/kfp_sdk_version: 1.8.9\n        pipelines.kubeflow.org/pipeline-sdk-type: kfp\n        pipelines.kubeflow.org/enable_caching: "true"\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--mlpipeline-ui-metadata", {"outputPath": "mlpipeline_ui_metadata"}],\n          "command": ["sh", "-c", "(PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip\n          install --quiet --no-warn-script-location \'\'matplotlib\'\' || PIP_DISABLE_PIP_VERSION_CHECK=1\n          python3 -m pip install --quiet --no-warn-script-location \'\'matplotlib\'\'\n          --user) && \\"$0\\" \\"$@\\"", "sh", "-ec", "program_path=$(mktemp)\\nprintf\n          \\"%s\\" \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n",\n          "def _make_parent_dirs_and_return_path(file_path: str):\\n    import os\\n    os.makedirs(os.path.dirname(file_path),\n          exist_ok=True)\\n    return file_path\\n\\ndef plot_linear(mlpipeline_ui_metadata):\\n    import\n          base64\\n    import json\\n    from io import BytesIO\\n\\n    import matplotlib.pyplot\n          as plt\\n\\n    plt.plot([1, 2, 3], [1, 2, 3])\\n\\n    tmpfile = BytesIO()\\n    plt.savefig(tmpfile,\n          format=\\"png\\")\\n    encoded = base64.b64encode(tmpfile.getvalue()).decode(\\"utf-8\\")\\n\\n    html\n          = f\\"<img src=\'\'data:image/png;base64,{encoded}\'\'>\\"\\n    metadata = {\\n        \\"outputs\\":\n          [\\n            {\\n                \\"type\\": \\"web-app\\",\\n                \\"storage\\":\n          \\"inline\\",\\n                \\"source\\": html,\\n            },\\n        ],\\n    }\\n    with\n          open(mlpipeline_ui_metadata, \\"w\\") as html_writer:\\n        json.dump(metadata,\n          html_writer)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Plot\n          linear\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--mlpipeline-ui-metadata\\",\n          dest=\\"mlpipeline_ui_metadata\\", type=_make_parent_dirs_and_return_path,\n          required=True, default=argparse.SUPPRESS)\\n_parsed_args = vars(_parser.parse_args())\\n\\n_outputs\n          = plot_linear(**_parsed_args)\\n"], "image": "python:3.7"}}, "name": "Plot\n          linear", "outputs": [{"name": "mlpipeline_ui_metadata", "type": "UI_Metadata"}]}\',\n        pipelines.kubeflow.org/component_ref: \'{}\'}\n  - name: plot-pipeline\n    dag:\n      tasks:\n      - {name: plot-linear, template: plot-linear}\n  arguments:\n    parameters: []\n  serviceAccountName: pipeline-runner\n')))),(0,i.kt)("p",null,"After running, click Visualization."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-5.png",src:t(4321).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"run-output"},"Run output"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-2.png",src:t(4312).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"Run output is where Kubeflow gathers the Artifacts generated in the specified form and shows the evaluation index (Metric)."),(0,i.kt)("p",null,"To show the evaluation index (Metric), you can save the name and value you want to show in the ",(0,i.kt)("inlineCode",{parentName:"p"},'mlpipeline_metrics_path: OutputPath("Metrics")')," argument in json format. For example, you can write it like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@create_component_from_func\ndef show_metric_of_sum(\n    number: int,\n    mlpipeline_metrics_path: OutputPath("Metrics"),\n  ):\n    import json\n    metrics = {\n        "metrics": [\n            {\n                "name": "sum_value",\n                "numberValue": number,\n            },\n        ],\n    }\n    with open(mlpipeline_metrics_path, "w") as f:\n        json.dump(metrics, f)\n')),(0,i.kt)("p",null,"We will add a component to generate evaluation metrics to the pipeline created in the ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/basic-pipeline"},"Pipeline")," and execute it. The whole pipeline is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func, OutputPath\nfrom kfp.dsl import pipeline\n\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int) -> int:\n    sum_number = number_1 + number_2\n    print(sum_number)\n    return sum_number\n\n@create_component_from_func\ndef show_metric_of_sum(\n    number: int,\n    mlpipeline_metrics_path: OutputPath("Metrics"),\n  ):\n    import json\n    metrics = {\n        "metrics": [\n            {\n                "name": "sum_value",\n                "numberValue": number,\n            },\n        ],\n    }\n    with open(mlpipeline_metrics_path, "w") as f:\n        json.dump(metrics, f)\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n    show_metric_of_sum(sum_result.output)\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,i.kt)("p",null,"After execution, click Run Output and it will show like this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-4.png",src:t(6856).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"advanced-run-3.png",src:t(4493).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"In the Config tab, you can view all the values received as pipeline configurations."))}d.isMDXComponent=!0},9216:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-0-adc975b65f29dee20a2bf33c969773d5.png"},388:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-1-cfdbe4b3c9d101eecde409c9baf10dbb.png"},4312:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-2-2b0de3bdf8fa16c0e318d2dffda1f9f8.png"},4493:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-3-13783474cf32a499f90a11fc84575eea.png"},6856:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-4-3bfbf40826566f37cb8512a2e2889038.png"},4321:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/advanced-run-5-8de88b76e09f491c9a7c86642a12fbd9.png"}}]);