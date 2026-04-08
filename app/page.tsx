import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import FullWidthBorder from '@/components/ui/FullWidthBorder'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-nav max-w-[1440px] mx-auto">
        <div className="relative">
          <Hero />
          <FullWidthBorder side="bottom" />
        </div>
        <LogoStrip />
        <Projects />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
