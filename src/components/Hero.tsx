import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Users, BookOpen, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  // Urgency countdown timer (e.g., resets nicely to give authentic urgency)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 38,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Anti-slop clean text with typographic separator */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide uppercase text-cyan-400 mb-6">
          <span>Colégio Claretiano São Paulo</span>
          <span aria-hidden="true">·</span>
          <span>Tradição Humanista & Rigor Acadêmico Anglo</span>
          <span aria-hidden="true">·</span>
          <span>Matrículas Abertas</span>
        </div>

        {/* 2-Column Split: Compelling Promise & Offer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline forte com a promessa, crível e inspiradora */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] leading-[1.15] text-balance">
              Do futuro do seu filho,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200">
                a gente cuida com excelência!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance">
              No Colégio Claretiano, seu filho desenvolve autonomia, valores humanos sólidos e a mais alta performance acadêmica com o renomado <strong className="text-white font-semibold">Sistema Anglo de Ensino</strong>, robótica maker e acolhimento socioemocional diário.
            </p>

            {/* Quick check benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>94.6% de aprovação nos vestibulares</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Educação Socioemocional & Valores</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Robótica Maker & Laboratórios Modernos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Opção de Período Integral Bilíngue</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base shadow-lg shadow-cyan-900/30 hover:shadow-cyan-700/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Garantir Condição Especial de Matrícula</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#metodologia"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-sm border border-white/15 backdrop-blur-sm transition-colors"
              >
                <span>Conhecer a Metodologia</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantia de 7 dias de adaptação</span>
              </div>
              <span className="text-slate-600">·</span>
              <span>Santa Cecília, São Paulo</span>
              <span className="text-slate-600">·</span>
              <span>Mais de 50 anos de história</span>
            </div>
          </div>

          {/* Right Column: Preço com Desconto & Gatilho de Escassez e Urgência */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Highlight Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Lote Promocional 2026/2027</span>
              </div>

              {/* Countdown Bar */}
              <div className="mb-5 pt-3">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-medium text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                    Condição expira em:
                  </span>
                  <span className="text-[11px] font-mono tabular-nums text-slate-300">
                    Últimas 7 vagas com este valor
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg py-2">
                    <span className="block text-xl font-bold font-mono tabular-nums text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider">Horas</span>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg py-2">
                    <span className="block text-xl font-bold font-mono tabular-nums text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider">Min</span>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg py-2">
                    <span className="block text-xl font-bold font-mono tabular-nums text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider">Seg</span>
                  </div>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/60 mb-5">
                <div className="text-xs text-slate-400 font-medium">Investimento Mensal na Formação Integral</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm text-slate-400 line-through">De R$ 1.890,00</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                    32% OFF no lote atual
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xs text-slate-400">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit',sans-serif] tabular-nums">
                    R$ 1.290
                  </span>
                  <span className="text-sm text-slate-400 font-normal">/mês*</span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-700/60 text-xs text-cyan-300 font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Gatilho Especial:</strong> ISENÇÃO TOTAL da taxa de matrícula (Economia de R$ 950)</span>
                </div>
              </div>

              {/* What's included in this promo */}
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Material Didático Sistema Anglo de Ensino</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Plantão de Dúvidas diário & Simulados tipo ENEM/Fuvest</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Acesso aos Laboratórios de Robótica e Cultura Maker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Todos os 5 Bônus Exclusivos de Matrícula inclusos</span>
                </li>
              </ul>

              {/* Primary Card CTA Button */}
              <button
                onClick={onOpenModal}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/20 transition-all"
              >
                <span>Aproveitar Desconto e Garantir Vaga</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                Sem compromisso: preencha para reservar a vaga e agendar a visita presencial.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Proof / Metric Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">94.6%</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Aprovação nos Vestibulares</div>
            <div className="text-[11px] text-slate-400">USP, Unicamp, Unesp e Federais</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">+50 Anos</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">De Tradição Educacional</div>
            <div className="text-[11px] text-slate-400">Formação com valores sólidos</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">4.9 / 5.0</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Avaliação das Famílias</div>
            <div className="text-[11px] text-slate-400">Acolhimento e satisfação comprovada</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">1º Lugar</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Sistema Anglo de Ensino</div>
            <div className="text-[11px] text-slate-400">Líder histórico de aprovações</div>
          </div>
        </div>

      </div>
    </section>
  );
};
