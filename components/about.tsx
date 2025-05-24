"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Users, Award } from "lucide-react"

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll opacity-0">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Keith at Rutgers"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Passionate About AI & Software Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated undergraduate student at Rutgers University – New Brunswick, pursuing a double major in
                Computer Science and Statistics with a minor in Mathematics. My passion lies in the intersection of
                artificial intelligence and software engineering, where I focus on building intelligent, scalable
                systems using cutting-edge technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Through my coursework and personal projects, I've developed a strong foundation in machine learning,
                data analysis, and full-stack development. I'm particularly interested in how AI can be leveraged to
                solve complex real-world problems and improve user experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">Double Major in Computer Science & Statistics</p>
              <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
            </div>

            <div className="animate-on-scroll opacity-0 text-center p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Marketing Chair - Rutgers AI Club</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Internal VP - Origami Club</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">RAGS Coordinator - RAPS</p>
            </div>

            <div className="animate-on-scroll opacity-0 text-center p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interests</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">AI-powered Software Engineering</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Machine Learning Engineering</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Scalable System Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
