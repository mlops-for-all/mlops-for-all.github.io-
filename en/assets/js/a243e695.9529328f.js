"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"1. What is MLOps?",description:"Introduction to MLOps",sidebar_position:1,date:'2021-1./img to MLOps"',lastmod:new Date("2022-03-05T00:00:00.000Z"),contributors:["Jongseob Jeon"]},r=void 0,s={unversionedId:"introduction/intro",id:"version-1.0/introduction/intro",title:"1. What is MLOps?",description:"Introduction to MLOps",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/introduction/intro.md",sourceDirName:"introduction",slug:"/introduction/intro",permalink:"/en/docs/1.0/introduction/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/introduction/intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1688992855,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:1,frontMatter:{title:"1. What is MLOps?",description:"Introduction to MLOps",sidebar_position:1,date:'2021-1./img to MLOps"',lastmod:"2022-03-05T00:00:00.000Z",contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",next:{title:"2. Levels of MLOps",permalink:"/en/docs/1.0/introduction/levels"}},l={},d=[{value:"Machine Learning Project",id:"machine-learning-project",level:2},{value:"Devops",id:"devops",level:2},{value:"DevOps",id:"devops-1",level:3},{value:"Silo Effect",id:"silo-effect",level:3},{value:"CI/CD",id:"cicd",level:3},{value:"MLOps",id:"mlops",level:2},{value:"1) ML + Ops",id:"1-ml--ops",level:3},{value:"Rule-Based Approach",id:"rule-based-approach",level:4},{value:"Machine Learning Approach",id:"machine-learning-approach",level:4},{value:"Deep Learning Approach",id:"deep-learning-approach",level:4},{value:"2) ML -&gt; Ops",id:"2-ml---ops",level:3},{value:"3) Conclusion",id:"3-conclusion",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"machine-learning-project"},"Machine Learning Project"),(0,o.kt)("p",null,"Since 2012, when Alexnet was introduced, Machine Learning and Deep Learning have been introduced in any domain where data exists, such as Computer Vision and Natural Language Processing. Deep Learning and Machine Learning were referred to collectively as AI, and the need for AI was shouted from many media. And many companies conducted numerous projects using Machine Learning and Deep Learning. But what was the result? Byungchan Eum, the Head of North East Asia at Element AI, said \u201cIf 10 companies start an AI project, 9 of them will only be able to do concept validation (POC)\u201d."),(0,o.kt)("p",null,"In this way, in many projects, Machine Learning and Deep Learning only showed the possibility that they could solve this problem and then disappeared. And around this time, the outlook that ",(0,o.kt)("a",{parentName:"p",href:"https://www.aifutures.org/2021/ai-winter-is-coming/"},"AI Winter was coming again")," also began to emerge."),(0,o.kt)("p",null,"Why did most projects end at the concept validation (POC) stage? Because it is impossible to operate an actual service with only Machine Learning and Deep Learning code."),(0,o.kt)("p",null,"At the actual service stage, the portion taken up by machine learning and deep learning code is not as large as one would think, so one must consider many other aspects besides simply the performance of the model. Google has pointed out this problem in their 2015 paper ",(0,o.kt)("a",{parentName:"p",href:"https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf"},"Hidden Technical Debt in Machine Learning Systems"),". However, at the time this paper was released, many ML engineers were busy proving the potential of deep learning and machine learning, so the points made in the paper were not given much attention. "),(0,o.kt)("p",null,"And after a few years, machine learning and deep learning had proven their potential and people were now looking to apply it to actual services. However, soon many people realized that actual services were not as easy as they thought."),(0,o.kt)("h2",{id:"devops"},"Devops"),(0,o.kt)("p",null,"MLOps is not a new concept, but rather a term derived from the development methodology called DevOps. Therefore, understanding DevOps can help in understanding MLOps."),(0,o.kt)("h3",{id:"devops-1"},"DevOps"),(0,o.kt)("p",null,'DevOps is a portmanteau of "Development" and "Operations," referring to a development and operations methodology that emphasizes communication, collaboration, and integration between software developers and IT professionals. It encompasses both the development and operation phases of software, aiming to achieve a symbiotic relationship between the two. The primary goal of DevOps is to enable organizations to develop and deploy software products and services rapidly by fostering close collaboration and interdependence between development and operations teams.'),(0,o.kt)("h3",{id:"silo-effect"},"Silo Effect"),(0,o.kt)("p",null,"Let's explore why DevOps is necessary through a simple scenario."),(0,o.kt)("p",null,"In the early stages of a service, there are fewer supported features, and the team or company is relatively small. At this point, there may not be a clear distinction between development and operations, or the teams may be small. The key point here is the small scale. In such cases, there are many points of contact for effective communication, and with a limited number of services to focus on, it is possible to rapidly improve the service."),(0,o.kt)("p",null,"However, as the service scales up, the development and operations teams tend to separate, and the physical limitations of communication channels become apparent. For example, in meetings involving multiple teams, only team leaders or a small number of seniors may attend, rather than the entire team. These limitations in communication channels inevitably lead to a lack of communication. Consequently, the development team continues to develop new features, while the operations team faces issues during deployment caused by the features developed by the development team."),(0,o.kt)("p",null,"When such situations are repeated, it can lead to organizational silos, a phenomenon known as silo mentality."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"silo",src:n(1598).Z,width:"892",height:"498"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Indeed, the term "silo" originally refers to a tall, cylindrical structure used for storing grain or livestock feed. Silos are designed to keep the stored materials separate and prevent them from mixing.\nIn the context of organizations, the "silo effect" or "organizational silos effect" refers to a phenomenon where departments or teams within an organization operate independently and prioritize their own interests without effective collaboration. It reflects a mentality where individual departments focus on building their own "silos" and solely pursue their own interests.')),(0,o.kt)("p",null,"The silo effect can lead to a decline in service quality and hinder organizational performance. To address this issue, DevOps emerged as a solution. DevOps emphasizes collaboration, communication, and integration between development and operations teams, breaking down the barriers and fostering a culture of shared responsibility and collaboration. By promoting cross-functional teamwork and streamlining processes, DevOps aims to overcome silos and improve the efficiency and effectiveness of software development and operations."),(0,o.kt)("h3",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,"Continuous Integration (CI) and Continuous Delivery (CD) are concrete methods to break down the barriers between development teams and operations teams."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cicd",src:n(7204).Z,width:"1400",height:"299"})),(0,o.kt)("p",null,"Through this method, the development team can understand the operational environment and check whether the features being developed can be seamlessly deployed. The operations team can deploy validated features or improved products more often to increase customer product experience. In summary, DevOps is a methodology to solve the problem between development teams and operations teams."),(0,o.kt)("h2",{id:"mlops"},"MLOps"),(0,o.kt)("h3",{id:"1-ml--ops"},"1) ML + Ops"),(0,o.kt)("p",null,"DevOps is a methodology that addresses the challenges between development and operations teams, promoting collaboration and effective communication. By applying DevOps principles, development teams gain a better understanding of the operational environment, and the developed features can be seamlessly integrated and deployed. On the other hand, operations teams can deploy validated features or improved products more frequently, enhancing the overall customer experience."),(0,o.kt)("p",null,'MLOps, which stands for Machine Learning Operations, extends the DevOps principles and practices specifically to the field of machine learning. In MLOps, the "Dev" in DevOps is replaced with "ML" to emphasize the unique challenges and considerations related to machine learning.'),(0,o.kt)("p",null,"MLOps aims to address the issues that arise between machine learning teams and operations teams. To understand these issues, let's consider an example using a recommendation system."),(0,o.kt)("h4",{id:"rule-based-approach"},"Rule-Based Approach"),(0,o.kt)("p",null,"In the initial stages of building a recommendation system, a simple rule-based approach may be used. For example, items could be recommended based on the highest sales volume in the past week. With this approach, there is no need for model updates unless there are specific reasons for modification."),(0,o.kt)("h4",{id:"machine-learning-approach"},"Machine Learning Approach"),(0,o.kt)("p",null,"As the scale of the service grows and more log data accumulates, machine learning models can be developed based on item-based or user-based recommendations. In this case, the models are periodically retrained and redeployed."),(0,o.kt)("h4",{id:"deep-learning-approach"},"Deep Learning Approach"),(0,o.kt)("p",null,"When there is a greater demand for personalized recommendations and a need for models that deliver higher performance, deep learning models are developed. Similar to machine learning, these models are periodically retrained and redeployed."),(0,o.kt)("p",null,"By considering these examples, it becomes evident that challenges can arise between the machine learning team and the operations team. MLOps aims to address these challenges and provide a methodology and set of practices to facilitate the development, deployment, and operation of machine learning models in a collaborative and efficient manner."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"graph",src:n(2276).Z,width:"752",height:"582"})),(0,o.kt)("p",null,"If we represent the concepts explained earlier on a graph, with model complexity on the x-axis and model performance on the y-axis, we can observe an upward trend where the model performance improves as the complexity increases. This often leads to the emergence of separate machine learning teams specializing in transitioning from traditional machine learning to deep learning."),(0,o.kt)("p",null,"If there are only a few models to manage, collaboration between teams can be sufficient to address the challenges. However, as the number of models to develop increases, silos similar to those observed in DevOps can emerge."),(0,o.kt)("p",null,"Considering the goals of DevOps, we can understand the goals of MLOps as ensuring that the developed models can be deployed successfully. While DevOps focuses on verifying that the features developed by the development team can be deployed correctly, MLOps focuses on verifying that the models developed by the machine learning team can be deployed effectively."),(0,o.kt)("h3",{id:"2-ml---ops"},"2) ML -> Ops"),(0,o.kt)("p",null,"However, recent MLOps-related products and explanations indicate that the goals are not limited to what was previously described. In some cases, the goal is to enable the machine learning team to directly operate and manage the models they develop. This need arises from the process of ongoing machine learning projects."),(0,o.kt)("p",null,"In the case of recommendation systems, it was possible to start with simple models in operations. However, in domains such as natural language processing and image analysis, it is common to perform verification (POC) to determine if deep learning models can solve the given tasks. Once the verification is complete, the focus shifts to developing the operational environment for serving the models. However, it may not be easy for the machine learning team to handle this challenge with their internal capabilities alone. This is where MLOps becomes necessary."),(0,o.kt)("h3",{id:"3-conclusion"},"3) Conclusion"),(0,o.kt)("p",null,"In summary, MLOps has two main goals. The earlier explanation of MLOps focused on ML+Ops, aiming to enhance productivity and collaboration between the two teams. On the other hand, the latter explanation focused on ML -> Ops, aiming to enable the machine learning team to directly operate and manage their models."))}h.isMDXComponent=!0},7204:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cicd-775808741b1fa127eadb1fce55de3dab.png"},2276:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graph-7329fb49fdf8c0b00d3c186386b5860e.png"},1598:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/silo-3cd9f9bdf17c846f82fd0dde78e01052.png"}}]);