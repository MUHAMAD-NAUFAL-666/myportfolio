"use client"

import { useMemo } from "react"
import InfiniteMenu from "@/components/InfiniteMenu"
import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiPhp,
  SiJavascript,
  SiFirebase,
  SiVercel,
  SiSupabase,
  SiFigma,
} from "react-icons/si"

import { renderToStaticMarkup } from "react-dom/server"

function iconToImage(Icon: any) {
  const svgString = renderToStaticMarkup(
    <Icon size={200} color="white" />
  )

  return `data:image/svg+xml;base64,${btoa(svgString)}`
}

export default function TechStack() {

  const items = useMemo(() => [
    { image: iconToImage(SiLaravel), link: "https://laravel.com", title: "Laravel", description: "Backend Framework" },
    { image: iconToImage(SiReact), link: "https://react.dev", title: "React", description: "Frontend Library" },
    { image: iconToImage(SiTailwindcss), link: "https://tailwindcss.com", title: "Tailwind", description: "CSS Framework" },
    { image: iconToImage(SiMysql), link: "https://mysql.com", title: "MySQL", description: "Database" },
    { image: iconToImage(SiPython), link: "https://python.org", title: "Python", description: "AI & Backend" },
    { image: iconToImage(SiDocker), link: "https://docker.com", title: "Docker", description: "Containerization" },
    { image: iconToImage(SiGit), link: "https://git-scm.com", title: "Git", description: "Version Control" },
    { image: iconToImage(SiGithub), link: "https://github.com", title: "GitHub", description: "Code Hosting" },
    { image: iconToImage(SiPhp), link: "https://php.net", title: "PHP", description: "Backend Language" },
    { image: iconToImage(SiJavascript), link: "https://javascript.info", title: "JavaScript", description: "Frontend Language" },
    { image: iconToImage(SiFirebase), link: "https://firebase.google.com", title: "Firebase", description: "BaaS Platform" },
    { image: iconToImage(SiVercel), link: "https://vercel.com", title: "Vercel", description: "Deployment Platform" },
    { image: iconToImage(SiSupabase), link: "https://supabase.com", title: "Supabase", description: "Open Source Backend" },
    { image: iconToImage(SiFigma), link: "https://figma.com", title: "Figma", description: "UI/UX Design Tool" },
  ], [])

  return (
    <section
      id="tech"
      className="relative py-36 px-6 md:px-16 overflow-hidden
      bg-gradient-to-b 
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
      transition-colors duration-500"
    >

      {/* 3D Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
      w-[700px] h-[700px] 
      bg-purple-400/30 dark:bg-cyan-500/20 
      rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight
          bg-gradient-to-r from-purple-600 to-cyan-500 
          bg-clip-text text-transparent">
            Tech Stack
          </h3>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop, and deploy scalable digital systems.
          </p>
        </div>

        {/* Glass Container */}
        <div className="relative backdrop-blur-xl 
        bg-white/60 dark:bg-white/5 
        border border-white/30 dark:border-white/10
        rounded-3xl shadow-2xl 
        p-8 md:p-12 transition-colors duration-500">

          <div className="h-[600px] relative">
            <InfiniteMenu items={items} scale={1.1} />
          </div>

        </div>

      </div>
    </section>
  )
}