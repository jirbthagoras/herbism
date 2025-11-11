"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"


export default function FeaturesSection() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  const features = [
    {
      title: "Scan Manfaat Tanaman",
      description: "Pindai tanaman herbal untuk mengetahui manfaat dan khasiatnya secara detail dan akurat.",
      buttonLabel: "Coba Sekarang",
      icon: "scan",
      benefits: [
        "Pahami Manfaat Herba",
        "Informasi Khasiat Akurat",
        "Rekomendasi Penggunaan Terbaik"
      ]
    },
    {
      title: "Diagnosa Penyakit Tanaman",
      description: "Deteksi penyakit tanaman dan dapatkan panduan lengkap perawatan serta penyembuhan.",
      buttonLabel: "Mulai Diagnosa",
      icon: "diagnose",
      benefits: [
        "Deteksi 500+ jenis penyakit",
        "Solusi perawatan terperinci",
        "Rekomendasi obat alami"
      ]
    },
  ]



  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4 sm:px-6 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px mx-auto mb-8"
            style={{ background: themeColors.primary }}
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight text-center mb-2">
            Teknologi AI untuk Tanaman
          </h2>

          <p className="text-base text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Manfaatkan kecerdasan buatan untuk memahami dan merawat tanaman herbal Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="relative rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.primary}08, ${themeColors.secondary}08)`,
                    border: `1px solid ${themeColors.primary}20`
                  }}
                >

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.primary}15, ${themeColors.secondary}15)`
                    }}
                  >
                    {feature.icon === "scan" ? (
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: themeColors.primary }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: themeColors.primary }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </motion.div>


                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-xl font-normal text-slate-900 mb-3 leading-tight"
                  >
                    {feature.title}
                  </motion.h3>


                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm text-slate-600 mb-4 leading-relaxed font-light"
                  >
                    {feature.description}
                  </motion.p>

     
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-2 mb-6"
                  >
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: themeColors.primary }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </motion.ul>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})`
                    }}
                  >
                    <span>{feature.buttonLabel}</span>
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

  
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="h-px mx-auto mt-16"
          style={{ background: themeColors.primary }}
        />
      </div>
    </section>
  )
}