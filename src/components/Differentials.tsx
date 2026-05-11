import { Truck, Cpu, Headphones, BadgeDollarSign } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const ITEMS = [
  {
    icon: <Truck size={28} />,
    title: 'Entrega Rápida',
    description:
      'Logística ágil para garantir que os equipamentos cheguem no prazo certo, sem atrasos para o seu evento ou empresa.',
    bg: 'bg-blue-500/10',
    color: 'text-secondary',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Equipamentos Modernos',
    description:
      'Climatizadores de última geração, com alta eficiência energética, baixo ruído e desempenho superior.',
    bg: 'bg-teal-500/10',
    color: 'text-teal-400',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Suporte Técnico',
    description:
      'Equipe especializada disponível durante todo o período da locação para resolver qualquer problema imediatamente.',
    bg: 'bg-purple-500/10',
    color: 'text-purple-400',
  },
  {
    icon: <BadgeDollarSign size={28} />,
    title: 'Melhor Custo-Benefício',
    description:
      'Preços competitivos, pacotes flexíveis e condições especiais para eventos maiores ou contratos de longo prazo.',
    bg: 'bg-green-500/10',
    color: 'text-green-400',
  },
];

export default function Differentials() {
  const { ref, visible } = useReveal(0.05);
  return (
    <section className="py-28 bg-[#011e3c] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7ec8e3 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-secondary/50" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">
              Por que nos escolher
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-secondary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Nossos{' '}
            <span className="bg-gradient-to-r from-secondary to-sky-300 bg-clip-text text-transparent">
              Diferenciais
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Mais do que equipamentos, oferecemos uma experiência completa de climatização
            com qualidade e segurança.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${(i + 1) * 150} ${visible ? 'visible' : ''} group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-secondary/30 rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(14,165,233,0.1)]`}
            >
              <div
                className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Barra de números */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-white/10 pt-14">
          {[
            { value: '100+', label: 'Eventos realizados' },
            { value: '98%', label: 'Taxa de satisfação' },
            { value: '50+', label: 'Equipamentos na frota' },
            { value: '24h', label: 'Suporte disponível' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-secondary mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

