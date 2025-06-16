"use client"

import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"
import { BsLinkedin, BsEnvelope } from "react-icons/bs"

export default function Contact() {
    const { ref } = useSectionInView("Contact", 1)
    const { theme } = useTheme()
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "")    
    const [message, setMessage] = useState(
        "Hi! I'd love to connect and discuss potential opportunities. Let's schedule a call."
      );

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
  
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
  }
      
    return (
        <motion.li
            className="mb-16 sm:mb-16 w-[min(100%,38rem)] text-center"
            transition={{ duration: 1.5 }}
            ref={ref}
            id="contact"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            
            <form 
                onSubmit={handleSubmit} 
                className="mt-10 flex flex-col gap-4"
            >
                {state.succeeded && (
                    <p className="text-green-700 text-md mb-4">Thanks for your message! ✅</p>
                )}

                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    value={state.succeeded ? "" : undefined}
                    className="h-14 px-4 rounded-lg border border-darklord/40 dark:border-main/40 
                             bg-white/40 dark:bg-black/50 text-darklord/80 dark:text-main/75 
                             focus:outline-none focus:border-darklord/100 dark:focus:border-main/100
                             placeholder:text-darklord/40 dark:placeholder:text-main/40
                             backdrop-blur-[0.1rem] hover:border-darklord/100 dark:hover:border-main/100"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email" 
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1" 
                />

                <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1000}
                    value={state.succeeded ? "" : message}
                    className="h-52 my-3 rounded-lg border border-darklord/40 dark:border-main/40 
                             bg-white/40 dark:bg-black/50 text-darklord/80 dark:text-main/75 
                             focus:outline-none focus:border-darklord/100 dark:focus:border-main/100
                             placeholder:text-darklord/40 dark:placeholder:text-main/40 p-4
                             backdrop-blur-[0.1rem] resize-none hover:border-darklord/100 dark:hover:border-main/100"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message" 
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1" 
                />

                <div className="flex items-center justify-center gap-4">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="group flex font-semibold items-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem] mt-2 border border-darklord/20
                                 text-darklord/80 dark:text-main/75 hover:text-darklord dark:hover:text-main borderDevil dark:hover:border-main bg-white/70
                                 dark:bg-[#060606] rounded-full focus:scale-110 hover:scale-110 hover:bg-white dark:hover:bg-black hover:border-darklord/50
                                 dark:hover:bg-opacity-80 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] disabled:scale-110 disabled:bg-opacity-50"
                    >
                        {state.submitting ? "Sending..." : "Submit"}
                    </button>
                   
                </div>

                {state.errors && Object.keys(state.errors).length > 0 && (
                    <p className="text-red-500 mt-3">Please correct the above errors.</p>
                )}
            </form>

            <div className="w-full h-[1px] bg-stone-800 my-8"></div>

            <div className="mt-8 flex sm:flex-row flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <h3 className="text-darklord/80 dark:text-main/75 dark:hover:text-main pr-2">
                        Let's connect on LinkedIn
                    </h3>
                    <a 
                        className="flex items-center justify-center w-12 h-12 text-xl text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                                borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-105 hover:scale-[1.2]
                                hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                                border-darklord/20 hover:border-darklord/50"
                        href="https://www.linkedin.com/in/sriabhinay556/"
                        target="_blank"
                        aria-label="LinkedIn Profile"
                    >
                        <BsLinkedin />
                    </a>

                </div>
                <div className="flex flex-row items-center justify-center">
                    <h3 className="text-darklord/80 dark:text-main/75 dark:hover:text-main pl-4 pr-2">
                        or Email to
                    </h3>
                        <a
                            className="flex items-center gap-2 p-[1.15rem] text-lg lg:px-[1.5rem] lg:py-[0.2rem] text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                                    borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                                    hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                                    border-darklord/20 hover:border-darklord/50"
                            href="mailto:sriabhinay1@gmail.com"
                            target="_blank"
                        >
                            <BsEnvelope />
                        </a>
                </div>
            </div>
        </motion.li>
    )
}
