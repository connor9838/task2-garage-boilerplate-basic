export interface TeamMember {
  id: string
  name: string
  role: string
  blurb: string
}

export interface Team {
  name: string
  members: TeamMember[]
}
