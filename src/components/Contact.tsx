import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const WA_LINK = 'https://wa.me/5513974125867';

const CONTACT_INFO = [
  {
    icon: <MessageCircle size={22} />,
    label: 'WhatsApp',
    value: '+55 13 97412-5867',
    href: WA_LINK,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: <Phone size={22} />,
    label: 'Telefone Fixo',
    value: '+55 13 97412-5867',
    href: 'tel:+5513974125867',
    iconBg: 'bg-blue-100',
    iconColor: 'text-primary',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Localização',
    value: 'Praia Grande — SP',
    href: '#',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    icon: <Clock size={22} />,
    label: 'Horário de Atendimento',
    value: 'Seg–Sex: 8h–19h | Sáb: 8h–18h',
    href: '#',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Fale Conosco</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4">
            Entre em{' '}
            <span className="bg-gradient-to-r from-secondary to-sky-400 bg-clip-text text-transparent">
              contato
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Estamos prontos para atender você. Escolha a forma de contato mais conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Lado esquerdo: Info */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 bg-gray-50 hover:bg-[#f0f9ff] border border-gray-100 hover:border-secondary/30 rounded-2xl p-5 transition-all duration-200 group"
              >
                <div
                  className={`w-12 h-12 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-primary font-bold text-base">{item.value}</div>
                </div>
              </a>
            ))}

            {/* CTA WhatsApp grande */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-lg py-5 rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 hover:scale-[1.02] mt-4"
            >
              <MessageCircle size={26} />
              Chamar no WhatsApp Agora
            </a>
          </div>

          {/* Lado direito: Mapa */}
          <div className="rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(2,59,113,0.12)] border border-gray-100">
            <div className="relative w-full" style={{ paddingBottom: '65%' }}>
              <iframe
                title="Localização JM Locações"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.2097033871069!2d-46.41380198278983!3d-24.0014683539544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c4cff573bcb%3A0xe8aa44543ac91c48!2sR.%20S%C3%A3o%20Vicente%2C%2044%20-%20Boqueir%C3%A3o%2C%20Praia%20Grande%20-%20SP%2C%2011701-290!5e0!3m2!1spt-BR!2sbr!4v1778184022801!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

