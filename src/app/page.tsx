import Cursor from '@/components/Cursor'
import Toast from '@/components/Toast'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Drinks from '@/components/Drinks'
import Story from '@/components/Story'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Experience from '@/components/Experience'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <Toast />
      <Navbar />
      <main>
        <Hero />
        <Drinks />
        <Story />
        <Menu />
        <Gallery />
        <Experience />
        <Reviews />
        <Location />
        <Newsletter />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
