import React from 'react';
import { Puzzle, Heart, ClipboardList, ShieldCheck } from 'lucide-react';

const specialties = [
  {
    icon: Puzzle,
    title: "Terapia Cognitivo-Comportamental (TCC)",
    description: "Resgate sua autoestima e bem-estar na vida íntima."
  },
  {
    icon: Heart,
    title: "Terapia Sexual",
    description: "Resgate sua autoestima e bem-estar na vida íntima."
  },
  {
    icon: ClipboardList,
    title: "Protocolos de Atendimento Personalizados",
    description: "Plano exclusivo adaptado às suas metas e ao seu ritmo."
  },
  {
    icon: ShieldCheck,
    title: "Ambiente de Sigilo e Acolhimento Ético",
    description: "Espaço seguro e livre de julgamentos."
  },
];

export const Specialties: React.FC = () => {
  return (
    <section className="py-8 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-serif text-brand-800 text-center mb-6">
        Metodologias & Diferenciais
      </h2>

      <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-5 p-5 bg-white border border-brand-100/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-4 bg-brand-50 rounded-2xl shrink-0 group-hover:bg-brand-100 transition-colors duration-300">
              <item.icon className="w-6 h-6 text-brand-600 group-hover:text-brand-700" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-sans text-[16px] font-bold text-stone-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-stone-500 text-[14px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};