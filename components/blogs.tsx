"use client"
import React from "react";
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { blogsData } from "@/lib/data";
import Blog from "./blog";

export default function Blogs() {
    // const { ref } = useSectionInView("Blogs", 0.3)

    return (
        <>
         {/* <section ref={ref} id="blogs"> */}
            <SectionHeading>My Blogs</SectionHeading>
            {/* With div below images will start on right */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4">
                {blogsData.map((blog, index) => (
                    <React.Fragment key={index}>
                        <Blog {...blog} />
                    </React.Fragment>
                ))}
            </div>
        {/* </section> */}
        </>

    )
}