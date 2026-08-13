import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Check, Sparkles, RotateCw, Eye, X, Plus, Minus, Tag } from 'lucide-react';

export default function CatalogoUniformes() {
  const [modalProduto, setModalProduto] = useState(null);

  {/* Função para calcular preço unitário de camisetas com base na quantidade */}
  const getPrecoUnitario = (q) => {
    if (q === 1) return 63;
    if (q === 2) return 55;
    if (q === 3) return 50;
    if (q === 4) return 49;
    if (q >= 5 && q < 10) return 48;
    return 43; // 10+ unidades (PIX)
  };

  {/* Catálogo Exclusivo das Camisetas Reais UFMT */}
  const produtos = [
    {
      id: 'capivara-ufmt',
      nome: 'Camiseta Capivara UFMT',
      subtitulo: 'Coleção Universitária UFMT',
      tecido: 'Meia Malha 100% Algodão Penteado Fio 30.1',
      diferenciais: 'Modelagem confortável com estampa exclusiva Capivara UFMT na frente e brasão oficial no verso.',
      cores: [
        { 
          nome: 'Verde', 
          hex: '#1E4620', 
          fotoFrente: '/assets/produtos/capivara-ufmt-verde.png',
          fotoVerso: '/assets/produtos/capivara-ufmt-verde-verso.png' 
        },
        { 
          nome: 'Azul', 
          hex: '#262D74', 
          fotoFrente: '/assets/produtos/capivara-ufmt-azul.png',
          fotoVerso: '/assets/produtos/capivara-ufmt-azul-verso.png' 
        },
        { 
          nome: 'Preta', 
          hex: '#181818', 
          fotoFrente: '/assets/produtos/capivara-ufmt-preta.png',
          fotoVerso: '/assets/produtos/capivara-ufmt-preta-verso.png' 
        },
        { 
          nome: 'Cinza', 
          hex: '#8E9196', 
          fotoFrente: '/assets/produtos/capivara-ufmt-cinza.png',
          fotoVerso: '/assets/produtos/capivara-ufmt-cinza-verso.png' 
        },
        { 
          nome: 'Vinho', 
          hex: '#581C24', 
          fotoFrente: '/assets/produtos/capivara-ufmt-vinho.png',
          fotoVerso: null 
        },
      ],
      defaultCorIndex: 0,
    },
    {
      id: 'gatinhos-ufmt',
      nome: 'Camiseta Gatinhos UFMT',
      subtitulo: 'Coleção Universitária UFMT',
      tecido: 'Meia Malha 100% Algodão Penteado Fio 30.1',
      diferenciais: 'Modelagem confortável com estampa exclusiva Gatinhos UFMT na frente e brasão no verso.',
      cores: [
        { 
          nome: 'Preta', 
          hex: '#181818', 
          fotoFrente: '/assets/produtos/gatinhos-ufmt-preta.png',
          fotoVerso: '/assets/produtos/gatinhos-ufmt-preta-verso.png' 
        },
        { 
          nome: 'Azul', 
          hex: '#262D74', 
          fotoFrente: '/assets/produtos/gatinhos-ufmt-azul.png',
          fotoVerso: '/assets/produtos/gatinhos-ufmt-azul-verso.png' 
        },
        { 
          nome: 'Verde', 
          hex: '#1E4620', 
          fotoFrente: '/assets/produtos/gatinhos-ufmt-verde.png',
          fotoVerso: '/assets/produtos/gatinhos-ufmt-verde-verso.png' 
        },
        { 
          nome: 'Vinho', 
          hex: '#581C24', 
          fotoFrente: '/assets/produtos/gatinhos-ufmt-vinho.png',
          fotoVerso: '/assets/produtos/gatinhos-ufmt-vinho-verso.png' 
        },
        { 
          nome: 'Cinza', 
          hex: '#8E9196', 
          fotoFrente: '/assets/produtos/gatinhos-ufmt-cinza.png',
          fotoVerso: null 
        },
      ],
      defaultCorIndex: 0,
    },
    {
      id: 'catedral-ufmt',
      nome: 'Camiseta Catedral UFMT',
      subtitulo: 'Coleção Universitária UFMT',
      tecido: 'Meia Malha 100% Algodão Penteado Fio 30.1',
      diferenciais: 'Modelagem confortável com estampa exclusiva Catedral UFMT em serigrafia de alta definição.',
      cores: [
        { 
          nome: 'Preta', 
          hex: '#181818', 
          fotoFrente: '/assets/produtos/catedral-ufmt-preta-frente.png',
          fotoVerso: '/assets/produtos/catedral-ufmt-preta-verso.png' 
        },
        { 
          nome: 'Verde', 
          hex: '#1E4620', 
          fotoFrente: '/assets/produtos/catedral-ufmt-verde-frente.png',
          fotoVerso: '/assets/produtos/catedral-ufmt-verde-verso.png' 
        },
        { 
          nome: 'Azul', 
          hex: '#262D74', 
          fotoFrente: '/assets/produtos/catedral-ufmt-azul-frente.png',
          fotoVerso: '/assets/produtos/catedral-ufmt-azul-verso.png' 
        },
        { 
          nome: 'Cinza', 
          hex: '#8E9196', 
          fotoFrente: '/assets/produtos/catedral-ufmt-cinza-frente.png',
          fotoVerso: '/assets/produtos/catedral-ufmt-cinza-verso.png' 
        },
        { 
          nome: 'Vinho', 
          hex: '#581C24', 
          fotoFrente: null,
          fotoVerso: '/assets/produtos/catedral-ufmt-vinho-verso.png' 
        },
      ],
      defaultCorIndex: 0,
    },
    {
      id: 'faixa-ufmt',
      nome: 'Camiseta Capivaras na Faixa UFMT',
      subtitulo: 'Coleção Universitária UFMT',
      tecido: 'Meia Malha 100% Algodão Penteado Fio 30.1',
      diferenciais: 'Modelagem confortável com estampa exclusiva Capivaras na Faixa UFMT na frente e brasão no verso.',
      cores: [
        { 
          nome: 'Cinza', 
          hex: '#8E9196', 
          fotoFrente: '/assets/produtos/faixa-ufmt-cinza-frente.png',
          fotoVerso: '/assets/produtos/faixa-ufmt-cinza-verso.png' 
        },
        { 
          nome: 'Preta', 
          hex: '#181818', 
          fotoFrente: '/assets/produtos/faixa-ufmt-preta-frente.png',
          fotoVerso: '/assets/produtos/faixa-ufmt-preta-verso.png' 
        },
        { 
          nome: 'Azul', 
          hex: '#262D74', 
          fotoFrente: '/assets/produtos/faixa-ufmt-azul-frente.png',
          fotoVerso: '/assets/produtos/faixa-ufmt-azul-verso.png' 
        },
        { 
          nome: 'Vinho', 
          hex: '#581C24', 
          fotoFrente: '/assets/produtos/faixa-ufmt-vinho-frente.png',
          fotoVerso: '/assets/produtos/faixa-ufmt-vinho-verso.png' 
        },
        { 
          nome: 'Verde', 
          hex: '#1E4620', 
          fotoFrente: '/assets/produtos/faixa-ufmt-verde-frente.png',
          fotoVerso: null 
        },
      ],
      defaultCorIndex: 0,
    },
  ];

  {/* Estado para controlar a cor selecionada de cada item */}
  const [selectedColors, setSelectedColors] = useState(() => {
    const initial = {};
    produtos.forEach((p) => {
      initial[p.id] = p.cores[p.defaultCorIndex];
    });
    return initial;
  });

  {/* Estado para controlar a visão (Frente / Verso) de cada item */}
  const [selectedViews, setSelectedViews] = useState(() => {
    const initial = {};
    produtos.forEach((p) => {
      initial[p.id] = 'frente';
    });
    return initial;
  });

  {/* Estado para controlar a quantidade de cada item nos cards */}
  const [quantidades, setQuantidades] = useState(() => {
    const initial = {};
    produtos.forEach((p) => {
      initial[p.id] = 10; // Padrão 10 unidades (PIX desconto máximo)
    });
    return initial;
  });

  const handleColorSelect = (produtoId, cor) => {
    setSelectedColors((prev) => ({
      ...prev,
      [produtoId]: cor,
    }));
  };

  const handleViewToggle = (produtoId, visao) => {
    setSelectedViews((prev) => ({
      ...prev,
      [produtoId]: visao,
    }));
  };

  const handleQuantityChange = (produtoId, delta) => {
    setQuantidades((prev) => ({
      ...prev,
      [produtoId]: Math.max(1, (prev[produtoId] || 1) + delta),
    }));
  };

  const setExactQuantity = (produtoId, val) => {
    setQuantidades((prev) => ({
      ...prev,
      [produtoId]: Math.max(1, parseInt(val) || 1),
    }));
  };

  return (
    <section id="catalogo" className="py-24 bg-criare-blue-deep text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-criare-blue/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <RotateCw className="w-4 h-4 text-amber-400" />
            <span>Mostruário Oficial com Precificação Automática</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Catálogo de Uniformes
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Escolha a cor, a visão (Frente/Verso) e a quantidade para calcular o <strong>valor exato do seu pedido</strong> instantaneamente.
          </p>
        </div>

        {/* Uniform Items Grid - Exactly 4 Real Shirts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {produtos.map((item, idx) => {
              const activeCor = selectedColors[item.id] || item.cores[0];
              const activeVisao = selectedViews[item.id] || 'frente';
              const activeQtd = quantidades[item.id] || 10;
              const unitPrice = getPrecoUnitario(activeQtd);
              const totalPrice = unitPrice * activeQtd;

              {/* Obter imagem real da Frente ou do Verso */}
              const currentImg = activeVisao === 'verso' 
                ? (activeCor.fotoVerso || activeCor.fotoFrente) 
                : (activeCor.fotoFrente || activeCor.fotoVerso);

              const whatsappMessage = encodeURIComponent(
                `Olá, vim pelo site da Criare e quero fazer o pedido da camiseta:\n\n` +
                `*Produto:* ${item.nome}\n` +
                `*Cor:* ${activeCor.nome}\n` +
                `*Visão:* ${activeVisao.toUpperCase()}\n` +
                `*Quantidade:* ${activeQtd} ${activeQtd === 1 ? 'peça' : 'peças'}\n` +
                `*Preço Unitário:* R$ ${unitPrice.toFixed(2).replace('.', ',')}\n` +
                `*Valor Total Estimado:* R$ ${totalPrice.toFixed(2).replace('.', ',')}`
              );
              const whatsappUrl = `https://wa.me/5565996199033?text=${whatsappMessage}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative bg-criare-blue-card rounded-3xl border border-white/20 hover:border-amber-400/60 overflow-hidden shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Container de Foto Real em Fundo Preto Puro */}
                    <div className="relative h-72 w-full bg-black p-4 flex flex-col justify-between overflow-hidden border-b border-white/10">
                      
                      {/* Grid sutil de fundo em tom escuro */}
                      <div className="absolute inset-0 bg-dot-pattern-dark opacity-15"></div>

                      {/* Top Bar: Front / Back Toggle Switch */}
                      <div className="relative z-10 flex justify-between items-center bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-white/10">
                        <button
                          type="button"
                          onClick={() => handleViewToggle(item.id, 'frente')}
                          className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                            activeVisao === 'frente'
                              ? 'bg-amber-400 text-slate-950 shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Frente
                        </button>
                        <button
                          type="button"
                          onClick={() => handleViewToggle(item.id, 'verso')}
                          className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                            activeVisao === 'verso'
                              ? 'bg-amber-400 text-slate-950 shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Verso
                        </button>
                      </div>

                      {/* Exibição da Imagem Real */}
                      <div className="relative z-10 my-auto h-48 w-full flex items-center justify-center overflow-hidden">
                        {currentImg ? (
                          <img 
                            src={currentImg} 
                            alt={`${item.nome} - ${activeCor.nome} (${activeVisao})`} 
                            className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-xl"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[10px] font-mono text-slate-400 tracking-wide uppercase">
                              Aguardando Foto
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Selected Color & View Badge */}
                      <div className="relative z-10 flex justify-between items-center bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs">
                        <span className="text-[10px] font-semibold text-slate-400">
                          {activeVisao === 'frente' ? 'Frente' : 'Verso'}
                        </span>
                        <span className="font-bold text-amber-400 flex items-center gap-1.5 text-[11px]">
                          <span 
                            className="w-2.5 h-2.5 rounded-full border border-white/30" 
                            style={{ backgroundColor: activeCor.hex }}
                          ></span>
                          {activeCor.nome}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                            {item.nome}
                          </h3>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">
                            {item.subtitulo}
                          </p>
                        </div>
                        
                        {/* Modal Zoom Button */}
                        <button
                          type="button"
                          onClick={() => setModalProduto({ item, cor: activeCor, visao: activeVisao, img: currentImg, qtd: activeQtd })}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-amber-400 transition-colors border border-white/10 shrink-0"
                          title="Ver em tamanho ampliado"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>

                      {/* COLOR DOTS SELECTION */}
                      <div>
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Cor:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.cores.map((cor) => {
                            const isSelected = activeCor.nome === cor.nome;
                            return (
                              <button
                                key={cor.nome}
                                type="button"
                                onClick={() => handleColorSelect(item.id, cor)}
                                title={cor.nome}
                                className={`relative w-6 h-6 rounded-full transition-all duration-200 flex items-center justify-center border ${
                                  isSelected 
                                    ? 'scale-125 ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-10 border-white' 
                                    : 'hover:scale-110 border-white/20 opacity-80 hover:opacity-100'
                                }`}
                                style={{ backgroundColor: cor.hex }}
                              >
                                {isSelected && (
                                  <Check 
                                    className={`w-3 h-3 ${
                                      cor.hex === '#FFFFFF' || cor.hex === '#EAB308' || cor.hex === '#8E9196' 
                                        ? 'text-slate-900 font-black' 
                                        : 'text-white'
                                    }`} 
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* QUANTITY SELECTOR ON CARD */}
                      <div className="pt-2 border-t border-white/10 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                            Quantidade de Peças:
                          </span>
                          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={activeQtd}
                              onChange={(e) => setExactQuantity(item.id, e.target.value)}
                              className="w-10 bg-transparent text-center text-xs font-bold text-amber-400 focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* PRICE & TOTAL CALCULATED DISPLAY */}
                        <div className="bg-slate-950/80 p-2.5 rounded-xl border border-white/10 flex justify-between items-center">
                          <div>
                            <span className="text-[10px] text-slate-400 font-mono block">R$ {unitPrice.toFixed(2).replace('.', ',')} / un</span>
                            {activeQtd >= 10 && (
                              <span className="text-[9px] font-bold text-emerald-400 block">PIX Desconto Máximo</span>
                            )}
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block font-mono">TOTAL ESTIMADO</span>
                            <span className="text-sm font-black text-amber-400">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-4 py-3 rounded-xl transition-all duration-200 text-xs shadow-md cursor-pointer group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                      <span>Pedir {activeQtd} {activeQtd === 1 ? 'Peça' : 'Peças'} (R$ {totalPrice.toFixed(2).replace('.', ',')})</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Catalog Custom Request Banner */}
        <div className="mt-16 bg-gradient-to-r from-criare-blue-deep via-criare-blue-dark to-criare-blue-card rounded-3xl p-8 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sua Turma ou Atlética precisa de um modelo exclusivo?</span>
            </div>
            <h3 className="text-xl font-bold text-white">Criamos a arte do seu curso com visualização completa</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Desenvolvemos camisetas, polos, jalecos e moletons personalizados com aprovação da arte digital antes da produção.
            </p>
          </div>
          <a
            href="https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20projeto%20personalizado%20para%20meu%20curso."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-full shadow-md transition-all text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
            <span>Pedir Arte Digital Grátis</span>
          </a>
        </div>

      </div>

      {/* MODAL DE VISUALIZAÇÃO AMPLIADA COM CÁLCULO DE VALOR E QUANTIDADE */}
      <AnimatePresence>
        {modalProduto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-criare-blue-card rounded-3xl border border-white/20 p-6 sm:p-8 max-w-2xl w-full text-white shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setModalProduto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20 inline-block mb-2">
                    Visualização Detalhada & Calculadora
                  </span>
                  <h3 className="text-2xl font-black text-white">{modalProduto.item.nome}</h3>
                  <p className="text-xs text-slate-300">{modalProduto.item.subtitulo}</p>
                </div>

                {/* Modal Visual Container */}
                <div className="relative h-80 w-full bg-black rounded-2xl p-4 border border-white/10 flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="text-xs font-bold text-amber-400 bg-slate-900/90 px-3 py-1 rounded-xl border border-white/10">
                      Cor Selecionada: {modalProduto.cor.nome}
                    </span>
                    <span className="text-xs font-bold text-white bg-criare-blue px-3 py-1 rounded-xl">
                      Visão: {modalProduto.visao.toUpperCase()}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto h-56 w-full flex items-center justify-center">
                    {modalProduto.img ? (
                      <img 
                        src={modalProduto.img} 
                        alt={`${modalProduto.item.nome} - ${modalProduto.cor.nome}`} 
                        className="h-full w-auto object-contain drop-shadow-2xl"
                      />
                    ) : (
                      <div className="text-center">
                        <span className="text-xs font-mono text-slate-300">
                          Aguardando foto em alta resolução
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Quantity Summary in Modal */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-xs text-slate-400 font-mono block">QUANTIDADE SELECIONADA:</span>
                    <span className="text-lg font-bold text-white">{quantidades[modalProduto.item.id] || 10} Unidades</span>
                    <span className="text-xs text-amber-400 block font-mono">
                      R$ {getPrecoUnitario(quantidades[modalProduto.item.id] || 10).toFixed(2).replace('.', ',')} / cada
                    </span>
                  </div>
                  <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4">
                    <span className="text-xs text-slate-400 font-mono block">VALOR TOTAL ESTIMADO:</span>
                    <span className="text-2xl font-black text-amber-400">
                      R$ {(getPrecoUnitario(quantidades[modalProduto.item.id] || 10) * (quantidades[modalProduto.item.id] || 10)).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/5565996199033?text=${encodeURIComponent(
                      `Olá, vi a *${modalProduto.item.nome}* no site e quero fazer um pedido!\n\n` +
                      `*Cor:* ${modalProduto.cor.nome}\n` +
                      `*Visão:* ${modalProduto.visao.toUpperCase()}\n` +
                      `*Quantidade:* ${quantidades[modalProduto.item.id] || 10} peças\n` +
                      `*Preço Unitário:* R$ ${getPrecoUnitario(quantidades[modalProduto.item.id] || 10).toFixed(2).replace('.', ',')}\n` +
                      `*Valor Total Estimado:* R$ ${(getPrecoUnitario(quantidades[modalProduto.item.id] || 10) * (quantidades[modalProduto.item.id] || 10)).toFixed(2).replace('.', ',')}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-md text-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                    <span>Confirmar Pedido de {quantidades[modalProduto.item.id] || 10} Unid. no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalProduto(null)}
                    className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
