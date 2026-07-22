import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExperienceItemComponent } from '../../../shared/components/experience-item/experience-item.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { EXPERIENCES } from '../../../shared/data/experience.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Experience } from '../../../shared/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [SectionHeadingComponent, ExperienceItemComponent, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCES;
  readonly expandedIndex = signal(0);

  toggle(index: number): void {
    this.expandedIndex.update((current) => (current === index ? -1 : index));
  }
}
