import { Header } from "@/components/header"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Disclaimer e Conformidade Legal</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Natureza do Conteúdo</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p className="text-lg font-semibold text-white">
                Este website tem fins exclusivamente educativos e informativos.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>NÃO</strong> promovemos ou incentivamos apostas desportivas
                </li>
                <li>
                  <strong>NÃO</strong> fornecemos aconselhamento financeiro ou de investimento
                </li>
                <li>
                  <strong>NÃO</strong> garantimos ganhos ou resultados
                </li>
                <li>
                  <strong>NÃO</strong> processamos apostas ou transações financeiras
                </li>
                <li>
                  <strong>NÃO</strong> somos um operador de jogos licenciado
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Avisos de Risco Obrigatórios</h2>
            <div className="bg-red-900/50 rounded-lg p-6 border-2 border-red-500">
              <h3 className="text-xl font-bold text-red-400 mb-4">AS APOSTAS DESPORTIVAS SÃO PERIGOSAS</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
                <div>
                  <h4 className="font-bold text-white mb-2">Riscos Financeiros:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Perda total do dinheiro apostado</li>
                    <li>Endividamento excessivo</li>
                    <li>Problemas financeiros familiares</li>
                    <li>Perda de poupanças e bens</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Riscos de Saúde:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dependência e vício</li>
                    <li>Ansiedade e depressão</li>
                    <li>Problemas de sono</li>
                    <li>Stress e problemas mentais</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">Conformidade com Google Ads</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Este website cumpre rigorosamente as políticas do Google Ads para conteúdo relacionado com jogos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verificação de idade obrigatória (18+)</li>
                <li>Restrições geográficas (apenas Portugal)</li>
                <li>Promoção do jogo responsável</li>
                <li>Avisos claros sobre riscos</li>
                <li>Informação sobre recursos de ajuda</li>
                <li>Conformidade com legislação local (SRIJ)</li>
                <li>Conteúdo educativo, não promocional</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">Recursos de Ajuda</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Linha Vida</h3>
                <p className="text-slate-300 text-sm mb-2">Apoio 24h/7d gratuito e confidencial</p>
                <p className="text-green-400 font-bold">213 544 545</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">SICAD</h3>
                <p className="text-slate-300 text-sm mb-2">Serviços de prevenção e tratamento</p>
                <p className="text-green-400 font-bold">www.sicad.min-saude.pt</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Responsabilidade do Utilizador</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Ao utilizar este website, o utilizador reconhece e aceita que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tem 18 anos ou mais e reside em Portugal</li>
                <li>Compreende os riscos associados às apostas desportivas</li>
                <li>Utilizará a informação apenas para fins educativos</li>
                <li>Não considerará este conteúdo como aconselhamento proveniente de apostasdesportivapt.com</li>
                <li>É totalmente responsável pelas suas decisões</li>
                <li>Procurará ajuda profissional se necessário</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
