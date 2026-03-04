'use client'
import { showToast } from './Toast'

export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter-glow" />
      <div className="newsletter-inner reveal">
        <div className="newsletter-icon">☕</div>
        <h2 className="nl-title">Join The <em>Coffee Lovers</em> Club</h2>
        <p className="nl-sub">
          Early access to new blends, exclusive tasting events, and members-only discounts — delivered to your inbox.
        </p>
        <div className="nl-form">
          <input className="nl-input" type="email" placeholder="your@email.com" />
          <button className="nl-submit" onClick={() => showToast("Welcome to the club! First brew's on us.")}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
