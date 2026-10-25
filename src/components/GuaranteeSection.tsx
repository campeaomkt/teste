import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenModal: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          
          {/* Decorative seal badge */}
          <div className="shrink-0 flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center text-white shadow-md relative">
              <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14" />
              <div className="absolute -bottom-2 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider py-0.5 px-2.5 rounded-full shadow-xs">
                7 DIAS
              </div>
            </div>
            <div className="mt-4 font-extrabold text-xs uppercase tracking-wider text-blue-900">
              Garantia 100% Incondicional
            </div>
          </div>

          {/* Guarantee copy */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span>Compromisso e Confiança Claretiano</span>
              <span aria-hidden="true">·</span>
              <span>Risco Zero Para a Família</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif] text-balance">
              Garantia de 7 Dias de Adaptação Escolar
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
              Sabemos que escolher a escola do seu filho é uma decisão séria e afetiva. Por isso, tiramos todo o receio dos seus ombros: você reserva a vaga com o valor promocional hoje e seu filho vivencia os primeiros 7 dias letivos completos.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-balance">
              Se durante essa primeira semana você ou ele sentirem por qualquer razão que o ambiente, os colegas ou a metodologia não se adaptaram perfeitamente às expectativas da família, basta solicitar o cancelamento na secretaria. <strong>Devolvemos 100% de qualquer valor investido</strong>, sem burocracia, multas contratuais ou perguntas invasivas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Garantir Matrícula com Risco Zero</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reembolso integral e garantido em contrato</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
