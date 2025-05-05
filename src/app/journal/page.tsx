'use client'

import { useState } from 'react'
import Image from 'next/image'

type JournalEntry = {
  title: string
  date: string
  summary: string
  content: string
  image?: string
  tags: string[]
}

const journalEntries: JournalEntry[] = [
  {
    title: "First Entry: A Last Chance to Live in the Moment",
    date: "2024-05-04",
    summary: "With 2 weeks left of Yale before graduation, I reflect on what I am feeling in the moment.",
    content: "Today, I was working on my last assignment for the semester. It felt very bizarre that almost all my other friends were submitting their last assignment as a Yale student, yet here I am with one more semester left. I felt happy. It's so strange to think so. As a high school student, I would have never guessed that I would be happy to have more work. But since taking my life worth living class, I have realized that this work is not just meaningless work. It's my life. And I feel very fortunate and grateful for the position I am in here at Yale and to be able to do this work is a previlege. A previlige that I am losing soon though is being with my closest friends and being able to see them constantly and do whatever I want with them. Just yesterday, we decided to go to six flags. It was the first time I had ever gone on a roller coaster. I don't know how I was convinced, but I think it definitely had to do with it being one of the last chances to do something like this. When I was at the top, all I could think about was how scared I felt and how I didn't want to die, yet when the ride finished the first thought I had was how much fun I was having and how happy I was to do it alongisde my best friends. I feel both a sense of bittersweetness towards life as well as appreciation for everything I have towards these upcoming weeks before graduation. I am just trying my best to make the most of my last times here at Yale as well as take it all in. It's hard though. It's hard to actually appreciate something. I don't know what the physical processes entail for this, but I sometimes just stand in front of the beautiful sunset on cross campus and think to myself that I am grateful and that I am happy in this moment and I hope that is enough. I know I will look back at these times and wish I did more and wish I could come back to this time. And yet I still have 2 more weeks of this time and this chance. That is a truly weird feeling to have. But I guess I am lucky to have a time like this that I am able to live in the moment now for.",
    tags: ["reflection", "life"]
  }
]

export default function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null)

  return (
    <div className="journal-container">
      <h1 className="page-title">Journal</h1>
      
      <div className="journal-grid">
        {journalEntries.map((entry, index) => (
          <div 
            key={index}
            className="journal-card"
            onClick={() => setSelectedEntry(entry)}
          >
            {entry.image && (
              <div className="journal-image">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            <div className="journal-preview">
              <div className="journal-meta">
                <span className="journal-date">{entry.date}</span>
                <div className="journal-tags">
                  {entry.tags.map((tag, i) => (
                    <span key={i} className="journal-tag">#{tag}</span>
                  ))}
                </div>
              </div>
              <h2 className="journal-title">{entry.title}</h2>
              <p className="journal-summary">{entry.summary}</p>
              <button className="journal-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedEntry && (
        <div className="modal" onClick={() => setSelectedEntry(null)}>
          <div className="modal-content journal-modal" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedEntry(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
            {selectedEntry.image && (
              <div className="journal-modal-image">
                <Image
                  src={selectedEntry.image}
                  alt={selectedEntry.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            )}
            <div className="journal-meta">
              <span className="journal-date">{selectedEntry.date}</span>
              <div className="journal-tags">
                {selectedEntry.tags.map((tag, i) => (
                  <span key={i} className="journal-tag">#{tag}</span>
                ))}
              </div>
            </div>
            <h2 className="journal-title">{selectedEntry.title}</h2>
            <div className="journal-content">
              {selectedEntry.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
