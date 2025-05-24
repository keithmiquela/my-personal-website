"use client"

import { useEffect, useRef } from "react"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started in AI Engineering as a College Freshman",
    summary:
      "A comprehensive guide for new computer science students looking to break into artificial intelligence and machine learning. Learn about essential courses, programming languages, and hands-on projects.",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "AI/ML",
    link: "/blog/getting-started-ai-engineering",
  },
  {
    id: 2,
    title: "How I Built My First NLP Project",
    summary:
      "A detailed walkthrough of creating a natural language processing application from scratch, including data preprocessing, model selection, and deployment challenges I faced along the way.",
    date: "November 28, 2023",
    readTime: "12 min read",
    category: "Projects",
    link: "/blog/first-nlp-project",
  },
  {
    id: 3,
    title: "Lessons From My First Software Internship",
    summary:
      "Key insights and practical advice from my summer internship experience, covering technical skills, workplace communication, and professional development in the tech industry.",
    date: "October 10, 2023",
    readTime: "6 min read",
    category: "Career",
    link: "/blog/first-internship-lessons",
  },
  {
    id: 4,
    title: "Building Scalable ML Systems: A Student's Perspective",
    summary:
      "Exploring the challenges and solutions in creating machine learning systems that can handle real-world data volumes and user loads, with practical examples from my projects.",
    date: "September 22, 2023",
    readTime: "10 min read",
    category: "AI/ML",
    link: "/blog/scalable-ml-systems",
  },
  {
    id: 5,
    title: "The Math Behind Machine Learning: What You Really Need",
    summary:
      "Breaking down the essential mathematical concepts for ML engineering, from linear algebra to statistics, with practical applications and learning resources for students.",
    date: "August 15, 2023",
    readTime: "15 min read",
    category: "Education",
    link: "/blog/math-behind-ml",
  },
  {
    id: 6,
    title: "Contributing to Open Source as a Student",
    summary:
      "My journey into open source development, including how to find beginner-friendly projects, make meaningful contributions, and build your developer portfolio through community involvement.",
    date: "July 30, 2023",
    readTime: "7 min read",
    category: "Open Source",
    link: "/blog/open-source-student-guide",
  },
]

export default function Blog() {
  const blogRef = useRef<HTMLDivElement>(null)

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

    const elements = blogRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={blogRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="animate-on-scroll opacity-0 text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Sharing my journey in AI, software engineering, and student life at Rutgers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="animate-on-scroll opacity-0 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{post.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{post.summary}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>

                  <a
                    href={post.link}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <span className="mr-1">Read More</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View All Posts
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
