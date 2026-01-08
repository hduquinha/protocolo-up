import { Brain, Users, Target, Lightbulb, Rocket, Calendar } from "lucide-react";

const TrainingContentSection = () => {
  const pillars = [
    {
      icon: Brain,
      week: "Encontro 1",
      title: "Mentalidade de Crescimento",
      subtitle: "Dias 1-7 • Desbloqueie seu potencial",
      color: "amber",
      highlights: [
        "O que é mentalidade de crescimento?",
        "Como identificar pensamentos limitantes",
        "Práticas diárias para fortalecer a mentalidade de crescimento",
        "Atividade: compartilhe um objetivo pessoal e como aplicar essa mentalidade"
      ]
    },
    {
      icon: Lightbulb,
      week: "Encontro 2",
      title: "Gerenciando Ansiedade e Stress",
      subtitle: "Dias 8-14 • Enfrente o stress com calma",
      color: "purple",
      highlights: [
        "Identifique seus gatilhos de ansiedade e stress",
        "Técnicas de respiração e relaxamento para o dia a dia",
        "Estratégias simples para gerenciar o stress em 15 minutos",
        "Atividade: descreva uma situação que gera ansiedade e como aplicará as técnicas"
      ]
    },
    {
      icon: Target,
      week: "Encontro 3",
      title: "Comunicação Assertiva",
      subtitle: "Dias 15-21 • Fale com confiança",
      color: "amber",
      highlights: [
        "O que é comunicação assertiva e por que importa",
        "Como expressar necessidades e limites com clareza",
        "Práticas rápidas para melhorar sua comunicação",
        "Atividade: simule uma conversa assertiva com um parceiro"
      ]
    },
    {
      icon: Users,
      week: "Encontro 4",
      title: "Integração e Próximos Passos",
      subtitle: "Dias 22-28 • Leve o aprendizado para a vida",
      color: "purple",
      highlights: [
        "Revisão prática dos 3 encontros anteriores",
        "Checklist de motivação e manutenção diária",
        "Plano de ação para os próximos 28 dias",
        "Atividade: compartilhe o que aprendeu e seu plano para seguir"
      ]
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Metodologia de 28 Dias</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-6">
            O Que Você Vai <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">Dominar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            4 encontros ao vivo em 28 dias para desbloquear potencial, reduzir ansiedade, comunicar com confiança e consolidar hábitos duradouros.
          </p>
        </div>
        
        {/* Timeline visual no desktop */}
        <div className="hidden lg:block absolute left-1/2 top-[280px] bottom-[300px] w-0.5 bg-gradient-to-b from-amber via-purple to-amber opacity-30" />
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`relative group ${index % 2 === 1 ? 'lg:translate-y-12' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.color === 'amber' ? 'from-amber/20 to-amber-light/20' : 'from-purple/20 to-purple-light/20'} rounded-3xl opacity-0 blur group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm h-full">
                {/* Week badge */}
                <div className={`absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pillar.color === 'amber' ? 'bg-amber text-slate-900' : 'bg-purple text-white'}`}>
                  {pillar.week}
                </div>
                
                <div className="flex items-start gap-4 mb-6 pt-4">
                  <div className={`rounded-2xl p-3 flex-shrink-0 ${pillar.color === 'amber' ? 'bg-amber/20' : 'bg-purple/20'}`}>
                    <pillar.icon className={`h-8 w-8 ${pillar.color === 'amber' ? 'text-amber' : 'text-purple-light'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className={`text-sm font-medium ${pillar.color === 'amber' ? 'text-amber' : 'text-purple-light'}`}>
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {pillar.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3 text-gray-300">
                      <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${pillar.color === 'amber' ? 'bg-amber' : 'bg-purple-light'}`}></span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA card */}
        <div className="relative" data-aos="fade-up">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber via-purple to-amber rounded-3xl opacity-30 blur-sm"></div>
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 rounded-2xl p-8 md:p-12 border border-slate-700/50 text-center backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-amber to-purple rounded-full p-4">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🎯 4 Encontros Ao Vivo + Acompanhamento Diário
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Pratique a cada semana com desafios guiados, suporte da comunidade e aplicação imediata. Saia com um plano claro para manter a disciplina e a tranquilidade.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
                <h4 className="text-amber font-bold text-lg mb-2">📚 Parte Teórica + Prática</h4>
                <p className="text-gray-400 text-sm">Metodologia estruturada com exercícios práticos e aplicação imediata</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
                <h4 className="text-purple-light font-bold text-lg mb-2">👥 Comunidade VIP</h4>
                <p className="text-gray-400 text-sm">Acesso a grupo exclusivo para troca de experiências e suporte mútuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContentSection;