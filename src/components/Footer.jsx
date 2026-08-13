import React from 'react';
import { Phone, Truck, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const whatsappUrl = "https://wa.me/5565996199033?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20de%20uniformes.";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-criare-blue-deep text-white pt-16 pb-12 border-t border-white/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-criare-blue flex items-center justify-center border-2 border-criare-lime shadow-md">
                <span className="font-display font-black text-criare-lime text-xl leading-none">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-xl leading-tight tracking-wider">
                  CRIARE
                </span>
                <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-widest leading-none">
                  UNIFORMES & CAMISETAS
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Confecção sob medida de uniformes corporativos, esportivos e promocionais. Valorizamos a sua marca com tecidos de altíssima durabilidade e acabamento impecável.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl w-fit">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Envios garantidos para todo o Brasil</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-criare-lime transition-colors">Início</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-criare-lime transition-colors">Catálogo de Uniformes</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-criare-lime transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-criare-lime transition-colors">Simulador de Orçamento</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-criare-lime transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-criare-lime transition-colors">Dúvidas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Lines */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>Corporativos</li>
              <li>Esportivos & Times</li>
              <li>Camisetas de Eventos</li>
              <li>Formaturas</li>
              <li>Aventais & Coletes</li>
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Canais Oficiais
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-criare-lime transition-colors p-2.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase">WhatsApp Oficial</span>
                  <span className="font-bold text-white">(65) 9619-9033</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/criareuniformes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-criare-lime transition-colors p-2.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase">Instagram Oficial</span>
                  <span className="font-bold text-white">@criareuniformes</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Criare Uniformes | Camisetas Personalizadas. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-criare-lime transition-colors focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
