import FullWidthBorder from './FullWidthBorder'
import Reveal from './Reveal'

export default function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="relative h-header">
      <div className="max-w-[1440px] mx-auto flex items-center h-full px-6 md:px-section">
        <Reveal direction="left">
          <h2 className="text-title uppercase text-dark leading-none">{title}</h2>
        </Reveal>
      </div>
      <FullWidthBorder side="bottom" />
    </div>
  )
}
