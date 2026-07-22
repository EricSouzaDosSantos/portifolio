import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, input, output } from '@angular/core';
import { ProjectFilterService } from '../../../core/services/project-filter.service';
import { Project } from '../../models/project.model';

const MAX_TILT_DEG = 7;

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  private readonly projectFilter = inject(ProjectFilterService);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly project = input.required<Project>();
  readonly selected = output<Project>();

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const style = this.elementRef.nativeElement.style;
    style.setProperty('--spot-x', `${px * 100}%`);
    style.setProperty('--spot-y', `${py * 100}%`);
    style.setProperty('--tilt-x', `${(0.5 - py) * MAX_TILT_DEG}deg`);
    style.setProperty('--tilt-y', `${(px - 0.5) * MAX_TILT_DEG}deg`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const style = this.elementRef.nativeElement.style;
    style.setProperty('--tilt-x', '0deg');
    style.setProperty('--tilt-y', '0deg');
  }

  onTagClick(event: Event, tag: string): void {
    event.stopPropagation();
    this.projectFilter.filterByTag(tag);
  }
}
