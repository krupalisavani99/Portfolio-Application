export const SKILLS = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react js",
  "react native",
  "next js",
  "shopify",
  "Tailwind css",
  "bootstrap",
  "material ui",
  "storybook",
  "redux",
  "graphql",
  "git",
];

// src/constants/projectData.js

export const PROJECTS_DATA = [
  {
    type: "Featured Project",
    title: "Anime Search Application",
    summary:
      "The Anime Search Application is a feature-rich React-based web app designed to provide an engaging and intuitive anime discovery experience. Styled with Material-UI, the application integrates modern React concepts and React Router for seamless navigation.",
    img: require("./images/anime-search-app-cover-img.png"),
    link: "https://anime-search-application-9e5w.vercel.app/",
    github: "https://github.com/krupalisavani99/Anime-Search-Application",
    featured: true,
  },
  {
    title: "Weather Application",
    link: "/",
    github: "https://github.com/krupalisavani99/live-weather-app",
    img: require("./images/Weather-app_cover_img.png"),
    featured: false,
  },
  {
    title: "Notebook Application",
    link: "https://notebook-app-9cj3.vercel.app/",
    github: "https://github.com/krupalisavani99/Notebook-app",
    img: require("./images/Notebook-app-cover-img.png"),
    featured: false,
  },
];

export const experienceData = [
  {
    position: "React js Developer",
    company: "Declone Labs PVT LTD ",
    time: "2023-2024",
    place: "Surat",
    info: "Working in client based project as a front end developer.",
    details: [
      "Implemented pages with Material UI, Next.js, TypeScript, and GraphQL and Sitecore Content Hub integration.",
      "Built an e-commerce site in Next.js with Tailwind CSS, TypeScript, custom hooks, and GraphQL integration for Shopify Storefront API.",
      "Created demo projects like a resume builder and hotel management components using Tailwind CSS in Next.js.",
      "Contributed to common component development and designed UI with Material UI in Next.js.",
      "Actively participated in meetings for task discussions and effective teamwork.",
    ],
  },
  {
    position: "Front End Developer",
    company: "SKAP Solutions",
    time: "2022-2023",
    place: "Surat",
    info: "Developed and optimized interactive web components using React on the Microsoft SharePoint platform, enabling seamless interaction with SharePoint lists for data management and real-time collaboration.",
    details: [
      "Developed and tested web applications, focusing on creating user-friendly pages and interfaces.",
      "Built responsive and accessible React components based on Figma designs, ensuring alignment with design specifications.",
      "Designed website layouts and managed CRUD (Create, Read, Update, Delete) operations for SharePoint list data.",
    ],
  },
  {
    position: "React Developer",
    company: "Freelance",
    time: "2021-2022",
    place: "Surat",
    info: "Developed and maintained web and mobile applications using React.js and React Native.",
    details: [
      "Worked on UI design and development, gathering requirements and translating them into functional components.",
      "Created a multi-language demo application to showcase localization capabilities and enhance user experience across different languages.",
    ],
  },
];

export const educationData = [
  {
    type: "Bachelors in Computer Applications (BCA)",
    time: "2017-2020",
    place: "SDJ International College",
  },
  {
    type: "Higher School (HSC) 12th science",
    time: "2015-2017",
    place: "Jay Ambe Vidhyabhavan",
  },
];
