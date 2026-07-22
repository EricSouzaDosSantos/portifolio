import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PageScrollService } from '../../core/services/page-scroll.service';
import { ScrollService } from '../../core/services/scroll.service';
import { NAV_LINKS } from '../../shared/data/nav-links.data';
import { RESUME_FILE_URL } from '../../shared/data/resume.data';
import { NavLink } from '../../shared/models/nav-link.model';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  imports: [ThemeToggleComponent, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly scrollService = inject(ScrollService);
  protected readonly pageScroll = inject(PageScrollService);

  readonly navLinks: NavLink[] = NAV_LINKS;
  readonly resumeUrl = RESUME_FILE_URL;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onNavLinkClick(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.closeMenu();
  }
}
