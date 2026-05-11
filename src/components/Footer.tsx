import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5513974125867';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES_LINKS = [
  { label: 'Locação para Eventos', href: '#servicos' },
  { label: 'Locação para Empresas', href: '#servicos' },
  { label: 'Ambientes Abertos', href: '#servicos' },
  { label: 'Solicitar Orçamento', href: WA_LINK },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#011e3c] text-white">

      {/* Linha gradiente no topo */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-sky-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1: Logo + descrição */}
          <div className="lg:col-span-1">
            <img
              src="/jmlogo.png"
              alt="JM Locações"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas em locação de climatizadores industriais para eventos,
              empresas e ambientes abertos. Qualidade, pontualidade e suporte técnico
              em cada serviço.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-3">
              {[
                { icon: <InstagramIcon />, href: 'https://www.instagram.com/jmlocacoes_pg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
                { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
                { icon: <MessageCircle size={18} />, href: WA_LINK, label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/8 hover:bg-secondary rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10 hover:border-secondary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-secondary/80 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary/50 rounded-full group-hover:bg-secondary group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serviços */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-secondary/80 mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary/50 rounded-full group-hover:bg-secondary group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-secondary/80 mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Praia Grande — SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary shrink-0" />
                <a href="tel:+5513974125867" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +55 13 97412-5867
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-secondary shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary shrink-0" />
                <a href="mailto:contato@jmlocacoes.com.br" className="text-gray-400 hover:text-white text-sm transition-colors">
                  contato@jmlocacoes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500 text-center sm:text-left">
          <span>© {year} JM Locações. Todos os direitos reservados.</span>
          <span className="hidden sm:inline">Locação de Climatizadores para Eventos e Empresas</span>
        </div>
      </div>
    </footer>
  );
}

