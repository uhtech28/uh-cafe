'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

// Simple Three.js steam + floating particles — no external model needed
function initThreeScene(canvas: HTMLCanvasElement) {
  // Dynamic import to avoid SSR issues
  import('three').then((THREE) => {
    const W = canvas.clientWidth, H = canvas.clientHeight
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
    camera.position.set(0, 0, 5)

    // Floating coffee bean particles
    const count = 80
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - .5) * 10
      pos[i * 3 + 1] = (Math.random() - .5) * 8
      pos[i * 3 + 2] = (Math.random() - .5) * 4
      vel[i * 3] = (Math.random() - .5) * 0.004
      vel[i * 3 + 1] = Math.random() * 0.004 + 0.002
      vel[i * 3 + 2] = (Math.random() - .5) * 0.003
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: 0xc89b6d, size: 0.06, transparent: true, opacity: 0.5, sizeAttenuation: true })
    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // Steam rings — torus geometry rising upward
    const steamGroup = new THREE.Group()
    for (let i = 0; i < 5; i++) {
      const sg = new THREE.TorusGeometry(0.15 + i * 0.06, 0.015, 8, 32)
      const sm = new THREE.MeshBasicMaterial({ color: 0xf5ede3, transparent: true, opacity: 0.08 - i * 0.01 })
      const s = new THREE.Mesh(sg, sm)
      s.position.set(0, i * 0.4, 0)
      s.userData.offset = i
      steamGroup.add(s)
    }
    steamGroup.position.set(0, 0.5, 0)
    scene.add(steamGroup)

    let frame = 0
    const animate = () => {
      requestAnimationFrame(animate)
      frame++
      const t = frame * 0.01

      // Animate particles
      const positions = geo.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3] += vel[i * 3]
        positions[i * 3 + 1] += vel[i * 3 + 1]
        positions[i * 3 + 2] += vel[i * 3 + 2]
        if (positions[i * 3 + 1] > 4.5) { positions[i * 3 + 1] = -4.5 }
        if (Math.abs(positions[i * 3]) > 5.5) { vel[i * 3] *= -1 }
      }
      geo.attributes.position.needsUpdate = true

      // Animate steam
      steamGroup.children.forEach((s, idx) => {
        s.position.y = Math.sin(t * 0.8 + idx) * 0.08 + idx * 0.42
        ;(s as THREE.Mesh).rotation.z = t * 0.3 + idx
        ;((s as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.04 + Math.abs(Math.sin(t + idx)) * 0.06
      })

      particles.rotation.y = t * 0.05
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const W2 = canvas.clientWidth, H2 = canvas.clientHeight
      camera.aspect = W2 / H2; camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); renderer.dispose() }
  })
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (canvasRef.current) initThreeScene(canvasRef.current)
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=90&auto=format&fit=crop"
          alt="Luxury café interior"
          fill priority unoptimized
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-vignette" />
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="hero-content">
        <div className="hero-label">Est. 2024 · Lucknow, India</div>
        <h1 className="hero-title">
          UH
          <em>Café</em>
        </h1>
        <p className="hero-subtitle">Crafted Coffee. Perfect Moments.</p>
        <div className="hero-actions">
          <a href="#menu" className="btn-gold">Explore Menu</a>
          <a href="#drinks" className="btn-outline-cream">Order Coffee</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll to Explore
      </div>
    </section>
  )
}
