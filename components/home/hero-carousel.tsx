"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: (
      <>
        Upgrade Your Tech with{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dell Survive
        </span>
      </>
    ),
    subtitle:
      "The most trusted source for iPhones, Samsung, and laptops in Ile-Ife. Premium tech with authentic warranty.",
    image: "/hero-phones.png",
    badge: "Official Retailer in Ile-Ife",
    cta: "Shop Collection",
    href: "/shop",
    color: "bg-primary/5",
  },
  {
    title: (
      <>
        Exclusive <span className="text-primary">Student Deals</span> for OAU
      </>
    ),
    subtitle:
      "Special discounts on smartphones and study laptops for Great Ife students. Fast hostel delivery available.",
    image: "/students.png",
    badge: "OAU Student Specials",
    cta: "View Student Deals",
    href: "/student-deals",
    color: "bg-accent/5",
  },
  {
    title: (
      <>
        Expert <span className="text-primary">Repairs</span> while you wait
      </>
    ),
    subtitle:
      "Cracked screen? Battery issues? Our expert technicians fix your devices fast with genuine parts.",
    image: "/repair-bench.png",
    badge: "Same-Day Service",
    cta: "Book a Repair",
    href: "/repairs",
    color: "bg-primary/5",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative h-[700px] w-full lg:h-[650px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 flex items-center transition-all duration-1000 ease-in-out",
              index === current
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full",
              index < current && "-translate-x-full",
            )}
          >
            {/* Decorative Background Elements */}
            <div
              className={cn(
                "absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full blur-3xl opacity-50",
                slide.color,
              )}
            />
            <div
              className={cn(
                "absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full blur-3xl opacity-50",
                slide.color === "bg-primary/5"
                  ? "bg-accent/10"
                  : "bg-primary/10",
              )}
            />

            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    <Zap className="size-3.5 fill-current" />
                    {slide.badge}
                  </span>
                </div>

                <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-6xl md:text-7xl">
                  {slide.title}
                </h1>

                <p className="max-w-md text-lg leading-relaxed text-muted-foreground/90">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={slide.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95",
                    )}
                  >
                    {slide.cta} <ArrowRight className="ml-2 size-5" />
                  </Link>
                  <WhatsAppButton
                    message={`Hello Dell Survive, I'd like to ask about ${slide.cta === "Book a Repair" ? "a repair" : "phones"}.`}
                    className="h-14 px-8 text-base font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    Chat to Buy
                  </WhatsAppButton>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, text: "Genuine Warranty" },
                    { icon: Truck, text: "Swift Ife Delivery" },
                    { icon: Zap, text: "Fast Support" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="size-4" />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-4 border-background bg-secondary/30 shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.badge}
                    fill
                    priority={index === 0}
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 px-4 sm:left-auto sm:right-12 sm:translate-x-0">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="size-12 rounded-full border-2 bg-background/50 backdrop-blur hover:bg-background"
        >
          <ChevronLeft className="size-6" />
        </Button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="size-12 rounded-full border-2 bg-background/50 backdrop-blur hover:bg-background"
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>
    </section>
  );
}
