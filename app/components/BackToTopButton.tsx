"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  useEffect(() => {
    // Show button when user scrolls past the first section (approximately 800px)
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })

    return () => unsubscribe()
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={`fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${themeColors.gradient} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group`}
      style={{ pointerEvents: isVisible ? "auto" : "none", background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})` }}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  )
}
