import type { Team } from './types'

import connorEyles from './connor-eyles.jpg'
import martelKho from './martel-kho.jpg'
import pasangLhamu from './pasang-lhamu-sherpa.jpg'
import jahanHaidari from './jahan-haidari.jpg'

// Placeholder for Mahin (no photo yet)
const placeholderImage = {
  src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%236b7280"%3EM%3C/text%3E%3C/svg%3E',
  height: 200,
  width: 200,
  blurDataURL: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23e5e7eb"/%3E%3C/svg%3E',
}

export const teamData: Team = {
  name: 'Group 77 - RMIT Garage Team',
  members: [
    {
      id: 'connor-eyles',
      name: 'Connor Eyles',
      role: 'Product Manager',
      photo: connorEyles,
      blurb:
        'As the project manager for group 77, I keep the team aligned with our goals and ensure we deliver on time. I manage the backlog, facilitate meetings, and make sure everyone has what they need to succeed in the team.',
    },
    {
      id: 'martel-kho',
      name: 'Martel Kho',
      role: 'Developer',
      photo: martelKho,
      blurb:
        "I'm a developer on group 77, responsible for building the frontend and implementing features. I focus on writing clean, maintainable code and ensuring the app works seamlessly for the users. I also help in backend tasks!",
    },
    {
      id: 'pasang-lhamu-sherpa',
      name: 'Pasang Lhamu Sherpa',
      role: 'Developer',
      photo: pasangLhamu,
      blurb:
        "I'm a developer on group 77, working on both frontend and backend tasks. I'm passionate about solving technical challenges and making sure our code is robust and well tested.",
    },
    {
      id: 'mahin-mubashir-islam',
      name: 'Mahin Mubashir Islam',
      role: 'UX Designer',
      photo: placeholderImage,
      blurb:
        'As the UX designer for group 77, I create intuitive and visually appealing designs that enhance the user experience. I translate requirements into mockups and ensure our interface is both functional and beautiful.',
    },
    {
      id: 'jahan-haidari',
      name: 'Jahan Haidari',
      role: 'Business Analyst',
      photo: jahanHaidari,
      blurb:
        "I'm the business analyst for group 77, responsible for gathering requirements, documenting specifications, and bridging the gap between the client and our development team. I ensure we deliver exactly what the client needs.",
    },
  ],
}