"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
export default function About() {
    const { ref } = useSectionInView("About", 0.7)

    return (
        <motion.section
            className="max-w-[50rem] text-center sm:mb-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <div className="text-stone-950 dark:text-gray-400 font-medium mb-5 text-lg flex flex-col">
                <div>
                    <p>
                        I'm Sriabhinay Kusuma, a <span className="text-stone-500 dark:text-main/75 ">Computer Science MS</span> grad at University of Alabama (UAH) with a perfect 
                        <span className="text-stone-500 dark:text-main/75"> 4.0 GPA</span>, I bring both theoretical knowledge and practical experience to the table. 
                        
                        During my Master’s, I served as a Graduate Assistant, where I worked on <span className="text-stone-500 dark:text-main/75 "> Software Developement </span>, managed Lab Setup and supported Course Curriculum. 
                        
                        My internship at Garuna.tech allowed me to develop hands-on skills in Software Development, exposed me
                        from designing to shipping products.
                    </p>
                </div>
                <div className="mt-4">
                    <p>
                        My technical expertise is broad, encompassing AI technolgies in <span className="text-stone-500 dark:text-main/75 ">LLMs, Gen-AI, Deep Learning,</span> front-end technologies like <span className="text-stone-500 dark:text-main/75 ">JavaScript, React, and Next.js, </span>
                        as well as backend and database management with <span className="text-stone-500 dark:text-main/75 ">Python, Java, Node.js, AWS. </span>
                            
                        I am eager to leverage my diverse skill set and passion for Software Development & <span className="text-stone-500 dark:text-main/75 ">AI integration</span> in innovative projects and collaborative teams.
                        
                    </p>
                </div>
            </div>
           
        </motion.section>
    )
}
