import { Brain, MessageCircle, TrendingUp } from "lucide-react";

const ForWhoSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Quebre Vícios e Maus Hábitos",
      description: "Livre-se da dopamina barata (celular, açucar, preguiça) e recupere o controle dos seus impulsos."
    },
    {
      icon: MessageCircle,
      title: "Construa uma Rotina Blindada",
      description: "Instale hábitos angulares que geram disciplina automática, sem depender apenas de força de vontade."
    },
    {
      icon: TrendingUp,
      title: "Clareza Mental e Foco",
      description: "Elimine a névoa mental e a ansiedade para focar no que realmente constrói o seu futuro."
    }
  ];

  return (
    <section className="bg-dark-section py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-light">
          O Protocolo é Para Você Que Quer <span className="text-turquoise">Resultados Reais:</span>
        </h2>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          Não importa se o seu vício é procrastinação, redes sociais, alimentação ruim ou falta de ação. O <strong>Protocolo 28 Dias</strong> ataca a raiz do problema: o sistema de recompensas do seu cérebro.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-turquoise w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-turquoise-light transition-colors">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-light">
                {benefit.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;