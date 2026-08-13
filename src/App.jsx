import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import CatalogoUniformes from './components/CatalogoUniformes';
import TabelaPrecos from './components/TabelaPrecos';
import ComoFunciona from './components/ComoFunciona';
import OrcamentoForm from './components/OrcamentoForm';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-criare-blue-deep text-white font-sans selection:bg-amber-400 selection:text-slate-950 antialiased">
      {/* Header Fixo */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <CatalogoUniformes />
        <TabelaPrecos />
        <ComoFunciona />
        <OrcamentoForm />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
