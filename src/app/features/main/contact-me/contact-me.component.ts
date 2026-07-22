import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_ICONS } from '../../../shared/data/contact-icons.data';
import { PERSONAL_INFO } from '../../../shared/data/personal-info.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { PersonalInfo } from '../../../shared/models/personal-info.model';
import { SocialLink } from '../../../shared/models/social-link.model';

@Component({
  selector: 'app-contact-me',
  imports: [ScrollRevealDirective],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMeComponent {
  readonly contactIcons: SocialLink[] = CONTACT_ICONS;
  readonly personalInfo: PersonalInfo = PERSONAL_INFO;
}
