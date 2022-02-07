import myimage from "../Images/Iam.jpg";
import CardMinisterio from "../Images/CardMinisterio.png";
import CardBot from "../Images/CardBot.png";
import CardApi from "../Images/CardApi.png";
import CardBotSis from "../Images/CardBotSis.png";
export const myData = {
  FirstName: "William",
  LastName: "Lopez",
  Slogan: "Hola, mi nombre es",
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
  Projects: [
    {
      id: 1,
      Name: " Ministerio REST API",
      Description:
        "Proyecto de Backend completo. JWT, ABM, Base de Datos No Relacional.",
      Link: "https://github.com/William10101995/ministeriodesarrolloproductivo",
      Image: CardMinisterio,
      Ntrad: "N1",
      Dtrad: "D1",
    },
    {
      id: 2,
      Name: "Twitter Bot",
      Description:
        "Bot de twitter realizado con TypeScript, tuitea cada 12hs y responde menciones.",
      Link: "https://github.com/William10101995/bottwitter",
      Image: CardBot,
      Ntrad: "N2",
      Dtrad: "D2",
    },
    {
      id: 3,
      Name: "Business REST API",
      Description:
        "Proyecto Backend simple utilizando NodeJS Express y MongoDB.",
      Link: "https://github.com/William10101995/Business_RestAPI",
      Image: CardApi,
      Ntrad: "N3",
      Dtrad: "D3",
    },
    {
      id: 4,
      Name: "Sismografo Politico",
      Description:
        "Proyecto FullStack utilizando React, NodeJs, Twitter API, OpenAI API y Socket.io.",
      Link: "https://github.com/William10101995/twitter_data",
      Image: CardBotSis,
      Ntrad: "N4",
      Dtrad: "D4",
    },
  ],
};
