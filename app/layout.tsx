import "@/styles/globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({ subsets: ["latin"] });

/**
 * Global metadata for your website.
 */
export const metadata = {
  metadataBase: new URL('https://sriabhinay.vercel.app'),
  title: "Sriabhinay Kusuma",
  description: "Computer Science MS graduate with expertise in Full Stack Development, AI/ML, and Cybersecurity. View my portfolio featuring projects like AI-Scraper, Go-Get-Gig, and Sneakers Adda. Specializing in React, Next.js, Python, and AWS.",
  openGraph: {
    title: "Sriabhinay Kusuma: Portfolio",
    description: "Computer Science MS graduate with expertise in Full Stack Development, AI/ML, and Cybersecurity. View my portfolio featuring projects like AI-Scraper, Go-Get-Gig, and Sneakers Adda.",
    url: "https://sriabhinay.vercel.app",
    type: "website",
    images: [
      {
        url: "https://sriabhinay.vercel.app/_next/image?url=%2Fabhi.jpg&w=640&q=95",
        width: 1200,
        height: 630,
        alt: "Sriabhinay Kusuma - Full Stack Developer Portfolio",
      },
    ], 
  },
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sriabhinay Kusuma",
              "alternateName": "Abi",
              "jobTitle": "Full Stack Developer",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Alabama in Huntsville"
              },
              "knowsAbout": [
                "Full Stack Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Cybersecurity",
                "React",
                "Next.js",
                "Python",
                "AWS"
              ],
              "url": "https://sriabhinay.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/sriabhinay556/",
                "https://www.github.com/sriabhinay556/"
              ],
              "image": "https://sriabhinay.vercel.app/Sriabhinay%20Kusuma.jpg"
            })
          }}
        />
      </head>
      <body className={`${montserrat.className} pt-28 sm:pt-36 bg-gray-200 dark:bg-[#0c0713]`}>
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="dark:bg-[#671f91a8] absolute top-[1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="dark:bg-[#48457c] absolute top-[9rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
                      md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster
              position="top-right"
              containerStyle={{
                top: "5rem",
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}


