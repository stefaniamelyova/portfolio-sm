interface TagProps {
  label: string
  dark?: boolean
  /** Smaller pill variant used in CoverCard tag strips */
  pill?: boolean
}

export default function Tag({ label, dark, pill }: TagProps) {
  if (pill) {
    return (
      <span className="inline-block bg-dark text-white text-tag-pill uppercase px-3 py-[5px]">
        {label}
      </span>
    )
  }
  return (
    <span
      className={`inline-block text-label uppercase px-3 py-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-default ${
        dark ? 'bg-dark text-bg' : 'bg-bg text-accent'
      }`}
    >
      {label}
    </span>
  )
}
