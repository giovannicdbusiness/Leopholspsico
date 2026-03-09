import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onStartClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  // Número para o botão direto do WhatsApp
  const WHATSAPP_NUMBER = "5515996153318";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Visitei a sua Bio Premium e gostaria de verificar disponibilidade para agendamento.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-6 px-6 min-h-[75vh] bg-gradient-to-b from-brand-100 via-brand-50 to-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-300 rounded-full blur-[80px]"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-brand-400 rounded-full blur-[80px]"></div>
      </div>

      <div className="z-10 max-w-3xl mx-auto flex flex-col items-center w-full mt-4">

        {/* Foto de Perfil */}
        <div className="mb-6 relative group inline-block">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-brand-200 border-[6px] border-white/90 shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/profile leophols.png"
              alt="Leonardo Phols - Psicólogo"
              className="w-full h-full object-cover object-[center_20%] scale-[1.2]"
            />
          </div>
          {/* Decorative subtle ring */}
          <div className="absolute -inset-3 rounded-full border border-brand-200/50 scale-100 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-300 group-hover:rotate-12"></div>
        </div>

        {/* Nome e Especialidade */}
        <div className="flex flex-col items-center mb-8 w-full animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-900 font-bold tracking-tight mb-4">
            Leonardo Phols
          </h2>
          <span className="px-5 py-2 bg-white/80 text-brand-700 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-full border border-brand-200/60 shadow-sm backdrop-blur-sm">
            Psicólogo &bull; CRP 06/212575
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] font-serif text-brand-800 leading-relaxed max-w-2xl px-4 mb-10 font-medium animate-fade-in">
          Transformando pensamentos, fortalecendo a <span className="italic text-brand-700 font-semibold relative">intimidade</span>
        </h1>

        <div className="w-full max-w-[320px] space-y-4 flex flex-col items-center animate-fade-in">

          {/* CTA 1: WhatsApp (Prioritário) */}
          <Button
            onClick={handleWhatsAppClick}
            fullWidth
            className="flex items-center justify-center gap-2 shadow-xl shadow-brand-600/20 border-none h-14 text-lg"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="font-semibold text-white">Agendar Sessão</span>
          </Button>

          {/* CTA 2: Triagem (Secundário) */}
          <Button
            onClick={onStartClick}
            fullWidth
            variant="outline"
            className="flex items-center justify-center gap-2 h-14 text-base backdrop-blur-sm transition-colors bg-white/50"
          >
            <span className="font-semibold text-brand-700">Passar por Triagem</span>
            <ArrowDown className="w-4 h-4 text-brand-700" />
          </Button>

        </div>
      </div>
    </section>
  );
};