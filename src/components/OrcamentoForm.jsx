import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, Calculator, ShieldCheck, Tag } from 'lucide-react';

export default function OrcamentoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ideia, setIdeia] = useState('');
  const [quantidade, setQuantidade] = useState(10);
  const [modelo, setModelo] = useState('camiseta'); // 'camiseta' ou 'polo'
  const [detalhes, setDetalhes] = useState('');

  {/* Cálculo de preço unitário baseado na tabela oficial */}
  const getPrecoUnitario = (q, m) => {
    let base = 43;
    if (q === 1) base = 63;
    else if (q === 2) base = 55;
    else if (q === 3) base = 50;
    else if (q === 4) base = 49;
    else if (q >= 5 && q < 10) base = 48;
    else base = 43; // 10+ unidades (PIX)

    return m === 'polo' ? base + 5 : base;
  };

  const precoUnitario = getPrecoUnitario(quantidade, modelo);
  const valorTotal = precoUnitario * quantidade;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let mensagem = `Olá, vim pelo site da Criare e quero solicitar um orçamento oficial!\n\n`;
    mensagem += `*Nome do Cliente:* ${nome}\n`;
    mensagem += `*E-mail:* ${email}\n`;
    mensagem += `*Modelo Escolhido:* ${modelo === 'polo' ? 'Camisa Polo' : 'Camiseta Tradicional'}\n`;
    mensagem += `*Ideia do Uniforme / Estampa:* ${ideia}\n`;
    mensagem += `*Quantidade Escolhida:* ${quantidade} ${quantidade === 1 ? 'peça' : 'peças'}\n`;
    mensagem += `*Preço Unitário Estimado:* R$ ${precoUnitario.toFixed(2).replace('.', ',')}\n`;
    mensagem += `*Valor Total Estimado:* R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
    if (detalhes.trim()) {
      mensagem += `*Detalhes adicionais:* ${detalhes}\n`;
    }
    mensagem += `\nAguardo as orientações para darmos sequência ao projeto!`;

    const encodedText = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/5565996199033?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="orcamento" className="py-20 bg-criare-blue-deep text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-criare-blue/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full inline-block">
              Orçamento com Valor Automático
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Solicite o orçamento com cálculo exato do seu pedido
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Preencha os dados da sua ideia. O formulário calcula automaticamente a quantidade, o valor unitário e o total do pedido com a tabela de descontos.
            </p>

            {/* Quick Benefits */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Cálculo de valores pela Tabela Oficial PIX</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Resposta rápida em horário comercial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Aprovação de arte digital antes de produzir</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Direto</h4>
                <p className="text-xs text-slate-400">Canal exclusivo via WhatsApp (65) 9619-9033</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white text-criare-dark-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-criare-blue" />
                  <h3 className="text-lg font-bold text-criare-dark-900">Formulário de Orçamento</h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Cálculo Instantâneo
                </span>
              </div>

              {/* Field 1: Nome do Cliente */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Nome do Cliente: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-criare-dark-900 font-semibold focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all"
                />
              </div>

              {/* Field 2: E-mail */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Seu E-mail: *
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-criare-dark-900 font-semibold focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all"
                />
              </div>

              {/* Field 3: Ideia da Camiseta */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  3. Descreva a ideia da sua camiseta / uniforme: *
                </label>
                <textarea
                  rows="2"
                  required
                  placeholder="Ex: Camisetas para o curso de Medicina com símbolo no peito e nome nas costas."
                  value={ideia}
                  onChange={(e) => setIdeia(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-criare-dark-900 font-medium focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Field 4: Modelo & Quantidade com Cálculo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    4. Modelo: *
                  </label>
                  <select
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-criare-dark-900 font-semibold focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all"
                  >
                    <option value="camiseta">Camiseta Tradicional</option>
                    <option value="polo">Camisa Polo (+R$ 5)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    5. Quantidade de Peças: *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    required
                    value={quantidade}
                    onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-criare-dark-900 font-bold focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* CALCULATED RESUMO BOX IN FORM */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Preço Unitário (no PIX):</span>
                  <span className="font-mono font-bold text-amber-400">R$ {precoUnitario.toFixed(2).replace('.', ',')} / un</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-800 pt-2">
                  <span className="text-sm font-bold">Valor Total Estimado:</span>
                  <span className="text-2xl font-black text-amber-400">R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              {/* Field 6: Detalhes Adicionais (Opcional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  6. Detalhes adicionais (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Prazo de entrega desejado ou preferências de estampa."
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-criare-dark-900 font-medium focus:outline-none focus:ring-2 focus:ring-criare-blue focus:bg-white transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-md transition-all duration-200 text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-amber-400" />
                <span>Enviar Orçamento de {quantidade} {quantidade === 1 ? 'Peça' : 'Peças'} (R$ {valorTotal.toFixed(2).replace('.', ',')}) no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
