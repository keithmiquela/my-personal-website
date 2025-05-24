"use client"

import { useEffect, useRef } from "react"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "ML Resume Classifier",
    description:
      "An intelligent resume classification system that automatically categorizes resumes by job roles using natural language processing and machine learning algorithms.",
    technologies: ["Python", "Flask", "scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/keithmiquela/ml-resume-classifier",
    demo: null,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Full-stack CRM System",
    description:
      "A comprehensive customer relationship management system with real-time analytics, user authentication, and responsive design for managing client interactions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/keithmiquela/crm-system",
    demo: "https://crm-demo.keithmiquela.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Data Dashboard for Nonprofit Analytics",
    description:
      "Interactive data visualization dashboard helping nonprofits track donations, volunteer engagement, and impact metrics with real-time updates.",
    technologies: ["Python", "Pandas", "Matplotlib", "Dash", "Plotly"],
    github: "https://github.com/keithmiquela/nonprofit-dashboard",
    demo: null,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "AI-Powered Study Assistant",
    description:
      "A smart study companion that uses NLP to generate quiz questions, summarize notes, and provide personalized learning recommendations for students.",
    technologies: ["Python", "OpenAI API", "Streamlit", "spaCy", "SQLite"],
    github: "https://github.com/keithmiquela/ai-study-assistant",
    demo: "https://study-assistant.keithmiquela.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Campus Event Finder",
    description:
      "A mobile-responsive web application that aggregates and recommends campus events based on student interests and past attendance patterns.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Google Maps API"],
    github: "https://github.com/keithmiquela/campus-events",
    demo: "https://campus-events.keithmiquela.com",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

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

    const elements = projectsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="animate-on-scroll opacity-0 text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A showcase of my work in AI, machine learning, and full-stack development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-on-scroll opacity-0 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
