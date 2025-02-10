import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  borderRadius: string = "0 0 10px 10px";
  isScrolling: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.borderRadius = this.menuOpen ? "0" : "0 0 10px 10px";
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Ajusta a posição para suavização
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      this.menuOpen = false;
    }, 500); // Aguarda a animação antes de fechar o menu
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolling = true;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 300);
  }

  private scrollTimeout: any;
}
