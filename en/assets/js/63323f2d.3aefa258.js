"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},v=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||l;return t?a.createElement(m,r(r({ref:n},v),{},{components:t})):a.createElement(m,r({ref:n},v))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const l={title:"1. Install Python virtual environment",sidebar_position:1},r=void 0,o={unversionedId:"appendix/pyenv",id:"appendix/pyenv",title:"1. Install Python virtual environment",description:"Python virtual environment",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/appendix/pyenv.md",sourceDirName:"appendix",slug:"/appendix/pyenv",permalink:"/en/docs/appendix/pyenv",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/appendix/pyenv.md",tags:[],version:"current",lastUpdatedBy:"Tim cho",lastUpdatedAt:1708479021,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:1,frontMatter:{title:"1. Install Python virtual environment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6. Multi Models",permalink:"/en/docs/api-deployment/seldon-children"},next:{title:"2. Install load balancer metallb for Bare Metal Cluster",permalink:"/en/docs/appendix/metallb"}},s={},p=[{value:"Python virtual environment",id:"python-virtual-environment",level:2},{value:"Installing pyenv",id:"installing-pyenv",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation - macOS",id:"installation---macos",level:3},{value:"Installation - Ubuntu",id:"installation---ubuntu",level:3},{value:"Using pyenv",id:"using-pyenv",level:2},{value:"Install python version",id:"install-python-version",level:3},{value:"Create python virtual environment",id:"create-python-virtual-environment",level:3},{value:"Activating python virtual environment",id:"activating-python-virtual-environment",level:3},{value:"Deactivating python virtual environment",id:"deactivating-python-virtual-environment",level:3}],v={toc:p},u="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python-virtual-environment"},"Python virtual environment"),(0,i.kt)("p",null,"When working with Python, there may be cases where you want to use multiple versions of Python environments or manage package versions separately for different projects."),(0,i.kt)("p",null,"To easily manage Python environments or Python package environments in a virtualized manner, there are tools available such as pyenv, conda, virtualenv, and venv."),(0,i.kt)("p",null,"Among these, ",(0,i.kt)("em",{parentName:"p"},"MLOps for ALL")," covers the installation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),".",(0,i.kt)("br",{parentName:"p"}),"\n","pyenv helps manage Python versions, while pyenv-virtualenv is a plugin for pyenv that helps manage Python package environments."),(0,i.kt)("h2",{id:"installing-pyenv"},"Installing pyenv"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Prerequisites vary depending on the operating system. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv/wiki#suggested-build-environment"},"following page")," and install the required packages accordingly."),(0,i.kt)("h3",{id:"installation---macos"},"Installation - macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install pyenv, pyenv-virtualenv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install pyenv\nbrew install pyenv-virtualenv\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Set pyenv")),(0,i.kt)("p",null,"For macOS, assuming the use of zsh since the default shell has changed to zsh in Catalina version and later, setting up pyenv."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'eval \"$(pyenv init -)\"' >> ~/.zshrc\necho 'eval \"$(pyenv virtualenv-init -)\"' >> ~/.zshrc\nsource ~/.zshrc\n")),(0,i.kt)("p",null,"Check if the pyenv command is executed properly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv --help\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv --help\nUsage: pyenv <command> [<args>]\n\nSome useful pyenv commands are:\n   --version   Display the version of pyenv\n   activate    Activate virtual environment\n   commands    List all available pyenv commands\n   deactivate   Deactivate virtual environment\n   exec        Run an executable with the selected Python version\n   global      Set or show the global Python version(s)\n   help        Display help for a command\n   hooks       List hook scripts for a given pyenv command\n   init        Configure the shell environment for pyenv\n   install     Install a Python version using python-build\n   local       Set or show the local application-specific Python version(s)\n   prefix      Display prefix for a Python version\n   rehash      Rehash pyenv shims (run this after installing executables)\n   root        Display the root directory where versions and shims are kept\n   shell       Set or show the shell-specific Python version\n   shims       List existing pyenv shims\n   uninstall   Uninstall a specific Python version\n   version     Show the current Python version(s) and its origin\n   version-file   Detect the file that sets the current pyenv version\n   version-name   Show the current Python version\n   version-origin   Explain how the current Python version is set\n   versions    List all Python versions available to pyenv\n   virtualenv   Create a Python virtualenv using the pyenv-virtualenv plugin\n   virtualenv-delete   Uninstall a specific Python virtualenv\n   virtualenv-init   Configure the shell environment for pyenv-virtualenv\n   virtualenv-prefix   Display real_prefix for a Python virtualenv version\n   virtualenvs   List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.\n   whence      List all Python versions that contain the given executable\n   which       Display the full path to an executable\n\nSee `pyenv help <command>' for information on a specific command.\nFor full documentation, see: https://github.com/pyenv/pyenv#readme\n")),(0,i.kt)("h3",{id:"installation---ubuntu"},"Installation - Ubuntu"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install pyenv and pyenv-virtualenv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://pyenv.run | bash\n")),(0,i.kt)("p",null,"If the following content is output, it means that the installation is successful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n  0     0    0     0    0     0      0      0 --:--:-- --:--:--   0     0    0     0    0     0      0      0 --:--:-- --:--:-- 100   270  100   270    0     0    239      0  0:00:01  0:00:01 --:--:--   239\nCloning into '/home/mlops/.pyenv'...\nr\n...\nSkip...\n...\nremote: Enumerating objects: 10, done.\nremote: Counting objects: 100% (10/10), done.\nremote: Compressing objects: 100% (6/6), done.\nremote: Total 10 (delta 1), reused 6 (delta 0), pack-reused 0\nUnpacking objects: 100% (10/10), 2.92 KiB | 2.92 MiB/s, done.\n\nWARNING: seems you still have not added 'pyenv' to the load path.\n\n\n# See the README for instructions on how to set up\n# your shell environment for Pyenv.\n\n# Load pyenv-virtualenv automatically by adding\n# the following to ~/.bashrc:\n\neval \"$(pyenv virtualenv-init -)\"\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Set pyenv")),(0,i.kt)("p",null,"Assuming the use of bash shell as the default shell, configure pyenv and pyenv-virtualenv to be used in bash."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi ~/.bashrc\n")),(0,i.kt)("p",null,"Enter the following string and save it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="$HOME/.pyenv/bin:$PATH"\neval "$(pyenv init -)"\neval "$(pyenv virtualenv-init -)"\n')),(0,i.kt)("p",null,"Restart the shell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"exec $SHELL\n")),(0,i.kt)("p",null,"Check if the pyenv command is executed properly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv --help\n")),(0,i.kt)("p",null,"If the following message is displayed, it means that the settings have been configured correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv\npyenv 2.2.2\nUsage: pyenv <command> [<args>]\n\nSome useful pyenv commands are:\n   --version   Display the version of pyenv\n   activate    Activate virtual environment\n   commands    List all available pyenv commands\n   deactivate   Deactivate virtual environment\n   doctor      Verify pyenv installation and development tools to build pythons.\n   exec        Run an executable with the selected Python version\n   global      Set or show the global Python version(s)\n   help        Display help for a command\n   hooks       List hook scripts for a given pyenv command\n   init        Configure the shell environment for pyenv\n   install     Install a Python version using python-build\n   local       Set or show the local application-specific Python version(s)\n   prefix      Display prefix for a Python version\n   rehash      Rehash pyenv shims (run this after installing executables)\n   root        Display the root directory where versions and shims are kept\n   shell       Set or show the shell-specific Python version\n   shims       List existing pyenv shims\n   uninstall   Uninstall a specific Python version\n   version     Show the current Python version(s) and its origin\n   version-file   Detect the file that sets the current pyenv version\n   version-name   Show the current Python version\n   version-origin   Explain how the current Python version is set\n   versions    List all Python versions available to pyenv\n   virtualenv   Create a Python virtualenv using the pyenv-virtualenv plugin\n   virtualenv-delete   Uninstall a specific Python virtualenv\n   virtualenv-init   Configure the shell environment for pyenv-virtualenv\n   virtualenv-prefix   Display real_prefix for a Python virtualenv version\n   virtualenvs   List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.\n   whence      List all Python versions that contain the given executable\n   which       Display the full path to an executable\n\nSee `pyenv help <command>' for information on a specific command.\nFor full documentation, see: https://github.com/pyenv/pyenv#readme\n")),(0,i.kt)("h2",{id:"using-pyenv"},"Using pyenv"),(0,i.kt)("h3",{id:"install-python-version"},"Install python version"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv install <Python-Version>")," command, you can install the desired Python version.",(0,i.kt)("br",{parentName:"p"}),"\n","In this page, we will install the Python 3.7.12 version that is used by Kubeflow by default as an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 3.7.12\n")),(0,i.kt)("p",null,"If installed normally, the following message will be printed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install 3.7.12\nDownloading Python-3.7.12.tar.xz...\n-> https://www.python.org/ftp/python/3.7.12/Python-3.7.12.tar.xz\nInstalling Python-3.7.12...\npatching file Doc/library/ctypes.rst\npatching file Lib/test/test_unicode.py\npatching file Modules/_ctypes/_ctypes.c\npatching file Modules/_ctypes/callproc.c\npatching file Modules/_ctypes/ctypes.h\npatching file setup.py\npatching file 'Misc/NEWS.d/next/Core and Builtins/2020-06-30-04-44-29.bpo-41100.PJwA6F.rst'\npatching file Modules/_decimal/libmpdec/mpdecimal.h\nInstalled Python-3.7.12 to /home/mlops/.pyenv/versions/3.7.12\n")),(0,i.kt)("h3",{id:"create-python-virtual-environment"},"Create python virtual environment"),(0,i.kt)("p",null,"Create a Python virtual environment with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv virtualenv <Installed-Python-Version> <Virtual-Environment-Name>")," command to create a Python virtual environment with the desired Python version."),(0,i.kt)("p",null,"For example, let's create a Python virtual environment called ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," with Python 3.7.12 version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv 3.7.12 demo\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv 3.7.12 demo\nLooking in links: /tmp/tmpffqys0gv\nRequirement already satisfied: setuptools in /home/mlops/.pyenv/versions/3.7.12/envs/demo/lib/python3.7/site-packages (47.1.0)\nRequirement already satisfied: pip in /home/mlops/.pyenv/versions/3.7.12/envs/demo/lib/python3.7/site-packages (20.1.1)\n")),(0,i.kt)("h3",{id:"activating-python-virtual-environment"},"Activating python virtual environment"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv activate <environment name>")," command to use the virtual environment created in this way."),(0,i.kt)("p",null,"For example, we will use a Python virtual environment called ",(0,i.kt)("inlineCode",{parentName:"p"},"demo"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv activate demo\n")),(0,i.kt)("p",null,"You can see that the information of the current virtual environment is printed at the front of the shell."),(0,i.kt)("p",null,"  Before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ pyenv activate demo\n")),(0,i.kt)("p",null,"  After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv-virtualenv: prompt changing will be removed from future release. configure `export PYENV_VIRTUALENV_DISABLE_PROMPT=1' to simulate the behavior.\n(demo) mlops@ubuntu:~$ \n")),(0,i.kt)("h3",{id:"deactivating-python-virtual-environment"},"Deactivating python virtual environment"),(0,i.kt)("p",null,"You can deactivate the currently active virtualenv by using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"source deactivate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source deactivate\n")),(0,i.kt)("p",null,"  Before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(demo) mlops@ubuntu:~$ source deactivate\n")),(0,i.kt)("p",null,"  After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ \n")))}h.isMDXComponent=!0}}]);