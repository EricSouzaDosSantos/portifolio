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
      video: '/fulldev-project.mp4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      alltechnologies: [],
      mainTechnologies: ['Angular', 'TypeScript', 'SCSS'],
      whatIDid: ['Desenvolvimento da API back-end com Java Spring Boot.', 'Deploy da API na AWS EC2 com configuração de VPC e Security Groups.', 'Configuração de Load Balancer para distribuir o tráfego.', 'Certificação SSL com ACM e domínio gerenciado pelo Route53.', 'Integração da API com o front-end para consumo de dados.', 'Liderança técnica da equipe, garantindo organização e entregas eficazes.'],
    },
    {
      title: 'Outro Projeto',
      image: '/my-animation.png',
      video: '/assets/videos/outro-projeto.mp4',
      description: 'Outro projeto demonstrativo com funcionalidades adicionais.',
      allTechnologies: [],
      mainTechnologies: ['Java', 'Spring'],
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