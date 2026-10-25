import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  HeartHandshake, 
  Compass, 
  Languages, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  GraduationCap,
  Layers,
  Baby,
  Smile
} from 'lucide-react';

interface SolutionMethodologyProps {
  onOpenModal: () => void;
}

export const SolutionMethodology: React.FC<SolutionMethodologyProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'levels'>('pillars');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const pillars = [
    {
      id: 'anglo',
      icon: BookOpen,
      title: 'Rigor Acadêmico & Sistema Anglo de Ensino',
      tagline: 'O material pedagógico líder histórico em aprovações de Medicina e universidades públicas.',
      description:
        'Combinamos a consagrada metodologia "Aula dada, aula estudada hoje" do Anglo com plantões presenciais diários de dúvidas, simulados diagnósticos frequentes e acompanhamento contínuo da evolução pedagógica.',
      highlights: [
        'Apostilas e plataforma digital Anglo Plurall 24/7',
        'Simulados nacionais com TRI equivalente ao ENEM oficial',
        'Plantão de dúvidas exclusivo com professores especialistas',
        'Laboratório intensivo de Redação Nota 1000',
      ],
      badge: 'Líder em Aprovações',
    },
    {
      id: 'maker',
      icon: Cpu,
      title: 'Cultura Maker, Robótica & Inovação',
      tagline: 'Aprender fazendo: os estudantes colocam a mão na massa com tecnologia de ponta.',
      description:
        'Nosso Espaço Maker e Laboratório de Robótica transformam teorias abstratas de física, matemática e biologia em projetos funcionais. Alunos programam, constroem protótipos e desenvolvem o raciocínio lógico essencial para a era da Inteligência Artificial.',
      highlights: [
        'Aulas práticas de robótica e programação em equipe',
        'Impressoras 3D, kits Arduino e ferramentas de prototipagem',
        'Iniciação científica com participação em feiras nacionais',
        'Desenvolvimento de pensamento crítico e computacional',
      ],
      badge: 'Futuro & Tecnologia',
    },
    {
      id: 'socioemocional',
      icon: HeartHandshake,
      title: 'Formação Socioemocional & Valores Humanistas',
      tagline: 'Educar a mente sem esquecer o coração: o diferencial dos valores claretianos.',
      description:
        'Não formamos apenas alunos para passar em provas; formamos seres humanos éticos, empáticos e equilibrados. Com o Projeto de Vida e tutoria individualizada, seu filho aprende a lidar com a frustração, gerenciar o tempo e conviver com respeito mútuo.',
      highlights: [
        'Programa contínuo de competências socioemocionais',
        'Mentoria e tutoria individual para cada estudante',
        'Projetos de ação social e solidariedade na comunidade',
        'Ambiente seguro contra bullying com acolhimento diário',
      ],
      badge: 'Valores para a Vida',
    },
    {
      id: 'bilingual',
      icon: Languages,
      title: 'Bilinguismo Eduall & Cidadania Global',
      tagline: 'Fluência natural e conexão com o mundo desde as primeiras fases do aprendizado.',
      description:
        'Através do programa Eduall Bilingual, o inglês deixa de ser uma matéria isolada de gramática e passa a ser uma ferramenta viva de exploração cultural, científica e acadêmica, preparando o aluno para exames internacionais e intercâmbios.',
      highlights: [
        'Imersão linguística integrada à rotina escolar',
        'Preparação para exames internacionais de proficiência',
        'Desenvolvimento de repertório cultural global',
        'Práticas orais dinâmicas com debates e apresentações',
      ],
      badge: 'Fluência Internacional',
    },
  ];

  const levels = [
    {
      name: 'Educação Infantil',
      age: '1 a 5 anos',
      icon: Baby,
      focus: 'Afeto, Curiosidade e Estímulo Cognitivo Precoce',
      description:
        'Ambiente seguro, lúdico e afetuoso, planejado para que a criança desenvolva a linguagem, coordenação motora, imaginação e primeiras interações sociais com naturalidade e alegria.',
      features: [
        'Salas temáticas e parques arborizados seguros',
        'Iniciação musical, psicomotricidade e contação de histórias',
        'Alimentação orientada por nutricionistas',
        'Comunicação direta e acolhedora com os pais',
      ],
    },
    {
      name: 'Ensino Fundamental I',
      age: '1º ao 5º ano',
      icon: Smile,
      focus: 'Alfabetização Plena e Construção dos Hábitos de Estudo',
      description:
        'Fase crucial de consolidação da leitura fluente, escrita expressiva e raciocínio matemático com o apoio do Sistema Anglo. Os alunos aprendem a gostar de estudar e ter disciplina diária.',
      features: [
        'Metodologia fonovisual e letramento científico',
        'Introdução aos projetos makers e robótica inicial',
        'Projetos literários e feiras culturais interdisciplinares',
        'Educação financeira e educação emocional para crianças',
      ],
    },
    {
      name: 'Ensino Fundamental II',
      age: '6º ao 9º ano',
      icon: GraduationCap,
      focus: 'Autonomia Intelectual, Lógica e Aprofundamento',
      description:
        'A transição para os múltiplos professores com suporte pedagógico atento. Foco na autonomia para organização de rotina, pesquisa científica e resolução de problemas complexos.',
      features: [
        'Aulas práticas em laboratórios de química, física e biologia',
        'Plantões de dúvidas diários no contraturno',
        'Simulados periódicos diagnósticos',
        'Olimpíadas de conhecimento de âmbito nacional',
      ],
    },
    {
      name: 'Ensino Médio & Terceirão',
      age: '1ª à 3ª série',
      icon: Compass,
      focus: 'Alta Performance, Projeto de Vida e Aprovação Universitária',
      description:
        'Preparação de elite para USP, Unicamp, Unesp e ENEM. Material forte Anglo, redação intensiva semanal com correção detalhada e orientação vocacional para a escolha da profissão.',
      features: [
        'Grade horária estendida e itinerários formativos modernos',
        'Simulados oficiais aos sábados com ranking comparativo',
        'Oficinas de redação e atualidades geopolíticas',
        'Mentoria individual de carreira com psicólogos educacionais',
      ],
    },
    {
      name: 'Período Adicional / Integral',
      age: 'Infantil ao 9º ano',
      icon: Layers,
      focus: 'Tranquilidade para os Pais e Desenvolvimento Pleno',
      description:
        'Para famílias que precisam de horário estendido até às 18h30. Inclui almoço balanceado, acompanhamento nas lições de casa, oficinas de esportes, robótica e reforço.',
      features: [
        'Supervisão pedagógica de tarefas de casa e estudos',
        'Oficinas esportivas (judô, futsal, dança, ginástica)',
        'Alimentação completa e balanceada no colégio',
        'Inglês bilíngue integrado e oficinas de arte',
      ],
    },
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <span>A Solução Educacional Claretiano</span>
            <span aria-hidden="true">·</span>
            <span>Metodologia Comprovada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif] text-balance">
            O Equilíbrio Perfeito Entre Rigor Acadêmico e Formação Humana
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            O mundo vive em constante transformação, mas os verdadeiros valores permanecem. Conheça os pilares que transformam estudantes comuns em protagonistas de suas vidas e futuros líderes.
          </p>

          {/* Interactive Mode Switch */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl mt-4">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'pillars'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4 Pilares da Metodologia
            </button>
            <button
              onClick={() => setActiveTab('levels')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'levels'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Níveis de Ensino Atendidos
            </button>
          </div>
        </div>

        {/* View 1: 4 Core Pillars */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-7 lg:p-8 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Pilar 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-700 mt-1">
                        {pillar.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        O que o aluno vivencia:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {pillar.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Levels of Teaching */}
        {activeTab === 'levels' && (
          <div className="space-y-8">
            {/* Level selection chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {levels.map((level, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLevel(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    selectedLevel === idx
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            {/* Selected Level Showcase Card */}
            {(() => {
              const current = levels[selectedLevel];
              const LevelIcon = current.icon;
              return (
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <LevelIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                          {current.age}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {current.name}
                        </h3>
                      </div>
                    </div>

                    <div className="text-base font-semibold text-cyan-300">
                      Foco Central: {current.focus}
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {current.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Diferenciais desta etapa:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                        {current.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={onOpenModal}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
                      >
                        <span>Ver Condições de Matrícula para {current.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Estrutura & Rotina Pedagógica
                    </div>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                        <span className="text-slate-400">Turnos disponíveis:</span>
                        <span className="font-semibold text-white">Manhã, Tarde ou Integral</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                        <span className="text-slate-400">Material Pedagógico:</span>
                        <span className="font-semibold text-white">Sistema Anglo Exclusivo</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                        <span className="text-slate-400">Atividades extras:</span>
                        <span className="font-semibold text-white">Robótica, Esportes e Artes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Acompanhamento:</span>
                        <span className="font-semibold text-cyan-400">Tutoria Socioemocional</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-800/50 text-xs text-blue-200">
                      💡 <strong>Dica da Coordenação:</strong> As turmas de {current.name} possuem limite rigoroso de alunos por sala para assegurar atenção individualizada.
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
};
