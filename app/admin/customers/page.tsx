'use client'

import { useState } from 'react'
import { Search, Mail, Phone, MoreHorizontal, UserPlus } from 'lucide-react'
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

const mockCustomers = [
  {
    id: 'CUS-101',
    name: 'Tunde Adekunle',
    email: 'tunde.ade@gmail.com',
    phone: '0806 123 4567',
    orders: 3,
    totalSpent: 2850000,
    status: 'Active',
  },
  {
    id: 'CUS-102',
    name: 'Blessing Okoro',
    email: 'blessing.o@yahoo.com',
    phone: '0812 987 6543',
    orders: 1,
    totalSpent: 850000,
    status: 'Active',
  },
  {
    id: 'CUS-103',
    name: 'Chidi Okafor',
    email: 'chidi.oka@outlook.com',
    phone: '0703 456 7890',
    orders: 5,
    totalSpent: 420000,
    status: 'Inactive',
  },
  {
    id: 'CUS-104',
    name: 'Funke Akindele',
    email: 'funke.a@gmail.com',
    phone: '0905 111 2222',
    orders: 2,
    totalSpent: 3100000,
    status: 'Active',
  },
]

export default function CustomersPage() {
  const [search, setSearch] = useState('')

  const filteredCustomers = mockCustomers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            View and manage your customer database.
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="size-4" /> Add Customer
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
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
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">
                  <div>
                    {customer.name}
                    <div className="text-xs text-muted-foreground font-normal">
                      ID: {customer.id}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Mail className="size-3" /> {customer.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Phone className="size-3" /> {customer.phone}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{customer.orders} orders</TableCell>
                <TableCell className="font-bold">{formatPrice(customer.totalSpent)}</TableCell>
                <TableCell>
                  <Badge variant={customer.status === 'Active' ? 'outline' : 'secondary'} className={customer.status === 'Active' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : ''}>
                    {customer.status}
                  </Badge>
                </TableCell>
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
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>View Order History</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Deactivate Account</DropdownMenuItem>
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
