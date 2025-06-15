"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import Typed from "react-typed"
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { FaChessKnight } from "react-icons/fa6"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"
import dva from "@/public/icons/dva.png"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section className={"max-w-[51rem] text-center sm:mb-0 scroll-mt-[100rem]"} ref={ref} id="home">
            <div className="flex items-center justify-center py-[1rem]">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Image
                        className="w-[9rem] h-[9rem] object-fill rounded-full shadow-xl border-lotr dark:border-darky/80 border-[0.05rem] self-center"
                        src="/abhi.jpg"
                        alt="Abhi"
                        height="200"
                        width="200"
                        quality="95"
                        priority={true}
                    />
                </motion.div>
            </div>
            <motion.p
                className="text-center text-lotr dark:text-zinc-50 py-[2rem] !leading-[1.5] text-2xl sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hey, I&apos;m Sriabhinay Kusuma, a <span className="text-darklord dark:text-main underline decoration-2 underline-offset-2">Computer Science grad </span>{" "}
                with knowledge in fields like
                <span className="block ml-[0.5rem]">
                    
                    <Typed
                        className="ml-[0.5rem] text-darklord/80 dark:text-main/80"
                        strings={["Full Stack", "AWS", "Machine Learning", "Frontend", "Security"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                        // showCursor={false}
                    />
                </span>
          
                

                <div className="mt-2 text-center text-stone-800 dark:text-gray-400 flex justify-center items-center group-hover:text-[#867f7a]">
                    <Image alt="AWS Developer Associate" src={dva} width={60} height={60} className="pr-2
                    "></Image>
                    <Link href="https://www.credly.com/badges/6f452292-fc21-4f4c-b472-30ce05321b8e/linked_in_profile" target="_blank">
                        <h3 className="text-sm font-semibold hover:text-[#867f7a] hover:duration-[0.4s]">AWS Certified Developer Associate</h3>
                    </Link>
                </div>
                
            </motion.p>

            <motion.div
                className="flex flex-col lg:flex-row gap-5 justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                
               <div>
                    <Link
                        className="group flex items-center gap-2 px-[1.5rem] py-[1.1rem] font-bold text-darklord/80 hover:text-darklord dark:text-main/75
                                dark:hover:text-main borderDevil dark:hover:border-main bg-white/40 dark:bg-black/80 rounded-full focus:scale-110 hover:scale-110
                                hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-95 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px]
                                shadow-btnShadow dark:shadow-sunA backdrop-blur-[0.1rem] hover:border-darklord/90"
                        href="#contact"
                        onClick={() => {
                            setActiveSection("Contact")
                            setTimeOfLastClick(Date.now())
                        }}
                    >
                        Hire Me <BsArrowRight className="opacity-60 group-hover:translate-x-[0.3rem] transition group-hover:opacity-90" />
                    </Link>
               </div>
               <div className="flex gap-3">
                <a
                        className="group flex items-center gap-2 px-[0.8rem] text-sm lg:text-lg lg:px-[1.5rem] lg:py-[1.1rem] font-bold text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                                borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-110
                                hover:bg-white dark:hover:bg-darkyil active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                                border-darklord/20 hover:border-darklord/50"
                        href="https://sriabhinay556.github.io/Resume/Abhi_Kusuma_Resume.pdf"
                        target="_blank"
                    >
                        Resume 
                    </a>
                    <a
                        className="flex items-center gap-2 p-[1.15rem] text-lg lg:px-[1.5rem] lg:py-[0.2rem] text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                                borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                                hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                                border-darklord/20 hover:border-darklord/50"
                        href="https://www.linkedin.com/in/sriabhinay556/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        className="flex items-center gap-2 p-[1.15rem] text-lg lg:px-[1.5rem] lg:py-[0.2rem] text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                                borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                                hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                                border-darklord/20 hover:border-darklord/50"
                        href="https://www.github.com/sriabhinay556/"
                        target="_blank"
                    >
                        <BsGithub />
                    </a>
               </div>

           
               
            </motion.div>
            
        </section>
    )
}
