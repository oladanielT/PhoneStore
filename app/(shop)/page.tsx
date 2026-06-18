import { Hero } from "@/components/home/hero"
import { CategoryGrid } from "@/components/home/category-grid"
import { WhyUs } from "@/components/home/why-us"
import { StudentBanner } from "@/components/home/student-banner"
import { ReviewsStrip } from "@/components/home/reviews-strip"
import { RepairsCta } from "@/components/home/repairs-cta"
import { LocationSection } from "@/components/location-section"
import { ProductGrid } from "@/components/product/product-grid"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { featured } from "@/lib/products"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = featured()
  return (
    <>
      <Hero />
      <CategoryGrid />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Hot Right Now"
          title="Featured deals this week"
          description="Handpicked phones and gadgets going fast. Order online or chat with us on WhatsApp."
          action={
            <Button render={<Link href="/shop">View all products</Link>} variant="outline" />
          }
        />
        <div className="mt-8">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      <StudentBanner />
      <WhyUs />
      <ReviewsStrip />
      <RepairsCta />
      <LocationSection />
    </>
  )
}
