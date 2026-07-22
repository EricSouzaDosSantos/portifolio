export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  /** Marca a experiência atual, destacada na timeline. */
  current?: boolean;
  achievements: string[];
  /** Data de início no formato `AAAA-MM`, usada para calcular a duração automaticamente. */
  startDate: string;
  /** Data de término no formato `AAAA-MM`. Omitir quando `current` for true — a duração é calculada até o mês atual (fuso America/Sao_Paulo). */
  endDate?: string;
}
