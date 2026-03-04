import Image from 'next/image'

const REVIEWS = [
  {
    stars: 5, name: 'Priya Sharma', location: 'Lucknow',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    text: '"The flat white here is the best I\'ve had outside of Melbourne. The ambience is everything — like stepping into a luxury retreat. I come every single morning."',
  },
  {
    stars: 5, name: 'Arjun Mehta', location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
    text: '"UH Café changed how I think about coffee. The baristas explain every drink with passion. The cold brew is extraordinary — unlike anything I\'ve tasted before."',
  },
  {
    stars: 5, name: 'Nisha Kapoor', location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80',
    text: '"The interior alone is worth visiting. Then you taste the coffee and you never want to leave. I\'ve been to cafés in Paris and Tokyo — this holds its own."',
  },
]

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-inner">
        <div className="reveal">
          <div className="s-label">Voices</div>
          <h2 className="s-title" style={{ marginTop: '.5rem' }}>What Our <em>Guests</em> Say</h2>
          <div className="gold-divider" style={{ marginTop: '1.5rem' }} />
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`review-card reveal reveal-d${Math.min(i + 1, 3)}`}>
              <div className="review-stars">
                {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">
                  <Image src={r.avatar} alt={r.name} width={44} height={44} unoptimized />
                </div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-location">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
