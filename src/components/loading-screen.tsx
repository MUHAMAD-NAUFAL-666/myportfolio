"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Jeda sedikit sebelum menghilang
          setTimeout(() => onFinish(), 500)
          return 100
        }
        return prev + 1
      })
    }, 25) // Kecepatan loading

    return () => clearInterval(interval)
  }, [onFinish])

  // Variants untuk animasi warp (kecepatan tinggi saat selesai)
  const tunnelVariants = {
    initial: { scale: 1, opacity: 1 },
    exit: { 
      scale: 15, 
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        variants={tunnelVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      >
        
        {/* 🔥 WARP TUNNEL BACKGROUND (Grid Perspective) */}
        <div className="absolute inset-0 w-full h-full">
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, transparent 30%, black 100%),
                        linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 40px 40px, 40px 40px',
                    transform: 'perspective(400px) rotateX(60deg) translateZ(0px)',
                    transformOrigin: 'center center',
                    animation: 'gridMove 1s linear infinite', // CSS Animation for grid movement
                    opacity: 0.5
                }}
            />
        </div>

        {/* Speed Lines (Particle Effect) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[50px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            initial={{ y: -800, x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{ 
              y: 1200, 
              opacity: [0, 1, 0],
              transition: { 
                duration: Math.random() * 1 + 0.5, 
                repeat: Infinity, 
                delay: Math.random() * 1,
                ease: "linear"
              }
            }}
          />
        ))}

        {/* Central Content Container */}
        <div className="relative z-10 flex flex-col items-center">
            
            {/* Rotating Rings */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96">
                <motion.div 
                    className="absolute inset-0 rounded-full border border-cyan-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
                <motion.div 
                    className="absolute inset-4 rounded-full border border-purple-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />
                <motion.div 
                    className="absolute inset-8 rounded-full border border-dashed border-white/10"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                />
            </div>

            {/* Main Logo/Text */}
            <div className="flex flex-col items-center justify-center w-72 h-72 md:w-96 md:h-96 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
                
                {/* Logo Mark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-blue-600 mb-2"
                >
                    Naufal<span className="text-white">.</span>
                </motion.div>

                {/* Status Text */}
                <motion.p 
                    className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    System Initializing
                </motion.p>

                {/* Progress Ring */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                            className="text-white/10"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                            className="text-cyan-400 drop-shadow-[0_0_10px_cyan]"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="100, 100"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 100 - progress }}
                            transition={{ duration: 0.1 }}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <span className="text-white text-sm font-mono font-bold">{progress}%</span>
                </div>
            </div>
        </div>

        {/* CSS for Grid Animation */}
        <style jsx global>{`
          @keyframes gridMove {
            0% { background-position: 0 0, 0 0, 0 0; }
            100% { background-position: 0 0, 0 40px, 0 40px; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}