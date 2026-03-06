"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Lanyard from "@/components/lanyard"
import RotatingText from "@/components/RotatingText"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import TextType from "./TextType"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { CVDocument } from "./CVDocument"


export default function Hero() {

   const handleDownload = async () => {
  const element = document.getElementById("cv-section")
  if (!element) {
    console.log("Element tidak ditemukan")
    return
  }

  const html2pdf = (await import("html2pdf.js")).default

  const opt = {
    margin: 0.5,
    filename: "Muhammad-Raihan-CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait"
    }
  }

  html2pdf().set(opt).from(element).save()
}


  return (
   <section
      id="cv-section"
  className="relative min-h-screen w-full overflow-hidden
  bg-gradient-to-b 
  from-white via-purple-50 to-white
  dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]
  text-foreground
  transition-colors duration-500"
    >

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-10">

        {/* Dark Mode Glow */}
        <div className="hidden dark:block absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/15 blur-[160px] rounded-full" />
        <div className="hidden dark:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full" />

        {/* Light Mode Glow */}
        <div className="dark:hidden absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-200/40 blur-[160px] rounded-full" />
        <div className="dark:hidden absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-200/30 blur-[160px] rounded-full" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

          {/* ================= LANYARD CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-1 md:order-none"
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -4 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                relative 
                w-[280px] h-[360px] 
                sm:w-[320px] sm:h-[420px]
                md:w-[420px] md:h-[520px]
                rounded-3xl 
                bg-card/60 
                backdrop-blur-xl 
                border border-border
                shadow-xl
              "
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-200 to-blue-400 pointer-events-none" />

              <div className="flex items-center justify-center h-full">
                <Lanyard position={[0, 0, 20]} gravity={[0, -35, 0]} />
              </div>
            </motion.div>
          </motion.div>

          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-2 md:order-none text-center md:text-left"
          >

            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full border border-border bg-muted text-muted-foreground text-xs tracking-[0.2em] uppercase">
              AI Engineer • Fullstack Developer
            </div>

            {/* Heading */}
            <div className="flex flex-col space-y-2">

              <TextType
                text="Building"
                as="h1"
                typingSpeed={70}
                pauseDuration={800}
                deletingSpeed={40}
                loop={false}
                showCursor={false}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
              />

              <TextType
                text="Intelligent"
                as="h1"
                typingSpeed={70}
                pauseDuration={800}
                deletingSpeed={40}
                loop={false}
                showCursor={false}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
              />

              <TextType
                text="Digital Systems"
                as="h1"
                typingSpeed={70}
                pauseDuration={1500}
                deletingSpeed={40}
                loop={false}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.6}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-muted-foreground"
              />

            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed mx-auto md:mx-0">
              I build scalable web systems using{" "}
              <RotatingText
                texts={["Laravel", "React", "Modern Architecture"]}
                mainClassName="px-3 py-2 bg-primary text-primary-foreground rounded-md font-semibold"
                rotationInterval={2500}
              />
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">

              <Button
                size="lg"
                className="px-8 py-6 shadow-lg bg-primary text-primary-foreground hover:opacity-90"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <PDFDownloadLink
                document={<CVDocument />}
                fileName="Muhammad-Naufal-CV.pdf"
              >
                {({ loading }) => (
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 border-border hover:bg-muted"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    {loading ? "Generating..." : "Download CV"}
                  </Button>
                )}
              </PDFDownloadLink>

            </div>

          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-muted-foreground w-6 h-6" />
      </motion.div>

    </section>
  )
}