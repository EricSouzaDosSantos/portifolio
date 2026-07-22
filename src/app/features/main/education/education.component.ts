import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { EDUCATION } from '../../../shared/data/education.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Education } from '../../../shared/models/education.model';
import { semestersElapsed } from '../../../shared/utils/duration.util';

interface EducationWithSemesters extends Education {
  semesterLabel: string;
}

function buildSemesterLabel(item: Education): string {
  if (!item.inProgress) {
    return 'Concluído';
  }
  const semesters = semestersElapsed(item.startDateISO);
  return `${semesters}º semestre (atual)`;
}

@Component({
  selector: 'app-education',
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  readonly education: EducationWithSemesters[] = EDUCATION.map((item) => ({
    ...item,
    semesterLabel: buildSemesterLabel(item),
  }));
}
