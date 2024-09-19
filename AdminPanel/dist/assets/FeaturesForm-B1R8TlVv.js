import{r as d,j as e}from"./react-D74B1hbq.js";import{H as u}from"./Http-BBBGMgZJ.js";import"./classnames-H1cwLBKI.js";const b=()=>{const[a,n]=d.useState({subTitle:"",title:"",cardTitle1:"",cardDesc1:"",cardTitle2:"",cardDesc2:"",cardTitle3:"",cardDesc3:"",email:""}),[r,c]=d.useState({}),[o,m]=d.useState(""),s=i=>{const{name:l,value:t}=i.target;n({...a,[l]:t})},x=async i=>{i.preventDefault(),c({}),m("");const l={};if(Object.keys(a).forEach(t=>{a[t]||(l[t]="This field is required")}),/\S+@\S+\.\S+/.test(a.email)||(l.email="Invalid email address"),Object.keys(l).length>0){c(l);return}try{const t=await fetch(`${u}/features`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(t.ok)m("Feature created successfully!"),n({subTitle:"",title:"",cardTitle1:"",cardDesc1:"",cardTitle2:"",cardDesc2:"",cardTitle3:"",cardDesc3:"",email:""});else{const h=await t.json();c(h.errors||{})}}catch(t){console.error("Error:",t),c({global:"An error occurred. Please try again."})}};return e.jsxs("div",{className:"feature-form-container",children:[e.jsx("h2",{children:"Create New Feature"}),o&&e.jsx("p",{className:"success-message",children:o}),r.global&&e.jsx("p",{className:"error-message",children:r.global}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"subTitle",children:"Subtitle:"}),e.jsx("input",{type:"text",id:"subTitle",name:"subTitle",value:a.subTitle,onChange:s}),r.subTitle&&e.jsx("span",{className:"error-text",children:r.subTitle})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"title",children:"Title:"}),e.jsx("input",{type:"text",id:"title",name:"title",value:a.title,onChange:s}),r.title&&e.jsx("span",{className:"error-text",children:r.title})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardTitle1",children:"Card Title 1:"}),e.jsx("input",{type:"text",id:"cardTitle1",name:"cardTitle1",value:a.cardTitle1,onChange:s}),r.cardTitle1&&e.jsx("span",{className:"error-text",children:r.cardTitle1})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardDesc1",children:"Card Description 1:"}),e.jsx("textarea",{id:"cardDesc1",name:"cardDesc1",value:a.cardDesc1,onChange:s}),r.cardDesc1&&e.jsx("span",{className:"error-text",children:r.cardDesc1})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardTitle2",children:"Card Title 2:"}),e.jsx("input",{type:"text",id:"cardTitle2",name:"cardTitle2",value:a.cardTitle2,onChange:s}),r.cardTitle2&&e.jsx("span",{className:"error-text",children:r.cardTitle2})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardDesc2",children:"Card Description 2:"}),e.jsx("textarea",{id:"cardDesc2",name:"cardDesc2",value:a.cardDesc2,onChange:s}),r.cardDesc2&&e.jsx("span",{className:"error-text",children:r.cardDesc2})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardTitle3",children:"Card Title 3:"}),e.jsx("input",{type:"text",id:"cardTitle3",name:"cardTitle3",value:a.cardTitle3,onChange:s}),r.cardTitle3&&e.jsx("span",{className:"error-text",children:r.cardTitle3})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cardDesc3",children:"Card Description 3:"}),e.jsx("textarea",{id:"cardDesc3",name:"cardDesc3",value:a.cardDesc3,onChange:s}),r.cardDesc3&&e.jsx("span",{className:"error-text",children:r.cardDesc3})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:s}),r.email&&e.jsx("span",{className:"error-text",children:r.email})]}),e.jsx("button",{type:"submit",className:"submit-button",children:"Submit"})]})]})};export{b as default};
