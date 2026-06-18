import { ShieldCheck, Truck, Wrench, BadgeCheck } from "lucide-react"

const points = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "Original phones and accessories with warranty. No fakes, no stories.",
  },
  {
    icon: BadgeCheck,
    title: "Fair, Honest Prices",
    desc: "Transparent pricing and real student discounts you can trust.",
  },
  {
    icon: Wrench,
    title: "Expert Repairs",
    desc: "Screen, battery and software fixes done right, usually same-day.",
  },
  {
    icon: Truck,
    title: "Fast Delivery in Ife",
    desc: "Quick dispatch around OAU and Ile-Ife, or pick up in store.",
  },
]

export function WhyUs() {
  return (
    <section className="border-y bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
