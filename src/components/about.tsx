"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import TrueFocus from "./TrueFocus"
import BlurText from "./blurtext"
import { Linkedin, Instagram, MessageCircle, Music2, ArrowUpRight } from "lucide-react"
import ChromaGrid from "./ChromaGrid"

/* ─── Counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1200
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── data ─── */
const profileItems = [
  {
    image: "/assets/lanyard/profile.jpg",
    title: "Naufal Muhamad",
    subtitle: "Fullstack Developer",
    handle: "@naufal",
    borderColor: "#06b6d4",
    gradient: "linear-gradient(145deg,#06b6d4,#000)",
    url: "https://github.com/muhamad-naufal-666",
  },
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

const tags = ["Frontend Dev", "UI/UX", "Clean Code", "Fullstack"]

/* ─── main component ─── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  /* scroll-driven 3D zoom effect */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.08, 1])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, -3, 0])
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-120, 40, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return (
    <section ref={sectionRef} id="about" className="abt">
      {/* ── background layers ── */}
      <div className="abt__bg">
        <div className="abt__grid" />
        <div className="abt__orb abt__orb--1" />
        <div className="abt__orb abt__orb--2" />
        <div className="abt__orb abt__orb--3" />
        <div className="abt__floor" />
      </div>

      {/* ── 3D perspective wrapper ── */}
      <motion.div
        className="abt__perspective"
        style={{
          scale,
          rotateX,
          z,
          opacity,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="abt__container">

          {/* header pills */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="abt__header"
          >
            <span className="abt__pill">Muhamad Naufal</span>
            <span className="abt__pill">About Me</span>
          </motion.div>

          {/* title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="abt__title-wrap"
          >
            <TrueFocus
              sentence="About Me"
              blurAmount={5}
              borderColor="#00d4ff"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </motion.div>

          {/* main grid */}
          <div className="abt__grid-layout">

            {/* LEFT — text */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="abt__left"
            >
              {/* bio */}
              <div className="abt__bio">
                <BlurText
                  text="Hi I'm Naufal, a web developer focused on building modern and scalable applications. I enjoy creating digital products that are clean, efficient and user friendly."
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="abt__bio-text"
                />
              </div>

              {/* tech */}
              <p className="abt__tech">
                Tech Stack Utama: <br />
                <span className="abt__tech--cyan">React</span>,{" "}
                <span className="abt__tech--red">Laravel</span>, &{" "}
                <span className="abt__tech--sky">Tailwind CSS</span>.
              </p>

              {/* tags */}
              <div className="abt__tags">
                {tags.map((tag) => (
                  <span key={tag} className="abt__tag">{tag}</span>
                ))}
              </div>

              {/* stats */}
              <div className="abt__stats">
                {stats.map((s) => (
                  <div key={s.label} className="abt__stat">
                    <h4 className="abt__stat-value">
                      <Counter end={s.value} suffix={s.suffix} />
                    </h4>
                    <p className="abt__stat-label">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* socials */}
              <div className="abt__socials-wrap">
                <p className="abt__socials-title">Get in touch</p>
                <div className="abt__socials">
                  {socials.map((s) => (
                    <SocialButton key={s.label} {...s} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — ChromaGrid visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="abt__right"
            >
              {/* decorative rings */}
              <div className="abt__rings">
                <div className="abt__ring abt__ring--1" />
                <div className="abt__ring abt__ring--2" />
              </div>

              <div className="abt__chroma">
                <ChromaGrid
                  items={profileItems}
                  radius={280}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              {/* bottom glow */}
              <div className="abt__chroma-glow" />
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── scoped styles ── */}
      <style>{`
        /* ========== SECTION ========== */
        .abt {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 40%, #1b2838 100%);
          color: white;
          perspective: 1200px;
        }

        /* ========== BACKGROUND ========== */
        .abt__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .abt__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .abt__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          will-change: transform;
        }
        .abt__orb--1 {
          width: 550px; height: 550px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.10), transparent 70%);
          top: -10%; left: 20%;
          animation: abt-orb-drift 12s ease-in-out infinite alternate;
        }
        .abt__orb--2 {
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.09), transparent 70%);
          bottom: -10%; right: -5%;
          animation: abt-orb-drift 14s ease-in-out infinite alternate-reverse;
        }
        .abt__orb--3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255, 107, 149, 0.07), transparent 70%);
          top: 55%; left: -5%;
          animation: abt-orb-drift 10s ease-in-out infinite alternate;
        }

        @keyframes abt-orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, -15px) scale(1.1); }
        }

        .abt__floor {
          position: absolute;
          bottom: 0; left: -50%;
          width: 200%; height: 35%;
          background:
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(55deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 70%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 70%);
        }

        /* ========== PERSPECTIVE WRAPPER ========== */
        .abt__perspective {
          position: relative;
          z-index: 10;
          width: 100%;
          will-change: transform, opacity;
        }

        /* ========== CONTAINER ========== */
        .abt__container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
        }
        @media (min-width: 768px) {
          .abt__container { padding: 4rem 3rem; }
        }

        /* ========== HEADER ========== */
        .abt__header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .abt__pill {
          font-size: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
        }

        /* ========== TITLE ========== */
        .abt__title-wrap {
          margin-bottom: 3rem;
        }

        /* ========== GRID LAYOUT ========== */
        .abt__grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .abt__grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
          }
        }

        /* ========== LEFT COLUMN ========== */
        .abt__left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .abt__bio {
          margin-bottom: 1.5rem;
        }
        .abt__bio-text {
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
        }
        @media (min-width: 768px) {
          .abt__bio-text { font-size: 0.95rem; }
        }

        .abt__tech {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .abt__tech--cyan { color: #00d4ff; }
        .abt__tech--red  { color: #f87171; }
        .abt__tech--sky  { color: #38bdf8; }

        /* tags */
        .abt__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .abt__tag {
          font-size: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          padding: 0.35rem 0.75rem;
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: 9999px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* stats */
        .abt__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .abt__stat {
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(0, 212, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.3s, background 0.3s;
        }
        .abt__stat:hover {
          border-color: rgba(0, 212, 255, 0.15);
          background: rgba(0, 212, 255, 0.04);
        }

        .abt__stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(to bottom, #ffffff, #888888);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .abt__stat-label {
          font-size: 0.6rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.25rem;
        }

        /* socials */
        .abt__socials-wrap {}
        .abt__socials-title {
          font-size: 0.6rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.25);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.75rem;
        }
        .abt__socials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        /* social button */
        .abt__social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.9rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .abt__social-btn:hover {
          background: rgba(0, 212, 255, 0.06);
          border-color: rgba(0, 212, 255, 0.15);
          color: white;
        }
        .abt__social-btn span {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .abt__social-arrow {
          color: rgba(255, 255, 255, 0.2);
          transition: color 0.3s;
        }
        .abt__social-btn:hover .abt__social-arrow {
          color: rgba(0, 212, 255, 0.6);
        }

        /* ========== RIGHT COLUMN ========== */
        .abt__right {
          position: relative;
        }

        .abt__rings {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .abt__ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0, 212, 255, 0.05);
        }
        .abt__ring--1 { width: 340px; height: 340px; }
        .abt__ring--2 { width: 420px; height: 420px; border-color: rgba(123, 97, 255, 0.04); }

        .abt__chroma {
          position: relative;
          height: 470px;
          width: 320px;
          margin: 0 auto;
          border-radius: 1rem;
          overflow: hidden;
        }

        .abt__chroma-glow {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 60px;
          background: rgba(0, 212, 255, 0.15);
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

/* ─── Social Button ─── */
function SocialButton({
  icon,
  label,
  href = "#",
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="abt__social-btn"
    >
      {icon}
      <span>{label}</span>
      <ArrowUpRight size={12} className="abt__social-arrow" />
    </motion.a>
  )
}