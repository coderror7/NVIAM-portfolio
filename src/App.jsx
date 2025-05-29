import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServiceSection from "./components/ServiceSection"
import PortfolioSection from "./components/portfolioSection"
import ContactSection from "./components/ContactSection"
import Navigation from "./components/Navigation"
import LoadingSection from "./components/LoadingSection"
import ParticleBackground from "./components/ParticleBackground"
import ScrollProgress from "./components/ScrollProgress"
import FloatingElements from "./components/FloatingElements"
import "./App.css"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">{isLoading && <LoadingSection key="loading" />}</AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <FloatingElements />
          <ScrollProgress />
          <Navigation currentSection={currentSection} />

          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <PortfolioSection />
            <ContactSection />
          </motion.main>
        </>
      )}
    </div>
  )
}
