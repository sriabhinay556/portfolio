"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { interestsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import Interest from "./interest"

export default function Interests() {
    const { ref } = useSectionInView("Interests", 0.3)

    return (
        <section ref={ref} id="interests">
            <SectionHeading>My Interests</SectionHeading>
            {/* With div below images will start on right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {interestsData.map((item, idx) => (
    <Interest key={idx} {...item} />
  ))}
</div>

        </section>
    )
}
