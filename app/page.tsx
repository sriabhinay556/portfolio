import Cursor from "@/components/cursor"
import Particle from "@/components/particles"
import Intro from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ScottyTheRocket from "@/components/scotty"
import Blogs from "@/components/blogs"
import Education from "@/components/education"
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Cursor />
            <Particle />
            <Intro />   
            <SectionDivider />  
            <About />
            <Projects />
            {/* <Blogs /> // feature to be added */}
            <Skills />
            <Education />
            <Experience />
            <Contact />
            <ScottyTheRocket />
        </main>
    )
}
