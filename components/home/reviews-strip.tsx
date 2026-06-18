import Link from "next/link"
import { reviews, averageRating } from "@/lib/reviews"
import { RatingStars } from "@/components/rating-stars"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export function ReviewsStrip() {
  const featured = reviews.slice(0, 3)
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        eyebrow="Customer Reviews"
        title="Loved by students and locals in Ife"
        description={`Rated ${averageRating} out of 5 from ${reviews.length}+ happy customers.`}
        action={
          <Button render={<Link href="/reviews">Read all stories</Link>} variant="outline" />
        }
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {featured.map((r) => (
          <figure key={r.id} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <RatingStars rating={r.rating} />
            <blockquote className="mt-4 flex-1 leading-relaxed text-card-foreground">{`"${r.text}"`}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold">{r.name}</span>
                <span className="block text-xs text-muted-foreground">{r.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
