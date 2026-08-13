import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function Depoimentos() {
  {/* DEPOIMENTOS REAIS - substituir dados abaixo por feedbacks verdadeiros dos clientes */}
  const depoimentos = [
    {
      id: 1,
      nome: 'Carlos Eduardo Santos',
      empresa: 'Grupo Vanguarda Logística',
      cidade: 'Cuiabá - MT',
      linha: 'Uniformes Corporativos',
      texto: 'Recebemos as camisas polo para toda a nossa equipe operacional e o acabamento do bordado superou nossas expectativas. O tecido é resistente e confortável para o dia a dia.',
      estrelas: 5,
    },
    {
      id: 2,
      nome: 'Mariana Alencar',
      empresa: 'Academia Corpo & Movimento',
      cidade: 'São Paulo - SP',
      linha: 'Uniformes Esportivos',
      texto: 'As camisetas dry-fit para os instrutores ficaram perfeitas. O caimento é ótimo e a entrega foi realizada dentro do prazo combinado. Com certeza faremos novas tiragens com a Criare.',
      estrelas: 5,
    },
    {
      id: 3,
      nome: 'Roberto Fonseca',
      empresa: 'Comissão Formatura Engenharia',
      cidade: 'Goiânia - GO',
      linha: 'Camisetas para Eventos',
      texto: 'Fechamos as camisetas da nossa semana acadêmica com a Criare. Atendimento nota dez pelo WhatsApp, nos ajudaram a ajustar a arte antes de ir para a produção. Todos adoraram.',
      estrelas: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-criare-light border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-criare-blue bg-criare-blue-soft px-3.5 py-1.5 rounded-full inline-block mb-3">
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-criare-dark-900 tracking-tight">
            O que nossos clientes dizem sobre a Criare
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Empresas, comissões de eventos e equipes esportivas de todo o Brasil confiam no nosso padrão de confecção.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                {/* Quote Icon Background */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.estrelas)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-criare-blue/15" />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{item.texto}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex flex-col">
                <span className="font-bold text-criare-dark-900 text-sm">
                  {item.nome}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-criare-blue shrink-0" />
                  <span className="font-medium text-slate-700">{item.empresa}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {item.cidade}
                  </span>
                  <span className="font-semibold text-criare-blue bg-criare-blue-soft px-2 py-0.5 rounded">
                    {item.linha}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <CheckCircle2 className="w-6 h-6 text-criare-blue shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-criare-dark-900">Compromisso com a sua satisfação</h4>
              <p className="text-xs text-slate-500">Aprovação de layout antes da confecção e suporte contínuo durante toda a entrega.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20a%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 px-5 py-2.5 rounded-full shadow-sm transition-all"
          >
            Fazer Orçamento
          </a>
        </div>

      </div>
    </section>
  );
}
