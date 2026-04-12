import FullWidthBorder from './FullWidthBorder'

export default function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="relative h-header">
      <div className="max-w-[1440px] mx-auto flex items-center h-full px-6 md:px-section">
        <h2 className="text-title uppercase text-dark leading-none">{title}</h2>
      </div>
      <FullWidthBorder side="bottom" />
    </div>
  )
}
