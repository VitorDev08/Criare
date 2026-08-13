import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Calendar, Sparkle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ColecaoNova() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20os%20lan%C3%A7amentos%20da%20Nova%20Cole%C3%A7%C3%A3o.";

  return (
    <section id="colecao-nova" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-criare-lime/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-criare-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-criare-blue-deep via-criare-blue-dark to-slate-900 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-criare-blue-deep bg-criare-lime px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-criare-blue-deep" />
                  <span>Nova Coleção Sazonal</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-criare-lime" />
                  <span>Edição Limitada</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Lançamentos com <span className="text-criare-lime">novas modelagens</span> e tecidos de última geração
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Acompanhando as principais tendências de moda corporativa e esportiva, apresentamos nossos cortes atualizados com acabamento térmico, maior respirabilidade e toque ultrafino. Ideal para renovar o visual da sua marca.
              </p>

              {/* Feature Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-criare-lime/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-criare-lime" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Tecidos anti-pilling (não criam bolinhas)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-criare-lime/20 flex items-center justify-center shrink-0">
                    <Sparkle className="w-4 h-4 text-criare-lime" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Cortes ergonômicos e caimento slim</span>
                </div>
              </div>

              {/* CTA Group */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-criare-lime hover:bg-criare-lime-hover text-criare-blue-deep font-extrabold px-8 py-4 rounded-full shadow-glow-lime transition-all duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-criare-blue-deep text-criare-lime" />
                  <span>Receber Catálogo da Coleção no WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual Box Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              {/* REGRA CRÍTICA DO PROJETO: NÃO usar fotos de produtos reais. Placeholder elegante com gradientes. FOTO DO PRODUTO - substituir depois */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-criare-blue-deep via-slate-900 to-criare-blue p-8 border border-white/20 text-center flex flex-col items-center justify-center min-h-[320px]">
                <div className="w-24 h-24 rounded-full bg-criare-lime/10 border-2 border-criare-lime/30 flex items-center justify-center mb-4">
                  <Sparkles className="w-10 h-10 text-criare-lime" />
                </div>
                <span className="text-xs font-bold text-criare-lime uppercase tracking-widest bg-criare-blue-deep/80 px-3 py-1 rounded-md border border-criare-lime/30 mb-2">
                  SAVE THE DATE / LANÇAMENTO
                </span>
                <h3 className="text-lg font-bold text-white">Catálogo Exclusivo de Lançamento</h3>
                <p className="text-xs text-slate-400 mt-2 max-w-xs">
                  Projetado para empresas e times que buscam o mais alto padrão estético.
                </p>
                <div className="mt-4 text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3 w-full">
                  {/* FOTO DO PRODUTO — substituir depois */}
                  Preview da Coleção
                </div>
              </div>
              {/* FIM DO PLACEHOLDER DE FOTO */}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
