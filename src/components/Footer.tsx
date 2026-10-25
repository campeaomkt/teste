import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-black tracking-tight text-white font-['Outfit',sans-serif]">
                Claretiano Colégio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Tradição educacional formadora de valores humanos e rigor acadêmico com o Sistema Anglo de Ensino. Preparando crianças e jovens para os desafios do futuro e realização de seus projetos de vida.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rua Jaguaribe, 735 · Santa Cecília, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>(11) 3824-3600 · Atendimento das 07h às 18h30</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>matriculas.sp@claretiano.edu.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links 1: Níveis de Ensino */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Níveis de Ensino</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#metodologia" className="hover:text-white transition-colors">Educação Infantil</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Ensino Fundamental I</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Ensino Fundamental II</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Ensino Médio & Terceirão</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Período Integral & Bilíngue</a></li>
            </ul>
          </div>

          {/* Quick Links 2: Diferenciais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Diferenciais</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#metodologia" className="hover:text-white transition-colors">Sistema Anglo de Ensino</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Robótica Maker & STEAM</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Formação Socioemocional</a></li>
              <li><a href="#prova-social" className="hover:text-white transition-colors">Resultados em Vestibulares</a></li>
              <li><a href="#bonus" className="hover:text-white transition-colors">Bônus de Matrícula</a></li>
            </ul>
          </div>

          {/* Quick Links 3: Institucional */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Institucional</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#biografia" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#biografia" className="hover:text-white transition-colors">Nossa Infraestrutura</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#oferta" className="hover:text-white transition-colors">Tabela de Valores</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Bolsa Social & CEBAS</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Todos os direitos reservados ® 2026 · Colégio Claretiano São Paulo
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 underline underline-offset-4">
              Políticas de Privacidade
            </a>
            <a href="#" className="hover:text-slate-300 underline underline-offset-4">
              Encarregado de Dados (DPO)
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-300 font-medium"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
