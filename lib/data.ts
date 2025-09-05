import React from "react"
import sneakersadda from "@/public/projects/sneakers-adda.png"
import cnn from "@/public/projects/cnn.jpeg"
import mongo from "@/public/projects/mongo.webp"
import hospital from "@/public/projects/hospital.jpeg"
import aiscrapper from "@/public/projects/ai-scrapper.jpeg"
import gogetgig from "@/public/projects/go-get-gig.jpeg"
import randomforest from "@/public/projects/randomforest.jpeg"
import picture1 from "@/public/pictures/optimized/Snapseed.webp"
import picture2 from "@/public/pictures/optimized/waterfall-2.webp"
import picture3 from "@/public/pictures/optimized/defcon.webp"
import picture4 from "@/public/pictures/optimized/blackhat.webp"
import picture5 from "@/public/pictures/optimized/group-1.webp" 


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
        name: "Skills",
        hash: "#skills",
    },
    {
      name: "Education",
      hash: "#education",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Interests",
        hash: "#interests",
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
        "Developed a prompt-driven scraping pipeline with AI agents that automate data extraction across anti-bot websites. Achieved 80% reduction in token usage & boosted scraping efficiency for high scalability.",
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
    {
        title: "Node.js",
        imageUrl: "/icons/nodejs.svg",
        href: "https://nodejs.org/",
        width: 40,
    },
    {
        title: "Express",
        imageUrl: "/icons/express.svg",
        href: "https://expressjs.com/",
        width: 40,
    },
    {
        title: "Django",
        imageUrl: "/icons/django.svg",
        href: "https://www.djangoproject.com/",
        width: 40,
    },
    {
        title: "Cucumber",
        imageUrl: "/icons/cucumber.svg",
        href: "https://cucumber.io/",
        width: 40,
    },
    {
        title: "REST APIs",
        imageUrl: "/icons/api.svg",
        href: "https://restfulapi.net/",
        width: 40,
    },
] as const
export const educationData = [
  {
    title: "Master's in Computer and Information Sciences (Cybersecurity)",
    location: "University of Alabama in Huntsville",
    description:
        "Hands on experience in Reverse Engineering, Code Analysis and core Cybersecurity concepts. Maintaining a solid 4 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024 - May 2025",
}, 
{
  title: "Master's in Computer Science",
  location: "University of Alabama in Huntsville",
  description:
      "Maintaining a solid 4 GPA with expertise in strong Computer Science concepts.",
  icon: React.createElement(LuGraduationCap),
  date: "August 2022 - May 2024",
},
{
    title: "Bachelor's in Computer Science",
    location: "SR Engineering College, India",
    description:
        "Completed a Bachelor's degree in Computer Science with a GPA of 3.3/4.0. Acquired foundational skills in various computer science domains.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2018 - May 2022",
},
] as const;
export const interestsData = [
  {
    imageUrl: picture1,
    title: "Photography",
    description: "The world is gray — I capture it without color, just as it is.",
    alt: "Black and white photography by Sriabhinay Kusuma - Artistic monochrome image showcasing photography skills and creative vision"
  },
  {
    imageUrl: picture2,
    title: "Waterfalls",
    description: "Hidden waterfalls. Hushed trails. North Alabama surprised me!",
    alt: "Hidden waterfall in North Alabama - Natural landscape photography showing outdoor exploration and nature appreciation"
  },
  {
    imageUrl: picture3,
    title: "DEFCON 2024",
    description: "Vegas, DEFCON — the world's biggest hacking conference. Glad I got to attend.",
    alt: "DEFCON 2024 cybersecurity conference in Las Vegas - Professional networking at world's biggest hacking conference"
  },
  {
    imageUrl: picture4,
    title: "Black Hat",
    description: "The business angle of cybersecurity. Attended Black Hat 2024 in Las Vegas.",
    alt: "Black Hat 2024 cybersecurity conference - Business and technical aspects of cybersecurity industry"
  },
  {
    imageUrl: picture5,
    title: "My People",
    description: "A close circle of tech-driven minds and shared life values.",
    alt: "Group photo with tech professionals and friends - Personal network of technology enthusiasts and colleagues"
  }
] as const


