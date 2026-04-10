import FullWidthBorder from './FullWidthBorder'

export default function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="relative flex items-center px-6 md:px-section h-header">
      <h2 className="text-title uppercase text-dark leading-none">{title}</h2>
      <FullWidthBorder side="bottom" />
    </div>
  )
}
