import { studentDeals } from '@/lib/products'
import { ProductGrid } from '@/components/product/product-grid'
import { SectionHeading } from '@/components/section-heading'
import Image from 'next/image'

export default function StudentDealsPage() {
  const deals = studentDeals()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-primary px-8 py-12 text-primary-foreground sm:px-12 sm:py-16">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Exclusive Deals for OAU Students
          </h1>
          <p className="mt-6 text-lg opacity-90 sm:text-xl">
            We know the student life! Get special discounts on iPhones, laptops, and essentials. Just show your ID in store or use your student email online.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 hidden size-96 rounded-full bg-white/10 blur-3xl lg:block" />
        <div className="absolute -bottom-20 -left-20 hidden size-96 rounded-full bg-accent/20 blur-3xl lg:block" />
      </div>

      <SectionHeading
        title="Student Specials"
        subtitle="Handpicked tech at prices that won't break the bank."
      />

      <div className="mt-10">
        <ProductGrid products={deals} />
      </div>

      <div className="mt-20 rounded-2xl border-2 border-dashed border-primary/30 p-8 text-center bg-primary/5">
        <h3 className="font-heading text-2xl font-bold">Don't see what you need?</h3>
        <p className="mt-2 text-muted-foreground">We offer student discounts on almost everything in store. Chat with us to get a custom quote!</p>
        <a 
          href="https://wa.me/2348068077660" 
          target="_blank" 
          className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95"
        >
          Enquire about Student Discount
        </a>
      </div>
    </div>
  )
}
