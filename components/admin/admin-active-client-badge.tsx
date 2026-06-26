'use client'

import { useClient } from '@/components/client-provider'

export function AdminActiveClientBadge() {
  const { client } = useClient()

  return (
    <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:inline-flex">
      Demo: {client.store.shortName}
    </span>
  )
}
