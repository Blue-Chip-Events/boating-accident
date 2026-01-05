import { useState } from 'react'
import type { MediaItem } from '../data/mediaItems'

interface MediaCarouselProps {
  items: MediaItem[]
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  const [selectedId, setSelectedId] = useState(items[0]?.id)

  const selectedItem = items.find(item => item.id === selectedId)

  const handleItemClick = (itemId: string) => {
    setSelectedId(itemId)

    // Mobile: smooth scroll to display
    if (window.innerWidth < 1024) {
      const displayElement = document.getElementById('media-display')
      displayElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const renderMediaContent = (item: MediaItem) => {
    switch (item.type) {
      case 'article':
        return (
          <div className="space-y-4">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.source || ''}
                className="h-16 object-contain"
              />
            )}
            <h3 className="text-2xl lg:text-3xl font-bold">{item.title}</h3>
            {item.description && (
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            )}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground hover:underline transition-all"
              >
                Read Article →
              </a>
            )}
          </div>
        )

      case 'video':
        return (
          <div className="space-y-4">
            <div className="aspect-video">
              <iframe
                src={item.embedUrl}
                title={item.title}
                className="w-full h-full rounded"
                allowFullScreen
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold">{item.title}</h3>
            {item.source && (
              <p className="text-sm text-gray-400">{item.source}</p>
            )}
          </div>
        )

      case 'publication':
        return (
          <div className="flex flex-col items-center justify-center space-y-6 h-full min-h-64">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.source || item.title}
                className="max-h-32 object-contain"
              />
            )}
            <h3 className="text-xl lg:text-2xl font-bold text-center">{item.title}</h3>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline transition-all"
              >
                View Publication →
              </a>
            )}
          </div>
        )

      case 'podcast':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">{item.title}</h3>
            {item.source && (
              <p className="text-lg text-foreground">{item.source}</p>
            )}
            {item.description && (
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            )}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground hover:underline transition-all"
              >
                Listen Now →
              </a>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-12">
      {/* RIGHT: List (shows first on mobile, second on desktop) */}
      <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
        <div className="lg:max-h-[600px] lg:overflow-y-auto space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left p-4 rounded transition-colors
                         hover:bg-background border-l-4 border-transparent
                         focus:outline-none focus:ring-2 focus:ring-foreground
                         ${selectedId === item.id ? 'bg-background-alt border-l-foreground' : ''}`}
              aria-current={selectedId === item.id ? 'true' : 'false'}
            >
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm lg:text-base">
                  {item.title}
                </h4>
                {item.source && (
                  <p className="text-xs text-gray-400 mt-1">{item.source}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LEFT: Display Area (shows second on mobile, first on desktop) */}
      <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
        <div
          id="media-display"
          className="bg-background rounded-lg p-6 lg:p-8 min-h-80 lg:min-h-96"
          role="region"
          aria-label="Selected media content"
        >
          {selectedItem && renderMediaContent(selectedItem)}
        </div>
      </div>
    </div>
  )
}
