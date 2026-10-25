import React from 'react';
import { Gift, Sparkles, CheckCircle2, ArrowRight, Shield, Zap, BookMarked, Cpu, Compass } from 'lucide-react';

interface ExclusiveBonusProps {
  onOpenModal: () => void;
}

export const ExclusiveBonus: React.FC<ExclusiveBonusProps> = ({ onOpenModal }) => {
  const bonuses = [
    {
      id: 1,
      icon: Shield,
      tag: 'Bônus 01 · Economia Imediata',
      title: 'Isenção Total da Taxa de Matrícula',
      marketValue: 'R$ 950,00',
      description:
        'Você não paga nenhuma taxa de reserva ou adesão burocrática. Sua matrícula é efetivada sem custos adicionais de entrada, garantindo uma economia direta e imediata no orçamento familiar.',
      benefit: 'Economia imediata de R$ 950 no ato da inscrição',
    },
    {
      id: 2,
      icon: Zap,
      tag: 'Bônus 02 · Tecnologia Educacional',
      title: 'Plataforma Digital Anglo Plurall 360 (Acesso Anual)',
      marketValue: 'R$ 1.200,00',
      description:
        'Acesso irrestrito ao maior ecossistema digital do país: mais de 100.000 questões resolvidas em vídeo passo a passo, inteligência pedagógica que identifica pontos fracos do estudante e plantões de dúvidas digitais 24 horas por dia.',
      benefit: 'Plantão online e exercícios comentados na palma da mão',
    },
    {
      id: 3,
      icon: Compass,
      tag: 'Bônus 03 · Futuro & Carreira',
      title: 'Mentoria Vocacional e Projeto de Vida Individual',
      marketValue: 'R$ 850,00',
      description:
        'Sessões exclusivas com psicopedagogos especializados para identificar aptidões naturais, gerenciar a ansiedade pré-vestibular e traçar uma rota segura de carreira e escolhas acadêmicas conscientes.',
      benefit: 'Acompanhamento sob medida para autoconhecimento',
    },
    {
      id: 4,
      icon: Cpu,
      tag: 'Bônus 04 · Mão na Massa',
      title: 'Kit Maker & Robótica para Oficinas Práticas',
      marketValue: 'R$ 420,00',
      description:
        'Kit individual com componentes de eletrônica e programação para as primeiras semanas de oficina prática no laboratório maker do colégio, desenvolvendo raciocínio computacional desde o primeiro dia.',
      benefit: 'Material de laboratório prático sem custo extra',
    },
  ];

  return (
    <section id="bonus" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Gift className="w-4 h-4" />
            <span>Pacote Especial de Pré-Matrícula</span>
            <span aria-hidden="true">·</span>
            <span>Sem Custo Adicional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] text-balance">
            Mais de R$ 3.400 em Bônus Exclusivos Para o Seu Filho
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Ao garantir a vaga do seu filho neste lote promocional de lançamento 2026/2027, você recebe gratuitamente este conjunto de ferramentas que aceleram o aprendizado e a maturidade do estudante.
          </p>
        </div>

        {/* Bonus Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-7 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">Valor avulso:</span>
                      <span className="text-sm font-bold text-slate-300 line-through">
                        {bonus.marketValue}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {bonus.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {bonus.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {bonus.benefit}
                  </span>
                  <span className="text-xs font-extrabold text-cyan-300 bg-cyan-950 border border-cyan-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    GRÁTIS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Summary Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-blue-500/10 border border-amber-400/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Valor Total do Pacote de Benefícios:
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              De R$ 3.420,00 por <span className="text-emerald-400">R$ 0,00 (100% Incluso)</span>
            </div>
            <p className="text-xs text-slate-400">
              *Benefícios assegurados apenas para as matrículas confirmadas durante a vigência deste lote promocional.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-102"
          >
            <span>Garantir Todos os Bônus Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
