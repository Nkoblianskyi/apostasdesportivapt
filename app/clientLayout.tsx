"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <div className="min-h-screen w-full">
          <ScrollToTop />
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
