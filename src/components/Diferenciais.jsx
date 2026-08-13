import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Clock, Layers, Headphones, Palette } from 'lucide-react';

export default function Diferenciais() {
  const diferenciais = [
    {
      icon: Truck,
      title: 'Envio para Todo o Brasil',
      description: 'Estrutura logística eficiente com despacho rápido e rastreável para todas as regiões do país.',
    },
    {
      icon: ShieldCheck,
      title: 'Tecidos de Alta Durabilidade',
      description: 'Seleção rigorosa de matérias-primas que garantem resistência à lavagem, conforto térmico e toque macio.',
    },
    {
      icon: Palette,
      title: 'Fidelidade de Cores e Estampa',
      description: 'Tecnologia avançada em serigrafia, bordado computadorizado e sublimação para reproduzir com exatidão o seu logo.',
    },
    {
      icon: Clock,
      title: 'Pontualidade de Entrega',
      description: 'Compromisso com prazos firmados para que sua turma ou curso receba os uniformes exatamente quando precisa.',
    },
    {
      icon: Layers,
      title: 'Variedade de Modelagens',
      description: 'Cortes masculinos e femininos pensados para o caimento perfeito e liberdade de movimento no dia a dia.',
    },
    {
      icon: Headphones,
      title: 'Atendimento Personalizado',
      description: 'Consultoria direta via WhatsApp para auxiliar na escolha da melhor combinação de tecido e técnica de bordado.',
    },
  ];

  return (
    <section className="py-20 bg-criare-blue-deep text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Diferenciais Criare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que turmas e faculdades escolhem a Criare
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Unimos qualidade de confecção com a agilidade de um atendimento próximo e personalizado.
          </p>
        </div>

        {/* Grid of Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-criare-blue-card rounded-2xl p-6 border border-white/15 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-criare-blue text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
