"use client"

import { Star, Trophy, Medal, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import Link from "next/link"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  // Função para determinar qual badge mostrar (apenas um)
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "MELHOR NOTA", color: "bg-green-600 text-white" }
    if (site.isTopLine) return { text: "ESCOLHA Nº1", color: "bg-green-600 text-white" }
    if (site.isPopular) return { text: "POPULAR", color: "bg-red-600 text-white" }
    if (site.isTrending) return { text: "TENDÊNCIA", color: "bg-orange-600 text-white" }
    return null
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  // Elementos decorativos desportivos baseados na classificação
  const getSportIcon = () => {
    switch (rank) {
      case 1:
        return <Trophy className="absolute top-6 right-6 w-8 h-8 text-green-400 opacity-30" />
      case 2:
        return <Medal className="absolute top-6 right-6 w-8 h-8 text-red-400 opacity-30" />
      case 3:
        return <Award className="absolute top-6 right-6 w-8 h-8 text-white opacity-30" />
      default:
        return null
    }
  }

  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block group">
      <div
        className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.02] shadow-sm bg-slate-800/95 backdrop-blur-sm ${
          isFirstItem ? "border-2 border-green-500 shadow-lg shadow-green-500/20" : "border border-slate-600"
        }`}
      >
        {/* Badge - лівий кут */}
        {primaryBadge && (
          <div className="absolute top-0 left-0 z-20">
            <div
              className={`${
                primaryBadge.color === "bg-green-600 text-white"
                  ? "bg-green-600 text-white border-green-400"
                  : primaryBadge.color === "bg-red-600 text-white"
                    ? "bg-red-600 text-white border-red-400"
                    : primaryBadge.color === "bg-orange-600 text-white"
                      ? "bg-orange-600 text-white border-orange-400"
                      : "bg-slate-700 text-white border-slate-500"
              } px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-md rounded-md border-2 backdrop-blur-sm`}
            >
              {primaryBadge.text}
            </div>
          </div>
        )}

        {/* Elementos decorativos desportivos */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-500/10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-red-500/10"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rotate-45"></div>
        </div>

        {/* Ícone desportivo baseado na classificação */}
        {getSportIcon()}

        <div className="relative z-10">
          {/* Layout Desktop e Tablet */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[180px] h-[72px] lg:w-[200px] lg:h-[96px] object-contain"
              />
            </div>

            {/* Bónus */}
            <div className="flex-1 text-center">
              <div className="text-green-400 font-bold mb-1 text-xl">BÓNUS</div>
              <p className="text-red-400 font-semibold leading-tight text-2xl">{site.bonus}</p>
            </div>

            {/* Nota */}
            <div className="text-center flex-shrink-0">
              <div className="text-xl lg:text-2xl font-bold text-white mb-1">
                {site.rating.toFixed(1)}
                <span className="text-sm text-slate-400">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-green-400 stroke-[1.5px] ${
                      i < site.stars ? "text-green-400 fill-green-400" : "text-transparent"
                    }`}
                  />
                ))}
              </div>
              <div className="text-slate-400 text-xs">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Botão */}
            <div className="flex-shrink-0">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base border border-red-500"
              >
                OBTER BÓNUS
              </Button>
            </div>
          </div>

          {/* Layout Mobile */}
          <div className="md:hidden pt-6">
            {/* Linha superior: Logo à esquerda, Bónus à direita */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-shrink-0 bg-slate-50 p-2 rounded-lg border">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[120px] h-[72px] object-contain"
                />
              </div>
              <div className="flex-1 text-center pl-4">
                <div className="text-green-400 font-bold text-sm mb-1">BÓNUS</div>
                <p className="text-red-400 font-semibold leading-tight text-lg">{site.bonus}</p>
              </div>
            </div>

            {/* Nota - numa linha */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-slate-400">/10</span>
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 stroke-green-400 stroke-[1.5px] ${
                        i < site.stars ? "text-green-400 fill-green-400" : "text-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-slate-400 text-sm">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Botão */}
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-3 border border-red-500"
            >
              OBTER BÓNUS
            </Button>
          </div>
        </div>

        {/* Enhanced Compliance Disclaimer */}
        <div className="mt-4 pt-4 border-t border-slate-600 text-center">
          <p className="text-slate-400 text-xs leading-relaxed">
            <strong className="text-red-400">AVISO:</strong> Conteúdo educativo apenas.
            <strong className="text-white"> 18+ | Jogo responsável obrigatório</strong>
            <br />
            <strong className="text-red-400">RISCOS:</strong> Perdas financeiras, dependência, problemas familiares
            <br />
            <strong className="text-green-400">AJUDA:</strong> 213 544 545 |
            <strong className="text-white"> SRIJ licenciado</strong> |
            <strong className="text-slate-300"> Aposte apenas o que pode perder</strong>
          </p>
        </div>
      </div>
    </Link>
  )
}
