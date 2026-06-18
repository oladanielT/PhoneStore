import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Configure your store's general settings and preferences.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
            <CardDescription>
              This information will be displayed on the public site.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="store-name">Store Name</Label>
              <Input id="store-name" defaultValue="Brightway Phones Store Ife" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="store-email">Support Email</Label>
              <Input id="store-email" defaultValue="support@brightwayphones.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="store-phone">WhatsApp Number</Label>
              <Input id="store-phone" defaultValue="+234 812 345 6789" />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage how you receive alerts about new orders and stock.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="new-order" className="flex flex-col space-y-1">
                <span>New Order Notifications</span>
                <span className="font-normal text-muted-foreground">
                  Receive an email when a new order is placed.
                </span>
              </Label>
              <Switch id="new-order" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="low-stock" className="flex flex-col space-y-1">
                <span>Low Stock Alerts</span>
                <span className="font-normal text-muted-foreground">
                  Get notified when a product is running low on stock.
                </span>
              </Label>
              <Switch id="low-stock" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
