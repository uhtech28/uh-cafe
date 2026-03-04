'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('cafe-cursor')
    const ring = document.getElementById('cafe-cursor-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const loop = () => {
      rx += (mx - rx) * 0.08; ry += (my - ry) * 0.08
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    setTimeout(() => {
      document.querySelectorAll('a, button, .drink-card, .gallery-item, .menu-item, .review-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expanded'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expanded'))
      })
    }, 600)

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="cafe-cursor" />
      <div id="cafe-cursor-ring" />
    </>
  )
}
