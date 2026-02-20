"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="
      relative overflow-hidden
      bg-gradient-to-b
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
      text-black dark:text-white
      transition-colors duration-500
    ">

      {/* 🔥 Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x opacity-70" />

      {/* Soft Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] 
        bg-purple-400/20 dark:bg-cyan-400/10 
        rounded-full blur-[200px] 
        left-1/2 -translate-x-1/2 -top-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* 🚀 Glass CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mb-20 p-10 rounded-3xl text-center
            bg-white/70 dark:bg-white/5
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.1)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            transition-all duration-500
          "
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Build The Future
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Crafting scalable systems, AI-powered platforms, and impactful digital experiences.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="
                group inline-flex items-center gap-2
                px-6 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-purple-500 to-cyan-400
                text-white
                hover:scale-105 transition
              "
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Muhammad Naufal
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Web & AI Engineer focused on building modern, scalable digital ecosystems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#about" className="hover:text-purple-500 transition">About</a></li>
              <li><a href="#tech" className="hover:text-purple-500 transition">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-purple-500 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-4 rounded-2xl
                    bg-black/5 dark:bg-white/5
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r 
        from-transparent via-gray-300 to-transparent 
        dark:via-white/10" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muhammad Naufal. Crafted with precision & passion.
        </div>

      </div>

      {/* Gradient Animation Keyframes */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s linear infinite;
        }
      `}</style>

    </footer>
  )
}