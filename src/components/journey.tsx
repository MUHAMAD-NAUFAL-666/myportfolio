"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const educationData = [
  { id: "sd", image: "/assets/education/nadukar.png", title: "Sekolah Dasar", desc: "Belajar dasar membaca, menulis, dan berhitung 📚", year: "2010 - 2016" },
  { id: "smp", image: "/assets/education/smp.png", title: "SMP", desc: "Mulai mengenal teknologi dan organisasi", year: "2016 - 2019" },
  { id: "Sma", image: "/assets/education/sma.png", title: "SMK RPL", desc: "Mempelajari pemrograman, sistem informasi", year: "2019 - 2022" },
  { id: "kuliah", image: "/assets/education/kuliah.png", title: "Kuliah Sistem Informasi", desc: "Mendalami Web Development & System Design 🚀", year: "2022 - Sekarang" }
]

export default function HistoryPendidikan() {
  const [angle, setAngle] = useState(0)
  const [active, setActive] = useState<any>(null)
  const [radius, setRadius] = useState(300)

  // Update angle for rotation
  useEffect(() => {
    const interval = setInterval(() => setAngle(prev => prev + 0.3), 16)
    return () => clearInterval(interval)
  }, [])

  // Responsive radius based on screen width
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) setRadius(120) // mobile
      else if (w < 1024) setRadius(200) // tablet
      else setRadius(300) // desktop
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center
      bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200
      dark:from-[#0f172a] dark:via-[#111827] dark:to-[#1e1b4b]
      transition-colors duration-500 overflow-hidden">

      {/* INFO PANEL */}
      {active && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-4 sm:left-8 md:left-20 w-64 sm:w-72 md:w-80 p-4 sm:p-6 rounded-2xl z-20
          bg-white/90 text-black dark:bg-white/5 dark:text-white
          backdrop-blur-xl shadow-2xl border border-white/20 transition-colors duration-500"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{active.title}</h3>
          <p className="text-xs sm:text-sm opacity-60 mb-2">{active.year}</p>
          <p className="text-sm sm:text-base">{active.desc}</p>
        </motion.div>
      )}

      {/* CENTER */}
      <div className="absolute flex flex-col items-center justify-center z-10
        bg-white text-black dark:bg-white/10 dark:text-white
        border-4 border-purple-300 dark:border-cyan-400
        shadow-2xl backdrop-blur-xl
        transition-colors duration-500
        w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full">
        <span className="text-3xl sm:text-4xl md:text-5xl">🎓</span>
        <span className="mt-2 font-semibold text-sm sm:text-base md:text-lg">My Journey</span>
      </div>

      {/* ROTATING ITEMS */}
      <div className={`relative w-[${radius * 2}px] h-[${radius * 2}px] sm:w-[${radius * 2}px] sm:h-[${radius * 2}px]`}>
        <svg className="absolute w-full h-full">
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            stroke="rgba(168,85,247,0.4)"
            className="dark:stroke-cyan-400"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 10"
          />
        </svg>

        <motion.div
          className="absolute text-xl sm:text-2xl md:text-3xl z-30"
          style={{
            offsetPath: `path("M${radius} ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${radius*2},0 a ${radius},${radius} 0 1,0 -${radius*2},0")`,
            offsetRotate: "auto"
          }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          ✈️
        </motion.div>

        {educationData.map((item, index) => {
          const itemAngle = angle + (360 / educationData.length) * index
          const rad = (itemAngle * Math.PI) / 180
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <motion.img
              key={item.id}
              src={item.image}
              className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full shadow-xl cursor-pointer border-4 border-white"
              style={{
                left: `calc(50% + ${x}px - ${radius/5}px)`,
                top: `calc(50% + ${y}px - ${radius/5}px)`
              }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
            />
          )
        })}
      </div>
    </section>
  )
}