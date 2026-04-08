"use client"

import { Instagram, Music2, ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion"
import { useRef } from "react"

export default function PersonalAccount() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  /* ── scroll-driven 3D entrance (same as about.tsx) ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  })

  const sScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.08, 1])
  const sRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, -3, 0])
  const sZ = useTransform(scrollYProgress, [0, 0.5, 1], [-120, 40, 0])
  const sOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  /* ── mouse-follow 3D tilt on the phone stack ── */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const mxS = useSpring(mx, { stiffness: 150, damping: 20 })
  const myS = useSpring(my, { stiffness: 150, damping: 20 })
  const tiltX = useTransform(myS, [-0.5, 0.5], ["12deg", "-12deg"])
  const tiltY = useTransform(mxS, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section ref={sectionRef} className="pa">
      {/* ── background ── */}
      <div className="pa__bg">
        <div className="pa__grid" />
        <div className="pa__orb pa__orb--1" />
        <div className="pa__orb pa__orb--2" />
        <div className="pa__orb pa__orb--3" />
        <div className="pa__floor" />
      </div>

      {/* ── 3D perspective wrapper ── */}
      <motion.div
        className="pa__perspective"
        style={{
          scale: sScale,
          rotateX: sRotateX,
          z: sZ,
          opacity: sOpacity,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="pa__container">

          {/* header pills */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="pa__header"
          >
            <span className="pa__pill">Muhamad Naufal</span>
            <span className="pa__pill">Portfolio v2.0</span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="pa__title"
          >
            Personal Account
          </motion.h1>

          {/* main grid */}
          <div className="pa__layout">

            {/* LEFT — 3D phone stack */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="pa__phones-area"
            >
              <motion.div
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                className="pa__phones-3d"
              >
                {/* back phone */}
                <motion.div
                  initial={{ opacity: 0, z: -80, rotate: -5 }}
                  whileInView={{ opacity: 0.6, z: 0, rotate: -5 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="pa__phone pa__phone--back"
                  style={{ transform: "translateZ(-50px) rotate(-5deg)" }}
                >
                  <div className="pa__phone-shine" />
                  <img
                    src="./assets/lanyard/ps-ig.png"
                    alt="TikTok"
                    className="pa__phone-img"
                    loading="lazy"
                  />
                </motion.div>

                {/* main phone */}
                <motion.div
                  initial={{ opacity: 0, z: -100 }}
                  whileInView={{ opacity: 1, z: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04 }}
                  className="pa__phone pa__phone--front"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="pa__phone-shine" />
                  <img
                    src="./assets/lanyard/ps-ig.png"
                    alt="Instagram"
                    className="pa__phone-img"
                    loading="lazy"
                  />
                </motion.div>

                {/* floating icons */}
                <motion.div
                  className="pa__float pa__float--ig"
                  style={{ transform: "translateZ(120px)" }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Instagram className="pa__float-icon" />
                </motion.div>

                <motion.div
                  className="pa__float pa__float--tt"
                  style={{ transform: "translateZ(140px)" }}
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Music2 className="pa__float-icon" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT — glass card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="pa__card"
            >
              <p className="pa__card-text">
                Seorang <span className="pa__card-highlight">Web Developer</span> yang
                berfokus pada pembangunan aplikasi web modern. Saya menciptakan pengalaman
                digital yang tidak hanya fungsional, tetapi juga estetis dan cepat.
              </p>

              <p className="pa__card-tech">
                Tech Stack Utama: <br />
                <span className="pa__tech--cyan">React</span>,{" "}
                <span className="pa__tech--red">Laravel</span>, &{" "}
                <span className="pa__tech--sky">Tailwind CSS</span>.
              </p>

              <div className="pa__tags">
                {["Frontend Dev", "UI/UX", "Clean Code"].map((t) => (
                  <span key={t} className="pa__tag">{t}</span>
                ))}
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="pa__cta"
              >
                <Instagram size={16} />
                <Music2 size={16} />
                Visit Social Media
                <ArrowUpRight size={14} className="pa__cta-arrow" />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── scoped styles ── */}
      <style>{`
        /* ========== SECTION ========== */
        .pa {
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
        .pa__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .pa__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .pa__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          will-change: transform;
        }
        .pa__orb--1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.12), transparent 70%);
          top: -10%; right: 10%;
          animation: pa-orb 12s ease-in-out infinite alternate;
        }
        .pa__orb--2 {
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.10), transparent 70%);
          bottom: -8%; left: -5%;
          animation: pa-orb 15s ease-in-out infinite alternate-reverse;
        }
        .pa__orb--3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255, 107, 149, 0.08), transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: pa-orb 9s ease-in-out infinite alternate;
        }

        @keyframes pa-orb {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, -15px) scale(1.1); }
        }

        .pa__floor {
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

        /* ========== PERSPECTIVE ========== */
        .pa__perspective {
          position: relative;
          z-index: 10;
          width: 100%;
          will-change: transform, opacity;
        }

        /* ========== CONTAINER ========== */
        .pa__container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
        }
        @media (min-width: 768px) {
          .pa__container { padding: 4rem 3rem; }
        }

        /* ========== HEADER ========== */
        .pa__header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .pa__pill {
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
        .pa__title {
          font-size: clamp(2rem, 5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 3rem;
          background: linear-gradient(to bottom, #ffffff, #888888);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ========== LAYOUT ========== */
        .pa__layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .pa__layout {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
          }
        }

        /* ========== PHONE STACK ========== */
        .pa__phones-area {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          cursor: pointer;
          perspective: 1500px;
        }

        .pa__phones-3d {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pa__phone {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(0, 212, 255, 0.1);
        }

        .pa__phone--front {
          width: 260px; height: 520px;
          border-radius: 48px;
          z-index: 30;
          box-shadow:
            0 30px 60px -15px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(0, 212, 255, 0.06);
        }
        .pa__phone--back {
          width: 220px; height: 480px;
          border-radius: 44px;
          z-index: 20;
          right: 2.5rem;
          filter: grayscale(25%) brightness(0.85);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .pa__phone-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(165deg, rgba(255,255,255,0.12) 0%, transparent 50%);
          z-index: 10;
          pointer-events: none;
          border-radius: inherit;
        }

        .pa__phone-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* floating icons */
        .pa__float {
          position: absolute;
          z-index: 40;
          padding: 0.9rem;
          border-radius: 1rem;
          background: rgba(0, 212, 255, 0.06);
          border: 1px solid rgba(0, 212, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .pa__float--ig { left: -1rem; top: 6rem; }
        .pa__float--tt { right: 0; bottom: 5rem; }

        .pa__float-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* ========== GLASS CARD ========== */
        .pa__card {
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(0, 212, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .pa__card-text {
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1.25rem;
        }
        @media (min-width: 768px) {
          .pa__card-text { font-size: 0.95rem; }
        }

        .pa__card-highlight {
          color: white;
          font-weight: 600;
        }

        .pa__card-tech {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .pa__tech--cyan { color: #00d4ff; }
        .pa__tech--red  { color: #f87171; }
        .pa__tech--sky  { color: #38bdf8; }

        .pa__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .pa__tag {
          font-size: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          padding: 0.35rem 0.75rem;
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: 9999px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* CTA */
        .pa__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.9rem 1.5rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pa__cta:hover {
          background: rgba(0, 212, 255, 0.06);
          border-color: rgba(0, 212, 255, 0.15);
          color: white;
        }
        .pa__cta-arrow {
          color: rgba(255, 255, 255, 0.25);
          transition: color 0.3s;
        }
        .pa__cta:hover .pa__cta-arrow {
          color: rgba(0, 212, 255, 0.6);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 640px) {
          .pa__phone--front {
            width: 220px; height: 440px;
            border-radius: 40px;
          }
          .pa__phone--back {
            width: 180px; height: 400px;
            border-radius: 36px;
            right: 1rem;
          }
          .pa__phones-area { min-height: 420px; }
          .pa__float--ig { left: 0; top: 4rem; }
          .pa__float--tt { right: -0.5rem; bottom: 3rem; }
        }
      `}</style>
    </section>
  )
}