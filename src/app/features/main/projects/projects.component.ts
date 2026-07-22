import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProjectFilterService } from '../../../core/services/project-filter.service';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { ProjectModalComponent } from '../../../shared/components/project-modal/project-modal.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { PROJECTS } from '../../../shared/data/projects.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Project } from '../../../shared/models/project.model';

const POPULAR_TAGS_LIMIT = 12;

function rankTagsByFrequency(projects: Project[]): string[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tag of project.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, POPULAR_TAGS_LIMIT)
    .map(([tag]) => tag);
}

@Component({
  selector: 'app-projects',
  imports: [SectionHeadingComponent, ProjectCardComponent, ProjectModalComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly projectFilter = inject(ProjectFilterService);

  readonly projects: Project[] = PROJECTS;
  readonly popularTags: string[] = rankTagsByFrequency(PROJECTS);
  readonly activeProject = signal<Project | null>(null);

  readonly searchTerm = this.projectFilter.searchTerm;

  readonly filteredProjects = computed(() => {
    const term = this.searchTerm();
    if (!term.trim()) {
      return this.projects;
    }
    return this.projects.filter((project) => this.projectFilter.matches(project.tags, term));
  });

  openProject(project: Project): void {
    this.activeProject.set(project);
  }

  closeProject(): void {
    this.activeProject.set(null);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.projectFilter.setSearchTerm(value);
  }

  onTagFilterClick(tag: string): void {
    if (this.searchTerm().trim().toLowerCase() === tag.toLowerCase()) {
      this.projectFilter.clear();
      return;
    }
    this.projectFilter.filterByTag(tag);
  }

  isActiveTag(tag: string): boolean {
    return this.searchTerm().trim().toLowerCase() === tag.toLowerCase();
  }

  clearFilter(): void {
    this.projectFilter.clear();
  }
}
