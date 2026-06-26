'use client'

import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Smartphone, Monitor, Battery, Zap, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useClient } from '@/components/client-provider'

const services = [
  {
    title: 'Screen Replacement',
    description: 'Cracked or bleeding screen? We use original grade displays for iPhone, Samsung, and more.',
    icon: Smartphone,
  },
  {
    title: 'Battery Swap',
    description: 'Phone dying fast? Get a fresh, high-capacity battery with warranty in under 30 minutes.',
    icon: Battery,
  },
  {
    title: 'Charging Port Fix',
    description: 'Struggling to charge? We clean or replace charging ports to get you powered up again.',
    icon: Zap,
  },
  {
    title: 'Laptop Repair',
    description: 'Software issues, hardware upgrades (RAM/SSD), or keyboard replacements for all brands.',
    icon: Monitor,
  },
]

export default function RepairsPage() {
  const { client } = useClient()
  const { store } = client

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Professional Repairs"
        subtitle={`Fast, reliable, and affordable tech repair services at ${store.shortName}.`}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Card key={i} className="border-2 transition-all hover:border-primary/50">
            <CardHeader>
              <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="size-6" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-extrabold lg:text-4xl">
            Why repair with <span className="text-primary">{store.shortName}</span>?
          </h2>

          <div className="space-y-4">
            {[
              { icon: Clock, title: 'Swift Turnaround', text: 'Most phone repairs are completed while you wait or within 24 hours.' },
              { icon: ShieldCheck, title: 'Service Warranty', text: 'All our repairs come with a standard warranty for your peace of mind.' },
              { icon: MapPin, title: 'In-Store Expertise', text: `Visit our shop for professional service by expert technicians.` },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <WhatsAppButton
              message={`Hello ${store.shortName}, I'd like to ask about a repair for my device.`}
              className="h-14 px-10 text-lg font-bold"
            >
              Get a Repair Quote
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-3xl bg-muted shadow-2xl">
          <img
            src="/repair-bench.png"
            alt={`Expert repair service at ${store.shortName}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-heading text-xl font-bold">Trusted by 1000+ Customers</p>
            <p className="text-sm opacity-80">Serving the community since 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}
