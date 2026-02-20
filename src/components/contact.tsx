"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section
      id="contact"
      className="
      relative py-32 px-6 md:px-12 overflow-hidden
      bg-gradient-to-b
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
      transition-colors duration-500
    "
    >

      {/* Soft Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] 
        bg-purple-400/20 dark:bg-cyan-400/10 
        rounded-full blur-[200px] 
        left-1/2 -translate-x-1/2 top-0" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold tracking-tight">
            Let’s Work Together
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let’s build something impactful.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Open for freelance, collaboration, and AI-driven system development.
              </p>
            </div>

            <div className="flex gap-4">

              <a href="mailto:your@email.com"
                className="p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-purple-500 hover:text-white transition-all duration-300">
                <Mail />
              </a>

              <a href="https://linkedin.com"
                className="p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-purple-500 hover:text-white transition-all duration-300">
                <Linkedin />
              </a>

              <a href="https://github.com"
                className="p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-purple-500 hover:text-white transition-all duration-300">
                <Github />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              p-8 rounded-3xl
              bg-white/80 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20
              shadow-2xl
              space-y-6
            "
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/5 dark:bg-white/5
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500
                transition
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/5 dark:bg-white/5
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500
                transition
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/5 dark:bg-white/5
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500
                transition resize-none
              "
            />

            <button
              type="submit"
              className="
                w-full py-4 rounded-xl font-semibold
                bg-gradient-to-r from-purple-500 to-cyan-400
                text-white
                hover:scale-[1.02]
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              Send Message
              <Send size={18} />
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  )
}