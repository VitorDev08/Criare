import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CTAFinal() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento%20agora!";

  return (
    <section className="py-20 bg-criare-blue-dark text-white relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-criare-blue via-criare-blue-dark to-criare-blue-deep opacity-95"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-criare-blue via-criare-blue-dark to-criare-blue-card rounded-3xl p-8 sm:p-14 border border-white/25 shadow-glow-blue space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-criare-lime/10 border border-criare-lime/30">
            <ShieldCheck className="w-4 h-4 text-criare-lime" />
            <span className="text-xs font-bold text-criare-lime tracking-wide uppercase">
              Pronto para destacar sua empresa?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Vista a sua marca com quem entende de <span className="text-criare-lime">qualidade e pontualidade</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta no WhatsApp para apresentar os tecidos ideais, simular o seu logo e entregar para todo o Brasil.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-criare-lime" />
              <span>Envios para todo o Brasil</span>
            </div>
            <span className="opacity-30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-criare-lime" />
              <span>Garantia de Qualidade</span>
            </div>
            <span className="opacity-30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-criare-lime" />
              <span>Orçamento via WhatsApp</span>
            </div>
          </div>

          {/* Main Action Button */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-lg px-10 py-5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 text-amber-400" />
              <span>Peça seu Orçamento Agora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
