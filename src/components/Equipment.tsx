import { useState, type ReactNode } from 'react';
import { MessageCircle, Wind, ChevronRight, Droplets, LayoutGrid, CloudDrizzle, GlassWater, Fan } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

import evIndustrial from '../assets/EV. INDUSTRIAL.png';
import ev20k from '../assets/EV. 20K.png';
import ev22k from '../assets/EV. 22K.png';
import ev30k from '../assets/EV. 30K.png';
import ev50k from '../assets/EV.50K.png';
import evaporativo from '../assets/EVAPORATIVO.png';
import miniPlast from '../assets/MINI PLAST.png';
import torrePlast from '../assets/TORRE PLAST.png';
import apzinhaplast from '../assets/apzinzaplast.png';
import aspersivoPrime from '../assets/aspersivoprime.png';
import bebedouro from '../assets/bebedouro.png';
import newPowerAspersivo from '../assets/newpoweraspersivo.png';
import plus from '../assets/PLUS (1).png';

const WA_LINK = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0AVim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20climatizadores.%0A%0APoderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20valores%20e%20modelos%20dispon%C3%ADveis%3F';

type Category = 'Evaporativo' | 'Aspersivo' | 'Bebedouro';

interface Product {
  name: string;
  capacity: string;
  capacityLabel?: string;
  img: string;
  price: string;
  desc: string;
  accentColor: string;
  featured?: boolean;
  isBebedouro?: boolean;
  category: Category;
}

const PRODUCTS: Product[] = [
  // ── EVAPORATIVOS ──
  {
    name: 'Torre Industrial',
    capacity: '50.000 m³/h',
    img: ev50k,
    price: 'R$ 2.100,00',
    desc: 'O gigante da climatização. Para arenas, hangares e grandes eventos com máxima potência.',
    accentColor: '#f97316',
    featured: true,
    category: 'Evaporativo',
  },
  {
    name: 'EV. Industrial 40',
    capacity: '40.000 m³/h',
    img: evIndustrial,
    price: 'R$ 1.800,00',
    desc: 'Climatizador industrial de alta vazão. Ideal para galpões, fábricas e eventos de grande porte.',
    accentColor: '#ef4444',
    category: 'Evaporativo',
  },
  {
    name: 'EV. Industrial 30',
    capacity: '30.000 m³/h',
    img: ev30k,
    price: 'R$ 1.800,00',
    desc: 'Potência robusta para médios e grandes espaços. Eficiência comprovada em eventos.',
    accentColor: '#0ea5e9',
    category: 'Evaporativo',
  },
  {
    name: 'EV. 30',
    capacity: '22.000 m³/h',
    img: ev22k,
    price: 'R$ 1.350,00',
    desc: 'Equilíbrio perfeito entre potência e custo. Ideal para tendas e eventos.',
    accentColor: '#14b8a6',
    category: 'Evaporativo',
  },
  {
    name: 'Evaporativo de 20',
    capacity: '20.000 m³/h',
    img: ev20k,
    price: 'Sob consulta',
    desc: 'Excelente para eventos corporativos, feiras e espaços de médio porte.',
    accentColor: '#22c55e',
    category: 'Evaporativo',
  },
  {
    name: 'Evaporativo Plast',
    capacity: '18.000 m³/h',
    img: evaporativo,
    price: 'R$ 1.250,00',
    desc: 'Modelo plástico resistente com boa vazão. Excelente custo-benefício para eventos.',
    accentColor: '#a855f7',
    category: 'Evaporativo',
  },
  {
    name: 'Torre Plast',
    capacity: '17.000 m³/h',
    img: torrePlast,
    price: 'R$ 1.150,00',
    desc: 'Design em torre com alta eficiência para ambientes comerciais e eventos.',
    accentColor: '#06b6d4',
    category: 'Evaporativo',
  },
  {
    name: 'EV. 18',
    capacity: '14.000 m³/h',
    img: miniPlast,
    price: 'R$ 1.150,00',
    desc: 'Prático e eficiente para ambientes de menor porte. Fácil transporte e instalação.',
    accentColor: '#38bdf8',
    category: 'Evaporativo',
  },
  // ── ASPERSIVOS ──
  {
    name: 'Aspersivo Plus',
    capacity: '18.000 m³/h',
    img: plus,
    price: 'R$ 750,00',
    desc: 'Aspersão de alta performance. Refresca amplos espaços abertos e semi-abertos.',
    accentColor: '#f59e0b',
    category: 'Aspersivo',
  },
  {
    name: 'New Power Aspersivo',
    capacity: '12.000 m³/h',
    img: newPowerAspersivo,
    price: 'R$ 650,00',
    desc: 'Tecnologia aspersiva de nova geração para eventos e espaços de médio porte.',
    accentColor: '#10b981',
    category: 'Aspersivo',
  },
  {
    name: 'AP. Cinza Plast',
    capacity: '12.000 m³/h',
    img: apzinhaplast,
    price: 'R$ 650,00',
    desc: 'Climatização por aspersão compacta. Ideal para tendas e ambientes semi-abertos.',
    accentColor: '#8b5cf6',
    category: 'Aspersivo',
  },
  {
    name: 'Aspersivo Prime',
    capacity: '5.500 m³/h',
    img: aspersivoPrime,
    price: 'R$ 650,00',
    desc: 'Climatização por aspersão com excelente alcance. Ideal para recepções e espaços menores.',
    accentColor: '#ec4899',
    category: 'Aspersivo',
  },
  // ── BEBEDOUROS ──
  {
    name: 'Blue Bebedouro',
    capacity: '100L',
    capacityLabel: 'Capacidade',
    img: bebedouro,
    price: 'R$ 400,00',
    desc: 'Bebedouro industrial para eventos e empresas. Água gelada e natural para manter todos hidratados.',
    accentColor: '#06b6d4',
    isBebedouro: true,
    category: 'Bebedouro',
  },
  {
    name: 'Frisbel Bebedouro',
    capacity: '100L',
    capacityLabel: 'Capacidade',
    img: bebedouro,
    price: 'R$ 400,00',
    desc: 'Bebedouro industrial em aço inox. Resistente e higiênico para grandes eventos.',
    accentColor: '#3b82f6',
    isBebedouro: true,
    category: 'Bebedouro',
  },
];

