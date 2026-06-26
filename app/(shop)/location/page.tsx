'use client'

import { LocationSection } from '@/components/location-section'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Navigation, Map } from 'lucide-react'
import { useClient } from '@/components/client-provider'
import { Button } from '@/components/ui/button'

export default function LocationPage() {
  const { client } = useClient()
  const { store } = client

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Find Our Store"
        subtitle={client.branding.locationDescription}
      />

      <div className="mt-12">
        <LocationSection />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <Card className="border-2 text-center">
          <CardHeader>
            <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Navigation className="size-6" />
            </div>
            <CardTitle>Getting Here</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use Google Maps for turn-by-turn directions to {store.shortName} at {store.address}.
            </p>
            <Button asChild className="mt-6 w-full font-bold">
              <a href={store.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 text-center">
          <CardHeader>
            <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="size-6" />
            </div>
            <CardTitle>Pickup Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Order online and select &ldquo;Store Pickup&rdquo; at checkout. Your items will be ready for collection in as little as 30 minutes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 text-center">
          <CardHeader>
            <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Map className="size-6" />
            </div>
            <CardTitle>Parking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Street parking is available near the store for quick visits and drop-offs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
