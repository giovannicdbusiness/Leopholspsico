import React from 'react';
import { Brain, Puzzle, Sparkles, Heart } from 'lucide-react';

const specialties = [
  { icon: Brain, title: "PSICANÁLISE" },
  { icon: Puzzle, title: "TERAPIA COGNITIVO-COMPORTAMENTAL (TCC)" },
  { icon: Sparkles, title: "TERAPIA POSITIVA" },
  { icon: Heart, title: "TERAPIA HUMANISTA" },
];

export const Specialties: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-serif text-sage-800 text-center mb-8">
        Minha Metodologia
      </h2>

      <div className="flex flex-col gap-4">
        {specialties.map((item, index) => (
          <div key={index} className="flex items-center gap-5 p-5 bg-white border border-sage-100/60 rounded-2xl shadow-sm">
            <div className="p-3 bg-sage-50 rounded-xl shrink-0">
              <item.icon className="w-6 h-6 text-sage-600" strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-[15px] font-bold text-stone-800 tracking-wide">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};