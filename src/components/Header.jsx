import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Truck, Phone } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20uniformes.";

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Preços', href: '#precos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Orçamento', href: '#orcamento' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-criare-blue-deep text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-criare-lime shrink-0" />
            <span className="font-medium">Envios rápidos para todo o Brasil com rastreamento completo</span>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <a 
              href="tel:5565996199033" 
              className="flex items-center gap-1.5 hover:text-criare-lime transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(65) 9619-9033</span>
            </a>
            <span className="opacity-30">|</span>
            <a 
              href="https://www.instagram.com/criareuniformes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-criare-lime transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@criareuniformes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-lg py-3 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src="/assets/logo-criare.png" 
              alt="Criare Uniformes" 
              className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover shadow-md transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-criare-blue text-xl leading-tight tracking-wider">
                CRIARE
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none">
                UNIFORMES
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-criare-dark-800 hover:text-criare-blue transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-criare-blue hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
              <span>Peça seu orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-criare-blue hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-criare-dark-800 hover:bg-slate-50 hover:text-criare-blue rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-full shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                <span>Solicitar Orçamento via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
