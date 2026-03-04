'use client'
import Image from 'next/image'
import { showToast } from './Toast'
import { useState, useRef } from 'react'

const DRINKS = [
  { name: 'Espresso', desc: 'Single origin, dark roast. Intense and bold with a golden crema.', price: '₹120', tag: 'Signature', img: '/images/menu/espresso.png' },
  { name: 'Flat White', desc: 'Velvety micro-foam milk over a double ristretto shot. Silky smooth.', price: '₹180', tag: 'Bestseller', img: '/images/menu/flat-white.png' },
  { name: 'Cappuccino', desc: 'One-third espresso, one-third steamed milk, one-third foam. Perfection.', price: '₹160', tag: 'Classic', img: '/images/menu/cappuccino.png' },
  { name: 'Caramel Latte', desc: 'House-made caramel sauce swirled into our signature latte. Indulgent.', price: '₹220', tag: 'Indulgent', img: '/images/menu/latte.png' },
  { name: 'Cold Brew', desc: 'Steeped 18 hours in cold water. Smooth, low-acid, deeply complex.', price: '₹200', tag: 'Cold', img: '/images/menu/mocha.png' },
  { name: 'Americano', desc: 'Espresso with hot water, clean & strong. Timeless classic.', price: '₹140', tag: 'Essential', img: '/images/menu/americano.png' },
]

export default function Drinks() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
      
      setTimeout(checkScroll, 500)
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section id="drinks">
      <div className="drinks-header reveal">
        <div className="s-label">Signature Beverages</div>
        <h2 className="s-title" style={{ marginTop: '.5rem' }}>Our <em>Finest</em> Offerings</h2>
        <div className="gold-divider" style={{ marginTop: '1.5rem' }} />
      </div>
      
      <div className="drinks-carousel-wrapper">
        {canScrollLeft && (
          <button className="carousel-arrow carousel-arrow-left" onClick={() => scroll('left')}>
            ‹
          </button>
        )}
        
        <div className="drinks-carousel" ref={scrollContainerRef} onScroll={checkScroll}>
          {DRINKS.map((d, i) => (
            <div key={d.name} className="drink-slide">
              <div className="drink-img">
                <span className="drink-tag">{d.tag}</span>
                {!imageErrors[d.img] ? (
                  <Image 
                    src={d.img} 
                    alt={d.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    onError={() => handleImageError(d.img)}
                    priority={i < 3}
                  />
                ) : (
                  <div className="drink-img-placeholder">
                    <div className="placeholder-icon">📸</div>
                    <div className="placeholder-text">Image not found</div>
                  </div>
                )}
                <div className="drink-steam" />
              </div>
              <div className="drink-info">
                <div className="drink-name">{d.name}</div>
                <div className="drink-desc">{d.desc}</div>
                <div className="drink-bottom">
                  <span className="drink-price">{d.price}</span>
                  <button className="drink-add" onClick={() => showToast(`${d.name} added to order`)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {canScrollRight && (
          <button className="carousel-arrow carousel-arrow-right" onClick={() => scroll('right')}>
            ›
          </button>
        )}
      </div>
    </section>
  )
}
