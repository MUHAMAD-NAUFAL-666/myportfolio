"use client"

import Stack from "@/components/Stack"
import { useMemo } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Rental Management System",
    desc: "Web-based phone & laptop rental system with role-based authentication, inventory tracking, reporting, and admin dashboard built using Laravel.",
    image: "/assets/lanyard/rentalms.png",
  },
  {
    id: 2,
    title: "Printing Business Admin Dashboard",
    desc: "Integrated printing management system with WhatsApp automation, order tracking, and owner approval workflow for discount validation before payment processing.",
    image: "/assets/lanyard/percetakan.png",
  },
  {
    id: 3,
    title: "BPN Loan Administration System",
    desc: "Internal loan management system developed for BPN (National Land Agency Karawang) to manage requests, approvals, and administrative documentation.",
    image: "/assets/lanyard/bpn.png",
  },
  {
    id: 4,
    title: "QR Card Attendance System",
    desc: "Student attendance system for SDIT using QR card scanning for automated check-in, attendance recording, and reporting dashboard.",
    image: "/assets/lanyard/sdit.png",
  },
]

export default function Projects() {

  const leftProjects = projects.slice(0, 2)
  const rightProjects = projects.slice(2, 4)

  const createStackCards = (data: typeof projects) =>
    data.map((project) => (
      <div key={project.id} className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">

        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-8 left-8 text-white z-10">
          <span className="text-xs tracking-widest opacity-60">
            PROJECT 0{project.id}
          </span>

          <h3 className="text-2xl font-bold mt-2">
            {project.title}
          </h3>

          <p className="text-sm opacity-80 mt-3 max-w-xs leading-relaxed">
            {project.desc}
          </p>
        </div>
      </div>
    ))

  const leftCards = useMemo(() => createStackCards(leftProjects), [])
  const rightCards = useMemo(() => createStackCards(rightProjects), [])

  return (
    <section
      className="relative min-h-screen py-36 px-6 md:px-16 overflow-hidden
      bg-gradient-to-b 
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
      transition-colors duration-500"
    >

      {/* 🔥 3D Glow Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2
      w-[700px] h-[700px]
      bg-cyan-400/30 dark:bg-purple-500/20
      rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight
          bg-gradient-to-r from-purple-600 to-cyan-500
          bg-clip-text text-transparent">
            Selected Projects
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore interactive AI systems and scalable web applications I've built.
          </p>
        </motion.div>

        {/* Glass Container */}
        <div className="relative backdrop-blur-xl
        bg-white/60 dark:bg-white/5
        border border-white/30 dark:border-white/10
        rounded-3xl shadow-2xl
        p-10 md:p-16 transition-colors duration-500">

          {/* Dual Stack Layout */}
          <div className="grid md:grid-cols-2 gap-20 place-items-center">

            <div className="w-[320px] h-[420px] md:w-[380px] md:h-[480px]">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={leftCards}
              />
            </div>

            <div className="w-[320px] h-[420px] md:w-[380px] md:h-[480px]">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={rightCards}
              />
            </div>

          </div>

        </div>

        {/* Outro */}
        <div className="mt-32 text-center">
          <h3 className="text-6xl font-bold opacity-10 tracking-widest">
            MORE COMING SOON
          </h3>
        </div>

      </div>
    </section>
  )
}