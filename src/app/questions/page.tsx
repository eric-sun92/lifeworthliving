'use client'

import { useState } from 'react'

type Question = {
  text: string
  context: string
}

const questions: Question[] = [
  {
    text: 'Is it better to act with doubt than not to act at all?',
    context: 'Reflecting on moments of uncertainty and the courage to move forward anyway.'
  },
  {
    text: 'How can I be fully present without fearing what I will lose?',
    context: 'Exploring the tension between attachment and living in the moment.'
  },
  {
    text: 'What makes a connection meaningful?',
    context: 'Thinking about the nature of authentic relationships and genuine understanding.'
  },
  {
    text: 'How do we balance personal growth with contentment?',
    context: 'Considering the dance between ambition and acceptance.'
  }
]

export default function Questions() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextQuestion = () => {
    setCurrentIndex((currentIndex + 1) % questions.length)
  }

  const prevQuestion = () => {
    setCurrentIndex((currentIndex - 1 + questions.length) % questions.length)
  }

  return (
    <div className="text-center">
      <h1 className="page-title">Questions I'm Still Holding</h1>
      
      <div className="card" style={{ margin: '2rem auto', maxWidth: '600px' }}>
        <h2>{questions[currentIndex].text}</h2>
        <p>{questions[currentIndex].context}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button className="button" onClick={prevQuestion} style={{ marginRight: '1rem' }}>
          Previous
        </button>
        <button className="button" onClick={nextQuestion}>
          Next
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="button"
            style={{
              width: '10px',
              height: '10px',
              padding: 0,
              margin: '0 5px',
              borderRadius: '50%',
              opacity: index === currentIndex ? 1 : 0.5
            }}
          />
        ))}
      </div>
    </div>
  )
}
