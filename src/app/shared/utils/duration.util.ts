const SAO_PAULO_TIMEZONE = 'America/Sao_Paulo';

function yearMonthNow(timeZone: string, referenceDate: Date): { year: number; month: number } {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone, year: 'numeric', month: 'numeric' }).formatToParts(referenceDate);
  const year = Number(parts.find((part) => part.type === 'year')?.value);
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  return { year, month };
}

function parseYearMonth(isoYearMonth: string): { year: number; month: number } {
  const [year, month] = isoYearMonth.split('-').map(Number);
  return { year, month };
}

/** Meses decorridos entre `startIso` (formato `AAAA-MM`) e `endIso`, ou até a data atual em America/Sao_Paulo quando `endIso` não é informado. Contagem inclusiva (o mês de início conta como 1). */
export function monthsElapsed(startIso: string, endIso?: string, referenceDate: Date = new Date()): number {
  const start = parseYearMonth(startIso);
  const end = endIso ? parseYearMonth(endIso) : yearMonthNow(SAO_PAULO_TIMEZONE, referenceDate);
  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  return Math.max(totalMonths, 1);
}

export function formatMonthsAsDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const yearLabel = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
  const monthLabel = remainingMonths > 0 ? `${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}` : '';

  if (yearLabel && monthLabel) {
    return `${yearLabel} e ${monthLabel}`;
  }
  return yearLabel || monthLabel || '1 mês';
}

/** Semestres (blocos de 6 meses) decorridos entre `startIso` e `endIso`/data atual. */
export function semestersElapsed(startIso: string, endIso?: string, referenceDate: Date = new Date()): number {
  return Math.max(Math.ceil(monthsElapsed(startIso, endIso, referenceDate) / 6), 1);
}
