import { Header } from "@/components/header"

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Política de Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">1. O que são Cookies</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita o nosso site.
                Utilizamos apenas cookies essenciais e de análise para melhorar a sua experiência.
              </p>
              <p>
                <strong>Não utilizamos cookies de tracking malicioso</strong> ou que comprometam a sua privacidade.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">2. Tipos de Cookies Utilizados</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Cookies Essenciais</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Preferências de consentimento de cookies</li>
                  <li>Configurações de segurança</li>
                  <li>Prevenção de ataques CSRF</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Cookies de Análise (Anónimos)</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Estatísticas de utilização do site</li>
                  <li>Páginas mais visitadas</li>
                  <li>Tempo de permanência (dados agregados)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">3. Cookies de Terceiros</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                <strong>Google Analytics:</strong> Utilizamos o Google Analytics com configurações de privacidade
                reforçadas e anonimização de IP.
              </p>
              <p>
                <strong>Sem Cookies de Publicidade:</strong> Não utilizamos cookies de publicidade comportamental ou de
                tracking entre sites.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">4. Gestão de Cookies</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Pode gerir as suas preferências de cookies através:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Banner de cookies no nosso site</li>
                <li>Configurações do seu navegador</li>
                <li>Ferramentas de opt-out do Google Analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">5. Segurança</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Todos os cookies são protegidos com flags de segurança (Secure, HttpOnly, SameSite) para prevenir
                ataques XSS e CSRF. Não armazenamos informações sensíveis em cookies.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
