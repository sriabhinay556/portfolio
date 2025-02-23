"use client"

import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, imageUrl, href }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div
            className="group mb-3 sm:mb-8 last:mb-0"
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <section 
                className="bg-[#251e23e6] dark:bg-black/20 hover:bg-[#292428] dark:hover:bg-black/40 max-w-[45rem] border border-beta rounded-lg overflow-hidden
                            sm:pr-1 relative sm:h-[19.5rem] transition duration-700 sm:group-even:pl-8"
            >
                <Link href={href}>
                <div className="pt-2 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-5 sm:max-w-[55%] flex justify-center flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold text-stone-500 dark:text-main/75 group-hover:dark:text-main group-hover:text-[#867f7a] text-center sm:text-left">
                        {title}
                    </h3>
                    <p className="mt-2 mb-4 leading-relaxed text-stone-200 dark:text-gray-400 text-center sm:text-left">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 justify-center sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black px-3 py-[0.41rem] text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image
                        className="absolute hidden sm:block top-10 -right-[11rem] w-[28.25rem] rounded-[0.5rem] shadow-xl group-hover:shadow-projectLight
                                   dark:group-hover:shadow-projectDark duration-[0.6s]
                                   group-hover:duration-custom
                                   group-hover:ease-customImgBezier
                                   group-hover:scale-[1.12]
                                   group-hover:-translate-x-3
                                   group-hover:translate-y-3
                                   group-hover:-rotate-2

                                   group-even:group-hover:translate-x-3
                                   group-even:group-hover:translate-y-3
                                   group-even:group-hover:rotate-2

                                   group-even:right-[initial] group-even:-left-40"
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                    />
                </div>
                </Link>
            </section>
        </motion.div>
    )
}
