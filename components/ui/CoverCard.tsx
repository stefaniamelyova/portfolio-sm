import Link from 'next/link'
import Tag from './Tag'

interface CoverCardProps {
  coverSrc: string
  tags: string[]
  href?: string
  /** 'contain' centres the image with white space (logos); 'cover' fills and crops (photos) */
  fit?: 'contain' | 'cover'
  /** Background colour of the card area — defaults to white */
  bg?: 'white' | 'dark'
}

export default function CoverCard({ coverSrc, tags, href, fit = 'cover', bg = 'white' }: CoverCardProps) {
  const bgClass = bg === 'dark' ? 'bg-dark' : 'bg-white'

  const cover = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={coverSrc}
      alt=""
      className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.02]`}
      draggable={false}
    />
  )

  return (
    <div className="flex flex-col transition-transform duration-300 hover:-translate-y-1">
      {href ? (
        <Link
          href={href}
          className={`block border border-dark ${bgClass} overflow-hidden aspect-video group`}
        >
          {cover}
        </Link>
      ) : (
        <div className={`border border-dark ${bgClass} overflow-hidden aspect-video`}>
          {cover}
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3">
          {tags.map(tag => (
            <Tag key={tag} label={tag} pill />
          ))}
        </div>
      )}
    </div>
  )
}
