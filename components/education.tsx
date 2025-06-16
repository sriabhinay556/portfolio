"use client"

import React from "react"
import SectionHeading from "./section-heading"
import "react-vertical-timeline-component/style.min.css"
import { educationData } from "@/lib/data"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"

export default function Education() {
    const { ref } = useSectionInView("Education", 0.3)
    const { theme } = useTheme()
    const options = { triggerOnce: true }

    return (
        <section className="overflow-x-clip" ref={ref} id="education">
            <SectionHeading>My Education</SectionHeading>
            {/* We are setting lineColor in globals.css to avoid errors in console */}
            <VerticalTimeline lineColor="" animate={true}>
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light" ? "#292428" : "#00000066",
                                boxShadow: "none",
                                border: "1px solid #805d39",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                color: theme === "light" && screen.availWidth > 1170 ? "black" : "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #805d39",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "#292428" : "#07040b",
                                fontSize: "1.5rem",
                                color: theme === "light" ? "#79726d" : "rgba(159, 137, 94, 0.7)",
                                boxShadow: theme === "light" ? "0px 0px 10px 5px #261b1c" : "0px 0px 10px #805d39",
                                //boxShadow: "0 0 0 4px #805d39",
                            }}
                            intersectionObserverProps={options}
                        >
                            <h3 className="-mt-2 !font-semibold capitalize text-[#79726d] dark:text-main/75">{item.title}</h3>
                            <p className="!font-normal text-stone-500 dark:text-[#ffb997] !mt-3">{item.location}</p>
                            <p className="!font-light !mt-1 text-stone-200">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
