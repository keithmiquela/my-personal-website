"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lightbulb, Users, TrendingUp, BarChart4, Zap } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const philosophyItems = [
  {
    icon: <Lightbulb size={24} />,
    title: "User-Centered Design",
    description:
      "I believe in putting users at the center of every product decision, creating experiences that solve real problems.",
  },
  {
    icon: <BarChart4 size={24} />,
    title: "Data-Driven Decisions",
    description:
      "I leverage data to inform product strategy, measure success, and continuously improve user experiences.",
  },
  {
    icon: <Users size={24} />,
    title: "Cross-Functional Collaboration",
    description:
      "I thrive in collaborative environments, bringing together diverse perspectives to create better products.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Iterative Improvement",
    description:
      "I embrace an iterative approach, continuously testing and refining products based on user feedback and metrics.",
  },
  {
    icon: <Zap size={24} />,
    title: "Technical Empathy",
    description:
      "My engineering background allows me to effectively bridge the gap between business goals and technical implementation.",
  },
]

export default function WorkPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate philosophy items
      gsap.fromTo(
        ".philosophy-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <h3 className="text-2xl font-bold text-center mb-12">
        My Product <span className="text-emerald-500 dark:text-emerald-400">Philosophy</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophyItems.map((item, index) => (
          <div
            key={index}
            className="philosophy-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4 text-emerald-500 dark:text-emerald-400">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
