import { motion } from 'framer-motion'
import { Upload, Wand2, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function HeroSection({ onUpload, isDarkMode }) {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        onUpload(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles 
                className="w-10 h-10 text-yellow-300" 
                style={{ 
                  filter: 'drop-shadow(0 0 12px rgba(253, 224, 71, 1)) drop-shadow(0 0 6px rgba(253, 224, 71, 0.8))',
                  strokeWidth: 3
                }} 
              />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Wand2 className="w-16 h-16 text-primary-500 mx-auto" />
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-balance text-white drop-shadow-2xl tracking-tight"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
        >
          Transform Your Room in{' '}
          <span 
            className="text-yellow-400 italic font-black" 
            style={{ 
              textShadow: '0 0 30px rgba(250, 204, 21, 0.8), 0 0 10px rgba(250, 204, 21, 0.6)',
              WebkitTextStroke: '3px #92400e',
              textStroke: '3px #92400e'
            }}
          >
            Seconds
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl mb-4 text-white font-sans font-normal inline-block px-6 py-2 bg-yellow-400/90 backdrop-blur-sm rounded-lg border-2 border-amber-800"
        >
          See your space reimagined with AI
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg mb-12 text-white max-w-2xl mx-auto leading-relaxed font-sans font-semibold inline-block px-8 py-4 bg-yellow-400/90 backdrop-blur-sm rounded-xl border-2 border-amber-800"
        >
          Upload your room photo, pick a style you love, and get instant design ideas. 
          From festive themes to cozy vibes—we've got you covered.
        </motion.p>

        {/* Upload Button */}
        <motion.div variants={itemVariants}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <motion.button
            onClick={() => fileInputRef.current?.click()}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(184, 149, 96, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-800"
          >
            <Upload className="w-6 h-6 group-hover:animate-bounce" />
            <span>Upload Room Photo</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-30 blur-lg"
            />
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Works Instantly', 'Smart AI', '8+ Themes', 'Free to Try'].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="px-6 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg font-medium border-2 border-amber-800"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
