"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import TrueFocus from "./TrueFocus"
import BlurText from "./blurtext"

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
  const handleAnimationComplete = () => {
    console.log("Animation completed!")
  }

  return (
    <section
       id="cv-section"
  className="relative min-h-screen w-full overflow-hidden
  bg-gradient-to-b 
  from-white via-purple-50 to-white
  dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
  text-foreground
  transition-colors duration-500"
    >
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 -z-10">

        {/* Dark Glow */}
        <div className="hidden dark:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[180px]" />
        <div className="hidden dark:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[180px]" />

        {/* Light Glow */}
        <div className="dark:hidden absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[180px]" />
        <div className="dark:hidden absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div
          className="
          backdrop-blur-xl 
          bg-card/60
          border border-border
          rounded-3xl 
          shadow-xl
          p-10 md:p-16
          grid md:grid-cols-2 gap-14 items-center
        "
        >

          {/* ===== LEFT SIDE ===== */}
          <div>

            <TrueFocus
              sentence="About Me"
              manualMode={false}
              blurAmount={5}
              borderColor="#06b6d4"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />

            <div className="mt-6">
              <BlurText
                text={`I specialize in developing modern web applications using Laravel and React. My focus is creating systems that are not only functional but scalable and impactful.`}
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              />
            </div>

            {/* ===== STATS ===== */}
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
                  Projects Built
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-primary">
                  <Counter end={15} suffix="+" />
                </h4>
                <p className="text-sm text-muted-foreground">
                  DB Tables Designed
                </p>
              </div>

            </div>
          </div>

          {/* ===== RIGHT SIDE CARD ===== */}
          <motion.div
            whileHover={{ rotateY: 8, rotateX: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative perspective-1000"
          >
            <div
              className="
              bg-gradient-to-br 
              from-primary 
              to-purple-500 
              rounded-2xl 
              p-8 
              text-primary-foreground 
              shadow-xl
              transition-all duration-500
            "
            >
              <h3 className="text-2xl font-semibold mb-4">
                What I Build
              </h3>

              <ul className="space-y-3 text-sm md:text-base opacity-90">
                <li>• Scalable Web Applications</li>
                <li>• Clean Architecture Systems</li>
                <li>• REST API & Database Design</li>
                <li>• Modern UI with React & Tailwind</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}