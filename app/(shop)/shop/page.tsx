import { products, categories, categoryName } from '@/lib/products'
import { ProductGrid } from '@/components/product/product-grid'
import { SectionHeading } from '@/components/section-heading'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const selectedCategory = searchParams.category
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Our Collection"
        subtitle="Browse our wide range of premium smartphones and accessories."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            !selectedCategory
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/80',
          )}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              selectedCategory === cat.slug
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80',
            )}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}
