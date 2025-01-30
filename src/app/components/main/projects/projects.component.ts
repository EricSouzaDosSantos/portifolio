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
      video: '/assets/videos/projeto-teste.mp4',
      description: 'Um projeto teste que demonstra funcionalidades básicas.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      whatIDid: 'Implementei o front-end e a integração com a API.',
    },
    {
      title: 'Outro Projeto',
      image: '/my-animation.png',
      video: '/assets/videos/outro-projeto.mp4',
      description: 'Outro projeto demonstrativo com funcionalidades adicionais.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      whatIDid: 'Desenvolvi a autenticação e o sistema de armazenamento.',
    },
  ];

  selectedProject: any = null;
  selectedDetails: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.selectedProject = null;
    }
  }

  openDetails(project: any) {
    this.selectedDetails = project;
  }

  closeDetails(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.selectedDetails = null;
    }
  }
}
