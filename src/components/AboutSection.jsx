"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "35+", label: "Happy Clients", icon: Users },
    { number: "1.5+", label: "Years Experience", icon: Zap },
    { number: "98%", label: "Client Satisfaction", icon: Palette },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About NVIAM
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge digital agency that specializes in creating immersive web experiences. Our team
            combines creativity with technology to deliver solutions that not only look stunning but also perform
            exceptionally.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-white">Our Expertise</h3>
            <div className="space-y-6">
              {[
                { skill: "Frontend Development", level: 94 },
                { skill: "3D Web Experiences", level: 90 },
                { skill: "UI/UX Design", level: 89 },
                { skill: "Backend Development", level: 96 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-purple-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-2xl font-bold mb-4 text-white">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                To push the boundaries of what's possible on the web. We believe in creating digital experiences that
                are not just functional, but truly memorable and engaging.
              </p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </motion.div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
