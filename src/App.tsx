import { useState } from "react"
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

function App() {
  const [loading, setLoading] = useState<boolean>(true)

  const handleLoadingFinish = () => {
    setLoading(false)
  }

  if (loading) {
    return <LoadingScreen onFinish={handleLoadingFinish} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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