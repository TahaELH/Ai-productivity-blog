import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "AI Productivity Blog - Tools & Techniques for Enhanced Workflow",
  description: "Discover the latest AI tools and productivity techniques to supercharge your workflow. Expert reviews, guides, and insights on AI-powered productivity solutions.",
  keywords: ["AI productivity", "productivity tools", "AI writing tools", "automation", "task management", "AI research", "workflow optimization"],
  authors: [{ name: "AI Productivity Blog Team" }],
  icons: {
    icon: "/logo.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "AI Productivity Blog",
    description: "Discover the latest AI tools and productivity techniques to supercharge your workflow",
    url: "https://aiproductivityblog.com",
    siteName: "AI Productivity Blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Productivity Blog",
    description: "Discover the latest AI tools and productivity techniques to supercharge your workflow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
