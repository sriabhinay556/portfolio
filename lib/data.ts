import React from "react"
import sneakersadda from "@/public/projects/sneakers-adda.png"
import cnn from "@/public/projects/cnn.jpeg"
import mongo from "@/public/projects/mongo.webp"
import hospital from "@/public/projects/hospital.jpeg"
import aiscrapper from "@/public/projects/ai-scrapper.jpeg"

import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import { SiSolidity } from "react-icons/si"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Blogs",
        hash: "#blogs",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const projectsData = [
    { title: "AI-Scrapper",
    description:
        "AI-Scrapper - Scrape any website with a prompt",
    tags: ["Python, Chromium, Play-Wright, BeautifulSoup, Proxy-Rotation, COpenAI"],
    imageUrl: aiscrapper,
    href: "https://github.com/sriabhinay556/AI-Scrapper/",
    },

    {
        title: "Sneakers Adda",
        description:
            "A dynamic web project leveraging NextJS framework and ReactJS as frontend library for real-time sneaker data",
        tags: ["Next.js, React, Node.js, PostgreSQL, Tailwind CSS, Vercel, OpenAI"],
        imageUrl: sneakersadda,
        href: "http://sneakers-adda-v2.vercel.app/",
    }, {
        title: "CRUD Ops",
        description:
            "A full-stack web application, It demonstrates core CRUD operations with MongoDB, Server-side processing with Node.js",
        tags: ["Next.js, React, Node.js, MongoDB, Tailwind CSS"],
        imageUrl: mongo,
        href: "https://github.com/sriabhinay556/CRUD_Ops_MERN",
    }, {
        title: "Human Face Emotion Detection",
        description:
            "Developed a Convolutional Neural Networks model to classify the human’s emotion through real time face footage.",
        tags: ["Keras, VGG, Numpy, Pandas, Jupyter"],
        imageUrl: cnn,
        href: "https://github.com/sriabhinay556/",
    }, {
        title: "Hospital Administration",
        description:
            "• Developed a standalone desktop-based app. Aimed at hospital admin tasks like login, patient details, record handling etc.",
        tags: ["Java, File IO, Java Swing, Event Handling"],
        imageUrl: hospital,
        href: "https://github.com/sriabhinay556/window-app-for-hospital-administration/",
    },
   
] as const

export const blogsData = [
    {
        title: "The Rise of Large Language Models",
        content: "Large Language Models (LLMs) like GPT-4 are revolutionizing industries by providing human-like text generation, enabling applications such as chatbots, content creation, and code assistance. As they evolve, ethical considerations like bias and misuse remain critical."
      },
      {
        title: "Why Next.js is the Future of Web Development",
        content: "Next.js combines the best of server-side rendering (SSR) and static site generation (SSG), offering incredible performance and SEO benefits. Its seamless integration with React and scalability make it a favorite for modern web apps."
      },
      {
        title: "Breaking Down the Basics of AI Ethics",
        content: "As AI becomes more ingrained in our daily lives, understanding ethical concerns like bias, data privacy, and transparency is essential. Developers and organizations must focus on creating responsible AI solutions that benefit society as a whole."
      },
      {
        title: "How Kubernetes Simplifies DevOps",
        content: "Kubernetes has become the standard for container orchestration, simplifying deployment, scaling, and management of applications. It empowers DevOps teams to automate processes and improve system reliability at scale."
      },
      {
        title: "Exploring Rust for High-Performance Systems",
        content: "Rust has gained popularity for its memory safety and concurrency without sacrificing performance. It's an excellent choice for building systems-level applications and projects requiring high reliability, like blockchain and game engines."
      },
      {
        title: "The Future of AI in Software Development",
        content: "AI tools like Copilot and ChatGPT are transforming software development by speeding up coding tasks and improving accuracy. As AI advances, developers are empowered to focus on problem-solving rather than repetitive coding tasks."
      }
]


export const skillsData = [
    {
        title: "JavaScript",
        imageUrl: "/icons/js.svg",
        href: "https://www.javascript.com",
        width: 40,
    }, 
    {
        title: "TypeScript",
        imageUrl: "/icons/ts.svg",
        href: "https://www.typescriptlang.org",
        width: 40,
    },
    {
        title: "Python",
        imageUrl: "/icons/python.svg",
        href: "https://www.python.org",
        width: 50,
    },

    {
        title: "Java",
        imageUrl: "/icons/java.svg",
        href: "https://www.java.com",
        width: 40,
    },
    {
        title: "MySQL",
        imageUrl: "/icons/mysql.png",
        href: "https://www.mysql.com/",
        width: 60,
    },
    {
        title: "HTML",
        imageUrl: "/icons/html.svg",
        href: "https://www.w3.org/html/",
        width: 40,
    },
    {
        title: "CSS",
        imageUrl: "/icons/css.svg",
        href: "https://www.w3schools.com/css/",
        width: 40,
    },
    {
        title: "Tailwind",
        imageUrl: "/icons/tailwind.svg",
        href: "https://tailwindcss.com/",
        width: 40,
    },
    
    {
        title: "NextJs",
        imageUrl: "/icons/next.png",
        href: "https://nextjs.org",
        width: 55,
    },
    {
        title: "React",
        imageUrl: "/icons/react.svg",
        href: "https://reactjs.org",
        width: 40,
    },
   
  
    {
        title: "Git",
        imageUrl: "/icons/git.svg",
        href: "https://git-scm.com",
        width: 40,
    },
   
    {
        title: "Docker",
        imageUrl: "/icons/docker.svg",
        href: "https://docker.com",
        width: 40,
    },  
    {
        title: "AWS",
        imageUrl: "/icons/aws.svg",
        href: "https://https://aws.amazon.com",
        width: 40,
    },
    
  
] as const

export const experienceData = [
    
    {
        title: "Master’s in Computer Science and Cybersecurity",
        location: "University of Alabama in Huntsville",
        description:
            "Maintaining a solid 4 GPA with expertise in core CS concepts and worked with various professors helping them to set up labs, assignments and tutoring.",
        icon: React.createElement(LuGraduationCap),
        date: "August 2022 - May 2024",
    },
    {
        title: "Bachelor’s in Computer Science",
        location: "SR Engineering College, India",
        description:
            "Completed a Bachelor’s degree in Computer Science with a GPA of 3.3/4.0. Acquired foundational skills in various computer science domains.",
        icon: React.createElement(LuGraduationCap),
        date: "August 2018 - May 2022",
    },
    {
        title: "Software Intern",
        location: "Garuna.tech",
        description:
            "Worked on creating dynamic and responsive web applications using React, HTML5, and Tailwind CSS. Designed user interfaces and implemented solutions to enhance client operations.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2021 – June 2022",
    },
    {
        title: "Graduate Teaching Assistant",
        location: "University of Alabama in Huntsville",
        description:
            "Assisted with the CS454/554 Cloud Computing course by setting up and supporting virtual machines using Proxmox. Provided support for the CS104 Python course through lab assistance and grading for over 40 students.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2023 – Dec 2023",
    },
    {
        title: "Student Specialist IV - Grader",
        location: "University of Alabama in Huntsville",
        description:
            "Graded assignments and provided academic support for the CS317 Design and Analysis of Algorithms course, assisting over 60 students.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2022 – Dec 2022",
    },
    {
        title: "Certifications",
        location: "Various Platforms",
        description:
            "AWS Cloud Essentials, Complete JavaScript from Udemy, Complete Python from Udemy.",
        icon: React.createElement(SiSolidity),
        date: "Ongoing",
    },
] as const

