import { CheckCircle2, Shield, Clock, Users } from 'lucide-react';
import eventoImg from '../assets/WhatsApp Image 2026-05-07 at 4.12.35 PM - Editado (1).jpg';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';

const FEATURES = [
  'Equipamentos revisados e higienizados antes de cada locação',
  'Técnicos certificados e uniformizados',
  'Entrega e instalação profissional incluída',
  'Suporte técnico durante todo o período da locação',
  'Orçamento gratuito e sem compromisso',
];

const STATS = [
  { icon: <Users size={22} />, value: 100, suffix: '+', label: 'Clientes atendidos', bg: 'bg-blue-50', color: 'text-primary' },
  { icon: <Shield size={22} />, value: 4, suffix: '+', label: 'Anos no mercado', bg: 'bg-teal-50', color: 'text-teal-600' },
  { icon: <CheckCircle2 size={22} />, value: 100, suffix: '+', label: 'Eventos realizados', bg: 'bg-purple-50', color: 'text-purple-600' },
  { icon: <Clock size={22} />, value: 24, suffix: 'h', label: 'Suporte disponível', bg: 'bg-orange-50', color: 'text-orange-500' },
];

function StatCard({ stat, start }: { stat: typeof STATS[0]; start: boolean }) {
  const count = useCountUp(stat.value, 1600, start);
  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default">
      <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
        {stat.icon}
      </div>
      <div className="text-2xl font-black text-primary mb-1">{count}{stat.suffix}</div>
      <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal();
  const { ref: statsRef, visible: statsVisible } = useReveal(0.2);

  return (
    <section id="sobre" className="py-28 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label da seção */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary" />
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">
            Quem Somos
          </span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center`}>

          {/* Esquerda: Texto */}
          <div className={`reveal-left ${sectionVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
              A empresa que cuida do{' '}
              <span className="bg-gradient-to-r from-secondary to-sky-400 bg-clip-text text-transparent">
                conforto
              </span>{' '}
              do seu evento
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Desde nossa fundação, a{' '}
              <strong className="text-primary">JM Locações</strong> tem como missão oferecer
              soluções de climatização de alta qualidade, com atendimento personalizado e preços
              justos para todos os tipos de eventos e empresas.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Nossa frota moderna de climatizadores industriais garante eficiência máxima mesmo
              em ambientes abertos e de grande capacidade. Atendemos toda a Grande São Paulo e
              região do litoral sul.
            </p>

            {/* Lista de features */}
            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 12 12" width="8" height="8" fill="none">
                      <polyline
                        points="2,6 5,9 10,3"
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

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-200 text-sm"
            >
              Conheça nossos serviços
              <svg viewBox="0 0 20 20" width="16" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Direita: Imagem */}
          <div className={`relative reveal-right ${sectionVisible ? 'visible' : ''}`}>
            {/* Forma decorativa atrás */}
            <div className="hidden sm:block absolute -top-8 -right-8 w-64 lg:w-80 h-64 lg:h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-[2.5rem] rotate-6" />

            <div className="relative z-10">
              <img
                src={eventoImg}
                alt="Climatizador JM Locações em evento"
                className="w-full rounded-3xl shadow-2xl shadow-primary/15 object-cover aspect-[4/3]"
              />

              {/* Badge inferior esquerdo */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl shadow-black/10 p-3 sm:p-4 items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="font-black text-primary text-xs sm:text-sm">Empresa Verificada</div>
                  <div className="text-gray-400 text-xs">+4 anos no mercado</div>
                </div>
              </div>

              {/* Badge superior direito */}
              <div className="hidden sm:block absolute -top-5 -right-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg px-4 sm:px-5 py-3 sm:py-4 text-white text-center">
                <div className="text-2xl sm:text-3xl font-black leading-none">4+</div>
                <div className="text-[10px] opacity-80 mt-1 uppercase tracking-wide">
                  Anos de<br />experiência
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de stats */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal delay-${(i + 1) * 100} ${statsVisible ? 'visible' : ''}`}>
              <StatCard stat={s} start={statsVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