export const experienceData = [
    {
        title: "Full Stack Developer",
        location: "Saayam For All | Remote",
        description:
        `• Developed core business backend logic with Java/Spring Boot microservices on AWS (EKS, Lambda) and ReactJS-based frontend.
        • Implemented secure authentication and state management by integrating AWS Cognito on the Redux based frontend.
        • Secured all microservices with AWS Cognito and a fine-grained Role-Based Access Control (RBAC) model.
        • Architected an event-driven system using Apache Kafka; implemented a real-time notification feature with WebSockets.
        • Improved user engagement by 20%, leveraged Redis caching to cut API response times by up to 30%.`,
        icon: React.createElement(CgWorkAlt),
        date: "July 2025 – Present",
    },
    {
        title: "Software Developer",
        location: "National Institute of Standards and Technology | Huntsville, AL",
        description:
        `• Developed an automated pipeline to collect, pre-process and analyze CPU-generated jitter aligned with NIST SP 800-90B standards.
        • Automation with Python/Bash scripts, evaluation across Docker, VM and BareMetal to assess secure environmental settings.`,
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2025 – May 2025",
    },
    {
        title: "AI Developer",
        location: "Garuna",
        description:
        `• Developed automated web scraping pipeline processing 1K+ articles monthly, reducing manual data collection by 50 hours/month.
        • Created dashboard with real-time data access, and relevance scoring functionality deployed on cloud infrastructure.
        • Built a BERT-based NLP classifier with 89% accuracy to perform sentiment analysis on 1100+ customer reviews, implementing clustering algorithms to identify products with negative feedback patterns.
        • Fine-tuned LLaMA3-8B with QLoRA, adapter layers, and mixed-precision training, reducing trainable parameters from 8B to 3M, cutting training time by 30%, and boosting accuracy by 8% on 5000+ items.
        • Developed RAG pipeline using LangChain, optimizing retrieval and chunking strategies, improving retrieval precision by 20% for domain-specific query processing.`,
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2024 – Dec 2024",
    },
    {
        title: "Software Developer",
        location: "TopMatch",
        description:
        `• Designed an intelligent job-matching platform leveraging retrieval-augmented generation (RAG) and pretrained DistilBERT.
        • Integrated real-time job feed ingestion, vector embeddings, and LLM APIs for personalized recommendations.`,
        icon: React.createElement(CgWorkAlt),
        date: "June 2024 – July 2024",
    },
    {
        title: "Full Stack Developer",
        location: "Archeed",
        description:
        `• Launched a job board for architects, connecting 1K+ students and professionals and driving 2.5x growth in monthly engagement.
        • Implemented AI-powered semantic search and personalized job recommendations, reducing opportunity discovery time by 40%.
        • Implemented role-based authentication and profiles for students, firms, and admins to streamline content submissions.`,
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2024 – May 2024",
    },
    {
        title: "Frontend Developer",
        location: "University of Alabama, Huntsville",
        description:
        `• Collaborated on a microservice-based recruitment system to optimize hiring workflows for university departments.
        • Improved review productivity by 50%. Worked on faculty collaboration tool improving user experience and code maintenance.
        • Implemented RESTful APIs and microservices architecture using Django and Python, ensuring scalable system design.`,
        icon: React.createElement(CgWorkAlt),
        date: "July 2023 – Dec 2023",
    },
    {
        title: "Graduate Teaching Assistant",
        location: "University of Alabama, Huntsville",
        description:
        `• CS454/554 Cloud Computing - Lab Setup and Support: serving 50+ students, creating a practical cloud environment that increased successful project completions by 20%. Worked with professors to build impactful assignments for students.
        • CS104 Python - Student Assistance and Grading: Guided 40+ students through in-person labs, offering individualized support that elevated assignment completion rates and improved average scores by 10%.
        • CS317 Design and Analysis of Algorithms - Responsible for grading and in-person academic support for 60+ students. Assisted the professor in preparing coursework, assignments, and exams which enhancing class efficiency.`,
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2022 - April 2023",
    },
    {
        title: "Software Developer Intern",
        location: "Garuna | India",
        description:
        `• Developed services that establish a strong online presence to businesses, driving a significant increase in revenue.
        • Delivered digital solutions that enhanced product reach, improved user interaction and a strong boost in web traffic.
        • Incorporated technologies into development process that boost delivery time by 30% by automated testing.`,
        icon: React.createElement(CgWorkAlt),
        date: "May 2021 – June 2022",
    },
] as const
