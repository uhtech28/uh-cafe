'use client'
import { useEffect, useRef, useState } from 'react'

export function showToast(msg: string) {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('uh-cafe-toast', { detail: msg }))
}

export default function Toast() {
  const [msg, setMsg] = useState('')
  const [vis, setVis] = useState(false)
  const t = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    const h = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail)
      setVis(true)
      if (t.current) clearTimeout(t.current)
      t.current = setTimeout(() => setVis(false), 3000)
    }
    window.addEventListener('uh-cafe-toast', h)
    return () => window.removeEventListener('uh-cafe-toast', h)
  }, [])
  return <div id="toast" className={vis ? 'show' : ''}>☕ {msg}</div>
}
