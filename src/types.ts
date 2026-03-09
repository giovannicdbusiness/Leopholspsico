export interface TriageData {
  name: string;
  age: string;
  reason: string;
  previousTherapy: 'Sim' | 'Não' | null;
  bestTime: string;
  urgency: number; // 1 to 5
}

export type Step = 1 | 2 | 3 | 4;

export const REASONS = [
  "Ansiedade",
  "Depressão",
  "Relacionamentos",
  "Carreira",
  "Autoconhecimento",
  "Outro"
];

export const TIME_SLOTS = [
  "Manhã (08h - 12h)",
  "Tarde (13h - 18h)",
  "Noite (18h - 21h)",
  "Sábados"
];