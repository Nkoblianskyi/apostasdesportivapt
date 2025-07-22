import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800/95 backdrop-blur-sm border-t border-green-500 py-12 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Conteúdo principal do rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
              <h2 className="text-white font-bold text-2xl">ApostasDesportivaPT</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              O seu guia especializado para os melhores sites de apostas desportivas licenciados SRIJ em Portugal.
              Comparações transparentes e conselhos responsáveis.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4">Informações Legais</h3>
            <div className="space-y-2">
              <Link
                href="/politica-privacidade"
                className="block text-slate-300 hover:text-green-400 text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/politica-cookies"
                className="block text-slate-300 hover:text-green-400 text-sm transition-colors"
              >
                Política de Cookies
              </Link>
              <Link href="/disclaimer" className="block text-slate-300 hover:text-green-400 text-sm transition-colors">
                Disclaimer Legal
              </Link>
            </div>
          </div>

          {/* Jogo Responsável */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
                <span className="text-white font-bold text-lg">18+</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Jogo Responsável</h3>
            <p className="text-slate-300 text-sm mb-2">Ajuda disponível 24h/7d</p>
            <p className="text-green-400 font-semibold text-sm">213 544 545</p>
          </div>
        </div>

        {/* Organizações Regulamentares */}
        <div className="border-t border-slate-600 pt-8 mb-8">
          <h4 className="text-white font-bold mb-6 text-center text-lg">Organizações</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/srij.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Aviso de Jogo Responsável */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 mb-6 border border-red-500">
          <div className="text-center">
            <h4 className="text-red-400 font-bold mb-3 text-lg flex items-center justify-center gap-2">
              ⚠️ Aviso Importante
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-red-400 font-bold">As apostas desportivas podem ser perigosas:</span> perdas de
              dinheiro, conflitos familiares, vício.
              <span className="text-white font-bold"> Proibido a menores de 18 anos.</span> O jogo deve permanecer um
              prazer. Aposte apenas o que se pode permitir perder.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-semibold">📞 Ajuda:</span>
                <span className="text-white font-bold">213 544 545</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-semibold">🌐 Site:</span>
                <span className="text-white">www.sicad.min-saude.pt</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-semibold">🏛️ Regulamentação:</span>
                <span className="text-white">SRIJ Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 pt-6 text-center">
          <p className="text-slate-400 text-sm">&copy; 2025 ApostasDesportivaPT.com - Todos os direitos reservados</p>
          <p className="text-slate-500 text-xs mt-2">
            Comparador independente de sites de apostas desportivas licenciados SRIJ em Portugal
          </p>
        </div>
      </div>
    </footer>
  )
}
