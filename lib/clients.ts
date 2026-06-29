import type { Review } from '@/lib/reviews'

export type StoreInfo = {
  name: string
  shortName: string
  tagline: string
  address: string
  phoneDisplay: string
  whatsappNumber: string
  email: string
  hours: { day: string; time: string }[]
  mapEmbedSrc: string
  mapDirectionsUrl: string
}

export type ClientPreset = {
  id: string
  label: string
  store: StoreInfo
  branding: {
    logo: string
    headerSubtitle: string
    promoBar: string
    footerTagline: string
    footerSeoLine: string
    locationHeading: string
    locationDescription: string
  }
  hero: {
    badge: string
    titlePrefix: string
    titleHighlight: string
    subtitle: string
    trustBadges: string[]
    carouselImages: { src: string; alt: string }[]
    whatsappMessage: string
    specialOffer: string
    hotDealTitle: string
    hotDealSubtitle: string
  }
  reviews: {
    sectionTitle: string
    sectionDescription: string
    pageSubtitle: string
    items: Review[]
  }
  colors?: { primary: string; accent: string }
}

function makeReviews(storeName: string, city: string): Review[] {
  return [
    {
      id: 'r1',
      name: 'Tunde A.',
      role: 'Student',
      rating: 5,
      text: `Bought a Samsung A15 from ${storeName}. Sealed, original and cheaper than other shops around town. WhatsApp ordering was so easy.`,
      date: 'March 2025',
    },
    {
      id: 'r2',
      name: 'Blessing O.',
      role: `${city} Resident`,
      rating: 5,
      text: `They fixed my cracked iPhone screen in under an hour and it looks brand new. Very honest pricing — highly recommend ${storeName}.`,
      date: 'February 2025',
    },
    {
      id: 'r3',
      name: 'Chinedu E.',
      role: 'NYSC Corper',
      rating: 5,
      text: `Got a clean UK-used iPhone 12 from ${storeName}. Battery health was exactly as they said. Trustworthy guys, I will buy again.`,
      date: 'April 2025',
    },
    {
      id: 'r4',
      name: 'Aisha M.',
      role: 'Student',
      rating: 4,
      text: `Their student deals are real. Got earbuds and a power bank bundle for a great price. Fast delivery in ${city}.`,
      date: 'January 2025',
    },
    {
      id: 'r5',
      name: 'Samuel K.',
      role: 'Lecturer',
      rating: 5,
      text: `Bought an HP laptop for work from ${storeName}. Genuine product with warranty and they helped me set it up.`,
      date: 'March 2025',
    },
    {
      id: 'r6',
      name: 'Funke D.',
      role: 'Small Business Owner',
      rating: 5,
      text: `I order accessories for resale from ${storeName}. Always original, always available. Reliable plug in ${city}.`,
      date: 'May 2025',
    },
  ]
}

