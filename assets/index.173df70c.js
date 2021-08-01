var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{C as m,R as s,M as o,G as r,N as d,m as p,a as E,b as u,c as h,s as N,F as g,d as v,e as b,f,g as y,h as k,B as w,A as S,S as j,i as C}from"./vendor.571e5401.js";const I=()=>{const[e,a]=m.exports.useState(!1);function t(){a(!e)}return s.createElement("div",{className:"contenedor-nav"},s.createElement("li",{className:"iconResponsive",onClick:t},s.createElement("a",null,e?s.createElement(r,null):s.createElement(o,null))),s.createElement("ul",{className:e?"menu  active":"menu"},s.createElement("li",{className:"item"},s.createElement(d,{exact:!0,to:"/",activeClassName:"active",className:"link",onClick:t},"Home")),s.createElement("li",{className:"item"},s.createElement(d,{to:"/about",activeClassName:"active",className:"link",onClick:t},"About")),s.createElement("li",{className:"item"},s.createElement(d,{to:"/projects",activeClassName:"active",className:"link",onClick:t},"Projects")),s.createElement("li",{className:"item"},s.createElement(d,{to:"/contact",activeClassName:"active",className:"link",onClick:t},"Contact"))))},M={in:{y:20,opacity:0},out:{y:0,opacity:1}},P={duration:.5};const x={FirstName:"William",LastName:"Lopez",Slogan:"Hola, mi nombre es",Address:"Monteagudo 332",City:"Resistencia",Image:"/assets/Iam.cdf49903.jpeg",State:"Chaco",Country:"Argentina",CodPostal:"3500",Phone:"+54 9 362-4771222",Email:"lopezwilliam177@gmail.com",Description:"Estudiante de Ingeniería en Sistemas de Información. Proactivo e innovador, siempre conociendo nuevas tecnologías. Apasionado de las metodologías ágiles y bases de datos. Grandes habilidades de comunicación y trabajo en equipo. Mi objetivo es crecer profesionalmente en IT. Me gusta pasar tiempo con amigos o hacer deporte. Todo es mejor con un mate.",SocialMedia:{Facebook:"https://www.facebook.com/profile.php?id=100059503361624",Twitter:"https://twitter.com/WilliamLopezco",Instagram:"https://www.instagram.com/williamlopez3",Linkedin:"https://www.linkedin.com/in/williamjuanjoselopez",GitHub:"https://github.com/William10101995"},Skills:[{id:1,name:"JavaScript",progress:"@keyframes JavaScript {\n      0% { width: 0; }\n      100% { width: 70%; }\n    }"},{id:2,name:"TypeScript",progress:"@keyframes TypeScript {\n      0% { width: 0; }\n      100% { width: 50%; }\n    }"},{id:3,name:"React",progress:"@keyframes React {\n      0% { width: 0; }\n      100% { width: 30%; }\n    }"},{id:4,name:"NodeJS",progress:"@keyframes NodeJS {\n      0% { width: 0; }\n      100% { width: 60%; }\n    }"}],Projects:[{id:1,Name:" Ministerio REST API",Description:"Proyecto de Backend completo. JWT, ABM, Base de Datos No Relacional y mas.",Link:"https://github.com/William10101995/ministeriodesarrolloproductivo",Image:"/assets/CardMinisterio.b34959c1.png"},{id:2,Name:"Twitter Bot",Description:"Bot de twitter realizado con TypeScript, tuitea cada 12hs y responde menciones.",Link:"https://github.com/William10101995/bottwitter",Image:"/assets/CardBot.6f3a48aa.png"},{id:3,Name:"Business REST API",Description:"Proyecto Backend simple utilizando NodeJS Express y MongoDB.",Link:"https://github.com/William10101995/Business_RestAPI",Image:"/assets/CardApi.0308e919.png"}]};k.render(s.createElement(s.StrictMode,null,s.createElement(w,null,s.createElement(S,null,s.createElement(j,null,s.createElement(C,{exact:!0,path:"/",component:()=>s.createElement("div",{className:"contenedor-home"},s.createElement(I,null),s.createElement(p.div,{className:"contenedor-home",initial:"in",animate:"out",exit:"in",transition:P,variants:M},s.createElement("div",{className:"contenedorsnav"},s.createElement("div",{className:"myimages"},s.createElement("img",{src:x.Image,alt:"my personal image"})),s.createElement("h1",null,x.Slogan," ",s.createElement("span",{className:"estilonombre"},x.FirstName)),s.createElement("div",{className:"contenedorsocial"},s.createElement("ul",{className:"socialmedia"},s.createElement("li",{className:"socialitem"},s.createElement("a",{href:x.SocialMedia.Facebook,className:"facebook"},s.createElement(g,null))),s.createElement("li",{className:"socialitem"},s.createElement("a",{href:x.SocialMedia.Twitter,className:"twitter"},s.createElement(v,null))),s.createElement("li",{className:"socialitem"},s.createElement("a",{href:x.SocialMedia.Instagram,className:"ig"},s.createElement(b,null))),s.createElement("li",{className:"socialitem"},s.createElement("a",{href:x.SocialMedia.Linkedin,className:"linkedin"},s.createElement(f,null))),s.createElement("li",{className:"socialitem"},s.createElement("a",{href:x.SocialMedia.GitHub,className:"git"},s.createElement(y,null))))))))}),s.createElement(C,{path:"/about",component:()=>s.createElement("div",{className:"contenedor-about"},s.createElement(I,null),s.createElement(p.div,{className:"contenedor-home",initial:"in",animate:"out",exit:"in",transition:P,variants:M},s.createElement("div",{className:"contenedorsinnav"},s.createElement("div",{className:"columnaderecha"},s.createElement("img",{src:x.Image,alt:"imgage william lopez"})),s.createElement("div",{className:"columnaizquierda"},s.createElement("div",{className:"filaarriba"},s.createElement("h1",null," Sobre Mi "),s.createElement("p",null," ",x.Description," ")),s.createElement("div",{className:"filaabajo"},s.createElement("h2",null," Habilidades "),x.Skills.map((e=>s.createElement("div",{className:"skill",key:e.id},s.createElement("h3",null,e.name),s.createElement("div",{className:"progress"},s.createElement("div",{className:"progress-value",style:{animation:`${e.name} 3s normal forwards`}}," ",s.createElement("style",null," ",e.progress)))))))))))}),s.createElement(C,{path:"/projects",component:()=>s.createElement("div",{className:"contenedor-projects"},s.createElement(I,null),s.createElement(p.div,{className:"contenedor-home",initial:"in",animate:"out",exit:"in",transition:P,variants:M},s.createElement("div",{className:"contenedorsinnavprojects"},x.Projects.map((e=>s.createElement("div",{className:"project",key:e.id},s.createElement("img",{src:e.Image,alt:"card projects"}),s.createElement("div",{className:"bodycard"},s.createElement("h1",null,e.Name),s.createElement("p",null,e.Description),s.createElement("form",{action:e.Link,method:"get",target:"_blank"},s.createElement("button",null,"Ver Repositorio ")))))))))}),s.createElement(C,{path:"/contact",component:()=>{const[e,o]=m.exports.useState({fullname:"",email:"",phone:"",affair:"",message:""}),r=m=>{var s,r;o((s=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(n)for(var t of n(a))i.call(a,t)&&c(e,t,a[t]);return e})({},e),r={[m.target.name]:m.target.value},a(s,t(r))))},[d,g]=m.exports.useState(!1),v=a=>{""!=e.fullname&&""!=e.email&&""!=e.phone&&""!=e.affair&&""!=e.message?(g(!0),a.preventDefault(),N("service_7l96ivh","template_amt8mip",a.target,"user_4qQ9W9Mah6DyLBxYTYogA").then((e=>{console.log(e.text)}),(e=>{console.log(e.text)}))):alert("Por favor complete todos los campos")},b=()=>s.createElement(p.div,{className:"contenedor-home",initial:"in",animate:"out",exit:"in",transition:P,variants:M},s.createElement("h5",{className:"messagebefore"},"Muy bien, vamos!"));return s.createElement("div",{className:"contenedor-contact"},s.createElement(I,null),s.createElement(p.div,{className:"contenedor-home",initial:"in",animate:"out",exit:"in",transition:P,variants:M},s.createElement("div",{className:"contenedorsinnavcontact"},s.createElement("h1",null,"Contact ",s.createElement("span",{className:"estilome"},"Me")),d?s.createElement(b,null):s.createElement("div",{className:"contenedorcontact"},s.createElement("div",{className:"formulario"},s.createElement("form",{action:"",onSubmit:v},s.createElement("p",null,s.createElement("label",{htmlFor:"fullname"},"Apellido y Nombre"),s.createElement("input",{type:"text",onChange:r,name:"fullname",placeholder:"Jean Doe",id:"fullname"})),s.createElement("p",null,s.createElement("label",{htmlFor:"email"},"Email"),s.createElement("input",{type:"email",onChange:r,name:"email",placeholder:"jeandoe@example.com",id:"email"})),s.createElement("p",null,s.createElement("label",{htmlFor:"phone"},"Teléfono"),s.createElement("input",{type:"tel",onChange:r,name:"phone",placeholder:"+54 9 362-4111265",id:"phone"})),s.createElement("p",null,s.createElement("label",{htmlFor:"affair"},"Asunto"),s.createElement("input",{type:"text",onChange:r,name:"affair",placeholder:"Backend Work",id:"affair"})),s.createElement("p",{className:"block"},s.createElement("label",{htmlFor:"message"},"Mensaje"),s.createElement("textarea",{name:"message",onChange:r,placeholder:"I want a API REST",id:"message"})),s.createElement("p",{className:"block"},s.createElement("button",{type:"submit",className:"btn-contact"},"Enviar")))),s.createElement("div",{className:"info"},s.createElement("h3",null,"Más Información"),s.createElement("ul",null,s.createElement("li",null,s.createElement(E,{className:"icon-whatsapp"}),x.Phone),s.createElement("li",null,s.createElement(u,{className:"icon-map-pin"})," ",x.City,","," ",x.State),s.createElement("li",null,s.createElement(h,{className:"icon-mail-send"})," ",x.Email)),s.createElement("p",null,"Ponte en contacto conmigo y vamos a realizar eso que siempre soñaste!."))))))}}))))),document.getElementById("root"));
