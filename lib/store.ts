export const store = {
  name: 'Dell Survive Store Ife',
  shortName: 'Dell Survive',
  tagline: 'Phones, Gadgets & Repairs in Ile-Ife',
  address: 'Shop 5, Itasin Road, 220101, Ife, Osun State',
  phoneDisplay: '+234 806 807 7660',
  // E.164 without the plus, used for wa.me links
  whatsappNumber: '2348068077660',
  email: 'hello@dellsurvive.ng',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 7:30 PM' },
    { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '1:00 PM – 6:00 PM' },
  ],
  // Approximate Ile-Ife location for the embedded map
  mapEmbedSrc:
    'https://www.google.com/maps?q=Ife,+Osun+State,+Nigeria&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Itasin+Road+Ife+Osun+State+Nigeria',
}

export function formatNaira(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function whatsappLink(message: string) {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`
}
