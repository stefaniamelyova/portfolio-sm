'use client'
import { motion } from 'motion/react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const item = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function StaggerReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
