import { Component, HostListener, ElementRef } from '@angular/core';
import { NgStyle, NgClass, CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  imports: [NgStyle, NgClass, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  isBadgeVisible = false;
  lastScrollTop = 0;
  isModalVisible = false;
  selectedSkill = '';
  technologies: string[] = [];
  skills = [
    { name: 'Java', icon: 'fa-java', progress: 90 },
    { name: 'Angular', icon: 'fa-angular', progress: 30 },
    { name: 'JavaScript', icon: 'fa-js', progress: 60 },
    { name: 'Spring', icon: 'fa-java', progress: 80 },
    { name: 'SCSS', icon: 'fa-sass', progress: 40 },
    { name: 'HTML', icon: 'fa-html5', progress: 95 },
    { name: 'CSS', icon: 'fa-css3-alt', progress: 90 },
    { name: 'Git', icon: 'fa-git', progress: 85 },
    { name: 'AWS', icon: 'fa-aws', progress: 50 },
    { name: 'GitHub', icon: 'fa-github', progress: 70 }
  ];
  

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const badgeElement = this.el.nativeElement.querySelector('.badge-container');
    const skillsSection = this.el.nativeElement.querySelector('.skills-section');
    const screenHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      if (badgeElement) {
        const badgePosition = badgeElement.getBoundingClientRect().top;
        if (badgePosition < screenHeight) {
          this.isBadgeVisible = true;
        }
      }
    } else {
      if (badgeElement && badgeElement.classList.contains('visible')) {
        this.isBadgeVisible = false;
      }
    }

    if (skillsSection) {
      const skillsPosition = skillsSection.getBoundingClientRect().top;
      if (skillsPosition < screenHeight) {
        skillsSection.classList.add('visible');
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  openModal(skill: string): void {
    this.selectedSkill = skill;
    switch (skill) {
      case 'Java':
        this.technologies = ['Spring Boot',];
        break;
      case 'Angular':
        this.technologies = ['RxJS', 'NgRx', 'Typescript'];
        break;
      case 'JavaScript':
        this.technologies = ['Node.js', 'Express', 'React'];
        break;
      case 'Spring':
        this.technologies = ['Spring Security', 'Spring Boot', 'Spring Cloud', 'JPA', 'Hibernate', 'RESTful', 'Spring Web', 'Thymeleaf', 'RabbitMQ', 'Kafka'];
        break;
      case 'SCSS':
        this.technologies = ['CSS3', 'BEM', 'Flexbox'];
        break;
      case 'HTML':
        this.technologies = ['HTML5', 'SEO', 'Acessibilidade'];
        break;
      case 'CSS':
        this.technologies = ['CSS Grid', 'Flexbox', 'SASS'];
        break;
      case 'Git':
        this.technologies = [];
        break;
      case 'AWS':
        this.technologies = ['S3', 'EC2', 'Load Balancers', 'VPC', 'Security Groups', 'Route53'];
        break;
      case 'GitHub':
        this.technologies = ['Git', 'Actions'];
        break;
    }

    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
