import{j as e,r as l}from"./react-D74B1hbq.js";import{a as K}from"./axios-BimPEqV4.js";import{M as ee}from"./react-modal-CsjeR904.js";/* empty css                  */import{H as d}from"./Http-BBBGMgZJ.js";import"./classnames-H1cwLBKI.js";import"./react-dom-DJ-eYT0o.js";import"./scheduler-CzFDRTuY.js";import"./prop-types-C6eKGBAC.js";import"./warning-BwjNEfsz.js";import"./exenv-CzcXRatL.js";import"./react-lifecycles-compat-B-eT57R9.js";const te=({isOpen:o,onRequestClose:c,currentBasic:r,logo:L,heroImage:P,headline:j,desc:n,navbarItems:v,newNavbarItem:p,countTitle1:f,countValue1:h,countTitle2:N,countValue2:b,countTitle3:C,countValue3:y,countTitle4:_,countValue4:u,handleFileChange:m,handleNavbarInput:x,handleRemoveNavbarItem:I,handleEdit:S,setHeadline:E,setDesc:D,setNewNavbarItem:w,setCountTitle1:T,setCountValue1:V,setCountTitle2:B,setCountValue2:H,setCountTitle3:$,setCountValue3:M,setCountTitle4:k,setCountValue4:A})=>e.jsxs(ee,{isOpen:o,onRequestClose:c,contentLabel:"Edit Basic Data",style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",width:"80%",maxWidth:"700px",height:"auto",maxHeight:"500px",overflowY:"auto",backgroundColor:"#fff"}},children:[e.jsx("h2",{className:"form-title",children:"Edit Basic Data"}),e.jsxs("form",{onSubmit:S,className:"basic-info-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Logo:"}),r.logo&&e.jsx("img",{src:`${d}/uploads/${W(r.logo)}`,alt:"Current Logo",style:{width:"100px",marginBottom:"10px"}}),e.jsx("input",{type:"file",name:"logo",accept:"image/*",onChange:m,className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Hero Image:"}),r.heroImage&&e.jsx("img",{src:`${d}/uploads/${W(r.heroImage)}`,alt:"Current Hero",style:{width:"100px",marginBottom:"10px"}}),e.jsx("input",{type:"file",name:"heroImage",accept:"image/*",onChange:m,className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Headline:"}),e.jsx("input",{type:"text",value:j,onChange:a=>E(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Description:"}),e.jsx("textarea",{value:n,onChange:a=>D(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Navbar Items:"}),e.jsxs("div",{className:"navbar-input-container",children:[e.jsx("input",{type:"text",value:p,onChange:a=>w(a.target.value),className:"form-input",placeholder:"Add navbar item"}),e.jsx("button",{type:"button",onClick:x,className:"add-navbar-button",children:"Add"})]}),e.jsx("ul",{className:"navbar-list",children:v.map((a,g)=>e.jsxs("li",{className:"navbar-list-item",children:[a,e.jsx("button",{type:"button",onClick:()=>I(g),className:"remove-navbar-button",children:"×"})]},g))})]}),e.jsxs("div",{className:"form-group double-inputs",children:[e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Title 1:"}),e.jsx("input",{type:"text",value:f,onChange:a=>T(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Value 1:"}),e.jsx("input",{type:"text",value:h,onChange:a=>V(a.target.value),className:"form-input"})]})]}),e.jsxs("div",{className:"form-group double-inputs",children:[e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Title 2:"}),e.jsx("input",{type:"text",value:N,onChange:a=>B(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Value 2:"}),e.jsx("input",{type:"text",value:b,onChange:a=>H(a.target.value),className:"form-input"})]})]}),e.jsxs("div",{className:"form-group double-inputs",children:[e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Title 3:"}),e.jsx("input",{type:"text",value:C,onChange:a=>$(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Value 3:"}),e.jsx("input",{type:"text",value:y,onChange:a=>M(a.target.value),className:"form-input"})]})]}),e.jsxs("div",{className:"form-group double-inputs",children:[e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Title 4:"}),e.jsx("input",{type:"text",value:_,onChange:a=>k(a.target.value),className:"form-input"})]}),e.jsxs("div",{className:"input-pair",children:[e.jsx("label",{className:"form-label",children:"Count Value 4:"}),e.jsx("input",{type:"text",value:u,onChange:a=>A(a.target.value),className:"form-input"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("button",{type:"submit",className:"submit-button",children:"Save"}),e.jsx("button",{type:"button",onClick:c,className:"cancel-button",children:"Cancel"})]})]})]}),W=o=>o.replace(/\\/g,"/").split("/").pop(),he=()=>{const[o,c]=l.useState([]),[r,L]=l.useState(null),[P,j]=l.useState(!1),[n,v]=l.useState(null),[p,f]=l.useState(null),[h,N]=l.useState(null),[b,C]=l.useState(""),[y,_]=l.useState(""),[u,m]=l.useState([]),[x,I]=l.useState(""),[S,E]=l.useState(""),[D,w]=l.useState(""),[T,V]=l.useState(""),[B,H]=l.useState(""),[$,M]=l.useState(""),[k,A]=l.useState(""),[a,g]=l.useState(""),[F,O]=l.useState(""),[Y,q]=l.useState(!1);l.useEffect(()=>{(async()=>{try{const s=await K.get(`${d}/basic`);c(s.data)}catch(s){L("Error fetching basic data"),console.error(s)}})()},[Y]);const G=t=>{v(t),f(t.logo),N(null),C(t.headline||""),_(t.desc||""),m(Array.isArray(t.navbar)?t.navbar:[]),E(t.count_title1||""),w(t.count_value1||""),V(t.count_title2||""),H(t.count_value2||""),M(t.count_title3||""),A(t.count_value3||""),g(t.count_title4||""),O(t.count_value4||""),j(!0)},z=()=>{j(!1),v(null)},Q=t=>{t.target.name==="logo"?f(t.target.files[0]):t.target.name==="heroImage"&&N(t.target.files[0])},U=()=>{x.trim()&&(m([...u,x.trim()]),I(""))},X=t=>{m(u.filter((s,i)=>i!==t))},Z=async t=>{t.preventDefault();const s=new FormData;p?s.append("logo",p):n&&s.append("existingLogo",n.logo||""),h?s.append("heroImage",h):n&&s.append("existingHeroImage",n.heroImage||""),s.append("headline",b),s.append("desc",y),s.append("navbar",JSON.stringify(u)),s.append("count_title1",S),s.append("count_value1",D),s.append("count_title2",T),s.append("count_value2",B),s.append("count_title3",$),s.append("count_value3",k),s.append("count_title4",a),s.append("count_value4",F);try{await K.put(`${d}/basic/${n._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});const i=o.map(J=>J._id===n._id?{...n,...Object.fromEntries(s.entries())}:J);c(i),q(!0),z()}catch(i){L("Error updating data"),console.error(i)}};if(r)return e.jsx("div",{children:r});if(o.length===0)return e.jsx("div",{children:"No basic data available"});const R=t=>t.replace(/\\/g,"/").split("/").pop();return e.jsxs("div",{className:"basic-info-view",children:[e.jsx("h1",{children:"Basic Data"}),o.map(t=>e.jsxs("div",{className:"basic-info-item",style:{marginBottom:"20px"},children:[e.jsx("h2",{children:"Basic Info"}),t.logo&&e.jsx("img",{src:`${d}/uploads/${R(t.logo)}`,className:"basic-info-logo",alt:"Logo"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Navbar:"}),e.jsx("ul",{className:"navbar-items",children:Array.isArray(t.navbar)&&t.navbar.map((s,i)=>e.jsx("li",{children:s},i))})]}),t.heroImage&&e.jsx("img",{style:{width:"200px"},src:`${d}/uploads/${R(t.heroImage)}`,className:"basic-info-image",alt:"Hero"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Headline:"})," ",t.headline]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",t.desc]}),e.jsxs("div",{className:"count-grid",children:[e.jsxs("div",{className:"count-item",children:[e.jsxs("h2",{children:[t.count_value1," ",e.jsx("sup",{children:"K"})]}),e.jsx("span",{children:t.count_title1})]}),e.jsxs("div",{className:"count-item",children:[e.jsxs("h2",{children:[t.count_value2," ",e.jsx("sup",{children:"m"})]}),e.jsx("span",{children:t.count_title2})]}),e.jsxs("div",{className:"count-item",children:[e.jsxs("h2",{children:[t.count_value3," ",e.jsx("sup",{children:"+"})]}),e.jsx("span",{children:t.count_title3})]}),e.jsxs("div",{className:"count-item",children:[e.jsxs("h2",{children:[t.count_value4," ",e.jsx("sup",{children:"m"})]}),e.jsx("span",{children:t.count_title4})]})]}),e.jsx("button",{onClick:()=>G(t),children:"Edit"})]},t._id)),n&&e.jsx(te,{isOpen:P,onRequestClose:z,currentBasic:n,logo:p,heroImage:h,headline:b,desc:y,navbarItems:u,newNavbarItem:x,countTitle1:S,countValue1:D,countTitle2:T,countValue2:B,countTitle3:$,countValue3:k,countTitle4:a,countValue4:F,handleFileChange:Q,handleNavbarInput:U,handleRemoveNavbarItem:X,handleEdit:Z,setHeadline:C,setDesc:_,setNewNavbarItem:I,setCountTitle1:E,setCountValue1:w,setCountTitle2:V,setCountValue2:H,setCountTitle3:M,setCountValue3:A,setCountTitle4:g,setCountValue4:O})]})};export{he as default};
