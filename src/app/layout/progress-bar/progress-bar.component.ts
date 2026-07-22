import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageScrollService } from '../../core/services/page-scroll.service';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  protected readonly pageScroll = inject(PageScrollService);
}
