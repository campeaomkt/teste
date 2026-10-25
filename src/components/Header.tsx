import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-400 uppercase tracking-wider text-[11px]">Matrículas 2026/2027</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span>Lote especial com desconto de até 32% + Isenção da taxa de matrícula</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <a href="tel:01138243600" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>(11) 3824-3600</span>
            </a>
            <span className="text-slate-600">|</span>
            <span>Unidade São Paulo (Santa Cecília)</span>
          </div>
        </div>
      </div>

      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element / brand wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center text-white shadow-sm font-bold text-xl group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-blue-950 font-['Outfit',sans-serif] leading-tight">
                Claretiano
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                Colégio · SP
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#problema" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              O Desafio
            </a>
            <a href="#metodologia" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Metodologia Anglo
            </a>
            <a href="#prova-social" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Depoimentos & Aprovações
            </a>
            <a href="#bonus" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Bônus Exclusivos
            </a>
            <a href="#oferta" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Planos & Vagas
            </a>
            <a href="#faq" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span>Garantir Vaga com Desconto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <a
              href="#problema"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              O Desafio
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              Metodologia Anglo
            </a>
            <a
              href="#prova-social"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              Depoimentos & Aprovações
            </a>
            <a
              href="#bonus"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              Bônus Exclusivos
            </a>
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              Planos & Vagas
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600"
            >
              Dúvidas
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-sm"
              >
                <span>Garantir Vaga com Desconto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