export const clients: ClientPreset[] = [
  {
    id: 'emeritus-gadget',
    label: 'Emeritus Gadget (default)',
    store: {
      name: 'Emeritus Gadget Store',
      shortName: 'Emeritus Gadget',
      tagline: 'Phones, Gadgets & Repairs in Ile-Ife',
      address: 'Shop 5, Itasin Road, 220101, Ife, Osun State',
      phoneDisplay: '+234 806 807 7660',
      whatsappNumber: '2348068077660',
      email: 'hello@emeritusgadget.ng',
      hours: [
        { day: 'Monday – Friday', time: '8:00 AM – 7:30 PM' },
        { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
        { day: 'Sunday', time: '1:00 PM – 6:00 PM' },
      ],
      mapEmbedSrc:
        'https://www.google.com/maps?q=Ife,+Osun+State,+Nigeria&output=embed',
      mapDirectionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Itasin+Road+Ife+Osun+State+Nigeria',
    },
    branding: {
      logo: '/placeholder-logo.svg',
      headerSubtitle: 'Gadgets · Ife',
      promoBar:
        'Free screen guard fitting · Student deals near OAU · Fast delivery in Ile-Ife',
      footerTagline:
        'Emeritus Gadget — your trusted phone, gadget and repair shop in Ile-Ife. Original products, fair prices and warranty you can rely on.',
      footerSeoLine:
        'Emeritus Gadget · Phone Store Ile-Ife · Gadget Shop & Repairs near OAU',
      locationHeading: 'Find Emeritus Gadget in Ile-Ife',
      locationDescription:
        'Come see the gadgets in person, get expert advice and same-day repairs. Easy to find on Itasin Road.',
    },
    hero: {
      badge: 'Trusted Gadget Store in Ile-Ife',
      titlePrefix: 'Upgrade Your Tech with',
      titleHighlight: 'Emeritus Gadget',
      subtitle:
        'The go-to source for iPhones, Samsung, laptops and accessories near OAU. Authentic warranty and fast delivery.',
      trustBadges: ['Genuine Warranty', 'Fast Delivery', 'Store Pickup'],
      carouselImages: [
        { src: '/hero-phones.png', alt: 'Premium smartphones at Emeritus Gadget' },
        { src: '/students.png', alt: 'Student tech deals at Emeritus Gadget' },
        { src: '/repair-bench.png', alt: 'Professional repair services at Emeritus Gadget' },
      ],
      whatsappMessage:
        "Hello Emeritus Gadget, I'd like to make an enquiry about a phone.",
      specialOffer: 'Up to 15% OFF',
      hotDealTitle: 'iPhone 16\nPro Max',
      hotDealSubtitle: 'Limited Stock',
    },
    reviews: {
      sectionTitle: 'Loved by customers near and far',
      sectionDescription: 'Rated {rating} out of 5 from {count}+ happy customers.',
      pageSubtitle: 'Real feedback from Emeritus Gadget customers.',
      items: makeReviews('Emeritus Gadget', 'Ile-Ife'),
    },
    colors: { primary: '#1f5fe0', accent: '#f59e0b' },
  },
  {
    id: 'femolarh-gadget',
    label: 'Femolarh Gadget',
    store: {
      name: 'Femolarh Gadget Store',
      shortName: 'Femolarh Gadget',
      tagline: 'Phones, Gadgets & Repairs',
      address: 'Shop 12, Main Market Road, Ile-Ife, Osun State',
      phoneDisplay: '+234 806 807 7660',
      whatsappNumber: '2348068077660',
      email: 'hello@femolarhgadget.ng',
      hours: [
        { day: 'Monday – Friday', time: '8:00 AM – 7:30 PM' },
        { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
        { day: 'Sunday', time: '1:00 PM – 6:00 PM' },
      ],
      mapEmbedSrc:
        'https://www.google.com/maps?q=Ife,+Osun+State,+Nigeria&output=embed',
      mapDirectionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Ile-Ife+Osun+State+Nigeria',
    },
    branding: {
      logo: '/placeholder-logo.svg',
      headerSubtitle: 'Gadgets · Ife',
      promoBar:
        'Free screen guard fitting · Student deals · Fast delivery in Ile-Ife',
      footerTagline:
        'Femolarh Gadget — your trusted phone, gadget and repair shop. Original products, fair prices and warranty you can rely on.',
      footerSeoLine:
        'Femolarh Gadget · Phone Store Ile-Ife · Gadget Shop & Repairs',
      locationHeading: 'Find Femolarh Gadget in Ile-Ife',
      locationDescription:
        'Come see the gadgets in person, get expert advice and same-day repairs. Easy to find on Main Market Road.',
    },
    hero: {
      badge: 'Trusted Gadget Store',
      titlePrefix: 'Upgrade Your Tech with',
      titleHighlight: 'Femolarh Gadget',
      subtitle:
        'The go-to source for iPhones, Samsung, laptops and accessories. Authentic warranty and fast delivery.',
      trustBadges: ['Genuine Warranty', 'Fast Delivery', 'Store Pickup'],
      carouselImages: [
        { src: '/hero-phones.png', alt: 'Premium smartphones at Femolarh Gadget' },
        { src: '/students.png', alt: 'Student tech deals at Femolarh Gadget' },
        { src: '/repair-bench.png', alt: 'Professional repair services' },
      ],
      whatsappMessage:
        "Hello Femolarh Gadget, I'd like to make an enquiry about a phone.",
      specialOffer: 'Up to 15% OFF',
      hotDealTitle: 'iPhone 16\nPro Max',
      hotDealSubtitle: 'Limited Stock',
    },
    reviews: {
      sectionTitle: 'Loved by customers near and far',
      sectionDescription: 'Rated {rating} out of 5 from {count}+ happy customers.',
      pageSubtitle: 'Real feedback from Femolarh Gadget customers.',
      items: makeReviews('Femolarh Gadget', 'Ile-Ife'),
    },
    colors: { primary: '#1f5fe0', accent: '#f59e0b' },
  },
  {
    id: 'toronto-gadget',
    label: 'Toronto Gadget',
    store: {
      name: 'Toronto Gadget Store',
      shortName: 'Toronto Gadget',
      tagline: 'Premium Phones & Gadgets',
      address: '45 Allen Avenue, Ikeja, Lagos',
      phoneDisplay: '+234 812 345 6789',
      whatsappNumber: '2348123456789',
      email: 'hello@torontogadget.ng',
      hours: [
        { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
        { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
        { day: 'Sunday', time: '12:00 PM – 5:00 PM' },
      ],
      mapEmbedSrc:
        'https://www.google.com/maps?q=Ikeja+Lagos+Nigeria&output=embed',
      mapDirectionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Ikeja+Lagos+Nigeria',
    },
    branding: {
      logo: '/placeholder-logo.svg',
      headerSubtitle: 'Gadgets · Lagos',
      promoBar:
        'Same-day repairs · Free delivery in Ikeja · Trade-in your old phone',
      footerTagline:
        'Toronto Gadget — premium phones, laptops and accessories with honest pricing and genuine warranty.',
      footerSeoLine:
        'Toronto Gadget · Phone Shop Ikeja · Gadget Store Lagos',
      locationHeading: 'Visit Toronto Gadget in Ikeja',
      locationDescription:
        'Walk in for expert advice, try before you buy, and get repairs done while you wait on Allen Avenue.',
    },
    hero: {
      badge: 'Top-Rated Gadget Shop',
      titlePrefix: 'Get the Best Tech at',
      titleHighlight: 'Toronto Gadget',
      subtitle:
        'Premium iPhones, Samsung flagships, laptops and accessories. Fair prices with genuine warranty and fast Lagos delivery.',
      trustBadges: ['Trade-In Accepted', 'Same-Day Repairs', 'Lagos Delivery'],
      carouselImages: [
        { src: '/hero-phones.png', alt: 'Premium smartphones at Toronto Gadget' },
        { src: '/students.png', alt: 'Great deals at Toronto Gadget' },
        { src: '/repair-bench.png', alt: 'Expert repairs at Toronto Gadget' },
      ],
      whatsappMessage:
        "Hello Toronto Gadget, I'd like to make an enquiry about a phone.",
      specialOffer: 'Trade-In Deals',
      hotDealTitle: 'Samsung\nGalaxy S24',
      hotDealSubtitle: 'Best Price in Lagos',
    },
    reviews: {
      sectionTitle: 'Trusted by Lagos customers',
      sectionDescription: 'Rated {rating} out of 5 from {count}+ happy customers.',
      pageSubtitle: 'What Toronto Gadget customers are saying.',
      items: makeReviews('Toronto Gadget', 'Lagos'),
    },
    colors: { primary: '#7c3aed', accent: '#06b6d4' },
  },
  {
    id: 'mias-gadget',
    label: 'Mias Gadget',
    store: {
      name: 'Mias Gadget Store',
      shortName: 'Mias Gadget',
      tagline: 'Phones, Laptops & Repairs',
      address: '8 Aminu Kano Crescent, Wuse 2, Abuja, FCT',
      phoneDisplay: '+234 901 234 5678',
      whatsappNumber: '2349012345678',
      email: 'hello@miasgadget.ng',
      hours: [
        { day: 'Monday – Friday', time: '8:30 AM – 7:00 PM' },
        { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
        { day: 'Sunday', time: '12:00 PM – 5:00 PM' },
      ],
      mapEmbedSrc:
        'https://www.google.com/maps?q=Wuse+2+Abuja&output=embed',
      mapDirectionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Wuse+2+Abuja+Nigeria',
    },
    branding: {
      logo: '/placeholder-logo.svg',
      headerSubtitle: 'Gadgets · Abuja',
      promoBar:
        'Repairs while you wait · Laptop financing · Free delivery in Abuja',
      footerTagline:
        'Mias Gadget — trusted for phones, laptops and repairs in Abuja. Quality products and service you can count on.',
      footerSeoLine:
        'Mias Gadget · Phone Store Abuja · Laptop & Gadget Repair FCT',
      locationHeading: 'Find Mias Gadget in Wuse 2',
      locationDescription:
        'Located on Aminu Kano Crescent. Walk in for demos, repairs and expert advice on the latest tech.',
    },
    hero: {
      badge: "Abuja's Trusted Gadget Store",
      titlePrefix: 'Power Your Tech with',
      titleHighlight: 'Mias Gadget',
      subtitle:
        'Phones, laptops, tablets and accessories for everyone. Financing options and fast Abuja delivery available.',
      trustBadges: ['Laptop Financing', 'Expert Repairs', 'Abuja Delivery'],
      carouselImages: [
        { src: '/hero-phones.png', alt: 'Tech devices at Mias Gadget' },
        { src: '/students.png', alt: 'Customers shopping at Mias Gadget' },
        { src: '/repair-bench.png', alt: 'Device repair at Mias Gadget' },
      ],
      whatsappMessage:
        "Hello Mias Gadget, I'd like to make an enquiry about a device.",
      specialOffer: 'Financing Available',
      hotDealTitle: 'MacBook\nAir M3',
      hotDealSubtitle: 'Limited Stock',
    },
    reviews: {
      sectionTitle: 'Trusted across Abuja',
      sectionDescription: 'Rated {rating} out of 5 from {count}+ happy customers.',
      pageSubtitle: 'What Mias Gadget customers say about us.',
      items: makeReviews('Mias Gadget', 'Abuja'),
    },
    colors: { primary: '#dc2626', accent: '#eab308' },
  },
  {
    id: 'demo-gadget',
    label: 'Demo Gadget Store',
    store: {
      name: 'Gadget Store',
      shortName: 'Gadget Store',
      tagline: 'Phones, Gadgets & Repairs',
      address: '123 Tech Plaza, Your City',
      phoneDisplay: '+234 803 456 7890',
      whatsappNumber: '2348034567890',
      email: 'hello@gadgetstore.ng',
      hours: [
        { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
        { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
        { day: 'Sunday', time: 'Closed' },
      ],
      mapEmbedSrc:
        'https://www.google.com/maps?q=Nigeria&output=embed',
      mapDirectionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Nigeria',
    },
    branding: {
      logo: '/placeholder-logo.svg',
      headerSubtitle: 'Gadgets · Nigeria',
      promoBar:
        'Original products · Fair prices · Fast delivery & repairs',
      footerTagline:
        'Gadget Store — your one-stop shop for phones, laptops, accessories and repairs. Update this profile when you have a client name.',
      footerSeoLine:
        'Gadget Store · Phone Shop · Gadget & Repair Store',
      locationHeading: 'Visit Gadget Store',
      locationDescription:
        'Walk in for expert advice, try devices in person, and get repairs done fast. Update the address when you have client details.',
    },
    hero: {
      badge: 'Your Trusted Gadget Store',
      titlePrefix: 'Discover Great Tech at',
      titleHighlight: 'Gadget Store',
      subtitle:
        'iPhones, Samsung, laptops and more at fair prices. Genuine warranty, fast delivery and expert repairs.',
      trustBadges: ['Genuine Products', 'Fast Delivery', 'Expert Repairs'],
      carouselImages: [
        { src: '/hero-phones.png', alt: 'Smartphones at Gadget Store' },
        { src: '/students.png', alt: 'Great gadget deals' },
        { src: '/repair-bench.png', alt: 'Professional repair services' },
      ],
      whatsappMessage:
        "Hello, I'd like to make an enquiry about a gadget.",
      specialOffer: 'Special Offers',
      hotDealTitle: 'iPhone 15\nPro',
      hotDealSubtitle: 'Available Now',
    },
    reviews: {
      sectionTitle: 'Loved by our customers',
      sectionDescription: 'Rated {rating} out of 5 from {count}+ happy customers.',
      pageSubtitle: 'Real feedback from happy customers.',
      items: makeReviews('Gadget Store', 'your area'),
    },
    colors: { primary: '#059669', accent: '#3b82f6' },
  },
]

export const DEFAULT_CLIENT_ID = clients[0].id

export function getClientById(id: string): ClientPreset {
  return clients.find((c) => c.id === id) ?? clients[0]
}

export function averageRatingFor(reviews: Review[]) {
  return (
    Math.round(
      (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10,
    ) / 10
  )
}
