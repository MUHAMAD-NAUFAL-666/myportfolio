import { useState, useCallback } from "react"
import "./App.css"

import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import HistoryPendidikan from "./components/journey"
import Projects from "./components/projects"
import TechStack from "./components/tech-stack"
import Contact from "./components/contact"
import CaseStudy from "./components/case-study"
import LoadingScreen from "./components/loading-screen"
import PersonalAccount from "./components/personal-account"
import SplashCursor from "./components/SplashCursor"
import TransitionOverlay from "./components/transition-overlay"

type Phase = "loading" | "transitioning" | "ready"

function App() {
  const [phase, setPhase] = useState<Phase>("loading")

  const handleLoadingFinish = useCallback(() => {
    setPhase("transitioning")
  }, [])

  const handleTransitionComplete = useCallback(() => {
    setPhase("ready")
  }, [])

  if (phase === "loading") {
    return <LoadingScreen onFinish={handleLoadingFinish} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Transition overlay — renders on top during transition, then unmounts */}
      {phase === "transitioning" && (
        <TransitionOverlay onComplete={handleTransitionComplete} />
      )}

      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <PersonalAccount />
      <TechStack />
      <Projects />
      <CaseStudy />
      <HistoryPendidikan />
      <Contact />
      <Footer />
    </div>
  )
}

export default App