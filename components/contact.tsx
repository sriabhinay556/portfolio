"use client"

import React, { useState, ChangeEvent } from "react"
import SectionHeading from "./section-heading"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"
import { BsLinkedin } from "react-icons/bs"
export default function Contact() {
    const { ref } = useSectionInView("Contact", 1)
    const { theme } = useTheme()

    return (
        <motion.section
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            ref={ref}
            id="contact"
        >
            <SectionHeading>Contact Me</SectionHeading>
            <div>
                <a className="flex justify-center text-stone-900 dark:text-white flex items-center gap-2 p-[1.15rem] text-lg text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                               hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50 mb-5" href="mailto:sriabhinay1@gmail.com">


                    sriabhinay1@gmail.com

                </a>
                <div>
            <a 
                    className="flex justify-center items-center gap-2 p-[1.15rem] text-lg text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                               hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50"
                    href="https://www.linkedin.com/in/sriabhinay556/"
                    target="_blank"
                >
                    My LinkedIn<BsLinkedin />
                </a>
            </div>
           
           
            </div>
           
        </motion.section>
    )
}
