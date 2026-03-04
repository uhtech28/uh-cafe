import Image from 'next/image'

const PILLARS = [
  { icon: '🫘', title: 'Artisan Beans', desc: 'Single-origin, ethically sourced from the finest estates in Ethiopia, Colombia and India.' },
  { icon: '🔥', title: 'Slow Roasting', desc: 'Every batch roasted in small quantities at precise temperatures to unlock complexity.' },
  { icon: '✋', title: 'Handcrafted Brewing', desc: 'Every cup prepared by a trained barista who cares about every detail of your experience.' },
]

export default function Story() {
  return (
    <section id="story">
      <div className="story-grid">
        <div className="story-img-wrap reveal-left">
          <div className="story-img-frame">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=90"
              alt="Coffee brewing"
              fill unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="story-badge">
            <div className="story-badge-num">12</div>
            <div className="story-badge-text">Years of Craft</div>
          </div>
        </div>
        <div className="story-text-block reveal-right">
          <div className="s-label">Our Philosophy</div>
          <blockquote className="story-quote" style={{ marginTop: '1.2rem' }}>
            "Every Cup Tells a Story."
          </blockquote>
          <div className="gold-divider" />
          <p className="story-body">
            We believe coffee is more than a morning ritual — it&apos;s a meditation, a connection, a moment of clarity. From the first roast to the final pour, every step at UH Café is an act of devotion to the craft.
          </p>
          <div className="story-pillars">
            {PILLARS.map(p => (
              <div key={p.title} className="story-pillar">
                <div className="story-pillar-icon">{p.icon}</div>
                <div className="story-pillar-text">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
