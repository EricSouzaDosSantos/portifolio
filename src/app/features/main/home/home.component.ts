import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';
import { HERO_CONTENT } from '../../../shared/data/hero-content.data';
import { RESUME_FILE_URL } from '../../../shared/data/resume.data';
import { HeroContent } from '../../../shared/models/hero-content.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly scrollService = inject(ScrollService);

  readonly hero: HeroContent = HERO_CONTENT;
  readonly resumeUrl = RESUME_FILE_URL;

  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    this.scrollService.scrollToSection(sectionId);
  }
}
