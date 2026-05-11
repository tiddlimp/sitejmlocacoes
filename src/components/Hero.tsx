import { useEffect, useRef, useState, useCallback } from 'react';
import { MessageCircle, ArrowRight, Star, Zap, CheckCircle2 } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

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
const INTERVAL_MS = 4000;

const HERO_IMGS = [
  { src: evIndustrial,      label: 'Industrial',          sub: 'Alta capacidade industrial' },
  { src: ev50k,             label: '50.000 BTU',          sub: 'Para grandes eventos' },
  { src: ev30k,             label: '30.000 BTU',          sub: 'Médio porte' },
  { src: ev22k,             label: '22.000 BTU',          sub: 'Salas e galpões' },
  { src: ev20k,             label: '20.000 BTU',          sub: 'Uso comercial' },
  { src: evaporativo,       label: 'Evaporativo',         sub: 'Econômico e eficiente' },
  { src: miniPlast,         label: 'Mini Plast',          sub: 'Compacto e portátil' },
  { src: torrePlast,        label: 'Torre Plast',         sub: 'Torre vertical' },
  { src: newPowerAspersivo, label: 'New Power Aspersivo', sub: 'Nova geração aspersiva' },
  { src: aspersivoPrime,    label: 'Aspersivo Prime',     sub: 'Alcance e eficiência' },
  { src: plus,              label: 'Plus',                sub: 'Alta performance premium' },
  { src: apzinhaplast,      label: 'Apzinha Plast',       sub: 'Compacto e prático' },
  { src: bebedouro,         label: 'Bebedouro',           sub: 'Hidratação para eventos' },
];

const AVATARS = ['12', '47', '33', '55', '24'];

function StatCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(target, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-2xl lg:text-3xl font-black text-secondary mb-1">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setVisible(false);
    setTimeout(() => { setActiveImg(i); setVisible(true); }, 300);
  }, []);

  const resetCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveImg(prev => (prev + 1) % HERO_IMGS.length);
        setVisible(true);
      }, 300);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    resetCycle();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetCycle]);

  const handleSelect = (i: number) => {
    if (i === activeImg) return;
    goTo(i);
    resetCycle();
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = parallaxRef.current;
      if (!el) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 9;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#011e3c] overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.055]" style={{
        backgroundImage: 'radial-gradient(circle, #7ec8e3 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Blobs de luz */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none"
        style={{ background: 'rgba(14,165,233,0.18)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: 'rgba(2,59,113,0.5)' }} />

      {/* Linha topo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60" />

      {/* ── Grid principal ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

        {/* ── Coluna de texto ── */}
        <div className="animate-fade-in-up">
          {/* Badge status */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
            </span>
            Atendimento imediato disponível
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-white leading-[1.08] mb-5 tracking-tight">
            Locação de{' '}
            <span className="bg-gradient-to-r from-secondary to-sky-300 bg-clip-text text-transparent">
              Climatizadores
            </span>
            <br />
            para Eventos e Empresas
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-md">
            Equipamentos industriais com entrega rápida, instalação profissional
            e suporte técnico. Seu evento sempre na temperatura ideal.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg shadow-green-500/25 transition-all duration-200 hover:scale-[1.03]"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl text-sm backdrop-blur-sm transition-all duration-200 group"
            >
              Nossos Serviços
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Prova social */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((n) => (
                <img key={n} src={`https://i.pravatar.cc/36?img=${n}`} alt=""
                  className="w-8 h-8 rounded-full ring-2 ring-[#011e3c] object-cover" />
              ))}
            </div>
            <div className="w-px h-7 bg-white/10" />
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map((i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-gray-500 text-[11px] font-medium">+100 clientes satisfeitos</p>
            </div>
          </div>
        </div>

        {/* ── Coluna visual ── */}
        <div className="hidden lg:flex flex-col justify-center items-center gap-8 relative">

          {/* Glow ambiente */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 68%)', filter: 'blur(24px)' }}
          />

          {/* Badge esquerda */}
          <div
            className="absolute left-2 top-16 flex items-center gap-3 px-4 py-3 rounded-2xl z-10"
            style={{
              background: 'rgba(2, 18, 38, 0.88)',
              border: '1px solid rgba(14,165,233,0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              animation: 'float 5s ease-in-out infinite 0.6s',
            }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(14,165,233,0.15)' }}>
              <Zap size={15} className="text-secondary" />
            </div>
            <div>
              <div className="text-[15px] font-black text-white leading-none">100+</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Eventos</div>
            </div>
          </div>

          {/* Badge direita */}
          <div
            className="absolute right-2 bottom-28 flex items-center gap-3 px-4 py-3 rounded-2xl z-10"
            style={{
              background: 'rgba(2, 18, 38, 0.88)',
              border: '1px solid rgba(34,197,94,0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              animation: 'float 5s ease-in-out infinite 1.4s',
            }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(34,197,94,0.15)' }}>
              <CheckCircle2 size={15} className="text-green-400" />
            </div>
            <div>
              <div className="text-[15px] font-black text-white leading-none">98%</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Satisfação</div>
            </div>
          </div>

          {/* Produto flutuante */}
          <div
            ref={parallaxRef}
            className="transition-transform duration-100 ease-out flex flex-col items-center gap-5"
            style={{ animation: 'float 7s ease-in-out infinite' }}
          >
            {/* Sombra na base */}
            <div
              className="absolute bottom-24 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full pointer-events-none"
              style={{ background: 'rgba(14,165,233,0.22)', filter: 'blur(24px)' }}
            />

            {/* Imagem */}
            <img
              src={HERO_IMGS[activeImg].src}
              alt={`Climatizador ${HERO_IMGS[activeImg].label} — JM Locações`}
              className="w-[280px] h-[280px] object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 24px 56px rgba(14,165,233,0.42)) drop-shadow(0 6px 16px rgba(0,0,0,0.55))',
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(14px)',
                transition: 'opacity 0.32s cubic-bezier(.4,0,.2,1), transform 0.32s cubic-bezier(.4,0,.2,1)',
              }}
            />

            {/* Nome e descrição */}
            <div
              className="text-center"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.32s' }}
            >
              <div className="text-white font-bold text-base tracking-tight">
                {HERO_IMGS[activeImg].label}
              </div>
              <div className="text-gray-500 text-sm mt-0.5">
                {HERO_IMGS[activeImg].sub}
              </div>
            </div>

            {/* Barra de progresso + contador */}
            <div className="flex items-center gap-3 w-52">
              <div className="flex-1 h-[2px] rounded-full overflow-hidden bg-white/[0.08]">
                <div
                  key={`bar-${activeImg}`}
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #0ea5e9, #7dd3fc)',
                    animation: `fillBar ${INTERVAL_MS}ms linear forwards`,
                  }}
                />
              </div>
              <span className="text-[11px] text-gray-600 font-mono shrink-0">
                <span className="text-secondary font-bold">{String(activeImg + 1).padStart(2, '0')}</span>
                <span className="text-gray-700">/{String(HERO_IMGS.length).padStart(2, '0')}</span>
              </span>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-1.5">
              {HERO_IMGS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  aria-label={HERO_IMGS[i].label}
                  className="transition-all duration-300 rounded-full cursor-pointer"
                  style={{
                    width: i === activeImg ? '18px' : '5px',
                    height: '5px',
                    background: i === activeImg ? '#0ea5e9' : 'rgba(255,255,255,0.18)',
                    border: 'none',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
        {/* fim coluna visual */}

      </div>
      {/* fim grid */}

      {/* ── Stats ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-6">
        <div className="grid grid-cols-3 divide-x divide-white/[0.07] bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="text-center py-5 px-4">
            <StatCounter target={4} suffix="+" />
            <div className="text-xs text-gray-500">Anos de experiência</div>
          </div>
          <div className="text-center py-5 px-4">
            <StatCounter target={50} suffix="+" />
            <div className="text-xs text-gray-500">Equipamentos na frota</div>
          </div>
          <div className="text-center py-5 px-4">
            <div className="text-2xl lg:text-3xl font-black text-secondary mb-1">24h</div>
            <div className="text-xs text-gray-500">Suporte técnico</div>
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div
        className="relative w-full overflow-hidden pb-14"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex animate-ticker" style={{ width: 'max-content' }}>
          {[...HERO_IMGS, ...HERO_IMGS, ...HERO_IMGS].map(({ src, label }, i) => (
            <div
              key={i}
              className="shrink-0 w-32 h-32 mr-4 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <img
                src={src}
                alt={label}
                className="w-20 h-20 object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                style={{ filter: 'drop-shadow(0 4px 10px rgba(14,165,233,0.2))' }}
                loading="lazy"
              />
              <span className="text-[9px] text-white/30 font-medium group-hover:text-secondary/70 transition-colors duration-300 tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divisor */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-16">
          <path d="M0,60 L1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
