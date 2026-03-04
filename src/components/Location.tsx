'use client'
import { showToast } from './Toast'

const HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
]

export default function Location() {
  return (
    <section id="location">
      <div className="location-inner">
        <div className="reveal-left">
          <div className="s-label">Find Us</div>
          <h2 className="s-title" style={{ marginTop: '.5rem', marginBottom: '2.5rem' }}>
            Visit <em>UH Café</em>
          </h2>
          <div className="location-map">
            <div className="location-map-pin">📍</div>
          </div>
        </div>
        <div className="reveal-right">
          <div className="location-address">
            <h4>Address</h4>
            <p>12, Hazratganj Market<br />Lucknow, Uttar Pradesh 226001<br />India</p>
          </div>
          <div className="location-hours" style={{ marginTop: '2rem' }}>
            <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: '.68rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.8rem' }}>
              Opening Hours
            </h4>
            {HOURS.map(h => (
              <div key={h.day} className="location-hours-row">
                <span className="day">{h.day}</span>
                <span className="time">{h.time}</span>
              </div>
            ))}
          </div>
          <div className="location-btns">
            <button className="btn-gold" onClick={() => showToast('Table reserved! See you soon ☕')}>Reserve Table</button>
            <button className="btn-outline-cream" onClick={() => showToast('Opening Maps...')}>Get Directions</button>
          </div>
        </div>
      </div>
    </section>
  )
}
