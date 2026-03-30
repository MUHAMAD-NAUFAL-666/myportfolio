"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  Code,
  Rocket,
  Sparkles,
} from "lucide-react"

const educationData = [
  {
    title: "Sekolah Dasar",
    desc: "Membangun fondasi dasar membaca, menulis, dan berhitung.",
    year: "2010 - 2016",
    image: "/assets/education/nadukar.png",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "SMP",
    desc: "Mulai mengenal teknologi dan organisasi.",
    year: "2016 - 2019",
    image: "/assets/education/smp.png",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "SMA",
    desc: "Mendalami ilmu agama, kedisiplinan, serta membangun karakter dan nilai kehidupan.",
    year: "2019 - 2022",
    image: "/assets/education/sma.png",
    icon: Code,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "S1 Sistem Informasi",
    desc: "Fokus pada Web Development & System Design.",
    year: "2022 - Sekarang",
    image: "/assets/education/kuliah.png",
    icon: Rocket,
    color: "from-orange-500 to-rose-500",
  },
]

export default function MyJourney() {
  const [active, setActive] = useState(3)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white py-24">

      {/* ===== SOFT LIGHT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-violet-200 blur-[120px] rounded-full opacity-40" />
        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-cyan-200 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT STEPPER ===== */}
          <div className="space-y-8 relative">

            {/* line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

            {educationData.map((item, i) => {
              const Icon = item.icon
              const isActive = i === active

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  {/* DOT */}
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-300 shadow-sm
                      ${
                        isActive
                          ? `bg-gradient-to-r ${item.color} text-white scale-110 shadow-md`
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-xs text-gray-400">{item.year}</p>
                    <h3
                      className={`text-lg font-semibold transition ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-500 group-hover:text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ===== RIGHT PREVIEW CARD ===== */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative h-56">
                  <img
                    src={educationData[active].image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs text-gray-700 shadow">
                    <CalendarDays className="w-4 h-4" />
                    {educationData[active].year}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {educationData[active].title}
                  </h3>
                  <p className="text-gray-600">
                    {educationData[active].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 border border-gray-200 text-gray-700 shadow-sm">
            <GraduationCap className="w-5 h-5 text-violet-500" />
            Continuous Learning & Growth
          </div>
        </div>
      </div>
    </section>
  )
}