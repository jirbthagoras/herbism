"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

export default function ConsultationSection() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative overflow-x-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
      </motion.div>

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 mx-auto mb-8 md:mb-12"
          style={{ background: themeColors.primary }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight text-center">
            Konsultasi Penyakitmu <br />Bersama <span className="font-medium">SiBis</span>!
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-slate-600 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto font-light text-center"
        >
          Dapatkan rekomendasi racikan herbal alami yang dipersonalisasi melalui kecerdasan buatan. Kami memahami setiap
          keluhan Anda untuk memberikan solusi kesehatan yang selaras dengan alam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 border-2 rounded-full transition-all duration-300 group hover:shadow-lg bg-white/80 backdrop-blur-sm relative" 
            style={{
              borderColor: themeColors.primary,
              color: themeColors.primary
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = themeColors.primary
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
              e.currentTarget.style.color = themeColors.primary
            }}
          >

            <span className="text-sm font-medium tracking-wide ml-4">Mulai Konsultasi dengan Greet</span> 
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-xs text-slate-500 mt-6 sm:mt-8 tracking-wide">Berbicara dengan SiBis, asisten kesehatan AI Anda</p>
        </motion.div>
      </div>
    </section>
  )
}