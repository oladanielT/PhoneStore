'use client'

import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart/cart-provider'
import { cn } from '@/lib/utils'

export function AddToCartButton({
  productId,
  name,
  quantity = 1,
  variant = 'default',
  className,
  label = 'Add to cart',
  openCart = false,
}: {
  productId: string
  name: string
  quantity?: number
  variant?: 'default' | 'outline' | 'secondary'
  className?: string
  label?: string
  openCart?: boolean
}) {
  const { add, setOpen } = useCart()

  return (
    <Button
      variant={variant}
      className={cn('h-11 text-sm', className)}
      onClick={() => {
        add(productId, quantity)
        toast.success(`${name} added to cart`)
        if (openCart) setOpen(true)
      }}
    >
      <ShoppingBag className="size-4" />
      {label}
    </Button>
  )
}
