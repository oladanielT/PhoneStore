'use client'

import { useState } from 'react'
import { Search, Eye, MoreHorizontal, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { formatNaira } from '@/lib/store'

const mockOrders = [
  {
    id: 'ORD-1001',
    customer: 'Tunde Adekunle',
    date: 'Jun 12, 2026',
    total: 1450000,
    status: 'Delivered',
    items: 1,
  },
  {
    id: 'ORD-1002',
    customer: 'Blessing Okoro',
    date: 'Jun 13, 2026',
    total: 850000,
    status: 'Processing',
    items: 2,
  },
  {
    id: 'ORD-1003',
    customer: 'Chidi Okafor',
    date: 'Jun 14, 2026',
    total: 120000,
    status: 'Pending',
    items: 3,
  },
  {
    id: 'ORD-1004',
    customer: 'Funke Akindele',
    date: 'Jun 15, 2026',
    total: 2100000,
    status: 'Shipped',
    items: 1,
  },
  {
    id: 'ORD-1005',
    customer: 'Ibrahim Musa',
    date: 'Jun 16, 2026',
    total: 45000,
    status: 'Cancelled',
    items: 1,
  },
]

export default function OrdersPage() {
  const [search, setSearch] = useState('')

  const filteredOrders = mockOrders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) || 
    o.id.toLowerCase().includes(search.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5">Delivered</Badge>
      case 'Processing':
        return <Badge variant="outline" className="text-blue-500 border-blue-500/20 bg-blue-500/5">Processing</Badge>
      case 'Pending':
        return <Badge variant="outline" className="text-amber-500 border-amber-500/20 bg-amber-500/5">Pending</Badge>
      case 'Shipped':
        return <Badge variant="outline" className="text-purple-500 border-purple-500/20 bg-purple-500/5">Shipped</Badge>
      case 'Cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Track and manage customer orders and deliveries.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="size-4" /> Export CSV
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search orders by ID or customer name..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-bold">{order.id}</TableCell>
                <TableCell className="font-medium">{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell>{formatNaira(order.total)}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="gap-2">
                        <Eye className="size-3.5" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
