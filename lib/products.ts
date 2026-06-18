export type CategorySlug =
  | 'iphones'
  | 'samsung'
  | 'tecno'
  | 'infinix'
  | 'redmi'
  | 'laptops'
  | 'smartwatches'
  | 'accessories'
  | 'used-uk-used'

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: CategorySlug
  price: number
  oldPrice?: number
  image: string
  condition: 'New' | 'UK-Used' | 'Refurbished'
  inStock: boolean
  warranty: string
  studentDeal?: boolean
  newArrival?: boolean
  shortDescription: string
  specs: { label: string; value: string }[]
}

export const categories: { slug: CategorySlug; name: string; blurb: string }[] = [
  { slug: 'iphones', name: 'iPhones', blurb: 'Apple iPhones, new & UK-used' },
  { slug: 'samsung', name: 'Samsung', blurb: 'Galaxy A & S series' },
  { slug: 'tecno', name: 'Tecno', blurb: 'Affordable everyday phones' },
  { slug: 'infinix', name: 'Infinix', blurb: 'Big battery, big screens' },
  { slug: 'redmi', name: 'Redmi', blurb: 'Value-packed Xiaomi phones' },
  { slug: 'laptops', name: 'Laptops', blurb: 'Study & work laptops' },
  { slug: 'smartwatches', name: 'Smart Watches', blurb: 'Track, call & stay fit' },
  { slug: 'accessories', name: 'Accessories', blurb: 'Chargers, earbuds & more' },
  { slug: 'used-uk-used', name: 'UK-Used Phones', blurb: 'Clean, tested & affordable' },
]

export const categoryName = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)?.name ?? slug

