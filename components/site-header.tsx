'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, ShoppingBag, Smartphone } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { store } from '@/lib/store'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/student-deals', label: 'Student Deals' },
  { href: '/repairs', label: 'Repairs' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const { count, setOpen } = useCart()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="hidden items-center justify-center bg-primary px-4 py-1.5 text-center text-xs font-medium text-primary-foreground sm:flex">
        Free screen guard fitting in store · Student deals near OAU · Fast delivery in Ile-Ife
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-10 overflow-hidden rounded-lg bg-white">
            <Image
              src="/placeholder-logo.svg"
              alt="Dell Survive Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-extrabold tracking-tight">
              Dell Survive
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
              Phones · Ife
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                  active ? 'text-primary' : 'text-foreground/70',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={`tel:${store.phoneDisplay.replace(/\s/g, '')}`}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'hidden h-10 px-3 sm:inline-flex',
            )}
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">Call us</span>
          </a>

          <Button
            variant="outline"
            className="relative h-10 px-3"
            onClick={() => setOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="size-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Button>

          <ModeToggle />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2">
                {nav.map((item) => {
                  const active =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted',
                        active && 'bg-muted text-primary',
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link
                  href="/location"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Find Our Store
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CartDrawer />
    </header>
  )
}
