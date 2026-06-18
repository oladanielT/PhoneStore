import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RatingStars({
  rating,
  className,
  size = 'size-4',
}: {
  rating: number
  className?: string
  size?: string
}) {
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            size,
            i <= Math.round(rating)
              ? 'fill-accent text-accent'
              : 'fill-muted text-muted',
          )}
        />
      ))}
    </div>
  )
}
