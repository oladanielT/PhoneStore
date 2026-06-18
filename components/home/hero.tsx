'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ShieldCheck, Truck, ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { cn } from '@/lib/utils'

const carouselImages = [
  { src: '/hero-phones.png', alt: 'Premium smartphones at Brightway' },
  { src: '/students.png', alt: 'OAU Student tech deals' },
  { src: '/repair-bench.png', alt: 'Professional repair services' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselImages.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative overflow-hidden bg-background border-b">
      {/* Decorative Background Elements */}
      <div className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Zap className="size-3.5 fill-current" />
              Official Retailer in Ile-Ife
            </span>
          </div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Upgrade Your Tech with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Brightway</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground/90">
            The most trusted source for iPhones, Samsung, laptops, and more in Ile-Ife. 
            Experience premium tech with authentic warranty and lightning-fast delivery.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className={cn(buttonVariants({ size: 'lg' }), 'h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95')}
            >
              Shop Collection <ArrowRight className="ml-2 size-5" />
            </Link>
            <WhatsAppButton
              message="Hello Brightway, I'd like to make an enquiry about a phone."
              className="h-14 px-8 text-base font-bold transition-all hover:scale-105 active:scale-95"
            >
              Chat to Buy
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, text: 'Genuine Warranty' },
              { icon: Truck, text: 'Swift Ife Delivery' },
              { icon: MapPin, text: 'Store Pickup' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-4 border-background bg-secondary/30 shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  index === current ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
            
            {/* Carousel Navigation */}
            <div className="absolute inset-x-4 bottom-6 flex items-center justify-between z-20">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={(e) => { e.preventDefault(); prev(); }}
                    className="size-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
                >
                    <ChevronLeft className="size-6" />
                </Button>
                <div className="flex gap-1.5">
                    {carouselImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
                            )}
                        />
                    ))}
                </div>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={(e) => { e.preventDefault(); next(); }}
                    className="size-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
                >
                    <ChevronRight className="size-6" />
                </Button>
            </div>

            {/* Overlay Glass Card */}
            <div className="absolute right-6 top-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md dark:bg-black/20 z-10">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  %
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-white uppercase tracking-wider">Special Offer</p>
                  <p className="text-lg font-extrabold text-white leading-none">Up to 15% OFF</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -top-6 -left-6 hidden animate-bounce-slow rounded-2xl border bg-background p-4 shadow-xl sm:block z-20">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Hot Deals</p>
              <p className="font-heading text-lg font-black text-primary leading-tight">iPhone 16<br />Pro Max</p>
              <p className="text-xs font-medium text-muted-foreground">Limited Stock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
