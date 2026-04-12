'use client'
import { useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'projects',   href: '/#projects' },
  { label: 'about me',   href: '/#about' },
  { label: 'experience', href: '/#experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-nav border-b border-dark uppercase bg-bg/85 backdrop-blur-[10px]">
      <div className="flex items-center h-full px-6 md:px-nav-pad max-w-[1440px] mx-auto">
        <Link href="/" className="text-nav-brand text-dark tracking-tight">
          stefania
        </Link>

        {/* Desktop links */}
        <div className="ml-auto hidden md:flex items-center gap-12">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-nav-link text-dark hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-dark transition-transform origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[2px] w-6 bg-dark transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-dark transition-transform origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-b border-dark px-6 py-6 flex flex-col gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-nav-link text-dark"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
