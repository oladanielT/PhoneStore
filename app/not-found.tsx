import Link from 'next/link'
import { Smartphone, Home, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Smartphone className="size-12" />
      </div>
      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Oops! The page you're looking for doesn't exist or has been moved. 
        Don't worry, our gadgets are still here!
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button render={<Link href="/"><Home className="mr-2 size-5" /> Back to Home</Link>} size="lg" className="h-12 px-8" />
        <Button render={<Link href="/shop"><ShoppingBag className="mr-2 size-5" /> Start Shopping</Link>} variant="outline" size="lg" className="h-12 px-8" />
      </div>
    </div>
  )
}
