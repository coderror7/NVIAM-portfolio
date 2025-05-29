"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  SignalIcon as TelegramIcon,
  MessageSquare,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nviam.network@proton.me",
      description: "Send us an email anytime",
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "+91 7895715231",
    //   description: "Call us during business hours",
    // },
    {
      icon: MapPin,
      title: "Location",
      value: "UP & Bihar Together, India",
      description: "Visit our office",
    },
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

  const floatingIcons = [
    { icon: Sparkles, delay: 0 },
    { icon: Zap, delay: 0.5 },
    { icon: Heart, delay: 1 },
    { icon: Sparkles, delay: 1.5 },
    { icon: Zap, delay: 2 },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We're always excited to hear about new projects and opportunities. Whether you have a specific idea in
                mind or just want to explore possibilities, we're here to help bring your vision to life.
              </p>
            </motion.div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">{info.title}</h4>
                  <p className="text-purple-400 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-400">{info.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  // { name: "WhatsApp", icon: MessageCircle, url: "https://chat.whatsapp.com/Fvqpza09Wll6KR2tSZomvC" },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    url: "https://www.instagram.com/nviam.network?igsh=MW1hMjlsa2ttaWM1eQ==",
                  },
                  { name: "Telegram", icon: TelegramIcon, url: "https://t.me/dataintelegram" },
                  { name: "Reddit", icon: MessageSquare, url: "https://www.reddit.com/r/nviam/s/syMosPfVIG" },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.button
                      key={social.name}
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <IconComponent size={20} />
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 relative z-10 h-full flex items-center justify-center">
              <div className="text-center relative">
                {/* Floating Icons Animation */}
                <div className="absolute inset-0 overflow-hidden">
                  {floatingIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? {
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: [0, Math.random() * 200 - 100],
                              y: [0, Math.random() * 200 - 100],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        delay: item.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                      }}
                    >
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Central Content */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    Let's Create Magic
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                    className="text-gray-300 text-lg mb-8"
                  >
                    Connect with us through any of the channels above and let's bring your ideas to life!
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
                    className="flex justify-center space-x-4"
                  >
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20 pt-12 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-4">© 2024 Nviam. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
