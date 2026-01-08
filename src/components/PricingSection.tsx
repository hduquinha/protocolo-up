import { Check, Star, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const handleBuyClick = (plan: any) => {
    const basePath = `/landing-emocional.html`;
    const targetUrl = `${basePath}?plan=${encodeURIComponent(plan.name || "" )}`;
    window.location.href = targetUrl;
  };
  const plans = [
    {
      name: "Protocolo 28 Dias",
      price: "2997",
      originalPrice: "4997",
      installments: "10x R$ 299,70",
      description: "Protocolo completo de 28 dias com acompanhamento online.",
      features: [
        "4 Encontros Ao Vivo Online",
        "Acompanhamento por 28 Dias",
        "Acesso às Gravações",
        "Material de Apoio em PDF",
        "Ferramentas de Autocuidado",
        "Suporte Exclusivo WhatsApp",
        "Certificado de Conclusão",
        "Garantia de Satisfação Total"
      ],
      cta: "Quero Começar Minha Transformação",
      isRecommended: true,
      discount: "VAGAS LIMITADAS",
      urgency: "TURMA FECHANDO EM BREVE"
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 flex justify-center items-center opacity-40 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-amber/10 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Investimento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
            Protocolo <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">28 Dias</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-400 text-lg">
            Transforme sua vida com um investimento que vai se pagar em resultados para sempre
          </p>
        </div>

        {/* Card único centralizado */}
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber via-purple to-amber rounded-3xl opacity-50 blur group-hover:opacity-70 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-amber/30 flex flex-col transition-all duration-500 ease-in-out h-full w-full backdrop-blur-sm">
                  {/* Badge mais popular */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber to-amber-light text-slate-900 font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wider z-10 shadow-lg shadow-amber/30">
                    🔥 Oferta Especial
                  </div>

                  <div className="flex-grow p-8 pt-12">
                    <h3 className="text-2xl lg:text-3xl font-black text-center mb-6 bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">
                      {plan.name}
                    </h3>

                    <div className="text-center my-8">
                      {/* Barra de vagas com novo estilo */}
                      <div className="mb-6 p-4 bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-xl">
                        <div className="font-bold text-red-400 text-xs mb-2 flex items-center justify-center gap-2">
                          <Clock className="h-4 w-4" /> ATENÇÃO: VAGAS LIMITADAS
                        </div>
                        <div className="bg-slate-900/50 h-7 rounded-full overflow-hidden mb-2 border border-slate-700/50">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-full flex items-center justify-center text-white font-bold text-xs shadow-lg" 
                            style={{width: '59%'}}
                          >
                            59% PREENCHIDO
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs">Restam poucas vagas disponíveis</div>
                      </div>

                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-xl text-gray-500 line-through">R$ {plan.originalPrice}</span>
                      </div>
                      <div className="flex items-baseline justify-center gap-2 mb-3">
                        <span className="text-5xl lg:text-6xl font-black text-white">R$ {plan.price}</span>
                        <span className="text-gray-400 text-lg">à vista</span>
                      </div>
                      <div className="text-amber font-bold mb-3" style={{fontSize: '2.2rem', lineHeight: '1.2'}}>
                        ou {plan.installments}
                      </div>
                      <div className="flex justify-center gap-3 mb-2 flex-wrap">
                        <span className="bg-gradient-to-r from-amber to-amber-light text-slate-900 text-sm font-bold px-4 py-1.5 rounded-full">
                          {plan.discount}
                        </span>
                        <span className="text-red-400 text-sm font-bold animate-pulse flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                          {plan.urgency}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-center text-base lg:text-lg min-h-[4rem] mb-8 leading-relaxed">
                      {plan.description}
                    </p>

                    <hr className="border-slate-700/50 my-8" />
                    <ul className="space-y-4 text-gray-300">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-4">
                          <div className="bg-amber/20 rounded-full p-1 mt-0.5">
                            <Check className="w-4 h-4 text-amber" />
                          </div>
                          <span className="text-base lg:text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto p-8 pt-0">
                    <Button
                      onClick={() => handleBuyClick(plan)}
                      className="w-full bg-gradient-to-r from-amber to-amber-light hover:from-amber-light hover:to-amber text-slate-900 font-bold text-lg lg:text-xl py-7 rounded-xl shadow-2xl shadow-amber/30 hover:shadow-amber/50 transition-all duration-500 hover:scale-[1.02]"
                    >
                      <Star className="w-6 h-6 mr-3" />
                      {plan.cta}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-center text-sm text-gray-500 mt-4">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Pagamento 100% seguro • Seus dados protegidos</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
