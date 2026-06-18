import Link from "next/link";
import {
  Apple,
  Battery,
  Headphones,
  Laptop,
  Smartphone,
  Watch,
} from "lucide-react";
import { categories, type CategorySlug } from "@/lib/products";

const icons: Record<CategorySlug, React.ElementType> = {
  iphones: Apple,
  samsung: Smartphone,
  tecno: Smartphone,
  infinix: Smartphone,
  redmi: Smartphone,
  laptops: Laptop,
  smartwatches: Watch,
  accessories: Headphones,
  "used-uk-used": Battery,
};

export function CategoryGrid() {
  return (
    <div className="grid my-4 px-4 grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-9">
      {categories.map((c) => {
        const Icon = icons[c.slug];
        return (
          <Link
            key={c.slug}
            href={`/shop?category=${c.slug}`}
            className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center transition-colors hover:border-primary hover:bg-primary/5"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <span className="text-xs font-semibold leading-tight">
              {c.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
