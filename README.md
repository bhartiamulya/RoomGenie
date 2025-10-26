#  RoomGenie - AI Interior Design Visualizer

Transform your room with AI-powered interior design. Upload a photo, choose from 8 themed styles, and visualize your space reimagined with personalized decor suggestions.

### Installation

1. **Clone or download the project**
   ```bash
   cd RoomGenie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   VITE_GEMINI_API_KEY=your-gemini-api-key
   VITE_REPLICATE_API_TOKEN=your-replicate-token
   VITE_OPENAI_API_KEY=your-openai-key-optional
   ```
   
   **Note**: App works with just Gemini key, but image transformation requires Replicate or OpenAI.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

##  How to Use

1. **Upload**: Click "Upload Room Photo" and select an image of your room
2. **Choose Theme**: Select from 8 stunning themes (Halloween, Diwali, Cozy Study, etc.)
3. **Wait**: AI generates your transformed room (takes 10-30 seconds)
4. **Compare**: Use the slider to see before/after
5. **Get Tips**: Read AI-generated decor suggestions
6. **Download**: Save your new room design

##  Available Themes

| Theme | 
|-------|
| **Halloween Glow**  Spooky atmosphere with warm orange lighting |
| **Diwali Delight**  Festive Indian celebration with diyas and lights |
| **Cozy Study**  Minimalist workspace for focus and productivity |
| **Wedding Chic**  Elegant romance with soft pastels and florals |
| **Modern Minimal**  Clean, simple sophistication |
| **Boho Paradise**  Eclectic vibes with patterns and textures |
| **Scandi Comfort**  Light, airy hygge aesthetic |
| **Urban Industrial**  Raw, edgy with exposed elements |

##  Tech Stack

- **Frontend**: React 18.2 with Vite 5.0
- **Styling**: TailwindCSS 3.3 with custom theme
- **Animations**: Framer Motion 10.16
- **Fonts**: Playfair Display + Inter (Google Fonts)
- **Icons**: Lucide React
- **Image Comparison**: react-compare-image
- **AI Services**:
  - Google Gemini (Vision + Text) - Room analysis and tips
  - Replicate Stable Diffusion - Image transformation
  - OpenAI DALL-E 3 - Optional fallback
  - Pollinations.ai - Free fallback

##  Project Structure

```
RoomGenie/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with dark mode toggle
│   │   ├── HeroSection.jsx      # Landing page with upload
│   │   ├── UploadSection.jsx    # Theme selection interface
│   │   ├── ThemeCard.jsx        # Individual theme card
│   │   └── ResultSection.jsx    # Comparison & tips display
│   ├── utils/
│   │   ├── themes.js            # Theme definitions & prompts
│   │   └── aiService.js         # OpenAI API integration
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

### API Configuration

The app uses a fallback system:
1. **Replicate** (if token provided) - Best quality, transforms your actual room
2. **DALL-E 3** (if OpenAI key provided) - High quality, generates new images
3. **Pollinations.ai** (free) - Fallback, generates themed room images







