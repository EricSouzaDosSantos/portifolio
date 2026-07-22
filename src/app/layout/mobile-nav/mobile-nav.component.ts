import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NavLink } from '../../shared/models/nav-link.model';

@Component({
  selector: 'app-mobile-nav',
  imports: [],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavComponent {
  readonly isOpen = input.required<boolean>();
  readonly navLinks = input.required<NavLink[]>();

  readonly linkActivated = output<string>();
  readonly closeRequested = output<void>();

  onLinkClick(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    this.linkActivated.emit(sectionId);
  }
}
