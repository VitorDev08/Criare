import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Briefcase, Trophy, Sparkles, Tag, ArrowUpRight } from 'lucide-react';

export default function Categorias() {
  const categorias = [
    {
      id: 'corporativo',
      titulo: 'Uniformes Corporativos',
      subtitulo: 'Camisas Polo, Sociais, Aventais e Coletes',
      descricao: 'Desenvolvidos para passar credibilidade, conforto e sofisticação no ambiente de trabalho. Modelagens feminina e masculina.',
      icon: Briefcase,
      badge: 'Mais Solicitado',
      whatsappMessage: 'Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20Uniformes%20Corporativos.',
      placeholderBg: 'bg-gradient-to-br from-criare-blue via-criare-blue-dark to-slate-900',
    },
    {
      id: 'esportivo',
      titulo: 'Uniformes Esportivos & Times',
      subtitulo: 'Camisetas Dry-Fit, Regatas e Kits de Jogo',
      descricao: 'Tecidos de alta tecnologia que facilitam a transpiração e oferecem liberdade total de movimento para equipes esportivas.',
      icon: Trophy,
      badge: 'Alta Performance',
      whatsappMessage: 'Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20Uniformes%20Esportivos.',
      placeholderBg: 'bg-gradient-to-br from-slate-900 via-criare-blue-deep to-criare-blue',
    },
    {
      id: 'eventos',
      titulo: 'Camisetas para Eventos & Promocionais',
      subtitulo: 'Formaturas, Congressos, Feiras e Campanhas',
      descricao: 'Produção rápida e em grande escala para eventos memoráveis. Excelente custo-benefício e estampas de alta definição.',
      icon: Tag,
      badge: 'Produção Rápida',
      whatsappMessage: 'Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20Camisetas%20para%20Eventos.',
      placeholderBg: 'bg-gradient-to-br from-criare-blue-dark via-slate-900 to-criare-blue-deep',
    },
    {
      id: 'colecao-nova',
      titulo: 'Coleção Nova & Lançamentos',
      subtitulo: 'Novos Cortes, Tecidos Tecnológicos e Modelagens',
      descricao: 'Conheça nossas novas linhas sazonais com design contemporâneo, acabamentos diferenciados e paletas modernas.',
      icon: Sparkles,
      badge: 'Lançamento',
      whatsappMessage: 'Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20a%20Cole%C3%A7%C3%A3o%20Nova.',
      placeholderBg: 'bg-gradient-to-br from-slate-950 via-criare-blue-dark to-slate-900',
    },
  ];

  return (
    <section id="categorias" className="py-20 bg-criare-light border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-criare-blue bg-criare-blue-soft px-3.5 py-1.5 rounded-full inline-block mb-3">
              Linhas de Produto
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-criare-dark-900 tracking-tight">
              Categorias Principais
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Confecção sob medida adaptada às necessidades específicas do seu segmento.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
            <span>Envios para todo o Brasil com orçamento rápido via WhatsApp</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorias.map((cat, idx) => {
            const Icon = cat.icon;
            const linkUrl = `https://wa.me/5565996199033?text=${cat.whatsappMessage}`;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* REGRA CRÍTICA DO PROJETO: NÃO usar fotos de produtos reais. Usar placeholders visuais elegantes. FOTO DO PRODUTO - substituir depois */}
                  <div className={`relative h-56 sm:h-64 ${cat.placeholderBg} p-6 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-dot-pattern-dark opacity-30"></div>
                    
                    {/* Category Header Badge */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="text-xs font-bold text-criare-blue-deep bg-criare-lime px-3 py-1 rounded-full shadow-sm">
                        {cat.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Central Icon Illustration */}
                    <div className="relative z-10 my-auto text-center flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-criare-lime shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-medium text-slate-300 mt-2">
                        {/* FOTO DO PRODUTO — substituir depois */}
                        Mostruário de Categoria
                      </span>
                    </div>

                    {/* Subtitle tag overlay */}
                    <div className="relative z-10">
                      <span className="text-xs text-slate-200 font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg inline-block border border-white/10">
                        {cat.subtitulo}
                      </span>
                    </div>
                  </div>
                  {/* FIM DO PLACEHOLDER DE FOTO */}

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-criare-dark-900 group-hover:text-criare-blue transition-colors">
                      {cat.titulo}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {cat.descricao}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between bg-criare-blue-soft hover:bg-criare-blue hover:text-white text-criare-blue font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-criare-blue group-hover/btn:text-criare-lime transition-colors" />
                      <span>Cotar esta linha no WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
