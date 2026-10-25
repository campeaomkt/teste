import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultText = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre as matrículas 2026/2027 com a condição especial e agendar uma visita ao Colégio Claretiano.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg border border-slate-200 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Dúvidas sobre a matrícula? Fale conosco!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/551138243600?text=${defaultText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento pelo WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
