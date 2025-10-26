import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import UploadSection from './components/UploadSection'
import ResultSection from './components/ResultSection'
import VideoBackground from './components/VideoBackground'
import { generateRoomDesign, getDecorTips } from './utils/aiService'

function App() {
  const [currentStep, setCurrentStep] = useState('hero') 
  const [uploadedImage, setUploadedImage] = useState(null)
  const [generatedImage, setGeneratedImage] = useState(null)
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [decorTips, setDecorTips] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleImageUpload = (image) => {
    setUploadedImage(image)
    setCurrentStep('upload')
  }

  const handleThemeSelect = async (theme, generatedImg, tips) => {
    setSelectedTheme(theme)
    setGeneratedImage(generatedImg)
    setDecorTips(tips)
    setCurrentStep('result')
  }

  const handleReset = () => {
    setCurrentStep('hero')
    setUploadedImage(null)
    setGeneratedImage(null)
    setSelectedTheme(null)
    setDecorTips([])
  }

  const handleTryAnother = () => {
    setCurrentStep('upload')
    setGeneratedImage(null)
    setSelectedTheme(null)
    setDecorTips([])
  }

  const handleRetrySameTheme = async () => {
    try {
      
      const result = await generateRoomDesign(uploadedImage, selectedTheme)
      const newGeneratedImage = typeof result === 'string' ? result : result.image
      
      
      const newTips = await getDecorTips(selectedTheme)
      
      
      setGeneratedImage(newGeneratedImage)
      setDecorTips(newTips)
    } catch (error) {
      console.error('Error regenerating design:', error)
      alert('Failed to generate new variation. Please try again.')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${
      isDarkMode ? 'text-white' : 'text-gray-900'
    }`}>
      {/* Video Background */}
      <VideoBackground />
      
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        onReset={handleReset}
      />
      
      <AnimatePresence mode="wait">
        {currentStep === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection onUpload={handleImageUpload} isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {currentStep === 'upload' && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <UploadSection 
              uploadedImage={uploadedImage}
              onThemeSelect={handleThemeSelect}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        )}

        {currentStep === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <ResultSection 
              beforeImage={uploadedImage}
              afterImage={generatedImage}
              theme={selectedTheme}
              decorTips={decorTips}
              onTryAnother={handleTryAnother}
              onRetrySameTheme={handleRetrySameTheme}
              onReset={handleReset}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
