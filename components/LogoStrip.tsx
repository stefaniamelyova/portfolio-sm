import { CLIENT_LOGOS } from '@/lib/assets'
import FullWidthBorder from './ui/FullWidthBorder'

const logos = [
  { src: CLIENT_LOGOS.reconnect,   alt: 'Reconnect',    h: 'h-[26px] md:h-[34px]' },
  { src: CLIENT_LOGOS.nbLimited,   alt: 'NB Limited',   h: 'h-[16px] md:h-[20px]' },
  { src: CLIENT_LOGOS.belco,       alt: 'Belco',        h: 'h-[26px] md:h-[34px]' },
  { src: CLIENT_LOGOS.owow,        alt: 'OWOW',         h: 'h-[18px] md:h-[24px]' },
  { src: CLIENT_LOGOS.ontdek,      alt: 'Ontdek',       h: 'h-[40px] md:h-[52px]' },
  { src: CLIENT_LOGOS.regionFruit, alt: 'Region Fruit', h: 'h-[42px] md:h-[56px]' },
  { src: CLIENT_LOGOS.frutella,    alt: 'Frutella',     h: 'h-[16px] md:h-[20px]' },
  { src: CLIENT_LOGOS.signify,     alt: 'Signify',      h: 'h-[26px] md:h-[34px]' },
]

export default function LogoStrip() {
  return (
    <div className="relative">
      <FullWidthBorder side="bottom" />

      {/* Mobile/tablet: horizontal scroll row with fade-right indicator */}
      <div className="relative md:hidden">
        {/* Fade gradient — signals more logos to the right, no scrollbar needed */}
        <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none logo-fade" />
        <div className="flex items-center gap-8 overflow-x-auto px-6 py-5 scrollbar-none">
          {logos.map(({ src, alt, h }) => (
            <div key={alt} className="flex-none flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} className={`${h} w-auto object-contain`} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 8-column grid */}
      <div className="hidden md:grid md:grid-cols-8 h-[91px] w-full px-section">
        {logos.map(({ src, alt, h }) => (
          <div key={alt} className="flex items-center justify-center px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className={`${h} w-auto max-w-full object-contain`} />
          </div>
        ))}
      </div>
    </div>
  )
}
