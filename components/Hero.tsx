'use client'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { HERO_IMAGES } from '@/lib/assets'

// Same images used across all breakpoints — positions differ per canvas
const LG = HERO_IMAGES
const SM = {
  ...HERO_IMAGES,
  baroqueWoman_mo:   HERO_IMAGES.baroqueWoman,
  gothicWindow_mo:   HERO_IMAGES.gothicWindow,
  smallFloral_mo:    HERO_IMAGES.smallFloral,
  decor321_mo:       HERO_IMAGES.decor321,
  botanicalSprig_mo: HERO_IMAGES.botanicalSprig,
  decor2403_mo:      HERO_IMAGES.decor2403,
  botanical3_mo:     HERO_IMAGES.botanical3,
  botanical2_mo:     HERO_IMAGES.botanical2,
  petal_mo:          HERO_IMAGES.petal,
  baroquePiece_mo:   HERO_IMAGES.baroquePiece,
  star_mo:           HERO_IMAGES.star,
  decor2505_mo:      HERO_IMAGES.decor2505,
}

const imgStyle: React.CSSProperties = {
  position: 'absolute', inset: 0,
  width: '100%', height: '100%',
  objectFit: 'cover', pointerEvents: 'none', userSelect: 'none',
}

function E({ x, y, w, h, src, flip }: { x: number; y: number; w: number; h: number; src: string; flip?: boolean }) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, transform: flip ? 'scaleX(-1)' : undefined }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={imgStyle} draggable={false} />
    </div>
  )
}

function R({
  x, y, ow, oh, rot, iw, ih, src,
}: {
  x: number; y: number; ow: number; oh: number
  rot: number; iw: number; ih: number; src: string
}) {
  return (
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: x, top: y, width: ow, height: oh }}>
      <div style={{ transform: `rotate(${rot}deg)`, flexShrink: 0, position: 'relative', width: iw, height: ih }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" style={imgStyle} draggable={false} />
      </div>
    </div>
  )
}

/** Centered text line — clip-path wipe entrance */
function Text({ top, size, weight, delay = 0, children }: { top: number; size: number; weight: number; delay?: number; children: React.ReactNode }) {
  return (
    <motion.p
      style={{
        position: 'absolute',
        left: 'calc(50% - 0.5px)',
        top,
        transform: 'translateX(-50%)',
        color: '#4600ff',
        fontSize: size,
        fontWeight: weight,
        textTransform: 'uppercase',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        margin: 0,
      }}
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.p>
  )
}

function DesktopCanvas() {
  return (
    <>
      <E x={-112} y={397} w={548} h={424} src={LG.baroqueWoman} flip />
      <E x={1000} y={309} w={376} h={529} src={LG.gothicWindow} />
      <E x={90} y={-22} w={143} h={392} src={LG.botanicalSprig} />
      <R x={204} y={-35} ow={240} oh={267.5} rot={10.09} iw={201.8} ih={235.7} src={LG.decor2403} />
      <E x={604} y={0} w={95} h={119} src={LG.smallFloral} />
      <R x={820} y={-187} ow={267.9} oh={253.5} rot={-1.66} iw={260.9} ih={246} src={LG.baroquePiece} />
      <R x={-176} y={-42} ow={249.4} oh={264.1} rot={-90.75} iw={260.9} ih={246} src={LG.baroquePiece} />
      <R x={403} y={574} ow={337.5} oh={312.1} rot={83.26} iw={278} ih={307} src={LG.scroll} />
      <E x={845} y={486} w={133} h={125} src={LG.decor302} />
      <E x={1161} y={-23} w={144} h={285} src={LG.decor321} />
      <R x={1034} y={-9} ow={168.3} oh={195.4} rot={-14.24} iw={130.9} ih={168.4} src={LG.decor311} />
      <R x={-67.7} y={309.3} ow={176.8} oh={186.5} rot={79.77} iw={162.3} ih={150.3} src={LG.botanical2} />
      <R x={877} y={621} ow={202.4} oh={200.7} rot={38.63} iw={148.9} ih={137.9} src={LG.botanical2} />
      <R x={378.9} y={-82.9} ow={227.2} oh={207.8} rot={-92.17} iw={199.6} ih={219.8} src={LG.scroll} />
      <E x={744} y={-25} w={104} h={183} src={LG.botanical3} />
      <R x={-51} y={212} ow={128} oh={115.4} rot={178.42} iw={125} ih={112} src={LG.petal} />
      <R x={695} y={672} ow={128} oh={115.4} rot={178.42} iw={125} ih={112} src={LG.petal} />
      <R x={1124} y={-107} ow={163.9} oh={158.9} rot={-29.37} iw={125} ih={112} src={LG.petal} />
      <R x={1243} y={183} ow={166.5} oh={163.1} rot={34.53} iw={125} ih={112} src={LG.petal} />
      <R x={812} y={645} ow={109.8} oh={111.1} rot={64.8} iw={84.3} ih={81.7} src={LG.star} />
      <R x={159} y={14} ow={109.8} oh={111.1} rot={64.8} iw={84.3} ih={81.7} src={LG.star} />
      <R x={1231} y={13} ow={109.8} oh={111.1} rot={64.8} iw={84.3} ih={81.7} src={LG.star} />
      <R x={1145} y={257} ow={114.5} oh={113.6} rot={31.41} iw={84.3} ih={81.7} src={LG.star} />
      <R x={936} y={55} ow={114.5} oh={113.6} rot={31.41} iw={84.3} ih={81.7} src={LG.star} />
      <R x={27} y={-71} ow={132.2} oh={159.6} rot={-110.03} iw={136.7} ih={90.8} src={LG.decor2505} />
      <Text top={309} size={60} weight={900} delay={0.3}>stefania alberto</Text>
      <Text top={400} size={25} weight={600} delay={0.6}>student&nbsp;•&nbsp;designer&nbsp;•&nbsp;developer</Text>
    </>
  )
}

