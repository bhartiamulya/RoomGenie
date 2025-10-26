export const THEMES = [
  {
    id: 'halloween',
    name: 'Halloween Glow',
    icon: '🎃',
    description: 'Spooky and atmospheric with warm orange lighting and festive decorations',
    gradient: ['#ff6b35', '#f7931e'],
    prompt: 'Transform this room into a spooky Halloween-themed interior with carved pumpkins, flickering candles, cobwebs, warm orange and purple lighting, autumn leaves, and festive Halloween decorations. Make it atmospheric and cozy, not scary.',
    tips: [
      'Add carved pumpkins with LED candles for a warm, safe glow',
      'Hang orange and purple string lights along the walls',
      'Place autumn leaf garlands around doorways and windows',
      'Use black and orange throw pillows on furniture',
      'Add a decorative spider web in the corner with fake spiders',
      'Display a bowl of candy corn or Halloween treats on the table'
    ]
  },
  {
    id: 'diwali',
    name: 'Diwali Delight',
    icon: '🪔',
    description: 'Festive Indian celebration with diyas, lights, and vibrant colors',
    gradient: ['#ff9933', '#138808'],
    prompt: 'Decorate this room for Diwali festival with traditional clay diyas (oil lamps), colorful rangoli patterns on the floor, marigold flower garlands, string lights, decorative lanterns, vibrant orange and gold colors, and traditional Indian festive decorations. Make it bright, warm, and celebratory.',
    tips: [
      'Arrange clay diyas (oil lamps) along windowsills and shelves',
      'Create a colorful rangoli design at the entrance using flower petals or colored powder',
      'Hang marigold and rose garlands on walls and doorways',
      'Add warm golden string lights for a festive glow',
      'Place decorative brass or copper items as accents',
      'Use vibrant cushion covers in orange, red, and gold tones',
      'Display a small prayer area with flowers and incense'
    ]
  },
  {
    id: 'cozy-study',
    name: 'Cozy Study',
    icon: '☕',
    description: 'Warm, minimalist workspace perfect for focus and productivity',
    gradient: ['#8b7355', '#d4a574'],
    prompt: 'Transform this room into a cozy, minimalist study space with wooden bookshelves filled with books, a clean modern desk with a laptop, warm ambient lighting from a desk lamp, indoor plants, neutral earth tones (beige, cream, brown), comfortable seating, and a calm, focused atmosphere.',
    tips: [
      'Install a warm-toned desk lamp for focused task lighting',
      'Add floating shelves or a bookshelf with organized books',
      'Place a small potted plant (like a succulent or snake plant) on the desk',
      'Use a comfortable ergonomic chair with good back support',
      'Keep the desk minimal with only essential items',
      'Add a soft area rug in neutral tones for warmth',
      'Use cable organizers to keep wires tidy',
      'Hang a motivational print or artwork at eye level'
    ]
  },
  {
    id: 'wedding',
    name: 'Wedding Chic',
    icon: '💍',
    description: 'Elegant and romantic with soft pastels and floral arrangements',
    gradient: ['#ffc0cb', '#e6e6fa'],
    prompt: 'Transform this room into an elegant wedding decor setting with beautiful flower arrangements (roses, peonies), soft pastel colors (blush pink, lavender, cream), flowing white drapes and fabric, romantic lighting with fairy lights and candles, elegant centerpieces, and a sophisticated, dreamy atmosphere.',
    tips: [
      'Create a focal point with a large floral arrangement in soft pastels',
      'Drape sheer white or cream fabric along walls or ceiling',
      'Add clusters of pillar candles in varying heights (use LED for safety)',
      'Hang delicate fairy lights or string lights for romantic ambiance',
      'Use blush pink, lavender, or champagne-colored linens',
      'Place rose petals scattered on surfaces for elegance',
      'Add crystal or glass vases with fresh flowers',
      'Use gold or silver accent pieces for sophistication'
    ]
  },
  {
    id: 'minimalist',
    name: 'Modern Minimal',
    icon: '⬜',
    description: 'Clean, simple, and sophisticated with neutral tones',
    gradient: ['#f5f5f5', '#e0e0e0'],
    prompt: 'Transform this room into a modern minimalist interior with clean lines, neutral color palette (white, beige, gray), simple furniture, plenty of natural light, minimal decorations, geometric shapes, and a calm, uncluttered aesthetic. Focus on functionality and simplicity.',
    tips: [
      'Remove unnecessary items to create open, breathing space',
      'Use a neutral color palette: whites, grays, and beiges',
      'Choose furniture with clean, simple lines',
      'Add one or two statement pieces rather than many small items',
      'Maximize natural light with sheer curtains or blinds',
      'Use hidden storage to keep surfaces clear',
      'Add a single large plant for a touch of nature',
      'Keep artwork minimal and monochromatic'
    ]
  },
  {
    id: 'bohemian',
    name: 'Boho Paradise',
    icon: '🌺',
    description: 'Eclectic and vibrant with patterns, textures, and natural elements',
    gradient: ['#e67e22', '#c0392b'],
    prompt: 'Transform this room into a bohemian paradise with colorful textiles, macramé wall hangings, lots of plants, patterned rugs and cushions, natural materials (rattan, wood, jute), warm earthy tones mixed with vibrant colors, hanging plants, and a relaxed, artistic vibe.',
    tips: [
      'Layer multiple patterned rugs and textiles for depth',
      'Hang macramé wall art or woven tapestries',
      'Add plenty of plants in hanging planters and floor pots',
      'Mix and match colorful throw pillows with different patterns',
      'Use natural materials: rattan baskets, wooden furniture, jute rugs',
      'Display collected items like vintage finds or travel souvenirs',
      'Add string lights or Moroccan lanterns for ambient lighting',
      'Include floor cushions or poufs for casual seating'
    ]
  },
  {
    id: 'scandinavian',
    name: 'Scandi Comfort',
    icon: '🕯️',
    description: 'Light, airy, and functional with hygge vibes',
    gradient: ['#d4e4f7', '#b8d4e8'],
    prompt: 'Transform this room into a Scandinavian-style interior with light wood furniture, white and light gray walls, cozy textiles (chunky knit blankets, soft cushions), minimal but functional design, lots of natural light, simple greenery, candles, and a warm, hygge atmosphere.',
    tips: [
      'Paint walls in soft white or light gray for brightness',
      'Choose light wood furniture (birch, pine, or ash)',
      'Add a chunky knit throw blanket in cream or gray',
      'Use simple, functional storage solutions',
      'Place white or cream candles in groups for hygge ambiance',
      'Add one or two simple green plants',
      'Keep window treatments minimal to maximize natural light',
      'Use geometric patterns sparingly in black and white'
    ]
  },
  {
    id: 'industrial',
    name: 'Urban Industrial',
    icon: '🏭',
    description: 'Raw, edgy aesthetic with exposed elements and metal accents',
    gradient: ['#5d5d5d', '#2c3e50'],
    prompt: 'Transform this room into an industrial loft style with exposed brick walls, metal fixtures, Edison bulb lighting, dark wood or metal furniture, concrete elements, black metal accents, leather seating, and a raw, urban aesthetic.',
    tips: [
      'Expose brick walls or add brick-effect wallpaper',
      'Install Edison bulb pendant lights or metal fixtures',
      'Use metal shelving units or pipe shelves',
      'Add dark wood furniture with metal accents',
      'Include leather seating or industrial-style chairs',
      'Display items on open shelving for a warehouse feel',
      'Use concrete planters for greenery',
      'Add vintage industrial pieces like old factory carts or metal lockers'
    ]
  }
]
