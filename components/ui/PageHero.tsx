import { PAGE_HERO_IMAGES } from '@/lib/assets'

const L = PAGE_HERO_IMAGES.left
const R = PAGE_HERO_IMAGES.right

interface PageHeroProps {
  title: string
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    // Hero height: 150px mobile → 195px tablet → 240px desktop
    // All pixel positions scale by the same ratio (0.625× / 0.8125× / 1×)
    // Image heights are % of hero so they auto-scale with it
    <div className="relative w-full h-[125px] sm:h-[168px] md:h-[210px] bg-bg overflow-hidden flex items-center justify-center mt-6 border-t border-b border-dark">

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={L.fruitDrip} alt="" draggable={false}
        className="absolute left-[155px] sm:left-[202px] md:left-[248px] top-0 h-[48%] w-auto pointer-events-none select-none" />

      {/* Flowers — wide botanical cluster; height also reduced at mobile to control width */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={L.flowers} alt="" draggable={false}
        className="absolute left-[170px] sm:left-[220px] md:left-[270px] bottom-0 h-[22%] sm:h-[30%] md:h-[40%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={L.flowerSm} alt="" draggable={false}
        className="absolute left-[120px] sm:left-[155px] md:left-[190px] top-[8px] h-[20%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={L.woman} alt="" draggable={false}
        className="absolute left-0 bottom-0 h-[115%] w-auto pointer-events-none select-none" />

      <h1 className="text-title text-accent uppercase relative z-10 px-6 md:px-section text-center">
        {title}
      </h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={R.gothicWindow} alt="" draggable={false}
        className="absolute right-0 bottom-0 h-[115%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={R.roseBranch} alt="" draggable={false}
        className="absolute right-[160px] sm:right-[207px] md:right-[255px] top-[6px] h-[28%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={R.artichoke} alt="" draggable={false}
        className="absolute right-[155px] sm:right-[202px] md:right-[248px] bottom-0 h-[48%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={R.botanicalSprig} alt="" draggable={false}
        className="absolute right-[97px] sm:right-[126px] md:right-[155px] top-0 h-[75%] w-auto pointer-events-none select-none" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={R.flowerSm} alt="" draggable={false}
        className="absolute right-[120px] sm:right-[156px] md:right-[192px] bottom-0 h-[17%] w-auto pointer-events-none select-none" />

    </div>
  )
}
