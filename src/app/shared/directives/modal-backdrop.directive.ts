import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appModalBackdrop]',
})
export class ModalBackdropDirective {
  @Output() appModalBackdrop = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.appModalBackdrop.emit();
    }
  }
}
