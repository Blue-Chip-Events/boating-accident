export type MediaType = 'article' | 'video' | 'publication' | 'podcast'

export interface MediaItem {
  id: string
  title: string
  type: MediaType
  description?: string
  url?: string           // External links
  embedUrl?: string      // YouTube/Vimeo embeds
  imageUrl?: string      // Publication logos
  source?: string        // Publication name
  date?: string
}

export const mediaItems: MediaItem[] = [
  {
    id: 'sample-article',
    title: 'Boating Accident Conference Makes Waves in Crypto Industry',
    type: 'article',
    url: 'https://example.com/article',
    imageUrl: '/logos/sample-publication.svg',
    source: 'Crypto News',
    date: '2025-11-15',
    description: 'A groundbreaking crypto conference that brings together industry leaders for meaningful discussions on blockchain technology and decentralization.'
  },
  {
    id: 'sample-video',
    title: 'Conference Highlights 2025',
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    source: 'Boating Accident TV',
    date: '2025-10-20'
  },
  {
    id: 'sample-publication',
    title: 'Featured in Tech Magazine',
    type: 'publication',
    imageUrl: '/logos/sample-tech-mag.svg',
    url: 'https://example.com/feature',
    source: 'Tech Magazine',
    date: '2025-09-10'
  },
  {
    id: 'sample-podcast',
    title: 'The Future of Crypto Conferences',
    type: 'podcast',
    url: 'https://example.com/podcast',
    source: 'Crypto Talks Podcast',
    date: '2025-08-05',
    description: 'An in-depth conversation about the evolution of crypto conferences and what makes Boating Accident unique.'
  }
]
