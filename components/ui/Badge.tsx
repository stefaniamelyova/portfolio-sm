export default function Badge({
  variant,
  children,
}: {
  variant: 'date' | 'company'
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-block text-label uppercase px-2 py-[3px] text-white ${
        variant === 'date' ? 'bg-accent' : 'bg-dark'
      }`}
    >
      {children}
    </span>
  )
}
