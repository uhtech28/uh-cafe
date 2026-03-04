'use client'
import { useEffect, useState } from 'react'
import { showToast } from './Toast'

const LINKS = ['Menu', 'Our Story', 'Gallery', 'Locations']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div id="mobile-drawer" className={open ? 'open' : ''}>
        {LINKS.map(l => <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#" style={{ color: 'var(--gold)' }} onClick={() => setOpen(false)}>Reserve a Table</a>
      </div>

      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">UH <em>Café</em></a>
          <div className="nav-links">
            {LINKS.map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <div className="nav-right">
            <button className="nav-btn" onClick={() => showToast('Table reserved — see you soon!')}>Reserve Table</button>
            <div className="nav-hamburger" onClick={() => setOpen(o => !o)}>
              <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
              <span style={open ? { opacity: 0 } : {}} />
              <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
