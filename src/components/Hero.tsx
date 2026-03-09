import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onStartClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  // Número para o botão direto do WhatsApp
  const WHATSAPP_NUMBER = "5515998623100";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Visitei seu site e gostaria de verificar disponibilidade para agendamento.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-10 px-6 min-h-[75vh] bg-gradient-to-b from-sage-100 to-sage-50 rounded-b-[3rem] shadow-sm">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        {/* Decorative background element */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-10 w-40 h-40 bg-sage-400 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 max-w-lg mx-auto flex flex-col items-center w-full">

        {/* Foto de Perfil */}
        <div className="mb-4 relative group cursor-pointer">
          <div className="w-32 h-32 rounded-full bg-sage-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Foto de Perfil"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border border-sage-300 scale-110 opacity-50"></div>
        </div>

        {/* Nome e Especialidade */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-sage-900 font-bold tracking-tight">
            Fernanda Oliveira
          </h2>
          <span className="mt-2 px-3 py-1 bg-white/60 text-sage-600 text-[11px] uppercase tracking-widest font-semibold rounded-full border border-sage-200">
            Psicóloga Clínica &bull; CRP 00/00000
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-[2.5rem] md:text-5xl font-serif text-sage-900 leading-[1.15] mb-4">
          Um espaço seguro para o seu <span className="italic text-sage-600">florescer</span>
        </h1>

        <div className="w-full max-w-[280px] space-y-3 flex flex-col items-center mb-4">

          {/* CTA 1: WhatsApp (Prioritário) */}
          <Button
            onClick={handleWhatsAppClick}
            fullWidth
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-100 border-none h-12"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Agendar Consulta</span>
          </Button>

          {/* CTA 2: Triagem (Secundário) */}
          <Button
            onClick={onStartClick}
            fullWidth
            variant="outline"
            className="flex items-center justify-center gap-2 border-sage-300 text-sage-700 hover:bg-sage-100 h-12"
          >
            <span className="font-medium">Passar por Triagem</span>
            <ArrowDown className="w-4 h-4 text-sage-500" />
          </Button>

        </div>
      </div>
    </section>
  );
};