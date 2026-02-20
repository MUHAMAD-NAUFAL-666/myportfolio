"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="py-24 px-6 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rental Management System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Web-based system for managing phone & laptop rentals
            with role-based authentication and admin dashboard.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - TEXT */}
          <div className="space-y-8">

            {/* Problem */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Problem</h3>
              <p className="text-muted-foreground">
                Manual rental tracking caused data inconsistencies
                and inefficient reporting.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Solution</h3>
              <p className="text-muted-foreground">
                Developed a Laravel-based system with role access,
                transaction tracking, and real-time reporting dashboard.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "MySQL", "Tailwind", "REST API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:opacity-90 transition"
              >
                <Github size={16} />
                View Code
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-muted transition"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl border"
          >
            <img
              src="/assets/lanyard/rentalms.png"
              alt="Project Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}