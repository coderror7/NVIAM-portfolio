"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const filters = ["all", "web", "mobile"]

  const projects = [
    {
      id: 1,
      title: "The Chess Game",
      category: "mobile",
      description: "A sleek and competitive online chess game with multiplayer mode and AI opponent options.",
      image: "/images/chess.jpg", // Fixed path
      technologies: ["chess.js", "javascript", "tailwindCSS", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "3D Website",
      category: "web",
      description: "An immersive 3D website experience built with WebGL and GSAP for product showcases or portfolios.",
      image: "/images/3d.jpg", // Fixed path
      technologies: ["GSAP", "JavaScript", "three.js", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Live Location Tracker",
      category: "mobile",
      description: "Real-time GPS-based location tracking app for family safety, delivery, and fleet management.",
      image: "/images/live-tracker.jpg", // Fixed path (removed spaces)
      technologies: ["Google Map API", "Javascript", "tailwindCSS", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Memory Game",
  category: "web",
  description: "A fun and interactive memory card game that challenges your concentration and speed.",
      image: "/images/memory-game.jpg", // Fixed path (removed spaces)
      technologies: ["javascript", "AI Integration", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Music App",
      category: "mobile",
      description: "A modern music streaming platform with curated playlists, offline mode, and mood-based recommendations.",
      image: "/images/music.jpg", // Fixed path
      technologies: ["Music API", "tailwindCSS", "API", "javascript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Parallax Site",
      category: "web",
      description: "A visually appealing parallax scrolling website with smooth animations and layered depth effects.",
      image: "/images/paralax.jpg", // Fixed path
      technologies: ["GSAP", "Scroll Trigger", "javascript", "tailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="portfolio" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest projects and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              layout
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-700"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                  }}
                />

                {/* Commented out overlay buttons - uncomment to enable
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github size={20} />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                */}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  scale: hoveredProject === index ? [1, 1.02, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects button - uncomment to enable
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
        */}
      </div>
    </section>
  )
}
