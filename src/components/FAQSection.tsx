import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircleQuestion, Zap } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona o Protocolo de 28 Dias?",
      answer: "O protocolo é uma jornada 100% online com duração de 4 semanas. Teremos 4 encontros ao vivo onde apresentaremos as ferramentas e exercícios da semana. Você terá tarefas diárias simples, mas poderosas, para aplicar na área da vida que você escolheu transformar."
    },
    {
      question: "Posso aplicar em qualquer área da minha vida?",
      answer: "Sim! As ferramentas do protocolo são desenhadas para serem universais. Durante o primeiro encontro, ajudaremos você a definir seu foco principal: Saúde, Finanças ou Relacionamentos. A partir daí, você aplicará todo o aprendizado nessa área específica para maximizar seus resultados."
    },
    {
      question: "E se eu perder um encontro ao vivo?",
      answer: "Fique tranquilo! Todos os encontros são gravados e disponibilizados para você. Você poderá assistir (ou reassistir) quando e onde quiser durante o período de acesso do curso."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "O protocolo foi pensado para pessoas ocupadas. Você precisará de cerca de 15 a 30 minutos diários para realizar os exercícios e aplicar as ferramentas. A consistência é mais importante que a intensidade."
    },
    {
      question: "Tenho garantia?",
      answer: "Sim. O risco é todo nosso. Se você participar do protocolo e, ao final, não achar que a experiência foi extraordinária e transformadora, nós devolvemos 100% do seu dinheiro. Sem letras miúdas."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full blur-[150px]" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <MessageCircleQuestion className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Tire Suas Dúvidas</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Perguntas <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">Frequentes</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tudo que você precisa saber antes de garantir sua transformação
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm ${openItems.includes(index) ? 'border-amber/50' : 'border-slate-700/50 hover:border-slate-600/50'}`}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 rounded-full p-2 transition-all duration-300 ${openItems.includes(index) ? 'bg-amber/20' : 'bg-slate-700/50'}`}>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-amber transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Ainda tem dúvidas? Nossa garantia remove todo o risco para você!
          </p>
          
          <button 
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber to-amber-light hover:from-amber-light hover:to-amber text-slate-900 font-bold text-lg lg:text-xl px-10 py-5 rounded-xl transform hover:scale-105 transition-all duration-500 shadow-lg shadow-amber/30 hover:shadow-amber/50"
          >
            <Zap className="w-6 h-6" />
            GARANTIR MINHA VAGA AGORA
          </button>
          
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2 flex-wrap">
            <span>🛡️ Garantia total</span>
            <span>•</span>
            <span>🔒 Pagamento seguro</span>
            <span>•</span>
            <span>⭐ Qualidade comprovada</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
