import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Check, Shield, Truck, Zap } from 'lucide-react'
import { getProduct, relatedProducts } from '@/lib/products'
import { formatNaira } from '@/lib/store'
import { AddToCartButton } from '@/components/cart/add-to-cart-button'
import { ProductGrid } from '@/components/product/product-grid'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const related = relatedProducts(product)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl border bg-secondary/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-full">
              {product.brand}
            </Badge>
            <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              {product.condition}
            </Badge>
          </div>

          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {formatNaira(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {formatNaira(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-8">
            <AddToCartButton 
              productId={product.id} 
              name={product.name}
              className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20" 
              openCart
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="size-4" />
              </div>
              {product.warranty}
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="size-4" />
              </div>
              Same-day Ife delivery
            </div>
          </div>

          <Separator className="my-10" />

          <h3 className="font-heading text-xl font-bold">Key Specifications</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <SectionHeading
            title="Related Products"
            subtitle="You might also be interested in these gadgets."
          />
          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </div>
      )}
    </div>
  )
}
