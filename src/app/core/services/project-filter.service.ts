import { Injectable, signal } from '@angular/core';

function normalizeTag(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/**
 * Estado compartilhado do filtro de projetos por skill. Qualquer badge de
 * tecnologia no site (nas stacks do "Sobre mim", nos cards ou no modal de
 * projetos) pode chamar `filterByTag` para levar o usuário até a seção de
 * projetos já filtrada por aquela tecnologia.
 */
@Injectable({ providedIn: 'root' })
export class ProjectFilterService {
  readonly searchTerm = signal('');

  filterByTag(tag: string): void {
    this.searchTerm.set(tag);
  }

  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  clear(): void {
    this.searchTerm.set('');
  }

  matches(tags: string[], term: string): boolean {
    const query = normalizeTag(term);
    if (!query) {
      return true;
    }
    return tags.some((tag) => {
      const normalized = normalizeTag(tag);
      return normalized.includes(query) || query.includes(normalized);
    });
  }
}
