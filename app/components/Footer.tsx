"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

export default function Footer() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()
  const footerLinks = {
    product: [
      { name: "Scan Tanaman", href: "#" },
      { name: "Diagnosa Penyakit", href: "#" },
      { name: "Konsultasi AI", href: "#" },
      { name: "Wireless Plant", href: "#" }
    ],
    company: [
      { name: "Tentang Kami", href: "#" },
      { name: "Tim", href: "#" },
      { name: "Karir", href: "#" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Bantuan", href: "#" },
      { name: "Kontak", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Komunitas", href: "#" }
    ]
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: themeColors.primary }}>HERBISM</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-md">
                  Platform AI terdepan untuk perawatan tanaman herbal. Bergabunglah dengan komunitas yang peduli kesehatan alami dan berkelanjutan.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-3">Dapatkan Update Terbaru</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none transition-colors"
                    onFocus={(e) => {
                      e.target.style.borderColor = themeColors.primary
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#334155'
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                    style={{ 
                      background: themeColors.primary
                    }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Produk</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-slate-300 transition-colors duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = themeColors.primary
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#cbd5e1"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Perusahaan</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-slate-300 transition-colors duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = themeColors.primary
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#cbd5e1"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Dukungan</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-slate-300 transition-colors duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = themeColors.primary
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#cbd5e1"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-6 text-center"
        >
          <p className="text-sm text-slate-400">&copy; 2024 Herbism. All rights reserved.</p>
          <div className="flex gap-4 mt-2 justify-center text-xs sm:text-sm">
            <a 
              href="#" 
              className="text-slate-400 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = themeColors.primary}
              onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="#" 
              className="text-slate-400 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = themeColors.primary}
              onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
