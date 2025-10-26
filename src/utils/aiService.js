import { GoogleGenerativeAI } from '@google/generative-ai'
import OpenAI from 'openai'
import Replicate from 'replicate'

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

// Initialize OpenAI client (optional - for DALL-E image generation)
const openai = import.meta.env.VITE_OPENAI_API_KEY ? new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
}) : null

// Initialize Replicate client (for img2img transformation)
const replicate = import.meta.env.VITE_REPLICATE_API_TOKEN ? new Replicate({
  auth: import.meta.env.VITE_REPLICATE_API_TOKEN,
}) : null

/**
 * Generate a room design using Unsplash images
 * @param {string} originalImage - Base64 encoded original room image
 * @param {Object} theme - Theme object with prompt and details
 * @returns {Promise<string>} - URL of the generated image
 */
export async function generateRoomDesign(originalImage, theme) {
  try {
    let transformedImageUrl = originalImage
    let description = theme.description
    
    // Step 1: Use Gemini Vision to analyze the uploaded room
    if (import.meta.env.VITE_GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
        
        const imagePart = {
          inlineData: {
            data: originalImage.split(',')[1],
            mimeType: 'image/jpeg'
          }
        }
        
        const analysisPrompt = `Analyze this room and describe how to transform it into a ${theme.name} theme.

Theme: ${theme.name}
Description: ${theme.description}

Provide a detailed description (3-4 sentences) focusing on:
- Current room layout and features
- Specific transformation suggestions
- Color scheme and decor changes
- Overall atmosphere

Be specific and inspiring!`

        const result = await model.generateContent([analysisPrompt, imagePart])
        description = result.response.text()
      } catch (geminiError) {
        console.error('Gemini analysis failed:', geminiError)
      }
    }
    
    // Step 2: Transform the actual uploaded image using Replicate img2img
    if (replicate && import.meta.env.VITE_REPLICATE_API_TOKEN) {
      try {
        console.log('Using Replicate img2img to transform your actual room...')
        
        // Use Stable Diffusion img2img model
        const output = await replicate.run(
          "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
          {
            input: {
              image: originalImage,
              prompt: `${theme.prompt}, interior design, professional photography, high quality, realistic, detailed, well-lit`,
              num_inference_steps: 50,
              guidance_scale: 7.5,
              prompt_strength: 0.8, // How much to transform (0.8 = keep structure, change style)
            }
          }
        )
        
        transformedImageUrl = output[0]
        console.log('Replicate transformation successful!')
        
      } catch (replicateError) {
        console.error('Replicate transformation failed:', replicateError)
        
        // Fallback to DALL-E if available
        if (openai && import.meta.env.VITE_OPENAI_API_KEY) {
          try {
            const dallePrompt = `A beautifully decorated interior room in ${theme.name} style. ${theme.prompt}. Professional interior design photography, high quality, realistic, detailed`
            const response = await openai.images.generate({
              model: "dall-e-3",
              prompt: dallePrompt,
              n: 1,
              size: "1024x1024",
              quality: "standard",
              style: "natural"
            })
            transformedImageUrl = response.data[0].url
          } catch (dalleError) {
            console.error('DALL-E also failed:', dalleError)
            const fallbackPrompt = encodeURIComponent(`${theme.prompt}, interior design, realistic`)
            transformedImageUrl = `https://image.pollinations.ai/prompt/${fallbackPrompt}?width=1024&height=768&seed=${Date.now()}&nologo=true`
          }
        } else {
          // Final fallback
          const fallbackPrompt = encodeURIComponent(`${theme.prompt}, interior design, realistic`)
          transformedImageUrl = `https://image.pollinations.ai/prompt/${fallbackPrompt}?width=1024&height=768&seed=${Date.now()}&nologo=true`
        }
      }
    } else if (openai && import.meta.env.VITE_OPENAI_API_KEY) {
      // Use DALL-E if Replicate not available
      try {
        const dallePrompt = `A beautifully decorated interior room in ${theme.name} style. ${theme.prompt}. Professional interior design photography`
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt: dallePrompt,
          n: 1,
          size: "1024x1024",
          quality: "standard",
          style: "natural"
        })
        transformedImageUrl = response.data[0].url
      } catch (dalleError) {
        console.error('DALL-E failed:', dalleError)
        const fallbackPrompt = encodeURIComponent(`${theme.prompt}, interior design`)
        transformedImageUrl = `https://image.pollinations.ai/prompt/${fallbackPrompt}?width=1024&height=768&seed=${Date.now()}&nologo=true`
      }
    } else {
      // No API keys - use free service
      const visualPrompt = encodeURIComponent(`${theme.prompt}, interior design, professional`)
      transformedImageUrl = `https://image.pollinations.ai/prompt/${visualPrompt}?width=1024&height=768&seed=${Date.now()}&nologo=true`
    }
    
    return { image: transformedImageUrl, description }
  } catch (error) {
    console.error('Error generating room design:', error)
    throw new Error('Failed to generate room design. Please try again.')
  }
}

/**
 * Get AI-generated decor tips for a theme
 * @param {Object} theme - Theme object
 * @returns {Promise<Array<string>>} - Array of decor tips
 */
export async function getDecorTips(theme) {
  try {
    // Try to generate AI tips using Gemini (FREE!)
    if (import.meta.env.VITE_GEMINI_API_KEY) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      
      const prompt = `You are an expert interior designer. Provide 6-8 practical, specific, and actionable decor tips for creating a ${theme.name} themed room.

Theme description: ${theme.description}

Format: Return each tip as a separate line starting with a dash (-). Be specific and actionable.`

      const result = await model.generateContent(prompt)
      const response = result.response.text()
      
      // Parse the response into individual tips
      const aiTips = response
        .split('\n')
        .filter(line => line.trim().length > 0)
        .map(line => line.replace(/^[-*•]\s*/, '').replace(/^\d+\.\s*/, '').trim())
        .filter(tip => tip.length > 10)
        .slice(0, 8)
      
      if (aiTips.length > 0) {
        return aiTips
      }
    }
    
    // Fallback to predefined tips if Gemini fails or no API key
    return theme.tips || [
      'Consider the lighting to match the theme mood',
      'Choose colors that complement the overall aesthetic',
      'Add decorative elements that enhance the theme',
      'Balance functionality with visual appeal'
    ]
  } catch (error) {
    console.error('Error getting decor tips:', error)
    // Return predefined tips as fallback
    return theme.tips || [
      'Consider the lighting to match the theme mood',
      'Choose colors that complement the overall aesthetic',
      'Add decorative elements that enhance the theme',
      'Balance functionality with visual appeal'
    ]
  }
}

