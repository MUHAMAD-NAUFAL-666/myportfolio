"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface Props {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const cubeRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const scene = sceneRef.current
    const cube = cubeRef.current
    const logo = logoRef.current
    const subtitle = subtitleRef.current
    const progress = progressRef.current
    const progressBar = progressBarRef.current

    if (!container || !scene || !cube || !logo || !subtitle || !progress || !progressBar) return

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(scene, { scale: 0.3, opacity: 0, rotateX: 40, rotateY: -30 })
      gsap.set(logo, { opacity: 0, y: 40, scale: 0.8 })
      gsap.set(subtitle, { opacity: 0, y: 20 })
      gsap.set(progress, { opacity: 0, scaleX: 0.5 })

      // Mouse parallax
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16
        const y = (e.clientY / window.innerHeight - 0.5) * 16
        gsap.to(scene, {
          rotateY: x,
          rotateX: -y,
          duration: 0.8,
          ease: "power2.out",
        })
      }
      window.addEventListener("mousemove", handleMouseMove)

      // Main timeline
      const tl = gsap.timeline({
        onComplete: () => gsap.delayedCall(0.3, onFinish),
      })

      // Scene entrance
      tl.to(scene, {
        scale: 1,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 1.6,
        ease: "expo.out",
      })

      // Logo reveal
      tl.to(logo, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(2)",
      }, "-=0.8")

      // Subtitle
      tl.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4")

      // Progress bar
      tl.to(progress, {
        opacity: 1,
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.3")

      tl.to(progressBar, {
        width: "100%",
        duration: 2,
        ease: "power1.inOut",
      })

      // Floating idle
      tl.to(scene, {
        y: -12,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      })

      // Exit
      tl.to(container, {
        scale: 1.1,
        opacity: 0,
        duration: 0.8,
        ease: "expo.in",
      }, "+=0.1")

      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, containerRef)

    return () => ctx.revert()
  }, [onFinish])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background */}
      <div className="ls-bg" />

      {/* Ambient orbs */}
      <div className="ls-orb ls-orb--1" />
      <div className="ls-orb ls-orb--2" />
      <div className="ls-orb ls-orb--3" />

      {/* Grid floor */}
      <div className="ls-grid" />

      {/* Main scene */}
      <div
        ref={sceneRef}
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Cube */}
        <div className="ls-cube-wrapper" style={{ transformStyle: "preserve-3d" }}>
          {/* Orbital ring */}
          <div className="ls-orbit" />
          <div className="ls-orbit ls-orbit--2" />

          <div
            ref={cubeRef}
            className="ls-cube"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="ls-cube__face ls-cube__face--front">N</div>
            <div className="ls-cube__face ls-cube__face--back">N</div>
            <div className="ls-cube__face ls-cube__face--left" />
            <div className="ls-cube__face ls-cube__face--right" />
            <div className="ls-cube__face ls-cube__face--top" />
            <div className="ls-cube__face ls-cube__face--bottom" />
          </div>

          {/* Floating particles */}
          <div className="ls-particle ls-particle--1" />
          <div className="ls-particle ls-particle--2" />
          <div className="ls-particle ls-particle--3" />
          <div className="ls-particle ls-particle--4" />
          <div className="ls-particle ls-particle--5" />
          <div className="ls-particle ls-particle--6" />
        </div>

        {/* Logo text */}
        <h1
          ref={logoRef}
          className="ls-logo"
          style={{ transformStyle: "preserve-3d" }}
        >
          NAUFAL
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="ls-subtitle">
          Creative Developer
        </p>

        {/* Progress bar */}
        <div ref={progressRef} className="ls-progress">
          <div ref={progressBarRef} className="ls-progress__bar" />
        </div>
      </div>

      <style>{`
        /* ========== BACKGROUND ========== */
        .ls-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 40%, #1b2838 100%);
        }

        /* ========== AMBIENT ORBS ========== */
        .ls-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          pointer-events: none;
        }
        .ls-orb--1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #00d4ff33, transparent 70%);
          top: -10%;
          left: -5%;
          animation: ls-float-orb 8s ease-in-out infinite alternate;
        }
        .ls-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #7b61ff33, transparent 70%);
          bottom: -5%;
          right: -5%;
          animation: ls-float-orb 10s ease-in-out infinite alternate-reverse;
        }
        .ls-orb--3 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ff6b9533, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ls-float-orb 6s ease-in-out infinite alternate;
        }

        @keyframes ls-float-orb {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(30px, -20px) scale(1.15); }
        }

        /* ========== GRID FLOOR ========== */
        .ls-grid {
          position: absolute;
          bottom: 0;
          left: -50%;
          width: 200%;
          height: 50%;
          background:
            linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(55deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 80%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 80%);
        }

        /* ========== 3D CUBE ========== */
        .ls-cube-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          perspective: 800px;
        }

        .ls-cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: ls-cube-spin 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes ls-cube-spin {
          0%   { transform: rotateX(-20deg) rotateY(0deg); }
          25%  { transform: rotateX(10deg) rotateY(90deg); }
          50%  { transform: rotateX(-15deg) rotateY(180deg); }
          75%  { transform: rotateX(5deg) rotateY(270deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }

        .ls-cube__face {
          position: absolute;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: 0;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 212, 255, 0.2);
          backface-visibility: visible;
        }

        .ls-cube__face--front {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(123, 97, 255, 0.1));
          transform: translateZ(60px);
          box-shadow: inset 0 0 40px rgba(0, 212, 255, 0.08);
        }
        .ls-cube__face--back {
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.15), rgba(0, 212, 255, 0.1));
          transform: rotateY(180deg) translateZ(60px);
          box-shadow: inset 0 0 40px rgba(123, 97, 255, 0.08);
        }
        .ls-cube__face--left {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(123, 97, 255, 0.06));
          transform: rotateY(-90deg) translateZ(60px);
        }
        .ls-cube__face--right {
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.08), rgba(255, 107, 149, 0.06));
          transform: rotateY(90deg) translateZ(60px);
        }
        .ls-cube__face--top {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.12), rgba(255, 255, 255, 0.05));
          transform: rotateX(90deg) translateZ(60px);
        }
        .ls-cube__face--bottom {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 212, 255, 0.05));
          transform: rotateX(-90deg) translateZ(60px);
        }

        /* ========== ORBITAL RINGS ========== */
        .ls-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 180px;
          margin-top: -90px;
          margin-left: -90px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 50%;
          animation: ls-orbit-spin 6s linear infinite;
          pointer-events: none;
        }
        .ls-orbit::after {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 12px #00d4ff, 0 0 24px #00d4ff66;
        }
        .ls-orbit--2 {
          width: 220px;
          height: 220px;
          margin-top: -110px;
          margin-left: -110px;
          border-color: rgba(123, 97, 255, 0.15);
          animation-duration: 10s;
          animation-direction: reverse;
        }
        .ls-orbit--2::after {
          background: #7b61ff;
          box-shadow: 0 0 12px #7b61ff, 0 0 24px #7b61ff66;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          top: -3px;
        }

        @keyframes ls-orbit-spin {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }

        /* ========== PARTICLES ========== */
        .ls-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.6;
        }
        .ls-particle--1 {
          width: 4px; height: 4px;
          background: #00d4ff;
          box-shadow: 0 0 8px #00d4ff;
          top: 10%; left: 20%;
          animation: ls-particle-float 4s ease-in-out infinite alternate;
        }
        .ls-particle--2 {
          width: 3px; height: 3px;
          background: #7b61ff;
          box-shadow: 0 0 8px #7b61ff;
          top: 80%; left: 75%;
          animation: ls-particle-float 5s ease-in-out infinite alternate-reverse;
        }
        .ls-particle--3 {
          width: 5px; height: 5px;
          background: #ff6b95;
          box-shadow: 0 0 10px #ff6b95;
          top: 15%; right: 10%;
          animation: ls-particle-float 3.5s ease-in-out infinite alternate;
          animation-delay: 0.5s;
        }
        .ls-particle--4 {
          width: 3px; height: 3px;
          background: #00d4ff;
          box-shadow: 0 0 6px #00d4ff;
          bottom: 20%; left: 15%;
          animation: ls-particle-float 4.5s ease-in-out infinite alternate-reverse;
          animation-delay: 1s;
        }
        .ls-particle--5 {
          width: 4px; height: 4px;
          background: #7b61ff;
          box-shadow: 0 0 8px #7b61ff;
          top: 50%; right: 5%;
          animation: ls-particle-float 5.5s ease-in-out infinite alternate;
          animation-delay: 0.8s;
        }
        .ls-particle--6 {
          width: 2px; height: 2px;
          background: #ffffff;
          box-shadow: 0 0 6px #ffffff88;
          bottom: 30%; right: 30%;
          animation: ls-particle-float 3s ease-in-out infinite alternate-reverse;
          animation-delay: 1.5s;
        }

        @keyframes ls-particle-float {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-20px) translateX(10px); }
        }

        /* ========== LOGO ========== */
        .ls-logo {
          font-size: 2.2rem;
          font-weight: 200;
          letter-spacing: 0.5em;
          color: white;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.2);
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ========== SUBTITLE ========== */
        .ls-subtitle {
          font-size: 0.85rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ========== PROGRESS BAR ========== */
        .ls-progress {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 4px;
        }
        .ls-progress__bar {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, #00d4ff, #7b61ff);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 640px) {
          .ls-cube-wrapper {
            width: 90px;
            height: 90px;
          }
          .ls-cube__face {
            width: 90px;
            height: 90px;
            font-size: 36px;
          }
          .ls-cube__face--front  { transform: translateZ(45px); }
          .ls-cube__face--back   { transform: rotateY(180deg) translateZ(45px); }
          .ls-cube__face--left   { transform: rotateY(-90deg) translateZ(45px); }
          .ls-cube__face--right  { transform: rotateY(90deg) translateZ(45px); }
          .ls-cube__face--top    { transform: rotateX(90deg) translateZ(45px); }
          .ls-cube__face--bottom { transform: rotateX(-90deg) translateZ(45px); }

          .ls-orbit {
            width: 140px;
            height: 140px;
            margin-top: -70px;
            margin-left: -70px;
          }
          .ls-orbit--2 {
            width: 170px;
            height: 170px;
            margin-top: -85px;
            margin-left: -85px;
          }
          .ls-logo {
            font-size: 1.6rem;
            letter-spacing: 0.4em;
          }
          .ls-subtitle {
            font-size: 0.7rem;
          }
          .ls-progress {
            width: 150px;
          }
        }
      `}</style>
    </div>
  )
}