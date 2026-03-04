import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'UH CAFÉ — Crafted Coffee. Perfect Moments.',
  description: 'A luxury café experience. Artisan beans, slow roasting, handcrafted brewing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
