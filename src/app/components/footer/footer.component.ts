import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gmail: string = 'ericsouzadossantos28@gmail.com'
  menuOpen: boolean = false;
  borderRadius: string = "0 0 10px 10px";
  isScrolling: boolean = false;

   scrollToSection(sectionId: string): void {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
      setTimeout(() => {
        this.menuOpen = false;
      }, 500);
    }

}
