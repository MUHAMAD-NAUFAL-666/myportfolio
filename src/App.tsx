import { useState } from "react"
import './App.css'

import About from './components/about'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import HistoryPendidikan from './components/journey'
import Projects from './components/projects'
import SplashCursor from './components/SplashCursor'
import TechStack from './components/tech-stack'
import Contact from './components/contact'
import CaseStudy from './components/case-study'
import LoadingScreen from './components/loading-screen'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <div className="min-h-screen bg-background text-foreground">
          <SplashCursor />
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <CaseStudy />
          <HistoryPendidikan />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App