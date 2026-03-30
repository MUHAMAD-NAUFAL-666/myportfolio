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

  useEffect(() => {
    pathsRef.current = []

    const logo = logoRef.current
    const loader = loaderRef.current

    if (!logo || !loader) return

    const tl = gsap.timeline({
      onComplete: () => {
  // kasih delay biar staggered menu sempat muncul
  gsap.delayedCall(5, onFinish)
},
    })

    setTimeout(() => {
      pathsRef.current.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })
      })

      tl.to(pathsRef.current, {
        strokeDashoffset: 0,
        duration: 1.6,
        stagger: 0.2,
        ease: "power2.out",
      })

      tl.fromTo(
        logo,
        { opacity: 0, y: 40, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      )
    }, 50)
  }, [onFinish])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* BACKGROUND MAGIC RINGS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px]">
          <MagicRings />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        <svg width="260" height="260" viewBox="0 0 200 200" fill="none">
          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M50 170 L50 30 L150 170 L150 30"
            stroke="url(#grad)"
            strokeWidth="1"
            opacity="0.4"
          />

          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M70 160 L70 60 L130 160 L130 40"
            stroke="url(#grad)"
            strokeWidth="2"
          />

          <path
            ref={(el) => el && pathsRef.current.push(el)}
            d="M60 160 L60 40 L140 160 L140 40"
            stroke="url(#grad)"
            strokeWidth="3"
          />

          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#4facfe" />
            </linearGradient>
          </defs>
        </svg>

        <h1
          ref={logoRef}
          className="mt-4 text-white text-2xl tracking-widest"
        >
          NAUFAL
        </h1>
      </div>
    </div>
  )
}