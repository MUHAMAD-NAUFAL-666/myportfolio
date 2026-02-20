"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const educationData = [
  {
    id: "sd",
    image: "/assets/education/nadukar.png",
    title: "Sekolah Dasar",
    desc: "Belajar dasar membaca, menulis, dan berhitung 📚",
    year: "2010 - 2016"
  },
  {
    id: "smp",
    image: "/assets/education/smp.png",
    title: "SMP",
    desc: "Mulai mengenal teknologi dan organisasi ",
    year: "2016 - 2019"
  },
  {
    id: "Sma",
    image: "/assets/education/sma.png",
    title: "SMK RPL",
    desc: "Mempelajari pemrograman, sistem informasi",
    year: "2019 - 2022"
  },
  {
    id: "kuliah",
    image: "/assets/education/kuliah.png",
    title: "Kuliah Sistem Informasi",
    desc: "Mendalami Web Development & System Design 🚀",
    year: "2022 - Sekarang"
  }
]

export default function HistoryPendidikan() {
  const [angle, setAngle] = useState(0)
  const [active, setActive] = useState<any>(null)

  const radius = 300

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 0.3)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center
bg-gradient-to-br 
from-indigo-200 via-purple-200 to-pink-200
dark:from-[#0f172a] dark:via-[#111827] dark:to-[#1e1b4b]
transition-colors duration-500">

      {/* INFO PANEL */}
      {active && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-20 w-80 p-6 rounded-2xl z-20
bg-white/90 text-black
dark:bg-white/5 dark:text-white
backdrop-blur-xl
shadow-2xl
border border-white/20
transition-colors duration-500"
        >
          <h3 className="text-2xl font-bold">{active.title}</h3>
          <p className="text-sm opacity-60 mb-2">{active.year}</p>
          <p>{active.desc}</p>
        </motion.div>
      )}

      {/* CENTER */}
      <div className="absolute w-52 h-52 rounded-full flex flex-col items-center justify-center z-10
bg-white text-black
dark:bg-white/10 dark:text-white
border-4 border-purple-300 dark:border-cyan-400
shadow-2xl backdrop-blur-xl
transition-colors duration-500">
        <span className="text-5xl">🎓</span>
        <span className="mt-2 font-semibold">My Journey</span>
      </div>

      <div className="relative w-[800px] h-[800px]">

        {/* SVG PATH */}
        <svg className="absolute w-full h-full">
          <circle
  cx="400"
  cy="400"
  r={radius}
  stroke="rgba(168,85,247,0.4)"
  className="dark:stroke-cyan-400"
  strokeWidth="3"
  fill="none"
  strokeDasharray="10 10"
/>

        </svg>

        {/* ✈️ PESAWAT (PATH FOLLOWING PERFECT) */}
        <motion.div
          className="absolute text-3xl z-30"
          style={{
            offsetPath: `path("M400 400 m -${radius}, 0 a ${radius},${radius} 0 1,0 ${radius *
              2},0 a ${radius},${radius} 0 1,0 -${radius * 2},0")`,
            offsetRotate: "auto"
          }}
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        >
          ✈️
        </motion.div>

        {/* EDUCATION ITEMS */}
        {educationData.map((item, index) => {
          const itemAngle = angle + (360 / educationData.length) * index
          const rad = (itemAngle * Math.PI) / 180

          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <motion.img
              key={item.id}
              src={item.image}
              className="absolute w-28 h-28 object-cover rounded-full shadow-xl cursor-pointer border-4 border-white"
              style={{
                left: `calc(50% + ${x}px - 56px)`,
                top: `calc(50% + ${y}px - 56px)`
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
