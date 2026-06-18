import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/store'
import { cn } from '@/lib/utils'

export function WhatsAppButton({
  message,
  children = 'Chat on WhatsApp to Buy',
  className,
}: {
  message: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-whatsapp/40',
        className,
      )}
    >
      <MessageCircle className="size-4" />
      {children}
    </a>
  )
}
