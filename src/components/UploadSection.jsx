import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import ThemeCard from './ThemeCard'
import { generateRoomDesign, getDecorTips } from '../utils/aiService'
import { THEMES } from '../utils/themes'

export default function UploadSection({ uploadedImage, onThemeSelect, isDarkMode }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedThemeId, setSelectedThemeId] = useState(null)
  const [progress, setProgress] = useState('')

  const handleThemeClick = async (theme) => {
    setSelectedThemeId(theme.id)
    setIsGenerating(true)
    setProgress('✨ Analyzing your room...')

    try {
      // Simulate analysis phase
      await new Promise(resolve => setTimeout(resolve, 1500))
      setProgress('🎨 Designing your new look...')

      // Generate the room design with AI description
      const result = await generateRoomDesign(uploadedImage, theme)
      const generatedImage = typeof result === 'string' ? result : result.image
      
      setProgress('💡 Preparing decor tips...')
      
      // Get decor tips
      const tips = await getDecorTips(theme)

      // Complete
      setProgress('✅ Complete!')
      await new Promise(resolve => setTimeout(resolve, 500))

      onThemeSelect(theme, generatedImage, tips)
    } catch (error) {
      console.error('Error generating design:', error)
      setProgress(`❌ Error: ${error.message || 'Failed to generate design. Please try again.'}`)
      // Keep the error message visible for 5 seconds
      await new Promise(resolve => setTimeout(resolve, 5000))
      setIsGenerating(false)
      setSelectedThemeId(null)
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary-500">Dream Theme</span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Select a theme and watch AI transform your space
          </p>
        </motion.div>

        {/* Before Image Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className={`max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-3 text-center">Your Original Room</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded room" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl p-8 shadow-2xl max-w-md mx-4`}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <Loader2 className="w-16 h-16 text-primary-500" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{progress}</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  This may take a moment...
                </p>
                <motion.div
                  className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {THEMES.map((theme, index) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              index={index}
              isSelected={selectedThemeId === theme.id}
              isDisabled={isGenerating}
              onClick={() => handleThemeClick(theme)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
