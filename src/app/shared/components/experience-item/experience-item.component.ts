import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { formatMonthsAsDuration, monthsElapsed } from '../../utils/duration.util';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  readonly experience = input.required<Experience>();
  readonly isOpen = input(false);
  readonly toggled = output<void>();

  readonly duration = computed(() => {
    const experience = this.experience();
    return formatMonthsAsDuration(monthsElapsed(experience.startDate, experience.endDate));
  });
}
