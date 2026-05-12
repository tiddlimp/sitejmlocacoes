import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0AVim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20climatizadores.%0A%0APoderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20valores%20e%20modelos%20dispon%C3%ADveis%3F';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Galeria', href: '#galeria', id: 'galeria' },
  { label: 'Contato', href: '#contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [ctaReady, setCtaReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCtaReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Detecta seção ativa pelo scroll
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_2px_24px_rgba(0,0,0,0.1)]'
          : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo — maior */}
          <a href="#home" className="flex items-center shrink-0 group">
            <img
              src={`${import.meta.env.BASE_URL}jmlogo.png`}
              alt="JM Locações"
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors duration-200 group py-1 ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                {item.label}
                {/* Underline animado */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Telefone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5513974125867"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
            >
              <Phone size={15} />
              <span className="font-medium">(13) 97412-5867</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg hover:shadow-secondary/30 hover:scale-105 transition-all duration-700 ${
                ctaReady ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
            >
              <MessageCircle size={15} />
              Solicitar Orçamento
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`font-semibold text-base py-3 px-3 rounded-xl transition-colors ${
                activeSection === item.id
                  ? 'text-primary bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-4 mt-3 flex flex-col gap-3">
            <a
              href="tel:+551397412-5867"
              className="flex items-center justify-center gap-2 text-sm text-gray-500 py-2"
            >
              <Phone size={15} />
              (13) 97412-5867
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-5 py-3.5 rounded-full transition-all"
            >
              <MessageCircle size={16} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

