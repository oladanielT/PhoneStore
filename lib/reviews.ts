export type Review = {
  id: string
  name: string
  role: string
  rating: number
  text: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Tunde A.',
    role: 'OAU Student',
    rating: 5,
    text: 'Bought a Samsung A15 for school. Sealed, original and cheaper than other shops around campus. The WhatsApp ordering was so easy.',
    date: 'March 2025',
  },
  {
    id: 'r2',
    name: 'Blessing O.',
    role: 'Ile-Ife Resident',
    rating: 5,
    text: 'They fixed my cracked iPhone screen in under an hour and it looks brand new. Very honest pricing, no wahala.',
    date: 'February 2025',
  },
  {
    id: 'r3',
    name: 'Chinedu E.',
    role: 'NYSC Corper',
    rating: 5,
    text: 'Got a clean UK-used iPhone 12. Battery health was exactly as they said. Trustworthy guys, I will buy again.',
    date: 'April 2025',
  },
  {
    id: 'r4',
    name: 'Aisha M.',
    role: 'Student, OAU',
    rating: 4,
    text: 'Their student deals are real. Got earbuds and a power bank bundle for a great price. Delivery to my hostel was fast.',
    date: 'January 2025',
  },
  {
    id: 'r5',
    name: 'Samuel K.',
    role: 'Lecturer',
    rating: 5,
    text: 'Bought an HP laptop for work. Genuine product with warranty and they helped me set it up. Highly recommended.',
    date: 'March 2025',
  },
  {
    id: 'r6',
    name: 'Funke D.',
    role: 'Small Business Owner',
    rating: 5,
    text: 'I order accessories for resale from Brightway. Always original, always available. Reliable plug in Ife.',
    date: 'May 2025',
  },
]

export const averageRating =
  Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) /
  10
