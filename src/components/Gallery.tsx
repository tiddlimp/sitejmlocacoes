import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3, LayoutGrid } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

import foto18cabine from '../assets/18 em cabine evento.jpeg';
import foto17teatro from '../assets/climatzador de 17 em canto no teatro municipal raul cortez.jpeg';
import fotoInoxVerao from '../assets/climatzador de inox no estação verao.jpeg';
import fotoMugo from '../assets/imagem mugo evento climatizador verde.png';
import fotoEvento from '../assets/WhatsApp Image 2026-05-07 at 4.12.35 PM - Editado (1).jpg';

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: string;
  description?: string;
  span?: 'wide' | 'tall' | 'featured';
};

const GALLERY: GalleryItem[] = [
  {
    src: foto18cabine,
    alt: 'Climatizador 18K em cabine de evento',
    label: 'Climatizador 18K — Evento',
    category: 'Eventos',
    description: 'Climatizador evaporativo de 18.000 m³/h instalado em cabine de evento.',
    span: 'featured',
  },
  {
    src: foto17teatro,
    alt: 'Climatizador 17K no Teatro Municipal Raul Cortez',
    label: 'Teatro Municipal Raul Cortez',
    category: 'Empresas',
    description: 'Climatizador Torre Plast de 17.000 m³/h garantindo conforto no Teatro Municipal.',
    span: 'tall',
  },
  {
    src: fotoInoxVerao,
    alt: 'Climatizador inox no evento Estação Verão',
    label: 'Estação Verão',
    category: 'Eventos',
    description: 'Climatizador industrial inox em ação no evento Estação Verão.',
  },
  {
    src: fotoMugo,
    alt: 'Climatizador verde em evento',
    label: 'Climatizador em Evento',
    category: 'Eventos',
    description: 'Equipamento evaporativo garantindo climatização em ambiente de evento.',
    span: 'wide',
  },
  {
    src: fotoEvento,
    alt: 'Climatizador JM Locações em evento',
    label: 'JM Locações em Ação',
    category: 'Eventos',
    description: 'Climatizador JM Locações operando em evento com excelente desempenho.',
  },
];

const CATEGORIES = ['Todos', 'Eventos', 'Empresas'];

const CATEGORY_COLORS: Record<string, string> = {
  Eventos: 'from-orange-500 to-rose-500',
  Empresas: 'from-teal-500 to-emerald-500',
};

export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [layout, setLayout] = useState<'masonry' | 'grid'>('masonry');
  const { ref, visible } = useReveal(0.05);

  const filtered = filter === 'Todos' ? GALLERY : GALLERY.filter(g => g.category === filter);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() =>
    setLightboxIdx(i => (i == null ? 0 : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]);
  const next = useCallback(() =>
    setLightboxIdx(i => (i == null ? 0 : (i + 1) % filtered.length)),
    [filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx, next, prev, closeLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  const getSpanClass = (item: GalleryItem) => {
    if (layout === 'grid') return '';
    if (filter !== 'Todos') return '';
    if (item.span === 'featured') return 'col-span-2 row-span-2';
    if (item.span === 'tall') return 'row-span-2';
    if (item.span === 'wide') return 'col-span-2';
    return '';
  };

  return (
    <section id="galeria" className="py-28 bg-[#020c1b] relative overflow-hidden">

      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.25em]">
                Portfólio
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Nossos equipamentos{' '}
              <span className="bg-gradient-to-r from-secondary via-sky-300 to-secondary bg-clip-text text-transparent">
                em ação
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Veja como nossos climatizadores transformam qualquer espaço — de grandes eventos a ambientes corporativos.
            </p>
          </div>

          {/* Controles: filtros + layout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* Filtros */}
            <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-1.5">
              {CATEGORIES.map(cat => {
                const count = cat === 'Todos' ? GALLERY.length : GALLERY.filter(g => g.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      filter === cat
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-secondary/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 text-[10px] font-black ${filter === cat ? 'text-white/70' : 'text-gray-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Toggle de layout */}
            <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-xl p-1">
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${layout === 'masonry' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                title="Layout mosaico"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${layout === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                title="Layout grade"
              >
                <Grid3x3 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          ref={ref}
          className={`grid gap-3 ${
            layout === 'masonry'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[220px]'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[240px]'
          }`}
        >
          {filtered.map((item, i) => (
            <button
              key={item.src + filter + layout}
              onClick={() => setLightboxIdx(i)}
              aria-label={`Ver foto: ${item.label}`}
              className={`reveal delay-${Math.min((i + 1) * 100, 500)} ${visible ? 'visible' : ''} ${getSpanClass(item)} group relative overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary`}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* Imagem */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                loading="lazy"
              />

              {/* Overlay escuro base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011e3c]/80 via-[#011e3c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag de categoria */}
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${CATEGORY_COLORS[item.category] ?? 'from-gray-500 to-gray-600'} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg`}>
                  <span className="w-1 h-1 rounded-full bg-white/70" />
                  {item.category}
                </span>
              </div>

              {/* Ícone zoom */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={15} className="text-white" />
              </div>

              {/* Info no rodapé */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-bold text-white text-sm drop-shadow-lg mb-1 leading-tight">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-white/50 text-[11px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </div>
                )}
              </div>

              {/* Borda brilhante no hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(14,165,233,0.35)' }}
              />
            </button>
          ))}
        </div>

        {/* ── Barra inferior ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {[
              { value: `${filtered.length}`, label: 'fotos nesta seleção' },
              { value: `${GALLERY.length}`, label: 'total no portfólio' },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-secondary font-black text-lg">{s.value}</span>
                <span className="text-gray-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className={`transition-all duration-200 cursor-pointer rounded-full ${
                  lightboxIdx === i
                    ? 'w-6 h-1.5 bg-secondary'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(2, 8, 20, 0.97)', backdropFilter: 'blur(20px)' }}
          onClick={closeLightbox}
        >
          {/* Barra superior */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 py-5"
            style={{ background: 'linear-gradient(to bottom, rgba(2,8,20,0.9) 0%, transparent 100%)' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                <ZoomIn size={14} className="text-secondary" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">
                  {filtered[lightboxIdx].label}
                </div>
                <div className="text-gray-500 text-xs">{filtered[lightboxIdx].category}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm font-mono hidden sm:inline">
                <span className="text-white font-bold">{String(lightboxIdx + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                {String(filtered.length).padStart(2, '0')}
              </span>
              <button
                onClick={closeLightbox}
                aria-label="Fechar"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Navegação anterior */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Navegação próximo */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Próxima foto"
            className="absolute right-3 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Imagem central */}
          <div
            className="flex flex-col items-center gap-6 px-16 sm:px-24 max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full">
              <img
                key={lightboxIdx}
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
                style={{
                  animation: 'fadeIn 0.25s ease-out',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.6)',
                }}
              />
              {/* Tag categoria na imagem */}
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${CATEGORY_COLORS[filtered[lightboxIdx].category] ?? 'from-gray-500 to-gray-600'} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xl`}>
                  {filtered[lightboxIdx].category}
                </span>
              </div>
            </div>

            {/* Descrição + miniaturas */}
            <div className="flex items-center justify-between w-full gap-4">
              <div className="flex-1 min-w-0">
                {filtered[lightboxIdx].description && (
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {filtered[lightboxIdx].description}
                  </p>
                )}
              </div>
              {/* Dots indicadores */}
              <div className="flex items-center gap-1.5 shrink-0">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIdx(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === lightboxIdx
                        ? 'w-5 h-1.5 bg-secondary'
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dica teclado */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 text-white/20 text-xs">
            <span className="flex items-center gap-1.5">
              <kbd className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[10px]">←</kbd>
              <kbd className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[10px]">→</kbd>
              navegar
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <kbd className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[10px]">Esc</kbd>
              fechar
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
