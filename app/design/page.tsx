import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PageHero, CoverCard } from '@/components/ui'
import { PROJECTS } from '@/lib/projects'

const DESIGN_SLUGS = ['bazinga', 'frutella', 'waveme', 'nb-limited', 'owow', 'belco', 'region-fruit']
const projects = DESIGN_SLUGS.map(slug => PROJECTS.find(p => p.slug === slug)!)

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <div className="pt-nav">
        <PageHero title="design" />
        <main className="max-w-[1440px] mx-auto px-6 md:px-section py-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map(project => (
              <CoverCard
                key={project.slug}
                coverSrc={project.cover}
                tags={project.tags}
                fit={project.fit}
                bg={project.bg}
                href={`/work/${project.slug}`}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
