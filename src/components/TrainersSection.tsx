import rodrigoImage from "@/assets/rodrigo-damaceno.jpg";
import vanessaImage from "@/assets/vanessa-vaz.jpg";
import { Award, Users, Brain, Sparkles } from "lucide-react";

const TrainersSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full blur-[150px]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Especialistas Certificados</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
            Quem Vai Guiar Sua <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">Jornada</span>
          </h2>
        </div>

        {/* --- Card Principal: Rodrigo Damaceno --- */}
        <div 
          className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 shadow-2xl backdrop-blur-sm overflow-hidden"
          data-aos="fade-up"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber/20 rounded-full blur-[80px]" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-0">
            {/* Imagem do Rodrigo */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-amber/30 to-transparent rounded-3xl" />
                <img
                  src={rodrigoImage}
                  alt="Rodrigo Damaceno"
                  className="w-full max-w-sm h-auto object-cover rounded-3xl shadow-2xl aspect-[4/5] z-10"
                />
                {/* Badge flutuante */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber to-amber-light text-slate-900 font-bold px-6 py-2 rounded-full shadow-lg">
                  Mentor Principal
                </div>
              </div>
            </div>
            
            {/* Descrição e Qualificações do Rodrigo */}
            <div className="text-center md:text-left py-8 px-4 md:pr-10">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wide bg-gradient-to-r from-amber via-amber-light to-amber bg-clip-text text-transparent">
                Rodrigo Damaceno
              </h3>
              <p className="text-purple-light font-semibold text-xl mt-2 mb-6">
                Treinador Comportamental & Fundador
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Especialista em destravar o potencial humano, Rodrigo é o arquiteto por trás do Protocolo 28 Dias. Com metodologia própria e resultados comprovados, ele será seu guia nesta transformação.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="bg-amber/20 rounded-full p-2">
                    <Users className="h-5 w-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">+10.000</p>
                    <p className="text-xs text-gray-400 uppercase">Vidas Impactadas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="bg-purple/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-purple-light" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">+15</p>
                    <p className="text-xs text-gray-400 uppercase">Anos de Experiência</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-amber/10 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/30">
                  Inteligência Emocional
                </span>
                <span className="bg-purple/10 text-purple-light text-xs font-semibold px-3 py-1 rounded-full border border-purple/30">
                  PNL Master
                </span>
                <span className="bg-amber/10 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/30">
                  Alta Performance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Card de Suporte: Vanessa Vaz --- */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider">
            Com Suporte de <span className="text-purple-light">Elite</span>
          </h4>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-8 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-sm">
            <div className="relative">
              <img
                src={vanessaImage}
                alt="Vanessa Vaz"
                className="w-28 h-28 rounded-full object-cover border-4 border-purple/30 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple rounded-full p-1.5">
                <Brain className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-2xl font-bold text-white">Vanessa Vaz</h5>
              <p className="text-amber font-semibold mb-3">Coordenadora & Suporte ao Aluno</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Co-fundadora do Instituto, especialista em Gestão de Pessoas e Analista Comportamental. Vanessa garante uma experiência impecável, cuidando de toda a organização para que você foque apenas na sua evolução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;