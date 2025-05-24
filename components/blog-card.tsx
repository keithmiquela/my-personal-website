"use client"

import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogPostProps {
  post: {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    category: string
    link: string
  }
}

export default function BlogCard({ post }: BlogPostProps) {
  return (
    <div className="blog-card group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-emerald-500 text-white rounded-full">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{post.date}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

        <a
          href={post.link}
          className="inline-flex items-center text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
        >
          <span className="mr-2">Read More</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}
