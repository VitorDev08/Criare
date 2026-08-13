import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Shirt, CheckSquare, Truck, ArrowRight, MessageCircle } from 'lucide-react';

export default function ComoFunciona() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20iniciar%20meu%20pedido%20de%20uniformes.";

  const passos = [
    {
      numero: '01',
      icon: MessageSquare,
      titulo: 'Atendimento via WhatsApp',
      descricao: 'Você entra em contato com a nossa equipe, informa o tipo de uniforme, a quantidade aproximada e envia o seu logo.',
    },
    {
      numero: '02',
      icon: Shirt,
      titulo: 'Escolha de Modelo e Tecido',
      descricao: 'Apresentamos as melhores opções de tecidos, cortes e técnicas de personalização adequadas à sua necessidade.',
    },
    {
      numero: '03',
      icon: CheckSquare,
      titulo: 'Aprovação da Arte Digital',
      descricao: 'Montamos a simulação virtual com o seu logo e especificações completas para sua total validação antes da produção.',
    },
    {
      numero: '04',
      icon: Truck,
      titulo: 'Confecção e Envio Nacional',
      descricao: 'Seu pedido entra em produção com rigoroso padrão de acabamento e é despachado para qualquer endereço do Brasil.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-criare-blue bg-criare-blue-soft px-3.5 py-1.5 rounded-full inline-block mb-3">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-criare-dark-900 tracking-tight">
            Como funciona o seu pedido na Criare
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Processo simples, transparente e 100% acompanhado do primeiro contato até a entrega na sua empresa.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {passos.map((passo, idx) => {
            const Icon = passo.icon;

            return (
              <motion.div
                key={passo.numero}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative bg-criare-light rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Number Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display font-black text-3xl text-criare-blue/20 group-hover:text-criare-blue transition-colors">
                    {passo.numero}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-criare-blue text-criare-lime flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-lg font-bold text-criare-dark-900 mb-2 group-hover:text-criare-blue transition-colors">
                    {passo.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>

                {/* Micro Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-criare-blue">
                  <span>Etapa {passo.numero}</span>
                  <ArrowRight className="w-4 h-4 text-criare-blue opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-8 py-4 rounded-full shadow-md transition-all duration-200 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
            <span>Iniciar 1º Passo via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
