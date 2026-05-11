import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import mascotinho from '../assets/mascotinho JM.png';

const WA_LINK = 'https://wa.me/5513974125867?text=Ol%C3%A1!%0AVim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20climatizadores.%0A%0APoderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20valores%20e%20modelos%20dispon%C3%ADveis%3F';

export default function WhatsAppFloat() {
  const [ctaReady, setCtaReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCtaReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-0 right-4 sm:right-8 z-50 flex flex-col items-end">

      {/* Mascotinho + balão */}
      <div className="flex flex-col items-center mb-2">

        {/* Balão de fala (acima do mascotinho) */}
        <div className="relative mb-2 animate-bounce-slow">
          <div
            className="bg-white rounded-3xl px-5 py-4 shadow-2xl border border-gray-100"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
          >
            <p className="text-primary font-black text-base whitespace-nowrap leading-tight">
              Fale comigo! 👋
            </p>
            <p className="text-gray-400 text-xs whitespace-nowrap leading-tight mt-1">
              Orçamento grátis agora
            </p>
          </div>
          {/* Rabinho apontando para baixo (em direção ao mascotinho) */}
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-4 bg-white"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              filter: 'drop-shadow(0 3px 2px rgba(0,0,0,0.07))',
            }}
          />
        </div>

        {/* Mascotinho */}
        <img
          src={mascotinho}
          alt="Mascote JM Locações"
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-2xl select-none"
          draggable={false}
          style={{ animation: 'mascotFloat 3s ease-in-out infinite' }}
        />
      </div>

      {/* Botão WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`mb-5 flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-black pl-5 pr-6 py-4 rounded-full shadow-2xl shadow-green-500/50 hover:scale-105 hover:shadow-green-500/70 whatsapp-pulse text-base transition-all duration-700 ${
          ctaReady ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
        }`}
      >
        <MessageCircle size={22} strokeWidth={2.5} />
        Fale conosco
      </a>

    </div>
  );
}
