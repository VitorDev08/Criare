import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, MessageCircle, Calculator, Zap } from 'lucide-react';

export default function TabelaPrecos() {
  const [qtd, setQtd] = useState(10);
  const [tipoModelo, setTipoModelo] = useState('camiseta'); // 'camiseta' ou 'polo'

  {/* Cálculo de preço unitário baseado na tabela oficial */}
  const getPrecoUnitario = (q, modelo) => {
    let base = 43;
    if (q === 1) base = 63;
    else if (q === 2) base = 55;
    else if (q === 3) base = 50;
    else if (q === 4) base = 49;
    else if (q >= 5 && q < 10) base = 48;
    else base = 43; // 10+ unidades

    return modelo === 'polo' ? base + 5 : base;
  };

  const precoUnitarioAtual = getPrecoUnitario(qtd, tipoModelo);
  const valorTotal = precoUnitarioAtual * qtd;

  const tabelaPrecos = [
    { qtdLabel: '1 unidade', valor: 'R$ 63,00', destaque: false },
    { qtdLabel: '2 unidades', valor: 'R$ 55,00', porUnidade: true, destaque: false },
    { qtdLabel: '3 unidades', valor: 'R$ 50,00', porUnidade: true, destaque: false },
    { qtdLabel: '4 unidades', valor: 'R$ 49,00', porUnidade: true, destaque: false },
    { qtdLabel: '5 a 9 unidades', valor: 'R$ 48,00', porUnidade: true, destaque: false },
    { qtdLabel: '10+ unidades (PIX)', valor: 'R$ 43,00', porUnidade: true, destaque: true },
  ];

  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site da Criare e quero encomendar *${qtd}* unidades de *${
      tipoModelo === 'polo' ? 'Camisa Polo' : 'Camiseta'
    }* no valor total estimado de *R$ ${valorTotal.toFixed(2).replace('.', ',')}* (R$ ${precoUnitarioAtual.toFixed(2).replace('.', ',')} cada).`
  );

  return (
    <section id="precos" className="py-24 bg-criare-blue-dark text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-criare-blue/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Tag className="w-4 h-4 text-amber-400" />
            <span>Tabela Transparente de Preços</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Quanto mais unidades, maior o desconto!
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Confira a tabela regressiva oficial da Criare com pagamento via PIX e faça uma simulação em tempo real para a sua turma ou atlética.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Main Highlight & Tier Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* HERO BEST VALUE CARD (10+ UNIDADES) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-400 via-amber-300 to-criare-blue-bright shadow-glow-amber overflow-hidden"
            >
              <div className="bg-criare-blue-card rounded-[22px] p-6 sm:p-8 relative flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    A partir de 10 Unidades (no PIX)
                  </span>
                  <h3 className="text-2xl font-black text-white">Desconto Máximo de Turma</h3>
                  <p className="text-xs text-slate-300">
                    O valor ideal para turmas completas, atléticas e comissões de formatura.
                  </p>
                </div>

                {/* Big Price Display */}
                <div className="text-center shrink-0 bg-slate-950/80 p-5 rounded-2xl border border-white/10 min-w-[160px]">
                  <span className="text-xs text-slate-400 block font-mono">A PARTIR DE</span>
                  <div className="flex items-baseline justify-center gap-1 text-amber-400 font-black">
                    <span className="text-lg">R$</span>
                    <span className="text-5xl tracking-tight">43</span>
                    <span className="text-xl">,00</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mt-1">
                    CADA PEÇA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FULL PRICE TIER GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tabelaPrecos.map((item, idx) => (
                <motion.div
                  key={item.qtdLabel}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-2xl border transition-all ${
                    item.destaque 
                      ? 'bg-amber-400/10 border-amber-400/50 shadow-md' 
                      : 'bg-criare-blue-card border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-300 block">
                    {item.qtdLabel}
                  </span>
                  <span className={`text-xl font-black block mt-1 ${item.destaque ? 'text-amber-400' : 'text-white'}`}>
                    {item.valor}
                  </span>
                  {item.porUnidade && (
                    <span className="text-[10px] text-slate-400 font-mono block">CADA</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* ADICIONAL MODELO POLO BANNER */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-white/15 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-criare-blue flex items-center justify-center font-black text-amber-400 border border-white/20 text-sm">
                  POLO
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Modelo Camisa Polo</h4>
                  <p className="text-xs text-slate-400">Adicional com gola tricotada e acabamento premium</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-extrabold text-amber-400">+R$ 5,00</span>
                <span className="text-[10px] text-slate-400 block font-mono">CADA PEÇA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Simulating Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-criare-blue-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6"
          >
            <div className="flex items-center gap-2 text-amber-400">
              <Calculator className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">Simulador de Orçamento Instantâneo</h3>
            </div>

            {/* Model Selector Toggle */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                Selecione o Modelo:
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setTipoModelo('camiseta')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    tipoModelo === 'camiseta' 
                      ? 'bg-amber-400 text-slate-950 shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Camiseta Tradicional
                </button>
                <button
                  type="button"
                  onClick={() => setTipoModelo('polo')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    tipoModelo === 'polo' 
                      ? 'bg-amber-400 text-slate-950 shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Camisa Polo (+R$ 5)
                </button>
              </div>
            </div>

            {/* Quantity Selector Slider & Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Quantidade de Peças:
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number"
                    min="1"
                    max="500"
                    value={qtd}
                    onChange={(e) => setQtd(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 bg-slate-950 border border-amber-400/50 rounded-xl px-3 py-1 text-center font-bold text-amber-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <span className="text-xs text-slate-400 font-mono">UNID.</span>
                </div>
              </div>

              {/* Slider */}
              <input 
                type="range"
                min="1"
                max="50"
                value={qtd > 50 ? 50 : qtd}
                onChange={(e) => setQtd(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>1 un (R$ 63)</span>
                <span>5 un (R$ 48)</span>
                <span>10+ un (R$ 43)</span>
              </div>
            </div>

            {/* Calculated Result Box */}
            <div className="bg-slate-950 rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span>Preço Unitário (no PIX):</span>
                <span className="font-mono font-bold text-amber-400">
                  R$ {precoUnitarioAtual.toFixed(2).replace('.', ',')} / un
                </span>
              </div>

              {qtd >= 10 && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-400/10 p-2 rounded-lg border border-emerald-400/20">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Você atingiu a faixa de Desconto Máximo (10+ unidades)!</span>
                </div>
              )}

              <div className="border-t border-white/10 pt-3 flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Valor Total Estimado:</span>
                <span className="text-3xl font-black text-amber-400">
                  R$ {valorTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/5565996199033?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-4 rounded-xl shadow-lg transition-all text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
              <span>Garantir Pedido de {qtd} {qtd === 1 ? 'Peça' : 'Peças'} no WhatsApp</span>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
