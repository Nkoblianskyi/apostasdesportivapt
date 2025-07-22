export function InfoSections() {
  return (
    <section className="py-2 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] space-y-12">
        {/* Секція про відбір та переваги */}
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg p-12 border border-green-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Metodologia de Avaliação e Seleção</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Como Selecionamos os Sites</h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      A nossa equipa de especialistas analisa rigorosamente cada plataforma de apostas desportivas
                      segundo critérios objetivos e transparentes. Cada site é submetido a uma avaliação detalhada que
                      inclui verificação de licenças, análise de segurança, teste de funcionalidades e avaliação da
                      experiência do utilizador.
                    </p>
                    <p>
                      Verificamos pessoalmente cada aspeto dos sites recomendados, desde o processo de registo até aos
                      métodos de pagamento, passando pela qualidade do atendimento ao cliente e pela variedade de
                      mercados disponíveis.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Critérios de Avaliação</h3>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="border-l-2 border-green-500 pl-4">
                      <h4 className="font-semibold text-white">Licenciamento e Regulamentação</h4>
                      <p>Verificação da licença SRIJ válida e conformidade com a legislação portuguesa</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-4">
                      <h4 className="font-semibold text-white">Segurança e Proteção de Dados</h4>
                      <p>Encriptação SSL, proteção de informações pessoais e financeiras</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-4">
                      <h4 className="font-semibold text-white">Variedade de Mercados e Odds</h4>
                      <p>Diversidade de desportos, competitividade das cotações e mercados especiais</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-4">
                      <h4 className="font-semibold text-white">Métodos de Pagamento</h4>
                      <p>Diversidade, segurança e rapidez dos depósitos e levantamentos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">As Nossas Vantagens</h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      Somos completamente independentes e imparciais nas nossas avaliações. Não temos preferências por
                      qualquer operador específico e a nossa classificação baseia-se exclusivamente no mérito de cada
                      plataforma.
                    </p>
                    <p>
                      A nossa equipa possui vasta experiência no setor das apostas desportivas e conhecimento profundo
                      da regulamentação portuguesa. Atualizamos regularmente as nossas avaliações para refletir mudanças
                      nas condições dos operadores.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Em Que Deve Prestar Atenção</h3>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-semibold text-white">Condições dos Bónus</h4>
                      <p>Leia sempre os termos e condições antes de aceitar qualquer promoção</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-semibold text-white">Limites de Apostas e Levantamentos</h4>
                      <p>Verifique os limites mínimos e máximos que se adequam ao seu perfil</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-semibold text-white">Ferramentas de Jogo Responsável</h4>
                      <p>Certifique-se de que o site oferece controlos adequados para gerir o seu jogo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Declaração de Independência</h3>
              <p className="text-slate-300 text-sm leading-relaxed text-center">
                Este site tem fins puramente informativos e educativos. Não promovemos nem incentivamos qualquer site
                específico de apostas. As nossas classificações baseiam-se em critérios objetivos e a decisão final de
                onde apostar é sempre sua. Não somos responsáveis por perdas ou ganhos resultantes das suas decisões de
                apostas.
              </p>
            </div>
          </div>
        </div>

        {/* Секція про правила та безпеку */}
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg p-12 border border-red-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-400 mb-8 text-center">Jogo Responsável e Segurança</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Princípios do Jogo Responsável</h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      As apostas desportivas devem ser sempre encaradas como uma forma de entretenimento, nunca como um
                      meio de ganhar dinheiro ou resolver problemas financeiros. É fundamental estabelecer limites
                      claros antes de começar a apostar.
                    </p>
                    <p>
                      Defina sempre um orçamento que pode permitir-se perder sem afetar as suas necessidades básicas ou
                      responsabilidades financeiras. Nunca aposte dinheiro emprestado ou que precisa para outras
                      finalidades.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Sinais de Alerta</h3>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="border-l-2 border-red-500 pl-4">
                      <p>Apostar mais dinheiro do que inicialmente planeado</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <p>Tentar recuperar perdas com apostas maiores</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <p>Mentir sobre o tempo ou dinheiro gasto em apostas</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <p>Negligenciar responsabilidades pessoais ou profissionais</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <p>Sentir ansiedade ou irritabilidade quando não pode apostar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Ferramentas de Proteção</h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      Todos os sites licenciados SRIJ são obrigados a disponibilizar ferramentas que ajudam os jogadores
                      a manter o controlo sobre as suas atividades de apostas. Utilize estas ferramentas proativamente.
                    </p>
                  </div>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="border-l-2 border-white pl-4">
                      <h4 className="font-semibold text-white">Limites de Depósito</h4>
                      <p>Defina limites diários, semanais ou mensais para os seus depósitos</p>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                      <h4 className="font-semibold text-white">Limites de Tempo</h4>
                      <p>Estabeleça quanto tempo pode dedicar às apostas</p>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                      <h4 className="font-semibold text-white">Auto-exclusão</h4>
                      <p>Bloqueie temporária ou permanentemente o acesso à sua conta</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Onde Procurar Ajuda</h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      Se sente que pode ter um problema com o jogo, não hesite em procurar ajuda profissional. Existem
                      várias organizações em Portugal que oferecem apoio gratuito e confidencial.
                    </p>
                  </div>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="bg-slate-700/50 rounded p-4">
                      <h4 className="font-semibold text-white">Linha Vida</h4>
                      <p>Telefone: 213 544 545</p>
                      <p>Disponível 24 horas por dia, 7 dias por semana</p>
                    </div>
                    <div className="bg-slate-700/50 rounded p-4">
                      <h4 className="font-semibold text-white">SICAD</h4>
                      <p>Website: www.sicad.min-saude.pt</p>
                      <p>Serviços de prevenção e tratamento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-red-900/20 rounded-lg border-2 border-red-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-400 mb-4">AVISO LEGAL OBRIGATÓRIO</h3>
                <p className="text-white font-semibold text-lg mb-4">AS APOSTAS DESPORTIVAS PODEM SER PERIGOSAS</p>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Riscos Financeiros</h4>
                    <p>Perdas de dinheiro, endividamento, problemas financeiros graves</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Riscos Sociais</h4>
                    <p>Conflitos familiares, isolamento social, problemas profissionais</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Riscos de Saúde</h4>
                    <p>Vício, ansiedade, depressão, problemas de saúde mental</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-red-500">
                  <p className="text-red-400 font-bold text-lg">PROIBIDO A MENORES DE 18 ANOS</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Todos os sites recomendados exigem verificação de idade e identidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
