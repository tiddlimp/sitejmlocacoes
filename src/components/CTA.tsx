import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const WA_LINK = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0AVim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20climatizadores.%0A%0APoderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20valores%20e%20modelos%20dispon%C3%ADveis%3F';

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#011e3c] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7ec8e3 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Linhas decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-[500px] opacity-5" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="200" cy="200" r="90" stroke="#0ea5e9" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/25 text-secondary text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          Resposta em até 1 hora
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
          Precisa de climatização
          <br />
          para seu{' '}
          <span className="bg-gradient-to-r from-secondary to-sky-300 bg-clip-text text-transparent">
            próximo evento
          </span>
          ?
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Não deixe o calor arruinar sua festa, evento ou produtividade.
          Entre em contato agora e receba um orçamento personalizado em minutos.
          Atendemos toda a região!
        </p>

        {/* Garantias */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-gray-400">
          {[
            'Orçamento sem compromisso',
            'Entrega garantida no prazo',
            'Equipamentos certificados',
          ].map((g) => (
            <span key={g} className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-secondary" />
              {g}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black px-6 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg shadow-2xl shadow-green-500/30 transition-all duration-200 hover:scale-105 hover:shadow-green-500/50"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento Agora
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg backdrop-blur-sm transition-all duration-200 group"
          >
            Ver nossos serviços
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

