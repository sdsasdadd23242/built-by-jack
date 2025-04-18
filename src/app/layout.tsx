import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' }
  ]
};

export const metadata: Metadata = {
  title: "BuiltByJack - Affordable Website Development Brisbane",
  description: "Premium yet affordable website development services in Brisbane. We create fast, beautiful, and high-converting websites at competitive prices.",
  keywords: ["web development Brisbane", "affordable websites Brisbane", "cheap website design Brisbane", "website development Brisbane", "responsive websites Brisbane", "business websites Brisbane", "budget-friendly web design", "Brisbane web developer"],
  authors: [{ name: "BuiltByJack Team" }],
  creator: "BuiltByJack",
  publisher: "BuiltByJack",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://builtbyjack.com",
    title: "BuiltByJack - Affordable Website Development Brisbane",
    description: "Premium yet affordable website development services in Brisbane. We create fast, beautiful, and high-converting websites at competitive prices.",
    siteName: "BuiltByJack",
    images: [
      {
        url: "https://builtbyjack.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BuiltByJack - Affordable Website Development Brisbane"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuiltByJack - Affordable Website Development Brisbane",
    description: "Premium yet affordable website development services in Brisbane. We create fast, beautiful, and high-converting websites at competitive prices.",
    creator: "@builtbyjack",
    images: ["https://builtbyjack.com/images/twitter-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-24 mx-auto max-w-[1920px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 