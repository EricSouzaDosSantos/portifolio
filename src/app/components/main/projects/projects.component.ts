import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Projeto Teste',
      image: '/my-animation.png',
      video: '',
      description: 'Descrição do projeto teste.',
    },
    {
      title: 'Outro Projeto',
      image: '/my-animation.png',
      video: '',
      description: 'Descrição de outro projeto.',
    },
  ];

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.selectedProject = null;
    }
  }
}
