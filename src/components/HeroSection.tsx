import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Clock, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Background com imagem e overlay gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-purple/30" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[150px]" />

      <div className="relative z-10 container max-w-5xl mx-auto w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Protocolo Exclusivo de Transformação</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            <span className="text-white">Transforme Sua Vida em</span>
            <br />
            <span className="bg-gradient-to-r from-amber via-amber-light to-amber bg-clip-text text-transparent">28 Dias</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-300 max-w-3xl mx-auto">
            Quebre ciclos de <span className="text-purple-light font-bold">autossabotagem</span>, elimine <span className="text-purple-light font-bold">vícios</span> e construa uma rotina de <span className="text-amber font-bold">alta performance</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Um protocolo intensivo e comprovado para quem cansou de promessas vazias. 
            Reprograme seu cérebro e instale uma disciplina inabalável em apenas 4 semanas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
            <div className="flex items-center gap-2">
              <div className="bg-amber/20 rounded-full p-2">
                <Clock className="h-5 w-5 text-amber" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">28</p>
                <p className="text-xs text-gray-400 uppercase">Dias</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple/20 rounded-full p-2">
                <Target className="h-5 w-5 text-purple-light" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">4</p>
                <p className="text-xs text-gray-400 uppercase">Semanas</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-amber/20 rounded-full p-2">
                <Zap className="h-5 w-5 text-amber" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400 uppercase">Online</p>
              </div>
            </div>
          </div>

          <Button
            variant="cta"
            size="lg"
            className="bg-gradient-to-r from-amber to-amber-light hover:from-amber-light hover:to-amber text-slate-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-7 h-auto rounded-xl shadow-2xl shadow-amber/30 hover:shadow-amber/50 transition-all duration-500 hover:scale-105"
            onClick={scrollToPricing}
          >
            QUERO COMEÇAR MINHA TRANSFORMAÇÃO
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            🔒 Vagas limitadas • Garantia de satisfação total
          </p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={scrollToPricing}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gray-400 hover:text-amber transition-colors duration-300"
        aria-label="Descer para preços"
      >
        <span className="text-xs font-medium mb-2 uppercase tracking-wider">
          Saiba mais
        </span>
        <ChevronDown className="h-6 w-6 animate-bounce text-amber" />
      </button>
    </section>
  );
};

export default HeroSection;
