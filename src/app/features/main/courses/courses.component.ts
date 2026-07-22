import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { COURSES } from '../../../shared/data/courses.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Course } from '../../../shared/models/course.model';

@Component({
  selector: 'app-courses',
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  readonly courses: Course[] = COURSES;
  readonly totalHours: number = COURSES.reduce((sum, course) => sum + course.hours, 0);

  formatPeriod(course: Course): string {
    return course.startDate === course.endDate ? course.startDate : `${course.startDate} — ${course.endDate}`;
  }
}
