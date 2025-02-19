import React from "react"
import sneakersadda from "@/public/projects/sneakers-adda.png"
import cnn from "@/public/projects/cnn.jpeg"
import mongo from "@/public/projects/mongo.webp"
import hospital from "@/public/projects/hospital.jpeg"
import aiscrapper from "@/public/projects/ai-scrapper.jpeg"
import gogetgig from "@/public/projects/go-get-gig.jpeg"
import randomforest from "@/public/projects/randomforest.jpeg"

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
    tags: ["Python, Play-Wright, BeautifulSoup, Proxy-Rotation, OpenAI"],
    imageUrl: aiscrapper,
    href: "https://github.com/sriabhinay556/AI-Scrapper/",
    },
    {
        title: "Go-Get-Gig",
        description: "A job listing portal for highly relevant jobs to enhance hiring success.",
        tags: ["Python, NLP, Vector DB, RAG, Embeddings, NextJS, React, AWS"],
        imageUrl: gogetgig,
        href: "https://github.com/sriabhinay556/",
    },
    {
        title: "Sneakers Adda",
        description:
            "A dynamic e-commerce website leveraging NextJS framework and ReactJS as frontend library for real-time sneaker data",
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
            "Developed a standalone desktop-based app. Aimed at hospital admin tasks like login, patient details, record handling etc.",
        tags: ["Java, File IO, Java Swing, Event Handling"],
        imageUrl: hospital,
        href: "https://github.com/sriabhinay556/window-app-for-hospital-administration/",
    }, {
        title: "Detecting cyber bullying using machine learning",
        description:
            "Random Forest classifier with 94.4% accuracy - predicting the probability of being bullied, detects and report cyber harassment. PUBLISHED ON RESEARCH GATE",
        tags: ["Decision Tree, Logistic Regression, KNeighbors, GaussianNB, Random Forest classifiers"],
        imageUrl: randomforest,
        href: "https://www.researchgate.net/publication/360843927_Web-application_for_detecting_cyber_bullying_using_machine_learning_approach",
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
        width: 40,
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
        href: "https://aws.amazon.com",
        width: 40,
    },
    {
        title: "LangChain",
        imageUrl: "/icons/langchain.svg",
        href: "http://langchain.com/",
        width: 40,
    },
    {
        title: "AI",
        imageUrl: "/icons/ai.png",
        href: "https://huggingface.co/",
        width: 40,
    },
    {
        title: "Hugging Face",
        imageUrl: "/icons/hf.svg",
        href: "https://huggingface.co/",
        width: 40,
    },
   
    
  
] as const

export const experienceData = [
    
    {
        title: "Master’s in Computer Science & Information Sciences",
        location: "University of Alabama in Huntsville",
        description:
            "Maintaining a solid 4 GPA with expertise in strong Computer Science concepts and Cybersecurity.",
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
       ` •	Delivered responsive web applications with seamless user interfaces using React, Python-based backend services.
        •	Streamlined deployment workflow with GitHub Actions and leveraged Git for collaboration and version control efficiency.
        •	Leveraged Cucumber for automated testing, reducing manual testing time by 40%. Enhanced overall delivery time by 30%. 
        •	Enhanced the digital presence of multiple clients, with a 30% boost in customer engagement and a 20% boost in web traffic.`,
        icon: React.createElement(CgWorkAlt),
        date: "May 2021 – June 2022",
    },
    {
        title: "Graduate Assistant - Software Developement & Teaching",
        location: "University of Alabama in Huntsville",
        description: 
        `
        •	Collaborated on a microservice-based recruitment system to optimize hiring workflows for university departments.
        •	Developed key features – application tracking, collaborative review. Improved review productivity by 50% by kanban interface.
        •	Developed faculty collaboration tool in ReactJS, significantly improving user experience and code maintenance.
        •	Instructed 100+ students in Algorithms, Programming courses. Created cloud environments, in-person labs, grading assistance.
        •	Collaborated with professors to build impactful assignments that elevated work completion rates & spike average scores by 10%

        `,
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
