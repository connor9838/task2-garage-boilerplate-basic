'use client'

import { useState } from 'react'
import { teamData } from '@/features/team/data'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function AvatarInitials({ name, large = false }: { name: string; large?: boolean }) {
  const initials = getInitials(name)

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex items-center justify-center rounded-full bg-zinc-300 ${
          large ? 'h-20 w-20' : 'h-12 w-12'
        }`}
      >
        <span
          className={`font-medium text-zinc-500 ${
            large ? 'text-xl' : 'text-base'
          }`}
        >
          {initials}
        </span>
      </div>

      {!large && (
        <span className="text-sm font-medium text-zinc-600">
          {initials}
        </span>
      )}
    </div>
  )
}

function TeamMemberCard({
  name,
  role,
  blurb,
  onClick,
}: {
  name: string
  role: string
  blurb: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[155px] w-full flex-col items-center rounded-lg border border-zinc-200 bg-white px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <AvatarInitials name={name} />

      <div className="mt-3 w-full text-center">
        <h3 className="text-sm font-semibold text-zinc-900">
          {name}
        </h3>

        <p className="mt-1 text-[10px] font-medium text-blue-500">
          {role}
        </p>
      </div>

      <p className="mt-3 w-full overflow-hidden text-center text-[9px] leading-relaxed text-zinc-500">
        {blurb}
      </p>
    </button>
  )
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamData.members)[number] | null
  >(null)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-8">
      <div className="w-full max-w-[700px] rounded-xl bg-white px-10 py-9 shadow-sm">
        {/* Title */}
        <h1 className="mb-7 text-center text-2xl font-bold text-zinc-800">
          {teamData.name}
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-3 gap-4">
          {teamData.members.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              blurb={member.blurb}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="w-full max-w-[500px] rounded-xl bg-white p-8 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Profile Header */}
            <div className="flex flex-col items-center text-center">
              <AvatarInitials
                name={selectedMember.name}
                large
              />

              <h2 className="mt-5 text-2xl font-bold text-zinc-900">
                {selectedMember.name}
              </h2>

              <p className="mt-1 text-sm font-medium text-blue-500">
                {selectedMember.role}
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-zinc-200" />

            {/* Full Blurb */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-zinc-900">
                About
              </h3>

              <p className="text-sm leading-7 text-zinc-600">
                {selectedMember.blurb}
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="mt-7 w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}