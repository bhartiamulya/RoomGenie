import { motion } from 'framer-motion'
import { Sparkles, Sun, Moon } from 'lucide-react'

export default function Navbar({ isDarkMode, setIsDarkMode, onReset }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={onReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="w-8 h-8 text-primary-400 opacity-30" />
              </motion.div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              RoomGenie
            </span>
          </motion.button>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            } hover:bg-primary-100 transition-colors`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
