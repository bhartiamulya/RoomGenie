import { motion } from 'framer-motion'

export default function ThemeCard({ theme, index, isSelected, isDisabled, onClick, isDarkMode }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={!isDisabled ? { scale: 1.05, y: -5 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={isDisabled}
      className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${
        isSelected ? 'ring-4 ring-primary-500' : ''
      }`}
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(135deg, ${theme.gradient[0]}, ${theme.gradient[1]})`
        }}
      />

      {/* Content */}
      <div className="relative p-6 h-48 flex flex-col justify-between">
        {/* Icon */}
        <motion.div
          animate={!isDisabled ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl"
        >
          {theme.icon}
        </motion.div>

        {/* Title & Description */}
        <div className="text-left">
          <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
          <p className="text-sm text-white/80">{theme.description}</p>
        </div>

        {/* Hover Glow Effect */}
        {!isDisabled && (
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
            whileHover={{ opacity: 0.1 }}
          />
        )}
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"
        >
          <span className="text-primary-500 text-xl">✓</span>
        </motion.div>
      )}
    </motion.button>
  )
}
