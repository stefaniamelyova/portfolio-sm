import Link from 'next/link'
import { FOOTER_IMAGES } from '@/lib/assets'

export default function Footer() {
  return (
    <footer className="bg-accent border-t border-dark">
      <div className="px-6 md:px-section py-section flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">

        {/*
          Mobile: nav text left, image top-right — flex row wrapper.
          Desktop: md:contents dissolves the wrapper so children participate
          in the parent flex row directly; image uses md:order-first to move left.
        */}
        <div className="w-full flex items-start justify-between md:contents">

          {/* Nav column */}
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-footer uppercase text-light-purple">
              Copyright © Stefania Melyova
            </p>
            <div className="flex flex-col gap-1 mt-1">
              {['about', 'experience', 'projects'].map(link => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-footer uppercase text-light-purple hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative illustration — top-right on mobile, leftmost on desktop */}
          <div className="flex-none md:order-first">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FOOTER_IMAGES.raspberry}
              alt=""
              className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain pointer-events-none select-none opacity-85"
              draggable={false}
            />
          </div>

        </div>

        {/* Contact column */}
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-footer uppercase text-light-purple">
            Contact
          </p>
          <div className="flex flex-col gap-1 mt-1">
            {[
              { label: 'stefania.melyova@gmail.com',    href: 'mailto:stefania.melyova@gmail.com' },
              { label: 'linkedin.com/stefania-melyova', href: 'https://linkedin.com/in/stefania-melyova' },
              { label: 'github.com/stefaniamelyova',    href: 'https://github.com/stefaniamelyova' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-footer uppercase text-light-purple hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
