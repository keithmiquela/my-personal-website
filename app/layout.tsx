import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keith Miquela - CS & Statistics Student | AI & ML Engineer",
  description:
    "Personal website of Keith Miquela, Computer Science and Statistics student at Rutgers University, passionate about AI-powered software engineering and machine learning.",
  keywords: [
    "Keith Miquela",
    "Computer Science",
    "Statistics",
    "Rutgers University",
    "AI",
    "Machine Learning",
    "Software Engineering",
  ],
  authors: [{ name: "Keith Miquela" }],
  creator: "Keith Miquela",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keithmiquela.com",
    title: "Keith Miquela - CS & Statistics Student",
    description: "Personal website of Keith Miquela, Computer Science and Statistics student at Rutgers University",
    siteName: "Keith Miquela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Miquela - CS & Statistics Student",
    description: "Personal website of Keith Miquela, Computer Science and Statistics student at Rutgers University",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
