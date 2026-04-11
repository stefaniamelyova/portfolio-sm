import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SectionHeader } from '@/components/ui'
import TheProject from '@/components/work/TheProject'
import SplitSection from '@/components/work/SplitSection'
import { PROJECTS, getProject } from '@/lib/projects'

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }))
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <div className="pt-nav">
        <SectionHeader title={project.title} />

        {project.theProject && <TheProject {...project.theProject} />}
        {project.splitSection && <SplitSection {...project.splitSection} />}
        {project.customSection}

      </div>
      <Footer />
    </>
  )
}
