import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { CERTIFICATIONS } from '../../../shared/data/certifications.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Certification } from '../../../shared/models/certification.model';

@Component({
  selector: 'app-certifications',
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  readonly certifications: Certification[] = CERTIFICATIONS;
}
