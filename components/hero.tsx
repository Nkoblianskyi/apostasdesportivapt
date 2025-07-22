"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, CheckCircle } from "lucide-react"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)
  const [showAdvantagesModal, setShowAdvantagesModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <section className="py-2 px-4 w-full">
        <div className="container mx-auto max-w-[1220px]">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-sm border border-green-500 p-4 md:p-8">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
              {/* Coluna esquerda - Informação sobre o site */}
              <div className="space-y-3 md:space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                    <button
                      onClick={() => setShowAdvantagesModal(true)}
                      className="lg:cursor-default lg:pointer-events-none"
                    >
                      <span className="text-green-400">Apostas</span>
                      <span className="text-red-400">Desportiva</span>
                      <span className="text-white">PT</span>
                    </button>
                  </h1>

                  <div className="text-slate-400 mb-2 md:mb-4 text-xs md:text-sm">
                    Última atualização: {formattedDate}
                  </div>

                  <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-3 md:mb-6">
                    O seu guia especializado para escolher os melhores sites de apostas desportivas em Portugal.
                    Analisamos e comparamos as plataformas licenciadas SRIJ para lhe oferecer uma classificação
                    transparente e fiável.
                  </p>

                  <div className="bg-red-900/20 rounded-lg p-3 border border-red-500 mb-4">
                    <p className="text-red-400 font-bold text-xs text-center mb-1">
                      AVISO IMPORTANTE - CONTEÚDO EDUCATIVO
                    </p>
                    <p className="text-slate-300 text-xs text-center leading-relaxed">
                      Este site fornece apenas informação educativa sobre apostas desportivas licenciadas em Portugal.
                      Não promovemos nem incentivamos apostas. 18+ apenas. Jogo responsável obrigatório.
                    </p>
                  </div>
                </div>

                {/* Badges com modais - apenas mobile */}
                <div className="md:hidden flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center space-x-1 border-2 border-green-500 px-2 py-1 rounded-md bg-transparent">
                    <img src="/placeholder.svg?height=16&width=24&text=PT" alt="Portugal" className="w-3 h-2" />
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

              {/* Coluna direita - Nossas Vantagens - приховано на мобільних */}
              <div className="hidden lg:block lg:pl-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 md:p-6 border-2 border-green-500 shadow-2xl relative overflow-hidden">
                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -right-4 w-16 md:w-20 h-16 md:h-20 bg-green-500/20 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-red-500/20 rounded-full"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-4 md:mb-6">
                      <h2 className="text-lg md:text-xl font-bold text-white mb-2">Nossas Vantagens</h2>
                      <p className="text-xs md:text-sm text-slate-300">Porque escolher-nos como seu guia</p>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      {/* Vantagem 1 */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">100% Licenciados SRIJ</h3>
                          <p className="text-xs md:text-sm text-slate-300">
                            Apenas sites com licença oficial portuguesa
                          </p>
                        </div>
                      </div>

                      {/* Vantagem 2 */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">Análise Especializada</h3>
                          <p className="text-xs md:text-sm text-slate-300">
                            Avaliações detalhadas por especialistas em apostas
                          </p>
                        </div>
                      </div>

                      {/* Vantagem 3 */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                            Comparação Transparente
                          </h3>
                          <p className="text-xs md:text-sm text-slate-300">
                            Informações claras e imparciais sobre cada site
                          </p>
                        </div>
                      </div>

                      {/* Vantagem 4 */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">Sempre Atualizado</h3>
                          <p className="text-xs md:text-sm text-slate-300">Informações atualizadas regularmente</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-6 text-center">
                      <p className="text-xs text-slate-400">
                        <span className="text-green-400 font-semibold">Jogo Responsável</span> •
                        <span className="text-red-400 font-semibold"> 18+</span> •
                        <span className="text-white font-semibold"> SRIJ Licenciado</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Modal Vantagens */}
      <Dialog open={showAdvantagesModal} onOpenChange={setShowAdvantagesModal}>
        <DialogContent className="max-w-md mx-4 bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-green-400 text-lg font-bold">Nossas Vantagens</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-xs text-slate-300 mb-4">Porque escolher-nos como seu guia</p>

            <div className="space-y-3">
              {/* Vantagem 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">100% Licenciados SRIJ</h3>
                  <p className="text-xs text-slate-300">Apenas sites com licença oficial portuguesa</p>
                </div>
              </div>

              {/* Vantagem 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Análise Especializada</h3>
                  <p className="text-xs text-slate-300">Avaliações detalhadas por especialistas em apostas</p>
                </div>
              </div>

              {/* Vantagem 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Comparação Transparente</h3>
                  <p className="text-xs text-slate-300">Informações claras e imparciais sobre cada site</p>
                </div>
              </div>

              {/* Vantagem 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Sempre Atualizado</h3>
                  <p className="text-xs text-slate-300">Informações atualizadas regularmente</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setShowAdvantagesModal(false)}
            className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
          >
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
