import { motion } from 'framer-motion'
import { Download, RotateCcw, Sparkles, Lightbulb, RefreshCw } from 'lucide-react'
import ImageCompare from './ImageCompare'

export default function ResultSection({ 
  beforeImage, 
  afterImage, 
  theme, 
  decorTips, 
  onTryAnother,
  onRetrySameTheme, 
  onReset,
  isDarkMode 
}) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = afterImage
    link.download = `roomgenie-${theme.name.toLowerCase().replace(/\s+/g, '-')}.png`
    link.click()
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-primary-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-primary-500">{theme.name}</span> Transformation
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Slide to compare your before and after
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } p-6`}>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <ImageCompare
                beforeImage={beforeImage}
                afterImage={afterImage}
              />
            </div>
            <div className="flex justify-between mt-4 text-sm font-semibold">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>← Before</span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>After →</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download Design</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetrySameTheme}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            <span>More Options</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTryAnother}
            className={`flex items-center space-x-2 ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
            } px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border ${
              isDarkMode ? 'border-gray-600' : 'border-gray-200'
            }`}
          >
            <RotateCcw className="w-5 h-5" />
            <span>Try Another Theme</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className={`flex items-center space-x-2 ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
            } px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border ${
              isDarkMode ? 'border-gray-600' : 'border-gray-200'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>New Room</span>
          </motion.button>
        </motion.div>

        {/* Decor Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className={`rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-xl p-8`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-full">
                <Lightbulb className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold">AI Decor Tips</h3>
            </div>

            <div className="space-y-4">
              {decorTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className={`flex-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Theme Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className={`mt-6 p-4 rounded-lg border-l-4 border-primary-500 ${
                isDarkMode ? 'bg-gray-700/30' : 'bg-primary-50'
              }`}
            >
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong className="text-primary-600">Theme Insight:</strong> {theme.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
