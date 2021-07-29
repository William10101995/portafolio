import myimage from "../Images/Iam.jpeg";
import card from "../Images/card.jpg";
export const myData = {
  FirstName: "William",
  LastName: "Lopez",
  Slogan: "Hello, I'm",
  Address: "Monteagudo 332",
  City: "Resistencia",
  Image: myimage,
  State: "Chaco",
  Country: "Argentina",
  CodPostal: "3500",
  Phone: "+54 9 362-4771222",
  Email: "lopezwilliam177@gmail.com",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      100% { width: 90%; }
    }`,
    },
    {
      id: 2,
      name: "TypeScript",
      progress: `@keyframes TypeScript {
      0% { width: 0; }
      100% { width: 30%; }
    }`,
    },
    {
      id: 3,
      name: "React",
      progress: `@keyframes React {
      0% { width: 0; }
      100% { width: 50%; }
    }`,
    },
    {
      id: 4,
      name: "NodeJS",
      progress: `@keyframes NodeJS {
      0% { width: 0; }
      100% { width: 70%; }
    }`,
    },
  ],
  Projects: [
    {
      id: 1,
      Name: "Ministerio",
      Description: "A boilerplate for ReactJS and TypeScript",
      Link: "https://github.com/William10101995/ministeriodesarrolloproductivo",
      Image: card,
    },
    {
      id: 2,
      Name: "Twitter Bot",
      Description: "A boilerplate for NodeJS and TypeScript",
      Link: "https://github.com/William10101995/bottwitter",
      Image: card,
    },
    {
      id: 3,
      Name: "Business REST API",
      Description: "Backend Project With NodeJS, MongoDB and Express",
      Link: "https://github.com/William10101995/Business_RestAPI",
      Image: card,
    },
  ],
};
