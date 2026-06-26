import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { ClientProvider } from "@/components/client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "God's best tech Phones Store Ife | Phones, Gadgets & Repairs in Ile-Ife",
  description:
    "God's best tech Phones Store Ife — buy iPhones, Samsung, Tecno, Infinix, Redmi, laptops, smartwatches and accessories in Ile-Ife. Student deals near OAU, phone repairs, warranty, fast delivery, and WhatsApp ordering.",
  keywords: [
    "phone store in Ile-Ife",
    "iPhone store Ile-Ife",
    "phone accessories OAU",
    "gadget shop near OAU",
    "phone repair Ile-Ife",
    "God's best tech Phones",
  ],
  icons: {
    icon: "/placeholder-logo.svg",
    apple: "/placeholder-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f5fe0" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProvider>
            <CartProvider>{children}</CartProvider>
          </ClientProvider>
          <Toaster richColors position="top-center" />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
