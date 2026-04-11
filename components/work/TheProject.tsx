import type { TheProjectData, MediaItem } from '@/lib/projects'

// ── Media slot ────────────────────────────────────────────────────────────────

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

// ── Section ───────────────────────────────────────────────────────────────────

export default function TheProject({ media, paragraphs }: TheProjectData) {
  return (
    <section className="relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* Left: two vertical media slots */}
        <div className="flex gap-3 px-6 md:px-section py-section">
          {media.map((item, i) => (
            <div key={i} className="flex-1 overflow-hidden min-h-[280px] lg:min-h-[380px]">
              <MediaSlot item={item} />
            </div>
          ))}
        </div>

        {/* Right: title + paragraphs */}
        <div className="px-6 md:px-section lg:px-8 py-section">
          <h2 className="text-subheading uppercase text-dark">The Project</h2>
          <div className="mt-6 flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body text-dark">{p}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
