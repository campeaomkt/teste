import React from 'react';
import { Landmark, ShieldCheck, Heart, Award, CheckCircle2, MapPin } from 'lucide-react';

export const Biography: React.FC = () => {
  const milestones = [
    {
      year: '1971',
      title: 'Fundação e Início da Missão',
      desc: 'Início das atividades educativas com o propósito de formar a mente e o caráter humano.',
    },
    {
      year: '1998',
      title: 'Ampliação da Infraestrutura',
      desc: 'Construção dos novos laboratórios científicos e ampliação do campus no centro expandido de SP.',
    },
    {
      year: '2016',
      title: 'Parceria com Sistema Anglo',
      desc: 'União da tradição formadora com o material pedagógico mais vitorioso nos vestibulares do Brasil.',
    },
    {
      year: 'Hoje',
      title: 'Pioneirismo Maker e Socioemocional',
      desc: 'Formação 360° com laboratórios de robótica, bilinguismo Eduall e suporte psicológico individual.',
    },
  ];

  return (
    <section id="biografia" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Landmark className="w-4 h-4" />
            <span>Mais de Meio Século de Excelência</span>
            <span aria-hidden="true">·</span>
            <span>Tradição & Inovação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif] text-balance">
            Educando Gerações com Rigor Intelectual e Amor Pela Vida
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Conheça as raízes, o propósito e a estrutura que sustentam a reputação do Colégio Claretiano como uma das instituições mais respeitadas de São Paulo.
          </p>
        </div>

        {/* 2-Column Story: Mission & Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Uma Instituição Centenária Voltada Para o Amanhã
            </h3>
            
            <p>
              A Rede Claretiana de Educação nasceu com a missão inabalável de colocar o ser humano no centro do processo de aprendizagem. Não acreditamos em fórmulas prontas ou em modismos passageiros: acreditamos em uma pedagogia sólida, que valoriza a curiosidade investigativa da infância até o rigor preparatório do Ensino Médio.
            </p>
            
            <p>
              Nosso campus no tradicional bairro de <strong className="text-slate-900">Santa Cecília, em São Paulo</strong>, une a solidez arquitetônica de um patrimônio histórico preservado aos mais avançados recursos contemporâneos de tecnologia educativa: salas climatizadas, rede óptica de alta velocidade, laboratórios de ciências, arena maker e quadras esportivas completas.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Corpo docente 100% qualificado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Controle de acesso biométrico e CFTV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Equipe de psicopedagogia residente</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Biblioteca física com acervo raro e digital</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Highlights Bento Grid */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Campus São Paulo</div>
                  <div className="text-xs text-slate-400">Rua Jaguaribe, 735 · Santa Cecília</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                Polo de Excelência
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">5.200m²</div>
                <div className="text-xs text-slate-300 mt-1">Área total construída</div>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">1:12</div>
                <div className="text-xs text-slate-300 mt-1">Relação educador/aluno</div>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">100%</div>
                <div className="text-xs text-slate-300 mt-1">Salas climatizadas</div>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">24h</div>
                <div className="text-xs text-slate-300 mt-1">Monitoramento de segurança</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              "No Claretiano, acolhemos a família inteira para caminhar junto ao longo de todas as etapas escolares."
            </p>
          </div>
        </div>

        {/* Timeline of Milestones */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
            Nossa Trajetória Educacional
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="text-xl font-black text-blue-700 font-mono">
                  {m.year}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {m.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
