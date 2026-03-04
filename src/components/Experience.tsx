import Image from 'next/image'

export default function Experience() {
  return (
    <section id="experience">
      <div className="exp-bg">
        <Image
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1800&q=85"
          alt="Coffee pouring"
          fill unoptimized
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="exp-overlay" />
      <div className="exp-content reveal">
        <blockquote className="exp-quote">
          Coffee Is Not A Drink.
          <span>It&apos;s A Ritual.</span>
        </blockquote>
        <div className="gold-divider" style={{ marginTop: '2rem' }} />
        <div className="exp-sub">UH Café · Est. 2024 · Lucknow, India</div>
      </div>
    </section>
  )
}
