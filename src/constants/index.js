import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    c1,
    c2,
    py,
    p1,
    p2,
    gdsc,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    suphatra,
    umpquabank,
    eazyrental,
    beaver,
    movie,
    rental,
    beavsai,
    survival,

    threejs,
  } from "../assets";
  
  export const navLinks = [

  ];
  
  const services = [
    {
      icon: p1,
    },
    {
      icon: p2,
    },
    {
      icon: p3,
    },
    {
        icon: p4,
      },
      {
        icon: p5,
      },
      {
        icon: p6,
      },
      {
        icon: p7,
      },

      {
        icon: p14,
      },
      {
        icon: p10,
      },
      {
        icon: p11,
      },

      {
        icon: p13,
      },
      {
        icon: p8,
      },


  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c1",
      icon: c1,
    },
    {
      name: "py",
      icon: py,
    },
    {
      name: "c2",
      icon: c2,
    },

  ];
  
  const experiences = [
    {
      title: "Incoming Intern Summer 2024",
      company_name: "Umpqua Bank",
      icon: umpquabank,
      iconBg: "#383E56",
      date: "Summer 2024",
      points: [
        "Exciting!!!!!",
      ],
    },
    {
      title: "Public Relation",
      company_name: "Google Developer Student Clubs",
      icon: gdsc,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "More to do!",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "EAZY Rental",
      icon: eazyrental,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Freelanced a car rental website, attracting nearly a hundred unique visitors within a month post-launch, with 88% new and 13% returning visitors.",
        "Developed (CMS) datasets for over 50 cars, boosting a Portland-based car rental start-up near PDX airport.        ",
        "Learned dataset management, collector tools, and integrated Content Management Systems (CMS).",
      ],
    },
    {
      title: "Student Leader Peer Navigator",
      company_name: "Oregon State University",
      icon: beaver,
      iconBg: "#383E56",
      date: "Dec 2022 - May 2023",
      points: [
        "Supported over 10,000 students and the local community in accessing essential resources.",
        "Offered assistance to students confronting housing, financial difficulties, and other fundamental necessities.",
      ],
    },
    {
      title: "Family Business | Server",
      company_name: "Suphatra Thai",
      icon: suphatra,
      iconBg: "#E6DEDD",
      date: "Dec 2017 - Sep 2023",
      points: [
        "Built strong customer relations with over 200 customers per day as a server, generating over $1000-2000 in sales per day.        ",
        "Elevated communication and service skills over 5 years of part-time experience, building strong customer connections.        ",
      ],
    },
  ];
  
  const testimonials = [

    {

    },
  ];
  
  const projects = [
    {
      name: "2D Survival RPG",
      description:
      "  Island Survival is a 2D adventure game where you're trapped on an island and must escape. Explore, talk to NPCs, and complete missions to plan your getaway. Face challenges and a boss in a cave. Think fast, survive, and beat others' scores on the scoreboard. Made with Godot game engine and an Express server linked to a JSON file for data storage. We won Hall of Fame and check out demo on my LinkedIn",
      tags: [
        {
          name: "GdScript",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS/FIGMA",
          color: "pink-text-gradient",
        },
      ],
      image: survival,
      source_code_link: "https://github.com/osu-cs290-f23/final-project-wumpus-game-team",
    },
    {
      name: "BeavsAI",
      description:
        "Joined a 5-person team where I collaborated as a Front-End and UX/UI designer in a 4-member subgroup, contributing to developing an AI Chatbot from scratch and working on crafting a landing page. Worked with AI and back-end teams to deploy the Chatbot web app connecting with OpenAI, facilitating class information retrieval for university students.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typecript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS/FIGMA",
          color: "pink-text-gradient",
        },
      ],
      image: beavsai,
      source_code_link: "https://github.com/OSU-App-Club/beavsAI-frontend",
    },
    {
      name: "Properties Renting Website",
      description:
        "Developed a rental properties website to collect owner and client information using MySQL databases. Enabled seamless data management for both clients and owners, including features for adding and deleting entries.",
      tags: [
        {
          name: "Handlebars",
          color: "blue-text-gradient",
        },
        {
          name: "SQL/MySQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: rental,
      source_code_link: "https://github.com/TanSingsukhum/DatabaseRental/tree/master",
    },
    {
      name: "Real Time Movie API",
      description:
      "Develop and design a movie website utilizing TMDB's API, with Huruko Microservice for server hosting. The website will showcase current popular movies, along with details such as release dates, showtimes, cast, posters, and descriptions.",
        tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "API/Microservice",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/TanSingsukhum/cs361-microservice-final",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };