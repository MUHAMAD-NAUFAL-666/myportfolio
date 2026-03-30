"use client"

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion"
import Folder from "@/components/Folder"
import { useRef, ReactNode } from "react"

const projects = [
  {
    id: 1,
    title: "Rental Management System",
    desc: "Web-based rental system with role-based auth.",
    image: "/assets/lanyard/rentalms.png",
  },
  {
    id: 2,
    title: "Printing Dashboard",
    desc: "WhatsApp automation & order tracking.",
    image: "/assets/lanyard/percetakan.png",
  },
  {
    id: 3,
    title: "BPN Loan System",
    desc: "Loan management for BPN Karawang.",
    image: "/assets/lanyard/bpn.png",
  },
  {
    id: 4,
    title: "QR Attendance",
    desc: "QR-based student attendance system.",
    image: "/assets/lanyard/sdit.png",
  },
]

// Komponen pembungkus untuk efek Parallax Global
const ParallaxContainer = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Konfigurasi spring untuk gerakan yang lembut (lembut seperti jeli)
  const springConfig = { damping: 20, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Normalisasi nilai -0.5 sampai 0.5
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
      }}
      className="relative z-10 w-full max-w-6xl mx-auto"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Komponen Kartu dengan Efek Shine (Cahaya Sapu)
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Background Kartu (Glass Effect) */}
      <div className="relative p-6 rounded-2xl border border-white/20 dark:border-white/10 
      bg-white/40 dark:bg-black/40 backdrop-blur-xl
      transition-all duration-500 group-hover:border-purple-400/50 group-hover:bg-white/60 dark:group-hover:bg-black/60
      shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full flex flex-col items-center"
      >
        
        {/* Efek Shine (Sapuan Cahaya) saat Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
          -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        </div>

        {/* Konten Folder */}
        <div className="relative mt-2 mb-6" style={{ transform: "translateZ(30px)" }}>
          {/* Glow di belakang folder */}
          <div className="absolute -inset-2 bg-purple-600/0 group-hover:bg-purple-600/30 blur-xl rounded-full transition-all duration-500" />
          
          <Folder
            size={2}
            color="#7C3AED"
            items={[
              <img
                key={project.id}
                src={project.image}
                className="w-full h-full object-cover rounded-md"
                alt={project.title}
              />,
              <div key="preview" className="flex items-center justify-center text-xs font-bold text-gray-700">Preview</div>,
              <div key="open" className="flex items-center justify-center text-xs text-gray-500">Click</div>,
            ]}
          />
        </div>

        {/* Teks */}
        <div className="text-center px-2" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-8 overflow-hidden
    bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* 1. Animated Gradient Background (Mesh) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Selected Works
          </h2>
          <div className="mt-3 w-16 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Parallax Container & Grid */}
        <ParallaxContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </ParallaxContainer>

        {/* CTA Button */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-8 py-3 rounded-full font-semibold text-white 
          bg-gradient-to-r from-purple-600 to-cyan-500 
          hover:shadow-lg hover:shadow-purple-500/25 
          transition-all duration-300 hover:scale-105 active:scale-95">
            View All Projects
          </button>
        </motion.div>

      </div>
      
      {/* Tambahkan style untuk animasi blob */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}