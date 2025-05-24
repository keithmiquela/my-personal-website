"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 mb-6">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Keith Miquela"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
            />
          </div>

          <h1 className="animate-on-scroll opacity-0 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Keith Miquela
          </h1>

          <h2 className="animate-on-scroll opacity-0 text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            Computer Science & Statistics Student
          </h2>

          <p className="animate-on-scroll opacity-0 text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Undergraduate at{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">Rutgers University – New Brunswick</span>,
            passionate about AI-powered Software Engineering and Machine Learning. Building intelligent, scalable
            systems with cutting-edge technologies.
          </p>

          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/keithmiquela"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/keithmiquela"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Resume
            </a>
          </div>

          <div className="animate-on-scroll opacity-0">
            <a
              href="#about"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="mr-2">Learn more about me</span>
              <ChevronDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
