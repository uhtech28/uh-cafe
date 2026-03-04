'use client'
import { useState } from 'react'
import Image from 'next/image'
import { showToast } from './Toast'

interface MenuItem {
  name: string
  desc: string
  price: string
  image: string
  featured?: boolean
}

// IMPORTANT: Place your image files in: /public/images/menu/
// Name them exactly as specified below (lowercase, no spaces)
// Supported formats: .jpg, .png, .webp

const MENU: Record<string, MenuItem[]> = {
  Coffee: [
    { name: 'Espresso', desc: 'Single origin, intense & bold', price: '₹120', image: '/images/menu/espresso.png', featured: false },
    { name: 'Americano', desc: 'Espresso with hot water, clean & strong', price: '₹140', image: '/images/menu/americano.png', featured: false },
    { name: 'Flat White', desc: 'Double ristretto with velvety micro-foam', price: '₹180', image: '/images/menu/flat-white.png', featured: false },
    { name: 'Cappuccino', desc: 'Classic Italian — equal thirds', price: '₹160', image: '/images/menu/cappuccino.png', featured: false },
    { name: 'Latte', desc: 'Espresso with steamed milk', price: '₹175', image: '/images/menu/latte.png', featured: false },
    { name: 'Mocha', desc: 'Dark chocolate meets espresso', price: '₹210', image: '/images/menu/mocha.png', featured: false },
  ],
  Specialty: [
    { name: 'Caramel Latte', desc: 'House caramel, double shot', price: '₹220', image: '/images/menu/caramel-latte.png', featured: true },
    { name: 'Cold Brew', desc: '18-hour steeped, served over ice', price: '₹200', image: '/images/menu/cold-brew.png', featured: false },
    { name: 'Nitro Cold Brew', desc: 'Nitrogen-infused, creamy & smooth', price: '₹240', image: '/images/menu/nitro-cold-brew.png', featured: false },
    { name: 'Matcha Latte', desc: 'Ceremonial grade matcha', price: '₹195', image: '/images/menu/matcha-latte.png', featured: false },
    { name: 'Turmeric Latte', desc: 'Golden milk, anti-inflammatory', price: '₹185', image: '/images/menu/turmeric-latte.png', featured: false },
    { name: 'Rose Cold Brew', desc: 'Cold brew with rose syrup & tonic', price: '₹225', image: '/images/menu/rose-cold-brew.png', featured: true },
  ],
  Desserts: [
    { name: 'Tiramisu', desc: 'Classic Italian, house-made', price: '₹280', image: '/images/menu/tiramisu.png', featured: false },
    { name: 'Almond Croissant', desc: 'Buttery, flaky, twice-baked', price: '₹180', image: '/images/menu/almond-croissant.png', featured: false },
    { name: 'Chocolate Fondant', desc: 'Warm, molten center, served with ice cream', price: '₹320', image: '/images/menu/chocolate-fondant.png', featured: false },
    { name: 'Crème Brûlée', desc: 'Vanilla bean custard, caramelized top', price: '₹260', image: '/images/menu/creme-brulee.png', featured: false },
    { name: 'Banana Bread', desc: 'House-baked, with walnut butter', price: '₹160', image: '/images/menu/banana-bread.png', featured: false },
    { name: 'Opera Cake', desc: 'Coffee & almond layers, French style', price: '₹300', image: '/images/menu/opera-cake.png', featured: true },
  ],
  Breakfast: [
    { name: 'Avocado Toast', desc: 'Sourdough, smashed avocado, poached egg', price: '₹320', image: '/images/menu/avocado-toast.png', featured: false },
    { name: 'Granola Bowl', desc: 'House granola, seasonal fruit, yoghurt', price: '₹260', image: '/images/menu/granola-bowl.png', featured: false },
    { name: 'Eggs Benedict', desc: 'Hollandaise, back bacon, toasted muffin', price: '₹380', image: '/images/menu/eggs-benedict.png', featured: false },
    { name: 'French Toast', desc: 'Brioche, maple syrup, fresh berries', price: '₹290', image: '/images/menu/french-toast.png', featured: false },
    { name: 'Smoked Salmon Bagel', desc: 'Cream cheese, capers, red onion', price: '₹360', image: '/images/menu/smoked-salmon-bagel.png', featured: false },
    { name: 'Full Breakfast', desc: 'Eggs, bacon, toast, beans, roast tomato', price: '₹420', image: '/images/menu/full-breakfast.png', featured: true },
  ],
}

const TABS = Object.keys(MENU)

export default function Menu() {
  const [active, setActive] = useState('Coffee')
  const items = MENU[active]
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  return (
    <section id="menu">
      <div className="menu-inner">
        <div className="reveal">
          <div className="s-label">What We Serve</div>
          <h2 className="s-title" style={{ marginTop: '.5rem', color: 'var(--cream)' }}>
            The <em>Menu</em>
          </h2>
        </div>
        <div className="menu-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`menu-tab${active === tab ? ' active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="menu-grid-professional">
          {items.map((item, i) => (
            <div
              key={item.name}
              className={`menu-item-professional${item.featured ? ' featured' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="menu-item-image-container">
                <div className="menu-item-image-wrapper">
                  {!imageErrors[item.image] ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="menu-item-image"
                        onError={() => handleImageError(item.image)}
                        priority={i < 3}
                      />
                    </>
                  ) : (
                    <div className="menu-item-image-placeholder">
                      <div className="placeholder-content">
                        <div className="placeholder-icon">📸</div>
                        <div className="placeholder-text">Image not found</div>
                        <div className="placeholder-hint">{item.image}</div>
                      </div>
                    </div>
                  )}
                  {item.featured && (
                    <div className="menu-item-badge">⭐ Special</div>
                  )}
                </div>
              </div>
              <div className="menu-item-content">
                <div className="menu-item-info">
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-desc">{item.desc}</div>
                </div>
                <div className="menu-item-footer">
                  <span className="menu-item-price">{item.price}</span>
                  <button
                    className="menu-item-button"
                    onClick={() => showToast(`${item.name} added to cart — ${item.price}`)}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
