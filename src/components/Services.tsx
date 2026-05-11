import { CalendarDays, Building2, Wind, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';


const WA_EVENTOS  = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0ATenho%20interesse%20na%20loca%C3%A7%C3%A3o%20de%20climatizadores%20para%20um%20evento%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0APoderiam%20me%20informar%20disponibilidade%2C%20valores%20e%20a%20melhor%20op%C3%A7%C3%A3o%20para%20o%20meu%20evento%3F';
const WA_EMPRESAS = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0ATenho%20interesse%20na%20loca%C3%A7%C3%A3o%20de%20climatizadores%20para%20minha%20empresa%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0APoderiam%20me%20informar%20disponibilidade%2C%20valores%20e%20as%20melhores%20op%C3%A7%C3%B5es%20para%20uso%20empresarial%3F';
const WA_ABERTOS  = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0ATenho%20interesse%20na%20loca%C3%A7%C3%A3o%20de%20climatizadores%20para%20um%20ambiente%20aberto%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0APoderiam%20me%20informar%20disponibilidade%2C%20valores%20e%20os%20modelos%20mais%20indicados%20para%20%C3%A1reas%20externas%3F';

const SERVICES = [
  {
    icon: <CalendarDays size={28} />,
    title: 'Locação para Eventos',
    waLink: WA_EVENTOS,
    description:
      'Climatizadores ideais para casamentos, festas, shows, formaturas e eventos corporativos. Garantimos o conforto dos seus convidados independente da época do ano.',
    features: [
      'Entrega e instalação incluídas',
      'Técnico de suporte no local',
      'Equipamentos para qualquer porte',
      'Locação por hora, dia ou semana',
    ],
    gradient: 'from-primary to-secondary',
    iconBg: 'bg-blue-50 text-primary',
    accent: 'border-t-primary',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Locação para Empresas',
    waLink: WA_EMPRESAS,
    description:
      'Mantenha sua equipe produtiva e seus clientes confortáveis. Soluções de climatização para escritórios, galpões, depósitos e ambientes industriais.',
    features: [
      'Planos mensais e anuais flexíveis',
      'Manutenção preventiva incluída',
      'Instalação profissional',
      'Equipamentos certificados',
    ],
    gradient: 'from-secondary to-sky-400',
    iconBg: 'bg-sky-50 text-secondary',
    accent: 'border-t-secondary',
  },
  {
    icon: <Wind size={28} />,
    title: 'Ambientes Abertos',
    waLink: WA_ABERTOS,
    description:
      'Climatizadores de alta potência para feiras, praças de alimentação, tendas e áreas externas. Tecnologia evaporativa que refresca mesmo ao ar livre.',
    features: [
      'Alta vazão de ar refrigerado',
      'Baixo consumo energético',
      'Resistente a interpéries',
      'Ideal para grandes áreas',
    ],
    gradient: 'from-teal-500 to-secondary',
    iconBg: 'bg-teal-50 text-teal-600',
    accent: 'border-t-teal-500',
  },
];

export default function Services() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section id="servicos" className="py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">
              Nossos Serviços
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4">
            Climatizadores para{' '}
            <span className="bg-gradient-to-r from-secondary to-sky-400 bg-clip-text text-transparent">
              locação
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Soluções completas de climatização para diferentes necessidades, com
            equipamentos modernos e atendimento especializado.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`reveal delay-${(i + 1) * 150} ${visible ? 'visible' : ''} group bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_50px_rgba(2,59,113,0.15)] transition-all overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col`}
            >
              {/* Linha gradiente no topo */}
              <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Ícone */}
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-black text-primary mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Lista de features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span
                        className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                      >
                        <svg viewBox="0 0 10 10" width="7" height="7" fill="none">
                          <polyline
                            points="1.5,5 4,7.5 8.5,2"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Botão */}
                <a
                  href={service.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${service.gradient} text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90 hover:gap-3 text-sm shadow-md group/btn`}
                >
                  Solicitar este Serviço
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

