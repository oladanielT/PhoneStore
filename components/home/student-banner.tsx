import Image from "next/image"
import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StudentBanner() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium">
              <GraduationCap className="size-4" />
              OAU Student Deals
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance md:text-4xl">
              Show your student ID, unlock special prices
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-primary-foreground/85">
              Affordable phones, free screen guard fitting and student-only discounts for Great Ife students. Spread
              payment options available on select devices.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button render={<Link href="/student-deals">View Student Deals</Link>} size="lg" variant="secondary" />
              <Button
                render={<Link href="/shop">Browse Phones</Link>}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              />
            </div>
          </div>
          <div className="relative h-56 md:h-full md:min-h-[20rem]">
            <Image
              src="/students.png"
              alt="University students using their smartphones on campus"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
