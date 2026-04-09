import { SectionHeader, Badge, Tag, ColHeader } from './ui'
import { HERO_IMAGES } from '@/lib/assets'

// ── Job card (light bg) ───────────────────────────────────────────────────────

interface JobCardProps {
  date: string
  company?: string
  role: string
  title: string
  location: string
  bullets: string[]
}

function JobCard({ date, company, role, title, location, bullets }: JobCardProps) {
  return (
    <div className="border border-dark p-3">
      <div className="flex flex-wrap gap-2 mb-2">
        <Badge variant="date">{date}</Badge>
        {company && <Badge variant="company">{company}</Badge>}
      </div>
      <p className="text-label uppercase text-dark mb-1">{role}</p>
      <p className="text-card-title text-dark mb-1">{title}</p>
      <p className="text-label uppercase text-dark mb-3">{location}</p>
      <ul className="list-disc ml-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-label text-dark leading-[15px]">{b}</li>
        ))}
      </ul>
    </div>
  )
}

// ── Education card (dark bg) ─────────────────────────────────────────────────

interface EduCardProps {
  date: string
  title: string
  location: string
  bullets: string[]
}

function EduCard({ date, title, location, bullets }: EduCardProps) {
  return (
    <div className="bg-dark border border-dark p-4">
      <Badge variant="date">{date}</Badge>
      <p className="text-card-title text-white mt-3 mb-1">{title}</p>
      <p className="text-footer uppercase text-white mb-3">{location}</p>
      <ul className="list-disc ml-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-body-sm text-white">{b}</li>
        ))}
      </ul>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader title="experience" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

        {/* ── Left: Professional Experience ─────────────────────────── */}
        <div className="border-r border-dark px-6 md:px-section py-6 md:py-section flex flex-col gap-6">
          <ColHeader>professional experience</ColHeader>

          <JobCard
            date="May 2024 – July 2025"
            company="Signify N.V. (Former Philips Lighting)"
            role="Intern"
            title="Content creation, UX design and prototyping"
            location="Eindhoven, Netherlands"
            bullets={[
              'Collaborated directly with the Lead UX Designer on interactive app prototypes for internal applications',
              'Created engaging visual assets, including graphics, motion videos, and promotional materials',
              'Gained insight into corporate-level UX and product design workflows',
            ]}
          />

          <JobCard
            date="Jan 2026 – Present"
            company="Revolution NB Ltd."
            role="Marketing Specialist"
            title="Digital campaigns with a focus on user engagement and content performance"
            location="Remote | Sofia, Bulgaria"
            bullets={[
              'Designed visual assets and landing page concepts, applying principles of hierarchy, usability, and brand consistency',
              'Analyzed user behavior and campaign data (e.g. CTR, engagement) to optimize content and improve conversion outcomes',
              'Gained hands-on experience in data-driven design decisions and user-centered digital communication',
            ]}
          />

          <JobCard
            date="Jan 2023 – Present"
            role="Freelance Designer"
            title="Web and app design, brand identity, logo design and branding"
            location="Remote"
            bullets={[
              'Designed cohesive brand identities for companies including NB Limited, Reconnect Bulgaria and Region Fruit',
              'Delivered visual systems, logo design, typography, and social media guidelines',
              'Managed the entire design process independently — from concept to delivery',
            ]}
          />

          <JobCard
            date="Sep 2024 – Present"
            company="Fontys UAS"
            role="Academic and client experience"
            title="Frontend and Mobile App Development, UI/UX, Web and App Design"
            location="Eindhoven, Netherlands"
            bullets={[
              'Worked on real-world projects for clients such as Belco Alliance (non-profit university network) and OWOW (software company)',
              'Designed and developed fully functional web platforms using Next.js, Tailwind CSS.',
              'Applied advanced technical and creative problem-solving to deliver scalable, user-centered outcomes',
            ]}
          />
        </div>

        {/* ── Middle: Expertise / Hard Skills / Soft Skills ──────────── */}
        <div className="border-r border-dark px-6 md:px-section lg:px-8 py-6 md:py-section flex flex-col gap-6">
          <ColHeader>expertise</ColHeader>

          <div className="bg-accent border border-dark p-3">
            <p className="text-card-title text-muted">
              Web design, app design, logo design, brand identity, packaging design,
              poster &amp; editorial, social media post, beginner 3D design
            </p>
          </div>

          <ColHeader>hard skills</ColHeader>

          <div className="bg-accent border border-dark relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGES.baroqueWoman}
              alt=""
              className="w-full block pointer-events-none select-none transform-[scaleX(-1)] brightness-0 invert opacity-[0.92] -mb-[72px]"
            />
            <div className="flex flex-wrap gap-2 p-4 relative z-10">
              {['figma', 'adobe premier pro', 'tailwind css', 'flutter', 'three.js', 'react', 'next.js', 'css', 'canva', 'blender']
                .map((skill, i) => (
                  <Tag key={skill} label={skill} dark={i % 2 === 1} />
                ))}
            </div>
          </div>

          <ColHeader>soft skills</ColHeader>

          <div className="bg-accent border border-dark p-4">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'user centered thinking', dark: false },
                { label: 'problem solving',         dark: true  },
                { label: 'communication',            dark: true  },
                { label: 'fast learning',            dark: false },
                { label: 'attention to detail',      dark: false },
                { label: 'collaboration',            dark: true  },
                { label: 'initiative',               dark: true  },
              ].map(({ label, dark }) => (
                <Tag key={label} label={label} dark={dark} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Education ──────────────────────────────────────── */}
        <div className="px-6 md:px-section lg:px-8 py-6 md:py-section flex flex-col gap-6">
          <ColHeader>education</ColHeader>

          <EduCard
            date="2024 – Present"
            title="Bachelor of Science in ICT — Fontys UAS"
            location="Eindhoven, Netherlands"
            bullets={[
              'Specialization in Frontend and Mobile App Development',
              'Developing projects in Next.js, Tailwind CSS, Three.js and Flutter',
              'Designing in Figma, Adobe Creative Suite, and Blender',
            ]}
          />

          <EduCard
            date="2023 – 2024"
            title="Bachelor of Design in Graphic Design — École de Condé"
            location="Nice, France"
            bullets={[
              'Coursework focused on design thinking, visual communication, and creative strategy',
              'Strengthened artistic direction and conceptual development skills',
            ]}
          />

          <EduCard
            date="2018 – 2023"
            title={'High School Diploma — 35th "Dobri Voinikov" Language School'}
            location="Sofia, Bulgaria"
            bullets={[
              'Obtained DALF C1 certification in French and studied Russian',
              'Served on the Student Council',
              'Developed strong linguistic, analytical, and interpersonal skills',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