export const products: Product[] = [
  {
    id: 'ip15pm',
    slug: 'iphone-15-pro-max-256gb',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    category: 'iphones',
    price: 1450000,
    oldPrice: 1550000,
    image: '/products/iphone-15-pro-max.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    newArrival: true,
    shortDescription:
      'Titanium design, A17 Pro chip and a 5x telephoto camera. Sealed and ready.',
    specs: [
      { label: 'Display', value: '6.7" Super Retina XDR' },
      { label: 'Storage', value: '256GB' },
      { label: 'RAM', value: '8GB' },
      { label: 'Camera', value: '48MP + 12MP + 12MP' },
      { label: 'Battery', value: '4422 mAh' },
      { label: 'Chip', value: 'A17 Pro' },
    ],
  },
  {
    id: 'ip13',
    slug: 'iphone-13-128gb',
    name: 'iPhone 13 128GB',
    brand: 'Apple',
    category: 'iphones',
    price: 620000,
    image: '/products/iphone-13.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    shortDescription:
      'A reliable favourite with the A15 Bionic chip and a great dual camera.',
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR' },
      { label: 'Storage', value: '128GB' },
      { label: 'RAM', value: '4GB' },
      { label: 'Camera', value: '12MP + 12MP' },
      { label: 'Battery', value: '3240 mAh' },
      { label: 'Chip', value: 'A15 Bionic' },
    ],
  },
  {
    id: 'sa15',
    slug: 'samsung-galaxy-a15-128gb',
    name: 'Samsung Galaxy A15 128GB',
    brand: 'Samsung',
    category: 'samsung',
    price: 185000,
    oldPrice: 205000,
    image: '/products/samsung-a15.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    studentDeal: true,
    shortDescription:
      'Big 5000mAh battery and a crisp Super AMOLED screen — perfect for students.',
    specs: [
      { label: 'Display', value: '6.5" Super AMOLED' },
      { label: 'Storage', value: '128GB' },
      { label: 'RAM', value: '6GB' },
      { label: 'Camera', value: '50MP + 5MP + 2MP' },
      { label: 'Battery', value: '5000 mAh' },
      { label: 'Network', value: '4G LTE' },
    ],
  },
  {
    id: 's23u',
    slug: 'samsung-galaxy-s23-ultra-256gb',
    name: 'Samsung Galaxy S23 Ultra 256GB',
    brand: 'Samsung',
    category: 'samsung',
    price: 1150000,
    image: '/products/samsung-s23-ultra.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    newArrival: true,
    shortDescription:
      'Built-in S Pen, 200MP camera and a massive battery for power users.',
    specs: [
      { label: 'Display', value: '6.8" Dynamic AMOLED 2X' },
      { label: 'Storage', value: '256GB' },
      { label: 'RAM', value: '12GB' },
      { label: 'Camera', value: '200MP quad camera' },
      { label: 'Battery', value: '5000 mAh' },
      { label: 'Extras', value: 'S Pen included' },
    ],
  },
  {
    id: 'tspark20',
    slug: 'tecno-spark-20-pro',
    name: 'Tecno Spark 20 Pro',
    brand: 'Tecno',
    category: 'tecno',
    price: 165000,
    oldPrice: 180000,
    image: '/products/tecno-spark-20-pro.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    studentDeal: true,
    shortDescription:
      'A bright 120Hz display and a 108MP camera at a student-friendly price.',
    specs: [
      { label: 'Display', value: '6.78" 120Hz' },
      { label: 'Storage', value: '256GB' },
      { label: 'RAM', value: '8GB (+8GB virtual)' },
      { label: 'Camera', value: '108MP main' },
      { label: 'Battery', value: '5000 mAh' },
      { label: 'Charging', value: '33W fast charge' },
    ],
  },
  {
    id: 'hot40i',
    slug: 'infinix-hot-40i',
    name: 'Infinix Hot 40i',
    brand: 'Infinix',
    category: 'infinix',
    price: 132000,
    image: '/products/infinix-hot-40i.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    studentDeal: true,
    shortDescription:
      'Smooth 90Hz screen and a long-lasting 5000mAh battery for all-day use.',
    specs: [
      { label: 'Display', value: '6.56" 90Hz' },
      { label: 'Storage', value: '128GB' },
      { label: 'RAM', value: '8GB' },
      { label: 'Camera', value: '50MP dual' },
      { label: 'Battery', value: '5000 mAh' },
      { label: 'Network', value: '4G LTE' },
    ],
  },
  {
    id: 'rn13pro',
    slug: 'redmi-note-13-pro',
    name: 'Redmi Note 13 Pro',
    brand: 'Redmi',
    category: 'redmi',
    price: 295000,
    oldPrice: 320000,
    image: '/products/redmi-note-13-pro.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    newArrival: true,
    shortDescription:
      'A stunning 200MP camera and 67W turbo charging — flagship feel for less.',
    specs: [
      { label: 'Display', value: '6.67" AMOLED 120Hz' },
      { label: 'Storage', value: '256GB' },
      { label: 'RAM', value: '8GB' },
      { label: 'Camera', value: '200MP OIS' },
      { label: 'Battery', value: '5100 mAh' },
      { label: 'Charging', value: '67W turbo' },
    ],
  },
  {
    id: 'hppav15',
    slug: 'hp-pavilion-15-laptop',
    name: 'HP Pavilion 15 (Core i5, 16GB)',
    brand: 'HP',
    category: 'laptops',
    price: 720000,
    image: '/products/hp-pavilion-15.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    shortDescription:
      'A dependable study and work laptop with a fast SSD and full-day battery.',
    specs: [
      { label: 'Display', value: '15.6" FHD' },
      { label: 'Processor', value: 'Intel Core i5 13th Gen' },
      { label: 'RAM', value: '16GB DDR4' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Graphics', value: 'Intel Iris Xe' },
      { label: 'OS', value: 'Windows 11' },
    ],
  },
  {
    id: 'awse',
    slug: 'apple-watch-se',
    name: 'Apple Watch SE (2nd Gen)',
    brand: 'Apple',
    category: 'smartwatches',
    price: 320000,
    image: '/products/apple-watch-se.png',
    condition: 'New',
    inStock: true,
    warranty: '1 year warranty',
    shortDescription:
      'Fitness tracking, calls and notifications on your wrist — pairs with iPhone.',
    specs: [
      { label: 'Case', value: '44mm Aluminium' },
      { label: 'Display', value: 'Retina LTPO OLED' },
      { label: 'Sensors', value: 'Heart rate, accelerometer' },
      { label: 'Battery', value: 'Up to 18 hours' },
      { label: 'Water', value: '50m water resistant' },
    ],
  },
  {
    id: 't800',
    slug: 't800-ultra-smart-watch',
    name: 'T800 Ultra Smart Watch',
    brand: 'Generic',
    category: 'smartwatches',
    price: 18500,
    oldPrice: 25000,
    image: '/products/t800-ultra-watch.png',
    condition: 'New',
    inStock: true,
    warranty: '3 months warranty',
    studentDeal: true,
    shortDescription:
      'Affordable Bluetooth-calling smartwatch with multiple sport modes.',
    specs: [
      { label: 'Display', value: '1.99" HD' },
      { label: 'Calls', value: 'Bluetooth calling' },
      { label: 'Sensors', value: 'Heart rate, steps' },
      { label: 'Battery', value: 'Up to 5 days' },
    ],
  },
  {
    id: 'oraimo20k',
    slug: 'oraimo-power-bank-20000mah',
    name: 'Oraimo Power Bank 20000mAh',
    brand: 'Oraimo',
    category: 'accessories',
    price: 22500,
    image: '/products/oraimo-power-bank.png',
    condition: 'New',
    inStock: true,
    warranty: '6 months warranty',
    studentDeal: true,
    shortDescription:
      'Charge your phone multiple times with fast 22.5W output. Campus essential.',
    specs: [
      { label: 'Capacity', value: '20000 mAh' },
      { label: 'Output', value: '22.5W fast charge' },
      { label: 'Ports', value: 'USB-A x2, USB-C' },
      { label: 'Display', value: 'Battery % screen' },
    ],
  },
  {
    id: 'anker20w',
    slug: 'anker-20w-fast-charger',
    name: 'Anker 20W USB-C Fast Charger',
    brand: 'Anker',
    category: 'accessories',
    price: 12000,
    image: '/products/anker-charger.png',
    condition: 'New',
    inStock: true,
    warranty: '6 months warranty',
    shortDescription:
      'Original Anker adapter that charges phones quickly and safely.',
    specs: [
      { label: 'Output', value: '20W PD' },
      { label: 'Port', value: 'USB-C' },
      { label: 'Compatibility', value: 'iPhone & Android' },
    ],
  },
  {
    id: 'boatbuds',
    slug: 'wireless-earbuds',
    name: 'boAt Airdopes Wireless Earbuds',
    brand: 'boAt',
    category: 'accessories',
    price: 26000,
    oldPrice: 32000,
    image: '/products/wireless-earbuds.png',
    condition: 'New',
    inStock: true,
    warranty: '6 months warranty',
    studentDeal: true,
    shortDescription:
      'Punchy bass, clear calls and long battery life with the charging case.',
    specs: [
      { label: 'Type', value: 'True Wireless (TWS)' },
      { label: 'Battery', value: 'Up to 40 hrs total' },
      { label: 'Bluetooth', value: '5.3' },
      { label: 'Extras', value: 'Touch controls' },
    ],
  },
  {
    id: 'glass',
    slug: 'tempered-glass-screen-guard',
    name: 'Tempered Glass Screen Guard',
    brand: 'Generic',
    category: 'accessories',
    price: 3500,
    image: '/products/screen-guard.png',
    condition: 'New',
    inStock: true,
    warranty: 'Free fitting in store',
    shortDescription:
      'Crystal-clear 9H protection. Free professional fitting at the shop.',
    specs: [
      { label: 'Hardness', value: '9H tempered' },
      { label: 'Fit', value: 'Edge-to-edge' },
      { label: 'Compatibility', value: 'Most iPhone & Android' },
    ],
  },
  {
    id: 'ukip12',
    slug: 'uk-used-iphone-12-128gb',
    name: 'UK-Used iPhone 12 128GB',
    brand: 'Apple',
    category: 'used-uk-used',
    price: 365000,
    oldPrice: 410000,
    image: '/products/uk-used-iphone-12.png',
    condition: 'UK-Used',
    inStock: true,
    warranty: '7-day test warranty',
    studentDeal: true,
    shortDescription:
      'Clean, fully tested UK-used iPhone 12 with strong battery health.',
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR' },
      { label: 'Storage', value: '128GB' },
      { label: 'Battery Health', value: '85%+' },
      { label: 'Camera', value: '12MP + 12MP' },
      { label: 'Condition', value: 'Grade A, clean' },
    ],
  },
]

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getProductById = (id: string) =>
  products.find((p) => p.id === id)

export const productsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug)

export const studentDeals = () => products.filter((p) => p.studentDeal)
export const newArrivals = () => products.filter((p) => p.newArrival)
export const featured = () =>
  products.filter((p) =>
    ['ip15pm', 's23u', 'rn13pro', 'sa15', 'tspark20', 'oraimo20k'].includes(p.id),
  )

export const relatedProducts = (product: Product) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
