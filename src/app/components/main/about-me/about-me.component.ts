import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  isBadgeVisible = false;
  lastScrollTop = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const badgeElement = this.el.nativeElement.querySelector('.badge-container');
    const skillsSection = this.el.nativeElement.querySelector('.skills-section');
    const screenHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Detecting scroll direction
    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      if (badgeElement) {
        const badgePosition = badgeElement.getBoundingClientRect().top;
        if (badgePosition < screenHeight) {
          this.isBadgeVisible = true;
        }
      }
    } else {
      // Scrolling up
      if (badgeElement && badgeElement.classList.contains('visible')) {
        this.isBadgeVisible = false;
      }
    }

    if (skillsSection) {
      const skillsPosition = skillsSection.getBoundingClientRect().top;
      if (skillsPosition < screenHeight) {
        skillsSection.classList.add('visible');
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
