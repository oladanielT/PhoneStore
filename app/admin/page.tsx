import Link from 'next/link'
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Users,
  TrendingUp,
  Activity
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatNaira } from '@/lib/store'

const stats = [
  {
    title: 'Total Revenue',
    value: '₦4,250,000',
    description: '+12.5% from last month',
    icon: DollarSign,
    trend: 'up',
  },
  {
    title: 'Orders',
    value: '156',
    description: '+18% from last month',
    icon: ShoppingCart,
    trend: 'up',
  },
  {
    title: 'Products',
    value: '42',
    description: '5 out of stock',
    icon: Package,
    trend: 'neutral',
  },
  {
    title: 'Active Users',
    value: '1,240',
    description: '-2.1% from last month',
    icon: Users,
    trend: 'down',
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of your store's performance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Activity className="size-4" /> Reports
          </Button>
          <Button className="gap-2">
            <TrendingUp className="size-4" /> Live View
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-2 transition-all hover:border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <stat.icon className="size-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="flex items-center gap-1 pt-1 text-xs text-muted-foreground">
                {stat.trend === 'up' && (
                  <ArrowUpRight className="size-3 text-emerald-500" />
                )}
                {stat.trend === 'down' && (
                  <ArrowDownRight className="size-3 text-rose-500" />
                )}
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-2">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly revenue growth and projections.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-xl bg-muted/30">
            <TrendingUp className="size-12 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground italic font-medium">
              Sales analytics visualization will be displayed here
            </p>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 border-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest transactions in your store.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" render={<Link href="/admin/orders">View All</Link>} />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { id: '1001', customer: 'Tunde Adekunle', product: 'iPhone 15 Pro', amount: 1450000, status: 'Delivered' },
                { id: '1002', customer: 'Blessing Okoro', product: 'Samsung S23 Ultra', amount: 1150000, status: 'Processing' },
                { id: '1003', customer: 'Chidi Okafor', product: 'MacBook Air M2', amount: 1250000, status: 'Pending' },
                { id: '1004', customer: 'Funke Akindele', product: 'HP Pavilion 15', amount: 650000, status: 'Shipped' },
                { id: '1005', customer: 'Ibrahim Musa', product: 'Infinix Hot 40i', amount: 185000, status: 'Cancelled' },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-bold leading-none">#{order.id} · {order.customer}</p>
                    <p className="text-xs text-muted-foreground">
                      {order.product}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-black text-primary">{formatNaira(order.amount)}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground opacity-60">
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
