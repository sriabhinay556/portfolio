"use client"

import Link from "next/link"
import { projectsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, href }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div
            className="group mb-4 sm:mb-6 last:mb-0"
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <section 
                className="bg-[#251e23e6] dark:bg-black/20 hover:bg-[#292428] dark:hover:bg-black/40
                            mx-auto border border-beta rounded-lg overflow-hidden
                           px-6 py-6 transition duration-700
                           "
            >
                    <Link href={href} target="_blank">
                    <div className="flex flex-col gap-4 text-center lg:text-left lg:min-h-[16rem] xl:min-h-[22rem] xl:max-h-[22rem] 2xl:min-h-[14rem] 2xl:max-h-[14rem]">
                        <h3 className="text-2xl font-semibold text-stone-500 dark:text-main/75 group-hover:dark:text-main group-hover:text-[#867f7a] ">
                            {title}
                        </h3>
                        <p className="leading-relaxed text-stone-200 dark:text-gray-400">  
                            {description}
                        </p>
                        <ul className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="bg-black px-3 py-[0.41rem] text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            </section>
        </motion.div>
    )
}
