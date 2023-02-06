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
      about: "About me",
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
        "I am an advanced student of information systems engineering with leadership and effective communication skills. I have a deep understanding of Scrum and can apply effective work frameworks. My goal is to use my skills and knowledge on challenging projects to help organizations reach their goals. I am proactive, dedicated, and have a great ability to work in a team. My passion for technology and quick adaptability to change makes me an ideal candidate for any development team.",
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
      Hard: "Hard Skills",
      Soft: "Soft Skills",
      H1: "JavaScript",

      H2: "TypeScript",

      H3: "Python",

      H4: "MongoDB",

      H5: "MySQL",

      H6: "React",

      H7: "NodeJS",

      H8: "Kubernetes",

      H9: "Docker",

      H10: "Git & GitHub",

      H11: "Scrum",

      S1: "Leadership",

      S2: "Teamwork",

      S3: "Communication",

      S4: "Problem Solving",

      S5: "Adaptability",

      S6: "Creativity",

      S7: "Time Management",

      S8: "Organization",

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
      N7: "Multilayer Perceptron",
      D7: "Implementation of an MLP in Python for character recognition.",

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
        "Soy un estudiante avanzado de ingeniería en sistemas de información con habilidades en liderazgo y comunicación efectiva. Tengo comprensión de Scrum y puedo aplicar marcos de trabajo eficaces. Mi objetivo es utilizar mis habilidades y conocimientos en proyectos desafiantes para ayudar a las organizaciones a lograr sus metas. Soy proactivo, dedicado y tengo una gran capacidad para trabajar en equipo. Mi pasión por la tecnología y habilidad de adaptación rápida a los cambios me convierten en un candidato ideal para cualquier equipo de desarrollo.",
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
      Hard: "Habilidades Blandas",
      Soft: "Habilidades Duras",

      H1: "JavaScript",

      H2: "TypeScript",

      H3: "Python",

      H4: "MongoDB",

      H5: "MySQL",

      H6: "React",

      H7: "NodeJS",

      H8: "Kubernetes",

      H9: "Docker",

      H10: "Git & GitHub",

      H11: "Scrum",

      S1: "Liderazgo",

      S2: "Trabajo en equipo",

      S3: "Comunicación",

      S4: "Resolución de problemas",

      S5: "Adaptabilidad",

      S6: "Creatividad",

      S7: "Gestión del tiempo",

      S8: "Organización",

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
      N7: "Multilayer Perceptron",
      D7: "Implementación de un Multilayer Perceptron en Python para reconocimiento de caracteres.",
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
