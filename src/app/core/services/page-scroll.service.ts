import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const HEADER_SCROLLED_THRESHOLD_PX = 10;
const ACTIVE_SECTION_OFFSET_PX = 140;
const SECTION_SELECTOR = 'main section[id]';

/**
 * Estado de scroll da página inteira: progresso, se o header já rolou o
 * suficiente para ganhar fundo sólido, e qual seção está ativa (para
 * destacar o link correspondente na navegação).
 */
@Injectable({ providedIn: 'root' })
export class PageScrollService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly scrollProgress = signal(0);
  readonly headerScrolled = signal(false);
  readonly activeSectionId = signal<string | null>(null);

  private isUpdateScheduled = false;

  constructor() {
    if (!this.isBrowser) {
      return;
    }
    this.update();
    window.addEventListener('scroll', this.scheduleUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleUpdate, { passive: true });
  }

  private readonly scheduleUpdate = (): void => {
    if (this.isUpdateScheduled) {
      return;
    }
    this.isUpdateScheduled = true;
    requestAnimationFrame(() => {
      this.update();
      this.isUpdateScheduled = false;
    });
  };

  private update(): void {
    const scrollY = window.scrollY;
    this.headerScrolled.set(scrollY > HEADER_SCROLLED_THRESHOLD_PX);

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(scrollableHeight > 0 ? Math.min(100, (scrollY / scrollableHeight) * 100) : 0);

    this.activeSectionId.set(this.computeActiveSectionId());
  }

  private computeActiveSectionId(): string | null {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    let current = sections[0]?.id ?? null;

    for (const section of sections) {
      if (section.getBoundingClientRect().top - ACTIVE_SECTION_OFFSET_PX <= 0) {
        current = section.id;
      }
    }

    return current;
  }
}
