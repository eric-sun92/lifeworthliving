'use client'

import { useState, useEffect } from 'react'

type Question = {
  text: string
  context: string
}

const questions: Question[] = [
  {
    text: "How do I balance the desire to leave a lasting impact with the acceptance of my smallness in the universe?",
    context: "Reflecting on the tension between ambition and humility, and how to find peace in both striving and surrender."
  },
  {
    text: "What does it mean to suffer well?",
    context: "Exploring whether there is beauty or purpose in pain, and how hardship shapes character and understanding."
  },
  {
    text: "How can faith or trust in something larger than myself shape the way I live?",
    context: "Considering the role of spirituality, devotion, or surrender in giving life meaning and direction."
  },
  {
    text: "Is there such a thing as moral courage, and how do I cultivate it?",
    context: "Thinking about the strength to live according to personal values, even when they go against societal expectations or rewards."
  },
  {
    text: "What false ideals am I at risk of chasing?",
    context: "Examining the lure of material success, social status, or external validation, and asking what truly matters underneath."
  },
  {
    text: "What does authenticity mean to me, and how do I practice it daily?",
    context: "Reflecting on how to align actions with inner truth, and resist living a life of mimicry or borrowed opinions."
  },
  {
    text: "In what ways has suffering expanded my sense of compassion?",
    context: "Considering how personal hardships deepen empathy for the struggles of others."
  },
  {
    text: "How do I want to grow wiser over time?",
    context: "Imagining the kind of wisdom I hope to develop and how I can nurture it now."
  },
  {
    text: "Where does my sense of gratitude come from?",
    context: "Exploring the roots of thankfulness — whether faith, relationships, survival, or personal history — and how it shapes outlook."
  },
  {
    text: "How do I live in service to something greater than myself?",
    context: "Thinking about acts of contribution, devotion, or purpose that transcend personal gain."
  },
  {
    text: "Is there a beauty in letting go of control?",
    context: "Exploring the possibility of peace or freedom in surrendering to what cannot be mastered or planned."
  },
  {
    text: "What does it mean to develop my own moral doctrine?",
    context: "Reflecting on how I craft and live by my own values, independent of external scripts or inherited norms."
  },
  {
    text: "What legacy do I hope to leave, and why?",
    context: "Considering what I want to give to the world, and what traces of myself I hope will outlast my lifetime."
  },
  {
    text: "How do reflection and questioning shape a meaningful life?",
    context: "Thinking about the role of ongoing inquiry, dialogue, and self-examination in deepening life’s purpose."
  }
]


export default function Questions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((currentIndex + 1) % questions.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused])

  const nextQuestion = () => {
    setCurrentIndex((currentIndex + 1) % questions.length)
  }

  const prevQuestion = () => {
    setCurrentIndex((currentIndex - 1 + questions.length) % questions.length)
  }

  return (
    <div className="text-center">
      <h1 className="page-title">Questions I&apos;m Still Holding</h1>
      
      <div 
        className="card" 
        style={{ margin: '2rem auto', maxWidth: '600px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2>{questions[currentIndex].text}</h2>
        <p>{questions[currentIndex].context}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button 
          className="button" 
          onClick={() => {
            setIsPaused(true)
            prevQuestion()
          }} 
          style={{ marginRight: '1rem' }}
        >
          Previous
        </button>
        <button 
          className="button" 
          onClick={() => {
            setIsPaused(true)
            nextQuestion()
          }}
        >
          Next
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {questions.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#5B7B63' : '#D5E0EA',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={() => {
              setIsPaused(true)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
