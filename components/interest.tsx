"use client"

import Image from "next/image"
import { interestsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type InterestProps = typeof interestsData[number]

export default function Interest({ imageUrl, title, description, alt }: InterestProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgess, opacity: opacityProgess }}
            className="w-full"
        >
            <section className="h-[28rem] w-[22rem] group sm:aspect-[3/4] bg-[#251e23e6] dark:bg-black/20 hover:bg-[#292428] dark:hover:bg-black/40 border border-beta rounded-xl overflow-hidden transition duration-700">
                <div className="relative w-full h-2/3">
                    <Image
                        src={imageUrl}
                        alt={alt || `${title} - ${description} - Personal interest and hobby of Sriabhinay Kusuma`}
                        fill
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                </div>
                <div className="flex flex-col h-1/3 p-4 text-left">
                    <h3 className="text-lg font-semibold text-stone-300 dark:text-main/80 group-hover:text-[#e2e2e2] group-hover:dark:text-main mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-stone-400 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </section>
        </motion.div>
    )
}

// Optional utility to shorten text for clean UI
function shortenTitle(title: string): string {
    return title.length > 50 ? title.slice(0, 48) + "..." : title
}

function shortenDescription(desc: string): string {
    return desc.length > 120 ? desc.slice(0, 77) + "..." : desc
}
