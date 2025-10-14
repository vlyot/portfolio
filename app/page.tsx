"use client"

import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([null, null, null])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Kai Chong
                  <br />
                  <span className="text-muted-foreground">Ng</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Novice Programmer and aspiring Software Engineer with a passion for
                  <span className="text-foreground"> technology</span>,
                  and
                  <span className="text-foreground"> user experience</span>.
                  Avid vibe coder.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Currently Studying
                  </div>
                  <div>Singapore | Hong Kong</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Student</div>
                  <div className="text-muted-foreground">Ngee Ann Polytechnic</div>
                  <div className="text-xs text-muted-foreground">Class of 2026</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["C#", "React", "TypeScript", "C++"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Previous Work & Notable Projects/Certifications</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
                {[
                {
                  year: "2025",
                  role: "GIS Software Engineer Intern",
                  company: "URA Singapore",
                  description: "Built custom GIS widgets, resolved security vulnerabilities, and rebuilt frontend modules for geospatial analytics using React, TypeScript, Leaflet, and enterprise GIS tools.",
                  tech: [
                  "Geographic Information Systems (GIS)",
                  "Tailwind CSS",
                  "JavaScript",
                  "ArcMap",
                  "Handlebars",
                  "React",
                  "Leaflet",
                  "TypeScript",
                  "Redux",
                  ],
                },
                {
                  year: "2025",
                  role: "Large Language Model Operations (LLMOps) Specialization",
                  company: "Duke University",
                  description: "LLMOps: deploying, managing, and optimizing large language models across cloud, local, and open source platforms through hands-on projects. Learnt the gists of LLMs, prompt engineering, and RAG .",
                  tech: [
                    "Large Language Models",
                    "LLaMA",
                    "Artificial Intelligence",
                    "AWS",
                    "Azure Databricks",
                    "MLOps",
                    "Python",
                    "Apache Airflow",
                    "Hugging Face",
                    "Natural Language Processing (NLP)",
                    "MySQL",
                    "Rust",
                    "whisper.cpp",
                    "Cosmopolitan",
                    "Retrieval-Augmented Generation (RAG)",
                  ],
                },
                {
                  year: "2025",
                  role: "Amazon Junior Software Developer Certification",
                  company: "Amazon",
                  description: "Gained essential software development skills, Java programming, data structures, algorithms, and full-stack web development using Java technologies.",
                  tech: ["Java", "Full-Stack Web Development", "SQL","Object Oriented Design","Relational Databases"],
                },
                {
                  year: "2025",
                  role: "Adurite Tracker",
                  company: "Personal Project",
                  description: `Adurite Tracker: A tracker for in-game items on adurite.com — captures item info (rate, projected status) not provided by the site. Appends extra info from external APIs.\n\nGitHub: https://github.com/vlyot/adurite-tracker`,
                  tech: ["TypeScript", "Rust", "React", "Tauri"] 
                },
                {
                  year: "2025",
                  role: "uqe-marketplace",
                  company: "Personal Project",
                  description: `An extension of adurite-tracker. Customers can browse items and view the probable prices before contacting me. captures item info (rate, projected status) not provided by the site. Appends extra info from external APIs. Does some logic to display probable prices and their rates.\n\nLink: https://vlyot.github.io/uqe-marketplace/`,
                  tech: ["Tailwind CSS", "Render", "React","TypeScript"] 
                },
                {
                  year: "2024",
                  role: "Data Structures & Algorithms Practicals",
                  company: "Personal / Education",
                  description: "DSA Practicals: Repository of data structures & algorithms practice problems (in C++), organized weekly.",
                  tech: ["C++"] 
                },
                {
                  year: "2024",
                  role: "Certified Scrum Master I",
                  company: "Scrum.org",
                  description: "Professional Scrum Master I (PSM I) certification.",
                  tech: ["Agile", "Scrum"]
                },
                {
                  year: "2024-Present",
                  role: "Learner",
                  company: "Duke University & Other Institutions",
                  description: "Various certifications in software engineering, programming, and computer science. Always updating and expanding my knowledge. Full list available on LinkedIn. (https://www.linkedin.com/in/kaichongng/details/certifications/)",
                  tech: ["Java", "Python","Golang", "Computer Science", "Data Structures","NLP", "LLM", "AI"]
                }
                ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                  </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                  <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  {job.tech.map((tech) => (
                  <span
                  key={tech}
                  className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                  {tech}
                  </span>
                  ))}
                  </div>
                </div>
                ))}
            </div>
          </div>
        </section>

  <section id="connect" ref={(el) => { sectionsRef.current[2] = el; }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                  Open to contribute to open source projects or communities.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:ngkaichong10@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">ngkaichong10@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@vlyot", url: "https://github.com/vlyot" },
                  { name: "LinkedIn", handle: "@kaichongng", url: "https://linkedin.com/in/kaichongng"},
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Built with vercel. Credits to Felix Macaspac</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
