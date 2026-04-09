import type React from 'react'
import { PROJECT_COVERS } from './assets'

// ── Shared media type (used by TheProject + SplitSection) ─────────────────────

export type MediaItem =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string }

// ── Section data types ────────────────────────────────────────────────────────

export interface TheProjectData {
  media: [MediaItem, MediaItem]
  paragraphs: string[]
}

export interface SplitColumnData {
  media: MediaItem | [MediaItem, MediaItem]
  title: string
  paragraphs: string[]
}

export interface SplitSectionData {
  left: SplitColumnData
  right: SplitColumnData
}

// ── Project ───────────────────────────────────────────────────────────────────

export interface Project {
  slug: string
  title: string
  cover: string
  tags: string[]
  fit?: 'contain' | 'cover'
  bg?: 'white' | 'dark'
  theProject?: TheProjectData
  splitSection?: SplitSectionData
  customSection?: React.ReactNode
}

export const PROJECTS: Project[] = [
  {
    slug: 'bazinga',
    title: 'Bazinga',
    cover: PROJECT_COVERS.bazinga,
    tags: ['app design', 'frontend app development', 'flutter'],
    fit: 'cover',
  },
  {
    slug: 'frutella',
    title: 'Frutella',
    cover: PROJECT_COVERS.frutella,
    tags: ['logo design', '3d mockups', 'packaging design'],
    fit: 'cover',
  },
  {
    slug: 'waveme',
    title: 'Waveme',
    cover: PROJECT_COVERS.waveme,
    tags: ['app design', 'interactive prototyping'],
    fit: 'cover',
  },
  {
    slug: 'nb-limited',
    title: 'NB Limited',
    cover: PROJECT_COVERS.nbLimited,
    tags: ['brand identity', 'logo design'],
    fit: 'cover',
  },
  {
    slug: 'owow',
    title: 'OWOW',
    cover: PROJECT_COVERS.owow,
    tags: ['website design', 'frontend web development', 'next.js', 'tailwindcss', 'three.js'],
    fit: 'cover',
  },
  {
    slug: 'belco',
    title: 'Belco Alliance',
    cover: PROJECT_COVERS.belco,
    tags: ['website design', 'creative web development', 'next.js', 'tailwindcss'],
    fit: 'cover',
  },
  {
    slug: 'ontdekfabriek',
    title: 'Ontdek Fabriek',
    cover: PROJECT_COVERS.ontdekFabriek,
    tags: ['app design', 'frontend app development', 'flutter'],
    fit: 'cover',
  },
  {
    slug: 'reconnect',
    title: 'Reconnect',
    cover: PROJECT_COVERS.reconnect,
    tags: ['logo design'],
    fit: 'cover',
  },
  {
    slug: 'region-fruit',
    title: 'Region Fruit',
    cover: PROJECT_COVERS.regionFruit,
    tags: ['brand identity', 'logo design'],
    fit: 'cover',
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}
