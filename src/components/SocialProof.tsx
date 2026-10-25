import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface SocialProofProps {
  onOpenModal: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'parents' | 'students' | 'vestibular'>('all');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      category: 'parents',
      name: 'Roseli Denardi',
      role: 'Avó e Mãe de Aluno · Educação Infantil',
      initials: 'RD',
      color: 'bg-emerald-600',
      avatarBg: 'bg-emerald-100 text-emerald-800',
      quote:
        'Hoje estive no Colégio Claretiano com minha filha para o primeiro dia de aula do meu neto, fiquei maravilhada com o tratamento e a recepção dos funcionários e professores!! Muita educação, respeito e acolhimento genuíno com minha filha e meu neto.',
      outcome: 'Família acolhida com adaptação exemplar',
      rating: 5,
    },
    {
      id: 2,
      category: 'parents',
      name: 'Dra. Juliana Albuquerque',
      role: 'Mãe de Aluno do 9º ano Fundamental',
      initials: 'JA',
      color: 'bg-blue-600',
      avatarBg: 'bg-blue-100 text-blue-800',
      quote:
        'A evolução na maturidade e na disciplina do meu filho foi impressionante logo no primeiro semestre com o Sistema Anglo. Os professores do Claretiano não ensinam só a matéria, eles ensinam o jovem a ter método, autonomia e paixão por aprender.',
      outcome: '+40% de rendimento acadêmico e rotina autônoma de estudos',
      rating: 5,
    },
    {
      id: 3,
      category: 'students',
      name: 'Gabriel Santana',
      role: 'Aprovado em Medicina USP (Pinheiros)',
      initials: 'GS',
      color: 'bg-cyan-600',
      avatarBg: 'bg-cyan-100 text-cyan-800',
      quote:
        'O suporte individualizado dos professores e o rigor dos simulados com o material Anglo foram a chave da minha aprovação de primeira. No Terceirão do Claretiano, tínhamos plantão até para Redação. Não precisei gastar um centavo com cursinho extra.',
      outcome: 'Aprovado direto do Terceirão sem cursinho',
      rating: 5,
    },
    {
      id: 4,
      category: 'parents',
      name: 'Marcelo F. Ribeiro',
      role: 'Pai de Aluna do 6º ano e Aluno do Ensino Médio',
      initials: 'MR',
      color: 'bg-purple-600',
      avatarBg: 'bg-purple-100 text-purple-800',
      quote:
        'O que mais me impressiona no Claretiano é que eles conseguem aliar alta exigência nos estudos com um ambiente caloroso e seguro. Meus dois filhos adoram ir para a escola todos os dias, e a segurança da portaria em Santa Cecília nos dá total tranquilidade.',
      outcome: 'Tranquilidade e segurança para dois irmãos',
      rating: 5,
    },
    {
      id: 5,
      category: 'vestibular',
      name: 'Beatriz Vasconcelos',
      role: 'Aprovada em Engenharia de Computação (Unicamp)',
      initials: 'BV',
      color: 'bg-amber-600',
      avatarBg: 'bg-amber-100 text-amber-800',
      quote:
        'Minha paixão por tecnologia nasceu nas oficinas práticas de robótica e cultura maker do Claretiano ainda no Fundamental II. Quando cheguei no vestibular, as matérias de física e matemática já eram familiares e naturais.',
      outcome: 'Aprovada entre as 10 primeiras colocações',
      rating: 5,
    },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === activeCategory);

  const current = filteredTestimonials[testimonialIndex % filteredTestimonials.length];

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="prova-social" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <span>Resultados Comprovados</span>
            <span aria-hidden="true">·</span>
            <span>Nossas Vozes & Conquistas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif] text-balance">
            Relatos de Quem Vive o Claretiano Todos os Dias
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Veja como famílias e estudantes transformaram suas histórias, conquistaram aprovações nas universidades mais concorridas e encontraram um ambiente acolhedor em São Paulo.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => { setActiveCategory('all'); setTestimonialIndex(0); }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Todos os Depoimentos
            </button>
            <button
              onClick={() => { setActiveCategory('parents'); setTestimonialIndex(0); }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'parents' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Pais e Responsáveis
            </button>
            <button
              onClick={() => { setActiveCategory('vestibular'); setTestimonialIndex(0); }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'vestibular' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Aprovados no Vestibular
            </button>
          </div>
        </div>

        {/* Featured Testimonial Banner (Inspired by the Screenshot "Nossas Vozes") */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl mb-16">
          <div className="absolute top-0 right-0 p-8 text-slate-800/60 pointer-events-none">
            <Quote className="w-32 h-32 rotate-12 opacity-30" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Quote prose */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 leading-snug font-['Outfit',sans-serif] text-balance">
              "{current.quote}"
            </blockquote>

            {/* Author info */}
            <div className="pt-2">
              <div className="font-bold text-lg text-white">{current.name}</div>
              <div className="text-xs sm:text-sm text-cyan-400 font-medium">{current.role}</div>
              <div className="text-xs text-emerald-400 font-medium mt-1">
                ✓ {current.outcome}
              </div>
            </div>

            {/* Navigation & Avatar dots */}
            <div className="pt-6 flex items-center justify-between border-t border-slate-800">
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setTestimonialIndex(idx)}
                    aria-label={`Ver relato de ${t.name}`}
                    className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
                      idx === testimonialIndex % filteredTestimonials.length
                        ? 'bg-blue-600 text-white ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 scale-110'
                        : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {t.initials}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Depoimento anterior"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Próximo depoimento"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Quantified Vestibular Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 font-mono tabular-nums">94.6%</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">Aprovações em 1ª Opção</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Índice recorde de estudantes que ingressam direto do 3º ano do Ensino Médio nas universidades públicas e de elite sem necessidade de cursinho pré-vestibular.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 font-mono tabular-nums">Top 10 SP</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">Média de Redação no ENEM</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Oficinas semanais de produção textual com correção criteriosa nos moldes oficiais da banca examinadora garantem notas superiores a 900 pontos para mais de 78% dos alunos.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 font-mono tabular-nums">100%</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">Apoio Pedagógico e Tutoria</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nenhum aluno fica para trás. Plantão de dúvidas permanente e atendimento individualizado asseguram a recuperação imediata de qualquer defasagem de aprendizado.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
