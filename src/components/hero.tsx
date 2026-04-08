"use client"

import { motion } from "framer-motion"
import Lanyard from "@/components/lanyard"
import RotatingText from "@/components/RotatingText"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import TextType from "./TextType"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { CVDocument } from "./CVDocument"

/* ─── animation presets ─── */
const ease = [0.16, 1, 0.3, 1] as const
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

/* 3D section entrance — emerges from depth */
const sectionEntrance = {
  initial: {
    opacity: 0,
    scale: 0.85,
    rotateX: 8,
    y: 60,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 1.4,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.1,
  },
}

export default function Hero() {
  return (
    <motion.section
      id="cv-section"
      className="hero"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      {...sectionEntrance}
    >
      {/* ── background layers ── */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__floor" />

        {/* 3D floating geometric shapes — lightweight CSS-only */}
        <div className="hero__geo hero__geo--1" />
        <div className="hero__geo hero__geo--2" />
        <div className="hero__geo hero__geo--3" />
        <div className="hero__geo hero__geo--4" />
        <div className="hero__geo hero__geo--5" />
      </div>

      {/* ── main content ── */}
      <div className="hero__container">
        <div className="hero__layout">

          {/* LEFT — 3D Lanyard card */}
          <motion.div
            {...fadeUp(0)}
            className="hero__card-col"
          >
            <div className="hero__card">
              {/* glass border glow */}
              <div className="hero__card-glow" />
              <div className="hero__card-inner">
                <Lanyard position={[0, 0, 20]} gravity={[0, -35, 0]} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — text content */}
          <motion.div
            {...fadeUp(0.12)}
            className="hero__text-col"
          >
            {/* badges */}
            <motion.div {...fadeUp(0.25)} className="hero__badges">
              <span className="hero__badge">AI Engineer</span>
              <span className="hero__badge">Fullstack Developer</span>
            </motion.div>

            {/* heading */}
            <div className="hero__heading">
              <TextType
                text="Building"
                as="h1"
                typingSpeed={70}
                pauseDuration={800}
                deletingSpeed={40}
                loop={false}
                showCursor={false}
                className="hero__h1"
              />
              <TextType
                text="Intelligent"
                as="h1"
                typingSpeed={70}
                pauseDuration={800}
                deletingSpeed={40}
                loop={false}
                showCursor={false}
                className="hero__h1"
              />
              <TextType
                text="Digital Systems"
                as="h1"
                typingSpeed={70}
                pauseDuration={1500}
                deletingSpeed={40}
                loop={false}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.6}
                className="hero__h1 hero__h1--muted"
              />
            </div>

            {/* description */}
            <p className="hero__desc">
              I build scalable web systems using{" "}
              <RotatingText
                texts={["Laravel", "React", "Modern Architecture"]}
                mainClassName="hero__rotating-badge"
                rotationInterval={2500}
              />
            </p>

            {/* CTA buttons */}
            <div className="hero__actions">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero__btn hero__btn--primary"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <PDFDownloadLink
                document={<CVDocument />}
                fileName="Muhammad-Naufal-CV.pdf"
              >
                {({ loading }) => (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="hero__btn hero__btn--ghost"
                  >
                    <Download className="w-4 h-4" />
                    {loading ? "Generating..." : "Download CV"}
                  </motion.button>
                )}
              </PDFDownloadLink>
            </div>

            {/* tech tags */}
            <motion.div {...fadeUp(1)} className="hero__tags">
              {["Next.js", "TypeScript", "Tailwind", "PostgreSQL"].map((t) => (
                <span key={t} className="hero__tag">{t}</span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hero__scroll"
      >
        <span className="hero__scroll-text">Scroll</span>
        <ChevronDown className="hero__scroll-icon" />
      </motion.div>

      {/* ── 3D ring decoration ── */}
      <div className="hero__ring" />
      <div className="hero__ring hero__ring--2" />

      {/* ── scoped styles ── */}
      <style>{`
        /* ========== SECTION ========== */
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 40%, #1b2838 100%);
          color: white;
        }

        /* ========== BACKGROUND ========== */
        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        /* subtle dot grid — matches loading screen grid aesthetic */
        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ambient orbs — same palette as loading screen */
        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          will-change: transform;
        }
        .hero__orb--1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.12), transparent 70%);
          top: -15%; left: 30%;
          animation: hero-orb-drift 12s ease-in-out infinite alternate;
        }
        .hero__orb--2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.10), transparent 70%);
          bottom: -10%; right: -5%;
          animation: hero-orb-drift 15s ease-in-out infinite alternate-reverse;
        }
        .hero__orb--3 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(255, 107, 149, 0.08), transparent 70%);
          top: 60%; left: -5%;
          animation: hero-orb-drift 10s ease-in-out infinite alternate;
        }

        @keyframes hero-orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(25px, -15px) scale(1.1); }
        }

        /* perspective grid floor — same as loading screen */
        .hero__floor {
          position: absolute;
          bottom: 0; left: -50%;
          width: 200%; height: 40%;
          background:
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(55deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 70%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 70%);
        }

        /* ========== LAYOUT ========== */
        .hero__container {
          position: relative;
          z-index: 10;
          max-width: 80rem;
          width: 100%;
          margin: 0 auto;
          padding: 6rem 1.5rem 4rem;
        }

        .hero__layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .hero__container { padding: 0 3rem; }
          .hero__layout {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        /* ========== LANYARD CARD ========== */
        .hero__card-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero__card {
          position: relative;
          width: 280px; height: 360px;
          border-radius: 1.5rem;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.1);
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.5s ease;
        }
        .hero__card:hover {
          transform: scale(1.03) rotateY(4deg) rotateX(-2deg);
          box-shadow:
            0 0 50px rgba(0, 212, 255, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .hero__card-glow {
          position: absolute;
          inset: -2rem;
          background: radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.12), transparent 60%);
          pointer-events: none;
          transition: opacity 0.5s;
        }
        .hero__card:hover .hero__card-glow { opacity: 1.5; }

        .hero__card-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .hero__card { width: 320px; height: 420px; }
        }
        @media (min-width: 768px) {
          .hero__card { width: 400px; height: 500px; }
        }

        /* ========== TEXT COLUMN ========== */
        .hero__text-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero__text-col { text-align: left; }
        }

        /* badges */
        .hero__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .hero__badges { justify-content: flex-start; }
        }

        .hero__badge {
          padding: 0.35rem 0.75rem;
          font-size: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(0, 212, 255, 0.7);
          background: rgba(0, 212, 255, 0.06);
          border: 1px solid rgba(0, 212, 255, 0.12);
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }

        /* heading */
        .hero__heading {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .hero__h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.05;
          background: linear-gradient(to bottom, #ffffff, #a0a0a0);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero__h1--muted {
          background: linear-gradient(to bottom, #888888, #555555);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* description */
        .hero__desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.45);
          max-width: 28rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .hero__desc { margin: 0; font-size: 1.05rem; }
        }

        .hero__rotating-badge {
          display: inline-flex;
          padding: 0.3rem 0.65rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(0, 212, 255, 0.9);
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 0.5rem;
        }

        /* CTA buttons */
        .hero__actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 0.5rem;
          align-items: center;
        }
        @media (min-width: 640px) {
          .hero__actions { flex-direction: row; }
        }
        @media (min-width: 768px) {
          .hero__actions { justify-content: flex-start; }
        }

        .hero__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          border-radius: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
        }

        .hero__btn--primary {
          background: white;
          color: #0a0a1a;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.06);
        }
        .hero__btn--primary:hover {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.12);
        }

        .hero__btn--ghost {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero__btn--ghost:hover {
          background: rgba(255, 255, 255, 0.07);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* tech tags */
        .hero__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 0.25rem;
        }
        @media (min-width: 768px) {
          .hero__tags { justify-content: flex-start; }
        }

        .hero__tag {
          font-size: 0.6rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.2);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ========== SCROLL INDICATOR ========== */
        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          z-index: 10;
        }
        .hero__scroll-text {
          font-size: 0.6rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        .hero__scroll-icon {
          width: 1.1rem;
          height: 1.1rem;
          color: rgba(255, 255, 255, 0.2);
          animation: hero-bounce 2s ease-in-out infinite;
        }

        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        /* ========== 3D FLOATING GEOMETRICS ========== */
        .hero__geo {
          position: absolute;
          pointer-events: none;
          border: 1px solid rgba(0, 212, 255, 0.08);
          opacity: 0;
          animation: hero-geo-float 20s ease-in-out infinite, hero-geo-fadeIn 2s ease-out forwards;
        }
        .hero__geo--1 {
          width: 60px; height: 60px;
          top: 15%; left: 8%;
          border-radius: 12px;
          animation-delay: 0.5s;
          transform: rotate(45deg);
        }
        .hero__geo--2 {
          width: 40px; height: 40px;
          top: 25%; right: 12%;
          border-radius: 50%;
          border-color: rgba(123, 97, 255, 0.1);
          animation-delay: 1s;
          animation-duration: 15s;
        }
        .hero__geo--3 {
          width: 80px; height: 80px;
          bottom: 30%; left: 5%;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          border: none;
          background: rgba(0, 212, 255, 0.03);
          animation-delay: 1.5s;
          animation-duration: 25s;
        }
        .hero__geo--4 {
          width: 30px; height: 30px;
          top: 60%; right: 8%;
          border-radius: 6px;
          border-color: rgba(255, 107, 149, 0.08);
          animation-delay: 2s;
          animation-duration: 18s;
        }
        .hero__geo--5 {
          width: 50px; height: 50px;
          bottom: 20%; right: 20%;
          border-radius: 50%;
          border-color: rgba(0, 212, 255, 0.06);
          animation-delay: 0.8s;
          animation-duration: 22s;
        }

        @keyframes hero-geo-float {
          0%   { transform: rotate(0deg) translateY(0) translateX(0); }
          25%  { transform: rotate(90deg) translateY(-20px) translateX(10px); }
          50%  { transform: rotate(180deg) translateY(-10px) translateX(-15px); }
          75%  { transform: rotate(270deg) translateY(-25px) translateX(5px); }
          100% { transform: rotate(360deg) translateY(0) translateX(0); }
        }

        @keyframes hero-geo-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ========== 3D RING DECORATIONS ========== */
        .hero__ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          margin-top: -250px;
          margin-left: -250px;
          border-radius: 50%;
          border: 1px solid rgba(0, 212, 255, 0.04);
          pointer-events: none;
          z-index: 1;
          animation: hero-ring-rotate 30s linear infinite;
          opacity: 0;
          animation-delay: 1s;
        }
        .hero__ring--2 {
          width: 700px;
          height: 700px;
          margin-top: -350px;
          margin-left: -350px;
          border-color: rgba(123, 97, 255, 0.03);
          animation-duration: 40s;
          animation-direction: reverse;
          animation-delay: 1.5s;
        }

        @keyframes hero-ring-rotate {
          from { transform: rotateX(70deg) rotateZ(0deg); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          to   { transform: rotateX(70deg) rotateZ(360deg); opacity: 0; }
        }
      `}</style>
    </motion.section>
  )
}