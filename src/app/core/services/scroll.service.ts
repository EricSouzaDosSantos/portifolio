import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EMPTY, Observable, fromEvent } from 'rxjs';

const FIXED_HEADER_OFFSET_PX = -80;

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly windowScrolled$: Observable<Event> = this.isBrowser
    ? fromEvent(window, 'scroll')
    : EMPTY;

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const targetY = section.getBoundingClientRect().top + window.scrollY + FIXED_HEADER_OFFSET_PX;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
}
