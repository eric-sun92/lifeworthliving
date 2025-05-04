'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CompassPoint = {
  value: string
  description: string
  quote: string
  position: 'north' | 'east' | 'south' | 'west'
}

const compassPoints: CompassPoint[] = [
  {
    value: 'Agency',
    description: 'The power to shape my path and make meaningful choices.',
    quote: '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
    position: 'north'
  },
  {
    value: 'Gratitude',
    description: 'Finding beauty and meaning in the present moment.',
    quote: '"Gratitude turns what we have into enough." - Aesop',
    position: 'east'
  },
  {
    value: 'Curiosity',
    description: 'Staying open to wonder and continuous learning.',
    quote: '"The important thing is not to stop questioning." - Albert Einstein',
    position: 'south'
  },
  {
    value: 'Connection',
    description: 'Building authentic relationships and understanding others.',
    quote: '"The only way to have a friend is to be one." - Ralph Waldo Emerson',
    position: 'west'
  }
]

export default function Home() {
  const [selectedPoint, setSelectedPoint] = useState<CompassPoint | null>(null)

  return (
    <div>
      <h1 className="page-title">My Compass</h1>
      <div className="compass">
        <div className="compass-center">
          <Image
            src="/compass.svg"
            alt="Compass"
            width={200}
            height={200}
            priority
          />
        </div>
        {compassPoints.map((point) => (
          <button
            key={point.value}
            className={`compass-point compass-point-${point.position}`}
            onClick={() => setSelectedPoint(point)}
          >
            {point.value}
          </button>
        ))}
      </div>

      {selectedPoint && (
        <div className="modal" onClick={() => setSelectedPoint(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPoint(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2>{selectedPoint.value}</h2>
            <p>{selectedPoint.description}</p>
            <p className="text-center">{selectedPoint.quote}</p>
            <div className="modal-buttons">
              {selectedPoint.value === 'Gratitude' && (
                <>
                  <p className="modal-hint">Explore the moments that made me pause:</p>
                  <Link href="/moments" className="button no-underline">
                    View Moments
                  </Link>
                </>
              )}
              {selectedPoint.value === 'Connection' && (
                <>
                  <p className="modal-hint">Meet the people who shaped my journey:</p>
                  <Link href="/people" className="button no-underline">
                    View People
                  </Link>
                </>
              )}
              {selectedPoint.value === 'Curiosity' && (
                <>
                  <p className="modal-hint">Explore questions that drive my curiosity:</p>
                  <Link href="/questions" className="button no-underline">
                    View Questions
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
