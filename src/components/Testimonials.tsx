import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo Silva',
    role: 'Organizador de Eventos',
    company: 'CE Eventos & Produções',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: 5,
    text: 'Contratei a JM Locações para o casamento da minha filha e foi perfeito! Os climatizadores chegaram no horário combinado, a equipe instalou rapidamente e funcionaram sem nenhum problema durante toda a festa. Os convidados adoraram o conforto!',
    gradient: 'from-primary to-secondary',
  },
  {
    name: 'Márcia Fernandes',
    role: 'Gerente Administrativa',
    company: 'Indústria Metal Norte',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text: 'Nossa empresa tem um galpão de 1.200 m² e no verão o calor era insuportável para os funcionários. A JM Locações nos apresentou a solução ideal. A produtividade aumentou visivelmente e os colaboradores ficaram muito mais satisfeitos.',
    gradient: 'from-secondary to-teal-400',
  },
  {
    name: 'Roberto Almeida',
    role: 'Diretor Comercial',
    company: 'Feirão Automotivo SP',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: 5,
    text: 'Usamos os climatizadores da JM Locações em nossa feira anual com mais de 3.000 visitantes. O ambiente ficou agradável mesmo sob o sol forte. O atendimento foi excelente do início ao fim. Com certeza vamos fechar novamente para o próximo ano!',
    gradient: 'from-teal-500 to-primary',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal(0.05);
  return (
    <section className="py-28 bg-[#f0f9ff] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Depoimentos</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-secondary to-sky-400 bg-clip-text text-transparent">
              clientes
            </span>{' '}
            dizem
          </h2>
          <p className="text-gray-500 text-lg">
            A satisfação dos nossos clientes é o nosso maior diferencial.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i + 1) * 150} ${visible ? 'visible' : ''} group bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(2,59,113,0.12)] transition-all overflow-hidden flex flex-col hover:-translate-y-1`}
            >
              {/* Barra gradiente no topo */}
              <div className={`h-1.5 bg-gradient-to-r ${t.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Aspas */}
                <div className="text-secondary/15 mb-5">
                  <Quote size={44} />
                </div>

                {/* Estrelas */}
                <Stars count={t.rating} />

                {/* Texto */}
                <p className="text-gray-600 leading-relaxed text-sm mt-4 flex-1 italic">
                  “{t.text}”
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-secondary/20"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-primary text-sm truncate">{t.name}</div>
                    <div className="text-xs text-gray-400 truncate">{t.role}</div>
                    <div className="text-xs text-secondary font-semibold truncate">{t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linha de confiança */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Mais de{' '}
            <strong className="text-primary">100 clientes satisfeitos</strong> confiam na JM Locações
          </p>
        </div>
      </div>
    </section>
  );
}

