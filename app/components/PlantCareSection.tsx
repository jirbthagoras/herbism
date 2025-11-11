"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

export default function PlantCareSection() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()


  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-20 relative overflow-x-hidden">
 
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-teal-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px mx-auto mb-6 md:mb-8"
            style={{ background: themeColors.primary }}
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Rawat Tanamanmu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Asisten AI pintar yang membantu merawat tanaman herbal Anda dengan sempurna
          </p>
        </motion.div>

 
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative mb-8 md:mb-0"
          >
            <div 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl border-4 border-white relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.secondary}20)` 
              }}
            >
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:gap-4 max-w-md md:max-w-lg"
          >

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{ background: `${themeColors.primary}15` }}
            >
              <p className="text-sm sm:text-base text-slate-700 font-medium text-center">
                💧 Rekomendasi jadwal penyiraman otomatis
              </p>
            </motion.div>

 
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{ background: `${themeColors.primary}15` }}
            >
              <p className="text-sm sm:text-base text-slate-700 font-medium text-center">
                🌱 Saran jenis pupuk yang tepat
              </p>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{ background: `${themeColors.primary}15` }}
            >
              <p className="text-sm sm:text-base text-slate-700 font-medium text-center">
                📸 Analisis foto lingkungan tanaman
              </p>
            </motion.div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 text-white transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl group"
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})` 
            }}
          >
            <span className="font-semibold text-base sm:text-lg">Cobain Sekarang</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
          
          <p className="text-sm text-slate-500 mt-6 tracking-wide">
            Mulai rawat tanamanmu sekarang
          </p>
        </motion.div>
      </div>
    </section>
  )
}
