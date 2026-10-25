import React from 'react';
import { AlertCircle, Brain, Sparkles, TrendingDown, Users2, HelpCircle } from 'lucide-react';

interface ProblemSectionProps {
  onOpenModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenModal }) => {
  const problems = [
    {
      id: 'decoreba',
      icon: TrendingDown,
      title: 'Ensino conteudista baseado em decoreba',
      description:
        'A maioria das escolas ainda ensina para a prova de sexta-feira. O aluno decora sem compreender, perde o interesse genuíno pelo conhecimento e não desenvolve raciocínio lógico nem pensamento crítico para a vida adulta.',
      consequence: 'Alunos desmotivados que não sabem estudar por conta própria nem resolver problemas reais.',
    },
    {
      id: 'socioemocional',
      icon: Users2,
      title: 'Falta de acolhimento e suporte socioemocional',
      description:
        'Em colégios impessoais ou hipercompetitivos, o estudante vira apenas uma estatística. A pressão desmedida sem orientação psicológica gera crises de ansiedade, sensação de desamparo e queda vertiginosa no rendimento.',
      consequence: 'Insegurança emocional que trava o potencial intelectual e enfraquece a autoestima familiar.',
    },
    {
      id: 'tecnologia',
      icon: Brain,
      title: 'Desconexão total com as competências do futuro',
      description:
        'O mundo do trabalho e as novas ciências exigem robótica, raciocínio computacional, bilinguismo e cultura maker. No entanto, muitas escolas continuam presas a lousa e giz sem laboratórios práticos.',
      consequence: 'Jovens despreparados para um mercado global veloz e altamente tecnológico.',
    },
    {
      id: 'vestibular',
      icon: AlertCircle,
      title: 'A armadilha de ter que pagar cursinhos paralelos',
      description:
        'Muitas famílias descobrem tarde demais que o Ensino Médio padrão não prepara de verdade para a Fuvest, Unicamp, Unesp e ENEM. Os pais acabam sobrecarregando o filho com cursinho extra caro e desgastante.',
      consequence: 'Sobrecarga de rotina para o jovem e gastos financeiros duplicados para os pais.',
    },
  ];

  return (
    <section id="problema" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
            <span>Diagnóstico Educacional Real</span>
            <span aria-hidden="true">·</span>
            <span>O Dilema das Famílias em São Paulo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] text-balance">
            A Maioria das Escolas Não Está Preparando Seu Filho Para o Mundo Real
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Você já se pegou preocupado se a escola atual realmente dá conta de formar o intelecto e o caráter do seu filho? Identifique se você reconhece algum destes 4 grandes desafios:
          </p>
        </div>

        {/* 4 Core Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 hover:border-slate-600 transition-all space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      Obstáculo 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {prob.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {prob.description}
                </p>

                <div className="pt-3 border-t border-slate-700/60 text-xs text-rose-300 font-medium flex items-start gap-2">
                  <span className="font-bold text-rose-400 shrink-0">Impacto:</span>
                  <span>{prob.consequence}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge Statement to Solution */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/60 via-slate-800 to-cyan-950/60 border border-blue-500/30 rounded-2xl p-8 sm:p-10 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              A Conclusão Inevitável
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif] text-balance">
              Seu filho não precisa de mais pressão desorganizada. Ele precisa do ecossistema educacional certo.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
              Uma escola que una o rigor do material didático número 1 do Brasil com professores acolhedores, laboratórios reais de inovação e valores humanos inegociáveis. É exatamente isso que construímos no Claretiano.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-cyan-400/20"
            >
              <span>Quero uma Educação Diferente para Meu Filho</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
