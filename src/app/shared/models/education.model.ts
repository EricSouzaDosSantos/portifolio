export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  inProgress?: boolean;
  /** Data de início no formato `AAAA-MM`, usada para calcular os semestres automaticamente. */
  startDateISO: string;
  /** Data de término no formato `AAAA-MM`. Ignorada quando `inProgress` for true — os semestres são calculados até o mês atual (fuso America/Sao_Paulo). */
  endDateISO?: string;
}
