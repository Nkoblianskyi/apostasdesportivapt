"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)

  return (
    <>
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-green-500 shadow-sm relative z-50 w-full">
        <div className="container mx-auto max-w-[1220px] px-4 py-3">
          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
              <h1 className="text-xl lg:text-2xl font-bold">
                <span className="text-green-400">Apostas</span>
                <span className="text-red-400">Desportiva</span>
                <span className="text-white">PT</span>
              </h1>
            </Link>

            {/* Badges */}
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-1 border-2 border-green-500 px-3 py-1.5 rounded-md bg-transparent">
                <img src="/flag.png" alt="Portugal" className="w-6 h-6" />
                <span className="text-green-400 font-semibold text-sm">SRIJ</span>
              </div>

              <button
                onClick={() => setShow18Modal(true)}
                className="border-2 border-red-500 hover:bg-red-500/10 px-3 py-1.5 rounded-md text-red-400 font-bold text-sm transition-colors cursor-pointer bg-transparent"
              >
                18+
              </button>

              <button
                onClick={() => setShowRulesModal(true)}
                className="border-2 border-white hover:bg-white/10 px-3 py-1.5 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer bg-transparent"
              >
                REGRAS
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center border-2 border-red-500">
                  <span className="text-white font-bold text-sm">AD</span>
                </div>
                <h1 className="text-lg font-bold">
                  <span className="text-green-400">Apostas</span>
                  <span className="text-red-400">Desportiva</span>
                  <span className="text-white">PT</span>
                </h1>
              </Link>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:flex md:hidden items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center border-2 border-red-500">
                <span className="text-white font-bold text-base">AD</span>
              </div>
              <h1 className="text-xl font-bold">
                <span className="text-green-400">Apostas</span>
                <span className="text-red-400">Desportiva</span>
                <span className="text-white">PT</span>
              </h1>
            </Link>

            {/* Badges */}
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-1 border-2 border-green-500 px-2 py-1 rounded-md bg-transparent">
                <img src="/placeholder.svg?height=16&width=24&text=PT" alt="Portugal" className="w-4 h-3" />
                <span className="text-green-400 font-semibold text-xs">SRIJ</span>
              </div>

              <button
                onClick={() => setShow18Modal(true)}
                className="border-2 border-red-500 hover:bg-red-500/10 px-2 py-1 rounded-md text-red-400 font-bold text-xs transition-colors cursor-pointer bg-transparent"
              >
                18+
              </button>

              <button
                onClick={() => setShowRulesModal(true)}
                className="border-2 border-white hover:bg-white/10 px-2 py-1 rounded-md text-white font-semibold text-xs transition-colors cursor-pointer bg-transparent"
              >
                REGRAS
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal 18+ */}
      <Dialog open={show18Modal} onOpenChange={setShow18Modal}>
        <DialogContent className="max-w-md mx-4 bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-lg md:text-xl font-bold">
              18+ Reservado aos Adultos
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-white text-sm md:text-base">
            <p className="text-slate-300 text-sm md:text-base">
              <strong>Limite de idade:</strong> Deve ter pelo menos 18 anos para participar em atividades de apostas nos
              sites licenciados portugueses.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              <strong>Jogo responsável:</strong> As apostas devem ser um entretenimento, não um meio de ganhar dinheiro.
              Aposte apenas os montantes que se pode permitir perder.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              <strong>Defina limites:</strong> Use as ferramentas propostas pelos sites de apostas para definir limites
              de depósito, perda e tempo.
            </p>

            <div className="p-4 rounded-lg border border-slate-600">
              <p className="font-semibold mb-2 text-slate-300 text-sm md:text-base">Precisa de ajuda?</p>
              <p className="text-sm text-slate-300">Contacte estas organizações:</p>
              <ul className="text-sm mt-2 space-y-1 text-slate-300">
                <li>Linha Vida - 213 544 545</li>
                <li>www.sicad.min-saude.pt - Aconselhamento gratuito</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShow18Modal(false)} className="w-full bg-green-600 hover:bg-green-700 text-white">
            Compreendido
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Regras */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-white text-lg md:text-xl font-bold">
              Regras e Condições
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-white text-sm md:text-base">
            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Condições Gerais</h3>
              <p className="text-sm text-slate-300">
                Todos os sites de apostas recomendados são licenciados pelo SRIJ (Serviço de Regulação e Inspeção de
                Jogos) e respeitam as leis portuguesas.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Condições dos Bónus</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Todos os bónus de boas-vindas têm requisitos de apostas entre 1x-10x</li>
                <li>Os bónus devem ser utilizados no prazo estabelecido</li>
                <li>Leia sempre as condições completas em cada site</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Levantamento e Verificação</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Todos os ganhos são pagos após verificação de identidade bem-sucedida</li>
                <li>Os prazos de levantamento variam entre 1-5 dias úteis</li>
                <li>Documentos podem ser solicitados no primeiro levantamento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Apoio ao Cliente</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Contacte o suporte do site para problemas técnicos</li>
                <li>Apoio ao cliente português disponível em todos os sites recomendados</li>
                <li>Suporte via chat ao vivo, email ou telefone</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-slate-600">
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Recursos Jogo Responsável</h3>
              <p className="text-sm mb-2 text-slate-300">Se encontrar problemas com o seu jogo:</p>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Linha Vida - Linha de escuta e chat</li>
                <li>www.sicad.min-saude.pt - Tratamento profissional</li>
                <li>SRIJ.turismodeportugal.pt - Informação oficial</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShowRulesModal(false)} className="w-full bg-red-600 hover:bg-red-700 text-white">
            Aceitar e Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
