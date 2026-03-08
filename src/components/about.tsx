"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import TrueFocus from "./TrueFocus"
import BlurText from "./blurtext"
import { Linkedin, Instagram, MessageCircle, Music2 } from "lucide-react"
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

export default function About() {
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
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden
      bg-gradient-to-b 
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[180px]" />
        <div className="hidden dark:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[180px]" />

        <div className="dark:hidden absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[180px]" />
        <div className="dark:hidden absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="backdrop-blur-xl bg-card/60 border border-border rounded-3xl shadow-xl p-10 md:p-14">

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <TrueFocus
                sentence="About Me"
                blurAmount={5}
                borderColor="#06b6d4"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />

              <div className="mt-6">
                <BlurText
                  text={`Hi I'm Naufal, a web developer focused on building modern
                  and scalable applications. I enjoy creating digital
                  products that are clean, efficient and user friendly.`}
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                />
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-10">

                <div>
                  <h4 className="text-3xl font-bold text-primary">
                    <Counter end={3} suffix="+" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Years Learning
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-primary">
                    <Counter end={10} suffix="+" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Projects
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-primary">
                    <Counter end={15} suffix="+" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Databases
                  </p>
                </div>

              </div>

              {/* GET IN TOUCH */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                  Get in touch
                </h3>

                <div className="flex flex-wrap gap-4">

                  <SocialButton icon={<Music2 size={18} />} label="Tiktok" />

                  <SocialButton icon={<Instagram size={18} />} label="Instagram" />

                  <SocialButton icon={<MessageCircle size={18} />} label="Whatsapp" />

                  <SocialButton icon={<Linkedin size={18} />} label="LinkedIn" />

                </div>
              </div>

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

          </div>

        </div>
      </motion.div>
    </section>
  )
}


function SocialButton({
  icon,
  label
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-5 py-3 rounded-xl
      bg-muted hover:bg-primary hover:text-white
      transition-all duration-300 shadow"
    >
      {icon}
      <span className="text-sm font-medium">
        {label}
      </span>
    </motion.button>
  )
}