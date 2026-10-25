import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Clock, Zap } from 'lucide-react';
import { GradePlan, GradeLevelKey } from '../types';

interface OfferSectionProps {
  onOpenModalWithPlan: (planId: GradeLevelKey) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenModalWithPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<GradeLevelKey>('fundamental2');

  const plans: GradePlan[] = [
    {
      id: 'infantil',
      name: 'Educação Infantil',
      tagline: 'Mini Maternal ao Pré II (1 a 5 anos)',
      ageRange: '1 a 5 anos',
      originalPrice: 1590,
      promoPrice: 1090,
      discountPercentage: 31,
      spotsRemaining: 6,
      features: [
        'Isenção da Taxa de Matrícula (R$ 950 OFF)',
        'Salas temáticas climatizadas e parque infantil',
        'Iniciação musical e psicomotricidade',
        'Acompanhamento nutricional balanceado',
        'Relatórios diários pedagógicos aos pais',
        'Garantia de 7 dias de adaptação escolar',
      ],
    },
    {
      id: 'fundamental1',
      name: 'Ensino Fundamental I',
      tagline: '1º ao 5º ano (Alfabetização & Hábitos)',
      ageRange: '6 a 10 anos',
      originalPrice: 1750,
      promoPrice: 1190,
      discountPercentage: 32,
      spotsRemaining: 5,
      features: [
        'Isenção da Taxa de Matrícula (R$ 950 OFF)',
        'Material Didático Sistema Anglo de Ensino',
        'Acesso à Plataforma Digital Anglo Plurall',
        'Projetos de Robótica Maker & Iniciação Científica',
        'Inglês Bilíngue integrado à grade horária',
        'Garantia de 7 dias de adaptação escolar',
      ],
    },
    {
      id: 'fundamental2',
      name: 'Ensino Fundamental II',
      tagline: '6º ao 9º ano (Autonomia & Rigor)',
      ageRange: '11 a 14 anos',
      originalPrice: 1890,
      promoPrice: 1290,
      discountPercentage: 32,
      spotsRemaining: 7,
      features: [
        'Isenção da Taxa de Matrícula (R$ 950 OFF)',
        'Material Pedagógico Anglo + Plataforma Plurall',
        'Plantão de Dúvidas presencial diário no contraturno',
        'Laboratório Maker e Robótica Avançada',
        'Simulados periódicos com TRI diagnóstico',
        'Tutoria socioemocional e projeto de vida',
        'Garantia de 7 dias de adaptação escolar',
      ],
    },
    {
      id: 'medio',
      name: 'Ensino Médio & Terceirão',
      tagline: '1ª à 3ª série (Foco Fuvest, Unicamp & ENEM)',
      ageRange: '15 a 17 anos',
      originalPrice: 2190,
      promoPrice: 1490,
      discountPercentage: 32,
      spotsRemaining: 4,
      features: [
        'Isenção da Taxa de Matrícula (R$ 950 OFF)',
        'Apostilas preparatórias de elite do Anglo',
        'Simulados nacionais aos sábados padrão Fuvest/ENEM',
        'Oficina intensiva semanal de Redação Nota 1000',
        'Mentoria vocacional e orientação de carreira',
        'Plantões de exatas e humanas intensificados',
        'Garantia de 7 dias de adaptação escolar',
      ],
    },
  ];

  const currentPlan = plans.find((p) => p.id === selectedPlanId) || plans[2];

  return (
    <section id="oferta" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Condição Especial de Pré-Matrícula</span>
            <span aria-hidden="true">·</span>
            <span>Lote de Lançamento 2026/2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] text-balance">
            Garanta a Melhor Formação Escolar de São Paulo com até 32% de Desconto
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Selecione o nível de ensino do seu filho para conferir o plano com desconto garantido para todo o ano letivo e os bônus inclusos.
          </p>

          {/* Plan Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedPlanId === plan.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Offer Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-800/90 to-slate-900/95 border-2 border-blue-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative">
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-700/80">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
                {currentPlan.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                Plano {currentPlan.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>Apenas {currentPlan.spotsRemaining} vagas com este desconto</span>
            </div>
          </div>

          {/* Pricing & Benefit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center">
            
            {/* Price Column */}
            <div className="md:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center space-y-4">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Investimento Promocional
              </div>

              <div className="space-y-1">
                <div className="text-sm text-slate-400 line-through">
                  De R$ {currentPlan.originalPrice.toLocaleString('pt-BR')},00 / mês
                </div>
                
                <div className="flex items-center justify-center gap-1">
                  <span className="text-base text-slate-400 font-normal">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-white font-['Outfit',sans-serif] tabular-nums">
                    {currentPlan.promoPrice.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-slate-400 font-normal self-end mb-2">/mês*</span>
                </div>

                <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  Economia de R$ {(currentPlan.originalPrice - currentPlan.promoPrice) * 12}/ano ({currentPlan.discountPercentage}% OFF)
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/70 text-xs text-cyan-300 font-semibold space-y-1">
                <div>+ ISENÇÃO TOTAL DA MATRÍCULA (R$ 950 OFF)</div>
                <div>+ R$ 3.420,00 EM BÔNUS INCLUSOS</div>
              </div>

              <button
                onClick={() => onOpenModalWithPlan(currentPlan.id)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-900/30 transition-all hover:scale-102"
              >
                <span>Garantir Vaga com Este Valor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Inclusions Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Tudo o que está 100% incluso neste plano:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                {currentPlan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-900/60 text-xs text-slate-300 flex items-start gap-3 mt-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Risco Zero:</strong> Você conta com a nossa Garantia Incondicional de 7 Dias de Adaptação. Se não estiver 100% satisfeito na primeira semana, devolvemos seu dinheiro integralmente.
                </div>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>*Valores válidos mediante pontualidade e pré-matrícula neste lote.</span>
            <span>Possibilidade de pagamento parcelado em até 12x sem juros.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
