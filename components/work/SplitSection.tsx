import type { SplitSectionData, SplitColumnData, MediaItem } from '@/lib/projects'
import Reveal from '@/components/ui/Reveal'

function MediaSlot({ item }: { item: MediaItem }) {
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt={item.alt ?? ''}
      className="w-full h-full object-cover"
      draggable={false}
    />
  )
}

function MediaArea({ media }: { media: SplitColumnData['media'] }) {
  if (Array.isArray(media)) {
    return (
      <div className="flex gap-2 w-full aspect-[4/3]">
        {media.map((item, i) => (
          <div key={i} className="flex-1 overflow-hidden">
            <MediaSlot item={item} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="w-full aspect-[4/3] overflow-hidden">
      <MediaSlot item={media} />
    </div>
  )
}

function Column({ media, title, paragraphs }: SplitColumnData) {
  return (
    <div className="flex flex-col gap-5">
      <MediaArea media={media} />
      <div>
        <h2 className="text-subheading uppercase text-dark">{title}</h2>
        <div className="mt-4 flex flex-col gap-3">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-body text-dark">{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SplitSection({ left, right }: SplitSectionData) {
  return (
    <section className="relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-section py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal direction="left"><Column {...left} /></Reveal>
          <Reveal direction="right" delay={0.1}><Column {...right} /></Reveal>
        </div>
      </div>
    </section>
  )
}
