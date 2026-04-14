import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PageHero, CoverCard, StaggerReveal, StaggerItem } from '@/components/ui'
import { PROJECTS } from '@/lib/projects'

const CLIENT_SLUGS = ['owow', 'ontdekfabriek', 'belco', 'waveme', 'reconnect', 'region-fruit']
const projects = CLIENT_SLUGS.map(slug => PROJECTS.find(p => p.slug === slug)!)

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-nav">
        <PageHero title="clients" />
        <main className="max-w-[1440px] mx-auto px-6 md:px-section py-section">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map(project => (
              <StaggerItem key={project.slug}>
                <CoverCard
                  coverSrc={project.cover}
                  tags={project.tags}
                  fit={project.fit}
                  bg={project.bg}
                  href={`/work/${project.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </main>
      </div>
      <Footer />
    </>
  )
}
