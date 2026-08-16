// types.ts
import type { StaticImageData } from 'next/image'

export interface TeamMember {
  id: string
  name: string
  role: string
  photo: StaticImageData // ← Changed from string to StaticImageData
  blurb: string
}

export interface Team {
  name: string
  members: TeamMember[]
}