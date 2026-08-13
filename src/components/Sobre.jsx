import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Award, Users, ShieldCheck } from 'lucide-react';

export default function Sobre() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20mais%20sobre%20a%20Criare.";

  const destaques = [
    'Confecção própria com rigoroso controle de qualidade',
    'Matérias-primas selecionadas para máxima durabilidade',
    'Técnicas modernas de personalização e bordado',
    'Atendimento humanizado e direto com especialistas',
  ];

  return (
    <section id="sobre" className="py-24 bg-criare-blue-dark text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-criare-blue/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Photo of Criare Uniform */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-criare-blue-bright to-amber-400/40 shadow-glow-blue overflow-hidden group">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-950 h-[480px] sm:h-[520px] w-full flex items-center justify-center border border-white/20">
                <img 
                  src="/assets/sobre-criare.jpg" 
                  alt="Criare Uniformes - Modelo com Camisa Polo UFMT" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Qualidade Garantida Criare</span>
                    <span className="text-[11px] text-slate-300">Modelagem sob medida & Serigrafia Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Institutional Copywriting */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Sobre a Criare
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Transformando a identidade de turmas e cursos em uniformes de alta qualidade
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Criare nasceu com o propósito claro de valorizar marcas e cursos por meio de vestuário acadêmico e personalizado. Acreditamos que o uniforme não é apenas uma peça de roupa, mas a representação visual de orgulho e pertencimento da sua turma.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trabalhamos com linhas completas para cursos de graduação, pós-graduação, equipes de atléticas, comissões de formatura e eventos. Cada projeto recebe atenção dedicada aos detalhes, desde a indicação do tecido ideal até o acabamento do bordado.
            </p>

            {/* List of Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {destaques.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-7 py-4 rounded-full shadow-md transition-all duration-200 text-xs sm:text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                <span>Conversar com a Equipe Criare</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
