import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
    <section className="bg-gray-900 py-20 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-turquoise/20 p-8 rounded-full transition-all duration-500 ease-in-out hover:bg-turquoise/30">
              <HelpCircle className="w-16 h-16 text-turquoise" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            🤔 Perguntas <span className="text-turquoise">Frequentes</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Tire todas as suas dúvidas antes de garantir sua transformação
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black/50 rounded-3xl border border-gray-700 overflow-hidden transition-all duration-500 ease-in-out hover:border-turquoise/30 hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white pr-6 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-8 h-8 text-turquoise transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-20">
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
            Ainda tem dúvidas? Nossa garantia no dia remove todo o risco para você!
          </p>
          
          <a href="#pricing" className="inline-block">
            <button 
              onClick={scrollToPricing}
              className="bg-gradient-to-r from-turquoise to-blue-500 text-black font-bold text-xl lg:text-2xl px-12 py-8 rounded-2xl transform hover:scale-105 transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl"
            >
              🏨 GARANTIR VAGA PRESENCIAL AGORA
            </button>
          </a>
          
          <p className="text-base text-gray-500 mt-6">
            🛡️ Garantia no dia • 🔒 Pagamento seguro • 🏨 Local premium • ⭐ Qualidade garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
