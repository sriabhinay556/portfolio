"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { blogsData } from "@/lib/data"


type BlogProps = typeof blogsData[number]

export default function Blog({ title, content }: BlogProps) {
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
                className="bg-[#251e23e6] dark:bg-black/20 hover:bg-[#292428] dark:hover:bg-black/40 max-w-[25rem] border border-beta rounded-lg overflow-hidden
                sm:pr-1 relative sm:h-[13.5rem] transition duration-700"
            >
               <div className="p-3 text-white flex flex-col">
                    <div className="text-xl h-[4rem] font-semibold text-stone-500 dark:text-main/75 group-hover:dark:text-main group-hover:text-[#867f7a] text-center sm:text-left">
                        {title}
                    </div>
                    <div className="text-sm">
                        {content}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
