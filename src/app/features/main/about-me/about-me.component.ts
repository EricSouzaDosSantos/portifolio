import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectFilterService } from '../../../core/services/project-filter.service';
import { ScrollService } from '../../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { ABOUT_CONTENT } from '../../../shared/data/about-content.data';
import { STACK_GROUPS } from '../../../shared/data/stack-groups.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { AboutContent } from '../../../shared/models/about-content.model';
import { StackGroup } from '../../../shared/models/stack-group.model';

@Component({
  selector: 'app-about-me',
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  private readonly projectFilter = inject(ProjectFilterService);
  private readonly scrollService = inject(ScrollService);

  readonly about: AboutContent = ABOUT_CONTENT;
  readonly stackGroups: StackGroup[] = STACK_GROUPS;

  onSkillClick(skill: string): void {
    this.projectFilter.filterByTag(skill);
    this.scrollService.scrollToSection('projects');
  }
}
