'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/components/cart/cart-provider'
import { formatNaira } from '@/lib/store'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const { isOpen, setOpen, lines, subtotal, count, setQuantity, remove } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="size-5" />
            Your Cart {count > 0 && `(${count})`}
          </SheetTitle>
          <SheetDescription>
            Pay online or checkout via WhatsApp — your choice.
          </SheetDescription>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
              Browse our phones, gadgets and accessories.
            </p>
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), 'mt-2 h-10 px-5')}
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4">
            <ul className="flex flex-col gap-4 py-4">
              {lines.map((line) => (
                <li key={line.product.id} className="flex gap-3">
                  <Link
                    href={`/product/${line.product.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative size-20 shrink-0 overflow-hidden rounded-lg border bg-secondary"
                  >
                    <Image
                      src={line.product.image || '/placeholder.svg'}
                      alt={line.product.name}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${line.product.slug}`}
                        onClick={() => setOpen(false)}
                        className="line-clamp-2 text-sm font-medium hover:text-primary"
                      >
                        {line.product.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => remove(line.product.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`Remove ${line.product.name}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-sm font-semibold text-primary">
                      {formatNaira(line.product.price)}
                    </p>
                    <div className="mt-auto flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() =>
                          setQuantity(line.product.id, line.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {line.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() =>
                          setQuantity(line.product.id, line.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {lines.length > 0 && (
          <SheetFooter className="gap-3">
            <Separator />
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Delivery and pickup options are confirmed at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), 'h-11 w-full text-sm')}
            >
              Proceed to checkout
            </Link>
            <Button
              variant="ghost"
              className="h-9"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" /> Continue shopping
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
