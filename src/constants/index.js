import { meta, shopify, starbucks, tesla, water, FAU, SFWMD, sysA } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
 

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
  

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Water Resources Utility Intern",
        company_name: "Fort Pierce Utility Authority",
        icon: water,
        iconBg: "#accbe1",
        date: "January 2012 - April 2012",
        points: [
            "Organized engineering schematics related to the database",
            "Collaborating with cross-functional teams including engineers, project managers, and other contractors to create high-quality products.",


        ],
    },
    {
        title: "University Teaching Assistant",
        company_name: "Florida Atlantic University",
        icon: FAU,
        iconBg: "#fbc3bc",
        date: "Jan 2013 - Feb 2014",
        points: [
            "Provided academic support to students through lectures and information sessions",         
            "Regulated lab procedures and organized academic curriculum",
        ],
    },
    {
        title: "Engineering Project Management Intern",
        company_name: "South Florida Water Management District",
        icon: SFWMD,
        iconBg: "#a2d2ff",
        date: "January 2015 - June 2015",
        points: [
            "Worked on multiple hydraulic operations projects concurrently",
            "Ensured database consistency between design and implementation",

        ],
    },
    {
      title: "E-Commerce Operations",
      company_name: "SysA Ind",
      icon: sysA,
      iconBg: "#b7e4c7",
      date: "Jan 2020 - Jan2021",
      points: [
          "Facilitated sales with volumes of thousands of merchandise per month",
          "Applied technical research to determine efficient ways to boost sales and customer outreach",
         
      ],
  },
    {
        title: "Hardware Operations Specialist",
        company_name: "SysA Ind",
        icon: sysA,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Present",
        points: [
            "Implemented operation procedures for a multi server financial business",
            "Updated security protocols and installed new software to ensure stability",
           
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
