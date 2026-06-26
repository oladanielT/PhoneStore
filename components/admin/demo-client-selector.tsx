'use client'

import { ExternalLink, Monitor } from 'lucide-react'
import Link from 'next/link'
import { useClient } from '@/components/client-provider'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function DemoClientSelector() {
  const { client, clientId, setClientId, clients } = useClient()

  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Monitor className="size-5 text-primary" />
          <CardTitle>Demo Client</CardTitle>
        </div>
        <CardDescription>
          Select which client to preview on the storefront. The entire site —
          name, location, hero, reviews and colors — updates instantly. Your
          selection is saved in this browser.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="demo-client">Active demo client</Label>
          <Select value={clientId} onValueChange={setClientId}>
            <SelectTrigger id="demo-client" className="bg-background">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent>
              {clients.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg border bg-background p-4 text-sm">
          <p className="font-medium">{client.store.shortName}</p>
          <p className="mt-1 text-muted-foreground">{client.store.tagline}</p>
          <p className="mt-2 text-muted-foreground">{client.store.address}</p>
          <p className="mt-1 text-muted-foreground">{client.store.phoneDisplay}</p>
        </div>

        <Button render={<Link href="/" target="_blank" />} className="w-full sm:w-auto">
          <ExternalLink className="size-4" />
          View storefront as {client.store.shortName}
        </Button>

        <p className="text-xs text-muted-foreground">
          To rename clients or edit their details, update{' '}
          <code className="rounded bg-muted px-1 py-0.5">lib/clients.ts</code>.
        </p>
      </CardContent>
    </Card>
  )
}
