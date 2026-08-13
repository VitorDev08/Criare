import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      pergunta: 'Qual é o prazo médio de produção dos uniformes?',
      resposta: 'O prazo médio de confecção varia entre 10 e 20 dias úteis a depender da quantidade do pedido, do tipo de tecido e da técnica de personalização escolhida. Durante o atendimento via WhatsApp, informamos o prazo exato para a sua demanda antes do fechamento.',
    },
    {
      pergunta: 'Existe pedido mínimo de peças?',
      resposta: 'Trabalhamos com tiragens mínimas acessíveis para atender tanto pequenas empresas quanto grandes corporações e eventos. Entre em contato pelo WhatsApp para consultar as condições específicas da linha desejada.',
    },
    {
      pergunta: 'Como funciona o envio para outros estados do Brasil?',
      resposta: 'Realizamos despachos diários via transportadoras parceiras e Correios com código de rastreamento completo. Atendemos empresas e clientes em todos os estados com segurança e garantia de entrega.',
    },
    {
      pergunta: 'Como devo enviar o logo da minha empresa para aprovação?',
      resposta: 'Você pode enviar seu arquivo em formatos vetoriais como PDF, EPS, AI ou CDR, ou também em imagens de alta resolução como PNG ou JPEG. Nossa equipe prepara a simulação digital para sua aprovação final.',
    },
    {
      pergunta: 'Quais são as formas de pagamento aceitas pela Criare?',
      resposta: 'Aceitamos PIX, transferência bancária e cartões de crédito. Oferecemos condições facilitadas de pagamento que são combinadas diretamente no fechamento do seu orçamento via WhatsApp.',
    },
    {
      pergunta: 'Posso solicitar amostras de tecidos antes da produção final?',
      resposta: 'Sim. Para pedidos corporativos de médio e grande porte, fornecemos orientação sobre a gramatura, composição e toque dos tecidos para assegurar a escolha perfeita antes de iniciar a confecção industrial.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20uniformes%20da%20Criare.";

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-criare-blue bg-criare-blue-soft px-3.5 py-1.5 rounded-full inline-block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-criare-dark-900 tracking-tight">
            Perguntas Frequentes sobre a Criare
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Esclareça rapidamente as principais dúvidas sobre prazos, envios e processos de confecção.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.pergunta}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-criare-light rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-criare-dark-900 hover:text-criare-blue transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-criare-blue shrink-0" />
                    <span>{faq.pergunta}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-criare-blue shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 mt-1 pt-4">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Direct Contact Callout */}
        <div className="mt-12 text-center bg-criare-blue-soft rounded-2xl p-6 border border-criare-blue/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-criare-dark-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600">Nossa equipe de atendimento está disponível no WhatsApp para responder prontamente.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
            <span>Tirar Dúvidas via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
