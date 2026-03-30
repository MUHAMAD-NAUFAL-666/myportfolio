"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import StaggeredMenu from "@/components/StaggeredMenu"

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [time, setTime] = useState(new Date())

  // Dark Mode Toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  // Scroll Shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Realtime Clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  // Desktop Menu
  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  // Mobile Staggered Menu Items
  const menuItems = [
    { label: "About", ariaLabel: "Go to about section", link: "#about" },
    { label: "Projects", ariaLabel: "Go to projects section", link: "#projects" },
    { label: "Contact", ariaLabel: "Go to contact section", link: "#contact" },
  ]

  const socialItems = [
    { label: "GitHub", link: "https://github.com/MUHAMAD-NAUFAL-666" },
  ]

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">

      {/* NAVBAR */}
      <nav
        className={cn(
          "w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          "backdrop-blur-xl border",
          "bg-white/70 dark:bg-zinc-900/70",
          "border-black/5 dark:border-white/10",
          isScrolled && "shadow-lg bg-white/90 dark:bg-zinc-900/90"
        )}
      >
        {/* Logo */}
        <a
          href="/"
          className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white"
        >
          Naufal<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Clock */}
          <div className="hidden lg:block text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            {formattedTime}
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/MUHAMAD-NAUFAL-666"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Github size={14} />
            GitHub
          </a>

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* MOBILE STAGGERED MENU */}
         <div className="md:hidden">
  <StaggeredMenu
  position="right"
  items={menuItems}
  socialItems={socialItems}
  displaySocials
  displayItemNumbering={true}

  // 🌌 DEPTH COLOR (layered luxury)
  colors={[
    "#020617",
    "#020617",
    "#0a0f1c",
    "#111827"
  ]}

  // 🎯 BUTTON
  menuButtonColor="#020617"
  openMenuButtonColor="#ffffff"

  // 💎 ACCENT (glow cyan)
  accentColor="#38bdf8"

  logoUrl="/logo.svg"

  changeMenuColorOnOpen={true}
  isFixed={true}
  closeOnClickAway={true}
/>
</div>
        </div>
      </nav>
    </header>
  )
}