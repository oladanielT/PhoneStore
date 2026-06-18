import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = 'View all',
  action,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  href?: string
  hrefLabel?: string
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className="flex flex-col gap-1.5">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action
        ? action
        : href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              {hrefLabel}
              <ArrowRight className="size-4" />
            </Link>
          )}
    </div>
  )
}
