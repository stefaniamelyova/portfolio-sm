import Link from 'next/link'
import { SectionHeader } from './ui'
import { PROJECT_CARD_IMAGES } from '@/lib/assets'

// ── Project card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  title: string
  description: string
  href: string
  coverSrc: string
  decorSrc: string
}

function ProjectCard({ title, description, href, coverSrc, decorSrc }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col h-full border border-dark overflow-hidden group"
    >
      {/* Title bar */}
      <div className="border-b border-dark flex items-center px-4 md:px-6 h-[64px]">
        <h3 className="text-subheading text-dark uppercase leading-[35px] whitespace-nowrap">
          {title}
        </h3>
      </div>

      {/* Cover image */}
      <div className="overflow-hidden h-[260px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          draggable={false}
        />
      </div>

      {/* Description area — grows to fill remaining card height */}
      <div className="bg-dark flex flex-1">

        {/* Text */}
        <div className="flex-1 p-5 pr-2">
          <p className="text-body-sm text-white">
            {description}
          </p>
        </div>

        {/* Decoration + CTA — hidden on mobile, visible from sm up */}
        <div className="flex flex-col justify-between flex-none w-[130px]">
          {/* Decorative illustration */}
          <div className="flex-1 flex items-center justify-center overflow-hidden p-2 bg-white border-b border-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={decorSrc}
              alt=""
              className="w-[95px] h-[105px] object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* CHECK IT OUT button */}
          <div className="bg-accent flex items-center justify-center h-[88px]">
            <p className="text-nav-link text-white uppercase text-center leading-[22px]">
              check<br />it out
            </p>
          </div>
        </div>

      </div>
    </Link>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader title="projects" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 px-6 md:px-section py-section">
        <ProjectCard
          title="work with clients"
          href="/clients"
          coverSrc={PROJECT_CARD_IMAGES.clientsCover}
          decorSrc={PROJECT_CARD_IMAGES.raspberry}
          description="During my studies at Fontys UAS, my extracurricular projects, work experience and personal leadership, I had the opportunity of working on real client projects in small to medium companies in Europe. During the work I acquired valuable skills in both my technical and professional skills."
        />

        <ProjectCard
          title="design"
          href="/design"
          coverSrc={PROJECT_CARD_IMAGES.designCover}
          decorSrc={PROJECT_CARD_IMAGES.strawberry}
          description="For the past 4 years I have been practicing, developing and applying my design skills in every field possible. As one of my greatest passions, I have acquired skills such as web and app design, interactive prototyping, responsive screen design, etc. I have also developed my research skills, which go alongside my designs."
        />

        <ProjectCard
          title="development"
          href="/development"
          coverSrc={PROJECT_CARD_IMAGES.devCover}
          decorSrc={PROJECT_CARD_IMAGES.raspberry}
          description="For the past 2 years, through my ICT studies at Fontys, I have been learning and applying my development skills. I have used Next.js, Tailwind CSS, Flutter, HTML, CSS, and a bit of Three.js, deployed projects on Vercel, and worked with Git, GitHub, and GitLab."
        />
      </div>
    </section>
  )
}
