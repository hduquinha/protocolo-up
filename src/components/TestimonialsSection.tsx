// Importações da biblioteca Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

// Importação dos estilos da Swiper (essencial)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  // Array com depoimentos e descrições fiéis ao conteúdo dos vídeos
  const videoTestimonials = [
    {
      name: "Jhonata Lopes", 
      youtubeVideoId: "mXSFwabhyNo",
      description: '"O treinamento foi um divisor de águas, me dando clareza e ferramentas para alcançar resultados que eu buscava há muito tempo."'
    },
    {
      name: "Jociely Ribeiro", 
      youtubeVideoId: "Xmft6_Eg-20",
      description: '"Eu me redescobri. O curso me ajudou a derrubar uma muralha de medo e a encontrar a grandeza que existe dentro de mim."'
    },
    {
      name: "Ana Nere", 
      youtubeVideoId: "_l80iApyibg",
      description: '"Foi uma jornada de crescimento imenso. Aprendi a ressignificar minha história e a ver a vida com muito mais gratidão e propósito."'
    },
    {
      name: "Jorge Florêncio", 
      youtubeVideoId: "afrfoLPQFl0",
      description: '"Eu me sentia travado, sem sair do lugar. O curso foi a experiência transformadora que me fez quebrar barreiras internas e evoluir."'
    },
    {
      name: "Letícia Chagas", 
      youtubeVideoId: "b1FLpd-LKnA",
      description: '"Mais do que um curso, foi um processo de autoconhecimento profundo que me reconectou com a minha verdadeira essência e força."'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple/10 rounded-full blur-[120px]" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber/20 to-purple/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
            <Quote className="h-4 w-4 text-amber" />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-4">
            Histórias de <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent">Transformação</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Pessoas reais que decidiram mudar suas vidas. Assista aos depoimentos e inspire-se.
          </p>
        </div>
        
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { // sm
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { // lg
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {videoTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full items-center group">
                  {/* Video container com borda e efeitos */}
                  <div className="relative w-full max-w-[300px]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber via-purple to-amber rounded-2xl opacity-30 blur group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-slate-700/50 bg-slate-900">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${testimonial.youtubeVideoId}`}
                        title={`Depoimento de ${testimonial.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>

                  <div className="text-center mt-6 w-full max-w-[300px]">
                    {/* Rating stars */}
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                      ))}
                    </div>
                    <p className="font-bold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-purple-light italic text-sm mt-2 leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;