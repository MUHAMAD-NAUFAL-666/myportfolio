"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState<"enter" | "exit">("enter")

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep("exit")
    }, 1200)

    const timer2 = setTimeout(() => {
      onFinish()
    }, 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onFinish])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[9999] overflow-hidden"
      >
        {/* Background Base */}
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <h1 className="text-5xl font-semibold text-black">
            Naufal
          </h1>
        </div>

        {/* Sweeping Panel */}
        <motion.div
          initial={{ y: "100%" }}
          animate={
            step === "enter"
              ? { y: "0%" }     // naik menutup
              : { y: "-100%" }  // lanjut naik membuka
          }
          transition={{
            duration: 0.9,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="absolute inset-0 bg-[#00B9FF]"
        />
      </motion.div>
    </AnimatePresence>
  )
}