"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Skills data
const productSkills = [
  { name: "Product Strategy", level: 90 },
  { name: "User Research", level: 85 },
  { name: "Roadmap Planning", level: 95 },
  { name: "A/B Testing", level: 80 },
  { name: "Data Analysis", level: 85 },
]

const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "TensorFlow", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Data Visualization", level: 85 },
  { name: "Machine Learning", level: 80 },
]

export default function SkillsChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      gsap.fromTo(
        ".skill-progress",
        { width: 0 },
        {
          width: "var(--progress)",
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 70%",
          },
        },
      )
    }, chartRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={chartRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h4 className="text-xl font-bold mb-6 text-center">Product Management</h4>
        <div className="space-y-6">
          {productSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-emerald-500 dark:text-emerald-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full bg-emerald-500 dark:bg-emerald-400 rounded-full"
                  style={{ "--progress": `${skill.level}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h4 className="text-xl font-bold mb-6 text-center">Technical Skills</h4>
        <div className="space-y-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-500 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                  style={{ "--progress": `${skill.level}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
