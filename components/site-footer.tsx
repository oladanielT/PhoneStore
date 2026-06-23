import Image from 'next/image'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { store } from '@/lib/store'
import { categories } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative size-10 overflow-hidden rounded-lg bg-white">
              <Image
                src="/placeholder-logo.svg"
                alt="Dell Survive Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-heading text-base font-extrabold">
              Dell Survive
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Your trusted phone, gadget and repair shop in Ile-Ife. Original
            products, fair prices and warranty you can rely on.
          </p>
          <WhatsAppButton
            message="Hello Dell Survive, I'd like to make an enquiry."
            className="mt-1 w-full sm:w-auto"
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Shop</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/shop?category=${c.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/student-deals" className="hover:text-primary">
                Student Deals
              </Link>
            </li>
            <li>
              <Link href="/repairs" className="hover:text-primary">
                Phone Repairs
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-primary">
                Customer Reviews
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-primary">
                Find Our Store
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Visit Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{store.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href={`tel:${store.phoneDisplay.replace(/\s/g, '')}`}
                className="hover:text-primary"
              >
                {store.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${store.email}`} className="hover:text-primary">
                {store.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Mon–Sat: 8:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Dell Survive Store Ife. All rights
            reserved.
          </p>
          <p>
            Phone Store in Ile-Ife · Gadget Shop near OAU · Phone Repair Ile-Ife
          </p>
        </div>
      </div>
    </footer>
  )
}
