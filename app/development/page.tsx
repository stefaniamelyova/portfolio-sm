import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PageHero, CoverCard } from '@/components/ui'
import { PROJECTS } from '@/lib/projects'

const DEV_SLUGS = ['owow', 'ontdekfabriek', 'belco', 'bazinga']
const projects = DEV_SLUGS.map(slug => PROJECTS.find(p => p.slug === slug)!)

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <div className="pt-nav">
        <PageHero title="development" />
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
