import {
    mobile,
    backend,
    creator,
    web,
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
    docker,
    suphatra,
    umpquabank,
    eazyrental,
    beaver,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [

  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
        title: "Photographer",
        icon: creator,
      },
      {
        title: "Artis",
        icon: creator,
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
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "2D Survival Game",
      description:

      "Final Project: Island Survival is a thrilling 2D adventure game created by a team of 4 for web development. Players are catapulted into an ominous island where they must break free. The game immerses users in diverse landscapes, NPC interactions, and pivotal missions to escape. Facing adversaries and a formidable Boss, players navigate strategic encounters and uncover island secrets. Built using the Godot game engine, with an Express server connected to a JSON file for data storage. Players can input their time scores into the scoreboard to track progress.",
      tags: [
        {
          name: "GodotScript",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JSON",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
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
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };