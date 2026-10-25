import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o agendamento de visita ao colégio?',
      answer:
        'O agendamento de visita é simples e sem qualquer compromisso. Ao preencher o formulário ou entrar em contato pelo WhatsApp, nossa equipe pedagógica reserva um horário exclusivo para você e seu filho conhecerem as salas de aula, os laboratórios de robótica, a biblioteca e conversarem diretamente com a coordenação.',
    },
    {
      question: 'O material didático do Sistema Anglo já vem incluso?',
      answer:
        'A condição promocional deste lote inclui isenção total da taxa de matrícula e acesso completo à plataforma digital Anglo Plurall por 1 ano. O conjunto de apostilas físicas e cadernos de exercícios do Sistema Anglo é dimensionado por ciclo e conta com condições especiais de parcelamento direto com a editora parceira.',
    },
    {
      question: 'Como funciona o Período Integral e a alimentação?',
      answer:
        'O Período Integral do Claretiano oferece acompanhamento qualificado no contraturno, com supervisão das tarefas escolares, reforço pedagógico, oficinas esportivas (judô, futsal, dança), robótica maker e oficinas artísticas. O almoço e lanches são preparados na própria instituição sob supervisão de nutricionista especializada.',
    },
    {
      question: 'Quais são os horários das aulas nos turnos da manhã e tarde?',
      answer:
        'Para a Educação Infantil e Fundamental I: período da manhã (07h15 às 11h45) ou período da tarde (13h15 às 17h45). Para o Fundamental II e Ensino Médio: período matutino estendido (07h10 às 12h40 ou 13h30 nos dias de itinerários e plantões). O Período Integral funciona das 07h00 às 18h30.',
    },
    {
      question: 'Meu filho tem dificuldades em exatas. Como é feito o acompanhamento?',
      answer:
        'Nenhum aluno fica desamparado. Dispomos de Plantões de Dúvidas diários e presenciais com professores especialistas em Matemática, Física e Química no contraturno. Além disso, nosso sistema diagnóstico identifica precocemente eventuais lacunas e orienta planos de estudo personalizados.',
    },
    {
      question: 'A escola oferece desconto para irmãos ou convênios?',
      answer:
        'Sim! Para famílias com mais de um filho matriculado, oferecemos descontos progressivos na mensalidade a partir do segundo irmão. Também possuímos parcerias com entidades de classe e associações profissionais em São Paulo.',
    },
    {
      question: 'Como funciona a Garantia de 7 Dias de Adaptação?',
      answer:
        'A garantia é 100% incondicional e formalizada no ato da matrícula. Durante os primeiros 7 dias letivos de convivência escolar, se a família ou o estudante sentirem que a metodologia ou o ambiente não atendem plenamente às expectativas, basta formalizar o pedido na secretaria e estornamos integralmente o valor investido.',
    },
    {
      question: 'Quais documentos são necessários para reservar a vaga promocional?',
      answer:
        'Para garantir o valor promocional e a isenção de matrícula, basta preencher os dados preliminares pelo nosso formulário online. A entrega dos documentos acadêmicos (declaração de transferência, boletim do ano anterior e certidão de nascimento) pode ser realizada na visita presencial ou anexada digitalmente.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
            <span aria-hidden="true">·</span>
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif] text-balance">
            Perguntas Frequentes dos Pais e Responsáveis
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Transparência e clareza em cada detalhe. Se tiver qualquer outra dúvida, nossa equipe pedagógica está à disposição.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/60"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600">
              Fale agora com um orientador pedagógico do Claretiano pelo WhatsApp ou telefone.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
          >
            <span>Conversar com a Orientação</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
