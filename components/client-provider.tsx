'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  clients,
  DEFAULT_CLIENT_ID,
  getClientById,
  type ClientPreset,
} from '@/lib/clients'

type ClientContextValue = {
  client: ClientPreset
  clientId: string
  setClientId: (id: string) => void
  clients: ClientPreset[]
}

const ClientContext = createContext<ClientContextValue | null>(null)

const LEGACY_STORAGE_KEYS = [
  'phone-store-active-client-v1',
  'phone-store-active-client-v2',
]

function applyClientColors(client: ClientPreset) {
  if (!client.colors) return
  const root = document.documentElement
  root.style.setProperty('--primary', client.colors.primary)
  root.style.setProperty('--accent', client.colors.accent)
}

function applyDocumentTitle(client: ClientPreset) {
  document.title = `${client.store.name} | ${client.store.tagline}`
}

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [clientId, setClientIdState] = useState(DEFAULT_CLIENT_ID)

  useEffect(() => {
    try {
      for (const key of LEGACY_STORAGE_KEYS) {
        localStorage.removeItem(key)
      }
    } catch {
      // ignore
    }
  }, [])

  const client = useMemo(() => getClientById(clientId), [clientId])

  useEffect(() => {
    applyClientColors(client)
    applyDocumentTitle(client)
  }, [client])

  const setClientId = useCallback((id: string) => {
    if (clients.some((c) => c.id === id)) {
      setClientIdState(id)
    }
  }, [])

  const value: ClientContextValue = {
    client,
    clientId,
    setClientId,
    clients,
  }

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  )
}

export function useClient() {
  const ctx = useContext(ClientContext)
  if (!ctx) throw new Error('useClient must be used within ClientProvider')
  return ctx
}

export function useStore() {
  return useClient().client.store
}
