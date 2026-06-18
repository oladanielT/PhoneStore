import { reviews, averageRating } from '@/lib/reviews'
import { SectionHeading } from '@/components/section-heading'
import { RatingStars } from '@/components/rating-stars'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="What Our Customers Say"
        subtitle="Real feedback from students and residents in Ile-Ife."
      />

      <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-3xl bg-primary/5 p-12 text-center">
        <div className="text-6xl font-extrabold text-primary">{averageRating}</div>
        <RatingStars rating={averageRating} />
        <p className="text-lg font-medium">Average Customer Rating</p>
        <p className="text-sm text-muted-foreground">Based on {reviews.length} verified purchases & repairs</p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="relative overflow-hidden border-2 transition-all hover:border-primary/30">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <div className="text-primary/20">
                  <Quote className="size-8 fill-current" />
                </div>
              </div>
              <div className="mt-2">
                <RatingStars rating={review.rating} size="sm" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                "{review.text}"
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                {review.date}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 rounded-2xl bg-muted p-8 text-center sm:p-12">
        <h3 className="font-heading text-2xl font-bold">Share Your Experience</h3>
        <p className="mt-2 text-muted-foreground">Recently bought from us? We'd love to hear your feedback!</p>
        <a 
          href="https://g.page/r/brightway-phones-ife/review" 
          target="_blank" 
          className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95"
        >
          Leave a Google Review
        </a>
      </div>
    </div>
  )
}
