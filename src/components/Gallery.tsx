import Image from 'next/image'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=85', alt: 'Coffee brewing pour over' },
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=85', alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85', alt: 'Café interior' },
  { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=85', alt: 'Barista at work' },
  { src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=85', alt: 'Coffee and pastry' },
  { src: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800&q=85', alt: 'Espresso extraction' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-header reveal">
        <div className="s-label">Our Space</div>
        <h2 className="s-title" style={{ marginTop: '.5rem' }}>Life Inside <em>UH Café</em></h2>
      </div>
      <div className="gallery-track">
        {IMAGES.map((img, i) => (
          <div key={i} className="gallery-item">
            <Image src={img.src} alt={img.alt} fill unoptimized style={{ objectFit: 'cover' }} />
            <div className="gallery-glow" />
          </div>
        ))}
      </div>
    </section>
  )
}
