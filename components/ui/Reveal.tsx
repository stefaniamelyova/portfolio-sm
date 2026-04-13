'use client'
import { motion } from 'motion/react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

const variants = {
  up:    { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 },  visible: { opacity: 1, x: 0 } },
}

export default function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants[direction]}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
