import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';

const VISIBLE_CLASS = 'is-visible';
const INTERSECTION_THRESHOLD = 0.15;

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.reveal();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.elementRef.nativeElement.classList.toggle(VISIBLE_CLASS, entry.isIntersecting);
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.elementRef.nativeElement.classList.add(VISIBLE_CLASS);
  }
}
