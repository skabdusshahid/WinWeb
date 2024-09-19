import{r as i,j as e}from"./react-D74B1hbq.js";import{a as p}from"./axios-BimPEqV4.js";import{H as l}from"./Http-BBBGMgZJ.js";import"./classnames-H1cwLBKI.js";const z=()=>{const[x,u]=i.useState([]),[b,g]=i.useState(!0),[m,h]=i.useState(null),[f,d]=i.useState(null),[a,c]=i.useState({title:"",subTitle:"",cardTitle1:"",cardDesc1:"",cardTitle2:"",cardDesc2:"",cardTitle3:"",cardDesc3:"",sponsorImg:[]});i.useEffect(()=>{(async()=>{try{const r=await p.get(`${l}/consulting`);u(r.data),g(!1)}catch{h("Failed to fetch data"),g(!1)}})()},[]);const T=t=>{d(t),c({title:t.title,subTitle:t.subTitle,cardTitle1:t.cardTitle1,cardDesc1:t.cardDesc1,cardTitle2:t.cardTitle2,cardDesc2:t.cardDesc2,cardTitle3:t.cardTitle3,cardDesc3:t.cardDesc3,sponsorImg:t.sponsorImg})},s=t=>{const{name:r,value:o}=t.target;c({...a,[r]:o})},j=t=>{c({...a,sponsorImg:t.target.files})},y=async t=>{t.preventDefault();const r=new FormData;r.append("title",a.title),r.append("subTitle",a.subTitle),r.append("cardTitle1",a.cardTitle1),r.append("cardDesc1",a.cardDesc1),r.append("cardTitle2",a.cardTitle2),r.append("cardDesc2",a.cardDesc2),r.append("cardTitle3",a.cardTitle3),r.append("cardDesc3",a.cardDesc3);for(const o of a.sponsorImg)r.append("sponsorImg",o);try{await p.put(`${l}/consulting/${f._id}`,r,{headers:{"Content-Type":"multipart/form-data"}});const o=await p.get(`${l}/consulting`);u(o.data),d(null)}catch{h("Failed to update data")}},D=t=>t.replace(/\\/g,"/").split("/").pop();return b?e.jsx("p",{style:n.loading,children:"Loading..."}):m?e.jsx("p",{style:n.error,children:m}):e.jsxs("div",{style:n.container,children:[e.jsx("h1",{style:n.title,children:"Consulting Data"}),f?e.jsxs("form",{onSubmit:y,style:n.form,children:[e.jsx("h2",{children:"Edit Consulting Data"}),e.jsxs("label",{children:["Title:",e.jsx("input",{type:"text",name:"title",value:a.title,onChange:s,required:!0})]}),e.jsxs("label",{children:["SubTitle:",e.jsx("input",{type:"text",name:"subTitle",value:a.subTitle,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Title 1:",e.jsx("input",{type:"text",name:"cardTitle1",value:a.cardTitle1,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Description 1:",e.jsx("input",{type:"text",name:"cardDesc1",value:a.cardDesc1,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Title 2:",e.jsx("input",{type:"text",name:"cardTitle2",value:a.cardTitle2,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Description 2:",e.jsx("input",{type:"text",name:"cardDesc2",value:a.cardDesc2,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Title 3:",e.jsx("input",{type:"text",name:"cardTitle3",value:a.cardTitle3,onChange:s,required:!0})]}),e.jsxs("label",{children:["Card Description 3:",e.jsx("input",{type:"text",name:"cardDesc3",value:a.cardDesc3,onChange:s,required:!0})]}),e.jsxs("label",{children:["Sponsor Images:",e.jsx("input",{type:"file",name:"sponsorImg",multiple:!0,onChange:j})]}),e.jsx("button",{type:"submit",children:"Update"}),e.jsx("button",{type:"button",onClick:()=>d(null),children:"Cancel"})]}):e.jsx(e.Fragment,{children:x.length===0?e.jsx("p",{style:n.noData,children:"No data available"}):e.jsx("ul",{style:n.list,children:x.map(t=>e.jsxs("li",{style:n.item,children:[e.jsx("h2",{style:n.itemTitle,children:t.title}),e.jsx("h3",{style:n.itemSubTitle,children:t.subTitle}),e.jsx("div",{style:n.cardContainer,children:[{title:t.cardTitle1,desc:t.cardDesc1},{title:t.cardTitle2,desc:t.cardDesc2},{title:t.cardTitle3,desc:t.cardDesc3}].map((r,o)=>e.jsxs("div",{style:n.card,children:[e.jsx("h4",{style:n.cardTitle,children:`Card ${o+1}`}),e.jsx("p",{children:r.title}),e.jsx("p",{children:r.desc})]},o))}),e.jsxs("div",{style:n.sponsorContainer,children:[e.jsx("h4",{style:n.sponsorTitle,children:"Sponsor Images"}),t.sponsorImg&&Array.isArray(t.sponsorImg)&&t.sponsorImg.map((r,o)=>e.jsx("img",{src:`${l}/uploads/${D(r)}`,alt:`Sponsor ${o+1}`,style:n.sponsorImg},o))]}),e.jsx("button",{onClick:()=>T(t),style:n.editButton,children:"Edit"})]},t._id))})})]})},n={container:{padding:"20px",fontFamily:"Arial, sans-serif",maxWidth:"1200px",margin:"0 auto",boxSizing:"border-box"},title:{fontSize:"2rem",marginBottom:"20px",color:"#333",textAlign:"center"},noData:{textAlign:"center",fontSize:"1.2rem",color:"#666"},loading:{textAlign:"center",fontSize:"1.2rem",color:"#007bff"},error:{textAlign:"center",fontSize:"1.2rem",color:"#dc3545"},list:{listStyleType:"none",padding:0,margin:0},item:{marginBottom:"30px",border:"1px solid #ddd",borderRadius:"8px",padding:"20px",backgroundColor:"#f9f9f9"},itemTitle:{fontSize:"1.5rem",marginBottom:"10px",color:"#333"},itemSubTitle:{fontSize:"1.2rem",marginBottom:"20px",color:"#555"},cardContainer:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginBottom:"20px"},card:{flex:"1 1 calc(33.333% - 20px)",margin:"10px",padding:"15px",border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",boxSizing:"border-box"},cardTitle:{fontSize:"1.2rem",marginBottom:"10px",color:"#333"},sponsorContainer:{textAlign:"center"},sponsorTitle:{fontSize:"1.2rem",marginBottom:"10px",color:"#333"},sponsorImg:{maxWidth:"200px",margin:"10px",borderRadius:"8px"},deleteButton:{backgroundColor:"#dc3545",color:"#fff",border:"none",borderRadius:"4px",padding:"10px 15px",cursor:"pointer",fontSize:"1rem",marginTop:"10px",display:"block",width:"100%",textAlign:"center"},editButton:{backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"4px",padding:"10px 15px",cursor:"pointer",fontSize:"1rem",marginTop:"10px",display:"block",width:"100%",textAlign:"center"},form:{marginBottom:"20px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#f9f9f9"}};export{z as default};
