import { MapPin, Clock, Phone } from "lucide-react"
import { store } from "@/lib/store"

export function LocationSection() {
  return (
    <section className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Visit Us</span>
            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-balance md:text-4xl">
              Find Brightway Phones in Ile-Ife
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Come see the gadgets in person, get expert advice and same-day repairs. We&apos;re close to OAU campus and
              easy to reach.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{store.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">
                  {store.hours.map((h) => (
                    <span key={h.day} className="block">
                      <span className="font-medium text-foreground">{h.day}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <a
                  href={`tel:${store.phoneDisplay.replace(/\s/g, "")}`}
                  className="text-sm leading-relaxed hover:text-primary"
                >
                  {store.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              title={`Map showing ${store.name} location`}
              src={store.mapEmbedSrc}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
