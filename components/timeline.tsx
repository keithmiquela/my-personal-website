"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Timeline data
const timelineItems = [
  {
    id: 1,
    year: "2022 - Present",
    title: "Senior Product Manager",
    company: "TechInnovate AI",
    description:
      "Leading product strategy for AI-powered analytics platform. Increased user engagement by 42% and reduced churn by 18%.",
    type: "work",
  },
  {
    id: 2,
    year: "2019 - 2022",
    title: "Product Manager",
    company: "DataVision Inc.",
    description:
      "Managed the development of machine learning features for a SaaS platform. Launched 3 major features that increased revenue by 27%.",
    type: "work",
  },
  {
    id: 3,
    year: "2017 - 2019",
    title: "ML Engineer",
    company: "AI Solutions",
    description:
      "Developed and deployed machine learning models for predictive analytics. Improved model accuracy by 31%.",
    type: "work",
  },
  {
    id: 4,
    year: "2015 - 2017",
    title: "M.S. in Computer Science",
    company: "Stanford University",
    description:
      "Specialized in Machine Learning and Artificial Intelligence. Research focused on natural language processing.",
    type: "education",
  },
  {
    id: 5,
    year: "2011 - 2015",
    title: "B.S. in Computer Science",
    company: "MIT",
    description: "Graduated with honors. Minor in Business Administration.",
    type: "education",
  },
]

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline items
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          },
        },
      )
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="w-1/2"></div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-emerald-500 dark:border-emerald-400 flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="text-emerald-500 dark:text-emerald-400" size={20} />
                ) : (
                  <GraduationCap className="text-emerald-500 dark:text-emerald-400" size={20} />
                )}
              </div>
            </div>

            <div className="w-1/2 px-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full mb-2">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">{item.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
