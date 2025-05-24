"use client"

import { useEffect, useRef } from "react"
import { Download, FileText, Award, Briefcase } from "lucide-react"

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)

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

    const elements = resumeRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" ref={resumeRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="animate-on-scroll opacity-0 text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Download my complete resume to learn more about my education, experience, and technical skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-on-scroll opacity-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Rutgers University – New Brunswick</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">CS & Statistics Double Major</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Mathematics Minor</p>
            </div>

            <div className="animate-on-scroll opacity-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Software Engineering Internships</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Research Assistant Positions</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Leadership Roles</p>
            </div>

            <div className="animate-on-scroll opacity-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Python, Java, JavaScript</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Machine Learning & AI</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Full-Stack Development</p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FileText className="text-white" size={40} />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Download My Complete Resume</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the full details of my academic background, technical projects, leadership experience, and skills in
              AI and software engineering.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Download className="mr-3" size={24} />
              Download Resume (PDF)
            </a>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">Last updated: December 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}
