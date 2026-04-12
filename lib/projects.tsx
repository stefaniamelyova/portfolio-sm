import type React from 'react'
import { PROJECT_COVERS, BAZINGA_ASSETS, FRUTELLA_ASSETS, WAVEME_ASSETS, KUDOS_ASSETS, ONTDEK_ASSETS, REGION_FRUIT_ASSETS, NB_LIMITED_ASSETS, BELCO_ASSETS, RECONNECT_ASSETS } from './assets'

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
    theProject: {
      media: [
        { type: 'image', src: BAZINGA_ASSETS.logo, alt: 'Bazinga logo' },
        { type: 'video', src: BAZINGA_ASSETS.hexcodes },
      ],
      paragraphs: [
        'Bazinga is a mobile application developed during my 4th semester of Mobile App Development at Fontys UAS. The project focused on integrating AI into a real-world use case through a sarcasm detection tool.',
        'The app analyzes user input and detects whether a message contains sarcasm, aiming to explore the accuracy and practical application of LLM-based features in mobile environments.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: BAZINGA_ASSETS.screens1 },
        title: 'Technical',
        paragraphs: [
          'The application was designed in Figma and developed using Flutter. It integrates an LLM-powered API to process and analyze text input, focusing on performance, responsiveness, and real-time feedback within a mobile interface.',
        ],
      },
      right: {
        media: { type: 'video', src: BAZINGA_ASSETS.screens2 },
        title: 'Design',
        paragraphs: [
          'The design follows a modern and clean aesthetic, focusing on clarity and ease of interaction. I aimed to create a simple and engaging user flow that makes complex AI functionality accessible and intuitive for everyday users.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BAZINGA_ASSETS.ui} alt="Bazinga UI overview" className="w-full" draggable={false} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BAZINGA_ASSETS.screens} alt="Bazinga screens" className="w-full" draggable={false} />
        </div>
      </section>
    ),
  },
  {
    slug: 'frutella',
    title: 'Frutella',
    cover: PROJECT_COVERS.frutella,
    tags: ['logo design', '3d mockups', 'packaging design'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: FRUTELLA_ASSETS.logo, alt: 'Frutella logo' },
        { type: 'image', src: FRUTELLA_ASSETS.hex, alt: 'Frutella colour palette' },
      ],
      paragraphs: [
        'Frutella is a product from the portfolio of Region Fruit, featuring chocolate-covered fruits positioned as a premium snack.',
        'I was tasked with designing both the logo and packaging, with the goal of creating a strong visual identity that reflects the quality of the product and stands out in a competitive market.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: FRUTELLA_ASSETS.strawberryDark },
        title: 'Technical',
        paragraphs: [
          'The design work was created using Figma, while the 3D packaging mockups were developed using additional visualization tools. I ensured the use of CMYK color profiles for accurate print production and prepared the designs with real-world packaging constraints in mind.',
        ],
      },
      right: {
        media: { type: 'video', src: FRUTELLA_ASSETS.raspberryWhite },
        title: 'Design',
        paragraphs: [
          'The design focuses on bold, eye-catching visuals to differentiate from typical ice cream-style packaging. I used strong colors and clean composition to emphasize product quality and shelf presence, while shaping the packaging as an ice cream container to create a playful yet premium feel.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section">
          <video
            src={FRUTELLA_ASSETS.bananaDark}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          />
        </div>
      </section>
    ),
  },
  {
    slug: 'waveme',
    title: 'Waveme',
    cover: PROJECT_COVERS.waveme,
    tags: ['app design', 'interactive prototyping'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: WAVEME_ASSETS.logo, alt: 'WaveMe logo' },
        { type: 'image', src: WAVEME_ASSETS.hex, alt: 'WaveMe colour palette' },
      ],
      paragraphs: [
        'WaveMe is a concept mobile application designed to help people connect in real-life situations through location-based interaction.',
        'The app allows users to send a "wave" to someone nearby they are interested in. If the interest is mutual, users can connect and exchange social media details, making real-world interactions easier and more approachable.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: WAVEME_ASSETS.screens1 },
        title: 'Technical',
        paragraphs: [
          'The full app design, including logo and interface, was created using Figma. This included user flows, wireframes, and high-fidelity screens, covering the complete experience from discovery to connection.',
        ],
      },
      right: {
        media: { type: 'video', src: WAVEME_ASSETS.screens2 },
        title: 'Design',
        paragraphs: [
          'The design focuses on simplicity and ease of use, supporting quick interactions in real-time environments. I aimed for a modern and approachable visual style, with clear navigation and minimal friction to encourage users to engage confidently.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">
          {/* Full-width UI overview */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WAVEME_ASSETS.ui} alt="WaveMe UI overview" className="w-full" draggable={false} />
          {/* Side-by-side: screens video + screens image */}
          <div className="flex gap-6">
            <div className="flex-1 overflow-hidden">
              <video
                src={WAVEME_ASSETS.screen3}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={WAVEME_ASSETS.img2} alt="WaveMe screens" className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    slug: 'nb-limited',
    title: 'NB Limited',
    cover: PROJECT_COVERS.nbLimited,
    tags: ['brand identity', 'logo design'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: NB_LIMITED_ASSETS.logo, alt: 'NB Limited logo' },
        { type: 'image', src: NB_LIMITED_ASSETS.hex, alt: 'NB Limited colour palette' },
      ],
      paragraphs: [
        'This project was created for NB-Limited, a company focused on delivering custom digital products and scalable software solutions for businesses.',
        'As part of a rebranding process, I was tasked with designing a new logo and brand identity that reflects a more modern and minimal direction.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: NB_LIMITED_ASSETS.mockup },
        title: 'Technical',
        paragraphs: [
          'All design work and mockups were created using Figma. This included logo exploration, visual identity development, and brand application mockups.',
        ],
      },
      right: {
        media: [
          { type: 'image', src: NB_LIMITED_ASSETS.moto, alt: 'NB Limited motto' },
          { type: 'image', src: NB_LIMITED_ASSETS.icon, alt: 'NB Limited icon' },
        ],
        title: 'Design',
        paragraphs: [
          'The design follows a dark-mode, minimalistic aesthetic to align with the company\'s modern positioning.',
          'I incorporated glass morphism elements, an infinity symbol to represent scalability and continuous growth, and a clean typography system to ensure clarity and consistency.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={NB_LIMITED_ASSETS.font} alt="NB Limited typography system" className="w-full" draggable={false} />
        </div>
      </section>
    ),
  },
  {
    slug: 'owow',
    title: 'OWOW',
    cover: PROJECT_COVERS.owow,
    tags: ['website design', 'frontend web development', 'next.js', 'tailwindcss', 'three.js'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: KUDOS_ASSETS.logo, alt: 'Kudos logo' },
        { type: 'video', src: KUDOS_ASSETS.hexcodes },
      ],
      paragraphs: [
        'Kudos is a reward-based system designed for Owow, a software solutions company located in Eindhoven, Netherlands. Built during my semester 3 Frontend Design project at Fontys. The goal was to create a meaningful use for their in-office flip dot board.',
        'We developed a system that promotes appreciation between employees through a points-based reward system. Employees earn points automatically through work activity and can also give each other kudos for a job well done. A live leaderboard is displayed on the flip dot board, with full rankings accessible through a web platform.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: KUDOS_ASSETS.screens },
        title: 'Technical',
        paragraphs: [
          'I designed and developed the frontend using Next.js and Tailwind CSS, focusing on a clean and responsive interface. The system integrates with Slack, Jira, and GitHub. A Slack bot assigns points based on activity, while the web platform allows users to manage rewards and redeem points through a connected shop system.',
        ],
      },
      right: {
        media: { type: 'image', src: KUDOS_ASSETS.research, alt: 'Kudos research' },
        title: 'The Research',
        paragraphs: [
          'Our research showed that many employees feel undervalued in the workplace. The system was designed to increase recognition without creating pressure or a sense of monitoring.',
          'To address this, rewards are based on positive actions only. Points cannot be removed, and recognition is driven by peer appreciation rather than performance tracking.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">

          {/* Design column + cards video side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-subheading uppercase text-dark">Design</h2>
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-body text-dark">
                  The interface was designed to feel modern, lightweight, and engaging, matching the playful nature of the concept.
                </p>
                <p className="text-body text-dark">
                  I focused on clear hierarchy, usability, and a balance between professional and &ldquo;cheeky&rdquo; interactions, especially within the reward system and leaderboard experience.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <video
                src={KUDOS_ASSETS.cards}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full-width UI image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={KUDOS_ASSETS.ui} alt="Kudos UI" className="w-full" draggable={false} />

          {/* Full-width homescreen recording */}
          <video
            src={KUDOS_ASSETS.homescreen}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          />

        </div>
      </section>
    ),
  },
  {
    slug: 'belco',
    title: 'Belco Alliance',
    cover: PROJECT_COVERS.belco,
    tags: ['website design', 'creative web development', 'next.js', 'tailwindcss'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: BELCO_ASSETS.logo, alt: 'Belco Alliance logo' },
        { type: 'video', src: BELCO_ASSETS.hexcodes },
      ],
      paragraphs: [
        'This project was created for Belco Alliance, a network of European and non-European institutions focused on creating global opportunities for students.',
        'During semester 2 of Media Design, we were tasked with redesigning and redeveloping their outdated website, improving usability, structure, and overall user experience. The goal was to simplify navigation and make information more accessible for students and partner institutions.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: BELCO_ASSETS.screens },
        title: 'Technical',
        paragraphs: [
          'I designed the interface in Figma and contributed to frontend development using Next.js and Tailwind CSS. I implemented the filtering system logic, ensuring accurate and dynamic results, and worked on responsiveness across devices. The final website was deployed on Vercel.',
        ],
      },
      right: {
        media: { type: 'video', src: BELCO_ASSETS.mockup },
        title: 'Design',
        paragraphs: [
          'The design focuses on a clean, structured layout with improved hierarchy and readability compared to the previous version.',
          'Special attention was given to simplifying complex content and redesigning the filtering system to be intuitive, functional, and easy to use.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">

          {/* Full-width UI */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BELCO_ASSETS.ui} alt="Belco Alliance UI" className="w-full" draggable={false} />

          {/* Two images side by side */}
          <div className="flex gap-6">
            <div className="flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BELCO_ASSETS.img1} alt="Belco Alliance screens" className="w-full h-full object-cover" draggable={false} />
            </div>
            <div className="flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BELCO_ASSETS.img2} alt="Belco Alliance screens" className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>

        </div>
      </section>
    ),
  },
  {
    slug: 'ontdekfabriek',
    title: 'Ontdek Fabriek',
    cover: PROJECT_COVERS.ontdekFabriek,
    tags: ['app design', 'frontend app development', 'flutter'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: ONTDEK_ASSETS.logo, alt: 'Ontdekfabriek logo' },
        { type: 'video', src: ONTDEK_ASSETS.hexcodes },
      ],
      paragraphs: [
        'EcoBuild is a game application developed for Ontdekfabriek, designed for tablets and mobile devices. Ontdekfabriek provides hands-on workshops that combine creativity, technology, and education for children and families.',
        'The goal was to create an engaging experience that teaches teenagers about sustainable building. Players form a team, select a location, and design a building based on environmental conditions. The final score is calculated based on material choices, transportation impact, and CO₂ emissions, with results shown on a leaderboard.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: ONTDEK_ASSETS.mockup },
        title: 'Technical',
        paragraphs: [
          'I developed the frontend using Flutter, focusing on performance and smooth interaction across mobile devices. The system includes dynamic game flows, modular building components, and real-time score calculation. I am currently expanding the project by implementing 3D modular elements.',
        ],
      },
      right: {
        media: { type: 'video', src: ONTDEK_ASSETS.webScreens },
        title: 'The Research',
        paragraphs: [
          'Our research showed that users in this age group prefer minimal interfaces, clear challenges, and visually engaging experiences.',
          'This influenced the structure of the game, focusing on simplified screens, guided interactions, and a balance between learning and gameplay.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">

          {/* Design column + web gallery video side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-subheading uppercase text-dark">Design</h2>
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-body text-dark">
                  Working within an existing brand identity, I designed a clean and intuitive interface tailored to the target audience.
                </p>
                <p className="text-body text-dark">
                  The focus was on clarity, ease of navigation, and engaging visuals, ensuring the experience remains accessible while maintaining a playful and interactive feel.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <video
                src={ONTDEK_ASSETS.webGallery}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full-width UI image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ONTDEK_ASSETS.ui} alt="EcoBuild UI" className="w-full" draggable={false} />

        </div>
      </section>
    ),
  },
  {
    slug: 'reconnect',
    title: 'Reconnect',
    cover: PROJECT_COVERS.reconnect,
    tags: ['logo design'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: RECONNECT_ASSETS.logo, alt: 'Reconnect logo' },
        { type: 'image', src: RECONNECT_ASSETS.hex, alt: 'Reconnect colour palette' },
      ],
      paragraphs: [
        'This project was created for Reconnect, a company focused on talent management, employee development, leadership growth, and smart hiring solutions.',
        'I was tasked with redesigning their logo for their 5th anniversary, creating a refreshed visual that reflects both their growth and professional positioning while staying consistent with their existing brand identity.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'video', src: RECONNECT_ASSETS.mockup },
        title: 'Technical',
        paragraphs: [
          'The logo design and visual explorations were created using Figma. This included multiple iterations, typography exploration, and scalable logo variations suitable for both digital and print applications.',
        ],
      },
      right: {
        media: { type: 'image', src: RECONNECT_ASSETS.img2, alt: 'Reconnect brand visuals' },
        title: 'Design',
        paragraphs: [
          'The design builds on the existing brand colors to maintain recognition while introducing a more refined and modern look.',
          'I focused on clean geometry, balanced composition, and a timeless style to represent stability, growth, and long-term partnerships.',
        ],
      },
    },
  },
  {
    slug: 'region-fruit',
    title: 'Region Fruit',
    cover: PROJECT_COVERS.regionFruit,
    tags: ['brand identity', 'logo design'],
    fit: 'cover',
    theProject: {
      media: [
        { type: 'image', src: REGION_FRUIT_ASSETS.logo, alt: 'Region Fruit logo' },
        { type: 'image', src: REGION_FRUIT_ASSETS.hex, alt: 'Region Fruit colour palette' },
      ],
      paragraphs: [
        'This project was created for Region Fruit, a company specializing in the production and export of fruits and vegetables across Central Europe.',
        'I was tasked with developing a brand identity for one of their cherry-based products, focusing on creating a strong and recognizable visual presence.',
      ],
    },
    splitSection: {
      left: {
        media: { type: 'image', src: REGION_FRUIT_ASSETS.font, alt: 'Region Fruit typography' },
        title: 'Technical',
        paragraphs: [
          'The brand identity and mockups were designed using Figma. This included logo development, packaging visuals, and presentation mockups to showcase how the product would appear in real-world contexts.',
        ],
      },
      right: {
        media: { type: 'image', src: REGION_FRUIT_ASSETS.img1, alt: 'Region Fruit packaging' },
        title: 'Design',
        paragraphs: [
          'The design focuses on a clean and eye-catching aesthetic without overwhelming the viewer.',
          'Red was used as the primary color to reflect the product (cherries), combined with a balanced layout to maintain clarity and visual appeal.',
        ],
      },
    },
    customSection: (
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-section pb-section flex flex-col gap-6">

          {/* Full-width showcase image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={REGION_FRUIT_ASSETS.img3} alt="Region Fruit brand showcase" className="w-full" draggable={false} />

          {/* Two mockup videos side by side */}
          <div className="flex gap-6">
            <div className="flex-1 overflow-hidden">
              <video
                src={REGION_FRUIT_ASSETS.mockup1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <video
                src={REGION_FRUIT_ASSETS.mockup2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    ),
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}
