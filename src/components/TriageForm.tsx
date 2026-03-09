import React, { useState, useRef } from 'react';
import { ArrowRight, Check, Send } from 'lucide-react';
import { Button } from './ui/Button';
import { TriageData, Step, REASONS, TIME_SLOTS } from '../types';

interface TriageFormProps {
  id?: string;
}

export const TriageForm: React.FC<TriageFormProps> = ({ id }) => {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<TriageData>({
    name: '',
    age: '',
    reason: '',
    previousTherapy: null,
    bestTime: TIME_SLOTS[0],
    urgency: 3
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Change this number to the psychologist's real WhatsApp number
  const WHATSAPP_NUMBER = "5515996153318";

  const handleNext = () => {
    if (step < 4) setStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleFinish = () => {
    const message = `Olá! Gostaria de agendar uma sessão. Seguem meus dados de triagem:
    
*Nome:* ${data.name}
*Idade:* ${data.age}
*Motivo:* ${data.reason}
*Já fez terapia:* ${data.previousTherapy}
*Melhor horário:* ${data.bestTime}
*Grau de Urgência:* ${data.urgency}/5`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const isStep1Valid = data.name.trim().length > 0 && data.age.length > 0;
  const isStep2Valid = data.reason.length > 0;
  const isStep3Valid = data.previousTherapy !== null;

  return (
    <section id={id} className="pt-8 pb-16 px-4 bg-white min-h-[500px]">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">

        {/* Header with Progress */}
        <div className="bg-brand-50 p-6 pb-8 border-b border-brand-100">
          <h2 className="text-2xl font-serif text-brand-900 text-center mb-2">Triagem Inteligente</h2>
          <p className="text-center text-brand-600 text-xs mb-4">Responda para agilizarmos seu atendimento</p>

          <div className="w-full bg-brand-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-brand-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <label className="block">
                <span className="text-brand-700 font-bold text-sm">Qual seu nome?</span>
                <input
                  type="text"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                  className="mt-1 block w-full px-4 py-3 bg-brand-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 rounded-xl transition-colors"
                  placeholder="Seu nome completo"
                />
              </label>

              <label className="block">
                <span className="text-brand-700 font-bold text-sm">Sua idade?</span>
                <input
                  type="number"
                  value={data.age}
                  onChange={e => setData({ ...data, age: e.target.value })}
                  className="mt-1 block w-full px-4 py-3 bg-brand-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 rounded-xl transition-colors"
                  placeholder="Ex: 30"
                />
              </label>

              <div className="pt-4">
                <Button fullWidth onClick={handleNext} disabled={!isStep1Valid}>
                  Próximo <ArrowRight className="inline w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <p className="text-brand-700 font-bold text-sm mb-2">Qual o motivo principal?</p>
              <div className="grid grid-cols-1 gap-2">
                {REASONS.map(reason => (
                  <button
                    key={reason}
                    onClick={() => setData({ ...data, reason })}
                    className={`p-3 rounded-xl text-left text-sm font-medium transition-all ${data.reason === reason
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                      }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex gap-3">
                <Button variant="outline" onClick={handleBack} className="px-6 text-brand-600 border-brand-300 hover:bg-brand-100">
                  Voltar
                </Button>
                <Button className="flex-1" onClick={handleNext} disabled={!isStep2Valid}>
                  Próximo <ArrowRight className="inline w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <p className="text-brand-700 font-bold text-sm text-center">Já fez terapia antes?</p>

              <div className="flex gap-4">
                <button
                  onClick={() => setData({ ...data, previousTherapy: 'Sim' })}
                  className={`flex-1 py-6 rounded-xl font-bold transition-all border-2 ${data.previousTherapy === 'Sim'
                    ? 'border-brand-600 bg-brand-50 text-brand-800'
                    : 'border-brand-100 text-brand-400 hover:border-brand-300'
                    }`}
                >
                  SIM
                </button>
                <button
                  onClick={() => setData({ ...data, previousTherapy: 'Não' })}
                  className={`flex-1 py-6 rounded-xl font-bold transition-all border-2 ${data.previousTherapy === 'Não'
                    ? 'border-brand-600 bg-brand-50 text-brand-800'
                    : 'border-brand-100 text-brand-400 hover:border-brand-300'
                    }`}
                >
                  NÃO
                </button>
              </div>

              <div className="pt-4 flex gap-3">
                <Button variant="outline" onClick={handleBack} className="px-6 text-brand-600 border-brand-300 hover:bg-brand-100">
                  Voltar
                </Button>
                <Button className="flex-1" onClick={handleNext} disabled={!isStep3Valid}>
                  Próximo <ArrowRight className="inline w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">

              <label className="block">
                <span className="text-brand-700 font-bold text-sm">Melhor horário para contato?</span>
                <select
                  value={data.bestTime}
                  onChange={e => setData({ ...data, bestTime: e.target.value })}
                  className="mt-1 block w-full px-4 py-3 bg-brand-50 border-r-8 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 rounded-xl"
                >
                  {TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </label>

              <div className="block">
                <span className="text-brand-700 font-bold text-sm flex justify-between">
                  <span>Grau de Urgência</span>
                  <span className="bg-brand-100 text-brand-800 px-2 py-0.5 rounded text-xs">{data.urgency}/5</span>
                </span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={data.urgency}
                  onChange={e => setData({ ...data, urgency: parseInt(e.target.value) })}
                  className="w-full mt-3 h-2 bg-brand-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-brand-400 mt-1">
                  <span>Tranquilo</span>
                  <span>Muito Urgente</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Button fullWidth onClick={handleFinish} className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  Finalizar e Enviar via WhatsApp <Send className="inline w-4 h-4 ml-2" />
                </Button>
                <button
                  onClick={handleBack}
                  className="text-brand-500 hover:text-brand-800 text-sm font-medium transition-colors py-2"
                >
                  Voltar para a etapa anterior
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};