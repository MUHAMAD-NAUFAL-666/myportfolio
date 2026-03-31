"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import MagicRings from "./MagicRings"

interface Props {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  const pathsRef = useRef<SVGPathElement[]>([])
  const logoRef = useRef<HTMLHeadingElement | null>(null)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const contentWrapperRef = useRef<HTMLDivElement | null>(null)
  const ringsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    pathsRef.current = []

    const ctx = gsap.context(() => {
      const logo = logoRef.current
      const loader = loaderRef.current
      const wrapper = contentWrapperRef.current
      const rings = ringsRef.current

      if (!logo || !loader || !wrapper || !rings) return

      // =========================
      // 🔥 INITIAL STATE
      // =========================
      gsap.set(wrapper, {
        scale: 0.2,
        opacity: 0,
        rotationX: 60,
        rotationY: -40,
        z: -1200,
        transformPerspective: 2000,
      })

      gsap.set(logo, { z: 120 })

      pathsRef.current.forEach((path, i) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          z: i * 30,
        })
      })

      // =========================
      // 🌌 BACKGROUND ANIMATION (LIVING)
      // =========================
      gsap.to(rings, {
        scale: 1.2,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(rings, {
        rotation: 8,
        duration: 20,
        ease: "none",
        repeat: -1,
      })

      // =========================
      // 🖱️ MOUSE PARALLAX (🔥 UPGRADE)
      // =========================
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20

        gsap.to(wrapper, {
          rotationY: x,
          rotationX: -y,
          duration: 0.5,
          ease: "power2.out",
        })

        gsap.to(rings, {
          x: x * 2,
          y: y * 2,
          duration: 1,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      // =========================
      // 🎬 TIMELINE
      // =========================
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.delayedCall(0.5, onFinish)
        },
      })

      // 🚀 ZOOM IN
      tl.to(wrapper, {
        scale: 1,
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        duration: 2.2,
        ease: "expo.out",
      })

      // 🎥 CAMERA DRIFT
      tl.to(
        wrapper,
        {
          rotationY: 6,
          rotationX: -4,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        },
        "-=2"
      )

      // ✏️ SVG DRAW
      tl.to(
        pathsRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1.5"
      )

      // 🔥 LOGO REVEAL
      tl.fromTo(
        logo,
        {
          opacity: 0,
          y: 100,
          rotateX: -120,
          scale: 0.3,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(2)",
        },
        "-=1"
      )

      // 💓 FLOATING
      tl.to(wrapper, {
        y: -20,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      })

      tl.to(wrapper, {
        scale: 1.08,
        z: 150,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      })

      // ⚡ WARP SPEED EXIT (🔥 UPGRADE GILA)
      tl.to(
        [wrapper, rings],
        {
          scale: 0.2,
          z: -2000,
          opacity: 0,
          duration: 1,
          ease: "expo.in",
        },
        "+=0.3"
      )

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, loaderRef)

    return () => ctx.revert()
  }, [onFinish])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      style={{ perspective: "2000px" }}
    >
      {/* 🌌 FULLSCREEN MAGIC RINGS */}
      <div
        ref={ringsRef}
        className="absolute inset-0 w-full h-full magic-bg scale-125 md:scale-110 mix-blend-screen opacity-80"
      >
        <MagicRings />
      </div>

      {/* 🔥 OVERLAY CINEMATIC */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* CONTENT */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 flex flex-col items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* GLOW */}
        <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-white/10 rounded-full scale-90 animate-pulse" />

        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" />

        {/* SVG */}
        <svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          fill="none"
          className="drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M50 170 L50 30 L150 170 L150 30"
            stroke="url(#grad)"
            strokeWidth="1"
            opacity="0.3"
          />

          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M70 160 L70 60 L130 160 L130 40"
            stroke="url(#grad)"
            strokeWidth="2.5"
          />

          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M60 160 L60 40 L140 160 L140 40"
            stroke="url(#grad)"
            strokeWidth="4"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          />

          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>

        {/* TEXT */}
        <h1
          ref={logoRef}
          className="mt-6 text-white text-3xl md:text-4xl tracking-[0.4em] font-light"
          style={{
            textShadow: "0 0 30px rgba(0, 255, 255, 0.9)",
            transformStyle: "preserve-3d",
          }}
        >
          NAUFAL
        </h1>
      </div>
    </div>
  )
}