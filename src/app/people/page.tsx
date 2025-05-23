'use client'

import { useState } from 'react'
import Image from 'next/image'

type Person = {
  name: string
  relationship: string
  influence: string
  quote: string
}

type Connection = {
  name: string
  category: string
  influence: string
  description: string
}

const people: Person[] = [
  {
    name: 'Jack Moffatt',
    relationship: 'Friend, Suitemate',
    influence: 'Made me feel welcomed and authentic while having the most fun possible.',
    quote: 'Jack has always been my rock at Yale. The person I can always turn to for anything - the reason I have not felt alone at Yale. We have shared the most time together and I feel the most grateful to be put in a suite with him freshman year.'
  },
  {
    name: 'Joshua Baehring',
    relationship: 'Friend',
    influence: 'Taught me to think depper about the choices I make.',
    quote: 'Josh came into my life recently but quickly became a very close friend. He has inspired me to become very much more thoughtful in my actions and learn to question and defend my choices.'
  },
  {
    name: 'Luke Baltay',
    relationship: 'Friend, Roomate',
    influence: 'Always been there for me and inspired me to be a better person.',
    quote: 'Luke and I have bonded over the growth of our relationships and as students, roomates, and humans while also thinking of creative ways to have the best days and nights. He has inspired me to appreciate history, music, and art.'
  },
  {
    name: 'Serena',
    relationship: 'Friend',
    influence: 'Been my closest friend, inspired me to care more deeply for others and shaped almost every part of my thoughts, mannerisms, values, and goals.',
    quote: 'Serena knows the most about me, who I am, and how I think. She has always been there with me through the good and bad, and although our relationship came to an end, I will always be grateful for our time together and the experiences we shared during a very special time of my life. I have grown to respect and honor her values and morals. I ask myself what would Serena do? She has shaped me thus far, and will continue to shape my decisions in the future. This is what I want most.'
  },
  {
    name: 'Andy',
    relationship: 'Childhood Best Friend',
    influence: "Learned how the world worked together while shaping each other's humor, curiosity, passions, and values in life.",
    quote: "Andy was my closest friend from my hometown in Memphis. We spent nearly every summer playing games when we were not supposed to, making fun of each other, and making memories that give me nostalgic feelings today. Although we don't speak as much now, when we do, it brings me right back from where we left off."
  },
  {
    name: 'Adrian',
    relationship: 'Mentor',
    influence: "Taught me the difficulty of creating something of true value. Willing to give me a chance to showcase my talent and learn from him.",
    quote: "Adrian really took the time to make sure I succeeded in my first internship and industry experience. He never made me feel judged or wrong for asking questions and went out of the way to teach me things that actually mattered. He made me realize the importance of having someone who truly cares for you and wants you to succeed."
  },
  {
    name: 'Suitemates',
    relationship: 'Jack, Luke, Will, Jem',
    influence: "Gave me a community to call my home and a group of people that I could talk to and feel safe around",
    quote: "I feel very lucky to have suitemates all four years of college. Starting in freshman year in a suite of 10 people, I have always felt very fortunate to be placed in my residential college JE and grown super close with the people that I live with and spend the most time with."
  },
  {
    name: 'Rumman and Wendy',
    relationship: 'Friends',
    influence: "Inpsire me to be a better person in my community.",
    quote: "Rumman and Wendy are some of the best humans I know. They inspire me to be a better person and make better choices in life. Their accomplishments within the community and academically give me so much happiness and inspiration, and their positivity never fails to leave me happier than before I interact with them. No time spent with them is a waste."
  },
  {
    name: 'Mom',
    relationship: 'Family',
    influence: 'Never failed to make me feel like I am loved and the most important thing in her life.',
    quote: 'My mom has and always will be the most important person in my life. Having given up undescribable amounts of her own life to raise and shape me into who I am today, I will always owe everything in my life to her. She has been my biggest support and inspiration in life.'
  },
]

