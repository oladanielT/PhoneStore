'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, MessageSquare, CreditCard, ArrowRight, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { useStore } from '@/components/client-provider'
import { formatNaira, whatsappLink } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

export default function CheckoutPage() {
  const { lines, subtotal, count, clearCart } = useCart()
  const store = useStore()
  const [step, setStep] = useState<'details' | 'success'>('details')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  })

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (count === 0 && step === 'details') {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="size-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground">Add some items to your cart before checking out.</p>
        <Button onClick={() => window.location.href = '/shop'} size="lg">Return to Shop</Button>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in your name, phone and delivery address.')
      return
    }

    const itemsList = lines.map(l => `- ${l.product.name} (x${l.quantity})`).join('\n')
    const message = `Hello ${store.shortName}! I'd like to place an order.\n\n*Order Details:*\n${itemsList}\n\n*Total:* ${formatNaira(subtotal)}\n\n*Customer Info:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nEmail: ${formData.email}\n\nThank you!`
    
    window.open(whatsappLink(message, store.whatsappNumber), '_blank')
    setStep('success')
    clearCart()
  }

  const handleOnlinePayment = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.email) {
      toast.error('Please fill in all details for online payment.')
      return
    }

    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your public key
      email: formData.email,
      amount: subtotal * 100, // Amount in kobo
      currency: 'NGN',
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: formData.name
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: formData.phone
          }
        ]
      },
      callback: function(response: any) {
        toast.success('Payment successful! Reference: ' + response.reference)
        setStep('success')
        clearCart()
      },
      onClose: function() {
        toast.info('Transaction cancelled.')
      }
    })

    handler.openIframe()
  }

  if (step === 'success') {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <CheckCircle2 className="size-12" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Order Received!</h1>
        <p className="text-lg text-muted-foreground">
          Thank you for choosing {store.shortName}. We&apos;ll contact you shortly to confirm your delivery.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => window.location.href = '/'} variant="outline">Back to Home</Button>
          <Button onClick={() => window.location.href = '/shop'}>Continue Shopping</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-extrabold tracking-tight">Checkout</h1>
      
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Delivery Details</CardTitle>
              <CardDescription>Enter your info so we can deliver your tech fast.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" placeholder="0801 234 5678" value={formData.phone} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address (Ile-Ife & Environs)</Label>
                <Input id="address" name="address" placeholder="e.g. OAU Campus, Fajuyi Hall" value={formData.address} onChange={handleInputChange} required />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-2 border-primary/20 bg-primary/5 transition-colors hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="size-5 text-primary" />
                  WhatsApp Checkout
                </CardTitle>
                <CardDescription>Confirm order via WhatsApp and pay on delivery or transfer.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={handleWhatsAppCheckout} className="w-full font-bold" variant="default">
                  Order via WhatsApp <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-accent/20 bg-accent/5 transition-colors hover:border-accent/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="size-5 text-accent-foreground" />
                  Pay Online
                </CardTitle>
                <CardDescription>Securely pay with your card via Paystack/Flutterwave.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={handleOnlinePayment} className="w-full font-bold" variant="outline" disabled={loading}>
                  {loading ? 'Processing...' : 'Pay with Card'} <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 border-2">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="divide-y text-sm">
                {lines.map((line) => (
                  <li key={line.product.id} className="flex justify-between py-3">
                    <span className="text-muted-foreground">
                      {line.product.name} <span className="font-bold">x{line.quantity}</span>
                    </span>
                    <span className="font-medium">{formatNaira(line.product.price * line.quantity)}</span>
                  </li>
                ))}
              </ul>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatNaira(subtotal)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3 text-center">
              <p className="text-xs text-muted-foreground italic">
                Free delivery within Ile-Ife (OAU Campus, Mayfair, Moore, etc.)
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
