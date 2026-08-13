import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, MessageCircle } from 'lucide-react';

export default function MostruarioRecente() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20uniformes.";

  const espacosMostruario = [
    {
      id: 1,
      titulo: 'Espaço Foto 1: Camisa Polo Personalizada',
      subtitulo: 'Bordado frontal no peito e acabamento de gola',
      tag: 'Bordado no Peito',
    },
    {
      id: 2,
      titulo: 'Espaço Foto 2: Jaleco Acadêmico Saúde',
      subtitulo: 'Punho em ribana e identificação da faculdade',
      tag: 'Jaleco Acadêmico',
    },
    {
      id: 3,
      titulo: 'Espaço Foto 3: Camiseta Dry-Fit Atlética',
      subtitulo: 'Sublimação total com estampa do curso',
      tag: 'Esportivo / Atléticas',
    },
    {
      id: 4,
      titulo: 'Espaço Foto 4: Agasalho Moletom Universitário',
      subtitulo: 'Bolso canguru, capuz e bordado em alto relevo',
      tag: 'Moletom & Inverno',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-white/10">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Galeria de Peças Entregues</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mostruário de Uniformes Entregues
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Espaços reservados para exibição das fotos reais das peças confeccionadas pela Criare.
          </p>
        </div>

        {/* 4 Showcase Product Photo Placeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {espacosMostruario.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-slate-950 rounded-3xl border border-white/10 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* REGRA CRÍTICA DO PROJETO: NÃO usar foto de produto real. Placeholder elegante de foto. FOTO DO PRODUTO - substituir depois */}
                <div className="relative h-64 bg-gradient-to-br from-criare-blue-deep via-slate-900 to-slate-950 p-6 flex flex-col justify-between border-b border-white/10">
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono font-bold text-slate-950 bg-amber-400 px-2.5 py-1 rounded-md uppercase">
                      {item.tag}
                    </span>
                    <Camera className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="my-auto text-center flex flex-col items-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574v9.176c0 1.067.75 1.994 1.802 2.169a47.865 47.865 0 0011.396 0c1.052-.175 1.802-1.067 1.802-2.169V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                      {/* FOTO DO PRODUTO - substituir depois */}
                      Foto do Uniforme Real
                    </span>
                  </div>

                  <div className="z-10 text-[10px] text-slate-400 font-mono text-center">
                    Dimensão recomendada: 800x800px
                  </div>
                </div>
                {/* FIM DO PLACEHOLDER DE FOTO */}

                <div className="p-5">
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.subtitulo}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 font-bold px-3 py-2 rounded-xl text-xs border border-white/10 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cotar Peça Similar</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
