import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface Props {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {

  const pathsRef = useRef<SVGPathElement[]>([])
  const logoRef = useRef<HTMLHeadingElement | null>(null)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const paths = pathsRef.current
    const logo = logoRef.current
    const loader = loaderRef.current

    if (!paths || !logo || !loader) return

    const tl = gsap.timeline({
      onComplete: () => {

        gsap.to(loader,{
          opacity:0,
          duration:1,
          ease:"power3.out",
          onComplete: onFinish
        })

      }
    })

    paths.forEach((path) => {

      const length = path.getTotalLength()

      gsap.set(path,{
        strokeDasharray:length,
        strokeDashoffset:length
      })

    })

    // SVG draw animation
    tl.to(paths,{
      strokeDashoffset:0,
      duration:1.6,
      stagger:0.2,
      ease:"power2.out"
    })

    // logo text reveal
    tl.fromTo(
      logo,
      {
        opacity:0,
        y:40,
        rotationX:90
      },
      {
        opacity:1,
        y:0,
        rotationX:0,
        duration:1.2,
        ease:"power3.out"
      },
      "-=0.6"
    )

  },[onFinish])

  return (

    <div ref={loaderRef} className="loader">

      <svg
        width="260"
        height="260"
        viewBox="0 0 200 200"
        fill="none"
      >

        {/* Outer frame */}
        <path
          ref={el => el && pathsRef.current.push(el)}
          d="M50 170 L50 30 L150 170 L150 30"
          stroke="url(#grad)"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* middle line */}
        <path
          ref={el => el && pathsRef.current.push(el)}
          d="M70 160 L70 60 L130 160 L130 40"
          stroke="url(#grad)"
          strokeWidth="2"
        />

        {/* main logo */}
        <path
          ref={el => el && pathsRef.current.push(el)}
          d="M60 160 L60 40 L140 160 L140 40"
          stroke="url(#grad)"
          strokeWidth="3"
        />

        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#00ffff"/>
            <stop offset="100%" stopColor="#4facfe"/>
          </linearGradient>
        </defs>

      </svg>

      <h1 ref={logoRef} className="logoText">
        NAUFAL
      </h1>

    </div>

  )
}