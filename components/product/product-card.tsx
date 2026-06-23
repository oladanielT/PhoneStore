import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { AddToCartButton } from '@/components/cart/add-to-cart-button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { categoryName, type Product } from '@/lib/products'
import { formatNaira } from '@/lib/store'

function discountPercent(product: Product) {
  if (!product.oldPrice) return 0
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
}

export function ProductCard({ product }: { product: Product }) {
  const off = discountPercent(product)

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-muted/30"
      >
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.newArrival && (
            <Badge className="bg-primary hover:bg-primary shadow-sm border-none">New Arrival</Badge>
          )}
          {off > 0 && (
            <Badge className="bg-accent text-accent-foreground shadow-sm border-none">-{off}% OFF</Badge>
          )}
          {product.condition !== 'New' && (
            <Badge variant="secondary" className="backdrop-blur-md bg-background/50 border-none">{product.condition}</Badge>
          )}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-[2px]">
            <Badge variant="secondary" className="scale-125 px-4 py-1">Sold Out</Badge>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/80">
            {categoryName(product.category)}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="line-clamp-2 text-base font-bold leading-tight transition-colors hover:text-primary"
          >
            {product.name}
          </Link>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-black text-primary">
              {formatNaira(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground/70 line-through">
                {formatNaira(product.oldPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2">
          <AddToCartButton
            productId={product.id}
            name={product.name}
            className="w-full rounded-xl font-bold shadow-sm"
            openCart
          />
          <WhatsAppButton
            message={`Hello Dell Survive, I am interested in the ${product.name} (${formatNaira(product.price)}). Is it available?`}
            className="h-10 w-full rounded-xl text-[10px] font-bold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Inquire on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  )
}
