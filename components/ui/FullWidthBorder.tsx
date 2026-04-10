export default function FullWidthBorder({ side }: { side: 'top' | 'bottom' }) {
  return (
    <div
      className={`absolute ${side === 'top' ? 'top-0 border-t' : 'bottom-0 border-b'} border-dark`}
      style={{ left: '50%', transform: 'translateX(-50%)', width: '100vw' }}
    />
  )
}