const connections: Connection[] = [
  {
    name: 'Music',
    category: 'Art & Culture',
    influence: 'Music to me brings meaning to life and allows me to feel my emotions more deeply. Here is a playlist that I created recently that I listened to while reading The Republic by Plato in the JE courtyard on a sunny day: https://open.spotify.com/playlist/3O2QyBEjXAkqRnCioaBDao?si=c7a164b04f934342',
    description: '"You came to me to learn the pleasure of life and the pleasure of art. Perhaps I am chosen to teach you something much more wonderful - the meaning of sorrow and its beauty." - Oscar Wilde'
  },
  {
    name: 'Nature',
    category: 'Environment & Architecture',
    influence: "Grounds me and reminds me of the beauty in simplicity. Nature gives me so much more hope and things to look forward to experiencing and in a way it allows me to reflect on my place in the world and the connections I have with God's creation.",
    description: 'Whether it\'s hiking in the mountains or sitting by the ocean, nature has always been my escape and source of peace. It reminds me to slow down and appreciate the world around me. One of the most best parts of my Yale experience has been the beautiful architecture and scenery I am blessed with everyday.'
  },
  {
    name: 'Food',
    category: 'Culture & Experience',
    influence: 'Food brings me happiness and connects me with my culture and family.',
    description: "One of my favorite memories as a child was making dumplings with my family at the table. We didn't have much, but we were able to come together and spend quality time together and eat delicious food. I miss that a lot today, and as I cook for myself, I realize how much I appreciated my parents for cooking for me when I was young. It grounds me and allows me to realize my place on Earth and how hard it is to just survive as humans."
  }
]

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null)

  const getPersonImage = (name: string) => {
    const firstName = name.split(' ')[0]
    try {
      return `/images/people/${firstName}.JPG`
    } catch {
      return null
    }
  }

  return (
    <div>
      <section className="mb-12">
        <h1 className="page-title">People Who've Shaped Me</h1>
        <div className="grid">
          {people.map((person) => (
            <div
              key={person.name}
              className="card"
              onClick={() => setSelectedPerson(person)}
              style={{ cursor: 'pointer' }}
            >
              <div className="person-image">
                {getPersonImage(person.name) ? (
                  <Image
                    src={getPersonImage(person.name)!}
                    alt={person.name}
                    width={100}
                    height={100}
                    className="rounded-image"
                  />
                ) : (
                  <div className="person-initial">
                    <span className="text-2xl font-serif text-accent">{person.name[0]}</span>
                  </div>
                )}
              </div>
              <h2 className="text-xl font-serif text-primary mb-2">{person.name}</h2>
              <p className="text-sm text-gray-500">{person.relationship}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="page-title">Connections to Other Things in Life</h1>
        <div className="grid">
          {connections.map((connection) => (
            <div
              key={connection.name}
              className="card"
              onClick={() => setSelectedConnection(connection)}
              style={{ cursor: 'pointer' }}
            >
              <div className="person-image">
                {connection.name === 'Music' ? (
                  <Image
                    src="/images/people/Amelie.JPG"
                    alt="Music"
                    width={100}
                    height={100}
                    className="rounded-image"
                  />
                ) : connection.name === 'Nature' ? (
                  <Image
                    src="/images/people/nature.JPG"
                    alt="Nature"
                    width={100}
                    height={100}
                    className="rounded-image"
                  />
                ) : connection.name === 'Food' ? (
                  <Image
                    src="/images/people/Food.JPG"
                    alt="Food"
                    width={100}
                    height={100}
                    className="rounded-image"
                  />
                ) : (
                  <div className="connection-icon">
                    <span className="text-2xl">{getConnectionEmoji(connection.name)}</span>
                  </div>
                )}
              </div>
              <h2 className="text-xl font-serif text-primary mb-2">{connection.name}</h2>
              <p className="text-sm text-gray-500">{connection.category}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedPerson && (
        <div className="modal" onClick={() => setSelectedPerson(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPerson(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="text-2xl font-serif text-primary mb-4">{selectedPerson.name}</h3>
            <p className="text-gray-700 mb-4">{selectedPerson.influence}</p>
            <p className="italic text-gray-600 text-center">"{selectedPerson.quote}"</p>
          </div>
        </div>
      )}

      {selectedConnection && (
        <div className="modal" onClick={() => setSelectedConnection(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedConnection(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="text-2xl font-serif text-primary mb-4">{selectedConnection.name}</h3>
            <p className="text-gray-700 mb-4">
              {selectedConnection.name === 'Music' ? (
                <>
                  Music to me brings meaning to life and allows me to feel my emotions more deeply. Here is a playlist that I created recently that I listened to while reading The Republic by Plato in the JE courtyard on a sunny day:{' '}
                  <a 
                    href="https://open.spotify.com/playlist/3O2QyBEjXAkqRnCioaBDao?si=c7a164b04f934342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dusty-blue hover:text-forest-green underline"
                  >
                    View Playlist
                  </a>
                </>
              ) : (
                selectedConnection.influence
              )}
            </p>
            <p className="italic text-gray-600 text-center">{selectedConnection.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function getConnectionEmoji(name: string): string {
  const emojiMap: { [key: string]: string } = {
    'Music': '🎵',
    'Nature': '🌿',
    'Food': '🍜',
  }
  return emojiMap[name] || '✨'
}
