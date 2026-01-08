import { Brain, Users, Target, Lightbulb, Rocket, Calendar } from "lucide-react";

const TrainingContentSection = () => {
  const pillars = [
    {
      icon: Brain,
      week: "Semana 1",
      title: "O Detox",
      subtitle: "Dias 1-7 • Interrompendo o padrão negativo",
      color: "amber",
      highlights: [
        "Identificação dos gatilhos de vícios e autossabotagem",
        "Estratégias de abstinência controlada",
        "Limpeza do ambiente físico e digital"
      ]
    },
    {
      icon: Lightbulb,
      week: "Semana 2",
      title: "A Estabilização",
      subtitle: "Dias 8-14 • Recuperando a clareza mental",
      color: "purple",
      highlights: [
        "Técnicas para lidar com crises de abstinência e recaídas",
        "Regulação do sono e energia vital",
        "Introdução de micro-hábitos positivos"
      ]
    },
    {
      icon: Target,
      week: "Semana 3",
      title: "A Reconstrução",
      subtitle: "Dias 15-21 • Instalando a nova arquitetura",
      color: "amber",
      highlights: [
        "Construção da rotina matinal e noturna ideal",
        "Técnicas de foco profundo (Deep Work)",
        "Substituição de prazeres imediatos por recompensas de longo prazo"
      ]
    },
    {
      icon: Users,
      week: "Semana 4",
      title: "A Consolidação",
      subtitle: "Dias 22-28 • Blindando sua nova identidade",
      color: "purple",
      highlights: [
        "Plano de manutenção para os próximos 6 meses",
        "Transformando disciplina em identidade ('Eu sou assim')",
        "Encerramento e Celebração da nova versão"
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
            Uma jornada completa e estruturada para reprogramar sua mente e construir a versão mais forte de você
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
              🎯 Metodologia Comprovada + Experiência Transformadora
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Combine o aprendizado estruturado com a aplicação diária de novos hábitos.
              Uma jornada completa que vai <strong className="text-amber">reprogramar sua mente</strong> e 
              <strong className="text-purple-light"> eliminar vícios</strong> que impedem seu sucesso.
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