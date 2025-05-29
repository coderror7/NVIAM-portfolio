"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Monitor, Smartphone, Globe, Palette, Code, Zap } from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and modern frameworks.",
      features: ["React & Next.js", "JavaScript", "Responsive Design", "Performance Optimization"],
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile Development",
    //   description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    //   features: ["React Native", "iOS & Android", "Cross-Platform", "App Store Optimization"],
    // },
    {
      icon: Globe,
      title: "3D Web Experiences",
      description: "Immersive 3D websites and interactive experiences that captivate and engage users.",
      features: ["Three.js", "WebGL", "3D Animations", "Interactive Models"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and brand identity.",
      features: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications reliably.",
      features: ["Node.js", "Database Design", "API Development", "Cloud Integration"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with advanced optimization techniques.",
      features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies", "Bundle Optimization"],
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to bring your vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 h-full transition-all duration-300 group-hover:border-purple-500/50">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    height: hoveredCard === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: hoveredCard === index ? 1 : 0,
                          x: hoveredCard === index ? 0 : -20,
                        }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="text-sm text-purple-400 flex items-center"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.button
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: hoveredCard === index ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
