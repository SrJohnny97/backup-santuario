export interface Ritual {
  slug: string;
  title: string;
  description: string;
  videoFondo: string;
  audioAmbiente: string;
  steps: RitualStep[];
}

export interface RitualStep {
  name: string;
  duration: number;
  instruction: string;
}
