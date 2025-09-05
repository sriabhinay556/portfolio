"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
export default function About() {
    const { ref } = useSectionInView("About", 0.7)

    return (
        <motion.section
            className="max-w-[50rem] text-center px-8 sm:mb-0 sm:px-32 sm:max-w-none"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
            id="about"
            
        >
            <SectionHeading>About Me</SectionHeading>
            <div className="text-sm sm:text-lg bg-[#251e23e6] p-4 text-stone-300 dark:bg-black/20 hover:bg-[#292428] dark:hover:bg-black/40 border border-beta rounded-lg overflow-hidden
                             relative sm:h-auto transition duration-700">
                <div className="">
                    <p className="leading-relaxed text-justify">
                        I'm Sriabhinay Kusuma, a <span className="text-stone-500 dark:text-main/75">Computer Science MS</span> graduate from University of Alabama (UAH) with a perfect 
                        <span className="text-stone-500 dark:text-main/75"> 4.0 GPA</span>. Currently working as a <span className="text-stone-500 dark:text-main/75">Full Stack Developer</span> at Saayam For All, I bring both theoretical knowledge and extensive practical experience to the table. 
                        
                        My journey spans from <span className="text-stone-500 dark:text-main/75">Software Developer Intern</span> at Garuna to <span className="text-stone-500 dark:text-main/75">AI Developer</span> roles, and now leading full-stack development with enterprise-level microservices architecture.
                    </p>
                </div>
                <div>
                    <p className="leading-relaxed text-justify pt-4">
                        My technical expertise encompasses cutting-edge AI technologies including <span className="text-stone-500 dark:text-main/75">LLMs, BERT, LLaMA3, RAG pipelines</span>, full-stack development with <span className="text-stone-500 dark:text-main/75">Java/Spring Boot, React, Next.js</span>,
                        and enterprise cloud solutions using <span className="text-stone-500 dark:text-main/75">AWS, Lambda, Cognito, Kafka, Redis</span>.
                            
                        I'm passionate about building scalable systems and <span className="text-stone-500 dark:text-main/75">AI-powered solutions</span> that drive real business impact, with proven results like 20% user engagement improvements and 30% performance optimizations.
                    </p>
                </div>
            </div>
           
        </motion.section>
    )
}


