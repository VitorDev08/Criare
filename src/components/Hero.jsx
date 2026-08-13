import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Cpu, Camera } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20uniformes.";

  return (
    <section id="inicio" className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-criare-blue-deep overflow-hidden text-white">
      {/* Background Graphic Grid with Vibrant Logo Royal Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-criare-blue via-criare-blue-dark to-criare-blue-deep opacity-95"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tech Positioning HUD Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 tracking-wider uppercase">
                Confecção Sob Medida | Envio Nacional
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
              Vista a camisa do seu curso com <span className="text-amber-400">uniformes de alta qualidade</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Confecção própria para turmas, atléticas e cursos universitários. Polos, camisetas, jalecos e agasalhos com bordado e estampa de alta durabilidade.
            </p>

            {/* CTAs Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-9 py-4.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-amber-400" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4.5 rounded-full border border-white/20 backdrop-blur-md transition-all duration-200 text-base"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Envios para Todo o Brasil</h4>
                  <p className="text-[11px] text-slate-400">Despacho com rastreamento</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tecidos Premium</h4>
                  <p className="text-[11px] text-slate-400">Resistência e alta durabilidade</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Single Product Photo Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-400/40 via-white/20 to-amber-400/30 shadow-glow-blue overflow-hidden">
              <div className="relative overflow-hidden rounded-[22px] bg-black h-[480px] sm:h-[520px] w-full flex flex-col items-center justify-between p-6 border border-white/20">
                
                {/* Badge Header */}
                <div className="w-full flex justify-between items-center z-10">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-slate-950/80 border border-amber-400/30 px-3.5 py-1.5 rounded-full">
                    Destaque do Catálogo
                  </span>
                  <span className="text-[11px] font-bold text-white bg-criare-blue px-3 py-1 rounded-full border border-white/20">
                    UFMT
                  </span>
                </div>

                {/* Real Shirt Image */}
                <div className="my-auto h-80 w-full flex items-center justify-center relative z-10">
                  <img 
                    src="/assets/produtos/capivara-ufmt-verde.png" 
                    alt="Camiseta Capivara UFMT" 
                    className="h-full w-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>

                {/* Bottom Caption */}
                <div className="w-full z-10 text-center bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <h3 className="text-sm font-bold text-white">Camiseta Capivara UFMT</h3>
                  <p className="text-[11px] text-amber-400 font-semibold">Disponível em Verde, Azul, Preta, Cinza e Vinho</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
