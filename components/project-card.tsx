"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="project-card group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        <a
          href={project.link}
          className={cn(
            "inline-flex items-center text-sm font-medium transition-all",
            "relative overflow-hidden",
            "text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300",
          )}
        >
          <span className="mr-2">View Case Study</span>
          <ExternalLink size={16} />
          <span
            className={cn(
              "absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 dark:bg-emerald-400 transform transition-transform duration-300",
              isHovered ? "scale-x-100" : "scale-x-0",
            )}
          ></span>
        </a>
      </div>

      <div
        className={cn(
          "absolute inset-0 border-2 border-emerald-500 dark:border-emerald-400 rounded-lg opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      ></div>
    </div>
  )
}
