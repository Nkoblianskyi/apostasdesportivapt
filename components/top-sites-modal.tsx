"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const dontShow = localStorage.getItem("topSitesModalDismissed")
    if (dontShow) {
      setDontShowAgain(true)
      return
    }

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const topSite = bettingSites[0]

  const handleDontShowAgain = () => {
    localStorage.setItem("topSitesModalDismissed", "true")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none max-w-3xl p-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-green-400">TOP CLASSIFICAÇÃO</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center">
          <div className="bg-slate-800 border-2 border-green-500 w-full max-w-sm rounded-lg p-4 text-center relative shadow-sm flex flex-col justify-between min-h-[350px]">
            <div className="mb-4">
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                className="w-[160px] h-[96px] object-contain mx-auto"
              />
            </div>

            <h4 className="font-bold text-lg text-white mb-3">{topSite.name}</h4>

            <div className="mb-4">
              <div className="text-green-400 font-bold text-sm mb-2">BÓNUS</div>
              <p className="text-red-400 font-semibold text-sm">{topSite.bonus}</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${i < topSite.stars ? "text-green-500 fill-green-500" : "text-transparent"
                      }`}
                  />
                ))}
              </div>
              <div className="text-xl font-bold text-white">
                {topSite.rating.toFixed(1)}
                <span className="text-sm text-slate-400">/10</span>
              </div>
              <div className="text-slate-400 text-xs">({topSite.reviews})</div>
            </div>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold w-full">
              <a href={topSite.url} target="_blank" rel="noopener noreferrer nofollow sponsored">
                APOSTAR
              </a>
            </Button>

            <div className="mt-3 text-center">
              <p className="text-slate-400 text-xs">
                <span className="text-red-400 font-bold">18+</span> •{" "}
                <span className="text-white">Jogo responsável</span> •{" "}
                <span className="text-green-400">SRIJ licenciado</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 space-y-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold px-6 py-2 rounded-lg border-none mr-2"
          >
            Fechar
          </Button>
          <Button
            onClick={handleDontShowAgain}
            variant="outline"
            className="text-slate-400 border-slate-600 hover:bg-slate-700 px-4 py-2 text-sm bg-transparent"
          >
            Não mostrar novamente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
