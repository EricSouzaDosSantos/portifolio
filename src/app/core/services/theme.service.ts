import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';
const THEME_ATTRIBUTE = 'data-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);
    this.persistTheme(theme);
  }

  private readInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'light' ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    if (!this.isBrowser) {
      return;
    }
    this.document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }

  private persistTheme(theme: Theme): void {
    if (!this.isBrowser) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }
}
