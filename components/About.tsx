import Link from 'next/link'
import { ABOUT_IMAGES } from '@/lib/assets'
import { SectionHeader, ColHeader } from './ui'

const contacts = [
  {
    label: 'stefania.melyova@gmail.com',
    href: 'mailto:stefania.melyova@gmail.com',
    bg: 'bg-dark',
    icon: ABOUT_IMAGES.emailIcon,
  },
  {
    label: 'linkedin.com/stefania-melyova',
    href: 'https://linkedin.com/in/stefania-melyova',
    icon: ABOUT_IMAGES.linkedinIcon,
    bg: 'bg-accent',
  },
  {
    label: 'github.com/stefaniamelyova',
    href: 'https://github.com/stefaniamelyova',
    icon: ABOUT_IMAGES.githubIcon,
    bg: 'bg-dark',
  },
  {
    label: 'behance.net/stefaniamelyova',
    href: 'https://www.behance.net/stefaniamelyova',
    icon: ABOUT_IMAGES.behanceIcon,
    bg: 'bg-accent',
  },
]

export default function About() {
  return (
    <section id="about">
      <SectionHeader title="about me" />

      {/*
        Bio + portrait grid.
        3 children: [bio] [portrait] [get-in-touch]
        Mobile (1-col): stacks bio → portrait → get-in-touch (DOM order)
        Desktop (2-col, 2-row): bio top-left, get-in-touch bottom-left, portrait spans both rows on right
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:grid-rows-[1fr_auto] pt-section">

        {/* Bio box — col 1, row 1 on desktop */}
        <div className="lg:border-r border-dark">
          <div className="border border-dark mx-6 md:mx-section mt-0 mb-8 lg:mb-10 p-6 lg:p-8">
            {/* Lemon floats right so text wraps around it */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ABOUT_IMAGES.lemon}
              alt=""
              className="float-right pointer-events-none select-none w-[130px] md:w-[160px] opacity-85 -mt-2 -mr-2 ml-3 mb-1"
            />
            <p className="text-body text-dark max-w-[480px]">
              Hello, very glad you are here. My name is Stefania Alberto Melyova,
              but you can just call me Stefi. I am a 21 years old media design
              student in The Netherlands and an aspiring web designer / front-end
              developer. I like coffee, vacations, but most importantly – art and
              design. My job is to transform a creative idea into a functional
              design and tailor it to the target audience. Then the magic happens,
              when I make it work in real life. A lot of people can teach
              themselves how to code and design, but very few do it from the heart.
            </p>
          </div>
        </div>

        {/* Portrait — col 2, spans both rows on desktop; appears second on mobile */}
        <div className="lg:row-span-2 border border-dark lg:border-l-0 overflow-hidden mx-6 md:mx-section mt-0 lg:mx-0 lg:mr-section lg:w-[clamp(260px,33vw,460px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ABOUT_IMAGES.portrait}
            alt="Stefania Alberto"
            className="w-full h-full object-cover object-top min-h-[340px]"
          />
        </div>

        {/* Get in touch — col 1, row 2 on desktop; appears third (below portrait) on mobile */}
        <div className="lg:border-r border-dark px-6 md:px-section pt-6 lg:pt-2 pb-0 lg:self-end">
          <ColHeader>get in touch</ColHeader>
          <div className="border-t border-dark mt-3" />
        </div>

      </div>

      {/* Contact cards */}
      <div className="px-6 md:px-section py-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {contacts.map(({ label, href, icon, bg }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`${bg} flex flex-col justify-between px-5 pt-6 pb-4 min-h-[130px]`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon} alt="" className="w-10 h-10 object-contain" />
              <div>
                <div className="border-t border-white/30 mb-2" />
                <p className="text-contact-label text-white text-right truncate">
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
