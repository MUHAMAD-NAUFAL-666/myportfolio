"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import TrueFocus from "./TrueFocus"
import BlurText from "./blurtext"
import { Linkedin, Instagram, MessageCircle, Music2, ArrowUpRight } from "lucide-react"
import ChromaGrid from "./ChromaGrid"

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1200
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const profileItems = [
  {
    image: "/assets/lanyard/profile.jpg",
    title: "Naufal Muhamad",
    subtitle: "Fullstack Developer",
    handle: "@naufal",
    borderColor: "#06b6d4",
    gradient: "linear-gradient(145deg,#06b6d4,#000)",
    url: "https://github.com/muhamad-naufal-666"
  }
]

const stats = [
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Databases" },
]

const socials = [
  { icon: <Music2 size={16} />, label: "TikTok", href: "#" },
  { icon: <Instagram size={16} />, label: "Instagram", href: "#" },
  { icon: <MessageCircle size={16} />, label: "WhatsApp", href: "#" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
]

const tags = [
  "Frontend Dev",
  "UI/UX",
  "Clean Code",
  "Fullstack",
]

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden
      bg-neutral-950 text-white flex items-center justify-center"
    >
      {/* Background Grid & Glow — sama persis Personal Account */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-pink-600/15 rounded-full blur-[120px] opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 w-full z-10">

        {/* Header — sama persis Personal Account */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-between text-xs text-neutral-500 mb-6 uppercase tracking-widest"
        >
          <span className="border border-neutral-800 px-3 py-1 rounded-full">Muhamad Naufal</span>
          <span className="border border-neutral-800 px-3 py-1 rounded-full">About Me</span>
        </motion.div>

        {/* Title — gradient text sama seperti Personal Account */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <TrueFocus
            sentence="About Me"
            blurAmount={5}
            borderColor="#06b6d4"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Description — BlurText */}
            <div className="mb-8">
              <BlurText
                text={`Hi I'm Naufal, a web developer focused on building modern and scalable applications. I enjoy creating digital products that are clean, efficient and user friendly.`}
                delay={40}
                animateBy="words"
                direction="top"
                className="text-sm md:text-base text-neutral-300 leading-relaxed"
              />
            </div>

            {/* Tech Stack — sama format Personal Account */}
            <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
              Tech Stack Utama: <br />
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-red-400">Laravel</span>, &{" "}
              <span className="text-sky-400">Tailwind CSS</span>.
            </p>

            {/* Tags — monospace pills sama seperti Personal Account */}
            <div className="flex flex-wrap gap-2.5 text-xs font-mono mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-neutral-800 rounded-full text-neutral-300 border border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-4 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm"
                >
                  <h4 className="text-3xl font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Get in Touch */}
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4 font-mono">
                Get in touch
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <SocialButton key={social.label} {...social} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — ChromaGrid Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative ring di belakang ChromaGrid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full border border-white/[0.04]" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.02]" />
            </div>

            <div className="relative h-[470px] w-[320px] mx-auto rounded-2xl overflow-hidden">
              <ChromaGrid
                items={profileItems}
                radius={280}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>

            {/* Floating glow accent di bawah ChromaGrid */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-cyan-500/20 rounded-full blur-[60px]" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* Social Button — dark glass style konsisten */
function SocialButton({
  icon,
  label,
  href = "#"
}: {
  icon: React.ReactNode
  label: string
  href?: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
      whileTap={{ scale: 0.96 }}
      className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
      bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm
      text-neutral-300 hover:text-white
      transition-all duration-300 cursor-pointer"
    >
      {icon}
      <span className="text-xs font-medium tracking-wide">{label}</span>
      <ArrowUpRight
        size={12}
        className="text-neutral-600 group-hover:text-neutral-400 transition-colors"
      />
    </motion.a>
  )
}