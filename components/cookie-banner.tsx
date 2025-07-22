"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-green-200 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-slate-700 text-sm">
            Este site utiliza cookies para melhorar a sua experiência de navegação e fornecer funcionalidades
            personalizadas. Ao continuar a utilizar o nosso site, aceita a nossa{" "}
            <Link href="/politica-privacidade" className="text-green-600 hover:underline">
              Política de Privacidade
            </Link>{" "}
            e a nossa{" "}
            <Link href="/politica-cookies" className="text-green-600 hover:underline">
              Política de Cookies
            </Link>
            . Pode gerir as suas preferências a qualquer momento.
          </p>
          {showDetails && (
            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
              <h4 className="font-semibold mb-2">Налаштування cookies:</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" checked disabled className="mr-2" />
                  Необхідні cookies (завжди активні)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Аналітичні cookies (Google Analytics)
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            size="sm"
            className="border-green-600 text-slate-700 hover:bg-green-50 bg-transparent mr-2"
          >
            {showDetails ? "Приховати" : "Налаштування"}
          </Button>
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-green-600 text-slate-700 hover:bg-green-50 bg-transparent"
          >
            Recusar
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
