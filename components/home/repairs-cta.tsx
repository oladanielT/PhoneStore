import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const fixes = ["Cracked screen replacement", "Battery swap", "Charging port repair", "Software & unlock issues"]

export function RepairsCta() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 overflow-hidden rounded-3xl border bg-card shadow-sm md:grid-cols-2 md:items-center">
        <div className="relative h-56 md:h-full md:min-h-[22rem]">
          <Image
            src="/repair-bench.png"
            alt="Technician repairing a smartphone at a workbench"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 md:p-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Repair Services</span>
          <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-balance md:text-4xl">
            Phone acting up? We&apos;ll fix it fast
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Trusted, affordable repairs with genuine parts. Most fixes done the same day so you&apos;re never offline
            for long.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {fixes.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="flex size-5 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                  <Check className="size-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <Button render={<Link href="/repairs">Book a Repair</Link>} size="lg" className="mt-8" />
        </div>
      </div>
    </section>
  )
}