function TabletCanvas() {
  return (
    <>
      <E x={-131} y={302} w={414} h={320} src={SM.baroqueWoman} flip />
      <E x={548} y={226} w={263} h={370} src={SM.gothicWindow} />
      <E x={38} y={-9} w={91} h={250} src={SM.botanicalSprig} />
      <R x={148} y={-9} ow={132.2} oh={147.3} rot={10.09} iw={111.1} ih={129.8} src={SM.decor2403} />
      <E x={463} y={4} w={77} h={135} src={SM.botanical3} />

      <div style={{ position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)', width: 76, height: 95 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SM.smallFloral} alt="" style={imgStyle} draggable={false} />
      </div>

      <E x={632} y={-27} w={102} h={202} src={SM.decor321} />
      <R x={436} y={474} ow={178.7} oh={177.6} rot={40.52} iw={131.2} ih={121.5} src={SM.botanical2} />
      <R x={-47} y={138} ow={94.2} oh={88.5} rot={165.18} iw={78.8} ih={70.7} src={SM.petal} />
      <R x={697} y={111} ow={101.5} oh={104.1} rot={58.39} iw={78.8} ih={70.7} src={SM.petal} />
      <R x={680} y={-27} ow={105.2} oh={100.4} rot={-21.49} iw={83.6} ih={75} src={SM.petal} />
      <R x={-96.7} y={186.4} ow={155.6} oh={158.3} rot={-118.41} iw={119.2} ih={112.4} src={SM.baroquePiece} />
      <R x={99} y={12} ow={72.4} oh={73.2} rot={64.8} iw={55.6} ih={53.8} src={SM.star} />
      <R x={685} y={183} ow={72.4} oh={73.2} rot={64.8} iw={55.6} ih={53.8} src={SM.star} />
      <R x={-12} y={-9} ow={70.6} oh={71.4} rot={64.8} iw={54.2} ih={52.5} src={SM.star} />
      <R x={-30} y={54} ow={85.1} oh={83.8} rot={137.18} iw={71.9} ih={47.7} src={SM.decor2505} />
      <R x={264} y={462} ow={233.7} oh={216.6} rot={83.26} iw={193} ih={212.5} src={SM.scroll} />
      <R x={548} y={4} ow={101.5} oh={117.9} rot={-14.24} iw={79} ih={101.6} src={SM.decor311} />
      <E x={455} y={395} w={85} h={79} src={SM.decor302} />
      <Text top={241} size={30} weight={900} delay={0.3}>stefania alberto</Text>
      <Text top={293} size={13} weight={600} delay={0.6}>student&nbsp;•&nbsp;designer&nbsp;•&nbsp;developer</Text>
    </>
  )
}

function MobileCanvas() {
  return (
    <>
      <E x={-71} y={377} w={283} h={219} src={SM.baroqueWoman_mo} flip />
      <E x={201} y={340} w={177} h={249} src={SM.gothicWindow_mo} />
      <E x={8} y={-9} w={73} h={200} src={SM.botanicalSprig_mo} />
      <R x={50} y={-15} ow={102.1} oh={113.8} rot={10.09} iw={85.8} ih={100.3} src={SM.decor2403_mo} />
      <E x={216} y={0} w={57} h={99} src={SM.botanical3_mo} />

      <div style={{ position: 'absolute', left: 'calc(50% + 0.5px)', top: 0, transform: 'translateX(-50%)', width: 61, height: 77 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SM.smallFloral_mo} alt="" style={imgStyle} draggable={false} />
      </div>

      <E x={273} y={-9} w={80} h={158} src={SM.decor321_mo} />
      <R x={-31} y={321} ow={86.5} oh={91.2} rot={79.77} iw={79.4} ih={73.6} src={SM.botanical2_mo} />
      <R x={-31} y={272} ow={76.3} oh={71.6} rot={165.18} iw={63.8} ih={57.2} src={SM.petal_mo} />
      <R x={112} y={-22} ow={48.6} oh={52.4} rot={-79.63} iw={45.7} ih={41} src={SM.petal_mo} />
      <R x={307} y={220} ow={143} oh={146.9} rot={69.8} iw={116.2} ih={109.6} src={SM.baroquePiece_mo} />
      <R x={264} y={-5} ow={46.2} oh={46.7} rot={64.8} iw={35.4} ih={34.3} src={SM.star_mo} />
      <R x={-18} y={-5} ow={55.8} oh={56.4} rot={64.8} iw={42.8} ih={41.5} src={SM.star_mo} />
      <R x={310} y={6} ow={65.1} oh={68.1} rot={51.52} iw={57} ih={37.8} src={SM.decor2505_mo} />
      <Text top={238} size={30} weight={900} delay={0.3}>stefania alberto</Text>
      <Text top={290} size={13} weight={600} delay={0.6}>student&nbsp;•&nbsp;designer&nbsp;•&nbsp;developer</Text>
    </>
  )
}

// Responsive padding: [sm, md, lg] in px
const PAD: Record<BP, { h: number; b: number }> = {
  sm: { h: 16, b: 16 },
  md: { h: 32, b: 32 },
  lg: { h: 60, b: 40 },
}

function ScaledCanvas({ w, h, pad, children }: { w: number; h: number; pad: { h: number; b: number }; children: React.ReactNode }) {
  const [scale, setScale] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    function update() {
      const containerWidth = Math.min(window.innerWidth, 1440)
      setScale((containerWidth - pad.h * 2) / w)
      setMounted(true)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [w, pad.h])

  if (!mounted) {
    return <div style={{ width: '100%', paddingTop: `${(h / w) * 100}%`, background: 'var(--bg)' }} />
  }

  return (
    <motion.div
      style={{ paddingLeft: pad.h, paddingRight: pad.h, paddingBottom: pad.b, background: 'var(--bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div style={{ position: 'relative', height: h * scale, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: w, height: h,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

type BP = 'lg' | 'md' | 'sm'

function getBreakpoint(): BP {
  const w = window.innerWidth
  if (w < 640) return 'sm'
  if (w < 1024) return 'md'
  return 'lg'
}

export default function Hero() {
  const [bp, setBp] = useState<BP | null>(null)

  useEffect(() => {
    function update() { setBp(getBreakpoint()) }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Aspect-ratio placeholder until client hydration
  if (!bp) return <div style={{ width: '100%', paddingTop: `${(740 / 1290) * 100}%`, background: 'var(--bg)' }} />

  if (bp === 'sm') return (
    <ScaledCanvas w={375} h={596} pad={PAD.sm}><MobileCanvas /></ScaledCanvas>
  )
  if (bp === 'md') return (
    <ScaledCanvas w={810} h={596} pad={PAD.md}><TabletCanvas /></ScaledCanvas>
  )
  return (
    <ScaledCanvas w={1290} h={740} pad={PAD.lg}><DesktopCanvas /></ScaledCanvas>
  )
}
