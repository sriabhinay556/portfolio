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
    // {
    //     name: "Blogs",
    //     hash: "#blogs",
    // },
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
    {
      title: "AI-Scraper",
      description:
        "Engineered a prompt-driven scraping pipeline using LLM agents to automate data extraction across anti-bot websites. Achieved 80% reduction in token usage and boosted scraping efficiency for scalable data apps.",
      tags: ["Python", "Playwright", "BeautifulSoup", "Proxy-Rotation", "OpenAI"],
      imageUrl: aiscrapper,
      href: "https://github.com/sriabhinay556/AI-Scrapper/",
    },
    {
      title: "Go-Get-Gig",
      description:
        "Intelligent job-matching platform using RAG and DistilBERT. Real-time job feed ingestion with vector DB and HuggingFace models to deliver context-aware job recommendations.",
      tags: ["Python", "NLP", "Vector DB", "RAG", "LangChain", "NextJS", "React", "AWS"],
      imageUrl: gogetgig,
      href: "https://github.com/sriabhinay556/",
    },
    {
      title: "Sneakers Adda",
      description:
        "E-commerce platform for sneaker shoppers using SSR and caching. Integrated PostgreSQL for real-time inventory and Tailwind UI for clean responsive experience.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "OpenAI"],
      imageUrl: sneakersadda,
      href: "http://sneakers-adda-v2.vercel.app/",
    },
    {
        title: "Sentiment Analysis | Bi-LSTM & GloVe",
        description:
          "Bi-LSTM sentiment classifier with GloVe embeddings. Achieved 88% validation accuracy while mitigating overfitting in IMDB dataset.",
        tags: ["Python", "Bi-LSTM", "GloVe", "TensorFlow", "Keras", "Matplotlib"],
        // imageUrl: null,
        href: "https://github.com/sriabhinay556/Sentiment-Analysis-Bi-LSTM-GloVe",
      },
      {
        title: "Jitter Entropy Testing",
        description:
          "Capstone project: Automated entropy analysis pipeline using JitterEntropy library. Compared results across Docker, VM, BareMetal using Python and Bash scripts per NIST SP 800-90B.",
        tags: ["Python", "Bash", "Linux", "Docker", "NIST SP 800-90B"],
        // imageUrl: null,
        href: "https://github.com/sriabhinay556/NIST_JitterAnalysis_Paper",
      },
      {
        title: "Security Evaluation of LLM Code",
        description:
          "Analyzed LLM-generated C/C++ code using Valgrind, LDRA (CWE 3.4), and AFL fuzzing. Found memory issues and CWE violations to inform better AI-assisted code practices.",
        tags: ["Valgrind", "LDRA", "AFL Fuzzing", "CWE 3.4", "Static Analysis"],
        // imageUrl: null,
        href: "https://github.com/sriabhinay556/",
      },
      {
        title: "Reverse Engineering Course Projects",
        description:
          "Used IDA Pro, Ghidra, and WinDbg to analyze and reverse binaries. Reversed obfuscated binaries, debugged crash scenarios, and exploited stack overflows.",
        tags: ["IDA Pro", "Ghidra", "WinDbg", "x64Dbg", "Reverse Engineering"],
        // imageUrl: null,
        href: "https://github.com/sriabhinay556/",
      },
    {
      title: "Human Face Emotion Detection",
      description:
        "Built a CNN-based facial emotion classifier using VGG19 with 90% accuracy. Real-time inference via webcam using Flask API, OpenCV, and Docker.",
      tags: ["Keras", "TensorFlow", "VGG19", "OpenCV", "Flask", "Docker"],
      imageUrl: cnn,
      href: "https://github.com/sriabhinay556/",
    },
    {
      title: "Hospital Administration App",
      description:
        "Built a Java Swing-based desktop application for managing hospital login systems, patient records, and admin operations using event handling and file I/O.",
      tags: ["Java", "Swing", "File IO", "Event Handling"],
      imageUrl: hospital,
      href: "https://github.com/sriabhinay556/window-app-for-hospital-administration/",
    },
    {
      title: "Cyberbullying Detection Web App",
      description:
        "Built a machine learning classifier (Random Forest - 94.4% accuracy) to detect cyberbullying with web interface. Published on ResearchGate.",
      tags: ["Random Forest", "Logistic Regression", "KNN", "GaussianNB", "ML"],
      imageUrl: randomforest,
      href: "https://www.researchgate.net/publication/360843927_Web-application_for_detecting_cyber_bullying_using_machine_learning_approach",
    },
  ] as const;
  
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
    // {
    //     title: "Certifications",
    //     location: "Various Platforms",
    //     description:
    //         "AWS Developer Associate, JavaScript from Udemy, Python from Udemy.",
    //     icon: React.createElement(SiSolidity),
    //     date: "Ongoing",
    // },
] as const
