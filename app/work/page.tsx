import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PageHero, CoverCard } from '@/components/ui'
import { PROJECTS } from '@/lib/projects'

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <div className="pt-nav">
        <PageHero title="work" />
        <main className="max-w-[1440px] mx-auto px-6 md:px-section py-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project, i) => (
              <div
                key={project.slug}
                className={`flex flex-col gap-3${i === 0 ? ' lg:col-span-2' : ''}`}
              >
                <p className="text-subheading text-dark uppercase leading-none">{project.title}</p>
                <CoverCard
                  coverSrc={project.cover}
                  tags={project.tags}
                  fit={project.fit}
                  bg={project.bg}
                  href={`/work/${project.slug}`}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
