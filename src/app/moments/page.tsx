'use client'

import { useState } from 'react'
import Image from 'next/image'

type Moment = {
  date: string
  title: string
  description: string
  imagePath?: string
}

const moments: Moment[] = [
  {
    date: '2024-06-17',
    title: 'Trip to Sand Dunes with Older Brother',
    description: "I don't get to see my brother very often, but when I last saw him, we went to the sand dunes with our childhood puppy, who is now pretty old, but was still able to make it up with us. Standing at the top, I just saw how endless the sand was and the mountains of sand as far as you could see. My relationship with my brother has been very hard in my life, but this moment really allowed me to connect with him and share a special bond.",
    imagePath: '/images/moments/Sand.png'
  },
  {
    date: '2024-07-14',
    title: 'Flying a Kite',
    description: 'I visited San Fransisco for the first time and ended up wandering around the coast alone where I bumped into a stranger who taught me how to fly his professional kite. It had been many years since I flew a kite and it brought me back to my childhood while also showing me how human interaction and kindness can lead to such unexpected experiences',
    imagePath: '/images/moments/kite.png'
  },
  {
    date: '2024-08-17',
    title: 'Unfindable Couch',
    description: 'While move in, our suitemates were able to turn a strenous task into an unforgettable memory and a fun start to the year. This is one of the few moments where no one had any work and we all just came together to find pure happiness in each others company, even if that meant needing to help carry a couch down 4 flights of stairs and across multiple streets.',
    imagePath: '/images/moments/couch.png'
  },
  {
    date: '2024-05-25',
    title: 'The Gorge',
    description: 'A split second decision to say bye to a coworker before the weekend led to an invitation and spontaneous agreement to go to my first concert. I was very nervous to do this as I was not super close with this coworker at the time, but it was the highlight of my internship for sure. This trip truly widened my view on life not just through the music, but the entire experience and conversations with my coworkers throughout it.',
    imagePath: '/images/moments/concert.png'
  },
  {
    date: '2024-06-08',
    title: 'Late work night',
    description: 'Walking out of the office of my work place at 11pm, I felt super tired from working all day. As I looked around at the empty parking lot and the night sky, I felt super rewarded and lucky for my position to be able to do what I love and feel accomplished no matter how small my contribution was as an intern, it melted away all my tiredness and filled me with happiness.',
    imagePath: '/images/moments/work.png'
  },
  {
    date: '2024-05-25',
    title: 'Beautiful Night Sky',
    description: 'While talking to my coworkers after the concert, I looked up at the night sky. It was the most clear night sky I had ever seen. I truly felt so small in the universe and the beauty and unlikeliness of our existence. This moment captured my answer to our place in the universe as humans - we are so small like specs of dust, yet we can still create and appreciate such beautiful things in life.',
    imagePath: '/images/moments/stars.png'
  },
  {
    date: '2022-10-15',
    title: 'College Vibes',
    description: 'I love this picture. It was taken on a digital camera that I had gotten as a gift for my girlfriend at the time. I was testing to see the quality, and it captured what I believe to contain the vibe of what most of my college experience felt like. From my best friend - to the messy background beanbags and chairs - to the football - to the ipad - to the treasure chest. All of these have such deep meanings to me.',
    imagePath: '/images/moments/college.JPG'
  },
  {
    date: '2024-08-01',
    title: 'Ski Trip',
    description: "This trip was the first time I went skiing. I had never experinced adrenalin like skiing at 40 mph down a giant mountain, but it was the best combination of fear and excitement. I think in life you need to go for it sometimes and it might be a little dangerous but as long as you have the support from the right people like I did, things will work out and if they don't at least you will have a cool story to tell",
    imagePath: '/images/moments/ski.png'
  },

]

export default function Moments() {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null)

  return (
    <div>
      <h1 className="page-title">Moments That Made Me Pause</h1>
      <div className="grid">
        {moments.map((moment) => (
          <div 
            key={moment.title} 
            className="card"
            onClick={() => setSelectedMoment(moment)}
            style={{ cursor: 'pointer' }}
          >
            <div className="moment-image">
              {moment.imagePath ? (
                <Image
                  src={moment.imagePath}
                  alt={moment.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              ) : (
                <div className="moment-placeholder">
                  <span className="text-2xl">📸</span>
                </div>
              )}
            </div>
            <div className="date">{moment.date}</div>
            <h2>{moment.title}</h2>
            <p>{moment.description}</p>
          </div>
        ))}
      </div>

      {selectedMoment && (
        <div className="modal" onClick={() => setSelectedMoment(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMoment(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="moment-image-large">
              {selectedMoment.imagePath && (
                <Image
                  src={selectedMoment.imagePath}
                  alt={selectedMoment.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              )}
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2">{selectedMoment.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{selectedMoment.date}</p>
            <p className="text-gray-700">{selectedMoment.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
