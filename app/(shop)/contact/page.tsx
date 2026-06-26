'use client'

import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useClient } from '@/components/client-provider'

export default function ContactPage() {
  const { client } = useClient()
  const { store } = client

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Get in Touch"
        subtitle={`Have a question about a phone or need a repair? ${store.shortName} is here to help.`}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help with?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about what you're looking for..." className="min-h-[120px]" />
              </div>
              <Button size="lg" className="w-full font-bold">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-2 border-primary/10 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">{store.phoneDisplay}</p>
                  <p className="text-xs text-muted-foreground">
                    {store.hours[0]?.day}: {store.hours[0]?.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-muted-foreground">{store.phoneDisplay}</p>
                  <p className="text-xs text-muted-foreground">Instant chat for quick enquiries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-muted-foreground">{store.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold">Our Store</h4>
                  <p className="text-muted-foreground">{store.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
