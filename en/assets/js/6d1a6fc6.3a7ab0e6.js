"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7053],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),_=r,u=m["".concat(l,".").concat(_)]||m[_]||c[_]||i;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=_;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},3233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"9. Component - Environment",description:"",sidebar_position:9,contributors:["Jongseob Jeon"]},o=void 0,p={unversionedId:"kubeflow/advanced-environment",id:"version-1.0/kubeflow/advanced-environment",title:"9. Component - Environment",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/advanced-environment.md",sourceDirName:"kubeflow",slug:"/kubeflow/advanced-environment",permalink:"/en/docs/1.0/kubeflow/advanced-environment",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/advanced-environment.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1706783082,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:9,frontMatter:{title:"9. Component - Environment",description:"",sidebar_position:9,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"8. Component - InputPath/OutputPath",permalink:"/en/docs/1.0/kubeflow/advanced-component"},next:{title:"10. Pipeline - Setting",permalink:"/en/docs/1.0/kubeflow/advanced-pipeline"}},l={},s=[{value:"Component Environment",id:"component-environment",level:2},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"Adding packages",id:"adding-packages",level:2},{value:"1. base_image",id:"1-base_image",level:3},{value:"2. packages_to_install",id:"2-packages_to_install",level:3}],d={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"component-environment"},"Component Environment"),(0,r.kt)("p",null,"When we run the pipeline written in ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/advanced-component"},"8. Component - InputPath/OutputPath"),", it fails. Let's find out why it fails and modify it so that it can run properly. "),(0,r.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,r.kt)("p",null,"Let's convert the component written ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/advanced-component#convert-to-kubeflow-format"},"earlier")," into a yaml file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@create_component_from_func\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"If you run the script above, you will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," file like the one below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: model, type: dill}\n- {name: kernel, type: String}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --model\n    - {inputPath: model}\n    - --kernel\n    - {inputValue: kernel}\n')),(0,r.kt)("p",null,"According to the content explained in the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/basic-component#convert-to-kubeflow-format"},"Basic Usage Component")," previously mentioned, this component will be executed as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"However, when running the component created above, an error will occur.",(0,r.kt)("br",{parentName:"p"}),"\n","The reason is in the way the component wrapper is executed.",(0,r.kt)("br",{parentName:"p"}),"\n","Kubeflow uses Kubernetes, so the component wrapper runs the component content on its own separate container."),(0,r.kt)("p",null,"In detail, the image specified in the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"image: python:3.7"),"."),(0,r.kt)("p",null,"There may be some people who notice why it is not running for some reason."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"python:3.7")," image does not have the packages we want to use, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"dill"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sklearn"),", installed.",(0,r.kt)("br",{parentName:"p"}),"\n","Therefore, when executing, it fails with an error indicating that the packages are not found."),(0,r.kt)("p",null,"So, how can we add the packages?"),(0,r.kt)("h2",{id:"adding-packages"},"Adding packages"),(0,r.kt)("p",null,"During the process of converting Kubeflow, there are two ways to add packages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"base_image")),(0,r.kt)("li",{parentName:"ol"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"package_to_install"))),(0,r.kt)("p",null,"Let's check what arguments the function ",(0,r.kt)("inlineCode",{parentName:"p"},"create_component_from_func")," used to compile the components can receive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"def create_component_from_func(\n    func: Callable,\n    output_component_file: Optional[str] = None,\n    base_image: Optional[str] = None,\n    packages_to_install: List[str] = None,\n    annotations: Optional[Mapping[str, str]] = None,\n):\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func"),": Function that creates the component wrapper to be made into a component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base_image"),": Image that the component wrapper will run on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages_to_install"),": Additional packages that need to be installed for the component to use.")),(0,r.kt)("h3",{id:"1-base_image"},"1. base_image"),(0,r.kt)("p",null,"Take a closer look at the sequence in which the component is executed and it will be as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull base_image")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install packages_to_install")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"If the base_image used by the component already has all the packages installed, you can use it without installing additional packages."),(0,r.kt)("p",null,"For example, on this page we are going to write a Dockerfile like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM python:3.7\n\nRUN pip install dill pandas scikit-learn\n")),(0,r.kt)("p",null,"Let's build the image using the Dockerfile above. The Docker hub we will use for the practice is ghcr.",(0,r.kt)("br",{parentName:"p"}),"\n","You can choose a Docker hub according to your environment and upload it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build . -f Dockerfile -t ghcr.io/mlops-for-all/base-image\ndocker push ghcr.io/mlops-for-all/base-image\n")),(0,r.kt)("p",null,"Now let's try inputting the base image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n@partial(\n    create_component_from_func,\n    base_image="ghcr.io/mlops-for-all/base-image:latest",\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"If you compile the generated component, it will appear as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: kernel, type: String}\noutputs:\n- {name: model, type: dill}\nimplementation:\n  container:\n    image: ghcr.io/mlops-for-all/base-image:latest\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def _make_parent_dirs_and_return_path(file_path: str):\n          import os\n          os.makedirs(os.path.dirname(file_path), exist_ok=True)\n          return file_path\n\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --kernel\n    - {inputValue: kernel}\n    - --model\n    - {outputPath: model}\n')),(0,r.kt)("p",null,"We can confirm that the base_image has been changed to the value we have set."),(0,r.kt)("h3",{id:"2-packages_to_install"},"2. packages_to_install"),(0,r.kt)("p",null,"However, when packages are added, it takes a lot of time to create a new Docker image.\nIn this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages_to_install")," argument to easily add packages to the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill==0.3.4", "pandas==1.3.4", "scikit-learn==1.0.1"],\n)\ndef train_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n\n    from sklearn.svm import SVC\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\nif __name__ == "__main__":\n    train_from_csv.component_spec.save("train_from_csv.yaml")\n')),(0,r.kt)("p",null,"If you execute the script, the ",(0,r.kt)("inlineCode",{parentName:"p"},"train_from_csv.yaml")," file will be generated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'name: Train from csv\ninputs:\n- {name: train_data, type: csv}\n- {name: train_target, type: csv}\n- {name: kernel, type: String}\noutputs:\n- {name: model, type: dill}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -c\n    - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n      \'dill==0.3.4\' \'pandas==1.3.4\' \'scikit-learn==1.0.1\' || PIP_DISABLE_PIP_VERSION_CHECK=1\n      python3 -m pip install --quiet --no-warn-script-location \'dill==0.3.4\' \'pandas==1.3.4\'\n      \'scikit-learn==1.0.1\' --user) && "$0" "$@"\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def _make_parent_dirs_and_return_path(file_path: str):\n          import os\n          os.makedirs(os.path.dirname(file_path), exist_ok=True)\n          return file_path\n\n      def train_from_csv(\n          train_data_path,\n          train_target_path,\n          model_path,\n          kernel,\n      ):\n          import dill\n          import pandas as pd\n\n          from sklearn.svm import SVC\n\n          train_data = pd.read_csv(train_data_path)\n          train_target = pd.read_csv(train_target_path)\n\n          clf = SVC(kernel=kernel)\n          clf.fit(train_data, train_target)\n\n          with open(model_path, mode="wb") as file_writer:\n              dill.dump(clf, file_writer)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Train from csv\', description=\'\')\n      _parser.add_argument("--train-data", dest="train_data_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--train-target", dest="train_target_path", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--kernel", dest="kernel", type=str, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("--model", dest="model_path", type=_make_parent_dirs_and_return_path, required=True, default=argparse.SUPPRESS)\n      _parsed_args = vars(_parser.parse_args())\n\n      _outputs = train_from_csv(**_parsed_args)\n    args:\n    - --train-data\n    - {inputPath: train_data}\n    - --train-target\n    - {inputPath: train_target}\n    - --kernel\n    - {inputValue: kernel}\n    - --model\n    - {outputPath: model}\n')),(0,r.kt)("p",null,"If we take a closer look at the order in which the components written above are executed, it looks like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install dill==0.3.4 pandas==1.3.4 scikit-learn==1.0.1")),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"))),(0,r.kt)("p",null,"When the generated yaml file is closely examined, the following lines are automatically added, so that the necessary packages are installed and the program runs smoothly without errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    command:\n    - sh\n    - -c\n    - (PIP_DISABLE_PIP_VERSION_CHECK=1 python3 -m pip install --quiet --no-warn-script-location\n      'dill==0.3.4' 'pandas==1.3.4' 'scikit-learn==1.0.1' || PIP_DISABLE_PIP_VERSION_CHECK=1\n      python3 -m pip install --quiet --no-warn-script-location 'dill==0.3.4' 'pandas==1.3.4'\n      'scikit-learn==1.0.1' --user) && \"$0\" \"$@\"\n")))}c.isMDXComponent=!0}}]);