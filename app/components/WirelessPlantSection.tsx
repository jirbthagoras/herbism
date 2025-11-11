"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import Image from "next/image"
export default function WirelessPlantSection() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px mx-auto mb-6 md:mb-8"
            style={{ background: themeColors.primary }}
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">Wireless Plant</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Layanan tanam bersama dapat memesan jasa penanaman untuk mendapatkan hasil panen melalui sistem bagi
            hasil. Dapat menggunakan fitur video call langsung dari website ini.
          </p>
        </motion.div>

         
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
  
            <div className="grid hidden md:block md:grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Community Image 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src="Wireless.png"
                  alt="Komunitas"
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${themeColors.primary}20` }}
                />
              </motion.div>

              {/* Community Image 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group mt-4"
              >
                <img
                  src="Wireless2.png"
                  alt="Wireless"
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${themeColors.secondary}20` }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">Sistem Bagi Hasil</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Investasi tanaman herbal dengan sistem bagi hasil yang menguntungkan dan transparan.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">📹</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">Video Call Langsung</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Konsultasi langsung dengan petani ahli melalui video call terintegrasi di platform.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">Komunitas Aktif</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Bergabung dengan komunitas petani herbal untuk berbagi pengalaman dan tips.
                  </p>    
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl group text-sm sm:text-base font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})`
                }}
              >
                <span>Mulai Sekarang</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
