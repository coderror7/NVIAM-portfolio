"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import { Suspense } from "react"
import { ChevronDown } from "lucide-react"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.5} speed={2} roughness={0} />
    </Sphere>
  )
}

export default function HeroSection() {
  // Simple and reliable scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Use a small delay to ensure DOM is ready
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }, 100)
    } else {
      console.warn(`Section with id "${sectionId}" not found`)
    }
  }

  // Enhanced scroll to portfolio section
  const scrollToPortfolio = () => {
    console.log("Attempting to scroll to portfolio...")

    // Method 1: Try direct getElementById
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      console.log("Found portfolio section, scrolling...")
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      return
    }

    // Method 2: Try querySelector with different selectors
    const portfolioSelectors = ["#portfolio", '[id="portfolio"]', 'section[id="portfolio"]', ".portfolio-section"]

    for (const selector of portfolioSelectors) {
      try {
        const element = document.querySelector(selector)
        if (element) {
          console.log(`Found portfolio section with selector: ${selector}`)
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
          return
        }
      } catch (e) {
        console.log(`Selector ${selector} failed:`, e)
      }
    }

    // Method 3: Try finding by text content
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    for (const heading of headings) {
      if (heading.textContent.includes("Portfolio") || heading.textContent.includes("Our Work")) {
        console.log("Found portfolio section by heading text")
        const section = heading.closest("section") || heading.parentElement
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
          return
        }
      }
    }

    // Method 4: Fallback - scroll to approximate position
    console.log("Portfolio section not found, scrolling to approximate position")
    window.scrollTo({
      top: window.innerHeight * 1.5,
      behavior: "smooth",
    })
  }

  // Enhanced scroll to contact section with multiple fallbacks
  const scrollToContact = () => {
    console.log("Attempting to scroll to contact...")

    // Method 1: Try direct getElementById
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      console.log("Found contact section, scrolling...")
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      return
    }

    // Method 2: Try querySelector with different selectors
    const contactSelectors = [
      "#contact",
      '[id="contact"]',
      'section[id="contact"]',
      ".contact-section",
      'section:has(h2:contains("Get In Touch"))',
    ]

    for (const selector of contactSelectors) {
      try {
        const element = document.querySelector(selector)
        if (element) {
          console.log(`Found contact section with selector: ${selector}`)
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
          return
        }
      } catch (e) {
        console.log(`Selector ${selector} failed:`, e)
      }
    }

    // Method 3: Try finding by text content
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    for (const heading of headings) {
      if (heading.textContent.includes("Get In Touch") || heading.textContent.includes("Contact")) {
        console.log("Found contact section by heading text")
        const section = heading.closest("section") || heading.parentElement
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
          return
        }
      }
    }

    // Method 4: Fallback - scroll to bottom of page
    console.log("Contact section not found, scrolling to bottom")
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: "smooth",
    })
  }

  // Scroll to next section (services/about)
  const scrollToNext = () => {
    // Try to find services section first, then about
    const servicesSection = document.getElementById("services")
    const aboutSection = document.getElementById("about")

    if (servicesSection) {
      scrollToSection("services")
    } else if (aboutSection) {
      scrollToSection("about")
    } else {
      // Fallback: scroll one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            NVIAM
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Network Of Visual Interaction And Mechanism. Where Innovation Meets Imagination.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPortfolio}
          >
            Explore Our Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
