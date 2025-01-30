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
            <p className="text-stone-950 dark:text-gray-400 font-medium mb-5 text-lg flex flex-col">
           
            I'm Sriabhinay Kusuma, a Computer Science student at University of Alabama in Huntsville with a perfect 
                4.0 GPA in Computer Science, I bring both 
                theoretical knowledge and practical experience to the table. During my Master’s, I served 
                as a Graduate Teaching Assistant, where I managed lab setups and supported course curriculum. 
                My internship at Garuna.tech allowed me to develop hands-on skills in Software Development 
                from designing to shipping products, where I focused on crafting dynamic, responsive web applications and Java for backend logics. 
               
                <span className="my-4">
                My technical expertise is broad, encompassing front-end technologies like JavaScript, React, and Next.js,
                as well as backend and database management with Python, Java, Node.js. I am eager to leverage my diverse skill set 
                and passion for software development to contribute to innovative projects and collaborative teams.
                </span>
            </p>
           
        </motion.section>
    )
}
