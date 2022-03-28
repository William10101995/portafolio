import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import myimage from "../Images/Iam.jpg";

const resources = {
  en: {
    translation: {
      DS: "Backend job",
      DM: "Hello I want a REST API.",
      ok: "Ok let's go!",
      AyN: "Name",
      tel: "Phone",
      email: "Email",
      asunto: "Subject",
      mensaje: "Message",
      enviar: "Send",
      info: "More information ",
      contactate: "Contact Me",
      init: "Home",
      proyec: "Projects",
      about: "About",
      contact: "Contact",
      hab: "Skills",
      sloganI: "Let's be realistic, let's do the impossible!",
      FirstName: "William",
      LastName: "Lopez",
      Slogan: "Hello, my name is ",
      Especializacion: "Backend Developer",
      Address: "Monteagudo 332",
      City: "Resistencia",
      Image: myimage,
      State: "Chaco",
      Country: "Argentina",
      CodPostal: "3500",
      Phone: "+54 9 362-4771222",
      Email: "lopezwilliam177@gmail.com",
      Description:
        "Information Systems Engineering student. Proactive and innovative, always knowing new technologies. Passionate about agile methodologies. Great communication and teamwork skills. My goal is to grow professionally in IT. I like spending time with friends and playing sports.",
      SocialMedia: {
        Facebook: "https://www.facebook.com/profile.php?id=100059503361624",
        Twitter: "https://twitter.com/WilliamLopezco",
        Instagram: "https://www.instagram.com/williamlopez3",
        Linkedin: "https://www.linkedin.com/in/williamjuanjoselopez",
        GitHub: "https://github.com/William10101995",
      },
      Skills: [
        {
          id: 1,
          name: "JavaScript",
          progress: `@keyframes JavaScript {
          0% { width: 0; }
          100% { width: 50%; }
        }`,
        },
        {
          id: 2,
          name: "TypeScript",
          progress: `@keyframes TypeScript {
          0% { width: 0; }
          100% { width: 70%; }
        }`,
        },
        {
          id: 3,
          name: "React",
          progress: `@keyframes React {
          0% { width: 0; }
          100% { width: 30%; }
        }`,
        },
        {
          id: 4,
          name: "NodeJS",
          progress: `@keyframes NodeJS {
          0% { width: 0; }
          100% { width: 60%; }
        }`,
        },
      ],
      1: " Ministry REST API",

      N1: " Ministry REST API",
      D1: "Complete Backend project. JWT, ABM, Non-Relational Database.",

      N2: "Twitter Bot",
      D2: "Twitter bot made with TypeScript, tweets every 12h and responds to mentions.",

      N3: "Business REST API",
      D3: "Simple Backend project using NodeJS Express and MongoDB.",

      N4: "Political Seismograph",
      D4: "FullStack project using React, NodeJs, Twitter API, OpenAI API and Socket.io.",

      N5: "Stop Bus",
      D5: "Project made using React and Leaflet to see bus stops on a map.",

      N6: "Academic calendar",
      D6: "Project made using React. An interactive academic calendar of the university.",

      ViewRepo: "View Repository",
    },
  },
  ar: {
    translation: {
      DM: "Hola, quiero una REST API.",
      DS: "Trabajo Backend",
      ok: "Muy bien, vamos!",
      AyN: "Nombre",
      tel: "Telefono",
      email: "Email",
      asunto: "Asunto",
      mensaje: "Mensaje",
      enviar: "Enviar",
      info: "Más Información",
      contactate: "Contáctame",
      init: "Inicio",
      proyec: "Proyectos",
      about: "Sobre mi",
      contact: "Contacto",
      hab: "Habilidades",
      sloganI: "¡Seamos realistas, hagamos lo imposible!",
      FirstName: "William",
      LastName: "Lopez",
      Slogan: "Hola, mi nombre es ",
      Especializacion: "Backend Developer",
      Address: "Monteagudo 332",
      City: "Resistencia",
      Image: myimage,
      State: "Chaco",
      Country: "Argentina",
      CodPostal: "3500",
      Phone: "+54 9 362-4771222",
      Email: "lopezwilliam177@gmail.com",
      Description:
        "Estudiante de Ingeniería en Sistemas de Información. Proactivo e innovador, siempre conociendo nuevas tecnologías. Apasionado de las metodologías ágiles. Grandes habilidades de comunicación y trabajo en equipo. Mi objetivo es crecer profesionalmente en IT. Me gusta pasar tiempo con amigos y hacer deporte.",
      SocialMedia: {
        Facebook: "https://www.facebook.com/profile.php?id=100059503361624",
        Twitter: "https://twitter.com/WilliamLopezco",
        Instagram: "https://www.instagram.com/williamlopez3",
        Linkedin: "https://www.linkedin.com/in/williamjuanjoselopez",
        GitHub: "https://github.com/William10101995",
      },
      Skills: [
        {
          id: 1,
          name: "JavaScript",
          progress: `@keyframes JavaScript {
          0% { width: 0; }
          100% { width: 50%; }
        }`,
        },
        {
          id: 2,
          name: "TypeScript",
          progress: `@keyframes TypeScript {
          0% { width: 0; }
          100% { width: 70%; }
        }`,
        },
        {
          id: 3,
          name: "React",
          progress: `@keyframes React {
          0% { width: 0; }
          100% { width: 30%; }
        }`,
        },
        {
          id: 4,
          name: "NodeJS",
          progress: `@keyframes NodeJS {
          0% { width: 0; }
          100% { width: 60%; }
        }`,
        },
      ],
      ViewRepo: "Ver Repositorio",

      N1: " Ministerio REST API",
      D1: "Proyecto de Backend completo. JWT, ABM, Base de Datos No Relacional.",

      N2: "Twitter Bot",
      D2: "Bot de twitter realizado con TypeScript, tuitea cada 12hs y responde menciones.",
      N3: "Business REST API",
      D3: "Proyecto Backend simple utilizando NodeJS Express y MongoDB.",
      N4: "Sismografo Politico",
      D4: "Proyecto FullStack utilizando React, NodeJs, Twitter API, OpenAI API y Socket.io.",
      N5: "Stop Bus",
      D5: "Proyecto realizado utilizando React y Leaflet para ver paradas de colectivos en un mapa.",

      N6: "Calendario",
      D6: "Proyecto realizado utilizando React. Un calendario academico interactivo de la universidad.",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
