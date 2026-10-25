import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Calendar, Phone, Mail, User, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GradeLevelKey, EnrollmentFormData } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanId?: GradeLevelKey;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultPlanId = 'fundamental2',
}) => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    gradeLevel: defaultPlanId,
    preferredShift: 'manha',
    scheduledVisitDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultPlanId) {
      setFormData((prev) => ({ ...prev, gradeLevel: defaultPlanId }));
    }
  }, [defaultPlanId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.parentName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de solicitar a condição especial de pré-matrícula para ${formData.studentName || 'meu filho(a)'} no Colégio Claretiano. Gostaria de confirmar o agendamento da visita.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            
            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Condição Promocional Assegurada</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                Garanta a Vaga do Seu Filho com até 32% de Desconto
              </h3>
              
              <p className="text-xs text-slate-600">
                Preencha os dados abaixo para reservar o valor promocional e agendar uma visita guiada sem compromisso.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Seu Nome Completo *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Albuquerque"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Telefone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Seu Melhor E-mail *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="exemplo@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Nome do Aluno</label>
                  <input
                    type="text"
                    placeholder="Nome do seu filho(a)"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Nível Pretendido</label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  >
                    <option value="infantil">Educação Infantil (1 a 5 anos)</option>
                    <option value="fundamental1">Ensino Fundamental I (1º ao 5º ano)</option>
                    <option value="fundamental2">Ensino Fundamental II (6º ao 9º ano)</option>
                    <option value="medio">Ensino Médio & Terceirão</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Turno de Preferência</label>
                  <select
                    value={formData.preferredShift}
                    onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  >
                    <option value="manha">Manhã (07h15 às 12h40)</option>
                    <option value="tarde">Tarde (13h15 às 17h45)</option>
                    <option value="integral">Integral (07h00 às 18h30)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Data Preferencial para Visita</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.scheduledVisitDate}
                      onChange={(e) => setFormData({ ...formData, scheduledVisitDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Locked Bonuses Preview */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Benefícios que você está garantindo agora:</span>
                </div>
                <div>✓ Isenção total da taxa de matrícula (Economia de R$ 950)</div>
                <div>✓ R$ 3.420,00 em bônus exclusivos inclusos (Anglo Plurall, Maker e Mentoria)</div>
                <div>✓ Garantia incondicional de 7 dias de adaptação</div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Processando reserva...</span>
                ) : (
                  <>
                    <span>Confirmar Pré-Matrícula com Desconto</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Seus dados estão protegidos de acordo com a LGPD. Sem spam.</span>
              </div>
            </form>

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                Parabéns, {formData.parentName.split(' ')[0]}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Sua pré-matrícula com desconto de até 32% e os R$ 3.420 em bônus exclusivos foram reservados com sucesso para <strong>{formData.studentName || 'seu filho(a)'}</strong>!
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 text-left space-y-2">
              <div className="font-bold text-slate-900">Próximos Passos:</div>
              <p>1. Enviamos os detalhes da reserva e o comprovante para o e-mail: <strong>{formData.email}</strong>.</p>
              <p>2. Nossa coordenação pedagógica entrará em contato pelo WhatsApp <strong>{formData.phone}</strong> para confirmar o horário da sua visita guiada.</p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/551138243600?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Falar Agora no WhatsApp da Coordenação</span>
              </a>

              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium underline"
              >
                Voltar à página
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