const CATEGORY_OPTIONS: { id: 'Todos' | Category; label: string; icon: ReactNode }[] = [
  {
    id: 'Todos',
    label: 'Todos',
    icon: <LayoutGrid size={15} />,
  },
  {
    id: 'Evaporativo',
    label: 'Evaporativos',
    icon: <Fan size={18} />,
  },
  {
    id: 'Aspersivo',
    label: 'Aspersivos',
    icon: <CloudDrizzle size={15} />,
  },
  {
    id: 'Bebedouro',
    label: 'Bebedouros',
    icon: <GlassWater size={18} />,
  },
];

export default function Equipment() {
  const { ref, visible } = useReveal(0.03);
  const [activeCategory, setActiveCategory] = useState<'Todos' | Category>('Todos');

  const filtered = activeCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const countFor = (id: 'Todos' | Category) =>
    id === 'Todos' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === id).length;

  return (
    <section id="equipamentos" className="py-28 bg-[#020c1b] relative overflow-hidden">

      {/* ── background dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── top glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-primary/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.25em]">Vitrine de Produtos</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Nossa{' '}
            <span className="bg-gradient-to-r from-secondary via-sky-300 to-secondary bg-clip-text text-transparent">
              frota completa
            </span>
            {' '}de climatizadores
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Equipamentos revisados, higienizados e prontos para o seu evento.
            Encontre o modelo ideal para cada espaço.
          </p>
        </div>

        {/* ── Mobile filter bar ── */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                  : 'bg-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.10] border border-white/[0.08]'
              }`}
            >
              {cat.icon}
              {cat.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-white/[0.08] text-gray-500'
              }`}>
                {countFor(cat.id)}
              </span>
            </button>
          ))}
        </div>

        {/* ── Grid + Sidebar wrapper ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Product grid ── */}
          <div ref={ref} className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((product, i) => (
              <div
                key={product.name}
                className={`reveal delay-${((i % 4) + 1) * 100} ${visible ? 'visible' : ''} group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3`}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${product.accentColor}44`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 50px ${product.accentColor}22, 0 4px 24px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                }}
              >
                {/* ── Image area ── */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden bg-white/[0.03]">

                  {/* Colored glow spotlight behind product */}
                  <div
                    className="absolute w-44 h-44 rounded-full blur-[55px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ background: product.accentColor }}
                  />
                  <div
                    className="absolute w-32 h-32 rounded-full blur-[30px] opacity-10"
                    style={{ background: product.accentColor }}
                  />

                  {/* Product image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="relative z-10 h-44 w-auto max-w-[90%] object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* ── Info area ── */}
                <div
                  className="p-5 flex flex-col flex-1"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <h3 className="text-base font-black text-white mb-1.5 leading-tight">{product.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{product.desc}</p>

                  {/* Spec pill */}
                  <div className="flex justify-center mb-5">
                    <div className="flex items-center gap-2 bg-white/[0.05] rounded-xl px-4 py-2.5 border border-white/[0.06]">
                      {product.isBebedouro
                        ? <Droplets size={13} className="text-secondary shrink-0" />
                        : <Wind size={13} className="text-secondary shrink-0" />}
                      <div>
                        <div className="text-[8px] text-gray-500 uppercase tracking-wider font-semibold">{product.capacityLabel ?? 'Vazão'}</div>
                        <div className="text-[12px] font-black text-secondary leading-none mt-0.5">{product.capacity}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-4 rounded-xl text-sm hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/20 group/btn"
                  >
                    <MessageCircle size={13} />
                    Solicitar Orçamento
                    <ChevronRight size={13} className="opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Filter sidebar (desktop only) ── */}
          <div className="hidden lg:block w-52 shrink-0 sticky top-24">
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                Filtrar por
              </p>
              <div className="flex flex-col gap-2">
                {CATEGORY_OPTIONS.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2.5 w-full px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                      activeCategory === cat.id
                        ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex-1 flex items-center gap-2.5">
                      {cat.icon}
                      {cat.label}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      activeCategory === cat.id
                        ? 'bg-white/20 text-white'
                        : 'bg-white/[0.06] text-gray-500'
                    }`}>
                      {countFor(cat.id)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom trust badges ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <div className="flex items-center gap-2.5 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Todos revisados e higienizados
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2.5 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            Entrega e instalação incluídas
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2.5 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            Suporte técnico 24h
          </div>
        </div>
      </div>
    </section>
  );
}
