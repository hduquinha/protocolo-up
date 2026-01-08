import { Button } from "@/components/ui/button";
import { ShieldCheck, Rocket, Monitor, Users, Award, Lock } from "lucide-react";

const FinalCtaSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-8">
            <Rocket className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Sua Transformação Começa Aqui</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Sua <span className="bg-gradient-to-r from-amber via-amber-light to-amber bg-clip-text text-transparent">Nova Vida</span> Espera Por Você
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Você está a uma decisão de distância de quebrar vícios e construir a vida que merece.
            <span className="text-purple-light font-semibold"> 28 Dias. 100% Online. O Fim da Procrastinação.</span>
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber via-purple to-amber rounded-3xl opacity-30 blur"></div>
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-slate-700/50 p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
              O que você vai ganhar não tem preço:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30 hover:border-amber/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber/20 rounded-full p-2 group-hover:bg-amber/30 transition-colors">
                    <Monitor className="h-6 w-6 text-amber" />
                  </div>
                  <h4 className="text-amber font-bold text-xl">Experiência Online</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber rounded-full"></span>
                    4 Encontros Ao Vivo no Zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber rounded-full"></span>
                    Acesso à Área de Membros VIP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber rounded-full"></span>
                    Material Digital Completo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber rounded-full"></span>
                    Suporte Diário no WhatsApp
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30 hover:border-purple/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple/20 rounded-full p-2 group-hover:bg-purple/30 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-purple-light" />
                  </div>
                  <h4 className="text-purple-light font-bold text-xl">Risco Zero</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
                    Garantia de Satisfação Total
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
                    Compra 100% Segura
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
                    Acesso Imediato ao Grupo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
                    Certificado Digital de Conclusão
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Quebre o ciclo da autossabotagem. Construa hábitos inabaláveis.
          </p>
          
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber to-amber-light hover:from-amber-light hover:to-amber text-slate-900 font-bold text-xl md:text-2xl px-12 py-6 rounded-xl transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber/30 hover:shadow-amber/50"
          >
            <Rocket className="w-7 h-7" />
            QUERO ENTRAR NO PROTOCOLO AGORA
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-sm mt-6">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-500" />
              <span>Pagamento seguro</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Garantia de reembolso</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-gray-600 text-sm">
            © 2026 Protocolo 28 Dias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
