import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, PLATFORM_ID, computed, inject, input, output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectFilterService } from '../../../core/services/project-filter.service';
import { ModalBackdropDirective } from '../../directives/modal-backdrop.directive';
import { Project } from '../../models/project.model';
import { extractYouTubeVideoId } from '../../utils/youtube.util';

@Component({
  selector: 'app-project-modal',
  imports: [ModalBackdropDirective],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly projectFilter = inject(ProjectFilterService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly project = input.required<Project>();
  readonly closeRequested = output<void>();

  // Trava o scroll da página por trás enquanto o modal está aberto — sem isso,
  // no mobile o toque pode "vazar" e rolar o conteúdo de fundo junto com o modal.
  ngOnInit(): void {
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  readonly videoEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const videoId = extractYouTubeVideoId(this.project().videoUrl);
    return videoId ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`) : null;
  });

  onTagClick(tag: string): void {
    this.projectFilter.filterByTag(tag);
    this.closeRequested.emit();
  }
}
